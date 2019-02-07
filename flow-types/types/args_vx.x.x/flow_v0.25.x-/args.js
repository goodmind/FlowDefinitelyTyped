declare module "args" {
  declare var c: args;
  declare module.exports: typeof c;

  declare interface args {
    sub: string[];
    option(
      name: string | [string, string],
      description: string,
      defaultValue?: any,
      init?: OptionInitFunction
    ): args;
    options(list: Option[]): args;
    command(
      name: string,
      description: string,
      init?: (
        name: string,
        sub: string[],
        options: ConfigurationOptions
      ) => void,
      aliases?: string[]
    ): args;
    example(usage: string, description: string): args;
    examples(list: Example[]): args;
    parse(
      argv: string[],
      options?: ConfigurationOptions
    ): {
      [key: string]: any
    };
    showHelp(): void;
  }
  declare type OptionInitFunction = (value: any) => any;
  declare interface MriOptions {
    args?: string[];
    alias?: {
      [key: string]: string | string[]
    };
    boolean?: string | string[];
    default?: {
      [key: string]: any
    };
    string?: string | string[];
    unknown?: (param: string) => boolean;
  }
  declare interface MinimistOptions {
    string?: string | string[];
    boolean?: boolean | string | string[];
    alias?: {
      [key: string]: string | string[]
    };
    default?: {
      [key: string]: any
    };
    stopEarly?: boolean;
    "--"?: boolean;
    unknown?: (param: string) => boolean;
  }
  declare interface ConfigurationOptions {
    help?: boolean;
    name?: string;
    version?: boolean;
    usageFilter?: (output: any) => any;
    value?: string;
    mri: MriOptions;
    minimist?: MinimistOptions;
    mainColor: string | string[];
    subColor: string | string[];
  }
  declare interface Option {
    name: string | [string, string];
    description: string;
    init?: OptionInitFunction;
    defaultValue?: any;
  }
  declare interface Example {
    usage: string;
    description: string;
  }
}
