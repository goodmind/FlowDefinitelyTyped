#!/usr/bin/env node --max-old-space-size=8192

const { convertTyping } = require("./commands/convert-typing");
const { listErrors } = require("./commands/list-errors");
const { listTypes, listTypescriptTypes } = require("./commands/list-types");
const { missingTypes } = require("./commands/missing-types");
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
  .command(
    "list-errors",
    "list errors",
    yargs => {
      yargs.option("o", {
        alias: "open",
        type: "boolean"
      });
    },
    argv => {
      listErrors(argv).catch(console.error);
    }
  )
  .command(
    "list-types",
    "list types",
    yargs => {
      yargs.option("c", {
        alias: "count",
        type: "boolean"
      });
      yargs.option("u", {
        alias: "unformatted",
        type: "boolean"
      });
      yargs.option("t", {
        alias: "typescript",
        type: "boolean"
      });
      yargs.conflicts("typescript", ["unformatted"]);
    },
    argv => {
      if (argv.typescript) {
        listTypescriptTypes(argv).catch(console.error);
      } else {
        listTypes(argv).catch(console.error);
      }
    }
  )
  .command(
    "missing",
    "missing types",
    yargs => {},
    argv => {
      missingTypes(argv);
    }
  )
  .demandCommand(1, "You need at least one command before moving on").argv;
