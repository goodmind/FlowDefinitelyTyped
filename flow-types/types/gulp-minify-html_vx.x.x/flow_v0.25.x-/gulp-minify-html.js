declare module "gulp-minify-html" {
  declare interface minifyHtml$Options {
    empty?: boolean;
    cdata?: boolean;
    comments?: boolean;
    conditionals?: boolean;
    spare?: boolean;
    quotes?: boolean;
    loose?: boolean;
  }
  declare function minifyHtml(
    options?: minifyHtml$minifyHtml$Options
  ): NodeJS.ReadWriteStream;

  declare module.exports: typeof minifyHtml;
}
