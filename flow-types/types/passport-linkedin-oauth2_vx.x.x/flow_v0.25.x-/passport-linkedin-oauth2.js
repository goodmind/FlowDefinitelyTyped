declare module "passport-linkedin-oauth2" {
  import type {
    Profile as passportProfile,
    AuthenticateOptions,
    Strategy as passportStrategy
  } from "passport";

  import type { Request } from "express";

  declare export type Profile = {
    id: string,
    displayName: string,
    name: {
      familyName: string,
      givenName: string
    },
    emails: [
      {
        value: string
      }
    ],
    photos: [
      {
        value: string
      }
    ],
    _raw: string,
    _json: any
  } & passportProfile;

  declare export type AuthenticateOptions = {
    authType?: string
  } & AuthenticateOptions;

  declare export interface StrategyOption {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    scopeSeparator?: string;
    enableProof?: boolean;
    profileFields?: string[];
  }
  declare export type StrategyOptionWithRequest = {
    passReqToCallback: true
  } & StrategyOption;

  declare export type VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void
  ) => void;
  declare export type VerifyFunctionWithRequest = (
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void
  ) => void;
  declare export class Strategy mixins passportStrategy {
    constructor(
      options: StrategyOptionWithRequest,
      verify: VerifyFunctionWithRequest
    ): this;
    constructor(options: StrategyOption, verify: VerifyFunction): this;
    name: string;
    authenticate(req: Request, options?: { [key: string]: any }): void;
  }
}
