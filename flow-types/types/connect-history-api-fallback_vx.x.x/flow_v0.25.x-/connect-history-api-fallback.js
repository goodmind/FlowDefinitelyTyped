declare module "connect-history-api-fallback" {
  import type { Url } from "url";

  import typeof * as core from "express-serve-static-core";

  declare function historyApiFallback(options?: Options): core.RequestHandler;

  declare module.exports: typeof historyApiFallback;

  declare interface Options {
    disableDotRule?: true;
    htmlAcceptHeaders?: string[];
    index?: string;
    logger?: typeof undefined;
    rewrites?: Rewrite[];
    verbose?: boolean;
  }
  declare interface Context {
    match: RegExpMatchArray;
    parsedUrl: Url;
  }
  declare type RewriteTo = (context: Context) => string;
  declare interface Rewrite {
    from: RegExp;
    to: string | RegExp | RewriteTo;
  }
}
