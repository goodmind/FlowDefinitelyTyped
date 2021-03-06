declare module "express-slow-down" {
  declare type SlowDown$StoreIncrementCallback = (
    err?: {},
    hits?: number
  ) => void;

  declare interface SlowDown$SlowDownRequestAugmentation {
    /**
     * The `options.delayAfter` value
     */
    limit: number;

    /**
     * The number of requests in the current window
     */
    current: number;

    /**
     * the number of requests remaining before rate-limiting begins
     */
    remaining: number;

    /**
     * When the window will reset, `current` will return to `0`, and `remaining` will return
     * to limit. Represents milliseconds since epoch (compare to `Date.now()`). This field
     * depends on store support. It will be `undefined` if the store does not provide the value.
     */
    resetTime?: number;

    /**
     * Amount of delay imposed on current request in milliseconds
     */
    delay: number;
  }

  /**
   * Express Request with the added `slowDown` property
   */
  declare type SlowDown$RequestWithSlowDown = {
    slowDown: SlowDown$SlowDownRequestAugmentation
  } & express.Request;

  declare interface SlowDown$Store {
    incr(key: string, cb: SlowDown$StoreIncrementCallback): void;
    decrement(key: string): void;
    resetKey(key: string): void;
  }

  /**
   * express-slow-down options
   */
  declare interface SlowDown$Options {
    /**
     * How long to keep records of requests in memory. Defaults to `60000` (1 minute)
     */
    windowMs?: number;

    /**
     * Max number of connections during `windowMs` before starting to delay responses.
     * Defaults to `1`. Set to `0` to disable delaying.
     */
    delayAfter?: number;

    /**
     * How long to delay the response, multiplied by `(number recent hits - delayAfter)`.
     * Defaults to `1000` (1 second). Set to `0` to disable delaying.
     */
    delayMs?: number;

    /**
     * When `true` failed requests (response status >= 400) won't be counted. Defaults to `false`.
     */
    skipFailedRequests?: boolean;

    /**
     * When `true` successful requests (response status < 400) won't be counted. Defaults to `false`.
     */
    skipSuccessfulRequests?: boolean;

    /**
     * Function used to generate keys. By default user IP address (`req.ip`) is used.
     * Default: `(req, res) => req.ip`
     */
    keyGenerator?: (req: express.Request, res: express.Response) => string;

    /**
     * Function used to skip requests. Returning `true` from the function will skip delaying for that request.
     * Default: `(req, res) => false`
     */
    skip?: (req: express.Request, res: express.Response) => boolean;

    /**
     * Function to execute the first time the limit is reached within `windowMs`.
     * Default: `(req, res, opts) => {}`
     */
    onLimitReached?: (
      req: SlowDown$RequestWithSlowDown,
      res: express.Response,
      optionsUsed: SlowDown$Options
    ) => void;

    /**
     * The storage to use when persisting request attempts. By default, the MemoryStore is used.
     */
    store?: SlowDown$Store;
  }
  declare function SlowDown(
    options: SlowDown$SlowDown$Options
  ): express.RequestHandler;

  declare module.exports: typeof SlowDown;
}
