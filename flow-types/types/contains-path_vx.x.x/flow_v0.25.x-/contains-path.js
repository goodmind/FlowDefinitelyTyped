declare module "contains-path" {
  declare module.exports: typeof containsPath;

  declare function containsPath(
    filepath: string,
    substr: string,
    options?: containsPath$containsPath$Options
  ): boolean;

  declare interface containsPath$Options {
    nocase?: boolean;
    partialMatch?: boolean;
  }
}
