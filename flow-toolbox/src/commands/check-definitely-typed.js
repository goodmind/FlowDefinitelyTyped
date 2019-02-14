//@flow

const fs = require("fs-extra");
const _ = require("lodash");
const glob = require("glob-promise");

function originalName(name) {
  if (name.includes("@")) {
    const split = name.split("/");
    const scope = `${split[0].replace("@", "")}`;
    const package = split[1];
    return `${scope}__${package}`;
  }
  return name;
}

async function main() {
  const list = await glob(
    "../../../flow-typed/definitions/npm/**/!(test_)*_v*.js"
  );
  const packages = _.uniq(
    list.map(
      type =>
        type
          .replace("../../../flow-typed/definitions/npm/", "")
          .split("_vx.x.x")[0]
    )
  );
  for (const type of packages) {
    const name = originalName(type);
    const data = await glob(`../../../types/${name}`);
    if (!data[0]) {
      console.log(name);
    }
  }
  // for (const type of list) {
  //     const name = originalName(type.replace("_vx.x.x", ""));
  //     try {
  //         const data = await glob(
  //             `./flow/flow-typed/definitions/npm/${name}_*`
  //         );
  //         if (data.length !== 0) {
  //             console.log(name);
  //         }
  //     } catch {}
  // }
}

main();
