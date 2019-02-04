declare module 'passport-beam' {
        import typeof * as passport from 'passport';

	import typeof * as express from 'express';

	declare export class Strategy mixins passport.Strategy {
constructor(options: Strategy$Strategy$IStrategyOption, verify: (
accessToken: string,
refreshToken: string,
profile: Strategy$Strategy$Profile,
done: (error: any, user?: any) => void) => void): this;
name: string;
authenticate(req: express.Request, options?: Object): void
}
	declare interface Strategy$IStrategyOption {
clientID: string,
clientSecret: string,
callbackURL: string
} 

declare type Strategy$Profile = {
profileUrl: string,
id: any,
username: string,
provider: string,
email: string,
_raw: any,
_json: any
} & passport.Strategy$Profile

    }
