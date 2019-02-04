declare module 'pino-multi-stream' {
        import type {
          PinoLoggerOptions,PinoLogger,PinoLevel,pinoStdSerializers
        } from 'pino';

	
      declare var npm$namespace$pinoms: {
        multistream: typeof pinoms$multistream,
        stdSerializers: typeof pinoms$stdSerializers,
      }
declare type pinoms$Streams = Array<{
stream: NodeJS.WritableStream,
level?: pinoms$Level
}>;

declare type pinoms$LoggerOptions = {
streams?: pinoms$Streams
} & PinoLoggerOptions


declare var pinoms$stdSerializers: typeof pinoStdSerializers;

declare function pinoms$multistream(streams: pinoms$Streams): stream.Writable


declare type pinoms$Level = PinoLevel;

declare type pinoms$Logger = PinoLogger;
	declare function pinoms(options: pinoms$pinoms$LoggerOptions): pinoms$pinoms$Logger

	declare module.exports: typeof pinoms

    }
