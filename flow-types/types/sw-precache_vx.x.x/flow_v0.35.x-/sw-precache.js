declare module 'sw-precache' {
        import type {
          SwToolboxHanlder,SwToolboxOptions
        } from 'sw-toolbox';

	declare export type Handler = "networkFirst"
| "cacheFirst"
| "fastest"
| "cacheOnly"
| "networkOnly"
| SwToolboxHanlder;
	declare export type Method = "get"
| "post"
| "put"
| "delete"
| "head";
	declare export interface Options {
cacheId?: string,
clientsClaim?: boolean,
directoryIndex?: string,
dontCacheBustUrlsMatching?: RegExp,
dynamicUrlToDependencies?: {
[url: string]: string | Buffer | string[]
},
handleFetch?: boolean,
ignoreUrlParametersMatching?: RegExp[],
importScripts?: string[],
logger?: $ElementType<Console, "log">,
maximumFileSizeToCacheInBytes?: number,
navigateFallback?: string,
navigateFallbackWhitelist?: RegExp[],
replacePrefix?: string,
runtimeCaching?: Array<{
urlPattern: RegExp | string,
handler: Handler,
method?: Method,
options?: SwToolboxOptions
}>,
skipWaiting?: boolean,
staticFileGlobs?: string[],
stripPrefix?: string,
stripPrefixMulti?: {
[path: string]: string
},
templateFilePath?: string,
verbose?: boolean
} 
	declare export type Generate = (
options?: Options,
callback?: (error: NodeJS.ErrnoException, serviceWorkerString: string) => void) => Promise<string>;
	declare export type Write = (
filePath: string,
options?: Options,
callback?: (error: NodeJS.ErrnoException) => void) => Promise<string>;
	declare export var generate: Generate;
	declare export var write: Write;
    }
