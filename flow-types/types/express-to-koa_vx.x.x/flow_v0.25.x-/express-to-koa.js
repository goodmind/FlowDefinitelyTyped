declare module "express-to-koa" {
  import typeof * as Koa from "koa";

  import type { IncomingMessage, ServerResponse } from "http";

  declare module.exports: typeof expressToKoa;

  declare function expressToKoa(
    middleware: (
      req: IncomingMessage,
      res: ServerResponse,
      next: (err?: any) => void
    ) => void
  ): Koa.Middleware;
}
