declare module "passport-jwt" {
  import type { Strategy as PassportStrategy } from "passport-strategy";

  import type { Request } from "express";

  import type { VerifyOptions } from "jsonwebtoken";

  declare export class Strategy mixins PassportStrategy {
    constructor(opt: StrategyOptions, verify: VerifyCallback): this;
    constructor(opt: StrategyOptions, verify: VerifyCallbackWithRequest): this;
  }
  declare export interface StrategyOptions {
    secretOrKey?: string | Buffer;
    secretOrKeyProvider?: any;
    jwtFromRequest: JwtFromRequestFunction;
    issuer?: string;
    audience?: string;
    algorithms?: string[];
    ignoreExpiration?: boolean;
    passReqToCallback?: boolean;
    jsonWebTokenOptions?: VerifyOptions;
  }
  declare export interface VerifyCallback {
    (payload: any, done: VerifiedCallback): void;
  }
  declare export interface VerifyCallbackWithRequest {
    (req: Request, payload: any, done: VerifiedCallback): void;
  }
  declare export interface VerifiedCallback {
    (error: any, user?: any, info?: any): void;
  }
  declare export interface JwtFromRequestFunction {
    (req: Request): string;
  }

  declare var npm$namespace$ExtractJwt: {
    fromHeader: typeof ExtractJwt$fromHeader,
    fromBodyField: typeof ExtractJwt$fromBodyField,
    fromUrlQueryParameter: typeof ExtractJwt$fromUrlQueryParameter,
    fromAuthHeaderWithScheme: typeof ExtractJwt$fromAuthHeaderWithScheme,
    fromAuthHeader: typeof ExtractJwt$fromAuthHeader,
    fromExtractors: typeof ExtractJwt$fromExtractors,
    fromAuthHeaderAsBearerToken: typeof ExtractJwt$fromAuthHeaderAsBearerToken
  };
  declare export function ExtractJwt$fromHeader(
    header_name: string
  ): JwtFromRequestFunction;

  declare export function ExtractJwt$fromBodyField(
    field_name: string
  ): JwtFromRequestFunction;

  declare export function ExtractJwt$fromUrlQueryParameter(
    param_name: string
  ): JwtFromRequestFunction;

  declare export function ExtractJwt$fromAuthHeaderWithScheme(
    auth_scheme: string
  ): JwtFromRequestFunction;

  declare export function ExtractJwt$fromAuthHeader(): JwtFromRequestFunction;

  declare export function ExtractJwt$fromExtractors(
    extractors: JwtFromRequestFunction[]
  ): JwtFromRequestFunction;

  declare export function ExtractJwt$fromAuthHeaderAsBearerToken(): JwtFromRequestFunction;
}
