declare module 'request-stats' {
        import type {
          HttpServer,IncomingMessage,ServerResponse,IncomingHttpHeaders,OutgoingHttpHeaders
        } from 'http';

	import type {
          HttpsServer
        } from 'https';

	import type {
          EventEmitter
        } from 'events';

	declare module.exports: typeof requestStats

	
/**
 * Attach request-stats to a HTTP server.
 * If no callback is provided, you can later attach a listener on the "complete" event.
 * @param server Initialize request-stats with an instance a HTTP server.
 * @param statsCallback A callback which will be called for each completed HTTP request with a stats object.
 */
declare function requestStats(
server: HttpServer | HttpsServer,
statsCallback?: requestStats$requestStats$StatsCallback): requestStats$requestStats$StatsEmitter

	
/**
 * Attach request-stats to a single HTTP request.
 * If no callback is provided, you can later attach a listener on the "complete" event.
 * @param req An instance of a HTTP request.
 * @param res An instance of a HTTP response.
 * @param statsCallback A callback which will be called with a stats object when the HTTP request completes.
 */
declare function requestStats(
req: IncomingMessage,
res: ServerResponse,
statsCallback?: requestStats$requestStats$StatsCallback): requestStats$requestStats$StatsEmitter

	declare type requestStats$StatsCallback = (stats: requestStats$Stats) => void;

declare interface requestStats$Stats {

/**
 * `true` if the connection was closed correctly and `false` otherwise
 */
ok: boolean,

/**
 * The milliseconds it took to serve the request
 */
time: number,
req: {

/**
 * Number of bytes sent by the client
 */
bytes: number,

/**
 * The headers sent by the client
 */
headers: IncomingHttpHeaders,

/**
 * The HTTP method used by the client
 */
method: string,

/**
 * The path part of the request URL
 */
path: string,

/**
 * The remote ip
 */
ip: string,

/**
 * The original `http.IncomingMessage` object
 */
raw: IncomingMessage
},
res: {

/**
 * Number of bytes sent back to the client
 */
bytes: number,

/**
 * The headers sent back to the client
 */
headers: OutgoingHttpHeaders,

/**
 * The HTTP status code returned to the client
 */
status: number,

/**
 * The original `http.ServerResponse` object
 */
raw: ServerResponse
}
} 

declare interface requestStats$Request {

/**
 * Returns a progress object if called while a HTTP request is in progress.
 * If called multiple times, the returned progress object will contain the delta of the previous
 * call to `.progress()`.
 */
progress(): requestStats$Progress
} 

declare interface requestStats$Progress {

/**
 * `false` if the request is still in progress
 */
completed: boolean,

/**
 * The total time the reuqest have been in progress
 */
time: number,

/**
 * The time since previous call to `.progress()`
 */
timeDelta: number,
req: {

/**
 * Total bytes received
 */
bytes: number,

/**
 * Bytes received since previous call to `.progress()`
 */
bytesDelta: number,

/**
 * Bytes per second calculated since previous call to `.progress()`
 */
speed: number,

/**
 * If the request contains a Content-Size header
 */
bytesLeft: number,

/**
 * If the request contains a Content-Size header
 */
timeLeft: number
},
res: {

/**
 * Total bytes send back to the client
 */
bytes: number,

/**
 * Bytes sent back to the client since previous call to `.progress()`
 */
bytesDelta: number,

/**
 * Bytes per second calculated since previous call to `.progress()`
 */
speed: number
}
} 

declare type requestStats$StatsEmitter = {
addListener(event: "complete", listener: requestStats$StatsCallback): this,
addListener(event: "request", listener: (req: requestStats$Request) => void): this,
on(event: "complete", listener: requestStats$StatsCallback): this,
on(event: "request", listener: (req: requestStats$Request) => void): this,
once(event: "complete", listener: requestStats$StatsCallback): this,
once(event: "request", listener: (req: requestStats$Request) => void): this,
removeListener(event: "complete", listener: requestStats$StatsCallback): this,
removeListener(event: "request", listener: (req: requestStats$Request) => void): this,
off(event: "complete", listener: requestStats$StatsCallback): this,
off(event: "request", listener: (req: requestStats$Request) => void): this,
removeAllListeners(event?: "complete" | "request"): this,
listeners(event: "complete"): requestStats$StatsCallback[],
listeners(event: "request"): Array<(req: requestStats$Request) => void>,
rawListeners(event: "complete"): requestStats$StatsCallback[],
rawListeners(event: "request"): Array<(req: requestStats$Request) => void>,
emit(event: "complete", stats: requestStats$Stats): boolean,
emit(event: "request", req: requestStats$Request): boolean,
listenerCount(type: "complete" | "request"): number,
prependListener(event: "complete", listener: requestStats$StatsCallback): this,
prependListener(event: "request", listener: (req: requestStats$Request) => void): this,
prependOnceListener(event: "complete", listener: requestStats$StatsCallback): this,
prependOnceListener(event: "request", listener: (req: requestStats$Request) => void): this,
eventNames(): Array<"complete" | "request">
} & EventEmitter

    }
