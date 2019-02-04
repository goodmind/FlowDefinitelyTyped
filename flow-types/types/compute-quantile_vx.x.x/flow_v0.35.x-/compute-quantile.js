declare module 'compute-quantile' {
        
/**
 * Computes a quantile for a numeric array.
 */
declare function quantile(
array: ArrayLike<number>,
quantile: number,
options?: quantile$quantile$Options): number

	declare interface quantile$Options {

/**
 * If the input `array` is already sorted in `__ascending__` order, you can set the `sorted` option to `true`.
 * @default false
 */
sorted?: boolean
} 
	declare module.exports: typeof quantile

    }
