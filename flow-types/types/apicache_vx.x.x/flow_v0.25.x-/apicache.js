declare module "apicache" {
  import type { RedisClient } from "redis";

  declare export var id: number;

  /**
   * clears cache target (key or group), or entire cache if no value passed, returns new index.
   */
  declare export function clear(target: string | any[]): any;

  /**
   * used to create a new ApiCache instance with the same options as the current one
   */
  declare export function clone(): any;

  declare export function getDuration(duration: string): any;

  /**
   * returns current cache index [of keys]
   */
  declare export function getIndex(): any;

  /**
   * the actual middleware that will be used in your routes. duration is in the following format
   * "[length] [unit]", as in "10 minutes" or "1 day". A second param is a middleware toggle function,
   * accepting request and response params, and must return truthy to enable cache for the request.
   * Third param is the options that will override global ones and affect this middleware only.
   */
  declare export function middleware(
    duration?: string,
    toggleMiddleware?: any,
    localOptions?: Options
  ): any;

  /**
   * used to create a new ApiCache instance (by default, simply requiring this library shares a common instance)
   */
  declare export function newInstance(config: Options): any;

  /**
   * getter/setter for global options. If used as a setter, this function is
   * chainable, allowing you to do things such as... say... return the middleware.
   */
  declare export function options(options: Options): any;

  declare export function resetIndex(): void;

  declare export interface Options {
    /**
     * if true, enables console output
     */
    debug?: boolean;

    /**
     * should be either a number (in ms) or a string, defaults to 1 hour
     */
    defaultDuration?: string;

    /**
     * if false, turns off caching globally (useful on dev)
     */
    enabled?: boolean;

    /**
     * if provided, uses the [node-redis](https://github.com/NodeRedis/node_redis) client instead of [memory-cache](https://github.com/ptarjan/node-cache)
     */
    redisClient?: RedisClient;

    /**
     * appendKey takes the req/res objects and returns a custom value to extend the cache key
     */
    appendKey?: any;

    /**
     * list of headers that should never be cached
     */
    headerBlacklist?: string[];
    statusCodes?: {
      /**
       * list status codes to specifically exclude (e.g. [404, 403] cache all responses unless they had a 404 or 403 status)
       */
      exclude?: number[],

      /**
       * list status codes to require (e.g. [200] caches ONLY responses with a success/200 code)
       */
      include?: number[]
    };

    /**
     * 'cache-control':  'no-cache' // example of header overwrite
     */
    headers?: {
      [key: string]: string
    };
  }
}
