declare module 'whatwg-streams' {
        declare export interface ReadableStreamSource<R> {
start(controller: ReadableStreamDefaultController<R>): void | Promise<any>,
pull(controller: ReadableStreamDefaultController<R>): void | Promise<any>,
cancel(reason: any): void | Promise<any>
} 
	declare export interface ReadableByteStreamSource {
start(controller: ReadableByteStreamController): void | Promise<any>,
pull(controller: ReadableByteStreamController): void | Promise<any>,
cancel(reason: any): void | Promise<any>,
type: "bytes",
autoAllocateChunkSize?: number
} 
	declare export interface QueuingStrategy<T> {
size(chunk: T): number,
highWaterMark?: number
} 
	declare export interface PipeOptions {
preventClose?: boolean,
preventAbort?: boolean,
preventCancel?: boolean
} 
	declare export interface WritableReadablePair<T: WritableStream<any>, U: ReadableStream<any>> {
writable: T,
readable: U
} 
	declare export interface ReadResult<T> {
done: boolean,
value: T
} 
	declare class ReadableStream<R>  {
constructor(underlyingSource?: ReadableStreamSource<R>, strategy?: QueuingStrategy<R>): this;
constructor(underlyingSource?: ReadableByteStreamSource, strategy?: QueuingStrategy<R>): this;
locked: boolean;
cancel(reason: any): Promise<void>;
getReader(): ReadableStreamDefaultReader<R>;
getReader({mode}: {
mode: "byob"
}): ReadableStreamBYOBReader<R>;
pipeThrough<T: ReadableStream<any>>(
{writable, readable}: WritableReadablePair<WritableStream<R>, T>,
options?: PipeOptions): T;
pipeTo(dest: WritableStream<R>, options?: PipeOptions): Promise<void>;
tee(): [ReadableStream<R>, ReadableStream<R>]
}
	declare class ReadableStreamDefaultReader<R>  {
constructor(stream: ReadableStream<R>): this;
closed: Promise<void>;
cancel(reason: any): Promise<void>;
read(): Promise<ReadResult<R>>;
releaseLock(): void
}
	declare class ReadableStreamBYOBReader<R>  {
constructor(stream: ReadableStream<R>): this;
closed: Promise<void>;
cancel(reason: any): Promise<void>;
read<T: ArrayBufferView>(view: T): Promise<ReadResult<T>>;
releaseLock(): void
}
	declare class ReadableStreamDefaultController<R>  {
desiredSize: number | null;
close(): void;
enqueue(chunk: R): void;
error(e: any): void
}
	declare class ReadableByteStreamController  {
byobRequest: ReadableStreamBYOBRequest | void;
desiredSize: number | null;
close(): void;
enqueue(chunk: ArrayBufferView): void;
error(e: any): void
}
	declare class ReadableStreamBYOBRequest  {
view: Uint8Array;
respond(bytesWritten: number): void;
respondWithNewView(view: ArrayBufferView): void
}
	declare interface WritableStreamSink<W> {
start(controller: WritableStreamDefaultController<W>): void | Promise<any>,
write(chunk: W, controller?: WritableStreamDefaultController<W>): void | Promise<any>,
close(controller: WritableStreamDefaultController<W>): void | Promise<any>,
abort(reason: any): void | Promise<any>
} 
	declare class WritableStream<W>  {
constructor(underlyingSink?: WritableStreamSink<W>, strategy?: QueuingStrategy<W>): this;
locked: boolean;
abort(reason: any): Promise<void>;
getWriter(): WritableStreamDefaultWriter<W>
}
	declare class WritableStreamDefaultWriter<W>  {
constructor(stream: WritableStream<W>): this;
closed: Promise<void>;
desiredSize: number | null;
ready: Promise<void>;
abort(reason: any): Promise<void>;
close(): Promise<void>;
releaseLock(): void;
write(chunk: W): Promise<void>
}
	declare class WritableStreamDefaultController<W>  {
error(e: any): void
}
	declare class ByteLengthQueuingStrategy<T>  {
constructor({highWaterMark}: {
highWaterMark: number
}): this;
size(chunk: T): number | void
}
	declare class CountQueuingStrategy  {
constructor({highWaterMark}: {
highWaterMark: number
}): this;
size(): 1
}
	declare export interface TransformStreamTransformer<R, W> {
start(controller: TransformStreamDefaultController<R>): void | Promise<any>,
transform(chunk: W, controller: TransformStreamDefaultController<R>): void | Promise<any>,
flush(controller: TransformStreamDefaultController<R>): void | Promise<any>
} 
	declare class TransformStream<R, W> mixins WritableReadablePair<WritableStream<W>, ReadableStream<R>> {
constructor(transformer?: TransformStreamTransformer<R, W>, writableStrategy?: QueuingStrategy<W>, readableStrategy?: QueuingStrategy<R>): this;
readable: ReadableStream<R>;
writable: WritableStream<W>
}
	declare class TransformStreamDefaultController<R>  {
enqueue(chunk: R): void;
error(reason: any): void;
terminate(): void;
desiredSize: number | null
}
    }
