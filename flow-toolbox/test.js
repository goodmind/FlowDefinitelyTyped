const path = require("path");
const fs = require("fs-extra");
const glob = require("glob-promise");

const baseDir = path.join(__dirname, "../");

async function main() {
    const types = await fs.readdir(`${baseDir}/types`);

    for (const type of types) {
        const code = await glob(`${baseDir}/types/${type}/${type}-tests.ts`);
        if (!code[0])
            console.log(
                await fs
                    .readdir(`${baseDir}/types/${type}`)
                    .filter(name => !name.includes("test"))
            );
    }
}

main();
