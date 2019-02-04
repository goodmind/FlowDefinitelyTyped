declare module 'steed' {
        declare interface steed$Dictionary<T> {
[key: string]: T
} 

declare type steed$ErrorCallback<T> = (err?: T) => void;

declare type steed$SteedResultCallback<T, E> = (err: E, result: T) => void;

declare type steed$SteedResultArrayCallback<T, E> = (err: E, results: T[]) => void;

declare type steed$SteedResultObjectCallback<T, E> = (err: E, results: steed$Dictionary<T>) => void;

declare type steed$SteedWorker<T, E> = (task: T, callback: steed$ErrorCallback<E>) => void;

declare type steed$SteedIterator<T, E> = (item: T, callback: steed$ErrorCallback<E>) => void;

declare type steed$SteedResultIterator<T, R, E> = (item: T, callback: steed$SteedResultCallback<R, E>) => void;

declare type steed$SteedFunction<T, E> = (callback: (err?: E, result?: T) => void) => void;

declare interface steed$SteedQueue<T> {
push<E>(task: T | T[], callback?: steed$SteedResultCallback<T, E>): void,
unshift<E>(task: T | T[], callback?: steed$ErrorCallback<E>): void,
pause(): void,
resume(): void,
idle(): boolean,
length(): number,
kill(): void,
concurrency: number,
drain(): any,
empty(): any,
saturated(): any
} 

declare interface steed$Steed {
parallel<T, E>(
tasks: Array<steed$SteedFunction<T, E>>,
callback?: steed$SteedResultArrayCallback<T, E>): void,
parallel<T, E>(
tasks: steed$Dictionary<steed$SteedFunction<T, E>>,
callback?: steed$SteedResultObjectCallback<T, E>): void,
series<T, E>(
tasks: Array<steed$SteedFunction<T, E>>,
callback?: steed$SteedResultArrayCallback<T, E>): void,
series<T, E>(
tasks: steed$Dictionary<steed$SteedFunction<T, E>>,
callback?: steed$SteedResultObjectCallback<T, E>): void,
waterfall<T, E>(tasks: Function[], callback?: steed$SteedResultCallback<T, E>): void,
each<T, E>(
arr: T[] | steed$Dictionary<T>,
iterator: steed$SteedIterator<T, E>,
callback?: steed$ErrorCallback<E>): void,
eachSeries: typeof undefined,
map<T, R, E>(
arr: T[] | steed$Dictionary<T>,
iterator: steed$SteedResultIterator<T, R, E>,
callback?: steed$SteedResultArrayCallback<R, E>): void,
mapSeries: typeof undefined,
queue<T, E>(
worker: steed$SteedWorker<T, E>,
concurrency?: number): steed$SteedQueue<T>,
queue<T, R, E>(
worker: steed$SteedResultIterator<T, R, E>,
concurrency?: number): steed$SteedQueue<T>
} 
	declare var steed: steed$steed$Steed;
	declare module.exports: typeof steed

    }
