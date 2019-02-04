declare module 'natural-sort' {
        declare interface Options {

/**
 * Set to true to make the sort case-sensitive.
 */
caseSensitive?: boolean,

/**
 * Set to 'desc' to sort in reverse.
 */
direction?: "desc"
} 
	declare function naturalSort(options?: Options): (a: string | number, b: string | number) => number

	declare module.exports: typeof naturalSort

    }
