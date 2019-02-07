declare module "yargs-parser" {
  declare interface yargsParser$Arguments {
    /**
     * Non-option arguments
     */
    _: string[];

    /**
     * The script name or node command
     */
    $0: string;

    /**
     * All remaining options
     */
    [argName: string]: any;
  }

  declare interface yargsParser$DetailedArguments {
    argv: yargsParser$Arguments;
    error: Error | null;
    aliases: {
      [alias: string]: string[]
    };
    newAliases: {
      [alias: string]: boolean
    };
    configuration: yargsParser$Configuration;
  }

  declare interface yargsParser$Configuration {
    "boolean-negation": boolean;
    "camel-case-expansion": boolean;
    "combine-arrays": boolean;
    "dot-notation": boolean;
    "duplicate-arguments-array": boolean;
    "flatten-duplicate-arrays": boolean;
    "negation-prefix": string;
    "parse-numbers": boolean;
    "populate--": boolean;
    "set-placeholder-key": boolean;
    "short-option-groups": boolean;
  }

  declare interface yargsParser$Options {
    alias?: {
      [key: string]: string | string[]
    };
    array?: string[];
    boolean?: string[];
    config?:
      | string
      | string[]
      | {
          [key: string]: boolean
        };
    configuration?: $Shape<yargsParser$Configuration>;
    coerce?: {
      [key: string]: (arg: any) => any
    };
    count?: string[];
    default?: {
      [key: string]: any
    };
    envPrefix?: string;
    narg?: {
      [key: string]: number
    };
    normalize?: string[];
    string?: string[];
    number?: string[];
    "--"?: boolean;
  }

  declare interface yargsParser$Parser {
    (
      argv: string | string[],
      opts?: yargsParser$Options
    ): yargsParser$Arguments;
    detailed(
      argv: string | string[],
      opts?: yargsParser$Options
    ): yargsParser$DetailedArguments;
  }
  declare var yargsParser: yargsParser$yargsParser$Parser;
  declare module.exports: typeof yargsParser;
}
