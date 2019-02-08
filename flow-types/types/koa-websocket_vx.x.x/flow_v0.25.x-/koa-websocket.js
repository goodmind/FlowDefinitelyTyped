declare type KoaWebsocket$Middleware = compose.KoaWebsocket$Middleware<KoaWebsocket$MiddlewareContext>;

declare type KoaWebsocket$MiddlewareContext = {
  app: KoaWebsocket$App
} & Koa.Context;

declare class KoaWebsocket$Server {
  app: KoaWebsocket$App;
  middleware: KoaWebsocket$Middleware[];
  server: ws.KoaWebsocket$Server;
  constructor(app: Koa): this;
  listen(options: ws.ServerOptions): ws.KoaWebsocket$Server;
  onConnection(socket: ws, request: http.IncomingMessage): void;
  use(middleware: KoaWebsocket$Middleware): this;
}

declare type KoaWebsocket$App = {
  ws: KoaWebsocket$Server
} & Koa;
declare module "koa" {
  declare interface Context {
    websocket: ws;
    path: string;
  }
}
declare module "koa-websocket" {
  import typeof * as ws from "ws";

  import typeof * as http from "http";

  import typeof * as https from "https";

  declare function KoaWebsocket(
    app: Koa,
    wsOptions?: ws.ServerOptions,
    httpsOptions?: https.ServerOptions
  ): KoaWebsocket$KoaWebsocket$App;

  declare module.exports: typeof KoaWebsocket;
}
