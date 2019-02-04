declare module 'farbtastic' {
        declare type JQueryFarbtastic$Placeholder = string | Element | JQuery;

declare type JQueryFarbtastic$CallbackFunction = (color: string) => any;

declare type JQueryFarbtastic$Callback = JQueryFarbtastic$CallbackFunction | JQueryFarbtastic$Placeholder;

declare interface JQueryFarbtastic$Options {
callback?: JQueryFarbtastic$Callback,
width?: number,
wheelWidth?: number
} 

declare interface JQueryFarbtastic$Farbtastic {
linked: JQueryFarbtastic$CallbackFunction | JQuery,
color: string,
hsl: number[],
linkTo(callback: JQueryFarbtastic$Callback): JQueryFarbtastic$Farbtastic,
setColor(color: string | number[]): JQueryFarbtastic$Farbtastic,
setHSL(hsl: number[]): JQueryFarbtastic$Farbtastic
} 
	declare interface JQueryStatic {
farbtastic(
placeholder: JQueryFarbtastic$JQueryFarbtastic$Placeholder,
callback: JQueryFarbtastic$JQueryFarbtastic$Callback): JQueryFarbtastic$JQueryFarbtastic$Farbtastic,
farbtastic(
placeholder: JQueryFarbtastic$JQueryFarbtastic$Placeholder,
options: JQueryFarbtastic$JQueryFarbtastic$Options): JQueryFarbtastic$JQueryFarbtastic$Farbtastic,
farbtastic(
placeholder: JQueryFarbtastic$JQueryFarbtastic$Placeholder): JQueryFarbtastic$JQueryFarbtastic$Farbtastic
} 
	declare interface JQuery {
farbtastic(callback: JQueryFarbtastic$JQueryFarbtastic$Callback): JQuery,
farbtastic(options: JQueryFarbtastic$JQueryFarbtastic$Options): JQuery,
farbtastic(): JQuery
} 
    }
