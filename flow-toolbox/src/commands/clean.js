//@flow

const glob = require("glob-promise");
const fs = require("fs-extra");
const path = require("path");
const infojson = require("../../../flow-types/info.json");
const notNeededPackages = require("../../../notNeededPackages.json");
const {
  originalName,
} = require("../utils");

const baseDir = path.join(__dirname, "../../../");

async function clean() {
  const types = notNeededPackages.packages.map(pkg => pkg.typingsPackageName);
  for (const type of types) {
    const name = originalName(type);
    const flowTypedExists = await glob(
      `${baseDir}/flow-typed/definitions/npm/${name}_v*`
    );
    const unpluggedExists = await glob(
      `${baseDir}/flow-types/unplugged/${name}_v*/flow_v*/!(test_)*.js`
    );
    const typeExists = await glob(
      `${baseDir}/flow-types/types/${name}_v*/flow_v*/!(test_)*.js`
    );
    const unformattedExists = await glob(
      `${baseDir}/flow-types/unformatted/${name}_v*/flow_v*/!(test_)*.js`
    );
    if (flowTypedExists.length > 0) {
      continue
    }
    if (unpluggedExists.length === 0 && typeExists.length === 0 && unformattedExists.length === 0) {
      continue
    }
    if (infojson[name]) delete infojson[name];
    if (typeExists[0]) {
      console.log(`rm -rf flow-types/types/${name}_vx.x.x`)
    } else if (unpluggedExists[0]) {
      console.log(`rm -rf flow-types/unplugged/${name}_vx.x.x`)
    } else if (unformattedExists[0]) {
      console.log(`rm -rf flow-types/unformatted/${name}_vx.x.x`)
    }
  }
  await fs.outputJSON(`${baseDir}/flow-types/info.json`, infojson, {
    spaces: 2
  });
}

module.exports = { clean };
