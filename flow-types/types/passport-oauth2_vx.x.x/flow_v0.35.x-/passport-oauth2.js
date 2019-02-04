declare module 'passport-oauth2' {
        import type {
          Request
        } from 'express';

	import type {
          Strategy
        } from 'passport';

	import type {
          OAuth2
        } from 'oauth';

	import type {
          OutgoingHttpHeaders
        } from 'http';

	declare class OAuth2Strategy mixins OAuth2Strategy$Strategy {
name: string;

/**
 * NOTE: The _oauth2 property is considered "protected".  Subclasses are
 *        allowed to use it when making protected resource requests to retrieve
 *        the user profile.
 */
_oauth2: OAuth2;
constructor(options: OAuth2Strategy$OAuth2Strategy$StrategyOptions, verify: OAuth2Strategy$OAuth2Strategy$VerifyFunction): this;
constructor(options: OAuth2Strategy$OAuth2Strategy$StrategyOptionsWithRequest, verify: OAuth2Strategy$OAuth2Strategy$VerifyFunctionWithRequest): this;
authenticate(req: Request, options?: any): void;
userProfile(accessToken: string, done: (err?: Error | null, profile?: any) => void): void;
authorizationParams(options: any): {[key: string]: any};
tokenParams(options: any): {[key: string]: any};
parseErrorResponse(body: any, status: number): Error | null
}
	
      declare var npm$namespace$OAuth2Strategy: {
        
        Strategy: typeof OAuth2Strategy$Strategy,
      }
declare interface OAuth2Strategy$Metadata {
authorizationURL: string,
tokenURL: string,
clientID: string
} 

declare type OAuth2Strategy$StateStoreStoreCallback = (err: Error | null, state: any) => void;

declare type OAuth2Strategy$StateStoreVerifyCallback = (err: Error, ok: boolean, state: any) => void;

declare interface OAuth2Strategy$StateStore {
store(req: Request, callback: OAuth2Strategy$StateStoreStoreCallback): void,
store(
req: Request,
meta: OAuth2Strategy$Metadata,
callback: OAuth2Strategy$StateStoreStoreCallback): void,
verify(
req: Request,
state: string,
callback: OAuth2Strategy$StateStoreVerifyCallback): void,
verify(
req: Request,
state: string,
meta: OAuth2Strategy$Metadata,
callback: OAuth2Strategy$StateStoreVerifyCallback): void
} 

declare type OAuth2Strategy$VerifyCallback = (
err?: Error | null,
user?: {[key: string]: any},
info?: {[key: string]: any}) => void;

declare type OAuth2Strategy$VerifyFunction = ((
accessToken: string,
refreshToken: string,
profile: any,
verified: OAuth2Strategy$VerifyCallback) => void) | ((
accessToken: string,
refreshToken: string,
results: any,
profile: any,
verified: OAuth2Strategy$VerifyCallback) => void);

declare type OAuth2Strategy$VerifyFunctionWithRequest = ((
req: Request,
accessToken: string,
refreshToken: string,
profile: any,
verified: OAuth2Strategy$VerifyCallback) => void) | ((
req: Request,
accessToken: string,
refreshToken: string,
results: any,
profile: any,
verified: OAuth2Strategy$VerifyCallback) => void);

declare interface OAuth2Strategy$_StrategyOptionsBase {
authorizationURL: string,
tokenURL: string,
clientID: string,
clientSecret: string,
callbackURL?: string,
customHeaders?: OutgoingHttpHeaders,
scope?: string | string[],
scopeSeparator?: string,
sessionKey?: string,
store?: OAuth2Strategy$StateStore,
state?: any
} 

declare type OAuth2Strategy$StrategyOptions = {
passReqToCallback?: false
} & OAuth2Strategy$_StrategyOptionsBase


declare type OAuth2Strategy$StrategyOptionsWithRequest = {
passReqToCallback: true
} & OAuth2Strategy$_StrategyOptionsBase


declare type OAuth2Strategy$Strategy = OAuth2Strategy;

declare var OAuth2Strategy$Strategy: typeof OAuth2Strategy;

declare class OAuth2Strategy$TokenError mixins Error {
constructor(message: string | void, code: string, uri?: string, status?: number): this;
code: string;
uri: string;
status: number
}

declare class OAuth2Strategy$AuthorizationError mixins Error {
constructor(message: string | void, code: string, uri?: string, status?: number): this;
code: string;
uri: string;
status: number
}

declare class OAuth2Strategy$InternalOAuthError mixins Error {
constructor(message: string, err: any): this;
oauthError: any
}
	declare module.exports: typeof OAuth2Strategy

    }
