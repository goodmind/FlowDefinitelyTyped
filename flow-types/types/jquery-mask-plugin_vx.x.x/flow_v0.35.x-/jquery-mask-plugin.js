declare module 'jquery-mask-plugin' {
        declare interface jQueryMask$Invalid {
p: number,
v: string,
e: string
} 

declare interface jQueryMask$Options {
maskElements?: string,
dataMaskAttr?: string,
dataMask?: boolean,
watchInterval?: number,
watchInputs?: boolean,
watchDataMask?: boolean,
byPassKeys?: number[],
translation?: jQueryMask$Translation,
selectOnFocus?: boolean,
reverse?: boolean,
clearIfNotMatch?: boolean,
placeholder?: string,
onComplete(value: string, e: Event, $element: JQuery, options: jQueryMask$Options): void,
onKeyPress(value: string, e: Event, $element: JQuery, options: jQueryMask$Options): void,
onChange(value: string, e: Event, $element: JQuery, options: jQueryMask$Options): void,
onInvalid(
value: string,
e: Event,
$element: JQuery,
invalid: jQueryMask$Invalid[],
options: jQueryMask$Options): void
} 

declare interface jQueryMask$Pattern {
pattern?: RegExp,
recursive?: boolean,
optional?: boolean,
fallback?: string
} 

declare interface jQueryMask$Translation {
[key: string]: jQueryMask$Pattern | {} | void,
placeholder?: string
} 
	declare interface JQuery {

/**
 * Applies the mask to the matching selector elements.
 * @param mask should be a string or a function.
 * @param options should be an options object.
 * @returns The element.
 */
mask(
mask: ((value: string) => string) | string,
options?: jQueryMask$jQueryMask$Options): JQuery,

/**
 * Seek and destroy.
 * @returns The element.
 */
unmask(): JQuery,

/**
 * Gets the value of the field without the mask.
 * @returns Value without the mask.
 */
cleanVal(): string,

/**
 * Gets masked value programmatically
 * @returns Masked value.
 */
masked(value: string): string
} 
    }
