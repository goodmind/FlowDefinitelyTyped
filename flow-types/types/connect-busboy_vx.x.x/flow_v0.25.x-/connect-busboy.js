declare module "connect-busboy" {
  import typeof * as busboy from "busboy";

  import type { RequestHandler } from "express";

  declare function connectBusboy(
    options?: connectBusboy$connectBusboy$ConnectBusboyOptions
  ): RequestHandler;

  declare type connectBusboy$ConnectBusboyOptions = {
    immediate?: boolean
  } & busboy.BusboyConfig;

  declare module.exports: typeof connectBusboy;
}
