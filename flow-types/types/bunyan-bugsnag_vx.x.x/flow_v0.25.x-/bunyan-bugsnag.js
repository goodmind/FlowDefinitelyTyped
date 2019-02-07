declare module "bunyan-bugsnag" {
  import typeof * as Logger from "bunyan";

  declare interface bugsnagLogStream$Options {
    systemInfo?: string[];
    warningLevel?: Logger.LogLevel;
    errorLevel?: Logger.LogLevel;
  }
  declare function bugsnagLogStream(
    options?: bugsnagLogStream$bugsnagLogStream$Options
  ): NodeJS.WritableStream;

  declare module.exports: typeof bugsnagLogStream;
}
