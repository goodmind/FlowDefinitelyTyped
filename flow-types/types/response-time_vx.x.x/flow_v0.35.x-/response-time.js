declare module 'response-time' {
        declare module.exports: typeof responseTime

	
/**
 * Response time header for node.js
 * Returns middleware that adds a X-Response-Time header to responses.
 */
declare function responseTime(
options?: responseTime$responseTime$ResponseTimeOptions): (
request: http.IncomingMessage,
response: http.ServerResponse,
callback: (err: any) => void) => any

	declare function responseTime(
fn: responseTime$responseTime$ResponseTimeFunction): (
request: http.IncomingMessage,
response: http.ServerResponse,
callback: (err: any) => void) => any

	declare function responseTime(
fn: (request: express.Request, response: express.Response, time: number) => any): express.RequestHandler

	declare export interface responseTime$ResponseTimeOptions {
digits?: number,
header?: string,
suffix?: boolean
} 

declare export interface responseTime$ResponseTimeFunction {
(request: http.IncomingMessage, response: http.ServerResponse, time: number): any
} 
    }
