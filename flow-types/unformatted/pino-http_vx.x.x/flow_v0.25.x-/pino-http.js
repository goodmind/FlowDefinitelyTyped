declare module 'pino-http' {
        import type {
          IncomingMessage,ServerResponse
        } from 'http';

	import type {
          DestinationStream,Level,Logger,LoggerOptions
        } from 'pino';

	declare module.exports: typeof PinoHttp

	declare function PinoHttp(
opts?: PinoHttp$PinoHttp$Options,
stream?: DestinationStream): PinoHttp$PinoHttp$HttpLogger

	declare function PinoHttp(stream?: DestinationStream): PinoHttp$PinoHttp$HttpLogger

	declare type PinoHttp$HttpLogger = (req: IncomingMessage, res: ServerResponse) => void;

declare type PinoHttp$Options = {
logger?: Logger,
genReqId?: PinoHttp$GenReqId,
useLevel?: Level,
stream?: DestinationStream
} & LoggerOptions


declare interface PinoHttp$GenReqId {
(req: IncomingMessage): number | string | {[key: string]: any}
} 
	declare module 'http' {
        declare interface IncomingMessage {
log: Logger
} 
    }

    }
