declare module "koa-logger-winston" {
  import type { Middleware } from "koa";

  import type { Logger } from "winston";

  declare module.exports: typeof logger;

  declare function logger(logger: Logger): Middleware;
}
