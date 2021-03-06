declare module "gulp-cached" {
  declare interface ICacheStore {
    [name: string]: {};
  }
  declare interface IOptions {
    /**
     * Uses md5 instead of storing the whole file contents.
     * @default false
     */
    optimizeMemory?: boolean;
  }
  declare interface IGulpCached {
    /**
     * Creates a new cache hash or uses an existing one.
     */
    (name: string, options?: IOptions): NodeJS.ReadWriteStream;

    /**
     * Cache store.
     */
    caches: ICacheStore;
  }
  declare var cached: IGulpCached;
  declare module.exports: typeof cached;
}
