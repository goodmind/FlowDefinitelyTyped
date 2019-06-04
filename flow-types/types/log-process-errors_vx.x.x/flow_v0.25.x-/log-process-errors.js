declare module "log-process-errors" {
  /**
   * Log level
   */
  declare type logProcessErrors$LogLevel =
    | "debug"
    | "info"
    | "warn"
    | "error"
    | "silent"
    | "default";

  /**
   * Exception type.
   */
  declare type logProcessErrors$ExceptionType =
    | "uncaughtException"
    | "unhandledRejection"
    | "rejectionHandled"
    | "multipleResolves"
    | "warning";

  /**
   * log-process-errors constructor options.
   */
  declare interface logProcessErrors$Options {
    /**
     * Override logger
     * @link https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#log
     */
    log?: (
      error: Error,
      level: logProcessErrors$LogLevel
    ) => Promise<void> | void;

    /**
     * Which log level to use for different exceptions.
     *
     * https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#log
     */
    level?: $Shape<
      Record<logProcessErrors$ExceptionType, logProcessErrors$LogLevel>
    > & {
      default?: (error: Error) => "silent" | "default"
    };

    /**
     * Which process should trigger `process.exit(1)`
     * @link https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#exiton
     */
    exitOn?: logProcessErrors$ExceptionType[];

    /**
     * When running tests, makes them fail if there are any process errors.
     * @link https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#testing
     */
    testing?: "ava" | "mocha" | "jasmine" | "tape" | "node-tap";

    /**
     * Whether or not to colorize messages.
     * @link https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#colors
     */
    colors?: boolean;
  }

  /**
   * Log Process Errors
   * @link https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#logprocesserrorsoptions
   */
  declare function logProcessErrors(
    options?: logProcessErrors$Options
  ): () => void;

  declare export default typeof logProcessErrors;
}
