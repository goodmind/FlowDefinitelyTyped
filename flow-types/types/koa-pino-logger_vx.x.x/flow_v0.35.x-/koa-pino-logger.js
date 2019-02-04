declare module 'koa-pino-logger' {
        import type {
          Middleware
        } from 'koa';

	import type {
          DestinationStream,LoggerOptions,Logger,Level
        } from 'pino';

	import type {
          Options
        } from 'pino-http';

	import typeof * as stream from 'stream';

	import typeof * as http from 'http';

	declare module.exports: typeof logger

	declare function logger(opts?: Options, stream?: DestinationStream): Middleware

	declare function logger(stream?: DestinationStream): Middleware

	declare module 'koa' {
        declare interface Context {
log: Logger
} 
    }

    }
