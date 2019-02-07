declare module "@feathersjs/express" {
  import type { Application as FeathersApplication } from "@feathersjs/feathers";

  import typeof * as express from "express";

  import typeof * as self from "@feathersjs/express";

  declare var feathersExpress: (<T>(
    app: FeathersApplication<T>
  ) => Application<T>) &
    typeof self;
  declare export default typeof feathersExpress;

  declare export type Application<T> = express.Application &
    FeathersApplication<T>;
  declare export function errorHandler(options?: {
    public?: string,
    logger?: {
      error?: (msg: string) => void
    },
    html?: any,
    json?: any
  }): express.ErrorRequestHandler;

  declare export function notFound(): express.RequestHandler;

  declare export var rest: {
    (handler?: express.RequestHandler): () => void,
    formatter: express.RequestHandler
  };
  declare export {
    CookieOptions,
    Errback,
    ErrorRequestHandler,
    Express,
    Handler,
    IRoute,
    IRouter,
    IRouterHandler,
    IRouterMatcher,
    json,
    MediaType,
    NextFunction,
    Request,
    RequestHandler,
    RequestParamHandler,
    Response,
    Router,
    RouterOptions,
    Send,
    static,
    urlencoded
  } from "express";

  declare export var original: typeof express;
}
