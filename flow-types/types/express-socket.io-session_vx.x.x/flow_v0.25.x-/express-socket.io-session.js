declare interface sharedsession$SharedSessionOptions {
  autoSave?: boolean;
  saveUninitialized?: boolean;
  autoSave?: boolean;
  saveUninitialized?: boolean;
}

declare type sharedsession$SocketIoSharedSessionMiddleware = (
  socket: socketio.Socket,
  next: (err?: any) => void
) => void;
declare module "socket.io" {
  declare interface Handshake {
    session?: Express.Session;
    sessionID?: string;
  }
}
declare module "express-socket.io-session" {
  declare function sharedsession(
    expressSessionMiddleware: express.RequestHandler,
    cookieParserMiddleware: express.RequestHandler,
    options?: sharedsession$sharedsession$SharedSessionOptions
  ): sharedsession$sharedsession$SocketIoSharedSessionMiddleware;

  declare function sharedsession(
    expressSessionMiddleware: express.RequestHandler,
    options?: sharedsession$sharedsession$SharedSessionOptions
  ): sharedsession$sharedsession$SocketIoSharedSessionMiddleware;

  declare interface sharedsession$SharedSessionOptions {
    autoSave?: boolean;
    saveUninitialized?: boolean;
    autoSave?: boolean;
    saveUninitialized?: boolean;
  }

  declare type sharedsession$SocketIoSharedSessionMiddleware = (
    socket: socketio.Socket,
    next: (err?: any) => void
  ) => void;
  declare module.exports: typeof sharedsession;
}
