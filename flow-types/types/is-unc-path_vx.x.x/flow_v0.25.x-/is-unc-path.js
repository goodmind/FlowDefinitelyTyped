declare module "is-unc-path" {
  declare module.exports: typeof isUncPath;

  declare function isUncPath(path: string): boolean;
}
