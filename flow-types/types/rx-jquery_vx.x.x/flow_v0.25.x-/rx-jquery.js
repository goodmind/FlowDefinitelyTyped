declare interface RxJQueryAjaxResult<T> {
  data: T;
  textStatus: string;
  jqXHR: JQueryXHR;
}
declare interface JQueryStatic {
  ajaxAsObservable<T>(
    settings: JQueryAjaxSettings
  ): Rx.Observable<RxJQueryAjaxResult<T>>;
  getAsObservable<T>(
    url: string,
    data: any,
    dataType: string
  ): Rx.Observable<RxJQueryAjaxResult<T>>;
  getJSONAsObservable<T>(
    url: string,
    data: any
  ): Rx.Observable<RxJQueryAjaxResult<T>>;
  getScriptAsObservable<T>(
    url: string,
    data: any
  ): Rx.Observable<RxJQueryAjaxResult<T>>;
  postAsObservable<T>(
    url: string,
    data: any,
    dataType: string
  ): Rx.Observable<RxJQueryAjaxResult<T>>;
}
declare interface JQuery {
  onAsObservable<T: BaseJQueryEventObject>(
    events: string,
    selector?: string,
    eventData?: any
  ): Rx.Observable<T>;
  bindAsObservable<T: BaseJQueryEventObject>(
    eventType: string,
    eventData?: any
  ): Rx.Observable<T>;
  delegateAsObservable<T: BaseJQueryEventObject>(
    selector: string,
    eventType: string,
    eventData?: any
  ): Rx.Observable<T>;
  changeAsObservable(eventData?: any): Rx.Observable<JQueryInputEventObject>;
  clickAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
  dblclickAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
  focusAsObservable(eventData?: any): Rx.Observable<JQueryInputEventObject>;
  focusinAsObservable(eventData?: any): Rx.Observable<JQueryInputEventObject>;
  focusoutAsObservable(eventData?: any): Rx.Observable<JQueryInputEventObject>;
  keydownAsObservable(eventData?: any): Rx.Observable<JQueryKeyEventObject>;
  keyupAsObservable(eventData?: any): Rx.Observable<JQueryKeyEventObject>;
  loadAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
  mousedownAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
  mouseenterAsObservable(
    eventData?: any
  ): Rx.Observable<JQueryMouseEventObject>;
  mouseleaveAsObservable(
    eventData?: any
  ): Rx.Observable<JQueryMouseEventObject>;
  mousemoveAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
  mouseoutAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
  mouseoverAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
  mouseupAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
  resizeAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
  scrollAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
  selectAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
  submitAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
  unloadAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
  hideAsObservable(duration: number): Rx.Observable<BaseJQueryEventObject>;
  showAsObservable(duration: number): Rx.Observable<BaseJQueryEventObject>;
  readyAsObservable(): Rx.Observable<any>;
  animateAsObservable(
    properties: any,
    duration: number,
    easing?: string
  ): Rx.Observable<any>;
  fadeInAsObservable(duration: number, easing?: string): Rx.Observable<any>;
  fadeToAsObservable(
    duration: number,
    opacity: number,
    easing?: string
  ): Rx.Observable<any>;
  fadeOutAsObservable(duration: number, easing?: string): Rx.Observable<any>;
  fadeToggleAsObservable(duration: number, easing?: string): Rx.Observable<any>;
  slideDownAsObservable(duration: number): Rx.Observable<any>;
  slideUpAsObservable(duration: number): Rx.Observable<any>;
  slideToggleAsObservable(duration: number): Rx.Observable<any>;
  toggleAsObservable(duration: number): Rx.Observable<any>;
}
declare module "rx-jquery" {
  declare module.exports: typeof Rx;
}
