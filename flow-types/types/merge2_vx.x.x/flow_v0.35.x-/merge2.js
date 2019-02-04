declare module 'merge2' {
        
/**
 * @summary This function takes an arbitrary number of streams and returns a
Merge2Stream.
 * @description If a DuplexOption is specified, it has to be specified last in the
argument list
 * @see {
 * @link https://github.com/teambition/merge2#api }
 * @param args StreamTypes
 * @param opts Optional DuplexOption to be specified last
 * @return A merged duplex stream
 */
declare function merge2(a: Streams, options?: merge2$merge2$Options): merge2$merge2$Merge2Stream

	declare function merge2(
a: Streams,
b: Streams,
options?: merge2$merge2$Options): merge2$merge2$Merge2Stream

	declare function merge2(
a: Streams,
b: Streams,
c: Streams,
options?: merge2$merge2$Options): merge2$merge2$Merge2Stream

	declare function merge2(
a: Streams,
b: Streams,
c: Streams,
d: Streams,
options?: merge2$merge2$Options): merge2$merge2$Merge2Stream

	declare function merge2(
a: Streams,
b: Streams,
c: Streams,
d: Streams,
e: Streams,
options?: merge2$merge2$Options): merge2$merge2$Merge2Stream

	declare function merge2(...args: Streams[]): merge2$merge2$Merge2Stream

	declare type Streams = merge2$merge2$StreamType | merge2$merge2$StreamType[];
	declare type merge2$StreamType = NodeJS.ReadableStream | merge2$Merge2Stream;

declare interface merge2$Options {
end?: boolean,
objectMode?: boolean
} 

declare type merge2$Merge2Stream = {

/**
 * @summary Add more streams to an existing merged stream
 * @param args streams to add
 * @return The merged stream
 */
add(...args: Streams[]): merge2$Merge2Stream,

/**
 * @summary It will emit 'queueDrain' when all streams merged.
If you set end === false in options, this event give you a notice that
you should add more streams to merge, or end the mergedStream.
 * @param event The 'queueDrain' event
 * @return This stream
 */
on(event: "queueDrain", listener: () => void): this,
on(event: string, listener: (...args: any[]) => void): this,
once(event: "queueDrain", listener: () => void): this,
once(event: string, listener: (...args: any[]) => void): this
} & NodeJS.ReadWriteStream

	declare module.exports: typeof merge2

    }
