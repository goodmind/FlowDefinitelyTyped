declare module "gulp-jasmine" {
  declare interface JasmineOptions {
    /**
     * Display spec names in default reporter.
     */
    verbose?: boolean;

    /**
     * Include stack traces in failures in default reporter.
     * @default false
     */
    includeStackTrace?: boolean;

    /**
     * Reporter(s) to use.
     */
    reporter?: jasmine.CustomReporter | $ReadOnlyArray<jasmine.CustomReporter>;

    /**
     * Time to wait in milliseconds before a test automatically fails.
     * @default 5000
     */
    timeout?: number;

    /**
     * Stops the stream on failed tests.
     * @default true
     */
    errorOnFail?: boolean;

    /**
     * Passes the config to Jasmine's loadConfig method.
     */
    config?: { [key: string]: any };
  }

  /**
   * Executes Jasmine tests. Emits a 'jasmineDone' event on success.
   * @param options Optional options for the execution of the Jasmine test
   */
  declare function gulpJasmine(
    options?: JasmineOptions
  ): NodeJS.ReadWriteStream;

  declare module.exports: typeof gulpJasmine;
}
