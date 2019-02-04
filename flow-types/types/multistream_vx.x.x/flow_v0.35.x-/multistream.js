declare module 'multistream' {
        import type {
          Stream
        } from 'stream';

	declare function multistream(streams: multistream$multistream$Streams): NodeJS.ReadableStream

	declare interface FactoryStreamCallback {
(err: Error | null, stream: null): any,
(err: null, stream: NodeJS.ReadableStream): any
} 
	
      declare var npm$namespace$multistream: {
        obj: typeof multistream$obj,
        
      }
declare type multistream$LazyStream = () => Stream;

declare type multistream$FactoryStream = (cb: FactoryStreamCallback) => void;

declare type multistream$Streams = Array<multistream$LazyStream | NodeJS.ReadableStream> | multistream$FactoryStream;

declare function multistream$obj(streams: multistream$Streams): NodeJS.ReadableStream

	declare module.exports: typeof multistream

    }
