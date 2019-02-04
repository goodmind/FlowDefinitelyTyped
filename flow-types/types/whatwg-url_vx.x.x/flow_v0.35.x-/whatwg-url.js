declare module 'whatwg-url' {
        
/**
 * https://url.spec.whatwg.org/#url-representation
 */
declare export interface URLRecord {
scheme: string,
username: string,
password: string,
host: string | number | IPv6Address | null,
port: number | null,
path: string[],
query: string | null,
fragment: string | null,
cannotBeABaseURL?: boolean
} 
	
/**
 * https://url.spec.whatwg.org/#concept-ipv6
 */
declare export type IPv6Address = [number, number, number, number, number, number, number, number];
	
/**
 * https://url.spec.whatwg.org/#url-class
 */
declare export class URL  {
constructor(url: string, base?: string): this;
href: string;
origin: string;
protocol: string;
username: string;
password: string;
host: string;
hostname: string;
port: string;
pathname: string;
search: string;
searchParams: URLSearchParams;
hash: string;
toJSON(): string
}
	
/**
 * https://url.spec.whatwg.org/#interface-urlsearchparams
 */
declare export class URLSearchParams  {
constructor(init: (Array<[string, string]> | Iterable<[string, string]> | {
[name: string]: string
} | string)): this;
append(name: string, value: string): void;
delete(name: string): void;
get(name: string): string | null;
getAll(name: string): string[];
has(name: string): boolean;
set(name: string, value: string): void;
sort(): void;
undefined(): IterableIterator<[string, string]>
}
	
/**
 * https://url.spec.whatwg.org/#concept-url-parser
 */
declare export function parseURL(
input: string,
options?: {
baseURL?: string,
encodingOverride?: string
}): URLRecord | null

	
/**
 * https://url.spec.whatwg.org/#concept-basic-url-parser
 */
declare export function basicURLParse(
input: string,
options?: {
baseURL?: string,
encodingOverride?: string,
url?: URLRecord,
stateOverride?: StateOverride
}): URLRecord | null

	
/**
 * https://url.spec.whatwg.org/#scheme-start-state
 */
declare export type StateOverride = "scheme start"
| "scheme"
| "no scheme"
| "special relative or authority"
| "path or authority"
| "relative"
| "relative slash"
| "special authority slashes"
| "special authority ignore slashes"
| "authority"
| "host"
| "hostname"
| "port"
| "file"
| "file slash"
| "file host"
| "path start"
| "path"
| "cannot-be-a-base-URL path"
| "query"
| "fragment";
	
/**
 * https://url.spec.whatwg.org/#concept-url-serializer
 */
declare export function serializeURL(urlRecord: URLRecord, excludeFragment?: boolean): string

	
/**
 * https://url.spec.whatwg.org/#concept-host-serializer
 */
declare export function serializeHost(host: string | number | IPv6Address): string

	
/**
 * https://url.spec.whatwg.org/#serialize-an-integer
 */
declare export function serializeInteger(number: number): string

	
/**
 * https://html.spec.whatwg.org#ascii-serialisation-of-an-origin
 */
declare export function serializeURLOrigin(urlRecord: URLRecord): string

	
/**
 * https://url.spec.whatwg.org/#set-the-username
 */
declare export function setTheUsername(urlRecord: URLRecord, username: string): void

	
/**
 * https://url.spec.whatwg.org/#set-the-password
 */
declare export function setThePassword(urlRecord: URLRecord, password: string): void

	
/**
 * https://url.spec.whatwg.org/#cannot-have-a-username-password-port
 */
declare export function cannotHaveAUsernamePasswordPort(urlRecord: URLRecord): boolean

	
/**
 * https://url.spec.whatwg.org/#percent-decode
 */
declare export function percentDecode(buffer: Buffer): Buffer

    }
