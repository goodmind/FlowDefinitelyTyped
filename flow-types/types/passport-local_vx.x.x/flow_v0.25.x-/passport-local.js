declare module "passport-local" {
  import type { Strategy as PassportStrategy } from "passport-strategy";

  declare interface IStrategyOptions {
    usernameField?: string;
    passwordField?: string;
    session?: boolean;
    passReqToCallback?: false;
  }
  declare interface IStrategyOptionsWithRequest {
    usernameField?: string;
    passwordField?: string;
    session?: boolean;
    passReqToCallback: true;
  }
  declare interface IVerifyOptions {
    message: string;
  }
  declare interface VerifyFunctionWithRequest {
    (
      req: express.Request,
      username: string,
      password: string,
      done: (error: any, user?: any, options?: IVerifyOptions) => void
    ): void;
  }
  declare interface VerifyFunction {
    (
      username: string,
      password: string,
      done: (error: any, user?: any, options?: IVerifyOptions) => void
    ): void;
  }
  declare class Strategy mixins PassportStrategy {
    constructor(
      options: IStrategyOptionsWithRequest,
      verify: VerifyFunctionWithRequest
    ): this;
    constructor(options: IStrategyOptions, verify: VerifyFunction): this;
    constructor(verify: VerifyFunction): this;
    name: string;
  }
}
