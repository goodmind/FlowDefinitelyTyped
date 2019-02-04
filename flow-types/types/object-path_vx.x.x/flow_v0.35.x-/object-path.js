declare module 'object-path' {
        declare var objectPath: objectPath$objectPath$ObjectPathStatic & {
withInheritedProps: objectPath$objectPath$ObjectPathStatic,
create(
options?: objectPath$objectPath$Options): objectPath$objectPath$ObjectPathStatic
};
	declare interface objectPath$Options {
includeInheritedProps?: boolean
} 

declare type objectPath$Path = Array<number | string> | number | string;

declare interface objectPath$ObjectPathStatic {

/**
 * Binds an object
 */
(object: T): objectPath$ObjectPathBound<T>,

/**
 * Deletes a member from object or array
 */
del(object: {[key: string]: any}, path: objectPath$Path): {
[key: string]: any
},

/**
 * Tests path existence
 */
has(object: {[key: string]: any}, path: objectPath$Path): boolean,

/**
 * Get a path from an object
 */
get(object: {[key: string]: any}, path: objectPath$Path): any,
get<TResult>(
object: {[key: string]: any},
path: objectPath$Path,
defaultValue: TResult): TResult,

/**
 * Set a path to a value
 * @return Any existing value on the path if any
 */
set<TResult>(
object: {[key: string]: any},
path: objectPath$Path,
value: TResult,
doNotReplace?: boolean): TResult | void,

/**
 * Create (if path isn't an array) and push the value to it. Can push unlimited number of values
 */
push(object: {[key: string]: any}, path: objectPath$Path, ...items: any[]): void,

/**
 * Get the first non undefined property
 */
coalesce<TResult>(
object: {[key: string]: any},
paths: objectPath$Path | objectPath$Path[],
defaultValue: TResult): TResult,
coalesce<TResult>(
object: {[key: string]: any},
paths: objectPath$Path | objectPath$Path[],
defaultValue?: TResult): TResult | void,

/**
 * Empty a path. Arrays are set to length 0, objects have all elements deleted, strings
 * are set to empty, numbers to 0, everything else is set to null
 */
empty(object: {[key: string]: any}, path: objectPath$Path): any,

/**
 * Set a value if it doesn't exist, do nothing if it does
 */
ensureExists<TResult>(
object: {[key: string]: any},
path: objectPath$Path,
defaultValue: TResult): TResult,
ensureExists<TResult>(
object: {[key: string]: any},
path: objectPath$Path,
defaultValue?: TResult): TResult | void,

/**
 * Insert an item in an array path
 */
insert(
object: {[key: string]: any},
path: objectPath$Path,
value: any,
at?: number): void
} 

declare interface objectPath$ObjectPathBound<T: {[key: string]: any}> {

/**
 * @see objectPath.del
 */
del(path: objectPath$Path): {
[key: string]: any
},

/**
 * @see objectPath.has
 */
has(path: objectPath$Path): boolean,

/**
 * @see objectPath.get
 */
get(path: objectPath$Path): any,
get<TResult>(path: objectPath$Path, defaultValue: TResult): TResult,

/**
 * @see objectPath.set
 */
set<TResult>(
path: objectPath$Path,
value: TResult,
doNotReplace?: boolean): TResult | void,

/**
 * @see objectPath.push
 */
push(path: objectPath$Path, ...items: any[]): void,

/**
 * @see objectPath.coalesce
 */
coalesce<TResult>(
paths: objectPath$Path | objectPath$Path[],
defaultValue: TResult): TResult,
coalesce<TResult>(
paths: objectPath$Path | objectPath$Path[],
defaultValue?: TResult): TResult | void,

/**
 * @see objectPath.empty
 */
empty(path: objectPath$Path): any,

/**
 * @see objectPath.ensureExists
 */
ensureExists<TResult>(path: objectPath$Path, defaultValue: TResult): TResult,
ensureExists<TResult>(path: objectPath$Path, defaultValue?: TResult): TResult | void,

/**
 * @see objectPath.insert
 */
insert(path: objectPath$Path, value: any, at?: number): void
} 
	declare module.exports: typeof objectPath

    }
