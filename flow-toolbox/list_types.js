//@flow

const glob = require("glob-promise");
const fs = require("fs-extra");

async function main() {
    const libs = [];
    const libraries = await glob("../flow-types/types/**/*_v*/!(test_)*.js");
    for (const library of libraries) {
        libs.push(library.replace("../flow-types/types/", "").split("_")[0]);
    }
    await fs.writeJSON("library-list.json", libs);
}

main();
