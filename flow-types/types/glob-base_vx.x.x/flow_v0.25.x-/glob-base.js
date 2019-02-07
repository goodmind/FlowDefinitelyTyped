declare module "glob-base" {
  declare function globbase(
    basePath?: string
  ): globbase$globbase$GlobBaseResult;

  declare interface globbase$GlobBaseResult {
    base: string;
    isGlob: boolean;
    glob: string;
  }
  declare module.exports: typeof globbase;
}
