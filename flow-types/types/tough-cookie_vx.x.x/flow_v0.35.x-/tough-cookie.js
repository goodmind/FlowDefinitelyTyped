declare module 'tough-cookie' {
        
/**
 * Parse a cookie date string into a Date.
 * Parses according to RFC6265 Section 5.1.1, not Date.parse().
 */
declare export function parseDate(string: string): Date

	
/**
 * Format a Date into a RFC1123 string (the RFC6265-recommended format).
 */
declare export function formatDate(date: Date): string

	
/**
 * Transforms a domain-name into a canonical domain-name.
 * The canonical domain-name is a trimmed, lowercased, stripped-of-leading-dot
 * and optionally punycode-encoded domain-name (Section 5.1.2 of RFC6265).
 * For the most part, this function is idempotent (can be run again on its output without ill effects).
 */
declare export function canonicalDomain(str: string): string

	
/**
 * Answers "does this real domain match the domain in a cookie?".
 * The str is the "current" domain-name and the domStr is the "cookie" domain-name.
 * Matches according to RFC6265 Section 5.1.3, but it helps to think of it as a "suffix match".
 * 
 * The canonicalize parameter will run the other two parameters through canonicalDomain or not.
 */
declare export function domainMatch(str: string, domStr: string, canonicalize?: boolean): boolean

	
/**
 * Given a current request/response path, gives the Path apropriate for storing in a cookie.
 * This is basically the "directory" of a "file" in the path, but is specified by Section 5.1.4 of the RFC.
 * 
 * The path parameter MUST be only the pathname part of a URI (i.e. excludes the hostname, query, fragment, etc.).
 * This is the .pathname property of node's uri.parse() output.
 */
declare export function defaultPath(path: string): string

	
/**
 * Answers "does the request-path path-match a given cookie-path?" as per RFC6265 Section 5.1.4.
 * Returns a boolean.
 * 
 * This is essentially a prefix-match where cookiePath is a prefix of reqPath.
 */
declare export function pathMatch(reqPath: string, cookiePath: string): boolean

	
/**
 * alias for Cookie.fromJSON(string)
 */
declare export function fromJSON(string: string): Cookie

	declare export function getPublicSuffix(hostname: string): string | null

	declare export function cookieCompare(a: Cookie, b: Cookie): number

	declare export function permuteDomain(domain: string): string[]

	declare export function permutePath(path: string): string[]

	declare export class Cookie  {
static parse(cookieString: string, options?: Cookie$Cookie$ParseOptions): Cookie | void;
static fromJSON(strOrObj: string | {[key: string]: any}): Cookie | null;
constructor(properties?: Cookie$Cookie$Properties): this;
key: string;
value: string;
expires: Date | "Infinity";
maxAge: number | "Infinity" | "-Infinity";
domain: string | null;
path: string | null;
secure: boolean;
httpOnly: boolean;
extensions: string[] | null;
creation: Date | null;
creationIndex: number;
hostOnly: boolean | null;
pathIsDefault: boolean | null;
lastAccessed: Date | null;
toString(): string;
cookieString(): string;
setExpires(String: string): void;
setMaxAge(number: number): void;
expiryTime(now?: number): number | typeof Infinity;
expiryDate(now?: number): Date;
TTL(now?: Date): number | typeof Infinity;
canonicalizedDomain(): string;
cdomain(): string;
toJSON(): {
[key: string]: any
};
clone(): Cookie;
validate(): boolean | string
}
	declare interface Cookie$ParseOptions {
loose?: boolean
} 

declare interface Cookie$Properties {
key?: string,
value?: string,
expires?: Date,
maxAge?: number | "Infinity" | "-Infinity",
domain?: string,
path?: string,
secure?: boolean,
httpOnly?: boolean,
extensions?: string[],
creation?: Date,
creationIndex?: number,
hostOnly?: boolean,
pathIsDefault?: boolean,
lastAccessed?: Date
} 

declare interface Cookie$Serialized {
[key: string]: any,
version: string,
storeType: string,
rejectPublicSuffixes: boolean,
cookies: Cookie$Cookie$Serialized[]
} 
	declare export class CookieJar  {
static deserialize(
serialized: CookieJar$Cookie$Serialized | string,
store: Store,
cb: (err: Error | null, object: CookieJar) => void): void;
static deserialize(
serialized: CookieJar$Cookie$Serialized | string,
cb: (err: Error | null, object: CookieJar) => void): void;
static deserializeSync(serialized: CookieJar$Cookie$Serialized | string, store?: Store): CookieJar;
static fromJSON(string: string): CookieJar;
constructor(store?: Store, options?: CookieJar$CookieJar$Options): this;
setCookie(
cookieOrString: Cookie | string,
currentUrl: string,
options: CookieJar$CookieJar$SetCookieOptions,
cb: (err: Error | null, cookie: Cookie) => void): void;
setCookie(
cookieOrString: Cookie | string,
currentUrl: string,
cb: (err: Error, cookie: Cookie) => void): void;
setCookieSync(
cookieOrString: Cookie | string,
currentUrl: string,
options?: CookieJar$CookieJar$SetCookieOptions): void;
getCookies(
currentUrl: string,
options: CookieJar$CookieJar$GetCookiesOptions,
cb: (err: Error | null, cookies: Cookie[]) => void): void;
getCookies(currentUrl: string, cb: (err: Error | null, cookies: Cookie[]) => void): void;
getCookiesSync(currentUrl: string, options?: CookieJar$CookieJar$GetCookiesOptions): Cookie[];
getCookieString(
currentUrl: string,
options: CookieJar$CookieJar$GetCookiesOptions,
cb: (err: Error | null, cookies: string) => void): void;
getCookieString(currentUrl: string, cb: (err: Error | null, cookies: string) => void): void;
getCookieStringSync(currentUrl: string, options?: CookieJar$CookieJar$GetCookiesOptions): string;
getSetCookieStrings(
currentUrl: string,
options: CookieJar$CookieJar$GetCookiesOptions,
cb: (err: Error | null, cookies: string) => void): void;
getSetCookieStrings(currentUrl: string, cb: (err: Error | null, cookies: string) => void): void;
getSetCookieStringsSync(currentUrl: string, options?: CookieJar$CookieJar$GetCookiesOptions): string;
serialize(
cb: (err: Error | null, serializedObject: CookieJar$Cookie$Serialized) => void): void;
serializeSync(): CookieJar$Cookie$Serialized;
toJSON(): CookieJar$Cookie$Serialized;
clone(store: Store, cb: (err: Error | null, newJar: CookieJar) => void): void;
clone(cb: (err: Error | null, newJar: CookieJar) => void): void;
cloneSync(store: Store): CookieJar
}
	declare interface CookieJar$Options {
rejectPublicSuffixes?: boolean,
looseMode?: boolean
} 

declare interface CookieJar$SetCookieOptions {
http?: boolean,
secure?: boolean,
now?: Date,
ignoreError?: boolean
} 

declare interface CookieJar$GetCookiesOptions {
http?: boolean,
secure?: boolean,
date?: Date,
expire?: boolean,
allPoints?: boolean
} 

declare interface CookieJar$Serialized {
[key: string]: any,
version: string,
storeType: string,
rejectPublicSuffixes: boolean,
cookies: Cookie$CookieJar$Serialized[]
} 
	declare export class Store  {
findCookie(
domain: string,
path: string,
key: string,
cb: (err: Error | null, cookie: Cookie | null) => void): void;
findCookies(
domain: string,
path: string,
cb: (err: Error | null, cookie: Cookie[]) => void): void;
putCookie(cookie: Cookie, cb: (err: Error | null) => void): void;
updateCookie(oldCookie: Cookie, newCookie: Cookie, cb: (err: Error | null) => void): void;
removeCookie(
domain: string,
path: string,
key: string,
cb: (err: Error | null) => void): void;
removeCookies(domain: string, path: string, cb: (err: Error | null) => void): void;
getAllCookies(cb: (err: Error | null, cookie: Cookie[]) => void): void
}
	declare export class MemoryCookieStore mixins Store {}
    }
