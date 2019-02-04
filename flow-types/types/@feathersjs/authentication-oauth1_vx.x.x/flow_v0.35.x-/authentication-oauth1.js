declare module '@feathersjs/authentication-oauth1' {
        import type {
          Application,Paginated
        } from '@feathersjs/feathers';

	import type {
          Request
        } from 'express';

	import typeof * as self from '@feathersjs/authentication-oauth1';

	declare var feathersAuthenticationOAuth1: ((options?: FeathersAuthenticationOAuth1Options) => () => void) & typeof self;
	declare export default typeof feathersAuthenticationOAuth1

	declare export interface FeathersAuthenticationOAuth1Options {

/**
 * The field to look up the entity by when logging in with the provider. Defaults to '<provider>Id' (ie. 'twitterId').
 */
idField: string,

/**
 * The route to register the middleware
 */
path: string,

/**
 * The route to register the callback handler
 */
callbackPath: string,

/**
 * hostname[:port]/auth/<provider>/callback',
 */
callbackURL: string,

/**
 * the entity that you are looking up
 */
entity: string,

/**
 * the service to look up the entity
 */
service: string,

/**
 * whether the request object should be passed to `verify`
 */
passReqToCallback: boolean,

/**
 * whether to use sessions,
 */
session: boolean,

/**
 * Express middleware for handling the oauth callback. Defaults to the built in middleware. todo: needs a proper type
 */
handler: any,

/**
 * The response formatter. Defaults the the built in feathers-rest formatter, which returns JSON. todo: needs a proper type
 */
formatter: any,

/**
 * A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
 */
Verifier: OAuth1Verifier
} 
	declare export class OAuth1Verifier  {
constructor(app: Application, options: any): this;
_updateEntity(
entity: any,
data: {
profile: any,
accessToken: string,
refreshToken: string
}): Promise<any>;
_createEntity(
data: {
profile: any,
accessToken: string,
refreshToken: string
}): Promise<any>;
_normalizeResult<T>(results: T[] | Paginated<T>): Promise<T>;
verify(
req: Request,
accessToken: string,
refreshToken: string,
profile: any,
done: (
err: Error | null,
user: {[key: string]: any},
info: {[key: string]: any}) => void): void
}
    }
