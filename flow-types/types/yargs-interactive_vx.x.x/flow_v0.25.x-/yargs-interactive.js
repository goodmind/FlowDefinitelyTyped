declare module "yargs-interactive" {
  declare function yargsInteractive(): yargsInteractive$yargsInteractive$Interactive;

  declare interface yargsInteractive$OptionData {
    type: string;
    describe: string;
    default?: string | number | boolean;
    prompt?: string;
    options?: string[];
  }

  declare interface yargsInteractive$Option {
    [key: string]:
      | yargsInteractive$OptionData
      | {
          default: boolean
        };
  }

  declare interface yargsInteractive$Interactive {
    usage(usage: string): yargsInteractive$Interactive;
    interactive(options: yargsInteractive$Option): yargsInteractive$Interactive;
    then(callback: (result: any) => any): yargsInteractive$Interactive;
  }
  declare module.exports: typeof yargsInteractive;
}
