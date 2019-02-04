declare module 'moveto' {
        declare class MoveTo  {

/**
 * MoveTo Constructor
 * @param options Options
 * @param easeFunctions Custom ease functions
 */
constructor(options?: MoveTo$MoveTo$MoveToOptions, easeFunctions?: MoveTo$MoveTo$MoveToEaseFunctionsObject): this;

/**
 * Options
 */
options: MoveTo$MoveTo$MoveToOptions;

/**
 * Custom ease functions
 */
easeFunctions: MoveTo$MoveTo$MoveToEaseFunctionsObject;

/**
 * Start scroll animation from current position to the anchor point
 * @param target Target element/position to be scrolled. Target position is the scrolling distance. It must be negative if the upward movement is desired
 * @param options Custom options
 */
move(target: HTMLElement | number, options?: MoveTo$MoveTo$MoveToOptions): void;

/**
 * Register a dom element as trigger
 * @param dom The trigger element for starting to scroll when on click
 * @param callback Callback function to be run after the scroll complete. This will overwrite the callback option
 * @return Unregister function
 */
registerTrigger(
dom: HTMLElement,
callback?: MoveTo$MoveTo$callbackType): MoveTo$MoveTo$unregisterTriggerType;

/**
 * Adds custom ease function
 * @param name Ease function name
 * @param fn Ease function
 */
addEaseFunction(name: string, fn: MoveTo$MoveTo$MoveToEaseFunction): void
}
	declare type MoveTo$unregisterTriggerType = () => void;


/**
 * Callback function to be run after the scroll complete.
 */
declare type MoveTo$callbackType = (target: HTMLElement | number) => void;

declare interface MoveTo$MoveToOptions {

/**
 * The tolerance of the target to be scrolled, can be negative or positive
 */
tolerance?: number,

/**
 * Duration of scrolling, in milliseconds
 */
duration?: number,

/**
 * Ease function name
 */
easing?: string,

/**
 * The function to be run after scrolling complete. Target passes as the first argument
 */
callback?: MoveTo$callbackType
} 

declare interface MoveTo$MoveToEaseFunctionsObject {
[key: string]: MoveTo$MoveToEaseFunction
} 


/**
 * Easing Function
 * @param t Current time
 * @param b Start value
 * @param c Change in value
 * @param d Duration
 * @return Calculated value
 */
declare type MoveTo$MoveToEaseFunction = (t: number, b: number, c: number, d: number) => number;
	declare module.exports: typeof MoveTo

    }
