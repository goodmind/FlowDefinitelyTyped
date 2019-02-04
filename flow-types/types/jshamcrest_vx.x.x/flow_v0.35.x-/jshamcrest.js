declare module 'jshamcrest' {
        
      declare var npm$namespace$JsHamcrest: {
        isMatcher: typeof JsHamcrest$isMatcher,
EqualTo: typeof JsHamcrest$EqualTo,
        version: typeof JsHamcrest$version,
      }

/**
 * Library version.
 */
declare export var JsHamcrest$version: string;


/**
 * Defines the method for describing the object to a description.
 */
declare interface JsHamcrest$DescribeTo {
(description: JsHamcrest$Description): void
} 


/**
 * Defines the method for describing a value to a description.
 */
declare interface JsHamcrest$DescribeValueTo {
(value: any, description: JsHamcrest$Description): void
} 


/**
 * Defines a method for describing the object implementing this interface to a description.
 * 
 * TODO Remove? Not actually declared by JsHamcrest, but useful for type-checking in Description methods
 */
declare export interface JsHamcrest$SelfDescribing {
describeTo: JsHamcrest$DescribeTo
} 


/**
 * Builder for a textual description.
 */
declare export class JsHamcrest$Description  {

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
appendDescriptionOf(selfDescribingObject: JsHamcrest$SelfDescribing): JsHamcrest$Description;

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
list: any[]): JsHamcrest$Description;

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
list: JsHamcrest$SelfDescribing[]): JsHamcrest$Description;

/**
 * Gets the current content of this description.
 * @return {string} Current content of this description
 */
get(): string
}


/**
 * Defines the method for testing the matcher against an actual value.
 */
declare interface JsHamcrest$Matches {
(value: any): boolean
} 


/**
 * Defines the minimal interface for every matcher.
 * 
 * FIXME Remove since isMatcher tests for SimpleMatcher :(
 */
declare export type JsHamcrest$Matcher = {
Matchers$matches: JsHamcrest$Matches,
describeValueTo: JsHamcrest$DescribeValueTo
} & JsHamcrest$SelfDescribing



/**
 * Defines the configurable methods for declaring a new matcher using JsHamcrest.SimpleMatcher.
 */
declare interface JsHamcrest$MatcherConfig {
Matchers$matches: JsHamcrest$Matches,
describeTo: JsHamcrest$DescribeTo,
describeValueTo?: JsHamcrest$DescribeValueTo
} 


/**
 * Defines a matcher that relies on the external functions provided by the caller in order to shape the current matching logic.
 */
declare export class JsHamcrest$SimpleMatcher mixins JsHamcrest$Matcher {
Matchers$matches: JsHamcrest$Matches;
describeTo: JsHamcrest$DescribeTo;
describeValueTo: JsHamcrest$DescribeValueTo;
constructor(config: JsHamcrest$MatcherConfig): this
}


/**
 * Defines a composite matcher, that is, a matcher that wraps several matchers into one.
 */
declare export class JsHamcrest$CombinableMatcher mixins JsHamcrest$SimpleMatcher {

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
or(matcherOrValue: any): JsHamcrest$CombinableMatcher
}


/**
 * Checks if the given object is a matcher or not.
 * @param obj Object to check
 * @return {boolean} True if the given object is a matcher; false otherwise
 */
declare export function JsHamcrest$isMatcher(obj: any): boolean



/**
 * Delegate function, useful when used to create a matcher that has a value-equalTo semantic.
 * @param factory Creates a new matcher that delegates to the passed/wrapped matcherOrValue
 * @return {"NO PRINT IMPLEMENTED: JSDocFunctionType"} Wraps the value with equalTo before passing to factory
 */
declare export function JsHamcrest$EqualTo(
factory: (matcher: JsHamcrest$Matcher) => JsHamcrest$Matcher): (matcherOrValue: any) => JsHamcrest$Matcher



      declare var npm$namespace$Operators: {
        assert: typeof Operators$assert,
filter: typeof Operators$filter,
callTo: typeof Operators$callTo,
        
      }

/**
 * Defines the options accepted by assert().
 */
declare interface Operators$AssertOptions {
message?: any,
pass?: (description: string) => void,
fail?: (description: string) => void
} 


/**
 * Fails if the actual value does not match the matcher.
 * @param actual Value to test against the matcher
 * @param matcherOrValue Applied to the value; wrapped with equalTo() if not a matcher
 * @param options Provides message and pass/fail handlers
 * @return {JsHamcrest$JsHamcrest$Description} Contains the message, actual value, matcher, and result
 */
declare export function Operators$assert(
actual: any,
matcherOrValue?: any,
options?: Operators$AssertOptions): JsHamcrest$JsHamcrest$Description



/**
 * Returns those items of the array for which matcher matches.
 * @param array The values to filter
 * @param matcherOrValue Applied to each value
 * @return {Array<"NO PRINT IMPLEMENTED: JSDocAllType">} Contains all values from array matched by the matcher in the original order
 */
declare export function Operators$filter(array: any[], matcherOrValue: any): any[]



/**
 * Delegate function, useful when used along with raises() and raisesAnything().
 * @param func Function to delegate to
 * @param args Passed to func
 * @return {"NO PRINT IMPLEMENTED: JSDocFunctionType"} A function that calls func with args and returns its result
 */
declare export function Operators$callTo(Matchers$func: (...args: any[]) => any, ...args: any[]): () => any



      declare var npm$namespace$Matchers: {
        empty: typeof Matchers$empty,
everyItem: typeof Matchers$everyItem,
hasItem: typeof Matchers$hasItem,
hasItems: typeof Matchers$hasItems,
hasSize: typeof Matchers$hasSize,
isIn: typeof Matchers$isIn,
oneOf: typeof Matchers$oneOf,
allOf: typeof Matchers$allOf,
anyOf: typeof Matchers$anyOf,
anything: typeof Matchers$anything,
both: typeof Matchers$both,
either: typeof Matchers$either,
equalTo: typeof Matchers$equalTo,
is: typeof Matchers$is,
nil: typeof Matchers$nil,
not: typeof Matchers$not,
raises: typeof Matchers$raises,
raisesAnything: typeof Matchers$raisesAnything,
sameAs: typeof Matchers$sameAs,
truth: typeof Matchers$truth,
between: typeof Matchers$between,
closeTo: typeof Matchers$closeTo,
divisibleBy: typeof Matchers$divisibleBy,
even: typeof Matchers$even,
greaterThan: typeof Matchers$greaterThan,
greaterThanOrEqualTo: typeof Matchers$greaterThanOrEqualTo,
lessThan: typeof Matchers$lessThan,
lessThanOrEqualTo: typeof Matchers$lessThanOrEqualTo,
notANumber: typeof Matchers$notANumber,
odd: typeof Matchers$odd,
zero: typeof Matchers$zero,
bool: typeof Matchers$bool,
func: typeof Matchers$func,
hasFunction: typeof Matchers$hasFunction,
hasMember: typeof Matchers$hasMember,
instanceOf: typeof Matchers$instanceOf,
number: typeof Matchers$number,
object: typeof Matchers$object,
string: typeof Matchers$string,
typeOf: typeof Matchers$typeOf,
containsString: typeof Matchers$containsString,
emailAddress: typeof Matchers$emailAddress,
endsWith: typeof Matchers$endsWith,
equalIgnoringCase: typeof Matchers$equalIgnoringCase,
matches: typeof Matchers$matches,
startsWith: typeof Matchers$startsWith,
        
      }

/**
 * The length of the actual value must be zero.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$empty(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value should be an array and matcherOrValue must match all items.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$everyItem(matcherOrValue: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value should be an array and it must contain at least one value that matches matcherOrValue.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$hasItem(matcherOrValue: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value should be an array and matchersOrValues must match at least one item.
 * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$hasItems(...matchersOrValues: any[]): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The length of the actual value must match matcherOrValue.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$hasSize(matcherOrValue: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The given array or arguments must contain the actual value.
 * @param items Array or list of values
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$isIn(...items: any[]): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * Alias to isIn() function.
 * @param items Array or list of values
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$oneOf(...items: any[]): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * All matchesOrValues must match the actual value. This matcher behaves pretty much like the JavaScript && (and) operator.
 * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$allOf(...matchersOrValues: any[]): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * At least one of the matchersOrValues should match the actual value. This matcher behaves pretty much like the JavaScript || (or) operator.
 * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$anyOf(...matchersOrValues: any[]): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * Useless always-match matcher.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$anything(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * Combinable matcher where the actual value must match all the given matchers or values.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
 */
declare export function Matchers$both(matcherOrValue: any): JsHamcrest$JsHamcrest$CombinableMatcher



/**
 * Combinable matcher where the actual value must match at least one of the given matchers or values.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
 */
declare export function Matchers$either(matcherOrValue: any): JsHamcrest$JsHamcrest$CombinableMatcher



/**
 * The actual value must be equal to expected.
 * @param expected Expected value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$equalTo(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * Delegate-only matcher frequently used to improve readability.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$is(matcherOrValue: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value must be null or undefined.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$nil(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value must not match matcherOrValue.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$not(matcherOrValue: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value is a function and, when invoked, it should throw an exception with the given name.
 * @param exceptionName Name of the expected exception
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$raises(exceptionName: string): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value is a function and, when invoked, it should raise any exception.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$raisesAnything(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value must be the same as expected.
 * @param expected Expected value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$sameAs(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * Matches any truthy value (not undefined, null, false, 0, NaN, or "").
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$truth(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual number must be between the given range (inclusive).
 * @param start Range start
 * @return {JsHamcrest$JsHamcrest$BetweenBuilder} Builder object with an and(end) method, which returns a JsHamcrest.SimpleMatcher instance and thus should be called to finish the matcher creation
 */
declare export function Matchers$between(start: any): JsHamcrest$JsHamcrest$BetweenBuilder



/**
 * The actual number must be close enough to expected, that is, the actual number is equal to a value within some range of acceptable error.
 * @param expected Expected number
 * @param delta Expected difference delta
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$closeTo(expected: number, delta?: number): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual number must be divisible by divisor.
 * @param divisor Divisor
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$divisibleBy(divisor: number): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual number must be even.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$even(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual number must be greater than expected.
 * @param expected Expected number
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$greaterThan(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual number must be greater than or equal to expected.
 * @param expected Expected number
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$greaterThanOrEqualTo(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual number must be less than expected.
 * @param expected Expected number
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$lessThan(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual number must be less than or equal to expected.
 * @param expected Expected number
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$lessThanOrEqualTo(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value must not be a number.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$notANumber(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual number must be odd.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$odd(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual number must be zero.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$zero(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value must be a boolean.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$bool(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value must be a function.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$func(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value has a function with the given name.
 * @param functionName Function name
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$hasFunction(functionName: string): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value has an attribute with the given name.
 * @param memberName Member name
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$hasMember(memberName: string, matcherOrValue?: any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value must be an instance of clazz.
 * @param clazz Constructor function
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$instanceOf(clazz: () => any): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value must be a number.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$number(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value must be an object.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$object(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value must be a string.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$string(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual value must be of the given type.
 * @param typeName Name of the type
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$typeOf(typeName: string): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual string must have a substring equals to str.
 * @param str Substring
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$containsString(str: string): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual string must look like an e-mail address.
 * 
 * Warning: This matcher is not fully compliant with RFC2822 due to its complexity.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$emailAddress(): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual string must end with str.
 * @param str Substring
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$endsWith(str: string): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual string must be equal to str, ignoring case.
 * @param str String
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$equalIgnoringCase(str: string): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual string must match regex.
 * @param regex String
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$matches(regex: RegExp): JsHamcrest$JsHamcrest$SimpleMatcher



/**
 * The actual string must start with str.
 * @param str Substring
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare export function Matchers$startsWith(str: string): JsHamcrest$JsHamcrest$SimpleMatcher



      declare var npm$namespace$Integration: {
        copyMembers: typeof Integration$copyMembers,
installMatchers: typeof Integration$installMatchers,
installOperators: typeof Integration$installOperators,
WebBrowser: typeof Integration$WebBrowser,
Rhino: typeof Integration$Rhino,
JsTestDriver: typeof Integration$JsTestDriver,
Nodeunit: typeof Integration$Nodeunit,
JsUnitTest: typeof Integration$JsUnitTest,
YUITest: typeof Integration$YUITest,
QUnit: typeof Integration$QUnit,
jsUnity: typeof Integration$jsUnity,
screwunit: typeof Integration$screwunit,
jasmine: typeof Integration$jasmine,
        
      }

/**
 * Copies all members of the Matchers and Operators modules to target.
 * 
 * Does not overwrite properties with the same name.
 * @param target
 */
declare export function Integration$copyMembers(target: {}): void



/**
 * Copies all members of source to target.
 * 
 * Does not overwrite properties with the same name.
 * @param source
 * @param target
 */
declare export function Integration$copyMembers(source: {}, target: {}): void



/**
 * Adds the members of the given object to JsHamcrest.Matchers namespace.
 * @param source
 */
declare export function Integration$installMatchers(source: {}): void



/**
 * Adds the members of the given object to JsHamcrest.Operators namespace.
 * @param source
 */
declare export function Integration$installOperators(source: {}): void



/**
 * Uses the web browser's alert() function to display the assertion results.
 * Great for quick prototyping.
 */
declare export function Integration$WebBrowser(): void



/**
 * Uses Rhino's print() function to display the assertion results.
 * Great for quick prototyping.
 */
declare export function Integration$Rhino(): void



/**
 * JsTestDriver integration.
 * @param params Omit to copy members to global scope
 */
declare export function Integration$JsTestDriver(params?: {
scope?: {}
}): void



/**
 * NodeUnit (Node.js Unit Testing) integration.
 * @param params Omit to copy members to "global"
 */
declare export function Integration$Nodeunit(params?: {
scope?: {}
}): void



/**
 * JsUnitTest integration.
 * @param params Omit to copy members to "JsUnitTest.Unit.Testcase.prototype"
 */
declare export function Integration$JsUnitTest(params?: {
scope?: {}
}): void



/**
 * YUITest (Yahoo UI) integration.
 * @param params Omit to copy members to global scope
 */
declare export function Integration$YUITest(params?: {
scope?: {}
}): void



/**
 * QUnit (JQuery) integration.
 * @param params Omit to copy members to global scope
 */
declare export function Integration$QUnit(params?: {
scope?: {}
}): void



/**
 * jsUnity integration.
 * @param params Omit to copy members to "jsUnity.env.defaultScope"
 */
declare export function Integration$jsUnity(params?: {
scope?: {},
attachAssertions?: boolean
}): void



/**
 * Screw.Unit integration.
 * @param params Omit to copy members to "Screw.Matchers"
 */
declare export function Integration$screwunit(params?: {
scope?: {}
}): void



/**
 * Jasmine integration.
 * @param params Omit to copy members to global scope
 */
declare export function Integration$jasmine(params?: {
scope?: {}
}): void



/**
 * Used by the between() matcher to specify the ending value.
 */
declare export class JsHamcrest$BetweenBuilder  {
and(end: any): JsHamcrest$SimpleMatcher
}
	
/**
 * Fails if the actual value does not match the matcher.
 * @param actual Value to test against the matcher
 * @param matcher Applied to the value
 * @param message Prepends the built description
 * @return {JsHamcrest$JsHamcrest$Description} Contains the message, actual value, matcher, and result
 */
declare function assertThat(
actual: any,
matcher?: JsHamcrest$JsHamcrest$Matcher,
message?: any): JsHamcrest$JsHamcrest$Description

	
/**
 * The length of the actual value must be zero.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function empty(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value should be an array and matcherOrValue must match all items.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function everyItem(matcherOrValue: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value should be an array and it must contain at least one value that matches matcherOrValue.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function hasItem(matcherOrValue: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value should be an array and matchersOrValues must match at least one item.
 * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function hasItems(...matchersOrValues: any[]): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The length of the actual value must match matcherOrValue.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function hasSize(matcherOrValue: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The given array or arguments must contain the actual value.
 * @param items Array or list of values
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function isIn(...items: any[]): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * Alias to isIn() function.
 * @param items Array or list of values
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function oneOf(...items: any[]): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * All matchesOrValues must match the actual value. This matcher behaves pretty much like the JavaScript && (and) operator.
 * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function allOf(...matchersOrValues: any[]): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * At least one of the matchersOrValues should match the actual value. This matcher behaves pretty much like the JavaScript || (or) operator.
 * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function anyOf(...matchersOrValues: any[]): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * Useless always-match matcher.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function anything(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * Combinable matcher where the actual value must match all the given matchers or values.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
 */
declare function both(matcherOrValue: any): JsHamcrest$JsHamcrest$CombinableMatcher

	
/**
 * Combinable matcher where the actual value must match at least one of the given matchers or values.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
 */
declare function either(matcherOrValue: any): JsHamcrest$JsHamcrest$CombinableMatcher

	
/**
 * The actual value must be equal to expected.
 * @param expected Expected value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function equalTo(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * Delegate-only matcher frequently used to improve readability.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function is(matcherOrValue: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value must be null or undefined.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function nil(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value must not match matcherOrValue.
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function not(matcherOrValue: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value is a function and, when invoked, it should throw an exception with the given name.
 * @param exceptionName Name of the expected exception
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function raises(exceptionName: string): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value is a function and, when invoked, it should raise any exception.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function raisesAnything(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value must be the same as expected.
 * @param expected Expected value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function sameAs(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * Matches any truthy value (not undefined, null, false, 0, NaN, or "").
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function truth(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual number must be between the given range (inclusive).
 * @param start Range start
 * @return {JsHamcrest$JsHamcrest$BetweenBuilder} Builder object with an and(end) method, which returns a JsHamcrest.SimpleMatcher instance and thus should be called to finish the matcher creation
 */
declare function between(start: any): JsHamcrest$JsHamcrest$BetweenBuilder

	
/**
 * The actual number must be close enough to expected, that is, the actual number is equal to a value within some range of acceptable error.
 * @param expected Expected number
 * @param delta Expected difference delta
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function closeTo(expected: number, delta?: number): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual number must be divisible by divisor.
 * @param divisor Divisor
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function divisibleBy(divisor: number): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual number must be even.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function even(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual number must be greater than expected.
 * @param expected Expected number
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function greaterThan(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual number must be greater than or equal to expected.
 * @param expected Expected number
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function greaterThanOrEqualTo(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual number must be less than expected.
 * @param expected Expected number
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function lessThan(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual number must be less than or equal to expected.
 * @param expected Expected number
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function lessThanOrEqualTo(expected: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value must not be a number.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function notANumber(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual number must be odd.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function odd(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual number must be zero.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function zero(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value must be a boolean.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function bool(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value must be a function.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function func(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value has a function with the given name.
 * @param functionName Function name
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function hasFunction(functionName: string): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value has an attribute with the given name.
 * @param memberName Member name
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function hasMember(memberName: string, matcherOrValue?: any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value must be an instance of clazz.
 * @param clazz Constructor function
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function instanceOf(clazz: () => any): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value must be a number.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function number(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value must be an object.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function object(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value must be a string.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function string(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual value must be of the given type.
 * @param typeName Name of the type
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function typeOf(typeName: string): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual string must have a substring equals to str.
 * @param str Substring
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function containsString(str: string): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual string must look like an e-mail address.
 * 
 * Warning: This matcher is not fully compliant with RFC2822 due to its complexity.
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function emailAddress(): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual string must end with str.
 * @param str Substring
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function endsWith(str: string): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual string must be equal to str, ignoring case.
 * @param str String
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function equalIgnoringCase(str: string): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual string must match regex.
 * @param regex String
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function matches(regex: RegExp): JsHamcrest$JsHamcrest$SimpleMatcher

	
/**
 * The actual string must start with str.
 * @param str Substring
 * @return {JsHamcrest$JsHamcrest$SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function startsWith(str: string): JsHamcrest$JsHamcrest$SimpleMatcher

    }
