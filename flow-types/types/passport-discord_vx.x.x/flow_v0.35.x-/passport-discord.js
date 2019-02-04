declare module 'passport-discord' {
        import typeof * as passport from 'passport';

	import typeof * as express from 'express';

	declare export class Strategy mixins passport.Strategy {
constructor(options: Strategy$Strategy$StrategyOption, verify: (
accessToken: string,
refreshToken: string,
profile: Strategy$Strategy$Profile,
done: (error: any, user?: any) => void) => void): this;
name: string;
authenticate(req: express.Request, options?: {[key: string]: any}): void;
authorizationParams(options: any): any;
checkScope(scope: any, accessToken: any, cb: any): any;
parseErrorResponse(body: any, status: any): any;
tokenParams(options: any): any;
userProfile(accessToken: any, done: any): any
}
	declare interface Strategy$StrategyOption {
clientID: string,
clientSecret: string,
callbackURL: string,
scope?: string[]
} 

declare type Strategy$Profile = {
profileUrl: string,
id: any,
username: string,
discriminator: string,
avatar: string,
verified: boolean,
email: string,
_raw: any,
_json: any
} & passport.Strategy$Profile

    }
