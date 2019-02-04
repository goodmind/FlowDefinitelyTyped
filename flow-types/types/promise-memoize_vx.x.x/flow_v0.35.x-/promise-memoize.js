declare module 'promise-memoize' {
        declare module.exports: typeof promiseMemoize

	declare function promiseMemoize<T: (...args: any[]) => PromiseLike<any>>(
fn: T,
options?: promiseMemoize$promiseMemoize$Options): T & {
clear(): void
}

	declare interface promiseMemoize$Options {
maxAge?: number,
maxErrorAge?: number,
resolve?: promiseMemoize$KeyResolver
} 

declare type promiseMemoize$KeyResolver = "simple" | "json" | ((args: any[]) => any) | $ReadOnlyArray<"json" | ((arg: any) => any)>;
    }
