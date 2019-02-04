declare module 'universal-cookie' {
        declare export interface CookiesByName {
[cookieName: string]: string
} 
	declare export interface GetOpts {

/**
 * do not convert the cookie into an object no matter what
 */
doNotParse: boolean
} 
	declare export interface CookieOpts {

/**
 * cookie path, use / as the path if you want your cookie to be accessible on all pages
 */
path?: string,

/**
 * absolute expiration date for the cookie
 */
expires?: Date,

/**
 * relative max age of the cookie from when the client receives it in second
 */
maxAge?: number,

/**
 * domain for the cookie (sub.domain.com or .allsubdomains.com)
 */
domain?: string,

/**
 * Is only accessible through HTTPS?
 */
secure?: boolean,

/**
 * Is only the server can access the cookie?
 */
httpOnly?: boolean
} 
	declare export type ChangeListenerCallback = (
name: string,
value: string | {[key: string]: any},
options: CookieOpts) => void;
	declare export default class Cookies  {
constructor(cookieHeader?: string | CookiesByName): this;

/**
 * Get a cookie value
 * @param name cookie name
 * @param do not convert the cookie into an object no matter what
 */
get(name: string, options?: GetOpts): string;

/**
 * Get all cookies
 * @param do not convert the cookie into an object no matter what
 */
getAll(options?: GetOpts): CookiesByName;

/**
 * Set a cookie value
 * @param name cookie name
 * @param value save the value and stringify the object if needed
 * @param options Support all the cookie options from RFC 6265
 */
set(name: string, value: string | {[key: string]: any}, options?: CookieOpts): void;

/**
 * Set a cookie value
 * @param name cookie name
 * @param options Support all the cookie options from RFC 6265
 */
remove(name: string, options?: CookieOpts): void;

/**
 * Add a listener to when a cookie is set or removed.
 * @param callback Call that will be called with the first argument containing name, value and options of the changed cookie.
 */
addChangeListener(callback: ChangeListenerCallback): void;

/**
 * Remove a listener from the change callback.
 */
removeChangeListener(callback: ChangeListenerCallback): void
}
    }
