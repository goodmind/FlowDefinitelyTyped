declare module 'caniuse-api' {
        declare export var features: string[];
	declare export interface BrowserSupport {
[browser: string]: {
y?: number,
n?: number,
a?: number,
x?: number
}
} 
	declare export function getSupport(feature: string): BrowserSupport

	declare export function isSupported(feature: string, browsers: string | $ReadOnlyArray<string>): boolean

	declare export function find(query: string): string[]

	declare export function getLatestStableBrowsers(): string[]

	declare export function setBrowserScope(browserscope: string | $ReadOnlyArray<string>): void

	declare export function getBrowserScope(): string[]

    }
