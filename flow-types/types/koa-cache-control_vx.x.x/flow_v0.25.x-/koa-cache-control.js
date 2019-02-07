declare module "koa-cache-control" {
  import typeof * as Koa from "koa";

  declare function cacheControl(options?: {
    private?: boolean,
    public?: boolean,
    noStore?: boolean,
    noCache?: boolean,
    noTransform?: boolean,
    mustRevalidate?: boolean,
    staleIfError?: number,
    staleWhileRevalidate?: number,
    maxAge?: number,
    sMaxAge?: number
  }): Koa.Middleware;

  declare module.exports: typeof cacheControl;
}
