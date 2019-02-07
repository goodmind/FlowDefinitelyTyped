declare module "micro-cors" {
  import type { RequestHandler } from "micro";

  declare interface Options {
    maxAge?: string;
    origin?: string;
    allowHeaders?: string[];
    allowMethods?: string[];
    exposeHeaders?: string[];
  }
  declare function micro_cors(
    options?: Options
  ): (handler: RequestHandler) => RequestHandler;

  declare module.exports: typeof micro_cors;
}
