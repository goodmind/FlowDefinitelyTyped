declare module "assert" {
  declare function assert(value: any, message?: string): void;

  declare var npm$namespace$assert: {
    fail: typeof assert$fail,
    ok: typeof assert$ok,
    equal: typeof assert$equal,
    notEqual: typeof assert$notEqual,
    deepEqual: typeof assert$deepEqual,
    notDeepEqual: typeof assert$notDeepEqual,
    strictEqual: typeof assert$strictEqual,
    notStrictEqual: typeof assert$notStrictEqual,
    throws: typeof assert$throws,
    doesNotThrow: typeof assert$doesNotThrow,
    ifError: typeof assert$ifError,

    AssertionError: typeof assert$AssertionError
  };
  declare function assert$fail(
    actual?: any,
    expected?: any,
    message?: string,
    operator?: string
  ): void;

  declare function assert$ok(value: any, message?: string): void;

  declare function assert$equal(
    actual: any,
    expected: any,
    message?: string
  ): void;

  declare function assert$notEqual(
    actual: any,
    expected: any,
    message?: string
  ): void;

  declare function assert$deepEqual(
    actual: any,
    expected: any,
    message?: string
  ): void;

  declare function assert$notDeepEqual(
    acutal: any,
    expected: any,
    message?: string
  ): void;

  declare function assert$strictEqual(
    actual: any,
    expected: any,
    message?: string
  ): void;

  declare function assert$notStrictEqual(
    actual: any,
    expected: any,
    message?: string
  ): void;

  declare function assert$throws(block: () => void, message?: string): void;

  declare function assert$throws(
    block: () => void,
    error: (() => void) | ((err: any) => boolean) | RegExp,
    message?: string
  ): void;

  declare function assert$doesNotThrow(
    block: () => void,
    message?: string
  ): void;

  declare function assert$doesNotThrow(
    block: () => void,
    error: (() => void) | ((err: any) => boolean) | RegExp,
    message?: string
  ): void;

  declare function assert$ifError(value: any): void;

  declare class assert$AssertionError mixins Error {
    name: string;
    message: string;
    actual: any;
    expected: any;
    operator: string;
    generatedMessage: boolean;
    constructor(options?: {
      message?: string,
      actual?: any,
      expected?: any,
      operator?: string,
      stackStartFunction?: () => void
    }): this;
  }
  declare export default typeof assert;
}
