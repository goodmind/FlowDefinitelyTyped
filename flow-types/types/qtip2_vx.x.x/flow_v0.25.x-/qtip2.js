declare module "qtip2" {
  declare type QTip2$EventApiFunc = (event: Event, api: QTip2$Api) => void;

  /**
   * Content property
   */
  declare type QTip2$Title =
    | string
    | JQuery
    | QTip2$EventApiFunc
    | boolean
    | JQueryGenericPromise<any>;

  declare type QTip2$Text =
    | string
    | JQuery
    | QTip2$EventApiFunc
    | boolean
    | JQueryGenericPromise<any>;

  declare interface QTip2$Content {
    title?:
      | QTip2$Title
      | {
          text: QTip2$Title
        };
    text?: QTip2$Text;
    attr?: string;
    button?: string | JQuery | boolean;
  }

  /**
   * Position property
   */
  declare interface QTip2$PositionAdjust {
    x?: number;
    y?: number;
    mouse?: boolean;
    resize?: boolean;
    scroll?: boolean;
    method?: string;
  }

  declare type QTip2$Target = JQuery | number[] | string;

  declare interface QTip2$Position {
    my?: string | boolean;
    at?: string | boolean;
    target?: QTip2$Target | boolean;
    container?: JQuery | boolean;
    viewport?: JQuery | boolean;
    effect?: boolean | ((api: QTip2$Api, pos: any, viewport: any) => void);
    adjust?: QTip2$PositionAdjust;
  }

  /**
   * Show property
   */
  declare interface QTip2$Show {
    target?: JQuery | boolean;
    event?: string | boolean;
    delay?: number;
    solo?: JQuery | string | boolean;
    ready?: boolean;
    effect?: boolean | ((offset: any) => void);
    modal?: boolean | QTip2$Modal;
  }

  declare interface QTip2$Modal {
    on?: boolean;
    blur?: boolean;
    escape?: boolean;
    stealfocus?: boolean;
    effect?: boolean | ((state: any) => void);
  }

  /**
   * Hide property
   */
  declare interface QTip2$Hide {
    target?: JQuery | boolean;
    event?: string | boolean;
    delay?: number;
    inactive?: number | boolean;
    fixed?: boolean;
    leave?: string | boolean;
    distance?: number | boolean;
    effect?: boolean | ((offset: any) => void);
  }

  /**
   * Style property
   */
  declare interface QTip2$Style {
    classes?: string | boolean;
    def?: boolean;
    widget?: boolean;
    width?: string | number | boolean;
    height?: string | number | boolean;
    tip?: string | boolean | QTip2$Tip;
  }

  declare interface QTip2$Tip {
    corner?: string | boolean;
    mimic?: string | boolean;
    border?: number | boolean;
    width?: number;
    height?: number;
    offset?: number;
  }

  /**
   * Events property
   */
  declare interface QTip2$Events {
    render?: QTip2$EventApiFunc;
    show?: QTip2$EventApiFunc;
    hide?: QTip2$EventApiFunc;
    toggle?: QTip2$EventApiFunc;
    visible?: QTip2$EventApiFunc;
    hidden?: QTip2$EventApiFunc;
    move?: QTip2$EventApiFunc;
    focus?: QTip2$EventApiFunc;
    blur?: QTip2$EventApiFunc;
  }

  /**
   * Options
   */
  declare interface QTip2$QTipOptions {
    id?: string | boolean;
    prerender?: boolean;
    overwrite?: boolean;
    suppress?: boolean;
    metadata?: any;
    content?: QTip2$Text | QTip2$Content;
    position?: string | QTip2$Position;
    style?: string | QTip2$Style;
    show?: string | boolean | JQuery | QTip2$Show;
    hide?: string | JQuery | QTip2$Hide;
    events?: QTip2$Events;
  }

  /**
   * API
   */
  declare interface QTip2$Api {
    get(propertyName: "id"): string | boolean;
    get(propertyName: "prerender"): boolean;
    get(propertyName: "overwrite"): boolean;
    get(propertyName: "suppress"): boolean;
    get(propertyName: "metadata"): any;
    get(propertyName: "content"): QTip2$Content;
    get(propertyName: "content.text"): QTip2$Text;
    get(propertyName: "content.attr"): string;
    get(propertyName: "content.title"): QTip2$Title;
    get(propertyName: "content.button"): string | JQuery | boolean;
    get(propertyName: "position"): QTip2$Position;
    get(propertyName: "position.my"): string | boolean;
    get(propertyName: "position.at"): string | boolean;
    get(propertyName: "position.target"): QTip2$Target | boolean;
    get(propertyName: "position.container"): JQuery | boolean;
    get(propertyName: "position.viewport"): JQuery | boolean;
    get(
      propertyName: "position.effect"
    ): boolean | ((api: any, pos: any, viewport: any) => void);
    get(propertyName: "position.adjust"): QTip2$PositionAdjust;
    get(propertyName: "show"): QTip2$Show;
    get(propertyName: "show.target"): JQuery | boolean;
    get(propertyName: "show.event"): string | boolean;
    get(propertyName: "show.delay"): number;
    get(propertyName: "show.solo"): JQuery | string | boolean;
    get(propertyName: "show.ready"): boolean;
    get(propertyName: "show.effect"): boolean | ((offset: any) => void);
    get(propertyName: "show.modal"): boolean | QTip2$Modal;
    get(propertyName: "hide"): QTip2$Hide;
    get(propertyName: "hide.target"): JQuery | boolean;
    get(propertyName: "hide.event"): string | boolean;
    get(propertyName: "hide.delay"): number;
    get(propertyName: "hide.leave"): string | boolean;
    get(propertyName: "hide.distance"): number | boolean;
    get(propertyName: "hide.effect"): boolean | ((offset: any) => void);
    get(propertyName: "style"): QTip2$Style;
    get(propertyName: "style.classes"): string | boolean;
    get(propertyName: "style.def"): boolean;
    get(propertyName: "style.widget"): boolean;
    get(propertyName: "style.width"): string | number | boolean;
    get(propertyName: "style.height"): string | number | boolean;
    get(propertyName: "style.tip"): string | boolean | QTip2$Tip;
    get(propertyName: "events"): QTip2$Events;
    get(propertyName: "events.render"): QTip2$EventApiFunc;
    get(propertyName: "events.show"): QTip2$EventApiFunc;
    get(propertyName: "events.hide"): QTip2$EventApiFunc;
    get(propertyName: "events.toggle"): QTip2$EventApiFunc;
    get(propertyName: "events.visible"): QTip2$EventApiFunc;
    get(propertyName: "events.hidden"): QTip2$EventApiFunc;
    get(propertyName: "events.move"): QTip2$EventApiFunc;
    get(propertyName: "events.focus"): QTip2$EventApiFunc;
    get(propertyName: "events.blur"): QTip2$EventApiFunc;
    get(propertyName: string): any;
    set(properties: QTip2$QTipOptions): QTip2$Api;
    set(propertyName: "id", value: string | boolean): QTip2$Api;
    set(propertyName: "prerender", value: boolean): QTip2$Api;
    set(propertyName: "overwrite", value: boolean): QTip2$Api;
    set(propertyName: "suppress", value: boolean): QTip2$Api;
    set(propertyName: "metadata", value: any): QTip2$Api;
    set(propertyName: "content", value: QTip2$Text | QTip2$Content): QTip2$Api;
    set(
      propertyName: "content.title",
      value:
        | QTip2$Title
        | {
            text: QTip2$Title
          }
    ): QTip2$Api;
    set(propertyName: "content.text", value: QTip2$Text): QTip2$Api;
    set(propertyName: "content.attr", value: string): QTip2$Api;
    set(
      propertyName: "content.button",
      value: string | JQuery | boolean
    ): QTip2$Api;
    set(propertyName: "position", value: QTip2$Position): QTip2$Api;
    set(propertyName: "position.my", value: string | boolean): QTip2$Api;
    set(propertyName: "position.at", value: string | boolean): QTip2$Api;
    set(
      propertyName: "position.target",
      value: QTip2$Target | boolean
    ): QTip2$Api;
    set(propertyName: "position.container", value: JQuery | boolean): QTip2$Api;
    set(propertyName: "position.viewport", value: JQuery | boolean): QTip2$Api;
    set(
      propertyName: "position.effect",
      value: boolean | ((api: QTip2$Api, pos: any, viewport: any) => void)
    ): QTip2$Api;
    set(
      propertyName: "position.adjust",
      value: QTip2$PositionAdjust
    ): QTip2$Api;
    set(propertyName: "show", value: QTip2$Show): QTip2$Api;
    set(propertyName: "show.target", value: JQuery | boolean): QTip2$Api;
    set(propertyName: "show.event", value: string | boolean): QTip2$Api;
    set(propertyName: "show.delay", value: number): QTip2$Api;
    set(propertyName: "show.solo", value: JQuery | string | boolean): QTip2$Api;
    set(propertyName: "show.ready", value: boolean): QTip2$Api;
    set(
      propertyName: "show.effect",
      value: boolean | ((offset: any) => void)
    ): QTip2$Api;
    set(propertyName: "show.modal", value: boolean | QTip2$Modal): QTip2$Api;
    set(propertyName: "hide", value: QTip2$Hide): QTip2$Api;
    set(propertyName: "hide.target", value: JQuery | boolean): QTip2$Api;
    set(propertyName: "hide.event", value: string | boolean): QTip2$Api;
    set(propertyName: "hide.inactive", value: number | boolean): QTip2$Api;
    set(propertyName: "hide.fixed", value: boolean): QTip2$Api;
    set(propertyName: "hide.leave", value: string | boolean): QTip2$Api;
    set(propertyName: "hide.distance", value: number | boolean): QTip2$Api;
    set(
      propertyName: "hide.effect",
      value: boolean | ((offset: any) => void)
    ): QTip2$Api;
    set(propertyName: "style", value: QTip2$Style): QTip2$Api;
    set(propertyName: "style.classes", value: string | boolean): QTip2$Api;
    set(propertyName: "style.def", value: boolean): QTip2$Api;
    set(propertyName: "style.widget", value: boolean): QTip2$Api;
    set(
      propertyName: "style.width",
      value: string | number | boolean
    ): QTip2$Api;
    set(
      propertyName: "style.height",
      value: string | number | boolean
    ): QTip2$Api;
    set(
      propertyName: "style.tip",
      value: string | boolean | QTip2$Tip
    ): QTip2$Api;
    set(propertyName: "events", value: QTip2$Events): QTip2$Api;
    set(propertyName: "events.render", value: QTip2$EventApiFunc): QTip2$Api;
    set(propertyName: "events.show", value: QTip2$EventApiFunc): QTip2$Api;
    set(propertyName: "events.hide", value: QTip2$EventApiFunc): QTip2$Api;
    set(propertyName: "events.toggle", value: QTip2$EventApiFunc): QTip2$Api;
    set(propertyName: "events.visible", value: QTip2$EventApiFunc): QTip2$Api;
    set(propertyName: "events.hidden", value: QTip2$EventApiFunc): QTip2$Api;
    set(propertyName: "events.move", value: QTip2$EventApiFunc): QTip2$Api;
    set(propertyName: "events.focus", value: QTip2$EventApiFunc): QTip2$Api;
    set(propertyName: "events.blur", value: QTip2$EventApiFunc): QTip2$Api;
    set(propertyName: string, value: any): QTip2$Api;
    toggle(state?: boolean, event?: Event): QTip2$Api;
    show(event?: Event): QTip2$Api;
    hide(event?: Event): QTip2$Api;
    disable(state?: boolean): QTip2$Api;
    enable(): QTip2$Api;
    reposition(event?: Event, effect?: boolean): QTip2$Api;
    focus(event?: Event): QTip2$Api;
    blur(event?: Event): QTip2$Api;
    destroy(immediate?: boolean): QTip2$Api;
  }

  declare interface QTip2$Plugin {
    defaults: QTip2$QTipOptions;
    (methodName: "api"): QTip2$QTip2$Api;
    (methodName: "option", propertyName: "id"): string | boolean;
    (methodName: "option", propertyName: "prerender"): boolean;
    (methodName: "option", propertyName: "overwrite"): boolean;
    (methodName: "option", propertyName: "suppress"): boolean;
    (methodName: "option", propertyName: "metadata"): any;
    (methodName: "option", propertyName: "content"): QTip2$QTip2$Content;
    (methodName: "option", propertyName: "content.text"): QTip2$QTip2$Text;
    (methodName: "option", propertyName: "content.attr"): string;
    (methodName: "option", propertyName: "content.title"): QTip2$QTip2$Title;
    (
      methodName: "option",
      propertyName: "content.button"
    ): string | JQuery | boolean;
    (methodName: "option", propertyName: "position"): QTip2$QTip2$Position;
    (methodName: "option", propertyName: "position.my"): string | boolean;
    (methodName: "option", propertyName: "position.at"): string | boolean;
    (
      methodName: "option",
      propertyName: "position.target"
    ): QTip2$QTip2$Target | boolean;
    (
      methodName: "option",
      propertyName: "position.container"
    ): JQuery | boolean;
    (methodName: "option", propertyName: "position.viewport"): JQuery | boolean;
    (
      methodName: "option",
      propertyName: "position.effect"
    ): boolean | ((api: QTip2$QTip2$Api, pos: any, viewport: any) => void);
    (
      methodName: "option",
      propertyName: "position.adjust"
    ): QTip2$QTip2$PositionAdjust;
    (methodName: "option", propertyName: "show"): QTip2$QTip2$Show;
    (methodName: "option", propertyName: "show.target"): JQuery | boolean;
    (methodName: "option", propertyName: "show.event"): string | boolean;
    (methodName: "option", propertyName: "show.delay"): number;
    (
      methodName: "option",
      propertyName: "show.solo"
    ): JQuery | string | boolean;
    (methodName: "option", propertyName: "show.ready"): boolean;
    (
      methodName: "option",
      propertyName: "show.effect"
    ): boolean | ((offset: any) => void);
    (
      methodName: "option",
      propertyName: "show.modal"
    ): boolean | QTip2$QTip2$Modal;
    (methodName: "option", propertyName: "hide"): QTip2$QTip2$Hide;
    (methodName: "option", propertyName: "hide.target"): JQuery | boolean;
    (methodName: "option", propertyName: "hide.event"): string | boolean;
    (methodName: "option", propertyName: "hide.delay"): number;
    (methodName: "option", propertyName: "hide.leave"): string | boolean;
    (methodName: "option", propertyName: "hide.distance"): number | boolean;
    (
      methodName: "option",
      propertyName: "hide.effect"
    ): boolean | ((offset: any) => void);
    (methodName: "option", propertyName: "style"): QTip2$QTip2$Style;
    (methodName: "option", propertyName: "style.classes"): string | boolean;
    (methodName: "option", propertyName: "style.def"): boolean;
    (methodName: "option", propertyName: "style.widget"): boolean;
    (
      methodName: "option",
      propertyName: "style.width"
    ): string | number | boolean;
    (
      methodName: "option",
      propertyName: "style.height"
    ): string | number | boolean;
    (
      methodName: "option",
      propertyName: "style.tip"
    ): string | boolean | QTip2$QTip2$Tip;
    (methodName: "option", propertyName: "events"): QTip2$QTip2$Events;
    (
      methodName: "option",
      propertyName: "events.render"
    ): QTip2$QTip2$EventApiFunc;
    (
      methodName: "option",
      propertyName: "events.show"
    ): QTip2$QTip2$EventApiFunc;
    (
      methodName: "option",
      propertyName: "events.hide"
    ): QTip2$QTip2$EventApiFunc;
    (
      methodName: "option",
      propertyName: "events.toggle"
    ): QTip2$QTip2$EventApiFunc;
    (
      methodName: "option",
      propertyName: "events.visible"
    ): QTip2$QTip2$EventApiFunc;
    (
      methodName: "option",
      propertyName: "events.hidden"
    ): QTip2$QTip2$EventApiFunc;
    (
      methodName: "option",
      propertyName: "events.move"
    ): QTip2$QTip2$EventApiFunc;
    (
      methodName: "option",
      propertyName: "events.focus"
    ): QTip2$QTip2$EventApiFunc;
    (
      methodName: "option",
      propertyName: "events.blur"
    ): QTip2$QTip2$EventApiFunc;
    (
      methodName: "option",
      properties: QTip2$QTip2$QTipOptions
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "id",
      value: string | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "prerender",
      value: boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "overwrite",
      value: boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "suppress",
      value: boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "metadata",
      value: any
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "content",
      value: QTip2$QTip2$Text | QTip2$QTip2$Content
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "content.title",
      value:
        | QTip2$QTip2$Title
        | {
            text: QTip2$QTip2$Title
          }
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "content.text",
      value: QTip2$QTip2$Text
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "content.attr",
      value: string
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "content.button",
      value: string | JQuery | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "position",
      value: QTip2$QTip2$Position
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "position.my",
      value: string | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "position.at",
      value: string | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "position.target",
      value: QTip2$QTip2$Target | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "position.container",
      value: JQuery | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "position.viewport",
      value: JQuery | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "position.effect",
      value: boolean | ((api: QTip2$QTip2$Api, pos: any, viewport: any) => void)
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "position.adjust",
      value: QTip2$QTip2$PositionAdjust
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "show",
      value: QTip2$QTip2$Show
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "show.target",
      value: JQuery | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "show.event",
      value: string | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "show.delay",
      value: number
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "show.solo",
      value: JQuery | string | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "show.ready",
      value: boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "show.effect",
      value: boolean | ((offset: any) => void)
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "show.modal",
      value: boolean | QTip2$QTip2$Modal
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "hide",
      value: QTip2$QTip2$Hide
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "hide.target",
      value: JQuery | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "hide.event",
      value: string | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "hide.inactive",
      value: number | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "hide.fixed",
      value: boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "hide.leave",
      value: string | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "hide.distance",
      value: number | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "hide.effect",
      value: boolean | ((offset: any) => void)
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "style",
      value: QTip2$QTip2$Style
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "style.classes",
      value: string | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "style.def",
      value: boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "style.widget",
      value: boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "style.width",
      value: string | number | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "style.height",
      value: string | number | boolean
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "style.tip",
      value: string | boolean | QTip2$QTip2$Tip
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "events",
      value: QTip2$QTip2$Events
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "events.render",
      value: QTip2$QTip2$EventApiFunc
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "events.show",
      value: QTip2$QTip2$EventApiFunc
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "events.hide",
      value: QTip2$QTip2$EventApiFunc
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "events.toggle",
      value: QTip2$QTip2$EventApiFunc
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "events.visible",
      value: QTip2$QTip2$EventApiFunc
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "events.hidden",
      value: QTip2$QTip2$EventApiFunc
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "events.move",
      value: QTip2$QTip2$EventApiFunc
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "events.focus",
      value: QTip2$QTip2$EventApiFunc
    ): QTip2$QTip2$Api;
    (
      methodName: "option",
      propertyName: "events.blur",
      value: QTip2$QTip2$EventApiFunc
    ): QTip2$QTip2$Api;
    (methodName: "toggle", state?: boolean, event?: Event): JQuery;
    (methodName: "show", event?: Event): JQuery;
    (methodName: "hide", event?: Event): JQuery;
    (methodName: "disable", state?: boolean): JQuery;
    (methodName: "enable"): JQuery;
    (methodName: "reposition", event?: Event, effect?: boolean): JQuery;
    (methodName: "focus", event?: Event): JQuery;
    (methodName: "blur", event?: Event): JQuery;
    (methodName: "destroy", immediate?: boolean): JQuery;
    (methodName: string, p1?: any, p2?: any, p3?: any): any;
    (options?: QTip2$QTip2$QTipOptions): JQuery;
  }
  declare interface JQuery {
    qtip: QTip2$QTip2$Plugin;
  }
}
