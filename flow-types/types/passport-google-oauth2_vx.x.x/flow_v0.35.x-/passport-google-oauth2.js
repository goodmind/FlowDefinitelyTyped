declare module 'passport-google-oauth2' {
        import type {
          Request
        } from 'express';

	declare export interface StrategyOptions {
clientID: string,
clientSecret: string,
callbackURL: string,
passReqToCallback?: true,
scope?: string[],
proxy?: boolean
} 
	declare export interface StrategyOptionsWithRequest {
clientID: string,
clientSecret: string,
callbackURL: string,
passReqToCallback: true,
scope?: string[]
} 
	declare export interface VerifyOptions {
message: string
} 
	declare export type VerifyCallback = (error: any, user?: any, options?: VerifyOptions) => void;
	declare export type VerifyFunctionWithRequest = (
req: Request,
accessToken: string,
refreshToken: string,
profile: any,
done: VerifyCallback) => void;
	declare export type VerifyFunction = (
accessToken: string,
refreshToken: string,
profile: any,
done: VerifyCallback) => void;
	declare export class Strategy mixins Strategy {
name: string;
authenticate: (req: Request, options?: {[key: string]: any}) => void;
constructor(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest): this;
constructor(options: StrategyOptions, verify: VerifyFunction): this;
constructor(verify: VerifyFunction): this
}
    }
