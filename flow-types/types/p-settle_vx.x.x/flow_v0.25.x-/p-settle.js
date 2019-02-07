declare module "p-settle" {
  declare interface pSettle$SettledResult<T> {
    isFulfilled: boolean;
    isRejected: boolean;

    /**
     * If the promise was fulfilled, the resolved value
     */
    value?: T;

    /**
     * If the promise was rejected, the reason
     */
    reason?: any;
  }

  /**
   * Returns a Promise that is fulfilled when all promises in `input` are settled.
   *
   * The fulfilled value is an array of objects with the following properties:
   *
   * * `isFulfilled`
   * * `isRejected`
   * * `value` or `reason` (Depending on whether the promise fulfilled or rejected)
   */
  declare function pSettle<T>(
    input: Iterable<PromiseLike<T>>
  ): Promise<Array<pSettle$pSettle$SettledResult<T>>>;

  declare module.exports: typeof pSettle;
}
