declare module "passport-kakao" {
  declare export type Profile = {
    id: string,
    provider: string,
    _raw: string,
    _json: any
  } & passport.Profile;

  declare export interface StrategyOption {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    scopeSeparator?: string;
    customHeaders?: string;
  }
  declare export type StrategyOptionWithRequest = {
    passReqToCallback: boolean
  } & StrategyOption;

  declare export type VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void
  ) => void;
  declare export type VerifyFunctionWithRequest = (
    req: express.Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void
  ) => void;
  declare export class Strategy mixins passport.Strategy {
    constructor(options: StrategyOption, verify: VerifyFunction): this;
    constructor(
      options: StrategyOptionWithRequest,
      verify: VerifyFunctionWithRequest
    ): this;
    authenticate(req: express.Request, options?: any): void;
    userProfile: (
      accessToken: string,
      done: (error: any, user?: any) => void
    ) => void;
  }
}
