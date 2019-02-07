declare module "yoctodelay" {
  /**
   * Delay the promise and then resolve.
   * @param ms Milliseconds to delay the promise.
   */
  declare function delay(ms: number): Promise<void>;

  declare module.exports: typeof delay;
}
