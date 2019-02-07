declare module "passport-remember-me-extended" {
  declare export interface StrategyOption {
    key?: string;
    cookie?: express.CookieOptions;
  }
  declare export type StrategyOptionWithRequest = {
    passReqToCallback: true
  } & StrategyOption;

  declare export type VerifyFunction = (
    token: any,
    done: (err: any, user?: any, info?: any) => void
  ) => void;
  declare export type VerifyFunctionWithRequest = (
    req: express.Request,
    token: any,
    done: (err: any, user?: any, info?: any) => void
  ) => void;
  declare export type IssueFunction = (
    user: any,
    done: (err: any, token?: any) => void
  ) => void;
  declare export type IssueFunctionWithRequest = (
    req: express.Request,
    user: any,
    done: (err: any, token?: any) => void
  ) => void;
  declare export class Strategy mixins passport.Strategy {
    constructor(verify: VerifyFunction, issue: IssueFunction): this;
    constructor(
      options: StrategyOptionWithRequest,
      verify: VerifyFunctionWithRequest,
      issue: IssueFunctionWithRequest
    ): this;
    constructor(
      options: StrategyOption,
      verify: VerifyFunction,
      issue: IssueFunction
    ): this;
    authenticate(
      req: express.Request,
      options?: passport.AuthenticateOptions
    ): void;
  }
}
