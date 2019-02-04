declare module 'connect' {
        import typeof * as http from 'http';

	
/**
 * Create a new connect server.
 * @public
 */
declare function createServer(): createServer$createServer$Server

	declare export type createServer$ServerHandle = createServer$HandleFunction | http.createServer$Server;

declare type createServer$NextFunction = (err?: any) => void;

declare export type createServer$SimpleHandleFunction = (req: http.IncomingMessage, res: http.ServerResponse) => void;

declare export type createServer$NextHandleFunction = (
req: http.IncomingMessage,
res: http.ServerResponse,
next: createServer$NextFunction) => void;

declare export type createServer$ErrorHandleFunction = (
err: any,
req: http.IncomingMessage,
res: http.ServerResponse,
next: createServer$NextFunction) => void;

declare export type createServer$HandleFunction = createServer$SimpleHandleFunction | createServer$NextHandleFunction | createServer$ErrorHandleFunction;

declare export interface createServer$ServerStackItem {
route: string,
handle: createServer$ServerHandle
} 

declare export type createServer$Server = {
(req: http.IncomingMessage, res: http.ServerResponse, next?: Function): void,
route: string,
stack: createServer$ServerStackItem[],

/**
 * Utilize the given middleware `handle` to the given `route`,
 * defaulting to _/_. This "route" is the mount-point for the
 * middleware, when given a value other than _/_ the middleware
 * is only effective when that segment is present in the request's
 * pathname.
 * 
 * For example if we were to mount a function at _/admin_, it would
 * be invoked on _/admin_, and _/admin/settings_, however it would
 * not be invoked for _/_, or _/posts_.
 * @public
 */
use(fn: createServer$HandleFunction): createServer$Server,
use(route: string, fn: createServer$HandleFunction): createServer$Server,

/**
 * Handle server requests, punting them down
 * the middleware stack.
 * @private
 */
handle(req: http.IncomingMessage, res: http.ServerResponse, next: Function): void,

/**
 * Listen for connections.
 * 
 * This method takes the same arguments
 * as node's `http.Server#listen()`.
 * 
 * HTTP and HTTPS:
 * 
 * If you run your application both as HTTP
 * and HTTPS you may wrap them individually,
 * since your Connect "server" is really just
 * a JavaScript `Function`.
 * 
 *       var connect = require('connect')
 *         , http = require('http')
 *         , https = require('https');
 * 
 *       var app = connect();
 * 
 *       http.createServer(app).listen(80);
 *       https.createServer(options, app).listen(443);
 * @api public
 */
listen(
port: number,
hostname?: string,
backlog?: number,
callback?: Function): http.createServer$Server,
listen(port: number, hostname?: string, callback?: Function): http.createServer$Server,
listen(path: string, callback?: Function): http.createServer$Server,
listen(handle: any, listeningListener?: Function): http.createServer$Server
} & NodeJS.EventEmitter

	declare module.exports: typeof createServer

    }
