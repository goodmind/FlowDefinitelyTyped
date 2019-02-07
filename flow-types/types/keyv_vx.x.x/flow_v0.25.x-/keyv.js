declare module "keyv" {
  declare class Keyv<TValue = any> mixins NodeJS.EventEmitter {
    /**
     * @param opts The options object is also passed through to the storage adapter. Check your storage adapter docs for any extra options.
     */
    constructor(opts?: Keyv$Keyv$Options<TValue>): this;

    /**
 * @param uri The connection string URI.

Merged into the options object as options.uri.
 * @param opts The options object is also passed through to the storage adapter. Check your storage adapter docs for any extra options.
 */
    constructor(uri?: string, opts?: Keyv$Keyv$Options<TValue>): this;

    /**
     * Returns the value.
     */
    get(key: string): Promise<TValue | void>;

    /**
     * Set a value.
     *
     * By default keys are persistent. You can set an expiry TTL in milliseconds.
     */
    set(key: string, value: TValue, ttl?: number): Promise<true>;

    /**
     * Deletes an entry.
     *
     * Returns `true` if the key existed, `false` if not.
     */
    delete(key: string): Promise<boolean>;

    /**
     * Delete all entries in the current namespace.
     */
    clear(): Promise<void>;
  }
  declare interface Keyv$Options<TValue> {
    /**
     * Namespace for the current instance.
     */
    namespace?: string;

    /**
     * A custom serialization function.
     */
    serialize?: (data: TValue) => string;

    /**
     * A custom deserialization function.
     */
    deserialize?: (data: string) => TValue;

    /**
     * The connection string URI.
     */
    uri?: string;

    /**
     * The storage adapter instance to be used by Keyv.
     */
    store?: Keyv$Store<TValue>;

    /**
     * Default TTL. Can be overridden by specififying a TTL on `.set()`.
     */
    ttl?: number;

    /**
     * Specify an adapter to use. e.g `'redis'` or `'mongodb'`.
     */
    adapter?:
      | "redis"
      | "mongodb"
      | "mongo"
      | "sqlite"
      | "postgresql"
      | "postgres"
      | "mysql";
    [key: string]: any;
  }

  declare interface Keyv$Store<TValue> {
    get(key: string): TValue | Promise<TValue | void> | void;
    set(key: string, value: TValue, ttl?: number): any;
    delete(key: string): boolean | Promise<boolean>;
    clear(): void | Promise<void>;
  }
  declare module.exports: typeof Keyv;
}
