declare module "passport-facebook-token" {
  import typeof * as passport from "passport";

  import typeof * as express from "express";

  declare interface PassportFacebookToken$StrategyStatic {
    new(
      options: PassportFacebookToken$StrategyOptionsWithRequest,
      verify: PassportFacebookToken$VerifyFunctionWithRequest
    ): PassportFacebookToken$StrategyInstance;
    new(
      options: PassportFacebookToken$StrategyOptions,
      verify: PassportFacebookToken$VerifyFunction
    ): PassportFacebookToken$StrategyInstance;
  }

  declare interface PassportFacebookToken$StrategyInstance {
    name: string;
    authenticate: (req: express.Request, options?: any) => void;
  }

  declare interface PassportFacebookToken$ValueObject {
    value: string;
  }

  declare type PassportFacebookToken$Profile = {
    provider: string,
    id: string,
    displayName: string,
    name: {
      familyName: string,
      givenName: string,
      middleName: string
    },
    gender: string,
    emails: PassportFacebookToken$ValueObject[],
    photos: PassportFacebookToken$ValueObject[],
    _raw: string,
    _json: any
  } & passport.PassportFacebookToken$Profile;

  declare interface PassportFacebookToken$StrategyOptions {
    clientID: string;
    clientSecret: string;
    authorizationURL?: string;
    tokenURL?: string;
    scopeSeparator?: string;
    enableProof?: boolean;
    profileFields?: string[];
  }

  declare type PassportFacebookToken$StrategyOptionsWithRequest = {
    passReqToCallback: true
  } & PassportFacebookToken$StrategyOptions;

  declare type PassportFacebookToken$VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    profile: PassportFacebookToken$Profile,
    done: (error: any, user?: any, info?: any) => void
  ) => void;

  declare type PassportFacebookToken$VerifyFunctionWithRequest = (
    req: express.Request,
    accessToken: string,
    refreshToken: string,
    profile: PassportFacebookToken$Profile,
    done: (error: any, user?: any, info?: any) => void
  ) => void;
  declare var PassportFacebookToken: PassportFacebookToken$PassportFacebookToken$StrategyStatic;
  declare module.exports: typeof PassportFacebookToken;
}
