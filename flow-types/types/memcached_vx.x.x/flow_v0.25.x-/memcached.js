declare module "memcached" {
  declare module.exports: typeof Memcached;

  declare class Memcached mixins events.EventEmitter {
    static config: Memcached$Memcached$options;

    /**
     * Connect to a single Memcached server or cluster
     * @param location Server locations
     * @param options options
     */
    constructor(
      location: Memcached$Memcached$Location,
      Memcached$options?: Memcached$Memcached$options
    ): this;

    /**
     * Touches the given key.
     * @param key The key
     * @param lifetime After how long should the key expire measured in seconds
     */
    touch(key: string, lifetime: number, cb: (err: any) => void): void;

    /**
     * Get the value for the given key.
     * @param key The key
     */
    get(key: string, cb: (err: any, data: any) => void): void;

    /**
     * Get the value and the CAS id.
     * @param key The key
     */
    gets(
      key: string,
      cb: (
        err: any,
        data: {
          [key: string]: any,
          cas: string
        }
      ) => void
    ): void;

    /**
     * Retrieves a bunch of values from multiple keys.
     * @param keys all the keys that needs to be fetched
     */
    getMulti(
      keys: string[],
      cb: (
        err: any,
        data: {
          [key: string]: any
        }
      ) => void
    ): void;

    /**
     * Stores a new value in Memcached.
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    set(
      key: string,
      value: any,
      lifetime: number,
      cb: (err: any, result: boolean) => void
    ): void;

    /**
     * Replaces the value in memcached.
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    replace(
      key: string,
      value: any,
      lifetime: number,
      cb: (err: any, result: boolean) => void
    ): void;

    /**
     * Add the value, only if it's not in memcached already.
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    add(
      key: string,
      value: any,
      lifetime: number,
      cb: (err: any, result: boolean) => void
    ): void;

    /**
     * Add the value, only if it matches the given CAS value.
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    cas(
      key: string,
      value: any,
      cas: string,
      lifetime: number,
      cb: (err: any, result: boolean) => void
    ): void;

    /**
     * Add the given value string to the value of an existing item.
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    append(
      key: string,
      value: any,
      cb: (err: any, result: boolean) => void
    ): void;

    /**
     * Add the given value string to the value of an existing item.
     * @param key The key
     * @param value Either a buffer, JSON, number or string that you want to store.
     */
    prepend(
      key: string,
      value: any,
      cb: (err: any, result: boolean) => void
    ): void;

    /**
     * Increment a given key.
     * @param key The key
     * @param amount The increment
     */
    incr(
      key: string,
      amount: number,
      cb: (err: any, result: boolean | number) => void
    ): void;

    /**
     * Decrement a given key.
     * @param key The key
     * @param amount The decrement
     */
    decr(
      key: string,
      amount: number,
      cb: (err: any, result: boolean | number) => void
    ): void;

    /**
     * Remove the key from memcached.
     * @param key The key
     */
    del(key: string, cb: (err: any, result: boolean) => void): void;

    /**
     * Retrieves the version number of your server.
     */
    version(
      cb: (err: any, version: Memcached$Memcached$VersionData[]) => void
    ): void;

    /**
     * Retrieves your stats settings.
     */
    settings(
      cb: (err: any, settings: Memcached$Memcached$StatusData[]) => void
    ): void;

    /**
     * Retrieves stats from your memcached server.
     */
    stats(
      cb: (err: any, stats: Memcached$Memcached$StatusData[]) => void
    ): void;

    /**
     * Retrieves stats slabs information.
     */
    slabs(
      cb: (err: any, stats: Memcached$Memcached$StatusData[]) => void
    ): void;

    /**
     * Retrieves stats items information.
     */
    items(
      cb: (err: any, stats: Memcached$Memcached$StatusData[]) => void
    ): void;

    /**
     * Inspect cache, see examples for a detailed explanation.
     */
    cachedump(
      server: string,
      slabid: number,
      number: number,
      cb: (
        err: any,
        cachedump:
          | Memcached$Memcached$CacheDumpData
          | Memcached$Memcached$CacheDumpData[]
      ) => void
    ): void;

    /**
     * Flushes the memcached server.
     */
    flush(cb: (err: any, results: boolean[]) => void): void;

    /**
     * Register event listener
     */
    on(
      event: Memcached$Memcached$EventNames,
      cb: (err: Memcached$Memcached$IssueData) => void
    ): this;

    /**
     * Closes all active memcached connections.
     */
    end(): void;
  }
  declare interface Memcached$IssueData {
    server: string;
    tokens: [string, string];
    messages: string[];
    failures?: number;
    totalFailures?: number;
    totalReconnectsAttempted?: number;
    totalReconnectsSuccess?: number;
    totalReconnectsFailed?: number;
    totalDownTime?: number;
  }

  declare interface Memcached$CommandData {
    start: number;
    execution: number;
    callback(...args: any[]): any;
    type: string;
    command: string;
    validate: Array<[string, (...args: any[]) => any]>;
    cas?: string;
    redundancyEnabled?: boolean;
    key?: string;
    value?: any;
    lifetime?: number;
  }

  declare interface Memcached$StatusData {
    server?: string;
    [key: string]: string | boolean | number | void;
  }

  declare type Memcached$VersionData = {
    version: string,
    major: string,
    minor: string,
    bugfix: string
  } & Memcached$StatusData;

  declare interface Memcached$CacheDumpData {
    key: string;
    b: number;
    s: number;
  }

  /**
   * <ul>
   *      <li><b>issue</b> a issue occurred on a server, we are going to attempt a retry next.</li>
   *      <li><b>failure</b> a server has been marked as failure or dead.</li>
   *      <li><b>reconnecting</b> we are going to attempt to reconnect the to the failed server.</li>
   *      <li><b>reconnect</b> successfully reconnected to the memcached server.</li>
   *      <li><b>remove</b> removing the server from our consistent hashing.</li>
   * </ul>
   */
  declare type Memcached$EventNames =
    | "issue"
    | "failure"
    | "reconnecting"
    | "reconnect"
    | "remove";

  /**
   * Declaration for single server or Memcached cluster location
   *
   * to connect to a single server use
   * "127.0.0.1:11211"
   *
   * to connect to a cluster of Memcached servers use
   * ["127.0.0.1:11211","127.0.0.1:11212"]
   *
   * to connect to servers with weight use
   * {"127.0.0.1:11211": 1,"127.0.0.1:11212": 2}
   */
  declare type Memcached$Location =
    | string
    | string[]
    | {
        [server: string]: number
      };

  declare interface Memcached$options {
    /**
     * 250, the maximum key size allowed.
     */
    maxKeySize?: number;

    /**
     * 2592000, the maximum expiration time of keys (in seconds).
     */
    maxExpiration?: number;

    /**
     * 1048576, the maximum size of a value.
     */
    maxValue?: number;

    /**
     * 10, the maximum size of the connection pool.
     */
    poolSize?: number;

    /**
     * md5, the hashing algorithm used to generate the hashRing values.
     */
    algorithm?: string;

    /**
     * 18000000, the time between reconnection attempts (in milliseconds).
     */
    reconnect?: number;

    /**
     * 5000, the time after which Memcached sends a connection timeout (in milliseconds).
     */
    timeout?: number;

    /**
     * 5, the number of socket allocation retries per request.
     */
    retries?: number;

    /**
     * 5, the number of failed-attempts to a server before it is regarded as 'dead'.
     */
    failures?: number;

    /**
     * 30000, the time between a server failure and an attempt to set it up back in service.
     */
    retry?: number;

    /**
     * false, if true, authorizes the automatic removal of dead servers from the pool.
     */
    remove?: boolean;

    /**
     * undefined, an array of server_locations to replace servers that fail and that are removed from the consistent hashing scheme.
     */
    failOverServers?: string | string[];

    /**
     * true, whether to use md5 as hashing scheme when keys exceed maxKeySize.
     */
    keyCompression?: boolean;

    /**
     * 5000, the idle timeout for the connections.
     */
    idle?: number;

    /**
     * '', sentinel to prepend to all memcache keys for namespacing the entries.
     */
    namespace?: string;
  }
}
