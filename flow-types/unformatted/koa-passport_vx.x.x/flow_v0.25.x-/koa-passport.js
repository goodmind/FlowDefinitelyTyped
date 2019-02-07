declare module 'koa-passport' {
        import type {
          Middleware
        } from 'koa';

	import typeof * as passport from 'passport';

	declare module 'koa' {
        declare interface Context {
login(user: any, options?: any): Promise<void>,
logIn: $ElementType<Context, "login">,
logout(): void,
logOut: $ElementType<Context, "logout">,
isAuthenticated(): boolean,
isUnauthenticated(): boolean
} 
    }

	declare class KoaPassport$KoaPassport  {
use(strategy: passport.Strategy): this;
use(name: string, strategy: passport.Strategy): this;
unuse(name: string): this;
framework(fw: passport.Framework): this;
initialize(options?: {
userProperty: string
}): Middleware;
session(options?: {
pauseStream: boolean
}): Middleware;
authenticate(strategy: string | string[], callback?: (...args: any[]) => any): Middleware;
authenticate(
strategy: string | string[],
options: passport.AuthenticateOptions | {[key: string]: any},
callback?: (...args: any[]) => any): Middleware;
authorize(strategy: string | string[], callback?: (...args: any[]) => any): Middleware;
authorize(
strategy: string | string[],
options: any,
callback?: (...args: any[]) => any): Middleware;
serializeUser: $ElementType<passport.Authenticator, "serializeUser">;
deserializeUser: $ElementType<passport.Authenticator, "deserializeUser">;
transformAuthInfo: $ElementType<passport.Authenticator, "transformAuthInfo">
}

declare type KoaPassport$Static = {
KoaPassport$KoaPassport: typeof KoaPassport,
Passport: typeof undefined,
Authenticator: $ElementType<KoaPassport$Static, "Passport">
} & KoaPassport$KoaPassport

	declare var koaPassport: KoaPassport$KoaPassport.KoaPassport$Static;
	declare module.exports: typeof koaPassport

    }
