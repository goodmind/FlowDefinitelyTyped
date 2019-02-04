declare module 'df-visible' {
        declare type Direction = "horizontal" | "vertical" | "both";
	declare interface JQuery {

/**
 * Gets the value of a setting.
 * @param details Which setting to consider.
 * @param callback The callback parameter should be a function that looks like this:
function(object details) {...};
 */
visible(
partial?: boolean,
hidden?: boolean,
direction?: Direction,
container?: JQuery): boolean
} 
    }
