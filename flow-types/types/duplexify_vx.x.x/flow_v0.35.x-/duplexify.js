declare module 'duplexify' {
        import typeof * as stream from 'stream';

	declare module.exports: typeof duplexify

	declare interface DuplexifyConstructor {
(writable?: stream.Writable, readable?: stream.Readable, streamOptions?: stream.DuplexOptions): duplexify$duplexify$Duplexify,
new (
writable?: stream.Writable,
readable?: stream.Readable,
streamOptions?: stream.DuplexOptions): duplexify$duplexify$Duplexify,
obj(
writable?: stream.Writable,
readable?: stream.Readable,
streamOptions?: stream.DuplexOptions): duplexify$duplexify$Duplexify
} 
	declare var duplexify: DuplexifyConstructor;
	declare type duplexify$Duplexify = {
cork(): void,
uncork(): void,
setWritable(writable: stream.Writable): void,
setReadable(readable: stream.Readable): void
} & stream.Duplex

    }
