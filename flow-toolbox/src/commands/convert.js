#!/usr/bin/env node --max-old-space-size=4096
//@flow

const fs = require("fs-extra");
const ts = require("typescript");
const diff = require("diff");
const execa = require("execa");
const path = require("path");
const glob = require("glob-promise");
const flowgen = require("../../../../../../../desktop/projects/pending/flowgen");
const infojson = require("../../../flow-types/info.json");
const chalk = require("chalk");
const {
  getPackageFolder,
  safeFlowGenDiff,
  label,
  fileName,
  runFlowGen,
  originalName,
  copyTests
} = require("../utils");

const baseDir = path.join(__dirname, "../../..");

const skipList = ["chrome", "activex-libreoffice"];

async function main(argv) {
  await fs.ensureDir(`${baseDir}/flow-types/logs`);
  const types = await fs.readdir(`${baseDir}/types`);
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
      const name = originalName(type);
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
    types,
    {
      noResolve: true,
      noLib: true,
      target: ts.ScriptTarget.Latest
    },
    compilerHost
  );

  for (const type of types) {
    const name = originalName(type);
    if (skipList.includes(name)) continue;

    const flowTypedExists = await glob(
      `${baseDir}/flow-typed/definitions/npm/${name}_v*`
    );
    if (flowTypedExists[0]) {
      if (argv.verbose)
        console.log(
          label(chalk.bgWhite, name),
          label(chalk.bgBlue, "SKIP"),
          `flow-typed exists`
        );
      try {
        await fs.remove(`${baseDir}/flow-types/types/${name}_vx.x.x`);
      } catch {}
      continue;
    }
    const typescriptFile = `${baseDir}/types/${type}/index.d.ts`;
    if (!infojson[name]) infojson[name] = {};
    const previousCommitHash = infojson[name].typescriptCommitHash;
    const commitHash = JSON.parse(
      await execa.stdout("git", ["log", "-1", '--pretty="%H"', typescriptFile])
    );
    const unpluggedExists = await glob(
      `${baseDir}/flow-types/unplugged/${name}_v*/flow_v*`
    );
    const convertationExists = await fs.exists(
      `${baseDir}/flow-types/types/${name}_vx.x.x/flow_v0.25.x-/${fileName(
        name
      )}.js`
    );
    const folder = await getPackageFolder(name);
    const isTypescriptUpdated = previousCommitHash !== commitHash;
    if (argv.verbose)
      console.log(
        label(chalk.bgWhite, name),
        `is typescript updated?`,
        isTypescriptUpdated
      );
    if (isTypescriptUpdated) {
      infojson[name].typescriptCommitHash = commitHash;
    }
    if (!isTypescriptUpdated && unpluggedExists[0]) {
      if (argv.verbose)
        console.log(
          label(chalk.bgWhite, name),
          label(chalk.bgBlue, "SKIP"),
          `unplugged`
        );
      continue;
    }
    if (!isTypescriptUpdated && convertationExists) {
      if (argv.verbose)
        console.log(
          label(chalk.bgWhite, name),
          label(chalk.bgBlue, "SKIP"),
          `already converted`
        );
      continue;
    }

    if (argv.verbose) console.log(label(chalk.bgWhite, name), `converting...`);
    const sourceFile = program.getSourceFile(type);
    // if (argv.verbose)
    //   console.log(label(chalk.bgWhite, name), `has header?`, hasHeader);
    if (isTypescriptUpdated) {
      if (!infojson[name]) infojson[name] = {};
      infojson[name].typescriptCommitHash = commitHash;
    }
    if (isTypescriptUpdated && unpluggedExists[0]) {
      await fs.ensureDir(folder);
      await fs.writeFile(
        `${folder}/${name}.patch`,
        await safeFlowGenDiff(name, sourceFile)
      );
      continue;
    }
    await runFlowGen(name, sourceFile, infojson);
    await copyTests(type, infojson);
    console.log(label(chalk.bgWhite, name), `converted`);
  }
  await fs.outputJSON(`${baseDir}/flow-types/info.json`, infojson, {
    spaces: 2
  });
}

if (require.main === module) {
  main();
} else {
  module.exports = { main };
}
