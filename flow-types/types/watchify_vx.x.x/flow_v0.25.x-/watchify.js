declare module "watchify" {
  declare var Watchify: Watchify$Watchify$Constructor;

  /**
   * Watch mode for browserify builds.
   * Update any source file and your browserify bundle will be recompiled on the spot
   */
  declare export interface Watchify$Constructor {
    args: {
      cache: any,
      packageCache: any
    };
    <T: Browserify.BrowserifyObject>(b: T, opts?: Watchify$Watchify$Options): T;
    (
      b: Browserify.BrowserifyObject,
      opts?: Watchify$Watchify$Options
    ): Browserify.BrowserifyObject;
  }

  declare export interface Watchify$Options {
    /**
     * The amount of time in milliseconds to wait before emitting an "update" event after a change.
     * Default: 100
     */
    delay?: number;

    /**
     * Ignores monitoring files for changes. If set to true, then ** /node_modules/ ** will be ignored. For other possible values see Chokidar's documentation on "ignored"
     * Also see anymatch package: https://github.com/es128/anymatch#usage
     */
    ignoreWatch?:
      | boolean
      | (
          | string
          | RegExp
          | ((...values: any[]) => boolean)
          | (string | RegExp | ((...values: any[]) => boolean))[]
        );

    /**
     * Enables polling to monitor for changes. If set to true, then a polling interval of 100 ms is used.
     * If set to a number, then that amount of milliseconds will be the polling interval. For more info see
     * Chokidar's documentation on "usePolling" and "interval".
     * This option is useful if you're watching an NFS volume
     * Also see chokidar package: https://github.com/paulmillr/chokidar#path-filtering
     */
    poll?: number;
  }
  declare module.exports: typeof Watchify;
}
