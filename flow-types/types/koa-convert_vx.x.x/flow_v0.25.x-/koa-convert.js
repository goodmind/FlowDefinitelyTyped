declare module "koa-convert" {
  import type { Context, Middleware } from "koa";

  declare function convert(
    mw: (context: Context, next: () => Promise<any>) => Generator
  ): Middleware;

  declare module.exports: typeof convert;
}
