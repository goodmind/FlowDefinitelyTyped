declare module "git-username" {
  declare module.exports: typeof gitUsername;

  declare function gitUsername(
    options: gitUsername$gitUsername$StrictOptions
  ): string;

  declare function gitUsername(
    options?: string | gitUsername$gitUsername$BaseOptions
  ): string | null;

  declare interface gitUsername$BaseOptions {
    cwd?: string;
    strict?: boolean;
  }

  declare type gitUsername$StrictOptions = {
    strict: true
  } & gitUsername$BaseOptions;
}
