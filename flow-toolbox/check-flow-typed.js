//@flow

const fs = require("fs-extra");
const _ = require("lodash");
const glob = require("glob-promise");

function originalName(name) {
    if (name.includes("__")) {
        const split = name.split("__");
        const scope = `@${split[0]}`;
        const package = split[1];
        return `${scope}/${package}`;
    }
    return name;
}

async function main() {
    const list = await fs.readdir("./flow-types/errors");
    for (const type of list) {
        const name = originalName(type.replace("_vx.x.x", ""));
        try {
            const data = await glob(
                `./flow/flow-typed/definitions/npm/${name}_*`
            );
            if (data.length !== 0) {
                console.log(name);
            }
        } catch {}
    }
}

main();
