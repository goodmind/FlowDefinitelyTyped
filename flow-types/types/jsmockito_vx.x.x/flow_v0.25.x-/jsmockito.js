declare module "jsmockito" {
  declare var npm$namespace$JsMockito: {
    isMock: typeof JsMockito$isMock,
    when: typeof JsMockito$when,
    verify: typeof JsMockito$verify,
    verifyZeroInteractions: typeof JsMockito$verifyZeroInteractions,
    verifyNoMoreInteractions: typeof JsMockito$verifyNoMoreInteractions,
    spy: typeof JsMockito$spy,
    mockFunction: typeof JsMockito$mockFunction,
    mock: typeof JsMockito$mock,
    version: typeof JsMockito$version,

    JsMockitoStubBuilder: typeof JsMockito$JsMockitoStubBuilder,
    Verifiers: typeof npm$namespace$JsMockito$Verifiers,
    Integration: typeof npm$namespace$JsMockito$Integration
  };

  /**
   * Library version.
   */
  declare export var JsMockito$version: string;

  /**
   * Builder for a textual description.
   */
  declare export class JsMockito$JsMockitoStubBuilder {
    /**
     * Provide functions to be run in place of the mocked method.
     * @param func Functions to be run in order of execution.
     * @return {JsMockito$JsMockitoStubBuilder} Itself for method chaining
     */
    then(...func: ((obj: any) => any)[]): JsMockito$JsMockitoStubBuilder;

    /**
     * Provide values to be returned by the mocked function.
     * @param obj Values to be returned in order of execution.
     * @return {JsMockito$JsMockitoStubBuilder} Itself for method chaining
     */
    thenReturn(...obj: any[]): JsMockito$JsMockitoStubBuilder;

    /**
     * Provide exceptions to be thrown by the mocked function.
     * @param obj Exceptions to be thrown in order of execution.
     * @return {JsMockito$JsMockitoStubBuilder} Itself for method chaining
     */
    thenThrow(...obj: Error[]): JsMockito$JsMockitoStubBuilder;
  }

  /**
   * Used to verify how many times a function of method is called.
   */
  declare export interface JsMockito$Verifier {}

  /**
   * Test if a given variable is a mock
   * @param maybeMock An object
   * @return {boolean} true if the variable is a mock
   */
  declare export function JsMockito$isMock(maybeMock: any): boolean;

  /**
   * Add a stub for a mock object method or mock function
   * @param mock A mock object or mock anonymous function
   * @return {T} A stub builder on which the method or function to be stubbed can be invoked
   */
  declare export function JsMockito$when<T>(mock: T): T;

  /**
   * Verify that a mock object method or mock function was invoked
   * @param mock A mock object or mock anonymous function
   * @param verifier Optional JsMockito.Verifier instance (default: JsMockito.Verifiers.once())
   * @return {T} A verifier on which the method or function to be verified can be invoked
   */
  declare export function JsMockito$verify<T>(mock: T): T;

  declare export function JsMockito$verify<T>(
    mock: T,
    verifier: JsMockito$Verifier
  ): T;

  /**
   * Verify that no mock object methods or the mock function were ever invoked
   * @param mock A mock object or mock anonymous function (multiple accepted)
   */
  declare export function JsMockito$verifyZeroInteractions(
    ...mock: any[]
  ): void;

  /**
   * Verify that no mock object method or mock function invocations remain
   * unverified
   * @param mock A mock object or mock anonymous function (multiple accepted)
   */
  declare export function JsMockito$verifyNoMoreInteractions(
    ...mock: any[]
  ): void;

  /**
   * Create a mock that proxies a real function or object.  All un-stubbed
   * invocations will be passed through to the real implementation, but can
   * still be verified.
   * @param delegate A 'real' (concrete) object or function that the mock will delegate unstubbed invocations to
   * @return {T} A mock object (as per mock) or mock function (as per mockFunction)
   */
  declare export function JsMockito$spy<T>(delegate: T): T;

  /**
   * Create a mockable and stubbable anonymous function.
   *
   * <p>Once created, the function can be invoked and will return undefined for
   * any interactions that do not match stub declarations.</p>
   *
   * <pre>
   * var mockFunc = JsMockito.mockFunction();
   * JsMockito.when(mockFunc).call(anything(), 1, 5).thenReturn(6);
   * mockFunc(1, 5); // result is 6
   * JsMockito.verify(mockFunc)(1, greaterThan(2));
   * </pre>
   * @param funcName The name of the mock function to use in messages (defaults to 'func')
   * @param delegate The function to delegate unstubbed calls to (optional)
   * @return {T} an anonymous function
   */
  declare export function JsMockito$mockFunction(): Function;

  declare export function JsMockito$mockFunction(funcName: string): Function;

  declare export function JsMockito$mockFunction(
    funcName: string,
    delegate: Function
  ): Function;

  /**
   * Create a mockable and stubbable objects.
   *
   * <p>A mock is created with the constructor for an object as an argument.
   * Once created, the mock object will have all the same methods as the source
   * object which, when invoked, will return undefined by default.</p>
   *
   * <p>Stub declarations may then be made for these methods to have them return
   * useful values or perform actions when invoked.</p>
   *
   * <pre>
   * MyObject = function() {
   *    this.add = function(a, b) { return a + b }
   * };
   *
   * var mockObj = JsMockito.mock(MyObject);
   * mockObj.add(5, 4); // result is undefined
   *
   * JsMockito.when(mockFunc).add(1, 2).thenReturn(6);
   * mockObj.add(1, 2); // result is 6
   *
   * JsMockito.verify(mockObj).add(1, greaterThan(2)); // ok
   * JsMockito.verify(mockObj).add(1, equalTo(2)); // ok
   * JsMockito.verify(mockObj).add(1, 4); // will throw an exception
   * </pre>
   * @param {function} Obj the constructor for the object to be mocked
   * @return {{[key: string]: any}} a mock object
   */
  declare export function JsMockito$mock<T>(Obj: {
    new(): T
  }): T;

  declare var npm$namespace$JsMockito$Verifiers: {
    never: typeof JsMockito$Verifiers$never,
    zeroInteractions: typeof JsMockito$Verifiers$zeroInteractions,
    noMoreInteractions: typeof JsMockito$Verifiers$noMoreInteractions,
    times: typeof JsMockito$Verifiers$times,
    once: typeof JsMockito$Verifiers$once
  };

  /**
   * Test that a invocation never occurred. For example:
   * <pre>
   * verify(mock, never()).method();
   * </pre>
   * @see JsMockito.Verifiers.times(0)
   */
  declare export function JsMockito$Verifiers$never(): JsMockito$Verifier;

  /**
   * Test that no interaction were made on the mock.  For example:
   * <pre>
   * verify(mock, zeroInteractions());
   * </pre>
   * @see JsMockito.verifyZeroInteractions()
   */
  declare export function JsMockito$Verifiers$zeroInteractions(): JsMockito$Verifier;

  /**
   * Test that no further interactions remain unverified on the mock.  For
   * example:
   * <pre>
   * verify(mock, noMoreInteractions());
   * </pre>
   * @see JsMockito.verifyNoMoreInteractions()
   */
  declare export function JsMockito$Verifiers$noMoreInteractions(): JsMockito$Verifier;

  /**
   * Test that an invocation occurred a specific number of times. For example:
   * <pre>
   * verify(mock, times(2)).method();
   * </pre>
   * @param wanted The number of desired invocations
   */
  declare export function JsMockito$Verifiers$times(
    wanted: number
  ): JsMockito$Verifier;

  /**
   * Test that an invocation occurred exactly once. For example:
   * <pre>
   * verify(mock, once()).method();
   * </pre>
   * This is the default verifier.
   * @see JsMockito.Verifiers.times(1)
   */
  declare export function JsMockito$Verifiers$once(): JsMockito$Verifier;

  declare var npm$namespace$JsMockito$Integration: {
    importTo: typeof JsMockito$Integration$importTo,
    screwunit: typeof JsMockito$Integration$screwunit,
    JsTestDriver: typeof JsMockito$Integration$JsTestDriver,
    JsUnitTest: typeof JsMockito$Integration$JsUnitTest,
    YUITest: typeof JsMockito$Integration$YUITest,
    QUnit: typeof JsMockito$Integration$QUnit,
    jsUnity: typeof JsMockito$Integration$jsUnity,
    jSpec: typeof JsMockito$Integration$jSpec
  };

  /**
   * Import the public JsMockito API into the specified object (namespace)
   * @param {{[key: string]: any}} target An object (namespace) that will be populated with
   * the functions from the public JsMockito API
   */
  declare export function JsMockito$Integration$importTo(target: any): void;

  /**
   * Make the public JsMockito API available in Screw.Unit
   * @see JsMockito.Integration.importTo(Screw.Matchers)
   */
  declare export function JsMockito$Integration$screwunit(): void;

  /**
   * Make the public JsMockito API available to JsTestDriver
   * @see JsMockito.Integration.importTo(window)
   */
  declare export function JsMockito$Integration$JsTestDriver(): void;

  /**
   * Make the public JsMockito API available to JsUnitTest
   * @see JsMockito.Integration.importTo(JsUnitTest.Unit.Testcase.prototype)
   */
  declare export function JsMockito$Integration$JsUnitTest(): void;

  /**
   * Make the public JsMockito API available to YUITest
   * @see JsMockito.Integration.importTo(window)
   */
  declare export function JsMockito$Integration$YUITest(): void;

  /**
   * Make the public JsMockito API available to QUnit
   * @see JsMockito.Integration.importTo(window)
   */
  declare export function JsMockito$Integration$QUnit(): void;

  /**
   * Make the public JsMockito API available to jsUnity
   * @see JsMockito.Integration.importTo(jsUnity.env.defaultScope)
   */
  declare export function JsMockito$Integration$jsUnity(): void;

  /**
   * Make the public JsMockito API available to jSpec
   * @see JsMockito.Integration.importTo(jSpec.defaultContext)
   */
  declare export function JsMockito$Integration$jSpec(): void;

  /**
   * Test if a given variable is a mock
   * @param maybeMock An object
   * @return {boolean} true if the variable is a mock
   */
  declare function isMock(maybeMock: any): boolean;

  /**
   * Add a stub for a mock object method or mock function
   * @param mock A mock object or mock anonymous function
   * @return {T} A stub builder on which the method or function to be stubbed can be invoked
   */
  declare function when<T>(mock: T): T;

  /**
   * Verify that a mock object method or mock function was invoked
   * @param mock A mock object or mock anonymous function
   * @param verifier Optional JsMockito.Verifier instance (default: JsMockito.Verifiers.once())
   * @return {T} A verifier on which the method or function to be verified can be invoked
   */
  declare function verify<T>(mock: T): T;

  declare function verify<T>(mock: T, verifier: JsMockito$Verifier): T;

  /**
   * Verify that no mock object methods or the mock function were ever invoked
   * @param mock A mock object or mock anonymous function (multiple accepted)
   */
  declare function verifyZeroInteractions(...mock: any[]): void;

  /**
   * Verify that no mock object method or mock function invocations remain
   * unverified
   * @param mock A mock object or mock anonymous function (multiple accepted)
   */
  declare function verifyNoMoreInteractions(...mock: any[]): void;

  /**
   * Create a mock that proxies a real function or object.  All un-stubbed
   * invocations will be passed through to the real implementation, but can
   * still be verified.
   * @param delegate A 'real' (concrete) object or function that the mock will delegate unstubbed invocations to
   * @return {T} A mock object (as per mock) or mock function (as per mockFunction)
   */
  declare function spy<T>(delegate: T): T;

  /**
   * Create a mockable and stubbable anonymous function.
   *
   * <p>Once created, the function can be invoked and will return undefined for
   * any interactions that do not match stub declarations.</p>
   *
   * <pre>
   * var mockFunc = JsMockito.mockFunction();
   * JsMockito.when(mockFunc).call(anything(), 1, 5).thenReturn(6);
   * mockFunc(1, 5); // result is 6
   * JsMockito.verify(mockFunc)(1, greaterThan(2));
   * </pre>
   * @param funcName The name of the mock function to use in messages (defaults to 'func')
   * @param delegate The function to delegate unstubbed calls to (optional)
   * @return {T} an anonymous function
   */
  declare function mockFunction(): Function;

  declare function mockFunction(funcName: string): Function;

  declare function mockFunction(funcName: string, delegate: Function): Function;

  /**
   * Create a mockable and stubbable objects.
   *
   * <p>A mock is created with the constructor for an object as an argument.
   * Once created, the mock object will have all the same methods as the source
   * object which, when invoked, will return undefined by default.</p>
   *
   * <p>Stub declarations may then be made for these methods to have them return
   * useful values or perform actions when invoked.</p>
   *
   * <pre>
   * MyObject = function() {
   *       this.add = function(a, b) { return a + b }
   *     };
   *
   * var mockObj = JsMockito.mock(MyObject);
   * mockObj.add(5, 4); // result is undefined
   *
   * JsMockito.when(mockFunc).add(1, 2).thenReturn(6);
   * mockObj.add(1, 2); // result is 6
   *
   * JsMockito.verify(mockObj).add(1, greaterThan(2)); // ok
   * JsMockito.verify(mockObj).add(1, equalTo(2)); // ok
   * JsMockito.verify(mockObj).add(1, 4); // will throw an exception
   * </pre>
   * @param {function} Obj the constructor for the object to be mocked
   * @return {{[key: string]: any}} a mock object
   */
  declare function mock<T>(Obj: {
    new(): T
  }): T;

  /**
   * Test that a invocation never occurred. For example:
   * <pre>
   * verify(mock, never()).method();
   * </pre>
   * @see JsMockito.Verifiers.times(0)
   */
  declare function never(): JsMockito$Verifier;

  /**
   * Test that no interaction were made on the mock.  For example:
   * <pre>
   * verify(mock, zeroInteractions());
   * </pre>
   * @see JsMockito.verifyZeroInteractions()
   */
  declare function zeroInteractions(): JsMockito$Verifier;

  /**
   * Test that no further interactions remain unverified on the mock.  For
   * example:
   * <pre>
   * verify(mock, noMoreInteractions());
   * </pre>
   * @see JsMockito.verifyNoMoreInteractions()
   */
  declare function noMoreInteractions(): JsMockito$Verifier;

  /**
   * Test that an invocation occurred a specific number of times. For example:
   * <pre>
   * verify(mock, times(2)).method();
   * </pre>
   * @param wanted The number of desired invocations
   */
  declare function times(wanted: number): JsMockito$Verifier;

  /**
   * Test that an invocation occurred exactly once. For example:
   * <pre>
   * verify(mock, once()).method();
   * </pre>
   * This is the default verifier.
   * @see JsMockito.Verifiers.times(1)
   */
  declare function once(): JsMockito$Verifier;
}
