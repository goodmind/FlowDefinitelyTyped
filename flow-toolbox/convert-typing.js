#!/usr/bin/env node --max-old-space-size=4096
//@flow

const fs = require("fs-extra");
const glob = require("glob-promise");
const infojson = require("../flow-types/info.json");
const {
    fileName,
    runFlowGen,
    definitelyTypedName,
    copyTests
} = require("./src");

async function convertTyping(name) {
    const type = definitelyTypedName(name);
    const flowTypedExists = await glob(
        `../flow-typed/definitions/npm/${name}_v*`
    );
    // if (flowTypedExists[0]) {
    //     console.log(`skip: ${name}, flow-typed exists`);
    //     await fs.remove(`../flow-types/types/${name}_vx.x.x`);
    //     return;
    // }
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
    await runFlowGen(name, code, hasHeader, infojson);
    await copyTests(type, infojson);
    console.log(`${name} converted`);
    await fs.outputJSON("../flow-types/info.json", infojson, { spaces: 2 });
}

convertTyping(process.argv[2]);
