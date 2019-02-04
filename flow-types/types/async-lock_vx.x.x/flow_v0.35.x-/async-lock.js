declare module 'async-lock' {
        declare type AsyncLockDoneCallback<T> = (err?: Error, ret?: T) => void;
	declare interface AsyncLockOptions {
timeout?: number,
maxPending?: number,
domainReentrant?: boolean,
Promise?: any
} 
	declare class AsyncLock  {
constructor(options?: AsyncLockOptions): this;
acquire<T>(
key: string | string[],
fn: (() => T | PromiseLike<T>) | ((done: AsyncLockDoneCallback<T>) => any),
opts?: AsyncLockOptions): Promise<T>;
acquire<T>(
key: string | string[],
fn: (done: AsyncLockDoneCallback<T>) => any,
cb: AsyncLockDoneCallback<T>,
opts?: AsyncLockOptions): void;
isBusy(key?: string): boolean
}
	
	declare module.exports: typeof AsyncLock

    }
