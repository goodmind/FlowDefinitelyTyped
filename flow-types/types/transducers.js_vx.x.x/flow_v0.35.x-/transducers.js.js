declare module 'transducers.js' {
        declare export type Reducer<TResult, TInput> = (result: TResult, input: TInput) => TResult;
	declare export type Transducer<TInput, TOutput> = <TResult>(xf: Transformer<TResult, TOutput>) => Transformer<TResult, TInput>;
	declare export interface CompletingTransformer<TResult, TCompleteResult, TInput> {
undefined(): TResult | void,
undefined(result: TResult): TCompleteResult,
undefined(result: TResult, input: TInput): TResult | Reduced<TResult>
} 
	declare export type Transformer<TResult, TInput> = CompletingTransformer<TResult, TResult, TInput>;
	declare export interface Reduced<T> {
"NO PRINT IMPLEMENTED: ComputedPropertyName": true,
"NO PRINT IMPLEMENTED: ComputedPropertyName": T
} 
	declare export function reduce<TResult, TInput>(
coll: Iterable<TInput>,
xf: Transformer<TResult, TInput>,
init: TResult): TResult

	declare export function reduce<TResult, TCompleteResult, TInput>(
coll: Iterable<TInput>,
xf: CompletingTransformer<TResult, TCompleteResult, TInput>,
init: TResult): TCompleteResult

	declare export function reduce<TResult, TInput>(
coll: {
[key: string]: TInput
},
xf: Transformer<TResult, [string, TInput]>,
init: TResult): TResult

	declare export function reduce<TResult, TCompleteResult, TInput>(
coll: {
[key: string]: TInput
},
xf: CompletingTransformer<TResult, TCompleteResult, [string, TInput]>,
init: TResult): TCompleteResult

	declare export function transformer<TResult, TInput>(
reducer: Reducer<TResult, TInput>): Transformer<TResult, TInput>

	declare export interface ReducedConstructor {
new <T>(value: T): Reduced<T>
} 
	declare export var Reduced: ReducedConstructor;
	declare export function isReduced(x: any): boolean

	declare export function iterator<T>(coll: Iterable<T>): IterableIterator<T>

	declare export function push<T>(arr: T[], x: T): T[]

	declare export function transduce<TResult, TInput, TOutput>(
coll: Iterable<TInput>,
xf: Transducer<TInput, TOutput>,
f: Reducer<TResult, TOutput>,
init: TResult): TResult

	declare export function transduce<TResult, TCompleteResult, TInput, TOutput>(
coll: Iterable<TInput>,
xf: Transducer<TInput, TOutput>,
f: CompletingTransformer<TResult, TCompleteResult, TOutput>,
init?: TResult): TCompleteResult

	declare export function transduce<TResult, TInput, TOutput>(
coll: {
[key: string]: TInput
},
xf: Transducer<[string, TInput], TOutput>,
f: Reducer<TResult, TOutput>,
init: TResult): TResult

	declare export function transduce<TResult, TCompleteResult, TInput, TOutput>(
coll: {
[key: string]: TInput
},
xf: Transducer<[string, TInput], TOutput>,
f: CompletingTransformer<TResult, TCompleteResult, TOutput>,
init?: TResult): TCompleteResult

	declare export function seq<TInput, TOutput>(coll: TInput[], xf: Transducer<TInput, TOutput>): TOutput[]

	declare export function seq<TInput, TOutput>(
coll: Iterable<TInput>,
xf: Transducer<TInput, TOutput>): IterableIterator<TOutput>

	declare export function seq<TInput, TOutput>(
coll: {
[key: string]: TInput
},
xf: Transducer<[string, TInput], [string, TOutput]>): {
[key: string]: TOutput
}

	declare export function toArray<TInput, TOutput>(
coll: Iterable<TInput>,
xf?: Transducer<TInput, TOutput>): TOutput[]

	declare export function toArray<TInput, TOutput>(
coll: {
[key: string]: TInput
},
xf?: Transducer<[string, TInput], TOutput>): TOutput[]

	declare export function toIter<TInput, TOutput>(
coll: Iterable<TInput>,
xf?: Transducer<TInput, TOutput>): IterableIterator<TOutput>

	declare export function toIter<TInput, TOutput>(
coll: {
[key: string]: TInput
},
xf?: Transducer<[string, TInput], TOutput>): IterableIterator<TOutput>

	declare export function toObj<TInput, TOutput>(
coll: Iterable<TInput>,
xf?: Transducer<TInput, [string, TOutput]>): {
[key: string]: TOutput
}

	declare export function toObj<TInput, TOutput>(
coll: {
[key: string]: TInput
},
xf: Transducer<[string, TInput], [string, TOutput]>): {
[key: string]: TOutput
}

	declare export function into<TInput, TOutput>(
to: TOutput[],
xf: Transducer<TInput, TOutput>,
from: Iterable<TInput>): TOutput[]

	declare export function into<TInput>(
to: string,
xf: Transducer<TInput, string>,
from: Iterable<TInput>): string

	declare export function into<TInput, TOutput>(
to: {
[key: string]: TOutput
},
xf: Transducer<TInput, [string, TOutput]>,
from: Iterable<TInput>): {
[key: string]: TOutput
}

	declare export function compose(...fs: Array<(x: any) => any>): (x: any) => any

	declare export function map<TInput, TOutput>(f: (x: TInput) => TOutput): Transducer<TInput, TOutput>

	declare export function filter<TInput>(pred: (x: TInput) => boolean): Transducer<TInput, TInput>

	declare export function remove<TInput>(pred: (x: TInput) => boolean): Transducer<TInput, TInput>

	declare export function cat<TResult, TInput>(
f: Transformer<TResult, TInput>): Transformer<TResult, Iterable<TInput>>

	declare export function mapcat<TInput, TOutput>(
f: (x: TInput) => Iterable<TOutput>): Transducer<TInput, TOutput>

	declare export function keep<TInput>(): Transducer<TInput | null | void, TInput>

	declare export function dedupe<TInput>(): Transducer<TInput, TInput>

	declare export function take<TInput>(n: number): Transducer<TInput, TInput>

	declare export function takeWhile<TInput>(pred: (x: TInput) => boolean): Transducer<TInput, TInput>

	declare export function takeNth<TInput>(n: number): Transducer<TInput, TInput>

	declare export function drop<TInput>(n: number): Transducer<TInput, TInput>

	declare export function dropWhile<TInput>(pred: (x: TInput) => boolean): Transducer<TInput, TInput>

	declare export function partition<TInput>(n: number): Transducer<TInput, TInput[]>

	declare export function partitionBy<TInput>(f: (x: TInput) => any): Transducer<TInput, TInput[]>

	declare export function interpose<TInput>(sep: TInput): Transducer<TInput, TInput>

	declare export function repeat<TInput>(n: number): Transducer<TInput, TInput>

	declare export function range(n: number): number[]

	declare export interface LazyTransformerConstructor {
new <TInput, TOutput>(
xf: Transducer<TInput, TOutput>,
coll: Iterable<TInput>): IterableIterator<TOutput>
} 
	declare export var LazyTransformer: LazyTransformerConstructor;
    }
