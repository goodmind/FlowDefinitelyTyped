declare module 'express-mung' {
        import type {
          Request,Response,RequestHandler
        } from 'express';

	declare type Transform = (body: {}, request: Request, response: Response) => any;
	declare type TransformAsync = (body: {}, request: Request, response: Response) => PromiseLike<any>;
	declare type TransformHeader = (request: Request, response: Response) => any;
	declare type TransformHeaderAsync = (request: Request, response: Response) => PromiseLike<any>;
	declare type TransformChunk = (
chunk: string | Buffer,
encoding: string | null,
request: Request,
response: Response) => string | Buffer;
	declare type Options = {
mungError: boolean
};
	
/**
 * Transform the JSON body of the response.
 * @param {Transform} fn A transformation function.
 * @param {Options} options json options.
 * @return {RequestHandler} Middleware to transform the body
 */
declare export function json(fn: Transform, options?: Options): RequestHandler

	
/**
 * Asynchronously transform the JSON body of the response.
 * @param {TransformAsync} fn A transformation function.
 * @param {Options} options jsonAsync options.
 * @return {RequestHandler} Middleware to transform the body
 */
declare export function jsonAsync(fn: TransformAsync, options?: Options): RequestHandler

	
/**
 * Transform the HTTP headers of the response.
 * @param {TransformHeader} fn A transformation function.
 * @return {RequestHandler} Middleware to transform the headers
 */
declare export function headers(fn: TransformHeader): RequestHandler

	
/**
 * Asynchronously transform the HTTP headers of the response.
 * @param {TransformHeaderAsync} fn A transformation function.
 * @return {RequestHandler} Middleware to transform the headers
 */
declare export function headersAsync(fn: TransformHeaderAsync): RequestHandler

	
/**
 * Transform chunks as they are written to the response
 * @param {TransformChunk} fn A transformation function.
 * @param {Options} options Write options.
 * @return {RequestHandler} Middleware to transform chunks.
 */
declare export function write(fn: TransformChunk, options?: Options): RequestHandler

    }
