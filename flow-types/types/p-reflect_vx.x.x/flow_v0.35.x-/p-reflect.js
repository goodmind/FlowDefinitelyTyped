declare module 'p-reflect' {
        declare module.exports: typeof pReflect

	declare function pReflect<T>(promise: PromiseLike<T>): Promise<pReflect$pReflect$PromiseResult<T>>

	declare type pReflect$PromiseResult<T> = pReflect$PromiseFulfilledResult<T> | pReflect$PromiseRejectedResult;

declare interface pReflect$PromiseFulfilledResult<T> {
isFulfilled: true,
isRejected: false,
value: T
} 

declare interface pReflect$PromiseRejectedResult {
isFulfilled: false,
isRejected: true,
reason: any
} 
    }
