declare module 'ngtoaster' {
        declare module.exports: typeof ngtoaster

	declare interface ngtoaster$IToasterService {
pop(params: ngtoaster$IPopParams): void,

/**
 * @param type Type of toaster  -- 'error', 'info', 'wait', 'success', and 'warning'
 */
pop(
type?: string,
title?: string,
body?: string,
timeout?: number,
bodyOutputType?: string,
clickHandler?: EventListener,
toasterId?: number,
showCloseButton?: boolean,
toastId?: string | number,
onHideCallback?: ngtoaster$IToastCallback): ngtoaster$IPopReturn,
error(params: ngtoaster$IPopParams): void,
error(
title?: string,
body?: string,
timeout?: number,
bodyOutputType?: string,
clickHandler?: EventListener,
toasterId?: number,
showCloseButton?: boolean,
toastId?: string | number,
onHideCallback?: ngtoaster$IToastCallback): ngtoaster$IPopReturn,
info(params: ngtoaster$IPopParams): void,
info(
title?: string,
body?: string,
timeout?: number,
bodyOutputType?: string,
clickHandler?: EventListener,
toasterId?: number,
showCloseButton?: boolean,
toastId?: string | number,
onHideCallback?: ngtoaster$IToastCallback): ngtoaster$IPopReturn,
wait(params: ngtoaster$IPopParams): void,
wait(
title?: string,
body?: string,
timeout?: number,
bodyOutputType?: string,
clickHandler?: EventListener,
toasterId?: number,
showCloseButton?: boolean,
toastId?: string | number,
onHideCallback?: ngtoaster$IToastCallback): ngtoaster$IPopReturn,
success(params: ngtoaster$IPopParams): void,
success(
title?: string,
body?: string,
timeout?: number,
bodyOutputType?: string,
clickHandler?: EventListener,
toasterId?: number,
showCloseButton?: boolean,
toastId?: string | number,
onHideCallback?: ngtoaster$IToastCallback): ngtoaster$IPopReturn,
warning(params: ngtoaster$IPopParams): void,
warning(
title?: string,
body?: string,
timeout?: number,
bodyOutputType?: string,
clickHandler?: EventListener,
toasterId?: number,
showCloseButton?: boolean,
toastId?: string | number,
onHideCallback?: ngtoaster$IToastCallback): ngtoaster$IPopReturn,
clear(toasterId?: number, toastId?: string | number): void,
toast: ngtoaster$IToast
} 

declare interface ngtoaster$IToasterEventRegistry {
setup(): void,
subscribeToNewToastEvent(onNewToast: ngtoaster$IToastEventListener): void,
subscribeToClearToastsEvent(onClearToasts: ngtoaster$IToastEventListener): void,
unsubscribeToNewToastEvent(onNewToast: ngtoaster$IToastEventListener): void,
unsubscribeToClearToastsEvent(onClearToasts: ngtoaster$IToastEventListener): void
} 

declare type ngtoaster$IPopParams = {
toasterId?: number
} & ngtoaster$IToast


declare interface ngtoaster$IPopReturn {
toasterId: number,
toastId: string | number
} 

declare type ngtoaster$IToastCallback = (toast: ngtoaster$IToast) => void;

declare type ngtoaster$IToastEventListener = (event: Event, toasterId: number, toastId: string | number) => void;

declare interface ngtoaster$IToast {

/**
 * Acceptable types are:
 * 'error', 'info', 'wait', 'success', and 'warning'
 */
type?: string,
title?: string,
body?: string,
timeout?: number,
bodyOutputType?: string,
clickHandler?: EventListener,
showCloseButton?: boolean,
closeHtml?: string,
toastId?: string | number,

/**
 * Called when the toast has been displayed.
 * @param toast the displayed toast
 */
onShowCallback?: ngtoaster$IToastCallback,

/**
 * Called when the toast has been removed.
 * @param toast the displayed toast
 */
onHideCallback?: ngtoaster$IToastCallback,
directiveData?: any,
tapToDismiss?: boolean
} 

declare interface ngtoaster$IToasterConfig {

/**
 * limits max number of toasts
 */
limit?: number,
"tap-to-dismiss"?: boolean,
"close-button"?: boolean,
"close-html"?: string,
"newest-on-top"?: boolean,
"time-out"?: number,
"icon-classes"?: ngtoaster$IIconClasses,

/**
 * Options include:
 * '', 'trustedHtml', 'template', 'templateWithData'
 */
"body-output-type"?: string,
"body-template"?: string,
"icon-class"?: string,

/**
 * Options include:
 * 'toast-top-full-width', 'toast-bottom-full-width', 'toast-center',
 * 'toast-top-left', 'toast-top-center', 'toast-top-rigt',
 * 'toast-bottom-left', 'toast-bottom-center', 'toast-bottom-rigt',
 */
"position-class"?: string,
"title-class"?: string,
"message-class"?: string,
"prevent-duplicates"?: boolean,

/**
 * stop timeout on mouseover and restart timer on mouseout
 */
"mouseover-timer-stop"?: boolean
} 

declare interface ngtoaster$IIconClasses {
error: string,
info: string,
wait: string,
success: string,
warning: string
} 
    }
