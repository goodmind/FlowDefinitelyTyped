declare module "jshamcrest" {
  declare var npm$namespace$JsHamcrest: {
    isMatcher: typeof JsHamcrest$isMatcher,
    EqualTo: typeof JsHamcrest$EqualTo,
    version: typeof JsHamcrest$version,

    Description: typeof JsHamcrest$Description,
    SimpleMatcher: typeof JsHamcrest$SimpleMatcher,
    CombinableMatcher: typeof JsHamcrest$CombinableMatcher,
    BetweenBuilder: typeof JsHamcrest$BetweenBuilder,
    Operators: typeof npm$namespace$JsHamcrest$Operators,
    Matchers: typeof npm$namespace$JsHamcrest$Matchers,
    Integration: typeof npm$namespace$JsHamcrest$Integration
  };

  /**
   * Library version.
   */
  declare export var JsHamcrest$version: string;

  /**
   * Defines the method for describing the object to a description.
   */
  declare interface JsHamcrest$DescribeTo {
    (description: JsHamcrest$Description): void;
  }

  /**
   * Defines the method for describing a value to a description.
   */
  declare interface JsHamcrest$DescribeValueTo {
    (value: any, description: JsHamcrest$Description): void;
  }

  /**
   * Defines a method for describing the object implementing this interface to a description.
   *
   * TODO Remove? Not actually declared by JsHamcrest, but useful for type-checking in Description methods
   */
  declare export interface JsHamcrest$SelfDescribing {
    describeTo: JsHamcrest$DescribeTo;
  }

  /**
   * Builder for a textual description.
   */
  declare export class JsHamcrest$Description {
    /**
     * Appends text to this description.
     * @param text Text to append to this description
     * @return {JsHamcrest$Description} Itself for method chaining
     */
    append(text: any): JsHamcrest$Description;

    /**
     * Appends the description of a self describing object to this description.
     * @param selfDescribingObject Any object that has a describeTo() function that accepts a JsHamcrest.Description object as argument
     * @return {JsHamcrest$Description} Itself for method chaining
     */
    appendDescriptionOf(
      selfDescribingObject: JsHamcrest$SelfDescribing
    ): JsHamcrest$Description;

    /**
     * Appends the description of several self describing objects to this description.
     * @param start Start string
     * @param separator Separator string
     * @param end End string
     * @param list Array of self describing objects. These objects must have a describeTo() function that accepts a JsHamcrest.Description object as argument
     * @return {JsHamcrest$Description} Itself for method chaining
     */
    appendList(
      start: string,
      separator: string,
      end: string,
      list: any[]
    ): JsHamcrest$Description;

    /**
     * Appends a JavaScript language’s literal to this description.
     * @param literal Literal to append to this description
     * @return {JsHamcrest$Description} Itself for method chaining
     */
    appendLiteral(literal: any): JsHamcrest$Description;

    /**
     * Appends an array of values to this description.
     * @param start Start string
     * @param separator Separator string
     * @param end End string
     * @param list Array of values to be described to this description
     * @return {JsHamcrest$Description} Itself for method chaining
     */
    appendValueList(
      start: string,
      separator: string,
      end: string,
      list: JsHamcrest$SelfDescribing[]
    ): JsHamcrest$Description;

    /**
     * Gets the current content of this description.
     * @return {string} Current content of this description
     */
    get(): string;
  }

  /**
   * Defines the method for testing the matcher against an actual value.
   */
  declare interface JsHamcrest$Matches {
    (value: any): boolean;
  }

  /**
   * Defines the minimal interface for every matcher.
   *
   * FIXME Remove since isMatcher tests for SimpleMatcher :(
   */
  declare export type JsHamcrest$Matcher = {
    matches: JsHamcrest$Matches,
    describeValueTo: JsHamcrest$DescribeValueTo
  } & SelfDescribing;

  /**
   * Defines the configurable methods for declaring a new matcher using JsHamcrest.SimpleMatcher.
   */
  declare interface JsHamcrest$MatcherConfig {
    matches: JsHamcrest$Matches;
    describeTo: JsHamcrest$DescribeTo;
    describeValueTo?: JsHamcrest$DescribeValueTo;
  }

  /**
   * Defines a matcher that relies on the external functions provided by the caller in order to shape the current matching logic.
   */
  declare export class JsHamcrest$SimpleMatcher mixins Matcher {
    Matchers$matches: JsHamcrest$Matches;
    describeTo: JsHamcrest$DescribeTo;
    describeValueTo: JsHamcrest$DescribeValueTo;
    constructor(config: JsHamcrest$MatcherConfig): this;
  }

  /**
   * Defines a composite matcher, that is, a matcher that wraps several matchers into one.
   */
  declare export class JsHamcrest$CombinableMatcher mixins SimpleMatcher {
    /**
     * Wraps this matcher and the given matcher using JsHamcrest.Matchers.allOf().
     * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
     * @return {JsHamcrest$CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
     */
    and(matcherOrValue: any): JsHamcrest$CombinableMatcher;

    /**
     * Wraps this matcher and the given matcher using JsHamcrest.Matchers.anyOf().
     * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
     * @return {JsHamcrest$CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
     */
    or(matcherOrValue: any): JsHamcrest$CombinableMatcher;
  }

  /**
   * Checks if the given object is a matcher or not.
   * @param obj Object to check
   * @return {boolean} True if the given object is a matcher; false otherwise
   */
  declare export function JsHamcrest$isMatcher(obj: any): boolean;

  /**
   * Delegate function, useful when used to create a matcher that has a value-equalTo semantic.
   * @param factory Creates a new matcher that delegates to the passed/wrapped matcherOrValue
   * @return {"NO PRINT IMPLEMENTED: JSDocFunctionType"} Wraps the value with equalTo before passing to factory
   */
  declare export function JsHamcrest$EqualTo(
    factory: (matcher: JsHamcrest$Matcher) => JsHamcrest$Matcher
  ): (matcherOrValue: any) => JsHamcrest$Matcher;

  declare var npm$namespace$JsHamcrest$Operators: {
    assert: typeof JsHamcrest$Operators$assert,
    filter: typeof JsHamcrest$Operators$filter,
    callTo: typeof JsHamcrest$Operators$callTo
  };

  /**
   * Defines the options accepted by assert().
   */
  declare interface JsHamcrest$Operators$AssertOptions {
    message?: any;
    pass?: (description: string) => void;
    fail?: (description: string) => void;
  }

  /**
   * Fails if the actual value does not match the matcher.
   * @param actual Value to test against the matcher
   * @param matcherOrValue Applied to the value; wrapped with equalTo() if not a matcher
   * @param options Provides message and pass/fail handlers
   * @return {JsHamcrest$Description} Contains the message, actual value, matcher, and result
   */
  declare export function JsHamcrest$Operators$assert(
    actual: any,
    matcherOrValue?: any,
    options?: JsHamcrest$Operators$AssertOptions
  ): JsHamcrest$Description;

  /**
   * Returns those items of the array for which matcher matches.
   * @param array The values to filter
   * @param matcherOrValue Applied to each value
   * @return {Array<"NO PRINT IMPLEMENTED: JSDocAllType">} Contains all values from array matched by the matcher in the original order
   */
  declare export function JsHamcrest$Operators$filter(
    array: any[],
    matcherOrValue: any
  ): any[];

  /**
   * Delegate function, useful when used along with raises() and raisesAnything().
   * @param func Function to delegate to
   * @param args Passed to func
   * @return {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A function that calls func with args and returns its result
   */
  declare export function JsHamcrest$Operators$callTo(
    func: (...args: any[]) => any,
    ...args: any[]
  ): () => any;

  declare var npm$namespace$JsHamcrest$Matchers: {
    empty: typeof JsHamcrest$Matchers$empty,
    everyItem: typeof JsHamcrest$Matchers$everyItem,
    hasItem: typeof JsHamcrest$Matchers$hasItem,
    hasItems: typeof JsHamcrest$Matchers$hasItems,
    hasSize: typeof JsHamcrest$Matchers$hasSize,
    isIn: typeof JsHamcrest$Matchers$isIn,
    oneOf: typeof JsHamcrest$Matchers$oneOf,
    allOf: typeof JsHamcrest$Matchers$allOf,
    anyOf: typeof JsHamcrest$Matchers$anyOf,
    anything: typeof JsHamcrest$Matchers$anything,
    both: typeof JsHamcrest$Matchers$both,
    either: typeof JsHamcrest$Matchers$either,
    equalTo: typeof JsHamcrest$Matchers$equalTo,
    is: typeof JsHamcrest$Matchers$is,
    nil: typeof JsHamcrest$Matchers$nil,
    not: typeof JsHamcrest$Matchers$not,
    raises: typeof JsHamcrest$Matchers$raises,
    raisesAnything: typeof JsHamcrest$Matchers$raisesAnything,
    sameAs: typeof JsHamcrest$Matchers$sameAs,
    truth: typeof JsHamcrest$Matchers$truth,
    between: typeof JsHamcrest$Matchers$between,
    closeTo: typeof JsHamcrest$Matchers$closeTo,
    divisibleBy: typeof JsHamcrest$Matchers$divisibleBy,
    even: typeof JsHamcrest$Matchers$even,
    greaterThan: typeof JsHamcrest$Matchers$greaterThan,
    greaterThanOrEqualTo: typeof JsHamcrest$Matchers$greaterThanOrEqualTo,
    lessThan: typeof JsHamcrest$Matchers$lessThan,
    lessThanOrEqualTo: typeof JsHamcrest$Matchers$lessThanOrEqualTo,
    notANumber: typeof JsHamcrest$Matchers$notANumber,
    odd: typeof JsHamcrest$Matchers$odd,
    zero: typeof JsHamcrest$Matchers$zero,
    bool: typeof JsHamcrest$Matchers$bool,
    func: typeof JsHamcrest$Matchers$func,
    hasFunction: typeof JsHamcrest$Matchers$hasFunction,
    hasMember: typeof JsHamcrest$Matchers$hasMember,
    instanceOf: typeof JsHamcrest$Matchers$instanceOf,
    number: typeof JsHamcrest$Matchers$number,
    object: typeof JsHamcrest$Matchers$object,
    string: typeof JsHamcrest$Matchers$string,
    typeOf: typeof JsHamcrest$Matchers$typeOf,
    containsString: typeof JsHamcrest$Matchers$containsString,
    emailAddress: typeof JsHamcrest$Matchers$emailAddress,
    endsWith: typeof JsHamcrest$Matchers$endsWith,
    equalIgnoringCase: typeof JsHamcrest$Matchers$equalIgnoringCase,
    matches: typeof JsHamcrest$Matchers$matches,
    startsWith: typeof JsHamcrest$Matchers$startsWith
  };

  /**
   * The length of the actual value must be zero.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$empty(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value should be an array and matcherOrValue must match all items.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$everyItem(
    matcherOrValue: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual value should be an array and it must contain at least one value that matches matcherOrValue.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$hasItem(
    matcherOrValue: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual value should be an array and matchersOrValues must match at least one item.
   * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$hasItems(
    ...matchersOrValues: any[]
  ): JsHamcrest$SimpleMatcher;

  /**
   * The length of the actual value must match matcherOrValue.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$hasSize(
    matcherOrValue: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The given array or arguments must contain the actual value.
   * @param items Array or list of values
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$isIn(
    ...items: any[]
  ): JsHamcrest$SimpleMatcher;

  /**
   * Alias to isIn() function.
   * @param items Array or list of values
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$oneOf(
    ...items: any[]
  ): JsHamcrest$SimpleMatcher;

  /**
   * All matchesOrValues must match the actual value. This matcher behaves pretty much like the JavaScript && (and) operator.
   * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$allOf(
    ...matchersOrValues: any[]
  ): JsHamcrest$SimpleMatcher;

  /**
   * At least one of the matchersOrValues should match the actual value. This matcher behaves pretty much like the JavaScript || (or) operator.
   * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$anyOf(
    ...matchersOrValues: any[]
  ): JsHamcrest$SimpleMatcher;

  /**
   * Useless always-match matcher.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$anything(): JsHamcrest$SimpleMatcher;

  /**
   * Combinable matcher where the actual value must match all the given matchers or values.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
   */
  declare export function JsHamcrest$Matchers$both(
    matcherOrValue: any
  ): JsHamcrest$CombinableMatcher;

  /**
   * Combinable matcher where the actual value must match at least one of the given matchers or values.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
   */
  declare export function JsHamcrest$Matchers$either(
    matcherOrValue: any
  ): JsHamcrest$CombinableMatcher;

  /**
   * The actual value must be equal to expected.
   * @param expected Expected value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$equalTo(
    expected: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * Delegate-only matcher frequently used to improve readability.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$is(
    matcherOrValue: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be null or undefined.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$nil(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must not match matcherOrValue.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$not(
    matcherOrValue: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual value is a function and, when invoked, it should throw an exception with the given name.
   * @param exceptionName Name of the expected exception
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$raises(
    exceptionName: string
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual value is a function and, when invoked, it should raise any exception.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$raisesAnything(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be the same as expected.
   * @param expected Expected value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$sameAs(
    expected: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * Matches any truthy value (not undefined, null, false, 0, NaN, or "").
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$truth(): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be between the given range (inclusive).
   * @param start Range start
   * @return {JsHamcrest$BetweenBuilder} Builder object with an and(end) method, which returns a JsHamcrest.SimpleMatcher instance and thus should be called to finish the matcher creation
   */
  declare export function JsHamcrest$Matchers$between(
    start: any
  ): JsHamcrest$BetweenBuilder;

  /**
   * The actual number must be close enough to expected, that is, the actual number is equal to a value within some range of acceptable error.
   * @param expected Expected number
   * @param delta Expected difference delta
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$closeTo(
    expected: number,
    delta?: number
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be divisible by divisor.
   * @param divisor Divisor
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$divisibleBy(
    divisor: number
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be even.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$even(): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be greater than expected.
   * @param expected Expected number
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$greaterThan(
    expected: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be greater than or equal to expected.
   * @param expected Expected number
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$greaterThanOrEqualTo(
    expected: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be less than expected.
   * @param expected Expected number
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$lessThan(
    expected: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be less than or equal to expected.
   * @param expected Expected number
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$lessThanOrEqualTo(
    expected: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must not be a number.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$notANumber(): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be odd.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$odd(): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be zero.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$zero(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be a boolean.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$bool(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be a function.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$func(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value has a function with the given name.
   * @param functionName Function name
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$hasFunction(
    functionName: string
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual value has an attribute with the given name.
   * @param memberName Member name
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$hasMember(
    memberName: string,
    matcherOrValue?: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be an instance of clazz.
   * @param clazz Constructor function
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$instanceOf(
    clazz: () => any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be a number.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$number(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be an object.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$object(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be a string.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$string(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be of the given type.
   * @param typeName Name of the type
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$typeOf(
    typeName: string
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must have a substring equals to str.
   * @param str Substring
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$containsString(
    str: string
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must look like an e-mail address.
   *
   * Warning: This matcher is not fully compliant with RFC2822 due to its complexity.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$emailAddress(): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must end with str.
   * @param str Substring
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$endsWith(
    str: string
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must be equal to str, ignoring case.
   * @param str String
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$equalIgnoringCase(
    str: string
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must match regex.
   * @param regex String
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$matches(
    regex: RegExp
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must start with str.
   * @param str Substring
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare export function JsHamcrest$Matchers$startsWith(
    str: string
  ): JsHamcrest$SimpleMatcher;

  declare var npm$namespace$JsHamcrest$Integration: {
    copyMembers: typeof JsHamcrest$Integration$copyMembers,
    installMatchers: typeof JsHamcrest$Integration$installMatchers,
    installOperators: typeof JsHamcrest$Integration$installOperators,
    WebBrowser: typeof JsHamcrest$Integration$WebBrowser,
    Rhino: typeof JsHamcrest$Integration$Rhino,
    JsTestDriver: typeof JsHamcrest$Integration$JsTestDriver,
    Nodeunit: typeof JsHamcrest$Integration$Nodeunit,
    JsUnitTest: typeof JsHamcrest$Integration$JsUnitTest,
    YUITest: typeof JsHamcrest$Integration$YUITest,
    QUnit: typeof JsHamcrest$Integration$QUnit,
    jsUnity: typeof JsHamcrest$Integration$jsUnity,
    screwunit: typeof JsHamcrest$Integration$screwunit,
    jasmine: typeof JsHamcrest$Integration$jasmine
  };

  /**
   * Copies all members of the Matchers and Operators modules to target.
   *
   * Does not overwrite properties with the same name.
   * @param target
   */
  declare export function JsHamcrest$Integration$copyMembers(target: {}): void;

  /**
   * Copies all members of source to target.
   *
   * Does not overwrite properties with the same name.
   * @param source
   * @param target
   */
  declare export function JsHamcrest$Integration$copyMembers(
    source: {},
    target: {}
  ): void;

  /**
   * Adds the members of the given object to JsHamcrest.Matchers namespace.
   * @param source
   */
  declare export function JsHamcrest$Integration$installMatchers(source: {}): void;

  /**
   * Adds the members of the given object to JsHamcrest.Operators namespace.
   * @param source
   */
  declare export function JsHamcrest$Integration$installOperators(source: {}): void;

  /**
   * Uses the web browser's alert() function to display the assertion results.
   * Great for quick prototyping.
   */
  declare export function JsHamcrest$Integration$WebBrowser(): void;

  /**
   * Uses Rhino's print() function to display the assertion results.
   * Great for quick prototyping.
   */
  declare export function JsHamcrest$Integration$Rhino(): void;

  /**
   * JsTestDriver integration.
   * @param params Omit to copy members to global scope
   */
  declare export function JsHamcrest$Integration$JsTestDriver(params?: {
    scope?: {}
  }): void;

  /**
   * NodeUnit (Node.js Unit Testing) integration.
   * @param params Omit to copy members to "global"
   */
  declare export function JsHamcrest$Integration$Nodeunit(params?: {
    scope?: {}
  }): void;

  /**
   * JsUnitTest integration.
   * @param params Omit to copy members to "JsUnitTest.Unit.Testcase.prototype"
   */
  declare export function JsHamcrest$Integration$JsUnitTest(params?: {
    scope?: {}
  }): void;

  /**
   * YUITest (Yahoo UI) integration.
   * @param params Omit to copy members to global scope
   */
  declare export function JsHamcrest$Integration$YUITest(params?: {
    scope?: {}
  }): void;

  /**
   * QUnit (JQuery) integration.
   * @param params Omit to copy members to global scope
   */
  declare export function JsHamcrest$Integration$QUnit(params?: {
    scope?: {}
  }): void;

  /**
   * jsUnity integration.
   * @param params Omit to copy members to "jsUnity.env.defaultScope"
   */
  declare export function JsHamcrest$Integration$jsUnity(params?: {
    scope?: {},
    attachAssertions?: boolean
  }): void;

  /**
   * Screw.Unit integration.
   * @param params Omit to copy members to "Screw.Matchers"
   */
  declare export function JsHamcrest$Integration$screwunit(params?: {
    scope?: {}
  }): void;

  /**
   * Jasmine integration.
   * @param params Omit to copy members to global scope
   */
  declare export function JsHamcrest$Integration$jasmine(params?: {
    scope?: {}
  }): void;

  /**
   * Used by the between() matcher to specify the ending value.
   */
  declare export class JsHamcrest$BetweenBuilder {
    and(end: any): JsHamcrest$SimpleMatcher;
  }

  /**
   * Fails if the actual value does not match the matcher.
   * @param actual Value to test against the matcher
   * @param matcher Applied to the value
   * @param message Prepends the built description
   * @return {JsHamcrest$Description} Contains the message, actual value, matcher, and result
   */
  declare function assertThat(
    actual: any,
    matcher?: JsHamcrest$Matcher,
    message?: any
  ): JsHamcrest$Description;

  /**
   * The length of the actual value must be zero.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function empty(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value should be an array and matcherOrValue must match all items.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function everyItem(matcherOrValue: any): JsHamcrest$SimpleMatcher;

  /**
   * The actual value should be an array and it must contain at least one value that matches matcherOrValue.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function hasItem(matcherOrValue: any): JsHamcrest$SimpleMatcher;

  /**
   * The actual value should be an array and matchersOrValues must match at least one item.
   * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function hasItems(
    ...matchersOrValues: any[]
  ): JsHamcrest$SimpleMatcher;

  /**
   * The length of the actual value must match matcherOrValue.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function hasSize(matcherOrValue: any): JsHamcrest$SimpleMatcher;

  /**
   * The given array or arguments must contain the actual value.
   * @param items Array or list of values
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function isIn(...items: any[]): JsHamcrest$SimpleMatcher;

  /**
   * Alias to isIn() function.
   * @param items Array or list of values
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function oneOf(...items: any[]): JsHamcrest$SimpleMatcher;

  /**
   * All matchesOrValues must match the actual value. This matcher behaves pretty much like the JavaScript && (and) operator.
   * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function allOf(...matchersOrValues: any[]): JsHamcrest$SimpleMatcher;

  /**
   * At least one of the matchersOrValues should match the actual value. This matcher behaves pretty much like the JavaScript || (or) operator.
   * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function anyOf(...matchersOrValues: any[]): JsHamcrest$SimpleMatcher;

  /**
   * Useless always-match matcher.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function anything(): JsHamcrest$SimpleMatcher;

  /**
   * Combinable matcher where the actual value must match all the given matchers or values.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
   */
  declare function both(matcherOrValue: any): JsHamcrest$CombinableMatcher;

  /**
   * Combinable matcher where the actual value must match at least one of the given matchers or values.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
   */
  declare function either(matcherOrValue: any): JsHamcrest$CombinableMatcher;

  /**
   * The actual value must be equal to expected.
   * @param expected Expected value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function equalTo(expected: any): JsHamcrest$SimpleMatcher;

  /**
   * Delegate-only matcher frequently used to improve readability.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function is(matcherOrValue: any): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be null or undefined.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function nil(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must not match matcherOrValue.
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function not(matcherOrValue: any): JsHamcrest$SimpleMatcher;

  /**
   * The actual value is a function and, when invoked, it should throw an exception with the given name.
   * @param exceptionName Name of the expected exception
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function raises(exceptionName: string): JsHamcrest$SimpleMatcher;

  /**
   * The actual value is a function and, when invoked, it should raise any exception.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function raisesAnything(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be the same as expected.
   * @param expected Expected value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function sameAs(expected: any): JsHamcrest$SimpleMatcher;

  /**
   * Matches any truthy value (not undefined, null, false, 0, NaN, or "").
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function truth(): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be between the given range (inclusive).
   * @param start Range start
   * @return {JsHamcrest$BetweenBuilder} Builder object with an and(end) method, which returns a JsHamcrest.SimpleMatcher instance and thus should be called to finish the matcher creation
   */
  declare function between(start: any): JsHamcrest$BetweenBuilder;

  /**
   * The actual number must be close enough to expected, that is, the actual number is equal to a value within some range of acceptable error.
   * @param expected Expected number
   * @param delta Expected difference delta
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function closeTo(
    expected: number,
    delta?: number
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be divisible by divisor.
   * @param divisor Divisor
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function divisibleBy(divisor: number): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be even.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function even(): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be greater than expected.
   * @param expected Expected number
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function greaterThan(expected: any): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be greater than or equal to expected.
   * @param expected Expected number
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function greaterThanOrEqualTo(
    expected: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be less than expected.
   * @param expected Expected number
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function lessThan(expected: any): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be less than or equal to expected.
   * @param expected Expected number
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function lessThanOrEqualTo(expected: any): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must not be a number.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function notANumber(): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be odd.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function odd(): JsHamcrest$SimpleMatcher;

  /**
   * The actual number must be zero.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function zero(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be a boolean.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function bool(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be a function.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function func(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value has a function with the given name.
   * @param functionName Function name
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function hasFunction(functionName: string): JsHamcrest$SimpleMatcher;

  /**
   * The actual value has an attribute with the given name.
   * @param memberName Member name
   * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function hasMember(
    memberName: string,
    matcherOrValue?: any
  ): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be an instance of clazz.
   * @param clazz Constructor function
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function instanceOf(clazz: () => any): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be a number.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function number(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be an object.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function object(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be a string.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function string(): JsHamcrest$SimpleMatcher;

  /**
   * The actual value must be of the given type.
   * @param typeName Name of the type
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function typeOf(typeName: string): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must have a substring equals to str.
   * @param str Substring
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function containsString(str: string): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must look like an e-mail address.
   *
   * Warning: This matcher is not fully compliant with RFC2822 due to its complexity.
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function emailAddress(): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must end with str.
   * @param str Substring
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function endsWith(str: string): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must be equal to str, ignoring case.
   * @param str String
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function equalIgnoringCase(str: string): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must match regex.
   * @param regex String
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function matches(regex: RegExp): JsHamcrest$SimpleMatcher;

  /**
   * The actual string must start with str.
   * @param str Substring
   * @return {JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
   */
  declare function startsWith(str: string): JsHamcrest$SimpleMatcher;
}
