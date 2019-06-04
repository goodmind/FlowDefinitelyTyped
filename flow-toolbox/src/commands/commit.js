//@flow

const fs = require("fs-extra");
const glob = require("glob-promise");
const execa = require("execa");
const path = require("path");
const _ = require("lodash");

const baseDir = path.join(__dirname, "../../../");

async function commitTypes(argv) {
  const gitFiles = (await execa("git", ["ls-files", "--others", "--exclude-standard"])).stdout
    .split("\n")
    .filter(Boolean)
    .filter(file => file.startsWith("flow-types/types") || file.startsWith("flow-types/unformatted"))
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
  const files = new Map()
  let count = 0;
  for (const library of libraries) {
    const split = path.relative(baseDir, library).split(path.sep);
    const name = (split[2].startsWith("@")
      ? `${split[2]}/${split[3]}`
      : split[2]
    ).split("_vx.x.x")[0];

    files.set(name, [...(files.get(name) || []), path.relative(baseDir, library)])
    //const gitAdd = `git add ${path.relative(baseDir, library)}`
    // console.log(gitAdd);
    // if (lastName === name) {
    //   const commitMessage = `[${name}] update types`;
    //   const gitCommit = `git commit -m "${commitMessage}"`;
    //   const gitAdd = `git add ${path.relative(baseDir, library)}`
    //   //console.log(gitAdd);
    //   console.log(gitCommit);
    // } else {
    //   console.log('wtf')
    //   lastName = name
    // }
    // console.log(name);
    // if (!argv.count) console.log(name);
    // count += 1;
  }
  for (const [name, value] of files) {
    for (const file of value) {
      const gitAdd = `git add ${file}`
      console.log(gitAdd)
    }
    const commitMessage = `[${name}] update types`;
    const gitCommit = `git commit -m "${commitMessage}"`
    console.log(gitCommit);
  }
  //if (argv.count) console.log(count);
}

module.exports = { commitTypes };
