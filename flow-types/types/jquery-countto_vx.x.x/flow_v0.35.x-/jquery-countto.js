declare module 'jquery-countto' {
        declare export type Options = $Shape<{

/**
 * The number to start counting from
 */
from: number,

/**
 * The number to stop counting at
 */
to: number,

/**
 * The number of milliseconds it should take to finish counting
 */
speed: number,

/**
 * The number of milliseconds to wait between refreshing the counter
 */
refreshInterval: number,

/**
 * The number of decimal places to show when using the default formatter
 */
decimals: number,

/**
 * A handler that is used to format the current value before rendering to the DOM
 */
formatter: (value: number, options: Options) => string,

/**
 * A callback function that is triggered for every iteration that the counter updates
 */
onUpdate: (value: number) => void,

/**
 * A callback function that is triggered when counting finishes
 */
onComplete: (value: number) => void
}>;
	declare export type Method = "start" | "stop" | "toggle" | "restart";
	declare module 'global' {
        declare interface JQuery {
countTo(methodOrOptions?: Method | Options): JQuery
} 
    }

    }
