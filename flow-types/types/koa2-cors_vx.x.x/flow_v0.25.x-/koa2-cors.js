declare module "koa2-cors" {
  import typeof * as Koa from "koa";

  declare interface cors$Options {
    origin?: string | ((ctx: Koa.Context) => boolean | string);
    exposeHeaders?: string[];
    maxAge?: number;
    credentials?: boolean;
    allowMethods?: string[];
    allowHeaders?: string[];
  }
  declare function cors(options?: cors$cors$Options): Koa.Middleware;

  declare module.exports: typeof cors;
}
