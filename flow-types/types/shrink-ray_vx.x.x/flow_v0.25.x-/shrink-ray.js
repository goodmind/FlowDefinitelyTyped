declare module "shrink-ray" {
  import type { RequestHandler, Request, Response } from "express";

  import typeof * as zlib from "zlib";

  declare type FilterFunction = (req: Request, res: Response) => boolean;
  declare type Options = $Shape<{
    cacheSize: number,
    threshold: number,
    zlib: $Shape<{
      /**
       * default: zlib.constants.Z_NO_FLUSH
       */
      flush?: number,

      /**
       * default: zlib.constants.Z_FINISH
       */
      finishFlush?: number,

      /**
       * default: 16*1024
       */
      chunkSize?: number,
      windowBits?: number,

      /**
       * compression only
       */
      strategy?: number,

      /**
       * deflate/inflate only, empty dictionary by default
       */
      dictionary?: any,

      /**
       * compression only
       */
      level: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,

      /**
       * compression only
       */
      memLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    }>,
    brotli: {
      lgblock: number,
      lgwin: number,
      mode: 0 | 1 | 2,
      quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
    },
    filter: FilterFunction,
    cache(req: Request, res: Response): boolean
  }>;
  declare interface CreateMiddleware {
    (options?: Options): RequestHandler;
    filter: FilterFunction;
  }
  declare var createMiddleware: CreateMiddleware;
  declare module.exports: typeof createMiddleware;
}
