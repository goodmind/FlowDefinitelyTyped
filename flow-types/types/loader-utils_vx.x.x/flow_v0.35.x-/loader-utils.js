declare module 'loader-utils' {
        import type {
          loader
        } from 'webpack';

	declare export interface InterpolateOption {
context?: string,
content?: string | Buffer,
regExp?: string | RegExp
} 
	declare export interface OptionObject {
[key: string]: any
} 
	declare export type HashType = "sha1" | "md5" | "sha256" | "sha512";
	declare export type DigestType = "hex"
| "base26"
| "base32"
| "base36"
| "base49"
| "base52"
| "base58"
| "base62"
| "base64";
	declare export function getOptions(loaderContext: loader.LoaderContext): OptionObject

	declare export function parseQuery(optionString: string): OptionObject

	declare export function stringifyRequest(loaderContext: loader.LoaderContext, resource: string): string

	declare export function getRemainingRequest(loaderContext: loader.LoaderContext): string

	declare export function getCurrentRequest(loaderContext: loader.LoaderContext): string

	declare export function isUrlRequest(url: string, root?: string): boolean

	declare export function parseString(str: string): string

	declare export function urlToRequest(url: string, root?: string): string

	declare export function interpolateName(loaderContext: loader.LoaderContext, name: string, options?: any): string

	declare export function getHashDigest(
buffer: Buffer,
hashType: HashType,
digestType: DigestType,
maxLength: number): string

    }
