declare module "fast-ratelimit" {
  /**
   * Constructor options for fast-ratelimit.
   * {@link https://github.com/valeriansaliou/node-fast-ratelimit#1-create-the-rate-limiter}
   */
  declare export interface FastRateLimitOptions {
    threshold: number;
    ttl: number;
  }
  declare export class FastRateLimit {
    /**
     * FastRateLimit constructor
     * @param options
     */
    constructor(options: FastRateLimitOptions): this;

    /**
     * FastRateLimit.prototype.consumeSync
     */
    consumeSync(namespace: string): boolean;

    /**
     * FastRateLimit.prototype.hasTokenSync
     */
    hasTokenSync(namespace: string): boolean;

    /**
     * FastRateLimit.prototype.consume
     */
    consume(namespace: string): Promise<void>;

    /**
     * FastRateLimit.prototype.hasToken
     */
    hasToken(namespace: string): Promise<void>;
  }
}
