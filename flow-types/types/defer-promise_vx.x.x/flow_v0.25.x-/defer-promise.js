declare interface DeferPromise$Deferred<T> {
  promise: Promise<T>;
  resolve(value: T | PromiseLike<T>): void;
  resolve(): void;
  reject(reason?: any): void;
}
declare module "global" {
}
declare module "defer-promise" {
  declare function defer<T>(): DeferPromise$DeferPromise$Deferred<T>;

  declare module.exports: typeof defer;
}
