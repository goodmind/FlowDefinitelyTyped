//@flow

const fs = require("fs-extra");
const execa = require("execa");
const path = require("path");
const _ = require("lodash");

const { convertTyping } = require("./convert-typing");

const baseDir = path.join(__dirname, "../../../");

async function listErrors(argv) {
  const problems = await fs.readdir(`${baseDir}/flow-types/logs`);
  for (const type of problems) {
    try {
      const err = await fs.readFile(
        `${baseDir}/flow-types/logs/${type}/err.log`
      );
      if (argv.open)
        await execa("code", [`${baseDir}/flow-types/logs/${type}/err.log`]);
      if (argv.convert) {
        await convertTyping(type).catch(console.error);
      }
      console.log(type);
    } catch (err) {}
  }
}

module.exports = { listErrors };
