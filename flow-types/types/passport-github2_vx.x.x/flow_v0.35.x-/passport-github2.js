declare module 'passport-github2' {
        import type {
          OutgoingHttpHeaders
        } from 'http';

	declare export type Profile = {
profileUrl: string
} & passport.Profile

	declare export type StrategyOption = {
clientID: string,
clientSecret: string,
callbackURL: string,
scope?: string[],
userAgent?: string,
authorizationURL?: string,
tokenURL?: string,
scopeSeparator?: string,
customHeaders?: OutgoingHttpHeaders,
userProfileURL?: string
} & passport.AuthenticateOptions

	declare export type OAuth2StrategyOptionsWithoutRequiredURLs = Pick<oauth2._StrategyOptionsBase, Exclude<$Keys<oauth2._StrategyOptionsBase>, "authorizationURL" | "tokenURL">>;
	declare export type _StrategyOptionsBase = {
clientID: string,
clientSecret: string,
callbackURL: string,
scope?: string[],
userAgent?: string,
state?: string,
authorizationURL?: string,
tokenURL?: string,
scopeSeparator?: string,
customHeaders?: OutgoingHttpHeaders,
userProfileURL?: string
} & OAuth2StrategyOptionsWithoutRequiredURLs

	declare export type StrategyOptions = {
passReqToCallback?: false
} & _StrategyOptionsBase

	declare export type StrategyOptionsWithRequest = {
passReqToCallback: true
} & _StrategyOptionsBase

	declare export class Strategy mixins oauth2.Strategy {
constructor(options: StrategyOptions, verify: oauth2.VerifyFunction): this;
constructor(options: StrategyOptionsWithRequest, verify: oauth2.VerifyFunctionWithRequest): this;
userProfile(accessToken: string, done: (err?: Error | null, profile?: any) => void): void;
name: string;
authenticate(req: express.Request, options?: passport.AuthenticateOptions): void
}
    }
