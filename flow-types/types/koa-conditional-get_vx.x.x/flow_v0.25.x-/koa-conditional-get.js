declare module "koa-conditional-get" {
  import typeof * as koa from "koa";

  declare function koaConditionalGet(): koa.Middleware;

  declare module.exports: typeof koaConditionalGet;
}
