declare module 'gulp-cache' {
        import type {
          Transform
        } from 'stream';

	import type {
          PluginError
        } from 'gulp-util';

	declare type gc$Predicate<T> = (arg: T) => boolean;

declare interface gc$IGulpCacheOptions {

/**
 * The cache instance to use for caching.
 */
fileCache?: gc$IGulpCache,

/**
 * The name of the bucket which stores the cached objects.
 * Default value = 'default'
 */
name?: string,

/**
 * The hash generator to use.
 */
key?: (
file: File,
callback?: (err: any, result: string) => void) => string | Promise<string>,

/**
 * Value representing the success of a task.
 */
success?: boolean | gc$Predicate<any>,

/**
 * Content that is to be cached.
 */
value?: (result: any) => Object | Promise<Object> | string
} 

declare interface gc$ICacheOptions {

/**
 * Specifies the name of the directory where the cache
 * is to be stored.
 */
cacheDirName: string
} 

declare interface gc$IGulpCacheStatic {

/**
 * Caches the result of a task.
 * @param task The task whose result is to be cached.
 */
(task: NodeJS.ReadWriteStream): Transform,

/**
 * Caches the result of a task.
 * @param task Task whose result is to be cached.
 * @param options Override values for available settings.
 */
(task: NodeJS.ReadWriteStream, options: gc$IGulpCacheOptions): Transform,
clear(options: gc$IGulpCacheOptions): Transform,

/**
 * Represents a cache store.
 */
Cache: gc$IGulpCache,

/**
 * Purges the cache.
 * @param err PluginError instance in case of a plugin error.
If callback is not specified an exception of type
'PluginError' is thrown.
 */
clearAll(callback?: (err: PluginError) => void): void
} 


/**
 * Represents a cach store.
 */
declare interface gc$IGulpCache {
new (options: gc$ICacheOptions): any
} 
	declare var _: gc$gc$IGulpCacheStatic;
	declare module.exports: typeof _

    }
