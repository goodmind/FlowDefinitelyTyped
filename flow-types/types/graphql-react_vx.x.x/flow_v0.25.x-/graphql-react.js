declare module "graphql-react" {
  import type { Node, Context } from "react";

  declare export var GraphQLContext: Context<GraphQL>;
  declare export interface HttpError {
    status: number;
    statusText: string;
  }
  declare export type GraphQLCacheKey = string;
  declare export interface GraphQLCacheValue<T> {
    fetchError: null | string;
    httpError: null | HttpError;
    parseError: null | string;
    graphQLErrors: null | Array<{
      message: string,
      path: string[],
      locations: Array<{
        column: number,
        line: number
      }>
    }>;
    data: T;
  }
  declare export interface GraphQLCache {
    [key: string]: GraphQLCacheValue<any>;
  }
  declare export interface GraphQLFetchOptions {
    url: string;
    body: string | FormData;
    headers: Headers;
    credentials: null | string;
  }
  declare export type GraphQLFetchOptionsOverride = (
    options: GraphQLFetchOptions
  ) => void;
  declare export type GraphQLOperation<V> = {
    query: string
  } & /* Flow doesn't support conditional types, use $Call utility type */ any;
  declare export interface GraphQLOperationLoading<T> {
    cacheKey: GraphQLCacheKey;
    cacheValue: void | GraphQLCacheValue<T>;
    cacheValuePromise: Promise<GraphQLCacheValue<T>>;
  }
  declare export interface GraphQLOperationStatus<T> {
    load: () => void;
    loading: boolean;
    cacheKey: GraphQLCacheKey;
    cacheValue?: GraphQLCacheValue<T>;
  }
  declare export class GraphQL {
    constructor(options?: {
      cache?: GraphQLCache
    }): this;
    on(
      type: "reset",
      handler: (event: {
        exceptCacheKey: GraphQLCacheKey
      }) => void
    ): void;
    on(
      type: "cache",
      handler: (event: {
        cacheKey: GraphQLCacheKey,
        cacheValue: GraphQLCacheValue<any>
      }) => void
    ): void;
    on(
      type: "fetch",
      handler: (event: {
        cacheKey: GraphQLCacheKey,
        cacheValuePromise: Promise<GraphQLCacheValue<any>>
      }) => void
    ): void;
    off(
      type: "reset",
      handler: (event: {
        exceptCacheKey: GraphQLCacheKey
      }) => void
    ): void;
    off(
      type: "cache",
      handler: (event: {
        cacheKey: GraphQLCacheKey,
        cacheValue: GraphQLCacheValue<any>
      }) => void
    ): void;
    off(
      type: "fetch",
      handler: (event: {
        cacheKey: GraphQLCacheKey,
        cacheValuePromise: Promise<GraphQLCacheValue<any>>
      }) => void
    ): void;
    reset(exceptCacheKey?: string): void;
    operate<T, V>(options: {
      operation: GraphQLOperation<V>,
      fetchOptionsOverride?: GraphQLFetchOptionsOverride,
      reloadOnLoad?: boolean,
      resetOnLoad?: boolean
    }): GraphQLOperationLoading<T>;
    cache: GraphQLCache;
  }
  declare export function reportCacheErrors(event: any): void;

  declare export function ssr(
    grapphql: GraphQL,
    node: Node,
    render?: (element: Node) => string
  ): void;

  declare export function useGraphQL<T, V>(options: {
    fetchOptionsOverride?: GraphQLFetchOptionsOverride,
    loadOnMount?: boolean,
    loadOnReload?: boolean,
    loadOnReset?: boolean,
    reloadOnLoad?: boolean,
    resetOnLoad?: boolean,
    operation: GraphQLOperation<V>
  }): GraphQLOperationStatus<T>;
}
