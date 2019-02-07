declare module "koa-ratelimit-lru" {
  import type { Middleware } from "koa";

  declare interface rateLimit$Options {
    +duration?: number;
    +max?: number;
    +prefix?: string;
    +store?: any;
    +rate?: number;
    +id?: string;
    +headers?: {
      +remaining?: string,
      +reset?: string,
      +total?: string
    };
    +errorMessage?: string;
  }
  declare function rateLimit(options?: rateLimit$rateLimit$Options): Middleware;

  declare module.exports: typeof rateLimit;
}
