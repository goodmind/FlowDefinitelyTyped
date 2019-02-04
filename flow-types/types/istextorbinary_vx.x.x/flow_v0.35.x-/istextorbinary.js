declare module 'istextorbinary' {
        
/**
 * Is Text (Synchronous)
 * Determine whether or not a file is a text or binary file.
 * Determined by extension checks first, then if unknown extension, will fallback on encoding detection.
 * We do that as encoding detection cannot guarantee everything, especially for chars between utf8 and utf16.
 * We use the extensions from https://github.com/bevry/textextensions and https://github.com/bevry/binaryextensions
 * @param filename the filename for the file/buffer if available
 * @param buffer the buffer for the file if available
 */
declare export function isTextSync(filename: string, buffer?: Buffer): boolean

	declare export function isTextSync(filename: void, buffer: Buffer): boolean

	
/**
 * Is Text
 * Uses `isTextSync` behind the scenes.
 * @param filename forwarded to `isTextSync`
 * @param buffer forwarded to `isTextSync`
 * @param next accepts arguments: (error: Error, result: Boolean)
 */
declare export function isText(
filename: string,
buffer: Buffer | void,
next: (err: null, result: boolean) => void): void

	declare export function isText(
filename: void,
buffer: Buffer,
next: (err: null, result: boolean) => void): void

	
/**
 * Is Binary (Synchronous)
 * Uses `isTextSync` behind the scenes.
 * @param filename forwarded to `isTextSync`
 * @param buffer forwarded to `isTextSync`
 */
declare export function isBinarySync(filename: string, buffer?: Buffer): boolean

	declare export function isBinarySync(filename: void, buffer: Buffer): boolean

	
/**
 * Is Binary
 * Uses `isText` behind the scenes.
 * @param filename forwarded to `isText`
 * @param buffer forwarded to `isText`
 * @param next accepts arguments: (error: Error, result: Boolean)
 */
declare export function isBinary(
filename: string,
buffer: Buffer | void,
next: (err: null, result: boolean) => void): void

	declare export function isBinary(
filename: void,
buffer: Buffer,
next: (err: null, result: boolean) => void): void

	
/**
 * Get the encoding of a buffer.
 * We fetch a bunch chars from the start, middle and end of the buffer.
 * We check all three, as doing only start was not enough, and doing only middle was not enough, so better safe than sorry.
 * @param buffer
 * @param opts
 * @param
 * @param
 * @returns either an Error instance if something went wrong, or if successful "utf8" or "binary"
 */
declare export function getEncodingSync(buffer: Buffer, opts?: Options): "utf8" | "binary"

	
/**
 * Get the encoding of a buffer
 * Uses `getEncodingSync` behind the scenes.
 * @param buffer forwarded to `getEncodingSync`
 * @param opts forwarded to `getEncodingSync`
 * @param next accepts arguments: (error: Error, result: Boolean)
 */
declare export function getEncoding(
buffer: Buffer,
opts: Options | void,
next: (err: null, result: "utf8" | "binary") => void): void

	declare export interface Options {
chunkLength?: number,
chunkBegin?: number
} 
    }
