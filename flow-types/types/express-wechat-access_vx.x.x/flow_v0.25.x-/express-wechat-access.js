declare module "express-wechat-access" {
  import type { Response, NextFunction } from "express";

  import typeof * as http from "http";

  import type { EventEmitter } from "events";

  declare type WeMiddleware = (
    req: any,
    res: Response | http.ServerResponse,
    next: NextFunction
  ) => any;
  declare function weAccessMiddleware(
    options: {
      accessTokenUrl?: string,
      ticketUrl?: string,
      appId: string,
      appSecret: string,
      https?: boolean
    },
    errorHandler?: (e: any) => any
  ): WeMiddleware;

  declare interface weAccessMiddleware$WeAccessMidOption {
    accessTokenUrl?: string;
    ticketUrl?: string;
    appId: string;
    appSecret: string;
    https?: boolean;
  }

  declare type weAccessMiddleware$WeAccessMiddleware = {} & WeMiddleware &
    EventEmitter &
    Function;

  declare module.exports: typeof weAccessMiddleware;
}
