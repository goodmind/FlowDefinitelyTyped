declare module 'duplexer3' {
        import typeof * as stream from 'stream';

	declare module.exports: typeof duplexer3

	declare function duplexer3(
writableStream: NodeJS.WritableStream,
readableStream: NodeJS.ReadableStream): stream.Duplex

	declare function duplexer3(
options: duplexer3$duplexer3$Options,
writableStream: NodeJS.WritableStream,
readableStream: NodeJS.ReadableStream): stream.Duplex

	declare type duplexer3$Options = {
bubbleErrors?: boolean
} & stream.DuplexOptions

    }
