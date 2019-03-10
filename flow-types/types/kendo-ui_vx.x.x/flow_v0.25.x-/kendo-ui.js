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

  declare function kendo$fx(selector: string): kendo$effects$Element;

  declare function kendo$fx(element: drawing$Element): kendo$effects$Element;

  declare function kendo$fx(element: JQuery): kendo$effects$Element;

  declare function kendo$init(selector: string, ...namespaces: any[]): void;

  declare function kendo$init(element: JQuery, ...namespaces: any[]): void;

  declare function kendo$init(
    element: drawing$Element,
    ...namespaces: any[]
  ): void;

  declare function kendo$observable(data: any): kendo$data$ObservableObject;

  declare function kendo$observableHierarchy(
    array: any[]
  ): kendo$data$ObservableArray;

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
  ): kendo$ui$Widget;

  declare function kendo$widgetInstance(
    element: JQuery,
    suite?: typeof kendo$mobile$ui
  ): kendo$ui$Widget;

  declare function kendo$widgetInstance(
    element: JQuery,
    suite?: typeof kendo$dataviz$ui
  ): kendo$ui$Widget;

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
    wrap?: boolean;
    model?: Object;
    evalTemplate?: boolean;
    init?: (e: ui$ViewEvent) => void;
    show?: (e: ui$ViewEvent) => void;
    hide?: (e: ui$ViewEvent) => void;
  }

  declare interface kendo$ViewEvent {
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

  declare var npm$namespace$kendo$effects: {
    enable: typeof kendo$effects$enable,
    disable: typeof kendo$effects$disable,
    box: typeof kendo$effects$box,
    fillScale: typeof kendo$effects$fillScale,
    fitScale: typeof kendo$effects$fitScale,
    transformOrigin: typeof kendo$effects$transformOrigin
  };
  declare function kendo$effects$enable(): void;

  declare function kendo$effects$disable(): void;

  declare interface kendo$effects$Element {
    expand(direction: string): kendo$effects$Expand;
    expandHorizontal(): kendo$effects$Expand;
    expandVertical(): kendo$effects$Expand;
    fade(direction: string): kendo$effects$Fade;
    fadeIn(): kendo$effects$Fade;
    fadeOut(): kendo$effects$Fade;
    flip(axis: string, face: JQuery, back: JQuery): kendo$effects$Flip;
    flipHorizontal(face: JQuery, back: JQuery): kendo$effects$Flip;
    flipVertical(face: JQuery, back: JQuery): kendo$effects$Flip;
    pageturn(axis: string, face: JQuery, back: JQuery): kendo$effects$PageTurn;
    pageturnHorizontal(face: JQuery, back: JQuery): kendo$effects$PageTurn;
    pageturnVertical(face: JQuery, back: JQuery): kendo$effects$PageTurn;
    slideIn(direction: string): kendo$effects$SlideIn;
    slideInDown(): kendo$effects$SlideIn;
    slideInLeft(): kendo$effects$SlideIn;
    slideInRight(): kendo$effects$SlideIn;
    slideInUp(): kendo$effects$SlideIn;
    tile(direction: string, previous: JQuery): kendo$effects$Tile;
    tileDown(previous: JQuery): kendo$effects$Tile;
    tileLeft(previous: JQuery): kendo$effects$Tile;
    tileRight(previous: JQuery): kendo$effects$Tile;
    tileUp(previous: JQuery): kendo$effects$Tile;
    transfer(target: JQuery): kendo$effects$Transfer;
    zoom(direction: string): kendo$effects$Zoom;
    zoomIn(): kendo$effects$Zoom;
    zoomOut(): kendo$effects$Zoom;
  }

  declare interface kendo$effects$Effect {
    play(): JQueryPromise<any>;
    reverse(): JQueryPromise<any>;
    duration(value: number): kendo$effects$Effect;
    add(effect: kendo$effects$Effect): kendo$effects$Effect;
    stop(): kendo$effects$Effect;
  }

  declare type kendo$effects$Expand = {
    duration(value: number): kendo$effects$Expand,
    direction(value: string): kendo$effects$Expand,
    stop(): kendo$effects$Expand,
    add(effect: kendo$effects$Effect): kendo$effects$Expand
  } & kendo$effects$Effect;

  declare type kendo$effects$Fade = {
    duration(value: number): kendo$effects$Fade,
    direction(value: string): kendo$effects$Fade,
    stop(): kendo$effects$Fade,
    add(effect: kendo$effects$Effect): kendo$effects$Fade,
    startValue(value: number): kendo$effects$Fade,
    endValue(value: number): kendo$effects$Fade
  } & kendo$effects$Effect;

  declare type kendo$effects$Flip = {
    duration(value: number): kendo$effects$Flip,
    direction(value: string): kendo$effects$Flip,
    stop(): kendo$effects$Flip,
    add(effect: kendo$effects$Effect): kendo$effects$Flip
  } & kendo$effects$Effect;

  declare type kendo$effects$PageTurn = {
    duration(value: number): kendo$effects$PageTurn,
    direction(value: string): kendo$effects$PageTurn,
    stop(): kendo$effects$PageTurn,
    add(effect: kendo$effects$Effect): kendo$effects$PageTurn
  } & kendo$effects$Effect;

  declare type kendo$effects$SlideIn = {
    duration(value: number): kendo$effects$SlideIn,
    direction(value: string): kendo$effects$SlideIn,
    stop(): kendo$effects$SlideIn,
    add(effect: kendo$effects$Effect): kendo$effects$SlideIn
  } & kendo$effects$Effect;

  declare type kendo$effects$Tile = {
    duration(value: number): kendo$effects$Tile,
    direction(value: string): kendo$effects$Tile,
    stop(): kendo$effects$Tile,
    add(effect: kendo$effects$Effect): kendo$effects$Tile
  } & kendo$effects$Effect;

  declare type kendo$effects$Transfer = {
    duration(value: number): kendo$effects$Transfer,
    stop(): kendo$effects$Transfer,
    add(effect: kendo$effects$Effect): kendo$effects$Transfer
  } & kendo$effects$Effect;

  declare type kendo$effects$Zoom = {
    duration(value: number): kendo$effects$Zoom,
    direction(value: string): kendo$effects$Zoom,
    stop(): kendo$effects$Zoom,
    add(effect: kendo$effects$Effect): kendo$effects$Zoom,
    startValue(value: number): kendo$effects$Zoom,
    endValue(value: number): kendo$effects$Zoom
  } & kendo$effects$Effect;

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
    Binding: typeof kendo$data$Binding,
    BindingTarget: typeof kendo$data$BindingTarget,
    EventBinding: typeof kendo$data$EventBinding,
    TemplateBinding: typeof kendo$data$TemplateBinding,
    Binder: typeof kendo$data$Binder,
    ObservableObject: typeof kendo$data$ObservableObject,
    Model: typeof kendo$data$Model,
    SchedulerEvent: typeof kendo$data$SchedulerEvent,
    TreeListModel: typeof kendo$data$TreeListModel,
    TreeListDataSource: typeof kendo$data$TreeListDataSource,
    GanttTask: typeof kendo$data$GanttTask,
    GanttDependency: typeof kendo$data$GanttDependency,
    Node: typeof kendo$data$Node,
    SchedulerDataSource: typeof kendo$data$SchedulerDataSource,
    GanttDataSource: typeof kendo$data$GanttDataSource,
    GanttDependencyDataSource: typeof kendo$data$GanttDependencyDataSource,
    HierarchicalDataSource: typeof kendo$data$HierarchicalDataSource,
    PivotDataSource: typeof kendo$data$PivotDataSource,
    ObservableArray: typeof kendo$data$ObservableArray,
    DataSource: typeof kendo$data$DataSource,
    Query: typeof kendo$data$Query,
    transports: typeof npm$namespace$kendo$data$transports
  };
  declare interface kendo$data$ObservableObjectEvent {
    sender?: data$ObservableObject;
    field?: string;
  }

  declare type kendo$data$ObservableObjectSetEvent = {
    value?: any,
    preventDefault?: Function
  } & kendo$data$ObservableObjectEvent;

  declare class kendo$data$Binding mixins kendo$Observable {
    source: any;
    parents: any[];
    path: string;
    kendo$observable: boolean;
    dependencies: {
      [path: string]: boolean
    };
    constructor(parents: any[], path: string): this;
    change(e: Object): void;
    start(source: kendo$Observable): void;
    stop(source: kendo$Observable): void;
    get(): any;
    set(value: any): void;
    destroy(): void;
  }

  declare class kendo$data$BindingTarget {
    target: any;
    options: any;
    source: any;
  }

  declare class kendo$data$EventBinding mixins kendo$data$Binding {
    get(): void;
  }

  declare class kendo$data$TemplateBinding mixins kendo$data$Binding {
    constructor(
      source: kendo$Observable,
      path: string,
      template: Function
    ): this;
    render(value: Object): string;
  }

  declare interface kendo$data$Bindings {
    [key: string]: kendo$data$Binding;
  }

  declare class kendo$data$Binder mixins kendo$Class {
    static fn: kendo$data$Binder;
    element: any;
    bindings: kendo$data$Bindings;
    options: data$BinderOptions;
    constructor(
      element: any,
      bindings: kendo$data$Bindings,
      options?: data$BinderOptions
    ): this;
    static extend(prototype: Object): kendo$data$Binder;
    init(
      element: any,
      bindings: kendo$data$Bindings,
      options?: data$BinderOptions
    ): void;
    bind(binding: kendo$data$Binding, attribute: string): void;
    destroy(): void;
    refresh(): void;
    refresh(attribute: string): void;
  }

  declare interface kendo$data$BinderOptions {}

  declare class kendo$data$ObservableObject mixins kendo$Observable {
    constructor(value?: any): this;
    uid: string;
    init(value?: any): void;
    get(name: string): any;
    parent(): kendo$data$ObservableObject;
    set(name: string, value: any): void;
    toJSON(): Object;
  }

  declare class kendo$data$Model mixins kendo$data$ObservableObject {
    static idField: string;
    static fields: data$DataSourceSchemaModelFields;
    idField: string;
    _defaultId: any;
    fields: data$DataSourceSchemaModelFields;
    defaults: {
      [field: string]: any
    };
    id: any;
    dirty: boolean;
    static define(
      options: data$DataSourceSchemaModelWithFieldsObject
    ): typeof kendo$data$Model;
    static define(
      options: data$DataSourceSchemaModelWithFieldsArray
    ): typeof kendo$data$Model;
    constructor(data?: any): this;
    init(data?: any): void;
    accept(data?: any): void;
    editable(field: string): boolean;
    isNew(): boolean;
  }

  declare interface kendo$data$SchedulerEventData {
    description?: string;
    end?: Date;
    endTimezone?: string;
    isAllDay?: boolean;
    id?: any;
    start?: Date;
    startTimezone?: string;
    recurrenceId?: any;
    recurrenceRule?: string;
    recurrenceException?: string;
    title?: string;
  }

  declare class kendo$data$SchedulerEvent mixins kendo$data$Model {
    static idField: string;
    static fields: data$DataSourceSchemaModelFields;
    constructor(data?: kendo$data$SchedulerEventData): this;
    description: string;
    end: Date;
    endTimezone: string;
    isAllDay: boolean;
    id: any;
    start: Date;
    startTimezone: string;
    recurrenceId: any;
    recurrenceRule: string;
    recurrenceException: string;
    title: string;
    static define(
      options: data$DataSourceSchemaModelWithFieldsObject
    ): typeof kendo$data$SchedulerEvent;
    static define(
      options: data$DataSourceSchemaModelWithFieldsArray
    ): typeof kendo$data$SchedulerEvent;
    init(data?: kendo$data$SchedulerEventData): void;
    clone(options: any, updateUid: boolean): kendo$data$SchedulerEvent;
    duration(): number;
    expand(start: Date, end: Date, zone: any): kendo$data$SchedulerEvent[];
    update(eventInfo: kendo$data$SchedulerEventData): void;
    isMultiDay(): boolean;
    isException(): boolean;
    isOccurrence(): boolean;
    isRecurring(): boolean;
    isRecurrenceHead(): boolean;
    toOccurrence(options: any): kendo$data$SchedulerEvent;
  }

  declare class kendo$data$TreeListModel mixins kendo$data$Model {
    static idField: string;
    static fields: data$DataSourceSchemaModelFields;
    id: any;
    parentId: any;
    static define(
      options: data$DataSourceSchemaModelWithFieldsObject
    ): typeof kendo$data$TreeListModel;
    static define(
      options: data$DataSourceSchemaModelWithFieldsArray
    ): typeof kendo$data$TreeListModel;
    constructor(data?: any): this;
    init(data?: any): void;
    loaded(value: boolean): void;
    loaded(): boolean;
  }

  declare class kendo$data$TreeListDataSource mixins kendo$data$DataSource {
    load(model: kendo$data$TreeListModel): JQueryPromise<any>;
    childNodes(model: kendo$data$TreeListModel): kendo$data$TreeListModel[];
    rootNodes(): kendo$data$TreeListModel[];
    parentNode(model: kendo$data$TreeListModel): kendo$data$TreeListModel;
    level(model: kendo$data$TreeListModel): number;
    level(model: any): number;
    add(model: Object): kendo$data$TreeListModel;
    add(model: kendo$data$TreeListModel): kendo$data$TreeListModel;
    at(index: number): kendo$data$TreeListModel;
    cancelChanges(model?: kendo$data$TreeListModel): void;
    get(id: any): kendo$data$TreeListModel;
    getByUid(uid: string): kendo$data$TreeListModel;
    indexOf(value: kendo$data$TreeListModel): number;
    insert(
      index: number,
      model: kendo$data$TreeListModel
    ): kendo$data$TreeListModel;
    insert(index: number, model: Object): kendo$data$TreeListModel;
    remove(model: kendo$data$TreeListModel): void;
  }

  declare class kendo$data$GanttTask mixins kendo$data$Model {
    static idField: string;
    static fields: data$DataSourceSchemaModelFields;
    id: any;
    parentId: number;
    orderId: number;
    title: string;
    start: Date;
    end: Date;
    percentComplete: number;
    summary: boolean;
    expanded: boolean;
    static define(
      options: data$DataSourceSchemaModelWithFieldsObject
    ): typeof kendo$data$GanttTask;
    static define(
      options: data$DataSourceSchemaModelWithFieldsArray
    ): typeof kendo$data$GanttTask;
    constructor(data?: any): this;
    init(data?: any): void;
  }

  declare class kendo$data$GanttDependency mixins kendo$data$Model {
    static idField: string;
    static fields: data$DataSourceSchemaModelFields;
    id: any;
    predecessorId: number;
    successorId: number;
    type: number;
    static define(
      options: data$DataSourceSchemaModelWithFieldsObject
    ): typeof kendo$data$GanttDependency;
    static define(
      options: data$DataSourceSchemaModelWithFieldsArray
    ): typeof kendo$data$GanttDependency;
    constructor(data?: any): this;
    init(data?: any): void;
  }

  declare class kendo$data$Node mixins kendo$data$Model {
    children: data$HierarchicalDataSource;
    append(model: any): void;
    level(): number;
    load(id: any): void;
    loaded(value: boolean): void;
    loaded(): boolean;
    parentNode(): kendo$data$Node;
  }

  declare class kendo$data$SchedulerDataSource mixins kendo$data$DataSource {
    add(model: Object): kendo$data$SchedulerEvent;
    add(model: kendo$data$SchedulerEvent): kendo$data$SchedulerEvent;
    at(index: number): kendo$data$SchedulerEvent;
    cancelChanges(model?: kendo$data$SchedulerEvent): void;
    get(id: any): kendo$data$SchedulerEvent;
    getByUid(uid: string): kendo$data$SchedulerEvent;
    indexOf(value: kendo$data$SchedulerEvent): number;
    insert(
      index: number,
      model: kendo$data$SchedulerEvent
    ): kendo$data$SchedulerEvent;
    insert(index: number, model: Object): kendo$data$SchedulerEvent;
    remove(model: kendo$data$SchedulerEvent): void;
  }

  declare class kendo$data$GanttDataSource mixins kendo$data$DataSource {
    add(model: Object): kendo$data$GanttTask;
    add(model: kendo$data$GanttTask): kendo$data$GanttTask;
    at(index: number): kendo$data$GanttTask;
    cancelChanges(model?: kendo$data$GanttTask): void;
    get(id: any): kendo$data$GanttTask;
    getByUid(uid: string): kendo$data$GanttTask;
    indexOf(value: kendo$data$GanttTask): number;
    insert(index: number, model: Object): kendo$data$GanttTask;
    insert(index: number, model: kendo$data$GanttTask): kendo$data$GanttTask;
    remove(model: kendo$data$GanttTask): void;
  }

  declare class kendo$data$GanttDependencyDataSource
    mixins kendo$data$DataSource {
    add(model: Object): kendo$data$GanttDependency;
    add(model: kendo$data$GanttDependency): kendo$data$GanttDependency;
    at(index: number): kendo$data$GanttDependency;
    cancelChanges(model?: kendo$data$GanttDependency): void;
    get(id: any): kendo$data$GanttDependency;
    getByUid(uid: string): kendo$data$GanttDependency;
    indexOf(value: kendo$data$GanttDependency): number;
    insert(index: number, model: Object): kendo$data$GanttDependency;
    insert(
      index: number,
      model: kendo$data$GanttDependency
    ): kendo$data$GanttDependency;
    remove(model: kendo$data$GanttDependency): void;
  }

  declare class kendo$data$HierarchicalDataSource mixins kendo$data$DataSource {
    constructor(options?: data$HierarchicalDataSourceOptions): this;
    init(options?: data$HierarchicalDataSourceOptions): void;
  }

  declare type kendo$data$HierarchicalDataSourceOptions = {
    schema?: data$HierarchicalDataSourceSchema
  } & kendo$data$DataSourceOptions;

  declare type kendo$data$HierarchicalDataSourceSchema = {
    model?: data$HierarchicalDataSourceSchemaModel
  } & kendo$data$DataSourceSchemaWithOptionsModel;

  declare type kendo$data$HierarchicalDataSourceSchemaModel = {
    hasChildren?: any,
    children?: any
  } & kendo$data$DataSourceSchemaModel;

  declare interface kendo$data$PivotDiscoverRequestRestrictionOptions {
    catalogName: string;
    cubeName: string;
  }

  declare interface kendo$data$PivotDiscoverRequestDataOptions {
    command: string;
    restrictions: kendo$data$PivotDiscoverRequestRestrictionOptions;
  }

  declare interface kendo$data$PivotDiscoverRequestOptions {
    data: kendo$data$PivotDiscoverRequestDataOptions;
  }

  declare interface kendo$data$PivotTransportConnection {
    catalog?: string;
    cube?: string;
  }

  declare interface kendo$data$PivotTransportDiscover {
    cache?: boolean;
    contentType?: string;
    data?: any;
    dataType?: string;
    type?: string;
    url?: any;
  }

  declare interface kendo$data$PivotTransport {
    discover?: any;
    read?: any;
  }

  declare type kendo$data$PivotTransportWithObjectOperations = {
    connection: kendo$data$PivotTransportConnection,
    discover?: kendo$data$PivotTransportDiscover,
    read?: data$DataSourceTransportRead
  } & kendo$data$PivotTransport;

  declare type kendo$data$PivotTransportWithFunctionOperations = {
    discover?: (options: data$DataSourceTransportOptions) => void,
    read?: (options: data$DataSourceTransportOptions) => void
  } & kendo$data$PivotTransport;

  declare interface kendo$data$PivotDataSourceAxisOptions {
    name: string;
    expand?: boolean;
  }

  declare interface kendo$data$PivotDataSourceMeasureOptions {
    values: string[];
    axis?: string;
  }

  declare type kendo$data$PivotDataSourceOptions = {
    columns?: string[] | kendo$data$PivotDataSourceAxisOptions[],
    measures?: string[] | kendo$data$PivotDataSourceMeasureOptions,
    rows?: string[] | kendo$data$PivotDataSourceAxisOptions[],
    transport?: kendo$data$PivotTransport,
    schema?: data$PivotSchema
  } & kendo$data$DataSourceOptions;

  declare interface kendo$data$PivotTupleModel {
    children: kendo$data$PivotTupleModel[];
    caption?: string;
    name: string;
    levelName?: string;
    levelNum: number;
    hasChildren?: boolean;
    hierarchy?: string;
  }

  declare interface kendo$data$PivotSchemaRowAxis {
    tuples: kendo$data$PivotTupleModel[];
  }

  declare interface kendo$data$PivotSchemaColumnAxis {
    tuples: kendo$data$PivotTupleModel[];
  }

  declare interface kendo$data$PivotSchemaAxes {
    rows: kendo$data$PivotSchemaRowAxis;
    columns: kendo$data$PivotSchemaColumnAxis;
  }

  declare type kendo$data$PivotSchema = {
    axes?: any,
    catalogs?: any,
    cubes?: any,
    cube?: any,
    data?: any,
    dimensions?: any,
    hierarchies?: any,
    levels?: any,
    measures?: any
  } & kendo$data$DataSourceSchema;

  declare class kendo$data$PivotDataSource mixins kendo$data$DataSource {
    axes(): kendo$data$PivotSchemaAxes;
    constructor(options?: kendo$data$PivotDataSourceOptions): this;
    init(options?: kendo$data$PivotDataSourceOptions): void;
    catalog(val: string): void;
    catalog(): string;
    columns(val: string[]): void;
    columns(): string[];
    cube(val: string): void;
    cube(): string;
    discover(
      options: kendo$data$PivotDiscoverRequestOptions
    ): JQueryPromise<any>;
    measures(val: string[]): void;
    measures(): string[];
    measuresAxis(): string;
    rows(val: string[]): void;
    rows(): string[];
    schemaCatalogs(): JQueryPromise<any>;
    schemaCubes(): JQueryPromise<any>;
    schemaDimensions(): JQueryPromise<any>;
    schemaHierarchies(): JQueryPromise<any>;
    schemaLevels(): JQueryPromise<any>;
    schemaMeasures(): JQueryPromise<any>;
  }

  declare interface kendo$data$DataSourceTransport {
    create?:
      | string
      | data$DataSourceTransportCreate
      | ((options: data$DataSourceTransportOptions) => void);
    destroy?:
      | string
      | data$DataSourceTransportDestroy
      | ((options: data$DataSourceTransportOptions) => void);
    push?: Function;
    submit?: Function;
    read?:
      | string
      | data$DataSourceTransportRead
      | ((options: data$DataSourceTransportOptions) => void);
    signalr?:
      | data$DataSourceTransportSignalr
      | ((options: data$DataSourceTransportOptions) => void);
    update?:
      | string
      | data$DataSourceTransportUpdate
      | ((options: data$DataSourceTransportOptions) => void);
    parameterMap?: (
      data: data$DataSourceTransportParameterMapData,
      type: string
    ) => any;
  }

  declare interface kendo$data$DataSourceTransportSignalrClient {
    create?: string;
    destroy?: string;
    read?: string;
    update?: string;
  }

  declare interface kendo$data$DataSourceTransportSignalrServer {
    create?: string;
    destroy?: string;
    read?: string;
    update?: string;
  }

  declare interface kendo$data$DataSourceTransportSignalr {
    client?: kendo$data$DataSourceTransportSignalrClient;
    hub?: any;
    promise?: any;
    server?: kendo$data$DataSourceTransportSignalrServer;
  }

  declare interface kendo$data$DataSourceParameterMapDataAggregate {
    field?: string;
    aggregate?: string;
  }

  declare interface kendo$data$DataSourceParameterMapDataGroup {
    aggregate?: kendo$data$DataSourceParameterMapDataAggregate[];
    field?: string;
    dir?: string;
  }

  declare interface kendo$data$DataSourceParameterMapDataFilter {
    field?: string;
    filters?: kendo$data$DataSourceParameterMapDataFilter[];
    logic?: string;
    operator?: string;
    value?: any;
  }

  declare interface kendo$data$DataSourceParameterMapDataSort {
    field?: string;
    dir?: string;
  }

  declare interface kendo$data$DataSourceTransportParameterMapData {
    aggregate?: kendo$data$DataSourceParameterMapDataAggregate[];
    group?: kendo$data$DataSourceParameterMapDataGroup[];
    filter?: kendo$data$DataSourceParameterMapDataFilter;
    models?: kendo$data$Model[];
    page?: number;
    pageSize?: number;
    skip?: number;
    sort?: kendo$data$DataSourceParameterMapDataSort[];
    take?: number;
  }

  declare interface kendo$data$DataSourceSchema {
    model?: any;
    aggregates?: any;
    data?: any;
    errors?: any;
    groups?: any;
    parse?: Function;
    total?: any;
    type?: string;
  }

  declare type kendo$data$DataSourceSchemaWithTimezone = {
    timezone?: String
  } & kendo$data$DataSourceSchema;

  declare type kendo$data$DataSourceSchemaWithOptionsModel = {
    model?: data$DataSourceSchemaModel
  } & kendo$data$DataSourceSchema;

  declare type kendo$data$DataSourceSchemaWithConstructorModel = {
    model?: typeof kendo$data$Model
  } & kendo$data$DataSourceSchema;

  declare interface kendo$data$DataSourceSchemaModel {
    id?: string;
    fields?: any;
    [index: string]: any;
  }

  declare type kendo$data$DataSourceSchemaModelWithFieldsArray = {
    fields?: data$DataSourceSchemaModelField[]
  } & kendo$data$DataSourceSchemaModel;

  declare type kendo$data$DataSourceSchemaModelWithFieldsObject = {
    fields?: data$DataSourceSchemaModelFields
  } & kendo$data$DataSourceSchemaModel;

  declare interface kendo$data$DataSourceSchemaModelFields {
    [index: string]: data$DataSourceSchemaModelField;
  }

  declare interface kendo$data$DataSourceSchemaModelField {
    field?: string;
    from?: string;
    defaultValue?: any;
    editable?: boolean;
    nullable?: boolean;
    parse?: Function;
    type?: string;
    validation?: data$DataSourceSchemaModelFieldValidation;
  }

  declare interface kendo$data$DataSourceSchemaModelFieldValidation {
    required?: boolean;
    min?: any;
    max?: any;
    minLength?: any;
    maxLength?: any;
    [rule: string]: any;
  }

  declare class kendo$data$ObservableArray mixins kendo$Observable {
    length: number;
    [index: number]: any;
    constructor(array: any[]): this;
    init(array: any[]): void;
    empty(): void;
    every(
      callback: (
        item: Object,
        index: number,
        source: kendo$data$ObservableArray
      ) => boolean
    ): boolean;
    filter(
      callback: (
        item: Object,
        index: number,
        source: kendo$data$ObservableArray
      ) => boolean
    ): any[];
    find(
      callback: (
        item: Object,
        index: number,
        source: kendo$data$ObservableArray
      ) => boolean
    ): any;
    forEach(
      callback: (
        item: Object,
        index: number,
        source: kendo$data$ObservableArray
      ) => void
    ): void;
    indexOf(item: any): number;
    join(separator: string): string;
    map(
      callback: (
        item: Object,
        index: number,
        source: kendo$data$ObservableArray
      ) => any
    ): any[];
    parent(): kendo$data$ObservableObject;
    pop(): kendo$data$ObservableObject;
    push(...items: any[]): number;
    remove(item: Object): void;
    shift(): any;
    slice(begin: number, end?: number): any[];
    some(
      callback: (
        item: Object,
        index: number,
        source: kendo$data$ObservableArray
      ) => boolean
    ): boolean;
    splice(start: number): any[];
    splice(start: number, deleteCount: number, ...items: any[]): any[];
    toJSON(): any[];
    unshift(...items: any[]): number;
    wrap(object: Object, parent: Object): any;
    wrapAll(source: Object, target: Object): any;
  }

  declare interface kendo$data$ObservableArrayEvent {
    field?: string;
    action?: string;
    index?: number;
    items?: kendo$data$Model[];
  }

  declare class kendo$data$DataSource mixins kendo$Observable {
    options: data$DataSourceOptions;
    static create(options?: data$DataSourceOptions): kendo$data$DataSource;
    constructor(options?: data$DataSourceOptions): this;
    init(options?: data$DataSourceOptions): void;
    add(model: Object): kendo$data$Model;
    add(model: kendo$data$Model): kendo$data$Model;
    aggregate(val: any): void;
    aggregate(): any;
    aggregates(): any;
    at(index: number): kendo$data$ObservableObject;
    cancelChanges(model?: kendo$data$Model): void;
    data(): kendo$data$ObservableArray;
    data(value: any): void;
    fetch(callback?: Function): JQueryPromise<any>;
    filter(filters: data$DataSourceFilterItem): void;
    filter(filters: data$DataSourceFilterItem[]): void;
    filter(filters: data$DataSourceFilters): void;
    filter(): data$DataSourceFilters;
    get(id: any): kendo$data$Model;
    getByUid(uid: string): kendo$data$Model;
    group(groups: any): void;
    group(): any;
    hasChanges(): boolean;
    indexOf(value: kendo$data$ObservableObject): number;
    insert(index: number, model: kendo$data$Model): kendo$data$Model;
    insert(index: number, model: Object): kendo$data$Model;
    online(value: boolean): void;
    online(): boolean;
    offlineData(data: any[]): void;
    offlineData(): any[];
    page(): number;
    page(page: number): void;
    pageSize(): number;
    pageSize(size: number): void;
    pushCreate(model: Object): void;
    pushCreate(models: any[]): void;
    pushDestroy(model: Object): void;
    pushDestroy(models: any[]): void;
    pushUpdate(model: Object): void;
    pushUpdate(models: any[]): void;
    query(options?: any): JQueryPromise<any>;
    read(data?: any): JQueryPromise<any>;
    remove(model: kendo$data$ObservableObject): void;
    skip(): number;
    sort(sort: data$DataSourceSortItem): void;
    sort(sort: data$DataSourceSortItem[]): void;
    sort(): data$DataSourceSortItem[];
    sync(): JQueryPromise<any>;
    total(): number;
    totalPages(): number;
    view(): kendo$data$ObservableArray;
  }

  declare class kendo$data$Query {
    kendo$data: any[];
    static process(
      data: any[],
      options: data$DataSourceTransportReadOptionsData
    ): data$QueryResult;
    constructor(data: any[]): this;
    toArray(): any[];
    range(intex: number, count: number): kendo$data$Query;
    skip(count: number): kendo$data$Query;
    take(count: number): kendo$data$Query;
    select(selector: Function): kendo$data$Query;
    order(selector: string, dir?: string): kendo$data$Query;
    order(selector: Function, dir?: string): kendo$data$Query;
    filter(filters: data$DataSourceFilterItem): kendo$data$Query;
    filter(filters: data$DataSourceFilterItem[]): kendo$data$Query;
    filter(filters: data$DataSourceFilters): kendo$data$Query;
    group(descriptors: data$DataSourceGroupItem): kendo$data$Query;
    group(descriptors: data$DataSourceGroupItem[]): kendo$data$Query;
  }

  declare interface kendo$data$QueryResult {
    total?: number;
    data?: any[];
  }

  declare interface kendo$data$DataSourceAggregateItem {
    field?: string;
    aggregate?: string;
  }

  declare interface kendo$data$DataSourceFilter {}

  declare type kendo$data$DataSourceFilterItem = {
    operator?: string | Function,
    field?: string,
    value?: any
  } & kendo$data$DataSourceFilter;

  declare type kendo$data$DataSourceFilters = {
    logic?: string,
    filters?: kendo$data$DataSourceFilter[]
  } & kendo$data$DataSourceFilter;

  declare interface kendo$data$DataSourceGroupItemAggregate {
    field?: string;
    aggregate?: string;
  }

  declare interface kendo$data$DataSourceGroupItem {
    field?: string;
    dir?: string;
    aggregates?: kendo$data$DataSourceGroupItemAggregate[];
  }

  declare interface kendo$data$DataSourceSortItem {
    field?: string;
    dir?: string;
  }

  declare type kendo$data$DataSourceTransportCreate = {
    cache?: boolean,
    contentType?: string,
    data?: any,
    dataType?: string,
    type?: string,
    url?: any
  } & JQueryAjaxSettings;

  declare type kendo$data$DataSourceTransportDestroy = {
    cache?: boolean,
    contentType?: string,
    data?: any,
    dataType?: string,
    type?: string,
    url?: any
  } & JQueryAjaxSettings;

  declare type kendo$data$DataSourceTransportRead = {
    cache?: boolean,
    contentType?: string,
    data?: any,
    dataType?: string,
    type?: string,
    url?: any
  } & JQueryAjaxSettings;

  declare type kendo$data$DataSourceTransportUpdate = {
    cache?: boolean,
    contentType?: string,
    data?: any,
    dataType?: string,
    type?: string,
    url?: any
  } & JQueryAjaxSettings;

  declare type kendo$data$DataSourceTransportWithObjectOperations = {
    create?: kendo$data$DataSourceTransportCreate,
    destroy?: kendo$data$DataSourceTransportDestroy,
    read?: kendo$data$DataSourceTransportRead,
    update?: kendo$data$DataSourceTransportUpdate
  } & kendo$data$DataSourceTransport;

  declare type kendo$data$DataSourceTransportWithFunctionOperations = {
    create?: (options: data$DataSourceTransportOptions) => void,
    destroy?: (options: data$DataSourceTransportOptions) => void,
    read?: (options: data$DataSourceTransportReadOptions) => void,
    update?: (options: data$DataSourceTransportOptions) => void
  } & kendo$data$DataSourceTransport;

  declare interface kendo$data$DataSourceTransportOptions {
    success: (data?: any) => void;
    error: (error?: any) => void;
    data: any;
  }

  declare interface kendo$data$DataSourceTransportReadOptionsData {
    sort?: kendo$data$DataSourceSortItem[];
    filter?: kendo$data$DataSourceFilters;
    group?: kendo$data$DataSourceGroupItem[];
    take?: number;
    skip?: number;
  }

  declare type kendo$data$DataSourceTransportReadOptions = {
    data: kendo$data$DataSourceTransportReadOptionsData
  } & kendo$data$DataSourceTransportOptions;

  declare interface kendo$data$DataSourceTransportBatchOptionsData {
    models: any[];
  }

  declare type kendo$data$DataSourceTransportBatchOptions = {
    data: kendo$data$DataSourceTransportBatchOptionsData
  } & kendo$data$DataSourceTransportOptions;

  declare interface kendo$data$DataSourceOptions {
    aggregate?: kendo$data$DataSourceAggregateItem[];
    autoSync?: boolean;
    batch?: boolean;
    data?: any;
    filter?: any;
    group?: kendo$data$DataSourceGroupItem | kendo$data$DataSourceGroupItem[];
    inPlaceSort?: boolean;
    offlineStorage?: any;
    page?: number;
    pageSize?: number;
    schema?: kendo$data$DataSourceSchema;
    serverAggregates?: boolean;
    serverFiltering?: boolean;
    serverGrouping?: boolean;
    serverPaging?: boolean;
    serverSorting?: boolean;
    sort?: any;
    transport?: kendo$data$DataSourceTransport;
    type?: string;
    change?: (e: data$DataSourceChangeEvent) => void;
    error?: (e: data$DataSourceErrorEvent) => void;
    push?: (e: data$DataSourcePushEvent) => void;
    sync?: (e: data$DataSourceEvent) => void;
    requestStart?: (e: data$DataSourceRequestStartEvent) => void;
    requestEnd?: (e: data$DataSourceRequestEndEvent) => void;
  }

  declare interface kendo$data$DataSourceEvent {
    sender?: kendo$data$DataSource;
  }

  declare interface kendo$data$DataSourceItemOrGroup {}

  declare type kendo$data$DataSourceGroup = {
    aggregates: any[],
    field: string,
    hasSubgroups: boolean,
    items: kendo$data$DataSourceItemOrGroup[],
    value: any
  } & kendo$data$DataSourceItemOrGroup;

  declare type kendo$data$DataSourceChangeEvent = {
    field?: string,
    value?: kendo$data$Model,
    action?: string,
    index?: number,
    items?: kendo$data$DataSourceItemOrGroup[],
    node?: any
  } & kendo$data$DataSourceEvent;

  declare type kendo$data$DataSourcePushEvent = {
    items?: kendo$data$DataSourceItemOrGroup[],
    type?: string
  } & kendo$data$DataSourceEvent;

  declare type kendo$data$DataSourceErrorEvent = {
    xhr: JQueryXHR,
    status: string,
    errorThrown: any,
    errors?: any
  } & kendo$data$DataSourceEvent;

  declare type kendo$data$DataSourceRequestStartEvent = {
    type?: string,
    preventDefault(): void
  } & kendo$data$DataSourceEvent;

  declare type kendo$data$DataSourceRequestEndEvent = {
    response?: any,
    type?: string
  } & kendo$data$DataSourceEvent;

  declare var npm$namespace$kendo$data$transports: {
    odata: typeof kendo$data$transports$odata
  };
  declare var kendo$data$transports$odata: kendo$data$DataSourceTransport;

  declare var npm$namespace$kendo$ui: {
    progress: typeof kendo$ui$progress,
    plugin: typeof kendo$ui$plugin,

    Widget: typeof kendo$ui$Widget,
    Draggable: typeof kendo$ui$Draggable,
    DropTarget: typeof kendo$ui$DropTarget,
    DropTargetArea: typeof kendo$ui$DropTargetArea,
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
    Window: typeof kendo$ui$Window,
    editor: typeof npm$namespace$kendo$ui$editor
  };
  declare function kendo$ui$progress(container: JQuery, toggle: boolean): void;

  declare class kendo$ui$Widget mixins kendo$Observable {
    static fn: any;
    element: JQuery;
    options: any;
    events: string[];
    static extend(prototype: Object): kendo$ui$Widget;
    constructor(element: kendo$effects$Element, options?: Object): this;
    constructor(element: JQuery, options?: Object): this;
    constructor(selector: String, options?: Object): this;
    init(element: kendo$effects$Element, options?: Object): void;
    init(element: JQuery, options?: Object): void;
    init(selector: String, options?: Object): void;
    destroy(): void;
    setOptions(options: Object): void;
    resize(force?: boolean): void;
  }

  declare function kendo$ui$plugin(
    widget: typeof kendo$ui$Widget,
    register?: typeof kendo$ui,
    prefix?: String
  ): void;

  declare function kendo$ui$plugin(
    widget: any,
    register?: typeof kendo$ui,
    prefix?: String
  ): void;

  declare function kendo$ui$plugin(
    widget: typeof kendo$ui$Widget,
    register?: typeof kendo$mobile$ui,
    prefix?: String
  ): void;

  declare function kendo$ui$plugin(
    widget: any,
    register?: typeof kendo$mobile$ui,
    prefix?: String
  ): void;

  declare function kendo$ui$plugin(
    widget: typeof kendo$ui$Widget,
    register?: typeof kendo$dataviz$ui,
    prefix?: String
  ): void;

  declare function kendo$ui$plugin(
    widget: any,
    register?: typeof kendo$dataviz$ui,
    prefix?: String
  ): void;

  declare class kendo$ui$Draggable mixins kendo$ui$Widget {
    element: JQuery;
    currentTarget: JQuery;
    constructor(
      element: kendo$effects$Element,
      options?: ui$DraggableOptions
    ): this;
    options: ui$DraggableOptions;
    cancelHold(): void;
  }

  declare interface kendo$ui$DraggableEvent {
    sender?: kendo$ui$Draggable;
  }

  declare class kendo$ui$DropTarget mixins kendo$ui$Widget {
    element: JQuery;
    constructor(
      element: kendo$effects$Element,
      options?: ui$DropTargetOptions
    ): this;
    options: ui$DropTargetOptions;
    static destroyGroup(groupName: string): void;
  }

  declare interface kendo$ui$DropTargetOptions {
    group?: string;
    dragenter?: (e: ui$DropTargetDragenterEvent) => void;
    dragleave?: (e: ui$DropTargetDragleaveEvent) => void;
    drop?: (e: ui$DropTargetDropEvent) => void;
  }

  declare type kendo$ui$DropTargetEvent = {
    sender?: kendo$ui$DropTarget,
    draggable?: kendo$ui$Draggable,
    dropTarget?: JQuery
  } & JQueryEventObject;

  declare type kendo$ui$DropTargetDragenterEvent = {} & kendo$ui$DropTargetEvent;

  declare type kendo$ui$DropTargetDragleaveEvent = {} & kendo$ui$DropTargetEvent;

  declare type kendo$ui$DropTargetDropEvent = {} & kendo$ui$DropTargetEvent;

  declare class kendo$ui$DropTargetArea mixins kendo$ui$Widget {
    element: JQuery;
    constructor(
      element: kendo$effects$Element,
      options?: ui$DropTargetAreaOptions
    ): this;
    options: ui$DropTargetAreaOptions;
  }

  declare interface kendo$ui$DropTargetAreaOptions {
    group?: string;
    filter?: string;
    dragenter?: (e: ui$DropTargetAreaDragenterEvent) => void;
    dragleave?: (e: ui$DropTargetAreaDragleaveEvent) => void;
    drop?: (e: ui$DropTargetAreaDropEvent) => void;
  }

  declare interface kendo$ui$DropTargetAreaEvent {
    sender: kendo$ui$DropTargetArea;
  }

  declare type kendo$ui$DropTargetAreaDragenterEvent = {
    draggable?: kendo$ui$Draggable,
    dropTarget?: JQuery,
    target?: kendo$effects$Element
  } & kendo$ui$DropTargetAreaEvent;

  declare type kendo$ui$DropTargetAreaDragleaveEvent = {
    draggable?: kendo$ui$Draggable,
    dropTarget?: JQuery,
    target?: kendo$effects$Element
  } & kendo$ui$DropTargetAreaEvent;

  declare type kendo$ui$DropTargetAreaDropEvent = {
    draggable?: kendo$ui$Draggable,
    dropTarget?: JQuery,
    target?: kendo$effects$Element
  } & kendo$ui$DropTargetAreaEvent;

  declare interface kendo$ui$DraggableOptions {
    axis?: string;
    autoScroll?: boolean;
    container?: JQuery;
    cursorOffset?: any;
    distance?: number;
    filter?: string;
    group?: string;
    hint?: Function | JQuery;
    holdToDrag?: boolean;
    ignore?: string;
    drag?: (e: kendo$ui$DraggableEvent) => void;
    dragcancel?: (e: kendo$ui$DraggableEvent) => void;
    dragend?: (e: kendo$ui$DraggableEvent) => void;
    dragstart?: (e: kendo$ui$DraggableEvent) => void;
    hold?: (e: kendo$ui$DraggableEvent) => void;
  }

  declare interface kendo$ui$GridColumnEditorOptions {
    field?: string;
    format?: string;
    model?: kendo$data$Model;
    values?: any[];
  }

  declare interface kendo$ui$GridColumn {
    editor?: (
      container: JQuery,
      options: kendo$ui$GridColumnEditorOptions
    ) => void;
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
    format?: string;
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
    template?: string | Function;
    title?: string;
    width?: string | number;
    values?: any;
    menu?: boolean;
  }

  declare interface kendo$ui$TreeListEditorOptions {
    field?: string;
    format?: string;
    model?: kendo$data$Model;
    values?: any[];
  }

  declare interface kendo$ui$TreeListColumn {
    editor?: (
      container: JQuery,
      options: kendo$ui$TreeListEditorOptions
    ) => void;
    attributes?: any;
    columns?: any;
    command?: ui$TreeListColumnCommandItem[];
    editable?: Function;
    encoded?: boolean;
    expandable?: boolean;
    field?: string;
    filterable?: boolean | ui$TreeListColumnFilterable;
    footerTemplate?: string | Function;
    format?: string;
    headerAttributes?: any;
    headerTemplate?: string | Function;
    minScreenWidth?: number;
    sortable?: boolean | ui$TreeListColumnSortable;
    template?: string | Function;
    title?: string;
    width?: string | number;
    hidden?: boolean;
    menu?: boolean;
    locked?: boolean;
    lockable?: boolean;
  }

  declare var npm$namespace$kendo$ui$editor: {
    Toolbar: typeof kendo$ui$editor$Toolbar
  };
  declare class kendo$ui$editor$Toolbar mixins kendo$ui$Widget {
    window: kendo$ui$Window;
  }

  declare class kendo$ui$Alert mixins kendo$ui$Dialog {
    static fn: kendo$ui$Alert;
    options: ui$AlertOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Alert;
    constructor(
      element: kendo$effects$Element,
      options?: ui$AlertOptions
    ): this;
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

  declare class kendo$ui$AutoComplete mixins kendo$ui$Widget {
    static fn: kendo$ui$AutoComplete;
    options: ui$AutoCompleteOptions;
    dataSource: kendo$data$DataSource;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$AutoComplete;
    constructor(
      element: kendo$effects$Element,
      options?: ui$AutoCompleteOptions
    ): this;
    close(): void;
    dataItem(index: number): any;
    dataItem(index: kendo$effects$Element): any;
    dataItem(index: JQuery): any;
    destroy(): void;
    enable(enable: boolean): void;
    focus(): void;
    items(): any;
    readonly(readonly: boolean): void;
    refresh(): void;
    search(word: string): void;
    select(item: string): void;
    select(item: kendo$effects$Element): void;
    select(item: JQuery): void;
    setDataSource(dataSource: kendo$data$DataSource): void;
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
    dataSource?: any | any | kendo$data$DataSource;
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

  declare type kendo$ui$AutoCompleteChangeEvent = {} & kendo$ui$AutoCompleteEvent;

  declare type kendo$ui$AutoCompleteCloseEvent = {} & kendo$ui$AutoCompleteEvent;

  declare type kendo$ui$AutoCompleteDataBoundEvent = {} & kendo$ui$AutoCompleteEvent;

  declare type kendo$ui$AutoCompleteFilteringEvent = {
    filter?: any
  } & kendo$ui$AutoCompleteEvent;

  declare type kendo$ui$AutoCompleteOpenEvent = {} & kendo$ui$AutoCompleteEvent;

  declare type kendo$ui$AutoCompleteSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & kendo$ui$AutoCompleteEvent;

  declare class kendo$ui$Button mixins kendo$ui$Widget {
    static fn: kendo$ui$Button;
    options: ui$ButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Button;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ButtonOptions
    ): this;
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
  }

  declare interface kendo$ui$ButtonEvent {
    sender: kendo$ui$Button;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ButtonClickEvent = {
    event?: any
  } & kendo$ui$ButtonEvent;

  declare class kendo$ui$ButtonGroup mixins kendo$ui$Widget {
    static fn: kendo$ui$ButtonGroup;
    options: ui$ButtonGroupOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ButtonGroup;
    constructor(
      element: kendo$effects$Element,
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
  }

  declare interface kendo$ui$ButtonGroupEvent {
    sender: kendo$ui$ButtonGroup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ButtonGroupSelectEvent = {
    indices?: any
  } & kendo$ui$ButtonGroupEvent;

  declare class kendo$ui$Calendar mixins kendo$ui$Widget {
    static fn: kendo$ui$Calendar;
    options: ui$CalendarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Calendar;
    constructor(
      element: kendo$effects$Element,
      options?: ui$CalendarOptions
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

  declare class kendo$ui$Chat mixins kendo$ui$Widget {
    static fn: kendo$ui$Chat;
    options: ui$ChatOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Chat;
    constructor(element: kendo$effects$Element, options?: ui$ChatOptions): this;
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
  } & kendo$ui$ChatEvent;

  declare type kendo$ui$ChatPostEvent = {
    text?: string,
    timestamp?: Date,
    from?: any
  } & kendo$ui$ChatEvent;

  declare type kendo$ui$ChatSendMessageEvent = {
    text?: string
  } & kendo$ui$ChatEvent;

  declare type kendo$ui$ChatTypingEndEvent = {} & kendo$ui$ChatEvent;

  declare type kendo$ui$ChatTypingStartEvent = {} & kendo$ui$ChatEvent;

  declare class kendo$ui$ColorPalette mixins kendo$ui$Widget {
    static fn: kendo$ui$ColorPalette;
    options: ui$ColorPaletteOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ColorPalette;
    constructor(
      element: kendo$effects$Element,
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

  declare class kendo$ui$ColorPicker mixins kendo$ui$Widget {
    static fn: kendo$ui$ColorPicker;
    options: ui$ColorPickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ColorPicker;
    constructor(
      element: kendo$effects$Element,
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
  } & kendo$ui$ColorPickerEvent;

  declare type kendo$ui$ColorPickerSelectEvent = {
    value?: string
  } & kendo$ui$ColorPickerEvent;

  declare class kendo$ui$ComboBox mixins kendo$ui$Widget {
    static fn: kendo$ui$ComboBox;
    options: ui$ComboBoxOptions;
    dataSource: kendo$data$DataSource;
    input: JQuery;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ComboBox;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ComboBoxOptions
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
    setDataSource(dataSource: kendo$data$DataSource): void;
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
    dataSource?: any | any | kendo$data$DataSource;
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

  declare type kendo$ui$ComboBoxChangeEvent = {} & kendo$ui$ComboBoxEvent;

  declare type kendo$ui$ComboBoxCloseEvent = {} & kendo$ui$ComboBoxEvent;

  declare type kendo$ui$ComboBoxDataBoundEvent = {} & kendo$ui$ComboBoxEvent;

  declare type kendo$ui$ComboBoxFilteringEvent = {
    filter?: any
  } & kendo$ui$ComboBoxEvent;

  declare type kendo$ui$ComboBoxOpenEvent = {} & kendo$ui$ComboBoxEvent;

  declare type kendo$ui$ComboBoxSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & kendo$ui$ComboBoxEvent;

  declare type kendo$ui$ComboBoxCascadeEvent = {} & kendo$ui$ComboBoxEvent;

  declare class kendo$ui$Confirm mixins kendo$ui$Dialog {
    static fn: kendo$ui$Confirm;
    options: ui$ConfirmOptions;
    result: JQueryPromise<any>;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Confirm;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ConfirmOptions
    ): this;
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

  declare class kendo$ui$ContextMenu mixins kendo$ui$Widget {
    static fn: kendo$ui$ContextMenu;
    options: ui$ContextMenuOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ContextMenu;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ContextMenuOptions
    ): this;
    append(item: any, referenceItem?: string): kendo$ui$ContextMenu;
    append(item: any, referenceItem?: JQuery): kendo$ui$ContextMenu;
    close(element: kendo$effects$Element): kendo$ui$ContextMenu;
    close(element: JQuery): kendo$ui$ContextMenu;
    destroy(): void;
    enable(element: string, enable: boolean): kendo$ui$ContextMenu;
    enable(
      element: kendo$effects$Element,
      enable: boolean
    ): kendo$ui$ContextMenu;
    enable(element: JQuery, enable: boolean): kendo$ui$ContextMenu;
    insertAfter(item: any, referenceItem: string): kendo$ui$ContextMenu;
    insertAfter(
      item: any,
      referenceItem: kendo$effects$Element
    ): kendo$ui$ContextMenu;
    insertAfter(item: any, referenceItem: JQuery): kendo$ui$ContextMenu;
    insertBefore(item: any, referenceItem: string): kendo$ui$ContextMenu;
    insertBefore(
      item: any,
      referenceItem: kendo$effects$Element
    ): kendo$ui$ContextMenu;
    insertBefore(item: any, referenceItem: JQuery): kendo$ui$ContextMenu;
    open(x: number, y?: number): kendo$ui$ContextMenu;
    open(x: kendo$effects$Element, y?: number): kendo$ui$ContextMenu;
    open(x: JQuery, y?: number): kendo$ui$ContextMenu;
    remove(element: string): kendo$ui$ContextMenu;
    remove(element: kendo$effects$Element): kendo$ui$ContextMenu;
    remove(element: JQuery): kendo$ui$ContextMenu;
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
    item?: kendo$effects$Element,
    type?: string,
    target?: kendo$effects$Element,
    event?: JQueryEventObject
  } & kendo$ui$ContextMenuEvent;

  declare type kendo$ui$ContextMenuOpenEvent = {
    item?: kendo$effects$Element,
    type?: string,
    target?: kendo$effects$Element,
    event?: JQueryEventObject
  } & kendo$ui$ContextMenuEvent;

  declare type kendo$ui$ContextMenuActivateEvent = {
    item?: kendo$effects$Element,
    type?: string,
    target?: kendo$effects$Element
  } & kendo$ui$ContextMenuEvent;

  declare type kendo$ui$ContextMenuDeactivateEvent = {
    item?: kendo$effects$Element,
    type?: string,
    target?: kendo$effects$Element
  } & kendo$ui$ContextMenuEvent;

  declare type kendo$ui$ContextMenuSelectEvent = {
    item?: kendo$effects$Element,
    type?: string,
    target?: kendo$effects$Element
  } & kendo$ui$ContextMenuEvent;

  declare class kendo$ui$DateInput mixins kendo$ui$Widget {
    static fn: kendo$ui$DateInput;
    options: ui$DateInputOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DateInput;
    constructor(
      element: kendo$effects$Element,
      options?: ui$DateInputOptions
    ): this;
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

  declare type kendo$ui$DateInputChangeEvent = {} & kendo$ui$DateInputEvent;

  declare class kendo$ui$DatePicker mixins kendo$ui$Widget {
    static fn: kendo$ui$DatePicker;
    options: ui$DatePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DatePicker;
    constructor(
      element: kendo$effects$Element,
      options?: ui$DatePickerOptions
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

  declare type kendo$ui$DatePickerChangeEvent = {} & kendo$ui$DatePickerEvent;

  declare type kendo$ui$DatePickerCloseEvent = {} & kendo$ui$DatePickerEvent;

  declare type kendo$ui$DatePickerOpenEvent = {} & kendo$ui$DatePickerEvent;

  declare class kendo$ui$DateRangePicker mixins kendo$ui$Widget {
    static fn: kendo$ui$DateRangePicker;
    options: ui$DateRangePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DateRangePicker;
    constructor(
      element: kendo$effects$Element,
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

  declare type kendo$ui$DateRangePickerChangeEvent = {} & kendo$ui$DateRangePickerEvent;

  declare type kendo$ui$DateRangePickerCloseEvent = {} & kendo$ui$DateRangePickerEvent;

  declare type kendo$ui$DateRangePickerOpenEvent = {} & kendo$ui$DateRangePickerEvent;

  declare class kendo$ui$DateTimePicker mixins kendo$ui$Widget {
    static fn: kendo$ui$DateTimePicker;
    options: ui$DateTimePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DateTimePicker;
    constructor(
      element: kendo$effects$Element,
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

  declare type kendo$ui$DateTimePickerChangeEvent = {} & kendo$ui$DateTimePickerEvent;

  declare type kendo$ui$DateTimePickerCloseEvent = {
    view?: string
  } & kendo$ui$DateTimePickerEvent;

  declare type kendo$ui$DateTimePickerOpenEvent = {
    view?: string
  } & kendo$ui$DateTimePickerEvent;

  declare class kendo$ui$Dialog mixins kendo$ui$Widget {
    static fn: kendo$ui$Dialog;
    options: any;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Dialog;
    constructor(
      element: kendo$effects$Element,
      options?: ui$DialogOptions
    ): this;
    close(): kendo$ui$Dialog;
    content(): string;
    content(content?: string): kendo$ui$Dialog;
    content(content?: JQuery): kendo$ui$Dialog;
    destroy(): void;
    open(): kendo$ui$Dialog;
    title(): string;
    title(text?: string): kendo$ui$Dialog;
    toFront(): kendo$ui$Dialog;
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
  } & kendo$ui$DialogEvent;

  declare class kendo$ui$DropDownList mixins kendo$ui$Widget {
    static fn: kendo$ui$DropDownList;
    options: ui$DropDownListOptions;
    dataSource: kendo$data$DataSource;
    span: JQuery;
    filterInput: JQuery;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DropDownList;
    constructor(
      element: kendo$effects$Element,
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
    setDataSource(dataSource: kendo$data$DataSource): void;
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
    dataSource?: any | any | kendo$data$DataSource;
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

  declare type kendo$ui$DropDownListChangeEvent = {} & kendo$ui$DropDownListEvent;

  declare type kendo$ui$DropDownListCloseEvent = {} & kendo$ui$DropDownListEvent;

  declare type kendo$ui$DropDownListDataBoundEvent = {} & kendo$ui$DropDownListEvent;

  declare type kendo$ui$DropDownListFilteringEvent = {
    filter?: any
  } & kendo$ui$DropDownListEvent;

  declare type kendo$ui$DropDownListOpenEvent = {} & kendo$ui$DropDownListEvent;

  declare type kendo$ui$DropDownListSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & kendo$ui$DropDownListEvent;

  declare type kendo$ui$DropDownListCascadeEvent = {} & kendo$ui$DropDownListEvent;

  declare class kendo$ui$DropDownTree mixins kendo$ui$Widget {
    static fn: kendo$ui$DropDownTree;
    options: ui$DropDownTreeOptions;
    dataSource: kendo$data$DataSource;
    tagList: JQuery;
    tree: JQuery;
    treeview: kendo$ui$TreeView;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$DropDownTree;
    constructor(
      element: kendo$effects$Element,
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
    setDataSource(dataSource: kendo$data$HierarchicalDataSource): void;
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
    dataSource?: any | any | kendo$data$HierarchicalDataSource;
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

  declare type kendo$ui$DropDownTreeChangeEvent = {} & kendo$ui$DropDownTreeEvent;

  declare type kendo$ui$DropDownTreeCloseEvent = {} & kendo$ui$DropDownTreeEvent;

  declare type kendo$ui$DropDownTreeDataBoundEvent = {} & kendo$ui$DropDownTreeEvent;

  declare type kendo$ui$DropDownTreeFilteringEvent = {
    filter?: any
  } & kendo$ui$DropDownTreeEvent;

  declare type kendo$ui$DropDownTreeOpenEvent = {} & kendo$ui$DropDownTreeEvent;

  declare type kendo$ui$DropDownTreeSelectEvent = {
    node?: kendo$effects$Element
  } & kendo$ui$DropDownTreeEvent;

  declare class kendo$ui$Editor mixins kendo$ui$Widget {
    static fn: kendo$ui$Editor;
    options: ui$EditorOptions;
    body: kendo$effects$Element;
    toolbar: kendo$ui$editor$Toolbar;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Editor;
    constructor(
      element: kendo$effects$Element,
      options?: ui$EditorOptions
    ): this;
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
  } & kendo$ui$EditorEvent;

  declare type kendo$ui$EditorPasteEvent = {
    html?: any
  } & kendo$ui$EditorEvent;

  declare type kendo$ui$EditorPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & kendo$ui$EditorEvent;

  declare class kendo$ui$FilterMenu mixins kendo$ui$Widget {
    static fn: kendo$ui$FilterMenu;
    options: ui$FilterMenuOptions;
    field: string;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$FilterMenu;
    constructor(
      element: kendo$effects$Element,
      options?: ui$FilterMenuOptions
    ): this;
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
    dataSource?: any | any | kendo$data$DataSource;
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

  declare class kendo$ui$FlatColorPicker mixins kendo$ui$Widget {
    static fn: kendo$ui$FlatColorPicker;
    options: ui$FlatColorPickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$FlatColorPicker;
    constructor(
      element: kendo$effects$Element,
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
  } & kendo$ui$FlatColorPickerEvent;

  declare class kendo$ui$Gantt mixins kendo$ui$Widget {
    static fn: kendo$ui$Gantt;
    options: ui$GanttOptions;
    dataSource: kendo$data$DataSource;
    dependencies: kendo$data$GanttDependencyDataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Gantt;
    constructor(
      element: kendo$effects$Element,
      options?: ui$GanttOptions
    ): this;
    clearSelection(): void;
    dataItem(row: string): kendo$data$GanttTask;
    dataItem(row: kendo$effects$Element): kendo$data$GanttTask;
    dataItem(row: JQuery): kendo$data$GanttTask;
    date(date?: Date): Date;
    destroy(): void;
    range(range?: any): any;
    refresh(): void;
    refreshDependencies(): void;
    removeDependency(dependency: string): void;
    removeDependency(dependency: kendo$data$GanttDependency): void;
    removeTask(task: string): void;
    removeTask(task: kendo$data$GanttTask): void;
    saveAsPDF(): JQueryPromise<any>;
    select(): JQuery;
    select(row: string): void;
    select(row: kendo$effects$Element): void;
    select(row: JQuery): void;
    setDataSource(dataSource: kendo$data$GanttDataSource): void;
    setDependenciesDataSource(
      dataSource: kendo$data$GanttDependencyDataSource
    ): void;
    view(): kendo$ui$GanttView;
    view(type?: string): void;
  }

  declare interface kendo$ui$GanttAssignments {
    dataSource?: any | any | kendo$data$DataSource;
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
    dataSource?: any | any | kendo$data$DataSource;
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
    dataSource?: any | any | kendo$data$GanttDataSource;
    date?: Date;
    dependencies?: any | any | kendo$data$GanttDependencyDataSource;
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

  declare type kendo$ui$GanttDataBindingEvent = {} & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttDataBoundEvent = {} & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttAddEvent = {
    task?: kendo$data$GanttTask,
    dependency?: kendo$data$GanttDependency
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttEditEvent = {
    container?: JQuery,
    task?: kendo$data$GanttTask
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttRemoveEvent = {
    task?: kendo$data$GanttTask,
    dependencies?: any
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttCancelEvent = {
    container?: JQuery,
    task?: kendo$data$GanttTask
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttSaveEvent = {
    task?: kendo$data$GanttTask,
    values?: any
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttChangeEvent = {} & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttColumnResizeEvent = {
    column?: any,
    newWidth?: number,
    oldWidth?: number
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttNavigateEvent = {
    view?: string
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttMoveStartEvent = {
    task?: kendo$data$GanttTask
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttMoveEvent = {
    task?: kendo$data$GanttTask,
    start?: Date,
    end?: Date
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttMoveEndEvent = {
    task?: kendo$data$GanttTask,
    start?: Date,
    end?: Date
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttResizeStartEvent = {
    task?: kendo$data$GanttTask
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttResizeEvent = {
    task?: kendo$data$GanttTask,
    start?: Date,
    end?: Date
  } & kendo$ui$GanttEvent;

  declare type kendo$ui$GanttResizeEndEvent = {
    task?: kendo$data$GanttTask,
    start?: Date,
    end?: Date
  } & kendo$ui$GanttEvent;

  declare class kendo$ui$Grid mixins kendo$ui$Widget {
    static fn: kendo$ui$Grid;
    options: ui$GridOptions;
    dataSource: kendo$data$DataSource;
    columns: kendo$ui$GridColumn[];
    footer: JQuery;
    pager: kendo$ui$Pager;
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
    constructor(element: kendo$effects$Element, options?: ui$GridOptions): this;
    addRow(): void;
    autoFitColumn(column: number): void;
    autoFitColumn(column: string): void;
    autoFitColumn(column: any): void;
    cancelChanges(): void;
    cancelRow(): void;
    cellIndex(cell: string): number;
    cellIndex(cell: kendo$effects$Element): number;
    cellIndex(cell: JQuery): number;
    clearSelection(): void;
    closeCell(isCancel?: boolean): void;
    collapseGroup(row: string): void;
    collapseGroup(row: kendo$effects$Element): void;
    collapseGroup(row: JQuery): void;
    collapseRow(row: string): void;
    collapseRow(row: kendo$effects$Element): void;
    collapseRow(row: JQuery): void;
    current(): JQuery;
    current(cell: JQuery): void;
    dataItem(row: string): kendo$data$ObservableObject;
    dataItem(row: kendo$effects$Element): kendo$data$ObservableObject;
    dataItem(row: JQuery): kendo$data$ObservableObject;
    destroy(): void;
    editCell(cell: JQuery): void;
    editRow(row: JQuery): void;
    expandGroup(row: string): void;
    expandGroup(row: kendo$effects$Element): void;
    expandGroup(row: JQuery): void;
    expandRow(row: string): void;
    expandRow(row: kendo$effects$Element): void;
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
    removeRow(row: kendo$effects$Element): void;
    removeRow(row: JQuery): void;
    reorderColumn(destIndex: number, column: any): void;
    resizeColumn(column: any, value: number): void;
    saveAsExcel(): void;
    saveAsPDF(): JQueryPromise<any>;
    saveChanges(): void;
    saveRow(): void;
    select(): JQuery;
    select(rows: string): void;
    select(rows: kendo$effects$Element): void;
    select(rows: JQuery): void;
    selectedKeyNames(): any;
    setDataSource(dataSource: kendo$data$DataSource): void;
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
    dataSource?: any | kendo$data$DataSource;
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
    dataSource?: any | any | kendo$data$DataSource;
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
    dataSource?: any | any | kendo$data$DataSource;
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
    model?: kendo$data$Model
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridCancelEvent = {
    container?: JQuery,
    model?: kendo$data$Model
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridCellCloseEvent = {
    container?: JQuery,
    model?: kendo$data$Model,
    type?: string
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridChangeEvent = {} & kendo$ui$GridEvent;

  declare type kendo$ui$GridColumnHideEvent = {
    column?: any
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridColumnLockEvent = {
    column?: any
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridColumnMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridColumnMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridColumnReorderEvent = {
    column?: any,
    newIndex?: number,
    oldIndex?: number
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridColumnResizeEvent = {
    column?: any,
    newWidth?: number,
    oldWidth?: number
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridColumnShowEvent = {
    column?: any
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridColumnUnlockEvent = {
    column?: any
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridDataBindingEvent = {
    action?: string,
    index?: number,
    items?: any
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridDataBoundEvent = {} & kendo$ui$GridEvent;

  declare type kendo$ui$GridDetailCollapseEvent = {
    detailRow?: JQuery,
    masterRow?: JQuery
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridDetailExpandEvent = {
    detailRow?: JQuery,
    masterRow?: JQuery
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridDetailInitEvent = {
    data?: kendo$data$ObservableObject,
    detailCell?: JQuery,
    detailRow?: JQuery,
    masterRow?: JQuery
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridEditEvent = {
    container?: JQuery,
    model?: kendo$data$Model
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridExcelExportEvent = {
    data?: any,
    workbook?: kendo$ooxml$Workbook
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridFilterEvent = {
    filter?: any,
    field?: string
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridFilterMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridFilterMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridGroupEvent = {
    groups?: any
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridGroupCollapseEvent = {
    element?: JQuery,
    group?: any
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridGroupExpandEvent = {
    element?: JQuery,
    group?: any
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridNavigateEvent = {
    element?: JQuery
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridPageEvent = {
    page?: number
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridRemoveEvent = {
    model?: kendo$data$Model,
    row?: JQuery
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridSaveEvent = {
    model?: kendo$data$Model,
    container?: JQuery,
    values?: any
  } & kendo$ui$GridEvent;

  declare type kendo$ui$GridSaveChangesEvent = {} & kendo$ui$GridEvent;

  declare type kendo$ui$GridSortEvent = {
    sort?: any
  } & kendo$ui$GridEvent;

  declare class kendo$ui$ListBox mixins kendo$ui$Widget {
    static fn: kendo$ui$ListBox;
    options: ui$ListBoxOptions;
    dataSource: kendo$data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ListBox;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ListBoxOptions
    ): this;
    clearSelection(): void;
    dataItem(element: JQuery): kendo$data$ObservableObject;
    dataItem(element: kendo$effects$Element): kendo$data$ObservableObject;
    dataItem(element: string): kendo$data$ObservableObject;
    dataItems(): kendo$data$ObservableArray;
    destroy(): void;
    enable(element: JQuery, enable?: boolean): void;
    enable(element: kendo$effects$Element, enable?: boolean): void;
    enable(element: string, enable?: boolean): void;
    items(): any;
    refresh(): void;
    reorder(element: JQuery, index: number): void;
    reorder(element: kendo$effects$Element, index: number): void;
    reorder(element: string, index: number): void;
    remove(element: JQuery): void;
    remove(element: kendo$effects$Element): void;
    remove(element: string): void;
    remove(element: any): void;
    select(): JQuery;
    select(items: JQuery): void;
    select(items: any): void;
    setDataSource(dataSource: kendo$data$DataSource): void;
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
    dataSource?: any | any | kendo$data$DataSource;
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
  } & kendo$ui$ListBoxEvent;

  declare type kendo$ui$ListBoxDragstartEvent = {
    draggableEvent?: any,
    items?: JQuery
  } & kendo$ui$ListBoxEvent;

  declare type kendo$ui$ListBoxDragEvent = {
    items?: JQuery,
    dataItems?: any,
    draggableEvent?: any
  } & kendo$ui$ListBoxEvent;

  declare type kendo$ui$ListBoxDropEvent = {
    items?: any,
    dataItems?: any
  } & kendo$ui$ListBoxEvent;

  declare type kendo$ui$ListBoxDragendEvent = {
    items?: any,
    dataItems?: any,
    draggableEvent?: any
  } & kendo$ui$ListBoxEvent;

  declare type kendo$ui$ListBoxRemoveEvent = {
    items?: any,
    dataItems?: any
  } & kendo$ui$ListBoxEvent;

  declare type kendo$ui$ListBoxReorderEvent = {
    items?: any,
    dataItems?: any,
    offset?: number
  } & kendo$ui$ListBoxEvent;

  declare class kendo$ui$ListView mixins kendo$ui$Widget {
    static fn: kendo$ui$ListView;
    options: ui$ListViewOptions;
    dataSource: kendo$data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ListView;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ListViewOptions
    ): this;
    add(): void;
    cancel(): void;
    clearSelection(): void;
    dataItem(row: string): kendo$data$ObservableObject;
    dataItem(row: kendo$effects$Element): kendo$data$ObservableObject;
    dataItem(row: JQuery): kendo$data$ObservableObject;
    dataItems(): kendo$data$ObservableArray;
    destroy(): void;
    edit(item: JQuery): void;
    items(): any;
    refresh(): void;
    remove(item: any): void;
    save(): void;
    select(): JQuery;
    select(items: JQuery): void;
    select(items: any): void;
    setDataSource(dataSource: kendo$data$DataSource): void;
  }

  declare interface kendo$ui$ListViewOptions {
    name?: string;
    autoBind?: boolean;
    dataSource?: any | any | kendo$data$DataSource;
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
  }

  declare interface kendo$ui$ListViewEvent {
    sender: kendo$ui$ListView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ListViewCancelEvent = {
    container?: JQuery,
    model?: kendo$data$Model
  } & kendo$ui$ListViewEvent;

  declare type kendo$ui$ListViewEditEvent = {
    item?: JQuery,
    model?: kendo$data$Model
  } & kendo$ui$ListViewEvent;

  declare type kendo$ui$ListViewRemoveEvent = {
    item?: JQuery,
    model?: kendo$data$Model
  } & kendo$ui$ListViewEvent;

  declare type kendo$ui$ListViewSaveEvent = {
    model?: kendo$data$Model,
    item?: JQuery
  } & kendo$ui$ListViewEvent;

  declare class kendo$ui$MaskedTextBox mixins kendo$ui$Widget {
    static fn: kendo$ui$MaskedTextBox;
    options: ui$MaskedTextBoxOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$MaskedTextBox;
    constructor(
      element: kendo$effects$Element,
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

  declare type kendo$ui$MaskedTextBoxChangeEvent = {} & kendo$ui$MaskedTextBoxEvent;

  declare class kendo$ui$MediaPlayer mixins kendo$ui$Widget {
    static fn: kendo$ui$MediaPlayer;
    options: ui$MediaPlayerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$MediaPlayer;
    constructor(
      element: kendo$effects$Element,
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
    toolbar(): kendo$ui$ToolBar;
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

  declare class kendo$ui$Menu mixins kendo$ui$Widget {
    static fn: kendo$ui$Menu;
    options: ui$MenuOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Menu;
    constructor(element: kendo$effects$Element, options?: ui$MenuOptions): this;
    append(item: any, referenceItem?: string): kendo$ui$Menu;
    append(item: any, referenceItem?: JQuery): kendo$ui$Menu;
    close(element: string): kendo$ui$Menu;
    close(element: kendo$effects$Element): kendo$ui$Menu;
    close(element: JQuery): kendo$ui$Menu;
    destroy(): void;
    enable(element: string, enable: boolean): kendo$ui$Menu;
    enable(element: kendo$effects$Element, enable: boolean): kendo$ui$Menu;
    enable(element: JQuery, enable: boolean): kendo$ui$Menu;
    insertAfter(item: any, referenceItem: string): kendo$ui$Menu;
    insertAfter(item: any, referenceItem: kendo$effects$Element): kendo$ui$Menu;
    insertAfter(item: any, referenceItem: JQuery): kendo$ui$Menu;
    insertBefore(item: any, referenceItem: string): kendo$ui$Menu;
    insertBefore(
      item: any,
      referenceItem: kendo$effects$Element
    ): kendo$ui$Menu;
    insertBefore(item: any, referenceItem: JQuery): kendo$ui$Menu;
    open(element: string): kendo$ui$Menu;
    open(element: kendo$effects$Element): kendo$ui$Menu;
    open(element: JQuery): kendo$ui$Menu;
    remove(element: string): kendo$ui$Menu;
    remove(element: kendo$effects$Element): kendo$ui$Menu;
    remove(element: JQuery): kendo$ui$Menu;
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
  } & kendo$ui$MenuEvent;

  declare type kendo$ui$MenuOpenEvent = {
    item?: HTMLElement
  } & kendo$ui$MenuEvent;

  declare type kendo$ui$MenuActivateEvent = {
    item?: HTMLElement
  } & kendo$ui$MenuEvent;

  declare type kendo$ui$MenuDeactivateEvent = {
    item?: HTMLElement
  } & kendo$ui$MenuEvent;

  declare type kendo$ui$MenuSelectEvent = {
    item?: HTMLElement
  } & kendo$ui$MenuEvent;

  declare class kendo$ui$MultiColumnComboBox mixins kendo$ui$Widget {
    static fn: kendo$ui$MultiColumnComboBox;
    options: ui$MultiColumnComboBoxOptions;
    dataSource: kendo$data$DataSource;
    input: JQuery;
    list: JQuery;
    ul: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$MultiColumnComboBox;
    constructor(
      element: kendo$effects$Element,
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
    setDataSource(dataSource: kendo$data$DataSource): void;
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
    dataSource?: any | any | kendo$data$DataSource;
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

  declare type kendo$ui$MultiColumnComboBoxChangeEvent = {} & kendo$ui$MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxCloseEvent = {} & kendo$ui$MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxDataBoundEvent = {} & kendo$ui$MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxFilteringEvent = {
    filter?: any
  } & kendo$ui$MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxOpenEvent = {} & kendo$ui$MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & kendo$ui$MultiColumnComboBoxEvent;

  declare type kendo$ui$MultiColumnComboBoxCascadeEvent = {} & kendo$ui$MultiColumnComboBoxEvent;

  declare class kendo$ui$MultiSelect mixins kendo$ui$Widget {
    static fn: kendo$ui$MultiSelect;
    options: ui$MultiSelectOptions;
    dataSource: kendo$data$DataSource;
    input: JQuery;
    list: JQuery;
    ul: JQuery;
    tagList: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$MultiSelect;
    constructor(
      element: kendo$effects$Element,
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
    setDataSource(dataSource: kendo$data$DataSource): void;
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
    dataSource?: any | any | kendo$data$DataSource;
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

  declare type kendo$ui$MultiSelectChangeEvent = {} & kendo$ui$MultiSelectEvent;

  declare type kendo$ui$MultiSelectCloseEvent = {} & kendo$ui$MultiSelectEvent;

  declare type kendo$ui$MultiSelectDataBoundEvent = {} & kendo$ui$MultiSelectEvent;

  declare type kendo$ui$MultiSelectFilteringEvent = {
    filter?: any
  } & kendo$ui$MultiSelectEvent;

  declare type kendo$ui$MultiSelectOpenEvent = {} & kendo$ui$MultiSelectEvent;

  declare type kendo$ui$MultiSelectSelectEvent = {
    dataItem?: any,
    item?: JQuery
  } & kendo$ui$MultiSelectEvent;

  declare type kendo$ui$MultiSelectDeselectEvent = {
    dataItem?: any,
    item?: JQuery
  } & kendo$ui$MultiSelectEvent;

  declare class kendo$ui$MultiViewCalendar mixins kendo$ui$Widget {
    static fn: kendo$ui$MultiViewCalendar;
    options: ui$MultiViewCalendarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$MultiViewCalendar;
    constructor(
      element: kendo$effects$Element,
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

  declare class kendo$ui$Notification mixins kendo$ui$Widget {
    static fn: kendo$ui$Notification;
    options: ui$NotificationOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Notification;
    constructor(
      element: kendo$effects$Element,
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
  } & kendo$ui$NotificationEvent;

  declare type kendo$ui$NotificationShowEvent = {
    element?: JQuery
  } & kendo$ui$NotificationEvent;

  declare class kendo$ui$NumericTextBox mixins kendo$ui$Widget {
    static fn: kendo$ui$NumericTextBox;
    options: ui$NumericTextBoxOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$NumericTextBox;
    constructor(
      element: kendo$effects$Element,
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

  declare type kendo$ui$NumericTextBoxChangeEvent = {} & kendo$ui$NumericTextBoxEvent;

  declare type kendo$ui$NumericTextBoxSpinEvent = {} & kendo$ui$NumericTextBoxEvent;

  declare class kendo$ui$Pager mixins kendo$ui$Widget {
    static fn: kendo$ui$Pager;
    options: ui$PagerOptions;
    dataSource: kendo$data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Pager;
    constructor(
      element: kendo$effects$Element,
      options?: ui$PagerOptions
    ): this;
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
    dataSource?: any | kendo$data$DataSource;
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

  declare type kendo$ui$PagerChangeEvent = {} & kendo$ui$PagerEvent;

  declare class kendo$ui$PanelBar mixins kendo$ui$Widget {
    static fn: kendo$ui$PanelBar;
    options: ui$PanelBarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$PanelBar;
    constructor(
      element: kendo$effects$Element,
      options?: ui$PanelBarOptions
    ): this;
    append(item: string, referenceItem?: string): kendo$ui$PanelBar;
    append(
      item: string,
      referenceItem?: kendo$effects$Element
    ): kendo$ui$PanelBar;
    append(item: string, referenceItem?: JQuery): kendo$ui$PanelBar;
    append(
      item: kendo$effects$Element,
      referenceItem?: string
    ): kendo$ui$PanelBar;
    append(
      item: kendo$effects$Element,
      referenceItem?: kendo$effects$Element
    ): kendo$ui$PanelBar;
    append(
      item: kendo$effects$Element,
      referenceItem?: JQuery
    ): kendo$ui$PanelBar;
    append(item: JQuery, referenceItem?: string): kendo$ui$PanelBar;
    append(
      item: JQuery,
      referenceItem?: kendo$effects$Element
    ): kendo$ui$PanelBar;
    append(item: JQuery, referenceItem?: JQuery): kendo$ui$PanelBar;
    append(item: any, referenceItem?: string): kendo$ui$PanelBar;
    append(item: any, referenceItem?: kendo$effects$Element): kendo$ui$PanelBar;
    append(item: any, referenceItem?: JQuery): kendo$ui$PanelBar;
    clearSelection(): void;
    collapse(element: string, useAnimation: boolean): kendo$ui$PanelBar;
    collapse(
      element: kendo$effects$Element,
      useAnimation: boolean
    ): kendo$ui$PanelBar;
    collapse(element: JQuery, useAnimation: boolean): kendo$ui$PanelBar;
    destroy(): void;
    enable(element: string, enable: boolean): void;
    enable(element: kendo$effects$Element, enable: boolean): void;
    enable(element: JQuery, enable: boolean): void;
    expand(element: string, useAnimation: boolean): kendo$ui$PanelBar;
    expand(
      element: kendo$effects$Element,
      useAnimation: boolean
    ): kendo$ui$PanelBar;
    expand(element: JQuery, useAnimation: boolean): kendo$ui$PanelBar;
    insertAfter(item: string, referenceItem: string): void;
    insertAfter(item: string, referenceItem: kendo$effects$Element): void;
    insertAfter(item: string, referenceItem: JQuery): void;
    insertAfter(item: kendo$effects$Element, referenceItem: string): void;
    insertAfter(
      item: kendo$effects$Element,
      referenceItem: kendo$effects$Element
    ): void;
    insertAfter(item: kendo$effects$Element, referenceItem: JQuery): void;
    insertAfter(item: JQuery, referenceItem: string): void;
    insertAfter(item: JQuery, referenceItem: kendo$effects$Element): void;
    insertAfter(item: JQuery, referenceItem: JQuery): void;
    insertAfter(item: any, referenceItem: string): void;
    insertAfter(item: any, referenceItem: kendo$effects$Element): void;
    insertAfter(item: any, referenceItem: JQuery): void;
    insertBefore(item: string, referenceItem: string): kendo$ui$PanelBar;
    insertBefore(
      item: string,
      referenceItem: kendo$effects$Element
    ): kendo$ui$PanelBar;
    insertBefore(item: string, referenceItem: JQuery): kendo$ui$PanelBar;
    insertBefore(
      item: kendo$effects$Element,
      referenceItem: string
    ): kendo$ui$PanelBar;
    insertBefore(
      item: kendo$effects$Element,
      referenceItem: kendo$effects$Element
    ): kendo$ui$PanelBar;
    insertBefore(
      item: kendo$effects$Element,
      referenceItem: JQuery
    ): kendo$ui$PanelBar;
    insertBefore(item: JQuery, referenceItem: string): kendo$ui$PanelBar;
    insertBefore(
      item: JQuery,
      referenceItem: kendo$effects$Element
    ): kendo$ui$PanelBar;
    insertBefore(item: JQuery, referenceItem: JQuery): kendo$ui$PanelBar;
    insertBefore(item: any, referenceItem: string): kendo$ui$PanelBar;
    insertBefore(
      item: any,
      referenceItem: kendo$effects$Element
    ): kendo$ui$PanelBar;
    insertBefore(item: any, referenceItem: JQuery): kendo$ui$PanelBar;
    reload(element: string): void;
    reload(element: kendo$effects$Element): void;
    reload(element: JQuery): void;
    remove(element: string): void;
    remove(element: kendo$effects$Element): void;
    remove(element: JQuery): void;
    select(): JQuery;
    select(element?: string): void;
    select(element?: kendo$effects$Element): void;
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
    dataSource?: any | any | kendo$data$HierarchicalDataSource;
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
    item?: kendo$effects$Element
  } & kendo$ui$PanelBarEvent;

  declare type kendo$ui$PanelBarCollapseEvent = {
    item?: kendo$effects$Element
  } & kendo$ui$PanelBarEvent;

  declare type kendo$ui$PanelBarContentLoadEvent = {
    item?: kendo$effects$Element,
    contentElement?: kendo$effects$Element
  } & kendo$ui$PanelBarEvent;

  declare type kendo$ui$PanelBarDataBoundEvent = {
    node?: JQuery
  } & kendo$ui$PanelBarEvent;

  declare type kendo$ui$PanelBarErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & kendo$ui$PanelBarEvent;

  declare type kendo$ui$PanelBarExpandEvent = {
    item?: kendo$effects$Element
  } & kendo$ui$PanelBarEvent;

  declare type kendo$ui$PanelBarSelectEvent = {
    item?: kendo$effects$Element
  } & kendo$ui$PanelBarEvent;

  declare class kendo$ui$PivotConfigurator mixins kendo$ui$Widget {
    static fn: kendo$ui$PivotConfigurator;
    options: ui$PivotConfiguratorOptions;
    dataSource: kendo$data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$PivotConfigurator;
    constructor(
      element: kendo$effects$Element,
      options?: ui$PivotConfiguratorOptions
    ): this;
    destroy(): void;
    refresh(): void;
    setDataSource(dataSource: kendo$data$PivotDataSource): void;
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
    dataSource?: any | kendo$data$PivotDataSource;
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

  declare class kendo$ui$PivotGrid mixins kendo$ui$Widget {
    static fn: kendo$ui$PivotGrid;
    options: ui$PivotGridOptions;
    dataSource: kendo$data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$PivotGrid;
    constructor(
      element: kendo$effects$Element,
      options?: ui$PivotGridOptions
    ): this;
    cellInfo(columnIndex: number, rowIndex: number): any;
    cellInfoByElement(cell: string): any;
    cellInfoByElement(cell: kendo$effects$Element): any;
    cellInfoByElement(cell: JQuery): any;
    destroy(): void;
    refresh(): void;
    setDataSource(dataSource: kendo$data$PivotDataSource): void;
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
    dataSource?: any | kendo$data$PivotDataSource;
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

  declare type kendo$ui$PivotGridDataBindingEvent = {} & kendo$ui$PivotGridEvent;

  declare type kendo$ui$PivotGridDataBoundEvent = {} & kendo$ui$PivotGridEvent;

  declare type kendo$ui$PivotGridExpandMemberEvent = {
    axis?: string,
    path?: string[]
  } & kendo$ui$PivotGridEvent;

  declare type kendo$ui$PivotGridCollapseMemberEvent = {
    axis?: string,
    path?: string[]
  } & kendo$ui$PivotGridEvent;

  declare type kendo$ui$PivotGridExcelExportEvent = {
    data?: any,
    workbook?: any
  } & kendo$ui$PivotGridEvent;

  declare type kendo$ui$PivotGridPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & kendo$ui$PivotGridEvent;

  declare class kendo$ui$Popup mixins kendo$ui$Widget {
    static fn: kendo$ui$Popup;
    options: ui$PopupOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Popup;
    constructor(
      element: kendo$effects$Element,
      options?: ui$PopupOptions
    ): this;
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

  declare type kendo$ui$PopupActivateEvent = {} & kendo$ui$PopupEvent;

  declare type kendo$ui$PopupCloseEvent = {} & kendo$ui$PopupEvent;

  declare type kendo$ui$PopupDeactivateEvent = {} & kendo$ui$PopupEvent;

  declare type kendo$ui$PopupOpenEvent = {} & kendo$ui$PopupEvent;

  declare class kendo$ui$ProgressBar mixins kendo$ui$Widget {
    static fn: kendo$ui$ProgressBar;
    options: ui$ProgressBarOptions;
    progressStatus: JQuery;
    progressWrapper: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ProgressBar;
    constructor(
      element: kendo$effects$Element,
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
  } & kendo$ui$ProgressBarEvent;

  declare type kendo$ui$ProgressBarCompleteEvent = {
    value?: number
  } & kendo$ui$ProgressBarEvent;

  declare class kendo$ui$Prompt mixins kendo$ui$Dialog {
    static fn: kendo$ui$Prompt;
    options: ui$PromptOptions;
    result: JQueryPromise<any>;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Prompt;
    constructor(
      element: kendo$effects$Element,
      options?: ui$PromptOptions
    ): this;
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

  declare class kendo$ui$RangeSlider mixins kendo$ui$Widget {
    static fn: kendo$ui$RangeSlider;
    options: ui$RangeSliderOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$RangeSlider;
    constructor(
      element: kendo$effects$Element,
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
  } & kendo$ui$RangeSliderEvent;

  declare type kendo$ui$RangeSliderSlideEvent = {
    value?: any
  } & kendo$ui$RangeSliderEvent;

  declare class kendo$ui$ResponsivePanel mixins kendo$ui$Widget {
    static fn: kendo$ui$ResponsivePanel;
    options: ui$ResponsivePanelOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ResponsivePanel;
    constructor(
      element: kendo$effects$Element,
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

  declare class kendo$ui$Scheduler mixins kendo$ui$Widget {
    static fn: kendo$ui$Scheduler;
    options: ui$SchedulerOptions;
    dataSource: kendo$data$DataSource;
    resources: any;
    calendar: kendo$ui$Calendar;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Scheduler;
    constructor(
      element: kendo$effects$Element,
      options?: ui$SchedulerOptions
    ): this;
    addEvent(data: any): void;
    cancelEvent(): void;
    data(): void;
    date(): Date;
    date(value?: Date): void;
    destroy(): void;
    editEvent(event: string): void;
    editEvent(event: kendo$data$SchedulerEvent): void;
    items(): any;
    occurrenceByUid(uid: string): kendo$data$SchedulerEvent;
    occurrencesInRange(start: Date, end: Date): any;
    refresh(): void;
    removeEvent(event: string): void;
    removeEvent(event: kendo$data$SchedulerEvent): void;
    resourcesBySlot(slot: any): any;
    saveAsPDF(): JQueryPromise<any>;
    saveEvent(): void;
    select(): void;
    select(events: any, options: any): void;
    setDataSource(dataSource: kendo$data$SchedulerDataSource): void;
    slotByPosition(xPosition: number, yPosition: number): any;
    slotByElement(element: kendo$effects$Element): any;
    slotByElement(element: JQuery): any;
    view(): kendo$ui$SchedulerView;
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
    dataSource?: any | any | kendo$data$DataSource;
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
    dataSource?: any | any | kendo$data$SchedulerDataSource;
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
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerCancelEvent = {
    container?: JQuery,
    event?: kendo$data$SchedulerEvent
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerChangeEvent = {
    start?: Date,
    end?: Date,
    events?: any,
    slots?: any,
    resources?: any
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerDataBindingEvent = {} & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerDataBoundEvent = {} & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerEditEvent = {
    container?: JQuery,
    event?: kendo$data$SchedulerEvent
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerMoveStartEvent = {
    event?: kendo$data$SchedulerEvent
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerMoveEvent = {
    event?: kendo$data$SchedulerEvent,
    slot?: any
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerMoveEndEvent = {
    start?: Date,
    end?: Date,
    event?: kendo$data$SchedulerEvent,
    slot?: any,
    resources?: any
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerNavigateEvent = {
    action?: string,
    date?: Date,
    view?: string
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerRemoveEvent = {
    event?: kendo$data$SchedulerEvent
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerResizeStartEvent = {
    event?: kendo$data$SchedulerEvent
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerResizeEvent = {
    event?: kendo$data$SchedulerEvent,
    slot?: any
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerResizeEndEvent = {
    start?: Date,
    end?: Date,
    event?: kendo$data$SchedulerEvent,
    slot?: any
  } & kendo$ui$SchedulerEvent;

  declare type kendo$ui$SchedulerSaveEvent = {
    container?: JQuery,
    event?: kendo$data$SchedulerEvent
  } & kendo$ui$SchedulerEvent;

  declare class kendo$ui$ScrollView mixins kendo$ui$Widget {
    static fn: kendo$ui$ScrollView;
    options: ui$ScrollViewOptions;
    dataSource: kendo$data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$ScrollView;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ScrollViewOptions
    ): this;
    content(content: string): void;
    content(content: JQuery): void;
    destroy(): void;
    next(): void;
    prev(): void;
    refresh(): void;
    scrollTo(page: number, instant: boolean): void;
    setDataSource(dataSource: kendo$data$DataSource): void;
  }

  declare interface kendo$ui$ScrollViewOptions {
    name?: string;
    autoBind?: boolean;
    bounceVelocityThreshold?: number;
    contentHeight?: number | string;
    dataSource?: kendo$data$DataSource | any;
    duration?: number;
    emptyTemplate?: string;
    enablePager?: boolean;
    page?: number;
    template?: string;
    velocityThreshold?: number;
    change?: (e: ui$ScrollViewChangeEvent) => void;
    refresh?: (e: ui$ScrollViewRefreshEvent) => void;
  }

  declare interface kendo$ui$ScrollViewEvent {
    sender: kendo$ui$ScrollView;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$ScrollViewChangeEvent = {
    currentPage?: number,
    nextPage?: number,
    element?: JQuery,
    data?: any
  } & kendo$ui$ScrollViewEvent;

  declare type kendo$ui$ScrollViewRefreshEvent = {
    pageCount?: number,
    page?: number
  } & kendo$ui$ScrollViewEvent;

  declare class kendo$ui$Slider mixins kendo$ui$Widget {
    static fn: kendo$ui$Slider;
    options: ui$SliderOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Slider;
    constructor(
      element: kendo$effects$Element,
      options?: ui$SliderOptions
    ): this;
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
  } & kendo$ui$SliderEvent;

  declare type kendo$ui$SliderSlideEvent = {
    value?: number
  } & kendo$ui$SliderEvent;

  declare class kendo$ui$Sortable mixins kendo$ui$Widget {
    static fn: kendo$ui$Sortable;
    options: ui$SortableOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Sortable;
    constructor(
      element: kendo$effects$Element,
      options?: ui$SortableOptions
    ): this;
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
  } & kendo$ui$SortableEvent;

  declare type kendo$ui$SortableMoveEvent = {
    item?: JQuery,
    target?: JQuery,
    list?: kendo$ui$Sortable,
    draggableEvent?: any
  } & kendo$ui$SortableEvent;

  declare type kendo$ui$SortableEndEvent = {
    action?: string,
    item?: JQuery,
    oldIndex?: number,
    newIndex?: number,
    draggableEvent?: any
  } & kendo$ui$SortableEvent;

  declare type kendo$ui$SortableChangeEvent = {
    action?: string,
    item?: JQuery,
    oldIndex?: number,
    newIndex?: number,
    draggableEvent?: any
  } & kendo$ui$SortableEvent;

  declare type kendo$ui$SortableCancelEvent = {
    item?: JQuery
  } & kendo$ui$SortableEvent;

  declare class kendo$ui$Splitter mixins kendo$ui$Widget {
    static fn: kendo$ui$Splitter;
    options: ui$SplitterOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Splitter;
    constructor(
      element: kendo$effects$Element,
      options?: ui$SplitterOptions
    ): this;
    ajaxRequest(pane: string, url: string, data: any): void;
    ajaxRequest(pane: string, url: string, data: string): void;
    ajaxRequest(pane: kendo$effects$Element, url: string, data: any): void;
    ajaxRequest(pane: kendo$effects$Element, url: string, data: string): void;
    ajaxRequest(pane: JQuery, url: string, data: any): void;
    ajaxRequest(pane: JQuery, url: string, data: string): void;
    append(config?: any): JQuery;
    collapse(pane: string): void;
    collapse(pane: kendo$effects$Element): void;
    collapse(pane: JQuery): void;
    destroy(): void;
    expand(pane: string): void;
    expand(pane: kendo$effects$Element): void;
    expand(pane: JQuery): void;
    insertAfter(config: any, referencePane: string): JQuery;
    insertAfter(config: any, referencePane: kendo$effects$Element): JQuery;
    insertAfter(config: any, referencePane: JQuery): JQuery;
    insertBefore(config: any, referencePane: string): JQuery;
    insertBefore(config: any, referencePane: kendo$effects$Element): JQuery;
    insertBefore(config: any, referencePane: JQuery): JQuery;
    max(pane: string, value: string): void;
    max(pane: kendo$effects$Element, value: string): void;
    max(pane: JQuery, value: string): void;
    min(pane: string, value: string): void;
    min(pane: kendo$effects$Element, value: string): void;
    min(pane: JQuery, value: string): void;
    remove(pane: string): void;
    remove(pane: kendo$effects$Element): void;
    remove(pane: JQuery): void;
    size(pane: string): any;
    size(pane: kendo$effects$Element): any;
    size(pane: JQuery): any;
    size(pane: string, value?: string): void;
    size(pane: kendo$effects$Element, value?: string): void;
    size(pane: JQuery, value?: string): void;
    toggle(pane: string, expand?: boolean): void;
    toggle(pane: kendo$effects$Element, expand?: boolean): void;
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
    pane?: kendo$effects$Element
  } & kendo$ui$SplitterEvent;

  declare type kendo$ui$SplitterContentLoadEvent = {
    pane?: kendo$effects$Element
  } & kendo$ui$SplitterEvent;

  declare type kendo$ui$SplitterErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & kendo$ui$SplitterEvent;

  declare type kendo$ui$SplitterExpandEvent = {
    pane?: kendo$effects$Element
  } & kendo$ui$SplitterEvent;

  declare class kendo$ui$Spreadsheet mixins kendo$ui$Widget {
    static fn: kendo$ui$Spreadsheet;
    options: ui$SpreadsheetOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Spreadsheet;
    constructor(
      element: kendo$effects$Element,
      options?: ui$SpreadsheetOptions
    ): this;
    activeSheet(): kendo$spreadsheet$Sheet;
    activeSheet(sheet?: kendo$spreadsheet$Sheet): void;
    cellContextMenu(): kendo$ui$ContextMenu;
    rowHeaderContextMenu(): kendo$ui$ContextMenu;
    colHeaderContextMenu(): kendo$ui$ContextMenu;
    sheets(): any;
    fromFile(blob: Blob): JQueryPromise<any>;
    fromFile(blob: File): JQueryPromise<any>;
    saveAsExcel(): void;
    saveAsPDF(): JQueryPromise<any>;
    sheetByName(name: string): kendo$spreadsheet$Sheet;
    sheetIndex(sheet: kendo$spreadsheet$Sheet): number;
    sheetByIndex(index: number): kendo$spreadsheet$Sheet;
    insertSheet(options: any): kendo$spreadsheet$Sheet;
    moveSheetToIndex(sheet: kendo$spreadsheet$Sheet, index: number): void;
    refresh(): void;
    removeSheet(sheet: kendo$spreadsheet$Sheet): void;
    renameSheet(
      sheet: kendo$spreadsheet$Sheet,
      newSheetName: string
    ): kendo$spreadsheet$Sheet;
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
    dataSource?: kendo$data$DataSource;
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
    dataSource?: kendo$data$DataSource;
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

  declare type kendo$ui$SpreadsheetInsertSheetEvent = {} & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetRemoveSheetEvent = {
    sheet?: kendo$spreadsheet$Sheet
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetRenameSheetEvent = {
    sheet?: kendo$spreadsheet$Sheet,
    newSheetName?: string
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetSelectSheetEvent = {
    sheet?: kendo$spreadsheet$Sheet
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetUnhideColumnEvent = {
    sheet?: kendo$spreadsheet$Sheet,
    index?: number
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetUnhideRowEvent = {
    sheet?: kendo$spreadsheet$Sheet,
    index?: number
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetHideColumnEvent = {
    sheet?: kendo$spreadsheet$Sheet,
    index?: number
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetHideRowEvent = {
    sheet?: kendo$spreadsheet$Sheet,
    index?: number
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetDeleteColumnEvent = {
    sheet?: kendo$spreadsheet$Sheet,
    index?: number
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetDeleteRowEvent = {
    sheet?: kendo$spreadsheet$Sheet,
    index?: number
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetInsertColumnEvent = {
    sheet?: kendo$spreadsheet$Sheet,
    index?: number
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetInsertRowEvent = {
    sheet?: kendo$spreadsheet$Sheet,
    index?: number
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetSelectEvent = {
    range?: kendo$spreadsheet$Range
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetChangeFormatEvent = {
    range?: kendo$spreadsheet$Range
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetChangeEvent = {
    range?: kendo$spreadsheet$Range
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetRenderEvent = {} & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetExcelExportEvent = {
    data?: any,
    workbook?: kendo$ooxml$Workbook
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetExcelImportEvent = {
    file?: Blob | File,
    progress?: JQueryPromise<any>
  } & kendo$ui$SpreadsheetEvent;

  declare type kendo$ui$SpreadsheetPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & kendo$ui$SpreadsheetEvent;

  declare class kendo$ui$Switch mixins kendo$ui$Widget {
    static fn: kendo$ui$Switch;
    options: ui$SwitchOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Switch;
    constructor(
      element: kendo$effects$Element,
      options?: ui$SwitchOptions
    ): this;
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
  }

  declare interface kendo$ui$SwitchMessages {
    checked?: string;
    unchecked?: string;
  }

  declare interface kendo$ui$SwitchEvent {
    sender: kendo$ui$Switch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$SwitchChangeEvent = {
    checked?: any
  } & kendo$ui$SwitchEvent;

  declare class kendo$ui$TabStrip mixins kendo$ui$Widget {
    static fn: kendo$ui$TabStrip;
    options: ui$TabStripOptions;
    dataSource: kendo$data$DataSource;
    tabGroup: JQuery;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$TabStrip;
    constructor(
      element: kendo$effects$Element,
      options?: ui$TabStripOptions
    ): this;
    activateTab(item: JQuery): void;
    append(tab: any): kendo$ui$TabStrip;
    contentElement(itemIndex: number): kendo$effects$Element;
    contentHolder(itemIndex: number): kendo$effects$Element;
    deactivateTab(item: JQuery): void;
    destroy(): void;
    disable(element: string): kendo$ui$TabStrip;
    disable(element: kendo$effects$Element): kendo$ui$TabStrip;
    disable(element: JQuery): kendo$ui$TabStrip;
    enable(element: string, enable?: boolean): kendo$ui$TabStrip;
    enable(element: kendo$effects$Element, enable?: boolean): kendo$ui$TabStrip;
    enable(element: JQuery, enable?: boolean): kendo$ui$TabStrip;
    insertAfter(item: any, referenceTab: string): kendo$ui$TabStrip;
    insertAfter(
      item: any,
      referenceTab: kendo$effects$Element
    ): kendo$ui$TabStrip;
    insertAfter(item: any, referenceTab: JQuery): kendo$ui$TabStrip;
    insertAfter(item: string, referenceTab: string): kendo$ui$TabStrip;
    insertAfter(
      item: string,
      referenceTab: kendo$effects$Element
    ): kendo$ui$TabStrip;
    insertAfter(item: string, referenceTab: JQuery): kendo$ui$TabStrip;
    insertAfter(
      item: kendo$effects$Element,
      referenceTab: string
    ): kendo$ui$TabStrip;
    insertAfter(
      item: kendo$effects$Element,
      referenceTab: kendo$effects$Element
    ): kendo$ui$TabStrip;
    insertAfter(
      item: kendo$effects$Element,
      referenceTab: JQuery
    ): kendo$ui$TabStrip;
    insertAfter(item: JQuery, referenceTab: string): kendo$ui$TabStrip;
    insertAfter(
      item: JQuery,
      referenceTab: kendo$effects$Element
    ): kendo$ui$TabStrip;
    insertAfter(item: JQuery, referenceTab: JQuery): kendo$ui$TabStrip;
    insertBefore(item: any, referenceTab: string): kendo$ui$TabStrip;
    insertBefore(
      item: any,
      referenceTab: kendo$effects$Element
    ): kendo$ui$TabStrip;
    insertBefore(item: any, referenceTab: JQuery): kendo$ui$TabStrip;
    insertBefore(item: string, referenceTab: string): kendo$ui$TabStrip;
    insertBefore(
      item: string,
      referenceTab: kendo$effects$Element
    ): kendo$ui$TabStrip;
    insertBefore(item: string, referenceTab: JQuery): kendo$ui$TabStrip;
    insertBefore(
      item: kendo$effects$Element,
      referenceTab: string
    ): kendo$ui$TabStrip;
    insertBefore(
      item: kendo$effects$Element,
      referenceTab: kendo$effects$Element
    ): kendo$ui$TabStrip;
    insertBefore(
      item: kendo$effects$Element,
      referenceTab: JQuery
    ): kendo$ui$TabStrip;
    insertBefore(item: JQuery, referenceTab: string): kendo$ui$TabStrip;
    insertBefore(
      item: JQuery,
      referenceTab: kendo$effects$Element
    ): kendo$ui$TabStrip;
    insertBefore(item: JQuery, referenceTab: JQuery): kendo$ui$TabStrip;
    items(): HTMLCollection;
    reload(element: string): kendo$ui$TabStrip;
    reload(element: kendo$effects$Element): kendo$ui$TabStrip;
    reload(element: JQuery): kendo$ui$TabStrip;
    remove(element: string): kendo$ui$TabStrip;
    remove(element: number): kendo$ui$TabStrip;
    remove(element: JQuery): kendo$ui$TabStrip;
    select(): JQuery;
    select(element: string): void;
    select(element: kendo$effects$Element): void;
    select(element: JQuery): void;
    select(element: number): void;
    setDataSource(dataSource: any): void;
    setDataSource(dataSource: kendo$data$DataSource): void;
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
    dataSource?: any | any | kendo$data$DataSource;
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
  }

  declare interface kendo$ui$TabStripEvent {
    sender: kendo$ui$TabStrip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$TabStripActivateEvent = {
    item?: kendo$effects$Element,
    contentElement?: kendo$effects$Element
  } & kendo$ui$TabStripEvent;

  declare type kendo$ui$TabStripContentLoadEvent = {
    item?: kendo$effects$Element,
    contentElement?: kendo$effects$Element
  } & kendo$ui$TabStripEvent;

  declare type kendo$ui$TabStripErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & kendo$ui$TabStripEvent;

  declare type kendo$ui$TabStripSelectEvent = {
    item?: kendo$effects$Element,
    contentElement?: kendo$effects$Element
  } & kendo$ui$TabStripEvent;

  declare type kendo$ui$TabStripShowEvent = {
    item?: kendo$effects$Element,
    contentElement?: kendo$effects$Element
  } & kendo$ui$TabStripEvent;

  declare class kendo$ui$TimePicker mixins kendo$ui$Widget {
    static fn: kendo$ui$TimePicker;
    options: ui$TimePickerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$TimePicker;
    constructor(
      element: kendo$effects$Element,
      options?: ui$TimePickerOptions
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

  declare type kendo$ui$TimePickerChangeEvent = {} & kendo$ui$TimePickerEvent;

  declare type kendo$ui$TimePickerCloseEvent = {} & kendo$ui$TimePickerEvent;

  declare type kendo$ui$TimePickerOpenEvent = {} & kendo$ui$TimePickerEvent;

  declare class kendo$ui$ToolBar mixins kendo$ui$Widget {
    static fn: kendo$ui$ToolBar;
    options: ui$ToolBarOptions;
    element: JQuery;
    wrapper: JQuery;
    popup: kendo$ui$Popup;
    static extend(proto: Object): kendo$ui$ToolBar;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ToolBarOptions
    ): this;
    add(command: any): void;
    destroy(): void;
    enable(command: string, enable: boolean): void;
    enable(command: kendo$effects$Element, enable: boolean): void;
    enable(command: JQuery, enable: boolean): void;
    getSelectedFromGroup(groupName: string): void;
    hide(command: string): void;
    hide(command: kendo$effects$Element): void;
    hide(command: JQuery): void;
    remove(command: string): void;
    remove(command: kendo$effects$Element): void;
    remove(command: JQuery): void;
    show(command: string): void;
    show(command: kendo$effects$Element): void;
    show(command: JQuery): void;
    toggle(command: string, state: boolean): void;
    toggle(command: kendo$effects$Element, state: boolean): void;
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
  } & kendo$ui$ToolBarEvent;

  declare type kendo$ui$ToolBarCloseEvent = {
    SplitButton?: JQuery
  } & kendo$ui$ToolBarEvent;

  declare type kendo$ui$ToolBarOpenEvent = {
    SplitButton?: JQuery
  } & kendo$ui$ToolBarEvent;

  declare type kendo$ui$ToolBarToggleEvent = {
    target?: JQuery,
    checked?: boolean,
    id?: string
  } & kendo$ui$ToolBarEvent;

  declare type kendo$ui$ToolBarOverflowCloseEvent = {} & kendo$ui$ToolBarEvent;

  declare type kendo$ui$ToolBarOverflowOpenEvent = {} & kendo$ui$ToolBarEvent;

  declare class kendo$ui$Tooltip mixins kendo$ui$Widget {
    static fn: kendo$ui$Tooltip;
    options: drawing$TooltipOptions;
    popup: kendo$ui$Popup;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Tooltip;
    constructor(
      element: kendo$effects$Element,
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
  }

  declare interface kendo$ui$TooltipEvent {
    sender: kendo$ui$Tooltip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$ui$TooltipRequestStartEvent = {
    target?: JQuery,
    options?: any
  } & kendo$ui$TooltipEvent;

  declare type kendo$ui$TooltipErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & kendo$ui$TooltipEvent;

  declare class kendo$ui$Touch mixins kendo$ui$Widget {
    static fn: kendo$ui$Touch;
    options: ui$TouchOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Touch;
    constructor(
      element: kendo$effects$Element,
      options?: ui$TouchOptions
    ): this;
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
    touch?: kendo$mobile$ui$TouchEventOptions,
    event?: JQueryEventObject
  } & kendo$ui$TouchEvent;

  declare type kendo$ui$TouchDragstartEvent = {
    touch?: kendo$mobile$ui$TouchEventOptions,
    event?: JQueryEventObject
  } & kendo$ui$TouchEvent;

  declare type kendo$ui$TouchDragEvent = {
    touch?: kendo$mobile$ui$TouchEventOptions,
    event?: JQueryEventObject
  } & kendo$ui$TouchEvent;

  declare type kendo$ui$TouchDragendEvent = {
    touch?: kendo$mobile$ui$TouchEventOptions,
    event?: JQueryEventObject
  } & kendo$ui$TouchEvent;

  declare type kendo$ui$TouchTapEvent = {
    touch?: kendo$mobile$ui$TouchEventOptions,
    event?: JQueryEventObject
  } & kendo$ui$TouchEvent;

  declare type kendo$ui$TouchDoubletapEvent = {
    touch?: kendo$mobile$ui$TouchEventOptions,
    event?: JQueryEventObject
  } & kendo$ui$TouchEvent;

  declare type kendo$ui$TouchHoldEvent = {
    touch?: kendo$mobile$ui$TouchEventOptions,
    event?: JQueryEventObject
  } & kendo$ui$TouchEvent;

  declare type kendo$ui$TouchSwipeEvent = {
    touch?: kendo$mobile$ui$TouchEventOptions,
    event?: JQueryEventObject,
    direction?: string
  } & kendo$ui$TouchEvent;

  declare type kendo$ui$TouchGesturestartEvent = {
    touches?: any,
    event?: JQueryEventObject,
    distance?: number,
    center?: kendo$mobile$ui$Point
  } & kendo$ui$TouchEvent;

  declare type kendo$ui$TouchGesturechangeEvent = {
    touches?: any,
    event?: JQueryEventObject,
    distance?: number,
    center?: kendo$mobile$ui$Point
  } & kendo$ui$TouchEvent;

  declare type kendo$ui$TouchGestureendEvent = {
    touches?: any,
    event?: JQueryEventObject,
    distance?: number,
    center?: kendo$mobile$ui$Point
  } & kendo$ui$TouchEvent;

  declare class kendo$ui$TreeList mixins kendo$ui$Widget {
    static fn: kendo$ui$TreeList;
    options: ui$TreeListOptions;
    dataSource: kendo$data$DataSource;
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
    constructor(
      element: kendo$effects$Element,
      options?: ui$TreeListOptions
    ): this;
    addRow(parentRow: string): void;
    addRow(parentRow: kendo$effects$Element): void;
    addRow(parentRow: JQuery): void;
    autoFitColumn(column: number): void;
    autoFitColumn(column: string): void;
    autoFitColumn(column: any): void;
    cancelChanges(): void;
    cancelRow(): void;
    clearSelection(): void;
    closeCell(isCancel?: boolean): void;
    collapse(row: string): JQueryPromise<any>;
    collapse(row: kendo$effects$Element): JQueryPromise<any>;
    collapse(row: JQuery): JQueryPromise<any>;
    dataItem(row: string): kendo$data$TreeListModel;
    dataItem(row: kendo$effects$Element): kendo$data$TreeListModel;
    dataItem(row: JQuery): kendo$data$TreeListModel;
    destroy(): void;
    editCell(cell: JQuery): void;
    editRow(row: JQuery): void;
    expand(row: string): JQueryPromise<any>;
    expand(row: kendo$effects$Element): JQueryPromise<any>;
    expand(row: JQuery): JQueryPromise<any>;
    itemFor(model: kendo$data$TreeListModel): JQuery;
    itemFor(model: any): JQuery;
    items(): any;
    refresh(): void;
    removeRow(row: string): void;
    removeRow(row: kendo$effects$Element): void;
    removeRow(row: JQuery): void;
    saveAsExcel(): void;
    saveAsPDF(): JQueryPromise<any>;
    saveChanges(): void;
    saveRow(): void;
    select(): JQuery;
    select(rows: kendo$effects$Element): void;
    select(rows: JQuery): void;
    setDataSource(dataSource: kendo$data$TreeListDataSource): void;
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
    dataSource?: any | any | kendo$data$TreeListDataSource;
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
    model?: kendo$data$Model
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListCancelEvent = {
    container?: JQuery,
    model?: kendo$data$TreeListModel
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListCellCloseEvent = {
    container?: JQuery,
    model?: kendo$data$Model,
    type?: string
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListChangeEvent = {} & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListCollapseEvent = {
    model?: kendo$data$TreeListModel
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListDataBindingEvent = {} & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListDataBoundEvent = {} & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListDragstartEvent = {
    source?: kendo$data$TreeListModel
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListDragEvent = {
    source?: kendo$data$TreeListModel,
    target?: JQuery
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListDragendEvent = {
    source?: kendo$data$TreeListModel,
    destination?: kendo$data$TreeListModel
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListDropEvent = {
    source?: kendo$data$TreeListModel,
    destination?: kendo$data$TreeListModel,
    dropTarget?: kendo$effects$Element,
    valid?: boolean,
    setValid?: boolean
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListEditEvent = {
    container?: JQuery,
    model?: kendo$data$TreeListModel
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListExcelExportEvent = {
    data?: any,
    workbook?: any
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListExpandEvent = {
    model?: kendo$data$TreeListModel
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListFilterMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListFilterMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListPdfExportEvent = {
    promise?: JQueryPromise<any>
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListRemoveEvent = {
    model?: kendo$data$TreeListModel,
    row?: JQuery
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListSaveEvent = {
    model?: kendo$data$TreeListModel,
    container?: JQuery
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListSaveChangesEvent = {} & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListColumnShowEvent = {
    column?: any
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListColumnHideEvent = {
    column?: any
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListColumnReorderEvent = {
    column?: any,
    newIndex?: number,
    oldIndex?: number
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListColumnResizeEvent = {
    column?: any,
    newWidth?: number,
    oldWidth?: number
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListColumnMenuInitEvent = {
    container?: JQuery,
    field?: string
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListColumnMenuOpenEvent = {
    container?: JQuery,
    field?: string
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListColumnLockEvent = {
    column?: any
  } & kendo$ui$TreeListEvent;

  declare type kendo$ui$TreeListColumnUnlockEvent = {
    column?: any
  } & kendo$ui$TreeListEvent;

  declare class kendo$ui$TreeView mixins kendo$ui$Widget {
    static fn: kendo$ui$TreeView;
    options: ui$TreeViewOptions;
    dataSource: kendo$data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$TreeView;
    constructor(
      element: kendo$effects$Element,
      options?: ui$TreeViewOptions
    ): this;
    append(nodeData: any, parentNode?: JQuery, success?: Function): JQuery;
    append(nodeData: JQuery, parentNode?: JQuery, success?: Function): JQuery;
    collapse(nodes: JQuery): void;
    collapse(nodes: kendo$effects$Element): void;
    collapse(nodes: string): void;
    dataItem(node: JQuery): kendo$data$Node;
    dataItem(node: kendo$effects$Element): kendo$data$Node;
    dataItem(node: string): kendo$data$Node;
    destroy(): void;
    detach(node: JQuery): JQuery;
    detach(node: kendo$effects$Element): JQuery;
    detach(node: string): JQuery;
    enable(nodes: JQuery, enable?: boolean): void;
    enable(nodes: kendo$effects$Element, enable?: boolean): void;
    enable(nodes: string, enable?: boolean): void;
    enable(nodes: boolean, enable?: boolean): void;
    expand(nodes: JQuery): void;
    expand(nodes: kendo$effects$Element): void;
    expand(nodes: string): void;
    expandPath(path: any, complete: Function): void;
    expandTo(targetNode: kendo$data$Node): void;
    expandTo(targetNode: any): void;
    findByText(text: string): JQuery;
    findByUid(uid: string): JQuery;
    focus(): void;
    insertAfter(nodeData: any, referenceNode: JQuery): JQuery;
    insertBefore(nodeData: any, referenceNode: JQuery): JQuery;
    items(): any;
    parent(node: JQuery): JQuery;
    parent(node: kendo$effects$Element): JQuery;
    parent(node: string): JQuery;
    remove(node: JQuery): void;
    remove(node: kendo$effects$Element): void;
    remove(node: string): void;
    select(): JQuery;
    select(node?: JQuery): void;
    select(node?: kendo$effects$Element): void;
    select(node?: string): void;
    setDataSource(dataSource: kendo$data$HierarchicalDataSource): void;
    text(node: JQuery): string;
    text(node: kendo$effects$Element): string;
    text(node: string): string;
    text(node: JQuery, newText: string): void;
    text(node: kendo$effects$Element, newText: string): void;
    text(node: string, newText: string): void;
    toggle(node: JQuery): void;
    toggle(node: kendo$effects$Element): void;
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
    dataSource?: any | any | kendo$data$HierarchicalDataSource;
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
    node?: kendo$effects$Element
  } & kendo$ui$TreeViewEvent;

  declare type kendo$ui$TreeViewCollapseEvent = {
    node?: kendo$effects$Element
  } & kendo$ui$TreeViewEvent;

  declare type kendo$ui$TreeViewDataBoundEvent = {
    node?: JQuery
  } & kendo$ui$TreeViewEvent;

  declare type kendo$ui$TreeViewDragEvent = {
    sourceNode?: kendo$effects$Element,
    dropTarget?: kendo$effects$Element,
    pageX?: number,
    pageY?: number,
    statusClass?: string,
    setStatusClass?: Function
  } & kendo$ui$TreeViewEvent;

  declare type kendo$ui$TreeViewDragendEvent = {
    sourceNode?: kendo$effects$Element,
    destinationNode?: kendo$effects$Element,
    dropPosition?: string
  } & kendo$ui$TreeViewEvent;

  declare type kendo$ui$TreeViewDragstartEvent = {
    sourceNode?: kendo$effects$Element
  } & kendo$ui$TreeViewEvent;

  declare type kendo$ui$TreeViewDropEvent = {
    sourceNode?: kendo$effects$Element,
    destinationNode?: kendo$effects$Element,
    valid?: boolean,
    setValid?: Function,
    dropTarget?: kendo$effects$Element,
    dropPosition?: string
  } & kendo$ui$TreeViewEvent;

  declare type kendo$ui$TreeViewExpandEvent = {
    node?: kendo$effects$Element
  } & kendo$ui$TreeViewEvent;

  declare type kendo$ui$TreeViewNavigateEvent = {
    node?: kendo$effects$Element
  } & kendo$ui$TreeViewEvent;

  declare type kendo$ui$TreeViewSelectEvent = {
    node?: kendo$effects$Element
  } & kendo$ui$TreeViewEvent;

  declare class kendo$ui$Upload mixins kendo$ui$Widget {
    static fn: kendo$ui$Upload;
    options: ui$UploadOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Upload;
    constructor(
      element: kendo$effects$Element,
      options?: ui$UploadOptions
    ): this;
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
  } & kendo$ui$UploadEvent;

  declare type kendo$ui$UploadClearEvent = {
    e?: any
  } & kendo$ui$UploadEvent;

  declare type kendo$ui$UploadErrorEvent = {
    files?: any[],
    operation?: string,
    XMLHttpRequest?: any
  } & kendo$ui$UploadEvent;

  declare type kendo$ui$UploadPauseEvent = {
    e?: any
  } & kendo$ui$UploadEvent;

  declare type kendo$ui$UploadProgressEvent = {
    files?: any[],
    percentComplete?: number
  } & kendo$ui$UploadEvent;

  declare type kendo$ui$UploadRemoveEvent = {
    files?: any[],
    headers?: any,
    data?: any
  } & kendo$ui$UploadEvent;

  declare type kendo$ui$UploadSelectEvent = {
    e?: any,
    files?: any[]
  } & kendo$ui$UploadEvent;

  declare type kendo$ui$UploadSuccessEvent = {
    files?: any[],
    operation?: string,
    response?: any,
    XMLHttpRequest?: any
  } & kendo$ui$UploadEvent;

  declare type kendo$ui$UploadUploadEvent = {
    files?: any[],
    data?: any,
    formData?: any,
    XMLHttpRequest?: any
  } & kendo$ui$UploadEvent;

  declare class kendo$ui$Validator mixins kendo$ui$Widget {
    static fn: kendo$ui$Validator;
    options: ui$ValidatorOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Validator;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ValidatorOptions
    ): this;
    errors(): any;
    hideMessages(): void;
    validate(): boolean;
    validateInput(input: kendo$effects$Element): boolean;
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
  } & kendo$ui$ValidatorEvent;

  declare type kendo$ui$ValidatorValidateInputEvent = {
    input?: JQuery,
    valid?: boolean
  } & kendo$ui$ValidatorEvent;

  declare class kendo$ui$Window mixins kendo$ui$Widget {
    static fn: kendo$ui$Window;
    options: ui$WindowOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$ui$Window;
    constructor(
      element: kendo$effects$Element,
      options?: ui$WindowOptions
    ): this;
    center(): kendo$ui$Window;
    close(): kendo$ui$Window;
    content(): string;
    content(content?: string): kendo$ui$Window;
    content(content?: JQuery): kendo$ui$Window;
    destroy(): void;
    isMaximized(): boolean;
    isMinimized(): boolean;
    maximize(): kendo$ui$Window;
    minimize(): kendo$ui$Window;
    open(): kendo$ui$Window;
    pin(): void;
    refresh(options: any): kendo$ui$Window;
    restore(): kendo$ui$Window;
    setOptions(options: any): void;
    title(): string;
    title(text?: string): kendo$ui$Window;
    toFront(): kendo$ui$Window;
    toggleMaximization(): kendo$ui$Window;
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
  } & kendo$ui$WindowEvent;

  declare type kendo$ui$WindowErrorEvent = {
    xhr?: JQueryXHR,
    status?: string
  } & kendo$ui$WindowEvent;

  declare var npm$namespace$kendo$mobile: {
    init: typeof kendo$mobile$init,

    Application: typeof kendo$mobile$Application,
    ui: typeof npm$namespace$kendo$mobile$ui
  };
  declare function kendo$mobile$init(selector: string): void;

  declare function kendo$mobile$init(element: JQuery): void;

  declare function kendo$mobile$init(element: kendo$effects$Element): void;

  declare class kendo$mobile$Application mixins kendo$Observable {
    options: mobile$ApplicationOptions;
    router: kendo$Router;
    pane: kendo$mobile$ui$Pane;
    constructor(element?: any, options?: mobile$ApplicationOptions): this;
    init(element?: any, options?: mobile$ApplicationOptions): void;
    changeLoadingMessage(text: string): void;
    hideLoading(): void;
    navigate(url: string, transition?: string): void;
    replace(url: string, transition?: string): void;
    scroller(): kendo$mobile$ui$Scroller;
    showLoading(): void;
    view(): kendo$mobile$ui$View;
  }

  declare interface kendo$mobile$ApplicationOptions {
    browserHistory?: boolean;
    hideAddressBar?: boolean;
    updateDocumentTitle?: boolean;
    initial?: string;
    layout?: string;
    loading?: string;
    modelScope?: Object;
    platform?: string;
    retina?: boolean;
    serverNavigation?: boolean;
    skin?: string;
    statusBarStyle?: string;
    transition?: string;
    useNativeScrolling?: boolean;
    init?: (e: mobile$ApplicationEvent) => void;
  }

  declare interface kendo$mobile$ApplicationEvent {
    sender: kendo$mobile$Application;
  }

  declare var npm$namespace$kendo$mobile$ui: {
    Widget: typeof kendo$mobile$ui$Widget,
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
  declare class kendo$mobile$ui$Widget mixins kendo$ui$Widget {}

  declare interface kendo$mobile$ui$TouchAxis {
    location?: number;
    startLocation?: number;
    client?: number;
    delta?: number;
    velocity?: number;
  }

  declare interface kendo$mobile$ui$TouchEventOptions {
    target?: JQuery;
    x?: kendo$mobile$ui$TouchAxis;
    y?: kendo$mobile$ui$TouchAxis;
  }

  declare interface kendo$mobile$ui$Point {
    x?: number;
    y?: number;
  }

  declare class kendo$mobile$ui$ActionSheet mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$ActionSheet;
    options: ui$ActionSheetOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$ActionSheet;
    constructor(
      element: kendo$effects$Element,
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
  } & kendo$mobile$ui$ActionSheetEvent;

  declare class kendo$mobile$ui$BackButton mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$BackButton;
    options: ui$BackButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$BackButton;
    constructor(
      element: kendo$effects$Element,
      options?: ui$BackButtonOptions
    ): this;
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
  } & kendo$mobile$ui$BackButtonEvent;

  declare class kendo$mobile$ui$Button mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$Button;
    options: kendo$ui$ButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Button;
    constructor(
      element: kendo$effects$Element,
      options?: kendo$ui$ButtonOptions
    ): this;
    badge(value: string): string;
    badge(value: boolean): string;
    destroy(): void;
    enable(enable: boolean): void;
  }

  declare interface kendo$mobile$ui$ButtonOptions {
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
  }

  declare type kendo$mobile$ui$ButtonClickEvent = {
    target?: JQuery,
    button?: JQuery
  } & kendo$mobile$ui$ButtonEvent;

  declare class kendo$mobile$ui$ButtonGroup mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$ButtonGroup;
    options: kendo$ui$ButtonGroupOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$ButtonGroup;
    constructor(
      element: kendo$effects$Element,
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
    selectOn?: string;
    select?: (e: kendo$ui$ButtonGroupSelectEvent) => void;
  }

  declare interface kendo$mobile$ui$ButtonGroupEvent {
    sender: kendo$mobile$ui$ButtonGroup;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$ButtonGroupSelectEvent = {
    index?: number
  } & kendo$mobile$ui$ButtonGroupEvent;

  declare class kendo$mobile$ui$Collapsible mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$Collapsible;
    options: ui$CollapsibleOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Collapsible;
    constructor(
      element: kendo$effects$Element,
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

  declare class kendo$mobile$ui$DetailButton mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$DetailButton;
    options: ui$DetailButtonOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$DetailButton;
    constructor(
      element: kendo$effects$Element,
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
  } & kendo$mobile$ui$DetailButtonEvent;

  declare class kendo$mobile$ui$Drawer mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$Drawer;
    options: ui$DrawerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Drawer;
    constructor(
      element: kendo$effects$Element,
      options?: ui$DrawerOptions
    ): this;
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

  declare type kendo$mobile$ui$DrawerAfterHideEvent = {} & kendo$mobile$ui$DrawerEvent;

  declare type kendo$mobile$ui$DrawerHideEvent = {} & kendo$mobile$ui$DrawerEvent;

  declare type kendo$mobile$ui$DrawerInitEvent = {} & kendo$mobile$ui$DrawerEvent;

  declare type kendo$mobile$ui$DrawerShowEvent = {} & kendo$mobile$ui$DrawerEvent;

  declare class kendo$mobile$ui$Layout mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$Layout;
    options: drawing$LayoutOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Layout;
    constructor(
      element: kendo$effects$Element,
      options?: drawing$LayoutOptions
    ): this;
  }

  declare interface kendo$mobile$ui$LayoutOptions {
    name?: string;
    id?: string;
    platform?: string;
    hide?: (e: ui$LayoutHideEvent) => void;
    init?: (e: ui$LayoutInitEvent) => void;
    show?: (e: ui$LayoutShowEvent) => void;
  }

  declare interface kendo$mobile$ui$LayoutEvent {
    sender: kendo$mobile$ui$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$LayoutHideEvent = {
    layout?: JQuery,
    view?: JQuery
  } & kendo$mobile$ui$LayoutEvent;

  declare type kendo$mobile$ui$LayoutInitEvent = {
    layout?: JQuery
  } & kendo$mobile$ui$LayoutEvent;

  declare type kendo$mobile$ui$LayoutShowEvent = {
    layout?: JQuery,
    view?: JQuery
  } & kendo$mobile$ui$LayoutEvent;

  declare class kendo$mobile$ui$ListView mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$ListView;
    options: kendo$ui$ListViewOptions;
    dataSource: kendo$data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$ListView;
    constructor(
      element: kendo$effects$Element,
      options?: kendo$ui$ListViewOptions
    ): this;
    append(dataItems: any): void;
    prepend(dataItems: any): void;
    replace(dataItems: any): void;
    remove(dataItems: any): void;
    setDataItem(item: JQuery, dataItem: kendo$data$Model): void;
    destroy(): void;
    items(): JQuery;
    refresh(): void;
    setDataSource(dataSource: kendo$data$DataSource): void;
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
    appendOnRefresh?: boolean;
    autoBind?: boolean;
    dataSource?: kendo$data$DataSource | any;
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
  }

  declare type kendo$mobile$ui$ListViewClickEvent = {
    item?: JQuery,
    target?: JQuery,
    dataItem?: any,
    button?: kendo$mobile$ui$Button
  } & kendo$mobile$ui$ListViewEvent;

  declare class kendo$mobile$ui$Loader mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$Loader;
    options: ui$LoaderOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Loader;
    constructor(
      element: kendo$effects$Element,
      options?: ui$LoaderOptions
    ): this;
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

  declare class kendo$mobile$ui$ModalView mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$ModalView;
    options: ui$ModalViewOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$ModalView;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ModalViewOptions
    ): this;
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
  } & kendo$mobile$ui$ModalViewEvent;

  declare type kendo$mobile$ui$ModalViewCloseEvent = {} & kendo$mobile$ui$ModalViewEvent;

  declare type kendo$mobile$ui$ModalViewInitEvent = {} & kendo$mobile$ui$ModalViewEvent;

  declare type kendo$mobile$ui$ModalViewOpenEvent = {
    target?: JQuery
  } & kendo$mobile$ui$ModalViewEvent;

  declare class kendo$mobile$ui$NavBar mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$NavBar;
    options: ui$NavBarOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$NavBar;
    constructor(
      element: kendo$effects$Element,
      options?: ui$NavBarOptions
    ): this;
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

  declare class kendo$mobile$ui$Pane mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$Pane;
    options: ui$PaneOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Pane;
    constructor(element: kendo$effects$Element, options?: ui$PaneOptions): this;
    destroy(): void;
    hideLoading(): void;
    navigate(url: string, transition: string): void;
    replace(url: string, transition: string): void;
    showLoading(): void;
    view(): kendo$mobile$ui$View;
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
  } & kendo$mobile$ui$PaneEvent;

  declare type kendo$mobile$ui$PaneViewShowEvent = {
    view?: kendo$mobile$ui$View
  } & kendo$mobile$ui$PaneEvent;

  declare class kendo$mobile$ui$PopOver mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$PopOver;
    options: ui$PopOverOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$PopOver;
    constructor(
      element: kendo$effects$Element,
      options?: ui$PopOverOptions
    ): this;
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

  declare type kendo$mobile$ui$PopOverCloseEvent = {} & kendo$mobile$ui$PopOverEvent;

  declare type kendo$mobile$ui$PopOverOpenEvent = {
    target?: JQuery
  } & kendo$mobile$ui$PopOverEvent;

  declare class kendo$mobile$ui$ScrollView mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$ScrollView;
    options: kendo$ui$ScrollViewOptions;
    dataSource: kendo$data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$ScrollView;
    constructor(
      element: kendo$effects$Element,
      options?: kendo$ui$ScrollViewOptions
    ): this;
    content(content: string): void;
    content(content: JQuery): void;
    destroy(): void;
    next(): void;
    prev(): void;
    refresh(): void;
    scrollTo(page: number, instant: boolean): void;
    setDataSource(dataSource: kendo$data$DataSource): void;
    value(dataItem: any): any;
  }

  declare interface kendo$mobile$ui$ScrollViewOptions {
    name?: string;
    autoBind?: boolean;
    bounceVelocityThreshold?: number;
    contentHeight?: number | string;
    dataSource?: kendo$data$DataSource | any;
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
  }

  declare type kendo$mobile$ui$ScrollViewChangingEvent = {
    currentPage?: number,
    nextPage?: number
  } & kendo$mobile$ui$ScrollViewEvent;

  declare type kendo$mobile$ui$ScrollViewChangeEvent = {
    page?: number,
    element?: JQuery,
    data?: any
  } & kendo$mobile$ui$ScrollViewEvent;

  declare type kendo$mobile$ui$ScrollViewRefreshEvent = {
    pageCount?: number,
    page?: number
  } & kendo$mobile$ui$ScrollViewEvent;

  declare class kendo$mobile$ui$Scroller mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$Scroller;
    options: ui$ScrollerOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Scroller;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ScrollerOptions
    ): this;
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
  } & kendo$mobile$ui$ScrollerEvent;

  declare class kendo$mobile$ui$SplitView mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$SplitView;
    options: ui$SplitViewOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$SplitView;
    constructor(
      element: kendo$effects$Element,
      options?: ui$SplitViewOptions
    ): this;
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
  } & kendo$mobile$ui$SplitViewEvent;

  declare type kendo$mobile$ui$SplitViewShowEvent = {
    view?: JQuery
  } & kendo$mobile$ui$SplitViewEvent;

  declare class kendo$mobile$ui$Switch mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$Switch;
    options: kendo$ui$SwitchOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$Switch;
    constructor(
      element: kendo$effects$Element,
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
    enable?: boolean;
    offLabel?: string;
    onLabel?: string;
    change?: (e: kendo$ui$SwitchChangeEvent) => void;
  }

  declare interface kendo$mobile$ui$SwitchEvent {
    sender: kendo$mobile$ui$Switch;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$SwitchChangeEvent = {
    checked?: any
  } & kendo$mobile$ui$SwitchEvent;

  declare class kendo$mobile$ui$TabStrip mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$TabStrip;
    options: kendo$ui$TabStripOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$TabStrip;
    constructor(
      element: kendo$effects$Element,
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
    selectedIndex?: number;
    select?: (e: kendo$ui$TabStripSelectEvent) => void;
  }

  declare interface kendo$mobile$ui$TabStripEvent {
    sender: kendo$mobile$ui$TabStrip;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$mobile$ui$TabStripSelectEvent = {
    item?: JQuery
  } & kendo$mobile$ui$TabStripEvent;

  declare class kendo$mobile$ui$View mixins kendo$mobile$ui$Widget {
    static fn: kendo$mobile$ui$View;
    options: kendo$ViewOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$mobile$ui$View;
    constructor(
      element: kendo$effects$Element,
      options?: kendo$ViewOptions
    ): this;
    contentElement(): void;
    destroy(): void;
    enable(enable: boolean): void;
  }

  declare interface kendo$mobile$ui$ViewOptions {
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
  }

  declare type kendo$mobile$ui$ViewAfterShowEvent = {
    view?: kendo$mobile$ui$View
  } & kendo$mobile$ui$ViewEvent;

  declare type kendo$mobile$ui$ViewBeforeHideEvent = {
    view?: kendo$mobile$ui$View
  } & kendo$mobile$ui$ViewEvent;

  declare type kendo$mobile$ui$ViewBeforeShowEvent = {
    view?: kendo$mobile$ui$View
  } & kendo$mobile$ui$ViewEvent;

  declare type kendo$mobile$ui$ViewHideEvent = {
    view?: kendo$mobile$ui$View
  } & kendo$mobile$ui$ViewEvent;

  declare type kendo$mobile$ui$ViewInitEvent = {
    view?: kendo$mobile$ui$View
  } & kendo$mobile$ui$ViewEvent;

  declare type kendo$mobile$ui$ViewShowEvent = {
    view?: kendo$mobile$ui$View
  } & kendo$mobile$ui$ViewEvent;

  declare type kendo$mobile$ui$ViewTransitionStartEvent = {
    type?: string
  } & kendo$mobile$ui$ViewEvent;

  declare type kendo$mobile$ui$ViewTransitionEndEvent = {
    type?: string
  } & kendo$mobile$ui$ViewEvent;

  declare var npm$namespace$kendo$dataviz: {
    ChartAxis: typeof kendo$dataviz$ChartAxis,
    ChartPane: typeof kendo$dataviz$ChartPane,
    ChartPlotArea: typeof kendo$dataviz$ChartPlotArea,
    ChartPoint: typeof kendo$dataviz$ChartPoint,
    ChartSeries: typeof kendo$dataviz$ChartSeries,
    Navigator: typeof kendo$dataviz$Navigator,
    ui: typeof npm$namespace$kendo$dataviz$ui,
    map: typeof npm$namespace$kendo$dataviz$map,
    diagram: typeof npm$namespace$kendo$dataviz$diagram,
    drawing: typeof npm$namespace$kendo$dataviz$drawing,
    geometry: typeof npm$namespace$kendo$dataviz$geometry
  };

  declare var npm$namespace$kendo$dataviz$ui: {
    registerTheme: typeof kendo$dataviz$ui$registerTheme,
    plugin: typeof kendo$dataviz$ui$plugin,

    ArcGauge: typeof kendo$dataviz$ui$ArcGauge,
    Barcode: typeof kendo$dataviz$ui$Barcode,
    Chart: typeof kendo$dataviz$ui$Chart,
    Diagram: typeof kendo$dataviz$ui$Diagram,
    LinearGauge: typeof kendo$dataviz$ui$LinearGauge,
    Map: typeof kendo$dataviz$ui$Map,
    QRCode: typeof kendo$dataviz$ui$QRCode,
    RadialGauge: typeof kendo$dataviz$ui$RadialGauge,
    Sparkline: typeof kendo$dataviz$ui$Sparkline,
    StockChart: typeof kendo$dataviz$ui$StockChart,
    TreeMap: typeof kendo$dataviz$ui$TreeMap
  };
  declare function kendo$dataviz$ui$registerTheme(
    name: string,
    options: any
  ): void;

  declare function kendo$dataviz$ui$plugin(
    widget: typeof kendo$ui$Widget
  ): void;

  declare function kendo$dataviz$ui$plugin(widget: any): void;

  declare class kendo$dataviz$ui$ArcGauge mixins kendo$ui$Widget {
    static fn: kendo$dataviz$ui$ArcGauge;
    options: ui$ArcGaugeOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$dataviz$ui$ArcGauge;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ArcGaugeOptions
    ): this;
    destroy(): void;
    exportImage(options: any): JQueryPromise<any>;
    exportPDF(options?: kendo$drawing$PDFOptions): JQueryPromise<any>;
    exportSVG(options: any): JQueryPromise<any>;
    redraw(): void;
    resize(force?: boolean): void;
    setOptions(options: any): void;
    svg(): void;
    imageDataURL(): string;
    value(): void;
    value(): void;
  }

  declare interface kendo$dataviz$ui$ArcGaugeColor {
    color?: string;
    from?: number;
    to?: number;
  }

  declare interface kendo$dataviz$ui$ArcGaugeGaugeAreaBorder {
    color?: string;
    dashType?: string;
    opacity?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ArcGaugeGaugeAreaMargin {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }

  declare interface kendo$dataviz$ui$ArcGaugeGaugeArea {
    background?: string;
    border?: kendo$dataviz$ui$ArcGaugeGaugeAreaBorder;
    height?: number;
    margin?: kendo$dataviz$ui$ArcGaugeGaugeAreaMargin;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ArcGaugeScaleLabelsBorder {
    color?: string;
    dashType?: string;
    opacity?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ArcGaugeScaleLabelsMargin {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }

  declare interface kendo$dataviz$ui$ArcGaugeScaleLabelsPadding {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }

  declare interface kendo$dataviz$ui$ArcGaugeScaleLabels {
    background?: string;
    border?: kendo$dataviz$ui$ArcGaugeScaleLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$ArcGaugeScaleLabelsMargin;
    padding?: kendo$dataviz$ui$ArcGaugeScaleLabelsPadding;
    position?: string;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ArcGaugeScaleMajorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ArcGaugeScaleMinorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ArcGaugeScale {
    endAngle?: number;
    labels?: kendo$dataviz$ui$ArcGaugeScaleLabels;
    majorTicks?: kendo$dataviz$ui$ArcGaugeScaleMajorTicks;
    majorUnit?: number;
    max?: number;
    min?: number;
    minorTicks?: kendo$dataviz$ui$ArcGaugeScaleMinorTicks;
    minorUnit?: number;
    rangeLineCap?: string;
    rangePlaceholderColor?: string;
    rangeSize?: number;
    rangeDistance?: number;
    reverse?: boolean;
    startAngle?: number;
  }

  declare interface kendo$dataviz$ui$ArcGaugeExportImageOptions {
    width?: string;
    height?: string;
  }

  declare interface kendo$dataviz$ui$ArcGaugeExportSVGOptions {
    raw?: boolean;
  }

  declare interface kendo$dataviz$ui$ArcGaugeOptions {
    name?: string;
    color?: string;
    colors?: kendo$dataviz$ui$ArcGaugeColor[];
    gaugeArea?: kendo$dataviz$ui$ArcGaugeGaugeArea;
    opacity?: number;
    renderAs?: string;
    scale?: kendo$dataviz$ui$ArcGaugeScale;
    theme?: string;
    transitions?: boolean;
    value?: number;
  }

  declare interface kendo$dataviz$ui$ArcGaugeEvent {
    sender: kendo$dataviz$ui$ArcGauge;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$ui$Barcode mixins kendo$ui$Widget {
    static fn: kendo$dataviz$ui$Barcode;
    options: ui$BarcodeOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$dataviz$ui$Barcode;
    constructor(
      element: kendo$effects$Element,
      options?: ui$BarcodeOptions
    ): this;
    exportImage(options: any): JQueryPromise<any>;
    exportPDF(options?: kendo$drawing$PDFOptions): JQueryPromise<any>;
    exportSVG(options: any): JQueryPromise<any>;
    imageDataURL(): string;
    redraw(): void;
    resize(force?: boolean): void;
    svg(): string;
    value(): string;
    value(value: number): void;
    value(value: string): void;
  }

  declare interface kendo$dataviz$ui$BarcodeBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$BarcodePadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$BarcodeTextMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$BarcodeText {
    color?: string;
    font?: string;
    margin?: kendo$dataviz$ui$BarcodeTextMargin;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$BarcodeExportImageOptions {
    width?: string;
    height?: string;
  }

  declare interface kendo$dataviz$ui$BarcodeExportSVGOptions {
    raw?: boolean;
  }

  declare interface kendo$dataviz$ui$BarcodeOptions {
    name?: string;
    renderAs?: string;
    background?: string;
    border?: kendo$dataviz$ui$BarcodeBorder;
    checksum?: boolean;
    color?: string;
    height?: number;
    padding?: kendo$dataviz$ui$BarcodePadding;
    text?: kendo$dataviz$ui$BarcodeText;
    type?: string;
    value?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$BarcodeEvent {
    sender: kendo$dataviz$ui$Barcode;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$ui$Chart mixins kendo$ui$Widget {
    static fn: kendo$dataviz$ui$Chart;
    options: ui$ChartOptions;
    dataSource: kendo$data$DataSource;
    surface: kendo$drawing$Surface;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$dataviz$ui$Chart;
    constructor(
      element: kendo$effects$Element,
      options?: ui$ChartOptions
    ): this;
    destroy(): void;
    exportImage(options: any): JQueryPromise<any>;
    exportPDF(options?: kendo$drawing$PDFOptions): JQueryPromise<any>;
    exportSVG(options: any): JQueryPromise<any>;
    findAxisByName(name: string): kendo$dataviz$ChartAxis;
    findPaneByIndex(index: number): kendo$dataviz$ChartPane;
    findPaneByName(name: string): kendo$dataviz$ChartPane;
    findSeries(callback: Function): kendo$dataviz$ChartSeries;
    findSeriesByIndex(index: number): kendo$dataviz$ChartSeries;
    findSeriesByName(name: string): kendo$dataviz$ChartSeries;
    getAxis(name: string): kendo$dataviz$ChartAxis;
    hideTooltip(): void;
    plotArea(): kendo$dataviz$ChartPlotArea;
    redraw(): void;
    refresh(): void;
    resize(force?: boolean): void;
    saveAsPDF(): void;
    setDataSource(dataSource: kendo$data$DataSource): void;
    setOptions(options: any): void;
    showTooltip(filter: Function): void;
    showTooltip(filter: number): void;
    showTooltip(filter: Date): void;
    showTooltip(filter: string): void;
    svg(): string;
    imageDataURL(): string;
    toggleHighlight(show: boolean, options: any): void;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsCrosshairTooltipBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsCrosshairTooltipPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsCrosshairTooltip {
    background?: string;
    border?: kendo$dataviz$ui$ChartAxisDefaultsCrosshairTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: kendo$dataviz$ui$ChartAxisDefaultsCrosshairTooltipPadding;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsCrosshair {
    color?: string;
    dashType?: string;
    opacity?: number;
    tooltip?: kendo$dataviz$ui$ChartAxisDefaultsCrosshairTooltip;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsLabelsMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsLabelsPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsLabelsRotation {
    align?: string;
    angle?: number | string;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsLabels {
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$ChartAxisDefaultsLabelsMargin;
    mirror?: boolean;
    padding?: kendo$dataviz$ui$ChartAxisDefaultsLabelsPadding;
    rotation?:
      | string
      | number
      | kendo$dataviz$ui$ChartAxisDefaultsLabelsRotation;
    skip?: number;
    step?: number;
    template?: string | Function;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsLine {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsMajorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsMajorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsMinorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsMinorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsPlotBand {
    color?: string;
    from?: number;
    opacity?: number;
    to?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsTitlePadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaultsTitle {
    background?: string;
    border?: kendo$dataviz$ui$ChartAxisDefaultsTitleBorder;
    color?: string;
    font?: string;
    margin?: kendo$dataviz$ui$ChartAxisDefaultsTitleMargin;
    padding?: kendo$dataviz$ui$ChartAxisDefaultsTitlePadding;
    position?: string;
    rotation?: number;
    text?: string;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartAxisDefaults {
    background?: string;
    color?: string;
    crosshair?: kendo$dataviz$ui$ChartAxisDefaultsCrosshair;
    labels?: kendo$dataviz$ui$ChartAxisDefaultsLabels;
    line?: kendo$dataviz$ui$ChartAxisDefaultsLine;
    majorGridLines?: kendo$dataviz$ui$ChartAxisDefaultsMajorGridLines;
    majorTicks?: kendo$dataviz$ui$ChartAxisDefaultsMajorTicks;
    minorGridLines?: kendo$dataviz$ui$ChartAxisDefaultsMinorGridLines;
    minorTicks?: kendo$dataviz$ui$ChartAxisDefaultsMinorTicks;
    narrowRange?: boolean;
    pane?: string;
    plotBands?: kendo$dataviz$ui$ChartAxisDefaultsPlotBand[];
    reverse?: boolean;
    startAngle?: number;
    title?: kendo$dataviz$ui$ChartAxisDefaultsTitle;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemAutoBaseUnitSteps {
    milliseconds?: any;
    seconds?: any;
    minutes?: any;
    hours?: any;
    days?: any;
    weeks?: any;
    months?: any;
    years?: any;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemCrosshairTooltipBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemCrosshairTooltipPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemCrosshairTooltip {
    background?: string;
    border?: kendo$dataviz$ui$ChartCategoryAxisItemCrosshairTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: kendo$dataviz$ui$ChartCategoryAxisItemCrosshairTooltipPadding;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemCrosshair {
    color?: string;
    dashType?: string;
    opacity?: number;
    tooltip?: kendo$dataviz$ui$ChartCategoryAxisItemCrosshairTooltip;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemLabelsDateFormats {
    days?: string;
    hours?: string;
    months?: string;
    weeks?: string;
    years?: string;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemLabelsMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemLabelsPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemLabelsRotation {
    align?: string;
    angle?: number | string;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemLabels {
    background?: string;
    border?: kendo$dataviz$ui$ChartCategoryAxisItemLabelsBorder;
    color?: string;
    culture?: string;
    dateFormats?: kendo$dataviz$ui$ChartCategoryAxisItemLabelsDateFormats;
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$ChartCategoryAxisItemLabelsMargin;
    mirror?: boolean;
    padding?: kendo$dataviz$ui$ChartCategoryAxisItemLabelsPadding;
    rotation?:
      | string
      | number
      | kendo$dataviz$ui$ChartCategoryAxisItemLabelsRotation;
    skip?: number;
    step?: number;
    template?: string | Function;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemLine {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemMajorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemMajorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemMinorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemMinorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItemIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItemIcon {
    background?: string;
    border?: kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItemIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItemLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItemLabel {
    background?: string;
    border?: kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItemLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    text?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItemLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItem {
    value?: any;
    position?: string;
    icon?: kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItemIcon;
    label?: kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItemLabel;
    line?: kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItemLine;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$ChartCategoryAxisItemNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$ChartCategoryAxisItemNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotesLine {
    dashType?: string;
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemNotes {
    position?: string;
    icon?: kendo$dataviz$ui$ChartCategoryAxisItemNotesIcon;
    label?: kendo$dataviz$ui$ChartCategoryAxisItemNotesLabel;
    line?: kendo$dataviz$ui$ChartCategoryAxisItemNotesLine;
    data?: kendo$dataviz$ui$ChartCategoryAxisItemNotesDataItem[];
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemPlotBand {
    color?: string;
    from?: number;
    opacity?: number;
    to?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemSelectMousewheel {
    reverse?: boolean;
    zoom?: string;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemSelect {
    from?: any;
    max?: any;
    min?: any;
    mousewheel?: kendo$dataviz$ui$ChartCategoryAxisItemSelectMousewheel;
    to?: any;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemTitlePadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItemTitle {
    background?: string;
    border?: kendo$dataviz$ui$ChartCategoryAxisItemTitleBorder;
    color?: string;
    font?: string;
    margin?: kendo$dataviz$ui$ChartCategoryAxisItemTitleMargin;
    padding?: kendo$dataviz$ui$ChartCategoryAxisItemTitlePadding;
    position?: string;
    rotation?: number;
    text?: string;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartCategoryAxisItem {
    autoBaseUnitSteps?: kendo$dataviz$ui$ChartCategoryAxisItemAutoBaseUnitSteps;
    axisCrossingValue?: any | Date | any;
    background?: string;
    baseUnit?: string;
    baseUnitStep?: any;
    categories?: any;
    color?: string;
    crosshair?: kendo$dataviz$ui$ChartCategoryAxisItemCrosshair;
    field?: string;
    justified?: boolean;
    labels?: kendo$dataviz$ui$ChartCategoryAxisItemLabels;
    line?: kendo$dataviz$ui$ChartCategoryAxisItemLine;
    majorGridLines?: kendo$dataviz$ui$ChartCategoryAxisItemMajorGridLines;
    majorTicks?: kendo$dataviz$ui$ChartCategoryAxisItemMajorTicks;
    max?: any;
    maxDateGroups?: number;
    maxDivisions?: number;
    min?: any;
    minorGridLines?: kendo$dataviz$ui$ChartCategoryAxisItemMinorGridLines;
    minorTicks?: kendo$dataviz$ui$ChartCategoryAxisItemMinorTicks;
    name?: string;
    pane?: string;
    plotBands?: kendo$dataviz$ui$ChartCategoryAxisItemPlotBand[];
    reverse?: boolean;
    roundToBaseUnit?: boolean;
    select?: kendo$dataviz$ui$ChartCategoryAxisItemSelect;
    startAngle?: number;
    title?: kendo$dataviz$ui$ChartCategoryAxisItemTitle;
    type?: string;
    visible?: boolean;
    weekStartDay?: number;
    notes?: kendo$dataviz$ui$ChartCategoryAxisItemNotes;
  }

  declare interface kendo$dataviz$ui$ChartChartAreaBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartChartAreaMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartChartArea {
    background?: string;
    border?: kendo$dataviz$ui$ChartChartAreaBorder;
    height?: number;
    margin?: kendo$dataviz$ui$ChartChartAreaMargin;
    opacity?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartLegendBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartLegendInactiveItemsLabels {
    color?: string;
    font?: string;
    template?: string | Function;
  }

  declare interface kendo$dataviz$ui$ChartLegendInactiveItems {
    labels?: kendo$dataviz$ui$ChartLegendInactiveItemsLabels;
  }

  declare interface kendo$dataviz$ui$ChartLegendItem {
    cursor?: string;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartLegendLabelsMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartLegendLabelsPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartLegendLabels {
    color?: string;
    font?: string;
    margin?: kendo$dataviz$ui$ChartLegendLabelsMargin;
    padding?: kendo$dataviz$ui$ChartLegendLabelsPadding;
    template?: string | Function;
  }

  declare interface kendo$dataviz$ui$ChartLegendMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartLegendPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartLegend {
    align?: string;
    background?: string;
    border?: kendo$dataviz$ui$ChartLegendBorder;
    height?: number;
    inactiveItems?: kendo$dataviz$ui$ChartLegendInactiveItems;
    item?: kendo$dataviz$ui$ChartLegendItem;
    labels?: kendo$dataviz$ui$ChartLegendLabels;
    margin?: kendo$dataviz$ui$ChartLegendMargin;
    offsetX?: number;
    offsetY?: number;
    orientation?: string;
    padding?: kendo$dataviz$ui$ChartLegendPadding;
    position?: string;
    reverse?: boolean;
    spacing?: number;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartPaneBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartPaneMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartPanePadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartPaneTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartPaneTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartPaneTitle {
    background?: string;
    border?: kendo$dataviz$ui$ChartPaneTitleBorder;
    color?: string;
    font?: string;
    margin?: kendo$dataviz$ui$ChartPaneTitleMargin;
    position?: string;
    text?: string;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartPane {
    background?: string;
    border?: kendo$dataviz$ui$ChartPaneBorder;
    clip?: boolean;
    height?: number;
    margin?: kendo$dataviz$ui$ChartPaneMargin;
    name?: string;
    padding?: kendo$dataviz$ui$ChartPanePadding;
    title?: string | kendo$dataviz$ui$ChartPaneTitle;
  }

  declare interface kendo$dataviz$ui$ChartPannable {
    key?: string;
    lock?: string;
  }

  declare interface kendo$dataviz$ui$ChartPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface kendo$dataviz$ui$ChartPdf {
    author?: string;
    creator?: string;
    date?: Date;
    forceProxy?: boolean;
    fileName?: string;
    keywords?: string;
    landscape?: boolean;
    margin?: kendo$dataviz$ui$ChartPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface kendo$dataviz$ui$ChartPlotAreaBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartPlotAreaMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartPlotAreaPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartPlotArea {
    background?: string;
    border?: kendo$dataviz$ui$ChartPlotAreaBorder;
    margin?: kendo$dataviz$ui$ChartPlotAreaMargin;
    opacity?: number;
    padding?: kendo$dataviz$ui$ChartPlotAreaPadding;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemBorder {
    color?: string | Function;
    dashType?: string | Function;
    opacity?: number | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemConnectors {
    color?: string | Function;
    padding?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemErrorBarsLine {
    width?: number;
    dashType?: string;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemErrorBars {
    value?: string | number | any | Function;
    visual?: Function;
    xValue?: string | number | any | Function;
    yValue?: string | number | any | Function;
    endCaps?: boolean;
    color?: string;
    line?: kendo$dataviz$ui$ChartSeriesItemErrorBarsLine;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemExtremesBorder {
    color?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemExtremes {
    background?: string | Function;
    border?: Function | kendo$dataviz$ui$ChartSeriesItemExtremesBorder;
    size?: number | Function;
    type?: string | Function;
    rotation?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemHighlightBorder {
    color?: string;
    opacity?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemHighlightLine {
    dashType?: string;
    color?: string;
    opacity?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemHighlight {
    border?: kendo$dataviz$ui$ChartSeriesItemHighlightBorder;
    color?: string;
    line?: kendo$dataviz$ui$ChartSeriesItemHighlightLine;
    opacity?: number;
    toggle?: Function;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabelsBorder {
    color?: string | Function;
    dashType?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabelsFromBorder {
    color?: string | Function;
    dashType?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabelsFromMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabelsFromPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabelsFrom {
    background?: string | Function;
    border?: kendo$dataviz$ui$ChartSeriesItemLabelsFromBorder;
    color?: string | Function;
    font?: string | Function;
    format?: string | Function;
    margin?: kendo$dataviz$ui$ChartSeriesItemLabelsFromMargin;
    padding?: kendo$dataviz$ui$ChartSeriesItemLabelsFromPadding;
    position?: string | Function;
    template?: string | Function;
    visible?: boolean | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabelsMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabelsPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabelsToBorder {
    color?: string | Function;
    dashType?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabelsToMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabelsToPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabelsTo {
    background?: string | Function;
    border?: kendo$dataviz$ui$ChartSeriesItemLabelsToBorder;
    color?: string | Function;
    font?: string | Function;
    format?: string | Function;
    margin?: kendo$dataviz$ui$ChartSeriesItemLabelsToMargin;
    padding?: kendo$dataviz$ui$ChartSeriesItemLabelsToPadding;
    position?: string | Function;
    template?: string | Function;
    visible?: boolean | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLabels {
    align?: string;
    background?: string | Function;
    border?: kendo$dataviz$ui$ChartSeriesItemLabelsBorder;
    color?: string | Function;
    distance?: number;
    font?: string | Function;
    format?: string | Function;
    margin?: kendo$dataviz$ui$ChartSeriesItemLabelsMargin;
    padding?: kendo$dataviz$ui$ChartSeriesItemLabelsPadding;
    position?: string | Function;
    rotation?: string | number;
    template?: string | Function;
    visible?: boolean | Function;
    visual?: Function;
    from?: kendo$dataviz$ui$ChartSeriesItemLabelsFrom;
    to?: kendo$dataviz$ui$ChartSeriesItemLabelsTo;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemLine {
    color?: string;
    opacity?: number;
    width?: number;
    style?: string;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemMarkersBorder {
    color?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemMarkersFromBorder {
    color?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemMarkersFrom {
    background?: string | Function;
    border?: Function | kendo$dataviz$ui$ChartSeriesItemMarkersFromBorder;
    size?: number | Function;
    type?: string | Function;
    visible?: boolean | Function;
    visual?: Function;
    rotation?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemMarkersToBorder {
    color?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemMarkersTo {
    background?: string | Function;
    border?: Function | kendo$dataviz$ui$ChartSeriesItemMarkersToBorder;
    size?: number | Function;
    type?: string | Function;
    visible?: boolean | Function;
    visual?: Function;
    rotation?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemMarkers {
    background?: string | Function;
    border?: Function | kendo$dataviz$ui$ChartSeriesItemMarkersBorder;
    from?: kendo$dataviz$ui$ChartSeriesItemMarkersFrom;
    size?: number | Function;
    to?: kendo$dataviz$ui$ChartSeriesItemMarkersTo;
    type?: string | Function;
    visible?: boolean | Function;
    visual?: Function;
    rotation?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemNegativeValues {
    color?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$ChartSeriesItemNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$ChartSeriesItemNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemNotesLine {
    dashType?: string;
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemNotes {
    position?: string;
    icon?: kendo$dataviz$ui$ChartSeriesItemNotesIcon;
    label?: kendo$dataviz$ui$ChartSeriesItemNotesLabel;
    line?: kendo$dataviz$ui$ChartSeriesItemNotesLine;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemOutliersBorder {
    color?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemOutliers {
    background?: string | Function;
    border?: Function | kendo$dataviz$ui$ChartSeriesItemOutliersBorder;
    size?: number | Function;
    type?: string | Function;
    rotation?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemOverlay {
    gradient?: string;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemStack {
    type?: string;
    group?: string;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemTargetBorder {
    color?: string | Function;
    dashType?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemTargetLine {
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemTarget {
    border?: Function | kendo$dataviz$ui$ChartSeriesItemTargetBorder;
    color?: string | Function;
    line?: kendo$dataviz$ui$ChartSeriesItemTargetLine;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemTooltipPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItemTooltip {
    background?: string;
    border?: kendo$dataviz$ui$ChartSeriesItemTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: kendo$dataviz$ui$ChartSeriesItemTooltipPadding;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartSeriesItem {
    aggregate?: string | Function;
    axis?: string;
    border?: kendo$dataviz$ui$ChartSeriesItemBorder;
    categoryAxis?: string;
    categoryField?: string;
    closeField?: string;
    color?: string | Function;
    colorField?: string;
    connectors?: kendo$dataviz$ui$ChartSeriesItemConnectors;
    currentField?: string;
    dashType?: string;
    data?: any;
    downColor?: string | Function;
    downColorField?: string;
    segmentSpacing?: number;
    summaryField?: string;
    neckRatio?: number;
    dynamicSlope?: boolean;
    dynamicHeight?: boolean;
    errorBars?: kendo$dataviz$ui$ChartSeriesItemErrorBars;
    errorLowField?: string;
    errorHighField?: string;
    xErrorLowField?: string;
    xErrorHighField?: string;
    yErrorLowField?: string;
    yErrorHighField?: string;
    explodeField?: string;
    field?: string;
    fromField?: string;
    toField?: string;
    noteTextField?: string;
    lowerField?: string;
    q1Field?: string;
    medianField?: string;
    q3Field?: string;
    upperField?: string;
    meanField?: string;
    outliersField?: string;
    gap?: number;
    highField?: string;
    highlight?: kendo$dataviz$ui$ChartSeriesItemHighlight;
    holeSize?: number;
    labels?: kendo$dataviz$ui$ChartSeriesItemLabels;
    line?: string | kendo$dataviz$ui$ChartSeriesItemLine;
    lowField?: string;
    margin?: kendo$dataviz$ui$ChartSeriesItemMargin;
    markers?: kendo$dataviz$ui$ChartSeriesItemMarkers;
    outliers?: kendo$dataviz$ui$ChartSeriesItemOutliers;
    extremes?: kendo$dataviz$ui$ChartSeriesItemExtremes;
    maxSize?: number;
    minSize?: number;
    missingValues?: string;
    style?: string;
    name?: string;
    negativeColor?: string;
    negativeValues?: kendo$dataviz$ui$ChartSeriesItemNegativeValues;
    opacity?: number;
    openField?: string;
    overlay?: kendo$dataviz$ui$ChartSeriesItemOverlay;
    padding?: number;
    size?: number;
    sizeField?: string;
    spacing?: number;
    stack?: boolean | string | kendo$dataviz$ui$ChartSeriesItemStack;
    startAngle?: number;
    target?: kendo$dataviz$ui$ChartSeriesItemTarget;
    targetField?: string;
    tooltip?: kendo$dataviz$ui$ChartSeriesItemTooltip;
    type?: string;
    visible?: boolean;
    visibleInLegend?: boolean;
    visibleInLegendField?: string;
    visual?: Function;
    width?: number;
    xAxis?: string;
    xField?: string;
    yAxis?: string;
    yField?: string;
    notes?: kendo$dataviz$ui$ChartSeriesItemNotes;
    zIndex?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabelsFromBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabelsFromMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabelsFromPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabelsFrom {
    background?: string;
    border?: kendo$dataviz$ui$ChartSeriesDefaultsLabelsFromBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$ChartSeriesDefaultsLabelsFromMargin;
    padding?: kendo$dataviz$ui$ChartSeriesDefaultsLabelsFromPadding;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabelsMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabelsPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabelsToBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabelsToMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabelsToPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabelsTo {
    background?: string;
    border?: kendo$dataviz$ui$ChartSeriesDefaultsLabelsToBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$ChartSeriesDefaultsLabelsToMargin;
    padding?: kendo$dataviz$ui$ChartSeriesDefaultsLabelsToPadding;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsLabels {
    background?: string;
    border?: kendo$dataviz$ui$ChartSeriesDefaultsLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$ChartSeriesDefaultsLabelsMargin;
    padding?: kendo$dataviz$ui$ChartSeriesDefaultsLabelsPadding;
    rotation?: string | number;
    template?: string | Function;
    visible?: boolean;
    visual?: Function;
    from?: kendo$dataviz$ui$ChartSeriesDefaultsLabelsFrom;
    to?: kendo$dataviz$ui$ChartSeriesDefaultsLabelsTo;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$ChartSeriesDefaultsNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$ChartSeriesDefaultsNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsNotesLine {
    dashType?: string;
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsNotes {
    icon?: kendo$dataviz$ui$ChartSeriesDefaultsNotesIcon;
    label?: kendo$dataviz$ui$ChartSeriesDefaultsNotesLabel;
    line?: kendo$dataviz$ui$ChartSeriesDefaultsNotesLine;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsOverlay {
    gradient?: string;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsStack {
    type?: string;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsTooltipPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaultsTooltip {
    background?: string;
    border?: kendo$dataviz$ui$ChartSeriesDefaultsTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: kendo$dataviz$ui$ChartSeriesDefaultsTooltipPadding;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartSeriesDefaults {
    area?: any;
    bar?: any;
    border?: kendo$dataviz$ui$ChartSeriesDefaultsBorder;
    bubble?: any;
    candlestick?: any;
    column?: any;
    donut?: any;
    gap?: number;
    labels?: kendo$dataviz$ui$ChartSeriesDefaultsLabels;
    line?: any;
    ohlc?: any;
    overlay?: kendo$dataviz$ui$ChartSeriesDefaultsOverlay;
    pie?: any;
    rangeArea?: any;
    scatter?: any;
    scatterLine?: any;
    spacing?: number;
    stack?: boolean | kendo$dataviz$ui$ChartSeriesDefaultsStack;
    type?: string;
    tooltip?: kendo$dataviz$ui$ChartSeriesDefaultsTooltip;
    verticalArea?: any;
    verticalLine?: any;
    verticalRangeArea?: any;
    visual?: Function;
    notes?: kendo$dataviz$ui$ChartSeriesDefaultsNotes;
  }

  declare interface kendo$dataviz$ui$ChartTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartTitlePadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartTitle {
    align?: string;
    background?: string;
    border?: kendo$dataviz$ui$ChartTitleBorder;
    color?: string;
    font?: string;
    margin?: kendo$dataviz$ui$ChartTitleMargin;
    padding?: kendo$dataviz$ui$ChartTitlePadding;
    position?: string;
    text?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartTooltipPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartTooltip {
    background?: string;
    border?: kendo$dataviz$ui$ChartTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    opacity?: number;
    padding?: kendo$dataviz$ui$ChartTooltipPadding;
    shared?: boolean;
    sharedTemplate?: string | Function;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemCrosshairTooltipBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemCrosshairTooltipPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemCrosshairTooltip {
    background?: string;
    border?: kendo$dataviz$ui$ChartValueAxisItemCrosshairTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: kendo$dataviz$ui$ChartValueAxisItemCrosshairTooltipPadding;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemCrosshair {
    color?: string;
    dashType?: string;
    opacity?: number;
    tooltip?: kendo$dataviz$ui$ChartValueAxisItemCrosshairTooltip;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemLabelsMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemLabelsPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemLabelsRotation {
    align?: string;
    angle?: number | string;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemLabels {
    background?: string;
    border?: kendo$dataviz$ui$ChartValueAxisItemLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$ChartValueAxisItemLabelsMargin;
    mirror?: boolean;
    padding?: kendo$dataviz$ui$ChartValueAxisItemLabelsPadding;
    rotation?:
      | string
      | number
      | kendo$dataviz$ui$ChartValueAxisItemLabelsRotation;
    skip?: number;
    step?: number;
    template?: string | Function;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemLine {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemMajorGridLines {
    color?: string;
    dashType?: string;
    type?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemMajorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemMinorGridLines {
    color?: string;
    dashType?: string;
    type?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemMinorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotesDataItemIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotesDataItemIcon {
    background?: string;
    border?: kendo$dataviz$ui$ChartValueAxisItemNotesDataItemIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotesDataItemLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotesDataItemLabel {
    background?: string;
    border?: kendo$dataviz$ui$ChartValueAxisItemNotesDataItemLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    text?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotesDataItemLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotesDataItem {
    value?: any;
    position?: string;
    icon?: kendo$dataviz$ui$ChartValueAxisItemNotesDataItemIcon;
    label?: kendo$dataviz$ui$ChartValueAxisItemNotesDataItemLabel;
    line?: kendo$dataviz$ui$ChartValueAxisItemNotesDataItemLine;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$ChartValueAxisItemNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$ChartValueAxisItemNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotesLine {
    dashType?: string;
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemNotes {
    position?: string;
    icon?: kendo$dataviz$ui$ChartValueAxisItemNotesIcon;
    label?: kendo$dataviz$ui$ChartValueAxisItemNotesLabel;
    line?: kendo$dataviz$ui$ChartValueAxisItemNotesLine;
    data?: kendo$dataviz$ui$ChartValueAxisItemNotesDataItem[];
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemPlotBand {
    color?: string;
    from?: number;
    opacity?: number;
    to?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemTitlePadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItemTitle {
    background?: string;
    border?: kendo$dataviz$ui$ChartValueAxisItemTitleBorder;
    color?: string;
    font?: string;
    margin?: kendo$dataviz$ui$ChartValueAxisItemTitleMargin;
    padding?: kendo$dataviz$ui$ChartValueAxisItemTitlePadding;
    position?: string;
    rotation?: number;
    text?: string;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartValueAxisItem {
    axisCrossingValue?: any | Date | any;
    background?: string;
    color?: string;
    crosshair?: kendo$dataviz$ui$ChartValueAxisItemCrosshair;
    labels?: kendo$dataviz$ui$ChartValueAxisItemLabels;
    line?: kendo$dataviz$ui$ChartValueAxisItemLine;
    majorGridLines?: kendo$dataviz$ui$ChartValueAxisItemMajorGridLines;
    majorUnit?: number;
    max?: number;
    min?: number;
    minorGridLines?: kendo$dataviz$ui$ChartValueAxisItemMinorGridLines;
    majorTicks?: kendo$dataviz$ui$ChartValueAxisItemMajorTicks;
    minorTicks?: kendo$dataviz$ui$ChartValueAxisItemMinorTicks;
    minorUnit?: number;
    name?: string;
    narrowRange?: boolean;
    pane?: string;
    plotBands?: kendo$dataviz$ui$ChartValueAxisItemPlotBand[];
    reverse?: boolean;
    title?: kendo$dataviz$ui$ChartValueAxisItemTitle;
    type?: string;
    visible?: boolean;
    notes?: kendo$dataviz$ui$ChartValueAxisItemNotes;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemCrosshairTooltipBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemCrosshairTooltipPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemCrosshairTooltip {
    background?: string;
    border?: kendo$dataviz$ui$ChartXAxisItemCrosshairTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: kendo$dataviz$ui$ChartXAxisItemCrosshairTooltipPadding;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemCrosshair {
    color?: string;
    dashType?: string;
    opacity?: number;
    tooltip?: kendo$dataviz$ui$ChartXAxisItemCrosshairTooltip;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemLabelsDateFormats {
    days?: string;
    hours?: string;
    months?: string;
    weeks?: string;
    years?: string;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemLabelsMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemLabelsPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemLabelsRotation {
    align?: string;
    angle?: number | string;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemLabels {
    background?: string;
    border?: kendo$dataviz$ui$ChartXAxisItemLabelsBorder;
    color?: string;
    culture?: string;
    dateFormats?: kendo$dataviz$ui$ChartXAxisItemLabelsDateFormats;
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$ChartXAxisItemLabelsMargin;
    mirror?: boolean;
    padding?: kendo$dataviz$ui$ChartXAxisItemLabelsPadding;
    rotation?: string | number | kendo$dataviz$ui$ChartXAxisItemLabelsRotation;
    skip?: number;
    step?: number;
    template?: string | Function;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemLine {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemMajorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemMajorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemMinorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemMinorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotesDataItemIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotesDataItemIcon {
    background?: string;
    border?: kendo$dataviz$ui$ChartXAxisItemNotesDataItemIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotesDataItemLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotesDataItemLabel {
    background?: string;
    border?: kendo$dataviz$ui$ChartXAxisItemNotesDataItemLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    text?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotesDataItemLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotesDataItem {
    value?: any;
    position?: string;
    icon?: kendo$dataviz$ui$ChartXAxisItemNotesDataItemIcon;
    label?: kendo$dataviz$ui$ChartXAxisItemNotesDataItemLabel;
    line?: kendo$dataviz$ui$ChartXAxisItemNotesDataItemLine;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$ChartXAxisItemNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$ChartXAxisItemNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotesLine {
    dashType?: string;
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemNotes {
    position?: string;
    icon?: kendo$dataviz$ui$ChartXAxisItemNotesIcon;
    label?: kendo$dataviz$ui$ChartXAxisItemNotesLabel;
    line?: kendo$dataviz$ui$ChartXAxisItemNotesLine;
    data?: kendo$dataviz$ui$ChartXAxisItemNotesDataItem[];
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemPlotBand {
    color?: string;
    from?: number;
    opacity?: number;
    to?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemTitlePadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItemTitle {
    background?: string;
    border?: kendo$dataviz$ui$ChartXAxisItemTitleBorder;
    color?: string;
    font?: string;
    margin?: kendo$dataviz$ui$ChartXAxisItemTitleMargin;
    padding?: kendo$dataviz$ui$ChartXAxisItemTitlePadding;
    position?: string;
    rotation?: number;
    text?: string;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartXAxisItem {
    axisCrossingValue?: any | Date | any;
    background?: string;
    baseUnit?: string;
    color?: string;
    crosshair?: kendo$dataviz$ui$ChartXAxisItemCrosshair;
    labels?: kendo$dataviz$ui$ChartXAxisItemLabels;
    line?: kendo$dataviz$ui$ChartXAxisItemLine;
    majorGridLines?: kendo$dataviz$ui$ChartXAxisItemMajorGridLines;
    minorGridLines?: kendo$dataviz$ui$ChartXAxisItemMinorGridLines;
    minorTicks?: kendo$dataviz$ui$ChartXAxisItemMinorTicks;
    majorTicks?: kendo$dataviz$ui$ChartXAxisItemMajorTicks;
    majorUnit?: number;
    max?: any;
    min?: any;
    minorUnit?: number;
    name?: string;
    narrowRange?: boolean;
    pane?: string;
    plotBands?: kendo$dataviz$ui$ChartXAxisItemPlotBand[];
    reverse?: boolean;
    startAngle?: number;
    title?: kendo$dataviz$ui$ChartXAxisItemTitle;
    type?: string;
    visible?: boolean;
    notes?: kendo$dataviz$ui$ChartXAxisItemNotes;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemCrosshairTooltipBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemCrosshairTooltipPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemCrosshairTooltip {
    background?: string;
    border?: kendo$dataviz$ui$ChartYAxisItemCrosshairTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: kendo$dataviz$ui$ChartYAxisItemCrosshairTooltipPadding;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemCrosshair {
    color?: string;
    dashType?: string;
    opacity?: number;
    tooltip?: kendo$dataviz$ui$ChartYAxisItemCrosshairTooltip;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemLabelsDateFormats {
    days?: string;
    hours?: string;
    months?: string;
    weeks?: string;
    years?: string;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemLabelsMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemLabelsPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemLabelsRotation {
    align?: string;
    angle?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemLabels {
    background?: string;
    border?: kendo$dataviz$ui$ChartYAxisItemLabelsBorder;
    color?: string;
    culture?: string;
    dateFormats?: kendo$dataviz$ui$ChartYAxisItemLabelsDateFormats;
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$ChartYAxisItemLabelsMargin;
    mirror?: boolean;
    padding?: kendo$dataviz$ui$ChartYAxisItemLabelsPadding;
    rotation?: number | kendo$dataviz$ui$ChartYAxisItemLabelsRotation;
    skip?: number;
    step?: number;
    template?: string | Function;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemLine {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemMajorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemMajorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemMinorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemMinorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotesDataItemIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotesDataItemIcon {
    background?: string;
    border?: kendo$dataviz$ui$ChartYAxisItemNotesDataItemIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotesDataItemLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotesDataItemLabel {
    background?: string;
    border?: kendo$dataviz$ui$ChartYAxisItemNotesDataItemLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    text?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotesDataItemLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotesDataItem {
    value?: any;
    position?: string;
    icon?: kendo$dataviz$ui$ChartYAxisItemNotesDataItemIcon;
    label?: kendo$dataviz$ui$ChartYAxisItemNotesDataItemLabel;
    line?: kendo$dataviz$ui$ChartYAxisItemNotesDataItemLine;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$ChartYAxisItemNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$ChartYAxisItemNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotesLine {
    dashType?: string;
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemNotes {
    position?: string;
    icon?: kendo$dataviz$ui$ChartYAxisItemNotesIcon;
    label?: kendo$dataviz$ui$ChartYAxisItemNotesLabel;
    line?: kendo$dataviz$ui$ChartYAxisItemNotesLine;
    data?: kendo$dataviz$ui$ChartYAxisItemNotesDataItem[];
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemPlotBand {
    color?: string;
    from?: number;
    opacity?: number;
    to?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemTitlePadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItemTitle {
    background?: string;
    border?: kendo$dataviz$ui$ChartYAxisItemTitleBorder;
    color?: string;
    font?: string;
    margin?: kendo$dataviz$ui$ChartYAxisItemTitleMargin;
    padding?: kendo$dataviz$ui$ChartYAxisItemTitlePadding;
    position?: string;
    rotation?: number;
    text?: string;
    visible?: boolean;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$ChartYAxisItem {
    axisCrossingValue?: any | Date | any;
    background?: string;
    baseUnit?: string;
    color?: string;
    crosshair?: kendo$dataviz$ui$ChartYAxisItemCrosshair;
    labels?: kendo$dataviz$ui$ChartYAxisItemLabels;
    line?: kendo$dataviz$ui$ChartYAxisItemLine;
    majorGridLines?: kendo$dataviz$ui$ChartYAxisItemMajorGridLines;
    minorGridLines?: kendo$dataviz$ui$ChartYAxisItemMinorGridLines;
    minorTicks?: kendo$dataviz$ui$ChartYAxisItemMinorTicks;
    majorTicks?: kendo$dataviz$ui$ChartYAxisItemMajorTicks;
    majorUnit?: number;
    max?: any;
    min?: any;
    minorUnit?: number;
    name?: string;
    narrowRange?: boolean;
    pane?: string;
    plotBands?: kendo$dataviz$ui$ChartYAxisItemPlotBand[];
    reverse?: boolean;
    title?: kendo$dataviz$ui$ChartYAxisItemTitle;
    type?: string;
    visible?: boolean;
    notes?: kendo$dataviz$ui$ChartYAxisItemNotes;
  }

  declare interface kendo$dataviz$ui$ChartZoomableMousewheel {
    lock?: string;
  }

  declare interface kendo$dataviz$ui$ChartZoomableSelection {
    key?: string;
    lock?: string;
  }

  declare interface kendo$dataviz$ui$ChartZoomable {
    mousewheel?: boolean | kendo$dataviz$ui$ChartZoomableMousewheel;
    selection?: boolean | kendo$dataviz$ui$ChartZoomableSelection;
  }

  declare interface kendo$dataviz$ui$ChartExportImageOptions {
    width?: string;
    height?: string;
    cors?: string;
  }

  declare interface kendo$dataviz$ui$ChartExportSVGOptions {
    raw?: boolean;
  }

  declare interface kendo$dataviz$ui$ChartToggleHighlightOptions {
    series?: string;
    category?: string;
  }

  declare interface kendo$dataviz$ui$ChartSeriesClickEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$ChartSeriesHoverEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$ChartSeriesOverEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$ChartSeriesLeaveEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$ChartOptions {
    name?: string;
    autoBind?: boolean;
    axisDefaults?: kendo$dataviz$ui$ChartAxisDefaults;
    categoryAxis?:
      | kendo$dataviz$ui$ChartCategoryAxisItem
      | kendo$dataviz$ui$ChartCategoryAxisItem[];
    chartArea?: kendo$dataviz$ui$ChartChartArea;
    dataSource?: any | any | kendo$data$DataSource;
    legend?: kendo$dataviz$ui$ChartLegend;
    panes?: kendo$dataviz$ui$ChartPane[];
    pannable?: boolean | kendo$dataviz$ui$ChartPannable;
    pdf?: kendo$dataviz$ui$ChartPdf;
    persistSeriesVisibility?: boolean;
    plotArea?: kendo$dataviz$ui$ChartPlotArea;
    renderAs?: string;
    series?: kendo$dataviz$ui$ChartSeriesItem[];
    seriesColors?: any;
    seriesDefaults?: kendo$dataviz$ui$ChartSeriesDefaults;
    theme?: string;
    title?: string | kendo$dataviz$ui$ChartTitle;
    tooltip?: kendo$dataviz$ui$ChartTooltip;
    transitions?: boolean;
    valueAxis?:
      | kendo$dataviz$ui$ChartValueAxisItem
      | kendo$dataviz$ui$ChartValueAxisItem[];
    xAxis?: kendo$dataviz$ui$ChartXAxisItem | kendo$dataviz$ui$ChartXAxisItem[];
    yAxis?: kendo$dataviz$ui$ChartYAxisItem | kendo$dataviz$ui$ChartYAxisItem[];
    zoomable?: boolean | kendo$dataviz$ui$ChartZoomable;
    axisLabelClick?: (e: ui$ChartAxisLabelClickEvent) => void;
    dataBound?: (e: ui$ChartDataBoundEvent) => void;
    drag?: (e: ui$ChartDragEvent) => void;
    dragEnd?: (e: ui$ChartDragEndEvent) => void;
    dragStart?: (e: ui$ChartDragStartEvent) => void;
    legendItemClick?: (e: ui$ChartLegendItemClickEvent) => void;
    legendItemHover?: (e: ui$ChartLegendItemHoverEvent) => void;
    legendItemLeave?: (e: ui$ChartLegendItemLeaveEvent) => void;
    noteClick?: (e: ui$ChartNoteClickEvent) => void;
    noteHover?: (e: ui$ChartNoteHoverEvent) => void;
    noteLeave?: (e: ui$ChartNoteLeaveEvent) => void;
    paneRender?: (e: ui$ChartPaneRenderEvent) => void;
    plotAreaClick?: (e: ui$ChartPlotAreaClickEvent) => void;
    plotAreaHover?: (e: ui$ChartPlotAreaHoverEvent) => void;
    plotAreaLeave?: (e: ui$ChartPlotAreaLeaveEvent) => void;
    render?: (e: ui$ChartRenderEvent) => void;
    select?: (e: ui$ChartSelectEvent) => void;
    selectEnd?: (e: ui$ChartSelectEndEvent) => void;
    selectStart?: (e: ui$ChartSelectStartEvent) => void;
    seriesClick?: (e: ui$ChartSeriesClickEvent) => void;
    seriesHover?: (e: ui$ChartSeriesHoverEvent) => void;
    seriesOver?: (e: ui$ChartSeriesOverEvent) => void;
    seriesLeave?: (e: ui$ChartSeriesLeaveEvent) => void;
    zoom?: (e: ui$ChartZoomEvent) => void;
    zoomEnd?: (e: ui$ChartZoomEndEvent) => void;
    zoomStart?: (e: ui$ChartZoomStartEvent) => void;
  }

  declare interface kendo$dataviz$ui$ChartEvent {
    sender: kendo$dataviz$ui$Chart;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$dataviz$ui$ChartAxisLabelClickEvent = {
    axis?: any,
    dataItem?: any,
    element?: any,
    index?: any,
    text?: string,
    value?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartDataBoundEvent = {} & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartDragEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartDragEndEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartDragStartEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartLegendItemClickEvent = {
    pointIndex?: number,
    series?: any,
    seriesIndex?: number,
    text?: string,
    element?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartLegendItemHoverEvent = {
    element?: any,
    pointIndex?: number,
    series?: any,
    seriesIndex?: number,
    text?: string
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartLegendItemLeaveEvent = {
    element?: any,
    pointIndex?: number,
    series?: any,
    seriesIndex?: number,
    text?: string
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartNoteClickEvent = {
    category?: any,
    dataItem?: any,
    element?: any,
    series?: any,
    value?: any,
    visual?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartNoteHoverEvent = {
    category?: any,
    dataItem?: any,
    element?: any,
    series?: any,
    value?: any,
    visual?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartNoteLeaveEvent = {
    category?: any,
    dataItem?: any,
    element?: any,
    series?: any,
    value?: any,
    visual?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartPaneRenderEvent = {
    pane?: kendo$dataviz$ChartPane,
    name?: string,
    index?: number
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartPlotAreaClickEvent = {
    category?: any,
    element?: any,
    originalEvent?: any,
    value?: any,
    x?: any,
    y?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartPlotAreaHoverEvent = {
    category?: any,
    element?: any,
    originalEvent?: any,
    value?: any,
    x?: any,
    y?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartPlotAreaLeaveEvent = {} & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartRenderEvent = {} & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartSelectEvent = {
    axis?: any,
    from?: any,
    to?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartSelectEndEvent = {
    axis?: any,
    from?: any,
    to?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartSelectStartEvent = {
    axis?: any,
    from?: any,
    to?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartSeriesClickEvent = {
    category?: any,
    dataItem?: any,
    element?: any,
    originalEvent?: any,
    percentage?: any,
    series?: kendo$dataviz$ui$ChartSeriesClickEventSeries,
    stackValue?: any,
    value?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartSeriesHoverEvent = {
    category?: any,
    categoryPoints?: any,
    dataItem?: any,
    element?: any,
    originalEvent?: any,
    percentage?: any,
    series?: kendo$dataviz$ui$ChartSeriesHoverEventSeries,
    stackValue?: any,
    value?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartSeriesOverEvent = {
    category?: any,
    dataItem?: any,
    element?: any,
    originalEvent?: any,
    percentage?: any,
    series?: kendo$dataviz$ui$ChartSeriesOverEventSeries,
    stackValue?: any,
    value?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartSeriesLeaveEvent = {
    category?: any,
    dataItem?: any,
    element?: any,
    originalEvent?: any,
    percentage?: any,
    series?: kendo$dataviz$ui$ChartSeriesLeaveEventSeries,
    stackValue?: any,
    value?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartZoomEvent = {
    axisRanges?: any,
    delta?: number,
    originalEvent?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartZoomEndEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare type kendo$dataviz$ui$ChartZoomStartEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$ChartEvent;

  declare class kendo$dataviz$ui$Diagram mixins kendo$ui$Widget {
    static fn: kendo$dataviz$ui$Diagram;
    options: ui$DiagramOptions;
    dataSource: kendo$data$DataSource;
    connections: kendo$dataviz$diagram$Connection[];
    connectionsDataSource: kendo$data$DataSource;
    shapes: kendo$dataviz$diagram$Shape[];
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$dataviz$ui$Diagram;
    constructor(
      element: kendo$effects$Element,
      options?: ui$DiagramOptions
    ): this;
    addConnection(connection: any, undoable: boolean): void;
    addShape(obj: any, undoable: boolean): kendo$dataviz$diagram$Shape;
    alignShapes(direction: string): void;
    boundingBox(items: any): kendo$dataviz$diagram$Rect;
    bringIntoView(obj: any, options: any): void;
    cancelEdit(): void;
    clear(): void;
    connect(source: any, target: any, options: any): void;
    connected(source: any, target: any): void;
    copy(): void;
    createConnection(item: any): void;
    createShape(item: any): void;
    cut(): void;
    destroy(): void;
    documentToModel(point: any): any;
    documentToView(point: any): any;
    edit(item: any): void;
    exportImage(options: any): JQueryPromise<any>;
    exportPDF(options?: kendo$drawing$PDFOptions): JQueryPromise<any>;
    exportSVG(options: any): JQueryPromise<any>;
    focus(): void;
    getConnectionByModelId(id: string): kendo$dataviz$diagram$Connection;
    getConnectionByModelId(id: number): kendo$dataviz$diagram$Connection;
    getConnectionByModelUid(uid: string): kendo$dataviz$diagram$Connection;
    getShapeById(id: string): any;
    getShapeByModelId(id: string): kendo$dataviz$diagram$Shape;
    getShapeByModelId(id: number): kendo$dataviz$diagram$Shape;
    getShapeByModelUid(uid: string): kendo$dataviz$diagram$Shape;
    layerToModel(point: any): any;
    layout(options: any): void;
    load(json: string): void;
    modelToDocument(point: any): any;
    modelToLayer(point: any): any;
    modelToView(point: any): any;
    pan(pan: any): void;
    paste(): void;
    redo(): void;
    remove(items: any, undoable: boolean): void;
    resize(): void;
    save(): void;
    saveAsPdf(): JQueryPromise<any>;
    saveEdit(): void;
    select(): any;
    select(elements: kendo$dataviz$diagram$Connection, options: any): void;
    select(elements: kendo$dataviz$diagram$Shape, options: any): void;
    select(elements: any, options: any): void;
    selectAll(): void;
    selectArea(rect: kendo$dataviz$diagram$Rect): void;
    setConnectionsDataSource(dataSource: kendo$data$DataSource): void;
    setDataSource(dataSource: kendo$data$DataSource): void;
    toBack(items: any, undoable: boolean): void;
    toFront(items: any, undoable: boolean): void;
    transformPoint(p: any): void;
    transformRect(r: any): void;
    undo(): void;
    viewToDocument(
      point: kendo$dataviz$diagram$Point
    ): kendo$dataviz$diagram$Point;
    viewToModel(
      point: kendo$dataviz$diagram$Point
    ): kendo$dataviz$diagram$Point;
    viewport(): kendo$dataviz$diagram$Rect;
    zoom(): number;
    zoom(zoom: number, point: kendo$dataviz$diagram$Point): void;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsContent {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    fontWeight?: string;
    template?: string | Function;
    text?: string;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsEditableTool {
    name?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsEditable {
    drag?: boolean;
    remove?: boolean;
    tools?: kendo$dataviz$ui$DiagramConnectionDefaultsEditableTool[];
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsEndCapFill {
    color?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsEndCapStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsEndCap {
    fill?: string | kendo$dataviz$ui$DiagramConnectionDefaultsEndCapFill;
    stroke?: string | kendo$dataviz$ui$DiagramConnectionDefaultsEndCapStroke;
    type?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsHoverStroke {
    color?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsHover {
    stroke?: kendo$dataviz$ui$DiagramConnectionDefaultsHoverStroke;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsSelectionHandlesFill {
    color?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsSelectionHandlesStroke {
    color?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsSelectionHandles {
    fill?:
      | string
      | kendo$dataviz$ui$DiagramConnectionDefaultsSelectionHandlesFill;
    stroke?: kendo$dataviz$ui$DiagramConnectionDefaultsSelectionHandlesStroke;
    width?: number;
    height?: number;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsSelection {
    handles?: kendo$dataviz$ui$DiagramConnectionDefaultsSelectionHandles;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsStartCapFill {
    color?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsStartCapStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsStartCap {
    fill?: string | kendo$dataviz$ui$DiagramConnectionDefaultsStartCapFill;
    stroke?: string | kendo$dataviz$ui$DiagramConnectionDefaultsStartCapStroke;
    type?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaultsStroke {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionDefaults {
    content?: kendo$dataviz$ui$DiagramConnectionDefaultsContent;
    editable?: boolean | kendo$dataviz$ui$DiagramConnectionDefaultsEditable;
    endCap?: string | kendo$dataviz$ui$DiagramConnectionDefaultsEndCap;
    fromConnector?: string;
    hover?: kendo$dataviz$ui$DiagramConnectionDefaultsHover;
    selectable?: boolean;
    selection?: kendo$dataviz$ui$DiagramConnectionDefaultsSelection;
    startCap?: string | kendo$dataviz$ui$DiagramConnectionDefaultsStartCap;
    stroke?: kendo$dataviz$ui$DiagramConnectionDefaultsStroke;
    toConnector?: string;
    type?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionContent {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    fontWeight?: string;
    template?: string | Function;
    text?: string;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionEditableTool {
    name?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionEditable {
    tools?: kendo$dataviz$ui$DiagramConnectionEditableTool[];
  }

  declare interface kendo$dataviz$ui$DiagramConnectionEndCapFill {
    color?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionEndCapStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionEndCap {
    fill?: string | kendo$dataviz$ui$DiagramConnectionEndCapFill;
    stroke?: string | kendo$dataviz$ui$DiagramConnectionEndCapStroke;
    type?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionFrom {
    x?: number;
    y?: number;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionHoverStroke {
    color?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionHover {
    stroke?: kendo$dataviz$ui$DiagramConnectionHoverStroke;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionPoint {
    x?: number;
    y?: number;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionSelectionHandlesFill {
    color?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionSelectionHandlesStroke {
    color?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionSelectionHandles {
    fill?: string | kendo$dataviz$ui$DiagramConnectionSelectionHandlesFill;
    stroke?: kendo$dataviz$ui$DiagramConnectionSelectionHandlesStroke;
    width?: number;
    height?: number;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionSelection {
    handles?: kendo$dataviz$ui$DiagramConnectionSelectionHandles;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionStartCapFill {
    color?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionStartCapStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionStartCap {
    fill?: string | kendo$dataviz$ui$DiagramConnectionStartCapFill;
    stroke?: string | kendo$dataviz$ui$DiagramConnectionStartCapStroke;
    type?: string;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionStroke {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramConnectionTo {
    x?: number;
    y?: number;
  }

  declare interface kendo$dataviz$ui$DiagramConnection {
    content?: kendo$dataviz$ui$DiagramConnectionContent;
    editable?: boolean | kendo$dataviz$ui$DiagramConnectionEditable;
    endCap?: string | kendo$dataviz$ui$DiagramConnectionEndCap;
    from?: string | kendo$dataviz$ui$DiagramConnectionFrom;
    fromConnector?: string;
    hover?: kendo$dataviz$ui$DiagramConnectionHover;
    points?: kendo$dataviz$ui$DiagramConnectionPoint[];
    selection?: kendo$dataviz$ui$DiagramConnectionSelection;
    startCap?: string | kendo$dataviz$ui$DiagramConnectionStartCap;
    stroke?: kendo$dataviz$ui$DiagramConnectionStroke;
    to?: string | kendo$dataviz$ui$DiagramConnectionTo;
    toConnector?: string;
    type?: string;
  }

  declare interface kendo$dataviz$ui$DiagramEditableDragSnap {
    size?: number;
  }

  declare interface kendo$dataviz$ui$DiagramEditableDrag {
    snap?: boolean | kendo$dataviz$ui$DiagramEditableDragSnap;
  }

  declare interface kendo$dataviz$ui$DiagramEditableResizeHandlesFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramEditableResizeHandlesHoverFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramEditableResizeHandlesHoverStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramEditableResizeHandlesHover {
    fill?: string | kendo$dataviz$ui$DiagramEditableResizeHandlesHoverFill;
    stroke?: kendo$dataviz$ui$DiagramEditableResizeHandlesHoverStroke;
  }

  declare interface kendo$dataviz$ui$DiagramEditableResizeHandlesStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramEditableResizeHandles {
    fill?: string | kendo$dataviz$ui$DiagramEditableResizeHandlesFill;
    height?: number;
    hover?: kendo$dataviz$ui$DiagramEditableResizeHandlesHover;
    stroke?: kendo$dataviz$ui$DiagramEditableResizeHandlesStroke;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramEditableResize {
    handles?: kendo$dataviz$ui$DiagramEditableResizeHandles;
  }

  declare interface kendo$dataviz$ui$DiagramEditableRotateFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramEditableRotateStroke {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramEditableRotate {
    fill?: kendo$dataviz$ui$DiagramEditableRotateFill;
    stroke?: kendo$dataviz$ui$DiagramEditableRotateStroke;
  }

  declare interface kendo$dataviz$ui$DiagramEditableTool {
    name?: string;
    step?: number;
  }

  declare interface kendo$dataviz$ui$DiagramEditable {
    connectionTemplate?: string | Function;
    drag?: boolean | kendo$dataviz$ui$DiagramEditableDrag;
    remove?: boolean;
    resize?: boolean | kendo$dataviz$ui$DiagramEditableResize;
    rotate?: boolean | kendo$dataviz$ui$DiagramEditableRotate;
    shapeTemplate?: string | Function;
    tools?: kendo$dataviz$ui$DiagramEditableTool[];
  }

  declare interface kendo$dataviz$ui$DiagramLayoutGrid {
    componentSpacingX?: number;
    componentSpacingY?: number;
    offsetX?: number;
    offsetY?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramLayout {
    endRadialAngle?: number;
    grid?: kendo$dataviz$ui$DiagramLayoutGrid;
    horizontalSeparation?: number;
    iterations?: number;
    layerSeparation?: number;
    nodeDistance?: number;
    radialFirstLevelSeparation?: number;
    radialSeparation?: number;
    startRadialAngle?: number;
    subtype?: string;
    tipOverTreeStartLevel?: number;
    type?: string;
    underneathHorizontalOffset?: number;
    underneathVerticalSeparation?: number;
    underneathVerticalTopOffset?: number;
    verticalSeparation?: number;
  }

  declare interface kendo$dataviz$ui$DiagramPannable {
    key?: string;
  }

  declare interface kendo$dataviz$ui$DiagramPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface kendo$dataviz$ui$DiagramPdf {
    author?: string;
    creator?: string;
    date?: Date;
    fileName?: string;
    forceProxy?: boolean;
    keywords?: string;
    landscape?: boolean;
    margin?: kendo$dataviz$ui$DiagramPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface kendo$dataviz$ui$DiagramSelectableStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramSelectable {
    key?: string;
    multiple?: boolean;
    stroke?: kendo$dataviz$ui$DiagramSelectableStroke;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaultsFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaultsHoverFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaultsHoverStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaultsHover {
    fill?:
      | string
      | kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaultsHoverFill;
    stroke?:
      | string
      | kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaultsHoverStroke;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaultsStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaults {
    width?: number;
    height?: number;
    hover?: kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaultsHover;
    fill?: string | kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaultsFill;
    stroke?:
      | string
      | kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaultsStroke;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnectorFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnectorHoverFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnectorHoverStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnectorHover {
    fill?: string | kendo$dataviz$ui$DiagramShapeDefaultsConnectorHoverFill;
    stroke?: string | kendo$dataviz$ui$DiagramShapeDefaultsConnectorHoverStroke;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnectorStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsConnector {
    name?: string;
    position?: Function;
    width?: number;
    height?: number;
    hover?: kendo$dataviz$ui$DiagramShapeDefaultsConnectorHover;
    fill?: string | kendo$dataviz$ui$DiagramShapeDefaultsConnectorFill;
    stroke?: string | kendo$dataviz$ui$DiagramShapeDefaultsConnectorStroke;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsContent {
    align?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    fontWeight?: string;
    template?: string | Function;
    text?: string;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsEditableTool {
    name?: string;
    step?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsEditable {
    connect?: boolean;
    drag?: boolean;
    remove?: boolean;
    tools?: kendo$dataviz$ui$DiagramShapeDefaultsEditableTool[];
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsFillGradientStop {
    offset?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsFillGradient {
    type?: string;
    center?: any;
    radius?: number;
    start?: any;
    end?: any;
    stops?: kendo$dataviz$ui$DiagramShapeDefaultsFillGradientStop[];
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsFill {
    color?: string;
    opacity?: number;
    gradient?: kendo$dataviz$ui$DiagramShapeDefaultsFillGradient;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsHoverFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsHover {
    fill?: string | kendo$dataviz$ui$DiagramShapeDefaultsHoverFill;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsRotation {
    angle?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaultsStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeDefaults {
    connectors?: kendo$dataviz$ui$DiagramShapeDefaultsConnector[];
    connectorDefaults?: kendo$dataviz$ui$DiagramShapeDefaultsConnectorDefaults;
    content?: kendo$dataviz$ui$DiagramShapeDefaultsContent;
    editable?: boolean | kendo$dataviz$ui$DiagramShapeDefaultsEditable;
    fill?: string | kendo$dataviz$ui$DiagramShapeDefaultsFill;
    height?: number;
    hover?: kendo$dataviz$ui$DiagramShapeDefaultsHover;
    minHeight?: number;
    minWidth?: number;
    path?: string;
    rotation?: kendo$dataviz$ui$DiagramShapeDefaultsRotation;
    selectable?: boolean;
    source?: string;
    stroke?: kendo$dataviz$ui$DiagramShapeDefaultsStroke;
    type?: string;
    visual?: Function;
    width?: number;
    x?: number;
    y?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnectorDefaultsFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnectorDefaultsHoverFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnectorDefaultsHoverStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnectorDefaultsHover {
    fill?: string | kendo$dataviz$ui$DiagramShapeConnectorDefaultsHoverFill;
    stroke?: string | kendo$dataviz$ui$DiagramShapeConnectorDefaultsHoverStroke;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnectorDefaultsStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnectorDefaults {
    width?: number;
    height?: number;
    hover?: kendo$dataviz$ui$DiagramShapeConnectorDefaultsHover;
    fill?: string | kendo$dataviz$ui$DiagramShapeConnectorDefaultsFill;
    stroke?: string | kendo$dataviz$ui$DiagramShapeConnectorDefaultsStroke;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnectorFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnectorHoverFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnectorHoverStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnectorHover {
    fill?: string | kendo$dataviz$ui$DiagramShapeConnectorHoverFill;
    stroke?: string | kendo$dataviz$ui$DiagramShapeConnectorHoverStroke;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnectorStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeConnector {
    description?: string;
    name?: string;
    position?: Function;
    width?: number;
    height?: number;
    hover?: kendo$dataviz$ui$DiagramShapeConnectorHover;
    fill?: string | kendo$dataviz$ui$DiagramShapeConnectorFill;
    stroke?: string | kendo$dataviz$ui$DiagramShapeConnectorStroke;
  }

  declare interface kendo$dataviz$ui$DiagramShapeContent {
    align?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    fontWeight?: string;
    template?: string | Function;
    text?: string;
  }

  declare interface kendo$dataviz$ui$DiagramShapeEditableTool {
    name?: string;
    step?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeEditable {
    connect?: boolean;
    tools?: kendo$dataviz$ui$DiagramShapeEditableTool[];
  }

  declare interface kendo$dataviz$ui$DiagramShapeFillGradientStop {
    offset?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeFillGradient {
    type?: string;
    center?: any;
    radius?: number;
    start?: any;
    end?: any;
    stops?: kendo$dataviz$ui$DiagramShapeFillGradientStop[];
  }

  declare interface kendo$dataviz$ui$DiagramShapeFill {
    color?: string;
    opacity?: number;
    gradient?: kendo$dataviz$ui$DiagramShapeFillGradient;
  }

  declare interface kendo$dataviz$ui$DiagramShapeHoverFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeHover {
    fill?: string | kendo$dataviz$ui$DiagramShapeHoverFill;
  }

  declare interface kendo$dataviz$ui$DiagramShapeRotation {
    angle?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShapeStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$DiagramShape {
    connectors?: kendo$dataviz$ui$DiagramShapeConnector[];
    connectorDefaults?: kendo$dataviz$ui$DiagramShapeConnectorDefaults;
    content?: kendo$dataviz$ui$DiagramShapeContent;
    editable?: boolean | kendo$dataviz$ui$DiagramShapeEditable;
    fill?: string | kendo$dataviz$ui$DiagramShapeFill;
    height?: number;
    hover?: kendo$dataviz$ui$DiagramShapeHover;
    id?: string;
    minHeight?: number;
    minWidth?: number;
    path?: string;
    rotation?: kendo$dataviz$ui$DiagramShapeRotation;
    source?: string;
    stroke?: kendo$dataviz$ui$DiagramShapeStroke;
    type?: string;
    visual?: Function;
    width?: number;
    x?: number;
    y?: number;
  }

  declare interface kendo$dataviz$ui$DiagramExportImageOptions {
    width?: string;
    height?: string;
    cors?: string;
  }

  declare interface kendo$dataviz$ui$DiagramExportSVGOptions {
    raw?: boolean;
  }

  declare interface kendo$dataviz$ui$DiagramSelectOptions {
    addToSelection?: boolean;
  }

  declare interface kendo$dataviz$ui$DiagramOptions {
    name?: string;
    autoBind?: boolean;
    connectionDefaults?: kendo$dataviz$ui$DiagramConnectionDefaults;
    connections?: kendo$dataviz$ui$DiagramConnection[];
    connectionsDataSource?: any | any | kendo$data$DataSource;
    dataSource?: any | any | kendo$data$DataSource;
    editable?: boolean | kendo$dataviz$ui$DiagramEditable;
    layout?: kendo$dataviz$ui$DiagramLayout;
    pannable?: boolean | kendo$dataviz$ui$DiagramPannable;
    pdf?: kendo$dataviz$ui$DiagramPdf;
    selectable?: boolean | kendo$dataviz$ui$DiagramSelectable;
    shapeDefaults?: kendo$dataviz$ui$DiagramShapeDefaults;
    shapes?: kendo$dataviz$ui$DiagramShape[];
    template?: string | Function;
    theme?: string;
    zoom?: number;
    zoomMax?: number;
    zoomMin?: number;
    zoomRate?: number;
    add?: (e: ui$DiagramAddEvent) => void;
    cancel?: (e: ui$DiagramCancelEvent) => void;
    change?: (e: ui$DiagramChangeEvent) => void;
    click?: (e: ui$DiagramClickEvent) => void;
    dataBound?: (e: ui$DiagramDataBoundEvent) => void;
    drag?: (e: ui$DiagramDragEvent) => void;
    dragEnd?: (e: ui$DiagramDragEndEvent) => void;
    dragStart?: (e: ui$DiagramDragStartEvent) => void;
    edit?: (e: ui$DiagramEditEvent) => void;
    itemBoundsChange?: (e: ui$DiagramItemBoundsChangeEvent) => void;
    itemRotate?: (e: ui$DiagramItemRotateEvent) => void;
    mouseEnter?: (e: ui$DiagramMouseEnterEvent) => void;
    mouseLeave?: (e: ui$DiagramMouseLeaveEvent) => void;
    pan?: (e: ui$DiagramPanEvent) => void;
    remove?: (e: ui$DiagramRemoveEvent) => void;
    save?: (e: ui$DiagramSaveEvent) => void;
    select?: (e: ui$DiagramSelectEvent) => void;
    toolBarClick?: (e: ui$DiagramToolBarClickEvent) => void;
    zoomEnd?: (e: ui$DiagramZoomEndEvent) => void;
    zoomStart?: (e: ui$DiagramZoomStartEvent) => void;
  }

  declare interface kendo$dataviz$ui$DiagramEvent {
    sender: kendo$dataviz$ui$Diagram;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$dataviz$ui$DiagramAddEvent = {
    connection?: kendo$dataviz$diagram$Connection,
    shape?: kendo$dataviz$diagram$Shape
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramCancelEvent = {
    container?: JQuery,
    connection?: kendo$data$Model,
    shape?: kendo$data$Model
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramChangeEvent = {
    added?: any,
    removed?: any
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramClickEvent = {
    item?: any,
    meta?: any,
    point?: kendo$dataviz$diagram$Point
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramDataBoundEvent = {} & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramDragEvent = {
    connectionHandle?: string,
    connections?: any,
    shapes?: any
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramDragEndEvent = {
    connectionHandle?: string,
    connections?: any,
    shapes?: any
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramDragStartEvent = {
    connectionHandle?: string,
    connections?: any,
    shapes?: any
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramEditEvent = {
    container?: JQuery,
    connection?: kendo$data$Model,
    shape?: kendo$data$Model
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramItemBoundsChangeEvent = {
    bounds?: kendo$dataviz$diagram$Rect,
    item?: kendo$dataviz$diagram$Shape
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramItemRotateEvent = {
    item?: kendo$dataviz$diagram$Shape
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramMouseEnterEvent = {
    item?: any
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramMouseLeaveEvent = {
    item?: any
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramPanEvent = {
    pan?: kendo$dataviz$diagram$Point
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramRemoveEvent = {
    connection?: kendo$dataviz$diagram$Connection,
    shape?: kendo$dataviz$diagram$Shape
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramSaveEvent = {
    container?: JQuery,
    connection?: kendo$data$Model,
    shape?: kendo$data$Model
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramSelectEvent = {
    selected?: any,
    deselected?: any
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramToolBarClickEvent = {
    action?: string,
    shapes?: any,
    connections?: any,
    target?: JQuery
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramZoomEndEvent = {
    point?: kendo$dataviz$diagram$Point,
    zoom?: number
  } & kendo$dataviz$ui$DiagramEvent;

  declare type kendo$dataviz$ui$DiagramZoomStartEvent = {
    point?: kendo$dataviz$diagram$Point,
    zoom?: number
  } & kendo$dataviz$ui$DiagramEvent;

  declare class kendo$dataviz$ui$LinearGauge mixins kendo$ui$Widget {
    static fn: kendo$dataviz$ui$LinearGauge;
    options: ui$LinearGaugeOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$dataviz$ui$LinearGauge;
    constructor(
      element: kendo$effects$Element,
      options?: ui$LinearGaugeOptions
    ): this;
    allValues(values: any): any;
    destroy(): void;
    exportImage(options: any): JQueryPromise<any>;
    exportPDF(options?: kendo$drawing$PDFOptions): JQueryPromise<any>;
    exportSVG(options: any): JQueryPromise<any>;
    redraw(): void;
    resize(force?: boolean): void;
    setOptions(options: any): void;
    svg(): void;
    imageDataURL(): string;
    value(): void;
  }

  declare interface kendo$dataviz$ui$LinearGaugeGaugeAreaBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugeGaugeAreaMargin {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugeGaugeArea {
    background?: string;
    border?: kendo$dataviz$ui$LinearGaugeGaugeAreaBorder;
    height?: number;
    margin?: kendo$dataviz$ui$LinearGaugeGaugeAreaMargin;
    width?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugePointerItemBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugePointerItemTrackBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugePointerItemTrack {
    border?: kendo$dataviz$ui$LinearGaugePointerItemTrackBorder;
    color?: string;
    opacity?: number;
    size?: number;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$LinearGaugePointerItem {
    border?: kendo$dataviz$ui$LinearGaugePointerItemBorder;
    color?: string;
    margin?: number | any;
    opacity?: number;
    shape?: string;
    size?: number;
    track?: kendo$dataviz$ui$LinearGaugePointerItemTrack;
    value?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugeScaleLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugeScaleLabelsMargin {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugeScaleLabelsPadding {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugeScaleLabels {
    background?: string;
    border?: kendo$dataviz$ui$LinearGaugeScaleLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$LinearGaugeScaleLabelsMargin;
    padding?: kendo$dataviz$ui$LinearGaugeScaleLabelsPadding;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$LinearGaugeScaleLine {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugeScaleMajorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugeScaleMinorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$LinearGaugeScaleRange {
    from?: number;
    to?: number;
    opacity?: number;
    color?: string;
  }

  declare interface kendo$dataviz$ui$LinearGaugeScale {
    line?: kendo$dataviz$ui$LinearGaugeScaleLine;
    labels?: kendo$dataviz$ui$LinearGaugeScaleLabels;
    majorTicks?: kendo$dataviz$ui$LinearGaugeScaleMajorTicks;
    majorUnit?: number;
    max?: number;
    min?: number;
    minorTicks?: kendo$dataviz$ui$LinearGaugeScaleMinorTicks;
    minorUnit?: number;
    mirror?: boolean;
    ranges?: kendo$dataviz$ui$LinearGaugeScaleRange[];
    rangePlaceholderColor?: string;
    rangeSize?: number;
    reverse?: boolean;
    vertical?: boolean;
  }

  declare interface kendo$dataviz$ui$LinearGaugeExportImageOptions {
    width?: string;
    height?: string;
  }

  declare interface kendo$dataviz$ui$LinearGaugeExportSVGOptions {
    raw?: boolean;
  }

  declare interface kendo$dataviz$ui$LinearGaugeOptions {
    name?: string;
    gaugeArea?: kendo$dataviz$ui$LinearGaugeGaugeArea;
    pointer?: kendo$dataviz$ui$LinearGaugePointerItem[];
    renderAs?: string;
    scale?: kendo$dataviz$ui$LinearGaugeScale;
    theme?: string;
    transitions?: boolean;
  }

  declare interface kendo$dataviz$ui$LinearGaugeEvent {
    sender: kendo$dataviz$ui$LinearGauge;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$ui$Map mixins kendo$ui$Widget {
    static fn: kendo$dataviz$ui$Map;
    options: ui$MapOptions;
    layers: any;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$dataviz$ui$Map;
    constructor(element: kendo$effects$Element, options?: ui$MapOptions): this;
    center(): kendo$dataviz$map$Location;
    center(center: any): void;
    center(center: kendo$dataviz$map$Location): void;
    destroy(): void;
    eventOffset(e: any): kendo$geometry$Point;
    eventOffset(e: JQueryEventObject): kendo$geometry$Point;
    eventToLayer(e: any): kendo$geometry$Point;
    eventToLayer(e: JQueryEventObject): kendo$geometry$Point;
    eventToLocation(e: any): kendo$geometry$Point;
    eventToLocation(e: JQueryEventObject): kendo$geometry$Point;
    eventToView(e: any): kendo$geometry$Point;
    eventToView(e: JQueryEventObject): kendo$geometry$Point;
    extent(): kendo$dataviz$map$Extent;
    extent(extent: kendo$dataviz$map$Extent): void;
    layerToLocation(point: any, zoom: number): kendo$dataviz$map$Location;
    layerToLocation(
      point: kendo$geometry$Point,
      zoom: number
    ): kendo$dataviz$map$Location;
    locationToLayer(location: any, zoom: number): kendo$geometry$Point;
    locationToLayer(
      location: kendo$dataviz$map$Location,
      zoom: number
    ): kendo$geometry$Point;
    locationToView(location: any): kendo$geometry$Point;
    locationToView(location: kendo$dataviz$map$Location): kendo$geometry$Point;
    resize(force?: boolean): void;
    setOptions(options: any): void;
    viewSize(): any;
    viewToLocation(point: any, zoom: number): kendo$dataviz$map$Location;
    viewToLocation(
      point: kendo$geometry$Point,
      zoom: number
    ): kendo$dataviz$map$Location;
    zoom(): number;
    zoom(level: number): void;
  }

  declare interface kendo$dataviz$ui$MapControlsAttribution {
    position?: string;
  }

  declare interface kendo$dataviz$ui$MapControlsNavigator {
    position?: string;
  }

  declare interface kendo$dataviz$ui$MapControlsZoom {
    position?: string;
  }

  declare interface kendo$dataviz$ui$MapControls {
    attribution?: boolean | kendo$dataviz$ui$MapControlsAttribution;
    navigator?: boolean | kendo$dataviz$ui$MapControlsNavigator;
    zoom?: boolean | kendo$dataviz$ui$MapControlsZoom;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsBing {
    attribution?: string;
    opacity?: number;
    key?: string;
    imagerySet?: string;
    culture?: string;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsBubbleStyleFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsBubbleStyleStroke {
    color?: string;
    dashType?: string;
    opacity?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsBubbleStyle {
    fill?: kendo$dataviz$ui$MapLayerDefaultsBubbleStyleFill;
    stroke?: kendo$dataviz$ui$MapLayerDefaultsBubbleStyleStroke;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsBubble {
    attribution?: string;
    opacity?: number;
    maxSize?: number;
    minSize?: number;
    style?: kendo$dataviz$ui$MapLayerDefaultsBubbleStyle;
    symbol?: string | Function;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsMarkerTooltipAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsMarkerTooltipAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsMarkerTooltipAnimation {
    close?: kendo$dataviz$ui$MapLayerDefaultsMarkerTooltipAnimationClose;
    open?: kendo$dataviz$ui$MapLayerDefaultsMarkerTooltipAnimationOpen;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsMarkerTooltipContent {
    url?: string;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsMarkerTooltip {
    autoHide?: boolean;
    animation?: kendo$dataviz$ui$MapLayerDefaultsMarkerTooltipAnimation;
    content?:
      | string
      | Function
      | kendo$dataviz$ui$MapLayerDefaultsMarkerTooltipContent;
    template?: string;
    callout?: boolean;
    iframe?: boolean;
    height?: number;
    width?: number;
    position?: string;
    showAfter?: number;
    showOn?: string;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsMarker {
    shape?: string;
    tooltip?: kendo$dataviz$ui$MapLayerDefaultsMarkerTooltip;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsShapeStyleFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsShapeStyleStroke {
    color?: string;
    dashType?: string;
    opacity?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsShapeStyle {
    fill?: kendo$dataviz$ui$MapLayerDefaultsShapeStyleFill;
    stroke?: kendo$dataviz$ui$MapLayerDefaultsShapeStyleStroke;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsShape {
    attribution?: string;
    opacity?: number;
    style?: kendo$dataviz$ui$MapLayerDefaultsShapeStyle;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaultsTile {
    urlTemplate?: string;
    attribution?: string;
    subdomains?: any;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerDefaults {
    marker?: kendo$dataviz$ui$MapLayerDefaultsMarker;
    shape?: kendo$dataviz$ui$MapLayerDefaultsShape;
    bubble?: kendo$dataviz$ui$MapLayerDefaultsBubble;
    tileSize?: number;
    tile?: kendo$dataviz$ui$MapLayerDefaultsTile;
    bing?: kendo$dataviz$ui$MapLayerDefaultsBing;
  }

  declare interface kendo$dataviz$ui$MapLayerStyleFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerStyleStroke {
    color?: string;
    dashType?: number;
    opacity?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerStyle {
    fill?: kendo$dataviz$ui$MapLayerStyleFill;
    stroke?: kendo$dataviz$ui$MapLayerStyleStroke;
  }

  declare interface kendo$dataviz$ui$MapLayerTooltipAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerTooltipAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$ui$MapLayerTooltipAnimation {
    close?: kendo$dataviz$ui$MapLayerTooltipAnimationClose;
    open?: kendo$dataviz$ui$MapLayerTooltipAnimationOpen;
  }

  declare interface kendo$dataviz$ui$MapLayerTooltipContent {
    url?: string;
  }

  declare interface kendo$dataviz$ui$MapLayerTooltip {
    autoHide?: boolean;
    animation?: kendo$dataviz$ui$MapLayerTooltipAnimation;
    content?: string | Function | kendo$dataviz$ui$MapLayerTooltipContent;
    template?: string;
    callout?: boolean;
    iframe?: boolean;
    height?: number;
    width?: number;
    position?: string;
    showAfter?: number;
    showOn?: string;
  }

  declare interface kendo$dataviz$ui$MapLayer {
    attribution?: string;
    autoBind?: boolean;
    dataSource?: any | any | kendo$data$DataSource;
    extent?: any | kendo$dataviz$map$Extent;
    key?: string;
    imagerySet?: string;
    culture?: string;
    locationField?: string;
    shape?: string;
    tileSize?: number;
    titleField?: string;
    tooltip?: kendo$dataviz$ui$MapLayerTooltip;
    maxSize?: number;
    minSize?: number;
    maxZoom?: number;
    minZoom?: number;
    opacity?: number;
    subdomains?: any;
    symbol?: string | Function;
    type?: string;
    style?: kendo$dataviz$ui$MapLayerStyle;
    urlTemplate?: string;
    valueField?: string;
    zIndex?: number;
  }

  declare interface kendo$dataviz$ui$MapMarkerDefaultsTooltipAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$ui$MapMarkerDefaultsTooltipAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$ui$MapMarkerDefaultsTooltipAnimation {
    close?: kendo$dataviz$ui$MapMarkerDefaultsTooltipAnimationClose;
    open?: kendo$dataviz$ui$MapMarkerDefaultsTooltipAnimationOpen;
  }

  declare interface kendo$dataviz$ui$MapMarkerDefaultsTooltipContent {
    url?: string;
  }

  declare interface kendo$dataviz$ui$MapMarkerDefaultsTooltip {
    autoHide?: boolean;
    animation?: kendo$dataviz$ui$MapMarkerDefaultsTooltipAnimation;
    content?:
      | string
      | Function
      | kendo$dataviz$ui$MapMarkerDefaultsTooltipContent;
    template?: string;
    callout?: boolean;
    iframe?: boolean;
    height?: number;
    width?: number;
    position?: string;
    showAfter?: number;
    showOn?: string;
  }

  declare interface kendo$dataviz$ui$MapMarkerDefaults {
    shape?: string;
    tooltip?: kendo$dataviz$ui$MapMarkerDefaultsTooltip;
  }

  declare interface kendo$dataviz$ui$MapMarkerTooltipAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$ui$MapMarkerTooltipAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$ui$MapMarkerTooltipAnimation {
    close?: kendo$dataviz$ui$MapMarkerTooltipAnimationClose;
    open?: kendo$dataviz$ui$MapMarkerTooltipAnimationOpen;
  }

  declare interface kendo$dataviz$ui$MapMarkerTooltipContent {
    url?: string;
  }

  declare interface kendo$dataviz$ui$MapMarkerTooltip {
    autoHide?: boolean;
    animation?: kendo$dataviz$ui$MapMarkerTooltipAnimation;
    content?: string | Function | kendo$dataviz$ui$MapMarkerTooltipContent;
    template?: string;
    callout?: boolean;
    iframe?: boolean;
    height?: number;
    width?: number;
    position?: string;
    showAfter?: number;
    showOn?: string;
  }

  declare interface kendo$dataviz$ui$MapMarker {
    location?: any | kendo$dataviz$map$Location;
    shape?: string;
    title?: string;
    tooltip?: kendo$dataviz$ui$MapMarkerTooltip;
  }

  declare interface kendo$dataviz$ui$MapOptions {
    name?: string;
    center?: any | kendo$dataviz$map$Location;
    controls?: kendo$dataviz$ui$MapControls;
    layerDefaults?: kendo$dataviz$ui$MapLayerDefaults;
    layers?: kendo$dataviz$ui$MapLayer[];
    markerDefaults?: kendo$dataviz$ui$MapMarkerDefaults;
    markers?: kendo$dataviz$ui$MapMarker[];
    minZoom?: number;
    maxZoom?: number;
    minSize?: number;
    pannable?: boolean;
    wraparound?: boolean;
    zoom?: number;
    zoomable?: boolean;
    beforeReset?: (e: ui$MapBeforeResetEvent) => void;
    click?: (e: ui$MapClickEvent) => void;
    markerActivate?: (e: ui$MapMarkerActivateEvent) => void;
    markerCreated?: (e: ui$MapMarkerCreatedEvent) => void;
    markerClick?: (e: ui$MapMarkerClickEvent) => void;
    pan?: (e: ui$MapPanEvent) => void;
    panEnd?: (e: ui$MapPanEndEvent) => void;
    reset?: (e: ui$MapResetEvent) => void;
    shapeClick?: (e: ui$MapShapeClickEvent) => void;
    shapeCreated?: (e: ui$MapShapeCreatedEvent) => void;
    shapeFeatureCreated?: (e: ui$MapShapeFeatureCreatedEvent) => void;
    shapeMouseEnter?: (e: ui$MapShapeMouseEnterEvent) => void;
    shapeMouseLeave?: (e: ui$MapShapeMouseLeaveEvent) => void;
    zoomStart?: (e: ui$MapZoomStartEvent) => void;
    zoomEnd?: (e: ui$MapZoomEndEvent) => void;
  }

  declare interface kendo$dataviz$ui$MapEvent {
    sender: kendo$dataviz$ui$Map;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$dataviz$ui$MapBeforeResetEvent = {} & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapClickEvent = {
    location?: kendo$dataviz$map$Location,
    originalEvent?: any
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapMarkerActivateEvent = {
    marker?: kendo$dataviz$map$Marker,
    layer?: kendo$dataviz$map$Marker
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapMarkerCreatedEvent = {
    marker?: kendo$dataviz$map$Marker,
    layer?: kendo$dataviz$map$Marker
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapMarkerClickEvent = {
    marker?: kendo$dataviz$map$Marker,
    layer?: kendo$dataviz$map$Marker
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapPanEvent = {
    origin?: kendo$dataviz$map$Location,
    center?: kendo$dataviz$map$Location,
    originalEvent?: any
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapPanEndEvent = {
    origin?: kendo$dataviz$map$Location,
    center?: kendo$dataviz$map$Location,
    originalEvent?: any
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapResetEvent = {} & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapShapeClickEvent = {
    layer?: kendo$dataviz$map$layer$Shape,
    shape?: kendo$drawing$Element,
    originalEvent?: any
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapShapeCreatedEvent = {
    layer?: kendo$dataviz$map$layer$Shape,
    shape?: kendo$drawing$Element,
    originalEvent?: any
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapShapeFeatureCreatedEvent = {
    dataItem?: any,
    layer?: kendo$dataviz$map$layer$Shape,
    group?: kendo$drawing$Group,
    properties?: any
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapShapeMouseEnterEvent = {
    layer?: kendo$dataviz$map$layer$Shape,
    shape?: kendo$drawing$Element,
    originalEvent?: any
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapShapeMouseLeaveEvent = {
    layer?: kendo$dataviz$map$layer$Shape,
    shape?: kendo$drawing$Element,
    originalEvent?: any
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapZoomStartEvent = {
    originalEvent?: any
  } & kendo$dataviz$ui$MapEvent;

  declare type kendo$dataviz$ui$MapZoomEndEvent = {
    originalEvent?: any
  } & kendo$dataviz$ui$MapEvent;

  declare class kendo$dataviz$ui$QRCode mixins kendo$ui$Widget {
    static fn: kendo$dataviz$ui$QRCode;
    options: ui$QRCodeOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$dataviz$ui$QRCode;
    constructor(
      element: kendo$effects$Element,
      options?: ui$QRCodeOptions
    ): this;
    destroy(): void;
    exportImage(options: any): JQueryPromise<any>;
    exportPDF(options?: kendo$drawing$PDFOptions): JQueryPromise<any>;
    exportSVG(options: any): JQueryPromise<any>;
    imageDataURL(): string;
    redraw(): void;
    resize(force?: boolean): void;
    setOptions(options: any): void;
    svg(): string;
    value(options: string): void;
    value(options: number): void;
  }

  declare interface kendo$dataviz$ui$QRCodeBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$QRCodeExportImageOptions {
    width?: string;
    height?: string;
  }

  declare interface kendo$dataviz$ui$QRCodeExportSVGOptions {
    raw?: boolean;
  }

  declare interface kendo$dataviz$ui$QRCodeOptions {
    name?: string;
    background?: string;
    border?: kendo$dataviz$ui$QRCodeBorder;
    color?: string;
    encoding?: string;
    errorCorrection?: string;
    padding?: number;
    renderAs?: string;
    size?: number | string;
    value?: number | string;
  }

  declare interface kendo$dataviz$ui$QRCodeEvent {
    sender: kendo$dataviz$ui$QRCode;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$ui$RadialGauge mixins kendo$ui$Widget {
    static fn: kendo$dataviz$ui$RadialGauge;
    options: ui$RadialGaugeOptions;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$dataviz$ui$RadialGauge;
    constructor(
      element: kendo$effects$Element,
      options?: ui$RadialGaugeOptions
    ): this;
    allValues(values?: any): any;
    destroy(): void;
    exportImage(options: any): JQueryPromise<any>;
    exportPDF(options?: kendo$drawing$PDFOptions): JQueryPromise<any>;
    exportSVG(options: any): JQueryPromise<any>;
    redraw(): void;
    resize(force?: boolean): void;
    setOptions(options: any): void;
    svg(): void;
    imageDataURL(): string;
    value(): void;
  }

  declare interface kendo$dataviz$ui$RadialGaugeGaugeAreaBorder {
    color?: string;
    dashType?: string;
    opacity?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$RadialGaugeGaugeAreaMargin {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }

  declare interface kendo$dataviz$ui$RadialGaugeGaugeArea {
    background?: string;
    border?: kendo$dataviz$ui$RadialGaugeGaugeAreaBorder;
    height?: number;
    margin?: kendo$dataviz$ui$RadialGaugeGaugeAreaMargin;
    width?: number;
  }

  declare interface kendo$dataviz$ui$RadialGaugePointerItemCap {
    color?: string;
    size?: number;
  }

  declare interface kendo$dataviz$ui$RadialGaugePointerItem {
    cap?: kendo$dataviz$ui$RadialGaugePointerItemCap;
    color?: string;
    length?: number;
    value?: number;
  }

  declare interface kendo$dataviz$ui$RadialGaugeScaleLabelsBorder {
    color?: string;
    dashType?: string;
    opacity?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$RadialGaugeScaleLabelsMargin {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }

  declare interface kendo$dataviz$ui$RadialGaugeScaleLabelsPadding {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }

  declare interface kendo$dataviz$ui$RadialGaugeScaleLabels {
    background?: string;
    border?: kendo$dataviz$ui$RadialGaugeScaleLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$RadialGaugeScaleLabelsMargin;
    padding?: kendo$dataviz$ui$RadialGaugeScaleLabelsPadding;
    position?: string;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$RadialGaugeScaleMajorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$RadialGaugeScaleMinorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$RadialGaugeScaleRange {
    from?: number;
    to?: number;
    opacity?: number;
    color?: string;
  }

  declare interface kendo$dataviz$ui$RadialGaugeScale {
    endAngle?: number;
    labels?: kendo$dataviz$ui$RadialGaugeScaleLabels;
    majorTicks?: kendo$dataviz$ui$RadialGaugeScaleMajorTicks;
    majorUnit?: number;
    max?: number;
    min?: number;
    minorTicks?: kendo$dataviz$ui$RadialGaugeScaleMinorTicks;
    minorUnit?: number;
    ranges?: kendo$dataviz$ui$RadialGaugeScaleRange[];
    rangePlaceholderColor?: string;
    rangeSize?: number;
    rangeDistance?: number;
    reverse?: boolean;
    startAngle?: number;
  }

  declare interface kendo$dataviz$ui$RadialGaugeExportImageOptions {
    width?: string;
    height?: string;
  }

  declare interface kendo$dataviz$ui$RadialGaugeExportSVGOptions {
    raw?: boolean;
  }

  declare interface kendo$dataviz$ui$RadialGaugeOptions {
    name?: string;
    gaugeArea?: kendo$dataviz$ui$RadialGaugeGaugeArea;
    pointer?: kendo$dataviz$ui$RadialGaugePointerItem[];
    renderAs?: string;
    scale?: kendo$dataviz$ui$RadialGaugeScale;
    theme?: string;
    transitions?: boolean;
  }

  declare interface kendo$dataviz$ui$RadialGaugeEvent {
    sender: kendo$dataviz$ui$RadialGauge;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$ui$Sparkline mixins kendo$ui$Widget {
    static fn: kendo$dataviz$ui$Sparkline;
    options: ui$SparklineOptions;
    dataSource: kendo$data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$dataviz$ui$Sparkline;
    constructor(
      element: kendo$effects$Element,
      options?: ui$SparklineOptions
    ): this;
    destroy(): void;
    exportImage(options: any): JQueryPromise<any>;
    exportPDF(options?: kendo$drawing$PDFOptions): JQueryPromise<any>;
    exportSVG(options: any): JQueryPromise<any>;
    refresh(): void;
    setDataSource(dataSource: kendo$data$DataSource): void;
    setOptions(options: any): void;
    svg(): string;
    imageDataURL(): string;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemCrosshairTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemCrosshairTooltip {
    background?: string;
    border?: kendo$dataviz$ui$SparklineCategoryAxisItemCrosshairTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemCrosshair {
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: number;
    visible?: boolean;
    tooltip?: kendo$dataviz$ui$SparklineCategoryAxisItemCrosshairTooltip;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemLabels {
    background?: string;
    border?: kendo$dataviz$ui$SparklineCategoryAxisItemLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: number | any;
    mirror?: boolean;
    padding?: number | any;
    rotation?: number;
    skip?: number;
    step?: number;
    template?: string | Function;
    visible?: boolean;
    culture?: string;
    dateFormats?: any;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemLine {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemMajorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemMajorTicks {
    size?: number;
    visible?: boolean;
    color?: string;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemMinorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemMinorTicks {
    size?: number;
    visible?: boolean;
    color?: string;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItemIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItemIcon {
    background?: string;
    border?: kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItemIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItemLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItemLabel {
    background?: string;
    border?: kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItemLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    text?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItemLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItem {
    value?: any;
    position?: string;
    icon?: kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItemIcon;
    label?: kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItemLabel;
    line?: kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItemLine;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$SparklineCategoryAxisItemNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$SparklineCategoryAxisItemNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotesLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemNotes {
    position?: string;
    icon?: kendo$dataviz$ui$SparklineCategoryAxisItemNotesIcon;
    label?: kendo$dataviz$ui$SparklineCategoryAxisItemNotesLabel;
    line?: kendo$dataviz$ui$SparklineCategoryAxisItemNotesLine;
    data?: kendo$dataviz$ui$SparklineCategoryAxisItemNotesDataItem[];
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemPlotBand {
    from?: number;
    to?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItemTitle {
    background?: string;
    border?: kendo$dataviz$ui$SparklineCategoryAxisItemTitleBorder;
    color?: string;
    font?: string;
    margin?: number | any;
    position?: string;
    rotation?: number;
    text?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineCategoryAxisItem {
    axisCrossingValue?: any | Date | any;
    categories?: any;
    color?: string;
    field?: string;
    justified?: boolean;
    labels?: kendo$dataviz$ui$SparklineCategoryAxisItemLabels;
    line?: kendo$dataviz$ui$SparklineCategoryAxisItemLine;
    majorGridLines?: kendo$dataviz$ui$SparklineCategoryAxisItemMajorGridLines;
    majorTicks?: kendo$dataviz$ui$SparklineCategoryAxisItemMajorTicks;
    minorGridLines?: kendo$dataviz$ui$SparklineCategoryAxisItemMinorGridLines;
    minorTicks?: kendo$dataviz$ui$SparklineCategoryAxisItemMinorTicks;
    name?: string;
    plotBands?: kendo$dataviz$ui$SparklineCategoryAxisItemPlotBand[];
    reverse?: boolean;
    title?: kendo$dataviz$ui$SparklineCategoryAxisItemTitle;
    type?: string;
    autoBaseUnitSteps?: any;
    baseUnit?: string;
    baseUnitStep?: any;
    max?: any;
    min?: any;
    roundToBaseUnit?: boolean;
    weekStartDay?: number;
    maxDateGroups?: number;
    maxDivisions?: number;
    visible?: boolean;
    crosshair?: kendo$dataviz$ui$SparklineCategoryAxisItemCrosshair;
    notes?: kendo$dataviz$ui$SparklineCategoryAxisItemNotes;
  }

  declare interface kendo$dataviz$ui$SparklineChartAreaBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineChartArea {
    background?: string;
    opacity?: number;
    border?: kendo$dataviz$ui$SparklineChartAreaBorder;
    height?: number;
    margin?: number | any;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklinePlotAreaBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklinePlotArea {
    background?: string;
    opacity?: number;
    border?: kendo$dataviz$ui$SparklinePlotAreaBorder;
    margin?: number | any;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemBorder {
    color?: string | Function;
    dashType?: string | Function;
    opacity?: number | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemConnectors {
    color?: string;
    padding?: number;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemHighlightBorder {
    width?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemHighlight {
    border?: kendo$dataviz$ui$SparklineSeriesItemHighlightBorder;
    color?: string;
    opacity?: number;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemLabelsBorder {
    color?: string | Function;
    dashType?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemLabels {
    align?: string;
    background?: string | Function;
    border?: kendo$dataviz$ui$SparklineSeriesItemLabelsBorder;
    color?: string | Function;
    distance?: number;
    font?: string | Function;
    format?: string | Function;
    margin?: number | any;
    padding?: number | any;
    position?: string | Function;
    template?: string | Function;
    visible?: boolean | Function;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemLine {
    color?: string;
    opacity?: number;
    width?: string;
    style?: string;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemMarkersBorder {
    color?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemMarkers {
    background?: string | Function;
    border?: Function | kendo$dataviz$ui$SparklineSeriesItemMarkersBorder;
    size?: number | Function;
    type?: string | Function;
    visible?: boolean | Function;
    rotation?: number | Function;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$SparklineSeriesItemNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$SparklineSeriesItemNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemNotesLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemNotes {
    position?: string;
    icon?: kendo$dataviz$ui$SparklineSeriesItemNotesIcon;
    label?: kendo$dataviz$ui$SparklineSeriesItemNotesLabel;
    line?: kendo$dataviz$ui$SparklineSeriesItemNotesLine;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemOverlay {
    gradient?: string;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemStack {
    type?: string;
    group?: string;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemTargetBorder {
    color?: string | Function;
    dashType?: string | Function;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemTargetLine {
    width?: any | Function;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemTarget {
    line?: kendo$dataviz$ui$SparklineSeriesItemTargetLine;
    color?: string | Function;
    border?: Function | kendo$dataviz$ui$SparklineSeriesItemTargetBorder;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItemTooltip {
    background?: string;
    border?: kendo$dataviz$ui$SparklineSeriesItemTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesItem {
    type?: string;
    dashType?: string;
    data?: any;
    explodeField?: string;
    currentField?: string;
    targetField?: string;
    field?: string;
    name?: string;
    highlight?: kendo$dataviz$ui$SparklineSeriesItemHighlight;
    aggregate?: string | Function;
    axis?: string;
    border?: kendo$dataviz$ui$SparklineSeriesItemBorder;
    categoryField?: string;
    color?: string | Function;
    colorField?: string;
    connectors?: kendo$dataviz$ui$SparklineSeriesItemConnectors;
    gap?: number;
    labels?: kendo$dataviz$ui$SparklineSeriesItemLabels;
    line?: string | kendo$dataviz$ui$SparklineSeriesItemLine;
    markers?: kendo$dataviz$ui$SparklineSeriesItemMarkers;
    missingValues?: string;
    style?: string;
    negativeColor?: string;
    opacity?: number;
    overlay?: kendo$dataviz$ui$SparklineSeriesItemOverlay;
    padding?: number;
    size?: number;
    startAngle?: number;
    spacing?: number;
    stack?: boolean | string | kendo$dataviz$ui$SparklineSeriesItemStack;
    tooltip?: kendo$dataviz$ui$SparklineSeriesItemTooltip;
    width?: number;
    target?: kendo$dataviz$ui$SparklineSeriesItemTarget;
    notes?: kendo$dataviz$ui$SparklineSeriesItemNotes;
    zIndex?: number;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesDefaultsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesDefaultsLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesDefaultsLabels {
    background?: string;
    border?: kendo$dataviz$ui$SparklineSeriesDefaultsLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: number | any;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesDefaultsStack {
    type?: string;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesDefaultsTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesDefaultsTooltip {
    background?: string;
    border?: kendo$dataviz$ui$SparklineSeriesDefaultsTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesDefaults {
    area?: any;
    bar?: any;
    border?: kendo$dataviz$ui$SparklineSeriesDefaultsBorder;
    column?: any;
    gap?: number;
    labels?: kendo$dataviz$ui$SparklineSeriesDefaultsLabels;
    line?: any;
    overlay?: any;
    pie?: any;
    spacing?: number;
    stack?: boolean | kendo$dataviz$ui$SparklineSeriesDefaultsStack;
    type?: string;
    tooltip?: kendo$dataviz$ui$SparklineSeriesDefaultsTooltip;
  }

  declare interface kendo$dataviz$ui$SparklineTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineTooltip {
    background?: string;
    border?: kendo$dataviz$ui$SparklineTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
    shared?: boolean;
    sharedTemplate?: string;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemCrosshairTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemCrosshairTooltip {
    background?: string;
    border?: kendo$dataviz$ui$SparklineValueAxisItemCrosshairTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemCrosshair {
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: number;
    visible?: boolean;
    tooltip?: kendo$dataviz$ui$SparklineValueAxisItemCrosshairTooltip;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemLabels {
    background?: string;
    border?: kendo$dataviz$ui$SparklineValueAxisItemLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: number | any;
    mirror?: boolean;
    padding?: number | any;
    rotation?: number;
    skip?: number;
    step?: number;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemLine {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemMajorGridLines {
    color?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemMajorTicks {
    size?: number;
    visible?: boolean;
    color?: string;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemMinorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemMinorTicks {
    size?: number;
    color?: string;
    width?: number;
    visible?: boolean;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotesDataItemIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotesDataItemIcon {
    background?: string;
    border?: kendo$dataviz$ui$SparklineValueAxisItemNotesDataItemIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotesDataItemLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotesDataItemLabel {
    background?: string;
    border?: kendo$dataviz$ui$SparklineValueAxisItemNotesDataItemLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    text?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotesDataItemLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotesDataItem {
    value?: any;
    position?: string;
    icon?: kendo$dataviz$ui$SparklineValueAxisItemNotesDataItemIcon;
    label?: kendo$dataviz$ui$SparklineValueAxisItemNotesDataItemLabel;
    line?: kendo$dataviz$ui$SparklineValueAxisItemNotesDataItemLine;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$SparklineValueAxisItemNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$SparklineValueAxisItemNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotesLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemNotes {
    position?: string;
    icon?: kendo$dataviz$ui$SparklineValueAxisItemNotesIcon;
    label?: kendo$dataviz$ui$SparklineValueAxisItemNotesLabel;
    line?: kendo$dataviz$ui$SparklineValueAxisItemNotesLine;
    data?: kendo$dataviz$ui$SparklineValueAxisItemNotesDataItem[];
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemPlotBand {
    from?: number;
    to?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItemTitle {
    background?: string;
    border?: kendo$dataviz$ui$SparklineValueAxisItemTitleBorder;
    color?: string;
    font?: string;
    margin?: number | any;
    padding?: number | any;
    position?: string;
    rotation?: number;
    text?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineValueAxisItem {
    axisCrossingValue?: any | Date | any;
    color?: string;
    labels?: kendo$dataviz$ui$SparklineValueAxisItemLabels;
    line?: kendo$dataviz$ui$SparklineValueAxisItemLine;
    majorGridLines?: kendo$dataviz$ui$SparklineValueAxisItemMajorGridLines;
    majorTicks?: kendo$dataviz$ui$SparklineValueAxisItemMajorTicks;
    majorUnit?: number;
    max?: number;
    min?: number;
    minorGridLines?: kendo$dataviz$ui$SparklineValueAxisItemMinorGridLines;
    minorTicks?: kendo$dataviz$ui$SparklineValueAxisItemMinorTicks;
    minorUnit?: number;
    name?: any;
    narrowRange?: boolean;
    plotBands?: kendo$dataviz$ui$SparklineValueAxisItemPlotBand[];
    reverse?: boolean;
    title?: kendo$dataviz$ui$SparklineValueAxisItemTitle;
    visible?: boolean;
    crosshair?: kendo$dataviz$ui$SparklineValueAxisItemCrosshair;
    notes?: kendo$dataviz$ui$SparklineValueAxisItemNotes;
  }

  declare interface kendo$dataviz$ui$SparklineExportImageOptions {
    width?: string;
    height?: string;
  }

  declare interface kendo$dataviz$ui$SparklineExportSVGOptions {
    raw?: boolean;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesClickEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesHoverEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesOverEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$SparklineSeriesLeaveEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$SparklineOptions {
    name?: string;
    axisDefaults?: any;
    categoryAxis?:
      | kendo$dataviz$ui$SparklineCategoryAxisItem
      | kendo$dataviz$ui$SparklineCategoryAxisItem[];
    chartArea?: kendo$dataviz$ui$SparklineChartArea;
    data?: any;
    dataSource?: any;
    autoBind?: boolean;
    plotArea?: kendo$dataviz$ui$SparklinePlotArea;
    pointWidth?: number;
    renderAs?: string;
    series?: kendo$dataviz$ui$SparklineSeriesItem[];
    seriesColors?: any;
    seriesDefaults?: kendo$dataviz$ui$SparklineSeriesDefaults;
    theme?: string;
    tooltip?: kendo$dataviz$ui$SparklineTooltip;
    transitions?: boolean;
    type?: string;
    valueAxis?:
      | kendo$dataviz$ui$SparklineValueAxisItem
      | kendo$dataviz$ui$SparklineValueAxisItem[];
    axisLabelClick?: (e: ui$SparklineAxisLabelClickEvent) => void;
    dataBound?: (e: ui$SparklineEvent) => void;
    dragStart?: (e: ui$SparklineDragStartEvent) => void;
    drag?: (e: ui$SparklineDragEvent) => void;
    dragEnd?: (e: ui$SparklineDragEndEvent) => void;
    paneRender?: (e: ui$SparklinePaneRenderEvent) => void;
    plotAreaClick?: (e: ui$SparklinePlotAreaClickEvent) => void;
    plotAreaHover?: (e: ui$SparklinePlotAreaHoverEvent) => void;
    plotAreaLeave?: (e: ui$SparklinePlotAreaLeaveEvent) => void;
    seriesClick?: (e: ui$SparklineSeriesClickEvent) => void;
    seriesHover?: (e: ui$SparklineSeriesHoverEvent) => void;
    seriesOver?: (e: ui$SparklineSeriesOverEvent) => void;
    seriesLeave?: (e: ui$SparklineSeriesLeaveEvent) => void;
    zoomStart?: (e: ui$SparklineZoomStartEvent) => void;
    zoom?: (e: ui$SparklineZoomEvent) => void;
    zoomEnd?: (e: ui$SparklineZoomEndEvent) => void;
  }

  declare interface kendo$dataviz$ui$SparklineEvent {
    sender: kendo$dataviz$ui$Sparkline;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$dataviz$ui$SparklineAxisLabelClickEvent = {
    axis?: any,
    value?: any,
    text?: any,
    index?: any,
    dataItem?: any,
    element?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklineDragStartEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklineDragEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklineDragEndEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklinePaneRenderEvent = {
    pane?: kendo$dataviz$ChartPane,
    name?: string,
    index?: number
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklinePlotAreaClickEvent = {
    value?: any,
    category?: any,
    element?: any,
    x?: any,
    y?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklinePlotAreaHoverEvent = {
    category?: any,
    element?: any,
    originalEvent?: any,
    value?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklinePlotAreaLeaveEvent = {} & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklineSeriesClickEvent = {
    value?: any,
    category?: any,
    series?: kendo$dataviz$ui$SparklineSeriesClickEventSeries,
    dataItem?: any,
    element?: any,
    percentage?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklineSeriesHoverEvent = {
    value?: any,
    category?: any,
    series?: kendo$dataviz$ui$SparklineSeriesHoverEventSeries,
    dataItem?: any,
    element?: any,
    percentage?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklineSeriesOverEvent = {
    category?: any,
    dataItem?: any,
    element?: any,
    originalEvent?: any,
    percentage?: any,
    series?: kendo$dataviz$ui$SparklineSeriesOverEventSeries,
    stackValue?: any,
    value?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklineSeriesLeaveEvent = {
    category?: any,
    dataItem?: any,
    element?: any,
    originalEvent?: any,
    percentage?: any,
    series?: kendo$dataviz$ui$SparklineSeriesLeaveEventSeries,
    stackValue?: any,
    value?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklineZoomStartEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklineZoomEvent = {
    axisRanges?: any,
    delta?: number,
    originalEvent?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare type kendo$dataviz$ui$SparklineZoomEndEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$SparklineEvent;

  declare class kendo$dataviz$ui$StockChart mixins kendo$ui$Widget {
    static fn: kendo$dataviz$ui$StockChart;
    options: ui$StockChartOptions;
    dataSource: kendo$data$DataSource;
    navigator: kendo$dataviz$Navigator;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$dataviz$ui$StockChart;
    constructor(
      element: kendo$effects$Element,
      options?: ui$StockChartOptions
    ): this;
    destroy(): void;
    exportImage(options: any): JQueryPromise<any>;
    exportPDF(options?: kendo$drawing$PDFOptions): JQueryPromise<any>;
    exportSVG(options: any): JQueryPromise<any>;
    redraw(): void;
    refresh(): void;
    resize(force?: boolean): void;
    setDataSource(dataSource: kendo$data$DataSource): void;
    setOptions(options: any): void;
    svg(): string;
    imageDataURL(): string;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemAutoBaseUnitSteps {
    days?: any;
    hours?: any;
    minutes?: any;
    months?: any;
    weeks?: any;
    years?: any;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemCrosshairTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemCrosshairTooltip {
    background?: string;
    border?: kendo$dataviz$ui$StockChartCategoryAxisItemCrosshairTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemCrosshair {
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: number;
    visible?: boolean;
    tooltip?: kendo$dataviz$ui$StockChartCategoryAxisItemCrosshairTooltip;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemLabels {
    background?: string;
    border?: kendo$dataviz$ui$StockChartCategoryAxisItemLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: number | any;
    mirror?: boolean;
    padding?: number | any;
    rotation?: number;
    skip?: number;
    step?: number;
    template?: string | Function;
    visible?: boolean;
    culture?: string;
    dateFormats?: any;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemLine {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemMajorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemMajorTicks {
    color?: string;
    size?: number;
    width?: number;
    visible?: boolean;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemMinorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemMinorTicks {
    size?: number;
    visible?: boolean;
    color?: string;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItemIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItemIcon {
    background?: string;
    border?: kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItemIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItemLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItemLabel {
    background?: string;
    border?: kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItemLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    text?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItemLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItem {
    value?: any;
    position?: string;
    icon?: kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItemIcon;
    label?: kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItemLabel;
    line?: kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItemLine;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$StockChartCategoryAxisItemNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$StockChartCategoryAxisItemNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotesLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemNotes {
    position?: string;
    icon?: kendo$dataviz$ui$StockChartCategoryAxisItemNotesIcon;
    label?: kendo$dataviz$ui$StockChartCategoryAxisItemNotesLabel;
    line?: kendo$dataviz$ui$StockChartCategoryAxisItemNotesLine;
    data?: kendo$dataviz$ui$StockChartCategoryAxisItemNotesDataItem[];
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemPlotBand {
    from?: number;
    to?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemSelectMousewheel {
    reverse?: boolean;
    zoom?: string;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemSelect {
    from?: string | Date;
    to?: string | Date;
    min?: any;
    max?: any;
    mousewheel?: kendo$dataviz$ui$StockChartCategoryAxisItemSelectMousewheel;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItemTitle {
    background?: string;
    border?: kendo$dataviz$ui$StockChartCategoryAxisItemTitleBorder;
    color?: string;
    font?: string;
    margin?: number | any;
    position?: string;
    rotation?: number;
    text?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartCategoryAxisItem {
    axisCrossingValue?: any | Date | any;
    categories?: any;
    color?: string;
    field?: string;
    justified?: boolean;
    labels?: kendo$dataviz$ui$StockChartCategoryAxisItemLabels;
    line?: kendo$dataviz$ui$StockChartCategoryAxisItemLine;
    majorGridLines?: kendo$dataviz$ui$StockChartCategoryAxisItemMajorGridLines;
    majorTicks?: kendo$dataviz$ui$StockChartCategoryAxisItemMajorTicks;
    minorGridLines?: kendo$dataviz$ui$StockChartCategoryAxisItemMinorGridLines;
    minorTicks?: kendo$dataviz$ui$StockChartCategoryAxisItemMinorTicks;
    name?: string;
    pane?: string;
    plotBands?: kendo$dataviz$ui$StockChartCategoryAxisItemPlotBand[];
    reverse?: boolean;
    select?: kendo$dataviz$ui$StockChartCategoryAxisItemSelect;
    title?: kendo$dataviz$ui$StockChartCategoryAxisItemTitle;
    type?: string;
    autoBaseUnitSteps?: kendo$dataviz$ui$StockChartCategoryAxisItemAutoBaseUnitSteps;
    background?: string;
    baseUnit?: string;
    baseUnitStep?: any;
    max?: any;
    min?: any;
    roundToBaseUnit?: boolean;
    weekStartDay?: number;
    maxDateGroups?: number;
    maxDivisions?: number;
    visible?: boolean;
    crosshair?: kendo$dataviz$ui$StockChartCategoryAxisItemCrosshair;
    notes?: kendo$dataviz$ui$StockChartCategoryAxisItemNotes;
  }

  declare interface kendo$dataviz$ui$StockChartChartAreaBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartChartArea {
    background?: string;
    opacity?: number;
    border?: kendo$dataviz$ui$StockChartChartAreaBorder;
    height?: number;
    margin?: number | any;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartLegendBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartLegendInactiveItemsLabels {
    color?: string;
    font?: string;
    template?: string;
  }

  declare interface kendo$dataviz$ui$StockChartLegendInactiveItemsMarkers {
    color?: string;
  }

  declare interface kendo$dataviz$ui$StockChartLegendInactiveItems {
    labels?: kendo$dataviz$ui$StockChartLegendInactiveItemsLabels;
    markers?: kendo$dataviz$ui$StockChartLegendInactiveItemsMarkers;
  }

  declare interface kendo$dataviz$ui$StockChartLegendItem {
    cursor?: string;
    visual?: Function;
  }

  declare interface kendo$dataviz$ui$StockChartLegendLabels {
    color?: string;
    font?: string;
    template?: string;
  }

  declare interface kendo$dataviz$ui$StockChartLegend {
    background?: string;
    border?: kendo$dataviz$ui$StockChartLegendBorder;
    item?: kendo$dataviz$ui$StockChartLegendItem;
    labels?: kendo$dataviz$ui$StockChartLegendLabels;
    margin?: number | any;
    offsetX?: number;
    offsetY?: number;
    padding?: number | any;
    position?: string;
    reverse?: boolean;
    visible?: boolean;
    inactiveItems?: kendo$dataviz$ui$StockChartLegendInactiveItems;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisAutoBaseUnitSteps {
    seconds?: any;
    minutes?: any;
    hours?: any;
    days?: any;
    weeks?: any;
    months?: any;
    years?: any;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisCrosshairTooltipBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisCrosshairTooltipPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisCrosshairTooltip {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisCrosshairTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisCrosshairTooltipPadding;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisCrosshair {
    color?: string;
    opacity?: number;
    tooltip?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisCrosshairTooltip;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisLabelsDateFormats {
    days?: string;
    hours?: string;
    months?: string;
    weeks?: string;
    years?: string;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisLabelsMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisLabelsPadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisLabels {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisLabelsBorder;
    color?: string;
    culture?: string;
    dateFormats?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisLabelsDateFormats;
    font?: string;
    format?: string;
    margin?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisLabelsMargin;
    mirror?: boolean;
    padding?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisLabelsPadding;
    rotation?: number;
    skip?: number;
    step?: number;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisLine {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisMajorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisMajorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisMinorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisMinorTicks {
    color?: string;
    size?: number;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItemIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItemIcon {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItemIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItemLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItemLabel {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItemLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    text?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItemLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItem {
    value?: any;
    position?: string;
    icon?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItemIcon;
    label?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItemLabel;
    line?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItemLine;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotes {
    position?: string;
    icon?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesIcon;
    label?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesLabel;
    line?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesLine;
    data?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotesDataItem[];
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisPlotBand {
    color?: string;
    from?: number;
    opacity?: number;
    to?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisTitlePadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxisTitle {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisTitleBorder;
    color?: string;
    font?: string;
    margin?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisTitleMargin;
    padding?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisTitlePadding;
    position?: string;
    rotation?: number;
    text?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorCategoryAxis {
    autoBaseUnitSteps?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisAutoBaseUnitSteps;
    axisCrossingValue?: any | Date | any;
    background?: string;
    baseUnit?: string;
    baseUnitStep?: any;
    categories?: any;
    color?: string;
    crosshair?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisCrosshair;
    field?: string;
    justified?: boolean;
    labels?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisLabels;
    line?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisLine;
    majorGridLines?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisMajorGridLines;
    majorTicks?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisMajorTicks;
    max?: any;
    maxDateGroups?: number;
    min?: any;
    minorGridLines?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisMinorGridLines;
    minorTicks?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisMinorTicks;
    plotBands?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisPlotBand[];
    reverse?: boolean;
    roundToBaseUnit?: boolean;
    title?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisTitle;
    visible?: boolean;
    weekStartDay?: number;
    notes?: kendo$dataviz$ui$StockChartNavigatorCategoryAxisNotes;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorHint {
    visible?: boolean;
    template?: string | Function;
    format?: string;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorPaneBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorPaneMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorPanePadding {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorPaneTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorPaneTitleMargin {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorPaneTitle {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorPaneTitleBorder;
    color?: string;
    font?: string;
    margin?: kendo$dataviz$ui$StockChartNavigatorPaneTitleMargin;
    position?: string;
    text?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorPane {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorPaneBorder;
    height?: number;
    margin?: kendo$dataviz$ui$StockChartNavigatorPaneMargin;
    name?: string;
    padding?: kendo$dataviz$ui$StockChartNavigatorPanePadding;
    title?: string | kendo$dataviz$ui$StockChartNavigatorPaneTitle;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSelectMousewheel {
    reverse?: boolean;
    zoom?: string;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSelect {
    from?: Date;
    mousewheel?: boolean | kendo$dataviz$ui$StockChartNavigatorSelectMousewheel;
    to?: Date;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemHighlightBorder {
    width?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemHighlightLine {
    width?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemHighlight {
    border?: kendo$dataviz$ui$StockChartNavigatorSeriesItemHighlightBorder;
    color?: string;
    line?: kendo$dataviz$ui$StockChartNavigatorSeriesItemHighlightLine;
    opacity?: number;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemLabels {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorSeriesItemLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: number | any;
    padding?: number | any;
    position?: string;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemLine {
    color?: string;
    opacity?: number;
    width?: string;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemMarkersBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemMarkers {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorSeriesItemMarkersBorder;
    rotation?: number | Function;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemOverlay {
    gradient?: string;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemStack {
    type?: string;
    group?: string;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItemTooltip {
    background?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorSeriesItemTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartNavigatorSeriesItem {
    type?: string;
    dashType?: string;
    data?: any;
    highField?: string;
    field?: string;
    categoryField?: string;
    name?: string;
    highlight?: kendo$dataviz$ui$StockChartNavigatorSeriesItemHighlight;
    aggregate?: string | Function;
    axis?: string;
    border?: kendo$dataviz$ui$StockChartNavigatorSeriesItemBorder;
    closeField?: string;
    color?: string;
    colorField?: string;
    downColor?: string;
    downColorField?: string;
    gap?: number;
    labels?: kendo$dataviz$ui$StockChartNavigatorSeriesItemLabels;
    line?: string | kendo$dataviz$ui$StockChartNavigatorSeriesItemLine;
    lowField?: string;
    markers?: kendo$dataviz$ui$StockChartNavigatorSeriesItemMarkers;
    missingValues?: string;
    style?: string;
    opacity?: number;
    openField?: string;
    overlay?: kendo$dataviz$ui$StockChartNavigatorSeriesItemOverlay;
    spacing?: number;
    stack?:
      | boolean
      | string
      | kendo$dataviz$ui$StockChartNavigatorSeriesItemStack;
    tooltip?: kendo$dataviz$ui$StockChartNavigatorSeriesItemTooltip;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartNavigator {
    categoryAxis?: kendo$dataviz$ui$StockChartNavigatorCategoryAxis;
    dataSource?: any;
    autoBind?: boolean;
    dateField?: string;
    pane?: kendo$dataviz$ui$StockChartNavigatorPane;
    series?: kendo$dataviz$ui$StockChartNavigatorSeriesItem[];
    select?: kendo$dataviz$ui$StockChartNavigatorSelect;
    hint?: kendo$dataviz$ui$StockChartNavigatorHint;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartPaneBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartPaneTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartPaneTitle {
    background?: string;
    border?: kendo$dataviz$ui$StockChartPaneTitleBorder;
    color?: string;
    font?: string;
    margin?: number | any;
    position?: string;
    text?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartPane {
    name?: string;
    margin?: number | any;
    padding?: number | any;
    background?: string;
    border?: kendo$dataviz$ui$StockChartPaneBorder;
    clip?: boolean;
    height?: number;
    title?: string | kendo$dataviz$ui$StockChartPaneTitle;
  }

  declare interface kendo$dataviz$ui$StockChartPdfMargin {
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    top?: number | string;
  }

  declare interface kendo$dataviz$ui$StockChartPdf {
    author?: string;
    creator?: string;
    date?: Date;
    forceProxy?: boolean;
    fileName?: string;
    keywords?: string;
    landscape?: boolean;
    margin?: kendo$dataviz$ui$StockChartPdfMargin;
    paperSize?: string | any;
    proxyURL?: string;
    proxyTarget?: string;
    subject?: string;
    title?: string;
  }

  declare interface kendo$dataviz$ui$StockChartPlotAreaBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartPlotArea {
    background?: string;
    opacity?: number;
    border?: kendo$dataviz$ui$StockChartPlotAreaBorder;
    margin?: number | any;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemBorder {
    color?: string | Function;
    dashType?: string | Function;
    opacity?: number | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemHighlightBorder {
    width?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemHighlightLine {
    width?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemHighlight {
    visible?: boolean;
    border?: kendo$dataviz$ui$StockChartSeriesItemHighlightBorder;
    color?: string;
    line?: kendo$dataviz$ui$StockChartSeriesItemHighlightLine;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemLabelsBorder {
    color?: string | Function;
    dashType?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemLabels {
    background?: string | Function;
    border?: kendo$dataviz$ui$StockChartSeriesItemLabelsBorder;
    color?: string | Function;
    font?: string | Function;
    format?: string | Function;
    margin?: number | any;
    padding?: number | any;
    position?: string | Function;
    template?: string | Function;
    visible?: boolean | Function;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemLine {
    color?: string;
    opacity?: number;
    width?: string;
    style?: string;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemMarkersBorder {
    color?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemMarkers {
    background?: string | Function;
    border?: Function | kendo$dataviz$ui$StockChartSeriesItemMarkersBorder;
    size?: number | Function;
    rotation?: number | Function;
    type?: string | Function;
    visible?: boolean | Function;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$StockChartSeriesItemNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$StockChartSeriesItemNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemNotesLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemNotes {
    position?: string;
    icon?: kendo$dataviz$ui$StockChartSeriesItemNotesIcon;
    label?: kendo$dataviz$ui$StockChartSeriesItemNotesLabel;
    line?: kendo$dataviz$ui$StockChartSeriesItemNotesLine;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemOverlay {
    gradient?: string;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemStack {
    type?: string;
    group?: string;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemTargetBorder {
    color?: string | Function;
    dashType?: string | Function;
    width?: number | Function;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemTargetLine {
    width?: any | Function;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemTarget {
    line?: kendo$dataviz$ui$StockChartSeriesItemTargetLine;
    color?: string | Function;
    border?: Function | kendo$dataviz$ui$StockChartSeriesItemTargetBorder;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItemTooltip {
    background?: string;
    border?: kendo$dataviz$ui$StockChartSeriesItemTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesItem {
    type?: string;
    dashType?: string;
    data?: any;
    highField?: string;
    field?: string;
    categoryField?: string;
    currentField?: string;
    targetField?: string;
    name?: string;
    highlight?: kendo$dataviz$ui$StockChartSeriesItemHighlight;
    aggregate?: string | Function;
    axis?: string;
    border?: kendo$dataviz$ui$StockChartSeriesItemBorder;
    closeField?: string;
    color?: string | Function;
    colorField?: string;
    downColor?: string | Function;
    downColorField?: string;
    gap?: number;
    labels?: kendo$dataviz$ui$StockChartSeriesItemLabels;
    line?: string | kendo$dataviz$ui$StockChartSeriesItemLine;
    lowField?: string;
    markers?: kendo$dataviz$ui$StockChartSeriesItemMarkers;
    missingValues?: string;
    style?: string;
    negativeColor?: string;
    opacity?: number;
    openField?: string;
    overlay?: kendo$dataviz$ui$StockChartSeriesItemOverlay;
    spacing?: number;
    stack?: boolean | string | kendo$dataviz$ui$StockChartSeriesItemStack;
    tooltip?: kendo$dataviz$ui$StockChartSeriesItemTooltip;
    visibleInLegend?: boolean;
    width?: number;
    target?: kendo$dataviz$ui$StockChartSeriesItemTarget;
    notes?: kendo$dataviz$ui$StockChartSeriesItemNotes;
    zIndex?: number;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesDefaultsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesDefaultsLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesDefaultsLabels {
    background?: string;
    border?: kendo$dataviz$ui$StockChartSeriesDefaultsLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: number | any;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesDefaultsStack {
    type?: string;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesDefaultsTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesDefaultsTooltip {
    background?: string;
    border?: kendo$dataviz$ui$StockChartSeriesDefaultsTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesDefaults {
    area?: any;
    candlestick?: any;
    ohlc?: any;
    border?: kendo$dataviz$ui$StockChartSeriesDefaultsBorder;
    column?: any;
    gap?: number;
    labels?: kendo$dataviz$ui$StockChartSeriesDefaultsLabels;
    line?: any;
    overlay?: any;
    pie?: any;
    spacing?: number;
    stack?: boolean | kendo$dataviz$ui$StockChartSeriesDefaultsStack;
    type?: string;
    tooltip?: kendo$dataviz$ui$StockChartSeriesDefaultsTooltip;
  }

  declare interface kendo$dataviz$ui$StockChartTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartTitle {
    align?: string;
    background?: string;
    border?: kendo$dataviz$ui$StockChartTitleBorder;
    font?: string;
    color?: string;
    margin?: number | any;
    padding?: number | any;
    position?: string;
    text?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartTooltip {
    background?: string;
    border?: kendo$dataviz$ui$StockChartTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
    shared?: boolean;
    sharedTemplate?: string;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemCrosshairTooltipBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemCrosshairTooltip {
    background?: string;
    border?: kendo$dataviz$ui$StockChartValueAxisItemCrosshairTooltipBorder;
    color?: string;
    font?: string;
    format?: string;
    padding?: number | any;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemCrosshair {
    color?: string;
    width?: number;
    opacity?: number;
    dashType?: number;
    visible?: boolean;
    tooltip?: kendo$dataviz$ui$StockChartValueAxisItemCrosshairTooltip;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemLabelsBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemLabels {
    background?: string;
    border?: kendo$dataviz$ui$StockChartValueAxisItemLabelsBorder;
    color?: string;
    font?: string;
    format?: string;
    margin?: number | any;
    mirror?: boolean;
    padding?: number | any;
    rotation?: number;
    skip?: number;
    step?: number;
    template?: string | Function;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemLine {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemMajorGridLines {
    color?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemMajorTicks {
    size?: number;
    visible?: boolean;
    color?: string;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemMinorGridLines {
    color?: string;
    dashType?: string;
    visible?: boolean;
    width?: number;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemMinorTicks {
    size?: number;
    color?: string;
    width?: number;
    visible?: boolean;
    step?: number;
    skip?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotesDataItemIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotesDataItemIcon {
    background?: string;
    border?: kendo$dataviz$ui$StockChartValueAxisItemNotesDataItemIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotesDataItemLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotesDataItemLabel {
    background?: string;
    border?: kendo$dataviz$ui$StockChartValueAxisItemNotesDataItemLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    text?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotesDataItemLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotesDataItem {
    value?: any;
    position?: string;
    icon?: kendo$dataviz$ui$StockChartValueAxisItemNotesDataItemIcon;
    label?: kendo$dataviz$ui$StockChartValueAxisItemNotesDataItemLabel;
    line?: kendo$dataviz$ui$StockChartValueAxisItemNotesDataItemLine;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotesIconBorder {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotesIcon {
    background?: string;
    border?: kendo$dataviz$ui$StockChartValueAxisItemNotesIconBorder;
    size?: number;
    type?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotesLabelBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotesLabel {
    background?: string;
    border?: kendo$dataviz$ui$StockChartValueAxisItemNotesLabelBorder;
    color?: string;
    font?: string;
    template?: string | Function;
    visible?: boolean;
    rotation?: number;
    format?: string;
    position?: string;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotesLine {
    width?: number;
    color?: string;
    length?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemNotes {
    position?: string;
    icon?: kendo$dataviz$ui$StockChartValueAxisItemNotesIcon;
    label?: kendo$dataviz$ui$StockChartValueAxisItemNotesLabel;
    line?: kendo$dataviz$ui$StockChartValueAxisItemNotesLine;
    data?: kendo$dataviz$ui$StockChartValueAxisItemNotesDataItem[];
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemPlotBand {
    from?: number;
    to?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemTitleBorder {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItemTitle {
    background?: string;
    border?: kendo$dataviz$ui$StockChartValueAxisItemTitleBorder;
    color?: string;
    font?: string;
    margin?: number | any;
    padding?: number | any;
    position?: string;
    rotation?: number;
    text?: string;
    visible?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartValueAxisItem {
    axisCrossingValue?: any | Date | any;
    background?: string;
    color?: string;
    labels?: kendo$dataviz$ui$StockChartValueAxisItemLabels;
    line?: kendo$dataviz$ui$StockChartValueAxisItemLine;
    majorGridLines?: kendo$dataviz$ui$StockChartValueAxisItemMajorGridLines;
    majorTicks?: kendo$dataviz$ui$StockChartValueAxisItemMajorTicks;
    majorUnit?: number;
    max?: number;
    min?: number;
    minorGridLines?: kendo$dataviz$ui$StockChartValueAxisItemMinorGridLines;
    minorTicks?: kendo$dataviz$ui$StockChartValueAxisItemMinorTicks;
    minorUnit?: number;
    name?: any;
    narrowRange?: boolean;
    pane?: string;
    plotBands?: kendo$dataviz$ui$StockChartValueAxisItemPlotBand[];
    reverse?: boolean;
    title?: kendo$dataviz$ui$StockChartValueAxisItemTitle;
    visible?: boolean;
    crosshair?: kendo$dataviz$ui$StockChartValueAxisItemCrosshair;
    notes?: kendo$dataviz$ui$StockChartValueAxisItemNotes;
  }

  declare interface kendo$dataviz$ui$StockChartExportImageOptions {
    width?: string;
    height?: string;
  }

  declare interface kendo$dataviz$ui$StockChartExportSVGOptions {
    raw?: boolean;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesClickEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesHoverEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesOverEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$StockChartSeriesLeaveEventSeries {
    type?: string;
    name?: string;
    data?: any;
  }

  declare interface kendo$dataviz$ui$StockChartOptions {
    name?: string;
    dateField?: string;
    navigator?: kendo$dataviz$ui$StockChartNavigator;
    axisDefaults?: any;
    categoryAxis?:
      | kendo$dataviz$ui$StockChartCategoryAxisItem
      | kendo$dataviz$ui$StockChartCategoryAxisItem[];
    chartArea?: kendo$dataviz$ui$StockChartChartArea;
    dataSource?: any;
    autoBind?: boolean;
    legend?: kendo$dataviz$ui$StockChartLegend;
    panes?: kendo$dataviz$ui$StockChartPane[];
    pdf?: kendo$dataviz$ui$StockChartPdf;
    persistSeriesVisibility?: boolean;
    plotArea?: kendo$dataviz$ui$StockChartPlotArea;
    renderAs?: string;
    series?: kendo$dataviz$ui$StockChartSeriesItem[];
    seriesColors?: any;
    seriesDefaults?: kendo$dataviz$ui$StockChartSeriesDefaults;
    theme?: string;
    title?: kendo$dataviz$ui$StockChartTitle;
    tooltip?: kendo$dataviz$ui$StockChartTooltip;
    transitions?: boolean;
    valueAxis?:
      | kendo$dataviz$ui$StockChartValueAxisItem
      | kendo$dataviz$ui$StockChartValueAxisItem[];
    axisLabelClick?: (e: ui$StockChartAxisLabelClickEvent) => void;
    dataBound?: (e: ui$StockChartEvent) => void;
    dragStart?: (e: ui$StockChartDragStartEvent) => void;
    drag?: (e: ui$StockChartDragEvent) => void;
    dragEnd?: (e: ui$StockChartDragEndEvent) => void;
    legendItemClick?: (e: ui$StockChartLegendItemClickEvent) => void;
    legendItemHover?: (e: ui$StockChartLegendItemHoverEvent) => void;
    legendItemLeave?: (e: ui$StockChartLegendItemLeaveEvent) => void;
    noteClick?: (e: ui$StockChartNoteClickEvent) => void;
    noteHover?: (e: ui$StockChartNoteHoverEvent) => void;
    noteLeave?: (e: ui$StockChartNoteLeaveEvent) => void;
    paneRender?: (e: ui$StockChartPaneRenderEvent) => void;
    plotAreaClick?: (e: ui$StockChartPlotAreaClickEvent) => void;
    plotAreaHover?: (e: ui$StockChartPlotAreaHoverEvent) => void;
    plotAreaLeave?: (e: ui$StockChartPlotAreaLeaveEvent) => void;
    render?: (e: ui$StockChartRenderEvent) => void;
    select?: (e: ui$StockChartSelectEvent) => void;
    selectEnd?: (e: ui$StockChartSelectEndEvent) => void;
    selectStart?: (e: ui$StockChartSelectStartEvent) => void;
    seriesClick?: (e: ui$StockChartSeriesClickEvent) => void;
    seriesHover?: (e: ui$StockChartSeriesHoverEvent) => void;
    seriesOver?: (e: ui$StockChartSeriesOverEvent) => void;
    seriesLeave?: (e: ui$StockChartSeriesLeaveEvent) => void;
    zoomStart?: (e: ui$StockChartZoomStartEvent) => void;
    zoom?: (e: ui$StockChartZoomEvent) => void;
    zoomEnd?: (e: ui$StockChartZoomEndEvent) => void;
  }

  declare interface kendo$dataviz$ui$StockChartEvent {
    sender: kendo$dataviz$ui$StockChart;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$dataviz$ui$StockChartAxisLabelClickEvent = {
    axis?: any,
    value?: any,
    text?: any,
    index?: any,
    dataItem?: any,
    element?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartDragStartEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartDragEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartDragEndEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartLegendItemClickEvent = {
    text?: string,
    series?: any,
    seriesIndex?: number,
    pointIndex?: number,
    element?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartLegendItemHoverEvent = {
    text?: string,
    series?: any,
    seriesIndex?: number,
    pointIndex?: number,
    element?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartLegendItemLeaveEvent = {
    element?: any,
    pointIndex?: number,
    series?: any,
    seriesIndex?: number,
    text?: string
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartNoteClickEvent = {
    category?: any,
    element?: any,
    value?: any,
    series?: any,
    dataItem?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartNoteHoverEvent = {
    category?: any,
    element?: any,
    value?: any,
    series?: any,
    dataItem?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartNoteLeaveEvent = {
    category?: any,
    dataItem?: any,
    element?: any,
    series?: any,
    value?: any,
    visual?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartPaneRenderEvent = {
    pane?: kendo$dataviz$ui$StockChart,
    name?: string,
    index?: number
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartPlotAreaClickEvent = {
    value?: any,
    category?: any,
    element?: any,
    x?: any,
    y?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartPlotAreaHoverEvent = {
    category?: any,
    element?: any,
    originalEvent?: any,
    value?: any,
    x?: any,
    y?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartPlotAreaLeaveEvent = {} & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartRenderEvent = {} & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartSelectEvent = {
    axis?: any,
    from?: Date,
    to?: Date
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartSelectEndEvent = {
    axis?: any,
    from?: Date,
    to?: Date
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartSelectStartEvent = {
    axis?: any,
    from?: Date,
    to?: Date
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartSeriesClickEvent = {
    value?: any,
    category?: any,
    series?: kendo$dataviz$ui$StockChartSeriesClickEventSeries,
    dataItem?: any,
    element?: any,
    percentage?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartSeriesHoverEvent = {
    value?: any,
    category?: any,
    series?: kendo$dataviz$ui$StockChartSeriesHoverEventSeries,
    dataItem?: any,
    element?: any,
    percentage?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartSeriesOverEvent = {
    category?: any,
    dataItem?: any,
    element?: any,
    originalEvent?: any,
    percentage?: any,
    series?: kendo$dataviz$ui$StockChartSeriesOverEventSeries,
    stackValue?: any,
    value?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartSeriesLeaveEvent = {
    category?: any,
    dataItem?: any,
    element?: any,
    originalEvent?: any,
    percentage?: any,
    series?: kendo$dataviz$ui$StockChartSeriesLeaveEventSeries,
    stackValue?: any,
    value?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartZoomStartEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartZoomEvent = {
    axisRanges?: any,
    delta?: number,
    originalEvent?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare type kendo$dataviz$ui$StockChartZoomEndEvent = {
    axisRanges?: any,
    originalEvent?: any
  } & kendo$dataviz$ui$StockChartEvent;

  declare class kendo$dataviz$ui$TreeMap mixins kendo$ui$Widget {
    static fn: kendo$dataviz$ui$TreeMap;
    options: ui$TreeMapOptions;
    dataSource: kendo$data$DataSource;
    element: JQuery;
    wrapper: JQuery;
    static extend(proto: Object): kendo$dataviz$ui$TreeMap;
    constructor(
      element: kendo$effects$Element,
      options?: ui$TreeMapOptions
    ): this;
  }

  declare interface kendo$dataviz$ui$TreeMapOptions {
    name?: string;
    dataSource?: any | any | kendo$data$HierarchicalDataSource;
    autoBind?: boolean;
    type?: string;
    theme?: string;
    valueField?: string;
    colorField?: string;
    textField?: string;
    template?: string | Function;
    colors?: any;
    itemCreated?: (e: ui$TreeMapItemCreatedEvent) => void;
    dataBound?: (e: ui$TreeMapDataBoundEvent) => void;
  }

  declare interface kendo$dataviz$ui$TreeMapEvent {
    sender: kendo$dataviz$ui$TreeMap;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$dataviz$ui$TreeMapItemCreatedEvent = {
    element?: JQuery | kendo$effects$Element
  } & kendo$dataviz$ui$TreeMapEvent;

  declare type kendo$dataviz$ui$TreeMapDataBoundEvent = {} & kendo$dataviz$ui$TreeMapEvent;

  declare var npm$namespace$kendo$dataviz$map: {
    BingLayer: typeof kendo$dataviz$map$BingLayer,
    Extent: typeof kendo$dataviz$map$Extent,
    Layer: typeof kendo$dataviz$map$Layer,
    Location: typeof kendo$dataviz$map$Location,
    Marker: typeof kendo$dataviz$map$Marker,
    MarkerLayer: typeof kendo$dataviz$map$MarkerLayer,
    ShapeLayer: typeof kendo$dataviz$map$ShapeLayer,
    TileLayer: typeof kendo$dataviz$map$TileLayer,
    layer: typeof npm$namespace$kendo$dataviz$map$layer
  };

  declare var npm$namespace$kendo$dataviz$map$layer: {
    Shape: typeof kendo$dataviz$map$layer$Shape
  };
  declare class kendo$dataviz$map$layer$Shape {}

  declare class kendo$dataviz$map$BingLayer mixins kendo$dataviz$map$TileLayer {
    options: map$BingLayerOptions;
    dataviz$map: kendo$dataviz$ui$Map;
    constructor(
      map: kendo$dataviz$ui$Map,
      options?: map$BingLayerOptions
    ): this;
    show(): void;
    hide(): void;
    imagerySet(): void;
  }

  declare interface kendo$dataviz$map$BingLayerOptions {
    name?: string;
    baseUrl?: string;
    imagerySet?: string;
  }

  declare interface kendo$dataviz$map$BingLayerEvent {
    sender: kendo$dataviz$map$BingLayer;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$map$Extent mixins kendo$Class {
    options: map$ExtentOptions;
    nw: kendo$dataviz$map$Location;
    se: kendo$dataviz$map$Location;
    constructor(
      nw: kendo$dataviz$map$Location | any,
      se: kendo$dataviz$map$Location | any
    ): this;
    static create(
      a: kendo$dataviz$map$Location,
      b?: kendo$dataviz$map$Location
    ): kendo$dataviz$map$Extent;
    static create(
      a: kendo$dataviz$map$Location,
      b?: any
    ): kendo$dataviz$map$Extent;
    static create(
      a: any,
      b?: kendo$dataviz$map$Location
    ): kendo$dataviz$map$Extent;
    static create(a: any, b?: any): kendo$dataviz$map$Extent;
    contains(location: kendo$dataviz$map$Location): boolean;
    containsAny(locations: any): boolean;
    center(): kendo$dataviz$map$Location;
    include(location: kendo$dataviz$map$Location): void;
    includeAll(locations: any): void;
    edges(): any;
    toArray(): any;
    overlaps(extent: kendo$dataviz$map$Extent): boolean;
  }

  declare interface kendo$dataviz$map$ExtentOptions {
    name?: string;
  }

  declare interface kendo$dataviz$map$ExtentEvent {
    sender: kendo$dataviz$map$Extent;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$map$Layer mixins kendo$Class {
    options: map$LayerOptions;
    dataviz$map: kendo$dataviz$ui$Map;
    constructor(map: kendo$dataviz$ui$Map, options?: map$LayerOptions): this;
    show(): void;
    hide(): void;
  }

  declare interface kendo$dataviz$map$LayerOptions {
    name?: string;
  }

  declare interface kendo$dataviz$map$LayerEvent {
    sender: kendo$dataviz$map$Layer;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$map$Location mixins kendo$Class {
    options: map$LocationOptions;
    lat: number;
    lng: number;
    constructor(lat: number, lng: number): this;
    static create(lat: number, lng?: number): kendo$dataviz$map$Location;
    static create(lat: any, lng?: number): kendo$dataviz$map$Location;
    static create(
      lat: kendo$dataviz$map$Location,
      lng?: number
    ): kendo$dataviz$map$Location;
    static fromLngLat(lnglat: any): kendo$dataviz$map$Location;
    static fromLatLng(lnglat: any): kendo$dataviz$map$Location;
    clone(): kendo$dataviz$map$Location;
    destination(
      destination: kendo$dataviz$map$Location,
      bearing: number
    ): number;
    distanceTo(distance: number, bearing: number): kendo$dataviz$map$Location;
    equals(location: kendo$dataviz$map$Location): boolean;
    round(digits: number): kendo$dataviz$map$Location;
    toArray(): any;
    toString(): string;
    wrap(): kendo$dataviz$map$Location;
  }

  declare interface kendo$dataviz$map$LocationOptions {
    name?: string;
  }

  declare interface kendo$dataviz$map$LocationEvent {
    sender: kendo$dataviz$map$Location;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$map$Marker mixins kendo$Observable {
    options: map$MarkerOptions;
    constructor(options?: map$MarkerOptions): this;
    location(): kendo$dataviz$map$Location;
    location(location: any): void;
    location(location: kendo$dataviz$map$Location): void;
  }

  declare interface kendo$dataviz$map$MarkerTooltipAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$map$MarkerTooltipAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$map$MarkerTooltipAnimation {
    close?: kendo$dataviz$map$MarkerTooltipAnimationClose;
    open?: kendo$dataviz$map$MarkerTooltipAnimationOpen;
  }

  declare interface kendo$dataviz$map$MarkerTooltipContent {
    url?: string;
  }

  declare interface kendo$dataviz$map$MarkerTooltip {
    autoHide?: boolean;
    animation?: kendo$dataviz$map$MarkerTooltipAnimation;
    content?: string | Function | kendo$dataviz$map$MarkerTooltipContent;
    template?: string;
    callout?: boolean;
    iframe?: boolean;
    height?: number;
    width?: number;
    position?: string;
    showAfter?: number;
    showOn?: string;
  }

  declare interface kendo$dataviz$map$MarkerOptions {
    name?: string;
    location?: any | kendo$dataviz$map$Location;
    shape?: string;
    title?: string;
    tooltip?: kendo$dataviz$map$MarkerTooltip;
  }

  declare interface kendo$dataviz$map$MarkerEvent {
    sender: kendo$dataviz$map$Marker;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$map$MarkerLayer mixins kendo$dataviz$map$Layer {
    options: map$MarkerLayerOptions;
    dataviz$map: kendo$dataviz$ui$Map;
    items: any;
    constructor(
      map: kendo$dataviz$ui$Map,
      options?: map$MarkerLayerOptions
    ): this;
    add(marker: kendo$dataviz$map$Marker): void;
    clear(): void;
    hide(): void;
    remove(marker: kendo$dataviz$map$Marker): void;
    setDataSource(dataSource: any): void;
    show(): void;
  }

  declare interface kendo$dataviz$map$MarkerLayerOptions {
    name?: string;
  }

  declare interface kendo$dataviz$map$MarkerLayerEvent {
    sender: kendo$dataviz$map$MarkerLayer;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$map$ShapeLayer mixins kendo$dataviz$map$Layer {
    options: map$ShapeLayerOptions;
    dataviz$map: kendo$dataviz$ui$Map;
    constructor(
      map: kendo$dataviz$ui$Map,
      options?: map$ShapeLayerOptions
    ): this;
    show(): void;
    hide(): void;
    setDataSource(): void;
  }

  declare interface kendo$dataviz$map$ShapeLayerOptions {
    name?: string;
  }

  declare interface kendo$dataviz$map$ShapeLayerEvent {
    sender: kendo$dataviz$map$ShapeLayer;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$map$TileLayer mixins kendo$dataviz$map$Layer {
    options: map$TileLayerOptions;
    dataviz$map: kendo$dataviz$ui$Map;
    constructor(
      map: kendo$dataviz$ui$Map,
      options?: map$TileLayerOptions
    ): this;
    show(): void;
    hide(): void;
  }

  declare interface kendo$dataviz$map$TileLayerOptions {
    name?: string;
    urlTemplate?: string;
    subdomains?: any;
    tileSize?: number;
  }

  declare interface kendo$dataviz$map$TileLayerEvent {
    sender: kendo$dataviz$map$TileLayer;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$ChartAxis mixins kendo$Observable {
    options: dataviz$ChartAxisOptions;
    range(): any;
    slot(from: string, to?: string, limit?: boolean): kendo$geometry$Rect;
    slot(from: string, to?: number, limit?: boolean): kendo$geometry$Rect;
    slot(from: string, to?: Date, limit?: boolean): kendo$geometry$Rect;
    slot(from: number, to?: string, limit?: boolean): kendo$geometry$Rect;
    slot(from: number, to?: number, limit?: boolean): kendo$geometry$Rect;
    slot(from: number, to?: Date, limit?: boolean): kendo$geometry$Rect;
    slot(from: Date, to?: string, limit?: boolean): kendo$geometry$Rect;
    slot(from: Date, to?: number, limit?: boolean): kendo$geometry$Rect;
    slot(from: Date, to?: Date, limit?: boolean): kendo$geometry$Rect;
    value(point: kendo$geometry$Point): void;
    valueRange(): void;
  }

  declare interface kendo$dataviz$ChartAxisOptions {
    name?: string;
  }

  declare interface kendo$dataviz$ChartAxisEvent {
    sender: kendo$dataviz$ChartAxis;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$ChartPane mixins kendo$Observable {
    options: dataviz$ChartPaneOptions;
    chartsVisual: kendo$drawing$Group;
    visual: kendo$drawing$Group;
    findAxisByName(name: string): kendo$dataviz$ChartAxis;
    series(): any;
  }

  declare interface kendo$dataviz$ChartPaneOptions {
    name?: string;
  }

  declare interface kendo$dataviz$ChartPaneEvent {
    sender: kendo$dataviz$ChartPane;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$ChartPlotArea mixins kendo$Observable {
    options: dataviz$ChartPlotAreaOptions;
    backgroundVisual: kendo$drawing$MultiPath;
    visual: kendo$drawing$Group;
  }

  declare interface kendo$dataviz$ChartPlotAreaOptions {
    name?: string;
  }

  declare interface kendo$dataviz$ChartPlotAreaEvent {
    sender: kendo$dataviz$ChartPlotArea;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$ChartPoint mixins kendo$Observable {
    options: dataviz$ChartPointOptions;
    category: string | Date | number;
    dataItem: any;
    percentage: number;
    runningTotal: number;
    total: number;
    value: number;
    visual: kendo$drawing$Element;
  }

  declare interface kendo$dataviz$ChartPointOptions {
    name?: string;
  }

  declare interface kendo$dataviz$ChartPointEvent {
    sender: kendo$dataviz$ChartPoint;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$ChartSeries mixins kendo$Observable {
    options: dataviz$ChartSeriesOptions;
    data(): any;
    data(data: any): void;
    findPoint(callback: Function): kendo$dataviz$ChartPoint;
    points(): any;
    points(filter: Function): void;
    toggleHighlight(show: boolean, filter: Function): void;
    toggleHighlight(show: boolean, filter: any): void;
    toggleVisibility(show: boolean, filter: Function): void;
  }

  declare interface kendo$dataviz$ChartSeriesOptions {
    name?: string;
  }

  declare interface kendo$dataviz$ChartSeriesEvent {
    sender: kendo$dataviz$ChartSeries;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$Navigator mixins kendo$Observable {
    options: dataviz$NavigatorOptions;
    select(): any;
    select(): void;
  }

  declare interface kendo$dataviz$NavigatorOptions {
    name?: string;
  }

  declare interface kendo$dataviz$NavigatorEvent {
    sender: kendo$dataviz$Navigator;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare var npm$namespace$kendo$dataviz$diagram: {
    Circle: typeof kendo$dataviz$diagram$Circle,
    Connection: typeof kendo$dataviz$diagram$Connection,
    Connector: typeof kendo$dataviz$diagram$Connector,
    Group: typeof kendo$dataviz$diagram$Group,
    Image: typeof kendo$dataviz$diagram$Image,
    Layout: typeof kendo$dataviz$diagram$Layout,
    Line: typeof kendo$dataviz$diagram$Line,
    Path: typeof kendo$dataviz$diagram$Path,
    Point: typeof kendo$dataviz$diagram$Point,
    Polyline: typeof kendo$dataviz$diagram$Polyline,
    Rect: typeof kendo$dataviz$diagram$Rect,
    Rectangle: typeof kendo$dataviz$diagram$Rectangle,
    Shape: typeof kendo$dataviz$diagram$Shape,
    TextBlock: typeof kendo$dataviz$diagram$TextBlock
  };
  declare class kendo$dataviz$diagram$Circle mixins kendo$Observable {
    options: geometry$CircleOptions;
    drawingElement: kendo$drawing$Circle;
    constructor(options?: geometry$CircleOptions): this;
    position(): void;
    position(offset: kendo$dataviz$diagram$Point): void;
    rotate(angle: number, center: kendo$dataviz$diagram$Point): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$diagram$CircleFillGradientStop {
    offset?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$CircleFillGradient {
    type?: string;
    center?: any;
    radius?: number;
    start?: any;
    end?: any;
    stops?: kendo$dataviz$diagram$CircleFillGradientStop[];
  }

  declare interface kendo$dataviz$diagram$CircleFill {
    color?: string;
    opacity?: number;
    gradient?: kendo$dataviz$diagram$CircleFillGradient;
  }

  declare interface kendo$dataviz$diagram$CircleStroke {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$CircleOptions {
    name?: string;
    fill?: string | kendo$dataviz$diagram$CircleFill;
    stroke?: kendo$dataviz$diagram$CircleStroke;
    center?: any;
    radius?: number;
  }

  declare interface kendo$dataviz$diagram$CircleEvent {
    sender: kendo$dataviz$diagram$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Connection mixins kendo$Observable {
    options: diagram$ConnectionOptions;
    dataItem: any;
    from: kendo$dataviz$diagram$Shape;
    sourceConnector: kendo$dataviz$diagram$Connector;
    targetConnector: kendo$dataviz$diagram$Connector;
    to: kendo$dataviz$diagram$Shape;
    constructor(options?: diagram$ConnectionOptions): this;
    source(): any;
    source(source: kendo$dataviz$diagram$Shape): void;
    source(source: kendo$dataviz$diagram$Point): void;
    source(source: kendo$dataviz$diagram$Connector): void;
    sourcePoint(): kendo$dataviz$diagram$Point;
    target(): any;
    target(target: kendo$dataviz$diagram$Shape): void;
    target(target: kendo$dataviz$diagram$Point): void;
    target(target: kendo$dataviz$diagram$Connector): void;
    targetPoint(): kendo$dataviz$diagram$Point;
    select(value: boolean): void;
    type(): void;
    type(value: string): void;
    points(): any;
    allPoints(): any;
    redraw(options?: any): void;
  }

  declare interface kendo$dataviz$diagram$ConnectionContent {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    fontWeight?: string;
    template?: string | Function;
    text?: string;
    visual?: Function;
  }

  declare interface kendo$dataviz$diagram$ConnectionEndCapFill {
    color?: string;
  }

  declare interface kendo$dataviz$diagram$ConnectionEndCapStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$ConnectionEndCap {
    fill?: string | kendo$dataviz$diagram$ConnectionEndCapFill;
    stroke?: string | kendo$dataviz$diagram$ConnectionEndCapStroke;
    type?: string;
  }

  declare interface kendo$dataviz$diagram$ConnectionHoverStroke {
    color?: string;
  }

  declare interface kendo$dataviz$diagram$ConnectionHover {
    stroke?: kendo$dataviz$diagram$ConnectionHoverStroke;
  }

  declare interface kendo$dataviz$diagram$ConnectionPoint {
    x?: number;
    y?: number;
  }

  declare interface kendo$dataviz$diagram$ConnectionStartCapFill {
    color?: string;
  }

  declare interface kendo$dataviz$diagram$ConnectionStartCapStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$ConnectionStartCap {
    fill?: string | kendo$dataviz$diagram$ConnectionStartCapFill;
    stroke?: string | kendo$dataviz$diagram$ConnectionStartCapStroke;
    type?: string;
  }

  declare interface kendo$dataviz$diagram$ConnectionStroke {
    color?: string;
  }

  declare interface kendo$dataviz$diagram$ConnectionOptions {
    name?: string;
    content?: kendo$dataviz$diagram$ConnectionContent;
    fromConnector?: string;
    fromX?: number;
    fromY?: number;
    stroke?: kendo$dataviz$diagram$ConnectionStroke;
    hover?: kendo$dataviz$diagram$ConnectionHover;
    startCap?: string | kendo$dataviz$diagram$ConnectionStartCap;
    endCap?: string | kendo$dataviz$diagram$ConnectionEndCap;
    points?: kendo$dataviz$diagram$ConnectionPoint[];
    selectable?: boolean;
    toConnector?: string;
    toX?: number;
    toY?: number;
    type?: string;
  }

  declare interface kendo$dataviz$diagram$ConnectionEvent {
    sender: kendo$dataviz$diagram$Connection;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Connector mixins kendo$Observable {
    options: diagram$ConnectorOptions;
    connections: any;
    shape: kendo$dataviz$diagram$Shape;
    constructor(options?: diagram$ConnectorOptions): this;
    position(): kendo$dataviz$diagram$Point;
  }

  declare interface kendo$dataviz$diagram$ConnectorFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$ConnectorHoverFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$ConnectorHoverStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$ConnectorHover {
    fill?: string | kendo$dataviz$diagram$ConnectorHoverFill;
    stroke?: string | kendo$dataviz$diagram$ConnectorHoverStroke;
  }

  declare interface kendo$dataviz$diagram$ConnectorStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$ConnectorOptions {
    name?: string;
    width?: number;
    height?: number;
    hover?: kendo$dataviz$diagram$ConnectorHover;
    fill?: string | kendo$dataviz$diagram$ConnectorFill;
    stroke?: string | kendo$dataviz$diagram$ConnectorStroke;
  }

  declare interface kendo$dataviz$diagram$ConnectorEvent {
    sender: kendo$dataviz$diagram$Connector;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Group mixins kendo$Observable {
    options: drawing$GroupOptions;
    drawingElement: kendo$drawing$Group;
    constructor(options?: drawing$GroupOptions): this;
    append(element: any): void;
    clear(): void;
    remove(element: any): void;
    position(): void;
    position(offset: kendo$dataviz$diagram$Point): void;
    rotate(angle: number, center: kendo$dataviz$diagram$Point): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$diagram$GroupOptions {
    name?: string;
    x?: number;
    y?: number;
  }

  declare interface kendo$dataviz$diagram$GroupEvent {
    sender: kendo$dataviz$diagram$Group;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Image mixins kendo$Observable {
    options: drawing$ImageOptions;
    drawingElement: kendo$drawing$Image;
    constructor(options?: drawing$ImageOptions): this;
    position(): void;
    position(offset: kendo$dataviz$diagram$Point): void;
    rotate(angle: number, center: kendo$dataviz$diagram$Point): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$diagram$ImageOptions {
    name?: string;
    height?: number;
    width?: number;
    x?: number;
    y?: number;
    source?: string;
  }

  declare interface kendo$dataviz$diagram$ImageEvent {
    sender: kendo$dataviz$diagram$Image;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Layout mixins kendo$Observable {
    options: kendo$mobile$ui$LayoutOptions;
    drawingElement: kendo$drawing$Layout;
    constructor(
      rect: kendo$dataviz$diagram$Rect,
      options?: kendo$mobile$ui$LayoutOptions
    ): this;
    append(element: any): void;
    clear(): void;
    rect(): kendo$dataviz$diagram$Rect;
    rect(rect: kendo$dataviz$diagram$Rect): void;
    reflow(): void;
    remove(element: any): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$diagram$LayoutOptions {
    name?: string;
    alignContent?: string;
    alignItems?: string;
    justifyContent?: string;
    lineSpacing?: number;
    spacing?: number;
    orientation?: string;
    wrap?: boolean;
  }

  declare interface kendo$dataviz$diagram$LayoutEvent {
    sender: kendo$dataviz$diagram$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Line mixins kendo$Observable {
    options: diagram$LineOptions;
    drawingElement: kendo$drawing$Path;
    constructor(options?: diagram$LineOptions): this;
    position(): void;
    position(offset: kendo$dataviz$diagram$Point): void;
    rotate(angle: number, center: kendo$dataviz$diagram$Point): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$diagram$LineStroke {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$LineOptions {
    name?: string;
    stroke?: kendo$dataviz$diagram$LineStroke;
    from?: any;
    to?: any;
  }

  declare interface kendo$dataviz$diagram$LineEvent {
    sender: kendo$dataviz$diagram$Line;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Path mixins kendo$Observable {
    options: drawing$PathOptions;
    drawingElement: kendo$drawing$Path;
    constructor(options?: drawing$PathOptions): this;
    data(): string;
    data(path: string): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$diagram$PathEndCapFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$PathEndCapStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$PathEndCap {
    fill?: string | kendo$dataviz$diagram$PathEndCapFill;
    stroke?: string | kendo$dataviz$diagram$PathEndCapStroke;
    type?: string;
  }

  declare interface kendo$dataviz$diagram$PathFillGradientStop {
    offset?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$PathFillGradient {
    type?: string;
    center?: any;
    radius?: number;
    start?: any;
    end?: any;
    stops?: kendo$dataviz$diagram$PathFillGradientStop[];
  }

  declare interface kendo$dataviz$diagram$PathFill {
    color?: string;
    opacity?: number;
    gradient?: kendo$dataviz$diagram$PathFillGradient;
  }

  declare interface kendo$dataviz$diagram$PathStartCapFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$PathStartCapStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$PathStartCap {
    fill?: string | kendo$dataviz$diagram$PathStartCapFill;
    stroke?: string | kendo$dataviz$diagram$PathStartCapStroke;
    type?: string;
  }

  declare interface kendo$dataviz$diagram$PathStroke {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$PathOptions {
    name?: string;
    data?: string;
    endCap?: string | kendo$dataviz$diagram$PathEndCap;
    fill?: string | kendo$dataviz$diagram$PathFill;
    height?: number;
    startCap?: string | kendo$dataviz$diagram$PathStartCap;
    stroke?: kendo$dataviz$diagram$PathStroke;
    width?: number;
    x?: number;
    y?: number;
  }

  declare interface kendo$dataviz$diagram$PathEvent {
    sender: kendo$dataviz$diagram$Path;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Point mixins kendo$Observable {
    options: geometry$PointOptions;
    x: number;
    y: number;
    constructor(x: number, y: number): this;
  }

  declare interface kendo$dataviz$diagram$PointOptions {
    name?: string;
  }

  declare interface kendo$dataviz$diagram$PointEvent {
    sender: kendo$dataviz$diagram$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Polyline mixins kendo$Observable {
    options: diagram$PolylineOptions;
    drawingElement: kendo$drawing$Path;
    constructor(options?: diagram$PolylineOptions): this;
    points(): any;
    points(points: any): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$diagram$PolylineEndCapFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$PolylineEndCapStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$PolylineEndCap {
    fill?: string | kendo$dataviz$diagram$PolylineEndCapFill;
    stroke?: string | kendo$dataviz$diagram$PolylineEndCapStroke;
    type?: string;
  }

  declare interface kendo$dataviz$diagram$PolylineFillGradientStop {
    offset?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$PolylineFillGradient {
    type?: string;
    center?: any;
    radius?: number;
    start?: any;
    end?: any;
    stops?: kendo$dataviz$diagram$PolylineFillGradientStop[];
  }

  declare interface kendo$dataviz$diagram$PolylineFill {
    color?: string;
    opacity?: number;
    gradient?: kendo$dataviz$diagram$PolylineFillGradient;
  }

  declare interface kendo$dataviz$diagram$PolylineStartCapFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$PolylineStartCapStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$PolylineStartCap {
    fill?: string | kendo$dataviz$diagram$PolylineStartCapFill;
    stroke?: string | kendo$dataviz$diagram$PolylineStartCapStroke;
    type?: string;
  }

  declare interface kendo$dataviz$diagram$PolylineStroke {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$PolylineOptions {
    name?: string;
    endCap?: string | kendo$dataviz$diagram$PolylineEndCap;
    fill?: string | kendo$dataviz$diagram$PolylineFill;
    startCap?: string | kendo$dataviz$diagram$PolylineStartCap;
    stroke?: kendo$dataviz$diagram$PolylineStroke;
  }

  declare interface kendo$dataviz$diagram$PolylineEvent {
    sender: kendo$dataviz$diagram$Polyline;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Rect mixins kendo$Observable {
    options: geometry$RectOptions;
    constructor(options?: geometry$RectOptions): this;
    position(): void;
    position(offset: kendo$dataviz$diagram$Point): void;
    rotate(angle: number, center: kendo$dataviz$diagram$Point): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$diagram$RectOptions {
    name?: string;
    height?: number;
    width?: number;
    x?: number;
    y?: number;
  }

  declare interface kendo$dataviz$diagram$RectEvent {
    sender: kendo$dataviz$diagram$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Rectangle mixins kendo$Observable {
    options: diagram$RectangleOptions;
    drawingElement: kendo$drawing$Path;
    constructor(options?: diagram$RectangleOptions): this;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$diagram$RectangleFillGradientStop {
    offset?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$RectangleFillGradient {
    type?: string;
    center?: any;
    radius?: number;
    start?: any;
    end?: any;
    stops?: kendo$dataviz$diagram$RectangleFillGradientStop[];
  }

  declare interface kendo$dataviz$diagram$RectangleFill {
    color?: string;
    opacity?: number;
    gradient?: kendo$dataviz$diagram$RectangleFillGradient;
  }

  declare interface kendo$dataviz$diagram$RectangleStroke {
    color?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$RectangleOptions {
    name?: string;
    fill?: string | kendo$dataviz$diagram$RectangleFill;
    height?: number;
    stroke?: kendo$dataviz$diagram$RectangleStroke;
    width?: number;
    x?: number;
    y?: number;
  }

  declare interface kendo$dataviz$diagram$RectangleEvent {
    sender: kendo$dataviz$diagram$Rectangle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$Shape mixins kendo$Observable {
    options: diagram$ShapeOptions;
    connectors: any;
    dataItem: any;
    shapeVisual: any;
    visual: kendo$dataviz$diagram$Group;
    constructor(options?: diagram$ShapeOptions): this;
    position(): void;
    position(point: kendo$dataviz$diagram$Point): void;
    clone(): kendo$dataviz$diagram$Shape;
    select(value: boolean): void;
    connections(type: string): void;
    getConnector(): void;
    getPosition(side: string): void;
    redraw(options: any): void;
    redrawVisual(): void;
  }

  declare interface kendo$dataviz$diagram$ShapeConnectorDefaultsFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$ShapeConnectorDefaultsHoverFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$ShapeConnectorDefaultsHoverStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$ShapeConnectorDefaultsHover {
    fill?: string | kendo$dataviz$diagram$ShapeConnectorDefaultsHoverFill;
    stroke?: string | kendo$dataviz$diagram$ShapeConnectorDefaultsHoverStroke;
  }

  declare interface kendo$dataviz$diagram$ShapeConnectorDefaultsStroke {
    color?: string;
    dashType?: string;
    width?: number;
  }

  declare interface kendo$dataviz$diagram$ShapeConnectorDefaults {
    width?: number;
    height?: number;
    hover?: kendo$dataviz$diagram$ShapeConnectorDefaultsHover;
    fill?: string | kendo$dataviz$diagram$ShapeConnectorDefaultsFill;
    stroke?: string | kendo$dataviz$diagram$ShapeConnectorDefaultsStroke;
  }

  declare interface kendo$dataviz$diagram$ShapeConnector {
    name?: string;
    description?: string;
    position?: Function;
  }

  declare interface kendo$dataviz$diagram$ShapeContent {
    align?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    fontWeight?: string;
    text?: string;
  }

  declare interface kendo$dataviz$diagram$ShapeEditable {
    connect?: boolean;
  }

  declare interface kendo$dataviz$diagram$ShapeFillGradientStop {
    offset?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$ShapeFillGradient {
    type?: string;
    center?: any;
    radius?: number;
    start?: any;
    end?: any;
    stops?: kendo$dataviz$diagram$ShapeFillGradientStop[];
  }

  declare interface kendo$dataviz$diagram$ShapeFill {
    color?: string;
    opacity?: number;
    gradient?: kendo$dataviz$diagram$ShapeFillGradient;
  }

  declare interface kendo$dataviz$diagram$ShapeHoverFill {
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$diagram$ShapeHover {
    fill?: string | kendo$dataviz$diagram$ShapeHoverFill;
  }

  declare interface kendo$dataviz$diagram$ShapeRotation {
    angle?: number;
  }

  declare interface kendo$dataviz$diagram$ShapeStroke {
    color?: string;
    width?: number;
    dashType?: string;
  }

  declare interface kendo$dataviz$diagram$ShapeOptions {
    name?: string;
    id?: string;
    editable?: boolean | kendo$dataviz$diagram$ShapeEditable;
    path?: string;
    stroke?: kendo$dataviz$diagram$ShapeStroke;
    type?: string;
    x?: number;
    y?: number;
    minWidth?: number;
    minHeight?: number;
    width?: number;
    height?: number;
    fill?: string | kendo$dataviz$diagram$ShapeFill;
    hover?: kendo$dataviz$diagram$ShapeHover;
    connectors?: kendo$dataviz$diagram$ShapeConnector[];
    rotation?: kendo$dataviz$diagram$ShapeRotation;
    content?: kendo$dataviz$diagram$ShapeContent;
    selectable?: boolean;
    visual?: Function;
    connectorDefaults?: kendo$dataviz$diagram$ShapeConnectorDefaults;
  }

  declare interface kendo$dataviz$diagram$ShapeEvent {
    sender: kendo$dataviz$diagram$Shape;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$diagram$TextBlock mixins kendo$Observable {
    options: diagram$TextBlockOptions;
    drawingElement: kendo$drawing$Text;
    constructor(options?: diagram$TextBlockOptions): this;
    content(): string;
    content(content: string): void;
    position(): void;
    position(offset: kendo$dataviz$diagram$Point): void;
    rotate(angle: number, center: kendo$dataviz$diagram$Point): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$diagram$TextBlockOptions {
    name?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    fontWeight?: string;
    height?: number;
    text?: string;
    width?: number;
    x?: number;
    y?: number;
  }

  declare interface kendo$dataviz$diagram$TextBlockEvent {
    sender: kendo$dataviz$diagram$TextBlock;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare var npm$namespace$kendo$dataviz$drawing: {
    Arc: typeof kendo$dataviz$drawing$Arc,
    Circle: typeof kendo$dataviz$drawing$Circle,
    Element: typeof kendo$dataviz$drawing$Element,
    Gradient: typeof kendo$dataviz$drawing$Gradient,
    GradientStop: typeof kendo$dataviz$drawing$GradientStop,
    Group: typeof kendo$dataviz$drawing$Group,
    Image: typeof kendo$dataviz$drawing$Image,
    Layout: typeof kendo$dataviz$drawing$Layout,
    LinearGradient: typeof kendo$dataviz$drawing$LinearGradient,
    MultiPath: typeof kendo$dataviz$drawing$MultiPath,
    OptionsStore: typeof kendo$dataviz$drawing$OptionsStore,
    Path: typeof kendo$dataviz$drawing$Path,
    RadialGradient: typeof kendo$dataviz$drawing$RadialGradient,
    Rect: typeof kendo$dataviz$drawing$Rect,
    Segment: typeof kendo$dataviz$drawing$Segment,
    Surface: typeof kendo$dataviz$drawing$Surface,
    Text: typeof kendo$dataviz$drawing$Text
  };
  declare class kendo$dataviz$drawing$Arc mixins kendo$drawing$Element {
    options: geometry$ArcOptions;
    constructor(
      geometry: kendo$geometry$Arc,
      options?: geometry$ArcOptions
    ): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    geometry(): kendo$geometry$Arc;
    geometry(value: kendo$geometry$Arc): void;
    fill(color: string, opacity?: number): kendo$drawing$Arc;
    opacity(): number;
    opacity(opacity: number): void;
    stroke(color: string, width?: number, opacity?: number): kendo$drawing$Arc;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$drawing$ArcOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$dataviz$drawing$ArcEvent {
    sender: kendo$dataviz$drawing$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$Circle mixins kendo$drawing$Element {
    options: kendo$dataviz$diagram$CircleOptions;
    constructor(
      geometry: kendo$geometry$Circle,
      options?: kendo$dataviz$diagram$CircleOptions
    ): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    geometry(): kendo$geometry$Circle;
    geometry(value: kendo$geometry$Circle): void;
    fill(color: string, opacity?: number): kendo$drawing$Circle;
    opacity(): number;
    opacity(opacity: number): void;
    stroke(
      color: string,
      width?: number,
      opacity?: number
    ): kendo$drawing$Circle;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$drawing$CircleOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$dataviz$drawing$CircleEvent {
    sender: kendo$dataviz$drawing$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$Element mixins kendo$Class {
    options: drawing$ElementOptions;
    parent: kendo$drawing$Group;
    constructor(options?: drawing$ElementOptions): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    opacity(): number;
    opacity(opacity: number): void;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$drawing$ElementOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    opacity?: number;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$dataviz$drawing$ElementEvent {
    sender: kendo$dataviz$drawing$Element;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare interface kendo$dataviz$drawing$FillOptions {
    color?: string;
    opacity?: number;
  }

  declare class kendo$dataviz$drawing$Gradient mixins kendo$Class {
    options: drawing$GradientOptions;
    stops: any;
    constructor(options?: drawing$GradientOptions): this;
    addStop(
      offset: number,
      color: string,
      opacity: number
    ): kendo$drawing$GradientStop;
    removeStop(stop: kendo$drawing$GradientStop): void;
  }

  declare interface kendo$dataviz$drawing$GradientOptions {
    name?: string;
    stops?: any;
  }

  declare interface kendo$dataviz$drawing$GradientEvent {
    sender: kendo$dataviz$drawing$Gradient;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$GradientStop mixins kendo$Class {
    options: drawing$GradientStopOptions;
    constructor(options?: drawing$GradientStopOptions): this;
  }

  declare interface kendo$dataviz$drawing$GradientStopOptions {
    name?: string;
    offset?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$dataviz$drawing$GradientStopEvent {
    sender: kendo$dataviz$drawing$GradientStop;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$Group mixins kendo$drawing$Element {
    options: kendo$dataviz$diagram$GroupOptions;
    children: any;
    constructor(options?: kendo$dataviz$diagram$GroupOptions): this;
    append(element: kendo$drawing$Element): void;
    clear(): void;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    insert(position: number, element: kendo$drawing$Element): void;
    opacity(): number;
    opacity(opacity: number): void;
    remove(element: kendo$drawing$Element): void;
    removeAt(index: number): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$drawing$GroupOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    opacity?: number;
    pdf?: kendo$drawing$PDFOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$dataviz$drawing$GroupEvent {
    sender: kendo$dataviz$drawing$Group;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$Image mixins kendo$drawing$Element {
    options: kendo$dataviz$diagram$ImageOptions;
    constructor(src: string, rect: kendo$geometry$Rect): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    opacity(): number;
    opacity(opacity: number): void;
    src(): string;
    src(value: string): void;
    rect(): kendo$geometry$Rect;
    rect(value: kendo$geometry$Rect): void;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$drawing$ImageOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    opacity?: number;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$dataviz$drawing$ImageEvent {
    sender: kendo$dataviz$drawing$Image;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$Layout mixins kendo$drawing$Group {
    options: kendo$dataviz$diagram$LayoutOptions;
    constructor(
      rect: kendo$geometry$Rect,
      options?: kendo$dataviz$diagram$LayoutOptions
    ): this;
    rect(): kendo$geometry$Rect;
    rect(rect: kendo$geometry$Rect): void;
    reflow(): void;
  }

  declare interface kendo$dataviz$drawing$LayoutOptions {
    name?: string;
    alignContent?: string;
    alignItems?: string;
    justifyContent?: string;
    lineSpacing?: number;
    spacing?: number;
    orientation?: string;
    wrap?: boolean;
  }

  declare interface kendo$dataviz$drawing$LayoutEvent {
    sender: kendo$dataviz$drawing$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$LinearGradient
    mixins kendo$drawing$Gradient {
    options: drawing$LinearGradientOptions;
    stops: any;
    constructor(options?: drawing$LinearGradientOptions): this;
    addStop(
      offset: number,
      color: string,
      opacity: number
    ): kendo$drawing$GradientStop;
    end(): kendo$geometry$Point;
    end(end: any): void;
    end(end: kendo$geometry$Point): void;
    start(): kendo$geometry$Point;
    start(start: any): void;
    start(start: kendo$geometry$Point): void;
    removeStop(stop: kendo$drawing$GradientStop): void;
  }

  declare interface kendo$dataviz$drawing$LinearGradientOptions {
    name?: string;
    stops?: any;
  }

  declare interface kendo$dataviz$drawing$LinearGradientEvent {
    sender: kendo$dataviz$drawing$LinearGradient;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$MultiPath mixins kendo$drawing$Element {
    options: drawing$MultiPathOptions;
    paths: any;
    constructor(options?: drawing$MultiPathOptions): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    close(): kendo$drawing$MultiPath;
    containsPoint(point: kendo$geometry$Point): boolean;
    curveTo(
      controlOut: any,
      controlIn: any,
      endPoint: any
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: any,
      controlIn: any,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: any,
      controlIn: kendo$geometry$Point,
      endPoint: any
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: any,
      controlIn: kendo$geometry$Point,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: any,
      endPoint: any
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: any,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: kendo$geometry$Point,
      endPoint: any
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: kendo$geometry$Point,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$MultiPath;
    fill(color: string, opacity?: number): kendo$drawing$MultiPath;
    lineTo(x: number, y?: number): kendo$drawing$MultiPath;
    lineTo(x: any, y?: number): kendo$drawing$MultiPath;
    lineTo(x: kendo$geometry$Point, y?: number): kendo$drawing$MultiPath;
    moveTo(x: number, y?: number): kendo$drawing$MultiPath;
    moveTo(x: any, y?: number): kendo$drawing$MultiPath;
    moveTo(x: kendo$geometry$Point, y?: number): kendo$drawing$MultiPath;
    opacity(): number;
    opacity(opacity: number): void;
    stroke(
      color: string,
      width?: number,
      opacity?: number
    ): kendo$drawing$MultiPath;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$drawing$MultiPathOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$dataviz$drawing$MultiPathEvent {
    sender: kendo$dataviz$drawing$MultiPath;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$OptionsStore mixins kendo$Class {
    options: drawing$OptionsStoreOptions;
    observer: any;
    constructor(options?: drawing$OptionsStoreOptions): this;
    get(field: string): any;
    set(field: string, value: any): void;
  }

  declare interface kendo$dataviz$drawing$OptionsStoreOptions {
    name?: string;
  }

  declare interface kendo$dataviz$drawing$OptionsStoreEvent {
    sender: kendo$dataviz$drawing$OptionsStore;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare interface kendo$dataviz$drawing$PDFOptions {
    creator?: string;
    date?: Date;
    imgDPI?: number;
    keywords?: string;
    landscape?: boolean;
    margin?: any;
    paperSize?: any;
    subject?: string;
    title?: string;
  }

  declare class kendo$dataviz$drawing$Path mixins kendo$drawing$Element {
    options: kendo$dataviz$diagram$PathOptions;
    segments: any;
    constructor(options?: kendo$dataviz$diagram$PathOptions): this;
    static fromArc(arc: kendo$geometry$Arc, options?: any): kendo$drawing$Path;
    static fromPoints(points: any, options?: any): kendo$drawing$Path;
    static fromRect(
      rect: kendo$geometry$Rect,
      options?: any
    ): kendo$drawing$Path;
    static parse(svgPath: string, options?: any): kendo$drawing$MultiPath;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    close(): kendo$drawing$Path;
    containsPoint(point: kendo$geometry$Point): boolean;
    curveTo(controlOut: any, controlIn: any, endPoint: any): kendo$drawing$Path;
    curveTo(
      controlOut: any,
      controlIn: any,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$Path;
    curveTo(
      controlOut: any,
      controlIn: kendo$geometry$Point,
      endPoint: any
    ): kendo$drawing$Path;
    curveTo(
      controlOut: any,
      controlIn: kendo$geometry$Point,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$Path;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: any,
      endPoint: any
    ): kendo$drawing$Path;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: any,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$Path;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: kendo$geometry$Point,
      endPoint: any
    ): kendo$drawing$Path;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: kendo$geometry$Point,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$Path;
    fill(color: string, opacity?: number): kendo$drawing$Path;
    lineTo(x: number, y?: number): kendo$drawing$Path;
    lineTo(x: any, y?: number): kendo$drawing$Path;
    lineTo(x: kendo$geometry$Point, y?: number): kendo$drawing$Path;
    moveTo(x: number, y?: number): kendo$drawing$Path;
    moveTo(x: any, y?: number): kendo$drawing$Path;
    moveTo(x: kendo$geometry$Point, y?: number): kendo$drawing$Path;
    opacity(): number;
    opacity(opacity: number): void;
    stroke(color: string, width?: number, opacity?: number): kendo$drawing$Path;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$drawing$PathOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$dataviz$drawing$PathEvent {
    sender: kendo$dataviz$drawing$Path;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$RadialGradient
    mixins kendo$drawing$Gradient {
    options: drawing$RadialGradientOptions;
    stops: any;
    constructor(options?: drawing$RadialGradientOptions): this;
    addStop(
      offset: number,
      color: string,
      opacity: number
    ): kendo$drawing$GradientStop;
    center(): kendo$geometry$Point;
    center(center: any): void;
    center(center: kendo$geometry$Point): void;
    radius(): number;
    radius(value: number): void;
    removeStop(stop: kendo$drawing$GradientStop): void;
  }

  declare interface kendo$dataviz$drawing$RadialGradientOptions {
    name?: string;
    center?: any | kendo$geometry$Point;
    radius?: number;
    stops?: any;
  }

  declare interface kendo$dataviz$drawing$RadialGradientEvent {
    sender: kendo$dataviz$drawing$RadialGradient;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$Rect mixins kendo$drawing$Element {
    options: kendo$dataviz$diagram$RectOptions;
    constructor(
      geometry: kendo$geometry$Rect,
      options?: kendo$dataviz$diagram$RectOptions
    ): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    geometry(): kendo$geometry$Rect;
    geometry(value: kendo$geometry$Rect): void;
    fill(color: string, opacity?: number): kendo$drawing$Rect;
    opacity(): number;
    opacity(opacity: number): void;
    stroke(color: string, width?: number, opacity?: number): kendo$drawing$Rect;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$drawing$RectOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$dataviz$drawing$RectEvent {
    sender: kendo$dataviz$drawing$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$drawing$Segment mixins kendo$Class {
    options: drawing$SegmentOptions;
    constructor(
      anchor: kendo$geometry$Point,
      controlIn: kendo$geometry$Point,
      controlOut: kendo$geometry$Point
    ): this;
    anchor(): kendo$geometry$Point;
    anchor(value: kendo$geometry$Point): void;
    controlIn(): kendo$geometry$Point;
    controlIn(value: kendo$geometry$Point): void;
    controlOut(): kendo$geometry$Point;
    controlOut(value: kendo$geometry$Point): void;
  }

  declare interface kendo$dataviz$drawing$SegmentOptions {
    name?: string;
  }

  declare interface kendo$dataviz$drawing$SegmentEvent {
    sender: kendo$dataviz$drawing$Segment;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare interface kendo$dataviz$drawing$StrokeOptions {
    color?: string;
    dashType?: string;
    lineCap?: string;
    lineJoin?: string;
    opacity?: number;
    width?: number;
  }

  declare class kendo$dataviz$drawing$Surface mixins kendo$Observable {
    options: drawing$SurfaceOptions;
    constructor(options?: drawing$SurfaceOptions): this;
    static create(element: JQuery, options?: any): kendo$drawing$Surface;
    static create(
      element: kendo$dataviz$drawing$Element,
      options?: any
    ): kendo$drawing$Surface;
    element: JQuery;
    clear(): void;
    draw(element: kendo$drawing$Element): void;
    eventTarget(e: any): kendo$drawing$Element;
    hideTooltip(): void;
    resize(force?: boolean): void;
    showTooltip(element: kendo$drawing$Element, options?: any): void;
  }

  declare interface kendo$dataviz$drawing$SurfaceTooltipAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$drawing$SurfaceTooltipAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$dataviz$drawing$SurfaceTooltipAnimation {
    close?: kendo$dataviz$drawing$SurfaceTooltipAnimationClose;
    open?: kendo$dataviz$drawing$SurfaceTooltipAnimationOpen;
  }

  declare interface kendo$dataviz$drawing$SurfaceTooltip {
    animation?: boolean | kendo$dataviz$drawing$SurfaceTooltipAnimation;
    appendTo?: string | JQuery;
  }

  declare interface kendo$dataviz$drawing$SurfaceOptions {
    name?: string;
    type?: string;
    height?: string;
    width?: string;
    tooltip?: kendo$dataviz$drawing$SurfaceTooltip;
    click?: (e: drawing$SurfaceClickEvent) => void;
    mouseenter?: (e: drawing$SurfaceMouseenterEvent) => void;
    mouseleave?: (e: drawing$SurfaceMouseleaveEvent) => void;
    tooltipClose?: (e: drawing$SurfaceTooltipCloseEvent) => void;
    tooltipOpen?: (e: drawing$SurfaceTooltipOpenEvent) => void;
  }

  declare interface kendo$dataviz$drawing$SurfaceEvent {
    sender: kendo$dataviz$drawing$Surface;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$dataviz$drawing$SurfaceClickEvent = {
    element?: kendo$drawing$Element,
    originalEvent?: any
  } & kendo$dataviz$drawing$SurfaceEvent;

  declare type kendo$dataviz$drawing$SurfaceMouseenterEvent = {
    element?: kendo$drawing$Element,
    originalEvent?: any
  } & kendo$dataviz$drawing$SurfaceEvent;

  declare type kendo$dataviz$drawing$SurfaceMouseleaveEvent = {
    element?: kendo$drawing$Element,
    originalEvent?: any
  } & kendo$dataviz$drawing$SurfaceEvent;

  declare type kendo$dataviz$drawing$SurfaceTooltipCloseEvent = {
    element?: kendo$drawing$Element,
    target?: kendo$drawing$Element
  } & kendo$dataviz$drawing$SurfaceEvent;

  declare type kendo$dataviz$drawing$SurfaceTooltipOpenEvent = {
    element?: kendo$drawing$Element,
    target?: kendo$drawing$Element
  } & kendo$dataviz$drawing$SurfaceEvent;

  declare class kendo$dataviz$drawing$Text mixins kendo$drawing$Element {
    options: drawing$TextOptions;
    constructor(
      content: string,
      position: kendo$geometry$Point,
      options?: drawing$TextOptions
    ): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    content(): string;
    content(value: string): void;
    fill(color: string, opacity?: number): kendo$drawing$Text;
    opacity(): number;
    opacity(opacity: number): void;
    position(): kendo$geometry$Point;
    position(value: kendo$geometry$Point): void;
    stroke(color: string, width?: number, opacity?: number): kendo$drawing$Text;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$dataviz$drawing$TextOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    font?: string;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$dataviz$drawing$TextEvent {
    sender: kendo$dataviz$drawing$Text;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare interface kendo$dataviz$drawing$TooltipOptions {
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

  declare var npm$namespace$kendo$dataviz$geometry: {
    Arc: typeof kendo$dataviz$geometry$Arc,
    Circle: typeof kendo$dataviz$geometry$Circle,
    Matrix: typeof kendo$dataviz$geometry$Matrix,
    Point: typeof kendo$dataviz$geometry$Point,
    Rect: typeof kendo$dataviz$geometry$Rect,
    Size: typeof kendo$dataviz$geometry$Size,
    Transformation: typeof kendo$dataviz$geometry$Transformation
  };
  declare class kendo$dataviz$geometry$Arc mixins kendo$Observable {
    options: kendo$dataviz$drawing$ArcOptions;
    anticlockwise: boolean;
    center: kendo$geometry$Point;
    endAngle: number;
    radiusX: number;
    radiusY: number;
    startAngle: number;
    constructor(
      center: any | kendo$geometry$Point,
      options?: kendo$dataviz$drawing$ArcOptions
    ): this;
    bbox(matrix: kendo$geometry$Matrix): kendo$geometry$Rect;
    getAnticlockwise(): boolean;
    getCenter(): kendo$geometry$Point;
    getEndAngle(): number;
    getRadiusX(): number;
    getRadiusY(): number;
    getStartAngle(): number;
    pointAt(angle: number): kendo$geometry$Point;
    setAnticlockwise(value: boolean): kendo$geometry$Arc;
    setCenter(value: kendo$geometry$Point): kendo$geometry$Arc;
    setEndAngle(value: number): kendo$geometry$Arc;
    setRadiusX(value: number): kendo$geometry$Arc;
    setRadiusY(value: number): kendo$geometry$Arc;
    setStartAngle(value: number): kendo$geometry$Arc;
  }

  declare interface kendo$dataviz$geometry$ArcOptions {
    name?: string;
  }

  declare interface kendo$dataviz$geometry$ArcEvent {
    sender: kendo$dataviz$geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Circle mixins kendo$Observable {
    options: kendo$dataviz$drawing$CircleOptions;
    center: kendo$geometry$Point;
    radius: number;
    constructor(center: any | kendo$geometry$Point, radius: number): this;
    bbox(matrix: kendo$geometry$Matrix): kendo$geometry$Rect;
    clone(): kendo$geometry$Circle;
    equals(other: kendo$geometry$Circle): boolean;
    getCenter(): kendo$geometry$Point;
    getRadius(): number;
    pointAt(angle: number): kendo$geometry$Point;
    setCenter(value: kendo$geometry$Point): kendo$geometry$Point;
    setCenter(value: any): kendo$geometry$Point;
    setRadius(value: number): kendo$geometry$Circle;
  }

  declare interface kendo$dataviz$geometry$CircleOptions {
    name?: string;
  }

  declare interface kendo$dataviz$geometry$CircleEvent {
    sender: kendo$dataviz$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Matrix mixins kendo$Observable {
    options: geometry$MatrixOptions;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    static rotate(angle: number, x: number, y: number): kendo$geometry$Matrix;
    static scale(scaleX: number, scaleY: number): kendo$geometry$Matrix;
    static translate(x: number, y: number): kendo$geometry$Matrix;
    static unit(): kendo$geometry$Matrix;
    clone(): kendo$geometry$Matrix;
    equals(other: kendo$geometry$Matrix): boolean;
    round(digits: number): kendo$geometry$Matrix;
    multiplyCopy(matrix: kendo$geometry$Matrix): kendo$geometry$Matrix;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
  }

  declare interface kendo$dataviz$geometry$MatrixOptions {
    name?: string;
  }

  declare interface kendo$dataviz$geometry$MatrixEvent {
    sender: kendo$dataviz$geometry$Matrix;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Point mixins kendo$Observable {
    options: kendo$dataviz$diagram$PointOptions;
    x: number;
    y: number;
    constructor(x: number, y: number): this;
    static create(x: number, y: number): kendo$geometry$Point;
    static create(x: any, y: number): kendo$geometry$Point;
    static create(x: kendo$geometry$Point, y: number): kendo$geometry$Point;
    static min(): kendo$geometry$Point;
    static max(): kendo$geometry$Point;
    static minPoint(): kendo$geometry$Point;
    static maxPoint(): kendo$geometry$Point;
    clone(): kendo$geometry$Point;
    distanceTo(point: kendo$geometry$Point): number;
    equals(other: kendo$geometry$Point): boolean;
    getX(): number;
    getY(): number;
    move(x: number, y: number): kendo$geometry$Point;
    rotate(angle: number, center: kendo$geometry$Point): kendo$geometry$Point;
    rotate(angle: number, center: any): kendo$geometry$Point;
    round(digits: number): kendo$geometry$Point;
    scale(scaleX: number, scaleY: number): kendo$geometry$Point;
    scaleCopy(scaleX: number, scaleY: number): kendo$geometry$Point;
    setX(value: number): kendo$geometry$Point;
    setY(value: number): kendo$geometry$Point;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
    transform(
      tansformation: kendo$geometry$Transformation
    ): kendo$geometry$Point;
    transformCopy(
      tansformation: kendo$geometry$Transformation
    ): kendo$geometry$Point;
    translate(dx: number, dy: number): kendo$geometry$Point;
    translateWith(vector: kendo$geometry$Point): kendo$geometry$Point;
    translateWith(vector: any): kendo$geometry$Point;
  }

  declare interface kendo$dataviz$geometry$PointOptions {
    name?: string;
  }

  declare interface kendo$dataviz$geometry$PointEvent {
    sender: kendo$dataviz$geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Rect mixins kendo$Observable {
    options: kendo$dataviz$drawing$RectOptions;
    origin: kendo$geometry$Point;
    size: kendo$geometry$Size;
    constructor(
      origin: kendo$geometry$Point | any,
      size: kendo$geometry$Size | any
    ): this;
    static fromPoints(
      pointA: kendo$geometry$Point,
      pointB: kendo$geometry$Point
    ): kendo$geometry$Rect;
    static union(
      rectA: kendo$geometry$Rect,
      rectB: kendo$geometry$Rect
    ): kendo$geometry$Rect;
    bbox(matrix: kendo$geometry$Matrix): kendo$geometry$Rect;
    bottomLeft(): kendo$geometry$Point;
    bottomRight(): kendo$geometry$Point;
    center(): kendo$geometry$Point;
    clone(): kendo$geometry$Rect;
    equals(other: kendo$geometry$Rect): boolean;
    getOrigin(): kendo$geometry$Point;
    getSize(): kendo$geometry$Size;
    height(): number;
    setOrigin(value: kendo$geometry$Point): kendo$geometry$Rect;
    setOrigin(value: any): kendo$geometry$Rect;
    setSize(value: kendo$geometry$Size): kendo$geometry$Rect;
    setSize(value: any): kendo$geometry$Rect;
    topLeft(): kendo$geometry$Point;
    topRight(): kendo$geometry$Point;
    width(): number;
  }

  declare interface kendo$dataviz$geometry$RectOptions {
    name?: string;
  }

  declare interface kendo$dataviz$geometry$RectEvent {
    sender: kendo$dataviz$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Size mixins kendo$Observable {
    options: geometry$SizeOptions;
    width: number;
    height: number;
    static create(width: number, height: number): kendo$geometry$Size;
    static create(width: any, height: number): kendo$geometry$Size;
    static create(
      width: kendo$geometry$Size,
      height: number
    ): kendo$geometry$Size;
    clone(): kendo$geometry$Size;
    equals(other: kendo$geometry$Size): boolean;
    getWidth(): number;
    getHeight(): number;
    setWidth(value: number): kendo$geometry$Size;
    setHeight(value: number): kendo$geometry$Size;
  }

  declare interface kendo$dataviz$geometry$SizeOptions {
    name?: string;
  }

  declare interface kendo$dataviz$geometry$SizeEvent {
    sender: kendo$dataviz$geometry$Size;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$dataviz$geometry$Transformation mixins kendo$Observable {
    options: geometry$TransformationOptions;
    clone(): kendo$geometry$Transformation;
    equals(other: kendo$geometry$Transformation): boolean;
    matrix(): kendo$geometry$Matrix;
    multiply(
      transformation: kendo$geometry$Transformation
    ): kendo$geometry$Transformation;
    rotate(angle: number, center: any): kendo$geometry$Transformation;
    rotate(
      angle: number,
      center: kendo$geometry$Point
    ): kendo$geometry$Transformation;
    scale(scaleX: number, scaleY: number): kendo$geometry$Transformation;
    translate(x: number, y: number): kendo$geometry$Transformation;
  }

  declare interface kendo$dataviz$geometry$TransformationOptions {
    name?: string;
  }

  declare interface kendo$dataviz$geometry$TransformationEvent {
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
    wrap: typeof kendo$drawing$wrap,

    Arc: typeof kendo$drawing$Arc,
    Circle: typeof kendo$drawing$Circle,
    Element: typeof kendo$drawing$Element,
    Gradient: typeof kendo$drawing$Gradient,
    GradientStop: typeof kendo$drawing$GradientStop,
    Group: typeof kendo$drawing$Group,
    Image: typeof kendo$drawing$Image,
    Layout: typeof kendo$drawing$Layout,
    LinearGradient: typeof kendo$drawing$LinearGradient,
    MultiPath: typeof kendo$drawing$MultiPath,
    OptionsStore: typeof kendo$drawing$OptionsStore,
    Path: typeof kendo$drawing$Path,
    RadialGradient: typeof kendo$drawing$RadialGradient,
    Rect: typeof kendo$drawing$Rect,
    Segment: typeof kendo$drawing$Segment,
    Surface: typeof kendo$drawing$Surface,
    Text: typeof kendo$drawing$Text,
    pdf: typeof npm$namespace$kendo$drawing$pdf
  };

  declare var npm$namespace$kendo$drawing$pdf: {
    saveAs: typeof kendo$drawing$pdf$saveAs
  };
  declare function kendo$drawing$pdf$saveAs(
    group: kendo$drawing$Group,
    fileName: string,
    proxyUrl?: string,
    callback?: Function
  ): void;

  declare class kendo$drawing$Arc mixins kendo$drawing$Element {
    options: kendo$dataviz$geometry$ArcOptions;
    constructor(
      geometry: kendo$geometry$Arc,
      options?: kendo$dataviz$geometry$ArcOptions
    ): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    geometry(): kendo$geometry$Arc;
    geometry(value: kendo$geometry$Arc): void;
    fill(color: string, opacity?: number): kendo$drawing$Arc;
    opacity(): number;
    opacity(opacity: number): void;
    stroke(color: string, width?: number, opacity?: number): kendo$drawing$Arc;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$drawing$ArcOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$drawing$ArcEvent {
    sender: kendo$drawing$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$Circle mixins kendo$drawing$Element {
    options: kendo$dataviz$geometry$CircleOptions;
    constructor(
      geometry: kendo$geometry$Circle,
      options?: kendo$dataviz$geometry$CircleOptions
    ): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    geometry(): kendo$geometry$Circle;
    geometry(value: kendo$geometry$Circle): void;
    fill(color: string, opacity?: number): kendo$drawing$Circle;
    opacity(): number;
    opacity(opacity: number): void;
    stroke(
      color: string,
      width?: number,
      opacity?: number
    ): kendo$drawing$Circle;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$drawing$CircleOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$drawing$CircleEvent {
    sender: kendo$drawing$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$Element mixins kendo$Class {
    options: kendo$dataviz$drawing$ElementOptions;
    parent: kendo$drawing$Group;
    constructor(options?: kendo$dataviz$drawing$ElementOptions): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    opacity(): number;
    opacity(opacity: number): void;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$drawing$ElementOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    opacity?: number;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$drawing$ElementEvent {
    sender: kendo$drawing$Element;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare interface kendo$drawing$FillOptions {
    color?: string;
    opacity?: number;
  }

  declare class kendo$drawing$Gradient mixins kendo$Class {
    options: kendo$dataviz$drawing$GradientOptions;
    stops: any;
    constructor(options?: kendo$dataviz$drawing$GradientOptions): this;
    addStop(
      offset: number,
      color: string,
      opacity: number
    ): kendo$drawing$GradientStop;
    removeStop(stop: kendo$drawing$GradientStop): void;
  }

  declare interface kendo$drawing$GradientOptions {
    name?: string;
    stops?: any;
  }

  declare interface kendo$drawing$GradientEvent {
    sender: kendo$drawing$Gradient;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$GradientStop mixins kendo$Class {
    options: kendo$dataviz$drawing$GradientStopOptions;
    constructor(options?: kendo$dataviz$drawing$GradientStopOptions): this;
  }

  declare interface kendo$drawing$GradientStopOptions {
    name?: string;
    offset?: number;
    color?: string;
    opacity?: number;
  }

  declare interface kendo$drawing$GradientStopEvent {
    sender: kendo$drawing$GradientStop;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$Group mixins kendo$drawing$Element {
    options: kendo$dataviz$drawing$GroupOptions;
    children: any;
    constructor(options?: kendo$dataviz$drawing$GroupOptions): this;
    append(element: kendo$drawing$Element): void;
    clear(): void;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    insert(position: number, element: kendo$drawing$Element): void;
    opacity(): number;
    opacity(opacity: number): void;
    remove(element: kendo$drawing$Element): void;
    removeAt(index: number): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$drawing$GroupOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    opacity?: number;
    pdf?: kendo$drawing$PDFOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$drawing$GroupEvent {
    sender: kendo$drawing$Group;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$Image mixins kendo$drawing$Element {
    options: kendo$dataviz$drawing$ImageOptions;
    constructor(src: string, rect: kendo$geometry$Rect): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    opacity(): number;
    opacity(opacity: number): void;
    src(): string;
    src(value: string): void;
    rect(): kendo$geometry$Rect;
    rect(value: kendo$geometry$Rect): void;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$drawing$ImageOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    opacity?: number;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$drawing$ImageEvent {
    sender: kendo$drawing$Image;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$Layout mixins kendo$drawing$Group {
    options: kendo$dataviz$drawing$LayoutOptions;
    constructor(
      rect: kendo$geometry$Rect,
      options?: kendo$dataviz$drawing$LayoutOptions
    ): this;
    rect(): kendo$geometry$Rect;
    rect(rect: kendo$geometry$Rect): void;
    reflow(): void;
  }

  declare interface kendo$drawing$LayoutOptions {
    name?: string;
    alignContent?: string;
    alignItems?: string;
    justifyContent?: string;
    lineSpacing?: number;
    spacing?: number;
    orientation?: string;
    wrap?: boolean;
  }

  declare interface kendo$drawing$LayoutEvent {
    sender: kendo$drawing$Layout;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$LinearGradient mixins kendo$drawing$Gradient {
    options: kendo$dataviz$drawing$LinearGradientOptions;
    stops: any;
    constructor(options?: kendo$dataviz$drawing$LinearGradientOptions): this;
    addStop(
      offset: number,
      color: string,
      opacity: number
    ): kendo$drawing$GradientStop;
    end(): kendo$geometry$Point;
    end(end: any): void;
    end(end: kendo$geometry$Point): void;
    start(): kendo$geometry$Point;
    start(start: any): void;
    start(start: kendo$geometry$Point): void;
    removeStop(stop: kendo$drawing$GradientStop): void;
  }

  declare interface kendo$drawing$LinearGradientOptions {
    name?: string;
    stops?: any;
  }

  declare interface kendo$drawing$LinearGradientEvent {
    sender: kendo$drawing$LinearGradient;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$MultiPath mixins kendo$drawing$Element {
    options: kendo$dataviz$drawing$MultiPathOptions;
    paths: any;
    constructor(options?: kendo$dataviz$drawing$MultiPathOptions): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    close(): kendo$drawing$MultiPath;
    containsPoint(point: kendo$geometry$Point): boolean;
    curveTo(
      controlOut: any,
      controlIn: any,
      endPoint: any
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: any,
      controlIn: any,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: any,
      controlIn: kendo$geometry$Point,
      endPoint: any
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: any,
      controlIn: kendo$geometry$Point,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: any,
      endPoint: any
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: any,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: kendo$geometry$Point,
      endPoint: any
    ): kendo$drawing$MultiPath;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: kendo$geometry$Point,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$MultiPath;
    fill(color: string, opacity?: number): kendo$drawing$MultiPath;
    lineTo(x: number, y?: number): kendo$drawing$MultiPath;
    lineTo(x: any, y?: number): kendo$drawing$MultiPath;
    lineTo(x: kendo$geometry$Point, y?: number): kendo$drawing$MultiPath;
    moveTo(x: number, y?: number): kendo$drawing$MultiPath;
    moveTo(x: any, y?: number): kendo$drawing$MultiPath;
    moveTo(x: kendo$geometry$Point, y?: number): kendo$drawing$MultiPath;
    opacity(): number;
    opacity(opacity: number): void;
    stroke(
      color: string,
      width?: number,
      opacity?: number
    ): kendo$drawing$MultiPath;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$drawing$MultiPathOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$drawing$MultiPathEvent {
    sender: kendo$drawing$MultiPath;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$OptionsStore mixins kendo$Class {
    options: kendo$dataviz$drawing$OptionsStoreOptions;
    observer: any;
    constructor(options?: kendo$dataviz$drawing$OptionsStoreOptions): this;
    get(field: string): any;
    set(field: string, value: any): void;
  }

  declare interface kendo$drawing$OptionsStoreOptions {
    name?: string;
  }

  declare interface kendo$drawing$OptionsStoreEvent {
    sender: kendo$drawing$OptionsStore;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare interface kendo$drawing$PDFOptions {
    creator?: string;
    date?: Date;
    imgDPI?: number;
    keywords?: string;
    landscape?: boolean;
    margin?: any;
    paperSize?: any;
    subject?: string;
    title?: string;
  }

  declare class kendo$drawing$Path mixins kendo$drawing$Element {
    options: kendo$dataviz$drawing$PathOptions;
    segments: any;
    constructor(options?: kendo$dataviz$drawing$PathOptions): this;
    static fromArc(arc: kendo$geometry$Arc, options?: any): kendo$drawing$Path;
    static fromPoints(points: any, options?: any): kendo$drawing$Path;
    static fromRect(
      rect: kendo$geometry$Rect,
      options?: any
    ): kendo$drawing$Path;
    static parse(svgPath: string, options?: any): kendo$drawing$MultiPath;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    close(): kendo$drawing$Path;
    containsPoint(point: kendo$geometry$Point): boolean;
    curveTo(controlOut: any, controlIn: any, endPoint: any): kendo$drawing$Path;
    curveTo(
      controlOut: any,
      controlIn: any,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$Path;
    curveTo(
      controlOut: any,
      controlIn: kendo$geometry$Point,
      endPoint: any
    ): kendo$drawing$Path;
    curveTo(
      controlOut: any,
      controlIn: kendo$geometry$Point,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$Path;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: any,
      endPoint: any
    ): kendo$drawing$Path;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: any,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$Path;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: kendo$geometry$Point,
      endPoint: any
    ): kendo$drawing$Path;
    curveTo(
      controlOut: kendo$geometry$Point,
      controlIn: kendo$geometry$Point,
      endPoint: kendo$geometry$Point
    ): kendo$drawing$Path;
    fill(color: string, opacity?: number): kendo$drawing$Path;
    lineTo(x: number, y?: number): kendo$drawing$Path;
    lineTo(x: any, y?: number): kendo$drawing$Path;
    lineTo(x: kendo$geometry$Point, y?: number): kendo$drawing$Path;
    moveTo(x: number, y?: number): kendo$drawing$Path;
    moveTo(x: any, y?: number): kendo$drawing$Path;
    moveTo(x: kendo$geometry$Point, y?: number): kendo$drawing$Path;
    opacity(): number;
    opacity(opacity: number): void;
    stroke(color: string, width?: number, opacity?: number): kendo$drawing$Path;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$drawing$PathOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$drawing$PathEvent {
    sender: kendo$drawing$Path;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$RadialGradient mixins kendo$drawing$Gradient {
    options: kendo$dataviz$drawing$RadialGradientOptions;
    stops: any;
    constructor(options?: kendo$dataviz$drawing$RadialGradientOptions): this;
    addStop(
      offset: number,
      color: string,
      opacity: number
    ): kendo$drawing$GradientStop;
    center(): kendo$geometry$Point;
    center(center: any): void;
    center(center: kendo$geometry$Point): void;
    radius(): number;
    radius(value: number): void;
    removeStop(stop: kendo$drawing$GradientStop): void;
  }

  declare interface kendo$drawing$RadialGradientOptions {
    name?: string;
    center?: any | kendo$geometry$Point;
    radius?: number;
    stops?: any;
  }

  declare interface kendo$drawing$RadialGradientEvent {
    sender: kendo$drawing$RadialGradient;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$Rect mixins kendo$drawing$Element {
    options: kendo$dataviz$geometry$RectOptions;
    constructor(
      geometry: kendo$geometry$Rect,
      options?: kendo$dataviz$geometry$RectOptions
    ): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    geometry(): kendo$geometry$Rect;
    geometry(value: kendo$geometry$Rect): void;
    fill(color: string, opacity?: number): kendo$drawing$Rect;
    opacity(): number;
    opacity(opacity: number): void;
    stroke(color: string, width?: number, opacity?: number): kendo$drawing$Rect;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$drawing$RectOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$drawing$RectEvent {
    sender: kendo$drawing$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$drawing$Segment mixins kendo$Class {
    options: kendo$dataviz$drawing$SegmentOptions;
    constructor(
      anchor: kendo$geometry$Point,
      controlIn: kendo$geometry$Point,
      controlOut: kendo$geometry$Point
    ): this;
    anchor(): kendo$geometry$Point;
    anchor(value: kendo$geometry$Point): void;
    controlIn(): kendo$geometry$Point;
    controlIn(value: kendo$geometry$Point): void;
    controlOut(): kendo$geometry$Point;
    controlOut(value: kendo$geometry$Point): void;
  }

  declare interface kendo$drawing$SegmentOptions {
    name?: string;
  }

  declare interface kendo$drawing$SegmentEvent {
    sender: kendo$drawing$Segment;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare interface kendo$drawing$StrokeOptions {
    color?: string;
    dashType?: string;
    lineCap?: string;
    lineJoin?: string;
    opacity?: number;
    width?: number;
  }

  declare class kendo$drawing$Surface mixins kendo$Observable {
    options: kendo$dataviz$drawing$SurfaceOptions;
    constructor(options?: kendo$dataviz$drawing$SurfaceOptions): this;
    static create(element: JQuery, options?: any): kendo$drawing$Surface;
    static create(
      element: kendo$drawing$Element,
      options?: any
    ): kendo$drawing$Surface;
    element: JQuery;
    clear(): void;
    draw(element: kendo$drawing$Element): void;
    eventTarget(e: any): kendo$drawing$Element;
    hideTooltip(): void;
    resize(force?: boolean): void;
    showTooltip(element: kendo$drawing$Element, options?: any): void;
  }

  declare interface kendo$drawing$SurfaceTooltipAnimationClose {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$drawing$SurfaceTooltipAnimationOpen {
    effects?: string;
    duration?: number;
  }

  declare interface kendo$drawing$SurfaceTooltipAnimation {
    close?: kendo$drawing$SurfaceTooltipAnimationClose;
    open?: kendo$drawing$SurfaceTooltipAnimationOpen;
  }

  declare interface kendo$drawing$SurfaceTooltip {
    animation?: boolean | kendo$drawing$SurfaceTooltipAnimation;
    appendTo?: string | JQuery;
  }

  declare interface kendo$drawing$SurfaceOptions {
    name?: string;
    type?: string;
    height?: string;
    width?: string;
    tooltip?: kendo$drawing$SurfaceTooltip;
    click?: (e: kendo$dataviz$drawing$SurfaceClickEvent) => void;
    mouseenter?: (e: kendo$dataviz$drawing$SurfaceMouseenterEvent) => void;
    mouseleave?: (e: kendo$dataviz$drawing$SurfaceMouseleaveEvent) => void;
    tooltipClose?: (e: kendo$dataviz$drawing$SurfaceTooltipCloseEvent) => void;
    tooltipOpen?: (e: kendo$dataviz$drawing$SurfaceTooltipOpenEvent) => void;
  }

  declare interface kendo$drawing$SurfaceEvent {
    sender: kendo$drawing$Surface;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare type kendo$drawing$SurfaceClickEvent = {
    element?: kendo$drawing$Element,
    originalEvent?: any
  } & kendo$drawing$SurfaceEvent;

  declare type kendo$drawing$SurfaceMouseenterEvent = {
    element?: kendo$drawing$Element,
    originalEvent?: any
  } & kendo$drawing$SurfaceEvent;

  declare type kendo$drawing$SurfaceMouseleaveEvent = {
    element?: kendo$drawing$Element,
    originalEvent?: any
  } & kendo$drawing$SurfaceEvent;

  declare type kendo$drawing$SurfaceTooltipCloseEvent = {
    element?: kendo$drawing$Element,
    target?: kendo$drawing$Element
  } & kendo$drawing$SurfaceEvent;

  declare type kendo$drawing$SurfaceTooltipOpenEvent = {
    element?: kendo$drawing$Element,
    target?: kendo$drawing$Element
  } & kendo$drawing$SurfaceEvent;

  declare class kendo$drawing$Text mixins kendo$drawing$Element {
    options: kendo$dataviz$drawing$TextOptions;
    constructor(
      content: string,
      position: kendo$geometry$Point,
      options?: kendo$dataviz$drawing$TextOptions
    ): this;
    bbox(): kendo$geometry$Rect;
    clip(): kendo$drawing$Path;
    clip(clip: kendo$drawing$Path): void;
    clippedBBox(): kendo$geometry$Rect;
    containsPoint(point: kendo$geometry$Point): boolean;
    content(): string;
    content(value: string): void;
    fill(color: string, opacity?: number): kendo$drawing$Text;
    opacity(): number;
    opacity(opacity: number): void;
    position(): kendo$geometry$Point;
    position(value: kendo$geometry$Point): void;
    stroke(color: string, width?: number, opacity?: number): kendo$drawing$Text;
    transform(): kendo$geometry$Transformation;
    transform(transform: kendo$geometry$Transformation): void;
    visible(): boolean;
    visible(visible: boolean): void;
  }

  declare interface kendo$drawing$TextOptions {
    name?: string;
    clip?: kendo$drawing$Path;
    cursor?: string;
    fill?: kendo$drawing$FillOptions;
    font?: string;
    opacity?: number;
    stroke?: kendo$drawing$StrokeOptions;
    tooltip?: kendo$drawing$TooltipOptions;
    transform?: kendo$geometry$Transformation;
    visible?: boolean;
  }

  declare interface kendo$drawing$TextEvent {
    sender: kendo$drawing$Text;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare interface kendo$drawing$TooltipOptions {
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

  declare function kendo$drawing$align(
    elements: any,
    rect: kendo$geometry$Rect,
    alignment: string
  ): void;

  declare function kendo$drawing$drawDOM(
    element: JQuery,
    options: any
  ): JQueryPromise<any>;

  declare function kendo$drawing$exportImage(
    group: kendo$drawing$Group,
    options: any
  ): JQueryPromise<any>;

  declare function kendo$drawing$exportPDF(
    group: kendo$drawing$Group,
    options: kendo$drawing$PDFOptions
  ): JQueryPromise<any>;

  declare function kendo$drawing$exportSVG(
    group: kendo$drawing$Group,
    options: any
  ): JQueryPromise<any>;

  declare function kendo$drawing$fit(
    element: kendo$drawing$Element,
    rect: kendo$geometry$Rect
  ): void;

  declare function kendo$drawing$stack(elements: any): void;

  declare function kendo$drawing$vAlign(
    elements: any,
    rect: kendo$geometry$Rect,
    alignment: string
  ): void;

  declare function kendo$drawing$vStack(elements: any): void;

  declare function kendo$drawing$vWrap(
    elements: any,
    rect: kendo$geometry$Rect
  ): any;

  declare function kendo$drawing$wrap(
    elements: any,
    rect: kendo$geometry$Rect
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
  declare class kendo$geometry$Arc mixins kendo$Observable {
    options: kendo$drawing$ArcOptions;
    anticlockwise: boolean;
    center: kendo$geometry$Point;
    endAngle: number;
    radiusX: number;
    radiusY: number;
    startAngle: number;
    constructor(
      center: any | kendo$geometry$Point,
      options?: kendo$drawing$ArcOptions
    ): this;
    bbox(matrix: kendo$geometry$Matrix): kendo$geometry$Rect;
    getAnticlockwise(): boolean;
    getCenter(): kendo$geometry$Point;
    getEndAngle(): number;
    getRadiusX(): number;
    getRadiusY(): number;
    getStartAngle(): number;
    pointAt(angle: number): kendo$geometry$Point;
    setAnticlockwise(value: boolean): kendo$geometry$Arc;
    setCenter(value: kendo$geometry$Point): kendo$geometry$Arc;
    setEndAngle(value: number): kendo$geometry$Arc;
    setRadiusX(value: number): kendo$geometry$Arc;
    setRadiusY(value: number): kendo$geometry$Arc;
    setStartAngle(value: number): kendo$geometry$Arc;
  }

  declare interface kendo$geometry$ArcOptions {
    name?: string;
  }

  declare interface kendo$geometry$ArcEvent {
    sender: kendo$geometry$Arc;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Circle mixins kendo$Observable {
    options: kendo$drawing$CircleOptions;
    center: kendo$geometry$Point;
    radius: number;
    constructor(center: any | kendo$geometry$Point, radius: number): this;
    bbox(matrix: kendo$geometry$Matrix): kendo$geometry$Rect;
    clone(): kendo$geometry$Circle;
    equals(other: kendo$geometry$Circle): boolean;
    getCenter(): kendo$geometry$Point;
    getRadius(): number;
    pointAt(angle: number): kendo$geometry$Point;
    setCenter(value: kendo$geometry$Point): kendo$geometry$Point;
    setCenter(value: any): kendo$geometry$Point;
    setRadius(value: number): kendo$geometry$Circle;
  }

  declare interface kendo$geometry$CircleOptions {
    name?: string;
  }

  declare interface kendo$geometry$CircleEvent {
    sender: kendo$geometry$Circle;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Matrix mixins kendo$Observable {
    options: kendo$dataviz$geometry$MatrixOptions;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    static rotate(angle: number, x: number, y: number): kendo$geometry$Matrix;
    static scale(scaleX: number, scaleY: number): kendo$geometry$Matrix;
    static translate(x: number, y: number): kendo$geometry$Matrix;
    static unit(): kendo$geometry$Matrix;
    clone(): kendo$geometry$Matrix;
    equals(other: kendo$geometry$Matrix): boolean;
    round(digits: number): kendo$geometry$Matrix;
    multiplyCopy(matrix: kendo$geometry$Matrix): kendo$geometry$Matrix;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
  }

  declare interface kendo$geometry$MatrixOptions {
    name?: string;
  }

  declare interface kendo$geometry$MatrixEvent {
    sender: kendo$geometry$Matrix;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Point mixins kendo$Observable {
    options: kendo$dataviz$geometry$PointOptions;
    x: number;
    y: number;
    constructor(x: number, y: number): this;
    static create(x: number, y: number): kendo$geometry$Point;
    static create(x: any, y: number): kendo$geometry$Point;
    static create(x: kendo$geometry$Point, y: number): kendo$geometry$Point;
    static min(): kendo$geometry$Point;
    static max(): kendo$geometry$Point;
    static minPoint(): kendo$geometry$Point;
    static maxPoint(): kendo$geometry$Point;
    clone(): kendo$geometry$Point;
    distanceTo(point: kendo$geometry$Point): number;
    equals(other: kendo$geometry$Point): boolean;
    getX(): number;
    getY(): number;
    move(x: number, y: number): kendo$geometry$Point;
    rotate(angle: number, center: kendo$geometry$Point): kendo$geometry$Point;
    rotate(angle: number, center: any): kendo$geometry$Point;
    round(digits: number): kendo$geometry$Point;
    scale(scaleX: number, scaleY: number): kendo$geometry$Point;
    scaleCopy(scaleX: number, scaleY: number): kendo$geometry$Point;
    setX(value: number): kendo$geometry$Point;
    setY(value: number): kendo$geometry$Point;
    toArray(digits: number): any;
    toString(digits: number, separator: string): string;
    transform(
      tansformation: kendo$geometry$Transformation
    ): kendo$geometry$Point;
    transformCopy(
      tansformation: kendo$geometry$Transformation
    ): kendo$geometry$Point;
    translate(dx: number, dy: number): kendo$geometry$Point;
    translateWith(vector: kendo$geometry$Point): kendo$geometry$Point;
    translateWith(vector: any): kendo$geometry$Point;
  }

  declare interface kendo$geometry$PointOptions {
    name?: string;
  }

  declare interface kendo$geometry$PointEvent {
    sender: kendo$geometry$Point;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Rect mixins kendo$Observable {
    options: kendo$drawing$RectOptions;
    origin: kendo$geometry$Point;
    size: kendo$geometry$Size;
    constructor(
      origin: kendo$geometry$Point | any,
      size: kendo$geometry$Size | any
    ): this;
    static fromPoints(
      pointA: kendo$geometry$Point,
      pointB: kendo$geometry$Point
    ): kendo$geometry$Rect;
    static union(
      rectA: kendo$geometry$Rect,
      rectB: kendo$geometry$Rect
    ): kendo$geometry$Rect;
    bbox(matrix: kendo$geometry$Matrix): kendo$geometry$Rect;
    bottomLeft(): kendo$geometry$Point;
    bottomRight(): kendo$geometry$Point;
    center(): kendo$geometry$Point;
    clone(): kendo$geometry$Rect;
    equals(other: kendo$geometry$Rect): boolean;
    getOrigin(): kendo$geometry$Point;
    getSize(): kendo$geometry$Size;
    height(): number;
    setOrigin(value: kendo$geometry$Point): kendo$geometry$Rect;
    setOrigin(value: any): kendo$geometry$Rect;
    setSize(value: kendo$geometry$Size): kendo$geometry$Rect;
    setSize(value: any): kendo$geometry$Rect;
    topLeft(): kendo$geometry$Point;
    topRight(): kendo$geometry$Point;
    width(): number;
  }

  declare interface kendo$geometry$RectOptions {
    name?: string;
  }

  declare interface kendo$geometry$RectEvent {
    sender: kendo$geometry$Rect;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Size mixins kendo$Observable {
    options: kendo$dataviz$geometry$SizeOptions;
    width: number;
    height: number;
    static create(width: number, height: number): kendo$geometry$Size;
    static create(width: any, height: number): kendo$geometry$Size;
    static create(
      width: kendo$geometry$Size,
      height: number
    ): kendo$geometry$Size;
    clone(): kendo$geometry$Size;
    equals(other: kendo$geometry$Size): boolean;
    getWidth(): number;
    getHeight(): number;
    setWidth(value: number): kendo$geometry$Size;
    setHeight(value: number): kendo$geometry$Size;
  }

  declare interface kendo$geometry$SizeOptions {
    name?: string;
  }

  declare interface kendo$geometry$SizeEvent {
    sender: kendo$geometry$Size;
    preventDefault: Function;
    isDefaultPrevented(): boolean;
  }

  declare class kendo$geometry$Transformation mixins kendo$Observable {
    options: kendo$dataviz$geometry$TransformationOptions;
    clone(): kendo$geometry$Transformation;
    equals(other: kendo$geometry$Transformation): boolean;
    matrix(): kendo$geometry$Matrix;
    multiply(
      transformation: kendo$geometry$Transformation
    ): kendo$geometry$Transformation;
    rotate(angle: number, center: any): kendo$geometry$Transformation;
    rotate(
      angle: number,
      center: kendo$geometry$Point
    ): kendo$geometry$Transformation;
    scale(scaleX: number, scaleY: number): kendo$geometry$Transformation;
    translate(x: number, y: number): kendo$geometry$Transformation;
  }

  declare interface kendo$geometry$TransformationOptions {
    name?: string;
  }

  declare interface kendo$geometry$TransformationEvent {
    sender: kendo$geometry$Transformation;
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
    viewModel: kendo$data$ObservableObject,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: JQuery,
    viewModel: any,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: JQuery,
    viewModel: kendo$data$ObservableObject,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: kendo$drawing$Element,
    viewModel: any,
    namespace?: any
  ): void;

  declare function kendo$bind(
    element: kendo$drawing$Element,
    viewModel: kendo$data$ObservableObject,
    namespace?: any
  ): void;

  declare function kendo$confirm(text: string): JQueryPromise<any>;

  declare function kendo$culture(culture: string): void;

  declare function kendo$destroy(element: string): void;

  declare function kendo$destroy(element: JQuery): void;

  declare function kendo$destroy(element: kendo$drawing$Element): void;

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

  declare function kendo$proxyModelSetters(data: kendo$data$Model): void;

  declare function kendo$resize(element: string, force: boolean): void;

  declare function kendo$resize(element: JQuery, force: boolean): void;

  declare function kendo$resize(
    element: kendo$drawing$Element,
    force: boolean
  ): void;

  declare function kendo$saveAs(options: any): void;

  declare function kendo$stringify(value: any): string;

  declare function kendo$throttle(fn: Function, timeout: number): Function;

  declare function kendo$touchScroller(element: string): void;

  declare function kendo$touchScroller(element: JQuery): void;

  declare function kendo$touchScroller(element: kendo$drawing$Element): void;

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

  declare function kendo$unbind(element: kendo$drawing$Element): void;

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
  declare class kendo$spreadsheet$CustomFilter mixins kendo$Observable {
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

  declare class kendo$spreadsheet$DynamicFilter mixins kendo$Observable {
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

  declare class kendo$spreadsheet$Range mixins kendo$Observable {
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

  declare class kendo$spreadsheet$Sheet mixins kendo$Observable {
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
    range(ref: string): kendo$spreadsheet$Range;
    range(
      rowIndex: number,
      columnIndex: number,
      rowCount?: number,
      columnCount?: number
    ): kendo$spreadsheet$Range;
    rowHeight(): void;
    rowHeight(index: number, width?: number): void;
    selection(): kendo$spreadsheet$Range;
    setDataSource(dataSource: kendo$data$DataSource, columns?: any): void;
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

  declare type kendo$spreadsheet$SheetChangeEvent = {} & kendo$spreadsheet$SheetEvent;

  declare class kendo$spreadsheet$TopFilter mixins kendo$Observable {
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

  declare class kendo$spreadsheet$ValueFilter mixins kendo$Observable {
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
  declare class kendo$ooxml$Workbook mixins kendo$Observable {
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
    kendoBindingTarget: kendo$data$BindingTarget;
  }
  declare interface JQueryAjaxSettings {}
  declare interface JQueryXHR {}
  declare interface JQueryEventObject {}
  declare interface JQueryPromise<T> {}
  declare interface JQuery {
    data(key: any): any;
    kendoAlert(): JQuery;
    kendoAlert(options: kendo$ui$AlertOptions): JQuery;
    data(key: "kendoAlert"): kendo$ui$Alert;
    kendoArcGauge(): JQuery;
    kendoArcGauge(options: kendo$dataviz$ui$ArcGaugeOptions): JQuery;
    data(key: "kendoArcGauge"): kendo$dataviz$ui$ArcGauge;
    kendoAutoComplete(): JQuery;
    kendoAutoComplete(options: kendo$ui$AutoCompleteOptions): JQuery;
    data(key: "kendoAutoComplete"): kendo$ui$AutoComplete;
    kendoBarcode(): JQuery;
    kendoBarcode(options: kendo$dataviz$ui$BarcodeOptions): JQuery;
    data(key: "kendoBarcode"): kendo$dataviz$ui$Barcode;
    kendoButton(): JQuery;
    kendoButton(options: kendo$ui$ButtonOptions): JQuery;
    data(key: "kendoButton"): kendo$ui$Button;
    kendoButtonGroup(): JQuery;
    kendoButtonGroup(options: kendo$ui$ButtonGroupOptions): JQuery;
    data(key: "kendoButtonGroup"): kendo$ui$ButtonGroup;
    kendoCalendar(): JQuery;
    kendoCalendar(options: kendo$ui$CalendarOptions): JQuery;
    data(key: "kendoCalendar"): kendo$ui$Calendar;
    kendoChart(): JQuery;
    kendoChart(options: kendo$dataviz$ui$ChartOptions): JQuery;
    data(key: "kendoChart"): kendo$dataviz$ui$Chart;
    kendoChat(): JQuery;
    kendoChat(options: kendo$ui$ChatOptions): JQuery;
    data(key: "kendoChat"): kendo$ui$Chat;
    kendoColorPalette(): JQuery;
    kendoColorPalette(options: kendo$ui$ColorPaletteOptions): JQuery;
    data(key: "kendoColorPalette"): kendo$ui$ColorPalette;
    kendoColorPicker(): JQuery;
    kendoColorPicker(options: kendo$ui$ColorPickerOptions): JQuery;
    data(key: "kendoColorPicker"): kendo$ui$ColorPicker;
    kendoComboBox(): JQuery;
    kendoComboBox(options: kendo$ui$ComboBoxOptions): JQuery;
    data(key: "kendoComboBox"): kendo$ui$ComboBox;
    kendoConfirm(): JQuery;
    kendoConfirm(options: kendo$ui$ConfirmOptions): JQuery;
    data(key: "kendoConfirm"): kendo$ui$Confirm;
    kendoContextMenu(): JQuery;
    kendoContextMenu(options: kendo$ui$ContextMenuOptions): JQuery;
    data(key: "kendoContextMenu"): kendo$ui$ContextMenu;
    kendoDateInput(): JQuery;
    kendoDateInput(options: kendo$ui$DateInputOptions): JQuery;
    data(key: "kendoDateInput"): kendo$ui$DateInput;
    kendoDatePicker(): JQuery;
    kendoDatePicker(options: kendo$ui$DatePickerOptions): JQuery;
    data(key: "kendoDatePicker"): kendo$ui$DatePicker;
    kendoDateRangePicker(): JQuery;
    kendoDateRangePicker(options: kendo$ui$DateRangePickerOptions): JQuery;
    data(key: "kendoDateRangePicker"): kendo$ui$DateRangePicker;
    kendoDateTimePicker(): JQuery;
    kendoDateTimePicker(options: kendo$ui$DateTimePickerOptions): JQuery;
    data(key: "kendoDateTimePicker"): kendo$ui$DateTimePicker;
    kendoDiagram(): JQuery;
    kendoDiagram(options: kendo$dataviz$ui$DiagramOptions): JQuery;
    data(key: "kendoDiagram"): kendo$dataviz$ui$Diagram;
    kendoDialog(): JQuery;
    kendoDialog(options: kendo$ui$DialogOptions): JQuery;
    data(key: "kendoDialog"): kendo$ui$Dialog;
    kendoDraggable(): JQuery;
    kendoDraggable(options: kendo$ui$DraggableOptions): JQuery;
    data(key: "kendoDraggable"): kendo$ui$Draggable;
    kendoDropDownList(): JQuery;
    kendoDropDownList(options: kendo$ui$DropDownListOptions): JQuery;
    data(key: "kendoDropDownList"): kendo$ui$DropDownList;
    kendoDropDownTree(): JQuery;
    kendoDropDownTree(options: kendo$ui$DropDownTreeOptions): JQuery;
    data(key: "kendoDropDownTree"): kendo$ui$DropDownTree;
    kendoDropTarget(): JQuery;
    kendoDropTarget(options: kendo$ui$DropTargetOptions): JQuery;
    data(key: "kendoDropTarget"): kendo$ui$DropTarget;
    kendoDropTargetArea(): JQuery;
    kendoDropTargetArea(options: kendo$ui$DropTargetAreaOptions): JQuery;
    data(key: "kendoDropTargetArea"): kendo$ui$DropTargetArea;
    kendoEditor(): JQuery;
    kendoEditor(options: kendo$ui$EditorOptions): JQuery;
    data(key: "kendoEditor"): kendo$ui$Editor;
    kendoFilterMenu(): JQuery;
    kendoFilterMenu(options: kendo$ui$FilterMenuOptions): JQuery;
    data(key: "kendoFilterMenu"): kendo$ui$FilterMenu;
    kendoFlatColorPicker(): JQuery;
    kendoFlatColorPicker(options: kendo$ui$FlatColorPickerOptions): JQuery;
    data(key: "kendoFlatColorPicker"): kendo$ui$FlatColorPicker;
    kendoGantt(): JQuery;
    kendoGantt(options: kendo$ui$GanttOptions): JQuery;
    data(key: "kendoGantt"): kendo$ui$Gantt;
    kendoGrid(): JQuery;
    kendoGrid(options: kendo$ui$GridOptions): JQuery;
    data(key: "kendoGrid"): kendo$ui$Grid;
    kendoLinearGauge(): JQuery;
    kendoLinearGauge(options: kendo$dataviz$ui$LinearGaugeOptions): JQuery;
    data(key: "kendoLinearGauge"): kendo$dataviz$ui$LinearGauge;
    kendoListBox(): JQuery;
    kendoListBox(options: kendo$ui$ListBoxOptions): JQuery;
    data(key: "kendoListBox"): kendo$ui$ListBox;
    kendoListView(): JQuery;
    kendoListView(options: kendo$ui$ListViewOptions): JQuery;
    data(key: "kendoListView"): kendo$ui$ListView;
    kendoMap(): JQuery;
    kendoMap(options: kendo$dataviz$ui$MapOptions): JQuery;
    data(key: "kendoMap"): kendo$dataviz$ui$Map;
    kendoMaskedTextBox(): JQuery;
    kendoMaskedTextBox(options: kendo$ui$MaskedTextBoxOptions): JQuery;
    data(key: "kendoMaskedTextBox"): kendo$ui$MaskedTextBox;
    kendoMediaPlayer(): JQuery;
    kendoMediaPlayer(options: kendo$ui$MediaPlayerOptions): JQuery;
    data(key: "kendoMediaPlayer"): kendo$ui$MediaPlayer;
    kendoMenu(): JQuery;
    kendoMenu(options: kendo$ui$MenuOptions): JQuery;
    data(key: "kendoMenu"): kendo$ui$Menu;
    kendoMobileActionSheet(): JQuery;
    kendoMobileActionSheet(options: kendo$mobile$ui$ActionSheetOptions): JQuery;
    data(key: "kendoMobileActionSheet"): kendo$mobile$ui$ActionSheet;
    kendoMobileBackButton(): JQuery;
    kendoMobileBackButton(options: kendo$mobile$ui$BackButtonOptions): JQuery;
    data(key: "kendoMobileBackButton"): kendo$mobile$ui$BackButton;
    kendoMobileButton(): JQuery;
    kendoMobileButton(options: kendo$mobile$ui$ButtonOptions): JQuery;
    data(key: "kendoMobileButton"): kendo$mobile$ui$Button;
    kendoMobileButtonGroup(): JQuery;
    kendoMobileButtonGroup(options: kendo$mobile$ui$ButtonGroupOptions): JQuery;
    data(key: "kendoMobileButtonGroup"): kendo$mobile$ui$ButtonGroup;
    kendoMobileCollapsible(): JQuery;
    kendoMobileCollapsible(options: kendo$mobile$ui$CollapsibleOptions): JQuery;
    data(key: "kendoMobileCollapsible"): kendo$mobile$ui$Collapsible;
    kendoMobileDetailButton(): JQuery;
    kendoMobileDetailButton(
      options: kendo$mobile$ui$DetailButtonOptions
    ): JQuery;
    data(key: "kendoMobileDetailButton"): kendo$mobile$ui$DetailButton;
    kendoMobileDrawer(): JQuery;
    kendoMobileDrawer(options: kendo$mobile$ui$DrawerOptions): JQuery;
    data(key: "kendoMobileDrawer"): kendo$mobile$ui$Drawer;
    kendoMobileLayout(): JQuery;
    kendoMobileLayout(options: kendo$mobile$ui$LayoutOptions): JQuery;
    data(key: "kendoMobileLayout"): kendo$mobile$ui$Layout;
    kendoMobileListView(): JQuery;
    kendoMobileListView(options: kendo$mobile$ui$ListViewOptions): JQuery;
    data(key: "kendoMobileListView"): kendo$mobile$ui$ListView;
    kendoMobileLoader(): JQuery;
    kendoMobileLoader(options: kendo$mobile$ui$LoaderOptions): JQuery;
    data(key: "kendoMobileLoader"): kendo$mobile$ui$Loader;
    kendoMobileModalView(): JQuery;
    kendoMobileModalView(options: kendo$mobile$ui$ModalViewOptions): JQuery;
    data(key: "kendoMobileModalView"): kendo$mobile$ui$ModalView;
    kendoMobileNavBar(): JQuery;
    kendoMobileNavBar(options: kendo$mobile$ui$NavBarOptions): JQuery;
    data(key: "kendoMobileNavBar"): kendo$mobile$ui$NavBar;
    kendoMobilePane(): JQuery;
    kendoMobilePane(options: kendo$mobile$ui$PaneOptions): JQuery;
    data(key: "kendoMobilePane"): kendo$mobile$ui$Pane;
    kendoMobilePopOver(): JQuery;
    kendoMobilePopOver(options: kendo$mobile$ui$PopOverOptions): JQuery;
    data(key: "kendoMobilePopOver"): kendo$mobile$ui$PopOver;
    kendoMobileScrollView(): JQuery;
    kendoMobileScrollView(options: kendo$mobile$ui$ScrollViewOptions): JQuery;
    data(key: "kendoMobileScrollView"): kendo$mobile$ui$ScrollView;
    kendoMobileScroller(): JQuery;
    kendoMobileScroller(options: kendo$mobile$ui$ScrollerOptions): JQuery;
    data(key: "kendoMobileScroller"): kendo$mobile$ui$Scroller;
    kendoMobileSplitView(): JQuery;
    kendoMobileSplitView(options: kendo$mobile$ui$SplitViewOptions): JQuery;
    data(key: "kendoMobileSplitView"): kendo$mobile$ui$SplitView;
    kendoMobileSwitch(): JQuery;
    kendoMobileSwitch(options: kendo$mobile$ui$SwitchOptions): JQuery;
    data(key: "kendoMobileSwitch"): kendo$mobile$ui$Switch;
    kendoMobileTabStrip(): JQuery;
    kendoMobileTabStrip(options: kendo$mobile$ui$TabStripOptions): JQuery;
    data(key: "kendoMobileTabStrip"): kendo$mobile$ui$TabStrip;
    kendoMobileView(): JQuery;
    kendoMobileView(options: kendo$mobile$ui$ViewOptions): JQuery;
    data(key: "kendoMobileView"): kendo$mobile$ui$View;
    kendoMultiColumnComboBox(): JQuery;
    kendoMultiColumnComboBox(
      options: kendo$ui$MultiColumnComboBoxOptions
    ): JQuery;
    data(key: "kendoMultiColumnComboBox"): kendo$ui$MultiColumnComboBox;
    kendoMultiSelect(): JQuery;
    kendoMultiSelect(options: kendo$ui$MultiSelectOptions): JQuery;
    data(key: "kendoMultiSelect"): kendo$ui$MultiSelect;
    kendoMultiViewCalendar(): JQuery;
    kendoMultiViewCalendar(options: kendo$ui$MultiViewCalendarOptions): JQuery;
    data(key: "kendoMultiViewCalendar"): kendo$ui$MultiViewCalendar;
    kendoNotification(): JQuery;
    kendoNotification(options: kendo$ui$NotificationOptions): JQuery;
    data(key: "kendoNotification"): kendo$ui$Notification;
    kendoNumericTextBox(): JQuery;
    kendoNumericTextBox(options: kendo$ui$NumericTextBoxOptions): JQuery;
    data(key: "kendoNumericTextBox"): kendo$ui$NumericTextBox;
    kendoPager(): JQuery;
    kendoPager(options: kendo$ui$PagerOptions): JQuery;
    data(key: "kendoPager"): kendo$ui$Pager;
    kendoPanelBar(): JQuery;
    kendoPanelBar(options: kendo$ui$PanelBarOptions): JQuery;
    data(key: "kendoPanelBar"): kendo$ui$PanelBar;
    kendoPivotConfigurator(): JQuery;
    kendoPivotConfigurator(options: kendo$ui$PivotConfiguratorOptions): JQuery;
    data(key: "kendoPivotConfigurator"): kendo$ui$PivotConfigurator;
    kendoPivotGrid(): JQuery;
    kendoPivotGrid(options: kendo$ui$PivotGridOptions): JQuery;
    data(key: "kendoPivotGrid"): kendo$ui$PivotGrid;
    kendoPopup(): JQuery;
    kendoPopup(options: kendo$ui$PopupOptions): JQuery;
    data(key: "kendoPopup"): kendo$ui$Popup;
    kendoProgressBar(): JQuery;
    kendoProgressBar(options: kendo$ui$ProgressBarOptions): JQuery;
    data(key: "kendoProgressBar"): kendo$ui$ProgressBar;
    kendoPrompt(): JQuery;
    kendoPrompt(options: kendo$ui$PromptOptions): JQuery;
    data(key: "kendoPrompt"): kendo$ui$Prompt;
    kendoQRCode(): JQuery;
    kendoQRCode(options: kendo$dataviz$ui$QRCodeOptions): JQuery;
    data(key: "kendoQRCode"): kendo$dataviz$ui$QRCode;
    kendoRadialGauge(): JQuery;
    kendoRadialGauge(options: kendo$dataviz$ui$RadialGaugeOptions): JQuery;
    data(key: "kendoRadialGauge"): kendo$dataviz$ui$RadialGauge;
    kendoRangeSlider(): JQuery;
    kendoRangeSlider(options: kendo$ui$RangeSliderOptions): JQuery;
    data(key: "kendoRangeSlider"): kendo$ui$RangeSlider;
    kendoResponsivePanel(): JQuery;
    kendoResponsivePanel(options: kendo$ui$ResponsivePanelOptions): JQuery;
    data(key: "kendoResponsivePanel"): kendo$ui$ResponsivePanel;
    kendoScheduler(): JQuery;
    kendoScheduler(options: kendo$ui$SchedulerOptions): JQuery;
    data(key: "kendoScheduler"): kendo$ui$Scheduler;
    kendoScrollView(): JQuery;
    kendoScrollView(options: kendo$ui$ScrollViewOptions): JQuery;
    data(key: "kendoScrollView"): kendo$ui$ScrollView;
    kendoSlider(): JQuery;
    kendoSlider(options: kendo$ui$SliderOptions): JQuery;
    data(key: "kendoSlider"): kendo$ui$Slider;
    kendoSortable(): JQuery;
    kendoSortable(options: kendo$ui$SortableOptions): JQuery;
    data(key: "kendoSortable"): kendo$ui$Sortable;
    kendoSparkline(): JQuery;
    kendoSparkline(options: kendo$dataviz$ui$SparklineOptions): JQuery;
    data(key: "kendoSparkline"): kendo$dataviz$ui$Sparkline;
    kendoSplitter(): JQuery;
    kendoSplitter(options: kendo$ui$SplitterOptions): JQuery;
    data(key: "kendoSplitter"): kendo$ui$Splitter;
    kendoSpreadsheet(): JQuery;
    kendoSpreadsheet(options: kendo$ui$SpreadsheetOptions): JQuery;
    data(key: "kendoSpreadsheet"): kendo$ui$Spreadsheet;
    kendoStockChart(): JQuery;
    kendoStockChart(options: kendo$dataviz$ui$StockChartOptions): JQuery;
    data(key: "kendoStockChart"): kendo$dataviz$ui$StockChart;
    kendoSwitch(): JQuery;
    kendoSwitch(options: kendo$ui$SwitchOptions): JQuery;
    data(key: "kendoSwitch"): kendo$ui$Switch;
    kendoTabStrip(): JQuery;
    kendoTabStrip(options: kendo$ui$TabStripOptions): JQuery;
    data(key: "kendoTabStrip"): kendo$ui$TabStrip;
    kendoTimePicker(): JQuery;
    kendoTimePicker(options: kendo$ui$TimePickerOptions): JQuery;
    data(key: "kendoTimePicker"): kendo$ui$TimePicker;
    kendoToolBar(): JQuery;
    kendoToolBar(options: kendo$ui$ToolBarOptions): JQuery;
    data(key: "kendoToolBar"): kendo$ui$ToolBar;
    kendoTooltip(): JQuery;
    kendoTooltip(options: kendo$ui$TooltipOptions): JQuery;
    data(key: "kendoTooltip"): kendo$ui$Tooltip;
    kendoTouch(): JQuery;
    kendoTouch(options: kendo$ui$TouchOptions): JQuery;
    data(key: "kendoTouch"): kendo$ui$Touch;
    kendoTreeList(): JQuery;
    kendoTreeList(options: kendo$ui$TreeListOptions): JQuery;
    data(key: "kendoTreeList"): kendo$ui$TreeList;
    kendoTreeMap(): JQuery;
    kendoTreeMap(options: kendo$dataviz$ui$TreeMapOptions): JQuery;
    data(key: "kendoTreeMap"): kendo$dataviz$ui$TreeMap;
    kendoTreeView(): JQuery;
    kendoTreeView(options: kendo$ui$TreeViewOptions): JQuery;
    data(key: "kendoTreeView"): kendo$ui$TreeView;
    kendoUpload(): JQuery;
    kendoUpload(options: kendo$ui$UploadOptions): JQuery;
    data(key: "kendoUpload"): kendo$ui$Upload;
    kendoValidator(): JQuery;
    kendoValidator(options: kendo$ui$ValidatorOptions): JQuery;
    data(key: "kendoValidator"): kendo$ui$Validator;
    kendoWindow(): JQuery;
    kendoWindow(options: kendo$ui$WindowOptions): JQuery;
    data(key: "kendoWindow"): kendo$ui$Window;
  }
}
