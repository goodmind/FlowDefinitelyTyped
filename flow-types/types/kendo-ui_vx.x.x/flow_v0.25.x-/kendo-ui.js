declare module "kendo-ui" {
  declare var npm$namespace$kendo: {
    culture: typeof kendo$culture,
    format: typeof kendo$format,
    fx: typeof kendo$fx,
    init: typeof kendo$init,
    observable: typeof kendo$observable,
    observableHierarchy: typeof kendo$observableHierarchy,
    render: typeof kendo$render,
    template: typeof kendo$template,
    guid: typeof kendo$guid,
    widgetInstance: typeof kendo$widgetInstance,
    alert: typeof kendo$alert,
    antiForgeryTokens: typeof kendo$antiForgeryTokens,
    bind: typeof kendo$bind,
    confirm: typeof kendo$confirm,
    destroy: typeof kendo$destroy,
    htmlEncode: typeof kendo$htmlEncode,
    parseDate: typeof kendo$parseDate,
    parseExactDate: typeof kendo$parseExactDate,
    parseFloat: typeof kendo$parseFloat,
    parseInt: typeof kendo$parseInt,
    parseColor: typeof kendo$parseColor,
    prompt: typeof kendo$prompt,
    proxyModelSetters: typeof kendo$proxyModelSetters,
    resize: typeof kendo$resize,
    saveAs: typeof kendo$saveAs,
    stringify: typeof kendo$stringify,
    throttle: typeof kendo$throttle,
    touchScroller: typeof kendo$touchScroller,
    toString: typeof kendo$toString,
    unbind: typeof kendo$unbind,
    cultures: typeof kendo$cultures,
    ns: typeof kendo$ns,
    keys: typeof kendo$keys,
    support: typeof kendo$support,
    version: typeof kendo$version,
    history: typeof kendo$history
  };
  declare function kendo$culture(): {
    name: string,
    calendar: {
      AM: string[],
      PM: string[],
      "/": string,
      ":": string,
      days: {
        names: string[],
        namesAbbr: string[],
        namesShort: string[]
      },
      months: {
        names: string[],
        namesAbbr: string[]
      },
      patterns: {
        D: string,
        F: string,
        G: string,
        M: string,
        T: string,
        Y: string,
        d: string,
        g: string,
        m: string,
        s: string,
        t: string,
        u: string,
        y: string
      },
      firstDay: number,
      twoDigitYearMax: number
    },
    calendars: {
      standard: {
        AM: string[],
        PM: string[],
        "/": string,
        ":": string,
        days: {
          names: string[],
          namesAbbr: string[],
          namesShort: string[]
        },
        months: {
          names: string[],
          namesAbbr: string[]
        },
        patterns: {
          D: string,
          F: string,
          G: string,
          M: string,
          T: string,
          Y: string,
          d: string,
          g: string,
          m: string,
          s: string,
          t: string,
          u: string,
          y: string
        },
        firstDay: string,
        twoDigitYearMax: number
      }
    },
    numberFormat: {
      currency: {
        decimals: number,
        ",": string,
        ".": string,
        groupSize: number[],
        pattern: string[],
        symbol: string
      },
      decimals: number,
      ",": string,
      ".": string,
      groupSize: number[],
      pattern: string[],
      percent: {
        decimals: number,
        ",": string,
        ".": string,
        groupSize: number[],
        pattern: string[],
        symbol: string
      }
    }
  };

  declare var kendo$cultures: {
    [kendo$culture: string]: {
      name?: string,
      calendar?: {
        AM: string[],
        PM: string[],
        "/": string,
        ":": string,
        days: {
          names: string[],
          namesAbbr: string[],
          namesShort: string[]
        },
        months: {
          names: string[],
          namesAbbr: string[]
        },
        patterns: {
          D: string,
          F: string,
          G: string,
          M: string,
          T: string,
          Y: string,
          d: string,
          g: string,
          m: string,
          s: string,
          t: string,
          u: string,
          y: string
        },
        firstDay: number,
        twoDigitYearMax: number
      },
      calendars?: {
        standard: {
          AM: string[],
          PM: string[],
          "/": string,
          ":": string,
          days: {
            names: string[],
            namesAbbr: string[],
            namesShort: string[]
          },
          months: {
            names: string[],
            namesAbbr: string[]
          },
          patterns: {
            D: string,
            F: string,
            G: string,
            M: string,
            T: string,
            Y: string,
            d: string,
            g: string,
            m: string,
            s: string,
            t: string,
            u: string,
            y: string
          },
          firstDay: number,
          twoDigitYearMax: number
        }
      },
      numberFormat?: {
        currency: {
          decimals: number,
          ",": string,
          ".": string,
          groupSize: number[],
          pattern: string[],
          symbol: string
        },
        decimals: number,
        ",": string,
        ".": string,
        groupSize: number[],
        pattern: string[],
        percent: {
          decimals: number,
          ",": string,
          ".": string,
          groupSize: number[],
          pattern: string[],
          symbol: string
        }
      }
    }
  };

  declare function kendo$format(kendo$format: string, ...values: any[]): string;

  declare function kendo$fx(selector: string): kendo$effects.drawing$Element;

  declare function kendo$fx(
    element: drawing$Element
  ): kendo$effects.drawing$Element;

  declare function kendo$fx(element: JQuery): kendo$effects.drawing$Element;

  declare function kendo$init(selector: string, ...namespaces: any[]): void;

  declare function kendo$init(element: JQuery, ...namespaces: any[]): void;

  declare function kendo$init(
    element: drawing$Element,
    ...namespaces: any[]
  ): void;

  declare function kendo$observable(
    kendo$data: any
  ): kendo$kendo$data.data$ObservableObject;

  declare function kendo$observableHierarchy(
    array: any[]
  ): kendo$kendo$data.data$ObservableArray;

  declare function kendo$render(
    kendo$template: (kendo$data: any) => string,
    kendo$data: any[]
  ): string;

  declare function kendo$template(
    kendo$template: string,
    options?: kendo$TemplateOptions
  ): (kendo$data: any) => string;

  declare function kendo$guid(): string;

  declare function kendo$widgetInstance(
    element: JQuery,
    suite?: typeof undefined
  ): kendo$kendo$ui.ui$Widget;

  declare function kendo$widgetInstance(
    element: JQuery,
    suite?: typeof undefined
  ): kendo$kendo$ui.ui$Widget;

  declare function kendo$widgetInstance(
    element: JQuery,
    suite?: typeof undefined
  ): kendo$kendo$ui.ui$Widget;

  declare var kendo$ns: string;

  declare var kendo$keys: {
    INSERT: number,
    DELETE: number,
    BACKSPACE: number,
    TAB: number,
    ENTER: number,
    ESC: number,
    LEFT: number,
    UP: number,
    RIGHT: number,
    DOWN: number,
    END: number,
    HOME: number,
    SPACEBAR: number,
    PAGEUP: number,
    PAGEDOWN: number,
    F2: number,
    F10: number,
    F12: number,
    NUMPAD_PLUS: number,
    NUMPAD_MINUS: number,
    NUMPAD_DOT: number
  };

  declare var kendo$support: {
    touch: boolean,
    pointers: boolean,
    scrollbar(): number,
    hasHW3D: boolean,
    hasNativeScrolling: boolean,
    devicePixelRatio: number,
    placeholder: boolean,
    zoomLevel: number,
    mobileOS: {
      device: string,
      tablet: any,
      browser: string,
      name: string,
      majorVersion: string,
      minorVersion: string,
      flatVersion: number,
      appMode: boolean
    },
    browser: {
      edge: boolean,
      msie: boolean,
      webkit: boolean,
      safari: boolean,
      opera: boolean,
      mozilla: boolean,
      version: string
    }
  };

  declare var kendo$version: string;

  declare interface kendo$TemplateOptions {
    paramName?: string;
    useWithBlock?: boolean;
  }

  declare class kendo$Class {
    static fn: kendo$Class;
    static extend(prototype: Object): kendo$Class;
  }

  declare class kendo$Observable mixins kendo$Class {
    static fn: kendo$Observable;
    static extend(prototype: Object): kendo$Observable;
    init(...args: any[]): void;
    bind(eventName: string, handler: Function): kendo$Observable;
    bind(events: string[], handler: Function): kendo$Observable;
    bind(
      events: string[],
      handlers: {
        [eventName: string]: Function
      }
    ): kendo$Observable;
    one(eventName: string, handler: Function): kendo$Observable;
    one(events: string[], handler: Function): kendo$Observable;
    one(
      events: string[],
      handlers: {
        [eventName: string]: Function
      }
    ): kendo$Observable;
    first(eventName: string, handler: Function): kendo$Observable;
    first(events: string[], handler: Function): kendo$Observable;
    first(
      events: string[],
      handlers: {
        [eventName: string]: Function
      }
    ): kendo$Observable;
    trigger(eventName: string, e?: any): boolean;
    unbind(eventName: string, handler?: any): kendo$Observable;
  }

  declare interface kendo$ViewOptions {
    tagName?: string;
    drawing$wrap?: boolean;
    model?: Object;
    evalTemplate?: boolean;
    kendo$init?: (e: ui$ViewEvent) => void;
    show?: (e: ui$ViewEvent) => void;
    hide?: (e: ui$ViewEvent) => void;
    name?: string;
    model?: string;
    reload?: boolean;
    scroller?: any;
    stretch?: boolean;
    title?: string;
    useNativeScrolling?: boolean;
    zoom?: boolean;
    afterShow?: (e: ui$ViewAfterShowEvent) => void;
    beforeHide?: (e: ui$ViewBeforeHideEvent) => void;
    beforeShow?: (e: ui$ViewBeforeShowEvent) => void;
    hide?: (e: ui$ViewHideEvent) => void;
    kendo$init?: (e: ui$ViewInitEvent) => void;
    show?: (e: ui$ViewShowEvent) => void;
    transitionStart?: (e: ui$ViewTransitionStartEvent) => void;
    transitionEnd?: (e: ui$ViewTransitionEndEvent) => void;
  }

  declare interface kendo$ViewEvent {
    sender: ui$View;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$View;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$View mixins kendo$Observable {
    constructor(element: drawing$Element, options?: kendo$ViewOptions): this;
    constructor(element: string, options?: kendo$ViewOptions): this;
    element: JQuery;
    content: any;
    tagName: string;
    model: Object;
    init(element: drawing$Element, options?: kendo$ViewOptions): void;
    init(element: string, options?: kendo$ViewOptions): void;
    render(container?: any): JQuery;
    destroy(): void;
  }

  declare class kendo$ViewContainer mixins kendo$Observable {
    view: kendo$View;
  }

  declare class kendo$Layout mixins kendo$View {
    containers: {
      [selector: string]: kendo$ViewContainer
    };
    showIn(selector: string, view: kendo$View, transitionClass?: string): void;
  }

  declare class kendo$History mixins kendo$Observable {
    current: string;
    root: string;
    start(options: Object): void;
    stop(): void;
    change(callback: Function): void;
    navigate(location: string, silent?: boolean): void;
  }

  declare var kendo$history: kendo$History;

  declare interface kendo$RouterOptions {
    kendo$init?: (e: kendo$RouterEvent) => void;
    pushState?: boolean;
    hashBang?: boolean;
    root?: string;
    ignoreCase?: boolean;
    change?: (e: kendo$RouterChangeEvent) => void;
    routeMissing?: (e: kendo$RouterRouteMissingEvent) => void;
    same?: (e: kendo$RouterEvent) => void;
  }

  declare interface kendo$RouterEvent {
    sender: kendo$Router;
    url: string;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$RouterChangeEvent = {
    params: any,
    backButtonPressed: boolean
  } & kendo$RouterEvent;

  declare type kendo$RouterRouteMissingEvent = {
    params: any
  } & kendo$RouterEvent;

  declare class kendo$Route mixins kendo$Class {
    route: RegExp;
    callback(url: string): void;
    worksWith(url: string): void;
  }

  declare class kendo$Router mixins kendo$Observable {
    constructor(options?: kendo$RouterOptions): this;
    routes: kendo$Route[];
    init(options?: kendo$RouterOptions): void;
    start(): void;
    destroy(): void;
    route(route: string, callback: Function): void;
    navigate(location: string, silent?: boolean): void;
    replace(location: string, silent?: boolean): void;
  }

  declare var npm$namespace$effects: {
    box: typeof effects$box,
    fillScale: typeof effects$fillScale,
    fitScale: typeof effects$fitScale,
    transformOrigin: typeof effects$transformOrigin
  };
  declare function effects$box(element: HTMLElement): any;

  declare function effects$fillScale(
    firstElement: HTMLElement,
    secondElement: HTMLElement
  ): number;

  declare function effects$fitScale(
    firstElement: HTMLElement,
    secondElement: HTMLElement
  ): number;

  declare function effects$transformOrigin(
    firstElement: HTMLElement,
    secondElement: HTMLElement
  ): any;

  declare var npm$namespace$transports: {
    odata: typeof transports$odata
  };
  declare var transports$odata: data$DataSourceTransport;

  declare class ui$Alert mixins undefined.ui$Dialog {
    static fn: ui$Alert;
    options: ui$AlertOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Alert;
    constructor(element: drawing$Element, options?: ui$AlertOptions): this;
  }

  declare interface ui$AlertMessages {
    okText?: string;
  }

  declare interface ui$AlertOptions {
    name?: string;
    messages?: ui$AlertMessages;
  }

  declare interface ui$AlertEvent {
    sender: ui$Alert;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$AutoComplete mixins undefined.ui$Widget {
    static fn: ui$AutoComplete;
    options: ui$AutoCompleteOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$AutoComplete;
    constructor(
      element: drawing$Element,
      options?: ui$AutoCompleteOptions
    ): this;
    close(): void;
    dataItem(index: number): any;
    dataItem(index: drawing$Element): any;
    dataItem(index: JQuery): any;
    destroy(): void;
    enable(effects$enable: boolean): void;
    focus(): void;
    items(): any;
    readonly(readonly: boolean): void;
    refresh(): void;
    search(word: string): void;
    select(item: string): void;
    select(item: drawing$Element): void;
    select(item: JQuery): void;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
    suggest(value: string): void;
    value(): string;
    value(value: string): void;
  }

  declare interface ui$AutoCompleteAnimationClose {
    duration?: number;
    kendo$effects?: string;
  }

  declare interface ui$AutoCompleteAnimationOpen {
    duration?: number;
    kendo$effects?: string;
  }

  declare interface ui$AutoCompleteAnimation {
    close?: ui$AutoCompleteAnimationClose;
    open?: ui$AutoCompleteAnimationOpen;
  }

  declare interface ui$AutoCompleteVirtual {
    itemHeight?: number;
    mapValueTo?: string;
    valueMapper?: Function;
  }

  declare interface ui$AutoCompleteOptions {
    name?: string;
    animation?: boolean | ui$AutoCompleteAnimation;
    autoWidth?: boolean;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    clearButton?: boolean;
    dataTextField?: string;
    delay?: number;
    effects$enable?: boolean;
    enforceMinLength?: boolean;
    filter?: string;
    fixedGroupTemplate?: string | Function;
    footerTemplate?: string | Function;
    groupTemplate?: string | Function;
    height?: number;
    highlightFirst?: boolean;
    ignoreCase?: boolean;
    minLength?: number;
    noDataTemplate?: string | Function;
    placeholder?: string;
    popup?: any;
    separator?: string | any;
    suggest?: boolean;
    headerTemplate?: string | Function;
    kendo$template?: string | Function;
    value?: string;
    valuePrimitive?: boolean;
    virtual?: boolean | ui$AutoCompleteVirtual;
    change?: (e: ui$AutoCompleteChangeEvent) => void;
    close?: (e: ui$AutoCompleteCloseEvent) => void;
    dataBound?: (e: ui$AutoCompleteDataBoundEvent) => void;
    filtering?: (e: ui$AutoCompleteFilteringEvent) => void;
    open?: (e: ui$AutoCompleteOpenEvent) => void;
    select?: (e: ui$AutoCompleteSelectEvent) => void;
  }

  declare interface ui$AutoCompleteEvent {
    sender: ui$AutoComplete;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$AutoCompleteChangeEvent = {} & ui$AutoCompleteEvent;

  declare type ui$AutoCompleteCloseEvent = {} & ui$AutoCompleteEvent;

  declare type ui$AutoCompleteDataBoundEvent = {} & ui$AutoCompleteEvent;

  declare type ui$AutoCompleteFilteringEvent = {
    filter?: any
  } & ui$AutoCompleteEvent;

  declare type ui$AutoCompleteOpenEvent = {} & ui$AutoCompleteEvent;

  declare type ui$AutoCompleteSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & ui$AutoCompleteEvent;

  declare class ui$Button mixins undefined.ui$Widget {
    static fn: ui$Button;
    options: ui$ButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Button;
    constructor(element: drawing$Element, options?: ui$ButtonOptions): this;
    enable(toggle: boolean): void;
  }

  declare interface ui$ButtonOptions {
    name?: string;
    effects$enable?: boolean;
    icon?: string;
    iconClass?: string;
    imageUrl?: string;
    spriteCssClass?: string;
    click?: (e: ui$ButtonClickEvent) => void;
    name?: string;
    badge?: string;
    clickOn?: string;
    effects$enable?: boolean;
    icon?: string;
    click?: (e: ui$ButtonClickEvent) => void;
  }

  declare interface ui$ButtonEvent {
    sender: ui$Button;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$Button;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ButtonClickEvent = {
    event?: any,
    target?: JQuery,
    button?: JQuery
  } & ui$ButtonEvent;

  declare class ui$ButtonGroup mixins undefined.ui$Widget {
    static fn: ui$ButtonGroup;
    options: ui$ButtonGroupOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ButtonGroup;
    constructor(
      element: drawing$Element,
      options?: ui$ButtonGroupOptions
    ): this;
    badge(button: string, value: string): string;
    badge(button: string, value: boolean): string;
    badge(button: number, value: string): string;
    badge(button: number, value: boolean): string;
    current(): JQuery;
    destroy(): void;
    enable(effects$enable: boolean): void;
    select(li: JQuery): void;
    select(li: number): void;
    selectedIndices: Array<number>;
  }

  declare interface ui$ButtonGroupItem {
    attributes?: any;
    badge?: string;
    enabled?: boolean;
    icon?: string;
    iconClass?: string;
    imageUrl?: string;
    selected?: boolean;
    text?: string;
    encoded?: boolean;
  }

  declare interface ui$ButtonGroupOptions {
    name?: string;
    effects$enable?: boolean;
    index?: number;
    selection?: string;
    items?: ui$ButtonGroupItem[];
    select?: (e: ui$ButtonGroupSelectEvent) => void;
    name?: string;
    effects$enable?: boolean;
    index?: number;
    selectOn?: string;
    select?: (e: ui$ButtonGroupSelectEvent) => void;
  }

  declare interface ui$ButtonGroupEvent {
    sender: ui$ButtonGroup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$ButtonGroup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ButtonGroupSelectEvent = {
    indices?: any,
    index?: number
  } & ui$ButtonGroupEvent;

  declare class ui$Calendar mixins undefined.ui$Widget {
    static fn: ui$Calendar;
    options: ui$CalendarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Calendar;
    constructor(element: drawing$Element, options?: ui$CalendarOptions): this;
    current(): Date;
    destroy(): void;
    max(): Date;
    max(value: Date): void;
    max(value: string): void;
    min(): Date;
    min(value: Date): void;
    min(value: string): void;
    navigate(value: Date, view: string): void;
    navigateDown(value: Date): void;
    navigateToFuture(): void;
    navigateToPast(): void;
    navigateUp(): void;
    selectDates(): void;
    selectDates(): void;
    value(): Date;
    value(value: Date): void;
    value(value: string): void;
    view(): any;
  }

  declare interface ui$CalendarMessages {
    weekColumnHeader?: string;
  }

  declare interface ui$CalendarMonth {
    content?: string;
    weekNumber?: string;
    empty?: string;
  }

  declare interface ui$CalendarOptions {
    name?: string;
    kendo$culture?: string;
    dates?: any;
    depth?: string;
    disableDates?: any | Function;
    footer?: boolean | string | Function;
    kendo$format?: string;
    max?: Date;
    messages?: ui$CalendarMessages;
    min?: Date;
    month?: ui$CalendarMonth;
    selectable?: string;
    selectDates?: any;
    weekNumber?: boolean;
    start?: string;
    value?: Date;
    change?: (e: ui$CalendarEvent) => void;
    navigate?: (e: ui$CalendarEvent) => void;
  }

  declare interface ui$CalendarEvent {
    sender: ui$Calendar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$Chat mixins undefined.ui$Widget {
    static fn: ui$Chat;
    options: ui$ChatOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Chat;
    constructor(element: drawing$Element, options?: ui$ChatOptions): this;
    getUser(): any;
    postMessage(message: string): void;
    renderAttachments(options: any, sender: any): void;
    renderMessage(message: any, sender: any): void;
    renderSuggestedActions(suggestedActions: any): void;
  }

  declare interface ui$ChatMessages {
    placeholder?: string;
  }

  declare interface ui$ChatUser {
    iconUrl?: string;
    name?: string;
  }

  declare interface ui$ChatRenderAttachmentsOptionsAttachments {
    content?: any;
    contentType?: string;
  }

  declare interface ui$ChatRenderAttachmentsOptions {
    attachments?: ui$ChatRenderAttachmentsOptionsAttachments;
    attachmentLayout?: string;
  }

  declare interface ui$ChatRenderAttachmentsSender {
    id?: any;
    name?: string;
    iconUrl?: string;
  }

  declare interface ui$ChatRenderMessageMessage {
    type?: string;
    text?: string;
  }

  declare interface ui$ChatRenderMessageSender {
    id?: any;
    name?: string;
    iconUrl?: string;
  }

  declare interface ui$ChatRenderSuggestedActionsSuggestedActions {
    title?: string;
    value?: string;
  }

  declare interface ui$ChatOptions {
    name?: string;
    messages?: ui$ChatMessages;
    user?: ui$ChatUser;
    actionClick?: (e: ui$ChatActionClickEvent) => void;
    post?: (e: ui$ChatPostEvent) => void;
    sendMessage?: (e: ui$ChatSendMessageEvent) => void;
    typingEnd?: (e: ui$ChatTypingEndEvent) => void;
    typingStart?: (e: ui$ChatTypingStartEvent) => void;
  }

  declare interface ui$ChatEvent {
    sender: ui$Chat;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ChatActionClickEvent = {
    text?: string
  } & ui$ChatEvent;

  declare type ui$ChatPostEvent = {
    text?: string,
    timestamp?: Date,
    from?: any
  } & ui$ChatEvent;

  declare type ui$ChatSendMessageEvent = {
    text?: string
  } & ui$ChatEvent;

  declare type ui$ChatTypingEndEvent = {} & ui$ChatEvent;

  declare type ui$ChatTypingStartEvent = {} & ui$ChatEvent;

  declare class ui$ColorPalette mixins undefined.ui$Widget {
    static fn: ui$ColorPalette;
    options: ui$ColorPaletteOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ColorPalette;
    constructor(
      element: drawing$Element,
      options?: ui$ColorPaletteOptions
    ): this;
    value(): string;
    value(color?: string): void;
    color(): kendo$kendo$Color;
    color(color?: kendo$kendo$Color): void;
    enable(effects$enable?: boolean): void;
  }

  declare interface ui$ColorPaletteTileSize {
    width?: number;
    height?: number;
  }

  declare interface ui$ColorPaletteOptions {
    name?: string;
    palette?: string | any;
    columns?: number;
    tileSize?: ui$ColorPaletteTileSize;
    value?: string;
    change?: (e: ui$ColorPaletteEvent) => void;
  }

  declare interface ui$ColorPaletteEvent {
    sender: ui$ColorPalette;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$ColorPicker mixins undefined.ui$Widget {
    static fn: ui$ColorPicker;
    options: ui$ColorPickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ColorPicker;
    constructor(
      element: drawing$Element,
      options?: ui$ColorPickerOptions
    ): this;
    close(): void;
    open(): void;
    toggle(): void;
    value(): string;
    value(color?: string): void;
    color(): kendo$kendo$Color;
    color(color?: kendo$kendo$Color): void;
    enable(effects$enable?: boolean): void;
  }

  declare interface ui$ColorPickerMessages {
    timezone$apply?: string;
    cancel?: string;
    previewInput?: string;
  }

  declare interface ui$ColorPickerTileSize {
    width?: number;
    height?: number;
  }

  declare interface ui$ColorPickerOptions {
    name?: string;
    buttons?: boolean;
    clearButton?: boolean;
    columns?: number;
    tileSize?: ui$ColorPickerTileSize;
    messages?: ui$ColorPickerMessages;
    palette?: string | any;
    opacity?: boolean;
    preview?: boolean;
    toolIcon?: string;
    value?: string;
    change?: (e: ui$ColorPickerChangeEvent) => void;
    select?: (e: ui$ColorPickerSelectEvent) => void;
    open?: (e: ui$ColorPickerEvent) => void;
    close?: (e: ui$ColorPickerEvent) => void;
  }

  declare interface ui$ColorPickerEvent {
    sender: ui$ColorPicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ColorPickerChangeEvent = {
    value?: string
  } & ui$ColorPickerEvent;

  declare type ui$ColorPickerSelectEvent = {
    value?: string
  } & ui$ColorPickerEvent;

  declare class ui$ComboBox mixins undefined.ui$Widget {
    static fn: ui$ComboBox;
    options: ui$ComboBoxOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    input: JQuery;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ComboBox;
    constructor(element: drawing$Element, options?: ui$ComboBoxOptions): this;
    close(): void;
    dataItem(index?: number): any;
    destroy(): void;
    enable(effects$enable: boolean): void;
    focus(): void;
    items(): any;
    open(): void;
    readonly(readonly: boolean): void;
    refresh(): void;
    search(word: string): void;
    select(): number;
    select(li: JQuery): void;
    select(li: number): void;
    select(li: Function): void;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
    suggest(value: string): void;
    text(): string;
    text(text: string): void;
    toggle(toggle: boolean): void;
    value(): string;
    value(value: string): void;
  }

  declare interface ui$ComboBoxAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$ComboBoxAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$ComboBoxAnimation {
    close?: ui$ComboBoxAnimationClose;
    open?: ui$ComboBoxAnimationOpen;
  }

  declare interface ui$ComboBoxPopup {
    appendTo?: string;
    origin?: string;
    position?: string;
  }

  declare interface ui$ComboBoxVirtual {
    itemHeight?: number;
    mapValueTo?: string;
    valueMapper?: Function;
  }

  declare interface ui$ComboBoxOptions {
    name?: string;
    animation?: ui$ComboBoxAnimation;
    autoBind?: boolean;
    autoWidth?: boolean;
    cascadeFrom?: string;
    cascadeFromField?: string;
    clearButton?: boolean;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    dataTextField?: string;
    dataValueField?: string;
    delay?: number;
    effects$enable?: boolean;
    enforceMinLength?: boolean;
    filter?: string;
    fixedGroupTemplate?: string | Function;
    footerTemplate?: string | Function;
    groupTemplate?: string | Function;
    height?: number;
    highlightFirst?: boolean;
    ignoreCase?: boolean;
    index?: number;
    minLength?: number;
    noDataTemplate?: string | Function;
    placeholder?: string;
    popup?: ui$ComboBoxPopup;
    suggest?: boolean;
    syncValueAndText?: boolean;
    headerTemplate?: string | Function;
    kendo$template?: string | Function;
    text?: string;
    value?: string;
    valuePrimitive?: boolean;
    virtual?: boolean | ui$ComboBoxVirtual;
    change?: (e: ui$ComboBoxChangeEvent) => void;
    close?: (e: ui$ComboBoxCloseEvent) => void;
    dataBound?: (e: ui$ComboBoxDataBoundEvent) => void;
    filtering?: (e: ui$ComboBoxFilteringEvent) => void;
    open?: (e: ui$ComboBoxOpenEvent) => void;
    select?: (e: ui$ComboBoxSelectEvent) => void;
    cascade?: (e: ui$ComboBoxCascadeEvent) => void;
  }

  declare interface ui$ComboBoxEvent {
    sender: ui$ComboBox;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ComboBoxChangeEvent = {} & ui$ComboBoxEvent;

  declare type ui$ComboBoxCloseEvent = {} & ui$ComboBoxEvent;

  declare type ui$ComboBoxDataBoundEvent = {} & ui$ComboBoxEvent;

  declare type ui$ComboBoxFilteringEvent = {
    filter?: any
  } & ui$ComboBoxEvent;

  declare type ui$ComboBoxOpenEvent = {} & ui$ComboBoxEvent;

  declare type ui$ComboBoxSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & ui$ComboBoxEvent;

  declare type ui$ComboBoxCascadeEvent = {} & ui$ComboBoxEvent;

  declare class ui$Confirm mixins undefined.ui$Dialog {
    static fn: ui$Confirm;
    options: ui$ConfirmOptions;
    result: JQueryPromise<any>;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Confirm;
    constructor(element: drawing$Element, options?: ui$ConfirmOptions): this;
  }

  declare interface ui$ConfirmMessages {
    okText?: string;
    cancel?: string;
  }

  declare interface ui$ConfirmOptions {
    name?: string;
    messages?: ui$ConfirmMessages;
  }

  declare interface ui$ConfirmEvent {
    sender: ui$Confirm;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$ContextMenu mixins undefined.ui$Widget {
    static fn: ui$ContextMenu;
    options: ui$ContextMenuOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ContextMenu;
    constructor(
      element: drawing$Element,
      options?: ui$ContextMenuOptions
    ): this;
    append(item: any, referenceItem?: string): kendo$kendo$ui.ui$ContextMenu;
    append(item: any, referenceItem?: JQuery): kendo$kendo$ui.ui$ContextMenu;
    close(element: drawing$Element): kendo$kendo$ui.ui$ContextMenu;
    close(element: JQuery): kendo$kendo$ui.ui$ContextMenu;
    destroy(): void;
    enable(
      element: string,
      effects$enable: boolean
    ): kendo$kendo$ui.ui$ContextMenu;
    enable(
      element: drawing$Element,
      effects$enable: boolean
    ): kendo$kendo$ui.ui$ContextMenu;
    enable(
      element: JQuery,
      effects$enable: boolean
    ): kendo$kendo$ui.ui$ContextMenu;
    insertAfter(
      item: any,
      referenceItem: string
    ): kendo$kendo$ui.ui$ContextMenu;
    insertAfter(
      item: any,
      referenceItem: drawing$Element
    ): kendo$kendo$ui.ui$ContextMenu;
    insertAfter(
      item: any,
      referenceItem: JQuery
    ): kendo$kendo$ui.ui$ContextMenu;
    insertBefore(
      item: any,
      referenceItem: string
    ): kendo$kendo$ui.ui$ContextMenu;
    insertBefore(
      item: any,
      referenceItem: drawing$Element
    ): kendo$kendo$ui.ui$ContextMenu;
    insertBefore(
      item: any,
      referenceItem: JQuery
    ): kendo$kendo$ui.ui$ContextMenu;
    open(x: number, y?: number): kendo$kendo$ui.ui$ContextMenu;
    open(x: drawing$Element, y?: number): kendo$kendo$ui.ui$ContextMenu;
    open(x: JQuery, y?: number): kendo$kendo$ui.ui$ContextMenu;
    remove(element: string): kendo$kendo$ui.ui$ContextMenu;
    remove(element: drawing$Element): kendo$kendo$ui.ui$ContextMenu;
    remove(element: JQuery): kendo$kendo$ui.ui$ContextMenu;
  }

  declare interface ui$ContextMenuAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$ContextMenuAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$ContextMenuAnimation {
    close?: ui$ContextMenuAnimationClose;
    open?: ui$ContextMenuAnimationOpen;
  }

  declare interface ui$ContextMenuOptions {
    name?: string;
    alignToAnchor?: boolean;
    animation?: boolean | ui$ContextMenuAnimation;
    appendTo?: string | JQuery;
    closeOnClick?: boolean;
    copyAnchorStyles?: boolean;
    dataSource?: any | any;
    direction?: string;
    filter?: string;
    hoverDelay?: number;
    orientation?: string;
    popupCollision?: string;
    showOn?: string;
    target?: string | JQuery;
    close?: (e: ui$ContextMenuCloseEvent) => void;
    open?: (e: ui$ContextMenuOpenEvent) => void;
    activate?: (e: ui$ContextMenuActivateEvent) => void;
    deactivate?: (e: ui$ContextMenuDeactivateEvent) => void;
    select?: (e: ui$ContextMenuSelectEvent) => void;
  }

  declare interface ui$ContextMenuEvent {
    sender: ui$ContextMenu;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ContextMenuCloseEvent = {
    item?: drawing$Element,
    type?: string,
    target?: drawing$Element,
    event?: JQueryEventObject
  } & ui$ContextMenuEvent;

  declare type ui$ContextMenuOpenEvent = {
    item?: drawing$Element,
    type?: string,
    target?: drawing$Element,
    event?: JQueryEventObject
  } & ui$ContextMenuEvent;

  declare type ui$ContextMenuActivateEvent = {
    item?: drawing$Element,
    type?: string,
    target?: drawing$Element
  } & ui$ContextMenuEvent;

  declare type ui$ContextMenuDeactivateEvent = {
    item?: drawing$Element,
    type?: string,
    target?: drawing$Element
  } & ui$ContextMenuEvent;

  declare type ui$ContextMenuSelectEvent = {
    item?: drawing$Element,
    type?: string,
    target?: drawing$Element
  } & ui$ContextMenuEvent;

  declare class ui$DateInput mixins undefined.ui$Widget {
    static fn: ui$DateInput;
    options: ui$DateInputOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$DateInput;
    constructor(element: drawing$Element, options?: ui$DateInputOptions): this;
    destroy(): void;
    enable(effects$enable: boolean): void;
    readonly(readonly: boolean): void;
    max(): Date;
    max(value: Date): void;
    max(value: string): void;
    min(): Date;
    min(value: Date): void;
    min(value: string): void;
    setOptions(options: any): void;
    value(): Date;
    value(value: Date): void;
    value(value: string): void;
  }

  declare interface ui$DateInputMessages {
    year?: string;
    month?: string;
    day?: string;
    weekday?: string;
    hour?: string;
    minute?: string;
    second?: string;
    dayperiod?: string;
  }

  declare interface ui$DateInputOptions {
    name?: string;
    kendo$format?: string;
    max?: Date;
    min?: Date;
    value?: Date;
    messages?: ui$DateInputMessages;
    change?: (e: ui$DateInputChangeEvent) => void;
  }

  declare interface ui$DateInputEvent {
    sender: ui$DateInput;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$DateInputChangeEvent = {} & ui$DateInputEvent;

  declare class ui$DatePicker mixins undefined.ui$Widget {
    static fn: ui$DatePicker;
    options: ui$DatePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$DatePicker;
    constructor(element: drawing$Element, options?: ui$DatePickerOptions): this;
    close(): void;
    destroy(): void;
    enable(effects$enable: boolean): void;
    readonly(readonly: boolean): void;
    max(): Date;
    max(value: Date): void;
    max(value: string): void;
    min(): Date;
    min(value: Date): void;
    min(value: string): void;
    open(): void;
    setOptions(options: any): void;
    value(): Date;
    value(value: Date): void;
    value(value: string): void;
  }

  declare interface ui$DatePickerAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$DatePickerAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$DatePickerAnimation {
    close?: ui$DatePickerAnimationClose;
    open?: ui$DatePickerAnimationOpen;
  }

  declare interface ui$DatePickerMonth {
    content?: string;
    weekNumber?: string;
    empty?: string;
  }

  declare interface ui$DatePickerOptions {
    name?: string;
    animation?: boolean | ui$DatePickerAnimation;
    ARIATemplate?: string;
    kendo$culture?: string;
    dateInput?: boolean;
    dates?: any;
    depth?: string;
    disableDates?: any | Function;
    footer?: boolean | string | Function;
    kendo$format?: string;
    max?: Date;
    min?: Date;
    month?: ui$DatePickerMonth;
    weekNumber?: boolean;
    parseFormats?: any;
    start?: string;
    value?: Date;
    change?: (e: ui$DatePickerChangeEvent) => void;
    close?: (e: ui$DatePickerCloseEvent) => void;
    open?: (e: ui$DatePickerOpenEvent) => void;
  }

  declare interface ui$DatePickerEvent {
    sender: ui$DatePicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$DatePickerChangeEvent = {} & ui$DatePickerEvent;

  declare type ui$DatePickerCloseEvent = {} & ui$DatePickerEvent;

  declare type ui$DatePickerOpenEvent = {} & ui$DatePickerEvent;

  declare class ui$DateRangePicker mixins undefined.ui$Widget {
    static fn: ui$DateRangePicker;
    options: ui$DateRangePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$DateRangePicker;
    constructor(
      element: drawing$Element,
      options?: ui$DateRangePickerOptions
    ): this;
    close(): void;
    destroy(): void;
    enable(effects$enable: boolean): void;
    readonly(readonly: boolean): void;
    max(): Date;
    max(value: Date): void;
    max(value: string): void;
    min(): Date;
    min(value: Date): void;
    min(value: string): void;
    open(): void;
    range(): any;
    range(range: ui$DateRangePickerRange): void;
    setOptions(options: any): void;
  }

  declare interface ui$DateRangePickerMessages {
    startLabel?: string;
    endLabel?: string;
  }

  declare interface ui$DateRangePickerMonth {
    content?: string;
    weekNumber?: string;
    empty?: string;
  }

  declare interface ui$DateRangePickerRange {
    start?: Date;
    end?: Date;
  }

  declare interface ui$DateRangePickerOptions {
    name?: string;
    ARIATemplate?: string;
    kendo$culture?: string;
    dates?: any;
    depth?: string;
    disableDates?: any | Function;
    footer?: string | Function;
    kendo$format?: string;
    max?: Date;
    messages?: ui$DateRangePickerMessages;
    min?: Date;
    month?: ui$DateRangePickerMonth;
    labels?: boolean;
    weekNumber?: boolean;
    range?: ui$DateRangePickerRange;
    start?: string;
    change?: (e: ui$DateRangePickerChangeEvent) => void;
    close?: (e: ui$DateRangePickerCloseEvent) => void;
    open?: (e: ui$DateRangePickerOpenEvent) => void;
  }

  declare interface ui$DateRangePickerEvent {
    sender: ui$DateRangePicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$DateRangePickerChangeEvent = {} & ui$DateRangePickerEvent;

  declare type ui$DateRangePickerCloseEvent = {} & ui$DateRangePickerEvent;

  declare type ui$DateRangePickerOpenEvent = {} & ui$DateRangePickerEvent;

  declare class ui$DateTimePicker mixins undefined.ui$Widget {
    static fn: ui$DateTimePicker;
    options: ui$DateTimePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$DateTimePicker;
    constructor(
      element: drawing$Element,
      options?: ui$DateTimePickerOptions
    ): this;
    close(view: string): void;
    destroy(): void;
    enable(effects$enable: boolean): void;
    readonly(readonly: boolean): void;
    max(): Date;
    max(value: Date): void;
    max(value: string): void;
    min(): Date;
    min(value: Date): void;
    min(value: string): void;
    open(view: string): void;
    setOptions(options: any): void;
    toggle(view: string): void;
    value(): Date;
    value(value: Date): void;
    value(value: string): void;
  }

  declare interface ui$DateTimePickerAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$DateTimePickerAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$DateTimePickerAnimation {
    close?: ui$DateTimePickerAnimationClose;
    open?: ui$DateTimePickerAnimationOpen;
  }

  declare interface ui$DateTimePickerMonth {
    content?: string;
    weekNumber?: string;
    empty?: string;
  }

  declare interface ui$DateTimePickerOptions {
    name?: string;
    animation?: boolean | ui$DateTimePickerAnimation;
    ARIATemplate?: string;
    kendo$culture?: string;
    dateInput?: boolean;
    dates?: any;
    depth?: string;
    disableDates?: any | Function;
    footer?: boolean | string | Function;
    kendo$format?: string;
    interval?: number;
    max?: Date;
    min?: Date;
    month?: ui$DateTimePickerMonth;
    weekNumber?: boolean;
    parseFormats?: any;
    start?: string;
    timeFormat?: string;
    value?: Date;
    change?: (e: ui$DateTimePickerChangeEvent) => void;
    close?: (e: ui$DateTimePickerCloseEvent) => void;
    open?: (e: ui$DateTimePickerOpenEvent) => void;
  }

  declare interface ui$DateTimePickerEvent {
    sender: ui$DateTimePicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$DateTimePickerChangeEvent = {} & ui$DateTimePickerEvent;

  declare type ui$DateTimePickerCloseEvent = {
    view?: string
  } & ui$DateTimePickerEvent;

  declare type ui$DateTimePickerOpenEvent = {
    view?: string
  } & ui$DateTimePickerEvent;

  declare class ui$Dialog mixins undefined.ui$Widget {
    static fn: ui$Dialog;
    options: any;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Dialog;
    constructor(element: drawing$Element, options?: ui$DialogOptions): this;
    close(): kendo$kendo$ui.ui$Dialog;
    content(): string;
    content(content?: string): kendo$kendo$ui.ui$Dialog;
    content(content?: JQuery): kendo$kendo$ui.ui$Dialog;
    destroy(): void;
    open(): kendo$kendo$ui.ui$Dialog;
    title(): string;
    title(text?: string): kendo$kendo$ui.ui$Dialog;
    toFront(): kendo$kendo$ui.ui$Dialog;
  }

  declare interface ui$DialogAction {
    text?: string;
    action?: Function;
    primary?: boolean;
  }

  declare interface ui$DialogAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$DialogAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$DialogAnimation {
    close?: ui$DialogAnimationClose;
    open?: ui$DialogAnimationOpen;
  }

  declare interface ui$DialogMessages {
    close?: string;
    promptInput?: string;
  }

  declare interface ui$DialogModal {
    preventScroll?: string;
  }

  declare interface ui$DialogOptions {
    name?: string;
    actions?: ui$DialogAction[];
    animation?: boolean | ui$DialogAnimation;
    buttonLayout?: string;
    closable?: boolean;
    content?: string;
    height?: number | string;
    maxHeight?: number;
    maxWidth?: number;
    messages?: ui$DialogMessages;
    minHeight?: number;
    minWidth?: number;
    modal?: boolean | ui$DialogModal;
    title?: string | boolean;
    visible?: boolean;
    width?: number | string;
    size?: string;
    close?: (e: ui$DialogCloseEvent) => void;
    hide?: (e: ui$DialogEvent) => void;
    initOpen?: (e: ui$DialogEvent) => void;
    open?: (e: ui$DialogEvent) => void;
    show?: (e: ui$DialogEvent) => void;
  }

  declare interface ui$DialogEvent {
    sender: ui$Dialog;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$DialogCloseEvent = {
    userTriggered?: boolean
  } & ui$DialogEvent;

  declare class ui$DropDownList mixins undefined.ui$Widget {
    static fn: ui$DropDownList;
    options: ui$DropDownListOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    span: JQuery;
    filterInput: JQuery;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$DropDownList;
    constructor(
      element: drawing$Element,
      options?: ui$DropDownListOptions
    ): this;
    close(): void;
    dataItem(index?: JQuery): any;
    dataItem(index?: number): any;
    destroy(): void;
    focus(): void;
    items(): any;
    enable(effects$enable: boolean): void;
    open(): void;
    readonly(readonly: boolean): void;
    refresh(): void;
    search(word: string): void;
    select(): number;
    select(li: JQuery): void;
    select(li: number): void;
    select(li: Function): void;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
    text(): string;
    text(text: string): void;
    toggle(toggle: boolean): void;
    value(): string;
    value(value: string): void;
  }

  declare interface ui$DropDownListAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$DropDownListAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$DropDownListAnimation {
    close?: ui$DropDownListAnimationClose;
    open?: ui$DropDownListAnimationOpen;
  }

  declare interface ui$DropDownListPopup {
    appendTo?: string;
    origin?: string;
    position?: string;
  }

  declare interface ui$DropDownListVirtual {
    itemHeight?: number;
    mapValueTo?: string;
    valueMapper?: Function;
  }

  declare interface ui$DropDownListOptions {
    name?: string;
    animation?: boolean | ui$DropDownListAnimation;
    autoBind?: boolean;
    autoWidth?: boolean;
    cascadeFrom?: string;
    cascadeFromField?: string;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    dataTextField?: string;
    dataValueField?: string;
    delay?: number;
    effects$enable?: boolean;
    enforceMinLength?: boolean;
    filter?: string;
    fixedGroupTemplate?: string | Function;
    footerTemplate?: string | Function;
    groupTemplate?: string | Function;
    height?: number;
    ignoreCase?: boolean;
    index?: number;
    minLength?: number;
    noDataTemplate?: string | Function;
    popup?: ui$DropDownListPopup;
    optionLabel?: string | any;
    optionLabelTemplate?: string | Function;
    headerTemplate?: string | Function;
    kendo$template?: string | Function;
    valueTemplate?: string | Function;
    text?: string;
    value?: string;
    valuePrimitive?: boolean;
    virtual?: boolean | ui$DropDownListVirtual;
    change?: (e: ui$DropDownListChangeEvent) => void;
    close?: (e: ui$DropDownListCloseEvent) => void;
    dataBound?: (e: ui$DropDownListDataBoundEvent) => void;
    filtering?: (e: ui$DropDownListFilteringEvent) => void;
    open?: (e: ui$DropDownListOpenEvent) => void;
    select?: (e: ui$DropDownListSelectEvent) => void;
    cascade?: (e: ui$DropDownListCascadeEvent) => void;
  }

  declare interface ui$DropDownListEvent {
    sender: ui$DropDownList;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$DropDownListChangeEvent = {} & ui$DropDownListEvent;

  declare type ui$DropDownListCloseEvent = {} & ui$DropDownListEvent;

  declare type ui$DropDownListDataBoundEvent = {} & ui$DropDownListEvent;

  declare type ui$DropDownListFilteringEvent = {
    filter?: any
  } & ui$DropDownListEvent;

  declare type ui$DropDownListOpenEvent = {} & ui$DropDownListEvent;

  declare type ui$DropDownListSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & ui$DropDownListEvent;

  declare type ui$DropDownListCascadeEvent = {} & ui$DropDownListEvent;

  declare class ui$DropDownTree mixins undefined.ui$Widget {
    static fn: ui$DropDownTree;
    options: ui$DropDownTreeOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    tagList: JQuery;
    tree: JQuery;
    treeview: kendo$kendo$ui.ui$TreeView;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$DropDownTree;
    constructor(
      element: drawing$Element,
      options?: ui$DropDownTreeOptions
    ): this;
    close(): void;
    destroy(): void;
    enable(effects$enable: boolean): void;
    focus(): void;
    items(): any;
    open(): void;
    readonly(readonly: boolean): void;
    refresh(): void;
    search(word: string): void;
    setDataSource(
      dataSource: kendo$kendo$data.data$HierarchicalDataSource
    ): void;
    toggle(toggle?: boolean): void;
    value(): any;
    value(value: any): void;
    value(value: string): void;
  }

  declare interface ui$DropDownTreeAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$DropDownTreeAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$DropDownTreeAnimation {
    close?: ui$DropDownTreeAnimationClose;
    open?: ui$DropDownTreeAnimationOpen;
  }

  declare interface ui$DropDownTreeCheckboxes {
    checkChildren?: boolean;
    name?: string;
    kendo$template?: string | Function;
  }

  declare interface ui$DropDownTreeMessages {
    clear?: string;
    deleteTag?: string;
    singleTag?: string;
  }

  declare interface ui$DropDownTreePopup {
    appendTo?: string;
    origin?: string;
    position?: string;
  }

  declare interface ui$DropDownTreeOptions {
    name?: string;
    animation?: boolean | ui$DropDownTreeAnimation;
    autoBind?: boolean;
    autoClose?: boolean;
    autoWidth?: boolean;
    checkAll?: boolean;
    checkAllTemplate?: string | Function;
    checkboxes?: boolean | ui$DropDownTreeCheckboxes;
    clearButton?: boolean;
    dataImageUrlField?: string;
    dataSource?: any | any | kendo$kendo$data.data$HierarchicalDataSource;
    dataSpriteCssClassField?: string;
    dataTextField?: string | any;
    dataUrlField?: string;
    dataValueField?: string | any;
    delay?: number;
    effects$enable?: boolean;
    enforceMinLength?: boolean;
    filter?: string;
    footerTemplate?: string | Function;
    height?: string | number;
    ignoreCase?: boolean;
    loadOnDemand?: boolean;
    messages?: ui$DropDownTreeMessages;
    minLength?: number;
    noDataTemplate?: string | Function;
    placeholder?: string;
    popup?: ui$DropDownTreePopup;
    headerTemplate?: string | Function;
    valueTemplate?: string | Function;
    tagMode?: string;
    kendo$template?: string | Function;
    text?: string;
    value?: string | any;
    valuePrimitive?: boolean;
    change?: (e: ui$DropDownTreeChangeEvent) => void;
    close?: (e: ui$DropDownTreeCloseEvent) => void;
    dataBound?: (e: ui$DropDownTreeDataBoundEvent) => void;
    filtering?: (e: ui$DropDownTreeFilteringEvent) => void;
    open?: (e: ui$DropDownTreeOpenEvent) => void;
    select?: (e: ui$DropDownTreeSelectEvent) => void;
  }

  declare interface ui$DropDownTreeEvent {
    sender: ui$DropDownTree;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$DropDownTreeChangeEvent = {} & ui$DropDownTreeEvent;

  declare type ui$DropDownTreeCloseEvent = {} & ui$DropDownTreeEvent;

  declare type ui$DropDownTreeDataBoundEvent = {} & ui$DropDownTreeEvent;

  declare type ui$DropDownTreeFilteringEvent = {
    filter?: any
  } & ui$DropDownTreeEvent;

  declare type ui$DropDownTreeOpenEvent = {} & ui$DropDownTreeEvent;

  declare type ui$DropDownTreeSelectEvent = {
    node?: drawing$Element
  } & ui$DropDownTreeEvent;

  declare class ui$Editor mixins undefined.ui$Widget {
    static fn: ui$Editor;
    options: ui$EditorOptions;
    body: drawing$Element;
    toolbar: kendo$kendo$ui.editor.editor$Toolbar;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Editor;
    constructor(element: drawing$Element, options?: ui$EditorOptions): this;
    createRange(document?: Document): spreadsheet$Range;
    destroy(): void;
    encodedValue(): string;
    exec(name: string, params: any): void;
    focus(): void;
    getRange(): spreadsheet$Range;
    getSelection(): Selection;
    paste(html: string, options: any): void;
    selectedHtml(): string;
    refresh(): void;
    saveAsPDF(): JQueryPromise<any>;
    selectRange(range: spreadsheet$Range): void;
    update(): void;
    state(toolName: string): boolean;
    value(): string;
    value(value: string): void;
  }

  declare interface ui$EditorDeserialization {
    custom?: Function;
  }

  declare interface ui$EditorFileBrowserMessages {
    uploadFile?: string;
    orderBy?: string;
    orderByName?: string;
    orderBySize?: string;
    directoryNotFound?: string;
    emptyFolder?: string;
    deleteFile?: string;
    invalidFileType?: string;
    overwriteFile?: string;
    search?: string;
  }

  declare interface ui$EditorFileBrowserSchemaModelFieldsName {
    field?: string;
    parse?: Function;
  }

  declare interface ui$EditorFileBrowserSchemaModelFieldsSize {
    field?: string;
    parse?: Function;
  }

  declare interface ui$EditorFileBrowserSchemaModelFieldsType {
    parse?: Function;
    field?: string;
  }

  declare interface ui$EditorFileBrowserSchemaModelFields {
    name?: string | ui$EditorFileBrowserSchemaModelFieldsName;
    type?: string | ui$EditorFileBrowserSchemaModelFieldsType;
    size?: string | ui$EditorFileBrowserSchemaModelFieldsSize;
  }

  declare interface ui$EditorFileBrowserSchemaModel {
    id?: string;
    fields?: ui$EditorFileBrowserSchemaModelFields;
  }

  declare interface ui$EditorFileBrowserSchema {}

  declare interface ui$EditorFileBrowserTransportCreate {
    contentType?: string;
    kendo$data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface ui$EditorFileBrowserTransportDestroy {
    contentType?: string;
    kendo$data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface ui$EditorFileBrowserTransportRead {
    contentType?: string;
    kendo$data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface ui$EditorFileBrowserTransport {
    read?: string | Function | ui$EditorFileBrowserTransportRead;
    uploadUrl?: string;
    fileUrl?: string | Function;
    kendo$destroy?: string | ui$EditorFileBrowserTransportDestroy;
    create?: string | ui$EditorFileBrowserTransportCreate;
  }

  declare interface ui$EditorFileBrowser {
    fileTypes?: string;
    path?: string;
    transport?: ui$EditorFileBrowserTransport;
    schema?: ui$EditorFileBrowserSchema;
    messages?: ui$EditorFileBrowserMessages;
  }

  declare interface ui$EditorImageBrowserMessages {
    uploadFile?: string;
    orderBy?: string;
    orderByName?: string;
    orderBySize?: string;
    directoryNotFound?: string;
    emptyFolder?: string;
    deleteFile?: string;
    invalidFileType?: string;
    overwriteFile?: string;
    search?: string;
  }

  declare interface ui$EditorImageBrowserSchemaModelFieldsName {
    field?: string;
    parse?: Function;
  }

  declare interface ui$EditorImageBrowserSchemaModelFieldsSize {
    field?: string;
    parse?: Function;
  }

  declare interface ui$EditorImageBrowserSchemaModelFieldsType {
    parse?: Function;
    field?: string;
  }

  declare interface ui$EditorImageBrowserSchemaModelFields {
    name?: string | ui$EditorImageBrowserSchemaModelFieldsName;
    type?: string | ui$EditorImageBrowserSchemaModelFieldsType;
    size?: string | ui$EditorImageBrowserSchemaModelFieldsSize;
  }

  declare interface ui$EditorImageBrowserSchemaModel {
    id?: string;
    fields?: ui$EditorImageBrowserSchemaModelFields;
  }

  declare interface ui$EditorImageBrowserSchema {}

  declare interface ui$EditorImageBrowserTransportCreate {
    contentType?: string;
    kendo$data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface ui$EditorImageBrowserTransportDestroy {
    contentType?: string;
    kendo$data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface ui$EditorImageBrowserTransportRead {
    contentType?: string;
    kendo$data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface ui$EditorImageBrowserTransport {
    read?: string | Function | ui$EditorImageBrowserTransportRead;
    thumbnailUrl?: string | Function;
    uploadUrl?: string;
    imageUrl?: string | Function;
    kendo$destroy?: string | ui$EditorImageBrowserTransportDestroy;
    create?: string | ui$EditorImageBrowserTransportCreate;
  }

  declare interface ui$EditorImageBrowser {
    fileTypes?: string;
    path?: string;
    transport?: ui$EditorImageBrowserTransport;
    schema?: ui$EditorImageBrowserSchema;
    messages?: ui$EditorImageBrowserMessages;
  }

  declare interface ui$EditorImmutables {
    deserialization?: Function;
    serialization?: string | Function;
  }

  declare interface ui$EditorMessages {
    accessibilityTab?: string;
    addColumnLeft?: string;
    addColumnRight?: string;
    addRowAbove?: string;
    addRowBelow?: string;
    alignCenter?: string;
    alignCenterBottom?: string;
    alignCenterMiddle?: string;
    alignCenterTop?: string;
    alignLeft?: string;
    alignLeftBottom?: string;
    alignLeftMiddle?: string;
    alignLeftTop?: string;
    alignRemove?: string;
    alignRight?: string;
    alignRightBottom?: string;
    alignRightMiddle?: string;
    alignRightTop?: string;
    alignment?: string;
    associateCellsWithHeaders?: string;
    backColor?: string;
    background?: string;
    bold?: string;
    border?: string;
    style?: string;
    caption?: string;
    cellMargin?: string;
    cellPadding?: string;
    cellSpacing?: string;
    cellTab?: string;
    cleanFormatting?: string;
    collapseBorders?: string;
    columns?: string;
    createLink?: string;
    createTable?: string;
    createTableHint?: string;
    cssClass?: string;
    deleteColumn?: string;
    deleteRow?: string;
    dialogCancel?: string;
    dialogInsert?: string;
    dialogOk?: string;
    dialogUpdate?: string;
    editAreaTitle?: string;
    fileTitle?: string;
    fileWebAddress?: string;
    fontName?: string;
    fontNameInherit?: string;
    fontSize?: string;
    fontSizeInherit?: string;
    foreColor?: string;
    formatBlock?: string;
    formatting?: string;
    height?: string;
    id?: string;
    imageAltText?: string;
    imageHeight?: string;
    imageWebAddress?: string;
    imageWidth?: string;
    indent?: string;
    insertFile?: string;
    insertHtml?: string;
    insertImage?: string;
    insertOrderedList?: string;
    insertUnorderedList?: string;
    italic?: string;
    overflowAnchor?: string;
    justifyCenter?: string;
    justifyFull?: string;
    justifyLeft?: string;
    justifyRight?: string;
    linkOpenInNewWindow?: string;
    linkText?: string;
    linkToolTip?: string;
    linkWebAddress?: string;
    outdent?: string;
    print?: string;
    rows?: string;
    selectAllCells?: string;
    strikethrough?: string;
    subscript?: string;
    summary?: string;
    superscript?: string;
    tableTab?: string;
    tableWizard?: string;
    underline?: string;
    units?: string;
    unlink?: string;
    viewHtml?: string;
    width?: string;
    wrapText?: string;
  }

  declare interface ui$EditorPasteCleanup {
    all?: boolean;
    css?: boolean;
    custom?: Function;
    keepNewLines?: boolean;
    msAllFormatting?: boolean;
    msConvertLists?: boolean;
    msTags?: boolean;
    none?: boolean;
    span?: boolean;
  }

  declare interface ui$EditorPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface ui$EditorPdf {
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    kendo$date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: ui$EditorPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface ui$EditorResizable {
    content?: boolean;
    min?: number;
    max?: number;
    toolbar?: boolean;
  }

  declare interface ui$EditorSerialization {
    custom?: Function;
    entities?: boolean;
    scripts?: boolean;
    semantic?: boolean;
  }

  declare interface ui$EditorToolItem {
    text?: string;
    value?: string;
    context?: string;
  }

  declare interface ui$EditorTool {
    name?: string;
    tooltip?: string;
    exec?: Function;
    items?: ui$EditorToolItem[];
    palette?: string | any;
    columns?: number;
    kendo$template?: string;
  }

  declare interface ui$EditorExecParams {
    value?: any;
  }

  declare interface ui$EditorPasteOptions {
    split?: boolean;
  }

  declare interface ui$EditorOptions {
    name?: string;
    placeholder?: string;
    deserialization?: ui$EditorDeserialization;
    domain?: string;
    encoded?: boolean;
    immutables?: boolean | ui$EditorImmutables;
    messages?: ui$EditorMessages;
    pasteCleanup?: ui$EditorPasteCleanup;
    kendo$pdf?: ui$EditorPdf;
    resizable?: boolean | ui$EditorResizable;
    serialization?: ui$EditorSerialization;
    stylesheets?: any;
    tools?: ui$EditorTool[];
    imageBrowser?: ui$EditorImageBrowser;
    fileBrowser?: ui$EditorFileBrowser;
    change?: (e: ui$EditorEvent) => void;
    execute?: (e: ui$EditorExecuteEvent) => void;
    keydown?: (e: ui$EditorEvent) => void;
    keyup?: (e: ui$EditorEvent) => void;
    paste?: (e: ui$EditorPasteEvent) => void;
    pdfExport?: (e: ui$EditorPdfExportEvent) => void;
    select?: (e: ui$EditorEvent) => void;
  }

  declare interface ui$EditorEvent {
    sender: ui$Editor;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$EditorExecuteEvent = {
    name?: string,
    command?: any
  } & ui$EditorEvent;

  declare type ui$EditorPasteEvent = {
    html?: any
  } & ui$EditorEvent;

  declare type ui$EditorPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & ui$EditorEvent;

  declare class ui$FilterMenu mixins undefined.ui$Widget {
    static fn: ui$FilterMenu;
    options: ui$FilterMenuOptions;
    field: string;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$FilterMenu;
    constructor(element: drawing$Element, options?: ui$FilterMenuOptions): this;
    clear(): void;
  }

  declare interface ui$FilterMenuMessages {
    and?: string;
    clear?: string;
    filter?: string;
    info?: string;
    title?: string;
    additionalValue?: string;
    additionalOperator?: string;
    logic?: string;
    isFalse?: string;
    isTrue?: string;
    or?: string;
    selectValue?: string;
  }

  declare interface ui$FilterMenuOperatorsDate {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface ui$FilterMenuOperatorsEnums {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
  }

  declare interface ui$FilterMenuOperatorsNumber {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface ui$FilterMenuOperatorsString {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    isempty?: string;
    isnotempty?: string;
    startswith?: string;
    contains?: string;
    doesnotcontain?: string;
    endswith?: string;
    isnullorempty?: string;
    isnotnullorempty?: string;
  }

  declare interface ui$FilterMenuOperators {
    string?: ui$FilterMenuOperatorsString;
    number?: ui$FilterMenuOperatorsNumber;
    kendo$date?: ui$FilterMenuOperatorsDate;
    enums?: ui$FilterMenuOperatorsEnums;
  }

  declare interface ui$FilterMenuOptions {
    name?: string;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    extra?: boolean;
    field?: string;
    messages?: ui$FilterMenuMessages;
    operators?: ui$FilterMenuOperators;
  }

  declare interface ui$FilterMenuEvent {
    sender: ui$FilterMenu;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$FlatColorPicker mixins undefined.ui$Widget {
    static fn: ui$FlatColorPicker;
    options: ui$FlatColorPickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$FlatColorPicker;
    constructor(
      element: drawing$Element,
      options?: ui$FlatColorPickerOptions
    ): this;
    focus(): void;
    value(): string;
    value(color?: string): void;
    color(): kendo$kendo$Color;
    color(color?: kendo$kendo$Color): void;
    enable(effects$enable?: boolean): void;
  }

  declare interface ui$FlatColorPickerMessages {
    timezone$apply?: string;
    cancel?: string;
  }

  declare interface ui$FlatColorPickerOptions {
    name?: string;
    opacity?: boolean;
    buttons?: boolean;
    value?: string;
    preview?: boolean;
    autoupdate?: boolean;
    messages?: ui$FlatColorPickerMessages;
    change?: (e: ui$FlatColorPickerChangeEvent) => void;
  }

  declare interface ui$FlatColorPickerEvent {
    sender: ui$FlatColorPicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$FlatColorPickerChangeEvent = {
    value?: string
  } & ui$FlatColorPickerEvent;

  declare class ui$Gantt mixins undefined.ui$Widget {
    static fn: ui$Gantt;
    options: ui$GanttOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    dependencies: kendo$kendo$data.data$GanttDependencyDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Gantt;
    constructor(element: drawing$Element, options?: ui$GanttOptions): this;
    clearSelection(): void;
    dataItem(row: string): kendo$kendo$data.data$GanttTask;
    dataItem(row: drawing$Element): kendo$kendo$data.data$GanttTask;
    dataItem(row: JQuery): kendo$kendo$data.data$GanttTask;
    date(kendo$date?: Date): Date;
    destroy(): void;
    range(range?: any): any;
    refresh(): void;
    refreshDependencies(): void;
    removeDependency(dependency: string): void;
    removeDependency(dependency: kendo$kendo$data.data$GanttDependency): void;
    removeTask(task: string): void;
    removeTask(task: kendo$kendo$data.data$GanttTask): void;
    saveAsPDF(): JQueryPromise<any>;
    select(): JQuery;
    select(row: string): void;
    select(row: drawing$Element): void;
    select(row: JQuery): void;
    setDataSource(dataSource: kendo$kendo$data.data$GanttDataSource): void;
    setDependenciesDataSource(
      dataSource: kendo$kendo$data.data$GanttDependencyDataSource
    ): void;
    view(): kendo$kendo$ui.ui$GanttView;
    view(type?: string): void;
  }

  declare interface ui$GanttAssignments {
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    dataResourceIdField?: string;
    dataTaskIdField?: string;
    dataValueField?: string;
  }

  declare interface ui$GanttColumn {
    field?: string;
    title?: string;
    kendo$format?: string;
    width?: string | number;
    editable?: boolean;
    sortable?: boolean;
  }

  declare interface ui$GanttCurrentTimeMarker {
    updateInterval?: number;
  }

  declare interface ui$GanttEditable {
    confirmation?: boolean;
    create?: boolean;
    dependencyCreate?: boolean;
    dependencyDestroy?: boolean;
    dragPercentComplete?: boolean;
    kendo$destroy?: boolean;
    move?: boolean;
    reorder?: boolean;
    kendo$resize?: boolean;
    kendo$template?: string | Function;
    update?: boolean;
  }

  declare interface ui$GanttMessagesActions {
    addChild?: string;
    append?: string;
    insertAfter?: string;
    insertBefore?: string;
    kendo$pdf?: string;
  }

  declare interface ui$GanttMessagesEditor {
    assignButton?: string;
    editorTitle?: string;
    end?: string;
    percentComplete?: string;
    resources?: string;
    resourcesEditorTitle?: string;
    resourcesHeader?: string;
    start?: string;
    title?: string;
    unitsHeader?: string;
  }

  declare interface ui$GanttMessagesViews {
    day?: string;
    end?: string;
    month?: string;
    start?: string;
    week?: string;
    year?: string;
  }

  declare interface ui$GanttMessages {
    actions?: ui$GanttMessagesActions;
    cancel?: string;
    deleteDependencyConfirmation?: string;
    deleteDependencyWindowTitle?: string;
    deleteTaskConfirmation?: string;
    deleteTaskWindowTitle?: string;
    kendo$destroy?: string;
    editor?: ui$GanttMessagesEditor;
    save?: string;
    views?: ui$GanttMessagesViews;
  }

  declare interface ui$GanttPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface ui$GanttPdf {
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    kendo$date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: ui$GanttPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface ui$GanttRange {
    start?: Date;
    end?: Date;
  }

  declare interface ui$GanttResources {
    dataFormatField?: string;
    dataColorField?: string;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    dataTextField?: string;
    field?: string;
  }

  declare interface ui$GanttToolbarItem {
    name?: string;
    kendo$template?: string | Function;
    text?: string;
  }

  declare interface ui$GanttTooltip {
    kendo$template?: string | Function;
    visible?: boolean;
  }

  declare interface ui$GanttViewRange {
    start?: Date;
    end?: Date;
  }

  declare interface ui$GanttView {
    kendo$date?: Date;
    range?: ui$GanttViewRange;
    type?: string;
    selected?: boolean;
    slotSize?: number | string;
    timeHeaderTemplate?: string | Function;
    dayHeaderTemplate?: string | Function;
    weekHeaderTemplate?: string | Function;
    monthHeaderTemplate?: string | Function;
    yearHeaderTemplate?: string | Function;
    resizeTooltipFormat?: string;
  }

  declare interface ui$GanttOptions {
    name?: string;
    assignments?: ui$GanttAssignments;
    autoBind?: boolean;
    columnResizeHandleWidth?: number;
    columns?: ui$GanttColumn[];
    currentTimeMarker?: boolean | ui$GanttCurrentTimeMarker;
    dataSource?: any | any | kendo$kendo$data.data$GanttDataSource;
    kendo$date?: Date;
    dependencies?: any | any | kendo$kendo$data.data$GanttDependencyDataSource;
    editable?: boolean | ui$GanttEditable;
    navigatable?: boolean;
    workDayStart?: Date;
    workDayEnd?: Date;
    workWeekStart?: number;
    workWeekEnd?: number;
    hourSpan?: number;
    snap?: boolean;
    height?: number | string;
    listWidth?: string | number;
    messages?: ui$GanttMessages;
    kendo$pdf?: ui$GanttPdf;
    range?: ui$GanttRange;
    resizable?: boolean;
    selectable?: boolean;
    showWorkDays?: boolean;
    showWorkHours?: boolean;
    taskTemplate?: string | Function;
    toolbar?: ui$GanttToolbarItem[];
    tooltip?: ui$GanttTooltip;
    views?: ui$GanttView[];
    resources?: ui$GanttResources;
    rowHeight?: number | string;
    dataBinding?: (e: ui$GanttDataBindingEvent) => void;
    dataBound?: (e: ui$GanttDataBoundEvent) => void;
    add?: (e: ui$GanttAddEvent) => void;
    edit?: (e: ui$GanttEditEvent) => void;
    timezone$remove?: (e: ui$GanttRemoveEvent) => void;
    cancel?: (e: ui$GanttCancelEvent) => void;
    save?: (e: ui$GanttSaveEvent) => void;
    change?: (e: ui$GanttChangeEvent) => void;
    columnResize?: (e: ui$GanttColumnResizeEvent) => void;
    navigate?: (e: ui$GanttNavigateEvent) => void;
    moveStart?: (e: ui$GanttMoveStartEvent) => void;
    move?: (e: ui$GanttMoveEvent) => void;
    moveEnd?: (e: ui$GanttMoveEndEvent) => void;
    pdfExport?: (e: ui$GanttPdfExportEvent) => void;
    resizeStart?: (e: ui$GanttResizeStartEvent) => void;
    kendo$resize?: (e: ui$GanttResizeEvent) => void;
    resizeEnd?: (e: ui$GanttResizeEndEvent) => void;
  }

  declare interface ui$GanttEvent {
    sender: ui$Gantt;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$GanttDataBindingEvent = {} & ui$GanttEvent;

  declare type ui$GanttDataBoundEvent = {} & ui$GanttEvent;

  declare type ui$GanttAddEvent = {
    task?: kendo$kendo$data.data$GanttTask,
    dependency?: kendo$kendo$data.data$GanttDependency
  } & ui$GanttEvent;

  declare type ui$GanttEditEvent = {
    container?: JQuery,
    task?: kendo$kendo$data.data$GanttTask
  } & ui$GanttEvent;

  declare type ui$GanttRemoveEvent = {
    task?: kendo$kendo$data.data$GanttTask,
    dependencies?: any
  } & ui$GanttEvent;

  declare type ui$GanttCancelEvent = {
    container?: JQuery,
    task?: kendo$kendo$data.data$GanttTask
  } & ui$GanttEvent;

  declare type ui$GanttSaveEvent = {
    task?: kendo$kendo$data.data$GanttTask,
    values?: any
  } & ui$GanttEvent;

  declare type ui$GanttChangeEvent = {} & ui$GanttEvent;

  declare type ui$GanttColumnResizeEvent = {
    column?: any,
    newWidth?: number,
    oldWidth?: number
  } & ui$GanttEvent;

  declare type ui$GanttNavigateEvent = {
    view?: string
  } & ui$GanttEvent;

  declare type ui$GanttMoveStartEvent = {
    task?: kendo$kendo$data.data$GanttTask
  } & ui$GanttEvent;

  declare type ui$GanttMoveEvent = {
    task?: kendo$kendo$data.data$GanttTask,
    start?: Date,
    end?: Date
  } & ui$GanttEvent;

  declare type ui$GanttMoveEndEvent = {
    task?: kendo$kendo$data.data$GanttTask,
    start?: Date,
    end?: Date
  } & ui$GanttEvent;

  declare type ui$GanttPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & ui$GanttEvent;

  declare type ui$GanttResizeStartEvent = {
    task?: kendo$kendo$data.data$GanttTask
  } & ui$GanttEvent;

  declare type ui$GanttResizeEvent = {
    task?: kendo$kendo$data.data$GanttTask,
    start?: Date,
    end?: Date
  } & ui$GanttEvent;

  declare type ui$GanttResizeEndEvent = {
    task?: kendo$kendo$data.data$GanttTask,
    start?: Date,
    end?: Date
  } & ui$GanttEvent;

  declare class ui$Grid mixins undefined.ui$Widget {
    static fn: ui$Grid;
    options: ui$GridOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    columns: ui$GridColumn[];
    footer: JQuery;
    pager: kendo$kendo$ui.ui$Pager;
    table: JQuery;
    tbody: JQuery;
    thead: JQuery;
    content: JQuery;
    lockedHeader: JQuery;
    lockedTable: JQuery;
    lockedContent: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Grid;
    constructor(element: drawing$Element, options?: ui$GridOptions): this;
    addRow(): void;
    autoFitColumn(column: number): void;
    autoFitColumn(column: string): void;
    autoFitColumn(column: any): void;
    cancelChanges(): void;
    cancelRow(): void;
    cellIndex(cell: string): number;
    cellIndex(cell: drawing$Element): number;
    cellIndex(cell: JQuery): number;
    clearSelection(): void;
    closeCell(isCancel?: boolean): void;
    collapseGroup(row: string): void;
    collapseGroup(row: drawing$Element): void;
    collapseGroup(row: JQuery): void;
    collapseRow(row: string): void;
    collapseRow(row: drawing$Element): void;
    collapseRow(row: JQuery): void;
    current(): JQuery;
    current(cell: JQuery): void;
    dataItem(row: string): kendo$kendo$data.data$ObservableObject;
    dataItem(row: drawing$Element): kendo$kendo$data.data$ObservableObject;
    dataItem(row: JQuery): kendo$kendo$data.data$ObservableObject;
    destroy(): void;
    editCell(cell: JQuery): void;
    editRow(row: JQuery): void;
    expandGroup(row: string): void;
    expandGroup(row: drawing$Element): void;
    expandGroup(row: JQuery): void;
    expandRow(row: string): void;
    expandRow(row: drawing$Element): void;
    expandRow(row: JQuery): void;
    getOptions(): ui$GridOptions;
    hideColumn(column: number): void;
    hideColumn(column: string): void;
    hideColumn(column: any): void;
    items(): any;
    lockColumn(column: number): void;
    lockColumn(column: string): void;
    refresh(): void;
    removeRow(row: string): void;
    removeRow(row: drawing$Element): void;
    removeRow(row: JQuery): void;
    reorderColumn(destIndex: number, column: any): void;
    resizeColumn(column: any, value: number): void;
    saveAsExcel(): void;
    saveAsPDF(): JQueryPromise<any>;
    saveChanges(): void;
    saveRow(): void;
    select(): JQuery;
    select(rows: string): void;
    select(rows: drawing$Element): void;
    select(rows: JQuery): void;
    selectedKeyNames(): any;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
    setOptions(options: any): void;
    showColumn(column: number): void;
    showColumn(column: string): void;
    showColumn(column: any): void;
    unlockColumn(column: number): void;
    unlockColumn(column: string): void;
  }

  declare interface ui$GridAllowCopy {
    delimeter?: string | any;
  }

  declare interface ui$GridColumnMenuMessages {
    columns?: string;
    filter?: string;
    sortAscending?: string;
    sortDescending?: string;
    settings?: string;
    done?: string;
    lock?: string;
    unlock?: string;
  }

  declare interface ui$GridColumnMenu {
    columns?: boolean;
    filterable?: boolean;
    sortable?: boolean;
    messages?: ui$GridColumnMenuMessages;
  }

  declare interface ui$GridColumnCommandItemIconClass {
    cancel?: string;
    edit?: string;
    update?: string;
  }

  declare interface ui$GridColumnCommandItemText {
    edit?: string;
    cancel?: string;
    update?: string;
  }

  declare interface ui$GridColumnCommandItem {
    className?: string;
    click?: Function;
    iconClass?: string | ui$GridColumnCommandItemIconClass;
    name?: string;
    kendo$template?: string;
    text?: string | ui$GridColumnCommandItemText;
    visible?: Function;
  }

  declare interface ui$GridColumnFilterableCell {
    dataSource?: any | kendo$kendo$data.data$DataSource;
    dataTextField?: string;
    delay?: number;
    inputWidth?: number;
    suggestionOperator?: string;
    minLength?: number;
    enabled?: boolean;
    operator?: string;
    showOperators?: boolean;
    kendo$template?: Function;
  }

  declare interface ui$GridColumnFilterable {
    cell?: ui$GridColumnFilterableCell;
    extra?: boolean;
    multi?: boolean;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    checkAll?: boolean;
    itemTemplate?: Function;
    operators?: any;
    search?: boolean;
    ignoreCase?: boolean;
    kendo$ui?: string | Function;
  }

  declare interface ui$GridColumnGroupable {
    compare?: Function;
    dir?: string;
  }

  declare interface ui$GridColumnSortable {
    allowUnsort?: boolean;
    compare?: Function;
    initialDirection?: string;
  }

  declare interface ui$GridColumn {
    editor?: (container: JQuery, options: ui$GridColumnEditorOptions) => void;
    aggregates?: any;
    attributes?: any;
    columns?: any;
    command?:
      | string
      | string[]
      | ui$GridColumnCommandItem
      | ui$GridColumnCommandItem[];
    editable?: Function;
    encoded?: boolean;
    field?: string;
    filterable?: boolean | ui$GridColumnFilterable;
    footerAttributes?: any;
    footerTemplate?: string | Function;
    kendo$format?: string;
    groupable?: boolean | ui$GridColumnGroupable;
    groupHeaderColumnTemplate?: string | Function;
    groupHeaderTemplate?: string | Function;
    groupFooterTemplate?: string | Function;
    headerAttributes?: any;
    headerTemplate?: string | Function;
    hidden?: boolean;
    locked?: boolean;
    lockable?: boolean;
    media?: string;
    minResizableWidth?: number;
    minScreenWidth?: number;
    selectable?: boolean;
    sortable?: boolean | ui$GridColumnSortable;
    kendo$template?: string | Function;
    title?: string;
    width?: string | number;
    values?: any;
    menu?: boolean;
  }

  declare interface ui$GridEditable {
    confirmation?: boolean | string | Function;
    cancelDelete?: string;
    confirmDelete?: string;
    createAt?: string;
    kendo$destroy?: boolean;
    mode?: string;
    kendo$template?: string | Function;
    update?: boolean;
    window?: any;
  }

  declare interface ui$GridExcel {
    allPages?: boolean;
    fileName?: string;
    filterable?: boolean;
    forceProxy?: boolean;
    proxyURL?: string;
  }

  declare interface ui$GridFilterableMessages {
    and?: string;
    clear?: string;
    filter?: string;
    info?: string;
    title?: string;
    isFalse?: string;
    isTrue?: string;
    or?: string;
    search?: string;
    selectValue?: string;
    cancel?: string;
    selectedItemsFormat?: string;
    operator?: string;
    value?: string;
    checkAll?: string;
  }

  declare interface ui$GridFilterableOperatorsDate {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface ui$GridFilterableOperatorsEnums {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
  }

  declare interface ui$GridFilterableOperatorsNumber {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface ui$GridFilterableOperatorsString {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    isempty?: string;
    isnotempty?: string;
    startswith?: string;
    contains?: string;
    doesnotcontain?: string;
    endswith?: string;
  }

  declare interface ui$GridFilterableOperators {
    string?: ui$GridFilterableOperatorsString;
    number?: ui$GridFilterableOperatorsNumber;
    kendo$date?: ui$GridFilterableOperatorsDate;
    enums?: ui$GridFilterableOperatorsEnums;
  }

  declare interface ui$GridFilterable {
    extra?: boolean;
    messages?: ui$GridFilterableMessages;
    mode?: string;
    operators?: ui$GridFilterableOperators;
  }

  declare interface ui$GridGroupableMessages {
    empty?: string;
  }

  declare interface ui$GridGroupable {
    enabled?: boolean;
    showFooter?: boolean;
    messages?: ui$GridGroupableMessages;
    compare?: Function;
    dir?: string;
  }

  declare interface ui$GridMessagesCommands {
    cancel?: string;
    canceledit?: string;
    create?: string;
    kendo$destroy?: string;
    edit?: string;
    excel?: string;
    save?: string;
    update?: string;
  }

  declare interface ui$GridMessages {
    commands?: ui$GridMessagesCommands;
    noRecords?: string;
    expandCollapseColumnHeader?: string;
  }

  declare interface ui$GridNoRecords {
    kendo$template?: string | Function;
  }

  declare interface ui$GridPageableMessages {
    display?: string;
    empty?: string;
    page?: string;
    of?: string;
    itemsPerPage?: string;
    first?: string;
    last?: string;
    next?: string;
    previous?: string;
    refresh?: string;
    morePages?: string;
  }

  declare interface ui$GridPageable {
    alwaysVisible?: boolean;
    pageSize?: number;
    previousNext?: boolean;
    numeric?: boolean;
    buttonCount?: number;
    input?: boolean;
    pageSizes?: boolean | any;
    refresh?: boolean;
    info?: boolean;
    messages?: ui$GridPageableMessages;
  }

  declare interface ui$GridPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface ui$GridPdf {
    allPages?: boolean;
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    kendo$date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: ui$GridPdfMargin;
    paperSize?: string | any;
    kendo$template?: string;
    repeatHeaders?: boolean;
    scale?: number;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface ui$GridScrollable {
    virtual?: boolean;
    endless?: boolean;
  }

  declare interface ui$GridSortable {
    allowUnsort?: boolean;
    showIndexes?: boolean;
    initialDirection?: string;
    mode?: string;
  }

  declare interface ui$GridToolbarItem {
    iconClass?: string;
    name?: string;
    kendo$template?: string | Function;
    text?: string;
  }

  declare interface ui$GridOptions {
    name?: string;
    allowCopy?: boolean | ui$GridAllowCopy;
    altRowTemplate?: string | Function;
    autoBind?: boolean;
    columnResizeHandleWidth?: number;
    columns?: ui$GridColumn[];
    columnMenu?: boolean | ui$GridColumnMenu;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    detailTemplate?: string | Function;
    editable?: boolean | string | ui$GridEditable;
    excel?: ui$GridExcel;
    filterable?: boolean | ui$GridFilterable;
    groupable?: boolean | ui$GridGroupable;
    height?: number | string;
    messages?: ui$GridMessages;
    kendo$mobile?: boolean | string;
    navigatable?: boolean;
    noRecords?: boolean | ui$GridNoRecords;
    pageable?: boolean | ui$GridPageable;
    kendo$pdf?: ui$GridPdf;
    persistSelection?: boolean;
    reorderable?: boolean;
    resizable?: boolean;
    rowTemplate?: string | Function;
    scrollable?: boolean | ui$GridScrollable;
    selectable?: boolean | string;
    sortable?: boolean | ui$GridSortable;
    toolbar?: (string | ui$GridToolbarItem)[];
    beforeEdit?: (e: ui$GridBeforeEditEvent) => void;
    cancel?: (e: ui$GridCancelEvent) => void;
    cellClose?: (e: ui$GridCellCloseEvent) => void;
    change?: (e: ui$GridChangeEvent) => void;
    columnHide?: (e: ui$GridColumnHideEvent) => void;
    columnLock?: (e: ui$GridColumnLockEvent) => void;
    columnMenuInit?: (e: ui$GridColumnMenuInitEvent) => void;
    columnMenuOpen?: (e: ui$GridColumnMenuOpenEvent) => void;
    columnReorder?: (e: ui$GridColumnReorderEvent) => void;
    columnResize?: (e: ui$GridColumnResizeEvent) => void;
    columnShow?: (e: ui$GridColumnShowEvent) => void;
    columnUnlock?: (e: ui$GridColumnUnlockEvent) => void;
    dataBinding?: (e: ui$GridDataBindingEvent) => void;
    dataBound?: (e: ui$GridDataBoundEvent) => void;
    detailCollapse?: (e: ui$GridDetailCollapseEvent) => void;
    detailExpand?: (e: ui$GridDetailExpandEvent) => void;
    detailInit?: (e: ui$GridDetailInitEvent) => void;
    edit?: (e: ui$GridEditEvent) => void;
    excelExport?: (e: ui$GridExcelExportEvent) => void;
    filter?: (e: ui$GridFilterEvent) => void;
    filterMenuInit?: (e: ui$GridFilterMenuInitEvent) => void;
    filterMenuOpen?: (e: ui$GridFilterMenuOpenEvent) => void;
    group?: (e: ui$GridGroupEvent) => void;
    groupCollapse?: (e: ui$GridGroupCollapseEvent) => void;
    groupExpand?: (e: ui$GridGroupExpandEvent) => void;
    navigate?: (e: ui$GridNavigateEvent) => void;
    page?: (e: ui$GridPageEvent) => void;
    pdfExport?: (e: ui$GridPdfExportEvent) => void;
    timezone$remove?: (e: ui$GridRemoveEvent) => void;
    save?: (e: ui$GridSaveEvent) => void;
    saveChanges?: (e: ui$GridSaveChangesEvent) => void;
    sort?: (e: ui$GridSortEvent) => void;
  }

  declare interface ui$GridEvent {
    sender: ui$Grid;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$GridBeforeEditEvent = {
    model?: kendo$kendo$data.data$Model
  } & ui$GridEvent;

  declare type ui$GridCancelEvent = {
    container?: JQuery,
    model?: kendo$kendo$data.data$Model
  } & ui$GridEvent;

  declare type ui$GridCellCloseEvent = {
    container?: JQuery,
    model?: kendo$kendo$data.data$Model,
    type?: string
  } & ui$GridEvent;

  declare type ui$GridChangeEvent = {} & ui$GridEvent;

  declare type ui$GridColumnHideEvent = {
    column?: any
  } & ui$GridEvent;

  declare type ui$GridColumnLockEvent = {
    column?: any
  } & ui$GridEvent;

  declare type ui$GridColumnMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & ui$GridEvent;

  declare type ui$GridColumnMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & ui$GridEvent;

  declare type ui$GridColumnReorderEvent = {
    column?: any,
    newIndex?: number,
    oldIndex?: number
  } & ui$GridEvent;

  declare type ui$GridColumnResizeEvent = {
    column?: any,
    newWidth?: number,
    oldWidth?: number
  } & ui$GridEvent;

  declare type ui$GridColumnShowEvent = {
    column?: any
  } & ui$GridEvent;

  declare type ui$GridColumnUnlockEvent = {
    column?: any
  } & ui$GridEvent;

  declare type ui$GridDataBindingEvent = {
    action?: string,
    index?: number,
    items?: any
  } & ui$GridEvent;

  declare type ui$GridDataBoundEvent = {} & ui$GridEvent;

  declare type ui$GridDetailCollapseEvent = {
    detailRow?: JQuery,
    masterRow?: JQuery
  } & ui$GridEvent;

  declare type ui$GridDetailExpandEvent = {
    detailRow?: JQuery,
    masterRow?: JQuery
  } & ui$GridEvent;

  declare type ui$GridDetailInitEvent = {
    kendo$data?: kendo$kendo$data.data$ObservableObject,
    detailCell?: JQuery,
    detailRow?: JQuery,
    masterRow?: JQuery
  } & ui$GridEvent;

  declare type ui$GridEditEvent = {
    container?: JQuery,
    model?: kendo$kendo$data.data$Model
  } & ui$GridEvent;

  declare type ui$GridExcelExportEvent = {
    kendo$data?: any,
    workbook?: kendo$kendo$ooxml.ooxml$Workbook
  } & ui$GridEvent;

  declare type ui$GridFilterEvent = {
    filter?: any,
    field?: string
  } & ui$GridEvent;

  declare type ui$GridFilterMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & ui$GridEvent;

  declare type ui$GridFilterMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & ui$GridEvent;

  declare type ui$GridGroupEvent = {
    groups?: any
  } & ui$GridEvent;

  declare type ui$GridGroupCollapseEvent = {
    element?: JQuery,
    group?: any
  } & ui$GridEvent;

  declare type ui$GridGroupExpandEvent = {
    element?: JQuery,
    group?: any
  } & ui$GridEvent;

  declare type ui$GridNavigateEvent = {
    element?: JQuery
  } & ui$GridEvent;

  declare type ui$GridPageEvent = {
    page?: number
  } & ui$GridEvent;

  declare type ui$GridPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & ui$GridEvent;

  declare type ui$GridRemoveEvent = {
    model?: kendo$kendo$data.data$Model,
    row?: JQuery
  } & ui$GridEvent;

  declare type ui$GridSaveEvent = {
    model?: kendo$kendo$data.data$Model,
    container?: JQuery,
    values?: any
  } & ui$GridEvent;

  declare type ui$GridSaveChangesEvent = {} & ui$GridEvent;

  declare type ui$GridSortEvent = {
    sort?: any
  } & ui$GridEvent;

  declare class ui$ListBox mixins undefined.ui$Widget {
    static fn: ui$ListBox;
    options: ui$ListBoxOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ListBox;
    constructor(element: drawing$Element, options?: ui$ListBoxOptions): this;
    clearSelection(): void;
    dataItem(element: JQuery): kendo$kendo$data.data$ObservableObject;
    dataItem(element: drawing$Element): kendo$kendo$data.data$ObservableObject;
    dataItem(element: string): kendo$kendo$data.data$ObservableObject;
    dataItems(): kendo$kendo$data.data$ObservableArray;
    destroy(): void;
    enable(element: JQuery, effects$enable?: boolean): void;
    enable(element: drawing$Element, effects$enable?: boolean): void;
    enable(element: string, effects$enable?: boolean): void;
    items(): any;
    refresh(): void;
    reorder(element: JQuery, index: number): void;
    reorder(element: drawing$Element, index: number): void;
    reorder(element: string, index: number): void;
    remove(element: JQuery): void;
    remove(element: drawing$Element): void;
    remove(element: string): void;
    remove(element: any): void;
    select(): JQuery;
    select(items: JQuery): void;
    select(items: any): void;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
  }

  declare interface ui$ListBoxDraggable {
    enabled?: boolean;
    hint?: Function | string | JQuery;
    placeholder?: Function | string | JQuery;
  }

  declare interface ui$ListBoxMessagesTools {
    moveDown?: string;
    moveUp?: string;
    timezone$remove?: string;
    transferAllFrom?: string;
    transferAllTo?: string;
    transferFrom?: string;
    transferTo?: string;
  }

  declare interface ui$ListBoxMessages {
    tools?: ui$ListBoxMessagesTools;
  }

  declare interface ui$ListBoxToolbar {
    position?: string;
    tools?: any;
  }

  declare interface ui$ListBoxOptions {
    name?: string;
    autoBind?: boolean;
    connectWith?: string;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    dataTextField?: string;
    dataValueField?: string;
    draggable?: boolean | ui$ListBoxDraggable;
    dropSources?: any;
    navigatable?: boolean;
    messages?: ui$ListBoxMessages;
    selectable?: string;
    kendo$template?: string | Function;
    toolbar?: ui$ListBoxToolbar;
    add?: (e: ui$ListBoxAddEvent) => void;
    change?: (e: ui$ListBoxEvent) => void;
    dataBound?: (e: ui$ListBoxEvent) => void;
    dragstart?: (e: ui$ListBoxDragstartEvent) => void;
    drag?: (e: ui$ListBoxDragEvent) => void;
    drop?: (e: ui$ListBoxDropEvent) => void;
    dragend?: (e: ui$ListBoxDragendEvent) => void;
    timezone$remove?: (e: ui$ListBoxRemoveEvent) => void;
    reorder?: (e: ui$ListBoxReorderEvent) => void;
  }

  declare interface ui$ListBoxEvent {
    sender: ui$ListBox;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ListBoxAddEvent = {
    items?: any,
    dataItems?: any
  } & ui$ListBoxEvent;

  declare type ui$ListBoxDragstartEvent = {
    draggableEvent?: any,
    items?: JQuery
  } & ui$ListBoxEvent;

  declare type ui$ListBoxDragEvent = {
    items?: JQuery,
    dataItems?: any,
    draggableEvent?: any
  } & ui$ListBoxEvent;

  declare type ui$ListBoxDropEvent = {
    items?: any,
    dataItems?: any
  } & ui$ListBoxEvent;

  declare type ui$ListBoxDragendEvent = {
    items?: any,
    dataItems?: any,
    draggableEvent?: any
  } & ui$ListBoxEvent;

  declare type ui$ListBoxRemoveEvent = {
    items?: any,
    dataItems?: any
  } & ui$ListBoxEvent;

  declare type ui$ListBoxReorderEvent = {
    items?: any,
    dataItems?: any,
    timezone$offset?: number
  } & ui$ListBoxEvent;

  declare class ui$ListView mixins undefined.ui$Widget {
    static fn: ui$ListView;
    options: ui$ListViewOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ListView;
    constructor(element: drawing$Element, options?: ui$ListViewOptions): this;
    add(): void;
    cancel(): void;
    clearSelection(): void;
    dataItem(row: string): kendo$kendo$data.data$ObservableObject;
    dataItem(row: drawing$Element): kendo$kendo$data.data$ObservableObject;
    dataItem(row: JQuery): kendo$kendo$data.data$ObservableObject;
    dataItems(): kendo$kendo$data.data$ObservableArray;
    destroy(): void;
    edit(item: JQuery): void;
    items(): any;
    refresh(): void;
    remove(item: any): void;
    save(): void;
    select(): JQuery;
    select(items: JQuery): void;
    select(items: any): void;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
  }

  declare interface ui$ListViewOptions {
    name?: string;
    autoBind?: boolean;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    editTemplate?: Function;
    navigatable?: boolean;
    selectable?: boolean | string;
    kendo$template?: Function;
    altTemplate?: Function;
    cancel?: (e: ui$ListViewCancelEvent) => void;
    change?: (e: ui$ListViewEvent) => void;
    dataBound?: (e: ui$ListViewEvent) => void;
    dataBinding?: (e: ui$ListViewEvent) => void;
    edit?: (e: ui$ListViewEditEvent) => void;
    timezone$remove?: (e: ui$ListViewRemoveEvent) => void;
    save?: (e: ui$ListViewSaveEvent) => void;
    name?: string;
    appendOnRefresh?: boolean;
    autoBind?: boolean;
    dataSource?: kendo$kendo$data.data$DataSource | any;
    endlessScroll?: boolean;
    fixedHeaders?: boolean;
    headerTemplate?: string | Function;
    loadMore?: boolean;
    messages?: ui$ListViewMessages;
    pullToRefresh?: boolean;
    pullParameters?: Function;
    style?: string;
    kendo$template?: string | Function;
    type?: string;
    filterable?: boolean | ui$ListViewFilterable;
    virtualViewSize?: number;
    click?: (e: ui$ListViewClickEvent) => void;
    dataBound?: (e: ui$ListViewEvent) => void;
    dataBinding?: (e: ui$ListViewEvent) => void;
    itemChange?: (e: ui$ListViewEvent) => void;
  }

  declare interface ui$ListViewEvent {
    sender: ui$ListView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$ListView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ListViewCancelEvent = {
    container?: JQuery,
    model?: kendo$kendo$data.data$Model
  } & ui$ListViewEvent;

  declare type ui$ListViewEditEvent = {
    item?: JQuery,
    model?: kendo$kendo$data.data$Model
  } & ui$ListViewEvent;

  declare type ui$ListViewRemoveEvent = {
    item?: JQuery,
    model?: kendo$kendo$data.data$Model
  } & ui$ListViewEvent;

  declare type ui$ListViewSaveEvent = {
    model?: kendo$kendo$data.data$Model,
    item?: JQuery
  } & ui$ListViewEvent;

  declare class ui$MaskedTextBox mixins undefined.ui$Widget {
    static fn: ui$MaskedTextBox;
    options: ui$MaskedTextBoxOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$MaskedTextBox;
    constructor(
      element: drawing$Element,
      options?: ui$MaskedTextBoxOptions
    ): this;
    destroy(): void;
    enable(effects$enable: boolean): void;
    readonly(readonly: boolean): void;
    raw(): string;
    value(): string;
    value(value: string): void;
  }

  declare interface ui$MaskedTextBoxOptions {
    name?: string;
    clearPromptChar?: boolean;
    kendo$culture?: string;
    mask?: string;
    promptChar?: string;
    rules?: any;
    unmaskOnPost?: boolean;
    value?: string;
    change?: (e: ui$MaskedTextBoxChangeEvent) => void;
  }

  declare interface ui$MaskedTextBoxEvent {
    sender: ui$MaskedTextBox;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$MaskedTextBoxChangeEvent = {} & ui$MaskedTextBoxEvent;

  declare class ui$MediaPlayer mixins undefined.ui$Widget {
    static fn: ui$MediaPlayer;
    options: ui$MediaPlayerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$MediaPlayer;
    constructor(
      element: drawing$Element,
      options?: ui$MediaPlayerOptions
    ): this;
    fullScreen(): boolean;
    fullScreen(value: boolean): void;
    media(): any;
    media(value: any): void;
    volume(): number;
    volume(value: number): void;
    mute(value: boolean): boolean;
    isEnded(): boolean;
    isPaused(): boolean;
    isPlaying(): boolean;
    pause(): void;
    play(): void;
    seek(milliseconds: number): number;
    stop(): void;
    titlebar(): JQuery;
    toolbar(): kendo$kendo$ui.ui$ToolBar;
  }

  declare interface ui$MediaPlayerMedia {
    source?: string;
    title?: string;
  }

  declare interface ui$MediaPlayerMessages {
    pause?: string;
    play?: string;
    mute?: string;
    unmute?: string;
    quality?: string;
    fullscreen?: string;
  }

  declare interface ui$MediaPlayerOptions {
    name?: string;
    autoPlay?: boolean;
    autoRepeat?: boolean;
    forwardSeek?: boolean;
    fullScreen?: boolean;
    media?: ui$MediaPlayerMedia;
    messages?: ui$MediaPlayerMessages;
    mute?: boolean;
    navigatable?: boolean;
    volume?: number;
    end?: (e: ui$MediaPlayerEvent) => void;
    pause?: (e: ui$MediaPlayerEvent) => void;
    play?: (e: ui$MediaPlayerEvent) => void;
    ready?: (e: ui$MediaPlayerEvent) => void;
    timeChange?: (e: ui$MediaPlayerEvent) => void;
    volumeChange?: (e: ui$MediaPlayerEvent) => void;
  }

  declare interface ui$MediaPlayerEvent {
    sender: ui$MediaPlayer;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$Menu mixins undefined.ui$Widget {
    static fn: ui$Menu;
    options: ui$MenuOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Menu;
    constructor(element: drawing$Element, options?: ui$MenuOptions): this;
    append(item: any, referenceItem?: string): kendo$kendo$ui.ui$Menu;
    append(item: any, referenceItem?: JQuery): kendo$kendo$ui.ui$Menu;
    close(element: string): kendo$kendo$ui.ui$Menu;
    close(element: drawing$Element): kendo$kendo$ui.ui$Menu;
    close(element: JQuery): kendo$kendo$ui.ui$Menu;
    destroy(): void;
    enable(element: string, effects$enable: boolean): kendo$kendo$ui.ui$Menu;
    enable(
      element: drawing$Element,
      effects$enable: boolean
    ): kendo$kendo$ui.ui$Menu;
    enable(element: JQuery, effects$enable: boolean): kendo$kendo$ui.ui$Menu;
    insertAfter(item: any, referenceItem: string): kendo$kendo$ui.ui$Menu;
    insertAfter(
      item: any,
      referenceItem: drawing$Element
    ): kendo$kendo$ui.ui$Menu;
    insertAfter(item: any, referenceItem: JQuery): kendo$kendo$ui.ui$Menu;
    insertBefore(item: any, referenceItem: string): kendo$kendo$ui.ui$Menu;
    insertBefore(
      item: any,
      referenceItem: drawing$Element
    ): kendo$kendo$ui.ui$Menu;
    insertBefore(item: any, referenceItem: JQuery): kendo$kendo$ui.ui$Menu;
    open(element: string): kendo$kendo$ui.ui$Menu;
    open(element: drawing$Element): kendo$kendo$ui.ui$Menu;
    open(element: JQuery): kendo$kendo$ui.ui$Menu;
    remove(element: string): kendo$kendo$ui.ui$Menu;
    remove(element: drawing$Element): kendo$kendo$ui.ui$Menu;
    remove(element: JQuery): kendo$kendo$ui.ui$Menu;
  }

  declare interface ui$MenuAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$MenuAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$MenuAnimation {
    close?: ui$MenuAnimationClose;
    open?: ui$MenuAnimationOpen;
  }

  declare interface ui$MenuOpenOnClick {
    rootMenuItems?: boolean;
    subMenuItems?: boolean;
  }

  declare interface ui$MenuScrollable {
    distance?: number;
  }

  declare interface ui$MenuOptions {
    name?: string;
    animation?: boolean | ui$MenuAnimation;
    closeOnClick?: boolean;
    dataSource?: any | any;
    direction?: string;
    hoverDelay?: number;
    openOnClick?: boolean | ui$MenuOpenOnClick;
    orientation?: string;
    popupCollision?: string;
    scrollable?: boolean | ui$MenuScrollable;
    close?: (e: ui$MenuCloseEvent) => void;
    open?: (e: ui$MenuOpenEvent) => void;
    activate?: (e: ui$MenuActivateEvent) => void;
    deactivate?: (e: ui$MenuDeactivateEvent) => void;
    select?: (e: ui$MenuSelectEvent) => void;
  }

  declare interface ui$MenuEvent {
    sender: ui$Menu;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$MenuCloseEvent = {
    item?: HTMLElement
  } & ui$MenuEvent;

  declare type ui$MenuOpenEvent = {
    item?: HTMLElement
  } & ui$MenuEvent;

  declare type ui$MenuActivateEvent = {
    item?: HTMLElement
  } & ui$MenuEvent;

  declare type ui$MenuDeactivateEvent = {
    item?: HTMLElement
  } & ui$MenuEvent;

  declare type ui$MenuSelectEvent = {
    item?: HTMLElement
  } & ui$MenuEvent;

  declare class ui$MultiColumnComboBox mixins undefined.ui$Widget {
    static fn: ui$MultiColumnComboBox;
    options: ui$MultiColumnComboBoxOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    input: JQuery;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$MultiColumnComboBox;
    constructor(
      element: drawing$Element,
      options?: ui$MultiColumnComboBoxOptions
    ): this;
    close(): void;
    dataItem(index?: number): any;
    destroy(): void;
    enable(effects$enable: boolean): void;
    focus(): void;
    items(): any;
    open(): void;
    readonly(readonly: boolean): void;
    refresh(): void;
    search(word: string): void;
    select(): number;
    select(li: JQuery): void;
    select(li: number): void;
    select(li: Function): void;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
    suggest(value: string): void;
    text(): string;
    text(text: string): void;
    toggle(toggle: boolean): void;
    value(): string;
    value(value: string): void;
  }

  declare interface ui$MultiColumnComboBoxAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$MultiColumnComboBoxAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$MultiColumnComboBoxAnimation {
    close?: ui$MultiColumnComboBoxAnimationClose;
    open?: ui$MultiColumnComboBoxAnimationOpen;
  }

  declare interface ui$MultiColumnComboBoxColumn {
    field?: string;
    title?: string;
    kendo$template?: string | Function;
    headerTemplate?: string | Function;
    width?: number | string;
  }

  declare interface ui$MultiColumnComboBoxPopup {
    appendTo?: string;
    origin?: string;
    position?: string;
  }

  declare interface ui$MultiColumnComboBoxVirtual {
    itemHeight?: number;
    mapValueTo?: string;
    valueMapper?: Function;
  }

  declare interface ui$MultiColumnComboBoxOptions {
    name?: string;
    animation?: ui$MultiColumnComboBoxAnimation;
    autoBind?: boolean;
    autoWidth?: boolean;
    cascadeFrom?: string;
    cascadeFromField?: string;
    columns?: ui$MultiColumnComboBoxColumn[];
    clearButton?: boolean;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    dataTextField?: string;
    dataValueField?: string;
    delay?: number;
    dropDownWidth?: string | number;
    effects$enable?: boolean;
    enforceMinLength?: boolean;
    filter?: string;
    filterFields?: any;
    fixedGroupTemplate?: string | Function;
    footerTemplate?: string | Function;
    groupTemplate?: string | Function;
    height?: number;
    highlightFirst?: boolean;
    ignoreCase?: boolean;
    index?: number;
    minLength?: number;
    noDataTemplate?: string | Function;
    placeholder?: string;
    popup?: ui$MultiColumnComboBoxPopup;
    suggest?: boolean;
    syncValueAndText?: boolean;
    headerTemplate?: string | Function;
    kendo$template?: string | Function;
    text?: string;
    value?: string;
    valuePrimitive?: boolean;
    virtual?: boolean | ui$MultiColumnComboBoxVirtual;
    change?: (e: ui$MultiColumnComboBoxChangeEvent) => void;
    close?: (e: ui$MultiColumnComboBoxCloseEvent) => void;
    dataBound?: (e: ui$MultiColumnComboBoxDataBoundEvent) => void;
    filtering?: (e: ui$MultiColumnComboBoxFilteringEvent) => void;
    open?: (e: ui$MultiColumnComboBoxOpenEvent) => void;
    select?: (e: ui$MultiColumnComboBoxSelectEvent) => void;
    cascade?: (e: ui$MultiColumnComboBoxCascadeEvent) => void;
  }

  declare interface ui$MultiColumnComboBoxEvent {
    sender: ui$MultiColumnComboBox;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$MultiColumnComboBoxChangeEvent = {} & ui$MultiColumnComboBoxEvent;

  declare type ui$MultiColumnComboBoxCloseEvent = {} & ui$MultiColumnComboBoxEvent;

  declare type ui$MultiColumnComboBoxDataBoundEvent = {} & ui$MultiColumnComboBoxEvent;

  declare type ui$MultiColumnComboBoxFilteringEvent = {
    filter?: any
  } & ui$MultiColumnComboBoxEvent;

  declare type ui$MultiColumnComboBoxOpenEvent = {} & ui$MultiColumnComboBoxEvent;

  declare type ui$MultiColumnComboBoxSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & ui$MultiColumnComboBoxEvent;

  declare type ui$MultiColumnComboBoxCascadeEvent = {} & ui$MultiColumnComboBoxEvent;

  declare class ui$MultiSelect mixins undefined.ui$Widget {
    static fn: ui$MultiSelect;
    options: ui$MultiSelectOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    input: JQuery;
    list: JQuery;
    ul: JQuery;
    tagList: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$MultiSelect;
    constructor(
      element: drawing$Element,
      options?: ui$MultiSelectOptions
    ): this;
    close(): void;
    dataItems(): any;
    destroy(): void;
    enable(effects$enable: boolean): void;
    focus(): void;
    items(): any;
    open(): void;
    readonly(readonly: boolean): void;
    refresh(): void;
    search(word: string): void;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
    toggle(toggle?: boolean): void;
    value(): any;
    value(value: any): void;
    value(value: string): void;
  }

  declare interface ui$MultiSelectAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$MultiSelectAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$MultiSelectAnimation {
    close?: ui$MultiSelectAnimationClose;
    open?: ui$MultiSelectAnimationOpen;
  }

  declare interface ui$MultiSelectPopup {
    appendTo?: string;
    origin?: string;
    position?: string;
  }

  declare interface ui$MultiSelectVirtual {
    itemHeight?: number;
    mapValueTo?: string;
    valueMapper?: Function;
  }

  declare interface ui$MultiSelectOptions {
    name?: string;
    animation?: boolean | ui$MultiSelectAnimation;
    autoBind?: boolean;
    autoClose?: boolean;
    autoWidth?: boolean;
    clearButton?: boolean;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    dataTextField?: string;
    dataValueField?: string;
    delay?: number;
    effects$enable?: boolean;
    enforceMinLength?: boolean;
    filter?: string;
    fixedGroupTemplate?: string | Function;
    footerTemplate?: string | Function;
    groupTemplate?: string | Function;
    height?: number;
    highlightFirst?: boolean;
    ignoreCase?: boolean;
    minLength?: number;
    maxSelectedItems?: number;
    noDataTemplate?: string | Function;
    placeholder?: string;
    popup?: ui$MultiSelectPopup;
    headerTemplate?: string | Function;
    itemTemplate?: string | Function;
    tagTemplate?: string | Function;
    tagMode?: string;
    value?: any;
    valuePrimitive?: boolean;
    virtual?: boolean | ui$MultiSelectVirtual;
    change?: (e: ui$MultiSelectChangeEvent) => void;
    close?: (e: ui$MultiSelectCloseEvent) => void;
    dataBound?: (e: ui$MultiSelectDataBoundEvent) => void;
    filtering?: (e: ui$MultiSelectFilteringEvent) => void;
    open?: (e: ui$MultiSelectOpenEvent) => void;
    select?: (e: ui$MultiSelectSelectEvent) => void;
    deselect?: (e: ui$MultiSelectDeselectEvent) => void;
  }

  declare interface ui$MultiSelectEvent {
    sender: ui$MultiSelect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$MultiSelectChangeEvent = {} & ui$MultiSelectEvent;

  declare type ui$MultiSelectCloseEvent = {} & ui$MultiSelectEvent;

  declare type ui$MultiSelectDataBoundEvent = {} & ui$MultiSelectEvent;

  declare type ui$MultiSelectFilteringEvent = {
    filter?: any
  } & ui$MultiSelectEvent;

  declare type ui$MultiSelectOpenEvent = {} & ui$MultiSelectEvent;

  declare type ui$MultiSelectSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & ui$MultiSelectEvent;

  declare type ui$MultiSelectDeselectEvent = {
    dataItem?: any,
    item?: JQuery
  } & ui$MultiSelectEvent;

  declare class ui$MultiViewCalendar mixins undefined.ui$Widget {
    static fn: ui$MultiViewCalendar;
    options: ui$MultiViewCalendarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$MultiViewCalendar;
    constructor(
      element: drawing$Element,
      options?: ui$MultiViewCalendarOptions
    ): this;
    current(): Date;
    destroy(): void;
    max(): Date;
    max(value: Date): void;
    max(value: string): void;
    min(): Date;
    min(value: Date): void;
    min(value: string): void;
    navigate(value: Date, view: string): void;
    navigateDown(value: Date): void;
    navigateToFuture(): void;
    navigateToPast(): void;
    navigateUp(): void;
    selectDates(): any;
    selectDates(dates: any): void;
    selectRange(): any;
    selectRange(range: any): void;
    value(): Date;
    value(value: Date): void;
    value(value: string): void;
    view(): any;
  }

  declare interface ui$MultiViewCalendarMessages {
    weekColumnHeader?: string;
  }

  declare interface ui$MultiViewCalendarMonth {
    content?: string;
    weekNumber?: string;
    empty?: string;
  }

  declare interface ui$MultiViewCalendarRange {
    start?: Date;
    end?: Date;
  }

  declare interface ui$MultiViewCalendarOptions {
    name?: string;
    kendo$culture?: string;
    dates?: any;
    depth?: string;
    disableDates?: any | Function;
    footer?: string | Function;
    kendo$format?: string;
    max?: Date;
    messages?: ui$MultiViewCalendarMessages;
    min?: Date;
    month?: ui$MultiViewCalendarMonth;
    views?: number;
    range?: ui$MultiViewCalendarRange;
    selectable?: string;
    selectDates?: any;
    showViewHeader?: boolean;
    weekNumber?: boolean;
    start?: string;
    value?: Date;
    change?: (e: ui$MultiViewCalendarEvent) => void;
    navigate?: (e: ui$MultiViewCalendarEvent) => void;
  }

  declare interface ui$MultiViewCalendarEvent {
    sender: ui$MultiViewCalendar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$Notification mixins undefined.ui$Widget {
    static fn: ui$Notification;
    options: ui$NotificationOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Notification;
    constructor(
      element: drawing$Element,
      options?: ui$NotificationOptions
    ): this;
    error(kendo$data: any): void;
    error(kendo$data: string): void;
    error(kendo$data: Function): void;
    getNotifications(): JQuery;
    hide(): void;
    info(kendo$data: any): void;
    info(kendo$data: string): void;
    info(kendo$data: Function): void;
    show(kendo$data: any, type: string): void;
    show(kendo$data: string, type: string): void;
    show(kendo$data: Function, type: string): void;
    showText(kendo$data: any, type: string): void;
    showText(kendo$data: string, type: string): void;
    showText(kendo$data: Function, type: string): void;
    success(kendo$data: any): void;
    success(kendo$data: string): void;
    success(kendo$data: Function): void;
    warning(kendo$data: any): void;
    warning(kendo$data: string): void;
    warning(kendo$data: Function): void;
  }

  declare interface ui$NotificationPosition {
    bottom?: number;
    left?: number;
    pinned?: boolean;
    right?: number;
    top?: number;
  }

  declare interface ui$NotificationTemplate {
    type?: string;
    kendo$template?: string;
  }

  declare interface ui$NotificationOptions {
    name?: string;
    allowHideAfter?: number;
    animation?: any | boolean;
    appendTo?: string | JQuery;
    autoHideAfter?: number;
    button?: boolean;
    height?: number | string;
    hideOnClick?: boolean;
    position?: ui$NotificationPosition;
    stacking?: string;
    templates?: ui$NotificationTemplate[];
    width?: number | string;
    hide?: (e: ui$NotificationHideEvent) => void;
    show?: (e: ui$NotificationShowEvent) => void;
  }

  declare interface ui$NotificationEvent {
    sender: ui$Notification;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$NotificationHideEvent = {
    element?: JQuery
  } & ui$NotificationEvent;

  declare type ui$NotificationShowEvent = {
    element?: JQuery
  } & ui$NotificationEvent;

  declare class ui$NumericTextBox mixins undefined.ui$Widget {
    static fn: ui$NumericTextBox;
    options: ui$NumericTextBoxOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$NumericTextBox;
    constructor(
      element: drawing$Element,
      options?: ui$NumericTextBoxOptions
    ): this;
    destroy(): void;
    enable(effects$enable: boolean): void;
    readonly(readonly: boolean): void;
    focus(): void;
    max(): number;
    max(value: number): void;
    max(value: string): void;
    min(): number;
    min(value: number): void;
    min(value: string): void;
    step(): number;
    step(value: number): void;
    step(value: string): void;
    value(): number;
    value(value: number): void;
    value(value: string): void;
  }

  declare interface ui$NumericTextBoxOptions {
    name?: string;
    kendo$culture?: string;
    decimals?: number;
    downArrowText?: string;
    factor?: number;
    kendo$format?: string;
    max?: number;
    min?: number;
    placeholder?: string;
    restrictDecimals?: boolean;
    round?: boolean;
    spinners?: boolean;
    step?: number;
    upArrowText?: string;
    value?: number;
    change?: (e: ui$NumericTextBoxChangeEvent) => void;
    spin?: (e: ui$NumericTextBoxSpinEvent) => void;
  }

  declare interface ui$NumericTextBoxEvent {
    sender: ui$NumericTextBox;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$NumericTextBoxChangeEvent = {} & ui$NumericTextBoxEvent;

  declare type ui$NumericTextBoxSpinEvent = {} & ui$NumericTextBoxEvent;

  declare class ui$Pager mixins undefined.ui$Widget {
    static fn: ui$Pager;
    options: ui$PagerOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Pager;
    constructor(element: drawing$Element, options?: ui$PagerOptions): this;
    totalPages(): number;
    pageSize(): number;
    page(): number;
    page(page: number): void;
    refresh(): void;
    destroy(): void;
  }

  declare interface ui$PagerMessages {
    display?: string;
    empty?: string;
    allPages?: string;
    page?: string;
    of?: string;
    itemsPerPage?: string;
    first?: string;
    previous?: string;
    next?: string;
    last?: string;
    refresh?: string;
  }

  declare interface ui$PagerOptions {
    name?: string;
    autoBind?: boolean;
    buttonCount?: number;
    dataSource?: any | kendo$kendo$data.data$DataSource;
    selectTemplate?: string;
    linkTemplate?: string;
    info?: boolean;
    input?: boolean;
    numeric?: boolean;
    pageSizes?: boolean | any;
    previousNext?: boolean;
    refresh?: boolean;
    messages?: ui$PagerMessages;
    change?: (e: ui$PagerChangeEvent) => void;
  }

  declare interface ui$PagerEvent {
    sender: ui$Pager;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$PagerChangeEvent = {} & ui$PagerEvent;

  declare class ui$PanelBar mixins undefined.ui$Widget {
    static fn: ui$PanelBar;
    options: ui$PanelBarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$PanelBar;
    constructor(element: drawing$Element, options?: ui$PanelBarOptions): this;
    append(item: string, referenceItem?: string): kendo$kendo$ui.ui$PanelBar;
    append(
      item: string,
      referenceItem?: drawing$Element
    ): kendo$kendo$ui.ui$PanelBar;
    append(item: string, referenceItem?: JQuery): kendo$kendo$ui.ui$PanelBar;
    append(
      item: drawing$Element,
      referenceItem?: string
    ): kendo$kendo$ui.ui$PanelBar;
    append(
      item: drawing$Element,
      referenceItem?: drawing$Element
    ): kendo$kendo$ui.ui$PanelBar;
    append(
      item: drawing$Element,
      referenceItem?: JQuery
    ): kendo$kendo$ui.ui$PanelBar;
    append(item: JQuery, referenceItem?: string): kendo$kendo$ui.ui$PanelBar;
    append(
      item: JQuery,
      referenceItem?: drawing$Element
    ): kendo$kendo$ui.ui$PanelBar;
    append(item: JQuery, referenceItem?: JQuery): kendo$kendo$ui.ui$PanelBar;
    append(item: any, referenceItem?: string): kendo$kendo$ui.ui$PanelBar;
    append(
      item: any,
      referenceItem?: drawing$Element
    ): kendo$kendo$ui.ui$PanelBar;
    append(item: any, referenceItem?: JQuery): kendo$kendo$ui.ui$PanelBar;
    clearSelection(): void;
    collapse(
      element: string,
      useAnimation: boolean
    ): kendo$kendo$ui.ui$PanelBar;
    collapse(
      element: drawing$Element,
      useAnimation: boolean
    ): kendo$kendo$ui.ui$PanelBar;
    collapse(
      element: JQuery,
      useAnimation: boolean
    ): kendo$kendo$ui.ui$PanelBar;
    destroy(): void;
    enable(element: string, effects$enable: boolean): void;
    enable(element: drawing$Element, effects$enable: boolean): void;
    enable(element: JQuery, effects$enable: boolean): void;
    expand(element: string, useAnimation: boolean): kendo$kendo$ui.ui$PanelBar;
    expand(
      element: drawing$Element,
      useAnimation: boolean
    ): kendo$kendo$ui.ui$PanelBar;
    expand(element: JQuery, useAnimation: boolean): kendo$kendo$ui.ui$PanelBar;
    insertAfter(item: string, referenceItem: string): void;
    insertAfter(item: string, referenceItem: drawing$Element): void;
    insertAfter(item: string, referenceItem: JQuery): void;
    insertAfter(item: drawing$Element, referenceItem: string): void;
    insertAfter(item: drawing$Element, referenceItem: drawing$Element): void;
    insertAfter(item: drawing$Element, referenceItem: JQuery): void;
    insertAfter(item: JQuery, referenceItem: string): void;
    insertAfter(item: JQuery, referenceItem: drawing$Element): void;
    insertAfter(item: JQuery, referenceItem: JQuery): void;
    insertAfter(item: any, referenceItem: string): void;
    insertAfter(item: any, referenceItem: drawing$Element): void;
    insertAfter(item: any, referenceItem: JQuery): void;
    insertBefore(
      item: string,
      referenceItem: string
    ): kendo$kendo$ui.ui$PanelBar;
    insertBefore(
      item: string,
      referenceItem: drawing$Element
    ): kendo$kendo$ui.ui$PanelBar;
    insertBefore(
      item: string,
      referenceItem: JQuery
    ): kendo$kendo$ui.ui$PanelBar;
    insertBefore(
      item: drawing$Element,
      referenceItem: string
    ): kendo$kendo$ui.ui$PanelBar;
    insertBefore(
      item: drawing$Element,
      referenceItem: drawing$Element
    ): kendo$kendo$ui.ui$PanelBar;
    insertBefore(
      item: drawing$Element,
      referenceItem: JQuery
    ): kendo$kendo$ui.ui$PanelBar;
    insertBefore(
      item: JQuery,
      referenceItem: string
    ): kendo$kendo$ui.ui$PanelBar;
    insertBefore(
      item: JQuery,
      referenceItem: drawing$Element
    ): kendo$kendo$ui.ui$PanelBar;
    insertBefore(
      item: JQuery,
      referenceItem: JQuery
    ): kendo$kendo$ui.ui$PanelBar;
    insertBefore(item: any, referenceItem: string): kendo$kendo$ui.ui$PanelBar;
    insertBefore(
      item: any,
      referenceItem: drawing$Element
    ): kendo$kendo$ui.ui$PanelBar;
    insertBefore(item: any, referenceItem: JQuery): kendo$kendo$ui.ui$PanelBar;
    reload(element: string): void;
    reload(element: drawing$Element): void;
    reload(element: JQuery): void;
    remove(element: string): void;
    remove(element: drawing$Element): void;
    remove(element: JQuery): void;
    select(): JQuery;
    select(element?: string): void;
    select(element?: drawing$Element): void;
    select(element?: JQuery): void;
  }

  declare interface ui$PanelBarAnimationCollapse {
    duration?: number;
    kendo$effects?: string;
  }

  declare interface ui$PanelBarAnimationExpand {
    duration?: number;
    kendo$effects?: string;
  }

  declare interface ui$PanelBarAnimation {
    collapse?: ui$PanelBarAnimationCollapse;
    expand?: ui$PanelBarAnimationExpand;
  }

  declare interface ui$PanelBarMessages {
    loading?: string;
    requestFailed?: string;
    retry?: string;
  }

  declare interface ui$PanelBarOptions {
    name?: string;
    animation?: boolean | ui$PanelBarAnimation;
    autoBind?: boolean;
    contentUrls?: any;
    dataImageUrlField?: string;
    dataSource?: any | any | kendo$kendo$data.data$HierarchicalDataSource;
    dataSpriteCssClassField?: string;
    dataTextField?: string | any;
    dataUrlField?: string;
    expandMode?: string;
    loadOnDemand?: boolean;
    messages?: ui$PanelBarMessages;
    kendo$template?: string | Function;
    activate?: (e: ui$PanelBarActivateEvent) => void;
    collapse?: (e: ui$PanelBarCollapseEvent) => void;
    contentLoad?: (e: ui$PanelBarContentLoadEvent) => void;
    dataBound?: (e: ui$PanelBarDataBoundEvent) => void;
    error?: (e: ui$PanelBarErrorEvent) => void;
    expand?: (e: ui$PanelBarExpandEvent) => void;
    select?: (e: ui$PanelBarSelectEvent) => void;
  }

  declare interface ui$PanelBarEvent {
    sender: ui$PanelBar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$PanelBarActivateEvent = {
    item?: drawing$Element
  } & ui$PanelBarEvent;

  declare type ui$PanelBarCollapseEvent = {
    item?: drawing$Element
  } & ui$PanelBarEvent;

  declare type ui$PanelBarContentLoadEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element
  } & ui$PanelBarEvent;

  declare type ui$PanelBarDataBoundEvent = {
    node?: JQuery
  } & ui$PanelBarEvent;

  declare type ui$PanelBarErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & ui$PanelBarEvent;

  declare type ui$PanelBarExpandEvent = {
    item?: drawing$Element
  } & ui$PanelBarEvent;

  declare type ui$PanelBarSelectEvent = {
    item?: drawing$Element
  } & ui$PanelBarEvent;

  declare class ui$PivotConfigurator mixins undefined.ui$Widget {
    static fn: ui$PivotConfigurator;
    options: ui$PivotConfiguratorOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$PivotConfigurator;
    constructor(
      element: drawing$Element,
      options?: ui$PivotConfiguratorOptions
    ): this;
    destroy(): void;
    refresh(): void;
    setDataSource(dataSource: kendo$kendo$data.data$PivotDataSource): void;
  }

  declare interface ui$PivotConfiguratorMessagesFieldMenuOperators {
    contains?: string;
    doesnotcontain?: string;
    startswith?: string;
    endswith?: string;
    eq?: string;
    neq?: string;
  }

  declare interface ui$PivotConfiguratorMessagesFieldMenu {
    info?: string;
    sortAscending?: string;
    sortDescending?: string;
    filterFields?: string;
    filter?: string;
    include?: string;
    title?: string;
    clear?: string;
    ok?: string;
    cancel?: string;
    operators?: ui$PivotConfiguratorMessagesFieldMenuOperators;
  }

  declare interface ui$PivotConfiguratorMessages {
    measures?: string;
    columns?: string;
    rows?: string;
    measuresLabel?: string;
    rowsLabel?: string;
    columnsLabel?: string;
    fieldsLabel?: string;
    fieldMenu?: ui$PivotConfiguratorMessagesFieldMenu;
  }

  declare interface ui$PivotConfiguratorSortable {
    allowUnsort?: boolean;
  }

  declare interface ui$PivotConfiguratorOptions {
    name?: string;
    dataSource?: any | kendo$kendo$data.data$PivotDataSource;
    filterable?: boolean;
    sortable?: boolean | ui$PivotConfiguratorSortable;
    height?: number | string;
    messages?: ui$PivotConfiguratorMessages;
  }

  declare interface ui$PivotConfiguratorEvent {
    sender: ui$PivotConfigurator;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$PivotGrid mixins undefined.ui$Widget {
    static fn: ui$PivotGrid;
    options: ui$PivotGridOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$PivotGrid;
    constructor(element: drawing$Element, options?: ui$PivotGridOptions): this;
    cellInfo(columnIndex: number, rowIndex: number): any;
    cellInfoByElement(cell: string): any;
    cellInfoByElement(cell: drawing$Element): any;
    cellInfoByElement(cell: JQuery): any;
    destroy(): void;
    refresh(): void;
    setDataSource(dataSource: kendo$kendo$data.data$PivotDataSource): void;
    saveAsExcel(): void;
    saveAsPDF(): JQueryPromise<any>;
  }

  declare interface ui$PivotGridExcel {
    fileName?: string;
    filterable?: boolean;
    forceProxy?: boolean;
    proxyURL?: string;
  }

  declare interface ui$PivotGridMessagesFieldMenuOperators {
    contains?: string;
    doesnotcontain?: string;
    startswith?: string;
    endswith?: string;
    eq?: string;
    neq?: string;
  }

  declare interface ui$PivotGridMessagesFieldMenu {
    info?: string;
    sortAscending?: string;
    sortDescending?: string;
    filterFields?: string;
    filter?: string;
    include?: string;
    title?: string;
    clear?: string;
    ok?: string;
    cancel?: string;
    operators?: ui$PivotGridMessagesFieldMenuOperators;
  }

  declare interface ui$PivotGridMessages {
    measureFields?: string;
    columnFields?: string;
    rowFields?: string;
    fieldMenu?: ui$PivotGridMessagesFieldMenu;
  }

  declare interface ui$PivotGridPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface ui$PivotGridPdf {
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    kendo$date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: ui$PivotGridPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface ui$PivotGridSortable {
    allowUnsort?: boolean;
  }

  declare interface ui$PivotGridOptions {
    name?: string;
    dataSource?: any | kendo$kendo$data.data$PivotDataSource;
    autoBind?: boolean;
    reorderable?: boolean;
    excel?: ui$PivotGridExcel;
    kendo$pdf?: ui$PivotGridPdf;
    filterable?: boolean;
    sortable?: boolean | ui$PivotGridSortable;
    columnWidth?: number;
    height?: number | string;
    columnHeaderTemplate?: string | Function;
    dataCellTemplate?: string | Function;
    kpiStatusTemplate?: string | Function;
    kpiTrendTemplate?: string | Function;
    rowHeaderTemplate?: string | Function;
    messages?: ui$PivotGridMessages;
    dataBinding?: (e: ui$PivotGridDataBindingEvent) => void;
    dataBound?: (e: ui$PivotGridDataBoundEvent) => void;
    expandMember?: (e: ui$PivotGridExpandMemberEvent) => void;
    collapseMember?: (e: ui$PivotGridCollapseMemberEvent) => void;
    excelExport?: (e: ui$PivotGridExcelExportEvent) => void;
    pdfExport?: (e: ui$PivotGridPdfExportEvent) => void;
  }

  declare interface ui$PivotGridEvent {
    sender: ui$PivotGrid;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$PivotGridDataBindingEvent = {} & ui$PivotGridEvent;

  declare type ui$PivotGridDataBoundEvent = {} & ui$PivotGridEvent;

  declare type ui$PivotGridExpandMemberEvent = {
    axis?: string,
    path?: string[]
  } & ui$PivotGridEvent;

  declare type ui$PivotGridCollapseMemberEvent = {
    axis?: string,
    path?: string[]
  } & ui$PivotGridEvent;

  declare type ui$PivotGridExcelExportEvent = {
    kendo$data?: any,
    workbook?: any
  } & ui$PivotGridEvent;

  declare type ui$PivotGridPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & ui$PivotGridEvent;

  declare class ui$Popup mixins undefined.ui$Widget {
    static fn: ui$Popup;
    options: ui$PopupOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Popup;
    constructor(element: drawing$Element, options?: ui$PopupOptions): this;
    close(): void;
    open(): void;
    position(): void;
    setOptions(options: any): void;
    visible(): boolean;
  }

  declare interface ui$PopupAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$PopupAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$PopupAnimation {
    close?: ui$PopupAnimationClose;
    open?: ui$PopupAnimationOpen;
  }

  declare interface ui$PopupOptions {
    name?: string;
    adjustSize?: any;
    animation?: boolean | ui$PopupAnimation;
    anchor?: string | JQuery;
    appendTo?: string | JQuery;
    collision?: string;
    origin?: string;
    position?: string;
    activate?: (e: ui$PopupActivateEvent) => void;
    close?: (e: ui$PopupCloseEvent) => void;
    deactivate?: (e: ui$PopupDeactivateEvent) => void;
    open?: (e: ui$PopupOpenEvent) => void;
  }

  declare interface ui$PopupEvent {
    sender: ui$Popup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$PopupActivateEvent = {} & ui$PopupEvent;

  declare type ui$PopupCloseEvent = {} & ui$PopupEvent;

  declare type ui$PopupDeactivateEvent = {} & ui$PopupEvent;

  declare type ui$PopupOpenEvent = {} & ui$PopupEvent;

  declare class ui$ProgressBar mixins undefined.ui$Widget {
    static fn: ui$ProgressBar;
    options: ui$ProgressBarOptions;
    progressStatus: JQuery;
    progressWrapper: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ProgressBar;
    constructor(
      element: drawing$Element,
      options?: ui$ProgressBarOptions
    ): this;
    enable(effects$enable: boolean): void;
    value(): number;
    value(value: number): void;
  }

  declare interface ui$ProgressBarAnimation {
    duration?: number;
  }

  declare interface ui$ProgressBarOptions {
    name?: string;
    animation?: ui$ProgressBarAnimation;
    chunkCount?: number;
    effects$enable?: boolean;
    max?: number;
    min?: number;
    orientation?: string;
    reverse?: boolean;
    showStatus?: boolean;
    type?: string;
    value?: number;
    change?: (e: ui$ProgressBarChangeEvent) => void;
    complete?: (e: ui$ProgressBarCompleteEvent) => void;
  }

  declare interface ui$ProgressBarEvent {
    sender: ui$ProgressBar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ProgressBarChangeEvent = {
    value?: number
  } & ui$ProgressBarEvent;

  declare type ui$ProgressBarCompleteEvent = {
    value?: number
  } & ui$ProgressBarEvent;

  declare class ui$Prompt mixins undefined.ui$Dialog {
    static fn: ui$Prompt;
    options: ui$PromptOptions;
    result: JQueryPromise<any>;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Prompt;
    constructor(element: drawing$Element, options?: ui$PromptOptions): this;
  }

  declare interface ui$PromptMessages {
    okText?: string;
    cancel?: string;
  }

  declare interface ui$PromptOptions {
    name?: string;
    messages?: ui$PromptMessages;
  }

  declare interface ui$PromptEvent {
    sender: ui$Prompt;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$RangeSlider mixins undefined.ui$Widget {
    static fn: ui$RangeSlider;
    options: ui$RangeSliderOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$RangeSlider;
    constructor(
      element: drawing$Element,
      options?: ui$RangeSliderOptions
    ): this;
    destroy(): void;
    enable(effects$enable: boolean): void;
    value(): any;
    value(startEndArray: any): void;
    values(): any;
    values(selectionStart: number, selectionEnd: number): void;
    resize(): void;
  }

  declare interface ui$RangeSliderTooltip {
    enabled?: boolean;
    kendo$format?: string;
    kendo$template?: string;
  }

  declare interface ui$RangeSliderOptions {
    name?: string;
    largeStep?: number;
    leftDragHandleTitle?: string;
    max?: number;
    min?: number;
    orientation?: string;
    rightDragHandleTitle?: string;
    selectionEnd?: number;
    selectionStart?: number;
    smallStep?: number;
    tickPlacement?: string;
    tooltip?: ui$RangeSliderTooltip;
    change?: (e: ui$RangeSliderChangeEvent) => void;
    slide?: (e: ui$RangeSliderSlideEvent) => void;
  }

  declare interface ui$RangeSliderEvent {
    sender: ui$RangeSlider;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$RangeSliderChangeEvent = {
    value?: any
  } & ui$RangeSliderEvent;

  declare type ui$RangeSliderSlideEvent = {
    value?: any
  } & ui$RangeSliderEvent;

  declare class ui$ResponsivePanel mixins undefined.ui$Widget {
    static fn: ui$ResponsivePanel;
    options: ui$ResponsivePanelOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ResponsivePanel;
    constructor(
      element: drawing$Element,
      options?: ui$ResponsivePanelOptions
    ): this;
    close(): void;
    destroy(): void;
    open(): void;
  }

  declare interface ui$ResponsivePanelOptions {
    name?: string;
    autoClose?: boolean;
    breakpoint?: number;
    orientation?: string;
    toggleButton?: string;
    close?: (e: ui$ResponsivePanelEvent) => void;
    open?: (e: ui$ResponsivePanelEvent) => void;
  }

  declare interface ui$ResponsivePanelEvent {
    sender: ui$ResponsivePanel;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$Scheduler mixins undefined.ui$Widget {
    static fn: ui$Scheduler;
    options: ui$SchedulerOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    resources: any;
    calendar: kendo$kendo$ui.ui$Calendar;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Scheduler;
    constructor(element: drawing$Element, options?: ui$SchedulerOptions): this;
    addEvent(kendo$data: any): void;
    cancelEvent(): void;
    data(): void;
    date(): Date;
    date(value?: Date): void;
    destroy(): void;
    editEvent(event: string): void;
    editEvent(event: kendo$kendo$data.ui$SchedulerEvent): void;
    items(): any;
    occurrenceByUid(uid: string): kendo$kendo$data.ui$SchedulerEvent;
    occurrencesInRange(start: Date, end: Date): any;
    refresh(): void;
    removeEvent(event: string): void;
    removeEvent(event: kendo$kendo$data.ui$SchedulerEvent): void;
    resourcesBySlot(slot: any): any;
    saveAsPDF(): JQueryPromise<any>;
    saveEvent(): void;
    select(): void;
    select(events: any, options: any): void;
    setDataSource(dataSource: kendo$kendo$data.data$SchedulerDataSource): void;
    slotByPosition(xPosition: number, yPosition: number): any;
    slotByElement(element: drawing$Element): any;
    slotByElement(element: JQuery): any;
    view(): kendo$kendo$ui.ui$SchedulerView;
    view(type?: string): void;
    viewName(): string;
  }

  declare interface ui$SchedulerCurrentTimeMarker {
    updateInterval?: number;
    useLocalTimezone?: boolean;
  }

  declare interface ui$SchedulerEditable {
    confirmation?: boolean | string;
    create?: boolean;
    kendo$destroy?: boolean;
    editRecurringMode?: string;
    move?: boolean;
    kendo$resize?: boolean;
    kendo$template?: string | Function;
    update?: boolean;
    window?: any;
  }

  declare interface ui$SchedulerFooter {
    command?: string | boolean;
  }

  declare interface ui$SchedulerGroup {
    kendo$date?: boolean;
    resources?: any;
    orientation?: string;
  }

  declare interface ui$SchedulerMessagesEditable {
    confirmation?: string;
  }

  declare interface ui$SchedulerMessagesEditor {
    allDayEvent?: string;
    description?: string;
    editorTitle?: string;
    end?: string;
    endTimezone?: string;
    repeat?: string;
    separateTimezones?: string;
    start?: string;
    startTimezone?: string;
    kendo$timezone?: string;
    timezoneEditorButton?: string;
    timezoneEditorTitle?: string;
    title?: string;
  }

  declare interface ui$SchedulerMessagesRecurrenceEditorDaily {
    interval?: string;
    repeatEvery?: string;
  }

  declare interface ui$SchedulerMessagesRecurrenceEditorEnd {
    after?: string;
    occurrence?: string;
    label?: string;
    never?: string;
    mobileLabel?: string;
    on?: string;
  }

  declare interface ui$SchedulerMessagesRecurrenceEditorFrequencies {
    daily?: string;
    monthly?: string;
    never?: string;
    weekly?: string;
    yearly?: string;
  }

  declare interface ui$SchedulerMessagesRecurrenceEditorMonthly {
    day?: string;
    interval?: string;
    repeatEvery?: string;
    repeatOn?: string;
  }

  declare interface ui$SchedulerMessagesRecurrenceEditorOffsetPositions {
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
    last?: string;
  }

  declare interface ui$SchedulerMessagesRecurrenceEditorWeekdays {
    day?: string;
    weekday?: string;
    weekend?: string;
  }

  declare interface ui$SchedulerMessagesRecurrenceEditorWeekly {
    interval?: string;
    repeatEvery?: string;
    repeatOn?: string;
  }

  declare interface ui$SchedulerMessagesRecurrenceEditorYearly {
    of?: string;
    repeatEvery?: string;
    repeatOn?: string;
    interval?: string;
  }

  declare interface ui$SchedulerMessagesRecurrenceEditor {
    daily?: ui$SchedulerMessagesRecurrenceEditorDaily;
    end?: ui$SchedulerMessagesRecurrenceEditorEnd;
    frequencies?: ui$SchedulerMessagesRecurrenceEditorFrequencies;
    monthly?: ui$SchedulerMessagesRecurrenceEditorMonthly;
    offsetPositions?: ui$SchedulerMessagesRecurrenceEditorOffsetPositions;
    recurrenceEditorTitle?: string;
    weekly?: ui$SchedulerMessagesRecurrenceEditorWeekly;
    weekdays?: ui$SchedulerMessagesRecurrenceEditorWeekdays;
    yearly?: ui$SchedulerMessagesRecurrenceEditorYearly;
  }

  declare interface ui$SchedulerMessagesRecurrenceMessages {
    deleteRecurring?: string;
    deleteWindowOccurrence?: string;
    deleteWindowSeries?: string;
    deleteWindowTitle?: string;
    editRecurring?: string;
    editWindowOccurrence?: string;
    editWindowSeries?: string;
    editWindowTitle?: string;
  }

  declare interface ui$SchedulerMessagesViews {
    day?: string;
    week?: string;
    month?: string;
    agenda?: string;
  }

  declare interface ui$SchedulerMessages {
    allDay?: string;
    ariaEventLabel?: string;
    ariaSlotLabel?: string;
    cancel?: string;
    kendo$date?: string;
    deleteWindowTitle?: string;
    kendo$destroy?: string;
    event?: string;
    defaultRowText?: string;
    next?: string;
    kendo$pdf?: string;
    previous?: string;
    save?: string;
    showFullDay?: string;
    showWorkDay?: string;
    time?: string;
    date$today?: string;
    editable?: ui$SchedulerMessagesEditable;
    editor?: ui$SchedulerMessagesEditor;
    recurrenceEditor?: ui$SchedulerMessagesRecurrenceEditor;
    recurrenceMessages?: ui$SchedulerMessagesRecurrenceMessages;
    views?: ui$SchedulerMessagesViews;
  }

  declare interface ui$SchedulerPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface ui$SchedulerPdf {
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    kendo$date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: ui$SchedulerPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface ui$SchedulerResource {
    dataColorField?: string;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    dataTextField?: string;
    dataValueField?: string;
    field?: string;
    multiple?: boolean;
    name?: string;
    title?: string;
    valuePrimitive?: boolean;
  }

  declare interface ui$SchedulerToolbarItem {
    name?: string;
  }

  declare interface ui$SchedulerViewEditable {
    create?: boolean;
    kendo$destroy?: boolean;
    update?: boolean;
  }

  declare interface ui$SchedulerViewGroup {
    kendo$date?: boolean;
    orientation?: string;
  }

  declare interface ui$SchedulerView {
    allDayEventTemplate?: string | Function;
    allDaySlot?: boolean;
    allDaySlotTemplate?: string | Function;
    columnWidth?: number;
    dateHeaderTemplate?: string | Function;
    dayTemplate?: string | Function;
    editable?: boolean | ui$SchedulerViewEditable;
    endTime?: Date;
    eventHeight?: number;
    eventTemplate?: string | Function;
    eventTimeTemplate?: string | Function;
    group?: ui$SchedulerViewGroup;
    majorTick?: number;
    majorTimeHeaderTemplate?: string | Function;
    minorTickCount?: number;
    minorTimeHeaderTemplate?: string | Function;
    name?: string;
    selected?: boolean;
    selectedDateFormat?: string;
    selectedShortDateFormat?: string;
    showWorkHours?: boolean;
    slotTemplate?: string | Function;
    startTime?: Date;
    title?: string;
    type?: string;
    workWeekStart?: number;
    workWeekEnd?: number;
  }

  declare interface ui$SchedulerSelectOptions {
    events?: any;
    resources?: any;
    start?: Date;
    end?: Date;
    isAllDay?: boolean;
  }

  declare interface ui$SchedulerOptions {
    name?: string;
    allDayEventTemplate?: string | Function;
    allDaySlot?: boolean;
    autoBind?: boolean;
    currentTimeMarker?: boolean | ui$SchedulerCurrentTimeMarker;
    dataSource?: any | any | kendo$kendo$data.data$SchedulerDataSource;
    kendo$date?: Date;
    dateHeaderTemplate?: string | Function;
    editable?: boolean | ui$SchedulerEditable;
    endTime?: Date;
    eventTemplate?: string | Function;
    footer?: boolean | ui$SchedulerFooter;
    group?: ui$SchedulerGroup;
    groupHeaderTemplate?: string | Function;
    height?: number | string;
    majorTick?: number;
    majorTimeHeaderTemplate?: string | Function;
    max?: Date;
    messages?: ui$SchedulerMessages;
    min?: Date;
    minorTickCount?: number;
    minorTimeHeaderTemplate?: string | Function;
    kendo$mobile?: boolean | string;
    kendo$pdf?: ui$SchedulerPdf;
    resources?: ui$SchedulerResource[];
    selectable?: boolean;
    showWorkHours?: boolean;
    snap?: boolean;
    startTime?: Date;
    kendo$timezone?: string;
    toolbar?: ui$SchedulerToolbarItem[];
    views?: ui$SchedulerView[];
    width?: number | string;
    workDayStart?: Date;
    workDayEnd?: Date;
    workWeekStart?: number;
    workWeekEnd?: number;
    add?: (e: ui$SchedulerAddEvent) => void;
    cancel?: (e: ui$SchedulerCancelEvent) => void;
    change?: (e: ui$SchedulerChangeEvent) => void;
    dataBinding?: (e: ui$SchedulerDataBindingEvent) => void;
    dataBound?: (e: ui$SchedulerDataBoundEvent) => void;
    edit?: (e: ui$SchedulerEditEvent) => void;
    moveStart?: (e: ui$SchedulerMoveStartEvent) => void;
    move?: (e: ui$SchedulerMoveEvent) => void;
    moveEnd?: (e: ui$SchedulerMoveEndEvent) => void;
    navigate?: (e: ui$SchedulerNavigateEvent) => void;
    pdfExport?: (e: ui$SchedulerPdfExportEvent) => void;
    timezone$remove?: (e: ui$SchedulerRemoveEvent) => void;
    resizeStart?: (e: ui$SchedulerResizeStartEvent) => void;
    kendo$resize?: (e: ui$SchedulerResizeEvent) => void;
    resizeEnd?: (e: ui$SchedulerResizeEndEvent) => void;
    save?: (e: ui$SchedulerSaveEvent) => void;
  }

  declare interface ui$SchedulerEvent {
    sender: ui$Scheduler;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$SchedulerAddEvent = {
    event?: any
  } & ui$SchedulerEvent;

  declare type ui$SchedulerCancelEvent = {
    container?: JQuery,
    event?: kendo$kendo$data.ui$SchedulerEvent
  } & ui$SchedulerEvent;

  declare type ui$SchedulerChangeEvent = {
    start?: Date,
    end?: Date,
    events?: any,
    slots?: any,
    resources?: any
  } & ui$SchedulerEvent;

  declare type ui$SchedulerDataBindingEvent = {} & ui$SchedulerEvent;

  declare type ui$SchedulerDataBoundEvent = {} & ui$SchedulerEvent;

  declare type ui$SchedulerEditEvent = {
    container?: JQuery,
    event?: kendo$kendo$data.ui$SchedulerEvent
  } & ui$SchedulerEvent;

  declare type ui$SchedulerMoveStartEvent = {
    event?: kendo$kendo$data.ui$SchedulerEvent
  } & ui$SchedulerEvent;

  declare type ui$SchedulerMoveEvent = {
    event?: kendo$kendo$data.ui$SchedulerEvent,
    slot?: any
  } & ui$SchedulerEvent;

  declare type ui$SchedulerMoveEndEvent = {
    start?: Date,
    end?: Date,
    event?: kendo$kendo$data.ui$SchedulerEvent,
    slot?: any,
    resources?: any
  } & ui$SchedulerEvent;

  declare type ui$SchedulerNavigateEvent = {
    action?: string,
    kendo$date?: Date,
    view?: string
  } & ui$SchedulerEvent;

  declare type ui$SchedulerPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & ui$SchedulerEvent;

  declare type ui$SchedulerRemoveEvent = {
    event?: kendo$kendo$data.ui$SchedulerEvent
  } & ui$SchedulerEvent;

  declare type ui$SchedulerResizeStartEvent = {
    event?: kendo$kendo$data.ui$SchedulerEvent
  } & ui$SchedulerEvent;

  declare type ui$SchedulerResizeEvent = {
    event?: kendo$kendo$data.ui$SchedulerEvent,
    slot?: any
  } & ui$SchedulerEvent;

  declare type ui$SchedulerResizeEndEvent = {
    start?: Date,
    end?: Date,
    event?: kendo$kendo$data.ui$SchedulerEvent,
    slot?: any
  } & ui$SchedulerEvent;

  declare type ui$SchedulerSaveEvent = {
    container?: JQuery,
    event?: kendo$kendo$data.ui$SchedulerEvent
  } & ui$SchedulerEvent;

  declare class ui$ScrollView mixins undefined.ui$Widget {
    static fn: ui$ScrollView;
    options: ui$ScrollViewOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ScrollView;
    constructor(element: drawing$Element, options?: ui$ScrollViewOptions): this;
    content(content: string): void;
    content(content: JQuery): void;
    destroy(): void;
    next(): void;
    prev(): void;
    refresh(): void;
    scrollTo(page: number, instant: boolean): void;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
  }

  declare interface ui$ScrollViewOptions {
    name?: string;
    autoBind?: boolean;
    bounceVelocityThreshold?: number;
    contentHeight?: number | string;
    dataSource?: kendo$kendo$data.data$DataSource | any;
    duration?: number;
    emptyTemplate?: string;
    enablePager?: boolean;
    page?: number;
    kendo$template?: string;
    velocityThreshold?: number;
    change?: (e: ui$ScrollViewChangeEvent) => void;
    refresh?: (e: ui$ScrollViewRefreshEvent) => void;
    name?: string;
    autoBind?: boolean;
    bounceVelocityThreshold?: number;
    contentHeight?: number | string;
    dataSource?: kendo$kendo$data.data$DataSource | any;
    duration?: number;
    emptyTemplate?: string;
    enablePager?: boolean;
    itemsPerPage?: number;
    page?: number;
    pageSize?: number;
    kendo$template?: string;
    velocityThreshold?: number;
    changing?: (e: ui$ScrollViewChangingEvent) => void;
    change?: (e: ui$ScrollViewChangeEvent) => void;
    refresh?: (e: ui$ScrollViewRefreshEvent) => void;
  }

  declare interface ui$ScrollViewEvent {
    sender: ui$ScrollView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$ScrollView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ScrollViewChangeEvent = {
    currentPage?: number,
    nextPage?: number,
    element?: JQuery,
    kendo$data?: any,
    page?: number,
    element?: JQuery,
    kendo$data?: any
  } & ui$ScrollViewEvent;

  declare type ui$ScrollViewRefreshEvent = {
    pageCount?: number,
    page?: number,
    pageCount?: number,
    page?: number
  } & ui$ScrollViewEvent;

  declare class ui$Slider mixins undefined.ui$Widget {
    static fn: ui$Slider;
    options: ui$SliderOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Slider;
    constructor(element: drawing$Element, options?: ui$SliderOptions): this;
    destroy(): void;
    enable(effects$enable: boolean): void;
    max(): number;
    max(value: number): void;
    max(value: string): void;
    min(): number;
    min(value: number): void;
    min(value: string): void;
    setOptions(options: any): void;
    value(): number;
    value(value: number): void;
    resize(): void;
  }

  declare interface ui$SliderTooltip {
    enabled?: boolean;
    kendo$format?: string;
    kendo$template?: string | Function;
  }

  declare interface ui$SliderOptions {
    name?: string;
    decreaseButtonTitle?: string;
    dragHandleTitle?: string;
    increaseButtonTitle?: string;
    largeStep?: number;
    max?: number;
    min?: number;
    orientation?: string;
    showButtons?: boolean;
    smallStep?: number;
    tickPlacement?: string;
    tooltip?: ui$SliderTooltip;
    value?: number;
    change?: (e: ui$SliderChangeEvent) => void;
    slide?: (e: ui$SliderSlideEvent) => void;
  }

  declare interface ui$SliderEvent {
    sender: ui$Slider;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$SliderChangeEvent = {
    value?: number
  } & ui$SliderEvent;

  declare type ui$SliderSlideEvent = {
    value?: number
  } & ui$SliderEvent;

  declare class ui$Sortable mixins undefined.ui$Widget {
    static fn: ui$Sortable;
    options: ui$SortableOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Sortable;
    constructor(element: drawing$Element, options?: ui$SortableOptions): this;
    indexOf(element: JQuery): number;
    items(): JQuery;
  }

  declare interface ui$SortableCursorOffset {
    left?: number;
    top?: number;
  }

  declare interface ui$SortableOptions {
    name?: string;
    axis?: string;
    autoScroll?: boolean;
    container?: string | JQuery;
    connectWith?: string;
    cursor?: string;
    cursorOffset?: ui$SortableCursorOffset;
    disabled?: string;
    filter?: string;
    handler?: string;
    hint?: Function | string | JQuery;
    holdToDrag?: boolean;
    ignore?: string;
    placeholder?: Function | string | JQuery;
    start?: (e: ui$SortableStartEvent) => void;
    move?: (e: ui$SortableMoveEvent) => void;
    end?: (e: ui$SortableEndEvent) => void;
    change?: (e: ui$SortableChangeEvent) => void;
    cancel?: (e: ui$SortableCancelEvent) => void;
  }

  declare interface ui$SortableEvent {
    sender: ui$Sortable;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$SortableStartEvent = {
    draggableEvent?: any,
    item?: JQuery
  } & ui$SortableEvent;

  declare type ui$SortableMoveEvent = {
    item?: JQuery,
    target?: JQuery,
    list?: kendo$kendo$ui.ui$Sortable,
    draggableEvent?: any
  } & ui$SortableEvent;

  declare type ui$SortableEndEvent = {
    action?: string,
    item?: JQuery,
    oldIndex?: number,
    newIndex?: number,
    draggableEvent?: any
  } & ui$SortableEvent;

  declare type ui$SortableChangeEvent = {
    action?: string,
    item?: JQuery,
    oldIndex?: number,
    newIndex?: number,
    draggableEvent?: any
  } & ui$SortableEvent;

  declare type ui$SortableCancelEvent = {
    item?: JQuery
  } & ui$SortableEvent;

  declare class ui$Splitter mixins undefined.ui$Widget {
    static fn: ui$Splitter;
    options: ui$SplitterOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Splitter;
    constructor(element: drawing$Element, options?: ui$SplitterOptions): this;
    ajaxRequest(pane: string, url: string, kendo$data: any): void;
    ajaxRequest(pane: string, url: string, kendo$data: string): void;
    ajaxRequest(pane: drawing$Element, url: string, kendo$data: any): void;
    ajaxRequest(pane: drawing$Element, url: string, kendo$data: string): void;
    ajaxRequest(pane: JQuery, url: string, kendo$data: any): void;
    ajaxRequest(pane: JQuery, url: string, kendo$data: string): void;
    append(config?: any): JQuery;
    collapse(pane: string): void;
    collapse(pane: drawing$Element): void;
    collapse(pane: JQuery): void;
    destroy(): void;
    expand(pane: string): void;
    expand(pane: drawing$Element): void;
    expand(pane: JQuery): void;
    insertAfter(config: any, referencePane: string): JQuery;
    insertAfter(config: any, referencePane: drawing$Element): JQuery;
    insertAfter(config: any, referencePane: JQuery): JQuery;
    insertBefore(config: any, referencePane: string): JQuery;
    insertBefore(config: any, referencePane: drawing$Element): JQuery;
    insertBefore(config: any, referencePane: JQuery): JQuery;
    max(pane: string, value: string): void;
    max(pane: drawing$Element, value: string): void;
    max(pane: JQuery, value: string): void;
    min(pane: string, value: string): void;
    min(pane: drawing$Element, value: string): void;
    min(pane: JQuery, value: string): void;
    remove(pane: string): void;
    remove(pane: drawing$Element): void;
    remove(pane: JQuery): void;
    size(pane: string): any;
    size(pane: drawing$Element): any;
    size(pane: JQuery): any;
    size(pane: string, value?: string): void;
    size(pane: drawing$Element, value?: string): void;
    size(pane: JQuery, value?: string): void;
    toggle(pane: string, expand?: boolean): void;
    toggle(pane: drawing$Element, expand?: boolean): void;
    toggle(pane: JQuery, expand?: boolean): void;
  }

  declare interface ui$SplitterPane {
    collapsed?: boolean;
    collapsedSize?: string;
    collapsible?: boolean;
    contentUrl?: string;
    max?: string;
    min?: string;
    resizable?: boolean;
    scrollable?: boolean;
    size?: string;
  }

  declare interface ui$SplitterOptions {
    name?: string;
    orientation?: string;
    panes?: ui$SplitterPane[];
    collapse?: (e: ui$SplitterCollapseEvent) => void;
    contentLoad?: (e: ui$SplitterContentLoadEvent) => void;
    error?: (e: ui$SplitterErrorEvent) => void;
    expand?: (e: ui$SplitterExpandEvent) => void;
    layoutChange?: (e: ui$SplitterEvent) => void;
    kendo$resize?: (e: ui$SplitterEvent) => void;
  }

  declare interface ui$SplitterEvent {
    sender: ui$Splitter;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$SplitterCollapseEvent = {
    pane?: drawing$Element
  } & ui$SplitterEvent;

  declare type ui$SplitterContentLoadEvent = {
    pane?: drawing$Element
  } & ui$SplitterEvent;

  declare type ui$SplitterErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & ui$SplitterEvent;

  declare type ui$SplitterExpandEvent = {
    pane?: drawing$Element
  } & ui$SplitterEvent;

  declare class ui$Spreadsheet mixins undefined.ui$Widget {
    static fn: ui$Spreadsheet;
    options: ui$SpreadsheetOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Spreadsheet;
    constructor(
      element: drawing$Element,
      options?: ui$SpreadsheetOptions
    ): this;
    activeSheet(): kendo$kendo$spreadsheet.spreadsheet$Sheet;
    activeSheet(sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet): void;
    cellContextMenu(): kendo$kendo$ui.ui$ContextMenu;
    rowHeaderContextMenu(): kendo$kendo$ui.ui$ContextMenu;
    colHeaderContextMenu(): kendo$kendo$ui.ui$ContextMenu;
    sheets(): any;
    fromFile(blob: Blob): JQueryPromise<any>;
    fromFile(blob: File): JQueryPromise<any>;
    saveAsExcel(): void;
    saveAsPDF(): JQueryPromise<any>;
    sheetByName(name: string): kendo$kendo$spreadsheet.spreadsheet$Sheet;
    sheetIndex(sheet: kendo$kendo$spreadsheet.spreadsheet$Sheet): number;
    sheetByIndex(index: number): kendo$kendo$spreadsheet.spreadsheet$Sheet;
    insertSheet(options: any): kendo$kendo$spreadsheet.spreadsheet$Sheet;
    moveSheetToIndex(
      sheet: kendo$kendo$spreadsheet.spreadsheet$Sheet,
      index: number
    ): void;
    refresh(): void;
    removeSheet(sheet: kendo$kendo$spreadsheet.spreadsheet$Sheet): void;
    renameSheet(
      sheet: kendo$kendo$spreadsheet.spreadsheet$Sheet,
      newSheetName: string
    ): kendo$kendo$spreadsheet.spreadsheet$Sheet;
    toJSON(): any;
    fromJSON(kendo$data: any): void;
    defineName(name: string, value: string, hidden: boolean): void;
    undefineName(name: string): void;
  }

  declare interface ui$SpreadsheetDefaultCellStyle {
    background?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    Italic?: boolean;
    bold?: boolean;
    underline?: boolean;
    drawing$wrap?: boolean;
  }

  declare interface ui$SpreadsheetExcel {
    fileName?: string;
    forceProxy?: boolean;
    proxyURL?: string;
  }

  declare interface ui$SpreadsheetPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface ui$SpreadsheetPdf {
    area?: string;
    author?: string;
    creator?: string;
    kendo$date?: Date;
    fileName?: string;
    fitWidth?: boolean;
    forceProxy?: boolean;
    guidelines?: boolean;
    hCenter?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: ui$SpreadsheetPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
    vCenter?: boolean;
  }

  declare interface ui$SpreadsheetSheetColumn {
    index?: number;
    width?: number;
  }

  declare interface ui$SpreadsheetSheetFilterColumnCriteriaItem {
    operator?: string;
    value?: string;
  }

  declare interface ui$SpreadsheetSheetFilterColumn {
    criteria?: ui$SpreadsheetSheetFilterColumnCriteriaItem[];
    filter?: string;
    index?: number;
    logic?: string;
    type?: string;
    value?: number | string | Date;
    values?: any;
  }

  declare interface ui$SpreadsheetSheetFilter {
    columns?: ui$SpreadsheetSheetFilterColumn[];
    ref?: string;
  }

  declare interface ui$SpreadsheetSheetRowCellBorderBottom {
    color?: string;
    size?: string;
  }

  declare interface ui$SpreadsheetSheetRowCellBorderLeft {
    color?: string;
    size?: string;
  }

  declare interface ui$SpreadsheetSheetRowCellBorderRight {
    color?: string;
    size?: string;
  }

  declare interface ui$SpreadsheetSheetRowCellBorderTop {
    color?: string;
    size?: string;
  }

  declare interface ui$SpreadsheetSheetRowCellValidation {
    type?: string;
    comparerType?: string;
    dataType?: string;
    from?: string;
    showButton?: boolean;
    to?: string;
    allowNulls?: boolean;
    messageTemplate?: string;
    titleTemplate?: string;
  }

  declare interface ui$SpreadsheetSheetRowCell {
    background?: string;
    borderBottom?: ui$SpreadsheetSheetRowCellBorderBottom;
    borderLeft?: ui$SpreadsheetSheetRowCellBorderLeft;
    borderTop?: ui$SpreadsheetSheetRowCellBorderTop;
    borderRight?: ui$SpreadsheetSheetRowCellBorderRight;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    italic?: boolean;
    bold?: boolean;
    effects$enable?: boolean;
    kendo$format?: string;
    formula?: string;
    index?: number;
    link?: string;
    textAlign?: string;
    underline?: boolean;
    value?: number | string | boolean | Date;
    validation?: ui$SpreadsheetSheetRowCellValidation;
    verticalAlign?: string;
    drawing$wrap?: boolean;
  }

  declare interface ui$SpreadsheetSheetRow {
    cells?: ui$SpreadsheetSheetRowCell[];
    height?: number;
    index?: number;
    type?: string;
  }

  declare interface ui$SpreadsheetSheetSortColumn {
    ascending?: boolean;
    index?: number;
  }

  declare interface ui$SpreadsheetSheetSort {
    columns?: ui$SpreadsheetSheetSortColumn[];
    ref?: string;
  }

  declare interface ui$SpreadsheetSheet {
    activeCell?: string;
    name?: string;
    columns?: ui$SpreadsheetSheetColumn[];
    dataSource?: kendo$kendo$data.data$DataSource;
    filter?: ui$SpreadsheetSheetFilter;
    frozenColumns?: number;
    frozenRows?: number;
    mergedCells?: any;
    rows?: ui$SpreadsheetSheetRow[];
    selection?: string;
    showGridLines?: boolean;
    sort?: ui$SpreadsheetSheetSort;
  }

  declare interface ui$SpreadsheetToolbar {
    home?: boolean | any;
    insert?: boolean | any;
    kendo$data?: boolean | any;
  }

  declare interface ui$SpreadsheetInsertSheetOptions {
    rows?: number;
    columns?: number;
    rowHeight?: number;
    columnWidth?: number;
    headerHeight?: number;
    headerWidth?: number;
    dataSource?: kendo$kendo$data.data$DataSource;
    kendo$data?: any;
  }

  declare interface ui$SpreadsheetOptions {
    name?: string;
    activeSheet?: string;
    columnWidth?: number;
    columns?: number;
    defaultCellStyle?: ui$SpreadsheetDefaultCellStyle;
    headerHeight?: number;
    headerWidth?: number;
    excel?: ui$SpreadsheetExcel;
    kendo$pdf?: ui$SpreadsheetPdf;
    rowHeight?: number;
    rows?: number;
    sheets?: ui$SpreadsheetSheet[];
    sheetsbar?: boolean;
    toolbar?: boolean | ui$SpreadsheetToolbar;
    insertSheet?: (e: ui$SpreadsheetInsertSheetEvent) => void;
    removeSheet?: (e: ui$SpreadsheetRemoveSheetEvent) => void;
    renameSheet?: (e: ui$SpreadsheetRenameSheetEvent) => void;
    selectSheet?: (e: ui$SpreadsheetSelectSheetEvent) => void;
    unhideColumn?: (e: ui$SpreadsheetUnhideColumnEvent) => void;
    unhideRow?: (e: ui$SpreadsheetUnhideRowEvent) => void;
    hideColumn?: (e: ui$SpreadsheetHideColumnEvent) => void;
    hideRow?: (e: ui$SpreadsheetHideRowEvent) => void;
    deleteColumn?: (e: ui$SpreadsheetDeleteColumnEvent) => void;
    deleteRow?: (e: ui$SpreadsheetDeleteRowEvent) => void;
    insertColumn?: (e: ui$SpreadsheetInsertColumnEvent) => void;
    insertRow?: (e: ui$SpreadsheetInsertRowEvent) => void;
    select?: (e: ui$SpreadsheetSelectEvent) => void;
    changeFormat?: (e: ui$SpreadsheetChangeFormatEvent) => void;
    change?: (e: ui$SpreadsheetChangeEvent) => void;
    kendo$render?: (e: ui$SpreadsheetRenderEvent) => void;
    excelExport?: (e: ui$SpreadsheetExcelExportEvent) => void;
    excelImport?: (e: ui$SpreadsheetExcelImportEvent) => void;
    pdfExport?: (e: ui$SpreadsheetPdfExportEvent) => void;
  }

  declare interface ui$SpreadsheetEvent {
    sender: ui$Spreadsheet;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$SpreadsheetInsertSheetEvent = {} & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetRemoveSheetEvent = {
    sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetRenameSheetEvent = {
    sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet,
    newSheetName?: string
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetSelectSheetEvent = {
    sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetUnhideColumnEvent = {
    sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet,
    index?: number
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetUnhideRowEvent = {
    sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet,
    index?: number
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetHideColumnEvent = {
    sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet,
    index?: number
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetHideRowEvent = {
    sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet,
    index?: number
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetDeleteColumnEvent = {
    sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet,
    index?: number
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetDeleteRowEvent = {
    sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet,
    index?: number
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetInsertColumnEvent = {
    sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet,
    index?: number
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetInsertRowEvent = {
    sheet?: kendo$kendo$spreadsheet.spreadsheet$Sheet,
    index?: number
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetSelectEvent = {
    range?: kendo$kendo$spreadsheet.spreadsheet$Range
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetChangeFormatEvent = {
    range?: kendo$kendo$spreadsheet.spreadsheet$Range
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetChangeEvent = {
    range?: kendo$kendo$spreadsheet.spreadsheet$Range
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetRenderEvent = {} & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetExcelExportEvent = {
    kendo$data?: any,
    workbook?: kendo$kendo$ooxml.ooxml$Workbook
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetExcelImportEvent = {
    file?: Blob | File,
    ui$progress?: JQueryPromise<any>
  } & ui$SpreadsheetEvent;

  declare type ui$SpreadsheetPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & ui$SpreadsheetEvent;

  declare class ui$Switch mixins undefined.ui$Widget {
    static fn: ui$Switch;
    options: ui$SwitchOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Switch;
    constructor(element: drawing$Element, options?: ui$SwitchOptions): this;
    check(): boolean;
    check(check: boolean): void;
    destroy(): void;
    enable(effects$enable: boolean): void;
    toggle(): void;
    setOptions(options: any): void;
  }

  declare interface ui$SwitchOptions {
    name?: string;
    checked?: boolean;
    enabled?: boolean;
    readonly?: boolean;
    width?: number | string;
    change?: (e: ui$SwitchChangeEvent) => void;
    name?: string;
    checked?: boolean;
    effects$enable?: boolean;
    offLabel?: string;
    onLabel?: string;
    change?: (e: ui$SwitchChangeEvent) => void;
  }

  declare interface ui$SwitchMessages {
    checked?: string;
    unchecked?: string;
  }

  declare interface ui$SwitchEvent {
    sender: ui$Switch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$Switch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$SwitchChangeEvent = {
    checked?: any,
    checked?: any
  } & ui$SwitchEvent;

  declare class ui$TabStrip mixins undefined.ui$Widget {
    static fn: ui$TabStrip;
    options: ui$TabStripOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    tabGroup: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$TabStrip;
    constructor(element: drawing$Element, options?: ui$TabStripOptions): this;
    activateTab(item: JQuery): void;
    append(tab: any): kendo$kendo$ui.ui$TabStrip;
    contentElement(itemIndex: number): drawing$Element;
    contentHolder(itemIndex: number): drawing$Element;
    deactivateTab(item: JQuery): void;
    destroy(): void;
    disable(element: string): kendo$kendo$ui.ui$TabStrip;
    disable(element: drawing$Element): kendo$kendo$ui.ui$TabStrip;
    disable(element: JQuery): kendo$kendo$ui.ui$TabStrip;
    enable(
      element: string,
      effects$enable?: boolean
    ): kendo$kendo$ui.ui$TabStrip;
    enable(
      element: drawing$Element,
      effects$enable?: boolean
    ): kendo$kendo$ui.ui$TabStrip;
    enable(
      element: JQuery,
      effects$enable?: boolean
    ): kendo$kendo$ui.ui$TabStrip;
    insertAfter(item: any, referenceTab: string): kendo$kendo$ui.ui$TabStrip;
    insertAfter(
      item: any,
      referenceTab: drawing$Element
    ): kendo$kendo$ui.ui$TabStrip;
    insertAfter(item: any, referenceTab: JQuery): kendo$kendo$ui.ui$TabStrip;
    insertAfter(item: string, referenceTab: string): kendo$kendo$ui.ui$TabStrip;
    insertAfter(
      item: string,
      referenceTab: drawing$Element
    ): kendo$kendo$ui.ui$TabStrip;
    insertAfter(item: string, referenceTab: JQuery): kendo$kendo$ui.ui$TabStrip;
    insertAfter(
      item: drawing$Element,
      referenceTab: string
    ): kendo$kendo$ui.ui$TabStrip;
    insertAfter(
      item: drawing$Element,
      referenceTab: drawing$Element
    ): kendo$kendo$ui.ui$TabStrip;
    insertAfter(
      item: drawing$Element,
      referenceTab: JQuery
    ): kendo$kendo$ui.ui$TabStrip;
    insertAfter(item: JQuery, referenceTab: string): kendo$kendo$ui.ui$TabStrip;
    insertAfter(
      item: JQuery,
      referenceTab: drawing$Element
    ): kendo$kendo$ui.ui$TabStrip;
    insertAfter(item: JQuery, referenceTab: JQuery): kendo$kendo$ui.ui$TabStrip;
    insertBefore(item: any, referenceTab: string): kendo$kendo$ui.ui$TabStrip;
    insertBefore(
      item: any,
      referenceTab: drawing$Element
    ): kendo$kendo$ui.ui$TabStrip;
    insertBefore(item: any, referenceTab: JQuery): kendo$kendo$ui.ui$TabStrip;
    insertBefore(
      item: string,
      referenceTab: string
    ): kendo$kendo$ui.ui$TabStrip;
    insertBefore(
      item: string,
      referenceTab: drawing$Element
    ): kendo$kendo$ui.ui$TabStrip;
    insertBefore(
      item: string,
      referenceTab: JQuery
    ): kendo$kendo$ui.ui$TabStrip;
    insertBefore(
      item: drawing$Element,
      referenceTab: string
    ): kendo$kendo$ui.ui$TabStrip;
    insertBefore(
      item: drawing$Element,
      referenceTab: drawing$Element
    ): kendo$kendo$ui.ui$TabStrip;
    insertBefore(
      item: drawing$Element,
      referenceTab: JQuery
    ): kendo$kendo$ui.ui$TabStrip;
    insertBefore(
      item: JQuery,
      referenceTab: string
    ): kendo$kendo$ui.ui$TabStrip;
    insertBefore(
      item: JQuery,
      referenceTab: drawing$Element
    ): kendo$kendo$ui.ui$TabStrip;
    insertBefore(
      item: JQuery,
      referenceTab: JQuery
    ): kendo$kendo$ui.ui$TabStrip;
    items(): HTMLCollection;
    reload(element: string): kendo$kendo$ui.ui$TabStrip;
    reload(element: drawing$Element): kendo$kendo$ui.ui$TabStrip;
    reload(element: JQuery): kendo$kendo$ui.ui$TabStrip;
    remove(element: string): kendo$kendo$ui.ui$TabStrip;
    remove(element: number): kendo$kendo$ui.ui$TabStrip;
    remove(element: JQuery): kendo$kendo$ui.ui$TabStrip;
    select(): JQuery;
    select(element: string): void;
    select(element: drawing$Element): void;
    select(element: JQuery): void;
    select(element: number): void;
    setDataSource(dataSource: any): void;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
  }

  declare interface ui$TabStripAnimationClose {
    duration?: number;
    kendo$effects?: string;
  }

  declare interface ui$TabStripAnimationOpen {
    duration?: number;
    kendo$effects?: string;
  }

  declare interface ui$TabStripAnimation {
    close?: ui$TabStripAnimationClose;
    open?: ui$TabStripAnimationOpen;
  }

  declare interface ui$TabStripScrollable {
    distance?: number;
  }

  declare interface ui$TabStripOptions {
    name?: string;
    animation?: boolean | ui$TabStripAnimation;
    collapsible?: boolean;
    contentUrls?: any;
    dataContentField?: string;
    dataContentUrlField?: string;
    dataImageUrlField?: string;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    dataSpriteCssClass?: string;
    dataTextField?: string;
    dataUrlField?: string;
    navigatable?: boolean;
    scrollable?: boolean | ui$TabStripScrollable;
    tabPosition?: string;
    value?: string;
    activate?: (e: ui$TabStripActivateEvent) => void;
    contentLoad?: (e: ui$TabStripContentLoadEvent) => void;
    error?: (e: ui$TabStripErrorEvent) => void;
    select?: (e: ui$TabStripSelectEvent) => void;
    show?: (e: ui$TabStripShowEvent) => void;
    name?: string;
    selectedIndex?: number;
    select?: (e: ui$TabStripSelectEvent) => void;
  }

  declare interface ui$TabStripEvent {
    sender: ui$TabStrip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$TabStrip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$TabStripActivateEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element
  } & ui$TabStripEvent;

  declare type ui$TabStripContentLoadEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element
  } & ui$TabStripEvent;

  declare type ui$TabStripErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & ui$TabStripEvent;

  declare type ui$TabStripSelectEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element,
    item?: JQuery
  } & ui$TabStripEvent;

  declare type ui$TabStripShowEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element
  } & ui$TabStripEvent;

  declare class ui$TimePicker mixins undefined.ui$Widget {
    static fn: ui$TimePicker;
    options: ui$TimePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$TimePicker;
    constructor(element: drawing$Element, options?: ui$TimePickerOptions): this;
    close(): void;
    destroy(): void;
    enable(effects$enable: boolean): void;
    readonly(readonly: boolean): void;
    max(): Date;
    max(value: Date): void;
    max(value: string): void;
    min(): Date;
    min(value: Date): void;
    min(value: string): void;
    open(): void;
    setOptions(options: any): void;
    value(): Date;
    value(value: Date): void;
    value(value: string): void;
  }

  declare interface ui$TimePickerAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$TimePickerAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$TimePickerAnimation {
    close?: ui$TimePickerAnimationClose;
    open?: ui$TimePickerAnimationOpen;
  }

  declare interface ui$TimePickerOptions {
    name?: string;
    animation?: boolean | ui$TimePickerAnimation;
    kendo$culture?: string;
    dateInput?: boolean;
    dates?: any;
    kendo$format?: string;
    interval?: number;
    max?: Date;
    min?: Date;
    parseFormats?: any;
    value?: Date;
    change?: (e: ui$TimePickerChangeEvent) => void;
    close?: (e: ui$TimePickerCloseEvent) => void;
    open?: (e: ui$TimePickerOpenEvent) => void;
  }

  declare interface ui$TimePickerEvent {
    sender: ui$TimePicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$TimePickerChangeEvent = {} & ui$TimePickerEvent;

  declare type ui$TimePickerCloseEvent = {} & ui$TimePickerEvent;

  declare type ui$TimePickerOpenEvent = {} & ui$TimePickerEvent;

  declare class ui$ToolBar mixins undefined.ui$Widget {
    static fn: ui$ToolBar;
    options: ui$ToolBarOptions;
    element: JQuery;
    wrapper: JQuery;
    popup: kendo$kendo$ui.ui$Popup;
    static extend(proto: Object): ui$ToolBar;
    constructor(element: drawing$Element, options?: ui$ToolBarOptions): this;
    add(command: any): void;
    destroy(): void;
    enable(command: string, effects$enable: boolean): void;
    enable(command: drawing$Element, effects$enable: boolean): void;
    enable(command: JQuery, effects$enable: boolean): void;
    getSelectedFromGroup(groupName: string): void;
    hide(command: string): void;
    hide(command: drawing$Element): void;
    hide(command: JQuery): void;
    remove(command: string): void;
    remove(command: drawing$Element): void;
    remove(command: JQuery): void;
    show(command: string): void;
    show(command: drawing$Element): void;
    show(command: JQuery): void;
    toggle(command: string, state: boolean): void;
    toggle(command: drawing$Element, state: boolean): void;
    toggle(command: JQuery, state: boolean): void;
  }

  declare interface ui$ToolBarItemButton {
    attributes?: any;
    click?: Function;
    effects$enable?: boolean;
    group?: string;
    hidden?: boolean;
    icon?: string;
    id?: string;
    imageUrl?: string;
    selected?: boolean;
    showIcon?: string;
    showText?: string;
    spriteCssClass?: string;
    toggle?: Function;
    togglable?: boolean;
    text?: string;
    url?: string;
  }

  declare interface ui$ToolBarItemMenuButton {
    attributes?: any;
    effects$enable?: boolean;
    hidden?: boolean;
    icon?: string;
    id?: string;
    imageUrl?: string;
    spriteCssClass?: string;
    text?: string;
    url?: string;
  }

  declare interface ui$ToolBarItem {
    attributes?: any;
    buttons?: ui$ToolBarItemButton[];
    click?: Function;
    effects$enable?: boolean;
    group?: string;
    hidden?: boolean;
    icon?: string;
    id?: string;
    imageUrl?: string;
    menuButtons?: ui$ToolBarItemMenuButton[];
    overflow?: string;
    overflowTemplate?: string | Function;
    primary?: boolean;
    selected?: boolean;
    showIcon?: string;
    showText?: string;
    spriteCssClass?: string;
    kendo$template?: string | Function;
    text?: string;
    togglable?: boolean;
    toggle?: Function;
    type?: string;
    url?: string;
  }

  declare interface ui$ToolBarOptions {
    name?: string;
    resizable?: boolean;
    items?: ui$ToolBarItem[];
    click?: (e: ui$ToolBarClickEvent) => void;
    close?: (e: ui$ToolBarCloseEvent) => void;
    open?: (e: ui$ToolBarOpenEvent) => void;
    toggle?: (e: ui$ToolBarToggleEvent) => void;
    overflowClose?: (e: ui$ToolBarOverflowCloseEvent) => void;
    overflowOpen?: (e: ui$ToolBarOverflowOpenEvent) => void;
  }

  declare interface ui$ToolBarEvent {
    sender: ui$ToolBar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ToolBarClickEvent = {
    target?: JQuery,
    id?: string
  } & ui$ToolBarEvent;

  declare type ui$ToolBarCloseEvent = {
    SplitButton?: JQuery
  } & ui$ToolBarEvent;

  declare type ui$ToolBarOpenEvent = {
    SplitButton?: JQuery
  } & ui$ToolBarEvent;

  declare type ui$ToolBarToggleEvent = {
    target?: JQuery,
    checked?: boolean,
    id?: string
  } & ui$ToolBarEvent;

  declare type ui$ToolBarOverflowCloseEvent = {} & ui$ToolBarEvent;

  declare type ui$ToolBarOverflowOpenEvent = {} & ui$ToolBarEvent;

  declare class ui$Tooltip mixins undefined.ui$Widget {
    static fn: ui$Tooltip;
    options: drawing$TooltipOptions;
    popup: kendo$kendo$ui.ui$Popup;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Tooltip;
    constructor(
      element: drawing$Element,
      options?: drawing$TooltipOptions
    ): this;
    show(element: JQuery): void;
    hide(): void;
    refresh(): void;
    target(): JQuery;
  }

  declare interface ui$TooltipAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$TooltipAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$TooltipAnimation {
    close?: ui$TooltipAnimationClose;
    open?: ui$TooltipAnimationOpen;
  }

  declare interface ui$TooltipContent {
    url?: string;
  }

  declare interface ui$TooltipOptions {
    name?: string;
    autoHide?: boolean;
    animation?: boolean | ui$TooltipAnimation;
    content?: string | Function | ui$TooltipContent;
    callout?: boolean;
    filter?: string;
    iframe?: boolean;
    height?: number;
    width?: number;
    position?: string;
    showAfter?: number;
    showOn?: string;
    contentLoad?: (e: ui$TooltipEvent) => void;
    show?: (e: ui$TooltipEvent) => void;
    hide?: (e: ui$TooltipEvent) => void;
    requestStart?: (e: ui$TooltipRequestStartEvent) => void;
    error?: (e: ui$TooltipErrorEvent) => void;
    autoHide?: boolean;
    content?: string | Function;
    position?: string;
    height?: number | string;
    hideDelay?: number;
    timezone$offset?: number;
    shared?: boolean;
    showAfter?: number;
    showOn?: string;
    width?: number | string;
    autoHide?: boolean;
    content?: string | Function;
    position?: string;
    height?: number | string;
    hideDelay?: number;
    timezone$offset?: number;
    shared?: boolean;
    showAfter?: number;
    showOn?: string;
    width?: number | string;
  }

  declare interface ui$TooltipEvent {
    sender: ui$Tooltip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$TooltipRequestStartEvent = {
    target?: JQuery,
    options?: any
  } & ui$TooltipEvent;

  declare type ui$TooltipErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & ui$TooltipEvent;

  declare class ui$Touch mixins undefined.ui$Widget {
    static fn: ui$Touch;
    options: ui$TouchOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Touch;
    constructor(element: drawing$Element, options?: ui$TouchOptions): this;
    cancel(): void;
    destroy(): void;
  }

  declare interface ui$TouchOptions {
    name?: string;
    filter?: string;
    surface?: JQuery;
    multiTouch?: boolean;
    enableSwipe?: boolean;
    minXDelta?: number;
    maxYDelta?: number;
    maxDuration?: number;
    minHold?: number;
    doubleTapTimeout?: number;
    touchstart?: (e: ui$TouchTouchstartEvent) => void;
    dragstart?: (e: ui$TouchDragstartEvent) => void;
    drag?: (e: ui$TouchDragEvent) => void;
    dragend?: (e: ui$TouchDragendEvent) => void;
    tap?: (e: ui$TouchTapEvent) => void;
    doubletap?: (e: ui$TouchDoubletapEvent) => void;
    hold?: (e: ui$TouchHoldEvent) => void;
    swipe?: (e: ui$TouchSwipeEvent) => void;
    gesturestart?: (e: ui$TouchGesturestartEvent) => void;
    gesturechange?: (e: ui$TouchGesturechangeEvent) => void;
    gestureend?: (e: ui$TouchGestureendEvent) => void;
  }

  declare interface ui$TouchEvent {
    sender: ui$Touch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$TouchTouchstartEvent = {
    touch?: kendo$kendo$mobile.kendo$ui.ui$TouchEventOptions,
    event?: JQueryEventObject
  } & ui$TouchEvent;

  declare type ui$TouchDragstartEvent = {
    touch?: kendo$kendo$mobile.kendo$ui.ui$TouchEventOptions,
    event?: JQueryEventObject
  } & ui$TouchEvent;

  declare type ui$TouchDragEvent = {
    touch?: kendo$kendo$mobile.kendo$ui.ui$TouchEventOptions,
    event?: JQueryEventObject
  } & ui$TouchEvent;

  declare type ui$TouchDragendEvent = {
    touch?: kendo$kendo$mobile.kendo$ui.ui$TouchEventOptions,
    event?: JQueryEventObject
  } & ui$TouchEvent;

  declare type ui$TouchTapEvent = {
    touch?: kendo$kendo$mobile.kendo$ui.ui$TouchEventOptions,
    event?: JQueryEventObject
  } & ui$TouchEvent;

  declare type ui$TouchDoubletapEvent = {
    touch?: kendo$kendo$mobile.kendo$ui.ui$TouchEventOptions,
    event?: JQueryEventObject
  } & ui$TouchEvent;

  declare type ui$TouchHoldEvent = {
    touch?: kendo$kendo$mobile.kendo$ui.ui$TouchEventOptions,
    event?: JQueryEventObject
  } & ui$TouchEvent;

  declare type ui$TouchSwipeEvent = {
    touch?: kendo$kendo$mobile.kendo$ui.ui$TouchEventOptions,
    event?: JQueryEventObject,
    direction?: string
  } & ui$TouchEvent;

  declare type ui$TouchGesturestartEvent = {
    touches?: any,
    event?: JQueryEventObject,
    distance?: number,
    center?: kendo$kendo$mobile.kendo$ui.geometry$Point
  } & ui$TouchEvent;

  declare type ui$TouchGesturechangeEvent = {
    touches?: any,
    event?: JQueryEventObject,
    distance?: number,
    center?: kendo$kendo$mobile.kendo$ui.geometry$Point
  } & ui$TouchEvent;

  declare type ui$TouchGestureendEvent = {
    touches?: any,
    event?: JQueryEventObject,
    distance?: number,
    center?: kendo$kendo$mobile.kendo$ui.geometry$Point
  } & ui$TouchEvent;

  declare class ui$TreeList mixins undefined.ui$Widget {
    static fn: ui$TreeList;
    options: ui$TreeListOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    columns: any;
    table: JQuery;
    tbody: JQuery;
    thead: JQuery;
    content: JQuery;
    lockedHeader: JQuery;
    lockedTable: JQuery;
    lockedContent: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$TreeList;
    constructor(element: drawing$Element, options?: ui$TreeListOptions): this;
    addRow(parentRow: string): void;
    addRow(parentRow: drawing$Element): void;
    addRow(parentRow: JQuery): void;
    autoFitColumn(column: number): void;
    autoFitColumn(column: string): void;
    autoFitColumn(column: any): void;
    cancelChanges(): void;
    cancelRow(): void;
    clearSelection(): void;
    closeCell(isCancel?: boolean): void;
    collapse(row: string): JQueryPromise<any>;
    collapse(row: drawing$Element): JQueryPromise<any>;
    collapse(row: JQuery): JQueryPromise<any>;
    dataItem(row: string): kendo$kendo$data.data$TreeListModel;
    dataItem(row: drawing$Element): kendo$kendo$data.data$TreeListModel;
    dataItem(row: JQuery): kendo$kendo$data.data$TreeListModel;
    destroy(): void;
    editCell(cell: JQuery): void;
    editRow(row: JQuery): void;
    expand(row: string): JQueryPromise<any>;
    expand(row: drawing$Element): JQueryPromise<any>;
    expand(row: JQuery): JQueryPromise<any>;
    itemFor(model: kendo$kendo$data.data$TreeListModel): JQuery;
    itemFor(model: any): JQuery;
    items(): any;
    refresh(): void;
    removeRow(row: string): void;
    removeRow(row: drawing$Element): void;
    removeRow(row: JQuery): void;
    saveAsExcel(): void;
    saveAsPDF(): JQueryPromise<any>;
    saveChanges(): void;
    saveRow(): void;
    select(): JQuery;
    select(rows: drawing$Element): void;
    select(rows: JQuery): void;
    setDataSource(dataSource: kendo$kendo$data.data$TreeListDataSource): void;
    showColumn(column: number): void;
    showColumn(column: string): void;
    hideColumn(column: number): void;
    hideColumn(column: string): void;
    lockColumn(column: number): void;
    lockColumn(column: string): void;
    unlockColumn(column: number): void;
    unlockColumn(column: string): void;
    reorderColumn(destIndex: number, column: any): void;
  }

  declare interface ui$TreeListColumnMenuMessages {
    columns?: string;
    filter?: string;
    sortAscending?: string;
    sortDescending?: string;
    settings?: string;
    lock?: string;
    unlock?: string;
  }

  declare interface ui$TreeListColumnMenu {
    columns?: boolean;
    filterable?: boolean;
    sortable?: boolean;
    messages?: ui$TreeListColumnMenuMessages;
  }

  declare interface ui$TreeListColumnCommandItem {
    className?: string;
    imageClass?: string;
    click?: Function;
    name?: string;
    text?: string;
  }

  declare interface ui$TreeListColumnFilterable {
    kendo$ui?: string | Function;
  }

  declare interface ui$TreeListColumnSortable {
    compare?: Function;
  }

  declare interface ui$TreeListColumn {
    editor?: (container: JQuery, options: ui$TreeListEditorOptions) => void;
    attributes?: any;
    columns?: any;
    command?: ui$TreeListColumnCommandItem[];
    editable?: Function;
    encoded?: boolean;
    expandable?: boolean;
    field?: string;
    filterable?: boolean | ui$TreeListColumnFilterable;
    footerTemplate?: string | Function;
    kendo$format?: string;
    headerAttributes?: any;
    headerTemplate?: string | Function;
    minScreenWidth?: number;
    sortable?: boolean | ui$TreeListColumnSortable;
    kendo$template?: string | Function;
    title?: string;
    width?: string | number;
    hidden?: boolean;
    menu?: boolean;
    locked?: boolean;
    lockable?: boolean;
  }

  declare interface ui$TreeListEditable {
    mode?: string;
    move?: boolean;
    kendo$template?: string | Function;
    window?: any;
  }

  declare interface ui$TreeListExcel {
    fileName?: string;
    filterable?: boolean;
    forceProxy?: boolean;
    proxyURL?: string;
  }

  declare interface ui$TreeListFilterableMessages {
    and?: string;
    clear?: string;
    filter?: string;
    info?: string;
    title?: string;
    isFalse?: string;
    isTrue?: string;
    or?: string;
  }

  declare interface ui$TreeListFilterableOperatorsDate {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface ui$TreeListFilterableOperatorsNumber {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface ui$TreeListFilterableOperatorsString {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    isempty?: string;
    isnotempty?: string;
    startswith?: string;
    contains?: string;
    doesnotcontain?: string;
    endswith?: string;
  }

  declare interface ui$TreeListFilterableOperators {
    string?: ui$TreeListFilterableOperatorsString;
    number?: ui$TreeListFilterableOperatorsNumber;
    kendo$date?: ui$TreeListFilterableOperatorsDate;
  }

  declare interface ui$TreeListFilterable {
    extra?: boolean;
    messages?: ui$TreeListFilterableMessages;
    operators?: ui$TreeListFilterableOperators;
  }

  declare interface ui$TreeListMessagesCommands {
    canceledit?: string;
    create?: string;
    createchild?: string;
    kendo$destroy?: string;
    edit?: string;
    save?: string;
    cancel?: string;
    excel?: string;
    kendo$pdf?: string;
    update?: string;
  }

  declare interface ui$TreeListMessages {
    commands?: ui$TreeListMessagesCommands;
    loading?: string;
    noRows?: string;
    requestFailed?: string;
    retry?: string;
  }

  declare interface ui$TreeListPageableMessages {
    display?: string;
    empty?: string;
    page?: string;
    of?: string;
    itemsPerPage?: string;
    first?: string;
    last?: string;
    next?: string;
    previous?: string;
    refresh?: string;
    morePages?: string;
  }

  declare interface ui$TreeListPageable {
    alwaysVisible?: boolean;
    pageSize?: number;
    previousNext?: boolean;
    numeric?: boolean;
    buttonCount?: number;
    input?: boolean;
    pageSizes?: boolean | any;
    refresh?: boolean;
    info?: boolean;
    messages?: ui$TreeListPageableMessages;
  }

  declare interface ui$TreeListPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface ui$TreeListPdf {
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    kendo$date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: ui$TreeListPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface ui$TreeListSortable {
    allowUnsort?: boolean;
    mode?: string;
  }

  declare interface ui$TreeListToolbarItem {
    click?: Function;
    imageClass?: string;
    name?: string;
    text?: string;
  }

  declare interface ui$TreeListOptions {
    name?: string;
    autoBind?: boolean;
    columns?: ui$TreeListColumn[];
    resizable?: boolean;
    reorderable?: boolean;
    columnMenu?: boolean | ui$TreeListColumnMenu;
    dataSource?: any | any | kendo$kendo$data.data$TreeListDataSource;
    editable?: boolean | ui$TreeListEditable;
    excel?: ui$TreeListExcel;
    filterable?: boolean | ui$TreeListFilterable;
    height?: number | string;
    messages?: ui$TreeListMessages;
    navigatable?: boolean;
    pageable?: boolean | ui$TreeListPageable;
    kendo$pdf?: ui$TreeListPdf;
    scrollable?: boolean | any;
    selectable?: boolean | string;
    sortable?: boolean | ui$TreeListSortable;
    toolbar?: ui$TreeListToolbarItem[] | any;
    beforeEdit?: (e: ui$TreeListBeforeEditEvent) => void;
    cancel?: (e: ui$TreeListCancelEvent) => void;
    cellClose?: (e: ui$TreeListCellCloseEvent) => void;
    change?: (e: ui$TreeListChangeEvent) => void;
    collapse?: (e: ui$TreeListCollapseEvent) => void;
    dataBinding?: (e: ui$TreeListDataBindingEvent) => void;
    dataBound?: (e: ui$TreeListDataBoundEvent) => void;
    dragstart?: (e: ui$TreeListDragstartEvent) => void;
    drag?: (e: ui$TreeListDragEvent) => void;
    dragend?: (e: ui$TreeListDragendEvent) => void;
    drop?: (e: ui$TreeListDropEvent) => void;
    edit?: (e: ui$TreeListEditEvent) => void;
    excelExport?: (e: ui$TreeListExcelExportEvent) => void;
    expand?: (e: ui$TreeListExpandEvent) => void;
    filterMenuInit?: (e: ui$TreeListFilterMenuInitEvent) => void;
    filterMenuOpen?: (e: ui$TreeListFilterMenuOpenEvent) => void;
    pdfExport?: (e: ui$TreeListPdfExportEvent) => void;
    timezone$remove?: (e: ui$TreeListRemoveEvent) => void;
    save?: (e: ui$TreeListSaveEvent) => void;
    saveChanges?: (e: ui$TreeListSaveChangesEvent) => void;
    columnShow?: (e: ui$TreeListColumnShowEvent) => void;
    columnHide?: (e: ui$TreeListColumnHideEvent) => void;
    columnReorder?: (e: ui$TreeListColumnReorderEvent) => void;
    columnResize?: (e: ui$TreeListColumnResizeEvent) => void;
    columnMenuInit?: (e: ui$TreeListColumnMenuInitEvent) => void;
    columnMenuOpen?: (e: ui$TreeListColumnMenuOpenEvent) => void;
    columnLock?: (e: ui$TreeListColumnLockEvent) => void;
    columnUnlock?: (e: ui$TreeListColumnUnlockEvent) => void;
  }

  declare interface ui$TreeListEvent {
    sender: ui$TreeList;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$TreeListBeforeEditEvent = {
    model?: kendo$kendo$data.data$Model
  } & ui$TreeListEvent;

  declare type ui$TreeListCancelEvent = {
    container?: JQuery,
    model?: kendo$kendo$data.data$TreeListModel
  } & ui$TreeListEvent;

  declare type ui$TreeListCellCloseEvent = {
    container?: JQuery,
    model?: kendo$kendo$data.data$Model,
    type?: string
  } & ui$TreeListEvent;

  declare type ui$TreeListChangeEvent = {} & ui$TreeListEvent;

  declare type ui$TreeListCollapseEvent = {
    model?: kendo$kendo$data.data$TreeListModel
  } & ui$TreeListEvent;

  declare type ui$TreeListDataBindingEvent = {} & ui$TreeListEvent;

  declare type ui$TreeListDataBoundEvent = {} & ui$TreeListEvent;

  declare type ui$TreeListDragstartEvent = {
    source?: kendo$kendo$data.data$TreeListModel
  } & ui$TreeListEvent;

  declare type ui$TreeListDragEvent = {
    source?: kendo$kendo$data.data$TreeListModel,
    target?: JQuery
  } & ui$TreeListEvent;

  declare type ui$TreeListDragendEvent = {
    source?: kendo$kendo$data.data$TreeListModel,
    destination?: kendo$kendo$data.data$TreeListModel
  } & ui$TreeListEvent;

  declare type ui$TreeListDropEvent = {
    source?: kendo$kendo$data.data$TreeListModel,
    destination?: kendo$kendo$data.data$TreeListModel,
    dropTarget?: drawing$Element,
    valid?: boolean,
    setValid?: boolean
  } & ui$TreeListEvent;

  declare type ui$TreeListEditEvent = {
    container?: JQuery,
    model?: kendo$kendo$data.data$TreeListModel
  } & ui$TreeListEvent;

  declare type ui$TreeListExcelExportEvent = {
    kendo$data?: any,
    workbook?: any
  } & ui$TreeListEvent;

  declare type ui$TreeListExpandEvent = {
    model?: kendo$kendo$data.data$TreeListModel
  } & ui$TreeListEvent;

  declare type ui$TreeListFilterMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & ui$TreeListEvent;

  declare type ui$TreeListFilterMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & ui$TreeListEvent;

  declare type ui$TreeListPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & ui$TreeListEvent;

  declare type ui$TreeListRemoveEvent = {
    model?: kendo$kendo$data.data$TreeListModel,
    row?: JQuery
  } & ui$TreeListEvent;

  declare type ui$TreeListSaveEvent = {
    model?: kendo$kendo$data.data$TreeListModel,
    container?: JQuery
  } & ui$TreeListEvent;

  declare type ui$TreeListSaveChangesEvent = {} & ui$TreeListEvent;

  declare type ui$TreeListColumnShowEvent = {
    column?: any
  } & ui$TreeListEvent;

  declare type ui$TreeListColumnHideEvent = {
    column?: any
  } & ui$TreeListEvent;

  declare type ui$TreeListColumnReorderEvent = {
    column?: any,
    newIndex?: number,
    oldIndex?: number
  } & ui$TreeListEvent;

  declare type ui$TreeListColumnResizeEvent = {
    column?: any,
    newWidth?: number,
    oldWidth?: number
  } & ui$TreeListEvent;

  declare type ui$TreeListColumnMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & ui$TreeListEvent;

  declare type ui$TreeListColumnMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & ui$TreeListEvent;

  declare type ui$TreeListColumnLockEvent = {
    column?: any
  } & ui$TreeListEvent;

  declare type ui$TreeListColumnUnlockEvent = {
    column?: any
  } & ui$TreeListEvent;

  declare class ui$TreeView mixins undefined.ui$Widget {
    static fn: ui$TreeView;
    options: ui$TreeViewOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$TreeView;
    constructor(element: drawing$Element, options?: ui$TreeViewOptions): this;
    append(nodeData: any, parentNode?: JQuery, success?: Function): JQuery;
    append(nodeData: JQuery, parentNode?: JQuery, success?: Function): JQuery;
    collapse(nodes: JQuery): void;
    collapse(nodes: drawing$Element): void;
    collapse(nodes: string): void;
    dataItem(node: JQuery): kendo$kendo$data.data$Node;
    dataItem(node: drawing$Element): kendo$kendo$data.data$Node;
    dataItem(node: string): kendo$kendo$data.data$Node;
    destroy(): void;
    detach(node: JQuery): JQuery;
    detach(node: drawing$Element): JQuery;
    detach(node: string): JQuery;
    enable(nodes: JQuery, effects$enable?: boolean): void;
    enable(nodes: drawing$Element, effects$enable?: boolean): void;
    enable(nodes: string, effects$enable?: boolean): void;
    enable(nodes: boolean, effects$enable?: boolean): void;
    expand(nodes: JQuery): void;
    expand(nodes: drawing$Element): void;
    expand(nodes: string): void;
    expandPath(path: any, complete: Function): void;
    expandTo(targetNode: kendo$kendo$data.data$Node): void;
    expandTo(targetNode: any): void;
    findByText(text: string): JQuery;
    findByUid(uid: string): JQuery;
    focus(): void;
    insertAfter(nodeData: any, referenceNode: JQuery): JQuery;
    insertBefore(nodeData: any, referenceNode: JQuery): JQuery;
    items(): any;
    parent(node: JQuery): JQuery;
    parent(node: drawing$Element): JQuery;
    parent(node: string): JQuery;
    remove(node: JQuery): void;
    remove(node: drawing$Element): void;
    remove(node: string): void;
    select(): JQuery;
    select(node?: JQuery): void;
    select(node?: drawing$Element): void;
    select(node?: string): void;
    setDataSource(
      dataSource: kendo$kendo$data.data$HierarchicalDataSource
    ): void;
    text(node: JQuery): string;
    text(node: drawing$Element): string;
    text(node: string): string;
    text(node: JQuery, newText: string): void;
    text(node: drawing$Element, newText: string): void;
    text(node: string, newText: string): void;
    toggle(node: JQuery): void;
    toggle(node: drawing$Element): void;
    toggle(node: string): void;
    updateIndeterminate(node: JQuery): void;
  }

  declare interface ui$TreeViewAnimationCollapse {
    duration?: number;
    kendo$effects?: string;
  }

  declare interface ui$TreeViewAnimationExpand {
    duration?: number;
    kendo$effects?: string;
  }

  declare interface ui$TreeViewAnimation {
    collapse?: boolean | ui$TreeViewAnimationCollapse;
    expand?: boolean | ui$TreeViewAnimationExpand;
  }

  declare interface ui$TreeViewCheckboxes {
    checkChildren?: boolean;
    name?: string;
    kendo$template?: string | Function;
  }

  declare interface ui$TreeViewMessages {
    loading?: string;
    requestFailed?: string;
    retry?: string;
  }

  declare interface ui$TreeViewOptions {
    name?: string;
    animation?: boolean | ui$TreeViewAnimation;
    autoBind?: boolean;
    autoScroll?: boolean;
    checkboxes?: boolean | ui$TreeViewCheckboxes;
    dataImageUrlField?: string;
    dataSource?: any | any | kendo$kendo$data.data$HierarchicalDataSource;
    dataSpriteCssClassField?: string;
    dataTextField?: string | any;
    dataUrlField?: string;
    dragAndDrop?: boolean;
    loadOnDemand?: boolean;
    messages?: ui$TreeViewMessages;
    kendo$template?: string | Function;
    change?: (e: ui$TreeViewEvent) => void;
    check?: (e: ui$TreeViewCheckEvent) => void;
    collapse?: (e: ui$TreeViewCollapseEvent) => void;
    dataBound?: (e: ui$TreeViewDataBoundEvent) => void;
    drag?: (e: ui$TreeViewDragEvent) => void;
    dragend?: (e: ui$TreeViewDragendEvent) => void;
    dragstart?: (e: ui$TreeViewDragstartEvent) => void;
    drop?: (e: ui$TreeViewDropEvent) => void;
    expand?: (e: ui$TreeViewExpandEvent) => void;
    navigate?: (e: ui$TreeViewNavigateEvent) => void;
    select?: (e: ui$TreeViewSelectEvent) => void;
  }

  declare interface ui$TreeViewEvent {
    sender: ui$TreeView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$TreeViewCheckEvent = {
    node?: drawing$Element
  } & ui$TreeViewEvent;

  declare type ui$TreeViewCollapseEvent = {
    node?: drawing$Element
  } & ui$TreeViewEvent;

  declare type ui$TreeViewDataBoundEvent = {
    node?: JQuery
  } & ui$TreeViewEvent;

  declare type ui$TreeViewDragEvent = {
    sourceNode?: drawing$Element,
    dropTarget?: drawing$Element,
    pageX?: number,
    pageY?: number,
    statusClass?: string,
    setStatusClass?: Function
  } & ui$TreeViewEvent;

  declare type ui$TreeViewDragendEvent = {
    sourceNode?: drawing$Element,
    destinationNode?: drawing$Element,
    dropPosition?: string
  } & ui$TreeViewEvent;

  declare type ui$TreeViewDragstartEvent = {
    sourceNode?: drawing$Element
  } & ui$TreeViewEvent;

  declare type ui$TreeViewDropEvent = {
    sourceNode?: drawing$Element,
    destinationNode?: drawing$Element,
    valid?: boolean,
    setValid?: Function,
    dropTarget?: drawing$Element,
    dropPosition?: string
  } & ui$TreeViewEvent;

  declare type ui$TreeViewExpandEvent = {
    node?: drawing$Element
  } & ui$TreeViewEvent;

  declare type ui$TreeViewNavigateEvent = {
    node?: drawing$Element
  } & ui$TreeViewEvent;

  declare type ui$TreeViewSelectEvent = {
    node?: drawing$Element
  } & ui$TreeViewEvent;

  declare class ui$Upload mixins undefined.ui$Widget {
    static fn: ui$Upload;
    options: ui$UploadOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Upload;
    constructor(element: drawing$Element, options?: ui$UploadOptions): this;
    clearAllFiles(): void;
    clearFile(callback: Function): void;
    clearFileByUid(uid: string): void;
    destroy(): void;
    disable(): void;
    enable(effects$enable?: boolean): void;
    focus(): void;
    getFiles(): any;
    pause(li: JQuery): void;
    resume(li: JQuery): void;
    removeAllFiles(): void;
    removeFile(callback: Function): void;
    removeFileByUid(uid: string): void;
    toggle(effects$enable: boolean): void;
    upload(): void;
  }

  declare interface ui$UploadAsync {
    autoUpload?: boolean;
    batch?: boolean;
    chunkSize?: number;
    concurrent?: boolean;
    autoRetryAfter?: number;
    maxAutoRetries?: number;
    removeField?: string;
    removeUrl?: string;
    removeVerb?: string;
    saveField?: string;
    saveUrl?: string;
    useArrayBuffer?: boolean;
    withCredentials?: boolean;
  }

  declare interface ui$UploadFile {
    extension?: string;
    name?: string;
    size?: number;
  }

  declare interface ui$UploadLocalization {
    cancel?: string;
    clearSelectedFiles?: string;
    dropFilesHere?: string;
    headerStatusUploaded?: string;
    headerStatusUploading?: string;
    invalidFileExtension?: string;
    invalidFiles?: string;
    invalidMaxFileSize?: string;
    invalidMinFileSize?: string;
    timezone$remove?: string;
    retry?: string;
    select?: string;
    statusFailed?: string;
    statusUploaded?: string;
    statusUploading?: string;
    uploadSelectedFiles?: string;
  }

  declare interface ui$UploadValidation {
    allowedExtensions?: any;
    maxFileSize?: number;
    minFileSize?: number;
  }

  declare interface ui$UploadOptions {
    name?: string;
    async?: ui$UploadAsync;
    directory?: boolean;
    directoryDrop?: boolean;
    dropZone?: string;
    enabled?: boolean;
    files?: ui$UploadFile[];
    localization?: ui$UploadLocalization;
    multiple?: boolean;
    showFileList?: boolean;
    kendo$template?: string | Function;
    validation?: ui$UploadValidation;
    cancel?: (e: ui$UploadCancelEvent) => void;
    clear?: (e: ui$UploadClearEvent) => void;
    complete?: (e: ui$UploadEvent) => void;
    error?: (e: ui$UploadErrorEvent) => void;
    pause?: (e: ui$UploadPauseEvent) => void;
    ui$progress?: (e: ui$UploadProgressEvent) => void;
    resume?: (e: ui$UploadEvent) => void;
    timezone$remove?: (e: ui$UploadRemoveEvent) => void;
    select?: (e: ui$UploadSelectEvent) => void;
    success?: (e: ui$UploadSuccessEvent) => void;
    upload?: (e: ui$UploadUploadEvent) => void;
  }

  declare interface ui$UploadEvent {
    sender: ui$Upload;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$UploadCancelEvent = {
    files?: any[]
  } & ui$UploadEvent;

  declare type ui$UploadClearEvent = {
    e?: any
  } & ui$UploadEvent;

  declare type ui$UploadErrorEvent = {
    files?: any[],
    operation?: string,
    XMLHttpRequest?: any
  } & ui$UploadEvent;

  declare type ui$UploadPauseEvent = {
    e?: any
  } & ui$UploadEvent;

  declare type ui$UploadProgressEvent = {
    files?: any[],
    percentComplete?: number
  } & ui$UploadEvent;

  declare type ui$UploadRemoveEvent = {
    files?: any[],
    headers?: any,
    kendo$data?: any
  } & ui$UploadEvent;

  declare type ui$UploadSelectEvent = {
    e?: any,
    files?: any[]
  } & ui$UploadEvent;

  declare type ui$UploadSuccessEvent = {
    files?: any[],
    operation?: string,
    response?: any,
    XMLHttpRequest?: any
  } & ui$UploadEvent;

  declare type ui$UploadUploadEvent = {
    files?: any[],
    kendo$data?: any,
    formData?: any,
    XMLHttpRequest?: any
  } & ui$UploadEvent;

  declare class ui$Validator mixins undefined.ui$Widget {
    static fn: ui$Validator;
    options: ui$ValidatorOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Validator;
    constructor(element: drawing$Element, options?: ui$ValidatorOptions): this;
    errors(): any;
    hideMessages(): void;
    validate(): boolean;
    validateInput(input: drawing$Element): boolean;
    validateInput(input: JQuery): boolean;
  }

  declare interface ui$ValidatorOptions {
    name?: string;
    errorTemplate?: string;
    messages?: any;
    rules?: any;
    validateOnBlur?: boolean;
    validate?: (e: ui$ValidatorValidateEvent) => void;
    validateInput?: (e: ui$ValidatorValidateInputEvent) => void;
  }

  declare interface ui$ValidatorEvent {
    sender: ui$Validator;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ValidatorValidateEvent = {
    valid?: boolean
  } & ui$ValidatorEvent;

  declare type ui$ValidatorValidateInputEvent = {
    input?: JQuery,
    valid?: boolean
  } & ui$ValidatorEvent;

  declare class ui$Window mixins undefined.ui$Widget {
    static fn: ui$Window;
    options: ui$WindowOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Window;
    constructor(element: drawing$Element, options?: ui$WindowOptions): this;
    center(): kendo$kendo$ui.ui$Window;
    close(): kendo$kendo$ui.ui$Window;
    content(): string;
    content(content?: string): kendo$kendo$ui.ui$Window;
    content(content?: JQuery): kendo$kendo$ui.ui$Window;
    destroy(): void;
    isMaximized(): boolean;
    isMinimized(): boolean;
    maximize(): kendo$kendo$ui.ui$Window;
    minimize(): kendo$kendo$ui.ui$Window;
    open(): kendo$kendo$ui.ui$Window;
    pin(): void;
    refresh(options: any): kendo$kendo$ui.ui$Window;
    restore(): kendo$kendo$ui.ui$Window;
    setOptions(options: any): void;
    title(): string;
    title(text?: string): kendo$kendo$ui.ui$Window;
    toFront(): kendo$kendo$ui.ui$Window;
    toggleMaximization(): kendo$kendo$ui.ui$Window;
    unpin(): void;
  }

  declare interface ui$WindowAnimationClose {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$WindowAnimationOpen {
    kendo$effects?: string;
    duration?: number;
  }

  declare interface ui$WindowAnimation {
    close?: ui$WindowAnimationClose;
    open?: ui$WindowAnimationOpen;
  }

  declare interface ui$WindowContent {
    kendo$template?: string;
  }

  declare interface ui$WindowPosition {
    top?: number | string;
    left?: number | string;
  }

  declare interface ui$WindowModal {
    preventScroll?: boolean;
  }

  declare interface ui$WindowRefreshOptions {
    url?: string;
    cache?: boolean;
    kendo$data?: any;
    type?: string;
    kendo$template?: string;
    iframe?: boolean;
  }

  declare interface ui$WindowDraggable {
    containment?: any | string;
    dragHandle?: any | string;
    axis?: string;
  }

  declare interface ui$WindowOptions {
    name?: string;
    actions?: any;
    animation?: boolean | ui$WindowAnimation;
    appendTo?: any | string;
    autoFocus?: boolean;
    content?: string | ui$WindowContent;
    draggable?: boolean | ui$WindowDraggable;
    iframe?: boolean;
    height?: number | string;
    maxHeight?: number;
    maxWidth?: number;
    minHeight?: number;
    minWidth?: number;
    modal?: boolean | ui$WindowModal;
    pinned?: boolean;
    position?: ui$WindowPosition;
    resizable?: boolean;
    scrollable?: boolean;
    title?: string | boolean;
    visible?: boolean;
    width?: number | string;
    size?: string;
    activate?: (e: ui$WindowEvent) => void;
    close?: (e: ui$WindowCloseEvent) => void;
    deactivate?: (e: ui$WindowEvent) => void;
    dragend?: (e: ui$WindowEvent) => void;
    dragstart?: (e: ui$WindowEvent) => void;
    error?: (e: ui$WindowErrorEvent) => void;
    maximize?: (e: ui$WindowEvent) => void;
    minimize?: (e: ui$WindowEvent) => void;
    open?: (e: ui$WindowEvent) => void;
    refresh?: (e: ui$WindowEvent) => void;
    kendo$resize?: (e: ui$WindowEvent) => void;
  }

  declare interface ui$WindowEvent {
    sender: ui$Window;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$WindowCloseEvent = {
    userTriggered?: boolean
  } & ui$WindowEvent;

  declare type ui$WindowErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & ui$WindowEvent;

  declare class ui$ActionSheet mixins undefined.ui$Widget {
    static fn: ui$ActionSheet;
    options: ui$ActionSheetOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ActionSheet;
    constructor(
      element: drawing$Element,
      options?: ui$ActionSheetOptions
    ): this;
    close(): void;
    destroy(): void;
    open(target: JQuery, context: any): void;
  }

  declare interface ui$ActionSheetPopup {
    direction?: number | string;
    height?: number | string;
    width?: number | string;
  }

  declare interface ui$ActionSheetOptions {
    name?: string;
    cancel?: string;
    popup?: ui$ActionSheetPopup;
    type?: string;
    close?: (e: ui$ActionSheetEvent) => void;
    open?: (e: ui$ActionSheetOpenEvent) => void;
  }

  declare interface ui$ActionSheetEvent {
    sender: ui$ActionSheet;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ActionSheetOpenEvent = {
    target?: JQuery,
    context?: JQuery
  } & ui$ActionSheetEvent;

  declare class ui$BackButton mixins undefined.ui$Widget {
    static fn: ui$BackButton;
    options: ui$BackButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$BackButton;
    constructor(element: drawing$Element, options?: ui$BackButtonOptions): this;
    destroy(): void;
  }

  declare interface ui$BackButtonOptions {
    name?: string;
    click?: (e: ui$BackButtonClickEvent) => void;
  }

  declare interface ui$BackButtonEvent {
    sender: ui$BackButton;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$BackButtonClickEvent = {
    target?: JQuery,
    button?: JQuery
  } & ui$BackButtonEvent;

  declare class ui$Button mixins undefined.ui$Widget {
    static fn: ui$Button;
    options: ui$ButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Button;
    constructor(element: drawing$Element, options?: ui$ButtonOptions): this;
    badge(value: string): string;
    badge(value: boolean): string;
    destroy(): void;
    enable(effects$enable: boolean): void;
  }

  declare interface ui$ButtonOptions {
    name?: string;
    effects$enable?: boolean;
    icon?: string;
    iconClass?: string;
    imageUrl?: string;
    spriteCssClass?: string;
    click?: (e: ui$ButtonClickEvent) => void;
    name?: string;
    badge?: string;
    clickOn?: string;
    effects$enable?: boolean;
    icon?: string;
    click?: (e: ui$ButtonClickEvent) => void;
  }

  declare interface ui$ButtonEvent {
    sender: ui$Button;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$Button;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ButtonClickEvent = {
    event?: any,
    target?: JQuery,
    button?: JQuery
  } & ui$ButtonEvent;

  declare class ui$ButtonGroup mixins undefined.ui$Widget {
    static fn: ui$ButtonGroup;
    options: ui$ButtonGroupOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ButtonGroup;
    constructor(
      element: drawing$Element,
      options?: ui$ButtonGroupOptions
    ): this;
    badge(button: string, value: string): string;
    badge(button: string, value: boolean): string;
    badge(button: number, value: string): string;
    badge(button: number, value: boolean): string;
    current(): JQuery;
    destroy(): void;
    enable(effects$enable: boolean): void;
    select(li: JQuery): void;
    select(li: number): void;
  }

  declare interface ui$ButtonGroupOptions {
    name?: string;
    effects$enable?: boolean;
    index?: number;
    selection?: string;
    items?: ui$ButtonGroupItem[];
    select?: (e: ui$ButtonGroupSelectEvent) => void;
    name?: string;
    effects$enable?: boolean;
    index?: number;
    selectOn?: string;
    select?: (e: ui$ButtonGroupSelectEvent) => void;
  }

  declare interface ui$ButtonGroupEvent {
    sender: ui$ButtonGroup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$ButtonGroup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ButtonGroupSelectEvent = {
    indices?: any,
    index?: number
  } & ui$ButtonGroupEvent;

  declare class ui$Collapsible mixins undefined.ui$Widget {
    static fn: ui$Collapsible;
    options: ui$CollapsibleOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Collapsible;
    constructor(
      element: drawing$Element,
      options?: ui$CollapsibleOptions
    ): this;
    collapse(instant: boolean): void;
    destroy(): void;
    expand(instant?: boolean): void;
    resize(): void;
    toggle(instant?: boolean): void;
  }

  declare interface ui$CollapsibleOptions {
    name?: string;
    animation?: boolean;
    collapsed?: boolean;
    expandIcon?: string;
    iconPosition?: string;
    inset?: boolean;
    collapse?: (e: ui$CollapsibleEvent) => void;
    expand?: (e: ui$CollapsibleEvent) => void;
  }

  declare interface ui$CollapsibleEvent {
    sender: ui$Collapsible;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$DetailButton mixins undefined.ui$Widget {
    static fn: ui$DetailButton;
    options: ui$DetailButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$DetailButton;
    constructor(
      element: drawing$Element,
      options?: ui$DetailButtonOptions
    ): this;
    destroy(): void;
  }

  declare interface ui$DetailButtonOptions {
    name?: string;
    click?: (e: ui$DetailButtonClickEvent) => void;
  }

  declare interface ui$DetailButtonEvent {
    sender: ui$DetailButton;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$DetailButtonClickEvent = {
    target?: JQuery,
    button?: JQuery
  } & ui$DetailButtonEvent;

  declare class ui$Drawer mixins undefined.ui$Widget {
    static fn: ui$Drawer;
    options: ui$DrawerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Drawer;
    constructor(element: drawing$Element, options?: ui$DrawerOptions): this;
    destroy(): void;
    hide(): void;
    show(): void;
  }

  declare interface ui$DrawerOptions {
    name?: string;
    container?: JQuery;
    position?: string;
    swipeToOpen?: boolean;
    swipeToOpenViews?: any;
    title?: string;
    views?: any;
    afterHide?: (e: ui$DrawerAfterHideEvent) => void;
    beforeShow?: (e: ui$DrawerEvent) => void;
    hide?: (e: ui$DrawerHideEvent) => void;
    kendo$init?: (e: ui$DrawerInitEvent) => void;
    show?: (e: ui$DrawerShowEvent) => void;
  }

  declare interface ui$DrawerEvent {
    sender: ui$Drawer;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$DrawerAfterHideEvent = {} & ui$DrawerEvent;

  declare type ui$DrawerHideEvent = {} & ui$DrawerEvent;

  declare type ui$DrawerInitEvent = {} & ui$DrawerEvent;

  declare type ui$DrawerShowEvent = {} & ui$DrawerEvent;

  declare class ui$Layout mixins undefined.ui$Widget {
    static fn: ui$Layout;
    options: drawing$LayoutOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Layout;
    constructor(
      element: drawing$Element,
      options?: drawing$LayoutOptions
    ): this;
  }

  declare interface ui$LayoutOptions {
    name?: string;
    alignContent?: string;
    alignItems?: string;
    justifyContent?: string;
    lineSpacing?: number;
    spacing?: number;
    orientation?: string;
    drawing$wrap?: boolean;
    name?: string;
    alignContent?: string;
    alignItems?: string;
    justifyContent?: string;
    lineSpacing?: number;
    spacing?: number;
    orientation?: string;
    drawing$wrap?: boolean;
    name?: string;
    id?: string;
    platform?: string;
    hide?: (e: ui$LayoutHideEvent) => void;
    kendo$init?: (e: ui$LayoutInitEvent) => void;
    show?: (e: ui$LayoutShowEvent) => void;
    name?: string;
    alignContent?: string;
    alignItems?: string;
    justifyContent?: string;
    lineSpacing?: number;
    spacing?: number;
    orientation?: string;
    drawing$wrap?: boolean;
  }

  declare interface ui$LayoutEvent {
    sender: ui$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$LayoutHideEvent = {
    layout?: JQuery,
    view?: JQuery
  } & ui$LayoutEvent;

  declare type ui$LayoutInitEvent = {
    layout?: JQuery
  } & ui$LayoutEvent;

  declare type ui$LayoutShowEvent = {
    layout?: JQuery,
    view?: JQuery
  } & ui$LayoutEvent;

  declare class ui$ListView mixins undefined.ui$Widget {
    static fn: ui$ListView;
    options: ui$ListViewOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ListView;
    constructor(element: drawing$Element, options?: ui$ListViewOptions): this;
    append(dataItems: any): void;
    prepend(dataItems: any): void;
    replace(dataItems: any): void;
    remove(dataItems: any): void;
    setDataItem(item: JQuery, dataItem: kendo$kendo$data.data$Model): void;
    destroy(): void;
    items(): JQuery;
    refresh(): void;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
  }

  declare interface ui$ListViewFilterable {
    placeholder?: string;
    autoFilter?: boolean;
    field?: string;
    ignoreCase?: boolean;
    operator?: string;
  }

  declare interface ui$ListViewMessages {
    loadMoreText?: string;
    pullTemplate?: string;
    refreshTemplate?: string;
    releaseTemplate?: string;
  }

  declare interface ui$ListViewOptions {
    name?: string;
    autoBind?: boolean;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    editTemplate?: Function;
    navigatable?: boolean;
    selectable?: boolean | string;
    kendo$template?: Function;
    altTemplate?: Function;
    cancel?: (e: ui$ListViewCancelEvent) => void;
    change?: (e: ui$ListViewEvent) => void;
    dataBound?: (e: ui$ListViewEvent) => void;
    dataBinding?: (e: ui$ListViewEvent) => void;
    edit?: (e: ui$ListViewEditEvent) => void;
    timezone$remove?: (e: ui$ListViewRemoveEvent) => void;
    save?: (e: ui$ListViewSaveEvent) => void;
    name?: string;
    appendOnRefresh?: boolean;
    autoBind?: boolean;
    dataSource?: kendo$kendo$data.data$DataSource | any;
    endlessScroll?: boolean;
    fixedHeaders?: boolean;
    headerTemplate?: string | Function;
    loadMore?: boolean;
    messages?: ui$ListViewMessages;
    pullToRefresh?: boolean;
    pullParameters?: Function;
    style?: string;
    kendo$template?: string | Function;
    type?: string;
    filterable?: boolean | ui$ListViewFilterable;
    virtualViewSize?: number;
    click?: (e: ui$ListViewClickEvent) => void;
    dataBound?: (e: ui$ListViewEvent) => void;
    dataBinding?: (e: ui$ListViewEvent) => void;
    itemChange?: (e: ui$ListViewEvent) => void;
  }

  declare interface ui$ListViewEvent {
    sender: ui$ListView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$ListView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ListViewClickEvent = {
    item?: JQuery,
    target?: JQuery,
    dataItem?: any,
    button?: kendo$kendo$mobile.kendo$ui.ui$Button
  } & ui$ListViewEvent;

  declare class ui$Loader mixins undefined.ui$Widget {
    static fn: ui$Loader;
    options: ui$LoaderOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Loader;
    constructor(element: drawing$Element, options?: ui$LoaderOptions): this;
    hide(): void;
    show(): void;
  }

  declare interface ui$LoaderOptions {
    name?: string;
  }

  declare interface ui$LoaderEvent {
    sender: ui$Loader;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$ModalView mixins undefined.ui$Widget {
    static fn: ui$ModalView;
    options: ui$ModalViewOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ModalView;
    constructor(element: drawing$Element, options?: ui$ModalViewOptions): this;
    close(): void;
    destroy(): void;
    open(target?: JQuery): void;
  }

  declare interface ui$ModalViewOptions {
    name?: string;
    height?: number;
    modal?: boolean;
    width?: number;
    beforeOpen?: (e: ui$ModalViewBeforeOpenEvent) => void;
    close?: (e: ui$ModalViewCloseEvent) => void;
    kendo$init?: (e: ui$ModalViewInitEvent) => void;
    open?: (e: ui$ModalViewOpenEvent) => void;
  }

  declare interface ui$ModalViewEvent {
    sender: ui$ModalView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ModalViewBeforeOpenEvent = {
    target?: JQuery
  } & ui$ModalViewEvent;

  declare type ui$ModalViewCloseEvent = {} & ui$ModalViewEvent;

  declare type ui$ModalViewInitEvent = {} & ui$ModalViewEvent;

  declare type ui$ModalViewOpenEvent = {
    target?: JQuery
  } & ui$ModalViewEvent;

  declare class ui$NavBar mixins undefined.ui$Widget {
    static fn: ui$NavBar;
    options: ui$NavBarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$NavBar;
    constructor(element: drawing$Element, options?: ui$NavBarOptions): this;
    destroy(): void;
    title(value: string): void;
  }

  declare interface ui$NavBarOptions {
    name?: string;
  }

  declare interface ui$NavBarEvent {
    sender: ui$NavBar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ui$Pane mixins undefined.ui$Widget {
    static fn: ui$Pane;
    options: ui$PaneOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Pane;
    constructor(element: drawing$Element, options?: ui$PaneOptions): this;
    destroy(): void;
    hideLoading(): void;
    navigate(url: string, transition: string): void;
    replace(url: string, transition: string): void;
    showLoading(): void;
    view(): kendo$kendo$mobile.kendo$ui.kendo$View;
  }

  declare interface ui$PaneOptions {
    name?: string;
    collapsible?: boolean;
    initial?: string;
    layout?: string;
    loading?: string;
    portraitWidth?: number;
    transition?: string;
    navigate?: (e: ui$PaneNavigateEvent) => void;
    viewShow?: (e: ui$PaneViewShowEvent) => void;
  }

  declare interface ui$PaneEvent {
    sender: ui$Pane;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$PaneNavigateEvent = {
    url?: JQuery
  } & ui$PaneEvent;

  declare type ui$PaneViewShowEvent = {
    view?: kendo$kendo$mobile.kendo$ui.kendo$View
  } & ui$PaneEvent;

  declare class ui$PopOver mixins undefined.ui$Widget {
    static fn: ui$PopOver;
    options: ui$PopOverOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$PopOver;
    constructor(element: drawing$Element, options?: ui$PopOverOptions): this;
    close(): void;
    destroy(): void;
    open(target: JQuery): void;
  }

  declare interface ui$PopOverPane {
    initial?: string;
    layout?: string;
    loading?: string;
    transition?: string;
  }

  declare interface ui$PopOverPopup {
    height?: number | string;
    width?: number | string;
  }

  declare interface ui$PopOverOptions {
    name?: string;
    pane?: ui$PopOverPane;
    popup?: ui$PopOverPopup;
    close?: (e: ui$PopOverCloseEvent) => void;
    open?: (e: ui$PopOverOpenEvent) => void;
  }

  declare interface ui$PopOverEvent {
    sender: ui$PopOver;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$PopOverCloseEvent = {} & ui$PopOverEvent;

  declare type ui$PopOverOpenEvent = {
    target?: JQuery
  } & ui$PopOverEvent;

  declare class ui$ScrollView mixins undefined.ui$Widget {
    static fn: ui$ScrollView;
    options: ui$ScrollViewOptions;
    dataSource: kendo$kendo$data.data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$ScrollView;
    constructor(element: drawing$Element, options?: ui$ScrollViewOptions): this;
    content(content: string): void;
    content(content: JQuery): void;
    destroy(): void;
    next(): void;
    prev(): void;
    refresh(): void;
    scrollTo(page: number, instant: boolean): void;
    setDataSource(dataSource: kendo$kendo$data.data$DataSource): void;
    value(dataItem: any): any;
  }

  declare interface ui$ScrollViewOptions {
    name?: string;
    autoBind?: boolean;
    bounceVelocityThreshold?: number;
    contentHeight?: number | string;
    dataSource?: kendo$kendo$data.data$DataSource | any;
    duration?: number;
    emptyTemplate?: string;
    enablePager?: boolean;
    page?: number;
    kendo$template?: string;
    velocityThreshold?: number;
    change?: (e: ui$ScrollViewChangeEvent) => void;
    refresh?: (e: ui$ScrollViewRefreshEvent) => void;
    name?: string;
    autoBind?: boolean;
    bounceVelocityThreshold?: number;
    contentHeight?: number | string;
    dataSource?: kendo$kendo$data.data$DataSource | any;
    duration?: number;
    emptyTemplate?: string;
    enablePager?: boolean;
    itemsPerPage?: number;
    page?: number;
    pageSize?: number;
    kendo$template?: string;
    velocityThreshold?: number;
    changing?: (e: ui$ScrollViewChangingEvent) => void;
    change?: (e: ui$ScrollViewChangeEvent) => void;
    refresh?: (e: ui$ScrollViewRefreshEvent) => void;
  }

  declare interface ui$ScrollViewEvent {
    sender: ui$ScrollView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$ScrollView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ScrollViewChangingEvent = {
    currentPage?: number,
    nextPage?: number
  } & ui$ScrollViewEvent;

  declare type ui$ScrollViewChangeEvent = {
    currentPage?: number,
    nextPage?: number,
    element?: JQuery,
    kendo$data?: any,
    page?: number,
    element?: JQuery,
    kendo$data?: any
  } & ui$ScrollViewEvent;

  declare type ui$ScrollViewRefreshEvent = {
    pageCount?: number,
    page?: number,
    pageCount?: number,
    page?: number
  } & ui$ScrollViewEvent;

  declare class ui$Scroller mixins undefined.ui$Widget {
    static fn: ui$Scroller;
    options: ui$ScrollerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Scroller;
    constructor(element: drawing$Element, options?: ui$ScrollerOptions): this;
    animatedScrollTo(x: number, y: number): void;
    contentResized(): void;
    destroy(): void;
    disable(): void;
    enable(): void;
    height(): number;
    pullHandled(): void;
    reset(): void;
    scrollHeight(): void;
    scrollTo(x: number, y: number): void;
    scrollWidth(): void;
    zoomOut(): void;
  }

  declare interface ui$ScrollerMessages {
    pullTemplate?: string;
    refreshTemplate?: string;
    releaseTemplate?: string;
  }

  declare interface ui$ScrollerOptions {
    name?: string;
    elastic?: boolean;
    messages?: ui$ScrollerMessages;
    pullOffset?: number;
    pullToRefresh?: boolean;
    useNative?: boolean;
    visibleScrollHints?: boolean;
    zoom?: boolean;
    pull?: (e: ui$ScrollerEvent) => void;
    kendo$resize?: (e: ui$ScrollerEvent) => void;
    scroll?: (e: ui$ScrollerScrollEvent) => void;
  }

  declare interface ui$ScrollerEvent {
    sender: ui$Scroller;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ScrollerScrollEvent = {
    scrollTop?: number,
    scrollLeft?: number
  } & ui$ScrollerEvent;

  declare class ui$SplitView mixins undefined.ui$Widget {
    static fn: ui$SplitView;
    options: ui$SplitViewOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$SplitView;
    constructor(element: drawing$Element, options?: ui$SplitViewOptions): this;
    destroy(): void;
    expandPanes(): void;
    collapsePanes(): void;
  }

  declare interface ui$SplitViewOptions {
    name?: string;
    style?: string;
    kendo$init?: (e: ui$SplitViewInitEvent) => void;
    show?: (e: ui$SplitViewShowEvent) => void;
  }

  declare interface ui$SplitViewEvent {
    sender: ui$SplitView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$SplitViewInitEvent = {
    view?: JQuery
  } & ui$SplitViewEvent;

  declare type ui$SplitViewShowEvent = {
    view?: JQuery
  } & ui$SplitViewEvent;

  declare class ui$Switch mixins undefined.ui$Widget {
    static fn: ui$Switch;
    options: ui$SwitchOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$Switch;
    constructor(element: drawing$Element, options?: ui$SwitchOptions): this;
    check(): boolean;
    check(check: boolean): void;
    destroy(): void;
    enable(effects$enable: boolean): void;
    refresh(): void;
    toggle(): void;
  }

  declare interface ui$SwitchOptions {
    name?: string;
    checked?: boolean;
    enabled?: boolean;
    readonly?: boolean;
    width?: number | string;
    change?: (e: ui$SwitchChangeEvent) => void;
    name?: string;
    checked?: boolean;
    effects$enable?: boolean;
    offLabel?: string;
    onLabel?: string;
    change?: (e: ui$SwitchChangeEvent) => void;
  }

  declare interface ui$SwitchEvent {
    sender: ui$Switch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$Switch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$SwitchChangeEvent = {
    checked?: any,
    checked?: any
  } & ui$SwitchEvent;

  declare class ui$TabStrip mixins undefined.ui$Widget {
    static fn: ui$TabStrip;
    options: ui$TabStripOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$TabStrip;
    constructor(element: drawing$Element, options?: ui$TabStripOptions): this;
    badge(tab: string, value: string): string;
    badge(tab: string, value: boolean): string;
    badge(tab: number, value: string): string;
    badge(tab: number, value: boolean): string;
    currentItem(): JQuery;
    destroy(): void;
    switchTo(url: string): void;
    switchTo(url: number): void;
    switchByFullUrl(url: string): void;
    clear(): void;
  }

  declare interface ui$TabStripOptions {
    name?: string;
    animation?: boolean | ui$TabStripAnimation;
    collapsible?: boolean;
    contentUrls?: any;
    dataContentField?: string;
    dataContentUrlField?: string;
    dataImageUrlField?: string;
    dataSource?: any | any | kendo$kendo$data.data$DataSource;
    dataSpriteCssClass?: string;
    dataTextField?: string;
    dataUrlField?: string;
    navigatable?: boolean;
    scrollable?: boolean | ui$TabStripScrollable;
    tabPosition?: string;
    value?: string;
    activate?: (e: ui$TabStripActivateEvent) => void;
    contentLoad?: (e: ui$TabStripContentLoadEvent) => void;
    error?: (e: ui$TabStripErrorEvent) => void;
    select?: (e: ui$TabStripSelectEvent) => void;
    show?: (e: ui$TabStripShowEvent) => void;
    name?: string;
    selectedIndex?: number;
    select?: (e: ui$TabStripSelectEvent) => void;
  }

  declare interface ui$TabStripEvent {
    sender: ui$TabStrip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$TabStrip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$TabStripSelectEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element,
    item?: JQuery
  } & ui$TabStripEvent;

  declare class ui$View mixins undefined.ui$Widget {
    static fn: ui$View;
    options: kendo$ViewOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): ui$View;
    constructor(element: drawing$Element, options?: kendo$ViewOptions): this;
    contentElement(): void;
    destroy(): void;
    enable(effects$enable: boolean): void;
  }

  declare interface ui$ViewOptions {
    tagName?: string;
    drawing$wrap?: boolean;
    model?: Object;
    evalTemplate?: boolean;
    kendo$init?: (e: kendo$ViewEvent) => void;
    show?: (e: kendo$ViewEvent) => void;
    hide?: (e: kendo$ViewEvent) => void;
    name?: string;
    model?: string;
    reload?: boolean;
    scroller?: any;
    stretch?: boolean;
    title?: string;
    useNativeScrolling?: boolean;
    zoom?: boolean;
    afterShow?: (e: ui$ViewAfterShowEvent) => void;
    beforeHide?: (e: ui$ViewBeforeHideEvent) => void;
    beforeShow?: (e: ui$ViewBeforeShowEvent) => void;
    hide?: (e: ui$ViewHideEvent) => void;
    kendo$init?: (e: ui$ViewInitEvent) => void;
    show?: (e: ui$ViewShowEvent) => void;
    transitionStart?: (e: ui$ViewTransitionStartEvent) => void;
    transitionEnd?: (e: ui$ViewTransitionEndEvent) => void;
  }

  declare interface ui$ViewEvent {
    sender: ui$View;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: ui$View;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type ui$ViewAfterShowEvent = {
    view?: kendo$kendo$mobile.kendo$ui.ui$View
  } & ui$ViewEvent;

  declare type ui$ViewBeforeHideEvent = {
    view?: kendo$kendo$mobile.kendo$ui.ui$View
  } & ui$ViewEvent;

  declare type ui$ViewBeforeShowEvent = {
    view?: kendo$kendo$mobile.kendo$ui.ui$View
  } & ui$ViewEvent;

  declare type ui$ViewHideEvent = {
    view?: kendo$kendo$mobile.kendo$ui.ui$View
  } & ui$ViewEvent;

  declare type ui$ViewInitEvent = {
    view?: kendo$kendo$mobile.kendo$ui.ui$View
  } & ui$ViewEvent;

  declare type ui$ViewShowEvent = {
    view?: kendo$kendo$mobile.kendo$ui.ui$View
  } & ui$ViewEvent;

  declare type ui$ViewTransitionStartEvent = {
    type?: string
  } & ui$ViewEvent;

  declare type ui$ViewTransitionEndEvent = {
    type?: string
  } & ui$ViewEvent;

  declare class geometry$Arc mixins kendo$Observable {
    options: geometry$ArcOptions;
    anticlockwise: boolean;
    center: kendo$kendo$geometry.geometry$Point;
    endAngle: number;
    radiusX: number;
    radiusY: number;
    startAngle: number;
    constructor(
      center: any | kendo$kendo$geometry.geometry$Point,
      options?: geometry$ArcOptions
    ): this;
    bbox(
      matrix: kendo$kendo$geometry.geometry$Matrix
    ): kendo$kendo$geometry.geometry$Rect;
    getAnticlockwise(): boolean;
    getCenter(): kendo$kendo$geometry.geometry$Point;
    getEndAngle(): number;
    getRadiusX(): number;
    getRadiusY(): number;
    getStartAngle(): number;
    pointAt(angle: number): kendo$kendo$geometry.geometry$Point;
    setAnticlockwise(value: boolean): kendo$kendo$geometry.geometry$Arc;
    setCenter(
      value: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Arc;
    setEndAngle(value: number): kendo$kendo$geometry.geometry$Arc;
    setRadiusX(value: number): kendo$kendo$geometry.geometry$Arc;
    setRadiusY(value: number): kendo$kendo$geometry.geometry$Arc;
    setStartAngle(value: number): kendo$kendo$geometry.geometry$Arc;
  }

  declare interface geometry$ArcOptions {
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
  }

  declare interface geometry$ArcEvent {
    sender: geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Circle mixins kendo$Observable {
    options: geometry$CircleOptions;
    center: kendo$kendo$geometry.geometry$Point;
    radius: number;
    constructor(
      center: any | kendo$kendo$geometry.geometry$Point,
      radius: number
    ): this;
    bbox(
      matrix: kendo$kendo$geometry.geometry$Matrix
    ): kendo$kendo$geometry.geometry$Rect;
    clone(): kendo$kendo$geometry.geometry$Circle;
    equals(other: kendo$kendo$geometry.geometry$Circle): boolean;
    getCenter(): kendo$kendo$geometry.geometry$Point;
    getRadius(): number;
    pointAt(angle: number): kendo$kendo$geometry.geometry$Point;
    setCenter(
      value: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Point;
    setCenter(value: any): kendo$kendo$geometry.geometry$Point;
    setRadius(value: number): kendo$kendo$geometry.geometry$Circle;
  }

  declare interface geometry$CircleOptions {
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
    name?: string;
    fill?: string | diagram$CircleFill;
    stroke?: diagram$CircleStroke;
    center?: any;
    radius?: number;
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
  }

  declare interface geometry$CircleEvent {
    sender: geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Matrix mixins kendo$Observable {
    options: geometry$MatrixOptions;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    static rotate(
      angle: number,
      x: number,
      y: number
    ): kendo$kendo$geometry.geometry$Matrix;
    static scale(
      scaleX: number,
      scaleY: number
    ): kendo$kendo$geometry.geometry$Matrix;
    static translate(
      x: number,
      y: number
    ): kendo$kendo$geometry.geometry$Matrix;
    static unit(): kendo$kendo$geometry.geometry$Matrix;
    clone(): kendo$kendo$geometry.geometry$Matrix;
    equals(other: kendo$kendo$geometry.geometry$Matrix): boolean;
    round(digits: number): kendo$kendo$geometry.geometry$Matrix;
    multiplyCopy(
      matrix: kendo$kendo$geometry.geometry$Matrix
    ): kendo$kendo$geometry.geometry$Matrix;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
  }

  declare interface geometry$MatrixOptions {
    name?: string;
    name?: string;
  }

  declare interface geometry$MatrixEvent {
    sender: geometry$Matrix;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Matrix;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Point mixins kendo$Observable {
    options: geometry$PointOptions;
    x: number;
    y: number;
    constructor(x: number, y: number): this;
    static create(x: number, y: number): kendo$kendo$geometry.geometry$Point;
    static create(x: any, y: number): kendo$kendo$geometry.geometry$Point;
    static create(
      x: kendo$kendo$geometry.geometry$Point,
      y: number
    ): kendo$kendo$geometry.geometry$Point;
    static min(): kendo$kendo$geometry.geometry$Point;
    static max(): kendo$kendo$geometry.geometry$Point;
    static minPoint(): kendo$kendo$geometry.geometry$Point;
    static maxPoint(): kendo$kendo$geometry.geometry$Point;
    clone(): kendo$kendo$geometry.geometry$Point;
    distanceTo(point: kendo$kendo$geometry.geometry$Point): number;
    equals(other: kendo$kendo$geometry.geometry$Point): boolean;
    getX(): number;
    getY(): number;
    move(x: number, y: number): kendo$kendo$geometry.geometry$Point;
    rotate(
      angle: number,
      center: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Point;
    rotate(angle: number, center: any): kendo$kendo$geometry.geometry$Point;
    round(digits: number): kendo$kendo$geometry.geometry$Point;
    scale(scaleX: number, scaleY: number): kendo$kendo$geometry.geometry$Point;
    scaleCopy(
      scaleX: number,
      scaleY: number
    ): kendo$kendo$geometry.geometry$Point;
    setX(value: number): kendo$kendo$geometry.geometry$Point;
    setY(value: number): kendo$kendo$geometry.geometry$Point;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
    transform(
      tansformation: kendo$kendo$geometry.geometry$Transformation
    ): kendo$kendo$geometry.geometry$Point;
    transformCopy(
      tansformation: kendo$kendo$geometry.geometry$Transformation
    ): kendo$kendo$geometry.geometry$Point;
    translate(dx: number, dy: number): kendo$kendo$geometry.geometry$Point;
    translateWith(
      vector: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Point;
    translateWith(vector: any): kendo$kendo$geometry.geometry$Point;
  }

  declare interface geometry$PointOptions {
    name?: string;
    name?: string;
    name?: string;
  }

  declare interface geometry$PointEvent {
    sender: geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Rect mixins kendo$Observable {
    options: geometry$RectOptions;
    origin: kendo$kendo$geometry.geometry$Point;
    size: kendo$kendo$geometry.geometry$Size;
    constructor(
      origin: kendo$kendo$geometry.geometry$Point | any,
      size: kendo$kendo$geometry.geometry$Size | any
    ): this;
    static fromPoints(
      pointA: kendo$kendo$geometry.geometry$Point,
      pointB: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Rect;
    static union(
      rectA: kendo$kendo$geometry.geometry$Rect,
      rectB: kendo$kendo$geometry.geometry$Rect
    ): kendo$kendo$geometry.geometry$Rect;
    bbox(
      matrix: kendo$kendo$geometry.geometry$Matrix
    ): kendo$kendo$geometry.geometry$Rect;
    bottomLeft(): kendo$kendo$geometry.geometry$Point;
    bottomRight(): kendo$kendo$geometry.geometry$Point;
    center(): kendo$kendo$geometry.geometry$Point;
    clone(): kendo$kendo$geometry.geometry$Rect;
    equals(other: kendo$kendo$geometry.geometry$Rect): boolean;
    getOrigin(): kendo$kendo$geometry.geometry$Point;
    getSize(): kendo$kendo$geometry.geometry$Size;
    height(): number;
    setOrigin(
      value: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Rect;
    setOrigin(value: any): kendo$kendo$geometry.geometry$Rect;
    setSize(
      value: kendo$kendo$geometry.geometry$Size
    ): kendo$kendo$geometry.geometry$Rect;
    setSize(value: any): kendo$kendo$geometry.geometry$Rect;
    topLeft(): kendo$kendo$geometry.geometry$Point;
    topRight(): kendo$kendo$geometry.geometry$Point;
    width(): number;
  }

  declare interface geometry$RectOptions {
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
    name?: string;
    height?: number;
    width?: number;
    x?: number;
    y?: number;
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
  }

  declare interface geometry$RectEvent {
    sender: geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Size mixins kendo$Observable {
    options: geometry$SizeOptions;
    width: number;
    height: number;
    static create(
      width: number,
      height: number
    ): kendo$kendo$geometry.geometry$Size;
    static create(
      width: any,
      height: number
    ): kendo$kendo$geometry.geometry$Size;
    static create(
      width: kendo$kendo$geometry.geometry$Size,
      height: number
    ): kendo$kendo$geometry.geometry$Size;
    clone(): kendo$kendo$geometry.geometry$Size;
    equals(other: kendo$kendo$geometry.geometry$Size): boolean;
    getWidth(): number;
    getHeight(): number;
    setWidth(value: number): kendo$kendo$geometry.geometry$Size;
    setHeight(value: number): kendo$kendo$geometry.geometry$Size;
  }

  declare interface geometry$SizeOptions {
    name?: string;
    name?: string;
  }

  declare interface geometry$SizeEvent {
    sender: geometry$Size;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Size;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Transformation mixins kendo$Observable {
    options: geometry$TransformationOptions;
    clone(): kendo$kendo$geometry.geometry$Transformation;
    equals(other: kendo$kendo$geometry.geometry$Transformation): boolean;
    matrix(): kendo$kendo$geometry.geometry$Matrix;
    multiply(
      transformation: kendo$kendo$geometry.geometry$Transformation
    ): kendo$kendo$geometry.geometry$Transformation;
    rotate(
      angle: number,
      center: any
    ): kendo$kendo$geometry.geometry$Transformation;
    rotate(
      angle: number,
      center: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Transformation;
    scale(
      scaleX: number,
      scaleY: number
    ): kendo$kendo$geometry.geometry$Transformation;
    translate(
      x: number,
      y: number
    ): kendo$kendo$geometry.geometry$Transformation;
  }

  declare interface geometry$TransformationOptions {
    name?: string;
    name?: string;
  }

  declare interface geometry$TransformationEvent {
    sender: geometry$Transformation;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Transformation;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare var npm$namespace$drawing: {
    align: typeof drawing$align,
    drawDOM: typeof drawing$drawDOM,
    exportImage: typeof drawing$exportImage,
    exportPDF: typeof drawing$exportPDF,
    exportSVG: typeof drawing$exportSVG,
    fit: typeof drawing$fit,
    stack: typeof drawing$stack,
    vAlign: typeof drawing$vAlign,
    vStack: typeof drawing$vStack,
    vWrap: typeof drawing$vWrap,
    wrap: typeof drawing$wrap
  };
  declare function drawing$align(
    elements: any,
    rect: kendo$kendo$geometry.geometry$Rect,
    alignment: string
  ): void;

  declare function drawing$drawDOM(
    element: JQuery,
    options: any
  ): JQueryPromise<any>;

  declare function drawing$exportImage(
    group: kendo$kendo$drawing.drawing$Group,
    options: any
  ): JQueryPromise<any>;

  declare function drawing$exportPDF(
    group: kendo$kendo$drawing.drawing$Group,
    options: kendo$kendo$drawing.drawing$PDFOptions
  ): JQueryPromise<any>;

  declare function drawing$exportSVG(
    group: kendo$kendo$drawing.drawing$Group,
    options: any
  ): JQueryPromise<any>;

  declare function drawing$fit(
    element: kendo$kendo$drawing.drawing$Element,
    rect: kendo$kendo$geometry.geometry$Rect
  ): void;

  declare function drawing$stack(elements: any): void;

  declare function drawing$vAlign(
    elements: any,
    rect: kendo$kendo$geometry.geometry$Rect,
    alignment: string
  ): void;

  declare function drawing$vStack(elements: any): void;

  declare function drawing$vWrap(
    elements: any,
    rect: kendo$kendo$geometry.geometry$Rect
  ): any;

  declare function drawing$wrap(
    elements: any,
    rect: kendo$kendo$geometry.geometry$Rect
  ): any;

  declare class geometry$Arc mixins kendo$Observable {
    options: geometry$ArcOptions;
    anticlockwise: boolean;
    center: kendo$kendo$geometry.geometry$Point;
    endAngle: number;
    radiusX: number;
    radiusY: number;
    startAngle: number;
    constructor(
      center: any | kendo$kendo$geometry.geometry$Point,
      options?: geometry$ArcOptions
    ): this;
    bbox(
      matrix: kendo$kendo$geometry.geometry$Matrix
    ): kendo$kendo$geometry.geometry$Rect;
    getAnticlockwise(): boolean;
    getCenter(): kendo$kendo$geometry.geometry$Point;
    getEndAngle(): number;
    getRadiusX(): number;
    getRadiusY(): number;
    getStartAngle(): number;
    pointAt(angle: number): kendo$kendo$geometry.geometry$Point;
    setAnticlockwise(value: boolean): kendo$kendo$geometry.geometry$Arc;
    setCenter(
      value: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Arc;
    setEndAngle(value: number): kendo$kendo$geometry.geometry$Arc;
    setRadiusX(value: number): kendo$kendo$geometry.geometry$Arc;
    setRadiusY(value: number): kendo$kendo$geometry.geometry$Arc;
    setStartAngle(value: number): kendo$kendo$geometry.geometry$Arc;
  }

  declare interface geometry$ArcOptions {
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
  }

  declare interface geometry$ArcEvent {
    sender: geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Circle mixins kendo$Observable {
    options: geometry$CircleOptions;
    center: kendo$kendo$geometry.geometry$Point;
    radius: number;
    constructor(
      center: any | kendo$kendo$geometry.geometry$Point,
      radius: number
    ): this;
    bbox(
      matrix: kendo$kendo$geometry.geometry$Matrix
    ): kendo$kendo$geometry.geometry$Rect;
    clone(): kendo$kendo$geometry.geometry$Circle;
    equals(other: kendo$kendo$geometry.geometry$Circle): boolean;
    getCenter(): kendo$kendo$geometry.geometry$Point;
    getRadius(): number;
    pointAt(angle: number): kendo$kendo$geometry.geometry$Point;
    setCenter(
      value: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Point;
    setCenter(value: any): kendo$kendo$geometry.geometry$Point;
    setRadius(value: number): kendo$kendo$geometry.geometry$Circle;
  }

  declare interface geometry$CircleOptions {
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
    name?: string;
    fill?: string | diagram$CircleFill;
    stroke?: diagram$CircleStroke;
    center?: any;
    radius?: number;
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
  }

  declare interface geometry$CircleEvent {
    sender: geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Matrix mixins kendo$Observable {
    options: geometry$MatrixOptions;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    static rotate(
      angle: number,
      x: number,
      y: number
    ): kendo$kendo$geometry.geometry$Matrix;
    static scale(
      scaleX: number,
      scaleY: number
    ): kendo$kendo$geometry.geometry$Matrix;
    static translate(
      x: number,
      y: number
    ): kendo$kendo$geometry.geometry$Matrix;
    static unit(): kendo$kendo$geometry.geometry$Matrix;
    clone(): kendo$kendo$geometry.geometry$Matrix;
    equals(other: kendo$kendo$geometry.geometry$Matrix): boolean;
    round(digits: number): kendo$kendo$geometry.geometry$Matrix;
    multiplyCopy(
      matrix: kendo$kendo$geometry.geometry$Matrix
    ): kendo$kendo$geometry.geometry$Matrix;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
  }

  declare interface geometry$MatrixOptions {
    name?: string;
    name?: string;
  }

  declare interface geometry$MatrixEvent {
    sender: geometry$Matrix;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Matrix;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Point mixins kendo$Observable {
    options: geometry$PointOptions;
    x: number;
    y: number;
    constructor(x: number, y: number): this;
    static create(x: number, y: number): kendo$kendo$geometry.geometry$Point;
    static create(x: any, y: number): kendo$kendo$geometry.geometry$Point;
    static create(
      x: kendo$kendo$geometry.geometry$Point,
      y: number
    ): kendo$kendo$geometry.geometry$Point;
    static min(): kendo$kendo$geometry.geometry$Point;
    static max(): kendo$kendo$geometry.geometry$Point;
    static minPoint(): kendo$kendo$geometry.geometry$Point;
    static maxPoint(): kendo$kendo$geometry.geometry$Point;
    clone(): kendo$kendo$geometry.geometry$Point;
    distanceTo(point: kendo$kendo$geometry.geometry$Point): number;
    equals(other: kendo$kendo$geometry.geometry$Point): boolean;
    getX(): number;
    getY(): number;
    move(x: number, y: number): kendo$kendo$geometry.geometry$Point;
    rotate(
      angle: number,
      center: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Point;
    rotate(angle: number, center: any): kendo$kendo$geometry.geometry$Point;
    round(digits: number): kendo$kendo$geometry.geometry$Point;
    scale(scaleX: number, scaleY: number): kendo$kendo$geometry.geometry$Point;
    scaleCopy(
      scaleX: number,
      scaleY: number
    ): kendo$kendo$geometry.geometry$Point;
    setX(value: number): kendo$kendo$geometry.geometry$Point;
    setY(value: number): kendo$kendo$geometry.geometry$Point;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
    transform(
      tansformation: kendo$kendo$geometry.geometry$Transformation
    ): kendo$kendo$geometry.geometry$Point;
    transformCopy(
      tansformation: kendo$kendo$geometry.geometry$Transformation
    ): kendo$kendo$geometry.geometry$Point;
    translate(dx: number, dy: number): kendo$kendo$geometry.geometry$Point;
    translateWith(
      vector: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Point;
    translateWith(vector: any): kendo$kendo$geometry.geometry$Point;
  }

  declare interface geometry$PointOptions {
    name?: string;
    name?: string;
    name?: string;
  }

  declare interface geometry$PointEvent {
    sender: geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Rect mixins kendo$Observable {
    options: geometry$RectOptions;
    origin: kendo$kendo$geometry.geometry$Point;
    size: kendo$kendo$geometry.geometry$Size;
    constructor(
      origin: kendo$kendo$geometry.geometry$Point | any,
      size: kendo$kendo$geometry.geometry$Size | any
    ): this;
    static fromPoints(
      pointA: kendo$kendo$geometry.geometry$Point,
      pointB: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Rect;
    static union(
      rectA: kendo$kendo$geometry.geometry$Rect,
      rectB: kendo$kendo$geometry.geometry$Rect
    ): kendo$kendo$geometry.geometry$Rect;
    bbox(
      matrix: kendo$kendo$geometry.geometry$Matrix
    ): kendo$kendo$geometry.geometry$Rect;
    bottomLeft(): kendo$kendo$geometry.geometry$Point;
    bottomRight(): kendo$kendo$geometry.geometry$Point;
    center(): kendo$kendo$geometry.geometry$Point;
    clone(): kendo$kendo$geometry.geometry$Rect;
    equals(other: kendo$kendo$geometry.geometry$Rect): boolean;
    getOrigin(): kendo$kendo$geometry.geometry$Point;
    getSize(): kendo$kendo$geometry.geometry$Size;
    height(): number;
    setOrigin(
      value: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Rect;
    setOrigin(value: any): kendo$kendo$geometry.geometry$Rect;
    setSize(
      value: kendo$kendo$geometry.geometry$Size
    ): kendo$kendo$geometry.geometry$Rect;
    setSize(value: any): kendo$kendo$geometry.geometry$Rect;
    topLeft(): kendo$kendo$geometry.geometry$Point;
    topRight(): kendo$kendo$geometry.geometry$Point;
    width(): number;
  }

  declare interface geometry$RectOptions {
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
    name?: string;
    height?: number;
    width?: number;
    x?: number;
    y?: number;
    name?: string;
    clip?: kendo$kendo$drawing.drawing$Path;
    cursor?: string;
    fill?: kendo$kendo$drawing.drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$kendo$drawing.drawing$StrokeOptions;
    tooltip?: kendo$kendo$drawing.ui$TooltipOptions;
    transform?: kendo$kendo$geometry.geometry$Transformation;
    visible?: boolean;
    name?: string;
  }

  declare interface geometry$RectEvent {
    sender: geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Size mixins kendo$Observable {
    options: geometry$SizeOptions;
    width: number;
    height: number;
    static create(
      width: number,
      height: number
    ): kendo$kendo$geometry.geometry$Size;
    static create(
      width: any,
      height: number
    ): kendo$kendo$geometry.geometry$Size;
    static create(
      width: kendo$kendo$geometry.geometry$Size,
      height: number
    ): kendo$kendo$geometry.geometry$Size;
    clone(): kendo$kendo$geometry.geometry$Size;
    equals(other: kendo$kendo$geometry.geometry$Size): boolean;
    getWidth(): number;
    getHeight(): number;
    setWidth(value: number): kendo$kendo$geometry.geometry$Size;
    setHeight(value: number): kendo$kendo$geometry.geometry$Size;
  }

  declare interface geometry$SizeOptions {
    name?: string;
    name?: string;
  }

  declare interface geometry$SizeEvent {
    sender: geometry$Size;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Size;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class geometry$Transformation mixins kendo$Observable {
    options: geometry$TransformationOptions;
    clone(): kendo$kendo$geometry.geometry$Transformation;
    equals(other: kendo$kendo$geometry.geometry$Transformation): boolean;
    matrix(): kendo$kendo$geometry.geometry$Matrix;
    multiply(
      transformation: kendo$kendo$geometry.geometry$Transformation
    ): kendo$kendo$geometry.geometry$Transformation;
    rotate(
      angle: number,
      center: any
    ): kendo$kendo$geometry.geometry$Transformation;
    rotate(
      angle: number,
      center: kendo$kendo$geometry.geometry$Point
    ): kendo$kendo$geometry.geometry$Transformation;
    scale(
      scaleX: number,
      scaleY: number
    ): kendo$kendo$geometry.geometry$Transformation;
    translate(
      x: number,
      y: number
    ): kendo$kendo$geometry.geometry$Transformation;
  }

  declare interface geometry$TransformationOptions {
    name?: string;
    name?: string;
  }

  declare interface geometry$TransformationEvent {
    sender: geometry$Transformation;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: geometry$Transformation;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$Color mixins kendo$Observable {
    options: kendo$ColorOptions;
    diff(): number;
    equals(): boolean;
    toHSV(): any;
    toRGB(): any;
    toBytes(): any;
    toHex(): string;
    toCss(): string;
    toCssRgba(): string;
    toDisplay(): string;
  }

  declare interface kendo$ColorOptions {
    name?: string;
  }

  declare interface kendo$ColorEvent {
    sender: kendo$Color;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare var npm$namespace$date: {
    setDayOfWeek: typeof date$setDayOfWeek,
    dayOfWeek: typeof date$dayOfWeek,
    weekInYear: typeof date$weekInYear,
    getDate: typeof date$getDate,
    isInDateRange: typeof date$isInDateRange,
    isInTimeRange: typeof date$isInTimeRange,
    isToday: typeof date$isToday,
    nextDay: typeof date$nextDay,
    previousDay: typeof date$previousDay,
    toUtcTime: typeof date$toUtcTime,
    setTime: typeof date$setTime,
    setHours: typeof date$setHours,
    addDays: typeof date$addDays,
    today: typeof date$today,
    toInvariantTime: typeof date$toInvariantTime,
    firstDayOfMonth: typeof date$firstDayOfMonth,
    lastDayOfMonth: typeof date$lastDayOfMonth,
    getMilliseconds: typeof date$getMilliseconds,
    MS_PER_DAY: typeof date$MS_PER_DAY,
    MS_PER_HOUR: typeof date$MS_PER_HOUR,
    MS_PER_MINUTE: typeof date$MS_PER_MINUTE
  };
  declare var date$MS_PER_DAY: number;

  declare var date$MS_PER_HOUR: number;

  declare var date$MS_PER_MINUTE: number;

  declare function date$setDayOfWeek(
    targetDate: Date,
    date$dayOfWeek: number,
    direction: number
  ): void;

  declare function date$dayOfWeek(
    targetDate: Date,
    date$dayOfWeek: number,
    direction: number
  ): Date;

  declare function date$weekInYear(
    kendo$date: Date,
    weekStart?: number
  ): number;

  declare function date$getDate(kendo$date: Date): Date;

  declare function date$isInDateRange(
    targetDate: Date,
    lowerLimitDate: Date,
    upperLimitDate: Date
  ): boolean;

  declare function date$isInTimeRange(
    targetDate: Date,
    lowerLimitDate: Date,
    upperLimitDate: Date
  ): boolean;

  declare function date$isToday(targetDate: Date): boolean;

  declare function date$nextDay(targetDate: Date): Date;

  declare function date$previousDay(targetDate: Date): Date;

  declare function date$toUtcTime(targetDate: Date): number;

  declare function date$setTime(
    targetDate: Date,
    millisecondsToAdd: number,
    ignoreDST: boolean
  ): void;

  declare function date$setHours(targetDate: Date, sourceDate: number): Date;

  declare function date$addDays(
    targetDate: Date,
    numberOfDaysToAdd: number
  ): Date;

  declare function date$today(): Date;

  declare function date$toInvariantTime(targetDate: Date): Date;

  declare function date$firstDayOfMonth(targetDate: Date): Date;

  declare function date$lastDayOfMonth(targetDate: Date): Date;

  declare function date$getMilliseconds(targetDate: Date): number;

  declare function kendo$alert(text: string): void;

  declare function kendo$antiForgeryTokens(): any;

  declare function kendo$bind(
    element: string,
    viewModel: any,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: string,
    viewModel: kendo$kendo$data.data$ObservableObject,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: JQuery,
    viewModel: any,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: JQuery,
    viewModel: kendo$kendo$data.data$ObservableObject,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: drawing$Element,
    viewModel: any,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: drawing$Element,
    viewModel: kendo$kendo$data.data$ObservableObject,
    namespace?: any
  ): void;

  declare function kendo$confirm(text: string): JQueryPromise<any>;

  declare function kendo$culture(kendo$culture: string): void;

  declare function kendo$destroy(element: string): void;

  declare function kendo$destroy(element: JQuery): void;

  declare function kendo$destroy(element: drawing$Element): void;

  declare function kendo$guid(): string;

  declare function kendo$htmlEncode(value: string): string;

  declare function kendo$observableHierarchy(array: any): void;

  declare function kendo$parseDate(
    value: string,
    formats?: string,
    kendo$culture?: string
  ): Date;

  declare function kendo$parseDate(
    value: string,
    formats?: any,
    kendo$culture?: string
  ): Date;

  declare function kendo$parseExactDate(
    value: string,
    formats?: string,
    kendo$culture?: string
  ): Date;

  declare function kendo$parseExactDate(
    value: string,
    formats?: any,
    kendo$culture?: string
  ): Date;

  declare function kendo$parseFloat(
    value: string,
    kendo$culture?: string
  ): number;

  declare function kendo$parseInt(
    value: string,
    kendo$culture?: string
  ): number;

  declare function kendo$parseColor(
    color: string,
    noerror: boolean
  ): kendo$kendo$Color;

  declare function kendo$prompt(
    text: string,
    defaultValue: string
  ): JQueryPromise<any>;

  declare function kendo$proxyModelSetters(): void;

  declare function kendo$proxyModelSetters(
    kendo$data: kendo$kendo$data.data$Model
  ): void;

  declare function kendo$resize(element: string, force: boolean): void;

  declare function kendo$resize(element: JQuery, force: boolean): void;

  declare function kendo$resize(element: drawing$Element, force: boolean): void;

  declare function kendo$saveAs(options: any): void;

  declare function kendo$stringify(value: any): string;

  declare function kendo$throttle(fn: Function, timeout: number): Function;

  declare function kendo$touchScroller(element: string): void;

  declare function kendo$touchScroller(element: JQuery): void;

  declare function kendo$touchScroller(element: drawing$Element): void;

  declare function kendo$toString(
    value: Date,
    kendo$format: string,
    kendo$culture?: string
  ): string;

  declare function kendo$toString(
    value: number,
    kendo$format: string,
    kendo$culture?: string
  ): string;

  declare function kendo$unbind(element: string): void;

  declare function kendo$unbind(element: JQuery): void;

  declare function kendo$unbind(element: drawing$Element): void;

  declare var npm$namespace$pdf: {
    defineFont: typeof pdf$defineFont
  };
  declare function pdf$defineFont(map: any): void;

  declare var npm$namespace$timezone: {
    offset: typeof timezone$offset,
    convert: typeof timezone$convert,
    apply: typeof timezone$apply,
    remove: typeof timezone$remove,
    abbr: typeof timezone$abbr,
    toLocalDate: typeof timezone$toLocalDate
  };
  declare function timezone$offset(
    utcTime: Date,
    kendo$timezone: string
  ): number;

  declare function timezone$offset(
    utcTime: number,
    kendo$timezone: string
  ): number;

  declare function timezone$convert(
    targetDate: Date,
    fromOffset: number,
    toOffset: number
  ): Date;

  declare function timezone$convert(
    targetDate: Date,
    fromOffset: number,
    toOffset: string
  ): Date;

  declare function timezone$convert(
    targetDate: Date,
    fromOffset: string,
    toOffset: number
  ): Date;

  declare function timezone$convert(
    targetDate: Date,
    fromOffset: string,
    toOffset: string
  ): Date;

  declare function timezone$apply(
    targetDate: Date,
    timezone$offset: number
  ): Date;

  declare function timezone$apply(
    targetDate: Date,
    timezone$offset: string
  ): Date;

  declare function timezone$remove(
    targetDate: Date,
    timezone$offset: number
  ): Date;

  declare function timezone$remove(
    targetDate: Date,
    timezone$offset: string
  ): Date;

  declare function timezone$abbr(
    targetDate: Date,
    kendo$timezone: string
  ): string;

  declare function timezone$toLocalDate(targetDate: Date): Date;

  declare function timezone$toLocalDate(targetDate: number): Date;

  declare class spreadsheet$CustomFilter mixins kendo$Observable {
    options: spreadsheet$CustomFilterOptions;
    init(options: any): void;
  }

  declare interface spreadsheet$CustomFilterOptions {
    name?: string;
  }

  declare interface spreadsheet$CustomFilterEvent {
    sender: spreadsheet$CustomFilter;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class spreadsheet$DynamicFilter mixins kendo$Observable {
    options: spreadsheet$DynamicFilterOptions;
    init(options: any): void;
  }

  declare interface spreadsheet$DynamicFilterOptions {
    name?: string;
  }

  declare interface spreadsheet$DynamicFilterEvent {
    sender: spreadsheet$DynamicFilter;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class spreadsheet$Range mixins kendo$Observable {
    options: spreadsheet$RangeOptions;
    background(): string;
    background(value?: string): void;
    bold(): boolean;
    bold(value?: boolean): void;
    borderBottom(): any;
    borderBottom(value?: any): void;
    borderLeft(): any;
    borderLeft(value?: any): void;
    borderRight(): any;
    borderRight(value?: any): void;
    borderTop(): any;
    borderTop(value?: any): void;
    color(): string;
    color(value?: string): void;
    clear(options?: any): void;
    clearFilter(indices: any): void;
    clearFilter(indices: number): void;
    editor(): string;
    editor(value?: string): void;
    enable(): boolean;
    enable(value?: boolean): void;
    fillFrom(srcRange: spreadsheet$Range, direction?: number): void;
    fillFrom(srcRange: string, direction?: number): void;
    filter(filter: boolean): void;
    filter(filter: any): void;
    fontFamily(): string;
    fontFamily(value?: string): void;
    fontSize(): number;
    fontSize(value?: number): void;
    forEachCell(callback: Function): void;
    format(): string;
    format(kendo$format?: string): void;
    formula(): string;
    formula(formula?: string): void;
    hasFilter(): boolean;
    input(): any;
    input(value?: string): void;
    input(value?: number): void;
    input(value?: Date): void;
    isSortable(): boolean;
    isFilterable(): boolean;
    italic(): boolean;
    italic(value?: boolean): void;
    link(): string;
    link(url?: string): void;
    merge(): void;
    select(): void;
    sort(sort: number): void;
    sort(sort: any): void;
    textAlign(): string;
    textAlign(value?: string): void;
    unmerge(): void;
    values(): any;
    values(values: any): void;
    validation(): any;
    validation(value?: any): void;
    value(): any;
    value(value?: string): void;
    value(value?: number): void;
    value(value?: Date): void;
    verticalAlign(): string;
    verticalAlign(value?: string): void;
    wrap(): boolean;
    wrap(value?: boolean): void;
  }

  declare interface spreadsheet$RangeOptions {
    name?: string;
  }

  declare interface spreadsheet$RangeEvent {
    sender: spreadsheet$Range;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class spreadsheet$Sheet mixins kendo$Observable {
    options: spreadsheet$SheetOptions;
    clearFilter(indexes: number): void;
    clearFilter(indexes: any): void;
    columnWidth(): void;
    columnWidth(index: number, width?: number): void;
    batch(callback: Function, changeEventArgs: any): void;
    deleteColumn(index: number): void;
    deleteRow(index: number): void;
    fromJSON(kendo$data: any): void;
    frozenColumns(): number;
    frozenColumns(count?: number): void;
    frozenRows(): number;
    frozenRows(count?: number): void;
    hideColumn(index: number): void;
    hideRow(index: number): void;
    insertColumn(index: number): void;
    insertRow(index: number): void;
    range(ref: string): kendo$kendo$spreadsheet.spreadsheet$Range;
    range(
      rowIndex: number,
      columnIndex: number,
      rowCount?: number,
      columnCount?: number
    ): kendo$kendo$spreadsheet.spreadsheet$Range;
    rowHeight(): void;
    rowHeight(index: number, width?: number): void;
    selection(): kendo$kendo$spreadsheet.spreadsheet$Range;
    setDataSource(
      dataSource: kendo$kendo$data.data$DataSource,
      columns?: any
    ): void;
    showGridLines(): boolean;
    showGridLines(showGridLines?: boolean): void;
    toJSON(): void;
    unhideColumn(index: number): void;
    unhideRow(index: number): void;
  }

  declare interface spreadsheet$SheetOptions {
    name?: string;
    change?: (e: spreadsheet$SheetChangeEvent) => void;
  }

  declare interface spreadsheet$SheetEvent {
    sender: spreadsheet$Sheet;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type spreadsheet$SheetChangeEvent = {} & spreadsheet$SheetEvent;

  declare class spreadsheet$TopFilter mixins kendo$Observable {
    options: spreadsheet$TopFilterOptions;
    init(options: any): void;
  }

  declare interface spreadsheet$TopFilterOptions {
    name?: string;
  }

  declare interface spreadsheet$TopFilterEvent {
    sender: spreadsheet$TopFilter;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class spreadsheet$ValueFilter mixins kendo$Observable {
    options: spreadsheet$ValueFilterOptions;
    init(options: any): void;
  }

  declare interface spreadsheet$ValueFilterOptions {
    name?: string;
  }

  declare interface spreadsheet$ValueFilterEvent {
    sender: spreadsheet$ValueFilter;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class ooxml$Workbook mixins kendo$Observable {
    options: ooxml$WorkbookOptions;
    sheets: ooxml$WorkbookSheet[];
    constructor(options?: ooxml$WorkbookOptions): this;
    toDataURL(): string;
    toDataURLAsync(): JQueryPromise<any>;
  }

  declare interface ooxml$WorkbookSheetColumn {
    autoWidth?: boolean;
    index?: number;
    width?: number;
  }

  declare interface ooxml$WorkbookSheetFilter {
    from?: number;
    to?: number;
  }

  declare interface ooxml$WorkbookSheetFreezePane {
    colSplit?: number;
    rowSplit?: number;
  }

  declare interface ooxml$WorkbookSheetRowCellBorderBottom {
    color?: string;
    size?: number;
  }

  declare interface ooxml$WorkbookSheetRowCellBorderLeft {
    color?: string;
    size?: number;
  }

  declare interface ooxml$WorkbookSheetRowCellBorderRight {
    color?: string;
    size?: number;
  }

  declare interface ooxml$WorkbookSheetRowCellBorderTop {
    color?: string;
    size?: number;
  }

  declare interface ooxml$WorkbookSheetRowCell {
    background?: string;
    borderBottom?: ooxml$WorkbookSheetRowCellBorderBottom;
    borderLeft?: ooxml$WorkbookSheetRowCellBorderLeft;
    borderTop?: ooxml$WorkbookSheetRowCellBorderTop;
    borderRight?: ooxml$WorkbookSheetRowCellBorderRight;
    bold?: boolean;
    color?: string;
    colSpan?: number;
    fontFamily?: string;
    fontName?: string;
    fontSize?: number;
    kendo$format?: string;
    formula?: string;
    hAlign?: string;
    index?: any;
    italic?: boolean;
    rowSpan?: number;
    textAlign?: string;
    underline?: boolean;
    drawing$wrap?: boolean;
    drawing$vAlign?: string;
    verticalAlign?: string;
    value?: Date | number | string | boolean;
  }

  declare interface ooxml$WorkbookSheetRow {
    cells?: ooxml$WorkbookSheetRowCell[];
    index?: number;
    height?: number;
  }

  declare interface ooxml$WorkbookSheet {
    columns?: ooxml$WorkbookSheetColumn[];
    freezePane?: ooxml$WorkbookSheetFreezePane;
    frozenColumns?: number;
    frozenRows?: number;
    filter?: ooxml$WorkbookSheetFilter;
    mergedCells?: any;
    name?: string;
    rows?: ooxml$WorkbookSheetRow[];
    showGridLines?: boolean;
    title?: string;
  }

  declare interface ooxml$WorkbookOptions {
    name?: string;
    creator?: string;
    kendo$date?: Date;
    sheets?: ooxml$WorkbookSheet[];
  }

  declare interface ooxml$WorkbookEvent {
    sender: ooxml$Workbook;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }
  declare interface HTMLElement {
    kendoBindingTarget: kendo$kendo$data.data$BindingTarget;
  }
  declare interface JQueryAjaxSettings {}
  declare interface JQueryXHR {}
  declare interface JQueryEventObject {}
  declare interface JQueryPromise<T> {}
  declare interface JQuery {
    kendo$data(key: any): any;
    kendoAlert(): JQuery;
    kendoAlert(options: kendo$kendo$ui.ui$AlertOptions): JQuery;
    kendo$data(key: "kendoAlert"): kendo$kendo$ui.ui$Alert;
    kendoArcGauge(): JQuery;
    kendoArcGauge(
      options: kendo$kendo$dataviz.kendo$ui.ui$ArcGaugeOptions
    ): JQuery;
    kendo$data(key: "kendoArcGauge"): kendo$kendo$dataviz.kendo$ui.ui$ArcGauge;
    kendoAutoComplete(): JQuery;
    kendoAutoComplete(options: kendo$kendo$ui.ui$AutoCompleteOptions): JQuery;
    kendo$data(key: "kendoAutoComplete"): kendo$kendo$ui.ui$AutoComplete;
    kendoBarcode(): JQuery;
    kendoBarcode(
      options: kendo$kendo$dataviz.kendo$ui.ui$BarcodeOptions
    ): JQuery;
    kendo$data(key: "kendoBarcode"): kendo$kendo$dataviz.kendo$ui.ui$Barcode;
    kendoButton(): JQuery;
    kendoButton(options: kendo$kendo$ui.ui$ButtonOptions): JQuery;
    kendo$data(key: "kendoButton"): kendo$kendo$ui.ui$Button;
    kendoButtonGroup(): JQuery;
    kendoButtonGroup(options: kendo$kendo$ui.ui$ButtonGroupOptions): JQuery;
    kendo$data(key: "kendoButtonGroup"): kendo$kendo$ui.ui$ButtonGroup;
    kendoCalendar(): JQuery;
    kendoCalendar(options: kendo$kendo$ui.ui$CalendarOptions): JQuery;
    kendo$data(key: "kendoCalendar"): kendo$kendo$ui.ui$Calendar;
    kendoChart(): JQuery;
    kendoChart(options: kendo$kendo$dataviz.kendo$ui.ui$ChartOptions): JQuery;
    kendo$data(key: "kendoChart"): kendo$kendo$dataviz.kendo$ui.ui$Chart;
    kendoChat(): JQuery;
    kendoChat(options: kendo$kendo$ui.ui$ChatOptions): JQuery;
    kendo$data(key: "kendoChat"): kendo$kendo$ui.ui$Chat;
    kendoColorPalette(): JQuery;
    kendoColorPalette(options: kendo$kendo$ui.ui$ColorPaletteOptions): JQuery;
    kendo$data(key: "kendoColorPalette"): kendo$kendo$ui.ui$ColorPalette;
    kendoColorPicker(): JQuery;
    kendoColorPicker(options: kendo$kendo$ui.ui$ColorPickerOptions): JQuery;
    kendo$data(key: "kendoColorPicker"): kendo$kendo$ui.ui$ColorPicker;
    kendoComboBox(): JQuery;
    kendoComboBox(options: kendo$kendo$ui.ui$ComboBoxOptions): JQuery;
    kendo$data(key: "kendoComboBox"): kendo$kendo$ui.ui$ComboBox;
    kendoConfirm(): JQuery;
    kendoConfirm(options: kendo$kendo$ui.ui$ConfirmOptions): JQuery;
    kendo$data(key: "kendoConfirm"): kendo$kendo$ui.ui$Confirm;
    kendoContextMenu(): JQuery;
    kendoContextMenu(options: kendo$kendo$ui.ui$ContextMenuOptions): JQuery;
    kendo$data(key: "kendoContextMenu"): kendo$kendo$ui.ui$ContextMenu;
    kendoDateInput(): JQuery;
    kendoDateInput(options: kendo$kendo$ui.ui$DateInputOptions): JQuery;
    kendo$data(key: "kendoDateInput"): kendo$kendo$ui.ui$DateInput;
    kendoDatePicker(): JQuery;
    kendoDatePicker(options: kendo$kendo$ui.ui$DatePickerOptions): JQuery;
    kendo$data(key: "kendoDatePicker"): kendo$kendo$ui.ui$DatePicker;
    kendoDateRangePicker(): JQuery;
    kendoDateRangePicker(
      options: kendo$kendo$ui.ui$DateRangePickerOptions
    ): JQuery;
    kendo$data(key: "kendoDateRangePicker"): kendo$kendo$ui.ui$DateRangePicker;
    kendoDateTimePicker(): JQuery;
    kendoDateTimePicker(
      options: kendo$kendo$ui.ui$DateTimePickerOptions
    ): JQuery;
    kendo$data(key: "kendoDateTimePicker"): kendo$kendo$ui.ui$DateTimePicker;
    kendoDiagram(): JQuery;
    kendoDiagram(
      options: kendo$kendo$dataviz.kendo$ui.ui$DiagramOptions
    ): JQuery;
    kendo$data(key: "kendoDiagram"): kendo$kendo$dataviz.kendo$ui.ui$Diagram;
    kendoDialog(): JQuery;
    kendoDialog(options: kendo$kendo$ui.ui$DialogOptions): JQuery;
    kendo$data(key: "kendoDialog"): kendo$kendo$ui.ui$Dialog;
    kendoDraggable(): JQuery;
    kendoDraggable(options: kendo$kendo$ui.ui$DraggableOptions): JQuery;
    kendo$data(key: "kendoDraggable"): kendo$kendo$ui.ui$Draggable;
    kendoDropDownList(): JQuery;
    kendoDropDownList(options: kendo$kendo$ui.ui$DropDownListOptions): JQuery;
    kendo$data(key: "kendoDropDownList"): kendo$kendo$ui.ui$DropDownList;
    kendoDropDownTree(): JQuery;
    kendoDropDownTree(options: kendo$kendo$ui.ui$DropDownTreeOptions): JQuery;
    kendo$data(key: "kendoDropDownTree"): kendo$kendo$ui.ui$DropDownTree;
    kendoDropTarget(): JQuery;
    kendoDropTarget(options: kendo$kendo$ui.ui$DropTargetOptions): JQuery;
    kendo$data(key: "kendoDropTarget"): kendo$kendo$ui.ui$DropTarget;
    kendoDropTargetArea(): JQuery;
    kendoDropTargetArea(
      options: kendo$kendo$ui.ui$DropTargetAreaOptions
    ): JQuery;
    kendo$data(key: "kendoDropTargetArea"): kendo$kendo$ui.ui$DropTargetArea;
    kendoEditor(): JQuery;
    kendoEditor(options: kendo$kendo$ui.ui$EditorOptions): JQuery;
    kendo$data(key: "kendoEditor"): kendo$kendo$ui.ui$Editor;
    kendoFilterMenu(): JQuery;
    kendoFilterMenu(options: kendo$kendo$ui.ui$FilterMenuOptions): JQuery;
    kendo$data(key: "kendoFilterMenu"): kendo$kendo$ui.ui$FilterMenu;
    kendoFlatColorPicker(): JQuery;
    kendoFlatColorPicker(
      options: kendo$kendo$ui.ui$FlatColorPickerOptions
    ): JQuery;
    kendo$data(key: "kendoFlatColorPicker"): kendo$kendo$ui.ui$FlatColorPicker;
    kendoGantt(): JQuery;
    kendoGantt(options: kendo$kendo$ui.ui$GanttOptions): JQuery;
    kendo$data(key: "kendoGantt"): kendo$kendo$ui.ui$Gantt;
    kendoGrid(): JQuery;
    kendoGrid(options: kendo$kendo$ui.ui$GridOptions): JQuery;
    kendo$data(key: "kendoGrid"): kendo$kendo$ui.ui$Grid;
    kendoLinearGauge(): JQuery;
    kendoLinearGauge(
      options: kendo$kendo$dataviz.kendo$ui.ui$LinearGaugeOptions
    ): JQuery;
    kendo$data(
      key: "kendoLinearGauge"
    ): kendo$kendo$dataviz.kendo$ui.ui$LinearGauge;
    kendoListBox(): JQuery;
    kendoListBox(options: kendo$kendo$ui.ui$ListBoxOptions): JQuery;
    kendo$data(key: "kendoListBox"): kendo$kendo$ui.ui$ListBox;
    kendoListView(): JQuery;
    kendoListView(options: kendo$kendo$ui.ui$ListViewOptions): JQuery;
    kendo$data(key: "kendoListView"): kendo$kendo$ui.ui$ListView;
    kendoMap(): JQuery;
    kendoMap(options: kendo$kendo$dataviz.kendo$ui.ui$MapOptions): JQuery;
    kendo$data(key: "kendoMap"): kendo$kendo$dataviz.kendo$ui.ui$Map;
    kendoMaskedTextBox(): JQuery;
    kendoMaskedTextBox(options: kendo$kendo$ui.ui$MaskedTextBoxOptions): JQuery;
    kendo$data(key: "kendoMaskedTextBox"): kendo$kendo$ui.ui$MaskedTextBox;
    kendoMediaPlayer(): JQuery;
    kendoMediaPlayer(options: kendo$kendo$ui.ui$MediaPlayerOptions): JQuery;
    kendo$data(key: "kendoMediaPlayer"): kendo$kendo$ui.ui$MediaPlayer;
    kendoMenu(): JQuery;
    kendoMenu(options: kendo$kendo$ui.ui$MenuOptions): JQuery;
    kendo$data(key: "kendoMenu"): kendo$kendo$ui.ui$Menu;
    kendoMobileActionSheet(): JQuery;
    kendoMobileActionSheet(
      options: kendo$kendo$mobile.kendo$ui.ui$ActionSheetOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobileActionSheet"
    ): kendo$kendo$mobile.kendo$ui.ui$ActionSheet;
    kendoMobileBackButton(): JQuery;
    kendoMobileBackButton(
      options: kendo$kendo$mobile.kendo$ui.ui$BackButtonOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobileBackButton"
    ): kendo$kendo$mobile.kendo$ui.ui$BackButton;
    kendoMobileButton(): JQuery;
    kendoMobileButton(
      options: kendo$kendo$mobile.kendo$ui.ui$ButtonOptions
    ): JQuery;
    kendo$data(key: "kendoMobileButton"): kendo$kendo$mobile.kendo$ui.ui$Button;
    kendoMobileButtonGroup(): JQuery;
    kendoMobileButtonGroup(
      options: kendo$kendo$mobile.kendo$ui.ui$ButtonGroupOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobileButtonGroup"
    ): kendo$kendo$mobile.kendo$ui.ui$ButtonGroup;
    kendoMobileCollapsible(): JQuery;
    kendoMobileCollapsible(
      options: kendo$kendo$mobile.kendo$ui.ui$CollapsibleOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobileCollapsible"
    ): kendo$kendo$mobile.kendo$ui.ui$Collapsible;
    kendoMobileDetailButton(): JQuery;
    kendoMobileDetailButton(
      options: kendo$kendo$mobile.kendo$ui.ui$DetailButtonOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobileDetailButton"
    ): kendo$kendo$mobile.kendo$ui.ui$DetailButton;
    kendoMobileDrawer(): JQuery;
    kendoMobileDrawer(
      options: kendo$kendo$mobile.kendo$ui.ui$DrawerOptions
    ): JQuery;
    kendo$data(key: "kendoMobileDrawer"): kendo$kendo$mobile.kendo$ui.ui$Drawer;
    kendoMobileLayout(): JQuery;
    kendoMobileLayout(
      options: kendo$kendo$mobile.kendo$ui.ui$LayoutOptions
    ): JQuery;
    kendo$data(key: "kendoMobileLayout"): kendo$kendo$mobile.kendo$ui.ui$Layout;
    kendoMobileListView(): JQuery;
    kendoMobileListView(
      options: kendo$kendo$mobile.kendo$ui.ui$ListViewOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobileListView"
    ): kendo$kendo$mobile.kendo$ui.ui$ListView;
    kendoMobileLoader(): JQuery;
    kendoMobileLoader(
      options: kendo$kendo$mobile.kendo$ui.ui$LoaderOptions
    ): JQuery;
    kendo$data(key: "kendoMobileLoader"): kendo$kendo$mobile.kendo$ui.ui$Loader;
    kendoMobileModalView(): JQuery;
    kendoMobileModalView(
      options: kendo$kendo$mobile.kendo$ui.ui$ModalViewOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobileModalView"
    ): kendo$kendo$mobile.kendo$ui.ui$ModalView;
    kendoMobileNavBar(): JQuery;
    kendoMobileNavBar(
      options: kendo$kendo$mobile.kendo$ui.ui$NavBarOptions
    ): JQuery;
    kendo$data(key: "kendoMobileNavBar"): kendo$kendo$mobile.kendo$ui.ui$NavBar;
    kendoMobilePane(): JQuery;
    kendoMobilePane(
      options: kendo$kendo$mobile.kendo$ui.ui$PaneOptions
    ): JQuery;
    kendo$data(key: "kendoMobilePane"): kendo$kendo$mobile.kendo$ui.ui$Pane;
    kendoMobilePopOver(): JQuery;
    kendoMobilePopOver(
      options: kendo$kendo$mobile.kendo$ui.ui$PopOverOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobilePopOver"
    ): kendo$kendo$mobile.kendo$ui.ui$PopOver;
    kendoMobileScrollView(): JQuery;
    kendoMobileScrollView(
      options: kendo$kendo$mobile.kendo$ui.ui$ScrollViewOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobileScrollView"
    ): kendo$kendo$mobile.kendo$ui.ui$ScrollView;
    kendoMobileScroller(): JQuery;
    kendoMobileScroller(
      options: kendo$kendo$mobile.kendo$ui.ui$ScrollerOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobileScroller"
    ): kendo$kendo$mobile.kendo$ui.ui$Scroller;
    kendoMobileSplitView(): JQuery;
    kendoMobileSplitView(
      options: kendo$kendo$mobile.kendo$ui.ui$SplitViewOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobileSplitView"
    ): kendo$kendo$mobile.kendo$ui.ui$SplitView;
    kendoMobileSwitch(): JQuery;
    kendoMobileSwitch(
      options: kendo$kendo$mobile.kendo$ui.ui$SwitchOptions
    ): JQuery;
    kendo$data(key: "kendoMobileSwitch"): kendo$kendo$mobile.kendo$ui.ui$Switch;
    kendoMobileTabStrip(): JQuery;
    kendoMobileTabStrip(
      options: kendo$kendo$mobile.kendo$ui.ui$TabStripOptions
    ): JQuery;
    kendo$data(
      key: "kendoMobileTabStrip"
    ): kendo$kendo$mobile.kendo$ui.ui$TabStrip;
    kendoMobileView(): JQuery;
    kendoMobileView(
      options: kendo$kendo$mobile.kendo$ui.ui$ViewOptions
    ): JQuery;
    kendo$data(key: "kendoMobileView"): kendo$kendo$mobile.kendo$ui.ui$View;
    kendoMultiColumnComboBox(): JQuery;
    kendoMultiColumnComboBox(
      options: kendo$kendo$ui.ui$MultiColumnComboBoxOptions
    ): JQuery;
    kendo$data(
      key: "kendoMultiColumnComboBox"
    ): kendo$kendo$ui.ui$MultiColumnComboBox;
    kendoMultiSelect(): JQuery;
    kendoMultiSelect(options: kendo$kendo$ui.ui$MultiSelectOptions): JQuery;
    kendo$data(key: "kendoMultiSelect"): kendo$kendo$ui.ui$MultiSelect;
    kendoMultiViewCalendar(): JQuery;
    kendoMultiViewCalendar(
      options: kendo$kendo$ui.ui$MultiViewCalendarOptions
    ): JQuery;
    kendo$data(
      key: "kendoMultiViewCalendar"
    ): kendo$kendo$ui.ui$MultiViewCalendar;
    kendoNotification(): JQuery;
    kendoNotification(options: kendo$kendo$ui.ui$NotificationOptions): JQuery;
    kendo$data(key: "kendoNotification"): kendo$kendo$ui.ui$Notification;
    kendoNumericTextBox(): JQuery;
    kendoNumericTextBox(
      options: kendo$kendo$ui.ui$NumericTextBoxOptions
    ): JQuery;
    kendo$data(key: "kendoNumericTextBox"): kendo$kendo$ui.ui$NumericTextBox;
    kendoPager(): JQuery;
    kendoPager(options: kendo$kendo$ui.ui$PagerOptions): JQuery;
    kendo$data(key: "kendoPager"): kendo$kendo$ui.ui$Pager;
    kendoPanelBar(): JQuery;
    kendoPanelBar(options: kendo$kendo$ui.ui$PanelBarOptions): JQuery;
    kendo$data(key: "kendoPanelBar"): kendo$kendo$ui.ui$PanelBar;
    kendoPivotConfigurator(): JQuery;
    kendoPivotConfigurator(
      options: kendo$kendo$ui.ui$PivotConfiguratorOptions
    ): JQuery;
    kendo$data(
      key: "kendoPivotConfigurator"
    ): kendo$kendo$ui.ui$PivotConfigurator;
    kendoPivotGrid(): JQuery;
    kendoPivotGrid(options: kendo$kendo$ui.ui$PivotGridOptions): JQuery;
    kendo$data(key: "kendoPivotGrid"): kendo$kendo$ui.ui$PivotGrid;
    kendoPopup(): JQuery;
    kendoPopup(options: kendo$kendo$ui.ui$PopupOptions): JQuery;
    kendo$data(key: "kendoPopup"): kendo$kendo$ui.ui$Popup;
    kendoProgressBar(): JQuery;
    kendoProgressBar(options: kendo$kendo$ui.ui$ProgressBarOptions): JQuery;
    kendo$data(key: "kendoProgressBar"): kendo$kendo$ui.ui$ProgressBar;
    kendoPrompt(): JQuery;
    kendoPrompt(options: kendo$kendo$ui.ui$PromptOptions): JQuery;
    kendo$data(key: "kendoPrompt"): kendo$kendo$ui.ui$Prompt;
    kendoQRCode(): JQuery;
    kendoQRCode(options: kendo$kendo$dataviz.kendo$ui.ui$QRCodeOptions): JQuery;
    kendo$data(key: "kendoQRCode"): kendo$kendo$dataviz.kendo$ui.ui$QRCode;
    kendoRadialGauge(): JQuery;
    kendoRadialGauge(
      options: kendo$kendo$dataviz.kendo$ui.ui$RadialGaugeOptions
    ): JQuery;
    kendo$data(
      key: "kendoRadialGauge"
    ): kendo$kendo$dataviz.kendo$ui.ui$RadialGauge;
    kendoRangeSlider(): JQuery;
    kendoRangeSlider(options: kendo$kendo$ui.ui$RangeSliderOptions): JQuery;
    kendo$data(key: "kendoRangeSlider"): kendo$kendo$ui.ui$RangeSlider;
    kendoResponsivePanel(): JQuery;
    kendoResponsivePanel(
      options: kendo$kendo$ui.ui$ResponsivePanelOptions
    ): JQuery;
    kendo$data(key: "kendoResponsivePanel"): kendo$kendo$ui.ui$ResponsivePanel;
    kendoScheduler(): JQuery;
    kendoScheduler(options: kendo$kendo$ui.ui$SchedulerOptions): JQuery;
    kendo$data(key: "kendoScheduler"): kendo$kendo$ui.ui$Scheduler;
    kendoScrollView(): JQuery;
    kendoScrollView(options: kendo$kendo$ui.ui$ScrollViewOptions): JQuery;
    kendo$data(key: "kendoScrollView"): kendo$kendo$ui.ui$ScrollView;
    kendoSlider(): JQuery;
    kendoSlider(options: kendo$kendo$ui.ui$SliderOptions): JQuery;
    kendo$data(key: "kendoSlider"): kendo$kendo$ui.ui$Slider;
    kendoSortable(): JQuery;
    kendoSortable(options: kendo$kendo$ui.ui$SortableOptions): JQuery;
    kendo$data(key: "kendoSortable"): kendo$kendo$ui.ui$Sortable;
    kendoSparkline(): JQuery;
    kendoSparkline(
      options: kendo$kendo$dataviz.kendo$ui.ui$SparklineOptions
    ): JQuery;
    kendo$data(
      key: "kendoSparkline"
    ): kendo$kendo$dataviz.kendo$ui.ui$Sparkline;
    kendoSplitter(): JQuery;
    kendoSplitter(options: kendo$kendo$ui.ui$SplitterOptions): JQuery;
    kendo$data(key: "kendoSplitter"): kendo$kendo$ui.ui$Splitter;
    kendoSpreadsheet(): JQuery;
    kendoSpreadsheet(options: kendo$kendo$ui.ui$SpreadsheetOptions): JQuery;
    kendo$data(key: "kendoSpreadsheet"): kendo$kendo$ui.ui$Spreadsheet;
    kendoStockChart(): JQuery;
    kendoStockChart(
      options: kendo$kendo$dataviz.kendo$ui.ui$StockChartOptions
    ): JQuery;
    kendo$data(
      key: "kendoStockChart"
    ): kendo$kendo$dataviz.kendo$ui.ui$StockChart;
    kendoSwitch(): JQuery;
    kendoSwitch(options: kendo$kendo$ui.ui$SwitchOptions): JQuery;
    kendo$data(key: "kendoSwitch"): kendo$kendo$ui.ui$Switch;
    kendoTabStrip(): JQuery;
    kendoTabStrip(options: kendo$kendo$ui.ui$TabStripOptions): JQuery;
    kendo$data(key: "kendoTabStrip"): kendo$kendo$ui.ui$TabStrip;
    kendoTimePicker(): JQuery;
    kendoTimePicker(options: kendo$kendo$ui.ui$TimePickerOptions): JQuery;
    kendo$data(key: "kendoTimePicker"): kendo$kendo$ui.ui$TimePicker;
    kendoToolBar(): JQuery;
    kendoToolBar(options: kendo$kendo$ui.ui$ToolBarOptions): JQuery;
    kendo$data(key: "kendoToolBar"): kendo$kendo$ui.ui$ToolBar;
    kendoTooltip(): JQuery;
    kendoTooltip(options: kendo$kendo$ui.ui$TooltipOptions): JQuery;
    kendo$data(key: "kendoTooltip"): kendo$kendo$ui.ui$Tooltip;
    kendoTouch(): JQuery;
    kendoTouch(options: kendo$kendo$ui.ui$TouchOptions): JQuery;
    kendo$data(key: "kendoTouch"): kendo$kendo$ui.ui$Touch;
    kendoTreeList(): JQuery;
    kendoTreeList(options: kendo$kendo$ui.ui$TreeListOptions): JQuery;
    kendo$data(key: "kendoTreeList"): kendo$kendo$ui.ui$TreeList;
    kendoTreeMap(): JQuery;
    kendoTreeMap(
      options: kendo$kendo$dataviz.kendo$ui.ui$TreeMapOptions
    ): JQuery;
    kendo$data(key: "kendoTreeMap"): kendo$kendo$dataviz.kendo$ui.ui$TreeMap;
    kendoTreeView(): JQuery;
    kendoTreeView(options: kendo$kendo$ui.ui$TreeViewOptions): JQuery;
    kendo$data(key: "kendoTreeView"): kendo$kendo$ui.ui$TreeView;
    kendoUpload(): JQuery;
    kendoUpload(options: kendo$kendo$ui.ui$UploadOptions): JQuery;
    kendo$data(key: "kendoUpload"): kendo$kendo$ui.ui$Upload;
    kendoValidator(): JQuery;
    kendoValidator(options: kendo$kendo$ui.ui$ValidatorOptions): JQuery;
    kendo$data(key: "kendoValidator"): kendo$kendo$ui.ui$Validator;
    kendoWindow(): JQuery;
    kendoWindow(options: kendo$kendo$ui.ui$WindowOptions): JQuery;
    kendo$data(key: "kendoWindow"): kendo$kendo$ui.ui$Window;
  }
}
