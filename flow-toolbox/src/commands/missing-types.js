//@flow

const glob = require("glob-promise");
const _ = require("lodash");
const path = require("path");
const fs = require("fs-extra");
const { originalName } = require("../utils");

const baseDir = path.join(__dirname, "../../../");

async function missingTypes(argv) {
  const flowTypes = await glob(
    `${baseDir}/flow-types/types/**/*_v*/!(test_)*.js`
  );
  const flowTypesUnformatted = await glob(
    `${baseDir}/flow-types/unformatted/**/*_v*/!(test_)*.js`
  );
  const tsTypes = await fs.readdir(`${baseDir}/types`);

  const a = [
    ...flowTypes.map(
      p =>
        p
          .replace(path.join(baseDir, `flow-types/types/`), "")
          .split("_vx.x.x")[0]
    ),
    ...flowTypesUnformatted.map(
      p =>
        p
          .replace(path.join(baseDir, `flow-types/unformatted/`), "")
          .split("_")[0]
    )
  ];
  const b = tsTypes.map(type => originalName(type));
  const diff = _.difference(b, a);
  for (const name of diff) {
    const data = await glob(`${baseDir}/flow-typed/definitions/npm/${name}_*`);
    if (!data[0]) console.log(name);
  }
}

module.exports = { missingTypes };
