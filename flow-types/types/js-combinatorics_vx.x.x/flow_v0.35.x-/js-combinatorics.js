declare module 'js-combinatorics' {
        
      declare var npm$namespace$__Combinatorics: {
        P: typeof __Combinatorics$P,
C: typeof __Combinatorics$C,
factorial: typeof __Combinatorics$factorial,
factoradic: typeof __Combinatorics$factoradic,
power: typeof __Combinatorics$power,
combination: typeof __Combinatorics$combination,
bigCombination: typeof __Combinatorics$bigCombination,
permutation: typeof __Combinatorics$permutation,
permutationCombination: typeof __Combinatorics$permutationCombination,
baseN: typeof __Combinatorics$baseN,
cartesianProduct: typeof __Combinatorics$cartesianProduct,
        VERSION: typeof __Combinatorics$VERSION,
      }
declare interface __Combinatorics$IGenerator<T> {

/**
 * Returns the element or undefined if no more elements are available.
 */
next(): T,

/**
 * Applies the callback function for each element.
 */
forEach(f: (item: T) => void): void,

/**
 * Returns an array that is the output of calling the callback function separately on each element.
 */
map<TResult>(f: (item: T) => TResult): TResult[],

/**
 * Returns an array of elements that return `true` for the filter function.
 */
filter(predicate: (item: T) => boolean): T[],

/**
 * Returns an array of all elements.
 */
toArray(): T[],

/**
 * Returns the total number of elements to be generated. This equals the result of calling
 *  `generator.toArray().length` but it is precalculated without actually generating any elements.
 * Handy when doing setup for a potentially long-running loop.
 */
length: number
} 

declare type __Combinatorics$IPredictableGenerator<T> = {

/**
 * Returns the nth element (indexed from 0).
 */
nth(n: number): T
} & __Combinatorics$IGenerator<T>


declare type __Combinatorics$ICartesianProductGenerator<T> = {

/**
 * Arguments are integer coordinates.
 * Arguments can be out of bounds but it returns `undefined` in such cases.
 */
get(...coordinates: number[]): T
} & __Combinatorics$IPredictableGenerator<T>



/**
 * Calculates m P n
 */
declare function __Combinatorics$P(m: number, n: number): number



/**
 * Calculates m C n
 */
declare function __Combinatorics$C(m: number, n: number): number



/**
 * Calculates n!
 */
declare function __Combinatorics$factorial(n: number): number



/**
 * Returns the factoradic representation of `n` in an array, in
 *  least significant order.
 * See http://en.wikipedia.org/wiki/Factorial_number_system
 */
declare function __Combinatorics$factoradic(n: number): number[]



/**
 * Generates the power set of `a`.
 */
declare function __Combinatorics$power<T>(a: T[]): __Combinatorics$IPredictableGenerator<T[]>



/**
 * Generates the combination of `a` with `n` elements.
 * `n` defaults to the length of `a`.
 */
declare function __Combinatorics$combination<T>(a: T[], n?: number): __Combinatorics$IGenerator<T[]>



/**
 * Generates the combination of `a` with `n` elements, which
 * also supports larger sets of elements.
 * When `n` is ommited, the length of the array is used.
 * Somewhat slower than `combination()`
 */
declare function __Combinatorics$bigCombination<T>(a: T[], n?: number): __Combinatorics$IGenerator<T[]>



/**
 * Generates the permutation of `a` with `n` elements.
 * `n` defaults to the length of `a`.
 */
declare function __Combinatorics$permutation<T>(a: T[], n?: number): __Combinatorics$IGenerator<T[]>



/**
 * Generates the permutation of the combination of `a`.
 * Equivalent to `permutation(combination(a))`, but more efficient.
 */
declare function __Combinatorics$permutationCombination<T>(a: T[]): __Combinatorics$IGenerator<T[]>



/**
 * Generates `n`-digit "numbers" where each digit is an element in array.
 * Note this "number" is in the least significant order.
 * `n` defaults to the length of `a`.
 */
declare function __Combinatorics$baseN<T>(a: T[], n?: number): __Combinatorics$IPredictableGenerator<T[]>



/**
 * Generates the cartesian product of the arrays. All arguments must be arrays with more than one element.
 */
declare function __Combinatorics$cartesianProduct<T1>(a1: T1[]): __Combinatorics$ICartesianProductGenerator<[T1]>


declare function __Combinatorics$cartesianProduct<T1, T2>(
a1: T1[],
a2: T2[]): __Combinatorics$ICartesianProductGenerator<[T1, T2]>


declare function __Combinatorics$cartesianProduct<T1, T2, T3>(
a1: T1[],
a2: T2[],
a3: T3[]): __Combinatorics$ICartesianProductGenerator<[T1, T2, T3]>


declare function __Combinatorics$cartesianProduct<T1, T2, T3, T4>(
a1: T1[],
a2: T2[],
a3: T3[],
a4: T4[]): __Combinatorics$ICartesianProductGenerator<[T1, T2, T3, T4]>


declare function __Combinatorics$cartesianProduct<T1, T2, T3, T4, T5>(
a1: T1[],
a2: T2[],
a3: T3[],
a4: T4[],
a5: T5[]): __Combinatorics$ICartesianProductGenerator<[T1, T2, T3, T4, T5]>


declare function __Combinatorics$cartesianProduct<T1, T2, T3, T4, T5, T6>(
a1: T1[],
a2: T2[],
a3: T3[],
a4: T4[],
a5: T5[],
a6: T6[]): __Combinatorics$ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6]>


declare function __Combinatorics$cartesianProduct<T1, T2, T3, T4, T5, T6, T7>(
a1: T1[],
a2: T2[],
a3: T3[],
a4: T4[],
a5: T5[],
a6: T6[],
a7: T7[]): __Combinatorics$ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7]>


declare function __Combinatorics$cartesianProduct<T1, T2, T3, T4, T5, T6, T7, T8>(
a1: T1[],
a2: T2[],
a3: T3[],
a4: T4[],
a5: T5[],
a6: T6[],
a7: T7[],
a8: T8[]): __Combinatorics$ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7, T8]>


declare function __Combinatorics$cartesianProduct<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
a1: T1[],
a2: T2[],
a3: T3[],
a4: T4[],
a5: T5[],
a6: T6[],
a7: T7[],
a8: T8[],
a9: T9[]): __Combinatorics$ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>


declare function __Combinatorics$cartesianProduct<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
a1: T1[],
a2: T2[],
a3: T3[],
a4: T4[],
a5: T5[],
a6: T6[],
a7: T7[],
a8: T8[],
a9: T9[],
a10: T10[]): __Combinatorics$ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>


declare function __Combinatorics$cartesianProduct(...a: any[][]): __Combinatorics$ICartesianProductGenerator<any[]>


declare var __Combinatorics$VERSION: string;
	declare module.exports: typeof __Combinatorics

    }
