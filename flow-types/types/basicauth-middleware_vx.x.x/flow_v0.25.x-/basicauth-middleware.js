declare module "basicauth-middleware" {
  import type { RequestHandler } from "express";

  declare type checkFunctionSync = (
    username: string,
    password: string
  ) => boolean;
  declare type checkFunctionCallback = (
    username: string,
    password: string,
    callback: (err: Error | null, authorized: boolean) => void
  ) => void;
  declare type checkFunctionPromise = (
    username: string,
    password: string
  ) => PromiseLike<boolean>;
  declare type CheckFunction =
    | checkFunctionSync
    | checkFunctionPromise
    | checkFunctionCallback;
  declare function basicAuth(
    checkFnOrUsers: Array<[string, string]> | CheckFunction,
    realm?: string
  ): RequestHandler;

  declare function basicAuth(
    username: string,
    password: string,
    realm?: string
  ): RequestHandler;

  declare module.exports: typeof basicAuth;
}
