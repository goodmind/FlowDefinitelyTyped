declare module 'passport-oauth2-client-password' {
        import typeof * as passport from 'passport';

	import typeof * as express from 'express';

	declare interface StrategyOptionsWithRequestInterface {
passReqToCallback: boolean
} 
	declare interface VerifyFunctionWithRequest {
(req: express.Request, clientId: string, clientSecret: string, done: (error: any, client?: any, info?: any) => void): void
} 
	declare interface VerifyFunction {
(clientId: string, clientSecret: string, done: (error: any, client?: any, info?: any) => void): void
} 
	declare class Strategy mixins passport.Strategy {
constructor(options: StrategyOptionsWithRequestInterface, verify: VerifyFunctionWithRequest): this;
constructor(verify: VerifyFunction): this;
name: string;
authenticate(req: express.Request, options?: {}): void
}
    }
