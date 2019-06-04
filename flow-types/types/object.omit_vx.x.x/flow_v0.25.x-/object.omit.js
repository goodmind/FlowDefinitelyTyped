declare module "object.omit" {
  declare type Omit<GType, GKeys: $Keys<GType>> = Pick<
    GType,
    Exclude<$Keys<GType>, GKeys>
  >;

  /**
   * Return a copy of an object excluding the given key, or array of keys. Also accepts an optional filter function as the last argument."
   *
   * ```ts
   *  * omit({a: 'a', b: 'b', c: 'c'}, ['a', 'c'])
   *  * //=> { b: 'b' }
   *  * ```
   * @param object
   * @param keys
   */
  declare function omit<GObject: { [key: string]: any }, GKey: $Keys<GObject>>(
    object: GObject,
    key: GKey | GKey[]
  ): Omit<GObject, GKey>;

  declare function omit<GObject: { [key: string]: any }, GKey: $Keys<GObject>>(
    object: GObject,
    fn: (value: $ElementType<GObject, GKey>, key: GKey, obj: GObject) => boolean
  ): {
    [key: string]: any
  };

  declare export default typeof omit;
}
