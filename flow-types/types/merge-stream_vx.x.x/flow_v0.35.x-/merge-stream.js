declare module 'merge-stream' {
        declare type MergedStream = {
add(
source: NodeJS.ReadableStream | $ReadOnlyArray<NodeJS.ReadableStream>): MergedStream,
isEmpty(): boolean
} & NodeJS.ReadWriteStream

	declare function merge<T: NodeJS.ReadableStream>(
...streams: Array<T | $ReadOnlyArray<T>>): MergedStream

	declare module.exports: typeof merge

    }
