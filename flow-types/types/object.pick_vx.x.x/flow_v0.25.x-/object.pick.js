declare module "object.pick" {
  /**
   * Returns a filtered copy of an object with only the specified keys, similar to `_.pick` from lodash / underscore.
   * @param object
   * @param keys
   */
  declare function pick<T: { [key: string]: any }, U: $Keys<T>>(
    object: T,
    keys: U[]
  ): Pick<T, U>;

  declare export default typeof pick;
}
