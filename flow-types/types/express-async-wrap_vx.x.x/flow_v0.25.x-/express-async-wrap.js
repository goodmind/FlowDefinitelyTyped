declare module "express-async-wrap" {
  import type { NextFunction } from "connect";

  import type {
    Response,
    RequestHandler,
    ErrorRequestHandler,
    Request
  } from "express-serve-static-core";

  declare function asyncWrap(
    handler: (req: Request, res: Response, next: NextFunction) => Promise<void>
  ): RequestHandler;

  declare function asyncWrap(
    handler: (
      err: any,
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void>
  ): ErrorRequestHandler;

  declare export default typeof asyncWrap;
}
