//@flow

const fs = require("fs-extra");
const _ = require("lodash");

async function main() {
  const problems = await fs.readFile("./problems.txt", { encoding: "utf8" });
  const list = problems.split("\n");
  for (const type of list) {
    try {
      await fs.move(
        `../../../flow-types/types/${type}_vx.x.x`,
        `../../../flow-types/errors/${type}_vx.x.x`
      );
    } catch {}
  }
}

main();
