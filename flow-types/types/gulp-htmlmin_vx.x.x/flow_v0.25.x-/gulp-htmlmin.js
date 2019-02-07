declare module "gulp-htmlmin" {
  import typeof * as HTMLMinifier from "html-minifier";

  declare function htmlmin(
    options?: HTMLMinifier.Options
  ): NodeJS.ReadWriteStream;

  declare module.exports: typeof htmlmin;
}
