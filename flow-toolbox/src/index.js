#!/usr/bin/env node --max-old-space-size=4096

const { convertTyping } = require("./commands/convert-typing");
const { main } = require("./commands/convert");
const { unplug } = require("./commands/unplug");

require("yargs") // eslint-disable-line
  .help("help", "Show usage instructions.")
  .showHelpOnFail(true)
  .option("v", {
    alias: "verbose",
    type: "boolean"
  })
  .command(
    "convert [name]",
    "convert types",
    () => {},
    argv => {
      if (argv.name) {
        convertTyping(argv.name).catch(err => {
          console.error(err.stack);
        });
      } else {
        main(argv).catch(console.error);
      }
    }
  )
  .command(
    "unplug <name>",
    "unplug types",
    () => {},
    argv => {
      unplug(argv.name).catch(console.error);
    }
  )
  .demandCommand(1, "You need at least one command before moving on").argv;
