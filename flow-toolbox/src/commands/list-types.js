//@flow

const glob = require("glob-promise");
const path = require("path");
const fs = require("fs-extra");
const { originalName } = require("../utils");

const baseDir = path.join(__dirname, "../../../");

async function listTypes(argv) {
  const dir = argv.unformatted ? "unformatted" : "types";
  const libs = [];
  const libraries = await glob(
    `${baseDir}/flow-types/${dir}/**/*_v*/!(test_)*.js`
  );
  let count = 0;
  for (const library of libraries) {
    const name = library
      .replace(path.join(baseDir, `flow-types/${dir}/`), "")
      .split("_")[0];
    if (!argv.count) console.log(name);
    count += 1;
  }
  if (argv.count) console.log(count);
}

async function listTypescriptTypes(argv) {
  const libs = [];
  const libraries = await fs.readdir(`${baseDir}/types`);
  let count = 0;
  for (const library of libraries) {
    const name = originalName(library);
    if (!argv.count) console.log(name);
    count += 1;
  }
  if (argv.count) console.log(count);
}

module.exports = { listTypes, listTypescriptTypes };
