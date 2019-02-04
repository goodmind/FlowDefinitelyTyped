declare module 'cookies' {
        import type {
          IncomingMessage,ServerResponse
        } from 'http';

	import typeof * as Keygrip from 'keygrip';

	import typeof * as express from 'express';

	import typeof * as connect from 'connect';

	declare interface Cookies {
secure: boolean,
request: IncomingMessage,
response: ServerResponse,

/**
 * This extracts the cookie with the given name from the
 * Cookie header in the request. If such a cookie exists,
 * its value is returned. Otherwise, nothing is returned.
 */
get(name: string, opts?: Cookies$Cookies$GetOption): string,

/**
 * This sets the given cookie in the response and returns
 * the current context to allow chaining.If the value is omitted,
 * an outbound header with an expired date is used to delete the cookie.
 */
set(name: string, value?: string, opts?: Cookies$Cookies$SetOption): this
} 
	
/**
 * for backward-compatibility
 */
declare type Cookies$ICookies = Cookies;


/**
 * for backward-compatibility
 */
declare type Cookies$IOptions = Cookies$SetOption;

declare interface Cookies$Option {
keys?: string[] | Keygrip,
secure?: boolean
} 

declare interface Cookies$GetOption {
signed: boolean
} 

declare interface Cookies$SetOption {

/**
 * a number representing the milliseconds from Date.now() for expiry
 */
maxAge?: number,

/**
 * a Date object indicating the cookie's expiration
 * date (expires at the end of session by default).
 */
expires?: Date,

/**
 * a string indicating the path of the cookie (/ by default).
 */
path?: string,

/**
 * a string indicating the domain of the cookie (no default).
 */
domain?: string,

/**
 * a boolean indicating whether the cookie is only to be sent
 * over HTTPS (false by default for HTTP, true by default for HTTPS).
 */
secure?: boolean,

/**
 * "secureProxy" option is deprecated; use "secure" option, provide "secure" to constructor if needed
 */
secureProxy?: boolean,

/**
 * a boolean indicating whether the cookie is only to be sent over HTTP(S),
 * and not made available to client JavaScript (true by default).
 */
httpOnly?: boolean,

/**
 * a boolean or string indicating whether the cookie is a "same site" cookie (false by default).
 * This can be set to 'strict', 'lax', or true (which maps to 'strict').
 */
sameSite?: "strict" | "lax" | boolean,

/**
 * a boolean indicating whether the cookie is to be signed (false by default).
 * If this is true, another cookie of the same name with the .sig suffix
 * appended will also be sent, with a 27-byte url-safe base64 SHA1 value
 * representing the hash of cookie-name=cookie-value against the first Keygrip key.
 * This signature key is used to detect tampering the next time a cookie is received.
 */
signed?: boolean,

/**
 * a boolean indicating whether to overwrite previously set
 * cookies of the same name (false by default). If this is true,
 * all cookies set during the same request with the same
 * name (regardless of path or domain) are filtered out of
 * the Set-Cookie header when setting this cookie.
 */
overwrite?: boolean
} 

declare type Cookies$CookieAttr = Cookies$SetOption;

declare interface Cookies$Cookie {
name: string,
value: string,

/**
 * "maxage" is deprecated, use "maxAge" instead
 */
maxage: number,
maxAge: number,
expires: Date,
path: string,
domain: string,
secure: boolean,
httpOnly: boolean,
sameSite: boolean,
overwrite: boolean,
toString(): string,
toHeader(): string
} 
	declare interface CookiesFunction {
(request: IncomingMessage, response: ServerResponse, options?: Cookies$Cookies$Option): Cookies,

/**
 * "options" array of key strings is deprecated, provide using options {"keys": keygrip}
 */
(request: IncomingMessage, response: ServerResponse, options: string[]): Cookies,

/**
 * "options" instance of Keygrip is deprecated, provide using options {"keys": keygrip}
 */
(request: IncomingMessage, response: ServerResponse, options: Keygrip): Cookies,
new (
request: IncomingMessage,
response: ServerResponse,
options?: Cookies$Cookies$Option): Cookies,

/**
 * "options" array of key strings is deprecated, provide using options {"keys": keygrip}
 */
new (request: IncomingMessage, response: ServerResponse, options: string[]): Cookies,

/**
 * "options" instance of Keygrip is deprecated, provide using options {"keys": keygrip}
 */
new (request: IncomingMessage, response: ServerResponse, options: Keygrip): Cookies,
Cookies$Cookie: {
new (
name: string,
value?: string,
attrs?: Cookies$Cookies$CookieAttr): Cookies$Cookies$Cookie
},
express(keys: string[] | Keygrip): express.Handler,
connect(keys: string[] | Keygrip): connect.NextHandleFunction
} 
	declare var Cookies: CookiesFunction;
	declare module.exports: typeof Cookies

    }
