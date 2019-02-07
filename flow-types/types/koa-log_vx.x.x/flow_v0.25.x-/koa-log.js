declare module "koa-log" {
  import typeof * as Koa from "koa";

  declare function koaLog(type: string): Koa.Middleware;

  declare var npm$namespace$morgan: {
    cookie: typeof morgan$cookie,
    date: typeof morgan$date,
    format: typeof morgan$format,
    length: typeof morgan$length,
    method: typeof morgan$method,
    referrer: typeof morgan$referrer,
    status: typeof morgan$status,
    token: typeof morgan$token,
    url: typeof morgan$url
  };
  declare function morgan$cookie(ctx: Koa.BaseContext, key: string): string;

  declare function morgan$date(
    ctx: Koa.BaseContext,
    morgan$format: string
  ): string;

  declare function morgan$format(name: string): string;

  declare function morgan$length(ctx: Koa.BaseContext): number | void;

  declare function morgan$method(ctx: Koa.BaseContext): string;

  declare function morgan$referrer(ctx: Koa.BaseContext): string;

  declare function morgan$status(ctx: Koa.BaseContext): number;

  declare function morgan$token(
    name: string,
    fn: (ctx: Koa.BaseContext) => string
  ): void;

  declare function morgan$url(ctx: Koa.BaseContext): string;

  declare module.exports: typeof koaLog;
}
