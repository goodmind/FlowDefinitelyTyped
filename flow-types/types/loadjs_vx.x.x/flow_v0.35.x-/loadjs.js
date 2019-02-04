declare module 'loadjs' {
        declare module.exports: typeof loadjs

	declare function loadjs(
files: string | string[],
bundleIdOrLoaded: string | loadjs$loadjs$LoadedFn): void

	declare function loadjs(
files: string[],
bundleId: string,
optionsOrCallback: loadjs$loadjs$LoadOptions | loadjs$loadjs$LoadedFn): void

	
      declare var npm$namespace$loadjs: {
        ready: typeof loadjs$ready,
isDefined: typeof loadjs$isDefined,
done: typeof loadjs$done,
reset: typeof loadjs$reset,
        
      }
declare type loadjs$LoadedFn = () => void;

declare interface loadjs$LoadOptions {
before(path: string, scriptEl: string): void,
success(): void,
error(depsNotFound: string): void,
async?: boolean,
numRetries?: number
} 

declare interface loadjs$ReadyOptions {
success(): void,
error(depsNotFound: string): void
} 

declare function loadjs$ready(
bundleIds: string | string[],
optionsOrCallback: loadjs$ReadyOptions | loadjs$LoadedFn): typeof loadjs


declare function loadjs$isDefined(bundleId: string): boolean


declare function loadjs$done(bundleId: string): void


declare function loadjs$reset(): void

    }
