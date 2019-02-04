declare module 'jquery.appear' {
        declare export interface Options<T> {

/**
 * Data to pass into callback
 */
data?: T,

/**
 * Callback is called only in first appear
 */
one?: boolean,

/**
 * X accuracy
 */
accX?: number,

/**
 * Y accuracy
 */
accY?: number
} 
	declare module 'global' {
        declare interface JQuery {

/**
 * Initialize appear plugin
 */
appear<T>(
callback: ((element: HTMLElement, data: T) => void),
options?: Options<T>): JQuery
} 
    }

    }
