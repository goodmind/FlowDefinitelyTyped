declare module "gulp-minify-css" {
  import typeof * as CleanCSS from "clean-css";

  declare function minifyCSS(
    options?: CleanCSS.Options
  ): NodeJS.ReadWriteStream;

  declare module.exports: typeof minifyCSS;
}
