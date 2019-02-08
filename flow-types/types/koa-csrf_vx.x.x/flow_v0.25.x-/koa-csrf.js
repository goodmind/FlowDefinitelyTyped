declare module "koa" {
  declare interface Context {
    csrf: string;
  }
}
declare module "koa-csrf" {
  declare module.exports: typeof koaCsrf;

  import type { Middleware } from "koa";

  declare var koaCsrf: {
    new(opts?: {
      invalidSessionSecretMessage?: string,
      invalidSessionSecretStatusCode?: number,
      invalidTokenMessage?: string,
      invalidTokenStatusCode?: number,
      excludedMethods?: string[],
      disableQuery?: boolean
    }): Middleware
  };
}
