declare module 'asynciterator' {
        import type {
          EventEmitter
        } from 'events';

	declare export class AsyncIterator<T> mixins NodeJS.EventEmitter {
static STATES: ["INIT", "OPEN", "CLOSING", "CLOSED", "ENDED"];
static INIT: 0;
static OPEN: 1;
static CLOSING: 2;
static CLOSED: 3;
static ENDED: 4;
_state: number;
_readable: boolean;
_destination: AsyncIterator<any>;
readable: boolean;
closed: boolean;
ended: boolean;
constructor(): this;
read(): T;
each(callback: (data: T) => void, self?: any): void;
close(): void;
_changeState(newState: number, eventAsync?: boolean): void;
_end(): void;
getProperty(propertyName: string, callback?: (value: any) => void): any;
setProperty(propertyName: string, value: any): void;
getProperties(): {
[id: string]: any
};
setProperties(properties: {
[id: string]: any
}): void;
copyProperties(source: AsyncIterator<any>, propertyNames: string[]): void;
toString(): string;
_toStringDetails(): string;
transform<T2>(
options?: SimpleTransformIteratorOptions<T, T2>): SimpleTransformIterator<T, T2>;
map<T2>(
mapper: (item: T) => T2,
self?: {[key: string]: any}): SimpleTransformIterator<T, T2>;
filter(
filter: (item: T) => boolean,
self?: {[key: string]: any}): SimpleTransformIterator<T, T>;
prepend(items: T[]): SimpleTransformIterator<T, T>;
append<T>(items: T[]): SimpleTransformIterator<T, T>;
surround<T>(prepend: T[], append: T[]): SimpleTransformIterator<T, T>;
skip<T>(offset: number): SimpleTransformIterator<T, T>;
take<T>(limit: number): SimpleTransformIterator<T, T>;
range<T>(start: number, end: number): SimpleTransformIterator<T, T>;
clone(): ClonedIterator<T>;
static range(start?: number, end?: number, step?: number): IntegerIterator
}
	declare export class EmptyIterator<T> mixins AsyncIterator<T> {
_state: 4
}
	declare export class SingletonIterator<T> mixins AsyncIterator<T> {
constructor(item?: T): this
}
	declare export class ArrayIterator<T> mixins AsyncIterator<T> {
constructor(items?: T[]): this
}
	declare export interface IntegerIteratorOptions {
step?: number,
end?: number,
start?: number
} 
	declare export class IntegerIterator mixins AsyncIterator<number> {
_step: number;
_last: number;
_next: number;
constructor(options?: IntegerIteratorOptions): this
}
	declare export interface BufferedIteratorOptions {
maxBufferSize?: number,
autoStart?: boolean
} 
	declare export class BufferedIterator<T> mixins AsyncIterator<T> {
maxBufferSize: number;
_pushedCount: number;
_buffer: T[];
_init(autoStart: boolean): void;
_begin(done: () => void): void;
_read(count: number, done: () => void): void;
_push(item: T): void;
_fillBuffer(): void;
_completeClose(): void;
_flush(done: () => void): void;
constructor(options?: BufferedIteratorOptions): this
}
	declare export type TransformIteratorOptions<S> = {
optional?: boolean,
source?: AsyncIterator<S>
} & BufferedIteratorOptions

	declare export class TransformIterator<S, T> mixins BufferedIterator<T> {
_optional: boolean;
source: AsyncIterator<S>;
_validateSource(source: AsyncIterator<S>, allowDestination?: boolean): void;
_transform(item: S, done: (result: T) => void): void;
_closeWhenDone(): void;
constructor(source?: AsyncIterator<S> | TransformIteratorOptions<S>, options?: TransformIteratorOptions<S>): this
}
	declare export type SimpleTransformIteratorOptions<S, T> = {
offset?: number,
limit?: number,
prepend?: T[],
append?: T[],
filter(item: S): boolean,
map(item: S): T,
transform(item: S, callback: (result: T) => void): void
} & TransformIteratorOptions<S>

	declare export class SimpleTransformIterator<S, T> mixins TransformIterator<S, T> {
_offset: number;
_limit: number;
_prepender: ArrayIterator<T>;
_appender: ArrayIterator<T>;
_filter(item: S): boolean;
_map(item: S): T;
_transform(item: S, done: (result: T) => void): void;
_insert(inserter: AsyncIterator<S>, done: () => void): void;
constructor(source?: AsyncIterator<S> | SimpleTransformIteratorOptions<S, T>, options?: SimpleTransformIteratorOptions<S, T>): this
}
	declare export class MultiTransformIterator<S, T> mixins TransformIterator<S, T> {
_transformerQueue: S[];
_createTransformer(element: S): AsyncIterator<T>;
constructor(source?: AsyncIterator<S> | TransformIteratorOptions<S>, options?: TransformIteratorOptions<S>): this
}
	declare export class ClonedIterator<T> mixins TransformIterator<T, T> {
_readPosition: number;
constructor(source?: AsyncIterator<T>): this
}
    }
