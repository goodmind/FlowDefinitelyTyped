declare module 'p-defer' {
        declare module.exports: typeof pDefer

	declare function pDefer<T>(): pDefer$pDefer$DeferredPromise<T>

	declare interface pDefer$DeferredPromise<T> {
resolve(value?: T | PromiseLike<T>): void,
reject(reason: any): void,
promise: Promise<T>
} 
    }
