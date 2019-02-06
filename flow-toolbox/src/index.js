const fs = require("fs-extra");
const flowgen = require("../../../../../../desktop/projects/pending/flowgen");

async function runFlowGen(name, code, hasHeader, infojson) {
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
    let unformatted;
    try {
        const code = flowgen.compiler.compileDefinitionString(template);
        unformatted = code;
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
        await fs.ensureFile(`../flow-types/logs/${name}/err.log`);
        await fs.writeFile(
            `../flow-types/logs/${name}/err.log`,
            err.toString()
        );
        if (unformatted)
            await exportForFlowTyped(name, unformatted, "unformatted");
        console.error(err);
    }
    const stdoutExists = await fs.exists(
        `../flow-types/logs/${name}/stdout.log`
    );
    const errExists = await fs.exists(`../flow-types/logs/${name}/err.log`);
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
        const fileName = split[1].trim();
        return fileName;
    }
    return name;
}

async function copyTests(type, infojson) {
    const name = originalName(type);
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
        if (!infojson[name]) infojson[name] = {};
        infojson[name].testNotFound = true;
    }
}

async function exportForFlowTyped(moduleName, output, dir = "types") {
    const folder = `../flow-types/${dir}/${moduleName}_vx.x.x`;
    const outputFile =
        folder + "/flow_v0.25.x-/" + fileName(moduleName) + ".js";

    const testfilePath = folder + "/test_" + fileName(moduleName) + ".js";

    await fs.ensureDir(folder + "/flow_v0.25.x-");
    await fs.writeFile(testfilePath, "");
    await fs.writeFile(outputFile, output);

    return testfilePath;
}

module.exports = {
    runFlowGen,
    copyTests,
    originalName,
    definitelyTypedName,
    fileName,
    exportForFlowTyped
};
