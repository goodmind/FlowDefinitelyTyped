declare module "json-pointer" {
  declare function JSON_Pointer(
    object: Object
  ): JSON_Pointer$JSON_Pointer$JSON_PointerWrap;

  declare var npm$namespace$JSON_Pointer: {
    get: typeof JSON_Pointer$get,
    set: typeof JSON_Pointer$set,
    remove: typeof JSON_Pointer$remove,
    dict: typeof JSON_Pointer$dict,
    walk: typeof JSON_Pointer$walk,
    has: typeof JSON_Pointer$has,
    escape: typeof JSON_Pointer$escape,
    unescape: typeof JSON_Pointer$unescape,
    parse: typeof JSON_Pointer$parse,
    compile: typeof JSON_Pointer$compile
  };

  /**
   * Wrap an object with accessors
   * Looks up a JSON pointer in an object.
   */
  declare function JSON_Pointer$get(object: Object, pointer: string): any;

  /**
   * Set a value for a JSON pointer on object.
   */
  declare function JSON_Pointer$set(
    object: Object,
    pointer: string,
    value: any
  ): void;

  /**
   * Removes an attribute of object referenced by pointer
   */
  declare function JSON_Pointer$remove(object: Object, pointer: string): void;

  /**
   * Creates a dictionary object (pointer -> value).
   */
  declare function JSON_Pointer$dict(object: Object): Object;

  /**
   * Just like: each(pointer.dict(obj), iterator);
   */
  declare function JSON_Pointer$walk(
    object: Object,
    iterator: (value: any, key: string) => void
  ): void;

  /**
   * Tests if an object has a value for a JSON pointer.
   */
  declare function JSON_Pointer$has(object: Object, pointer: string): boolean;

  /**
   * Escapes a reference token.
   */
  declare function JSON_Pointer$escape(str: string): string;

  /**
   * Unescape a reference token.
   */
  declare function JSON_Pointer$unescape(str: string): string;

  /**
   * Converts a JSON pointer into an array of reference tokens.
   */
  declare function JSON_Pointer$parse(str: string): string[];

  /**
   * Builds a json pointer from an array of reference tokens.
   */
  declare function JSON_Pointer$compile(str: string[]): string;

  declare interface JSON_Pointer$JSON_PointerWrap {
    /**
     * Looks up a JSON pointer in an object.
     */
    JSON_Pointer$get(pointer: string): any;

    /**
     * Set a value for a JSON pointer on object.
     */
    JSON_Pointer$set(pointer: string, value: any): void;

    /**
     * Removes an attribute of object referenced by pointer
     */
    JSON_Pointer$remove(pointer: string): void;

    /**
     * Creates a dictionary object (pointer -> value).
     */
    JSON_Pointer$dict(): Object;

    /**
     * Just like: each(pointer.dict(obj), iterator);
     */
    JSON_Pointer$walk(iterator: (value: any, key: string) => void): void;

    /**
     * Tests if an object has a value for a JSON pointer.
     */
    JSON_Pointer$has(pointer: string): boolean;
  }
  declare module.exports: typeof JSON_Pointer;
}
