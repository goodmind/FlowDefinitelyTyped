declare module 'jquery-lazyload' {
        declare interface JQueryLazyLoad$Options {
threshold?: number,
failure_limit?: number,
event?: string,
effect?: string,
container?: JQuery,
data_attribute?: string,
skip_invisible?: boolean,
appear?: ((elementsLeft: number, options: JQueryLazyLoad$Options) => void) | null,
load?: (elementsLeft?: number, options?: JQueryLazyLoad$Options) => void,
placeholder?: string
} 
	declare interface JQuery {
lazyload(options?: JQueryLazyLoad$JQueryLazyLoad$Options): JQuery,
on(
event: "load",
callback: ((options?: JQueryLazyLoad$JQueryLazyLoad$Options) => void)): JQuery
} 
    }
