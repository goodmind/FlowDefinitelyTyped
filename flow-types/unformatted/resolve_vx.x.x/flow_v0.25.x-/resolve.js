declare module 'resolve' {
        declare interface PackageMeta {
name: string,
version: string,
[key: string]: any
} 
	
/**
 * Callback invoked when resolving asynchronously
 * @param error
 * @param resolved
 * Absolute path to resolved identifier
 */
declare type resolveCallback = (err: Error | null, resolved?: string, pkg?: PackageMeta) => void;
	
/**
 * Callback invoked when checking if a file exists
 * @param error
 * @param isFile
 * If the given file exists
 */
declare type isFileCallback = (err: Error | null, isFile?: boolean) => void;
	
/**
 * Callback invoked when reading a file
 * @param error
 * @param isFile
 * If the given file exists
 */
declare type readFileCallback = (err: Error | null, file?: Buffer) => void;
	
/**
 * Asynchronously resolve the module path string id into cb(err, res [, pkg]), where pkg (if defined) is the data from package.json
 * @param id
 * Identifier to resolve
 * @param callback
 */
declare function resolve(id: string, cb: resolveCallback): void

	
/**
 * Asynchronously resolve the module path string id into cb(err, res [, pkg]), where pkg (if defined) is the data from package.json
 * @param id
 * Identifier to resolve
 * @param options
 * Options to use for resolving, optional.
 * @param callback
 */
declare function resolve(id: string, opts: resolve$resolve$AsyncOpts, cb: resolveCallback): void

	
/**
 * Synchronously resolve the module path string id, returning the result and throwing an error when id can't be resolved.
 * @param id
 * Identifier to resolve
 * @param options
 * Options to use for resolving, optional.
 */
declare function resolveSync(id: string, opts?: resolve$resolve$SyncOpts): string

	
/**
 * Return whether a package is in core
 */
declare function resolveIsCore(id: string): boolean | void

	
      declare var npm$namespace$resolve: {
        
        sync: typeof resolve$sync,
isCore: typeof resolve$isCore,
      }
declare interface resolve$Opts {

/**
 * directory to begin resolving from (defaults to __dirname)
 */
basedir?: string,

/**
 * package.json data applicable to the module being loaded
 */
package?: any,

/**
 * array of file extensions to search in order (defaults to ['.js'])
 */
extensions?: string | $ReadOnlyArray<string>,

/**
 * transform the parsed package.json contents before looking at the "main" field
 */
packageFilter?: (pkg: any, pkgfile: string) => any,

/**
 * transform a path within a package
 */
pathFilter?: (pkg: any, path: string, relativePath: string) => string,

/**
 * require.paths array to use if nothing is found on the normal node_modules recursive walk (probably don't use this)
 */
paths?: string | $ReadOnlyArray<string>,

/**
 * directory (or directories) in which to recursively look for modules. (default to 'node_modules')
 */
moduleDirectory?: string | $ReadOnlyArray<string>,

/**
 * if true, doesn't resolve `basedir` to real path before resolving.
 * This is the way Node resolves dependencies when executed with the --preserve-symlinks flag.
 * 
 * Note: this property is currently true by default but it will be changed to false in the next major version because Node's resolution
 * algorithm does not preserve symlinks by default.
 */
preserveSymlinks?: boolean
} 

export type resolve$AsyncOpts = {

/**
 * how to read files asynchronously (defaults to fs.readFile)
 */
readFile?: (file: string, cb: readFileCallback) => void,

/**
 * function to asynchronously test whether a file exists
 */
isFile?: (file: string, cb: isFileCallback) => void
} & resolve$Opts


export type resolve$SyncOpts = {

/**
 * how to read files synchronously (defaults to fs.readFileSync)
 */
readFileSync?: (file: string, charset: string) => string | Buffer,

/**
 * function to synchronously test whether a file exists
 */
isFile?: (file: string) => boolean
} & resolve$Opts


declare export var resolve$sync: typeof resolveSync;

declare export var resolve$isCore: typeof resolveIsCore;
	declare export default typeof resolve

    }
