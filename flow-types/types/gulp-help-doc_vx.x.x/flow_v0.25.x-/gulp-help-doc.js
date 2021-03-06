declare module "gulp-help-doc" {
  declare interface usage$UsageOptions {
    /**
     * Defines  max line width for the printed output lines
     * (by default is 80 characters long)
     */
    lineWidth?: number;

    /**
     * Defines max width of the column width tasks or args names
     * (by default is 20 characters long)
     */
    keysColumnWidth?: number;

    /**
     * Defines number of empty characters for left-padding of the output
     */
    padding?: number;

    /**
     * Printing engine (by default is console). Accepted any device
     * which has log() function defined to do output.
     */
    logger?: {
      log: Function
    };

    /**
     * Path to a gulpfile (default is gulpfile.js)
     * Normally, there is no need to change this option. It may be used
     * for some special cases, like mocking gulpfile for testing.
     */
    gulpfile?: string;
  }

  declare interface usage$Usage {
    (gulp: gulp.Gulp, options?: usage$UsageOptions): Promise<any>;
  }
  declare var usage: usage$usage$Usage;
  declare module.exports: typeof usage;
}
