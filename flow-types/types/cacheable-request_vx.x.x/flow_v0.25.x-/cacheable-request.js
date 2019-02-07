declare module "cacheable-request" {
  import type {
    request,
    RequestOptions,
    ClientRequest,
    ServerResponse
  } from "http";

  import type { URL } from "url";

  import type { EventEmitter } from "events";

  import type { Store } from "keyv";

  import type { CacheableRequest$Options as CacheSemanticsOptions } from "http-cache-semantics";

  declare module.exports: typeof CacheableRequest;

  declare var CacheableRequest: CacheableRequest;
  declare type RequestFn = typeof request;
  declare interface CacheableRequest {
    new(
      requestFn: RequestFn,
      storageAdapter?: string | Store<any>
    ): (
      opts: string | URL | (RequestOptions & CacheSemanticsOptions),
      cb?: (response: ServerResponse | ResponseLike) => void
    ) => CacheableRequest$CacheableRequest$Emitter;
    CacheableRequest$RequestError: typeof RequestErrorCls;
    CacheableRequest$CacheError: typeof CacheErrorCls;
  }
  declare interface CacheableRequest$Options {
    /**
     * If the cache should be used. Setting this to `false` will completely bypass the cache for the current request.
     * @default true
     */
    cache?: boolean;

    /**
     * If set to `true` once a cached resource has expired it is deleted and will have to be re-requested.
     *
     * If set to `false`, after a cached resource's TTL expires it is kept in the cache and will be revalidated
     * on the next request with `If-None-Match`/`If-Modified-Since` headers.
     * @default false
     */
    strictTtl?: boolean;

    /**
     * Limits TTL. The `number` represents milliseconds.
     * @default undefined
     */
    maxTtl?: number;

    /**
     * When set to `true`, if the DB connection fails we will automatically fallback to a network request.
     * DB errors will still be emitted to notify you of the problem even though the request callback may succeed.
     * @default false
     */
    automaticFailover?: boolean;

    /**
     * Forces refreshing the cache. If the response could be retrieved from the cache, it will perform a
     * new request and override the cache instead.
     * @default false
     */
    forceRefresh?: boolean;
  }

  declare type CacheableRequest$Emitter = {
    addListener(
      event: "request",
      listener: (request: ClientRequest) => void
    ): this,
    addListener(
      event: "response",
      listener: (response: ServerResponse | ResponseLike) => void
    ): this,
    addListener(
      event: "error",
      listener: (
        error: CacheableRequest$RequestError | CacheableRequest$CacheError
      ) => void
    ): this,
    on(event: "request", listener: (request: ClientRequest) => void): this,
    on(
      event: "response",
      listener: (response: ServerResponse | ResponseLike) => void
    ): this,
    on(
      event: "error",
      listener: (
        error: CacheableRequest$RequestError | CacheableRequest$CacheError
      ) => void
    ): this,
    once(event: "request", listener: (request: ClientRequest) => void): this,
    once(
      event: "response",
      listener: (response: ServerResponse | ResponseLike) => void
    ): this,
    once(
      event: "error",
      listener: (
        error: CacheableRequest$RequestError | CacheableRequest$CacheError
      ) => void
    ): this,
    prependListener(
      event: "request",
      listener: (request: ClientRequest) => void
    ): this,
    prependListener(
      event: "response",
      listener: (response: ServerResponse | ResponseLike) => void
    ): this,
    prependListener(
      event: "error",
      listener: (
        error: CacheableRequest$RequestError | CacheableRequest$CacheError
      ) => void
    ): this,
    prependOnceListener(
      event: "request",
      listener: (request: ClientRequest) => void
    ): this,
    prependOnceListener(
      event: "response",
      listener: (response: ServerResponse | ResponseLike) => void
    ): this,
    prependOnceListener(
      event: "error",
      listener: (
        error: CacheableRequest$RequestError | CacheableRequest$CacheError
      ) => void
    ): this,
    removeListener(
      event: "request",
      listener: (request: ClientRequest) => void
    ): this,
    removeListener(
      event: "response",
      listener: (response: ServerResponse | ResponseLike) => void
    ): this,
    removeListener(
      event: "error",
      listener: (
        error: CacheableRequest$RequestError | CacheableRequest$CacheError
      ) => void
    ): this,
    off(event: "request", listener: (request: ClientRequest) => void): this,
    off(
      event: "response",
      listener: (response: ServerResponse | ResponseLike) => void
    ): this,
    off(
      event: "error",
      listener: (
        error: CacheableRequest$RequestError | CacheableRequest$CacheError
      ) => void
    ): this,
    removeAllListeners(event?: "request" | "response" | "error"): this,
    listeners(event: "request"): Array<(request: ClientRequest) => void>,
    listeners(
      event: "response"
    ): Array<(response: ServerResponse | ResponseLike) => void>,
    listeners(
      event: "error"
    ): Array<
      (
        error: CacheableRequest$RequestError | CacheableRequest$CacheError
      ) => void
    >,
    rawListeners(event: "request"): Array<(request: ClientRequest) => void>,
    rawListeners(
      event: "response"
    ): Array<(response: ServerResponse | ResponseLike) => void>,
    rawListeners(
      event: "error"
    ): Array<
      (
        error: CacheableRequest$RequestError | CacheableRequest$CacheError
      ) => void
    >,
    emit(event: "request", request: ClientRequest): boolean,
    emit(event: "response", response: ServerResponse | ResponseLike): boolean,
    emit(
      event: "error",
      error: CacheableRequest$RequestError | CacheableRequest$CacheError
    ): boolean,
    eventNames(): Array<"request" | "response" | "error">,
    listenerCount(type: "request" | "response" | "error"): number
  } & EventEmitter;

  declare type CacheableRequest$RequestError = RequestErrorCls;

  declare type CacheableRequest$CacheError = CacheErrorCls;
  declare class RequestErrorCls mixins Error {
    name: "RequestError";
    constructor(error: Error): this;
  }
  declare class CacheErrorCls mixins Error {
    name: "CacheError";
    constructor(error: Error): this;
  }
}
