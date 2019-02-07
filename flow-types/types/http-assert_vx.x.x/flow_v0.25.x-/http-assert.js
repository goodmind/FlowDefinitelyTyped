declare module "http-assert" {
  /**
   * @param status the status code
   * @param msg the message of the error, defaulting to node's text for that status code
   * @param opts custom properties to attach to the error object
   */
  declare function assert(
    value: any,
    status?: number,
    msg?: string,
    opts?: {}
  ): void;

  declare function assert(value: any, status?: number, opts?: {}): void;

  declare var npm$namespace$assert: {
    equal: typeof assert$equal,
    notEqual: typeof assert$notEqual,
    ok: typeof assert$ok,
    strictEqual: typeof assert$strictEqual,
    notStrictEqual: typeof assert$notStrictEqual,
    deepEqual: typeof assert$deepEqual,
    notDeepEqual: typeof assert$notDeepEqual
  };

  /**
   * @param status the status code
   * @param msg the message of the error, defaulting to node's text for that status code
   * @param opts custom properties to attach to the error object
   */
  declare type assert$Assert = <T>(
    a: T,
    b: T,
    status?: number,
    msg?: string,
    opts?: {}
  ) => void;

  declare var assert$equal: assert$Assert;

  declare var assert$notEqual: assert$Assert;

  declare var assert$ok: assert$Assert;

  declare var assert$strictEqual: assert$Assert;

  declare var assert$notStrictEqual: assert$Assert;

  declare var assert$deepEqual: assert$Assert;

  declare var assert$notDeepEqual: assert$Assert;
  declare module.exports: typeof assert;
}
