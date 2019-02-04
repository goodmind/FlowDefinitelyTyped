declare module 'from2' {
        import typeof * as stream from 'stream';

	declare module.exports: typeof from2

	declare function from2(read: from2$from2$ReadInput): NodeJS.ReadableStream

	declare function from2(
opts: from2$from2$ObjectModeOptions,
read: from2$from2$ReadObjectInput): NodeJS.ReadableStream

	declare function from2(opts: from2$from2$Options, read: from2$from2$ReadInput): NodeJS.ReadableStream

	
      declare var npm$namespace$from2: {
        obj: typeof from2$obj,
ctor: typeof from2$ctor,
        
      }
declare function from2$obj(read: from2$ReadObjectInput): NodeJS.ReadableStream


declare function from2$obj(
opts: {
objectMode?: true
} & stream.ReadableOptions,
read: from2$ReadObjectInput): NodeJS.ReadableStream


declare function from2$ctor(opts?: from2$Options): from2$From2Ctor<from2$ReadInput>


declare function from2$ctor(opts: from2$ObjectModeOptions): from2$From2Ctor<from2$ReadObjectInput>


declare type from2$ObjectModeOptions = {
objectMode: true
} & stream.ReadableOptions;

declare type from2$Options = {
objectMode?: false
} & stream.ReadableOptions;

declare type from2$From2Ctor<R: from2$ReadInput | from2$ReadObjectInput> = (read: R) => NodeJS.ReadableStream;

declare type from2$ReadObjectInput = from2$ReadCallback<from2$NextObjectCallback> | any[];

declare type from2$ReadInput = from2$ReadCallback<from2$NextCallback> | from2$Chunk[];

declare type from2$ReadCallback<N: from2$NextCallback | from2$NextObjectCallback> = (size: number, next: N) => void;

declare type from2$NextCallback = (err: any | void, chunk: from2$Chunk) => void;

declare type from2$NextObjectCallback = (err: any | void, chunk: any) => void;

declare type from2$Chunk = string | Buffer | Uint8Array | null;
    }
