declare module "p-lazy" {
  declare module.exports: typeof PLazy;

  declare class PLazy<T> mixins Promise<T> {
    static from<T>(fn: () => T | PromiseLike<T>): PLazy<T>;
  }
}
