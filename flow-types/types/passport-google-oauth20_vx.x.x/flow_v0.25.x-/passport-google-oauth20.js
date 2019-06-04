declare module "passport-google-oauth20" {
  import typeof * as passport from "passport";

  import typeof * as express from "express";

  import typeof * as oauth2 from "passport-oauth2";

  import type { OutgoingHttpHeaders } from "http";

  declare export type OAuth2StrategyOptionsWithoutRequiredURLs = Pick<
    oauth2._StrategyOptionsBase,
    Exclude<$Keys<oauth2._StrategyOptionsBase>, "authorizationURL" | "tokenURL">
  >;
  declare export type _StrategyOptionsBase = {
    authorizationURL?: string,
    callbackURL?: string,
    clientID: string,
    clientSecret: string,
    scope?: string | string[],
    tokenURL?: string,
    userProfileURL?: string
  } & OAuth2StrategyOptionsWithoutRequiredURLs;

  declare export type StrategyOptions = {
    passReqToCallback?: false
  } & _StrategyOptionsBase;

  declare export type StrategyOptionsWithRequest = {
    passReqToCallback: true
  } & _StrategyOptionsBase;

  declare export type Profile = {
    profileUrl: string
  } & passport.Profile;

  declare export class Strategy mixins oauth2.Strategy {
    constructor(
      options: StrategyOptions,
      verify: (
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: oauth2.VerifyCallback
      ) => void
    ): this;
    constructor(
      options: StrategyOptionsWithRequest,
      verify: (
        req: express.Request,
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: oauth2.VerifyCallback
      ) => void
    ): this;
  }
}
