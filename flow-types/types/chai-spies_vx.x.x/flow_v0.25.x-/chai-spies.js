declare interface Chai$ChaiStatic {
  spy: ChaiSpies$ChaiSpies$Spy;
}

declare interface Chai$LanguageChains {
  on: Chai$Assertion;
}

declare interface Chai$Assertion {
  /**
   * ####.spy
   * Asserts that object is a spy.
   * ```ts
   *          * expect(spy).to.be.spy;
   *          * spy.should.be.spy;
   *          * ```
   */
  spy: Chai$Assertion;

  /**
   * ####.called
   * Assert that a spy has been called. Negation passes through.
   * ```ts
   *          * expect(spy).to.have.been.called();
   *          * spy.should.have.been.called();
   *          * ```
   * Note that ```called``` can be used as a chainable method.
   */
  called: ChaiSpies$ChaiSpies$Called;

  /**
   * * ####.been
   * * Assert that something has been spied on. Negation passes through.
   * * ```ts
   *          * * expect(spy).to.have.been.called();
   *          * * spy.should.have.been.called();
   *          * ```
   * Note that ```been``` can be used as a chainable method.
   */
  been: ChaiSpies$ChaiSpies$Been;

  /**
   * * ####.nth (function)
   * * Assert that something has been spied on on a certain index. Negation passes through.
   * * ```ts
   *          * * expect(spy).on.nth(5).be.called.with('foobar');
   *          * * spy.should.on.nth(5).be.called.with('foobar');
   *          * ```
   * Note that ```nth``` can be used as a chainable method.
   */
  nth(index: number): Chai$Assertion;
}
declare interface ChaiSpies$Sandbox {
  /**
   * #### chai.spy.on (function)
   *
   * Wraps an object method into spy. All calls will pass through to the original function.
   * @param {Object} object
   * @param {String} methodNames names to spy on
   * @param {function} fn replacement function
   * @returns function to actually call
   */
  on(
    object: Object,
    methodNames: string | string[],
    fn?: (parameters: any[] | any) => any
  ): any;

  /**
   * #### chai.spy.restore (function)
   *
   * Restores previously wrapped object's method.
   * Restores all spied objects of a sandbox if called without parameters.
   * @function
   * @param {Object} object
   * @param {String | String[]} methods name or names
   * @return {ChaiSpies$Sandbox} Sandbox instance
   */
  restore(object?: Object, methodNames?: string | string[]): void;
}

declare interface ChaiSpies$Spy {
  /**
   * #### chai.spy (function)
   *
   * Wraps a function in a proxy function. All calls will pass through to the original function.
   * ```ts
   *          * function original() {}
   *          * var spy = chai.spy(original)
   *          *   , e_spy = chai.spy();
   *          * ```
   * @param fn function to spy on.
   * @default ```function () {}```
   * @returns function to actually call
   */
  (): ChaiSpies$SpyFunc0Proxy<void>;
  <R>(fn: ChaiSpies$SpyFunc0<R>): ChaiSpies$SpyFunc0Proxy<R>;
  <A1, R>(fn: ChaiSpies$SpyFunc1<A1, R>): ChaiSpies$SpyFunc1Proxy<A1, R>;
  <A1, A2, R>(
    fn: ChaiSpies$SpyFunc2<A1, A2, R>
  ): ChaiSpies$SpyFunc2Proxy<A1, A2, R>;
  <A1, A2, A3, R>(
    fn: ChaiSpies$SpyFunc3<A1, A2, A3, R>
  ): ChaiSpies$SpyFunc3Proxy<A1, A2, A3, R>;
  <A1, A2, A3, A4, R>(
    fn: ChaiSpies$SpyFunc4<A1, A2, A3, A4, R>
  ): ChaiSpies$SpyFunc4Proxy<A1, A2, A3, A4, R>;
  <A1, A2, A3, A4, A5, R>(
    fn: ChaiSpies$SpyFunc5<A1, A2, A3, A4, A5, R>
  ): ChaiSpies$SpyFunc5Proxy<A1, A2, A3, A4, A5, R>;
  <A1, A2, A3, A4, A5, A6, R>(
    fn: ChaiSpies$SpyFunc6<A1, A2, A3, A4, A5, A6, R>
  ): ChaiSpies$SpyFunc6Proxy<A1, A2, A3, A4, A5, A6, R>;
  <A1, A2, A3, A4, A5, A6, A7, R>(
    fn: ChaiSpies$SpyFunc7<A1, A2, A3, A4, A5, A6, A7, R>
  ): ChaiSpies$SpyFunc7Proxy<A1, A2, A3, A4, A5, A6, A7, R>;
  <A1, A2, A3, A4, A5, A6, A7, A8, R>(
    fn: ChaiSpies$SpyFunc8<A1, A2, A3, A4, A5, A6, A7, A8, R>
  ): ChaiSpies$SpyFunc8Proxy<A1, A2, A3, A4, A5, A6, A7, A8, R>;
  <A1, A2, A3, A4, A5, A6, A7, A8, A9, R>(
    fn: ChaiSpies$SpyFunc9<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>
  ): ChaiSpies$SpyFunc9Proxy<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>;
  <A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>(
    fn: ChaiSpies$SpyFunc10<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>
  ): ChaiSpies$SpyFunc10Proxy<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>;
  <R>(name: string, fn: ChaiSpies$SpyFunc0<R>): ChaiSpies$SpyFunc0Proxy<R>;
  <A1, R>(
    name: string,
    fn: ChaiSpies$SpyFunc1<A1, R>
  ): ChaiSpies$SpyFunc1Proxy<A1, R>;
  <A1, A2, R>(
    name: string,
    fn: ChaiSpies$SpyFunc2<A1, A2, R>
  ): ChaiSpies$SpyFunc2Proxy<A1, A2, R>;
  <A1, A2, A3, R>(
    name: string,
    fn: ChaiSpies$SpyFunc3<A1, A2, A3, R>
  ): ChaiSpies$SpyFunc3Proxy<A1, A2, A3, R>;
  <A1, A2, A3, A4, R>(
    name: string,
    fn: ChaiSpies$SpyFunc4<A1, A2, A3, A4, R>
  ): ChaiSpies$SpyFunc4Proxy<A1, A2, A3, A4, R>;
  <A1, A2, A3, A4, A5, R>(
    name: string,
    fn: ChaiSpies$SpyFunc5<A1, A2, A3, A4, A5, R>
  ): ChaiSpies$SpyFunc5Proxy<A1, A2, A3, A4, A5, R>;
  <A1, A2, A3, A4, A5, A6, R>(
    name: string,
    fn: ChaiSpies$SpyFunc6<A1, A2, A3, A4, A5, A6, R>
  ): ChaiSpies$SpyFunc6Proxy<A1, A2, A3, A4, A5, A6, R>;
  <A1, A2, A3, A4, A5, A6, A7, R>(
    name: string,
    fn: ChaiSpies$SpyFunc7<A1, A2, A3, A4, A5, A6, A7, R>
  ): ChaiSpies$SpyFunc7Proxy<A1, A2, A3, A4, A5, A6, A7, R>;
  <A1, A2, A3, A4, A5, A6, A7, A8, R>(
    name: string,
    fn: ChaiSpies$SpyFunc8<A1, A2, A3, A4, A5, A6, A7, A8, R>
  ): ChaiSpies$SpyFunc8Proxy<A1, A2, A3, A4, A5, A6, A7, A8, R>;
  <A1, A2, A3, A4, A5, A6, A7, A8, A9, R>(
    name: string,
    fn: ChaiSpies$SpyFunc9<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>
  ): ChaiSpies$SpyFunc9Proxy<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>;
  <A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>(
    name: string,
    fn: ChaiSpies$SpyFunc10<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>
  ): ChaiSpies$SpyFunc10Proxy<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>;

  /**
   * #### chai.spy.on (function)
   *
   * Wraps an object method into spy. All calls will pass through to the original function.
   * ```ts
   *          * var spy = chai.spy.on(Array, 'isArray');
   *          * ```
   * @param {Object} object
   * @param {String} method names to spy on
   * @param {function} fn replacement function
   * @returns function to actually call
   */
  on(
    object: Object,
    methodNames: string | string[],
    fn?: (parameters: any[] | any) => any
  ): any;

  /**
   * #### chai.spy.object (function)
   *
   * Creates an object with spied methods.
   * ```ts
   *          * var object = chai.spy.object('Array', [ 'push', 'pop' ]);
   *          * ```
   * @param {String} name object name
   * @param {String[] | Object} method names or method definitions
   * @returns object with spied methods
   */
  object(name: string, methods: string[]): any;
  object(methods: string[]): any;
  object<T>(name: string, methods: T): T;
  object<T>(methods: T): T;

  /**
   * #### chai.spy.restore (function)
   *
   * Restores spy assigned to DEFAULT sandbox
   *
   * Restores previously wrapped object's method.
   * Restores all spied objects of a sandbox if called without parameters.
   * @param {Object} object
   * @param {String | String[]} methods name or names
   * @return {ChaiSpies$Sandbox} Sandbox instance
   */
  restore(object?: Object, methodNames?: string | string[]): void;

  /**
   * #### chai.spy.returns (function)
   *
   * Creates a spy which returns static value.
   * ```ts
   *          *      var method = chai.spy.returns(true);
   *          *```
   * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} value static value which is returned by spy
   * @returns new spy function which returns static value
   * @api public
   */
  returns<T>(value: T): ChaiSpies$SpyFunc0Proxy<T>;

  /**
   * ### chai.spy.sandbox
   *
   * Creates a sandbox.
   *
   * Sandbox is a set of spies.
   * Sandbox allows to track methods on objects and restore original methods with on restore call.
   * @returns {ChaiSpies$Sandbox}
   */
  sandbox(): ChaiSpies$Sandbox;
}

declare interface ChaiSpies$Called {
  (): Chai$Chai$Assertion;
  with: ChaiSpies$With;
  always: ChaiSpies$Always;

  /**
   * ####.once
   * Assert that a spy has been called exactly once.
   * ```ts
   *          * expect(spy).to.have.been.called.once;
   *          * expect(spy).to.not.have.been.called.once;
   *          * spy.should.have.been.called.once;
   *          * spy.should.not.have.been.called.once;
   *          * ```
   */
  once: Chai$Chai$Assertion;

  /**
   * ####.twice
   * Assert that a spy has been called exactly twice.
   * ```ts
   *          * expect(spy).to.have.been.called.twice;
   *          * expect(spy).to.not.have.been.called.twice;
   *          * spy.should.have.been.called.twice;
   *          * spy.should.not.have.been.called.twice;
   *          * ```
   */
  twice: Chai$Chai$Assertion;

  /**
   * ####.exactly(n)
   * Assert that a spy has been called exactly ```n``` times.
   * ```ts
   *          * expect(spy).to.have.been.called.exactly(3);
   *          * expect(spy).to.not.have.been.called.exactly(3);
   *          * spy.should.have.been.called.exactly(3);
   *          * spy.should.not.have.been.called.exactly(3);
   *          * ```
   */
  exactly(n: number): Chai$Chai$Assertion;

  /**
   * ####.min(n) / .at.least(n)
   * Assert that a spy has been called minimum of ```n``` times.
   * ```ts
   *          * expect(spy).to.have.been.called.min(3);
   *          * expect(spy).to.not.have.been.called.at.least(3);
   *          * spy.should.have.been.called.at.least(3);
   *          * spy.should.not.have.been.called.min(3);
   *          * ```
   */
  min(n: number): Chai$Chai$Assertion;

  /**
   * ####.max(n) / .at.most(n)
   * Assert that a spy has been called maximum of ```n``` times.
   * ```ts
   *          * expect(spy).to.have.been.called.max(3);
   *          * expect(spy).to.not.have.been.called.at.most(3);
   *          * spy.should.have.been.called.at.most(3);
   *          * spy.should.not.have.been.called.max(3);
   *          * ```
   */
  max(n: number): Chai$Chai$Assertion;
  at: ChaiSpies$At;

  /**
   * ####.above(n) / .gt(n)
   * Assert that a spy has been called more than ```n``` times.
   * ```ts
   *          * expect(spy).to.have.been.called.above(3);
   *          * spy.should.not.have.been.called.above(3);
   *          * ```
   */
  above(n: number): Chai$Chai$Assertion;

  /**
   * ####.above(n) / .gt(n)
   * Assert that a spy has been called more than ```n``` times.
   * ```ts
   *          * expect(spy).to.have.been.called.gt(3);
   *          * spy.should.not.have.been.called.gt(3);
   *          * ```
   */
  gt(n: number): Chai$Chai$Assertion;

  /**
   * ####.below(n) / .lt(n)
   * Assert that a spy has been called fewer than ```n``` times.
   * ```ts
   *          * expect(spy).to.have.been.called.below(3);
   *          * spy.should.not.have.been.called.below(3);
   *          * ```
   */
  below(n: number): Chai$Chai$Assertion;

  /**
   * ####.below(n) / .lt(n)
   * Assert that a spy has been called fewer than ```n``` times.
   * ```ts
   *          * expect(spy).to.have.been.called.lt(3);
   *          * spy.should.not.have.been.called.lt(3);
   *          * ```
   */
  lt(n: number): Chai$Chai$Assertion;
}

declare type ChaiSpies$Been = {
  (): Chai$Chai$Assertion,
  called: ChaiSpies$Called,

  /**
   * ####.first
   * Assert that a spy has been called first.
   * ```ts
   *          * expect(spy).to.have.been.called.first;
   *          * expect(spy).to.not.have.been.called.first;
   *          * spy.should.have.been.called.first;
   *          * spy.should.not.have.been.called.first;
   *          * ```
   */
  first: Chai$Chai$Assertion,

  /**
   * ####.second
   * Assert that a spy has been called second.
   * ```ts
   *          * expect(spy).to.have.been.called.second;
   *          * expect(spy).to.not.have.been.called.second;
   *          * spy.should.have.been.called.second;
   *          * spy.should.not.have.been.called.second;
   *          * ```
   */
  second: Chai$Chai$Assertion,

  /**
   * ####.third
   * Assert that a spy has been called third.
   * ```ts
   *          * expect(spy).to.have.been.called.third;
   *          * expect(spy).to.not.have.been.called.third;
   *          * spy.should.have.been.called.third;
   *          * spy.should.not.have.been.called.third;
   *          * ```
   */
  third: Chai$Chai$Assertion
} & Chai$Chai$Assertion;

declare interface ChaiSpies$With {
  /**
   * ####.with
   * Assert that a spy has been called with a given argument at least once, even if more arguments were provided.
   * ```ts
   *          * spy('foo');
   *          * expect(spy).to.have.been.called.with('foo');
   *          * spy.should.have.been.called.with('foo');
   *          * ```
   * Will also pass for ```spy('foo', 'bar')``` and ```spy(); spy('foo')```.
   * If used with multiple arguments, assert that a spy has been called with all the given arguments at least once.
   * ```ts
   *          * spy('foo', 'bar', 1);
   *          * expect(spy).to.have.been.called.with('bar', 'foo');
   *          * spy.should.have.been.called.with('bar', 'foo');
   *          * ```
   */
  (
    a: any,
    b?: any,
    c?: any,
    d?: any,
    e?: any,
    f?: any,
    g?: any,
    h?: any,
    i?: any,
    j?: any
  ): Chai$Chai$Assertion;

  /**
   * ####.with.exactly
   * Similar to .with, but will pass only if the list of arguments is exactly the same as the one provided.
   * ```ts
   *          * spy();
   *          * spy('foo', 'bar');
   *          * expect(spy).to.have.been.called.with.exactly('foo', 'bar');
   *          * spy.should.have.been.called.with.exactly('foo', 'bar');
   *          * ```
   * Will not pass for ```spy('foo')```, ```spy('bar')```, ```spy('bar'); spy('foo')```, ```spy('foo'); spy('bar')```, ```spy('bar', 'foo')``` or ```spy('foo', 'bar', 1)```.
   * Can be used for calls with a single argument too.
   */
  exactly(
    a?: any,
    b?: any,
    c?: any,
    d?: any,
    e?: any,
    f?: any,
    g?: any,
    h?: any,
    i?: any,
    j?: any
  ): Chai$Chai$Assertion;
}

declare interface ChaiSpies$Always {
  with: ChaiSpies$AlwaysWith;
}

declare interface ChaiSpies$AlwaysWith {
  /**
   * ####.always.with
   * Assert that every time the spy has been called the argument list contained the given arguments.
   * ```ts
   *          * spy('foo');
   *          * spy('foo', 'bar');
   *          * spy(1, 2, 'foo');
   *          * expect(spy).to.have.been.called.always.with('foo');
   *          * spy.should.have.been.called.always.with('foo');
   *          * ```
   */
  (
    a: any,
    b?: any,
    c?: any,
    d?: any,
    e?: any,
    f?: any,
    g?: any,
    h?: any,
    i?: any,
    j?: any
  ): Chai$Chai$Assertion;

  /**
   * ####.always.with.exactly
   * Assert that the spy has never been called with a different list of arguments than the one provided.
   * ```ts
   *          * spy('foo');
   *          * spy('foo');
   *          * expect(spy).to.have.been.called.always.with.exactly('foo');
   *          * spy.should.have.been.called.always.with.exactly('foo');
   *          * ```
   */
  exactly(
    a?: any,
    b?: any,
    c?: any,
    d?: any,
    e?: any,
    f?: any,
    g?: any,
    h?: any,
    i?: any,
    j?: any
  ): Chai$Chai$Assertion;
}

declare interface ChaiSpies$At {
  /**
   * ####.min(n) / .at.least(n)
   * Assert that a spy has been called minimum of ```n``` times.
   * ```ts
   *          * expect(spy).to.have.been.called.min(3);
   *          * expect(spy).to.not.have.been.called.at.least(3);
   *          * spy.should.have.been.called.at.least(3);
   *          * spy.should.not.have.been.called.min(3);
   *          * ```
   */
  least(n: number): Chai$Chai$Assertion;

  /**
   * ####.max(n) / .at.most(n)
   * Assert that a spy has been called maximum of ```n``` times.
   * ```ts
   *          * expect(spy).to.have.been.called.max(3);
   *          * expect(spy).to.not.have.been.called.at.most(3);
   *          * spy.should.have.been.called.at.most(3);
   *          * spy.should.not.have.been.called.max(3);
   *          * ```
   */
  most(n: number): Chai$Chai$Assertion;
}

declare interface ChaiSpies$Resetable {
  /**
   * #### proxy.reset (function)
   *
   * Resets __spy object parameters for instantiation and reuse
   * @returns proxy spy object
   */
  reset(): this;
}

declare interface ChaiSpies$SpyFunc0<R> {
  (): R;
}

declare interface ChaiSpies$SpyFunc1<A1, R> {
  (a: A1): R;
}

declare interface ChaiSpies$SpyFunc2<A1, A2, R> {
  (a: A1, b: A2): R;
}

declare interface ChaiSpies$SpyFunc3<A1, A2, A3, R> {
  (a: A1, b: A2, c: A3): R;
}

declare interface ChaiSpies$SpyFunc4<A1, A2, A3, A4, R> {
  (a: A1, b: A2, c: A3, d: A4): R;
}

declare interface ChaiSpies$SpyFunc5<A1, A2, A3, A4, A5, R> {
  (a: A1, b: A2, c: A3, d: A4, e: A5): R;
}

declare interface ChaiSpies$SpyFunc6<A1, A2, A3, A4, A5, A6, R> {
  (a: A1, b: A2, c: A3, d: A4, e: A5, f: A6): R;
}

declare interface ChaiSpies$SpyFunc7<A1, A2, A3, A4, A5, A6, A7, R> {
  (a: A1, b: A2, c: A3, d: A4, e: A5, f: A6, g: A7): R;
}

declare interface ChaiSpies$SpyFunc8<A1, A2, A3, A4, A5, A6, A7, A8, R> {
  (a: A1, b: A2, c: A3, d: A4, e: A5, f: A6, g: A7, h: A8): R;
}

declare interface ChaiSpies$SpyFunc9<A1, A2, A3, A4, A5, A6, A7, A8, A9, R> {
  (a: A1, b: A2, c: A3, d: A4, e: A5, f: A6, g: A7, h: A8, i: A9): R;
}

declare interface ChaiSpies$SpyFunc10<
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  R
> {
  (a: A1, b: A2, c: A3, d: A4, e: A5, f: A6, g: A7, h: A8, i: A9, j: A10): R;
}

declare type ChaiSpies$SpyFunc0Proxy<R> = {} & ChaiSpies$SpyFunc0<R> &
  ChaiSpies$Resetable;

declare type ChaiSpies$SpyFunc1Proxy<A1, R> = {} & ChaiSpies$SpyFunc1<A1, R> &
  ChaiSpies$Resetable;

declare type ChaiSpies$SpyFunc2Proxy<A1, A2, R> = {} & ChaiSpies$SpyFunc2<
  A1,
  A2,
  R
> &
  ChaiSpies$Resetable;

declare type ChaiSpies$SpyFunc3Proxy<A1, A2, A3, R> = {} & ChaiSpies$SpyFunc3<
  A1,
  A2,
  A3,
  R
> &
  ChaiSpies$Resetable;

declare type ChaiSpies$SpyFunc4Proxy<
  A1,
  A2,
  A3,
  A4,
  R
> = {} & ChaiSpies$SpyFunc4<A1, A2, A3, A4, R> & ChaiSpies$Resetable;

declare type ChaiSpies$SpyFunc5Proxy<
  A1,
  A2,
  A3,
  A4,
  A5,
  R
> = {} & ChaiSpies$SpyFunc5<A1, A2, A3, A4, A5, R> & ChaiSpies$Resetable;

declare type ChaiSpies$SpyFunc6Proxy<
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  R
> = {} & ChaiSpies$SpyFunc6<A1, A2, A3, A4, A5, A6, R> & ChaiSpies$Resetable;

declare type ChaiSpies$SpyFunc7Proxy<
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  R
> = {} & ChaiSpies$SpyFunc7<A1, A2, A3, A4, A5, A6, A7, R> &
  ChaiSpies$Resetable;

declare type ChaiSpies$SpyFunc8Proxy<
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  R
> = {} & ChaiSpies$SpyFunc8<A1, A2, A3, A4, A5, A6, A7, A8, R> &
  ChaiSpies$Resetable;

declare type ChaiSpies$SpyFunc9Proxy<
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  R
> = {} & ChaiSpies$SpyFunc9<A1, A2, A3, A4, A5, A6, A7, A8, A9, R> &
  ChaiSpies$Resetable;

declare type ChaiSpies$SpyFunc10Proxy<
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  R
> = {} & ChaiSpies$SpyFunc10<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R> &
  ChaiSpies$Resetable;
declare var spies: ChaiSpies$ChaiSpies$Spy;
declare module "chai-spies" {
  declare module.exports: typeof spies;
}
