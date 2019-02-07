declare module "connect-history-api-fallback-exclusions" {
  import type { Url } from "url";

  import typeof * as core from "express-serve-static-core";

  declare function historyApiFallback(
    options?: historyApiFallback$historyApiFallback$Options
  ): core.RequestHandler;

  declare interface historyApiFallback$Options {
    exclusions?: string[];
    disableDotRule?: true;
    htmlAcceptHeaders?: string[];
    index?: string;
    logger?: typeof undefined;
    rewrites?: historyApiFallback$Rewrite[];
    verbose?: boolean;
  }

  declare interface historyApiFallback$Context {
    match: RegExpMatchArray;
    parsedUrl: Url;
  }

  declare type historyApiFallback$RewriteTo = (
    context: historyApiFallback$Context
  ) => string;

  declare interface historyApiFallback$Rewrite {
    from: RegExp;
    to: string | RegExp | historyApiFallback$RewriteTo;
  }
  declare module.exports: typeof historyApiFallback;
}
