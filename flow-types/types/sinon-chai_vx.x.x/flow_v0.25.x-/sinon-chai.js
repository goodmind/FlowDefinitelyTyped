declare interface Chai$LanguageChains {
  always: Chai$Assertion;
}

declare interface Chai$Assertion {
  /**
   * true if the spy was called at least once.
   */
  called: Chai$Assertion;

  /**
   * @param count The number of recorded calls.
   */
  callCount(count: number): Chai$Assertion;

  /**
   * true if the spy was called exactly once.
   */
  calledOnce: Chai$Assertion;

  /**
   * true if the spy was called exactly twice.
   */
  calledTwice: Chai$Assertion;

  /**
   * true if the spy was called exactly thrice.
   */
  calledThrice: Chai$Assertion;

  /**
   * Returns true if the spy was called before anotherSpy.
   */
  calledBefore(anotherSpy: Sinon.SinonSpy): Chai$Assertion;

  /**
   * Returns true if the spy was called after anotherSpy.
   */
  calledAfter(anotherSpy: Sinon.SinonSpy): Chai$Assertion;

  /**
   * Returns true if spy was called before anotherSpy, and no spy calls occurred
   * between spy and anotherSpy.
   */
  calledImmediatelyBefore(anotherSpy: Sinon.SinonSpy): Chai$Assertion;

  /**
   * Returns true if spy was called after anotherSpy, and no spy calls occurred
   * between anotherSpy and spy.
   */
  calledImmediatelyAfter(anotherSpy: Sinon.SinonSpy): Chai$Assertion;

  /**
   * Returns true if spy/stub was called with the new operator. Beware that
   * this is inferred based on the value of the this object and the spy
   * function's prototype, so it may give false positives if you actively
   * return the right kind of object.
   */
  calledWithNew: Chai$Assertion;

  /**
   * Returns true if context was this for this call.
   */
  calledOn(context: any): Chai$Assertion;

  /**
   * Returns true if call received provided arguments (and possibly others).
   */
  calledWith(...args: any[]): Chai$Assertion;

  /**
   * Returns true if spy was called at exactly once with the provided arguments.
   */
  calledOnceWith(...args: any[]): Chai$Assertion;

  /**
   * Returns true if call received provided arguments and no others.
   */
  calledWithExactly(...args: any[]): Chai$Assertion;

  /**
   * Returns true if spy was called exactly once with the provided arguments and no others.
   */
  calledOnceWithExactly(...args: any[]): Chai$Assertion;

  /**
   * Returns true if call received matching arguments (and possibly others).
   * This behaves the same as spyCall.calledWith(sinon.match(arg1), sinon.match(arg2), ...).
   */
  calledWithMatch(...args: any[]): Chai$Assertion;

  /**
   * Returns true if spy returned the provided value at least once. Uses
   * deep comparison for objects and arrays. Use spy.returned(sinon.match.same(obj))
   * for strict comparison (see matchers).
   */
  returned(obj: any): Chai$Assertion;

  /**
   * Returns true if spy threw the provided exception object at least once.
   */
  thrown(obj?: Error | typeof Error | string): Chai$Assertion;
}
declare module "global" {
}
declare module "sinon-chai" {
  import typeof * as Sinon from "sinon";

  declare function sinonChai(chai: any, utils: any): void;

  declare module.exports: typeof sinonChai;
}
