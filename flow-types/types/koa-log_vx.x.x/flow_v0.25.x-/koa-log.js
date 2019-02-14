declare module "koa-log" {
  import typeof * as Koa from "koa";

  declare function koaLog(type: string): Koa.Middleware;

  declare var npm$namespace$koaLog: {
    morgan: typeof npm$namespace$koaLog$morgan
  };

  declare var npm$namespace$koaLog$morgan: {
    cookie: typeof koaLog$morgan$cookie,
    date: typeof koaLog$morgan$date,
    format: typeof koaLog$morgan$format,
    length: typeof koaLog$morgan$length,
    method: typeof koaLog$morgan$method,
    referrer: typeof koaLog$morgan$referrer,
    status: typeof koaLog$morgan$status,
    token: typeof koaLog$morgan$token,
    url: typeof koaLog$morgan$url
  };
  declare function koaLog$morgan$cookie(
    ctx: Koa.BaseContext,
    key: string
  ): string;

  declare function koaLog$morgan$date(
    ctx: Koa.BaseContext,
    format: string
  ): string;

  declare function koaLog$morgan$format(name: string): string;

  declare function koaLog$morgan$length(ctx: Koa.BaseContext): number | void;

  declare function koaLog$morgan$method(ctx: Koa.BaseContext): string;

  declare function koaLog$morgan$referrer(ctx: Koa.BaseContext): string;

  declare function koaLog$morgan$status(ctx: Koa.BaseContext): number;

  declare function koaLog$morgan$token(
    name: string,
    fn: (ctx: Koa.BaseContext) => string
  ): void;

  declare function koaLog$morgan$url(ctx: Koa.BaseContext): string;

  declare export default typeof koaLog;
}
