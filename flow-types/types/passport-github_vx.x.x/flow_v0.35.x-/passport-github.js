declare module 'passport-github' {
        import type {
          OutgoingHttpHeaders
        } from 'http';

	declare export type Profile = {
profileUrl: string
} & passport.Profile

	declare export interface StrategyOptionBase {
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
} 
	declare export type OAuth2StrategyOptionsWithoutRequiredURLs = Pick<OAuth2._StrategyOptionsBase, Exclude<$Keys<OAuth2._StrategyOptionsBase>, "authorizationURL" | "tokenURL">>;
	declare export type StrategyOption = {
passReqToCallback?: false
} & StrategyOptionBase

	declare export type StrategyOptionWithRequest = {
passReqToCallback: true
} & StrategyOptionBase

	declare export class Strategy mixins passport.Strategy {
constructor(options: StrategyOption, verify: (
accessToken: string,
refreshToken: string,
profile: Profile,
done: (error: any, user?: any) => void) => void): this;
constructor(options: StrategyOptionWithRequest, verify: (
req: express.Request,
accessToken: string,
refreshToken: string,
profile: Profile,
done: (error: any, user?: any) => void) => void): this;
userProfile: (accessToken: string, done?: (error: any, profile: Profile) => void) => void;
name: string;
authenticate(req: express.Request, options?: passport.AuthenticateOptions): void
}
    }
