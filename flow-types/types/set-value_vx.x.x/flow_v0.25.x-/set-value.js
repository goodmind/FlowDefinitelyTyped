declare module "set-value" {
  declare module.exports: typeof set;

  /**
   * @param object The object to set `value` on
   * @param prop The property to set.
   * @param value The value to set on `object[prop]`
   */
  declare function set<T, K: $Keys<T>>(
    object: T,
    prop: K,
    value: $ElementType<T, K>
  ): void;

  /**
   * @param object The object to set `value` on
   * @param prop The property to set. Dot-notation may be used.
   * @param value The value to set on `object[prop]`
   */
  declare function set(
    object: { [key: string]: any },
    prop: string,
    value: any
  ): void;
}
