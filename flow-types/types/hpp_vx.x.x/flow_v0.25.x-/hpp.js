declare module "hpp" {
  import typeof * as express from "express";

  declare interface hpp$Options {
    checkBody?: boolean;
    checkBodyOnlyForContentType?: string;
    checkQuery?: boolean;
    whitelist?: string | string[];
  }
  declare function hpp(options?: hpp$hpp$Options): express.RequestHandler;

  declare module.exports: typeof hpp;
}
