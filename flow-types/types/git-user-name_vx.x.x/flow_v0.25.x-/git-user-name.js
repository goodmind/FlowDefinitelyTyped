declare module "git-user-name" {
  declare module.exports: typeof gitUserName;

  declare function gitUserName(
    options?: gitUserName$gitUserName$Options
  ): string | null;

  declare interface gitUserName$Options {
    cwd?: string;
    path?: string;
    gitconfig?: string;
  }
}
