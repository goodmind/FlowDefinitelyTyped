//@flow

const fs = require("fs-extra");
const glob = require("glob-promise");
const execa = require("execa");
const path = require("path");
const _ = require("lodash");

const baseDir = path.join(__dirname, "../../../");

async function commitTypes(argv) {
  const gitFiles = (await execa("git", ["ls-files", "-m"])).stdout
    .split("\n")
    .filter(file => file.startsWith("flow-types"))
    .filter(file => file.endsWith(".js"))
    .map(folder => path.join(baseDir, folder));
  // console.log(gitFiles);
  // const typesLibraries = await glob(
  //   `${baseDir}/flow-types/types/**/*_v*/!(test_)*.js`
  // );
  // const unformattedLibraries = await glob(
  //   `${baseDir}/flow-types/unformatted/**/*_v*/!(test_)*.js`
  // );
  const libraries = new Set([...gitFiles]);
  let count = 0;
  for (const library of libraries) {
    const split = path.relative(baseDir, library).split(path.sep);
    const name = (split[2].startsWith("@")
      ? `${split[2]}/${split[3]}`
      : split[2]
    ).split("_vx.x.x")[0];
    const commitMessage = `[${name}] update types`;
    const gitAdd = `git add ${path.relative(baseDir, library)}`;
    const gitCommit = `git commit -m "${commitMessage}"`;
    console.log(gitAdd);
    console.log(gitCommit);
    // console.log(name);
    // if (!argv.count) console.log(name);
    // count += 1;
  }
  //if (argv.count) console.log(count);
}

module.exports = { commitTypes };
