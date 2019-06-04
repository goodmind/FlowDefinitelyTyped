declare module "gulp-postcss" {
  import typeof * as Vinyl from "vinyl";

  declare function GulpPostCss(
    plugins?: any[],
    options?: GulpPostCss$Options
  ): NodeJS$ReadWriteStream;

  declare function GulpPostCss(
    callback?: (
      file: Vinyl
    ) => {
      plugins?: any[],
      options?: GulpPostCss$Options
    }
  ): NodeJS$ReadWriteStream;

  declare interface GulpPostCss$Options {
    parser?: any;
  }
  declare export default typeof GulpPostCss;
}
