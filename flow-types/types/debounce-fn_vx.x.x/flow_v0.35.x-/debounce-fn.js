declare module 'debounce-fn' {
        declare module.exports: typeof debounce

	
/**
 * Returns a debounced function that delays calling the `input` function until after `wait` milliseconds
 * have elapsed since the last time the debounced function was called.
 * 
 * It comes with a `.cancel()` method to cancel any scheduled `input` function calls.
 */
declare function debounce<TArgs: any[], TResult>(
input: (...args: TArgs) => TResult,
options?: debounce$debounce$Options): ((...args: TArgs) => TResult | void) & {
cancel(): void
}

	declare interface debounce$Options {

/**
 * Time to wait until the `input` function is called.
 * @default 0
 */
wait?: number,

/**
 * Trigger the function on the leading edge instead of the trailing edge of the `wait` interval.
 * For example, can be useful for preventing accidental double-clicks on a "submit" button
 * from firing a second time.
 */
immediate?: boolean
} 
    }
