declare module 'jquery-maskmoney' {
        declare interface jQueryMaskMoney$Options {

/**
 * The prefix to be displayed before the value entered
 */
prefix?: string,

/**
 * The prefix to be displayed after the value entered
 */
suffix?: string,

/**
 * Set if the prefix and suffix will stay in the field's value after the user exits the field
 */
affixesStay?: boolean,

/**
 * The thousands separator
 */
thousands?: string,

/**
 * The decimal separator
 */
decimal?: string,

/**
 * How many decimal places are allowed
 */
precision?: number,

/**
 * Setting to prevent users from inputing zero
 */
allowZero?: boolean,

/**
 * Setting to prevent negative values
 */
allowNegative?: boolean
} 
	declare interface JQuery {

/**
 * Apply mask to input, can be pass default value to it
 */
maskMoney(methodName: "mask", defaultValue?: number): JQuery,

/**
 * Returns a float value from input field masked
 */
maskMoney(method?: "unmasked"): number[],

/**
 * Apply mask to input when the argument are options
 * Remove maskMoney from an element when the argument is "destroy"
 */
maskMoney(methodOrOption?: "destroy" | jQueryMaskMoney$jQueryMaskMoney$Options): JQuery
} 
    }
