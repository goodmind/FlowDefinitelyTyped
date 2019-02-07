declare module "gulp-diff" {
  /**
   * Gulp task to diff files in the stream against a destination.
   * @param dest target directory to diff against, defaults to diff against original source file
   */
  declare function gulp_diff(dest?: string): stream.Transform;

  declare var npm$namespace$gulp_diff: {
    reporter: typeof gulp_diff$reporter,
    diff: typeof gulp_diff$diff
  };
  declare var gulp_diff$diff: typeof gulp_diff;

  declare function gulp_diff$reporter(
    opts?: gulp_diff$ReporterOptions
  ): stream.Transform;

  declare interface gulp_diff$ReporterOptions {
    /**
     * do not show diff information, defaults to `false`
     */
    quiet?: boolean;

    /**
     * emit an error on finding diffs, defaults to `false`
     */
    fail?: boolean;
  }
  declare module.exports: typeof gulp_diff;
}
