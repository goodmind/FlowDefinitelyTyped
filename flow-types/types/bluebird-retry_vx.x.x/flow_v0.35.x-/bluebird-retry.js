declare module 'bluebird-retry' {
        declare function retry<T>(func: (param: T) => void, options?: retry$retry$Options): Promise<T>

	declare interface retry$Options {
interval?: number,
backoff?: number,
max_interval?: number,
timeout?: number,
max_tries?: number,
predicate?: any,
throw_original?: boolean,
context?: any,
args?: any
} 

declare class retry$StopError mixins Error {}
	declare module.exports: typeof retry

    }
