#!/usr/bin/env node --max-old-space-size=4096
//@flow

const fs = require("fs-extra");
const glob = require("glob-promise");
const flowgen = require("../../../../../desktop/projects/pending/flowgen");

function originalName(name) {
    if (name.includes("@")) {
        const split = name.split("/");
        const scope = `${split[0].replace("@", "")}`;
        const pkg = split[1];
        return `${scope}__${pkg}`;
    }
    return name;
}

function fileName(name) {
    if (name.includes("@")) {
        const split = name.split("/");
        const fileName = split[1].trim();
        return fileName;
    }
    return name;
}

async function exportForFlowTyped(moduleName, output) {
    const folder = "../flow-types/types/" + moduleName + "_vx.x.x";
    const outputFile =
        folder + "/flow_v0.35.x-/" + fileName(moduleName) + ".js";

    const testfilePath = folder + "/test_" + fileName(moduleName) + ".js";

    await fs.ensureDir(folder + "/flow_v0.35.x-");
    await fs.writeFile(testfilePath, "");
    await fs.writeFile(outputFile, output);

    return testfilePath;
}

async function runFlowGen(name, code, hasHeader) {
    const template = hasHeader
        ? code
        : `
declare module '${name}' {
  ${code}
};
`;
    const originalConsoleLog = console.log;
    const originalConsoleWarn = console.warn;
    const originalConsoleError = console.error;
    //$FlowFixMe
    console.log = console.warn = console.error = (...data) => {
        fs.ensureFileSync(`../flow-types/logs/${name}/stdout.log`);
        fs.appendFileSync(
            `../flow-types/logs/${name}/stdout.log`,
            data.join("\n"),
            {
                encoding: "utf8"
            }
        );
    };
    try {
        const result = flowgen.compiler.compileDefinitionString(template);
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
        await fs.ensureFile(`../flow-types/logs/${name}/err.log`);
        await fs.writeFile(
            `../flow-types/logs/${name}/err.log`,
            err.toString()
        );
        console.error(err);
    }
}

async function copyTests(type, name) {
    try {
        const code = await fs.readFile(`../types/${type}/${type}-tests.ts`, {
            encoding: "utf8"
        });
        const testfilePath = `../flow-types/types/${name}_vx.x.x/test_${fileName(
            name
        )}.js`;
        await fs.writeFile(testfilePath, code);
    } catch (err) {
        console.error(err);
    }
}

async function convertTyping(name) {
    const type = originalName(name);
    await copyTests(type, name);
    const flowTypedExists = await glob(
        `../flow-typed/definitions/npm/${name}_v*`
    );
    if (flowTypedExists[0]) {
        console.log(`skip: ${name}, flow-typed exists`);
        await fs.remove(`../flow-types/types/${name}_vx.x.x`);
        return;
    }
    const convertationExists = await fs.exists(
        `../flow-types/types/${name}_vx.x.x/flow_v0.35.x-/${fileName(name)}.js`
    );
    console.log(
        `../flow-types/types/${name}_vx.x.x/flow_v0.35.x-/${fileName(name)}.js`
    );
    if (convertationExists) {
        console.log(`skip: ${name}, already converted`);
        return;
    }

    console.log(`converting ${name}...`);
    const code = await fs.readFile(`../types/${type}/index.d.ts`, {
        encoding: "utf8"
    });
    const hasHeader =
        code.includes(`declare module '${name}'`) ||
        code.includes(`declare module "${name}"`);
    console.log(`${name} has header?`, hasHeader);
    await runFlowGen(name, code, hasHeader);
    console.log(`${name} converted`);
}

convertTyping(process.argv[2]);
