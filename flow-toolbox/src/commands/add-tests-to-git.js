//@flow

const glob = require("glob-promise");
const execa = require("execa");
const fs = require("fs-extra");

async function main() {
  const libraries = await glob("../../../flow-types/types/**/test_*.js");
  for (const library of libraries) {
    console.log(library);
    await execa("git", ["add", library]);
    console.log("add done");
  }
}

main();
