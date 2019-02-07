declare module "jasminewd2" {
  declare function it(
    expectation: string,
    assertion?: (done: DoneFn) => Promise<void>,
    timeout?: number
  ): void;

  declare function fit(
    expectation: string,
    assertion?: (done: DoneFn) => Promise<void>,
    timeout?: number
  ): void;

  declare function xit(
    expectation: string,
    assertion?: (done: DoneFn) => Promise<void>,
    timeout?: number
  ): void;

  declare function beforeEach(
    action: (done: DoneFn) => Promise<void>,
    timeout?: number
  ): void;

  declare function afterEach(
    action: (done: DoneFn) => Promise<void>,
    timeout?: number
  ): void;

  declare function beforeAll(
    action: (done: DoneFn) => Promise<void>,
    timeout?: number
  ): void;

  declare function afterAll(
    action: (done: DoneFn) => Promise<void>,
    timeout?: number
  ): void;

  declare var npm$namespace$jasmine: {
    addMatchers: typeof jasmine$addMatchers
  };
  declare interface jasmine$Matchers<T> {
    toBe(expected: any, expectationFailOutput?: any): Promise<void>;
    toEqual(expected: any, expectationFailOutput?: any): Promise<void>;
    toMatch(
      expected: string | RegExp | Promise<string | RegExp>,
      expectationFailOutput?: any
    ): Promise<void>;
    toBeDefined(expectationFailOutput?: any): Promise<void>;
    toBeUndefined(expectationFailOutput?: any): Promise<void>;
    toBeNull(expectationFailOutput?: any): Promise<void>;
    toBeNaN(): Promise<void>;
    toBeTruthy(expectationFailOutput?: any): Promise<void>;
    toBeFalsy(expectationFailOutput?: any): Promise<void>;
    toHaveBeenCalled(): Promise<void>;
    toHaveBeenCalledWith(...params: any[]): Promise<void>;
    toHaveBeenCalledTimes(expected: number | Promise<number>): Promise<void>;
    toContain(expected: any, expectationFailOutput?: any): Promise<void>;
    toBeLessThan(
      expected: number | Promise<number>,
      expectationFailOutput?: any
    ): Promise<void>;
    toBeLessThanOrEqual(
      expected: number | Promise<number>,
      expectationFailOutput?: any
    ): Promise<void>;
    toBeGreaterThan(
      expected: number | Promise<number>,
      expectationFailOutput?: any
    ): Promise<void>;
    toBeGreaterThanOrEqual(
      expected: number | Promise<number>,
      expectationFailOutput?: any
    ): Promise<void>;
    toBeCloseTo(
      expected: number | Promise<number>,
      precision?: any,
      expectationFailOutput?: any
    ): Promise<void>;
    toThrow(expected?: any): Promise<void>;
    toThrowError(
      message?: string | RegExp | Promise<string | RegExp>
    ): Promise<void>;
    toThrowError(
      expected?: (...args: any[]) => Error | Promise<(...args: any[]) => Error>,
      message?: string | RegExp | Promise<string | RegExp>
    ): Promise<void>;
  }

  declare type jasmine$ArrayLikeMatchers<T> = {
    toBe(
      expected: Expected<ArrayLike<T>>,
      expectationFailOutput?: any
    ): Promise<void>,
    toEqual(
      expected: Expected<ArrayLike<T>>,
      expectationFailOutput?: any
    ): Promise<void>,
    toContain(expected: T, expectationFailOutput?: any): Promise<void>,
    not: jasmine$ArrayLikeMatchers<T>
  } & jasmine$Matchers<ArrayLike<T>>;

  declare function jasmine$addMatchers(
    matchers: jasmine$AsyncCustomMatcherFactories
  ): void;

  declare interface jasmine$Env {
    jasmine$addMatchers(matchers: jasmine$AsyncCustomMatcherFactories): void;
  }

  declare interface jasmine$Spec {
    jasmine$addMatchers(matchers: jasmine$AsyncCustomMatcherFactories): void;
  }

  declare interface jasmine$AsyncCustomMatcherFactories {
    [index: string]: jasmine$AsyncCustomMatcherFactory;
  }

  declare interface jasmine$AsyncCustomMatcherFactory {
    (
      util: MatchersUtil,
      customEqualityTesters: CustomEqualityTester[]
    ): jasmine$AsyncCustomMatcher;
  }

  declare interface jasmine$AsyncCustomMatcher {
    compare<T>(actual: T, expected: T): jasmine$AsyncCustomMatcherResult;
    compare(actual: any, expected: any): jasmine$AsyncCustomMatcherResult;
  }

  declare interface jasmine$AsyncCustomMatcherResult {
    pass: boolean | Promise<boolean>;
    message?: string;
  }
}
