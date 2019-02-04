declare module 'retry' {
        declare export interface RetryOperation {

/**
 * Returns an array of all errors that have been passed to `retryOperation.retry()` so far.
 * The returning array has the errors ordered chronologically based on when they were passed to
 * `retryOperation.retry()`, which means the first passed error is at index zero and the last is at the last index.
 */
errors(): Error[],

/**
 * A reference to the error object that occured most frequently.
 * Errors are compared using the `error.message` property.
 * If multiple error messages occured the same amount of time, the last error object with that message is returned.
 * @return If no errors occured so far the value will be `null`.
 */
mainError(): Error | null,

/**
 * Defines the function that is to be retried and executes it for the first time right away.
 * @param fn The function that is to be retried. `currentAttempt` represents the number of attempts
callback has been executed so far.
 * @param A timeout in milliseconds.
 * @param Callback to execute when the operation takes longer than the timeout.
 */
attempt(fn: (currentAttempt: number) => void, timeoutOps?: AttemptTimeoutOptions): void,

/**
 * Returns `false` when no `error` value is given, or the maximum amount of retries has been reached.
 * Otherwise it returns `true`, and retries the operation after the timeout for the current attempt number.
 */
retry(err?: Error): boolean,

/**
 * Stops the operation being retried. Useful for aborting the operation on a fatal error etc.
 */
stop(): void,

/**
 * Resets the internal state of the operation object, so that you can call `attempt()` again as if
 * this was a new operation object.
 */
reset(): void,

/**
 * Returns an int representing the number of attempts it took to call `fn` before it was successful.
 */
attempts(): number
} 
	declare export interface AttemptTimeoutOptions {

/**
 * A timeout in milliseconds.
 */
timeout?: number,

/**
 * Callback to execute when the operation takes longer than the timeout.
 */
callback(): void
} 
	
/**
 * Create a new RetryOperation object.
 * @param The maximum amount of times to retry the operation.
 * @param The exponential factor to use.
 * @param The number of milliseconds before starting the first retry.
 * @param The maximum number of milliseconds between two retries.
 * @param Randomizes the timeouts by multiplying a factor between 1-2.
 * @param Wether to retry forever.
 * @param Wether to unref the setTimeout's.
 */
declare export function operation(options?: OperationOptions): RetryOperation

	declare export type OperationOptions = {

/**
 * Whether to retry forever.
 * @default false
 */
forever?: boolean,

/**
 * Whether to [unref](https://nodejs.org/api/timers.html#timers_unref) the setTimeout's.
 * @default false
 */
unref?: boolean,

/**
 * The maximum time (in milliseconds) that the retried operation is allowed to run.
 * @default Infinity
 */
maxRetryTime?: number
} & TimeoutsOptions

	
/**
 * Get an array with timeouts and their return values in milliseconds.
 */
declare export function timeouts(options?: TimeoutsOptions): number[]

	declare export type TimeoutsOptions = {

/**
 * The maximum amount of times to retry the operation.
 * @default 10
 */
retries?: number
} & CreateTimeoutOptions

	
/**
 * Create a new timeout (in milliseconds) based on the given parameters.
 * @param attempt Representing for which retry the timeout should be calculated.
 * @return timeout
 */
declare export function createTimeout(attempt: number, options?: CreateTimeoutOptions): number

	declare export interface CreateTimeoutOptions {

/**
 * The exponential factor to use.
 * @default 2
 */
factor?: number,

/**
 * The number of milliseconds before starting the first retry.
 * @default 1000
 */
minTimeout?: number,

/**
 * The maximum number of milliseconds between two retries.
 * @default Infinity
 */
maxTimeout?: number,

/**
 * Randomizes the timeouts by multiplying a factor between 1-2.
 * @default false
 */
randomize?: boolean
} 
	
/**
 * Wrap all functions of the object with retry.
 * @param object The object to be wrapped
 * @param methods Methods which need to be wrapped
 */
declare export function wrap(object: {[key: string]: any}, methods?: string[]): void

	declare export function wrap(
object: {[key: string]: any},
options?: OperationOptions,
methods?: string[]): void

    }
