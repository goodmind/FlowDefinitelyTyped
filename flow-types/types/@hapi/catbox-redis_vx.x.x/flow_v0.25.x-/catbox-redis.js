declare module "@hapi/catbox-redis" {
  import type { Redis } from "ioredis";

  import type { EnginePrototype, ClientOptions, Client } from "@hapi/catbox";

  declare type CatboxRedis$CatboxRedisOptions = {
    /**
     * Raw client.
     */
    client?: Redis,

    /**
     * the Redis server URL (if url is provided, host, port, and socket are ignored)
     */
    url?: string,

    /**
     * the Redis server hostname.
     * Defaults to '127.0.0.1'.
     */
    host?: string,

    /**
     * the Redis server port or unix domain socket path.
     * Defaults to 6379.
     */
    port?: number,

    /**
     * the unix socket string to connect to (if socket is provided, host and port are ignored)
     */
    socket?: string,

    /**
     * the Redis authentication password when required.
     */
    password?: string,

    /**
     * the Redis database.
     */
    database?: string,

    /**
     * an array of redis sentinel addresses to connect to.
     */
    sentinels?: Array<{
      host: string
    }>,

    /**
     * the name of the sentinel master.
     * (Only needed when sentinels is specified)
     */
    sentinelName?: string
  } & ClientOptions;

  declare class CatboxRedis<T> mixins Client<T> {
    constructor(options: CatboxRedis$CatboxRedisOptions): this;
  }
  declare export default typeof CatboxRedis;
}
