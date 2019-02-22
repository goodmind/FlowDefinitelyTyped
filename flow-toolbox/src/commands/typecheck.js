//@flow

const glob = require("glob-promise");
const execa = require("execa");
const _ = require("lodash");
const path = require("path");
const fs = require("fs-extra");
const { originalName } = require("../utils");

const baseDir = path.join(__dirname, "../../../");

async function typecheck(argv) {
  const flowTypes = await glob(
    `${baseDir}/flow-types/types/**/*_v*/!(test_)*.js`
  );
  const flowTypesUnformatted = await glob(
    `${baseDir}/flow-types/unformatted/**/*_v*/!(test_)*.js`
  );
  const types = [
    ...flowTypes.map(p => [
      p,
      p.replace(path.join(baseDir, `flow-types/types/`), "").split("_vx.x.x")[0]
    ]),
    ...flowTypesUnformatted.map(p => [
      p,
      p
        .replace(path.join(baseDir, `flow-types/unformatted/`), "")
        .split("_vx.x.x")[0]
    ])
  ];
  for (const [type, name] of types) {
    console.log(name, type);
    try {
      const data = await execa("flow", ["focus-check", type]);
      console.log("Ok!");
    } catch (err) {
      console.log("Error!");
      await fs.outputFile(
        `${baseDir}/flow-types/typecheck/${name}.log`,
        err.stdout
      );
    }
  }
}

module.exports = { typecheck };
