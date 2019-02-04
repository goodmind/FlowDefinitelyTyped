declare module 'check-types' {
        declare type NegationFunction = (val: any) => boolean;
	declare type MaybeFunction = <T>(val: T) => boolean | T;
	declare interface ArrayFunction {
(a: any): boolean,
of: {
[method: string]: boolean
}
} 
	declare interface ArrayLikeFunction {
(a: any): boolean,
of: {
[method: string]: boolean
}
} 
	declare interface IterableFunction {
(a: any): boolean,
of: {
[method: string]: boolean
}
} 
	declare interface ObjectFunction {
(a: any): boolean,
of: {
[method: string]: boolean
}
} 
	declare type AssertFunction = {
(possibleFalsy: T, message?: string, errorType?: {
new (...args: any[]): any
}): T
} & CheckType

	declare interface CheckType {
equal(a: any, b: any): boolean,
null(a: any): boolean,
undefined(a: any): boolean,
assigned(a: any): boolean,
primitive(a: any): boolean,
hasLength(a: any, length: number): boolean,
string(a: any): boolean,
emptyString(a: string): boolean,
nonEmptyString(a: string): boolean,
contains(a: string, substring: string): boolean,
match(a: string, b: RegExp): boolean,
number(a: any): boolean,
integer(a: any): boolean,
zero(a: any): boolean,
infinity(a: any): boolean,
greater(num: number, greaterThan: number): boolean,
greaterOrEqual(num: number, greaterOrEqual: number): boolean,
less(num: number, lessThan: number): boolean,
lessOrEqual(num: number, lessOrEqual: number): boolean,

/**
 * Excluding a and b. Any order of a, b
 */
between(num: number, a: number, b: number): boolean,

/**
 * Including a, b. Any order of a, b
 */
inRange(num: number, a: number, b: number): boolean,
positive(num: number): boolean,
negative(num: number): boolean,
odd(num: number): boolean,
even(num: number): boolean,
boolean(a: any): boolean,
object: ObjectFunction,
emptyObject(a: {[key: string]: any}): boolean,
nonEmptyObject(a: {[key: string]: any}): boolean,

/**
 * Checking via instanceof
 */
instanceStrict<T: {[key: string]: any}>(a: any, prototype: T): boolean,

/**
 * Checking via instanceof, fallback constructor.name and .toString()
 */
instance<T: {[key: string]: any}>(a: any, prototype: T): boolean,

/**
 * Duck type checking. Structural in other words. Checking if a has all properties of duck
 */
like<T: {[key: string]: any}>(a: any, duck: T): boolean,
array: ArrayFunction,
emptyArray(a: any[]): boolean,
nonEmptyArray(a: any[]): boolean,
arrayLike: ArrayLikeFunction,
iterable: IterableFunction,
includes(a: any[], value: any): boolean,
date(a: any): boolean,
function(a: any): boolean,
not: CheckType & NegationFunction,
maybe: CheckType & MaybeFunction,
assert: AssertFunction,

/**
 * Applying predicate to every element of array and returning resulting array
 * 
 * Example: apply([2, 3, "four"], check.number) => [true, true, false]
 */
apply<T>(arr: any[], predicate: (...args: any[]) => T): T[],
map<T: {
[k: string]: any
}>(
arr: T,
predicates: $Shape<$ObjMapi<T, <k>(k) => (...args: any[]) => boolean>>): $Shape<$ObjMapi<T, <k>(k) => any>>,
all(arr: boolean[] | {
[k: string]: boolean
}): boolean,
any(arr: boolean[] | {
[k: string]: boolean
}): boolean
} 
	declare var check: CheckType;
	declare module.exports: typeof check

    }
