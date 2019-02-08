declare type expressWs$Application = express.expressWs$Application &
  expressWs$WithWebsocketMethod;

declare type expressWs$Router = express.expressWs$Router &
  expressWs$WithWebsocketMethod;

declare interface expressWs$Options {
  leaveRouterUntouched?: boolean;
  wsOptions?: ws.ServerOptions;
}

declare interface expressWs$RouterLike {
  get: express.IRouterMatcher<this>;
  [key: string]: any;
  [key: number]: any;
}

declare interface expressWs$Instance {
  app: expressWs$Application;
  applyTo(target: expressWs$RouterLike): void;
  getWss(): ws.Server;
}

declare type expressWs$WebsocketRequestHandler = (
  ws: ws,
  req: express.Request,
  next: express.NextFunction
) => void;

declare type expressWs$WebsocketMethod<T> = (
  route: core.PathParams,
  ...middlewares: expressWs$WebsocketRequestHandler[]
) => T;

declare interface expressWs$WithWebsocketMethod {
  ws: expressWs$WebsocketMethod<this>;
}
declare module "express" {
  declare function Router(options?: RouterOptions): expressWs$expressWs$Router;
}
declare module "express-ws" {
  import typeof * as core from "express-serve-static-core";

  import typeof * as express from "express";

  import typeof * as http from "http";

  import typeof * as https from "https";

  import typeof * as ws from "ws";

  declare function expressWs(
    app: express.expressWs$Application,
    server?: http.Server | https.Server,
    options?: expressWs$expressWs$Options
  ): expressWs$expressWs$Instance;

  declare module.exports: typeof expressWs;
}
