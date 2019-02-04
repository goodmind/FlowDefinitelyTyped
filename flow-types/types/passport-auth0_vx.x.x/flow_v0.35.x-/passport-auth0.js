declare module 'passport-auth0' {
        declare export type Profile = {
id: string,
displayName: string,
gender?: string,
ageRange?: {
min: number,
max?: number
},
profileUrl?: string,
username?: string,
birthday: string,
_raw: string,
_json: any
} & passport.Profile

	declare export type AuthenticateOptions = {
authType?: string
} & passport.AuthenticateOptions

	declare export interface StrategyOption {
clientID: string,
clientSecret: string,
callbackURL: string,
domain: string,
scopeSeparator?: string,
enableProof?: boolean,
profileFields?: string[],
state?: boolean
} 
	declare export type StrategyOptionWithRequest = {
passReqToCallback: true
} & StrategyOption

	declare export interface ExtraVerificationParams {
audience?: string,
connection?: string,
prompt?: string
} 
	declare export type VerifyFunction = (
accessToken: string,
refreshToken: string,
extraParams: ExtraVerificationParams,
profile: Profile,
done: (error: any, user?: any, info?: any) => void) => void;
	declare export type VerifyFunctionWithRequest = (
req: express.Request,
accessToken: string,
refreshToken: string,
profile: Profile,
done: (error: any, user?: any, info?: any) => void) => void;
	declare export class Strategy mixins passport.Strategy {
constructor(options: StrategyOptionWithRequest, verify: VerifyFunctionWithRequest): this;
constructor(options: StrategyOption, verify: VerifyFunction): this;
name: string;
authenticate(req: express.Request, options?: {[key: string]: any}): void
}
    }
