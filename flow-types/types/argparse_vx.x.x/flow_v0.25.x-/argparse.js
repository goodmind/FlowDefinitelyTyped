declare module "argparse" {
  declare export class ArgumentParser mixins ArgumentGroup {
    constructor(options?: ArgumentParserOptions): this;
    addSubparsers(options?: SubparserOptions): SubParser;
    parseArgs(args?: string[], ns?: Namespace | { [key: string]: any }): any;
    printUsage(): void;
    printHelp(): void;
    formatUsage(): string;
    formatHelp(): string;
    parseKnownArgs(
      args?: string[],
      ns?: Namespace | { [key: string]: any }
    ): any[];
    convertArgLineToArg(argLine: string): string[];
    exit(status: number, message: string): void;
    error(err: string | Error): void;
  }
  declare export class Namespace {
    constructor(options: { [key: string]: any }): this;
    get<K: $Keys<this>, D: any>(
      key: K,
      defaultValue?: D
    ): $ElementType<this, K> | D;
    isset(key: $Keys<this>): boolean;
    set<K: $Keys<this>>(key: K, value: $ElementType<this, K>): this;
    set<K: string, V: any>(key: K, value: V): this & Record<K, V>;
    set<K: { [key: string]: any }>(obj: K): this & K;
    unset<K: $Keys<this>, D: any>(
      key: K,
      defaultValue?: D
    ): $ElementType<this, K> | D;
  }
  declare export class SubParser {
    addParser(name: string, options?: SubArgumentParserOptions): ArgumentParser;
  }
  declare export class ArgumentGroup {
    addArgument(args: string[] | string, options?: ArgumentOptions): void;
    addArgumentGroup(options?: ArgumentGroupOptions): ArgumentGroup;
    addMutuallyExclusiveGroup(options?: {
      required: boolean
    }): ArgumentGroup;
    setDefaults(options?: {}): void;
    getDefault(dest: string): any;
  }
  declare export interface SubparserOptions {
    title?: string;
    description?: string;
    prog?: string;
    parserClass?: {
      new(): any
    };
    action?: string;
    dest?: string;
    help?: string;
    metavar?: string;
  }
  declare export type SubArgumentParserOptions = {
    aliases?: string[],
    help?: string
  } & ArgumentParserOptions;

  declare export interface ArgumentParserOptions {
    description?: string;
    epilog?: string;
    addHelp?: boolean;
    argumentDefault?: any;
    parents?: ArgumentParser[];
    prefixChars?: string;
    formatterClass?: {
      new():
        | HelpFormatter
        | ArgumentDefaultsHelpFormatter
        | RawDescriptionHelpFormatter
        | RawTextHelpFormatter
    };
    prog?: string;
    usage?: string;
    version?: string;
    debug?: boolean;
  }
  declare export interface ArgumentGroupOptions {
    prefixChars?: string;
    argumentDefault?: any;
    title?: string;
    description?: string;
  }
  declare export class HelpFormatter {}
  declare export class ArgumentDefaultsHelpFormatter {}
  declare export class RawDescriptionHelpFormatter {}
  declare export class RawTextHelpFormatter {}
  declare export interface ArgumentOptions {
    action?: string;
    optionStrings?: string[];
    dest?: string;
    nargs?: string | number;
    constant?: any;
    defaultValue?: any;
    type?: string | Function;
    choices?: string | string[];
    required?: boolean;
    help?: string;
    metavar?: string;
  }
}
