declare module "gulp-bump" {
  import typeof * as BumpRegex from "bump-regex";

  declare function GulpBump(
    options?: BumpRegex.Options
  ): NodeJS.ReadWriteStream;

  declare module.exports: typeof GulpBump;
}
