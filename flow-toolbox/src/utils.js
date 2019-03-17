const fs = require("fs-extra");
const ts = require("typescript");
const path = require("path");
const glob = require("glob-promise");
const diff = require("node-diff3");
const ErrorStackParser = require("error-stack-parser");
const flowgen = require("@goodmind/flowgen");
const baseDir = path.join(__dirname, "../..");
const chalk = require("chalk");

const builtInModules = require("module").builtinModules;

const label = (chalk, label) => chalk.black(` ${label} `);

function definitelyTypedName(name) {
  if (name.includes("@")) {
    const split = name.split("/");
    const scope = `${split[0].replace("@", "")}`;
    const pkg = split[1];
    return `${scope}__${pkg}`;
  }
  return name;
}

function fileName(inputName) {
  const name = originalName(inputName);
  if (name.includes("@")) {
    const split = name.split("/");
    const newName = split[1].trim();
    return newName;
  }
  return name;
}

function convertSourceFile(code, name) {
  const special = ["arcgis-js-api", "node"];
  try {
    const hasHeader =
      code.includes(`declare module '${name}'`) ||
      code.includes(`declare module "${name}"`) ||
      code.includes(`declare module ${name}`);
    const template =
      hasHeader || special.includes(name)
        ? code
        : `
declare module '${name}' {
  ${code}
};
`;
    const { transformed } = ts.transform(
      ts.createSourceFile(name, template, ts.ScriptTarget.Latest, false),
      flowgen.compiler.getTransformers()
    );
    const sourceFile = transformed[0];
    // function traverseNode(node) {
    //   switch (node.kind) {
    //     case ts.SyntaxKind.ModuleDeclaration:
    //       if (node.name.escapedText !== name) {
    //         const thisNode = node;
    //         if (node && node.parent && node.parent.statements) {
    //           node.parent.statements = node.parent.statements.filter(
    //             el => el !== thisNode
    //           );
    //           sourceFile.statements.unshift(thisNode);
    //         }
    //       }
    //     default:
    //     //console.log("unknown node", ts.SyntaxKind[node.kind]);
    //   }
    //
    // }
    // console.log(sourceFile.statements);
    // traverseNode(sourceFile);
    const nodes = [];
    if (
      sourceFile.statements[0].body &&
      sourceFile.statements[0].body.statements
    ) {
      function getName(node) {
        return node.name.text || node.name.escapedText;
      }
      const body = ts.getMutableClone(sourceFile.statements[0].body);
      body.statements = body.statements.filter(node => {
        if (special.includes(name)) return true;
        if (
          node.kind === ts.SyntaxKind.ModuleDeclaration &&
          (node.flags & ts.NodeFlags.Namespace) === 0 &&
          getName(node) !== name
        ) {
          if (body.statements) {
            nodes.push(node);
            return false;
          }
        }
        if (
          node.kind === ts.SyntaxKind.ModuleDeclaration &&
          (node.flags & ts.NodeFlags.GlobalAugmentation) ===
            ts.NodeFlags.GlobalAugmentation
        ) {
          if (body.statements) {
            nodes.push(node);
            return false;
          }
        }
        return true;
      });
      sourceFile.statements[0].body = body;
    }
    const modifiedFile = ts.getMutableClone(sourceFile);
    nodes.forEach(node => modifiedFile.statements.unshift(node));
    return modifiedFile;
  } catch (err) {
    console.log(label(chalk.bgWhite, name), label(chalk.bgRed, "ERR"), err);
    async function sendErrors() {
      await fs.ensureFile(`${baseDir}/flow-types/logs/${name}/err.log`);
      await fs.writeFile(
        `${baseDir}/flow-types/logs/${name}/err.log`,
        err.toString()
      );
    }
    sendErrors();
  }
}

async function runFlowGen(name, sourceFile, infojson) {
  if (infojson[name]) {
    delete infojson[name].stdout;
    delete infojson[name].err;
  }
  const originalConsoleLog = console.log;
  const originalConsoleWarn = console.warn;
  const originalConsoleError = console.error;
  //$FlowFixMe
  console.log = console.warn = console.error = (...data) => {
    fs.ensureFileSync(`${baseDir}/flow-types/logs/${name}/stdout.log`);
    fs.appendFileSync(
      `${baseDir}/flow-types/logs/${name}/stdout.log`,
      data.join("\n"),
      {
        encoding: "utf8"
      }
    );
  };
  let unformatted;
  let newAst = { imports: [] };
  try {
    flowgen.compiler.reset({
      moduleExports: false
    });
    const code = flowgen.compiler.compile(sourceFile);
    unformatted = code;
    newAst = sourceFile;
    const result = flowgen.beautify(code);
    //$FlowFixMe
    console.log = originalConsoleLog;
    //$FlowFixMe
    console.warn = originalConsoleWarn;
    //$FlowFixMe
    console.error = originalConsoleError;
    await exportForFlowTyped(name, result);
  } catch (err) {
    //$FlowFixMe
    console.log = originalConsoleLog;
    //$FlowFixMe
    console.warn = originalConsoleWarn;
    //$FlowFixMe
    console.error = originalConsoleError;
    console.log(
      label(chalk.bgWhite, name),
      label(chalk.bgRed, "ERR"),
      err.name
    );
    console.error(label(chalk.bgWhite, name), label(chalk.bgRed, "ERR"), err);
    try {
      console.log(ErrorStackParser.parse(err)[0].fileName.includes("prettier"));
    } catch {}
    await fs.ensureFile(`${baseDir}/flow-types/logs/${name}/err.log`);
    await fs.writeFile(
      `${baseDir}/flow-types/logs/${name}/err.log`,
      err.toString()
    );
    if (unformatted) await exportForFlowTyped(name, unformatted, "unformatted");
  }
  let deps = new Map();
  for (const dep of newAst.imports) {
    const split = dep.text.split("/");
    let pkg = split[0];
    if (pkg.startsWith("@")) {
      pkg += `/${split[1]}`;
    }
    if (pkg === name) continue;
    const moduleExists = builtInModules.includes(pkg);
    const packageExists = await fs.exists(
      `${baseDir}/types/${definitelyTypedName(pkg)}`
    );
    const flowTypedExists = !!(await glob(
      `${baseDir}/flow-typed/definitions/npm/${pkg}_v*`
    ))[0];
    deps.set(pkg, {
      pkg,
      packageExists,
      flowTypedExists,
      moduleExists
    });
  }
  console.log(label(chalk.bgWhite, name), label(chalk.bgGreen, "DEPS"));
  for (const [, dep] of deps) {
    console.log(
      label(chalk.bgWhite, name),
      label(chalk.bgGreen, dep.pkg),
      "package?",
      dep.packageExists,
      "flow-typed?",
      dep.flowTypedExists,
      "node?",
      dep.moduleExists
    );
    if (!dep.packageExists && !dep.flowTypedExists && !dep.moduleExists) {
      console.log(
        label(chalk.bgWhite, name),
        "TODO: Check ",
        label(chalk.bgGreen, dep.pkg),
        " with unpkg.com"
      );
    }
  }
  const stdoutExists = await fs.exists(
    `${baseDir}/flow-types/logs/${name}/stdout.log`
  );
  const errExists = await fs.exists(
    `${baseDir}/flow-types/logs/${name}/err.log`
  );
  if (stdoutExists) {
    if (!infojson[name]) infojson[name] = {};
    infojson[name].stdout = true;
  }
  if (errExists) {
    if (!infojson[name]) infojson[name] = {};
    infojson[name].err = true;
  }
}

function originalName(name) {
  if (name.includes("__")) {
    const split = name.split("__");
    const scope = `@${split[0]}`;
    const package = split[1];
    return `${scope}/${package}`;
  }
  return name;
}

async function getPackageFolder(inputName) {
  const name = originalName(inputName);
  const unformattedFolder = `${baseDir}/flow-types/unformatted/${name}_vx.x.x`;
  const unpluggedFolder = `${baseDir}/flow-types/unplugged/${name}_vx.x.x`;
  const typesFolder = `${baseDir}/flow-types/types/${name}_vx.x.x`;
  const isUnformatted = await fs.exists(unformattedFolder);
  const isTypes = await fs.exists(typesFolder);
  const isUnplugged = await fs.exists(unpluggedFolder);
  let folder = typesFolder;
  if (isUnplugged) {
    folder = unpluggedFolder;
  } else if (isUnformatted) {
    folder = unformattedFolder;
  } else if (isTypes) {
    folder = typesFolder;
  } else {
    folder = typesFolder;
  }
  return folder;
}

async function copyTests(type, infojson) {
  const name = originalName(type);
  console.log(label(chalk.bgWhite, name), "copy tests");
  const folder = await getPackageFolder(name);
  try {
    const code = await fs.readFile(
      `${baseDir}/types/${type}/${type}-tests.ts`,
      {
        encoding: "utf8"
      }
    );
    const testfilePath = `${folder}/test_${fileName(name)}.js`;
    await fs.writeFile(testfilePath, code);
  } catch (err) {
    console.error(err);
    if (!infojson[name]) infojson[name] = {};
    infojson[name].testNotFound = true;
  }
}

async function exportForFlowTyped(moduleName, output, dir = "types") {
  const folder = `${baseDir}/flow-types/${dir}/${moduleName}_vx.x.x`;
  const outputFile = folder + "/flow_v0.25.x-/" + fileName(moduleName) + ".js";

  const testfilePath = folder + "/test_" + fileName(moduleName) + ".js";

  await fs.ensureDir(folder + "/flow_v0.25.x-");
  await fs.writeFile(testfilePath, "");
  await fs.writeFile(outputFile, output);

  return testfilePath;
}

async function safeFlowGenDiff(name, sourceFile, commonAncestor) {
  let theirs;
  const folder = await getPackageFolder(name);
  const newName = `${folder}/flow_v0.25.x-/${fileName(name)}.js`;
  const mine = await fs.readFile(newName, { encoding: "utf8" });
  try {
    flowgen.compiler.reset();
    const code = flowgen.compiler.compile(sourceFile);
    if (folder.includes("unformatted")) {
      theirs = code;
    } else {
      theirs = flowgen.beautify(code);
    }
  } catch (err) {
    theirs = mine;
    console.error("Diff failed");
    console.error(err);
  }
  return diff.merge(
    mine.split("\n"),
    commonAncestor.split("\n"),
    theirs.split("\n")
  );
}

async function bfs(rootDir) {
  const queue = [];
  const files = [];
  queue.push(rootDir);
  let current;
  while (queue.length) {
    current = queue.shift();
    try {
      const dir = await fs.promises.readdir(current, { withFileTypes: true });
      for (const file of dir) {
        if (file.isDirectory()) {
          queue.push(path.join(current, file.name));
        } else {
          if (!file.name.endsWith(".d.ts")) continue;
          files.push(path.join(current, file.name));
        }
      }
    } catch {
      files.push(current);
    }
  }
  return files;
}

module.exports = {
  convertSourceFile,
  label,
  fileName,
  definitelyTypedName,
  runFlowGen,
  safeFlowGenDiff,
  copyTests,
  originalName,
  getPackageFolder,
  exportForFlowTyped,
  bfs
};
