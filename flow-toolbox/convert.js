#!/usr/bin/env node
// @flow

const fs = require("fs-extra");
const glob = require("glob-promise");
const flowgen = require("../../../../../desktop/projects/pending/flowgen");

function originalName(name) {
    if (name.includes("__")) {
        const split = name.split("__");
        const scope = `@${split[0]}`;
        const package = split[1];
        return `${scope}/${package}`;
    }
    return name;
}

function fileName(inputName) {
    const name = originalName(inputName);
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

async function main() {
    await fs.ensureDir("../flow-types/logs");
    const types = await fs.readdir("../types");
    for (const type of types) {
        const name = originalName(type);
        const flowTypedExists = await glob(
            `../flow-typed/definitions/npm/${name}_v*`
        );
        if (flowTypedExists[0]) {
            console.log(`skip: ${name}, flow-typed exists`);
            await fs.remove(`../flow-types/types/${name}_vx.x.x`);
            continue;
        }
        const convertationExists = await fs.exists(
            `../flow-types/types/${name}_vx.x.x/flow_v0.35.x-/${fileName(
                name
            )}.js`
        );
        console.log(
            `../flow-types/types/${name}_vx.x.x/flow_v0.35.x-/${fileName(
                name
            )}.js`
        );
        if (convertationExists) {
            console.log(`skip: ${name}, already converted`);
            continue;
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
}

main();
