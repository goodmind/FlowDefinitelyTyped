declare module 'hapi-auth-cookie' {
        import type {
          Request,ResponseObject,Plugin,ResponseToolkit,AuthCredentials,ServerStateCookieOptions
        } from 'hapi';

	declare module 'hapi' {
        declare interface ServerAuth {
strategy(
name: string,
scheme: "cookie",
options?: hapiAuthCookie$hapiAuthCookie$Options): void
} 
	declare interface PluginSpecificConfiguration {
"hapi-auth-cookie"?: {
redirectTo?: boolean
}
} 
	declare interface Request {
cookieAuth: {
set(session: {[key: string]: any}): void,
set(key: string, value: {[key: string]: any} | string): void,
clear(key?: string): void,
ttl(milliseconds: number): void
}
} 
    }

	declare interface hapiAuthCookie$ValidateResponse {
valid: boolean,
credentials?: AuthCredentials
} 

declare type hapiAuthCookie$ValidateFunction = (
request?: Request,
session?: {[key: string]: any}) => Promise<hapiAuthCookie$ValidateResponse>;

declare type hapiAuthCookie$RedirectToFunction = (request?: Request) => void;


/**
 * Options passed to 'hapi.auth.strategy' when this plugin is used
 */
declare interface hapiAuthCookie$Options {

/**
 * The cookie name.
 * @default 'sid'
 */
cookie?: string,

/**
 * Used for Iron cookie encoding.
 * Should be at least 32 characters long.
 */
password: string,

/**
 * Sets the cookie expires time in milliseconds.
 * Required when 'keepAlive' is true.
 * Defaults to single browser session (ends when browser closes).
 */
ttl?: number,

/**
 * Sets the cookie Domain value.
 * Defaults to none.
 */
domain?: string,

/**
 * Sets the cookie path value.
 * @default '/'
 */
path?: string,

/**
 * Any authentication cookie that fails validation will be marked as expired in the response and cleared.
 * @default false
 */
clearInvalid?: boolean,

/**
 * Automatically sets the session cookie after validation to extend the current session for a new TTL duration.
 * @default false
 */
keepAlive?: boolean,

/**
 * If false omitted.
 * Other options Strict or Lax.
 * @default 'Strict'
 */
isSameSite?: $ElementType<ServerStateCookieOptions, "isSameSite">,

/**
 * If false, the cookie is allowed to be transmitted over insecure connections which exposes it to attacks.
 * @default true
 */
isSecure?: boolean,

/**
 * If false, the cookie will not include the 'HttpOnly' flag.
 * @default true
 */
isHttpOnly?: boolean,

/**
 * Login URI or function that returns a URI to redirect unauthenticated requests to.
 * Note that it will only trigger when the authentication mode is 'required'.
 * Defaults to no redirection.
 */
redirectTo?: string | hapiAuthCookie$RedirectToFunction,

/**
 * Only works if 'redirectTo' is true
 * If set to true, a string, or an object, appends the current request path to the query component of the 'redirectTo' URI.
 */
appendNext?: boolean | string,

/**
 * An optional session validation function used to validate the content of the session cookie on each request.
 * Used to verify that the internal session state is still valid (e.g. user account still exists).
 */
validateFunc?: hapiAuthCookie$ValidateFunction,

/**
 * A name to use with decorating the request object.
 * Using multiple decorator names for separate authentication strategies could allow a developer to call the methods for the wrong strategy.
 * Potentially resulting in unintended authorized access.
 * @default 'cookieAuth'
 */
requestDecoratorName?: string
} 
	declare var hapiAuthCookie: Plugin<void>;
	declare module.exports: typeof hapiAuthCookie

    }
