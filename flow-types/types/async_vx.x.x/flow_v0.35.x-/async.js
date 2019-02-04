declare module 'async' {
        declare export interface Dictionary<T> {
[key: string]: T
} 
	declare export type IterableCollection<T> = T[] | IterableIterator<T> | Dictionary<T>;
	declare export interface ErrorCallback<E> {
(err?: E | null): void
} 
	declare export interface AsyncBooleanResultCallback<E> {
(err?: E | null, truthValue?: boolean): void
} 
	declare export interface AsyncResultCallback<T, E> {
(err?: E | null, result?: T): void
} 
	declare export interface AsyncResultArrayCallback<T, E> {
(err?: E | null, results?: Array<T | void>): void
} 
	declare export interface AsyncResultObjectCallback<T, E> {
(err: E | void, results: Dictionary<T | void>): void
} 
	declare export interface AsyncFunction<T, E> {
(callback: (err?: E | null, result?: T) => void): void
} 
	declare export interface AsyncFunctionEx<T, E> {
(callback: (err?: E | null, ...results: T[]) => void): void
} 
	declare export interface AsyncIterator<T, E> {
(item: T, callback: ErrorCallback<E>): void
} 
	declare export interface AsyncForEachOfIterator<T, E> {
(item: T, key: number | string, callback: ErrorCallback<E>): void
} 
	declare export interface AsyncResultIterator<T, R, E> {
(item: T, callback: AsyncResultCallback<R, E>): void
} 
	declare export interface AsyncMemoIterator<T, R, E> {
(memo: R | void, item: T, callback: AsyncResultCallback<R, E>): void
} 
	declare export interface AsyncBooleanIterator<T, E> {
(item: T, callback: AsyncBooleanResultCallback<E>): void
} 
	declare export interface AsyncWorker<T, E> {
(task: T, callback: ErrorCallback<E>): void
} 
	declare export interface AsyncVoidFunction<E> {
(callback: ErrorCallback<E>): void
} 
	declare export type AsyncAutoTasks<R: Dictionary<any>, E> = $ObjMapi<R, <K>(K) => AsyncAutoTask<$ElementType<R, K>, R, E>>;
	declare export type AsyncAutoTask<R1, R: Dictionary<any>, E> = AsyncAutoTaskFunctionWithoutDependencies<R1, E> | Array<$Keys<R> | AsyncAutoTaskFunction<R1, R, E>>;
	declare export interface AsyncAutoTaskFunctionWithoutDependencies<R1, E> {
(cb: AsyncResultCallback<R1, E> | ErrorCallback<E>): void
} 
	declare export interface AsyncAutoTaskFunction<R1, R: Dictionary<any>, E> {
(results: R, cb: AsyncResultCallback<R1, E> | ErrorCallback<E>): void
} 
	declare export interface DataContainer<T> {
data: T
} 
	declare export interface CallbackContainer {
callback: Function
} 
	declare export interface PriorityContainer {
priority: number
} 
	declare export interface AsyncQueue<T> {
length(): number,
started: boolean,
running(): number,
idle(): boolean,
concurrency: number,
push<R, E>(task: T | T[], callback?: AsyncResultCallback<R, E>): void,
unshift<E>(task: T | T[], callback?: ErrorCallback<E>): void,
remove(filter: (node: DataContainer<T>) => boolean): void,
saturated: () => any,
empty: () => any,
drain: () => any,
paused: boolean,
pause(): void,
resume(): void,
kill(): void,
workersList<TWorker: DataContainer<T>, CallbackContainer>(): TWorker[],
error(error: Error, data: any): void,
unsaturated(): void,
buffer: number
} 
	declare export interface AsyncPriorityQueue<T> {
length(): number,
concurrency: number,
started: boolean,
paused: boolean,
push<R, E>(
task: T | T[],
priority: number,
callback?: AsyncResultArrayCallback<R, E>): void,
saturated: () => any,
empty: () => any,
drain: () => any,
running(): number,
idle(): boolean,
pause(): void,
resume(): void,
kill(): void,
workersList<TWorker: DataContainer<T>, CallbackContainer, PriorityContainer>(): TWorker[],
error(error: Error, data: any): void,
unsaturated(): void,
buffer: number
} 
	declare export interface AsyncCargo {
length(): number,
payload?: number,
push(task: any, callback?: Function): void,
saturated(): void,
empty(): void,
drain(): void,
idle(): boolean,
pause(): void,
resume(): void,
kill(): void
} 
	declare export function each<T, E>(
arr: IterableCollection<T>,
iterator: AsyncIterator<T, E>,
callback?: ErrorCallback<E>): void

	declare export var eachSeries: typeof each;
	declare export function eachLimit<T, E>(
arr: IterableCollection<T>,
limit: number,
iterator: AsyncIterator<T, E>,
callback?: ErrorCallback<E>): void

	declare export var forEach: typeof each;
	declare export var forEachSeries: typeof each;
	declare export var forEachLimit: typeof eachLimit;
	declare export function forEachOf<T, E>(
obj: IterableCollection<T>,
iterator: AsyncForEachOfIterator<T, E>,
callback?: ErrorCallback<E>): void

	declare export var forEachOfSeries: typeof forEachOf;
	declare export function forEachOfLimit<T, E>(
obj: IterableCollection<T>,
limit: number,
iterator: AsyncForEachOfIterator<T, E>,
callback?: ErrorCallback<E>): void

	declare export var eachOf: typeof forEachOf;
	declare export var eachOfSeries: typeof forEachOf;
	declare export var eachOfLimit: typeof forEachOfLimit;
	declare export function map<T, R, E>(
arr: T[] | IterableIterator<T> | Dictionary<T>,
iterator: AsyncResultIterator<T, R, E>,
callback?: AsyncResultArrayCallback<R, E>): void

	declare export var mapSeries: typeof map;
	declare export function mapLimit<T, R, E>(
arr: IterableCollection<T>,
limit: number,
iterator: AsyncResultIterator<T, R, E>,
callback?: AsyncResultArrayCallback<R, E>): void

	declare export function mapValuesLimit<T, R, E>(
obj: Dictionary<T>,
limit: number,
iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void,
callback: AsyncResultObjectCallback<R, E>): void

	declare export function mapValues<T, R, E>(
obj: Dictionary<T>,
iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void,
callback: AsyncResultObjectCallback<R, E>): void

	declare export var mapValuesSeries: typeof mapValues;
	declare export function filter<T, E>(
arr: IterableCollection<T>,
iterator: AsyncBooleanIterator<T, E>,
callback?: AsyncResultArrayCallback<T, E>): void

	declare export var filterSeries: typeof filter;
	declare export function filterLimit<T, E>(
arr: IterableCollection<T>,
limit: number,
iterator: AsyncBooleanIterator<T, E>,
callback?: AsyncResultArrayCallback<T, E>): void

	declare export var select: typeof filter;
	declare export var selectSeries: typeof filter;
	declare export var selectLimit: typeof filterLimit;
	declare export var reject: typeof filter;
	declare export var rejectSeries: typeof filter;
	declare export var rejectLimit: typeof filterLimit;
	declare export function reduce<T, R, E>(
arr: T[] | IterableIterator<T>,
memo: R,
iterator: AsyncMemoIterator<T, R, E>,
callback?: AsyncResultCallback<R, E>): void

	declare export var inject: typeof reduce;
	declare export var foldl: typeof reduce;
	declare export var reduceRight: typeof reduce;
	declare export var foldr: typeof reduce;
	declare export function detect<T, E>(
arr: IterableCollection<T>,
iterator: AsyncBooleanIterator<T, E>,
callback?: AsyncResultCallback<T, E>): void

	declare export var detectSeries: typeof detect;
	declare export function detectLimit<T, E>(
arr: IterableCollection<T>,
limit: number,
iterator: AsyncBooleanIterator<T, E>,
callback?: AsyncResultCallback<T, E>): void

	declare export var find: typeof detect;
	declare export var findSeries: typeof detect;
	declare export var findLimit: typeof detectLimit;
	declare export function sortBy<T, V, E>(
arr: T[] | IterableIterator<T>,
iterator: AsyncResultIterator<T, V, E>,
callback?: AsyncResultArrayCallback<T, E>): void

	declare export function some<T, E>(
arr: IterableCollection<T>,
iterator: AsyncBooleanIterator<T, E>,
callback?: AsyncBooleanResultCallback<E>): void

	declare export var someSeries: typeof some;
	declare export function someLimit<T, E>(
arr: IterableCollection<T>,
limit: number,
iterator: AsyncBooleanIterator<T, E>,
callback?: AsyncBooleanResultCallback<E>): void

	declare export var any: typeof some;
	declare export var anySeries: typeof someSeries;
	declare export var anyLimit: typeof someLimit;
	declare export function every<T, E>(
arr: IterableCollection<T>,
iterator: AsyncBooleanIterator<T, E>,
callback?: AsyncBooleanResultCallback<E>): void

	declare export var everySeries: typeof every;
	declare export function everyLimit<T, E>(
arr: IterableCollection<T>,
limit: number,
iterator: AsyncBooleanIterator<T, E>,
callback?: AsyncBooleanResultCallback<E>): void

	declare export var all: typeof every;
	declare export var allSeries: typeof every;
	declare export var allLimit: typeof everyLimit;
	declare export function concat<T, R, E>(
arr: IterableCollection<T>,
iterator: AsyncResultIterator<T, R[], E>,
callback?: AsyncResultArrayCallback<R, E>): void

	declare export function concatLimit<T, R, E>(
arr: IterableCollection<T>,
limit: number,
iterator: AsyncResultIterator<T, R[], E>,
callback?: AsyncResultArrayCallback<R, E>): void

	declare export var concatSeries: typeof concat;
	declare export function series<T, E>(
tasks: Array<AsyncFunction<T, E>>,
callback?: AsyncResultArrayCallback<T, E>): void

	declare export function series<T, E>(
tasks: Dictionary<AsyncFunction<T, E>>,
callback?: AsyncResultObjectCallback<T, E>): void

	declare export function parallel<T, E>(
tasks: Array<AsyncFunction<T, E>>,
callback?: AsyncResultArrayCallback<T, E>): void

	declare export function parallel<T, E>(
tasks: Dictionary<AsyncFunction<T, E>>,
callback?: AsyncResultObjectCallback<T, E>): void

	declare export function parallelLimit<T, E>(
tasks: Array<AsyncFunction<T, E>>,
limit: number,
callback?: AsyncResultArrayCallback<T, E>): void

	declare export function parallelLimit<T, E>(
tasks: Dictionary<AsyncFunction<T, E>>,
limit: number,
callback?: AsyncResultObjectCallback<T, E>): void

	declare export function whilst<E>(
test: () => boolean,
fn: AsyncVoidFunction<E>,
callback: ErrorCallback<E>): void

	declare export function doWhilst<T, E>(
fn: AsyncFunctionEx<T, E>,
test: (...results: T[]) => boolean,
callback: ErrorCallback<E>): void

	declare export function until<E>(
test: () => boolean,
fn: AsyncVoidFunction<E>,
callback: ErrorCallback<E>): void

	declare export function doUntil<T, E>(
fn: AsyncFunctionEx<T, E>,
test: (...results: T[]) => boolean,
callback: ErrorCallback<E>): void

	declare export function during<E>(
test: (testCallback: AsyncBooleanResultCallback<E>) => void,
fn: AsyncVoidFunction<E>,
callback: ErrorCallback<E>): void

	declare export function doDuring<E>(
fn: AsyncVoidFunction<E>,
test: (testCallback: AsyncBooleanResultCallback<E>) => void,
callback: ErrorCallback<E>): void

	declare export function forever<E>(next: (next: ErrorCallback<E>) => void, errBack: ErrorCallback<E>): void

	declare export function waterfall<T, E>(tasks: Function[], callback?: AsyncResultCallback<T, E>): void

	declare export function compose(...fns: Function[]): Function

	declare export function seq(...fns: Function[]): Function

	declare export function applyEach(fns: Function[], ...argsAndCallback: any[]): void

	declare export function applyEachSeries(fns: Function[], ...argsAndCallback: any[]): void

	declare export function queue<T, E>(worker: AsyncWorker<T, E>, concurrency?: number): AsyncQueue<T>

	declare export function queue<T, R, E>(
worker: AsyncResultIterator<T, R, E>,
concurrency?: number): AsyncQueue<T>

	declare export function priorityQueue<T, E>(worker: AsyncWorker<T, E>, concurrency: number): AsyncPriorityQueue<T>

	declare export function cargo<E>(
worker: (tasks: any[], callback: ErrorCallback<E>) => void,
payload?: number): AsyncCargo

	declare export function auto<R: Dictionary<any>, E>(
tasks: AsyncAutoTasks<R, E>,
concurrency?: number,
callback?: AsyncResultCallback<R, E>): void

	declare export function auto<R: Dictionary<any>, E>(
tasks: AsyncAutoTasks<R, E>,
callback?: AsyncResultCallback<R, E>): void

	declare export function autoInject<E>(tasks: any, callback?: AsyncResultCallback<any, E>): void

	declare export function retry<T, E>(
opts: number | {
times: number,
interval: number | ((retryCount: number) => number)
},
task: (callback: AsyncResultCallback<T, E>, results: any) => void,
callback: AsyncResultCallback<any, E>): void

	declare export function retryable<T, E>(
opts: number | {
times: number,
interval: number
},
task: AsyncFunction<T, E>): AsyncFunction<T, E>

	declare export function apply<E>(fn: Function, ...args: any[]): AsyncFunction<any, E>

	declare export function nextTick(callback: Function, ...args: any[]): void

	declare export var setImmediate: typeof nextTick;
	declare export function reflect<T, E>(
fn: AsyncFunction<T, E>): (callback: (err: null, result: {
error?: E,
value?: T
}) => void) => void

	declare export function reflectAll<T, E>(
tasks: Array<AsyncFunction<T, E>>): Array<(callback: (err: null, result: {
error?: E,
value?: T
}) => void) => void>

	declare export function timeout<T, E>(
fn: AsyncFunction<T, E>,
milliseconds: number,
info?: any): AsyncFunction<T, E>

	declare export function timeout<T, R, E>(
fn: AsyncResultIterator<T, R, E>,
milliseconds: number,
info?: any): AsyncResultIterator<T, R, E>

	declare export function times<T, E>(
n: number,
iterator: AsyncResultIterator<number, T, E>,
callback: AsyncResultArrayCallback<T, E>): void

	declare export function timesSeries<T, E>(
n: number,
iterator: AsyncResultIterator<number, T, E>,
callback: AsyncResultArrayCallback<T, E>): void

	declare export function timesLimit<T, E>(
n: number,
limit: number,
iterator: AsyncResultIterator<number, T, E>,
callback: AsyncResultArrayCallback<T, E>): void

	declare export function transform<T, R, E>(
arr: T[],
iteratee: (acc: R[], item: T, key: number, callback: (error?: E) => void) => void,
callback?: AsyncResultArrayCallback<T, E>): void

	declare export function transform<T, R, E>(
arr: T[],
acc: R[],
iteratee: (acc: R[], item: T, key: number, callback: (error?: E) => void) => void,
callback?: AsyncResultArrayCallback<T, E>): void

	declare export function transform<T, R, E>(
arr: {
[key: string]: T
},
iteratee: (
acc: {
[key: string]: R
},
item: T,
key: string,
callback: (error?: E) => void) => void,
callback?: AsyncResultObjectCallback<T, E>): void

	declare export function transform<T, R, E>(
arr: {
[key: string]: T
},
acc: {
[key: string]: R
},
iteratee: (
acc: {
[key: string]: R
},
item: T,
key: string,
callback: (error?: E) => void) => void,
callback?: AsyncResultObjectCallback<T, E>): void

	declare export function race<T, E>(
tasks: Array<AsyncFunction<T, E>>,
callback: AsyncResultCallback<T, E>): void

	declare export function memoize(fn: Function, hasher?: Function): Function

	declare export function unmemoize(fn: Function): Function

	declare export function ensureAsync(fn: (...argsAndCallback: any[]) => void): Function

	declare export function constant(...values: any[]): Function

	declare export function asyncify(fn: Function): (...args: any[]) => any

	declare export function wrapSync(fn: Function): Function

	declare export function log(fn: Function, ...args: any[]): void

	declare export function dir(fn: Function, ...args: any[]): void

    }
