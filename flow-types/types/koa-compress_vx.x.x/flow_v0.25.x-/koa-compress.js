declare module "koa-compress" {
  import typeof * as Koa from "koa";

  import typeof * as zlib from "zlib";

  declare type CompressOptions = {
    /**
     * An optional function that checks the response content type to decide whether to compress. By default, it uses compressible.
     */
    filter?: (content_type: string) => boolean,

    /**
     * Minimum response size in bytes to compress. Default 1024 bytes or 1kb.
     */
    threshold?: number
  } & zlib.ZlibOptions;

  /**
   * Compress middleware for Koa
   */
  declare function compress(options?: CompressOptions): Koa.Middleware;

  declare module.exports: typeof compress;
}
