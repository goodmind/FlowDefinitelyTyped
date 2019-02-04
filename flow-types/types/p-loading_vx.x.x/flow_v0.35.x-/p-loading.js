declare module 'p-loading' {
        declare interface PLoadingOptions {
action?: "show" | "hide" | "destroy",
maskColor?: string,
containerHTML?: string,
containerAttrs?: {[key: string]: any},
containerClass?: string,
spinnerHTML?: string,
spinnerAttrs?: {[key: string]: any},
spinnerClass?: string,

/**
 * @deprecated
 */
onShowContainer?: ($pluginElement: JQuery, $container: JQuery) => void,

/**
 * @deprecated
 */
onHideContainer?: ($pluginElement: JQuery, $container: JQuery) => void,

/**
 * @deprecated
 */
onDestroyContainer?: ($container: JQuery) => void,
hideAnimation?: ($container: JQuery) => void,
showAnimation?: ($container: JQuery) => void,
destroyAfterHide?: boolean,
idPrefix?: string,
pluginNameSpace?: string,
useAddOns?: string[]
} 
	declare interface PLoading {
(options: PLoadingOptions): void,
defaults: PLoadingOptions
} 
	declare interface JQuery {
ploading: PLoading
} 
	declare interface JQueryStatic {
ploading: PLoading
} 
    }
