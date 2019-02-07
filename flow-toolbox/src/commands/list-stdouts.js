//@flow

const fs = require("fs-extra");
const _ = require("lodash");

async function main() {
  const problems = await fs.readdir("../../../flow-types/logs");
  for (const type of problems) {
    try {
      const err = await fs.readFile(
        `../../../flow-types/logs/${type}/stdout.log`
      );
      console.log(type);
    } catch (err) {}
  }
}

main();
