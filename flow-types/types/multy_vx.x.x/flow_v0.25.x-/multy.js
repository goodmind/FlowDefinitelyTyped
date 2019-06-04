declare module "koa" {
  declare interface Request {
    body: any;
  }
}
declare module "multy" {
  import typeof * as Koa from "koa";

  import typeof * as busboy from "busboy";

  declare type multy$Options = busboy.BusboyConfig;
  declare function multy(opts?: multy$Options): Koa.Middleware;

  declare export default typeof multy;
}
