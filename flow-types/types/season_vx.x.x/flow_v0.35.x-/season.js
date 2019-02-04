declare module 'season' {
        declare export interface ParseOptions {
allowDuplicateKeys?: boolean
} 
	
/**
 * Set the cache directory to use for storing compiled CSON files.
 */
declare export function setCacheDir(cacheDirectory: string): void

	
/**
 * Convert the object to a CSON string.
 */
declare export function stringify(object: any): string

	
/**
 * Read the CSON or JSON object at the given path and return it to the callback once it is read and parsed.
 */
declare export function readFile(objectPath: string, callback: (err: Error | null, object: any) => void): void

	declare export function readFile(
objectPath: string,
options: ParseOptions,
callback: (err: Error | null, object: any) => void): void

	
/**
 * Synchronous version of `CSON.readFile(objectPath, callback)`.
 */
declare export function readFileSync(objectPath: string, options?: ParseOptions): any

	
/**
 * Write the object to the given path as either JSON or CSON depending on the path's extension.
 */
declare export function writeFile(objectPath: string, object: any, callback: (err: Error | null) => void): void

	
/**
 * Synchronous version of `CSON.writeFile(objectPath, object, callback)`
 */
declare export function writeFileSync(objectPath: string, object: any): void

	
/**
 * Is the given path a valid object path? Returns true if the path has a .json or .cson file extension, false otherwise.
 */
declare export function isObjectPath(objectPath: string): boolean

	
/**
 * Resolve the path to an existent file that has a .json or .cson extension. Returns the path to an existent CSON or JSON file or null if none found.
 */
declare export function resolve(objectPath: string): string | null

    }
