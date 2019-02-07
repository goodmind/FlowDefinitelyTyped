#!/usr/bin/env node --max-old-space-size=4096
//@flow

const fs = require("fs-extra");
const execa = require("execa");
const glob = require("glob-promise");
const infojson = require("../../../flow-types/info.json");
const chalk = require("chalk");
const {
  fileName,
  runFlowGen,
  definitelyTypedName,
  copyTests,
  label
} = require("../utils");
const path = require("path");
const { convertTyping } = require("./convert-typing");

const baseDir = path.join(__dirname, "../../..");

async function unplug(name) {
  const type = definitelyTypedName(name);
  const sourceFolder = `${baseDir}/flow-types/types/${name}_vx.x.x`;
  const targetFolder = `${baseDir}/flow-types/unplugged/${name}_vx.x.x`;
  const isUnplugged = await fs.exists(targetFolder);
  const convertationExists = await fs.exists(
    `${sourceFolder}/flow_v0.25.x-/${fileName(name)}.js`
  );
  if (isUnplugged) {
    console.log(label(chalk.bgWhite, name), `already unplugged`);
    return;
  }
  if (!convertationExists) {
    await convertTyping(type);
  }
  await fs.move(sourceFolder, targetFolder);
}

module.exports = { unplug };
