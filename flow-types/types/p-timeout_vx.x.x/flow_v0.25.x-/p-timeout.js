declare module "p-timeout" {
  declare module.exports: typeof pTimeout;

  declare function pTimeout<T>(
    input: PromiseLike<T>,
    ms: number,
    message?: string | pTimeout$pTimeout$TimeoutError
  ): Promise<T>;

  declare function pTimeout<T, R>(
    input: PromiseLike<T>,
    ms: number,
    fallback: () => R | Promise<R>
  ): Promise<T | R>;

  declare class pTimeout$TimeoutError mixins Error {
    name: "TimeoutError";
    constructor(message?: string): this;
  }
}
