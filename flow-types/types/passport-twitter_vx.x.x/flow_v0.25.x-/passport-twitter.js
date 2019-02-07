declare module "passport-twitter" {
  declare type Profile = {
    gender: string,
    username: string,
    _raw: string,
    _json: any,
    _accessLevel: string
  } & passport.Profile;

  declare interface IStrategyOptionBase {
    consumerKey: string;
    consumerSecret: string;
    callbackURL: string;
    includeEmail?: true;
    reguestTokenURL?: string;
    accessTokenURL?: string;
    userAuthorizationURL?: string;
    sessionKey?: string;
    userProfileURL?: string;
    skipExtendedUserProfile?: boolean;
  }
  declare type IStrategyOption = {
    passReqToCallback?: false
  } & IStrategyOptionBase;

  declare type IStrategyOptionWithRequest = {
    passReqToCallback: true
  } & IStrategyOptionBase;

  declare class Strategy mixins passport.Strategy {
    constructor(
      options: IStrategyOption,
      verify: (
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (error: any, user?: any) => void
      ) => void
    ): this;
    constructor(
      options: IStrategyOptionWithRequest,
      verify: (
        req: express.Request,
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (error: any, user?: any) => void
      ) => void
    ): this;
    name: string;
    authenticate(req: express.Request, options?: Object): void;
  }
}
