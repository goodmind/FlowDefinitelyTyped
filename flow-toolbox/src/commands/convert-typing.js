#!/usr/bin/env node --max-old-space-size=4096
//@flow

const fs = require("fs-extra");
const ts = require("typescript");
const execa = require("execa");
const glob = require("glob-promise");
const path = require("path");
const flowgen = require("../../../../../../../desktop/projects/pending/flowgen");
const infojson = require("../../../flow-types/info.json");
const chalk = require("chalk");
const {
  fileName,
  safeFlowGenDiff,
  runFlowGen,
  getPackageFolder,
  originalName,
  definitelyTypedName,
  copyTests,
  label
} = require("../utils");

const baseDir = path.join(__dirname, "../../..");

async function convertTyping(name) {
  const type = definitelyTypedName(name);
  const flowTypedExists = await glob(
    `${baseDir}/flow-typed/definitions/npm/${name}_v*`
  );
  flowgen.compiler.reset();
  const compilerHost = {
    fileExists: () => true,
    getCanonicalFileName: filename => filename,
    getCurrentDirectory: () => "",
    getDefaultLibFileName: () => require.resolve("typescript/lib/lib.d.ts"),
    getNewLine: () => "\n",
    getSourceFile: type => {
      type = type.slice(0, -3);
      console.log(label(chalk.bgRed, type), "loading source file...");
      const code = fs
        .readFileSync(`${baseDir}/types/${type}/index.d.ts`)
        .toString();
      const hasHeader =
        code.includes(`declare module '${name}'`) ||
        code.includes(`declare module "${name}"`);
      const template = hasHeader
        ? code
        : `
declare module '${name}' {
  ${code}
};
`;
      return ts.createSourceFile(name, template, ts.ScriptTarget.Latest, false);
    },
    readFile: () => null,
    useCaseSensitiveFileNames: () => true,
    writeFile: () => null
  };
  const program = ts.createProgram(
    [type],
    {
      noResolve: true,
      noLib: true,
      target: ts.ScriptTarget.Latest
    },
    compilerHost
  );
  // if (flowTypedExists[0]) {
  //     console.log(`skip: ${name}, flow-typed exists`);
  //     await fs.remove(`../flow-types/types/${name}_vx.x.x`);
  //     return;
  // }
  const typescriptFile = `${baseDir}/types/${type}/index.d.ts`;
  if (!infojson[name]) infojson[name] = {};
  const previousCommitHash = infojson[name].typescriptCommitHash;
  const commitHash = JSON.parse(
    await execa.stdout("git", ["log", "-1", '--pretty="%H"', typescriptFile])
  );
  const folder = await getPackageFolder(name);
  const isTypescriptUpdated = previousCommitHash !== commitHash;
  console.log(
    label(chalk.bgWhite, name),
    "typescript updated?",
    isTypescriptUpdated
  );
  if (isTypescriptUpdated) {
    if (!infojson[name]) infojson[name] = {};
    infojson[name].typescriptCommitHash = commitHash;
  }
  const unpluggedExists = await glob(
    `${baseDir}/flow-types/unplugged/${name}_v*/flow_v*`
  );
  if (!isTypescriptUpdated && unpluggedExists[0]) {
    console.log(
      label(chalk.bgWhite, name),
      label(chalk.bgBlue, "SKIP"),
      `unplugged`
    );
    return;
  }
  const convertationExists = await fs.exists(
    `${baseDir}/flow-types/types/${name}_vx.x.x/flow_v0.25.x-/${fileName(
      name
    )}.js`
  );
  if (!isTypescriptUpdated && convertationExists) {
    console.log(
      label(chalk.bgWhite, name),
      label(chalk.bgBlue, "SKIP"),
      `already converted`
    );
    return;
  }

  console.log(label(chalk.bgWhite, name), `converting...`);
  //console.log(label(chalk.bgWhite, name), `has header?`, hasHeader);
  const sourceFile = program.getSourceFile(`${type}.ts`);
  console.log(type);
  if (isTypescriptUpdated) {
    if (!infojson[name]) infojson[name] = {};
    infojson[name].typescriptCommitHash = commitHash;
  }
  if (isTypescriptUpdated && unpluggedExists[0]) {
    const oldSource = await execa.stdout("git", [
      "show",
      `${previousCommitHash}:types/${type}/index.d.ts`
    ]);
    const hasHeader =
      oldSource.includes(`declare module '${name}'`) ||
      oldSource.includes(`declare module "${name}"`);
    const template = hasHeader
      ? oldSource
      : `
declare module '${name}' {
  ${oldSource}
};
`;
    let oldFile = flowgen.beautify(
      flowgen.compiler.compileDefinitionString(template).code
    );
    await fs.ensureDir(folder);
    const structuredPatch = await safeFlowGenDiff(name, sourceFile, oldFile);
    console.log(structuredPatch);
    if (structuredPatch.conflict) {
      await fs.writeFile(
        `${unpluggedExists[0]}/${fileName(name)}.js`,
        structuredPatch.result.join("\n")
      );
      console.log(
        label(chalk.bgWhite, name),
        `merged, please resolve conflicts`
      );
      // await fs.outputJSON(`${baseDir}/flow-types/info.json`, infojson, {
      //   spaces: 2
      // });
      return;
    } else {
      console.log(label(chalk.bgWhite, name), "no conflict");
      return;
    }
    // let lines = [];
    // for (const hunk of structuredPatch.hunks) {
    //   if (hunk.conflict) {
    //     console.log("conflict");
    //   } else {
    //     lines = lines.concat(hunk.lines);
    //   }
    // }
    // console.log(lines.join("\n"));
    // await fs.writeFile(
    //   `${folder}/${name}.patch`,
    //   await safeFlowGenDiff(name, sourceFile)
    // );
  }
  await runFlowGen(name, sourceFile, infojson);
  await copyTests(type, infojson);
  console.log(label(chalk.bgWhite, name), `converted`);
  await fs.outputJSON(`${baseDir}/flow-types/info.json`, infojson, {
    spaces: 2
  });
}

if (require.main === module) {
  convertTyping(process.argv[2]);
} else {
  module.exports = { convertTyping };
}
