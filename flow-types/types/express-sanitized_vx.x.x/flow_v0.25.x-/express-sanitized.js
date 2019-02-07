declare module "express-sanitized" {
  import typeof * as express from "express";

  declare type e = () => (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void;
  declare var expressSanitized: e;
  declare module.exports: typeof expressSanitized;
}
