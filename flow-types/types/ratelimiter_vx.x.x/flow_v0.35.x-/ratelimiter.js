declare module 'ratelimiter' {
        import type {
          RedisClient
        } from 'redis';

	declare interface LimiterOption {

/**
 * The identifier to limit against (typically a user id)
 */
id: string,

/**
 * Redis connection instance
 */
db: RedisClient,

/**
 * Max requests within duration
 */
max?: number,

/**
 * Duration of limit in milliseconds
 */
duration?: number
} 
	declare interface LimiterInfo {

/**
 * max value
 */
total: number,

/**
 * Number of calls left in current duration without decreasing current get
 */
remaining: number,

/**
 * Time in milliseconds until the end of current duration
 */
reset: number
} 
	declare class Limiter  {
constructor(opts: LimiterOption): this;
inspect(): string;
get(fn: (err: any, info: LimiterInfo) => void): void
}
	
	declare module.exports: typeof Limiter

    }
