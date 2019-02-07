declare module "passport-unique-token" {
  declare export interface StrategyOptions {
    tokenField?: string;
    tokenQuery?: string;
    tokenParams?: string;
    tokenHeader?: string;
    failedOnMissing?: boolean;
    passReqToCallback?: false;
  }
  declare export interface StrategyOptionsWithRequest {
    tokenField?: string;
    tokenQuery?: string;
    tokenParams?: string;
    tokenHeader?: string;
    failedOnMissing?: boolean;
    passReqToCallback: true;
  }
  declare export interface VerifyOptions {
    message: string;
  }
  declare export type VerifyFunctionWithRequest = (
    req: express.Request,
    token: string,
    done: (error: any, user?: any, options?: VerifyOptions) => void
  ) => void;
  declare export type VerifyFunction = (
    token: string,
    done: (error: any, user?: any, options?: VerifyOptions) => void
  ) => void;
  declare export class Strategy mixins passport.Strategy {
    constructor(
      options: StrategyOptionsWithRequest,
      verify: VerifyFunctionWithRequest
    ): this;
    constructor(options: StrategyOptions, verify: VerifyFunction): this;
    constructor(verify: VerifyFunction): this;
    name: string;
    authenticate(req: express.Request, options?: { [key: string]: any }): void;
  }
}
