#!/usr/bin/env node --max-old-space-size=8192

const { convertTyping } = require("./commands/convert-typing");
const { listErrors } = require("./commands/list-errors");
const { listTypes, listTypescriptTypes } = require("./commands/list-types");
const { commitTypes } = require("./commands/commit");
const { missingTypes } = require("./commands/missing-types");
const { main } = require("./commands/convert");
const { unplug } = require("./commands/unplug");
const { typecheck } = require("./commands/typecheck");
const { clean } = require("./commands/clean");

require("yargs") // eslint-disable-line
  .scriptName("flow-toolbox")
  .help("help", "Show usage instructions.")
  .showHelpOnFail(true)
  .option("v", {
    alias: "verbose",
    type: "boolean"
  })
  .command(
    "convert [names..]",
    "convert types",
    () => {},
    async argv => {
      if (argv.names) {
        for (const name of argv.names) {
          await convertTyping(name).catch(err => {
            console.error(err.stack);
          });
        }
      } else {
        await main(argv).catch(console.error);
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
      yargs.option("c", {
        alias: "convert",
        type: "boolean"
      });
      yargs.conflicts("open", ["convert"]);
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
  .command(
    "commit",
    "commit types",
    yargs => {},
    () => {
      commitTypes();
    }
  )
  .command(
    "typecheck [names...]",
    "type check types",
    yargs => {},
    argv => {
      typecheck(argv.names);
    }
  )
  .command(
    "clean",
    "clean types",
    yargs => {},
    argv => {
      clean()
    }
  )
  .demandCommand(1, "You need at least one command before moving on").argv;
