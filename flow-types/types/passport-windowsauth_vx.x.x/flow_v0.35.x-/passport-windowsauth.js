declare module 'passport-windowsauth' {
        import typeof * as express from 'express';

	import typeof * as passport from 'passport';

	import typeof * as ldapjs from 'ldapjs';

	import type {
          TlsOptions
        } from 'tls';

	declare interface windowsauth$Options {
ldap?: {
url?: string,
maxConnections?: number,
base?: string,
bindDN?: string,
bindCredentials?: string,
tlsOptions?: TlsOptions,
reconnect?: boolean | {
initialDelay?: number,
maxDelay?: number,
failAfter?: number
},
timeout?: number,
connectTimeout?: number,
idleTimeout?: number,
binder?: ldapjs.Client,
client?: ldapjs.Client
},
integrated?: boolean,
getUserNameFromHeader(req: express.Request): string,
passReqToCallback?: boolean,
usernameField?: string,
passwordField?: string
} 

declare type windowsauth$Verified = (
err: Error | void | null,
user?: {[key: string]: any},
info?: {[key: string]: any}) => void;

declare type windowsauth$Verify = (profile: passport.Profile, done: windowsauth$Verified) => void;

declare type windowsauth$VerifyWithReq = (
req: express.Request,
profile: passport.Profile,
done: windowsauth$Verified) => void;
	declare class windowsauth mixins passport.Strategy {
constructor(options: windowsauth$windowsauth$Options & {
passReqToCallback: true
}, verify: windowsauth$windowsauth$VerifyWithReq): this;
constructor(options: windowsauth$windowsauth$Options, verify: windowsauth$windowsauth$Verify): this;
constructor(verify: windowsauth$windowsauth$Verify): this
}
	declare module.exports: typeof windowsauth

    }
