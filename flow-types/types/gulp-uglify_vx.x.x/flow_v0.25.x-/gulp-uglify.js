declare module "gulp-uglify" {
  import typeof * as UglifyJS from "uglify-js";

  declare interface GulpUglify$Options {
    /**
     * Pass false to skip mangling names.
     */
    mangle?: UglifyJS.MangleOptions | boolean;

    /**
     * Pass if you wish to specify additional output options. The defaults are optimized for best compression.
     */
    output?: UglifyJS.OutputOptions;

    /**
     * Pass an object to specify custom compressor options. Pass false to skip compression completely.
     */
    compress?: UglifyJS.CompressOptions | boolean;
  }
  declare function GulpUglify(
    options?: GulpUglify$GulpUglify$Options
  ): NodeJS.ReadWriteStream;

  declare module.exports: typeof GulpUglify;
}
