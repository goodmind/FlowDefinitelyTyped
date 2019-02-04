declare module 'rx-dom' {
        import typeof * as Rx from 'rx';

	declare module 'rx' {
        
      declare var npm$namespace$DOM: {
        fromEvent: typeof DOM$fromEvent,
ready: typeof DOM$ready,
blur: typeof DOM$blur,
change: typeof DOM$change,
click: typeof DOM$click,
contextmenu: typeof DOM$contextmenu,
dblclick: typeof DOM$dblclick,
error: typeof DOM$error,
focus: typeof DOM$focus,
focusin: typeof DOM$focusin,
focusout: typeof DOM$focusout,
keydown: typeof DOM$keydown,
keypress: typeof DOM$keypress,
keyup: typeof DOM$keyup,
load: typeof DOM$load,
mousedown: typeof DOM$mousedown,
mouseenter: typeof DOM$mouseenter,
mouseleave: typeof DOM$mouseleave,
mousemove: typeof DOM$mousemove,
mouseout: typeof DOM$mouseout,
mouseover: typeof DOM$mouseover,
mouseup: typeof DOM$mouseup,
resize: typeof DOM$resize,
scroll: typeof DOM$scroll,
select: typeof DOM$select,
submit: typeof DOM$submit,
unload: typeof DOM$unload,
pointerdown: typeof DOM$pointerdown,
pointerenter: typeof DOM$pointerenter,
pointerleave: typeof DOM$pointerleave,
pointermove: typeof DOM$pointermove,
pointerout: typeof DOM$pointerout,
pointerover: typeof DOM$pointerover,
pointerup: typeof DOM$pointerup,
touchcancel: typeof DOM$touchcancel,
touchend: typeof DOM$touchend,
touchmove: typeof DOM$touchmove,
touchstart: typeof DOM$touchstart,
ajax: typeof DOM$ajax,
get: typeof DOM$get,
getJSON: typeof DOM$getJSON,
post: typeof DOM$post,
jsonpRequest: typeof DOM$jsonpRequest,
fromEventSource: typeof DOM$fromEventSource,
fromWebSocket: typeof DOM$fromWebSocket,
fromWebWorker: typeof DOM$fromWebWorker,
fromMutationObserver: typeof DOM$fromMutationObserver,
        
      }
declare interface DOM$AjaxSettings {
async?: boolean,
body?: string,
crossDomain?: boolean,
headers?: any,
method?: string,
password?: string,
progressObserver?: Rx.Observer<any>,
responseType?: string,
url?: string,
user?: string
} 

declare interface DOM$AjaxSuccessResponse {
response: any,
status: number,
responseType: string,
xhr: XMLHttpRequest,
originalEvent: Event
} 

declare interface DOM$AjaxErrorResponse {
type: string,
status: number,
xhr: XMLHttpRequest,
originalEvent: Event
} 

declare interface DOM$JsonpSettings {
async?: boolean,
jsonp?: string,
jsonpCallback?: string,
url?: string
} 

declare interface DOM$JsonpSuccessResponse {
response: any,
status: number,
responseType: string,
originalEvent: Event
} 

declare interface DOM$JsonpErrorResponse {
type: string,
status: number,
originalEvent: Event
} 

declare interface DOM$GeolocationOptions {
enableHighAccuracy?: boolean,
timeout?: number,
maximumAge?: number
} 

declare function DOM$fromEvent<T>(
element: any,
eventName: string,
selector?: Function,
useCapture?: boolean): Rx.Observable<T>


declare function DOM$ready(): Rx.Observable<any>


declare function DOM$blur(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<FocusEvent>


declare function DOM$change(element: Element, selector?: Function): Rx.Observable<Event>


declare function DOM$click(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$contextmenu(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$dblclick(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$error(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<Event>


declare function DOM$focus(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<FocusEvent>


declare function DOM$focusin(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$focusout(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$keydown(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<KeyboardEvent>


declare function DOM$keypress(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<KeyboardEvent>


declare function DOM$keyup(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<KeyboardEvent>


declare function DOM$load(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<UIEvent>


declare function DOM$mousedown(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$mouseenter(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$mouseleave(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$mousemove(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$mouseout(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$mouseover(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$mouseup(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<MouseEvent>


declare function DOM$resize(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<UIEvent>


declare function DOM$scroll(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<UIEvent>


declare function DOM$select(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<Event>


declare function DOM$submit(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<Event>


declare function DOM$unload(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<Event>


declare function DOM$pointerdown(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<PointerEvent>


declare function DOM$pointerenter(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<PointerEvent>


declare function DOM$pointerleave(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<PointerEvent>


declare function DOM$pointermove(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<PointerEvent>


declare function DOM$pointerout(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<PointerEvent>


declare function DOM$pointerover(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<PointerEvent>


declare function DOM$pointerup(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<PointerEvent>


declare function DOM$touchcancel(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<TouchEvent>


declare function DOM$touchend(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<TouchEvent>


declare function DOM$touchmove(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<TouchEvent>


declare function DOM$touchstart(
element: Element,
selector?: Function,
useCapture?: boolean): Rx.Observable<TouchEvent>


declare function DOM$ajax(
settingsOrUrl: DOM$AjaxSettings | string): Rx.Observable<DOM$AjaxSuccessResponse>


declare function DOM$get(url: string): Rx.Observable<DOM$AjaxSuccessResponse>


declare function DOM$getJSON(url: string): Rx.Observable<string>


declare function DOM$post(url: string, body: any): Rx.Observable<DOM$AjaxSuccessResponse>


declare function DOM$jsonpRequest(url: string): Rx.Observable<string>


declare function DOM$jsonpRequest(settings: DOM$JsonpSettings): Rx.Observable<DOM$JsonpSuccessResponse>


declare function DOM$fromEventSource<T>(url: string, openObservable?: Rx.Observer<T>): Rx.Observable<T>


declare function DOM$fromWebSocket(
url: string,
protocol: string,
openObserver?: Rx.Observer<Event>,
closingObserver?: Rx.Observer<CloseEvent>): Rx.Subject<MessageEvent>


declare function DOM$fromWebWorker(url: string): Rx.Subject<string>


declare function DOM$fromMutationObserver(target: Node, options: MutationObserverInit): Rx.Observable<MutationEvent>



      declare var npm$namespace$geolocation: {
        getCurrentPosition: typeof geolocation$getCurrentPosition,
watchPosition: typeof geolocation$watchPosition,
        
      }
declare function geolocation$getCurrentPosition(geolocationOptions?: DOM$GeolocationOptions): Rx.Observable<Position>


declare function geolocation$watchPosition(geolocationOptions?: DOM$GeolocationOptions): Rx.Observable<Position>

    }

	declare module.exports: typeof Rx

    }
