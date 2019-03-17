declare module "koa-log4" {
  import typeof * as Koa from "koa";

  import typeof * as Log4js from "log4js";

  declare export function koaLogger(
    logger4js: Log4js.Logger,
    optionsOrFormat?: Options | string
  ): Koa.Middleware<>;

  declare export interface Options {
    format?: string;
    level?: Log4js.Level;
  }
  declare export * from "log4js"
}
