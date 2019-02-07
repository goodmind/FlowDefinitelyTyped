declare module "lazy-value" {
  /**
   * Create a [lazily evaluated](https://en.wikipedia.org/wiki/Lazy_evaluation) value.
   *
   * Useful when a value is expensive to generate, so you want to delay the computation until the value is needed.
   * For example, improving startup performance by deferring nonessential operations.
   * @param fn Expected to return a value.
   */
  declare function lazyValue<T: () => any>(fn: T): T;

  declare module.exports: typeof lazyValue;
}
