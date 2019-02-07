declare module "istanbul-middleware" {
  import typeof * as express from "express";

  declare type Matcher = (file: string) => boolean;
  declare type PostLoadHookFn = (file: any) => {};
  declare type PostLoadHook = (
    matcherfn: Matcher,
    transformer: any,
    verbose: boolean
  ) => PostLoadHookFn;
  declare export function hookLoader(
    matcherOrRoot: Matcher | string,
    opts?: {
      postLoadHook?: PostLoadHook,
      verbose?: boolean
    }
  ): void;

  declare export function createHandler(opts?: {
    resetOnGet?: boolean
  }): any;

  declare type ClientMatcher = (req: express.Request) => boolean;
  declare type PathTransformer = (req: express.Request) => string;
  declare export function createClientHandler(
    root: string,
    opts?: {
      matcher?: ClientMatcher,
      pathTransformer?: PathTransformer,
      verbose?: boolean
    }
  ): any;
}
