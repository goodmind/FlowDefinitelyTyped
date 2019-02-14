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
    history: typeof kendo$history,

    Class: typeof kendo$Class,
    Observable: typeof kendo$Observable,
    View: typeof kendo$View,
    ViewContainer: typeof kendo$ViewContainer,
    Layout: typeof kendo$Layout,
    History: typeof kendo$History,
    Route: typeof kendo$Route,
    Router: typeof kendo$Router,
    Color: typeof kendo$Color,
    effects: typeof npm$namespace$kendo$effects,
    data: typeof npm$namespace$kendo$data,
    ui: typeof npm$namespace$kendo$ui,
    mobile: typeof npm$namespace$kendo$mobile,
    dataviz: typeof npm$namespace$kendo$dataviz,
    drawing: typeof npm$namespace$kendo$drawing,
    geometry: typeof npm$namespace$kendo$geometry,
    date: typeof npm$namespace$kendo$date,
    pdf: typeof npm$namespace$kendo$pdf,
    timezone: typeof npm$namespace$kendo$timezone,
    spreadsheet: typeof npm$namespace$kendo$spreadsheet,
    ooxml: typeof npm$namespace$kendo$ooxml
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
    [culture: string]: {
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

  declare function kendo$format(format: string, ...values: any[]): string;

  declare function kendo$fx(selector: string): effects$Element;

  declare function kendo$fx(element: drawing$Element): effects$Element;

  declare function kendo$fx(element: JQuery): effects$Element;

  declare function kendo$init(selector: string, ...namespaces: any[]): void;

  declare function kendo$init(element: JQuery, ...namespaces: any[]): void;

  declare function kendo$init(
    element: drawing$Element,
    ...namespaces: any[]
  ): void;

  declare function kendo$observable(data: any): kendo$dataObservableObject;

  declare function kendo$observableHierarchy(
    array: any[]
  ): kendo$dataObservableArray;

  declare function kendo$render(
    template: (data: any) => string,
    data: any[]
  ): string;

  declare function kendo$template(
    template: string,
    options?: kendo$TemplateOptions
  ): (data: any) => string;

  declare function kendo$guid(): string;

  declare function kendo$widgetInstance(
    element: JQuery,
    suite?: typeof kendo$ui
  ): kendo$uiWidget;

  declare function kendo$widgetInstance(
    element: JQuery,
    suite?: typeof kendo$mobileui
  ): kendo$uiWidget;

  declare function kendo$widgetInstance(
    element: JQuery,
    suite?: typeof kendo$datavizui
  ): kendo$uiWidget;

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

  declare class kendo$Observable mixins Class {
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
    wrap?: boolean;
    model?: Object;
    evalTemplate?: boolean;
    init?: (e: ui$ViewEvent) => void;
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
    init?: (e: ui$ViewInitEvent) => void;
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

  declare class kendo$View mixins Observable {
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

  declare class kendo$ViewContainer mixins Observable {
    view: kendo$View;
  }

  declare class kendo$Layout mixins View {
    containers: {
      [selector: string]: kendo$ViewContainer
    };
    showIn(selector: string, view: kendo$View, transitionClass?: string): void;
  }

  declare class kendo$History mixins Observable {
    current: string;
    root: string;
    start(options: Object): void;
    stop(): void;
    change(callback: Function): void;
    navigate(location: string, silent?: boolean): void;
  }

  declare var kendo$history: kendo$History;

  declare interface kendo$RouterOptions {
    init?: (e: kendo$RouterEvent) => void;
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
  } & RouterEvent;

  declare type kendo$RouterRouteMissingEvent = {
    params: any
  } & RouterEvent;

  declare class kendo$Route mixins Class {
    route: RegExp;
    callback(url: string): void;
    worksWith(url: string): void;
  }

  declare class kendo$Router mixins Observable {
    constructor(options?: kendo$RouterOptions): this;
    routes: kendo$Route[];
    init(options?: kendo$RouterOptions): void;
    start(): void;
    destroy(): void;
    route(route: string, callback: Function): void;
    navigate(location: string, silent?: boolean): void;
    replace(location: string, silent?: boolean): void;
  }

  declare var npm$namespace$kendo$effects: {
    box: typeof kendo$effects$box,
    fillScale: typeof kendo$effects$fillScale,
    fitScale: typeof kendo$effects$fitScale,
    transformOrigin: typeof kendo$effects$transformOrigin
  };
  declare function kendo$effects$box(element: HTMLElement): any;

  declare function kendo$effects$fillScale(
    firstElement: HTMLElement,
    secondElement: HTMLElement
  ): number;

  declare function kendo$effects$fitScale(
    firstElement: HTMLElement,
    secondElement: HTMLElement
  ): number;

  declare function kendo$effects$transformOrigin(
    firstElement: HTMLElement,
    secondElement: HTMLElement
  ): any;

  declare var npm$namespace$kendo$data: {
    transports: typeof npm$namespace$kendo$data$transports
  };

  declare var npm$namespace$kendo$data$transports: {
    odata: typeof kendo$data$transports$odata
  };
  declare var kendo$data$transports$odata: data$DataSourceTransport;

  declare var npm$namespace$kendo$ui: {
    Alert: typeof kendo$ui$Alert,
    AutoComplete: typeof kendo$ui$AutoComplete,
    Button: typeof kendo$ui$Button,
    ButtonGroup: typeof kendo$ui$ButtonGroup,
    Calendar: typeof kendo$ui$Calendar,
    Chat: typeof kendo$ui$Chat,
    ColorPalette: typeof kendo$ui$ColorPalette,
    ColorPicker: typeof kendo$ui$ColorPicker,
    ComboBox: typeof kendo$ui$ComboBox,
    Confirm: typeof kendo$ui$Confirm,
    ContextMenu: typeof kendo$ui$ContextMenu,
    DateInput: typeof kendo$ui$DateInput,
    DatePicker: typeof kendo$ui$DatePicker,
    DateRangePicker: typeof kendo$ui$DateRangePicker,
    DateTimePicker: typeof kendo$ui$DateTimePicker,
    Dialog: typeof kendo$ui$Dialog,
    DropDownList: typeof kendo$ui$DropDownList,
    DropDownTree: typeof kendo$ui$DropDownTree,
    Editor: typeof kendo$ui$Editor,
    FilterMenu: typeof kendo$ui$FilterMenu,
    FlatColorPicker: typeof kendo$ui$FlatColorPicker,
    Gantt: typeof kendo$ui$Gantt,
    Grid: typeof kendo$ui$Grid,
    ListBox: typeof kendo$ui$ListBox,
    ListView: typeof kendo$ui$ListView,
    MaskedTextBox: typeof kendo$ui$MaskedTextBox,
    MediaPlayer: typeof kendo$ui$MediaPlayer,
    Menu: typeof kendo$ui$Menu,
    MultiColumnComboBox: typeof kendo$ui$MultiColumnComboBox,
    MultiSelect: typeof kendo$ui$MultiSelect,
    MultiViewCalendar: typeof kendo$ui$MultiViewCalendar,
    Notification: typeof kendo$ui$Notification,
    NumericTextBox: typeof kendo$ui$NumericTextBox,
    Pager: typeof kendo$ui$Pager,
    PanelBar: typeof kendo$ui$PanelBar,
    PivotConfigurator: typeof kendo$ui$PivotConfigurator,
    PivotGrid: typeof kendo$ui$PivotGrid,
    Popup: typeof kendo$ui$Popup,
    ProgressBar: typeof kendo$ui$ProgressBar,
    Prompt: typeof kendo$ui$Prompt,
    RangeSlider: typeof kendo$ui$RangeSlider,
    ResponsivePanel: typeof kendo$ui$ResponsivePanel,
    Scheduler: typeof kendo$ui$Scheduler,
    ScrollView: typeof kendo$ui$ScrollView,
    Slider: typeof kendo$ui$Slider,
    Sortable: typeof kendo$ui$Sortable,
    Splitter: typeof kendo$ui$Splitter,
    Spreadsheet: typeof kendo$ui$Spreadsheet,
    Switch: typeof kendo$ui$Switch,
    TabStrip: typeof kendo$ui$TabStrip,
    TimePicker: typeof kendo$ui$TimePicker,
    ToolBar: typeof kendo$ui$ToolBar,
    Tooltip: typeof kendo$ui$Tooltip,
    Touch: typeof kendo$ui$Touch,
    TreeList: typeof kendo$ui$TreeList,
    TreeView: typeof kendo$ui$TreeView,
    Upload: typeof kendo$ui$Upload,
    Validator: typeof kendo$ui$Validator,
    Window: typeof kendo$ui$Window
  };
  declare class kendo$ui$Alert mixins undefined.Dialog {
    static fn: kendo$ui$Alert;
    options: ui$AlertOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Alert;
    constructor(element: drawing$Element, options?: ui$AlertOptions): this;
  }

  declare interface kendo$ui$AlertMessages {
    okText?: string;
  }

  declare interface kendo$ui$AlertOptions {
    name?: string;
    messages?: kendo$ui$AlertMessages;
  }

  declare interface kendo$ui$AlertEvent {
    sender: kendo$ui$Alert;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$ui$AutoComplete mixins undefined.Widget {
    static fn: kendo$ui$AutoComplete;
    options: ui$AutoCompleteOptions;
    dataSource: kendo$dataDataSource;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$AutoComplete;
    constructor(
      element: drawing$Element,
      options?: ui$AutoCompleteOptions
    ): this;
    close(): void;
    dataItem(index: number): any;
    dataItem(index: drawing$Element): any;
    dataItem(index: JQuery): any;
    destroy(): void;
    enable(enable: boolean): void;
    focus(): void;
    items(): any;
    readonly(readonly: boolean): void;
    refresh(): void;
    search(word: string): void;
    select(item: string): void;
    select(item: drawing$Element): void;
    select(item: JQuery): void;
    setDataSource(dataSource: kendo$dataDataSource): void;
    suggest(value: string): void;
    value(): string;
    value(value: string): void;
  }

  declare interface kendo$ui$AutoCompleteAnimationClose {
    duration?: number;
    effects?: string;
  }

  declare interface kendo$ui$AutoCompleteAnimationOpen {
    duration?: number;
    effects?: string;
  }

  declare interface kendo$ui$AutoCompleteAnimation {
    close?: kendo$ui$AutoCompleteAnimationClose;
    open?: kendo$ui$AutoCompleteAnimationOpen;
  }

  declare interface kendo$ui$AutoCompleteVirtual {
    itemHeight?: number;
    mapValueTo?: string;
    valueMapper?: Function;
  }

  declare interface kendo$ui$AutoCompleteOptions {
    name?: string;
    animation?: boolean | kendo$ui$AutoCompleteAnimation;
    autoWidth?: boolean;
    dataSource?: any | any | kendo$dataDataSource;
    clearButton?: boolean;
    dataTextField?: string;
    delay?: number;
    enable?: boolean;
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
    template?: string | Function;
    value?: string;
    valuePrimitive?: boolean;
    virtual?: boolean | kendo$ui$AutoCompleteVirtual;
    change?: (e: ui$AutoCompleteChangeEvent) => void;
    close?: (e: ui$AutoCompleteCloseEvent) => void;
    dataBound?: (e: ui$AutoCompleteDataBoundEvent) => void;
    filtering?: (e: ui$AutoCompleteFilteringEvent) => void;
    open?: (e: ui$AutoCompleteOpenEvent) => void;
    select?: (e: ui$AutoCompleteSelectEvent) => void;
  }

  declare interface kendo$ui$AutoCompleteEvent {
    sender: kendo$ui$AutoComplete;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$AutoCompleteChangeEvent = {} & AutoCompleteEvent;

  declare type kendo$ui$AutoCompleteCloseEvent = {} & AutoCompleteEvent;

  declare type kendo$ui$AutoCompleteDataBoundEvent = {} & AutoCompleteEvent;

  declare type kendo$ui$AutoCompleteFilteringEvent = {
    filter?: any
  } & AutoCompleteEvent;

  declare type kendo$ui$AutoCompleteOpenEvent = {} & AutoCompleteEvent;

  declare type kendo$ui$AutoCompleteSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & AutoCompleteEvent;

  declare class kendo$ui$Button mixins undefined.Widget {
    static fn: kendo$ui$Button;
    options: ui$ButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Button;
    constructor(element: drawing$Element, options?: ui$ButtonOptions): this;
    enable(toggle: boolean): void;
  }

  declare interface kendo$ui$ButtonOptions {
    name?: string;
    enable?: boolean;
    icon?: string;
    iconClass?: string;
    imageUrl?: string;
    spriteCssClass?: string;
    click?: (e: ui$ButtonClickEvent) => void;
    name?: string;
    badge?: string;
    clickOn?: string;
    enable?: boolean;
    icon?: string;
    click?: (e: ui$ButtonClickEvent) => void;
  }

  declare interface kendo$ui$ButtonEvent {
    sender: kendo$ui$Button;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$ui$Button;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ButtonClickEvent = {
    event?: any,
    target?: JQuery,
    button?: JQuery
  } & ButtonEvent;

  declare class kendo$ui$ButtonGroup mixins undefined.Widget {
    static fn: kendo$ui$ButtonGroup;
    options: ui$ButtonGroupOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ButtonGroup;
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
    enable(enable: boolean): void;
    select(li: JQuery): void;
    select(li: number): void;
    selectedIndices: Array<number>;
  }

  declare interface kendo$ui$ButtonGroupItem {
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

  declare interface kendo$ui$ButtonGroupOptions {
    name?: string;
    enable?: boolean;
    index?: number;
    selection?: string;
    items?: kendo$ui$ButtonGroupItem[];
    select?: (e: ui$ButtonGroupSelectEvent) => void;
    name?: string;
    enable?: boolean;
    index?: number;
    selectOn?: string;
    select?: (e: ui$ButtonGroupSelectEvent) => void;
  }

  declare interface kendo$ui$ButtonGroupEvent {
    sender: kendo$ui$ButtonGroup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$ui$ButtonGroup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ButtonGroupSelectEvent = {
    indices?: any,
    index?: number
  } & ButtonGroupEvent;

  declare class kendo$ui$Calendar mixins undefined.Widget {
    static fn: kendo$ui$Calendar;
    options: ui$CalendarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Calendar;
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

  declare interface kendo$ui$CalendarMessages {
    weekColumnHeader?: string;
  }

  declare interface kendo$ui$CalendarMonth {
    content?: string;
    weekNumber?: string;
    empty?: string;
  }

  declare interface kendo$ui$CalendarOptions {
    name?: string;
    culture?: string;
    dates?: any;
    depth?: string;
    disableDates?: any | Function;
    footer?: boolean | string | Function;
    format?: string;
    max?: Date;
    messages?: kendo$ui$CalendarMessages;
    min?: Date;
    month?: kendo$ui$CalendarMonth;
    selectable?: string;
    selectDates?: any;
    weekNumber?: boolean;
    start?: string;
    value?: Date;
    change?: (e: ui$CalendarEvent) => void;
    navigate?: (e: ui$CalendarEvent) => void;
  }

  declare interface kendo$ui$CalendarEvent {
    sender: kendo$ui$Calendar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$ui$Chat mixins undefined.Widget {
    static fn: kendo$ui$Chat;
    options: ui$ChatOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Chat;
    constructor(element: drawing$Element, options?: ui$ChatOptions): this;
    getUser(): any;
    postMessage(message: string): void;
    renderAttachments(options: any, sender: any): void;
    renderMessage(message: any, sender: any): void;
    renderSuggestedActions(suggestedActions: any): void;
  }

  declare interface kendo$ui$ChatMessages {
    placeholder?: string;
  }

  declare interface kendo$ui$ChatUser {
    iconUrl?: string;
    name?: string;
  }

  declare interface kendo$ui$ChatRenderAttachmentsOptionsAttachments {
    content?: any;
    contentType?: string;
  }

  declare interface kendo$ui$ChatRenderAttachmentsOptions {
    attachments?: kendo$ui$ChatRenderAttachmentsOptionsAttachments;
    attachmentLayout?: string;
  }

  declare interface kendo$ui$ChatRenderAttachmentsSender {
    id?: any;
    name?: string;
    iconUrl?: string;
  }

  declare interface kendo$ui$ChatRenderMessageMessage {
    type?: string;
    text?: string;
  }

  declare interface kendo$ui$ChatRenderMessageSender {
    id?: any;
    name?: string;
    iconUrl?: string;
  }

  declare interface kendo$ui$ChatRenderSuggestedActionsSuggestedActions {
    title?: string;
    value?: string;
  }

  declare interface kendo$ui$ChatOptions {
    name?: string;
    messages?: kendo$ui$ChatMessages;
    user?: kendo$ui$ChatUser;
    actionClick?: (e: ui$ChatActionClickEvent) => void;
    post?: (e: ui$ChatPostEvent) => void;
    sendMessage?: (e: ui$ChatSendMessageEvent) => void;
    typingEnd?: (e: ui$ChatTypingEndEvent) => void;
    typingStart?: (e: ui$ChatTypingStartEvent) => void;
  }

  declare interface kendo$ui$ChatEvent {
    sender: kendo$ui$Chat;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ChatActionClickEvent = {
    text?: string
  } & ChatEvent;

  declare type kendo$ui$ChatPostEvent = {
    text?: string,
    timestamp?: Date,
    from?: any
  } & ChatEvent;

  declare type kendo$ui$ChatSendMessageEvent = {
    text?: string
  } & ChatEvent;

  declare type kendo$ui$ChatTypingEndEvent = {} & ChatEvent;

  declare type kendo$ui$ChatTypingStartEvent = {} & ChatEvent;

  declare class kendo$ui$ColorPalette mixins undefined.Widget {
    static fn: kendo$ui$ColorPalette;
    options: ui$ColorPaletteOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ColorPalette;
    constructor(
      element: drawing$Element,
      options?: ui$ColorPaletteOptions
    ): this;
    value(): string;
    value(color?: string): void;
    color(): kendo$Color;
    color(color?: kendo$Color): void;
    enable(enable?: boolean): void;
  }

  declare interface kendo$ui$ColorPaletteTileSize {
    width?: number;
    height?: number;
  }

  declare interface kendo$ui$ColorPaletteOptions {
    name?: string;
    palette?: string | any;
    columns?: number;
    tileSize?: kendo$ui$ColorPaletteTileSize;
    value?: string;
    change?: (e: ui$ColorPaletteEvent) => void;
  }

  declare interface kendo$ui$ColorPaletteEvent {
    sender: kendo$ui$ColorPalette;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$ui$ColorPicker mixins undefined.Widget {
    static fn: kendo$ui$ColorPicker;
    options: ui$ColorPickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ColorPicker;
    constructor(
      element: drawing$Element,
      options?: ui$ColorPickerOptions
    ): this;
    close(): void;
    open(): void;
    toggle(): void;
    value(): string;
    value(color?: string): void;
    color(): kendo$Color;
    color(color?: kendo$Color): void;
    enable(enable?: boolean): void;
  }

  declare interface kendo$ui$ColorPickerMessages {
    apply?: string;
    cancel?: string;
    previewInput?: string;
  }

  declare interface kendo$ui$ColorPickerTileSize {
    width?: number;
    height?: number;
  }

  declare interface kendo$ui$ColorPickerOptions {
    name?: string;
    buttons?: boolean;
    clearButton?: boolean;
    columns?: number;
    tileSize?: kendo$ui$ColorPickerTileSize;
    messages?: kendo$ui$ColorPickerMessages;
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

  declare interface kendo$ui$ColorPickerEvent {
    sender: kendo$ui$ColorPicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ColorPickerChangeEvent = {
    value?: string
  } & ColorPickerEvent;

  declare type kendo$ui$ColorPickerSelectEvent = {
    value?: string
  } & ColorPickerEvent;

  declare class kendo$ui$ComboBox mixins undefined.Widget {
    static fn: kendo$ui$ComboBox;
    options: ui$ComboBoxOptions;
    dataSource: kendo$dataDataSource;
    input: JQuery;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ComboBox;
    constructor(element: drawing$Element, options?: ui$ComboBoxOptions): this;
    close(): void;
    dataItem(index?: number): any;
    destroy(): void;
    enable(enable: boolean): void;
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
    setDataSource(dataSource: kendo$dataDataSource): void;
    suggest(value: string): void;
    text(): string;
    text(text: string): void;
    toggle(toggle: boolean): void;
    value(): string;
    value(value: string): void;
  }

  declare interface kendo$ui$ComboBoxAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$ComboBoxAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$ComboBoxAnimation {
    close?: kendo$ui$ComboBoxAnimationClose;
    open?: kendo$ui$ComboBoxAnimationOpen;
  }

  declare interface kendo$ui$ComboBoxPopup {
    appendTo?: string;
    origin?: string;
    position?: string;
  }

  declare interface kendo$ui$ComboBoxVirtual {
    itemHeight?: number;
    mapValueTo?: string;
    valueMapper?: Function;
  }

  declare interface kendo$ui$ComboBoxOptions {
    name?: string;
    animation?: kendo$ui$ComboBoxAnimation;
    autoBind?: boolean;
    autoWidth?: boolean;
    cascadeFrom?: string;
    cascadeFromField?: string;
    clearButton?: boolean;
    dataSource?: any | any | kendo$dataDataSource;
    dataTextField?: string;
    dataValueField?: string;
    delay?: number;
    enable?: boolean;
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
    popup?: kendo$ui$ComboBoxPopup;
    suggest?: boolean;
    syncValueAndText?: boolean;
    headerTemplate?: string | Function;
    template?: string | Function;
    text?: string;
    value?: string;
    valuePrimitive?: boolean;
    virtual?: boolean | kendo$ui$ComboBoxVirtual;
    change?: (e: ui$ComboBoxChangeEvent) => void;
    close?: (e: ui$ComboBoxCloseEvent) => void;
    dataBound?: (e: ui$ComboBoxDataBoundEvent) => void;
    filtering?: (e: ui$ComboBoxFilteringEvent) => void;
    open?: (e: ui$ComboBoxOpenEvent) => void;
    select?: (e: ui$ComboBoxSelectEvent) => void;
    cascade?: (e: ui$ComboBoxCascadeEvent) => void;
  }

  declare interface kendo$ui$ComboBoxEvent {
    sender: kendo$ui$ComboBox;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ComboBoxChangeEvent = {} & ComboBoxEvent;

  declare type kendo$ui$ComboBoxCloseEvent = {} & ComboBoxEvent;

  declare type kendo$ui$ComboBoxDataBoundEvent = {} & ComboBoxEvent;

  declare type kendo$ui$ComboBoxFilteringEvent = {
    filter?: any
  } & ComboBoxEvent;

  declare type kendo$ui$ComboBoxOpenEvent = {} & ComboBoxEvent;

  declare type kendo$ui$ComboBoxSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & ComboBoxEvent;

  declare type kendo$ui$ComboBoxCascadeEvent = {} & ComboBoxEvent;

  declare class kendo$ui$Confirm mixins undefined.Dialog {
    static fn: kendo$ui$Confirm;
    options: ui$ConfirmOptions;
    result: JQueryPromise<any>;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Confirm;
    constructor(element: drawing$Element, options?: ui$ConfirmOptions): this;
  }

  declare interface kendo$ui$ConfirmMessages {
    okText?: string;
    cancel?: string;
  }

  declare interface kendo$ui$ConfirmOptions {
    name?: string;
    messages?: kendo$ui$ConfirmMessages;
  }

  declare interface kendo$ui$ConfirmEvent {
    sender: kendo$ui$Confirm;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$ui$ContextMenu mixins undefined.Widget {
    static fn: kendo$ui$ContextMenu;
    options: ui$ContextMenuOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ContextMenu;
    constructor(
      element: drawing$Element,
      options?: ui$ContextMenuOptions
    ): this;
    append(item: any, referenceItem?: string): kendo$uiContextMenu;
    append(item: any, referenceItem?: JQuery): kendo$uiContextMenu;
    close(element: drawing$Element): kendo$uiContextMenu;
    close(element: JQuery): kendo$uiContextMenu;
    destroy(): void;
    enable(element: string, enable: boolean): kendo$uiContextMenu;
    enable(element: drawing$Element, enable: boolean): kendo$uiContextMenu;
    enable(element: JQuery, enable: boolean): kendo$uiContextMenu;
    insertAfter(item: any, referenceItem: string): kendo$uiContextMenu;
    insertAfter(item: any, referenceItem: drawing$Element): kendo$uiContextMenu;
    insertAfter(item: any, referenceItem: JQuery): kendo$uiContextMenu;
    insertBefore(item: any, referenceItem: string): kendo$uiContextMenu;
    insertBefore(
      item: any,
      referenceItem: drawing$Element
    ): kendo$uiContextMenu;
    insertBefore(item: any, referenceItem: JQuery): kendo$uiContextMenu;
    open(x: number, y?: number): kendo$uiContextMenu;
    open(x: drawing$Element, y?: number): kendo$uiContextMenu;
    open(x: JQuery, y?: number): kendo$uiContextMenu;
    remove(element: string): kendo$uiContextMenu;
    remove(element: drawing$Element): kendo$uiContextMenu;
    remove(element: JQuery): kendo$uiContextMenu;
  }

  declare interface kendo$ui$ContextMenuAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$ContextMenuAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$ContextMenuAnimation {
    close?: kendo$ui$ContextMenuAnimationClose;
    open?: kendo$ui$ContextMenuAnimationOpen;
  }

  declare interface kendo$ui$ContextMenuOptions {
    name?: string;
    alignToAnchor?: boolean;
    animation?: boolean | kendo$ui$ContextMenuAnimation;
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

  declare interface kendo$ui$ContextMenuEvent {
    sender: kendo$ui$ContextMenu;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ContextMenuCloseEvent = {
    item?: drawing$Element,
    type?: string,
    target?: drawing$Element,
    event?: JQueryEventObject
  } & ContextMenuEvent;

  declare type kendo$ui$ContextMenuOpenEvent = {
    item?: drawing$Element,
    type?: string,
    target?: drawing$Element,
    event?: JQueryEventObject
  } & ContextMenuEvent;

  declare type kendo$ui$ContextMenuActivateEvent = {
    item?: drawing$Element,
    type?: string,
    target?: drawing$Element
  } & ContextMenuEvent;

  declare type kendo$ui$ContextMenuDeactivateEvent = {
    item?: drawing$Element,
    type?: string,
    target?: drawing$Element
  } & ContextMenuEvent;

  declare type kendo$ui$ContextMenuSelectEvent = {
    item?: drawing$Element,
    type?: string,
    target?: drawing$Element
  } & ContextMenuEvent;

  declare class kendo$ui$DateInput mixins undefined.Widget {
    static fn: kendo$ui$DateInput;
    options: ui$DateInputOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DateInput;
    constructor(element: drawing$Element, options?: ui$DateInputOptions): this;
    destroy(): void;
    enable(enable: boolean): void;
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

  declare interface kendo$ui$DateInputMessages {
    year?: string;
    month?: string;
    day?: string;
    weekday?: string;
    hour?: string;
    minute?: string;
    second?: string;
    dayperiod?: string;
  }

  declare interface kendo$ui$DateInputOptions {
    name?: string;
    format?: string;
    max?: Date;
    min?: Date;
    value?: Date;
    messages?: kendo$ui$DateInputMessages;
    change?: (e: ui$DateInputChangeEvent) => void;
  }

  declare interface kendo$ui$DateInputEvent {
    sender: kendo$ui$DateInput;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$DateInputChangeEvent = {} & DateInputEvent;

  declare class kendo$ui$DatePicker mixins undefined.Widget {
    static fn: kendo$ui$DatePicker;
    options: ui$DatePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DatePicker;
    constructor(element: drawing$Element, options?: ui$DatePickerOptions): this;
    close(): void;
    destroy(): void;
    enable(enable: boolean): void;
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

  declare interface kendo$ui$DatePickerAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$DatePickerAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$DatePickerAnimation {
    close?: kendo$ui$DatePickerAnimationClose;
    open?: kendo$ui$DatePickerAnimationOpen;
  }

  declare interface kendo$ui$DatePickerMonth {
    content?: string;
    weekNumber?: string;
    empty?: string;
  }

  declare interface kendo$ui$DatePickerOptions {
    name?: string;
    animation?: boolean | kendo$ui$DatePickerAnimation;
    ARIATemplate?: string;
    culture?: string;
    dateInput?: boolean;
    dates?: any;
    depth?: string;
    disableDates?: any | Function;
    footer?: boolean | string | Function;
    format?: string;
    max?: Date;
    min?: Date;
    month?: kendo$ui$DatePickerMonth;
    weekNumber?: boolean;
    parseFormats?: any;
    start?: string;
    value?: Date;
    change?: (e: ui$DatePickerChangeEvent) => void;
    close?: (e: ui$DatePickerCloseEvent) => void;
    open?: (e: ui$DatePickerOpenEvent) => void;
  }

  declare interface kendo$ui$DatePickerEvent {
    sender: kendo$ui$DatePicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$DatePickerChangeEvent = {} & DatePickerEvent;

  declare type kendo$ui$DatePickerCloseEvent = {} & DatePickerEvent;

  declare type kendo$ui$DatePickerOpenEvent = {} & DatePickerEvent;

  declare class kendo$ui$DateRangePicker mixins undefined.Widget {
    static fn: kendo$ui$DateRangePicker;
    options: ui$DateRangePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DateRangePicker;
    constructor(
      element: drawing$Element,
      options?: ui$DateRangePickerOptions
    ): this;
    close(): void;
    destroy(): void;
    enable(enable: boolean): void;
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

  declare interface kendo$ui$DateRangePickerMessages {
    startLabel?: string;
    endLabel?: string;
  }

  declare interface kendo$ui$DateRangePickerMonth {
    content?: string;
    weekNumber?: string;
    empty?: string;
  }

  declare interface kendo$ui$DateRangePickerRange {
    start?: Date;
    end?: Date;
  }

  declare interface kendo$ui$DateRangePickerOptions {
    name?: string;
    ARIATemplate?: string;
    culture?: string;
    dates?: any;
    depth?: string;
    disableDates?: any | Function;
    footer?: string | Function;
    format?: string;
    max?: Date;
    messages?: kendo$ui$DateRangePickerMessages;
    min?: Date;
    month?: kendo$ui$DateRangePickerMonth;
    labels?: boolean;
    weekNumber?: boolean;
    range?: kendo$ui$DateRangePickerRange;
    start?: string;
    change?: (e: ui$DateRangePickerChangeEvent) => void;
    close?: (e: ui$DateRangePickerCloseEvent) => void;
    open?: (e: ui$DateRangePickerOpenEvent) => void;
  }

  declare interface kendo$ui$DateRangePickerEvent {
    sender: kendo$ui$DateRangePicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$DateRangePickerChangeEvent = {} & DateRangePickerEvent;

  declare type kendo$ui$DateRangePickerCloseEvent = {} & DateRangePickerEvent;

  declare type kendo$ui$DateRangePickerOpenEvent = {} & DateRangePickerEvent;

  declare class kendo$ui$DateTimePicker mixins undefined.Widget {
    static fn: kendo$ui$DateTimePicker;
    options: ui$DateTimePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DateTimePicker;
    constructor(
      element: drawing$Element,
      options?: ui$DateTimePickerOptions
    ): this;
    close(view: string): void;
    destroy(): void;
    enable(enable: boolean): void;
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

  declare interface kendo$ui$DateTimePickerAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$DateTimePickerAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$DateTimePickerAnimation {
    close?: kendo$ui$DateTimePickerAnimationClose;
    open?: kendo$ui$DateTimePickerAnimationOpen;
  }

  declare interface kendo$ui$DateTimePickerMonth {
    content?: string;
    weekNumber?: string;
    empty?: string;
  }

  declare interface kendo$ui$DateTimePickerOptions {
    name?: string;
    animation?: boolean | kendo$ui$DateTimePickerAnimation;
    ARIATemplate?: string;
    culture?: string;
    dateInput?: boolean;
    dates?: any;
    depth?: string;
    disableDates?: any | Function;
    footer?: boolean | string | Function;
    format?: string;
    interval?: number;
    max?: Date;
    min?: Date;
    month?: kendo$ui$DateTimePickerMonth;
    weekNumber?: boolean;
    parseFormats?: any;
    start?: string;
    timeFormat?: string;
    value?: Date;
    change?: (e: ui$DateTimePickerChangeEvent) => void;
    close?: (e: ui$DateTimePickerCloseEvent) => void;
    open?: (e: ui$DateTimePickerOpenEvent) => void;
  }

  declare interface kendo$ui$DateTimePickerEvent {
    sender: kendo$ui$DateTimePicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$DateTimePickerChangeEvent = {} & DateTimePickerEvent;

  declare type kendo$ui$DateTimePickerCloseEvent = {
    view?: string
  } & DateTimePickerEvent;

  declare type kendo$ui$DateTimePickerOpenEvent = {
    view?: string
  } & DateTimePickerEvent;

  declare class kendo$ui$Dialog mixins undefined.Widget {
    static fn: kendo$ui$Dialog;
    options: any;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Dialog;
    constructor(element: drawing$Element, options?: ui$DialogOptions): this;
    close(): kendo$uiDialog;
    content(): string;
    content(content?: string): kendo$uiDialog;
    content(content?: JQuery): kendo$uiDialog;
    destroy(): void;
    open(): kendo$uiDialog;
    title(): string;
    title(text?: string): kendo$uiDialog;
    toFront(): kendo$uiDialog;
  }

  declare interface kendo$ui$DialogAction {
    text?: string;
    action?: Function;
    primary?: boolean;
  }

  declare interface kendo$ui$DialogAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$DialogAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$DialogAnimation {
    close?: kendo$ui$DialogAnimationClose;
    open?: kendo$ui$DialogAnimationOpen;
  }

  declare interface kendo$ui$DialogMessages {
    close?: string;
    promptInput?: string;
  }

  declare interface kendo$ui$DialogModal {
    preventScroll?: string;
  }

  declare interface kendo$ui$DialogOptions {
    name?: string;
    actions?: kendo$ui$DialogAction[];
    animation?: boolean | kendo$ui$DialogAnimation;
    buttonLayout?: string;
    closable?: boolean;
    content?: string;
    height?: number | string;
    maxHeight?: number;
    maxWidth?: number;
    messages?: kendo$ui$DialogMessages;
    minHeight?: number;
    minWidth?: number;
    modal?: boolean | kendo$ui$DialogModal;
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

  declare interface kendo$ui$DialogEvent {
    sender: kendo$ui$Dialog;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$DialogCloseEvent = {
    userTriggered?: boolean
  } & DialogEvent;

  declare class kendo$ui$DropDownList mixins undefined.Widget {
    static fn: kendo$ui$DropDownList;
    options: ui$DropDownListOptions;
    dataSource: kendo$dataDataSource;
    span: JQuery;
    filterInput: JQuery;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DropDownList;
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
    enable(enable: boolean): void;
    open(): void;
    readonly(readonly: boolean): void;
    refresh(): void;
    search(word: string): void;
    select(): number;
    select(li: JQuery): void;
    select(li: number): void;
    select(li: Function): void;
    setDataSource(dataSource: kendo$dataDataSource): void;
    text(): string;
    text(text: string): void;
    toggle(toggle: boolean): void;
    value(): string;
    value(value: string): void;
  }

  declare interface kendo$ui$DropDownListAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$DropDownListAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$DropDownListAnimation {
    close?: kendo$ui$DropDownListAnimationClose;
    open?: kendo$ui$DropDownListAnimationOpen;
  }

  declare interface kendo$ui$DropDownListPopup {
    appendTo?: string;
    origin?: string;
    position?: string;
  }

  declare interface kendo$ui$DropDownListVirtual {
    itemHeight?: number;
    mapValueTo?: string;
    valueMapper?: Function;
  }

  declare interface kendo$ui$DropDownListOptions {
    name?: string;
    animation?: boolean | kendo$ui$DropDownListAnimation;
    autoBind?: boolean;
    autoWidth?: boolean;
    cascadeFrom?: string;
    cascadeFromField?: string;
    dataSource?: any | any | kendo$dataDataSource;
    dataTextField?: string;
    dataValueField?: string;
    delay?: number;
    enable?: boolean;
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
    popup?: kendo$ui$DropDownListPopup;
    optionLabel?: string | any;
    optionLabelTemplate?: string | Function;
    headerTemplate?: string | Function;
    template?: string | Function;
    valueTemplate?: string | Function;
    text?: string;
    value?: string;
    valuePrimitive?: boolean;
    virtual?: boolean | kendo$ui$DropDownListVirtual;
    change?: (e: ui$DropDownListChangeEvent) => void;
    close?: (e: ui$DropDownListCloseEvent) => void;
    dataBound?: (e: ui$DropDownListDataBoundEvent) => void;
    filtering?: (e: ui$DropDownListFilteringEvent) => void;
    open?: (e: ui$DropDownListOpenEvent) => void;
    select?: (e: ui$DropDownListSelectEvent) => void;
    cascade?: (e: ui$DropDownListCascadeEvent) => void;
  }

  declare interface kendo$ui$DropDownListEvent {
    sender: kendo$ui$DropDownList;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$DropDownListChangeEvent = {} & DropDownListEvent;

  declare type kendo$ui$DropDownListCloseEvent = {} & DropDownListEvent;

  declare type kendo$ui$DropDownListDataBoundEvent = {} & DropDownListEvent;

  declare type kendo$ui$DropDownListFilteringEvent = {
    filter?: any
  } & DropDownListEvent;

  declare type kendo$ui$DropDownListOpenEvent = {} & DropDownListEvent;

  declare type kendo$ui$DropDownListSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & DropDownListEvent;

  declare type kendo$ui$DropDownListCascadeEvent = {} & DropDownListEvent;

  declare class kendo$ui$DropDownTree mixins undefined.Widget {
    static fn: kendo$ui$DropDownTree;
    options: ui$DropDownTreeOptions;
    dataSource: kendo$dataDataSource;
    tagList: JQuery;
    tree: JQuery;
    treeview: kendo$uiTreeView;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DropDownTree;
    constructor(
      element: drawing$Element,
      options?: ui$DropDownTreeOptions
    ): this;
    close(): void;
    destroy(): void;
    enable(enable: boolean): void;
    focus(): void;
    items(): any;
    open(): void;
    readonly(readonly: boolean): void;
    refresh(): void;
    search(word: string): void;
    setDataSource(dataSource: kendo$dataHierarchicalDataSource): void;
    toggle(toggle?: boolean): void;
    value(): any;
    value(value: any): void;
    value(value: string): void;
  }

  declare interface kendo$ui$DropDownTreeAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$DropDownTreeAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$DropDownTreeAnimation {
    close?: kendo$ui$DropDownTreeAnimationClose;
    open?: kendo$ui$DropDownTreeAnimationOpen;
  }

  declare interface kendo$ui$DropDownTreeCheckboxes {
    checkChildren?: boolean;
    name?: string;
    template?: string | Function;
  }

  declare interface kendo$ui$DropDownTreeMessages {
    clear?: string;
    deleteTag?: string;
    singleTag?: string;
  }

  declare interface kendo$ui$DropDownTreePopup {
    appendTo?: string;
    origin?: string;
    position?: string;
  }

  declare interface kendo$ui$DropDownTreeOptions {
    name?: string;
    animation?: boolean | kendo$ui$DropDownTreeAnimation;
    autoBind?: boolean;
    autoClose?: boolean;
    autoWidth?: boolean;
    checkAll?: boolean;
    checkAllTemplate?: string | Function;
    checkboxes?: boolean | kendo$ui$DropDownTreeCheckboxes;
    clearButton?: boolean;
    dataImageUrlField?: string;
    dataSource?: any | any | kendo$dataHierarchicalDataSource;
    dataSpriteCssClassField?: string;
    dataTextField?: string | any;
    dataUrlField?: string;
    dataValueField?: string | any;
    delay?: number;
    enable?: boolean;
    enforceMinLength?: boolean;
    filter?: string;
    footerTemplate?: string | Function;
    height?: string | number;
    ignoreCase?: boolean;
    loadOnDemand?: boolean;
    messages?: kendo$ui$DropDownTreeMessages;
    minLength?: number;
    noDataTemplate?: string | Function;
    placeholder?: string;
    popup?: kendo$ui$DropDownTreePopup;
    headerTemplate?: string | Function;
    valueTemplate?: string | Function;
    tagMode?: string;
    template?: string | Function;
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

  declare interface kendo$ui$DropDownTreeEvent {
    sender: kendo$ui$DropDownTree;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$DropDownTreeChangeEvent = {} & DropDownTreeEvent;

  declare type kendo$ui$DropDownTreeCloseEvent = {} & DropDownTreeEvent;

  declare type kendo$ui$DropDownTreeDataBoundEvent = {} & DropDownTreeEvent;

  declare type kendo$ui$DropDownTreeFilteringEvent = {
    filter?: any
  } & DropDownTreeEvent;

  declare type kendo$ui$DropDownTreeOpenEvent = {} & DropDownTreeEvent;

  declare type kendo$ui$DropDownTreeSelectEvent = {
    node?: drawing$Element
  } & DropDownTreeEvent;

  declare class kendo$ui$Editor mixins undefined.Widget {
    static fn: kendo$ui$Editor;
    options: ui$EditorOptions;
    body: drawing$Element;
    toolbar: kendo$uieditorToolbar;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Editor;
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

  declare interface kendo$ui$EditorDeserialization {
    custom?: Function;
  }

  declare interface kendo$ui$EditorFileBrowserMessages {
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

  declare interface kendo$ui$EditorFileBrowserSchemaModelFieldsName {
    field?: string;
    parse?: Function;
  }

  declare interface kendo$ui$EditorFileBrowserSchemaModelFieldsSize {
    field?: string;
    parse?: Function;
  }

  declare interface kendo$ui$EditorFileBrowserSchemaModelFieldsType {
    parse?: Function;
    field?: string;
  }

  declare interface kendo$ui$EditorFileBrowserSchemaModelFields {
    name?: string | kendo$ui$EditorFileBrowserSchemaModelFieldsName;
    type?: string | kendo$ui$EditorFileBrowserSchemaModelFieldsType;
    size?: string | kendo$ui$EditorFileBrowserSchemaModelFieldsSize;
  }

  declare interface kendo$ui$EditorFileBrowserSchemaModel {
    id?: string;
    fields?: kendo$ui$EditorFileBrowserSchemaModelFields;
  }

  declare interface kendo$ui$EditorFileBrowserSchema {}

  declare interface kendo$ui$EditorFileBrowserTransportCreate {
    contentType?: string;
    data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface kendo$ui$EditorFileBrowserTransportDestroy {
    contentType?: string;
    data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface kendo$ui$EditorFileBrowserTransportRead {
    contentType?: string;
    data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface kendo$ui$EditorFileBrowserTransport {
    read?: string | Function | kendo$ui$EditorFileBrowserTransportRead;
    uploadUrl?: string;
    fileUrl?: string | Function;
    destroy?: string | kendo$ui$EditorFileBrowserTransportDestroy;
    create?: string | kendo$ui$EditorFileBrowserTransportCreate;
  }

  declare interface kendo$ui$EditorFileBrowser {
    fileTypes?: string;
    path?: string;
    transport?: kendo$ui$EditorFileBrowserTransport;
    schema?: kendo$ui$EditorFileBrowserSchema;
    messages?: kendo$ui$EditorFileBrowserMessages;
  }

  declare interface kendo$ui$EditorImageBrowserMessages {
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

  declare interface kendo$ui$EditorImageBrowserSchemaModelFieldsName {
    field?: string;
    parse?: Function;
  }

  declare interface kendo$ui$EditorImageBrowserSchemaModelFieldsSize {
    field?: string;
    parse?: Function;
  }

  declare interface kendo$ui$EditorImageBrowserSchemaModelFieldsType {
    parse?: Function;
    field?: string;
  }

  declare interface kendo$ui$EditorImageBrowserSchemaModelFields {
    name?: string | kendo$ui$EditorImageBrowserSchemaModelFieldsName;
    type?: string | kendo$ui$EditorImageBrowserSchemaModelFieldsType;
    size?: string | kendo$ui$EditorImageBrowserSchemaModelFieldsSize;
  }

  declare interface kendo$ui$EditorImageBrowserSchemaModel {
    id?: string;
    fields?: kendo$ui$EditorImageBrowserSchemaModelFields;
  }

  declare interface kendo$ui$EditorImageBrowserSchema {}

  declare interface kendo$ui$EditorImageBrowserTransportCreate {
    contentType?: string;
    data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface kendo$ui$EditorImageBrowserTransportDestroy {
    contentType?: string;
    data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface kendo$ui$EditorImageBrowserTransportRead {
    contentType?: string;
    data?: any | string | Function;
    dataType?: string;
    type?: string;
    url?: string | Function;
  }

  declare interface kendo$ui$EditorImageBrowserTransport {
    read?: string | Function | kendo$ui$EditorImageBrowserTransportRead;
    thumbnailUrl?: string | Function;
    uploadUrl?: string;
    imageUrl?: string | Function;
    destroy?: string | kendo$ui$EditorImageBrowserTransportDestroy;
    create?: string | kendo$ui$EditorImageBrowserTransportCreate;
  }

  declare interface kendo$ui$EditorImageBrowser {
    fileTypes?: string;
    path?: string;
    transport?: kendo$ui$EditorImageBrowserTransport;
    schema?: kendo$ui$EditorImageBrowserSchema;
    messages?: kendo$ui$EditorImageBrowserMessages;
  }

  declare interface kendo$ui$EditorImmutables {
    deserialization?: Function;
    serialization?: string | Function;
  }

  declare interface kendo$ui$EditorMessages {
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

  declare interface kendo$ui$EditorPasteCleanup {
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

  declare interface kendo$ui$EditorPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface kendo$ui$EditorPdf {
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: kendo$ui$EditorPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface kendo$ui$EditorResizable {
    content?: boolean;
    min?: number;
    max?: number;
    toolbar?: boolean;
  }

  declare interface kendo$ui$EditorSerialization {
    custom?: Function;
    entities?: boolean;
    scripts?: boolean;
    semantic?: boolean;
  }

  declare interface kendo$ui$EditorToolItem {
    text?: string;
    value?: string;
    context?: string;
  }

  declare interface kendo$ui$EditorTool {
    name?: string;
    tooltip?: string;
    exec?: Function;
    items?: kendo$ui$EditorToolItem[];
    palette?: string | any;
    columns?: number;
    template?: string;
  }

  declare interface kendo$ui$EditorExecParams {
    value?: any;
  }

  declare interface kendo$ui$EditorPasteOptions {
    split?: boolean;
  }

  declare interface kendo$ui$EditorOptions {
    name?: string;
    placeholder?: string;
    deserialization?: kendo$ui$EditorDeserialization;
    domain?: string;
    encoded?: boolean;
    immutables?: boolean | kendo$ui$EditorImmutables;
    messages?: kendo$ui$EditorMessages;
    pasteCleanup?: kendo$ui$EditorPasteCleanup;
    pdf?: kendo$ui$EditorPdf;
    resizable?: boolean | kendo$ui$EditorResizable;
    serialization?: kendo$ui$EditorSerialization;
    stylesheets?: any;
    tools?: kendo$ui$EditorTool[];
    imageBrowser?: kendo$ui$EditorImageBrowser;
    fileBrowser?: kendo$ui$EditorFileBrowser;
    change?: (e: ui$EditorEvent) => void;
    execute?: (e: ui$EditorExecuteEvent) => void;
    keydown?: (e: ui$EditorEvent) => void;
    keyup?: (e: ui$EditorEvent) => void;
    paste?: (e: ui$EditorPasteEvent) => void;
    pdfExport?: (e: ui$EditorPdfExportEvent) => void;
    select?: (e: ui$EditorEvent) => void;
  }

  declare interface kendo$ui$EditorEvent {
    sender: kendo$ui$Editor;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$EditorExecuteEvent = {
    name?: string,
    command?: any
  } & EditorEvent;

  declare type kendo$ui$EditorPasteEvent = {
    html?: any
  } & EditorEvent;

  declare type kendo$ui$EditorPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & EditorEvent;

  declare class kendo$ui$FilterMenu mixins undefined.Widget {
    static fn: kendo$ui$FilterMenu;
    options: ui$FilterMenuOptions;
    field: string;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$FilterMenu;
    constructor(element: drawing$Element, options?: ui$FilterMenuOptions): this;
    clear(): void;
  }

  declare interface kendo$ui$FilterMenuMessages {
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

  declare interface kendo$ui$FilterMenuOperatorsDate {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface kendo$ui$FilterMenuOperatorsEnums {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
  }

  declare interface kendo$ui$FilterMenuOperatorsNumber {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface kendo$ui$FilterMenuOperatorsString {
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

  declare interface kendo$ui$FilterMenuOperators {
    string?: kendo$ui$FilterMenuOperatorsString;
    number?: kendo$ui$FilterMenuOperatorsNumber;
    date?: kendo$ui$FilterMenuOperatorsDate;
    enums?: kendo$ui$FilterMenuOperatorsEnums;
  }

  declare interface kendo$ui$FilterMenuOptions {
    name?: string;
    dataSource?: any | any | kendo$dataDataSource;
    extra?: boolean;
    field?: string;
    messages?: kendo$ui$FilterMenuMessages;
    operators?: kendo$ui$FilterMenuOperators;
  }

  declare interface kendo$ui$FilterMenuEvent {
    sender: kendo$ui$FilterMenu;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$ui$FlatColorPicker mixins undefined.Widget {
    static fn: kendo$ui$FlatColorPicker;
    options: ui$FlatColorPickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$FlatColorPicker;
    constructor(
      element: drawing$Element,
      options?: ui$FlatColorPickerOptions
    ): this;
    focus(): void;
    value(): string;
    value(color?: string): void;
    color(): kendo$Color;
    color(color?: kendo$Color): void;
    enable(enable?: boolean): void;
  }

  declare interface kendo$ui$FlatColorPickerMessages {
    apply?: string;
    cancel?: string;
  }

  declare interface kendo$ui$FlatColorPickerOptions {
    name?: string;
    opacity?: boolean;
    buttons?: boolean;
    value?: string;
    preview?: boolean;
    autoupdate?: boolean;
    messages?: kendo$ui$FlatColorPickerMessages;
    change?: (e: ui$FlatColorPickerChangeEvent) => void;
  }

  declare interface kendo$ui$FlatColorPickerEvent {
    sender: kendo$ui$FlatColorPicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$FlatColorPickerChangeEvent = {
    value?: string
  } & FlatColorPickerEvent;

  declare class kendo$ui$Gantt mixins undefined.Widget {
    static fn: kendo$ui$Gantt;
    options: ui$GanttOptions;
    dataSource: kendo$dataDataSource;
    dependencies: kendo$dataGanttDependencyDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Gantt;
    constructor(element: drawing$Element, options?: ui$GanttOptions): this;
    clearSelection(): void;
    dataItem(row: string): kendo$dataGanttTask;
    dataItem(row: drawing$Element): kendo$dataGanttTask;
    dataItem(row: JQuery): kendo$dataGanttTask;
    date(date?: Date): Date;
    destroy(): void;
    range(range?: any): any;
    refresh(): void;
    refreshDependencies(): void;
    removeDependency(dependency: string): void;
    removeDependency(dependency: kendo$dataGanttDependency): void;
    removeTask(task: string): void;
    removeTask(task: kendo$dataGanttTask): void;
    saveAsPDF(): JQueryPromise<any>;
    select(): JQuery;
    select(row: string): void;
    select(row: drawing$Element): void;
    select(row: JQuery): void;
    setDataSource(dataSource: kendo$dataGanttDataSource): void;
    setDependenciesDataSource(
      dataSource: kendo$dataGanttDependencyDataSource
    ): void;
    view(): kendo$uiGanttView;
    view(type?: string): void;
  }

  declare interface kendo$ui$GanttAssignments {
    dataSource?: any | any | kendo$dataDataSource;
    dataResourceIdField?: string;
    dataTaskIdField?: string;
    dataValueField?: string;
  }

  declare interface kendo$ui$GanttColumn {
    field?: string;
    title?: string;
    format?: string;
    width?: string | number;
    editable?: boolean;
    sortable?: boolean;
  }

  declare interface kendo$ui$GanttCurrentTimeMarker {
    updateInterval?: number;
  }

  declare interface kendo$ui$GanttEditable {
    confirmation?: boolean;
    create?: boolean;
    dependencyCreate?: boolean;
    dependencyDestroy?: boolean;
    dragPercentComplete?: boolean;
    destroy?: boolean;
    move?: boolean;
    reorder?: boolean;
    resize?: boolean;
    template?: string | Function;
    update?: boolean;
  }

  declare interface kendo$ui$GanttMessagesActions {
    addChild?: string;
    append?: string;
    insertAfter?: string;
    insertBefore?: string;
    pdf?: string;
  }

  declare interface kendo$ui$GanttMessagesEditor {
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

  declare interface kendo$ui$GanttMessagesViews {
    day?: string;
    end?: string;
    month?: string;
    start?: string;
    week?: string;
    year?: string;
  }

  declare interface kendo$ui$GanttMessages {
    actions?: kendo$ui$GanttMessagesActions;
    cancel?: string;
    deleteDependencyConfirmation?: string;
    deleteDependencyWindowTitle?: string;
    deleteTaskConfirmation?: string;
    deleteTaskWindowTitle?: string;
    destroy?: string;
    editor?: kendo$ui$GanttMessagesEditor;
    save?: string;
    views?: kendo$ui$GanttMessagesViews;
  }

  declare interface kendo$ui$GanttPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface kendo$ui$GanttPdf {
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: kendo$ui$GanttPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface kendo$ui$GanttRange {
    start?: Date;
    end?: Date;
  }

  declare interface kendo$ui$GanttResources {
    dataFormatField?: string;
    dataColorField?: string;
    dataSource?: any | any | kendo$dataDataSource;
    dataTextField?: string;
    field?: string;
  }

  declare interface kendo$ui$GanttToolbarItem {
    name?: string;
    template?: string | Function;
    text?: string;
  }

  declare interface kendo$ui$GanttTooltip {
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$ui$GanttViewRange {
    start?: Date;
    end?: Date;
  }

  declare interface kendo$ui$GanttView {
    date?: Date;
    range?: kendo$ui$GanttViewRange;
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

  declare interface kendo$ui$GanttOptions {
    name?: string;
    assignments?: kendo$ui$GanttAssignments;
    autoBind?: boolean;
    columnResizeHandleWidth?: number;
    columns?: kendo$ui$GanttColumn[];
    currentTimeMarker?: boolean | kendo$ui$GanttCurrentTimeMarker;
    dataSource?: any | any | kendo$dataGanttDataSource;
    date?: Date;
    dependencies?: any | any | kendo$dataGanttDependencyDataSource;
    editable?: boolean | kendo$ui$GanttEditable;
    navigatable?: boolean;
    workDayStart?: Date;
    workDayEnd?: Date;
    workWeekStart?: number;
    workWeekEnd?: number;
    hourSpan?: number;
    snap?: boolean;
    height?: number | string;
    listWidth?: string | number;
    messages?: kendo$ui$GanttMessages;
    pdf?: kendo$ui$GanttPdf;
    range?: kendo$ui$GanttRange;
    resizable?: boolean;
    selectable?: boolean;
    showWorkDays?: boolean;
    showWorkHours?: boolean;
    taskTemplate?: string | Function;
    toolbar?: kendo$ui$GanttToolbarItem[];
    tooltip?: kendo$ui$GanttTooltip;
    views?: kendo$ui$GanttView[];
    resources?: kendo$ui$GanttResources;
    rowHeight?: number | string;
    dataBinding?: (e: ui$GanttDataBindingEvent) => void;
    dataBound?: (e: ui$GanttDataBoundEvent) => void;
    add?: (e: ui$GanttAddEvent) => void;
    edit?: (e: ui$GanttEditEvent) => void;
    remove?: (e: ui$GanttRemoveEvent) => void;
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
    resize?: (e: ui$GanttResizeEvent) => void;
    resizeEnd?: (e: ui$GanttResizeEndEvent) => void;
  }

  declare interface kendo$ui$GanttEvent {
    sender: kendo$ui$Gantt;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$GanttDataBindingEvent = {} & GanttEvent;

  declare type kendo$ui$GanttDataBoundEvent = {} & GanttEvent;

  declare type kendo$ui$GanttAddEvent = {
    task?: kendo$dataGanttTask,
    dependency?: kendo$dataGanttDependency
  } & GanttEvent;

  declare type kendo$ui$GanttEditEvent = {
    container?: JQuery,
    task?: kendo$dataGanttTask
  } & GanttEvent;

  declare type kendo$ui$GanttRemoveEvent = {
    task?: kendo$dataGanttTask,
    dependencies?: any
  } & GanttEvent;

  declare type kendo$ui$GanttCancelEvent = {
    container?: JQuery,
    task?: kendo$dataGanttTask
  } & GanttEvent;

  declare type kendo$ui$GanttSaveEvent = {
    task?: kendo$dataGanttTask,
    values?: any
  } & GanttEvent;

  declare type kendo$ui$GanttChangeEvent = {} & GanttEvent;

  declare type kendo$ui$GanttColumnResizeEvent = {
    column?: any,
    newWidth?: number,
    oldWidth?: number
  } & GanttEvent;

  declare type kendo$ui$GanttNavigateEvent = {
    view?: string
  } & GanttEvent;

  declare type kendo$ui$GanttMoveStartEvent = {
    task?: kendo$dataGanttTask
  } & GanttEvent;

  declare type kendo$ui$GanttMoveEvent = {
    task?: kendo$dataGanttTask,
    start?: Date,
    end?: Date
  } & GanttEvent;

  declare type kendo$ui$GanttMoveEndEvent = {
    task?: kendo$dataGanttTask,
    start?: Date,
    end?: Date
  } & GanttEvent;

  declare type kendo$ui$GanttPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & GanttEvent;

  declare type kendo$ui$GanttResizeStartEvent = {
    task?: kendo$dataGanttTask
  } & GanttEvent;

  declare type kendo$ui$GanttResizeEvent = {
    task?: kendo$dataGanttTask,
    start?: Date,
    end?: Date
  } & GanttEvent;

  declare type kendo$ui$GanttResizeEndEvent = {
    task?: kendo$dataGanttTask,
    start?: Date,
    end?: Date
  } & GanttEvent;

  declare class kendo$ui$Grid mixins undefined.Widget {
    static fn: kendo$ui$Grid;
    options: ui$GridOptions;
    dataSource: kendo$dataDataSource;
    columns: ui$GridColumn[];
    footer: JQuery;
    pager: kendo$uiPager;
    table: JQuery;
    tbody: JQuery;
    thead: JQuery;
    content: JQuery;
    lockedHeader: JQuery;
    lockedTable: JQuery;
    lockedContent: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Grid;
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
    dataItem(row: string): kendo$dataObservableObject;
    dataItem(row: drawing$Element): kendo$dataObservableObject;
    dataItem(row: JQuery): kendo$dataObservableObject;
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
    setDataSource(dataSource: kendo$dataDataSource): void;
    setOptions(options: any): void;
    showColumn(column: number): void;
    showColumn(column: string): void;
    showColumn(column: any): void;
    unlockColumn(column: number): void;
    unlockColumn(column: string): void;
  }

  declare interface kendo$ui$GridAllowCopy {
    delimeter?: string | any;
  }

  declare interface kendo$ui$GridColumnMenuMessages {
    columns?: string;
    filter?: string;
    sortAscending?: string;
    sortDescending?: string;
    settings?: string;
    done?: string;
    lock?: string;
    unlock?: string;
  }

  declare interface kendo$ui$GridColumnMenu {
    columns?: boolean;
    filterable?: boolean;
    sortable?: boolean;
    messages?: kendo$ui$GridColumnMenuMessages;
  }

  declare interface kendo$ui$GridColumnCommandItemIconClass {
    cancel?: string;
    edit?: string;
    update?: string;
  }

  declare interface kendo$ui$GridColumnCommandItemText {
    edit?: string;
    cancel?: string;
    update?: string;
  }

  declare interface kendo$ui$GridColumnCommandItem {
    className?: string;
    click?: Function;
    iconClass?: string | kendo$ui$GridColumnCommandItemIconClass;
    name?: string;
    template?: string;
    text?: string | kendo$ui$GridColumnCommandItemText;
    visible?: Function;
  }

  declare interface kendo$ui$GridColumnFilterableCell {
    dataSource?: any | kendo$dataDataSource;
    dataTextField?: string;
    delay?: number;
    inputWidth?: number;
    suggestionOperator?: string;
    minLength?: number;
    enabled?: boolean;
    operator?: string;
    showOperators?: boolean;
    template?: Function;
  }

  declare interface kendo$ui$GridColumnFilterable {
    cell?: kendo$ui$GridColumnFilterableCell;
    extra?: boolean;
    multi?: boolean;
    dataSource?: any | any | kendo$dataDataSource;
    checkAll?: boolean;
    itemTemplate?: Function;
    operators?: any;
    search?: boolean;
    ignoreCase?: boolean;
    ui?: string | Function;
  }

  declare interface kendo$ui$GridColumnGroupable {
    compare?: Function;
    dir?: string;
  }

  declare interface kendo$ui$GridColumnSortable {
    allowUnsort?: boolean;
    compare?: Function;
    initialDirection?: string;
  }

  declare interface kendo$ui$GridColumn {
    editor?: (container: JQuery, options: ui$GridColumnEditorOptions) => void;
    aggregates?: any;
    attributes?: any;
    columns?: any;
    command?:
      | string
      | string[]
      | kendo$ui$GridColumnCommandItem
      | kendo$ui$GridColumnCommandItem[];
    editable?: Function;
    encoded?: boolean;
    field?: string;
    filterable?: boolean | kendo$ui$GridColumnFilterable;
    footerAttributes?: any;
    footerTemplate?: string | Function;
    format?: string;
    groupable?: boolean | kendo$ui$GridColumnGroupable;
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
    sortable?: boolean | kendo$ui$GridColumnSortable;
    template?: string | Function;
    title?: string;
    width?: string | number;
    values?: any;
    menu?: boolean;
  }

  declare interface kendo$ui$GridEditable {
    confirmation?: boolean | string | Function;
    cancelDelete?: string;
    confirmDelete?: string;
    createAt?: string;
    destroy?: boolean;
    mode?: string;
    template?: string | Function;
    update?: boolean;
    window?: any;
  }

  declare interface kendo$ui$GridExcel {
    allPages?: boolean;
    fileName?: string;
    filterable?: boolean;
    forceProxy?: boolean;
    proxyURL?: string;
  }

  declare interface kendo$ui$GridFilterableMessages {
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

  declare interface kendo$ui$GridFilterableOperatorsDate {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface kendo$ui$GridFilterableOperatorsEnums {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
  }

  declare interface kendo$ui$GridFilterableOperatorsNumber {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface kendo$ui$GridFilterableOperatorsString {
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

  declare interface kendo$ui$GridFilterableOperators {
    string?: kendo$ui$GridFilterableOperatorsString;
    number?: kendo$ui$GridFilterableOperatorsNumber;
    date?: kendo$ui$GridFilterableOperatorsDate;
    enums?: kendo$ui$GridFilterableOperatorsEnums;
  }

  declare interface kendo$ui$GridFilterable {
    extra?: boolean;
    messages?: kendo$ui$GridFilterableMessages;
    mode?: string;
    operators?: kendo$ui$GridFilterableOperators;
  }

  declare interface kendo$ui$GridGroupableMessages {
    empty?: string;
  }

  declare interface kendo$ui$GridGroupable {
    enabled?: boolean;
    showFooter?: boolean;
    messages?: kendo$ui$GridGroupableMessages;
    compare?: Function;
    dir?: string;
  }

  declare interface kendo$ui$GridMessagesCommands {
    cancel?: string;
    canceledit?: string;
    create?: string;
    destroy?: string;
    edit?: string;
    excel?: string;
    save?: string;
    update?: string;
  }

  declare interface kendo$ui$GridMessages {
    commands?: kendo$ui$GridMessagesCommands;
    noRecords?: string;
    expandCollapseColumnHeader?: string;
  }

  declare interface kendo$ui$GridNoRecords {
    template?: string | Function;
  }

  declare interface kendo$ui$GridPageableMessages {
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

  declare interface kendo$ui$GridPageable {
    alwaysVisible?: boolean;
    pageSize?: number;
    previousNext?: boolean;
    numeric?: boolean;
    buttonCount?: number;
    input?: boolean;
    pageSizes?: boolean | any;
    refresh?: boolean;
    info?: boolean;
    messages?: kendo$ui$GridPageableMessages;
  }

  declare interface kendo$ui$GridPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface kendo$ui$GridPdf {
    allPages?: boolean;
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: kendo$ui$GridPdfMargin;
    paperSize?: string | any;
    template?: string;
    repeatHeaders?: boolean;
    scale?: number;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface kendo$ui$GridScrollable {
    virtual?: boolean;
    endless?: boolean;
  }

  declare interface kendo$ui$GridSortable {
    allowUnsort?: boolean;
    showIndexes?: boolean;
    initialDirection?: string;
    mode?: string;
  }

  declare interface kendo$ui$GridToolbarItem {
    iconClass?: string;
    name?: string;
    template?: string | Function;
    text?: string;
  }

  declare interface kendo$ui$GridOptions {
    name?: string;
    allowCopy?: boolean | kendo$ui$GridAllowCopy;
    altRowTemplate?: string | Function;
    autoBind?: boolean;
    columnResizeHandleWidth?: number;
    columns?: kendo$ui$GridColumn[];
    columnMenu?: boolean | kendo$ui$GridColumnMenu;
    dataSource?: any | any | kendo$dataDataSource;
    detailTemplate?: string | Function;
    editable?: boolean | string | kendo$ui$GridEditable;
    excel?: kendo$ui$GridExcel;
    filterable?: boolean | kendo$ui$GridFilterable;
    groupable?: boolean | kendo$ui$GridGroupable;
    height?: number | string;
    messages?: kendo$ui$GridMessages;
    mobile?: boolean | string;
    navigatable?: boolean;
    noRecords?: boolean | kendo$ui$GridNoRecords;
    pageable?: boolean | kendo$ui$GridPageable;
    pdf?: kendo$ui$GridPdf;
    persistSelection?: boolean;
    reorderable?: boolean;
    resizable?: boolean;
    rowTemplate?: string | Function;
    scrollable?: boolean | kendo$ui$GridScrollable;
    selectable?: boolean | string;
    sortable?: boolean | kendo$ui$GridSortable;
    toolbar?: (string | kendo$ui$GridToolbarItem)[];
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
    remove?: (e: ui$GridRemoveEvent) => void;
    save?: (e: ui$GridSaveEvent) => void;
    saveChanges?: (e: ui$GridSaveChangesEvent) => void;
    sort?: (e: ui$GridSortEvent) => void;
  }

  declare interface kendo$ui$GridEvent {
    sender: kendo$ui$Grid;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$GridBeforeEditEvent = {
    model?: kendo$dataModel
  } & GridEvent;

  declare type kendo$ui$GridCancelEvent = {
    container?: JQuery,
    model?: kendo$dataModel
  } & GridEvent;

  declare type kendo$ui$GridCellCloseEvent = {
    container?: JQuery,
    model?: kendo$dataModel,
    type?: string
  } & GridEvent;

  declare type kendo$ui$GridChangeEvent = {} & GridEvent;

  declare type kendo$ui$GridColumnHideEvent = {
    column?: any
  } & GridEvent;

  declare type kendo$ui$GridColumnLockEvent = {
    column?: any
  } & GridEvent;

  declare type kendo$ui$GridColumnMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & GridEvent;

  declare type kendo$ui$GridColumnMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & GridEvent;

  declare type kendo$ui$GridColumnReorderEvent = {
    column?: any,
    newIndex?: number,
    oldIndex?: number
  } & GridEvent;

  declare type kendo$ui$GridColumnResizeEvent = {
    column?: any,
    newWidth?: number,
    oldWidth?: number
  } & GridEvent;

  declare type kendo$ui$GridColumnShowEvent = {
    column?: any
  } & GridEvent;

  declare type kendo$ui$GridColumnUnlockEvent = {
    column?: any
  } & GridEvent;

  declare type kendo$ui$GridDataBindingEvent = {
    action?: string,
    index?: number,
    items?: any
  } & GridEvent;

  declare type kendo$ui$GridDataBoundEvent = {} & GridEvent;

  declare type kendo$ui$GridDetailCollapseEvent = {
    detailRow?: JQuery,
    masterRow?: JQuery
  } & GridEvent;

  declare type kendo$ui$GridDetailExpandEvent = {
    detailRow?: JQuery,
    masterRow?: JQuery
  } & GridEvent;

  declare type kendo$ui$GridDetailInitEvent = {
    data?: kendo$dataObservableObject,
    detailCell?: JQuery,
    detailRow?: JQuery,
    masterRow?: JQuery
  } & GridEvent;

  declare type kendo$ui$GridEditEvent = {
    container?: JQuery,
    model?: kendo$dataModel
  } & GridEvent;

  declare type kendo$ui$GridExcelExportEvent = {
    data?: any,
    workbook?: kendo$ooxmlWorkbook
  } & GridEvent;

  declare type kendo$ui$GridFilterEvent = {
    filter?: any,
    field?: string
  } & GridEvent;

  declare type kendo$ui$GridFilterMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & GridEvent;

  declare type kendo$ui$GridFilterMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & GridEvent;

  declare type kendo$ui$GridGroupEvent = {
    groups?: any
  } & GridEvent;

  declare type kendo$ui$GridGroupCollapseEvent = {
    element?: JQuery,
    group?: any
  } & GridEvent;

  declare type kendo$ui$GridGroupExpandEvent = {
    element?: JQuery,
    group?: any
  } & GridEvent;

  declare type kendo$ui$GridNavigateEvent = {
    element?: JQuery
  } & GridEvent;

  declare type kendo$ui$GridPageEvent = {
    page?: number
  } & GridEvent;

  declare type kendo$ui$GridPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & GridEvent;

  declare type kendo$ui$GridRemoveEvent = {
    model?: kendo$dataModel,
    row?: JQuery
  } & GridEvent;

  declare type kendo$ui$GridSaveEvent = {
    model?: kendo$dataModel,
    container?: JQuery,
    values?: any
  } & GridEvent;

  declare type kendo$ui$GridSaveChangesEvent = {} & GridEvent;

  declare type kendo$ui$GridSortEvent = {
    sort?: any
  } & GridEvent;

  declare class kendo$ui$ListBox mixins undefined.Widget {
    static fn: kendo$ui$ListBox;
    options: ui$ListBoxOptions;
    dataSource: kendo$dataDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ListBox;
    constructor(element: drawing$Element, options?: ui$ListBoxOptions): this;
    clearSelection(): void;
    dataItem(element: JQuery): kendo$dataObservableObject;
    dataItem(element: drawing$Element): kendo$dataObservableObject;
    dataItem(element: string): kendo$dataObservableObject;
    dataItems(): kendo$dataObservableArray;
    destroy(): void;
    enable(element: JQuery, enable?: boolean): void;
    enable(element: drawing$Element, enable?: boolean): void;
    enable(element: string, enable?: boolean): void;
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
    setDataSource(dataSource: kendo$dataDataSource): void;
  }

  declare interface kendo$ui$ListBoxDraggable {
    enabled?: boolean;
    hint?: Function | string | JQuery;
    placeholder?: Function | string | JQuery;
  }

  declare interface kendo$ui$ListBoxMessagesTools {
    moveDown?: string;
    moveUp?: string;
    remove?: string;
    transferAllFrom?: string;
    transferAllTo?: string;
    transferFrom?: string;
    transferTo?: string;
  }

  declare interface kendo$ui$ListBoxMessages {
    tools?: kendo$ui$ListBoxMessagesTools;
  }

  declare interface kendo$ui$ListBoxToolbar {
    position?: string;
    tools?: any;
  }

  declare interface kendo$ui$ListBoxOptions {
    name?: string;
    autoBind?: boolean;
    connectWith?: string;
    dataSource?: any | any | kendo$dataDataSource;
    dataTextField?: string;
    dataValueField?: string;
    draggable?: boolean | kendo$ui$ListBoxDraggable;
    dropSources?: any;
    navigatable?: boolean;
    messages?: kendo$ui$ListBoxMessages;
    selectable?: string;
    template?: string | Function;
    toolbar?: kendo$ui$ListBoxToolbar;
    add?: (e: ui$ListBoxAddEvent) => void;
    change?: (e: ui$ListBoxEvent) => void;
    dataBound?: (e: ui$ListBoxEvent) => void;
    dragstart?: (e: ui$ListBoxDragstartEvent) => void;
    drag?: (e: ui$ListBoxDragEvent) => void;
    drop?: (e: ui$ListBoxDropEvent) => void;
    dragend?: (e: ui$ListBoxDragendEvent) => void;
    remove?: (e: ui$ListBoxRemoveEvent) => void;
    reorder?: (e: ui$ListBoxReorderEvent) => void;
  }

  declare interface kendo$ui$ListBoxEvent {
    sender: kendo$ui$ListBox;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ListBoxAddEvent = {
    items?: any,
    dataItems?: any
  } & ListBoxEvent;

  declare type kendo$ui$ListBoxDragstartEvent = {
    draggableEvent?: any,
    items?: JQuery
  } & ListBoxEvent;

  declare type kendo$ui$ListBoxDragEvent = {
    items?: JQuery,
    dataItems?: any,
    draggableEvent?: any
  } & ListBoxEvent;

  declare type kendo$ui$ListBoxDropEvent = {
    items?: any,
    dataItems?: any
  } & ListBoxEvent;

  declare type kendo$ui$ListBoxDragendEvent = {
    items?: any,
    dataItems?: any,
    draggableEvent?: any
  } & ListBoxEvent;

  declare type kendo$ui$ListBoxRemoveEvent = {
    items?: any,
    dataItems?: any
  } & ListBoxEvent;

  declare type kendo$ui$ListBoxReorderEvent = {
    items?: any,
    dataItems?: any,
    offset?: number
  } & ListBoxEvent;

  declare class kendo$ui$ListView mixins undefined.Widget {
    static fn: kendo$ui$ListView;
    options: ui$ListViewOptions;
    dataSource: kendo$dataDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ListView;
    constructor(element: drawing$Element, options?: ui$ListViewOptions): this;
    add(): void;
    cancel(): void;
    clearSelection(): void;
    dataItem(row: string): kendo$dataObservableObject;
    dataItem(row: drawing$Element): kendo$dataObservableObject;
    dataItem(row: JQuery): kendo$dataObservableObject;
    dataItems(): kendo$dataObservableArray;
    destroy(): void;
    edit(item: JQuery): void;
    items(): any;
    refresh(): void;
    remove(item: any): void;
    save(): void;
    select(): JQuery;
    select(items: JQuery): void;
    select(items: any): void;
    setDataSource(dataSource: kendo$dataDataSource): void;
  }

  declare interface kendo$ui$ListViewOptions {
    name?: string;
    autoBind?: boolean;
    dataSource?: any | any | kendo$dataDataSource;
    editTemplate?: Function;
    navigatable?: boolean;
    selectable?: boolean | string;
    template?: Function;
    altTemplate?: Function;
    cancel?: (e: ui$ListViewCancelEvent) => void;
    change?: (e: ui$ListViewEvent) => void;
    dataBound?: (e: ui$ListViewEvent) => void;
    dataBinding?: (e: ui$ListViewEvent) => void;
    edit?: (e: ui$ListViewEditEvent) => void;
    remove?: (e: ui$ListViewRemoveEvent) => void;
    save?: (e: ui$ListViewSaveEvent) => void;
    name?: string;
    appendOnRefresh?: boolean;
    autoBind?: boolean;
    dataSource?: kendo$dataDataSource | any;
    endlessScroll?: boolean;
    fixedHeaders?: boolean;
    headerTemplate?: string | Function;
    loadMore?: boolean;
    messages?: ui$ListViewMessages;
    pullToRefresh?: boolean;
    pullParameters?: Function;
    style?: string;
    template?: string | Function;
    type?: string;
    filterable?: boolean | ui$ListViewFilterable;
    virtualViewSize?: number;
    click?: (e: ui$ListViewClickEvent) => void;
    dataBound?: (e: ui$ListViewEvent) => void;
    dataBinding?: (e: ui$ListViewEvent) => void;
    itemChange?: (e: ui$ListViewEvent) => void;
  }

  declare interface kendo$ui$ListViewEvent {
    sender: kendo$ui$ListView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$ui$ListView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ListViewCancelEvent = {
    container?: JQuery,
    model?: kendo$dataModel
  } & ListViewEvent;

  declare type kendo$ui$ListViewEditEvent = {
    item?: JQuery,
    model?: kendo$dataModel
  } & ListViewEvent;

  declare type kendo$ui$ListViewRemoveEvent = {
    item?: JQuery,
    model?: kendo$dataModel
  } & ListViewEvent;

  declare type kendo$ui$ListViewSaveEvent = {
    model?: kendo$dataModel,
    item?: JQuery
  } & ListViewEvent;

  declare class kendo$ui$MaskedTextBox mixins undefined.Widget {
    static fn: kendo$ui$MaskedTextBox;
    options: ui$MaskedTextBoxOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$MaskedTextBox;
    constructor(
      element: drawing$Element,
      options?: ui$MaskedTextBoxOptions
    ): this;
    destroy(): void;
    enable(enable: boolean): void;
    readonly(readonly: boolean): void;
    raw(): string;
    value(): string;
    value(value: string): void;
  }

  declare interface kendo$ui$MaskedTextBoxOptions {
    name?: string;
    clearPromptChar?: boolean;
    culture?: string;
    mask?: string;
    promptChar?: string;
    rules?: any;
    unmaskOnPost?: boolean;
    value?: string;
    change?: (e: ui$MaskedTextBoxChangeEvent) => void;
  }

  declare interface kendo$ui$MaskedTextBoxEvent {
    sender: kendo$ui$MaskedTextBox;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$MaskedTextBoxChangeEvent = {} & MaskedTextBoxEvent;

  declare class kendo$ui$MediaPlayer mixins undefined.Widget {
    static fn: kendo$ui$MediaPlayer;
    options: ui$MediaPlayerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$MediaPlayer;
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
    toolbar(): kendo$uiToolBar;
  }

  declare interface kendo$ui$MediaPlayerMedia {
    source?: string;
    title?: string;
  }

  declare interface kendo$ui$MediaPlayerMessages {
    pause?: string;
    play?: string;
    mute?: string;
    unmute?: string;
    quality?: string;
    fullscreen?: string;
  }

  declare interface kendo$ui$MediaPlayerOptions {
    name?: string;
    autoPlay?: boolean;
    autoRepeat?: boolean;
    forwardSeek?: boolean;
    fullScreen?: boolean;
    media?: kendo$ui$MediaPlayerMedia;
    messages?: kendo$ui$MediaPlayerMessages;
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

  declare interface kendo$ui$MediaPlayerEvent {
    sender: kendo$ui$MediaPlayer;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$ui$Menu mixins undefined.Widget {
    static fn: kendo$ui$Menu;
    options: ui$MenuOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Menu;
    constructor(element: drawing$Element, options?: ui$MenuOptions): this;
    append(item: any, referenceItem?: string): kendo$uiMenu;
    append(item: any, referenceItem?: JQuery): kendo$uiMenu;
    close(element: string): kendo$uiMenu;
    close(element: drawing$Element): kendo$uiMenu;
    close(element: JQuery): kendo$uiMenu;
    destroy(): void;
    enable(element: string, enable: boolean): kendo$uiMenu;
    enable(element: drawing$Element, enable: boolean): kendo$uiMenu;
    enable(element: JQuery, enable: boolean): kendo$uiMenu;
    insertAfter(item: any, referenceItem: string): kendo$uiMenu;
    insertAfter(item: any, referenceItem: drawing$Element): kendo$uiMenu;
    insertAfter(item: any, referenceItem: JQuery): kendo$uiMenu;
    insertBefore(item: any, referenceItem: string): kendo$uiMenu;
    insertBefore(item: any, referenceItem: drawing$Element): kendo$uiMenu;
    insertBefore(item: any, referenceItem: JQuery): kendo$uiMenu;
    open(element: string): kendo$uiMenu;
    open(element: drawing$Element): kendo$uiMenu;
    open(element: JQuery): kendo$uiMenu;
    remove(element: string): kendo$uiMenu;
    remove(element: drawing$Element): kendo$uiMenu;
    remove(element: JQuery): kendo$uiMenu;
  }

  declare interface kendo$ui$MenuAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$MenuAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$MenuAnimation {
    close?: kendo$ui$MenuAnimationClose;
    open?: kendo$ui$MenuAnimationOpen;
  }

  declare interface kendo$ui$MenuOpenOnClick {
    rootMenuItems?: boolean;
    subMenuItems?: boolean;
  }

  declare interface kendo$ui$MenuScrollable {
    distance?: number;
  }

  declare interface kendo$ui$MenuOptions {
    name?: string;
    animation?: boolean | kendo$ui$MenuAnimation;
    closeOnClick?: boolean;
    dataSource?: any | any;
    direction?: string;
    hoverDelay?: number;
    openOnClick?: boolean | kendo$ui$MenuOpenOnClick;
    orientation?: string;
    popupCollision?: string;
    scrollable?: boolean | kendo$ui$MenuScrollable;
    close?: (e: ui$MenuCloseEvent) => void;
    open?: (e: ui$MenuOpenEvent) => void;
    activate?: (e: ui$MenuActivateEvent) => void;
    deactivate?: (e: ui$MenuDeactivateEvent) => void;
    select?: (e: ui$MenuSelectEvent) => void;
  }

  declare interface kendo$ui$MenuEvent {
    sender: kendo$ui$Menu;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$MenuCloseEvent = {
    item?: HTMLElement
  } & MenuEvent;

  declare type kendo$ui$MenuOpenEvent = {
    item?: HTMLElement
  } & MenuEvent;

  declare type kendo$ui$MenuActivateEvent = {
    item?: HTMLElement
  } & MenuEvent;

  declare type kendo$ui$MenuDeactivateEvent = {
    item?: HTMLElement
  } & MenuEvent;

  declare type kendo$ui$MenuSelectEvent = {
    item?: HTMLElement
  } & MenuEvent;

  declare class kendo$ui$MultiColumnComboBox mixins undefined.Widget {
    static fn: kendo$ui$MultiColumnComboBox;
    options: ui$MultiColumnComboBoxOptions;
    dataSource: kendo$dataDataSource;
    input: JQuery;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$MultiColumnComboBox;
    constructor(
      element: drawing$Element,
      options?: ui$MultiColumnComboBoxOptions
    ): this;
    close(): void;
    dataItem(index?: number): any;
    destroy(): void;
    enable(enable: boolean): void;
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
    setDataSource(dataSource: kendo$dataDataSource): void;
    suggest(value: string): void;
    text(): string;
    text(text: string): void;
    toggle(toggle: boolean): void;
    value(): string;
    value(value: string): void;
  }

  declare interface kendo$ui$MultiColumnComboBoxAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$MultiColumnComboBoxAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$MultiColumnComboBoxAnimation {
    close?: kendo$ui$MultiColumnComboBoxAnimationClose;
    open?: kendo$ui$MultiColumnComboBoxAnimationOpen;
  }

  declare interface kendo$ui$MultiColumnComboBoxColumn {
    field?: string;
    title?: string;
    template?: string | Function;
    headerTemplate?: string | Function;
    width?: number | string;
  }

  declare interface kendo$ui$MultiColumnComboBoxPopup {
    appendTo?: string;
    origin?: string;
    position?: string;
  }

  declare interface kendo$ui$MultiColumnComboBoxVirtual {
    itemHeight?: number;
    mapValueTo?: string;
    valueMapper?: Function;
  }

  declare interface kendo$ui$MultiColumnComboBoxOptions {
    name?: string;
    animation?: kendo$ui$MultiColumnComboBoxAnimation;
    autoBind?: boolean;
    autoWidth?: boolean;
    cascadeFrom?: string;
    cascadeFromField?: string;
    columns?: kendo$ui$MultiColumnComboBoxColumn[];
    clearButton?: boolean;
    dataSource?: any | any | kendo$dataDataSource;
    dataTextField?: string;
    dataValueField?: string;
    delay?: number;
    dropDownWidth?: string | number;
    enable?: boolean;
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
    popup?: kendo$ui$MultiColumnComboBoxPopup;
    suggest?: boolean;
    syncValueAndText?: boolean;
    headerTemplate?: string | Function;
    template?: string | Function;
    text?: string;
    value?: string;
    valuePrimitive?: boolean;
    virtual?: boolean | kendo$ui$MultiColumnComboBoxVirtual;
    change?: (e: ui$MultiColumnComboBoxChangeEvent) => void;
    close?: (e: ui$MultiColumnComboBoxCloseEvent) => void;
    dataBound?: (e: ui$MultiColumnComboBoxDataBoundEvent) => void;
    filtering?: (e: ui$MultiColumnComboBoxFilteringEvent) => void;
    open?: (e: ui$MultiColumnComboBoxOpenEvent) => void;
    select?: (e: ui$MultiColumnComboBoxSelectEvent) => void;
    cascade?: (e: ui$MultiColumnComboBoxCascadeEvent) => void;
  }

  declare interface kendo$ui$MultiColumnComboBoxEvent {
    sender: kendo$ui$MultiColumnComboBox;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$MultiColumnComboBoxChangeEvent = {} & MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxCloseEvent = {} & MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxDataBoundEvent = {} & MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxFilteringEvent = {
    filter?: any
  } & MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxOpenEvent = {} & MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxCascadeEvent = {} & MultiColumnComboBoxEvent;

  declare class kendo$ui$MultiSelect mixins undefined.Widget {
    static fn: kendo$ui$MultiSelect;
    options: ui$MultiSelectOptions;
    dataSource: kendo$dataDataSource;
    input: JQuery;
    list: JQuery;
    ul: JQuery;
    tagList: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$MultiSelect;
    constructor(
      element: drawing$Element,
      options?: ui$MultiSelectOptions
    ): this;
    close(): void;
    dataItems(): any;
    destroy(): void;
    enable(enable: boolean): void;
    focus(): void;
    items(): any;
    open(): void;
    readonly(readonly: boolean): void;
    refresh(): void;
    search(word: string): void;
    setDataSource(dataSource: kendo$dataDataSource): void;
    toggle(toggle?: boolean): void;
    value(): any;
    value(value: any): void;
    value(value: string): void;
  }

  declare interface kendo$ui$MultiSelectAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$MultiSelectAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$MultiSelectAnimation {
    close?: kendo$ui$MultiSelectAnimationClose;
    open?: kendo$ui$MultiSelectAnimationOpen;
  }

  declare interface kendo$ui$MultiSelectPopup {
    appendTo?: string;
    origin?: string;
    position?: string;
  }

  declare interface kendo$ui$MultiSelectVirtual {
    itemHeight?: number;
    mapValueTo?: string;
    valueMapper?: Function;
  }

  declare interface kendo$ui$MultiSelectOptions {
    name?: string;
    animation?: boolean | kendo$ui$MultiSelectAnimation;
    autoBind?: boolean;
    autoClose?: boolean;
    autoWidth?: boolean;
    clearButton?: boolean;
    dataSource?: any | any | kendo$dataDataSource;
    dataTextField?: string;
    dataValueField?: string;
    delay?: number;
    enable?: boolean;
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
    popup?: kendo$ui$MultiSelectPopup;
    headerTemplate?: string | Function;
    itemTemplate?: string | Function;
    tagTemplate?: string | Function;
    tagMode?: string;
    value?: any;
    valuePrimitive?: boolean;
    virtual?: boolean | kendo$ui$MultiSelectVirtual;
    change?: (e: ui$MultiSelectChangeEvent) => void;
    close?: (e: ui$MultiSelectCloseEvent) => void;
    dataBound?: (e: ui$MultiSelectDataBoundEvent) => void;
    filtering?: (e: ui$MultiSelectFilteringEvent) => void;
    open?: (e: ui$MultiSelectOpenEvent) => void;
    select?: (e: ui$MultiSelectSelectEvent) => void;
    deselect?: (e: ui$MultiSelectDeselectEvent) => void;
  }

  declare interface kendo$ui$MultiSelectEvent {
    sender: kendo$ui$MultiSelect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$MultiSelectChangeEvent = {} & MultiSelectEvent;

  declare type kendo$ui$MultiSelectCloseEvent = {} & MultiSelectEvent;

  declare type kendo$ui$MultiSelectDataBoundEvent = {} & MultiSelectEvent;

  declare type kendo$ui$MultiSelectFilteringEvent = {
    filter?: any
  } & MultiSelectEvent;

  declare type kendo$ui$MultiSelectOpenEvent = {} & MultiSelectEvent;

  declare type kendo$ui$MultiSelectSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & MultiSelectEvent;

  declare type kendo$ui$MultiSelectDeselectEvent = {
    dataItem?: any,
    item?: JQuery
  } & MultiSelectEvent;

  declare class kendo$ui$MultiViewCalendar mixins undefined.Widget {
    static fn: kendo$ui$MultiViewCalendar;
    options: ui$MultiViewCalendarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$MultiViewCalendar;
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

  declare interface kendo$ui$MultiViewCalendarMessages {
    weekColumnHeader?: string;
  }

  declare interface kendo$ui$MultiViewCalendarMonth {
    content?: string;
    weekNumber?: string;
    empty?: string;
  }

  declare interface kendo$ui$MultiViewCalendarRange {
    start?: Date;
    end?: Date;
  }

  declare interface kendo$ui$MultiViewCalendarOptions {
    name?: string;
    culture?: string;
    dates?: any;
    depth?: string;
    disableDates?: any | Function;
    footer?: string | Function;
    format?: string;
    max?: Date;
    messages?: kendo$ui$MultiViewCalendarMessages;
    min?: Date;
    month?: kendo$ui$MultiViewCalendarMonth;
    views?: number;
    range?: kendo$ui$MultiViewCalendarRange;
    selectable?: string;
    selectDates?: any;
    showViewHeader?: boolean;
    weekNumber?: boolean;
    start?: string;
    value?: Date;
    change?: (e: ui$MultiViewCalendarEvent) => void;
    navigate?: (e: ui$MultiViewCalendarEvent) => void;
  }

  declare interface kendo$ui$MultiViewCalendarEvent {
    sender: kendo$ui$MultiViewCalendar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$ui$Notification mixins undefined.Widget {
    static fn: kendo$ui$Notification;
    options: ui$NotificationOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Notification;
    constructor(
      element: drawing$Element,
      options?: ui$NotificationOptions
    ): this;
    error(data: any): void;
    error(data: string): void;
    error(data: Function): void;
    getNotifications(): JQuery;
    hide(): void;
    info(data: any): void;
    info(data: string): void;
    info(data: Function): void;
    show(data: any, type: string): void;
    show(data: string, type: string): void;
    show(data: Function, type: string): void;
    showText(data: any, type: string): void;
    showText(data: string, type: string): void;
    showText(data: Function, type: string): void;
    success(data: any): void;
    success(data: string): void;
    success(data: Function): void;
    warning(data: any): void;
    warning(data: string): void;
    warning(data: Function): void;
  }

  declare interface kendo$ui$NotificationPosition {
    bottom?: number;
    left?: number;
    pinned?: boolean;
    right?: number;
    top?: number;
  }

  declare interface kendo$ui$NotificationTemplate {
    type?: string;
    template?: string;
  }

  declare interface kendo$ui$NotificationOptions {
    name?: string;
    allowHideAfter?: number;
    animation?: any | boolean;
    appendTo?: string | JQuery;
    autoHideAfter?: number;
    button?: boolean;
    height?: number | string;
    hideOnClick?: boolean;
    position?: kendo$ui$NotificationPosition;
    stacking?: string;
    templates?: kendo$ui$NotificationTemplate[];
    width?: number | string;
    hide?: (e: ui$NotificationHideEvent) => void;
    show?: (e: ui$NotificationShowEvent) => void;
  }

  declare interface kendo$ui$NotificationEvent {
    sender: kendo$ui$Notification;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$NotificationHideEvent = {
    element?: JQuery
  } & NotificationEvent;

  declare type kendo$ui$NotificationShowEvent = {
    element?: JQuery
  } & NotificationEvent;

  declare class kendo$ui$NumericTextBox mixins undefined.Widget {
    static fn: kendo$ui$NumericTextBox;
    options: ui$NumericTextBoxOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$NumericTextBox;
    constructor(
      element: drawing$Element,
      options?: ui$NumericTextBoxOptions
    ): this;
    destroy(): void;
    enable(enable: boolean): void;
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

  declare interface kendo$ui$NumericTextBoxOptions {
    name?: string;
    culture?: string;
    decimals?: number;
    downArrowText?: string;
    factor?: number;
    format?: string;
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

  declare interface kendo$ui$NumericTextBoxEvent {
    sender: kendo$ui$NumericTextBox;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$NumericTextBoxChangeEvent = {} & NumericTextBoxEvent;

  declare type kendo$ui$NumericTextBoxSpinEvent = {} & NumericTextBoxEvent;

  declare class kendo$ui$Pager mixins undefined.Widget {
    static fn: kendo$ui$Pager;
    options: ui$PagerOptions;
    dataSource: kendo$dataDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Pager;
    constructor(element: drawing$Element, options?: ui$PagerOptions): this;
    totalPages(): number;
    pageSize(): number;
    page(): number;
    page(page: number): void;
    refresh(): void;
    destroy(): void;
  }

  declare interface kendo$ui$PagerMessages {
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

  declare interface kendo$ui$PagerOptions {
    name?: string;
    autoBind?: boolean;
    buttonCount?: number;
    dataSource?: any | kendo$dataDataSource;
    selectTemplate?: string;
    linkTemplate?: string;
    info?: boolean;
    input?: boolean;
    numeric?: boolean;
    pageSizes?: boolean | any;
    previousNext?: boolean;
    refresh?: boolean;
    messages?: kendo$ui$PagerMessages;
    change?: (e: ui$PagerChangeEvent) => void;
  }

  declare interface kendo$ui$PagerEvent {
    sender: kendo$ui$Pager;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$PagerChangeEvent = {} & PagerEvent;

  declare class kendo$ui$PanelBar mixins undefined.Widget {
    static fn: kendo$ui$PanelBar;
    options: ui$PanelBarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$PanelBar;
    constructor(element: drawing$Element, options?: ui$PanelBarOptions): this;
    append(item: string, referenceItem?: string): kendo$uiPanelBar;
    append(item: string, referenceItem?: drawing$Element): kendo$uiPanelBar;
    append(item: string, referenceItem?: JQuery): kendo$uiPanelBar;
    append(item: drawing$Element, referenceItem?: string): kendo$uiPanelBar;
    append(
      item: drawing$Element,
      referenceItem?: drawing$Element
    ): kendo$uiPanelBar;
    append(item: drawing$Element, referenceItem?: JQuery): kendo$uiPanelBar;
    append(item: JQuery, referenceItem?: string): kendo$uiPanelBar;
    append(item: JQuery, referenceItem?: drawing$Element): kendo$uiPanelBar;
    append(item: JQuery, referenceItem?: JQuery): kendo$uiPanelBar;
    append(item: any, referenceItem?: string): kendo$uiPanelBar;
    append(item: any, referenceItem?: drawing$Element): kendo$uiPanelBar;
    append(item: any, referenceItem?: JQuery): kendo$uiPanelBar;
    clearSelection(): void;
    collapse(element: string, useAnimation: boolean): kendo$uiPanelBar;
    collapse(element: drawing$Element, useAnimation: boolean): kendo$uiPanelBar;
    collapse(element: JQuery, useAnimation: boolean): kendo$uiPanelBar;
    destroy(): void;
    enable(element: string, enable: boolean): void;
    enable(element: drawing$Element, enable: boolean): void;
    enable(element: JQuery, enable: boolean): void;
    expand(element: string, useAnimation: boolean): kendo$uiPanelBar;
    expand(element: drawing$Element, useAnimation: boolean): kendo$uiPanelBar;
    expand(element: JQuery, useAnimation: boolean): kendo$uiPanelBar;
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
    insertBefore(item: string, referenceItem: string): kendo$uiPanelBar;
    insertBefore(
      item: string,
      referenceItem: drawing$Element
    ): kendo$uiPanelBar;
    insertBefore(item: string, referenceItem: JQuery): kendo$uiPanelBar;
    insertBefore(
      item: drawing$Element,
      referenceItem: string
    ): kendo$uiPanelBar;
    insertBefore(
      item: drawing$Element,
      referenceItem: drawing$Element
    ): kendo$uiPanelBar;
    insertBefore(
      item: drawing$Element,
      referenceItem: JQuery
    ): kendo$uiPanelBar;
    insertBefore(item: JQuery, referenceItem: string): kendo$uiPanelBar;
    insertBefore(
      item: JQuery,
      referenceItem: drawing$Element
    ): kendo$uiPanelBar;
    insertBefore(item: JQuery, referenceItem: JQuery): kendo$uiPanelBar;
    insertBefore(item: any, referenceItem: string): kendo$uiPanelBar;
    insertBefore(item: any, referenceItem: drawing$Element): kendo$uiPanelBar;
    insertBefore(item: any, referenceItem: JQuery): kendo$uiPanelBar;
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

  declare interface kendo$ui$PanelBarAnimationCollapse {
    duration?: number;
    effects?: string;
  }

  declare interface kendo$ui$PanelBarAnimationExpand {
    duration?: number;
    effects?: string;
  }

  declare interface kendo$ui$PanelBarAnimation {
    collapse?: kendo$ui$PanelBarAnimationCollapse;
    expand?: kendo$ui$PanelBarAnimationExpand;
  }

  declare interface kendo$ui$PanelBarMessages {
    loading?: string;
    requestFailed?: string;
    retry?: string;
  }

  declare interface kendo$ui$PanelBarOptions {
    name?: string;
    animation?: boolean | kendo$ui$PanelBarAnimation;
    autoBind?: boolean;
    contentUrls?: any;
    dataImageUrlField?: string;
    dataSource?: any | any | kendo$dataHierarchicalDataSource;
    dataSpriteCssClassField?: string;
    dataTextField?: string | any;
    dataUrlField?: string;
    expandMode?: string;
    loadOnDemand?: boolean;
    messages?: kendo$ui$PanelBarMessages;
    template?: string | Function;
    activate?: (e: ui$PanelBarActivateEvent) => void;
    collapse?: (e: ui$PanelBarCollapseEvent) => void;
    contentLoad?: (e: ui$PanelBarContentLoadEvent) => void;
    dataBound?: (e: ui$PanelBarDataBoundEvent) => void;
    error?: (e: ui$PanelBarErrorEvent) => void;
    expand?: (e: ui$PanelBarExpandEvent) => void;
    select?: (e: ui$PanelBarSelectEvent) => void;
  }

  declare interface kendo$ui$PanelBarEvent {
    sender: kendo$ui$PanelBar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$PanelBarActivateEvent = {
    item?: drawing$Element
  } & PanelBarEvent;

  declare type kendo$ui$PanelBarCollapseEvent = {
    item?: drawing$Element
  } & PanelBarEvent;

  declare type kendo$ui$PanelBarContentLoadEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element
  } & PanelBarEvent;

  declare type kendo$ui$PanelBarDataBoundEvent = {
    node?: JQuery
  } & PanelBarEvent;

  declare type kendo$ui$PanelBarErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & PanelBarEvent;

  declare type kendo$ui$PanelBarExpandEvent = {
    item?: drawing$Element
  } & PanelBarEvent;

  declare type kendo$ui$PanelBarSelectEvent = {
    item?: drawing$Element
  } & PanelBarEvent;

  declare class kendo$ui$PivotConfigurator mixins undefined.Widget {
    static fn: kendo$ui$PivotConfigurator;
    options: ui$PivotConfiguratorOptions;
    dataSource: kendo$dataDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$PivotConfigurator;
    constructor(
      element: drawing$Element,
      options?: ui$PivotConfiguratorOptions
    ): this;
    destroy(): void;
    refresh(): void;
    setDataSource(dataSource: kendo$dataPivotDataSource): void;
  }

  declare interface kendo$ui$PivotConfiguratorMessagesFieldMenuOperators {
    contains?: string;
    doesnotcontain?: string;
    startswith?: string;
    endswith?: string;
    eq?: string;
    neq?: string;
  }

  declare interface kendo$ui$PivotConfiguratorMessagesFieldMenu {
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
    operators?: kendo$ui$PivotConfiguratorMessagesFieldMenuOperators;
  }

  declare interface kendo$ui$PivotConfiguratorMessages {
    measures?: string;
    columns?: string;
    rows?: string;
    measuresLabel?: string;
    rowsLabel?: string;
    columnsLabel?: string;
    fieldsLabel?: string;
    fieldMenu?: kendo$ui$PivotConfiguratorMessagesFieldMenu;
  }

  declare interface kendo$ui$PivotConfiguratorSortable {
    allowUnsort?: boolean;
  }

  declare interface kendo$ui$PivotConfiguratorOptions {
    name?: string;
    dataSource?: any | kendo$dataPivotDataSource;
    filterable?: boolean;
    sortable?: boolean | kendo$ui$PivotConfiguratorSortable;
    height?: number | string;
    messages?: kendo$ui$PivotConfiguratorMessages;
  }

  declare interface kendo$ui$PivotConfiguratorEvent {
    sender: kendo$ui$PivotConfigurator;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$ui$PivotGrid mixins undefined.Widget {
    static fn: kendo$ui$PivotGrid;
    options: ui$PivotGridOptions;
    dataSource: kendo$dataDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$PivotGrid;
    constructor(element: drawing$Element, options?: ui$PivotGridOptions): this;
    cellInfo(columnIndex: number, rowIndex: number): any;
    cellInfoByElement(cell: string): any;
    cellInfoByElement(cell: drawing$Element): any;
    cellInfoByElement(cell: JQuery): any;
    destroy(): void;
    refresh(): void;
    setDataSource(dataSource: kendo$dataPivotDataSource): void;
    saveAsExcel(): void;
    saveAsPDF(): JQueryPromise<any>;
  }

  declare interface kendo$ui$PivotGridExcel {
    fileName?: string;
    filterable?: boolean;
    forceProxy?: boolean;
    proxyURL?: string;
  }

  declare interface kendo$ui$PivotGridMessagesFieldMenuOperators {
    contains?: string;
    doesnotcontain?: string;
    startswith?: string;
    endswith?: string;
    eq?: string;
    neq?: string;
  }

  declare interface kendo$ui$PivotGridMessagesFieldMenu {
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
    operators?: kendo$ui$PivotGridMessagesFieldMenuOperators;
  }

  declare interface kendo$ui$PivotGridMessages {
    measureFields?: string;
    columnFields?: string;
    rowFields?: string;
    fieldMenu?: kendo$ui$PivotGridMessagesFieldMenu;
  }

  declare interface kendo$ui$PivotGridPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface kendo$ui$PivotGridPdf {
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: kendo$ui$PivotGridPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface kendo$ui$PivotGridSortable {
    allowUnsort?: boolean;
  }

  declare interface kendo$ui$PivotGridOptions {
    name?: string;
    dataSource?: any | kendo$dataPivotDataSource;
    autoBind?: boolean;
    reorderable?: boolean;
    excel?: kendo$ui$PivotGridExcel;
    pdf?: kendo$ui$PivotGridPdf;
    filterable?: boolean;
    sortable?: boolean | kendo$ui$PivotGridSortable;
    columnWidth?: number;
    height?: number | string;
    columnHeaderTemplate?: string | Function;
    dataCellTemplate?: string | Function;
    kpiStatusTemplate?: string | Function;
    kpiTrendTemplate?: string | Function;
    rowHeaderTemplate?: string | Function;
    messages?: kendo$ui$PivotGridMessages;
    dataBinding?: (e: ui$PivotGridDataBindingEvent) => void;
    dataBound?: (e: ui$PivotGridDataBoundEvent) => void;
    expandMember?: (e: ui$PivotGridExpandMemberEvent) => void;
    collapseMember?: (e: ui$PivotGridCollapseMemberEvent) => void;
    excelExport?: (e: ui$PivotGridExcelExportEvent) => void;
    pdfExport?: (e: ui$PivotGridPdfExportEvent) => void;
  }

  declare interface kendo$ui$PivotGridEvent {
    sender: kendo$ui$PivotGrid;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$PivotGridDataBindingEvent = {} & PivotGridEvent;

  declare type kendo$ui$PivotGridDataBoundEvent = {} & PivotGridEvent;

  declare type kendo$ui$PivotGridExpandMemberEvent = {
    axis?: string,
    path?: string[]
  } & PivotGridEvent;

  declare type kendo$ui$PivotGridCollapseMemberEvent = {
    axis?: string,
    path?: string[]
  } & PivotGridEvent;

  declare type kendo$ui$PivotGridExcelExportEvent = {
    data?: any,
    workbook?: any
  } & PivotGridEvent;

  declare type kendo$ui$PivotGridPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & PivotGridEvent;

  declare class kendo$ui$Popup mixins undefined.Widget {
    static fn: kendo$ui$Popup;
    options: ui$PopupOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Popup;
    constructor(element: drawing$Element, options?: ui$PopupOptions): this;
    close(): void;
    open(): void;
    position(): void;
    setOptions(options: any): void;
    visible(): boolean;
  }

  declare interface kendo$ui$PopupAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$PopupAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$PopupAnimation {
    close?: kendo$ui$PopupAnimationClose;
    open?: kendo$ui$PopupAnimationOpen;
  }

  declare interface kendo$ui$PopupOptions {
    name?: string;
    adjustSize?: any;
    animation?: boolean | kendo$ui$PopupAnimation;
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

  declare interface kendo$ui$PopupEvent {
    sender: kendo$ui$Popup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$PopupActivateEvent = {} & PopupEvent;

  declare type kendo$ui$PopupCloseEvent = {} & PopupEvent;

  declare type kendo$ui$PopupDeactivateEvent = {} & PopupEvent;

  declare type kendo$ui$PopupOpenEvent = {} & PopupEvent;

  declare class kendo$ui$ProgressBar mixins undefined.Widget {
    static fn: kendo$ui$ProgressBar;
    options: ui$ProgressBarOptions;
    progressStatus: JQuery;
    progressWrapper: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ProgressBar;
    constructor(
      element: drawing$Element,
      options?: ui$ProgressBarOptions
    ): this;
    enable(enable: boolean): void;
    value(): number;
    value(value: number): void;
  }

  declare interface kendo$ui$ProgressBarAnimation {
    duration?: number;
  }

  declare interface kendo$ui$ProgressBarOptions {
    name?: string;
    animation?: kendo$ui$ProgressBarAnimation;
    chunkCount?: number;
    enable?: boolean;
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

  declare interface kendo$ui$ProgressBarEvent {
    sender: kendo$ui$ProgressBar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ProgressBarChangeEvent = {
    value?: number
  } & ProgressBarEvent;

  declare type kendo$ui$ProgressBarCompleteEvent = {
    value?: number
  } & ProgressBarEvent;

  declare class kendo$ui$Prompt mixins undefined.Dialog {
    static fn: kendo$ui$Prompt;
    options: ui$PromptOptions;
    result: JQueryPromise<any>;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Prompt;
    constructor(element: drawing$Element, options?: ui$PromptOptions): this;
  }

  declare interface kendo$ui$PromptMessages {
    okText?: string;
    cancel?: string;
  }

  declare interface kendo$ui$PromptOptions {
    name?: string;
    messages?: kendo$ui$PromptMessages;
  }

  declare interface kendo$ui$PromptEvent {
    sender: kendo$ui$Prompt;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$ui$RangeSlider mixins undefined.Widget {
    static fn: kendo$ui$RangeSlider;
    options: ui$RangeSliderOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$RangeSlider;
    constructor(
      element: drawing$Element,
      options?: ui$RangeSliderOptions
    ): this;
    destroy(): void;
    enable(enable: boolean): void;
    value(): any;
    value(startEndArray: any): void;
    values(): any;
    values(selectionStart: number, selectionEnd: number): void;
    resize(): void;
  }

  declare interface kendo$ui$RangeSliderTooltip {
    enabled?: boolean;
    format?: string;
    template?: string;
  }

  declare interface kendo$ui$RangeSliderOptions {
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
    tooltip?: kendo$ui$RangeSliderTooltip;
    change?: (e: ui$RangeSliderChangeEvent) => void;
    slide?: (e: ui$RangeSliderSlideEvent) => void;
  }

  declare interface kendo$ui$RangeSliderEvent {
    sender: kendo$ui$RangeSlider;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$RangeSliderChangeEvent = {
    value?: any
  } & RangeSliderEvent;

  declare type kendo$ui$RangeSliderSlideEvent = {
    value?: any
  } & RangeSliderEvent;

  declare class kendo$ui$ResponsivePanel mixins undefined.Widget {
    static fn: kendo$ui$ResponsivePanel;
    options: ui$ResponsivePanelOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ResponsivePanel;
    constructor(
      element: drawing$Element,
      options?: ui$ResponsivePanelOptions
    ): this;
    close(): void;
    destroy(): void;
    open(): void;
  }

  declare interface kendo$ui$ResponsivePanelOptions {
    name?: string;
    autoClose?: boolean;
    breakpoint?: number;
    orientation?: string;
    toggleButton?: string;
    close?: (e: ui$ResponsivePanelEvent) => void;
    open?: (e: ui$ResponsivePanelEvent) => void;
  }

  declare interface kendo$ui$ResponsivePanelEvent {
    sender: kendo$ui$ResponsivePanel;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$ui$Scheduler mixins undefined.Widget {
    static fn: kendo$ui$Scheduler;
    options: ui$SchedulerOptions;
    dataSource: kendo$dataDataSource;
    resources: any;
    calendar: kendo$uiCalendar;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Scheduler;
    constructor(element: drawing$Element, options?: ui$SchedulerOptions): this;
    addEvent(data: any): void;
    cancelEvent(): void;
    data(): void;
    date(): Date;
    date(value?: Date): void;
    destroy(): void;
    editEvent(event: string): void;
    editEvent(event: kendo$dataSchedulerEvent): void;
    items(): any;
    occurrenceByUid(uid: string): kendo$dataSchedulerEvent;
    occurrencesInRange(start: Date, end: Date): any;
    refresh(): void;
    removeEvent(event: string): void;
    removeEvent(event: kendo$dataSchedulerEvent): void;
    resourcesBySlot(slot: any): any;
    saveAsPDF(): JQueryPromise<any>;
    saveEvent(): void;
    select(): void;
    select(events: any, options: any): void;
    setDataSource(dataSource: kendo$dataSchedulerDataSource): void;
    slotByPosition(xPosition: number, yPosition: number): any;
    slotByElement(element: drawing$Element): any;
    slotByElement(element: JQuery): any;
    view(): kendo$uiSchedulerView;
    view(type?: string): void;
    viewName(): string;
  }

  declare interface kendo$ui$SchedulerCurrentTimeMarker {
    updateInterval?: number;
    useLocalTimezone?: boolean;
  }

  declare interface kendo$ui$SchedulerEditable {
    confirmation?: boolean | string;
    create?: boolean;
    destroy?: boolean;
    editRecurringMode?: string;
    move?: boolean;
    resize?: boolean;
    template?: string | Function;
    update?: boolean;
    window?: any;
  }

  declare interface kendo$ui$SchedulerFooter {
    command?: string | boolean;
  }

  declare interface kendo$ui$SchedulerGroup {
    date?: boolean;
    resources?: any;
    orientation?: string;
  }

  declare interface kendo$ui$SchedulerMessagesEditable {
    confirmation?: string;
  }

  declare interface kendo$ui$SchedulerMessagesEditor {
    allDayEvent?: string;
    description?: string;
    editorTitle?: string;
    end?: string;
    endTimezone?: string;
    repeat?: string;
    separateTimezones?: string;
    start?: string;
    startTimezone?: string;
    timezone?: string;
    timezoneEditorButton?: string;
    timezoneEditorTitle?: string;
    title?: string;
  }

  declare interface kendo$ui$SchedulerMessagesRecurrenceEditorDaily {
    interval?: string;
    repeatEvery?: string;
  }

  declare interface kendo$ui$SchedulerMessagesRecurrenceEditorEnd {
    after?: string;
    occurrence?: string;
    label?: string;
    never?: string;
    mobileLabel?: string;
    on?: string;
  }

  declare interface kendo$ui$SchedulerMessagesRecurrenceEditorFrequencies {
    daily?: string;
    monthly?: string;
    never?: string;
    weekly?: string;
    yearly?: string;
  }

  declare interface kendo$ui$SchedulerMessagesRecurrenceEditorMonthly {
    day?: string;
    interval?: string;
    repeatEvery?: string;
    repeatOn?: string;
  }

  declare interface kendo$ui$SchedulerMessagesRecurrenceEditorOffsetPositions {
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
    last?: string;
  }

  declare interface kendo$ui$SchedulerMessagesRecurrenceEditorWeekdays {
    day?: string;
    weekday?: string;
    weekend?: string;
  }

  declare interface kendo$ui$SchedulerMessagesRecurrenceEditorWeekly {
    interval?: string;
    repeatEvery?: string;
    repeatOn?: string;
  }

  declare interface kendo$ui$SchedulerMessagesRecurrenceEditorYearly {
    of?: string;
    repeatEvery?: string;
    repeatOn?: string;
    interval?: string;
  }

  declare interface kendo$ui$SchedulerMessagesRecurrenceEditor {
    daily?: kendo$ui$SchedulerMessagesRecurrenceEditorDaily;
    end?: kendo$ui$SchedulerMessagesRecurrenceEditorEnd;
    frequencies?: kendo$ui$SchedulerMessagesRecurrenceEditorFrequencies;
    monthly?: kendo$ui$SchedulerMessagesRecurrenceEditorMonthly;
    offsetPositions?: kendo$ui$SchedulerMessagesRecurrenceEditorOffsetPositions;
    recurrenceEditorTitle?: string;
    weekly?: kendo$ui$SchedulerMessagesRecurrenceEditorWeekly;
    weekdays?: kendo$ui$SchedulerMessagesRecurrenceEditorWeekdays;
    yearly?: kendo$ui$SchedulerMessagesRecurrenceEditorYearly;
  }

  declare interface kendo$ui$SchedulerMessagesRecurrenceMessages {
    deleteRecurring?: string;
    deleteWindowOccurrence?: string;
    deleteWindowSeries?: string;
    deleteWindowTitle?: string;
    editRecurring?: string;
    editWindowOccurrence?: string;
    editWindowSeries?: string;
    editWindowTitle?: string;
  }

  declare interface kendo$ui$SchedulerMessagesViews {
    day?: string;
    week?: string;
    month?: string;
    agenda?: string;
  }

  declare interface kendo$ui$SchedulerMessages {
    allDay?: string;
    ariaEventLabel?: string;
    ariaSlotLabel?: string;
    cancel?: string;
    date?: string;
    deleteWindowTitle?: string;
    destroy?: string;
    event?: string;
    defaultRowText?: string;
    next?: string;
    pdf?: string;
    previous?: string;
    save?: string;
    showFullDay?: string;
    showWorkDay?: string;
    time?: string;
    today?: string;
    editable?: kendo$ui$SchedulerMessagesEditable;
    editor?: kendo$ui$SchedulerMessagesEditor;
    recurrenceEditor?: kendo$ui$SchedulerMessagesRecurrenceEditor;
    recurrenceMessages?: kendo$ui$SchedulerMessagesRecurrenceMessages;
    views?: kendo$ui$SchedulerMessagesViews;
  }

  declare interface kendo$ui$SchedulerPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface kendo$ui$SchedulerPdf {
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: kendo$ui$SchedulerPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface kendo$ui$SchedulerResource {
    dataColorField?: string;
    dataSource?: any | any | kendo$dataDataSource;
    dataTextField?: string;
    dataValueField?: string;
    field?: string;
    multiple?: boolean;
    name?: string;
    title?: string;
    valuePrimitive?: boolean;
  }

  declare interface kendo$ui$SchedulerToolbarItem {
    name?: string;
  }

  declare interface kendo$ui$SchedulerViewEditable {
    create?: boolean;
    destroy?: boolean;
    update?: boolean;
  }

  declare interface kendo$ui$SchedulerViewGroup {
    date?: boolean;
    orientation?: string;
  }

  declare interface kendo$ui$SchedulerView {
    allDayEventTemplate?: string | Function;
    allDaySlot?: boolean;
    allDaySlotTemplate?: string | Function;
    columnWidth?: number;
    dateHeaderTemplate?: string | Function;
    dayTemplate?: string | Function;
    editable?: boolean | kendo$ui$SchedulerViewEditable;
    endTime?: Date;
    eventHeight?: number;
    eventTemplate?: string | Function;
    eventTimeTemplate?: string | Function;
    group?: kendo$ui$SchedulerViewGroup;
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

  declare interface kendo$ui$SchedulerSelectOptions {
    events?: any;
    resources?: any;
    start?: Date;
    end?: Date;
    isAllDay?: boolean;
  }

  declare interface kendo$ui$SchedulerOptions {
    name?: string;
    allDayEventTemplate?: string | Function;
    allDaySlot?: boolean;
    autoBind?: boolean;
    currentTimeMarker?: boolean | kendo$ui$SchedulerCurrentTimeMarker;
    dataSource?: any | any | kendo$dataSchedulerDataSource;
    date?: Date;
    dateHeaderTemplate?: string | Function;
    editable?: boolean | kendo$ui$SchedulerEditable;
    endTime?: Date;
    eventTemplate?: string | Function;
    footer?: boolean | kendo$ui$SchedulerFooter;
    group?: kendo$ui$SchedulerGroup;
    groupHeaderTemplate?: string | Function;
    height?: number | string;
    majorTick?: number;
    majorTimeHeaderTemplate?: string | Function;
    max?: Date;
    messages?: kendo$ui$SchedulerMessages;
    min?: Date;
    minorTickCount?: number;
    minorTimeHeaderTemplate?: string | Function;
    mobile?: boolean | string;
    pdf?: kendo$ui$SchedulerPdf;
    resources?: kendo$ui$SchedulerResource[];
    selectable?: boolean;
    showWorkHours?: boolean;
    snap?: boolean;
    startTime?: Date;
    timezone?: string;
    toolbar?: kendo$ui$SchedulerToolbarItem[];
    views?: kendo$ui$SchedulerView[];
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
    remove?: (e: ui$SchedulerRemoveEvent) => void;
    resizeStart?: (e: ui$SchedulerResizeStartEvent) => void;
    resize?: (e: ui$SchedulerResizeEvent) => void;
    resizeEnd?: (e: ui$SchedulerResizeEndEvent) => void;
    save?: (e: ui$SchedulerSaveEvent) => void;
  }

  declare interface kendo$ui$SchedulerEvent {
    sender: kendo$ui$Scheduler;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$SchedulerAddEvent = {
    event?: any
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerCancelEvent = {
    container?: JQuery,
    event?: kendo$dataSchedulerEvent
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerChangeEvent = {
    start?: Date,
    end?: Date,
    events?: any,
    slots?: any,
    resources?: any
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerDataBindingEvent = {} & SchedulerEvent;

  declare type kendo$ui$SchedulerDataBoundEvent = {} & SchedulerEvent;

  declare type kendo$ui$SchedulerEditEvent = {
    container?: JQuery,
    event?: kendo$dataSchedulerEvent
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerMoveStartEvent = {
    event?: kendo$dataSchedulerEvent
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerMoveEvent = {
    event?: kendo$dataSchedulerEvent,
    slot?: any
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerMoveEndEvent = {
    start?: Date,
    end?: Date,
    event?: kendo$dataSchedulerEvent,
    slot?: any,
    resources?: any
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerNavigateEvent = {
    action?: string,
    date?: Date,
    view?: string
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerRemoveEvent = {
    event?: kendo$dataSchedulerEvent
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerResizeStartEvent = {
    event?: kendo$dataSchedulerEvent
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerResizeEvent = {
    event?: kendo$dataSchedulerEvent,
    slot?: any
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerResizeEndEvent = {
    start?: Date,
    end?: Date,
    event?: kendo$dataSchedulerEvent,
    slot?: any
  } & SchedulerEvent;

  declare type kendo$ui$SchedulerSaveEvent = {
    container?: JQuery,
    event?: kendo$dataSchedulerEvent
  } & SchedulerEvent;

  declare class kendo$ui$ScrollView mixins undefined.Widget {
    static fn: kendo$ui$ScrollView;
    options: ui$ScrollViewOptions;
    dataSource: kendo$dataDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ScrollView;
    constructor(element: drawing$Element, options?: ui$ScrollViewOptions): this;
    content(content: string): void;
    content(content: JQuery): void;
    destroy(): void;
    next(): void;
    prev(): void;
    refresh(): void;
    scrollTo(page: number, instant: boolean): void;
    setDataSource(dataSource: kendo$dataDataSource): void;
  }

  declare interface kendo$ui$ScrollViewOptions {
    name?: string;
    autoBind?: boolean;
    bounceVelocityThreshold?: number;
    contentHeight?: number | string;
    dataSource?: kendo$dataDataSource | any;
    duration?: number;
    emptyTemplate?: string;
    enablePager?: boolean;
    page?: number;
    template?: string;
    velocityThreshold?: number;
    change?: (e: ui$ScrollViewChangeEvent) => void;
    refresh?: (e: ui$ScrollViewRefreshEvent) => void;
    name?: string;
    autoBind?: boolean;
    bounceVelocityThreshold?: number;
    contentHeight?: number | string;
    dataSource?: kendo$dataDataSource | any;
    duration?: number;
    emptyTemplate?: string;
    enablePager?: boolean;
    itemsPerPage?: number;
    page?: number;
    pageSize?: number;
    template?: string;
    velocityThreshold?: number;
    changing?: (e: ui$ScrollViewChangingEvent) => void;
    change?: (e: ui$ScrollViewChangeEvent) => void;
    refresh?: (e: ui$ScrollViewRefreshEvent) => void;
  }

  declare interface kendo$ui$ScrollViewEvent {
    sender: kendo$ui$ScrollView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$ui$ScrollView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ScrollViewChangeEvent = {
    currentPage?: number,
    nextPage?: number,
    element?: JQuery,
    data?: any,
    page?: number,
    element?: JQuery,
    data?: any
  } & ScrollViewEvent;

  declare type kendo$ui$ScrollViewRefreshEvent = {
    pageCount?: number,
    page?: number,
    pageCount?: number,
    page?: number
  } & ScrollViewEvent;

  declare class kendo$ui$Slider mixins undefined.Widget {
    static fn: kendo$ui$Slider;
    options: ui$SliderOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Slider;
    constructor(element: drawing$Element, options?: ui$SliderOptions): this;
    destroy(): void;
    enable(enable: boolean): void;
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

  declare interface kendo$ui$SliderTooltip {
    enabled?: boolean;
    format?: string;
    template?: string | Function;
  }

  declare interface kendo$ui$SliderOptions {
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
    tooltip?: kendo$ui$SliderTooltip;
    value?: number;
    change?: (e: ui$SliderChangeEvent) => void;
    slide?: (e: ui$SliderSlideEvent) => void;
  }

  declare interface kendo$ui$SliderEvent {
    sender: kendo$ui$Slider;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$SliderChangeEvent = {
    value?: number
  } & SliderEvent;

  declare type kendo$ui$SliderSlideEvent = {
    value?: number
  } & SliderEvent;

  declare class kendo$ui$Sortable mixins undefined.Widget {
    static fn: kendo$ui$Sortable;
    options: ui$SortableOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Sortable;
    constructor(element: drawing$Element, options?: ui$SortableOptions): this;
    indexOf(element: JQuery): number;
    items(): JQuery;
  }

  declare interface kendo$ui$SortableCursorOffset {
    left?: number;
    top?: number;
  }

  declare interface kendo$ui$SortableOptions {
    name?: string;
    axis?: string;
    autoScroll?: boolean;
    container?: string | JQuery;
    connectWith?: string;
    cursor?: string;
    cursorOffset?: kendo$ui$SortableCursorOffset;
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

  declare interface kendo$ui$SortableEvent {
    sender: kendo$ui$Sortable;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$SortableStartEvent = {
    draggableEvent?: any,
    item?: JQuery
  } & SortableEvent;

  declare type kendo$ui$SortableMoveEvent = {
    item?: JQuery,
    target?: JQuery,
    list?: kendo$uiSortable,
    draggableEvent?: any
  } & SortableEvent;

  declare type kendo$ui$SortableEndEvent = {
    action?: string,
    item?: JQuery,
    oldIndex?: number,
    newIndex?: number,
    draggableEvent?: any
  } & SortableEvent;

  declare type kendo$ui$SortableChangeEvent = {
    action?: string,
    item?: JQuery,
    oldIndex?: number,
    newIndex?: number,
    draggableEvent?: any
  } & SortableEvent;

  declare type kendo$ui$SortableCancelEvent = {
    item?: JQuery
  } & SortableEvent;

  declare class kendo$ui$Splitter mixins undefined.Widget {
    static fn: kendo$ui$Splitter;
    options: ui$SplitterOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Splitter;
    constructor(element: drawing$Element, options?: ui$SplitterOptions): this;
    ajaxRequest(pane: string, url: string, data: any): void;
    ajaxRequest(pane: string, url: string, data: string): void;
    ajaxRequest(pane: drawing$Element, url: string, data: any): void;
    ajaxRequest(pane: drawing$Element, url: string, data: string): void;
    ajaxRequest(pane: JQuery, url: string, data: any): void;
    ajaxRequest(pane: JQuery, url: string, data: string): void;
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

  declare interface kendo$ui$SplitterPane {
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

  declare interface kendo$ui$SplitterOptions {
    name?: string;
    orientation?: string;
    panes?: kendo$ui$SplitterPane[];
    collapse?: (e: ui$SplitterCollapseEvent) => void;
    contentLoad?: (e: ui$SplitterContentLoadEvent) => void;
    error?: (e: ui$SplitterErrorEvent) => void;
    expand?: (e: ui$SplitterExpandEvent) => void;
    layoutChange?: (e: ui$SplitterEvent) => void;
    resize?: (e: ui$SplitterEvent) => void;
  }

  declare interface kendo$ui$SplitterEvent {
    sender: kendo$ui$Splitter;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$SplitterCollapseEvent = {
    pane?: drawing$Element
  } & SplitterEvent;

  declare type kendo$ui$SplitterContentLoadEvent = {
    pane?: drawing$Element
  } & SplitterEvent;

  declare type kendo$ui$SplitterErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & SplitterEvent;

  declare type kendo$ui$SplitterExpandEvent = {
    pane?: drawing$Element
  } & SplitterEvent;

  declare class kendo$ui$Spreadsheet mixins undefined.Widget {
    static fn: kendo$ui$Spreadsheet;
    options: ui$SpreadsheetOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Spreadsheet;
    constructor(
      element: drawing$Element,
      options?: ui$SpreadsheetOptions
    ): this;
    activeSheet(): kendo$spreadsheetSheet;
    activeSheet(sheet?: kendo$spreadsheetSheet): void;
    cellContextMenu(): kendo$uiContextMenu;
    rowHeaderContextMenu(): kendo$uiContextMenu;
    colHeaderContextMenu(): kendo$uiContextMenu;
    sheets(): any;
    fromFile(blob: Blob): JQueryPromise<any>;
    fromFile(blob: File): JQueryPromise<any>;
    saveAsExcel(): void;
    saveAsPDF(): JQueryPromise<any>;
    sheetByName(name: string): kendo$spreadsheetSheet;
    sheetIndex(sheet: kendo$spreadsheetSheet): number;
    sheetByIndex(index: number): kendo$spreadsheetSheet;
    insertSheet(options: any): kendo$spreadsheetSheet;
    moveSheetToIndex(sheet: kendo$spreadsheetSheet, index: number): void;
    refresh(): void;
    removeSheet(sheet: kendo$spreadsheetSheet): void;
    renameSheet(
      sheet: kendo$spreadsheetSheet,
      newSheetName: string
    ): kendo$spreadsheetSheet;
    toJSON(): any;
    fromJSON(data: any): void;
    defineName(name: string, value: string, hidden: boolean): void;
    undefineName(name: string): void;
  }

  declare interface kendo$ui$SpreadsheetDefaultCellStyle {
    background?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    Italic?: boolean;
    bold?: boolean;
    underline?: boolean;
    wrap?: boolean;
  }

  declare interface kendo$ui$SpreadsheetExcel {
    fileName?: string;
    forceProxy?: boolean;
    proxyURL?: string;
  }

  declare interface kendo$ui$SpreadsheetPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface kendo$ui$SpreadsheetPdf {
    area?: string;
    author?: string;
    creator?: string;
    date?: Date;
    fileName?: string;
    fitWidth?: boolean;
    forceProxy?: boolean;
    guidelines?: boolean;
    hCenter?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: kendo$ui$SpreadsheetPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
    vCenter?: boolean;
  }

  declare interface kendo$ui$SpreadsheetSheetColumn {
    index?: number;
    width?: number;
  }

  declare interface kendo$ui$SpreadsheetSheetFilterColumnCriteriaItem {
    operator?: string;
    value?: string;
  }

  declare interface kendo$ui$SpreadsheetSheetFilterColumn {
    criteria?: kendo$ui$SpreadsheetSheetFilterColumnCriteriaItem[];
    filter?: string;
    index?: number;
    logic?: string;
    type?: string;
    value?: number | string | Date;
    values?: any;
  }

  declare interface kendo$ui$SpreadsheetSheetFilter {
    columns?: kendo$ui$SpreadsheetSheetFilterColumn[];
    ref?: string;
  }

  declare interface kendo$ui$SpreadsheetSheetRowCellBorderBottom {
    color?: string;
    size?: string;
  }

  declare interface kendo$ui$SpreadsheetSheetRowCellBorderLeft {
    color?: string;
    size?: string;
  }

  declare interface kendo$ui$SpreadsheetSheetRowCellBorderRight {
    color?: string;
    size?: string;
  }

  declare interface kendo$ui$SpreadsheetSheetRowCellBorderTop {
    color?: string;
    size?: string;
  }

  declare interface kendo$ui$SpreadsheetSheetRowCellValidation {
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

  declare interface kendo$ui$SpreadsheetSheetRowCell {
    background?: string;
    borderBottom?: kendo$ui$SpreadsheetSheetRowCellBorderBottom;
    borderLeft?: kendo$ui$SpreadsheetSheetRowCellBorderLeft;
    borderTop?: kendo$ui$SpreadsheetSheetRowCellBorderTop;
    borderRight?: kendo$ui$SpreadsheetSheetRowCellBorderRight;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    italic?: boolean;
    bold?: boolean;
    enable?: boolean;
    format?: string;
    formula?: string;
    index?: number;
    link?: string;
    textAlign?: string;
    underline?: boolean;
    value?: number | string | boolean | Date;
    validation?: kendo$ui$SpreadsheetSheetRowCellValidation;
    verticalAlign?: string;
    wrap?: boolean;
  }

  declare interface kendo$ui$SpreadsheetSheetRow {
    cells?: kendo$ui$SpreadsheetSheetRowCell[];
    height?: number;
    index?: number;
    type?: string;
  }

  declare interface kendo$ui$SpreadsheetSheetSortColumn {
    ascending?: boolean;
    index?: number;
  }

  declare interface kendo$ui$SpreadsheetSheetSort {
    columns?: kendo$ui$SpreadsheetSheetSortColumn[];
    ref?: string;
  }

  declare interface kendo$ui$SpreadsheetSheet {
    activeCell?: string;
    name?: string;
    columns?: kendo$ui$SpreadsheetSheetColumn[];
    dataSource?: kendo$dataDataSource;
    filter?: kendo$ui$SpreadsheetSheetFilter;
    frozenColumns?: number;
    frozenRows?: number;
    mergedCells?: any;
    rows?: kendo$ui$SpreadsheetSheetRow[];
    selection?: string;
    showGridLines?: boolean;
    sort?: kendo$ui$SpreadsheetSheetSort;
  }

  declare interface kendo$ui$SpreadsheetToolbar {
    home?: boolean | any;
    insert?: boolean | any;
    data?: boolean | any;
  }

  declare interface kendo$ui$SpreadsheetInsertSheetOptions {
    rows?: number;
    columns?: number;
    rowHeight?: number;
    columnWidth?: number;
    headerHeight?: number;
    headerWidth?: number;
    dataSource?: kendo$dataDataSource;
    data?: any;
  }

  declare interface kendo$ui$SpreadsheetOptions {
    name?: string;
    activeSheet?: string;
    columnWidth?: number;
    columns?: number;
    defaultCellStyle?: kendo$ui$SpreadsheetDefaultCellStyle;
    headerHeight?: number;
    headerWidth?: number;
    excel?: kendo$ui$SpreadsheetExcel;
    pdf?: kendo$ui$SpreadsheetPdf;
    rowHeight?: number;
    rows?: number;
    sheets?: kendo$ui$SpreadsheetSheet[];
    sheetsbar?: boolean;
    toolbar?: boolean | kendo$ui$SpreadsheetToolbar;
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
    render?: (e: ui$SpreadsheetRenderEvent) => void;
    excelExport?: (e: ui$SpreadsheetExcelExportEvent) => void;
    excelImport?: (e: ui$SpreadsheetExcelImportEvent) => void;
    pdfExport?: (e: ui$SpreadsheetPdfExportEvent) => void;
  }

  declare interface kendo$ui$SpreadsheetEvent {
    sender: kendo$ui$Spreadsheet;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$SpreadsheetInsertSheetEvent = {} & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetRemoveSheetEvent = {
    sheet?: kendo$spreadsheetSheet
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetRenameSheetEvent = {
    sheet?: kendo$spreadsheetSheet,
    newSheetName?: string
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetSelectSheetEvent = {
    sheet?: kendo$spreadsheetSheet
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetUnhideColumnEvent = {
    sheet?: kendo$spreadsheetSheet,
    index?: number
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetUnhideRowEvent = {
    sheet?: kendo$spreadsheetSheet,
    index?: number
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetHideColumnEvent = {
    sheet?: kendo$spreadsheetSheet,
    index?: number
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetHideRowEvent = {
    sheet?: kendo$spreadsheetSheet,
    index?: number
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetDeleteColumnEvent = {
    sheet?: kendo$spreadsheetSheet,
    index?: number
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetDeleteRowEvent = {
    sheet?: kendo$spreadsheetSheet,
    index?: number
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetInsertColumnEvent = {
    sheet?: kendo$spreadsheetSheet,
    index?: number
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetInsertRowEvent = {
    sheet?: kendo$spreadsheetSheet,
    index?: number
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetSelectEvent = {
    range?: kendo$spreadsheetRange
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetChangeFormatEvent = {
    range?: kendo$spreadsheetRange
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetChangeEvent = {
    range?: kendo$spreadsheetRange
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetRenderEvent = {} & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetExcelExportEvent = {
    data?: any,
    workbook?: kendo$ooxmlWorkbook
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetExcelImportEvent = {
    file?: Blob | File,
    progress?: JQueryPromise<any>
  } & SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & SpreadsheetEvent;

  declare class kendo$ui$Switch mixins undefined.Widget {
    static fn: kendo$ui$Switch;
    options: ui$SwitchOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Switch;
    constructor(element: drawing$Element, options?: ui$SwitchOptions): this;
    check(): boolean;
    check(check: boolean): void;
    destroy(): void;
    enable(enable: boolean): void;
    toggle(): void;
    setOptions(options: any): void;
  }

  declare interface kendo$ui$SwitchOptions {
    name?: string;
    checked?: boolean;
    enabled?: boolean;
    readonly?: boolean;
    width?: number | string;
    change?: (e: ui$SwitchChangeEvent) => void;
    name?: string;
    checked?: boolean;
    enable?: boolean;
    offLabel?: string;
    onLabel?: string;
    change?: (e: ui$SwitchChangeEvent) => void;
  }

  declare interface kendo$ui$SwitchMessages {
    checked?: string;
    unchecked?: string;
  }

  declare interface kendo$ui$SwitchEvent {
    sender: kendo$ui$Switch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$ui$Switch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$SwitchChangeEvent = {
    checked?: any,
    checked?: any
  } & SwitchEvent;

  declare class kendo$ui$TabStrip mixins undefined.Widget {
    static fn: kendo$ui$TabStrip;
    options: ui$TabStripOptions;
    dataSource: kendo$dataDataSource;
    tabGroup: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$TabStrip;
    constructor(element: drawing$Element, options?: ui$TabStripOptions): this;
    activateTab(item: JQuery): void;
    append(tab: any): kendo$uiTabStrip;
    contentElement(itemIndex: number): drawing$Element;
    contentHolder(itemIndex: number): drawing$Element;
    deactivateTab(item: JQuery): void;
    destroy(): void;
    disable(element: string): kendo$uiTabStrip;
    disable(element: drawing$Element): kendo$uiTabStrip;
    disable(element: JQuery): kendo$uiTabStrip;
    enable(element: string, enable?: boolean): kendo$uiTabStrip;
    enable(element: drawing$Element, enable?: boolean): kendo$uiTabStrip;
    enable(element: JQuery, enable?: boolean): kendo$uiTabStrip;
    insertAfter(item: any, referenceTab: string): kendo$uiTabStrip;
    insertAfter(item: any, referenceTab: drawing$Element): kendo$uiTabStrip;
    insertAfter(item: any, referenceTab: JQuery): kendo$uiTabStrip;
    insertAfter(item: string, referenceTab: string): kendo$uiTabStrip;
    insertAfter(item: string, referenceTab: drawing$Element): kendo$uiTabStrip;
    insertAfter(item: string, referenceTab: JQuery): kendo$uiTabStrip;
    insertAfter(item: drawing$Element, referenceTab: string): kendo$uiTabStrip;
    insertAfter(
      item: drawing$Element,
      referenceTab: drawing$Element
    ): kendo$uiTabStrip;
    insertAfter(item: drawing$Element, referenceTab: JQuery): kendo$uiTabStrip;
    insertAfter(item: JQuery, referenceTab: string): kendo$uiTabStrip;
    insertAfter(item: JQuery, referenceTab: drawing$Element): kendo$uiTabStrip;
    insertAfter(item: JQuery, referenceTab: JQuery): kendo$uiTabStrip;
    insertBefore(item: any, referenceTab: string): kendo$uiTabStrip;
    insertBefore(item: any, referenceTab: drawing$Element): kendo$uiTabStrip;
    insertBefore(item: any, referenceTab: JQuery): kendo$uiTabStrip;
    insertBefore(item: string, referenceTab: string): kendo$uiTabStrip;
    insertBefore(item: string, referenceTab: drawing$Element): kendo$uiTabStrip;
    insertBefore(item: string, referenceTab: JQuery): kendo$uiTabStrip;
    insertBefore(item: drawing$Element, referenceTab: string): kendo$uiTabStrip;
    insertBefore(
      item: drawing$Element,
      referenceTab: drawing$Element
    ): kendo$uiTabStrip;
    insertBefore(item: drawing$Element, referenceTab: JQuery): kendo$uiTabStrip;
    insertBefore(item: JQuery, referenceTab: string): kendo$uiTabStrip;
    insertBefore(item: JQuery, referenceTab: drawing$Element): kendo$uiTabStrip;
    insertBefore(item: JQuery, referenceTab: JQuery): kendo$uiTabStrip;
    items(): HTMLCollection;
    reload(element: string): kendo$uiTabStrip;
    reload(element: drawing$Element): kendo$uiTabStrip;
    reload(element: JQuery): kendo$uiTabStrip;
    remove(element: string): kendo$uiTabStrip;
    remove(element: number): kendo$uiTabStrip;
    remove(element: JQuery): kendo$uiTabStrip;
    select(): JQuery;
    select(element: string): void;
    select(element: drawing$Element): void;
    select(element: JQuery): void;
    select(element: number): void;
    setDataSource(dataSource: any): void;
    setDataSource(dataSource: kendo$dataDataSource): void;
  }

  declare interface kendo$ui$TabStripAnimationClose {
    duration?: number;
    effects?: string;
  }

  declare interface kendo$ui$TabStripAnimationOpen {
    duration?: number;
    effects?: string;
  }

  declare interface kendo$ui$TabStripAnimation {
    close?: kendo$ui$TabStripAnimationClose;
    open?: kendo$ui$TabStripAnimationOpen;
  }

  declare interface kendo$ui$TabStripScrollable {
    distance?: number;
  }

  declare interface kendo$ui$TabStripOptions {
    name?: string;
    animation?: boolean | kendo$ui$TabStripAnimation;
    collapsible?: boolean;
    contentUrls?: any;
    dataContentField?: string;
    dataContentUrlField?: string;
    dataImageUrlField?: string;
    dataSource?: any | any | kendo$dataDataSource;
    dataSpriteCssClass?: string;
    dataTextField?: string;
    dataUrlField?: string;
    navigatable?: boolean;
    scrollable?: boolean | kendo$ui$TabStripScrollable;
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

  declare interface kendo$ui$TabStripEvent {
    sender: kendo$ui$TabStrip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$ui$TabStrip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$TabStripActivateEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element
  } & TabStripEvent;

  declare type kendo$ui$TabStripContentLoadEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element
  } & TabStripEvent;

  declare type kendo$ui$TabStripErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & TabStripEvent;

  declare type kendo$ui$TabStripSelectEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element,
    item?: JQuery
  } & TabStripEvent;

  declare type kendo$ui$TabStripShowEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element
  } & TabStripEvent;

  declare class kendo$ui$TimePicker mixins undefined.Widget {
    static fn: kendo$ui$TimePicker;
    options: ui$TimePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$TimePicker;
    constructor(element: drawing$Element, options?: ui$TimePickerOptions): this;
    close(): void;
    destroy(): void;
    enable(enable: boolean): void;
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

  declare interface kendo$ui$TimePickerAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$TimePickerAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$TimePickerAnimation {
    close?: kendo$ui$TimePickerAnimationClose;
    open?: kendo$ui$TimePickerAnimationOpen;
  }

  declare interface kendo$ui$TimePickerOptions {
    name?: string;
    animation?: boolean | kendo$ui$TimePickerAnimation;
    culture?: string;
    dateInput?: boolean;
    dates?: any;
    format?: string;
    interval?: number;
    max?: Date;
    min?: Date;
    parseFormats?: any;
    value?: Date;
    change?: (e: ui$TimePickerChangeEvent) => void;
    close?: (e: ui$TimePickerCloseEvent) => void;
    open?: (e: ui$TimePickerOpenEvent) => void;
  }

  declare interface kendo$ui$TimePickerEvent {
    sender: kendo$ui$TimePicker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$TimePickerChangeEvent = {} & TimePickerEvent;

  declare type kendo$ui$TimePickerCloseEvent = {} & TimePickerEvent;

  declare type kendo$ui$TimePickerOpenEvent = {} & TimePickerEvent;

  declare class kendo$ui$ToolBar mixins undefined.Widget {
    static fn: kendo$ui$ToolBar;
    options: ui$ToolBarOptions;
    element: JQuery;
    wrapper: JQuery;
    popup: kendo$uiPopup;
    static extend(proto: Object): kendo$ui$ToolBar;
    constructor(element: drawing$Element, options?: ui$ToolBarOptions): this;
    add(command: any): void;
    destroy(): void;
    enable(command: string, enable: boolean): void;
    enable(command: drawing$Element, enable: boolean): void;
    enable(command: JQuery, enable: boolean): void;
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

  declare interface kendo$ui$ToolBarItemButton {
    attributes?: any;
    click?: Function;
    enable?: boolean;
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

  declare interface kendo$ui$ToolBarItemMenuButton {
    attributes?: any;
    enable?: boolean;
    hidden?: boolean;
    icon?: string;
    id?: string;
    imageUrl?: string;
    spriteCssClass?: string;
    text?: string;
    url?: string;
  }

  declare interface kendo$ui$ToolBarItem {
    attributes?: any;
    buttons?: kendo$ui$ToolBarItemButton[];
    click?: Function;
    enable?: boolean;
    group?: string;
    hidden?: boolean;
    icon?: string;
    id?: string;
    imageUrl?: string;
    menuButtons?: kendo$ui$ToolBarItemMenuButton[];
    overflow?: string;
    overflowTemplate?: string | Function;
    primary?: boolean;
    selected?: boolean;
    showIcon?: string;
    showText?: string;
    spriteCssClass?: string;
    template?: string | Function;
    text?: string;
    togglable?: boolean;
    toggle?: Function;
    type?: string;
    url?: string;
  }

  declare interface kendo$ui$ToolBarOptions {
    name?: string;
    resizable?: boolean;
    items?: kendo$ui$ToolBarItem[];
    click?: (e: ui$ToolBarClickEvent) => void;
    close?: (e: ui$ToolBarCloseEvent) => void;
    open?: (e: ui$ToolBarOpenEvent) => void;
    toggle?: (e: ui$ToolBarToggleEvent) => void;
    overflowClose?: (e: ui$ToolBarOverflowCloseEvent) => void;
    overflowOpen?: (e: ui$ToolBarOverflowOpenEvent) => void;
  }

  declare interface kendo$ui$ToolBarEvent {
    sender: kendo$ui$ToolBar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ToolBarClickEvent = {
    target?: JQuery,
    id?: string
  } & ToolBarEvent;

  declare type kendo$ui$ToolBarCloseEvent = {
    SplitButton?: JQuery
  } & ToolBarEvent;

  declare type kendo$ui$ToolBarOpenEvent = {
    SplitButton?: JQuery
  } & ToolBarEvent;

  declare type kendo$ui$ToolBarToggleEvent = {
    target?: JQuery,
    checked?: boolean,
    id?: string
  } & ToolBarEvent;

  declare type kendo$ui$ToolBarOverflowCloseEvent = {} & ToolBarEvent;

  declare type kendo$ui$ToolBarOverflowOpenEvent = {} & ToolBarEvent;

  declare class kendo$ui$Tooltip mixins undefined.Widget {
    static fn: kendo$ui$Tooltip;
    options: drawing$TooltipOptions;
    popup: kendo$uiPopup;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Tooltip;
    constructor(
      element: drawing$Element,
      options?: drawing$TooltipOptions
    ): this;
    show(element: JQuery): void;
    hide(): void;
    refresh(): void;
    target(): JQuery;
  }

  declare interface kendo$ui$TooltipAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$TooltipAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$TooltipAnimation {
    close?: kendo$ui$TooltipAnimationClose;
    open?: kendo$ui$TooltipAnimationOpen;
  }

  declare interface kendo$ui$TooltipContent {
    url?: string;
  }

  declare interface kendo$ui$TooltipOptions {
    name?: string;
    autoHide?: boolean;
    animation?: boolean | kendo$ui$TooltipAnimation;
    content?: string | Function | kendo$ui$TooltipContent;
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
    offset?: number;
    shared?: boolean;
    showAfter?: number;
    showOn?: string;
    width?: number | string;
    autoHide?: boolean;
    content?: string | Function;
    position?: string;
    height?: number | string;
    hideDelay?: number;
    offset?: number;
    shared?: boolean;
    showAfter?: number;
    showOn?: string;
    width?: number | string;
  }

  declare interface kendo$ui$TooltipEvent {
    sender: kendo$ui$Tooltip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$TooltipRequestStartEvent = {
    target?: JQuery,
    options?: any
  } & TooltipEvent;

  declare type kendo$ui$TooltipErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & TooltipEvent;

  declare class kendo$ui$Touch mixins undefined.Widget {
    static fn: kendo$ui$Touch;
    options: ui$TouchOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Touch;
    constructor(element: drawing$Element, options?: ui$TouchOptions): this;
    cancel(): void;
    destroy(): void;
  }

  declare interface kendo$ui$TouchOptions {
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

  declare interface kendo$ui$TouchEvent {
    sender: kendo$ui$Touch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$TouchTouchstartEvent = {
    touch?: kendo$mobileuiTouchEventOptions,
    event?: JQueryEventObject
  } & TouchEvent;

  declare type kendo$ui$TouchDragstartEvent = {
    touch?: kendo$mobileuiTouchEventOptions,
    event?: JQueryEventObject
  } & TouchEvent;

  declare type kendo$ui$TouchDragEvent = {
    touch?: kendo$mobileuiTouchEventOptions,
    event?: JQueryEventObject
  } & TouchEvent;

  declare type kendo$ui$TouchDragendEvent = {
    touch?: kendo$mobileuiTouchEventOptions,
    event?: JQueryEventObject
  } & TouchEvent;

  declare type kendo$ui$TouchTapEvent = {
    touch?: kendo$mobileuiTouchEventOptions,
    event?: JQueryEventObject
  } & TouchEvent;

  declare type kendo$ui$TouchDoubletapEvent = {
    touch?: kendo$mobileuiTouchEventOptions,
    event?: JQueryEventObject
  } & TouchEvent;

  declare type kendo$ui$TouchHoldEvent = {
    touch?: kendo$mobileuiTouchEventOptions,
    event?: JQueryEventObject
  } & TouchEvent;

  declare type kendo$ui$TouchSwipeEvent = {
    touch?: kendo$mobileuiTouchEventOptions,
    event?: JQueryEventObject,
    direction?: string
  } & TouchEvent;

  declare type kendo$ui$TouchGesturestartEvent = {
    touches?: any,
    event?: JQueryEventObject,
    distance?: number,
    center?: kendo$mobileuiPoint
  } & TouchEvent;

  declare type kendo$ui$TouchGesturechangeEvent = {
    touches?: any,
    event?: JQueryEventObject,
    distance?: number,
    center?: kendo$mobileuiPoint
  } & TouchEvent;

  declare type kendo$ui$TouchGestureendEvent = {
    touches?: any,
    event?: JQueryEventObject,
    distance?: number,
    center?: kendo$mobileuiPoint
  } & TouchEvent;

  declare class kendo$ui$TreeList mixins undefined.Widget {
    static fn: kendo$ui$TreeList;
    options: ui$TreeListOptions;
    dataSource: kendo$dataDataSource;
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
    static extend(proto: Object): kendo$ui$TreeList;
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
    dataItem(row: string): kendo$dataTreeListModel;
    dataItem(row: drawing$Element): kendo$dataTreeListModel;
    dataItem(row: JQuery): kendo$dataTreeListModel;
    destroy(): void;
    editCell(cell: JQuery): void;
    editRow(row: JQuery): void;
    expand(row: string): JQueryPromise<any>;
    expand(row: drawing$Element): JQueryPromise<any>;
    expand(row: JQuery): JQueryPromise<any>;
    itemFor(model: kendo$dataTreeListModel): JQuery;
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
    setDataSource(dataSource: kendo$dataTreeListDataSource): void;
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

  declare interface kendo$ui$TreeListColumnMenuMessages {
    columns?: string;
    filter?: string;
    sortAscending?: string;
    sortDescending?: string;
    settings?: string;
    lock?: string;
    unlock?: string;
  }

  declare interface kendo$ui$TreeListColumnMenu {
    columns?: boolean;
    filterable?: boolean;
    sortable?: boolean;
    messages?: kendo$ui$TreeListColumnMenuMessages;
  }

  declare interface kendo$ui$TreeListColumnCommandItem {
    className?: string;
    imageClass?: string;
    click?: Function;
    name?: string;
    text?: string;
  }

  declare interface kendo$ui$TreeListColumnFilterable {
    ui?: string | Function;
  }

  declare interface kendo$ui$TreeListColumnSortable {
    compare?: Function;
  }

  declare interface kendo$ui$TreeListColumn {
    editor?: (container: JQuery, options: ui$TreeListEditorOptions) => void;
    attributes?: any;
    columns?: any;
    command?: kendo$ui$TreeListColumnCommandItem[];
    editable?: Function;
    encoded?: boolean;
    expandable?: boolean;
    field?: string;
    filterable?: boolean | kendo$ui$TreeListColumnFilterable;
    footerTemplate?: string | Function;
    format?: string;
    headerAttributes?: any;
    headerTemplate?: string | Function;
    minScreenWidth?: number;
    sortable?: boolean | kendo$ui$TreeListColumnSortable;
    template?: string | Function;
    title?: string;
    width?: string | number;
    hidden?: boolean;
    menu?: boolean;
    locked?: boolean;
    lockable?: boolean;
  }

  declare interface kendo$ui$TreeListEditable {
    mode?: string;
    move?: boolean;
    template?: string | Function;
    window?: any;
  }

  declare interface kendo$ui$TreeListExcel {
    fileName?: string;
    filterable?: boolean;
    forceProxy?: boolean;
    proxyURL?: string;
  }

  declare interface kendo$ui$TreeListFilterableMessages {
    and?: string;
    clear?: string;
    filter?: string;
    info?: string;
    title?: string;
    isFalse?: string;
    isTrue?: string;
    or?: string;
  }

  declare interface kendo$ui$TreeListFilterableOperatorsDate {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface kendo$ui$TreeListFilterableOperatorsNumber {
    eq?: string;
    neq?: string;
    isnull?: string;
    isnotnull?: string;
    gte?: string;
    gt?: string;
    lte?: string;
    lt?: string;
  }

  declare interface kendo$ui$TreeListFilterableOperatorsString {
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

  declare interface kendo$ui$TreeListFilterableOperators {
    string?: kendo$ui$TreeListFilterableOperatorsString;
    number?: kendo$ui$TreeListFilterableOperatorsNumber;
    date?: kendo$ui$TreeListFilterableOperatorsDate;
  }

  declare interface kendo$ui$TreeListFilterable {
    extra?: boolean;
    messages?: kendo$ui$TreeListFilterableMessages;
    operators?: kendo$ui$TreeListFilterableOperators;
  }

  declare interface kendo$ui$TreeListMessagesCommands {
    canceledit?: string;
    create?: string;
    createchild?: string;
    destroy?: string;
    edit?: string;
    save?: string;
    cancel?: string;
    excel?: string;
    pdf?: string;
    update?: string;
  }

  declare interface kendo$ui$TreeListMessages {
    commands?: kendo$ui$TreeListMessagesCommands;
    loading?: string;
    noRows?: string;
    requestFailed?: string;
    retry?: string;
  }

  declare interface kendo$ui$TreeListPageableMessages {
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

  declare interface kendo$ui$TreeListPageable {
    alwaysVisible?: boolean;
    pageSize?: number;
    previousNext?: boolean;
    numeric?: boolean;
    buttonCount?: number;
    input?: boolean;
    pageSizes?: boolean | any;
    refresh?: boolean;
    info?: boolean;
    messages?: kendo$ui$TreeListPageableMessages;
  }

  declare interface kendo$ui$TreeListPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface kendo$ui$TreeListPdf {
    author?: string;
    avoidLinks?: boolean | string;
    creator?: string;
    date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: kendo$ui$TreeListPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface kendo$ui$TreeListSortable {
    allowUnsort?: boolean;
    mode?: string;
  }

  declare interface kendo$ui$TreeListToolbarItem {
    click?: Function;
    imageClass?: string;
    name?: string;
    text?: string;
  }

  declare interface kendo$ui$TreeListOptions {
    name?: string;
    autoBind?: boolean;
    columns?: kendo$ui$TreeListColumn[];
    resizable?: boolean;
    reorderable?: boolean;
    columnMenu?: boolean | kendo$ui$TreeListColumnMenu;
    dataSource?: any | any | kendo$dataTreeListDataSource;
    editable?: boolean | kendo$ui$TreeListEditable;
    excel?: kendo$ui$TreeListExcel;
    filterable?: boolean | kendo$ui$TreeListFilterable;
    height?: number | string;
    messages?: kendo$ui$TreeListMessages;
    navigatable?: boolean;
    pageable?: boolean | kendo$ui$TreeListPageable;
    pdf?: kendo$ui$TreeListPdf;
    scrollable?: boolean | any;
    selectable?: boolean | string;
    sortable?: boolean | kendo$ui$TreeListSortable;
    toolbar?: kendo$ui$TreeListToolbarItem[] | any;
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
    remove?: (e: ui$TreeListRemoveEvent) => void;
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

  declare interface kendo$ui$TreeListEvent {
    sender: kendo$ui$TreeList;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$TreeListBeforeEditEvent = {
    model?: kendo$dataModel
  } & TreeListEvent;

  declare type kendo$ui$TreeListCancelEvent = {
    container?: JQuery,
    model?: kendo$dataTreeListModel
  } & TreeListEvent;

  declare type kendo$ui$TreeListCellCloseEvent = {
    container?: JQuery,
    model?: kendo$dataModel,
    type?: string
  } & TreeListEvent;

  declare type kendo$ui$TreeListChangeEvent = {} & TreeListEvent;

  declare type kendo$ui$TreeListCollapseEvent = {
    model?: kendo$dataTreeListModel
  } & TreeListEvent;

  declare type kendo$ui$TreeListDataBindingEvent = {} & TreeListEvent;

  declare type kendo$ui$TreeListDataBoundEvent = {} & TreeListEvent;

  declare type kendo$ui$TreeListDragstartEvent = {
    source?: kendo$dataTreeListModel
  } & TreeListEvent;

  declare type kendo$ui$TreeListDragEvent = {
    source?: kendo$dataTreeListModel,
    target?: JQuery
  } & TreeListEvent;

  declare type kendo$ui$TreeListDragendEvent = {
    source?: kendo$dataTreeListModel,
    destination?: kendo$dataTreeListModel
  } & TreeListEvent;

  declare type kendo$ui$TreeListDropEvent = {
    source?: kendo$dataTreeListModel,
    destination?: kendo$dataTreeListModel,
    dropTarget?: drawing$Element,
    valid?: boolean,
    setValid?: boolean
  } & TreeListEvent;

  declare type kendo$ui$TreeListEditEvent = {
    container?: JQuery,
    model?: kendo$dataTreeListModel
  } & TreeListEvent;

  declare type kendo$ui$TreeListExcelExportEvent = {
    data?: any,
    workbook?: any
  } & TreeListEvent;

  declare type kendo$ui$TreeListExpandEvent = {
    model?: kendo$dataTreeListModel
  } & TreeListEvent;

  declare type kendo$ui$TreeListFilterMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & TreeListEvent;

  declare type kendo$ui$TreeListFilterMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & TreeListEvent;

  declare type kendo$ui$TreeListPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & TreeListEvent;

  declare type kendo$ui$TreeListRemoveEvent = {
    model?: kendo$dataTreeListModel,
    row?: JQuery
  } & TreeListEvent;

  declare type kendo$ui$TreeListSaveEvent = {
    model?: kendo$dataTreeListModel,
    container?: JQuery
  } & TreeListEvent;

  declare type kendo$ui$TreeListSaveChangesEvent = {} & TreeListEvent;

  declare type kendo$ui$TreeListColumnShowEvent = {
    column?: any
  } & TreeListEvent;

  declare type kendo$ui$TreeListColumnHideEvent = {
    column?: any
  } & TreeListEvent;

  declare type kendo$ui$TreeListColumnReorderEvent = {
    column?: any,
    newIndex?: number,
    oldIndex?: number
  } & TreeListEvent;

  declare type kendo$ui$TreeListColumnResizeEvent = {
    column?: any,
    newWidth?: number,
    oldWidth?: number
  } & TreeListEvent;

  declare type kendo$ui$TreeListColumnMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & TreeListEvent;

  declare type kendo$ui$TreeListColumnMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & TreeListEvent;

  declare type kendo$ui$TreeListColumnLockEvent = {
    column?: any
  } & TreeListEvent;

  declare type kendo$ui$TreeListColumnUnlockEvent = {
    column?: any
  } & TreeListEvent;

  declare class kendo$ui$TreeView mixins undefined.Widget {
    static fn: kendo$ui$TreeView;
    options: ui$TreeViewOptions;
    dataSource: kendo$dataDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$TreeView;
    constructor(element: drawing$Element, options?: ui$TreeViewOptions): this;
    append(nodeData: any, parentNode?: JQuery, success?: Function): JQuery;
    append(nodeData: JQuery, parentNode?: JQuery, success?: Function): JQuery;
    collapse(nodes: JQuery): void;
    collapse(nodes: drawing$Element): void;
    collapse(nodes: string): void;
    dataItem(node: JQuery): kendo$dataNode;
    dataItem(node: drawing$Element): kendo$dataNode;
    dataItem(node: string): kendo$dataNode;
    destroy(): void;
    detach(node: JQuery): JQuery;
    detach(node: drawing$Element): JQuery;
    detach(node: string): JQuery;
    enable(nodes: JQuery, enable?: boolean): void;
    enable(nodes: drawing$Element, enable?: boolean): void;
    enable(nodes: string, enable?: boolean): void;
    enable(nodes: boolean, enable?: boolean): void;
    expand(nodes: JQuery): void;
    expand(nodes: drawing$Element): void;
    expand(nodes: string): void;
    expandPath(path: any, complete: Function): void;
    expandTo(targetNode: kendo$dataNode): void;
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
    setDataSource(dataSource: kendo$dataHierarchicalDataSource): void;
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

  declare interface kendo$ui$TreeViewAnimationCollapse {
    duration?: number;
    effects?: string;
  }

  declare interface kendo$ui$TreeViewAnimationExpand {
    duration?: number;
    effects?: string;
  }

  declare interface kendo$ui$TreeViewAnimation {
    collapse?: boolean | kendo$ui$TreeViewAnimationCollapse;
    expand?: boolean | kendo$ui$TreeViewAnimationExpand;
  }

  declare interface kendo$ui$TreeViewCheckboxes {
    checkChildren?: boolean;
    name?: string;
    template?: string | Function;
  }

  declare interface kendo$ui$TreeViewMessages {
    loading?: string;
    requestFailed?: string;
    retry?: string;
  }

  declare interface kendo$ui$TreeViewOptions {
    name?: string;
    animation?: boolean | kendo$ui$TreeViewAnimation;
    autoBind?: boolean;
    autoScroll?: boolean;
    checkboxes?: boolean | kendo$ui$TreeViewCheckboxes;
    dataImageUrlField?: string;
    dataSource?: any | any | kendo$dataHierarchicalDataSource;
    dataSpriteCssClassField?: string;
    dataTextField?: string | any;
    dataUrlField?: string;
    dragAndDrop?: boolean;
    loadOnDemand?: boolean;
    messages?: kendo$ui$TreeViewMessages;
    template?: string | Function;
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

  declare interface kendo$ui$TreeViewEvent {
    sender: kendo$ui$TreeView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$TreeViewCheckEvent = {
    node?: drawing$Element
  } & TreeViewEvent;

  declare type kendo$ui$TreeViewCollapseEvent = {
    node?: drawing$Element
  } & TreeViewEvent;

  declare type kendo$ui$TreeViewDataBoundEvent = {
    node?: JQuery
  } & TreeViewEvent;

  declare type kendo$ui$TreeViewDragEvent = {
    sourceNode?: drawing$Element,
    dropTarget?: drawing$Element,
    pageX?: number,
    pageY?: number,
    statusClass?: string,
    setStatusClass?: Function
  } & TreeViewEvent;

  declare type kendo$ui$TreeViewDragendEvent = {
    sourceNode?: drawing$Element,
    destinationNode?: drawing$Element,
    dropPosition?: string
  } & TreeViewEvent;

  declare type kendo$ui$TreeViewDragstartEvent = {
    sourceNode?: drawing$Element
  } & TreeViewEvent;

  declare type kendo$ui$TreeViewDropEvent = {
    sourceNode?: drawing$Element,
    destinationNode?: drawing$Element,
    valid?: boolean,
    setValid?: Function,
    dropTarget?: drawing$Element,
    dropPosition?: string
  } & TreeViewEvent;

  declare type kendo$ui$TreeViewExpandEvent = {
    node?: drawing$Element
  } & TreeViewEvent;

  declare type kendo$ui$TreeViewNavigateEvent = {
    node?: drawing$Element
  } & TreeViewEvent;

  declare type kendo$ui$TreeViewSelectEvent = {
    node?: drawing$Element
  } & TreeViewEvent;

  declare class kendo$ui$Upload mixins undefined.Widget {
    static fn: kendo$ui$Upload;
    options: ui$UploadOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Upload;
    constructor(element: drawing$Element, options?: ui$UploadOptions): this;
    clearAllFiles(): void;
    clearFile(callback: Function): void;
    clearFileByUid(uid: string): void;
    destroy(): void;
    disable(): void;
    enable(enable?: boolean): void;
    focus(): void;
    getFiles(): any;
    pause(li: JQuery): void;
    resume(li: JQuery): void;
    removeAllFiles(): void;
    removeFile(callback: Function): void;
    removeFileByUid(uid: string): void;
    toggle(enable: boolean): void;
    upload(): void;
  }

  declare interface kendo$ui$UploadAsync {
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

  declare interface kendo$ui$UploadFile {
    extension?: string;
    name?: string;
    size?: number;
  }

  declare interface kendo$ui$UploadLocalization {
    cancel?: string;
    clearSelectedFiles?: string;
    dropFilesHere?: string;
    headerStatusUploaded?: string;
    headerStatusUploading?: string;
    invalidFileExtension?: string;
    invalidFiles?: string;
    invalidMaxFileSize?: string;
    invalidMinFileSize?: string;
    remove?: string;
    retry?: string;
    select?: string;
    statusFailed?: string;
    statusUploaded?: string;
    statusUploading?: string;
    uploadSelectedFiles?: string;
  }

  declare interface kendo$ui$UploadValidation {
    allowedExtensions?: any;
    maxFileSize?: number;
    minFileSize?: number;
  }

  declare interface kendo$ui$UploadOptions {
    name?: string;
    async?: kendo$ui$UploadAsync;
    directory?: boolean;
    directoryDrop?: boolean;
    dropZone?: string;
    enabled?: boolean;
    files?: kendo$ui$UploadFile[];
    localization?: kendo$ui$UploadLocalization;
    multiple?: boolean;
    showFileList?: boolean;
    template?: string | Function;
    validation?: kendo$ui$UploadValidation;
    cancel?: (e: ui$UploadCancelEvent) => void;
    clear?: (e: ui$UploadClearEvent) => void;
    complete?: (e: ui$UploadEvent) => void;
    error?: (e: ui$UploadErrorEvent) => void;
    pause?: (e: ui$UploadPauseEvent) => void;
    progress?: (e: ui$UploadProgressEvent) => void;
    resume?: (e: ui$UploadEvent) => void;
    remove?: (e: ui$UploadRemoveEvent) => void;
    select?: (e: ui$UploadSelectEvent) => void;
    success?: (e: ui$UploadSuccessEvent) => void;
    upload?: (e: ui$UploadUploadEvent) => void;
  }

  declare interface kendo$ui$UploadEvent {
    sender: kendo$ui$Upload;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$UploadCancelEvent = {
    files?: any[]
  } & UploadEvent;

  declare type kendo$ui$UploadClearEvent = {
    e?: any
  } & UploadEvent;

  declare type kendo$ui$UploadErrorEvent = {
    files?: any[],
    operation?: string,
    XMLHttpRequest?: any
  } & UploadEvent;

  declare type kendo$ui$UploadPauseEvent = {
    e?: any
  } & UploadEvent;

  declare type kendo$ui$UploadProgressEvent = {
    files?: any[],
    percentComplete?: number
  } & UploadEvent;

  declare type kendo$ui$UploadRemoveEvent = {
    files?: any[],
    headers?: any,
    data?: any
  } & UploadEvent;

  declare type kendo$ui$UploadSelectEvent = {
    e?: any,
    files?: any[]
  } & UploadEvent;

  declare type kendo$ui$UploadSuccessEvent = {
    files?: any[],
    operation?: string,
    response?: any,
    XMLHttpRequest?: any
  } & UploadEvent;

  declare type kendo$ui$UploadUploadEvent = {
    files?: any[],
    data?: any,
    formData?: any,
    XMLHttpRequest?: any
  } & UploadEvent;

  declare class kendo$ui$Validator mixins undefined.Widget {
    static fn: kendo$ui$Validator;
    options: ui$ValidatorOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Validator;
    constructor(element: drawing$Element, options?: ui$ValidatorOptions): this;
    errors(): any;
    hideMessages(): void;
    validate(): boolean;
    validateInput(input: drawing$Element): boolean;
    validateInput(input: JQuery): boolean;
  }

  declare interface kendo$ui$ValidatorOptions {
    name?: string;
    errorTemplate?: string;
    messages?: any;
    rules?: any;
    validateOnBlur?: boolean;
    validate?: (e: ui$ValidatorValidateEvent) => void;
    validateInput?: (e: ui$ValidatorValidateInputEvent) => void;
  }

  declare interface kendo$ui$ValidatorEvent {
    sender: kendo$ui$Validator;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ValidatorValidateEvent = {
    valid?: boolean
  } & ValidatorEvent;

  declare type kendo$ui$ValidatorValidateInputEvent = {
    input?: JQuery,
    valid?: boolean
  } & ValidatorEvent;

  declare class kendo$ui$Window mixins undefined.Widget {
    static fn: kendo$ui$Window;
    options: ui$WindowOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Window;
    constructor(element: drawing$Element, options?: ui$WindowOptions): this;
    center(): kendo$uiWindow;
    close(): kendo$uiWindow;
    content(): string;
    content(content?: string): kendo$uiWindow;
    content(content?: JQuery): kendo$uiWindow;
    destroy(): void;
    isMaximized(): boolean;
    isMinimized(): boolean;
    maximize(): kendo$uiWindow;
    minimize(): kendo$uiWindow;
    open(): kendo$uiWindow;
    pin(): void;
    refresh(options: any): kendo$uiWindow;
    restore(): kendo$uiWindow;
    setOptions(options: any): void;
    title(): string;
    title(text?: string): kendo$uiWindow;
    toFront(): kendo$uiWindow;
    toggleMaximization(): kendo$uiWindow;
    unpin(): void;
  }

  declare interface kendo$ui$WindowAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$WindowAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$ui$WindowAnimation {
    close?: kendo$ui$WindowAnimationClose;
    open?: kendo$ui$WindowAnimationOpen;
  }

  declare interface kendo$ui$WindowContent {
    template?: string;
  }

  declare interface kendo$ui$WindowPosition {
    top?: number | string;
    left?: number | string;
  }

  declare interface kendo$ui$WindowModal {
    preventScroll?: boolean;
  }

  declare interface kendo$ui$WindowRefreshOptions {
    url?: string;
    cache?: boolean;
    data?: any;
    type?: string;
    template?: string;
    iframe?: boolean;
  }

  declare interface kendo$ui$WindowDraggable {
    containment?: any | string;
    dragHandle?: any | string;
    axis?: string;
  }

  declare interface kendo$ui$WindowOptions {
    name?: string;
    actions?: any;
    animation?: boolean | kendo$ui$WindowAnimation;
    appendTo?: any | string;
    autoFocus?: boolean;
    content?: string | kendo$ui$WindowContent;
    draggable?: boolean | kendo$ui$WindowDraggable;
    iframe?: boolean;
    height?: number | string;
    maxHeight?: number;
    maxWidth?: number;
    minHeight?: number;
    minWidth?: number;
    modal?: boolean | kendo$ui$WindowModal;
    pinned?: boolean;
    position?: kendo$ui$WindowPosition;
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
    resize?: (e: ui$WindowEvent) => void;
  }

  declare interface kendo$ui$WindowEvent {
    sender: kendo$ui$Window;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$WindowCloseEvent = {
    userTriggered?: boolean
  } & WindowEvent;

  declare type kendo$ui$WindowErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & WindowEvent;

  declare var npm$namespace$kendo$mobile: {
    ui: typeof npm$namespace$kendo$mobile$ui
  };

  declare var npm$namespace$kendo$mobile$ui: {
    ActionSheet: typeof kendo$mobile$ui$ActionSheet,
    BackButton: typeof kendo$mobile$ui$BackButton,
    Button: typeof kendo$mobile$ui$Button,
    ButtonGroup: typeof kendo$mobile$ui$ButtonGroup,
    Collapsible: typeof kendo$mobile$ui$Collapsible,
    DetailButton: typeof kendo$mobile$ui$DetailButton,
    Drawer: typeof kendo$mobile$ui$Drawer,
    Layout: typeof kendo$mobile$ui$Layout,
    ListView: typeof kendo$mobile$ui$ListView,
    Loader: typeof kendo$mobile$ui$Loader,
    ModalView: typeof kendo$mobile$ui$ModalView,
    NavBar: typeof kendo$mobile$ui$NavBar,
    Pane: typeof kendo$mobile$ui$Pane,
    PopOver: typeof kendo$mobile$ui$PopOver,
    ScrollView: typeof kendo$mobile$ui$ScrollView,
    Scroller: typeof kendo$mobile$ui$Scroller,
    SplitView: typeof kendo$mobile$ui$SplitView,
    Switch: typeof kendo$mobile$ui$Switch,
    TabStrip: typeof kendo$mobile$ui$TabStrip,
    View: typeof kendo$mobile$ui$View
  };
  declare class kendo$mobile$ui$ActionSheet mixins undefined.Widget {
    static fn: kendo$mobile$ui$ActionSheet;
    options: ui$ActionSheetOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$ActionSheet;
    constructor(
      element: drawing$Element,
      options?: ui$ActionSheetOptions
    ): this;
    close(): void;
    destroy(): void;
    open(target: JQuery, context: any): void;
  }

  declare interface kendo$mobile$ui$ActionSheetPopup {
    direction?: number | string;
    height?: number | string;
    width?: number | string;
  }

  declare interface kendo$mobile$ui$ActionSheetOptions {
    name?: string;
    cancel?: string;
    popup?: kendo$mobile$ui$ActionSheetPopup;
    type?: string;
    close?: (e: ui$ActionSheetEvent) => void;
    open?: (e: ui$ActionSheetOpenEvent) => void;
  }

  declare interface kendo$mobile$ui$ActionSheetEvent {
    sender: kendo$mobile$ui$ActionSheet;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$ActionSheetOpenEvent = {
    target?: JQuery,
    context?: JQuery
  } & ActionSheetEvent;

  declare class kendo$mobile$ui$BackButton mixins undefined.Widget {
    static fn: kendo$mobile$ui$BackButton;
    options: ui$BackButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$BackButton;
    constructor(element: drawing$Element, options?: ui$BackButtonOptions): this;
    destroy(): void;
  }

  declare interface kendo$mobile$ui$BackButtonOptions {
    name?: string;
    click?: (e: ui$BackButtonClickEvent) => void;
  }

  declare interface kendo$mobile$ui$BackButtonEvent {
    sender: kendo$mobile$ui$BackButton;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$BackButtonClickEvent = {
    target?: JQuery,
    button?: JQuery
  } & BackButtonEvent;

  declare class kendo$mobile$ui$Button mixins undefined.Widget {
    static fn: kendo$mobile$ui$Button;
    options: kendo$ui$ButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Button;
    constructor(
      element: drawing$Element,
      options?: kendo$ui$ButtonOptions
    ): this;
    badge(value: string): string;
    badge(value: boolean): string;
    destroy(): void;
    enable(enable: boolean): void;
  }

  declare interface kendo$mobile$ui$ButtonOptions {
    name?: string;
    enable?: boolean;
    icon?: string;
    iconClass?: string;
    imageUrl?: string;
    spriteCssClass?: string;
    click?: (e: kendo$ui$ButtonClickEvent) => void;
    name?: string;
    badge?: string;
    clickOn?: string;
    enable?: boolean;
    icon?: string;
    click?: (e: kendo$ui$ButtonClickEvent) => void;
  }

  declare interface kendo$mobile$ui$ButtonEvent {
    sender: kendo$mobile$ui$Button;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$mobile$ui$Button;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$ButtonClickEvent = {
    event?: any,
    target?: JQuery,
    button?: JQuery
  } & ButtonEvent;

  declare class kendo$mobile$ui$ButtonGroup mixins undefined.Widget {
    static fn: kendo$mobile$ui$ButtonGroup;
    options: kendo$ui$ButtonGroupOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$ButtonGroup;
    constructor(
      element: drawing$Element,
      options?: kendo$ui$ButtonGroupOptions
    ): this;
    badge(button: string, value: string): string;
    badge(button: string, value: boolean): string;
    badge(button: number, value: string): string;
    badge(button: number, value: boolean): string;
    current(): JQuery;
    destroy(): void;
    enable(enable: boolean): void;
    select(li: JQuery): void;
    select(li: number): void;
  }

  declare interface kendo$mobile$ui$ButtonGroupOptions {
    name?: string;
    enable?: boolean;
    index?: number;
    selection?: string;
    items?: kendo$ui$ButtonGroupItem[];
    select?: (e: kendo$ui$ButtonGroupSelectEvent) => void;
    name?: string;
    enable?: boolean;
    index?: number;
    selectOn?: string;
    select?: (e: kendo$ui$ButtonGroupSelectEvent) => void;
  }

  declare interface kendo$mobile$ui$ButtonGroupEvent {
    sender: kendo$mobile$ui$ButtonGroup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$mobile$ui$ButtonGroup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$ButtonGroupSelectEvent = {
    indices?: any,
    index?: number
  } & ButtonGroupEvent;

  declare class kendo$mobile$ui$Collapsible mixins undefined.Widget {
    static fn: kendo$mobile$ui$Collapsible;
    options: ui$CollapsibleOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Collapsible;
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

  declare interface kendo$mobile$ui$CollapsibleOptions {
    name?: string;
    animation?: boolean;
    collapsed?: boolean;
    expandIcon?: string;
    iconPosition?: string;
    inset?: boolean;
    collapse?: (e: ui$CollapsibleEvent) => void;
    expand?: (e: ui$CollapsibleEvent) => void;
  }

  declare interface kendo$mobile$ui$CollapsibleEvent {
    sender: kendo$mobile$ui$Collapsible;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$mobile$ui$DetailButton mixins undefined.Widget {
    static fn: kendo$mobile$ui$DetailButton;
    options: ui$DetailButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$DetailButton;
    constructor(
      element: drawing$Element,
      options?: ui$DetailButtonOptions
    ): this;
    destroy(): void;
  }

  declare interface kendo$mobile$ui$DetailButtonOptions {
    name?: string;
    click?: (e: ui$DetailButtonClickEvent) => void;
  }

  declare interface kendo$mobile$ui$DetailButtonEvent {
    sender: kendo$mobile$ui$DetailButton;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$DetailButtonClickEvent = {
    target?: JQuery,
    button?: JQuery
  } & DetailButtonEvent;

  declare class kendo$mobile$ui$Drawer mixins undefined.Widget {
    static fn: kendo$mobile$ui$Drawer;
    options: ui$DrawerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Drawer;
    constructor(element: drawing$Element, options?: ui$DrawerOptions): this;
    destroy(): void;
    hide(): void;
    show(): void;
  }

  declare interface kendo$mobile$ui$DrawerOptions {
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
    init?: (e: ui$DrawerInitEvent) => void;
    show?: (e: ui$DrawerShowEvent) => void;
  }

  declare interface kendo$mobile$ui$DrawerEvent {
    sender: kendo$mobile$ui$Drawer;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$DrawerAfterHideEvent = {} & DrawerEvent;

  declare type kendo$mobile$ui$DrawerHideEvent = {} & DrawerEvent;

  declare type kendo$mobile$ui$DrawerInitEvent = {} & DrawerEvent;

  declare type kendo$mobile$ui$DrawerShowEvent = {} & DrawerEvent;

  declare class kendo$mobile$ui$Layout mixins undefined.Widget {
    static fn: kendo$mobile$ui$Layout;
    options: drawing$LayoutOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Layout;
    constructor(
      element: drawing$Element,
      options?: drawing$LayoutOptions
    ): this;
  }

  declare interface kendo$mobile$ui$LayoutOptions {
    name?: string;
    alignContent?: string;
    alignItems?: string;
    justifyContent?: string;
    lineSpacing?: number;
    spacing?: number;
    orientation?: string;
    wrap?: boolean;
    name?: string;
    alignContent?: string;
    alignItems?: string;
    justifyContent?: string;
    lineSpacing?: number;
    spacing?: number;
    orientation?: string;
    wrap?: boolean;
    name?: string;
    id?: string;
    platform?: string;
    hide?: (e: ui$LayoutHideEvent) => void;
    init?: (e: ui$LayoutInitEvent) => void;
    show?: (e: ui$LayoutShowEvent) => void;
    name?: string;
    alignContent?: string;
    alignItems?: string;
    justifyContent?: string;
    lineSpacing?: number;
    spacing?: number;
    orientation?: string;
    wrap?: boolean;
  }

  declare interface kendo$mobile$ui$LayoutEvent {
    sender: kendo$mobile$ui$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$mobile$ui$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$mobile$ui$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$mobile$ui$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$LayoutHideEvent = {
    layout?: JQuery,
    view?: JQuery
  } & LayoutEvent;

  declare type kendo$mobile$ui$LayoutInitEvent = {
    layout?: JQuery
  } & LayoutEvent;

  declare type kendo$mobile$ui$LayoutShowEvent = {
    layout?: JQuery,
    view?: JQuery
  } & LayoutEvent;

  declare class kendo$mobile$ui$ListView mixins undefined.Widget {
    static fn: kendo$mobile$ui$ListView;
    options: kendo$ui$ListViewOptions;
    dataSource: kendo$dataDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$ListView;
    constructor(
      element: drawing$Element,
      options?: kendo$ui$ListViewOptions
    ): this;
    append(dataItems: any): void;
    prepend(dataItems: any): void;
    replace(dataItems: any): void;
    remove(dataItems: any): void;
    setDataItem(item: JQuery, dataItem: kendo$dataModel): void;
    destroy(): void;
    items(): JQuery;
    refresh(): void;
    setDataSource(dataSource: kendo$dataDataSource): void;
  }

  declare interface kendo$mobile$ui$ListViewFilterable {
    placeholder?: string;
    autoFilter?: boolean;
    field?: string;
    ignoreCase?: boolean;
    operator?: string;
  }

  declare interface kendo$mobile$ui$ListViewMessages {
    loadMoreText?: string;
    pullTemplate?: string;
    refreshTemplate?: string;
    releaseTemplate?: string;
  }

  declare interface kendo$mobile$ui$ListViewOptions {
    name?: string;
    autoBind?: boolean;
    dataSource?: any | any | kendo$dataDataSource;
    editTemplate?: Function;
    navigatable?: boolean;
    selectable?: boolean | string;
    template?: Function;
    altTemplate?: Function;
    cancel?: (e: kendo$ui$ListViewCancelEvent) => void;
    change?: (e: kendo$ui$ListViewEvent) => void;
    dataBound?: (e: kendo$ui$ListViewEvent) => void;
    dataBinding?: (e: kendo$ui$ListViewEvent) => void;
    edit?: (e: kendo$ui$ListViewEditEvent) => void;
    remove?: (e: kendo$ui$ListViewRemoveEvent) => void;
    save?: (e: kendo$ui$ListViewSaveEvent) => void;
    name?: string;
    appendOnRefresh?: boolean;
    autoBind?: boolean;
    dataSource?: kendo$dataDataSource | any;
    endlessScroll?: boolean;
    fixedHeaders?: boolean;
    headerTemplate?: string | Function;
    loadMore?: boolean;
    messages?: kendo$mobile$ui$ListViewMessages;
    pullToRefresh?: boolean;
    pullParameters?: Function;
    style?: string;
    template?: string | Function;
    type?: string;
    filterable?: boolean | kendo$mobile$ui$ListViewFilterable;
    virtualViewSize?: number;
    click?: (e: ui$ListViewClickEvent) => void;
    dataBound?: (e: kendo$ui$ListViewEvent) => void;
    dataBinding?: (e: kendo$ui$ListViewEvent) => void;
    itemChange?: (e: kendo$ui$ListViewEvent) => void;
  }

  declare interface kendo$mobile$ui$ListViewEvent {
    sender: kendo$mobile$ui$ListView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$mobile$ui$ListView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$ListViewClickEvent = {
    item?: JQuery,
    target?: JQuery,
    dataItem?: any,
    button?: kendo$mobileuiButton
  } & ListViewEvent;

  declare class kendo$mobile$ui$Loader mixins undefined.Widget {
    static fn: kendo$mobile$ui$Loader;
    options: ui$LoaderOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Loader;
    constructor(element: drawing$Element, options?: ui$LoaderOptions): this;
    hide(): void;
    show(): void;
  }

  declare interface kendo$mobile$ui$LoaderOptions {
    name?: string;
  }

  declare interface kendo$mobile$ui$LoaderEvent {
    sender: kendo$mobile$ui$Loader;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$mobile$ui$ModalView mixins undefined.Widget {
    static fn: kendo$mobile$ui$ModalView;
    options: ui$ModalViewOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$ModalView;
    constructor(element: drawing$Element, options?: ui$ModalViewOptions): this;
    close(): void;
    destroy(): void;
    open(target?: JQuery): void;
  }

  declare interface kendo$mobile$ui$ModalViewOptions {
    name?: string;
    height?: number;
    modal?: boolean;
    width?: number;
    beforeOpen?: (e: ui$ModalViewBeforeOpenEvent) => void;
    close?: (e: ui$ModalViewCloseEvent) => void;
    init?: (e: ui$ModalViewInitEvent) => void;
    open?: (e: ui$ModalViewOpenEvent) => void;
  }

  declare interface kendo$mobile$ui$ModalViewEvent {
    sender: kendo$mobile$ui$ModalView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$ModalViewBeforeOpenEvent = {
    target?: JQuery
  } & ModalViewEvent;

  declare type kendo$mobile$ui$ModalViewCloseEvent = {} & ModalViewEvent;

  declare type kendo$mobile$ui$ModalViewInitEvent = {} & ModalViewEvent;

  declare type kendo$mobile$ui$ModalViewOpenEvent = {
    target?: JQuery
  } & ModalViewEvent;

  declare class kendo$mobile$ui$NavBar mixins undefined.Widget {
    static fn: kendo$mobile$ui$NavBar;
    options: ui$NavBarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$NavBar;
    constructor(element: drawing$Element, options?: ui$NavBarOptions): this;
    destroy(): void;
    title(value: string): void;
  }

  declare interface kendo$mobile$ui$NavBarOptions {
    name?: string;
  }

  declare interface kendo$mobile$ui$NavBarEvent {
    sender: kendo$mobile$ui$NavBar;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$mobile$ui$Pane mixins undefined.Widget {
    static fn: kendo$mobile$ui$Pane;
    options: ui$PaneOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Pane;
    constructor(element: drawing$Element, options?: ui$PaneOptions): this;
    destroy(): void;
    hideLoading(): void;
    navigate(url: string, transition: string): void;
    replace(url: string, transition: string): void;
    showLoading(): void;
    view(): kendo$mobileuiView;
  }

  declare interface kendo$mobile$ui$PaneOptions {
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

  declare interface kendo$mobile$ui$PaneEvent {
    sender: kendo$mobile$ui$Pane;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$PaneNavigateEvent = {
    url?: JQuery
  } & PaneEvent;

  declare type kendo$mobile$ui$PaneViewShowEvent = {
    view?: kendo$mobileuiView
  } & PaneEvent;

  declare class kendo$mobile$ui$PopOver mixins undefined.Widget {
    static fn: kendo$mobile$ui$PopOver;
    options: ui$PopOverOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$PopOver;
    constructor(element: drawing$Element, options?: ui$PopOverOptions): this;
    close(): void;
    destroy(): void;
    open(target: JQuery): void;
  }

  declare interface kendo$mobile$ui$PopOverPane {
    initial?: string;
    layout?: string;
    loading?: string;
    transition?: string;
  }

  declare interface kendo$mobile$ui$PopOverPopup {
    height?: number | string;
    width?: number | string;
  }

  declare interface kendo$mobile$ui$PopOverOptions {
    name?: string;
    pane?: kendo$mobile$ui$PopOverPane;
    popup?: kendo$mobile$ui$PopOverPopup;
    close?: (e: ui$PopOverCloseEvent) => void;
    open?: (e: ui$PopOverOpenEvent) => void;
  }

  declare interface kendo$mobile$ui$PopOverEvent {
    sender: kendo$mobile$ui$PopOver;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$PopOverCloseEvent = {} & PopOverEvent;

  declare type kendo$mobile$ui$PopOverOpenEvent = {
    target?: JQuery
  } & PopOverEvent;

  declare class kendo$mobile$ui$ScrollView mixins undefined.Widget {
    static fn: kendo$mobile$ui$ScrollView;
    options: kendo$ui$ScrollViewOptions;
    dataSource: kendo$dataDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$ScrollView;
    constructor(
      element: drawing$Element,
      options?: kendo$ui$ScrollViewOptions
    ): this;
    content(content: string): void;
    content(content: JQuery): void;
    destroy(): void;
    next(): void;
    prev(): void;
    refresh(): void;
    scrollTo(page: number, instant: boolean): void;
    setDataSource(dataSource: kendo$dataDataSource): void;
    value(dataItem: any): any;
  }

  declare interface kendo$mobile$ui$ScrollViewOptions {
    name?: string;
    autoBind?: boolean;
    bounceVelocityThreshold?: number;
    contentHeight?: number | string;
    dataSource?: kendo$dataDataSource | any;
    duration?: number;
    emptyTemplate?: string;
    enablePager?: boolean;
    page?: number;
    template?: string;
    velocityThreshold?: number;
    change?: (e: kendo$ui$ScrollViewChangeEvent) => void;
    refresh?: (e: kendo$ui$ScrollViewRefreshEvent) => void;
    name?: string;
    autoBind?: boolean;
    bounceVelocityThreshold?: number;
    contentHeight?: number | string;
    dataSource?: kendo$dataDataSource | any;
    duration?: number;
    emptyTemplate?: string;
    enablePager?: boolean;
    itemsPerPage?: number;
    page?: number;
    pageSize?: number;
    template?: string;
    velocityThreshold?: number;
    changing?: (e: ui$ScrollViewChangingEvent) => void;
    change?: (e: kendo$ui$ScrollViewChangeEvent) => void;
    refresh?: (e: kendo$ui$ScrollViewRefreshEvent) => void;
  }

  declare interface kendo$mobile$ui$ScrollViewEvent {
    sender: kendo$mobile$ui$ScrollView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$mobile$ui$ScrollView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$ScrollViewChangingEvent = {
    currentPage?: number,
    nextPage?: number
  } & ScrollViewEvent;

  declare type kendo$mobile$ui$ScrollViewChangeEvent = {
    currentPage?: number,
    nextPage?: number,
    element?: JQuery,
    data?: any,
    page?: number,
    element?: JQuery,
    data?: any
  } & ScrollViewEvent;

  declare type kendo$mobile$ui$ScrollViewRefreshEvent = {
    pageCount?: number,
    page?: number,
    pageCount?: number,
    page?: number
  } & ScrollViewEvent;

  declare class kendo$mobile$ui$Scroller mixins undefined.Widget {
    static fn: kendo$mobile$ui$Scroller;
    options: ui$ScrollerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Scroller;
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

  declare interface kendo$mobile$ui$ScrollerMessages {
    pullTemplate?: string;
    refreshTemplate?: string;
    releaseTemplate?: string;
  }

  declare interface kendo$mobile$ui$ScrollerOptions {
    name?: string;
    elastic?: boolean;
    messages?: kendo$mobile$ui$ScrollerMessages;
    pullOffset?: number;
    pullToRefresh?: boolean;
    useNative?: boolean;
    visibleScrollHints?: boolean;
    zoom?: boolean;
    pull?: (e: ui$ScrollerEvent) => void;
    resize?: (e: ui$ScrollerEvent) => void;
    scroll?: (e: ui$ScrollerScrollEvent) => void;
  }

  declare interface kendo$mobile$ui$ScrollerEvent {
    sender: kendo$mobile$ui$Scroller;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$ScrollerScrollEvent = {
    scrollTop?: number,
    scrollLeft?: number
  } & ScrollerEvent;

  declare class kendo$mobile$ui$SplitView mixins undefined.Widget {
    static fn: kendo$mobile$ui$SplitView;
    options: ui$SplitViewOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$SplitView;
    constructor(element: drawing$Element, options?: ui$SplitViewOptions): this;
    destroy(): void;
    expandPanes(): void;
    collapsePanes(): void;
  }

  declare interface kendo$mobile$ui$SplitViewOptions {
    name?: string;
    style?: string;
    init?: (e: ui$SplitViewInitEvent) => void;
    show?: (e: ui$SplitViewShowEvent) => void;
  }

  declare interface kendo$mobile$ui$SplitViewEvent {
    sender: kendo$mobile$ui$SplitView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$SplitViewInitEvent = {
    view?: JQuery
  } & SplitViewEvent;

  declare type kendo$mobile$ui$SplitViewShowEvent = {
    view?: JQuery
  } & SplitViewEvent;

  declare class kendo$mobile$ui$Switch mixins undefined.Widget {
    static fn: kendo$mobile$ui$Switch;
    options: kendo$ui$SwitchOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Switch;
    constructor(
      element: drawing$Element,
      options?: kendo$ui$SwitchOptions
    ): this;
    check(): boolean;
    check(check: boolean): void;
    destroy(): void;
    enable(enable: boolean): void;
    refresh(): void;
    toggle(): void;
  }

  declare interface kendo$mobile$ui$SwitchOptions {
    name?: string;
    checked?: boolean;
    enabled?: boolean;
    readonly?: boolean;
    width?: number | string;
    change?: (e: kendo$ui$SwitchChangeEvent) => void;
    name?: string;
    checked?: boolean;
    enable?: boolean;
    offLabel?: string;
    onLabel?: string;
    change?: (e: kendo$ui$SwitchChangeEvent) => void;
  }

  declare interface kendo$mobile$ui$SwitchEvent {
    sender: kendo$mobile$ui$Switch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$mobile$ui$Switch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$SwitchChangeEvent = {
    checked?: any,
    checked?: any
  } & SwitchEvent;

  declare class kendo$mobile$ui$TabStrip mixins undefined.Widget {
    static fn: kendo$mobile$ui$TabStrip;
    options: kendo$ui$TabStripOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$TabStrip;
    constructor(
      element: drawing$Element,
      options?: kendo$ui$TabStripOptions
    ): this;
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

  declare interface kendo$mobile$ui$TabStripOptions {
    name?: string;
    animation?: boolean | kendo$ui$TabStripAnimation;
    collapsible?: boolean;
    contentUrls?: any;
    dataContentField?: string;
    dataContentUrlField?: string;
    dataImageUrlField?: string;
    dataSource?: any | any | kendo$dataDataSource;
    dataSpriteCssClass?: string;
    dataTextField?: string;
    dataUrlField?: string;
    navigatable?: boolean;
    scrollable?: boolean | kendo$ui$TabStripScrollable;
    tabPosition?: string;
    value?: string;
    activate?: (e: kendo$ui$TabStripActivateEvent) => void;
    contentLoad?: (e: kendo$ui$TabStripContentLoadEvent) => void;
    error?: (e: kendo$ui$TabStripErrorEvent) => void;
    select?: (e: kendo$ui$TabStripSelectEvent) => void;
    show?: (e: kendo$ui$TabStripShowEvent) => void;
    name?: string;
    selectedIndex?: number;
    select?: (e: kendo$ui$TabStripSelectEvent) => void;
  }

  declare interface kendo$mobile$ui$TabStripEvent {
    sender: kendo$mobile$ui$TabStrip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$mobile$ui$TabStrip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$TabStripSelectEvent = {
    item?: drawing$Element,
    contentElement?: drawing$Element,
    item?: JQuery
  } & TabStripEvent;

  declare class kendo$mobile$ui$View mixins undefined.Widget {
    static fn: kendo$mobile$ui$View;
    options: kendo$ViewOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$View;
    constructor(element: drawing$Element, options?: kendo$ViewOptions): this;
    contentElement(): void;
    destroy(): void;
    enable(enable: boolean): void;
  }

  declare interface kendo$mobile$ui$ViewOptions {
    tagName?: string;
    wrap?: boolean;
    model?: Object;
    evalTemplate?: boolean;
    init?: (e: kendo$ViewEvent) => void;
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
    init?: (e: ui$ViewInitEvent) => void;
    show?: (e: ui$ViewShowEvent) => void;
    transitionStart?: (e: ui$ViewTransitionStartEvent) => void;
    transitionEnd?: (e: ui$ViewTransitionEndEvent) => void;
  }

  declare interface kendo$mobile$ui$ViewEvent {
    sender: kendo$mobile$ui$View;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$mobile$ui$View;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$ViewAfterShowEvent = {
    view?: kendo$mobileuiView
  } & ViewEvent;

  declare type kendo$mobile$ui$ViewBeforeHideEvent = {
    view?: kendo$mobileuiView
  } & ViewEvent;

  declare type kendo$mobile$ui$ViewBeforeShowEvent = {
    view?: kendo$mobileuiView
  } & ViewEvent;

  declare type kendo$mobile$ui$ViewHideEvent = {
    view?: kendo$mobileuiView
  } & ViewEvent;

  declare type kendo$mobile$ui$ViewInitEvent = {
    view?: kendo$mobileuiView
  } & ViewEvent;

  declare type kendo$mobile$ui$ViewShowEvent = {
    view?: kendo$mobileuiView
  } & ViewEvent;

  declare type kendo$mobile$ui$ViewTransitionStartEvent = {
    type?: string
  } & ViewEvent;

  declare type kendo$mobile$ui$ViewTransitionEndEvent = {
    type?: string
  } & ViewEvent;

  declare var npm$namespace$kendo$dataviz: {
    geometry: typeof npm$namespace$kendo$dataviz$geometry
  };

  declare var npm$namespace$kendo$dataviz$geometry: {
    Arc: typeof kendo$dataviz$geometry$Arc,
    Circle: typeof kendo$dataviz$geometry$Circle,
    Matrix: typeof kendo$dataviz$geometry$Matrix,
    Point: typeof kendo$dataviz$geometry$Point,
    Rect: typeof kendo$dataviz$geometry$Rect,
    Size: typeof kendo$dataviz$geometry$Size,
    Transformation: typeof kendo$dataviz$geometry$Transformation
  };
  declare class kendo$dataviz$geometry$Arc mixins Observable {
    options: geometry$ArcOptions;
    anticlockwise: boolean;
    center: kendo$geometryPoint;
    endAngle: number;
    radiusX: number;
    radiusY: number;
    startAngle: number;
    constructor(
      center: any | kendo$geometryPoint,
      options?: geometry$ArcOptions
    ): this;
    bbox(matrix: kendo$geometryMatrix): kendo$geometryRect;
    getAnticlockwise(): boolean;
    getCenter(): kendo$geometryPoint;
    getEndAngle(): number;
    getRadiusX(): number;
    getRadiusY(): number;
    getStartAngle(): number;
    pointAt(angle: number): kendo$geometryPoint;
    setAnticlockwise(value: boolean): kendo$geometryArc;
    setCenter(value: kendo$geometryPoint): kendo$geometryArc;
    setEndAngle(value: number): kendo$geometryArc;
    setRadiusX(value: number): kendo$geometryArc;
    setRadiusY(value: number): kendo$geometryArc;
    setStartAngle(value: number): kendo$geometryArc;
  }

  declare interface kendo$dataviz$geometry$ArcOptions {
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
  }

  declare interface kendo$dataviz$geometry$ArcEvent {
    sender: kendo$dataviz$geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Circle mixins Observable {
    options: geometry$CircleOptions;
    center: kendo$geometryPoint;
    radius: number;
    constructor(center: any | kendo$geometryPoint, radius: number): this;
    bbox(matrix: kendo$geometryMatrix): kendo$geometryRect;
    clone(): kendo$geometryCircle;
    equals(other: kendo$geometryCircle): boolean;
    getCenter(): kendo$geometryPoint;
    getRadius(): number;
    pointAt(angle: number): kendo$geometryPoint;
    setCenter(value: kendo$geometryPoint): kendo$geometryPoint;
    setCenter(value: any): kendo$geometryPoint;
    setRadius(value: number): kendo$geometryCircle;
  }

  declare interface kendo$dataviz$geometry$CircleOptions {
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
    name?: string;
    fill?: string | diagram$CircleFill;
    stroke?: diagram$CircleStroke;
    center?: any;
    radius?: number;
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
  }

  declare interface kendo$dataviz$geometry$CircleEvent {
    sender: kendo$dataviz$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Matrix mixins Observable {
    options: geometry$MatrixOptions;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    static rotate(angle: number, x: number, y: number): kendo$geometryMatrix;
    static scale(scaleX: number, scaleY: number): kendo$geometryMatrix;
    static translate(x: number, y: number): kendo$geometryMatrix;
    static unit(): kendo$geometryMatrix;
    clone(): kendo$geometryMatrix;
    equals(other: kendo$geometryMatrix): boolean;
    round(digits: number): kendo$geometryMatrix;
    multiplyCopy(matrix: kendo$geometryMatrix): kendo$geometryMatrix;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
  }

  declare interface kendo$dataviz$geometry$MatrixOptions {
    name?: string;
    name?: string;
  }

  declare interface kendo$dataviz$geometry$MatrixEvent {
    sender: kendo$dataviz$geometry$Matrix;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Matrix;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Point mixins Observable {
    options: geometry$PointOptions;
    x: number;
    y: number;
    constructor(x: number, y: number): this;
    static create(x: number, y: number): kendo$geometryPoint;
    static create(x: any, y: number): kendo$geometryPoint;
    static create(x: kendo$geometryPoint, y: number): kendo$geometryPoint;
    static min(): kendo$geometryPoint;
    static max(): kendo$geometryPoint;
    static minPoint(): kendo$geometryPoint;
    static maxPoint(): kendo$geometryPoint;
    clone(): kendo$geometryPoint;
    distanceTo(point: kendo$geometryPoint): number;
    equals(other: kendo$geometryPoint): boolean;
    getX(): number;
    getY(): number;
    move(x: number, y: number): kendo$geometryPoint;
    rotate(angle: number, center: kendo$geometryPoint): kendo$geometryPoint;
    rotate(angle: number, center: any): kendo$geometryPoint;
    round(digits: number): kendo$geometryPoint;
    scale(scaleX: number, scaleY: number): kendo$geometryPoint;
    scaleCopy(scaleX: number, scaleY: number): kendo$geometryPoint;
    setX(value: number): kendo$geometryPoint;
    setY(value: number): kendo$geometryPoint;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
    transform(tansformation: kendo$geometryTransformation): kendo$geometryPoint;
    transformCopy(
      tansformation: kendo$geometryTransformation
    ): kendo$geometryPoint;
    translate(dx: number, dy: number): kendo$geometryPoint;
    translateWith(vector: kendo$geometryPoint): kendo$geometryPoint;
    translateWith(vector: any): kendo$geometryPoint;
  }

  declare interface kendo$dataviz$geometry$PointOptions {
    name?: string;
    name?: string;
    name?: string;
  }

  declare interface kendo$dataviz$geometry$PointEvent {
    sender: kendo$dataviz$geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Rect mixins Observable {
    options: geometry$RectOptions;
    origin: kendo$geometryPoint;
    size: kendo$geometrySize;
    constructor(
      origin: kendo$geometryPoint | any,
      size: kendo$geometrySize | any
    ): this;
    static fromPoints(
      pointA: kendo$geometryPoint,
      pointB: kendo$geometryPoint
    ): kendo$geometryRect;
    static union(
      rectA: kendo$geometryRect,
      rectB: kendo$geometryRect
    ): kendo$geometryRect;
    bbox(matrix: kendo$geometryMatrix): kendo$geometryRect;
    bottomLeft(): kendo$geometryPoint;
    bottomRight(): kendo$geometryPoint;
    center(): kendo$geometryPoint;
    clone(): kendo$geometryRect;
    equals(other: kendo$geometryRect): boolean;
    getOrigin(): kendo$geometryPoint;
    getSize(): kendo$geometrySize;
    height(): number;
    setOrigin(value: kendo$geometryPoint): kendo$geometryRect;
    setOrigin(value: any): kendo$geometryRect;
    setSize(value: kendo$geometrySize): kendo$geometryRect;
    setSize(value: any): kendo$geometryRect;
    topLeft(): kendo$geometryPoint;
    topRight(): kendo$geometryPoint;
    width(): number;
  }

  declare interface kendo$dataviz$geometry$RectOptions {
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
    name?: string;
    height?: number;
    width?: number;
    x?: number;
    y?: number;
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
  }

  declare interface kendo$dataviz$geometry$RectEvent {
    sender: kendo$dataviz$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Size mixins Observable {
    options: geometry$SizeOptions;
    width: number;
    height: number;
    static create(width: number, height: number): kendo$geometrySize;
    static create(width: any, height: number): kendo$geometrySize;
    static create(
      width: kendo$geometrySize,
      height: number
    ): kendo$geometrySize;
    clone(): kendo$geometrySize;
    equals(other: kendo$geometrySize): boolean;
    getWidth(): number;
    getHeight(): number;
    setWidth(value: number): kendo$geometrySize;
    setHeight(value: number): kendo$geometrySize;
  }

  declare interface kendo$dataviz$geometry$SizeOptions {
    name?: string;
    name?: string;
  }

  declare interface kendo$dataviz$geometry$SizeEvent {
    sender: kendo$dataviz$geometry$Size;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Size;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Transformation mixins Observable {
    options: geometry$TransformationOptions;
    clone(): kendo$geometryTransformation;
    equals(other: kendo$geometryTransformation): boolean;
    matrix(): kendo$geometryMatrix;
    multiply(
      transformation: kendo$geometryTransformation
    ): kendo$geometryTransformation;
    rotate(angle: number, center: any): kendo$geometryTransformation;
    rotate(
      angle: number,
      center: kendo$geometryPoint
    ): kendo$geometryTransformation;
    scale(scaleX: number, scaleY: number): kendo$geometryTransformation;
    translate(x: number, y: number): kendo$geometryTransformation;
  }

  declare interface kendo$dataviz$geometry$TransformationOptions {
    name?: string;
    name?: string;
  }

  declare interface kendo$dataviz$geometry$TransformationEvent {
    sender: kendo$dataviz$geometry$Transformation;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$dataviz$geometry$Transformation;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare var npm$namespace$kendo$drawing: {
    align: typeof kendo$drawing$align,
    drawDOM: typeof kendo$drawing$drawDOM,
    exportImage: typeof kendo$drawing$exportImage,
    exportPDF: typeof kendo$drawing$exportPDF,
    exportSVG: typeof kendo$drawing$exportSVG,
    fit: typeof kendo$drawing$fit,
    stack: typeof kendo$drawing$stack,
    vAlign: typeof kendo$drawing$vAlign,
    vStack: typeof kendo$drawing$vStack,
    vWrap: typeof kendo$drawing$vWrap,
    wrap: typeof kendo$drawing$wrap
  };
  declare function kendo$drawing$align(
    elements: any,
    rect: kendo$geometryRect,
    alignment: string
  ): void;

  declare function kendo$drawing$drawDOM(
    element: JQuery,
    options: any
  ): JQueryPromise<any>;

  declare function kendo$drawing$exportImage(
    group: kendo$drawingGroup,
    options: any
  ): JQueryPromise<any>;

  declare function kendo$drawing$exportPDF(
    group: kendo$drawingGroup,
    options: kendo$drawingPDFOptions
  ): JQueryPromise<any>;

  declare function kendo$drawing$exportSVG(
    group: kendo$drawingGroup,
    options: any
  ): JQueryPromise<any>;

  declare function kendo$drawing$fit(
    element: kendo$drawingElement,
    rect: kendo$geometryRect
  ): void;

  declare function kendo$drawing$stack(elements: any): void;

  declare function kendo$drawing$vAlign(
    elements: any,
    rect: kendo$geometryRect,
    alignment: string
  ): void;

  declare function kendo$drawing$vStack(elements: any): void;

  declare function kendo$drawing$vWrap(
    elements: any,
    rect: kendo$geometryRect
  ): any;

  declare function kendo$drawing$wrap(
    elements: any,
    rect: kendo$geometryRect
  ): any;

  declare var npm$namespace$kendo$geometry: {
    Arc: typeof kendo$geometry$Arc,
    Circle: typeof kendo$geometry$Circle,
    Matrix: typeof kendo$geometry$Matrix,
    Point: typeof kendo$geometry$Point,
    Rect: typeof kendo$geometry$Rect,
    Size: typeof kendo$geometry$Size,
    Transformation: typeof kendo$geometry$Transformation
  };
  declare class kendo$geometry$Arc mixins Observable {
    options: kendo$dataviz$geometry$ArcOptions;
    anticlockwise: boolean;
    center: kendo$geometryPoint;
    endAngle: number;
    radiusX: number;
    radiusY: number;
    startAngle: number;
    constructor(
      center: any | kendo$geometryPoint,
      options?: kendo$dataviz$geometry$ArcOptions
    ): this;
    bbox(matrix: kendo$geometryMatrix): kendo$geometryRect;
    getAnticlockwise(): boolean;
    getCenter(): kendo$geometryPoint;
    getEndAngle(): number;
    getRadiusX(): number;
    getRadiusY(): number;
    getStartAngle(): number;
    pointAt(angle: number): kendo$geometryPoint;
    setAnticlockwise(value: boolean): kendo$geometryArc;
    setCenter(value: kendo$geometryPoint): kendo$geometryArc;
    setEndAngle(value: number): kendo$geometryArc;
    setRadiusX(value: number): kendo$geometryArc;
    setRadiusY(value: number): kendo$geometryArc;
    setStartAngle(value: number): kendo$geometryArc;
  }

  declare interface kendo$geometry$ArcOptions {
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
  }

  declare interface kendo$geometry$ArcEvent {
    sender: kendo$geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Circle mixins Observable {
    options: kendo$dataviz$geometry$CircleOptions;
    center: kendo$geometryPoint;
    radius: number;
    constructor(center: any | kendo$geometryPoint, radius: number): this;
    bbox(matrix: kendo$geometryMatrix): kendo$geometryRect;
    clone(): kendo$geometryCircle;
    equals(other: kendo$geometryCircle): boolean;
    getCenter(): kendo$geometryPoint;
    getRadius(): number;
    pointAt(angle: number): kendo$geometryPoint;
    setCenter(value: kendo$geometryPoint): kendo$geometryPoint;
    setCenter(value: any): kendo$geometryPoint;
    setRadius(value: number): kendo$geometryCircle;
  }

  declare interface kendo$geometry$CircleOptions {
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
    name?: string;
    fill?: string | diagram$CircleFill;
    stroke?: diagram$CircleStroke;
    center?: any;
    radius?: number;
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
  }

  declare interface kendo$geometry$CircleEvent {
    sender: kendo$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Matrix mixins Observable {
    options: kendo$dataviz$geometry$MatrixOptions;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    static rotate(angle: number, x: number, y: number): kendo$geometryMatrix;
    static scale(scaleX: number, scaleY: number): kendo$geometryMatrix;
    static translate(x: number, y: number): kendo$geometryMatrix;
    static unit(): kendo$geometryMatrix;
    clone(): kendo$geometryMatrix;
    equals(other: kendo$geometryMatrix): boolean;
    round(digits: number): kendo$geometryMatrix;
    multiplyCopy(matrix: kendo$geometryMatrix): kendo$geometryMatrix;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
  }

  declare interface kendo$geometry$MatrixOptions {
    name?: string;
    name?: string;
  }

  declare interface kendo$geometry$MatrixEvent {
    sender: kendo$geometry$Matrix;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Matrix;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Point mixins Observable {
    options: kendo$dataviz$geometry$PointOptions;
    x: number;
    y: number;
    constructor(x: number, y: number): this;
    static create(x: number, y: number): kendo$geometryPoint;
    static create(x: any, y: number): kendo$geometryPoint;
    static create(x: kendo$geometryPoint, y: number): kendo$geometryPoint;
    static min(): kendo$geometryPoint;
    static max(): kendo$geometryPoint;
    static minPoint(): kendo$geometryPoint;
    static maxPoint(): kendo$geometryPoint;
    clone(): kendo$geometryPoint;
    distanceTo(point: kendo$geometryPoint): number;
    equals(other: kendo$geometryPoint): boolean;
    getX(): number;
    getY(): number;
    move(x: number, y: number): kendo$geometryPoint;
    rotate(angle: number, center: kendo$geometryPoint): kendo$geometryPoint;
    rotate(angle: number, center: any): kendo$geometryPoint;
    round(digits: number): kendo$geometryPoint;
    scale(scaleX: number, scaleY: number): kendo$geometryPoint;
    scaleCopy(scaleX: number, scaleY: number): kendo$geometryPoint;
    setX(value: number): kendo$geometryPoint;
    setY(value: number): kendo$geometryPoint;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
    transform(tansformation: kendo$geometryTransformation): kendo$geometryPoint;
    transformCopy(
      tansformation: kendo$geometryTransformation
    ): kendo$geometryPoint;
    translate(dx: number, dy: number): kendo$geometryPoint;
    translateWith(vector: kendo$geometryPoint): kendo$geometryPoint;
    translateWith(vector: any): kendo$geometryPoint;
  }

  declare interface kendo$geometry$PointOptions {
    name?: string;
    name?: string;
    name?: string;
  }

  declare interface kendo$geometry$PointEvent {
    sender: kendo$geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Rect mixins Observable {
    options: kendo$dataviz$geometry$RectOptions;
    origin: kendo$geometryPoint;
    size: kendo$geometrySize;
    constructor(
      origin: kendo$geometryPoint | any,
      size: kendo$geometrySize | any
    ): this;
    static fromPoints(
      pointA: kendo$geometryPoint,
      pointB: kendo$geometryPoint
    ): kendo$geometryRect;
    static union(
      rectA: kendo$geometryRect,
      rectB: kendo$geometryRect
    ): kendo$geometryRect;
    bbox(matrix: kendo$geometryMatrix): kendo$geometryRect;
    bottomLeft(): kendo$geometryPoint;
    bottomRight(): kendo$geometryPoint;
    center(): kendo$geometryPoint;
    clone(): kendo$geometryRect;
    equals(other: kendo$geometryRect): boolean;
    getOrigin(): kendo$geometryPoint;
    getSize(): kendo$geometrySize;
    height(): number;
    setOrigin(value: kendo$geometryPoint): kendo$geometryRect;
    setOrigin(value: any): kendo$geometryRect;
    setSize(value: kendo$geometrySize): kendo$geometryRect;
    setSize(value: any): kendo$geometryRect;
    topLeft(): kendo$geometryPoint;
    topRight(): kendo$geometryPoint;
    width(): number;
  }

  declare interface kendo$geometry$RectOptions {
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
    name?: string;
    height?: number;
    width?: number;
    x?: number;
    y?: number;
    name?: string;
    clip?: kendo$drawingPath;
    cursor?: string;
    fill?: kendo$drawingFillOptions;
    opacity?: number;
    stroke?: kendo$drawingStrokeOptions;
    tooltip?: kendo$drawingTooltipOptions;
    transform?: kendo$geometryTransformation;
    visible?: boolean;
    name?: string;
  }

  declare interface kendo$geometry$RectEvent {
    sender: kendo$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Size mixins Observable {
    options: kendo$dataviz$geometry$SizeOptions;
    width: number;
    height: number;
    static create(width: number, height: number): kendo$geometrySize;
    static create(width: any, height: number): kendo$geometrySize;
    static create(
      width: kendo$geometrySize,
      height: number
    ): kendo$geometrySize;
    clone(): kendo$geometrySize;
    equals(other: kendo$geometrySize): boolean;
    getWidth(): number;
    getHeight(): number;
    setWidth(value: number): kendo$geometrySize;
    setHeight(value: number): kendo$geometrySize;
  }

  declare interface kendo$geometry$SizeOptions {
    name?: string;
    name?: string;
  }

  declare interface kendo$geometry$SizeEvent {
    sender: kendo$geometry$Size;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Size;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Transformation mixins Observable {
    options: kendo$dataviz$geometry$TransformationOptions;
    clone(): kendo$geometryTransformation;
    equals(other: kendo$geometryTransformation): boolean;
    matrix(): kendo$geometryMatrix;
    multiply(
      transformation: kendo$geometryTransformation
    ): kendo$geometryTransformation;
    rotate(angle: number, center: any): kendo$geometryTransformation;
    rotate(
      angle: number,
      center: kendo$geometryPoint
    ): kendo$geometryTransformation;
    scale(scaleX: number, scaleY: number): kendo$geometryTransformation;
    translate(x: number, y: number): kendo$geometryTransformation;
  }

  declare interface kendo$geometry$TransformationOptions {
    name?: string;
    name?: string;
  }

  declare interface kendo$geometry$TransformationEvent {
    sender: kendo$geometry$Transformation;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
    sender: kendo$geometry$Transformation;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$Color mixins Observable {
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

  declare var npm$namespace$kendo$date: {
    setDayOfWeek: typeof kendo$date$setDayOfWeek,
    dayOfWeek: typeof kendo$date$dayOfWeek,
    weekInYear: typeof kendo$date$weekInYear,
    getDate: typeof kendo$date$getDate,
    isInDateRange: typeof kendo$date$isInDateRange,
    isInTimeRange: typeof kendo$date$isInTimeRange,
    isToday: typeof kendo$date$isToday,
    nextDay: typeof kendo$date$nextDay,
    previousDay: typeof kendo$date$previousDay,
    toUtcTime: typeof kendo$date$toUtcTime,
    setTime: typeof kendo$date$setTime,
    setHours: typeof kendo$date$setHours,
    addDays: typeof kendo$date$addDays,
    today: typeof kendo$date$today,
    toInvariantTime: typeof kendo$date$toInvariantTime,
    firstDayOfMonth: typeof kendo$date$firstDayOfMonth,
    lastDayOfMonth: typeof kendo$date$lastDayOfMonth,
    getMilliseconds: typeof kendo$date$getMilliseconds,
    MS_PER_DAY: typeof kendo$date$MS_PER_DAY,
    MS_PER_HOUR: typeof kendo$date$MS_PER_HOUR,
    MS_PER_MINUTE: typeof kendo$date$MS_PER_MINUTE
  };
  declare var kendo$date$MS_PER_DAY: number;

  declare var kendo$date$MS_PER_HOUR: number;

  declare var kendo$date$MS_PER_MINUTE: number;

  declare function kendo$date$setDayOfWeek(
    targetDate: Date,
    dayOfWeek: number,
    direction: number
  ): void;

  declare function kendo$date$dayOfWeek(
    targetDate: Date,
    dayOfWeek: number,
    direction: number
  ): Date;

  declare function kendo$date$weekInYear(
    date: Date,
    weekStart?: number
  ): number;

  declare function kendo$date$getDate(date: Date): Date;

  declare function kendo$date$isInDateRange(
    targetDate: Date,
    lowerLimitDate: Date,
    upperLimitDate: Date
  ): boolean;

  declare function kendo$date$isInTimeRange(
    targetDate: Date,
    lowerLimitDate: Date,
    upperLimitDate: Date
  ): boolean;

  declare function kendo$date$isToday(targetDate: Date): boolean;

  declare function kendo$date$nextDay(targetDate: Date): Date;

  declare function kendo$date$previousDay(targetDate: Date): Date;

  declare function kendo$date$toUtcTime(targetDate: Date): number;

  declare function kendo$date$setTime(
    targetDate: Date,
    millisecondsToAdd: number,
    ignoreDST: boolean
  ): void;

  declare function kendo$date$setHours(
    targetDate: Date,
    sourceDate: number
  ): Date;

  declare function kendo$date$addDays(
    targetDate: Date,
    numberOfDaysToAdd: number
  ): Date;

  declare function kendo$date$today(): Date;

  declare function kendo$date$toInvariantTime(targetDate: Date): Date;

  declare function kendo$date$firstDayOfMonth(targetDate: Date): Date;

  declare function kendo$date$lastDayOfMonth(targetDate: Date): Date;

  declare function kendo$date$getMilliseconds(targetDate: Date): number;

  declare function kendo$alert(text: string): void;

  declare function kendo$antiForgeryTokens(): any;

  declare function kendo$bind(
    element: string,
    viewModel: any,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: string,
    viewModel: kendo$dataObservableObject,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: JQuery,
    viewModel: any,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: JQuery,
    viewModel: kendo$dataObservableObject,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: drawing$Element,
    viewModel: any,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: drawing$Element,
    viewModel: kendo$dataObservableObject,
    namespace?: any
  ): void;

  declare function kendo$confirm(text: string): JQueryPromise<any>;

  declare function kendo$culture(culture: string): void;

  declare function kendo$destroy(element: string): void;

  declare function kendo$destroy(element: JQuery): void;

  declare function kendo$destroy(element: drawing$Element): void;

  declare function kendo$guid(): string;

  declare function kendo$htmlEncode(value: string): string;

  declare function kendo$observableHierarchy(array: any): void;

  declare function kendo$parseDate(
    value: string,
    formats?: string,
    culture?: string
  ): Date;

  declare function kendo$parseDate(
    value: string,
    formats?: any,
    culture?: string
  ): Date;

  declare function kendo$parseExactDate(
    value: string,
    formats?: string,
    culture?: string
  ): Date;

  declare function kendo$parseExactDate(
    value: string,
    formats?: any,
    culture?: string
  ): Date;

  declare function kendo$parseFloat(value: string, culture?: string): number;

  declare function kendo$parseInt(value: string, culture?: string): number;

  declare function kendo$parseColor(
    color: string,
    noerror: boolean
  ): kendo$Color;

  declare function kendo$prompt(
    text: string,
    defaultValue: string
  ): JQueryPromise<any>;

  declare function kendo$proxyModelSetters(): void;

  declare function kendo$proxyModelSetters(data: kendo$dataModel): void;

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
    format: string,
    culture?: string
  ): string;

  declare function kendo$toString(
    value: number,
    format: string,
    culture?: string
  ): string;

  declare function kendo$unbind(element: string): void;

  declare function kendo$unbind(element: JQuery): void;

  declare function kendo$unbind(element: drawing$Element): void;

  declare var npm$namespace$kendo$pdf: {
    defineFont: typeof kendo$pdf$defineFont
  };
  declare function kendo$pdf$defineFont(map: any): void;

  declare var npm$namespace$kendo$timezone: {
    offset: typeof kendo$timezone$offset,
    convert: typeof kendo$timezone$convert,
    apply: typeof kendo$timezone$apply,
    remove: typeof kendo$timezone$remove,
    abbr: typeof kendo$timezone$abbr,
    toLocalDate: typeof kendo$timezone$toLocalDate
  };
  declare function kendo$timezone$offset(
    utcTime: Date,
    timezone: string
  ): number;

  declare function kendo$timezone$offset(
    utcTime: number,
    timezone: string
  ): number;

  declare function kendo$timezone$convert(
    targetDate: Date,
    fromOffset: number,
    toOffset: number
  ): Date;

  declare function kendo$timezone$convert(
    targetDate: Date,
    fromOffset: number,
    toOffset: string
  ): Date;

  declare function kendo$timezone$convert(
    targetDate: Date,
    fromOffset: string,
    toOffset: number
  ): Date;

  declare function kendo$timezone$convert(
    targetDate: Date,
    fromOffset: string,
    toOffset: string
  ): Date;

  declare function kendo$timezone$apply(targetDate: Date, offset: number): Date;

  declare function kendo$timezone$apply(targetDate: Date, offset: string): Date;

  declare function kendo$timezone$remove(
    targetDate: Date,
    offset: number
  ): Date;

  declare function kendo$timezone$remove(
    targetDate: Date,
    offset: string
  ): Date;

  declare function kendo$timezone$abbr(
    targetDate: Date,
    timezone: string
  ): string;

  declare function kendo$timezone$toLocalDate(targetDate: Date): Date;

  declare function kendo$timezone$toLocalDate(targetDate: number): Date;

  declare var npm$namespace$kendo$spreadsheet: {
    CustomFilter: typeof kendo$spreadsheet$CustomFilter,
    DynamicFilter: typeof kendo$spreadsheet$DynamicFilter,
    Range: typeof kendo$spreadsheet$Range,
    Sheet: typeof kendo$spreadsheet$Sheet,
    TopFilter: typeof kendo$spreadsheet$TopFilter,
    ValueFilter: typeof kendo$spreadsheet$ValueFilter
  };
  declare class kendo$spreadsheet$CustomFilter mixins Observable {
    options: spreadsheet$CustomFilterOptions;
    init(options: any): void;
  }

  declare interface kendo$spreadsheet$CustomFilterOptions {
    name?: string;
  }

  declare interface kendo$spreadsheet$CustomFilterEvent {
    sender: kendo$spreadsheet$CustomFilter;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$spreadsheet$DynamicFilter mixins Observable {
    options: spreadsheet$DynamicFilterOptions;
    init(options: any): void;
  }

  declare interface kendo$spreadsheet$DynamicFilterOptions {
    name?: string;
  }

  declare interface kendo$spreadsheet$DynamicFilterEvent {
    sender: kendo$spreadsheet$DynamicFilter;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$spreadsheet$Range mixins Observable {
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
    fillFrom(srcRange: kendo$spreadsheet$Range, direction?: number): void;
    fillFrom(srcRange: string, direction?: number): void;
    filter(filter: boolean): void;
    filter(filter: any): void;
    fontFamily(): string;
    fontFamily(value?: string): void;
    fontSize(): number;
    fontSize(value?: number): void;
    forEachCell(callback: Function): void;
    format(): string;
    format(format?: string): void;
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

  declare interface kendo$spreadsheet$RangeOptions {
    name?: string;
  }

  declare interface kendo$spreadsheet$RangeEvent {
    sender: kendo$spreadsheet$Range;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$spreadsheet$Sheet mixins Observable {
    options: spreadsheet$SheetOptions;
    clearFilter(indexes: number): void;
    clearFilter(indexes: any): void;
    columnWidth(): void;
    columnWidth(index: number, width?: number): void;
    batch(callback: Function, changeEventArgs: any): void;
    deleteColumn(index: number): void;
    deleteRow(index: number): void;
    fromJSON(data: any): void;
    frozenColumns(): number;
    frozenColumns(count?: number): void;
    frozenRows(): number;
    frozenRows(count?: number): void;
    hideColumn(index: number): void;
    hideRow(index: number): void;
    insertColumn(index: number): void;
    insertRow(index: number): void;
    range(ref: string): kendo$spreadsheetRange;
    range(
      rowIndex: number,
      columnIndex: number,
      rowCount?: number,
      columnCount?: number
    ): kendo$spreadsheetRange;
    rowHeight(): void;
    rowHeight(index: number, width?: number): void;
    selection(): kendo$spreadsheetRange;
    setDataSource(dataSource: kendo$dataDataSource, columns?: any): void;
    showGridLines(): boolean;
    showGridLines(showGridLines?: boolean): void;
    toJSON(): void;
    unhideColumn(index: number): void;
    unhideRow(index: number): void;
  }

  declare interface kendo$spreadsheet$SheetOptions {
    name?: string;
    change?: (e: spreadsheet$SheetChangeEvent) => void;
  }

  declare interface kendo$spreadsheet$SheetEvent {
    sender: kendo$spreadsheet$Sheet;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$spreadsheet$SheetChangeEvent = {} & SheetEvent;

  declare class kendo$spreadsheet$TopFilter mixins Observable {
    options: spreadsheet$TopFilterOptions;
    init(options: any): void;
  }

  declare interface kendo$spreadsheet$TopFilterOptions {
    name?: string;
  }

  declare interface kendo$spreadsheet$TopFilterEvent {
    sender: kendo$spreadsheet$TopFilter;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$spreadsheet$ValueFilter mixins Observable {
    options: spreadsheet$ValueFilterOptions;
    init(options: any): void;
  }

  declare interface kendo$spreadsheet$ValueFilterOptions {
    name?: string;
  }

  declare interface kendo$spreadsheet$ValueFilterEvent {
    sender: kendo$spreadsheet$ValueFilter;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare var npm$namespace$kendo$ooxml: {
    Workbook: typeof kendo$ooxml$Workbook
  };
  declare class kendo$ooxml$Workbook mixins Observable {
    options: ooxml$WorkbookOptions;
    sheets: ooxml$WorkbookSheet[];
    constructor(options?: ooxml$WorkbookOptions): this;
    toDataURL(): string;
    toDataURLAsync(): JQueryPromise<any>;
  }

  declare interface kendo$ooxml$WorkbookSheetColumn {
    autoWidth?: boolean;
    index?: number;
    width?: number;
  }

  declare interface kendo$ooxml$WorkbookSheetFilter {
    from?: number;
    to?: number;
  }

  declare interface kendo$ooxml$WorkbookSheetFreezePane {
    colSplit?: number;
    rowSplit?: number;
  }

  declare interface kendo$ooxml$WorkbookSheetRowCellBorderBottom {
    color?: string;
    size?: number;
  }

  declare interface kendo$ooxml$WorkbookSheetRowCellBorderLeft {
    color?: string;
    size?: number;
  }

  declare interface kendo$ooxml$WorkbookSheetRowCellBorderRight {
    color?: string;
    size?: number;
  }

  declare interface kendo$ooxml$WorkbookSheetRowCellBorderTop {
    color?: string;
    size?: number;
  }

  declare interface kendo$ooxml$WorkbookSheetRowCell {
    background?: string;
    borderBottom?: kendo$ooxml$WorkbookSheetRowCellBorderBottom;
    borderLeft?: kendo$ooxml$WorkbookSheetRowCellBorderLeft;
    borderTop?: kendo$ooxml$WorkbookSheetRowCellBorderTop;
    borderRight?: kendo$ooxml$WorkbookSheetRowCellBorderRight;
    bold?: boolean;
    color?: string;
    colSpan?: number;
    fontFamily?: string;
    fontName?: string;
    fontSize?: number;
    format?: string;
    formula?: string;
    hAlign?: string;
    index?: any;
    italic?: boolean;
    rowSpan?: number;
    textAlign?: string;
    underline?: boolean;
    wrap?: boolean;
    vAlign?: string;
    verticalAlign?: string;
    value?: Date | number | string | boolean;
  }

  declare interface kendo$ooxml$WorkbookSheetRow {
    cells?: kendo$ooxml$WorkbookSheetRowCell[];
    index?: number;
    height?: number;
  }

  declare interface kendo$ooxml$WorkbookSheet {
    columns?: kendo$ooxml$WorkbookSheetColumn[];
    freezePane?: kendo$ooxml$WorkbookSheetFreezePane;
    frozenColumns?: number;
    frozenRows?: number;
    filter?: kendo$ooxml$WorkbookSheetFilter;
    mergedCells?: any;
    name?: string;
    rows?: kendo$ooxml$WorkbookSheetRow[];
    showGridLines?: boolean;
    title?: string;
  }

  declare interface kendo$ooxml$WorkbookOptions {
    name?: string;
    creator?: string;
    date?: Date;
    sheets?: kendo$ooxml$WorkbookSheet[];
  }

  declare interface kendo$ooxml$WorkbookEvent {
    sender: kendo$ooxml$Workbook;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }
  declare interface HTMLElement {
    kendoBindingTarget: kendo$dataBindingTarget;
  }
  declare interface JQueryAjaxSettings {}
  declare interface JQueryXHR {}
  declare interface JQueryEventObject {}
  declare interface JQueryPromise<T> {}
  declare interface JQuery {
    data(key: any): any;
    kendoAlert(): JQuery;
    kendoAlert(options: kendo$uiAlertOptions): JQuery;
    data(key: "kendoAlert"): kendo$uiAlert;
    kendoArcGauge(): JQuery;
    kendoArcGauge(options: kendo$datavizuiArcGaugeOptions): JQuery;
    data(key: "kendoArcGauge"): kendo$datavizuiArcGauge;
    kendoAutoComplete(): JQuery;
    kendoAutoComplete(options: kendo$uiAutoCompleteOptions): JQuery;
    data(key: "kendoAutoComplete"): kendo$uiAutoComplete;
    kendoBarcode(): JQuery;
    kendoBarcode(options: kendo$datavizuiBarcodeOptions): JQuery;
    data(key: "kendoBarcode"): kendo$datavizuiBarcode;
    kendoButton(): JQuery;
    kendoButton(options: kendo$uiButtonOptions): JQuery;
    data(key: "kendoButton"): kendo$uiButton;
    kendoButtonGroup(): JQuery;
    kendoButtonGroup(options: kendo$uiButtonGroupOptions): JQuery;
    data(key: "kendoButtonGroup"): kendo$uiButtonGroup;
    kendoCalendar(): JQuery;
    kendoCalendar(options: kendo$uiCalendarOptions): JQuery;
    data(key: "kendoCalendar"): kendo$uiCalendar;
    kendoChart(): JQuery;
    kendoChart(options: kendo$datavizuiChartOptions): JQuery;
    data(key: "kendoChart"): kendo$datavizuiChart;
    kendoChat(): JQuery;
    kendoChat(options: kendo$uiChatOptions): JQuery;
    data(key: "kendoChat"): kendo$uiChat;
    kendoColorPalette(): JQuery;
    kendoColorPalette(options: kendo$uiColorPaletteOptions): JQuery;
    data(key: "kendoColorPalette"): kendo$uiColorPalette;
    kendoColorPicker(): JQuery;
    kendoColorPicker(options: kendo$uiColorPickerOptions): JQuery;
    data(key: "kendoColorPicker"): kendo$uiColorPicker;
    kendoComboBox(): JQuery;
    kendoComboBox(options: kendo$uiComboBoxOptions): JQuery;
    data(key: "kendoComboBox"): kendo$uiComboBox;
    kendoConfirm(): JQuery;
    kendoConfirm(options: kendo$uiConfirmOptions): JQuery;
    data(key: "kendoConfirm"): kendo$uiConfirm;
    kendoContextMenu(): JQuery;
    kendoContextMenu(options: kendo$uiContextMenuOptions): JQuery;
    data(key: "kendoContextMenu"): kendo$uiContextMenu;
    kendoDateInput(): JQuery;
    kendoDateInput(options: kendo$uiDateInputOptions): JQuery;
    data(key: "kendoDateInput"): kendo$uiDateInput;
    kendoDatePicker(): JQuery;
    kendoDatePicker(options: kendo$uiDatePickerOptions): JQuery;
    data(key: "kendoDatePicker"): kendo$uiDatePicker;
    kendoDateRangePicker(): JQuery;
    kendoDateRangePicker(options: kendo$uiDateRangePickerOptions): JQuery;
    data(key: "kendoDateRangePicker"): kendo$uiDateRangePicker;
    kendoDateTimePicker(): JQuery;
    kendoDateTimePicker(options: kendo$uiDateTimePickerOptions): JQuery;
    data(key: "kendoDateTimePicker"): kendo$uiDateTimePicker;
    kendoDiagram(): JQuery;
    kendoDiagram(options: kendo$datavizuiDiagramOptions): JQuery;
    data(key: "kendoDiagram"): kendo$datavizuiDiagram;
    kendoDialog(): JQuery;
    kendoDialog(options: kendo$uiDialogOptions): JQuery;
    data(key: "kendoDialog"): kendo$uiDialog;
    kendoDraggable(): JQuery;
    kendoDraggable(options: kendo$uiDraggableOptions): JQuery;
    data(key: "kendoDraggable"): kendo$uiDraggable;
    kendoDropDownList(): JQuery;
    kendoDropDownList(options: kendo$uiDropDownListOptions): JQuery;
    data(key: "kendoDropDownList"): kendo$uiDropDownList;
    kendoDropDownTree(): JQuery;
    kendoDropDownTree(options: kendo$uiDropDownTreeOptions): JQuery;
    data(key: "kendoDropDownTree"): kendo$uiDropDownTree;
    kendoDropTarget(): JQuery;
    kendoDropTarget(options: kendo$uiDropTargetOptions): JQuery;
    data(key: "kendoDropTarget"): kendo$uiDropTarget;
    kendoDropTargetArea(): JQuery;
    kendoDropTargetArea(options: kendo$uiDropTargetAreaOptions): JQuery;
    data(key: "kendoDropTargetArea"): kendo$uiDropTargetArea;
    kendoEditor(): JQuery;
    kendoEditor(options: kendo$uiEditorOptions): JQuery;
    data(key: "kendoEditor"): kendo$uiEditor;
    kendoFilterMenu(): JQuery;
    kendoFilterMenu(options: kendo$uiFilterMenuOptions): JQuery;
    data(key: "kendoFilterMenu"): kendo$uiFilterMenu;
    kendoFlatColorPicker(): JQuery;
    kendoFlatColorPicker(options: kendo$uiFlatColorPickerOptions): JQuery;
    data(key: "kendoFlatColorPicker"): kendo$uiFlatColorPicker;
    kendoGantt(): JQuery;
    kendoGantt(options: kendo$uiGanttOptions): JQuery;
    data(key: "kendoGantt"): kendo$uiGantt;
    kendoGrid(): JQuery;
    kendoGrid(options: kendo$uiGridOptions): JQuery;
    data(key: "kendoGrid"): kendo$uiGrid;
    kendoLinearGauge(): JQuery;
    kendoLinearGauge(options: kendo$datavizuiLinearGaugeOptions): JQuery;
    data(key: "kendoLinearGauge"): kendo$datavizuiLinearGauge;
    kendoListBox(): JQuery;
    kendoListBox(options: kendo$uiListBoxOptions): JQuery;
    data(key: "kendoListBox"): kendo$uiListBox;
    kendoListView(): JQuery;
    kendoListView(options: kendo$uiListViewOptions): JQuery;
    data(key: "kendoListView"): kendo$uiListView;
    kendoMap(): JQuery;
    kendoMap(options: kendo$datavizuiMapOptions): JQuery;
    data(key: "kendoMap"): kendo$datavizuiMap;
    kendoMaskedTextBox(): JQuery;
    kendoMaskedTextBox(options: kendo$uiMaskedTextBoxOptions): JQuery;
    data(key: "kendoMaskedTextBox"): kendo$uiMaskedTextBox;
    kendoMediaPlayer(): JQuery;
    kendoMediaPlayer(options: kendo$uiMediaPlayerOptions): JQuery;
    data(key: "kendoMediaPlayer"): kendo$uiMediaPlayer;
    kendoMenu(): JQuery;
    kendoMenu(options: kendo$uiMenuOptions): JQuery;
    data(key: "kendoMenu"): kendo$uiMenu;
    kendoMobileActionSheet(): JQuery;
    kendoMobileActionSheet(options: kendo$mobileuiActionSheetOptions): JQuery;
    data(key: "kendoMobileActionSheet"): kendo$mobileuiActionSheet;
    kendoMobileBackButton(): JQuery;
    kendoMobileBackButton(options: kendo$mobileuiBackButtonOptions): JQuery;
    data(key: "kendoMobileBackButton"): kendo$mobileuiBackButton;
    kendoMobileButton(): JQuery;
    kendoMobileButton(options: kendo$mobileuiButtonOptions): JQuery;
    data(key: "kendoMobileButton"): kendo$mobileuiButton;
    kendoMobileButtonGroup(): JQuery;
    kendoMobileButtonGroup(options: kendo$mobileuiButtonGroupOptions): JQuery;
    data(key: "kendoMobileButtonGroup"): kendo$mobileuiButtonGroup;
    kendoMobileCollapsible(): JQuery;
    kendoMobileCollapsible(options: kendo$mobileuiCollapsibleOptions): JQuery;
    data(key: "kendoMobileCollapsible"): kendo$mobileuiCollapsible;
    kendoMobileDetailButton(): JQuery;
    kendoMobileDetailButton(options: kendo$mobileuiDetailButtonOptions): JQuery;
    data(key: "kendoMobileDetailButton"): kendo$mobileuiDetailButton;
    kendoMobileDrawer(): JQuery;
    kendoMobileDrawer(options: kendo$mobileuiDrawerOptions): JQuery;
    data(key: "kendoMobileDrawer"): kendo$mobileuiDrawer;
    kendoMobileLayout(): JQuery;
    kendoMobileLayout(options: kendo$mobileuiLayoutOptions): JQuery;
    data(key: "kendoMobileLayout"): kendo$mobileuiLayout;
    kendoMobileListView(): JQuery;
    kendoMobileListView(options: kendo$mobileuiListViewOptions): JQuery;
    data(key: "kendoMobileListView"): kendo$mobileuiListView;
    kendoMobileLoader(): JQuery;
    kendoMobileLoader(options: kendo$mobileuiLoaderOptions): JQuery;
    data(key: "kendoMobileLoader"): kendo$mobileuiLoader;
    kendoMobileModalView(): JQuery;
    kendoMobileModalView(options: kendo$mobileuiModalViewOptions): JQuery;
    data(key: "kendoMobileModalView"): kendo$mobileuiModalView;
    kendoMobileNavBar(): JQuery;
    kendoMobileNavBar(options: kendo$mobileuiNavBarOptions): JQuery;
    data(key: "kendoMobileNavBar"): kendo$mobileuiNavBar;
    kendoMobilePane(): JQuery;
    kendoMobilePane(options: kendo$mobileuiPaneOptions): JQuery;
    data(key: "kendoMobilePane"): kendo$mobileuiPane;
    kendoMobilePopOver(): JQuery;
    kendoMobilePopOver(options: kendo$mobileuiPopOverOptions): JQuery;
    data(key: "kendoMobilePopOver"): kendo$mobileuiPopOver;
    kendoMobileScrollView(): JQuery;
    kendoMobileScrollView(options: kendo$mobileuiScrollViewOptions): JQuery;
    data(key: "kendoMobileScrollView"): kendo$mobileuiScrollView;
    kendoMobileScroller(): JQuery;
    kendoMobileScroller(options: kendo$mobileuiScrollerOptions): JQuery;
    data(key: "kendoMobileScroller"): kendo$mobileuiScroller;
    kendoMobileSplitView(): JQuery;
    kendoMobileSplitView(options: kendo$mobileuiSplitViewOptions): JQuery;
    data(key: "kendoMobileSplitView"): kendo$mobileuiSplitView;
    kendoMobileSwitch(): JQuery;
    kendoMobileSwitch(options: kendo$mobileuiSwitchOptions): JQuery;
    data(key: "kendoMobileSwitch"): kendo$mobileuiSwitch;
    kendoMobileTabStrip(): JQuery;
    kendoMobileTabStrip(options: kendo$mobileuiTabStripOptions): JQuery;
    data(key: "kendoMobileTabStrip"): kendo$mobileuiTabStrip;
    kendoMobileView(): JQuery;
    kendoMobileView(options: kendo$mobileuiViewOptions): JQuery;
    data(key: "kendoMobileView"): kendo$mobileuiView;
    kendoMultiColumnComboBox(): JQuery;
    kendoMultiColumnComboBox(
      options: kendo$uiMultiColumnComboBoxOptions
    ): JQuery;
    data(key: "kendoMultiColumnComboBox"): kendo$uiMultiColumnComboBox;
    kendoMultiSelect(): JQuery;
    kendoMultiSelect(options: kendo$uiMultiSelectOptions): JQuery;
    data(key: "kendoMultiSelect"): kendo$uiMultiSelect;
    kendoMultiViewCalendar(): JQuery;
    kendoMultiViewCalendar(options: kendo$uiMultiViewCalendarOptions): JQuery;
    data(key: "kendoMultiViewCalendar"): kendo$uiMultiViewCalendar;
    kendoNotification(): JQuery;
    kendoNotification(options: kendo$uiNotificationOptions): JQuery;
    data(key: "kendoNotification"): kendo$uiNotification;
    kendoNumericTextBox(): JQuery;
    kendoNumericTextBox(options: kendo$uiNumericTextBoxOptions): JQuery;
    data(key: "kendoNumericTextBox"): kendo$uiNumericTextBox;
    kendoPager(): JQuery;
    kendoPager(options: kendo$uiPagerOptions): JQuery;
    data(key: "kendoPager"): kendo$uiPager;
    kendoPanelBar(): JQuery;
    kendoPanelBar(options: kendo$uiPanelBarOptions): JQuery;
    data(key: "kendoPanelBar"): kendo$uiPanelBar;
    kendoPivotConfigurator(): JQuery;
    kendoPivotConfigurator(options: kendo$uiPivotConfiguratorOptions): JQuery;
    data(key: "kendoPivotConfigurator"): kendo$uiPivotConfigurator;
    kendoPivotGrid(): JQuery;
    kendoPivotGrid(options: kendo$uiPivotGridOptions): JQuery;
    data(key: "kendoPivotGrid"): kendo$uiPivotGrid;
    kendoPopup(): JQuery;
    kendoPopup(options: kendo$uiPopupOptions): JQuery;
    data(key: "kendoPopup"): kendo$uiPopup;
    kendoProgressBar(): JQuery;
    kendoProgressBar(options: kendo$uiProgressBarOptions): JQuery;
    data(key: "kendoProgressBar"): kendo$uiProgressBar;
    kendoPrompt(): JQuery;
    kendoPrompt(options: kendo$uiPromptOptions): JQuery;
    data(key: "kendoPrompt"): kendo$uiPrompt;
    kendoQRCode(): JQuery;
    kendoQRCode(options: kendo$datavizuiQRCodeOptions): JQuery;
    data(key: "kendoQRCode"): kendo$datavizuiQRCode;
    kendoRadialGauge(): JQuery;
    kendoRadialGauge(options: kendo$datavizuiRadialGaugeOptions): JQuery;
    data(key: "kendoRadialGauge"): kendo$datavizuiRadialGauge;
    kendoRangeSlider(): JQuery;
    kendoRangeSlider(options: kendo$uiRangeSliderOptions): JQuery;
    data(key: "kendoRangeSlider"): kendo$uiRangeSlider;
    kendoResponsivePanel(): JQuery;
    kendoResponsivePanel(options: kendo$uiResponsivePanelOptions): JQuery;
    data(key: "kendoResponsivePanel"): kendo$uiResponsivePanel;
    kendoScheduler(): JQuery;
    kendoScheduler(options: kendo$uiSchedulerOptions): JQuery;
    data(key: "kendoScheduler"): kendo$uiScheduler;
    kendoScrollView(): JQuery;
    kendoScrollView(options: kendo$uiScrollViewOptions): JQuery;
    data(key: "kendoScrollView"): kendo$uiScrollView;
    kendoSlider(): JQuery;
    kendoSlider(options: kendo$uiSliderOptions): JQuery;
    data(key: "kendoSlider"): kendo$uiSlider;
    kendoSortable(): JQuery;
    kendoSortable(options: kendo$uiSortableOptions): JQuery;
    data(key: "kendoSortable"): kendo$uiSortable;
    kendoSparkline(): JQuery;
    kendoSparkline(options: kendo$datavizuiSparklineOptions): JQuery;
    data(key: "kendoSparkline"): kendo$datavizuiSparkline;
    kendoSplitter(): JQuery;
    kendoSplitter(options: kendo$uiSplitterOptions): JQuery;
    data(key: "kendoSplitter"): kendo$uiSplitter;
    kendoSpreadsheet(): JQuery;
    kendoSpreadsheet(options: kendo$uiSpreadsheetOptions): JQuery;
    data(key: "kendoSpreadsheet"): kendo$uiSpreadsheet;
    kendoStockChart(): JQuery;
    kendoStockChart(options: kendo$datavizuiStockChartOptions): JQuery;
    data(key: "kendoStockChart"): kendo$datavizuiStockChart;
    kendoSwitch(): JQuery;
    kendoSwitch(options: kendo$uiSwitchOptions): JQuery;
    data(key: "kendoSwitch"): kendo$uiSwitch;
    kendoTabStrip(): JQuery;
    kendoTabStrip(options: kendo$uiTabStripOptions): JQuery;
    data(key: "kendoTabStrip"): kendo$uiTabStrip;
    kendoTimePicker(): JQuery;
    kendoTimePicker(options: kendo$uiTimePickerOptions): JQuery;
    data(key: "kendoTimePicker"): kendo$uiTimePicker;
    kendoToolBar(): JQuery;
    kendoToolBar(options: kendo$uiToolBarOptions): JQuery;
    data(key: "kendoToolBar"): kendo$uiToolBar;
    kendoTooltip(): JQuery;
    kendoTooltip(options: kendo$uiTooltipOptions): JQuery;
    data(key: "kendoTooltip"): kendo$uiTooltip;
    kendoTouch(): JQuery;
    kendoTouch(options: kendo$uiTouchOptions): JQuery;
    data(key: "kendoTouch"): kendo$uiTouch;
    kendoTreeList(): JQuery;
    kendoTreeList(options: kendo$uiTreeListOptions): JQuery;
    data(key: "kendoTreeList"): kendo$uiTreeList;
    kendoTreeMap(): JQuery;
    kendoTreeMap(options: kendo$datavizuiTreeMapOptions): JQuery;
    data(key: "kendoTreeMap"): kendo$datavizuiTreeMap;
    kendoTreeView(): JQuery;
    kendoTreeView(options: kendo$uiTreeViewOptions): JQuery;
    data(key: "kendoTreeView"): kendo$uiTreeView;
    kendoUpload(): JQuery;
    kendoUpload(options: kendo$uiUploadOptions): JQuery;
    data(key: "kendoUpload"): kendo$uiUpload;
    kendoValidator(): JQuery;
    kendoValidator(options: kendo$uiValidatorOptions): JQuery;
    data(key: "kendoValidator"): kendo$uiValidator;
    kendoWindow(): JQuery;
    kendoWindow(options: kendo$uiWindowOptions): JQuery;
    data(key: "kendoWindow"): kendo$uiWindow;
  }
}
