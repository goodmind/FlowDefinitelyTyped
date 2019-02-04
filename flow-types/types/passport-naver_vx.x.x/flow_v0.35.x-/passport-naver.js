declare module 'passport-naver' {
        declare export type Profile = {
id: string,
provider: string,
_json: {
email: string,
nickname: string,
profile_image: string,
age: number,
birthday: any,
id: string
}
} & passport.Profile

	declare export interface StrategyOption {
clientID: string,
clientSecret: string,
callbackURL: string,
svcType?: number,
authType?: string,
authorizationURL?: string,
tokenURL?: string,
profileURL?: string
} 
	declare export type StrategyOptionWithRequest = {
passReqToCallback: boolean
} & StrategyOption

	declare export type VerifyFunction = (
accessToken: string,
refreshToken: string,
profile: Profile,
done: (error: any, user?: any, info?: any) => void) => void;
	declare export type VerifyFunctionWithRequest = (
req: express.Request,
accessToken: string,
refreshToken: string,
profile: Profile,
done: (error: any, user?: any, info?: any) => void) => void;
	declare export class Strategy mixins passport.Strategy {
constructor(options: StrategyOption, verify: VerifyFunction): this;
constructor(options: StrategyOptionWithRequest, verify: VerifyFunctionWithRequest): this;
authenticate(req: express.Request, options?: any): void;
authorizationParams: (options: any) => any;
userProfile: (accessToken: string, done: (error: any, user?: any) => void) => void
}
    }
