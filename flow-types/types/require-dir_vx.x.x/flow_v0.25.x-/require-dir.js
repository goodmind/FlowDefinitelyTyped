declare module "require-dir" {
  declare interface options {
    recurse?: boolean;
    duplicates?: boolean;
    filter?: any;
    mapKey?: any;
    mapValue?: any;
  }
  declare function requireDir(
    directory: string,
    options?: options
  ): {
    [path: string]: any
  };

  declare module.exports: typeof requireDir;
}
