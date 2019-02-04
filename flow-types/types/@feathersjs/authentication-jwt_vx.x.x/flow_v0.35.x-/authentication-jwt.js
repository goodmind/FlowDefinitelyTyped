declare module '@feathersjs/authentication-jwt' {
        import type {
          Application
        } from '@feathersjs/feathers';

	import type {
          Request
        } from 'express';

	import typeof * as self from '@feathersjs/authentication-jwt';

	declare var feathersAuthenticationJwt: ((options?: $Shape<FeathersAuthenticationJWTOptions>) => () => void) & typeof self;
	declare export default typeof feathersAuthenticationJwt

	declare export interface FeathersAuthenticationJWTOptions {

/**
 * the name to use when invoking the authentication Strategy
 */
name: string,

/**
 * the entity that you pull from if an 'id' is present in the payload
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
 * a passport-jwt option determining where to parse the JWT
 */
jwtFromRequest: JwtFromRequestFunction,

/**
 * Your main secret provided to passport-jwt
 */
secretOrKey: string,

/**
 * whether to use sessions,
 */
session: boolean,

/**
 * A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
 */
Verifier: typeof Verifier
} 
	declare export class Verifier  {
constructor(app: Application, options: any): this;
verify(
req: Request,
payload: any,
done: (error: any, user?: any, info?: any) => void): void
}
	declare export type JwtFromRequestFunction = (req: Request) => string | null;
	declare export var ExtractJwt: {
fromHeader(header_name: string): JwtFromRequestFunction,
fromBodyField(field_name: string): JwtFromRequestFunction,
fromUrlQueryParameter(param_name: string): JwtFromRequestFunction,
fromAuthHeaderWithScheme(auth_scheme: string): JwtFromRequestFunction,
fromAuthHeader(): JwtFromRequestFunction,
fromExtractors(extractors: JwtFromRequestFunction[]): JwtFromRequestFunction,
fromAuthHeaderAsBearerToken(): JwtFromRequestFunction
};
	declare export var defaults: {
name: string,
bodyKey: string
};
    }
