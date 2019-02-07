declare module "sc-auth" {
  import type {
    VerifyOptions,
    VerifyCallback,
    Secret,
    SignCallback,
    SignOptions
  } from "jsonwebtoken";

  declare export interface SCAuthEngine {
    verifyToken(
      signedToken: string,
      key: string | Buffer,
      options?: VerifyOptions,
      callback?: VerifyCallback
    ): void;
    signToken(
      token: string | { [key: string]: any } | Buffer,
      key: Secret,
      options?: SignOptions,
      callback?: SignCallback
    ): void;
  }
  declare export class AuthEngine mixins SCAuthEngine {
    constructor(): this;
    verifyToken(
      signedToken: string,
      key: string | Buffer,
      options?: VerifyOptions,
      callback?: VerifyCallback
    ): void;
    signToken(
      token: string | { [key: string]: any } | Buffer,
      key: Secret,
      options?: SignOptions,
      callback?: SignCallback
    ): void;
  }
}
