declare module 'transducers-js' {
        declare export interface Reduced<TResult> {
"NO PRINT IMPLEMENTED: ComputedPropertyName": boolean,
"NO PRINT IMPLEMENTED: ComputedPropertyName": TResult
} 
	declare export type Reducer<TResult, TInput> = (result: TResult, input: TInput) => TResult;
	declare export interface Transducer<TInput, TOutput> {
(xf: Transformer<TResult, TOutput>): Transformer<TResult, TInput>,
(xf: CompletingTransformer<TResult, TCompleteResult, TOutput>): CompletingTransformer<TResult, TCompleteResult, TInput>
} 
	declare export interface CompletingTransformer<TResult, TCompleteResult, TInput> {
undefined(): TResult | void,
undefined(result: TResult, input: TInput): TResult | Reduced<TResult>,
undefined(result: TResult): TCompleteResult
} 
	declare export type Transformer<TResult, TInput> = CompletingTransformer<TResult, TResult, TInput>;
	
/**
 * Return a reduced value. Reduced values short circuit transduce.
 */
declare export function reduced<TResult>(x: TResult): Reduced<TResult>

	
/**
 * Check if a value is reduced.
 */
declare export function isReduced(x: any): boolean

	
/**
 * Function composition. Take N function and return their composition.
 */
declare export function comp<A, B, C>(a: Transducer<A, B>, b: Transducer<B, C>): Transducer<A, C>

	declare export function comp<A, B, C, D>(
a: Transducer<A, B>,
b: Transducer<B, C>,
c: Transducer<C, D>): Transducer<A, D>

	declare export function comp<A, B, C, D, E>(
a: Transducer<A, B>,
b: Transducer<B, C>,
c: Transducer<C, D>,
d: Transducer<D, E>): Transducer<A, E>

	declare export function comp<A>(...args: Array<Transducer<A, A>>): Transducer<A, A>

	declare export function comp<A, B, C>(b: (b: B) => C, a: (a: A) => B): (a: A) => C

	declare export function comp<A, B, C, D>(c: (c: C) => D, b: (b: B) => C, a: (a: A) => B): (a: A) => D

	declare export function comp<A, B, C, D, E>(
d: (d: D) => E,
c: (c: C) => D,
b: (b: B) => C,
a: (a: A) => B): (a: A) => E

	declare export function comp<A>(...args: Array<(a: A) => A>): A

	declare export function comp(...args: Array<(x: any) => any>): (x: any) => any

	
/**
 * Take a predicate function and return its complement.
 */
declare export function complement<T>(f: (x: T) => boolean): (x: T) => boolean

	
/**
 * Identity function.
 */
declare export function identity<T>(arg: T): T

	declare export class Map<TResult, TInput, TOutput> mixins Transformer<TResult, TInput> {
constructor(f: (x: TInput) => TOutput, xf: Transformer<TResult, TOutput>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult;
undefined(result: TResult): TResult
}
	
/**
 * Mapping transducer constructor
 */
declare export function map<TInput, TOutput>(f: (x: TInput) => TOutput): Transducer<TInput, TOutput>

	declare export class Filter<TResult, TInput> mixins Transformer<TResult, TInput> {
constructor(pred: (x: TInput) => boolean, xf: Transformer<TResult, TInput>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult;
undefined(result: TResult): TResult
}
	
/**
 * Filtering transducer constructor
 */
declare export function filter<TInput>(pred: (x: TInput) => boolean): Transducer<TInput, TInput>

	
/**
 * Similar to filter except the predicate is used to
 * eliminate values.
 */
declare export function remove<TInput>(pred: (x: TInput) => boolean): Transducer<TInput, TInput>

	declare export class Keep<TResult, TInput> mixins Transformer<TResult, TInput> {
constructor(f: (x: TInput) => any, xf: Transformer<TResult, TInput>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult;
undefined(result: TResult): TResult
}
	
/**
 * A keeping transducer. Keep inputs as long as the provided
 * function does not return null or undefined.
 */
declare export function keep<TInput>(f: (x: TInput) => any): Transducer<TInput, TInput>

	declare export class KeepIndexed<TResult, TInput> mixins Transformer<TResult, TInput> {
constructor(f: (i: number, x: TInput) => any, xf: Transformer<TResult, TInput>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult;
undefined(result: TResult): TResult
}
	
/**
 * Like keep but the provided function will be passed the
 * index as the fist argument.
 */
declare export function keepIndexed<TInput>(f: (i: number, x: TInput) => any): Transducer<TInput, TInput>

	declare export class Take<TResult, TInput> mixins Transformer<TResult, TInput> {
constructor(n: number, xf: Transformer<TResult, TInput>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult | Reduced<TResult>;
undefined(result: TResult): TResult
}
	
/**
 * A take transducer constructor. Will take n values before
 * returning a reduced result.
 */
declare export function take<TInput>(n: number): Transducer<TInput, TInput>

	declare export class TakeWhile<TResult, TInput> mixins Transformer<TResult, TInput> {
constructor(pred: (n: TInput) => boolean, xf: Transformer<TResult, TInput>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult | Reduced<TResult>;
undefined(result: TResult): TResult
}
	
/**
 * Like the take transducer except takes as long as the pred
 * return true for inputs.
 */
declare export function takeWhile<TInput>(pred: (n: TInput) => boolean): Transducer<TInput, TInput>

	declare export class TakeNth<TResult, TInput> mixins Transformer<TResult, TInput> {
constructor(n: number, xf: Transformer<TResult, TInput>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult;
undefined(result: TResult): TResult
}
	
/**
 * A transducer that takes every Nth input
 */
declare export function takeNth<TInput>(n: number): Transducer<TInput, TInput>

	declare export class Drop<TResult, TInput> mixins Transformer<TResult, TInput> {
constructor(n: number, xf: Transformer<TResult, TInput>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult;
undefined(result: TResult): TResult
}
	
/**
 * A dropping transducer constructor
 */
declare export function drop<TInput>(n: number): Transducer<TInput, TInput>

	declare export class DropWhile<TResult, TInput> mixins Transformer<TResult, TInput> {
constructor(pred: (input: TInput) => boolean, xf: Transformer<TResult, TInput>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult;
undefined(result: TResult): TResult
}
	
/**
 * A dropping transducer that drop inputs as long as
 * pred is true.
 */
declare export function dropWhile<TInput>(pred: (input: TInput) => boolean): Transducer<TInput, TInput>

	declare export class PartitionBy<TResult, TInput> mixins Transformer<TResult, TInput> {
constructor(f: (input: TInput) => any, xf: Transformer<TResult, TInput[]>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult;
undefined(result: TResult): TResult
}
	
/**
 * A partitioning transducer. Collects inputs into
 * arrays as long as predicate remains true for contiguous
 * inputs.
 */
declare export function partitionBy<TInput>(f: (input: TInput) => any): Transducer<TInput, TInput[]>

	declare export class PartitionAll<TResult, TInput> mixins Transformer<TResult, TInput> {
constructor(n: number, xf: Transformer<TResult, TInput[]>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult;
undefined(result: TResult): TResult
}
	
/**
 * A partitioning transducer. Collects inputs into
 * arrays of size N.
 */
declare export function partitionAll<TResult, TInput>(n: number): Transducer<TInput, TInput[]>

	declare export class Completing<TResult, TCompleteResult, TInput> mixins CompletingTransformer<TResult, TCompleteResult, TInput> {
constructor(cf: (result: TResult) => TCompleteResult, xf: Transformer<TResult, TInput>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult;
undefined(result: TResult): TCompleteResult
}
	
/**
 * A completing transducer constructor. Useful to provide cleanup
 * logic at the end of a reduction/transduction.
 */
declare export function completing<TResult, TCompleteResult, TInput>(
xf: Transformer<TResult, TInput> | Reducer<TResult, TInput>,
cf: (result: TResult) => TCompleteResult): CompletingTransformer<TResult, TCompleteResult, TInput>

	declare export class Wrap<TResult, TInput> mixins Transformer<TResult, TInput> {
constructor(stepFn: Reducer<TResult, TInput>): this;
undefined(): TResult;
undefined(result: TResult, input: TInput): TResult;
undefined(result: TResult): TResult
}
	
/**
 * Take a two-arity reducing function where the first argument is the
 * accumluation and the second argument is the next input and convert
 * it into a transducer transformer object.
 */
declare export function wrap<TResult, TInput>(
stepFn: Reducer<TResult, TInput>): Transformer<TResult, TInput>

	
/**
 * Given a transformer return a concatenating transformer
 */
declare export function cat<TResult, TInput>(
xf: Transformer<TResult, TInput>): Transformer<TResult, Iterable<TInput>>

	
/**
 * A mapping concatenating transformer
 */
declare export function mapcat<TResult, TInput, TOutput>(
f: (arr: TInput) => Iterable<TOutput>): Transducer<TInput, TOutput>

	
/**
 * Given a transducer, a builder function, an initial value
 * and a iterable collection - returns the reduction.
 */
declare export function transduce<TResult, TInput, TOutput>(
xf: Transducer<TInput, TOutput>,
f: Reducer<TResult, TOutput>,
init: TResult,
coll: Iterable<TInput>): TResult

	declare export function transduce<TResult, TCompleteResult, TInput, TOutput>(
xf: Transducer<TInput, TOutput>,
f: CompletingTransformer<TResult, TCompleteResult, TOutput>,
init: TResult,
coll: Iterable<TInput>): TCompleteResult

	declare export function transduce<TResult, TCompleteResult, TInput, TOutput>(
xf: Transducer<TInput, TOutput>,
f: CompletingTransformer<TResult, TCompleteResult, TOutput>,
coll: Iterable<TInput>): TCompleteResult

	declare export function transduce<TResult, TInput, TOutput>(
xf: Transducer<[string, TInput], TOutput>,
f: Reducer<TResult, TOutput>,
init: TResult,
coll: {
[key: string]: TInput
}): TResult

	declare export function transduce<TResult, TCompleteResult, TInput, TOutput>(
xf: Transducer<[string, TInput], TOutput>,
f: CompletingTransformer<TResult, TCompleteResult, TOutput>,
init: TResult,
coll: {
[key: string]: TInput
}): TCompleteResult

	declare export function transduce<TResult, TCompleteResult, TInput, TOutput>(
xf: Transducer<[string, TInput], TOutput>,
f: CompletingTransformer<TResult, TCompleteResult, TOutput>,
coll: {
[key: string]: TInput
}): TCompleteResult

	
/**
 * Given a transducer, an intial value and a
 * collection - returns the reduction.
 */
declare export function reduce<TResult, TInput>(
xf: Transformer<TResult, TInput> | Reducer<TResult, TInput>,
init: TResult,
coll: Iterable<TInput>): TResult

	declare export function reduce<TResult, TCompleteResult, TInput>(
xf: CompletingTransformer<TResult, TCompleteResult, TInput>,
init: TResult,
coll: Iterable<TInput>): TCompleteResult

	declare export function reduce<TResult, TInput>(
xf: Transformer<TResult, [string, TInput]> | Reducer<TResult, [string, TInput]>,
init: TResult,
coll: {
[key: string]: TInput
}): TResult

	declare export function reduce<TResult, TCompleteResult, TInput>(
xf: CompletingTransformer<TResult, TCompleteResult, [string, TInput]>,
init: TResult,
coll: {
[key: string]: TInput
}): TCompleteResult

	
/**
 * Reduce a value into the given empty value using a transducer.
 */
declare export function into<TInput, TOutput>(
empty: TOutput[],
xf: Transducer<TInput, TOutput>,
coll: Iterable<TInput>): TOutput[]

	declare export function into<TInput>(
empty: string,
xf: Transducer<TInput, string>,
coll: Iterable<TInput>): string

	declare export function into<TInput, TOutput>(
empty: {
[key: string]: TOutput
},
xf: Transducer<TInput, [string, TOutput]>,
coll: Iterable<TInput>): {
[key: string]: TOutput
}

	declare export function into<TInput, TOutput>(
empty: TOutput[],
xf: Transducer<[string, TInput], TOutput>,
coll: {
[key: string]: TInput
}): TOutput[]

	declare export function into<TInput>(
empty: string,
xf: Transducer<[string, TInput], string>,
coll: {
[key: string]: TInput
}): string

	declare export function into<TInput, TOutput>(
empty: {
[key: string]: TOutput
},
xf: Transducer<[string, TInput], [string, TOutput]>,
coll: {
[key: string]: TInput
}): {
[key: string]: TOutput
}

	
/**
 * Convert a transducer transformer object into a function so
 * that it can be used with existing reduce implementation i.e. native,
 * Underscore, lodash
 */
declare export function toFn<TResult, TInput, TOutput>(
xf: Transducer<TInput, TOutput>,
builder: Reducer<TResult, TOutput> | Transformer<TResult, TOutput>): Reducer<TResult, TOutput>

	
/**
 * A transformer which simply returns the first input.
 */
declare export function first<TResult, TInput>(): Wrap<TResult, TInput>

	
/**
 * Ensure that a value is reduced. If already reduced will not re-wrap.
 */
declare export function ensureReduced<TResult>(x: TResult | Reduced<TResult>): Reduced<TResult>

	
/**
 * Ensure a value is not reduced. Unwraps if reduced.
 */
declare export function unreduced<TResult>(x: TResult | Reduced<TResult>): TResult

	
/**
 * Returns the value of a reduced result.
 */
declare export function deref<TResult>(x: Reduced<TResult>): TResult

    }
