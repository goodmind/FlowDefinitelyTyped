declare module "glob-to-regexp" {
  declare module.exports: typeof GlobToRegExp;

  declare function GlobToRegExp(
    glob: string,
    options?: GlobToRegExp$GlobToRegExp$Options
  ): RegExp;

  declare interface GlobToRegExp$Options {
    extended?: boolean;
    globstar?: boolean;
    flags?: string;
  }
}
