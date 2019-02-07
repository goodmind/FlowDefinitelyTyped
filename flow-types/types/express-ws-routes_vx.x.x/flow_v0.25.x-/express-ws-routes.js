declare module "express-ws-routes" {
  import type {
    expressWsRoutes$Express as exExpress,
    Request,
    NextFunction
  } from "express";

  import typeof * as WebSocket from "ws";

  import type { expressWsRoutes$Server as httpServer } from "http";

  import type { expressWsRoutes$Router as coreRouter } from "express-serve-static-core";

  declare function expressWsRoutes(): expressWsRoutes$expressWsRoutes$Express;

  declare interface expressWsRoutes$ClientInfo {
    origin: string;
    secure: boolean;
    req: Request;
  }

  declare type expressWsRoutes$WebSocketHandler = (socket: WebSocket) => void;

  declare type expressWsRoutes$CbHandler = (
    connectHandler: expressWsRoutes$WebSocketHandler | boolean
  ) => void;

  declare type expressWsRoutes$WebSocketRouteHandler = (
    info: expressWsRoutes$ClientInfo,
    cb: expressWsRoutes$CbHandler,
    next: NextFunction
  ) => void;

  declare type expressWsRoutes$Server = {
    wsServer: WebSocket.expressWsRoutes$Server
  } & httpServer;

  declare type expressWsRoutes$Express = {
    websocket(
      route: string,
      handler: expressWsRoutes$WebSocketRouteHandler
    ): expressWsRoutes$Express
  } & exExpress;

  declare type expressWsRoutes$Router = {
    websocket(
      route: string,
      handler: expressWsRoutes$WebSocketRouteHandler
    ): expressWsRoutes$Router
  } & coreRouter;

  declare module.exports: typeof expressWsRoutes;
}
