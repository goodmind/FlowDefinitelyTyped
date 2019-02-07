declare module "gulp-filter" {
  import typeof * as Minimatch from "minimatch";

  declare interface filter$FileFunction {
    (file: File): boolean;
  }

  declare type filter$Options = {
    restore?: boolean,
    passthrough?: boolean
  } & Minimatch.IOptions;

  declare type filter$Filter = {
    restore: NodeJS.ReadWriteStream
  } & NodeJS.ReadWriteStream;

  declare function filter(
    pattern: string | string[] | filter$filter$FileFunction,
    options?: filter$filter$Options
  ): filter$filter$Filter;

  declare module.exports: typeof filter;
}
