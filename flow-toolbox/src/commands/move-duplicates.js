//@flow

const fs = require("fs-extra");
const _ = require("lodash");

async function main() {
  const problems = await fs.readFile("../../../flow-typed-by-name.txt", {
    encoding: "utf8"
  });
  const list = problems.split("\n");
  for (const type of list) {
    try {
      await fs.move(
        `../../../flow-types/types/${type}_vx.x.x`,
        `../../../flow-types/duplicates/${type}_vx.x.x`
      );
    } catch {}
  }
}

main();
