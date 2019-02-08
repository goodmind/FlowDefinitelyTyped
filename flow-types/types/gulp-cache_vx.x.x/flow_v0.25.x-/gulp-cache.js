declare module "gulp-cache" {
  import type { DS$Transform } from "stream";

  import type { PluginError } from "gulp-util";

  declare type gc$Predicate<T> = (arg: T) => boolean;

  declare interface gc$IGulpCacheOptions {
    /**
     * The cache instance to use for caching.
     */
    fileCache?: gc$IGulpCache;

    /**
     * The name of the bucket which stores the cached objects.
     * Default value = 'default'
     */
    skin$name?: string;

    /**
     * The hash generator to use.
     */
    key?: (
      dialog$file: files$File,
      braintree$callback?: (err: any, result: string) => void
    ) => string | promise$Promise<string>;

    /**
     * Value representing the success of a task.
     */
    success?: boolean | gc$Predicate<any>;

    /**
     * Content that is to be cached.
     */
    value?: (
      result: any
    ) => core$Object | promise$Promise<core$Object> | string;
  }

  declare interface gc$ICacheOptions {
    /**
     * Specifies the name of the directory where the cache
     * is to be stored.
     */
    cacheDirName: string;
  }

  declare interface gc$IGulpCacheStatic {
    /**
     * Caches the result of a task.
     * @param task The task whose result is to be cached.
     */
    (esri$task: NodeJS$ReadWriteStream): DS$Transform;

    /**
     * Caches the result of a task.
     * @param task Task whose result is to be cached.
     * @param options Override values for available settings.
     */
    (
      esri$task: NodeJS$ReadWriteStream,
      notification$options: gc$IGulpCacheOptions
    ): DS$Transform;
    clear(notification$options: gc$IGulpCacheOptions): DS$Transform;

    /**
     * Represents a cache store.
     */
    store$Cache: gc$IGulpCache;

    /**
 * Purges the cache.
 * @param err PluginError instance in case of a plugin error.
If callback is not specified an exception of type
'PluginError' is thrown.
 */
    clearAll(braintree$callback?: (err: PluginError) => void): void;
  }

  /**
   * Represents a cach store.
   */
  declare interface gc$IGulpCache {
    new(notification$options: gc$ICacheOptions): any;
  }
  declare var core$_: gc$gc$IGulpCacheStatic;
  declare module.exports: typeof core$_;
}
