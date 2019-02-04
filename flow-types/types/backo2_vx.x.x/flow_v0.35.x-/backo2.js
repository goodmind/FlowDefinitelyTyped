declare module 'backo2' {
        declare type BackoffOptions = $Shape<{
min: number,
max: number,
jitter: number,
factor: number
}>;
	declare class Backoff  {
constructor(opts?: BackoffOptions): this;
duration(): number;

/**
 * Reset the number of attempts.
 */
reset(): void;

/**
 * Set the minimum duration
 */
setMin(min: number): void;

/**
 * Set the maximum duration
 */
setMax(max: number): void;

/**
 * Set the jitter
 */
setJitter(jitter: number): void
}
	declare module.exports: typeof Backoff

    }
