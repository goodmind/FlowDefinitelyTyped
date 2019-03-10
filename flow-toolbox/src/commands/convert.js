#!/usr/bin/env node --max-old-space-size=8192
//@flow

const fs = require("fs-extra");
const ts = require("typescript");
const diff = require("diff");
const execa = require("execa");
const path = require("path");
const glob = require("glob-promise");
const flowgen = require("@goodmind/flowgen");
const infojson = require("../../../flow-types/info.json");
const chalk = require("chalk");
const {
  convertSourceFile,
  getPackageFolder,
  safeFlowGenDiff,
  label,
  fileName,
  runFlowGen,
  originalName,
  copyTests
} = require("../utils");

const baseDir = path.join(__dirname, "../../..");

const skipList = [
  ".DS_Store",
  "chrome",
  "activex-libreoffice",
  "echarts",
  "jsts",
  "ej.web.all", // Stack overflow
  "ignite-ui", // Stack overflow
  "office-js", // Stack overflow
  "arcgis-js-api", // Stack overflow
  "office-js-preview", // Stack overflow
  "titanium", // Stack overflow
  "winrt-uwp", // Stack overflow
  "winrt" // Stack overflow
];

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
      return convertSourceFile(code, name);
    },
    readFile: () => null,
    useCaseSensitiveFileNames: () => true,
    writeFile: () => null
  };
  const customCompilerHost = ts.createCompilerHost({}, true);
  const oldGetSourceFile = customCompilerHost.getSourceFile.bind(
    customCompilerHost
  );
  customCompilerHost.getSourceFile = (file, version) => {
    if (file.startsWith(`${baseDir}/types`)) {
      const type = file.split(`${baseDir}/types/`)[1].split("/")[0];

      const name = originalName(type);
      console.log(label(chalk.bgRed, name), "loading source file...");
      const code = ts.sys.readFile(file);
      const sourceFile = convertSourceFile(code, name);
      //console.log(sourceFile);
      return sourceFile;
    }
    return oldGetSourceFile(file, version);
  };
  const program = ts.createProgram(
    types
      .filter(name => !skipList.includes(name))
      .map(type => `${baseDir}/types/${type}/index.d.ts`),
    {
      //noResolve: true,
      noLib: true,
      target: ts.ScriptTarget.Latest
    },
    customCompilerHost
  );
  flowgen.compiler.setChecker(program.getTypeChecker());

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
    const sourceFile = program.getSourceFile(typescriptFile);
    // if (argv.verbose)
    //   console.log(label(chalk.bgWhite, name), `has header?`, hasHeader);
    if (isTypescriptUpdated) {
      if (!infojson[name]) infojson[name] = {};
      infojson[name].typescriptCommitHash = commitHash;
    }
    if (isTypescriptUpdated && unpluggedExists[0]) {
      const oldSource = await execa.stdout("git", [
        "show",
        `${previousCommitHash}:types/${type}/index.d.ts`
      ]);
      const templateSourceFile = convertSourceFile(oldSource, name);
      flowgen.compiler.reset();
      let oldFile = flowgen.beautify(
        flowgen.compiler.compile(templateSourceFile)
      );
      await fs.ensureDir(folder);
      const structuredPatch = await safeFlowGenDiff(name, sourceFile, oldFile);
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
        continue;
      } else {
        console.log(label(chalk.bgWhite, name), "no conflict");
        continue;
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
