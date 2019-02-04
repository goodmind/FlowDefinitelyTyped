declare module 'errorhandler' {
        import typeof * as express from 'express';

	declare function errorHandler(options?: errorHandler$errorHandler$Options): express.ErrorRequestHandler

	declare interface errorHandler$LoggingCallback {
(err: Error, str: string, req: express.Request, res: express.Response): void
} 

declare interface errorHandler$Options {

/**
 * Defaults to true.
 * 
 * Possible values:
 *    true       : Log errors using console.error(str).
 *    false      : Only send the error back in the response.
 *    A function : pass the error to a function for handling.
 */
log: boolean | errorHandler$LoggingCallback
} 
	declare module.exports: typeof errorHandler

    }
