declare module "cloner" {
  declare var npm$namespace$deep: {
    copy: typeof deep$copy,
    merge: typeof deep$merge
  };

  /**
   * Will loop over all own keys and deeply copy (copy by value) them to a new object.
   *
   * Preserves inheritance and is recursion aware, meaning it shouldn't fail with recursive properties.
   * @param obj The object to copy.
   */
  declare function deep$copy<T>(obj: T): T;

  /**
   * Preserves what's already in the target and merges all own keys found in one or more passed sources.
   *
   * Properties are merged by value.
   * @param target Destination object for merged properties.
   * @param sources Source object(s) for properties to merge.
   */
  declare function deep$merge(target: any, ...sources: any[]): any;

  declare var npm$namespace$shallow: {
    copy: typeof shallow$copy,
    merge: typeof shallow$merge
  };

  /**
   * Will loop over all own keys and shallow copy (copy by reference) them to a new object.
   *
   * Preserves inheritance and is recursion aware, meaning it shouldn't fail with recursive properties.
   * @param obj The object to copy.
   */
  declare function shallow$copy<T>(obj: T): T;

  /**
   * Preserves what's already in the target and merges all own keys found in one or more passed sources.
   *
   * Properties are merged by reference.
   * @param target Destination object for merged properties.
   * @param sources Source object(s) for properties to merge.
   */
  declare function shallow$merge(target: any, ...sources: any[]): any;
}
