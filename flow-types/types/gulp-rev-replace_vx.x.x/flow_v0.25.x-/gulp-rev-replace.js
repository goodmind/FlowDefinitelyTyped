declare module "gulp-rev-replace" {
  declare interface revReplace$Options {
    canonicalUris?: boolean;
    replaceInExtensions?: Array<string>;
    prefix?: string;
    manifest?: NodeJS.ReadWriteStream;
    modifyUnreved?: Function;
    modifyReved?: Function;
  }
  declare function revReplace(
    options?: revReplace$revReplace$Options
  ): NodeJS.ReadWriteStream;

  declare module.exports: typeof revReplace;
}
