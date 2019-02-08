declare var npm$namespace$promiseFinally: {
  shim: typeof promiseFinally$shim
};
declare function promiseFinally$shim(): void;
declare module "global" {
  declare interface Promise<T> {
    finally<U>(onFinally?: () => U | PromiseLike<U>): Promise<T>;
  }
}
declare module "promise.prototype.finally" {
  declare export default typeof promiseFinally;

  declare function promiseFinally<T, U>(
    promise: Promise<T>,
    onFinally?: () => U | PromiseLike<U>
  ): Promise<T>;

  declare var npm$namespace$promiseFinally: {
    shim: typeof promiseFinally$shim
  };
  declare function promiseFinally$shim(): void;
}
