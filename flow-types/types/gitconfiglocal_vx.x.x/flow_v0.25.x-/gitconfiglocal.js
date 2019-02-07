declare module "gitconfiglocal" {
  declare interface gitconfig$GitConfig {
    [key: string]: any;
  }

  declare type gitconfig$callback = (
    error: Error | false,
    config: gitconfig$GitConfig
  ) => void;

  declare interface gitconfig$Options {
    gitDir?: string;
  }
  declare function gitconfig(
    dir: string,
    options: gitconfig$gitconfig$Options,
    cb: gitconfig$gitconfig$callback
  ): void;

  declare function gitconfig(
    dir: string,
    cb: gitconfig$gitconfig$callback
  ): void;

  declare module.exports: typeof gitconfig;
}
