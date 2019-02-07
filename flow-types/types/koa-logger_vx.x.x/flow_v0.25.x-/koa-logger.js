declare module "koa-logger" {
  import type { Middleware } from "koa";

  declare type Transporter = (
    str: string,
    args: { [key: string]: any }
  ) => void;
  declare interface TransporterOpts {
    transporter: Transporter;
  }
  declare function KoaLogger(opts?: Transporter | TransporterOpts): Middleware;

  declare module.exports: typeof KoaLogger;
}
