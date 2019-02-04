declare module 'polyfill-service' {
        declare export type PolyfillFlag = "gated" | "always";
	declare export type Unknown = "polyfill" | "ignore";
	declare export interface Feature {
flags?: PolyfillFlag[]
} 
	declare export interface Features {
[feature: string]: Feature
} 
	declare export interface GetPolyfillsOptions {
uaString: string,
features?: Features,
excludes?: string[]
} 
	declare export type GetPolyfillStringOptions = {
minify?: boolean,
unknown?: Unknown
} & GetPolyfillsOptions

	declare export interface PolyfillSpec {
aliasOf?: Set<string>,
flags: Set<PolyfillFlag>
} 
	declare export interface GetPolyfillsResponse {
[name: string]: PolyfillSpec
} 
	declare export function listAllPolyfills(): Promise<$ReadOnlyArray<string>>

	declare export function getPolyfillString(options: GetPolyfillStringOptions): Promise<string>

	declare export function getPolyfills(options: GetPolyfillsOptions): Promise<GetPolyfillsResponse>

    }
