declare module "@hapi/catbox-memory" {
  import type { ClientApi, ClientOptions } from "@hapi/catbox";

  declare class CatboxMemory<T> mixins ClientApi<T> {
    constructor(options?: CatboxMemory$Options): this;
  }
  declare type CatboxMemory$Options = {
    /**
     * Sets an upper limit on the number of bytes that can be stored in the cache.
     * Once this limit is reached no additional items will be added to the cache until some expire.
     * The utilized memory calculation is a rough approximation and must not be relied on.
     * @default 104857600 (100MB).
     */
    maxByteSize?: number,

    /**
     * The minimum number of milliseconds in between each cache cleanup.
     * @default 1000 (1 second)
     */
    minCleanupIntervalMsec?: number,

    /**
     * by default, all data is cached as JSON strings, and converted to an object using JSON.parse() on retrieval.
     * By setting this option to true, Buffer data can be stored alongside the stringified data.
     * Buffers are not stringified, and are copied before storage to prevent the value from changing while in the cache.
     * @default false
     */
    allowMixedContent?: boolean,

    /**
     * by default, buffers stored in the cache with allowMixedContent set to true are copied when they are set but not when they are retrieved.
     * This means a change to the buffer returned by a get() will change the value in the cache. To prevent this,
     * set cloneBuffersOnGet to true to always return a copy of the cached buffer.
     * @default false
     */
    cloneBuffersOnGet?: boolean
  } & ClientOptions;

  declare export default typeof CatboxMemory;
}
