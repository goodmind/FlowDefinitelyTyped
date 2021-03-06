declare module "nodeunit" {
  declare export interface ITestCase {
    (testCase: {
      [property: string]: ITestBody | ITestGroup | void
    }): void;
  }
  declare export var testCase: ITestCase;
  declare export interface Test {
    done: ICallbackFunction;
    expect(num: number): void;
    fail(actual: any, expected: any, message: string, operator: string): void;
    assert(value: any, message: string): void;
    ok(value: any, message?: string): void;
    equal(actual: any, expected: any, message?: string): void;
    notEqual(actual: any, expected: any, message?: string): void;
    deepEqual(actual: any, expected: any, message?: string): void;
    notDeepEqual(actual: any, expected: any, message?: string): void;
    strictEqual(actual: any, expected: any, message?: string): void;
    notStrictEqual(actual: any, expected: any, message?: string): void;
    throws(block: any, error?: any, message?: string): void;
    doesNotThrow(block: any, error?: any, message?: string): void;
    ifError(value: any): void;
    equals(actual: any, expected: any, message?: string): void;
    same(actual: any, expected: any, message?: string): void;
  }
  declare export interface ITestBody {
    (callback: Test): void;
  }
  declare export interface ITestGroup {
    /**
     * The setUp function is run before each test
     */
    setUp?: (callback: ICallbackFunction) => void;

    /**
     * The tearDown function is run after each test calls test.done()
     */
    tearDown?: (callback: ICallbackFunction) => void;
    [property: string]:
      | ITestGroup
      | ITestBody
      | ((callback: ICallbackFunction) => void)
      | void;
  }
  declare export interface ICallbackFunction {
    (err?: any): void;
  }
}
