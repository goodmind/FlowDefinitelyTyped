declare module 'passport-vkontakte' {
        import typeof * as passport from 'passport';

	import typeof * as express from 'express';

	declare export type Profile = {
gender?: string,
profileUrl?: string,
_raw: string,
_json: any
} & passport.Profile

	declare export interface StrategyOptions {
clientID: string,
clientSecret: string,
callbackURL: string,
profileFields?: string[],
apiVersion?: string,
lang?: string
} 
	declare export type VerifyCallback = (error: any, user?: any, info?: any) => void;
	declare export interface Params {
accessToken: string,
email?: string,
expires_in: number,
user_id: number
} 
	declare export type VerifyFunctionWithParams = (
accessToken: string,
refreshToken: string,
params: Params,
profile: Profile,
done: VerifyCallback) => void;
	declare export type VerifyFunction = (
accessToken: string,
refreshToken: string,
profile: Profile,
done: VerifyCallback) => void;
	declare export class Strategy mixins passport.Strategy {
constructor(options: StrategyOptions, verify: VerifyFunctionWithParams | VerifyFunction): this;
name: string;
authenticate: (req: express.Request, options?: {[key: string]: any}) => void
}
    }
