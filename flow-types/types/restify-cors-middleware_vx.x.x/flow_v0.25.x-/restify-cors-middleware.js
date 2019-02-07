declare module "restify-cors-middleware" {
  import type { RequestHandler } from "restify";

  declare interface corsMiddleware$Options {
    /**
     * an array of whitelisted origins
     * can be both strings and regular expressions
     */
    origins: Array<string | RegExp>;

    /**
     * user defined headers to allow
     */
    allowHeaders: string[];

    /**
     * user defined headers to expose
     */
    exposeHeaders: string[];

    /**
     * if true, uses creds
     */
    credentials?: boolean;

    /**
     * ms to cache preflight requests
     */
    preflightMaxAge?: number;

    /**
     * customize preflight request handling
     */
    preflightStrategy?: any;
  }

  declare interface corsMiddleware$CorsMiddleware {
    actual: RequestHandler;
    preflight: RequestHandler;
  }
  declare function corsMiddleware(
    options: corsMiddleware$corsMiddleware$Options
  ): corsMiddleware$corsMiddleware$CorsMiddleware;

  declare module.exports: typeof corsMiddleware;
}
