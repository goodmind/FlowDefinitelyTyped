declare module "yandex-maps" {
  declare var npm$namespace$ymaps: {
    ready: typeof ymaps$ready,

    Balloon: typeof ymaps$Balloon,
    Circle: typeof ymaps$Circle,
    Clusterer: typeof ymaps$Clusterer,
    ClusterPlacemark: typeof ymaps$ClusterPlacemark,
    Collection: typeof ymaps$Collection,
    Event: typeof ymaps$Event,
    GeoObject: typeof ymaps$GeoObject,
    GeoObjectCollection: typeof ymaps$GeoObjectCollection,
    Layer: typeof ymaps$Layer,
    Map: typeof ymaps$Map,
    MapType: typeof ymaps$MapType,
    Placemark: typeof ymaps$Placemark,
    Polygon: typeof ymaps$Polygon,
    Polyline: typeof ymaps$Polyline,
    Popup: typeof ymaps$Popup,
    Monitor: typeof ymaps$Monitor,
    behavior: typeof npm$namespace$ymaps$behavior,
    clusterer: typeof npm$namespace$ymaps$clusterer,
    collection: typeof npm$namespace$ymaps$collection,
    control: typeof npm$namespace$ymaps$control,
    data: typeof npm$namespace$ymaps$data,
    event: typeof npm$namespace$ymaps$event,
    geometry: typeof npm$namespace$ymaps$geometry,
    geometryEditor: typeof npm$namespace$ymaps$geometryEditor,
    geoObject: typeof npm$namespace$ymaps$geoObject,
    layout: typeof npm$namespace$ymaps$layout,
    map: typeof npm$namespace$ymaps$map,
    multiRouter: typeof npm$namespace$ymaps$multiRouter,
    option: typeof npm$namespace$ymaps$option,
    panorama: typeof npm$namespace$ymaps$panorama,
    router: typeof npm$namespace$ymaps$router,
    templateLayoutFactory: typeof npm$namespace$ymaps$templateLayoutFactory,
    util: typeof npm$namespace$ymaps$util,
    vow: typeof npm$namespace$ymaps$vow
  };
  declare interface ymaps$IClassConstructor<T> {
    new(): T;
  }

  declare type ymaps$ControlSingleKey =
    | "fullscreenControl"
    | "geolocationControl"
    | "routeEditor"
    | "rulerControl"
    | "searchControl"
    | "trafficControl"
    | "typeSelector"
    | "zoomControl";

  declare type ymaps$ControlSetKey =
    | "smallMapDefaultSet"
    | "mediumMapDefaultSet"
    | "largeMapDefaultSet"
    | "default";

  declare type ymaps$ControlKey = ymaps$ControlSingleKey | ymaps$ControlSetKey;

  declare type ymaps$OverlayKey =
    | "default#placemark"
    | "default#pin"
    | "default#circle"
    | "default#rectangle"
    | "default#polyline"
    | "default#polygon"
    | "hotspot#placemark"
    | "hotspot#circle"
    | "hotspot#rectangle"
    | "hotspot#polyline"
    | "hotspot#polygon"
    | "html#balloon"
    | "html#hint"
    | "html#placemark"
    | "html#rectangle"
    | string
    | ymaps$IClassConstructor<ymaps$IOverlay>
    | ((
        geometry: ymaps$IPixelLineStringGeometry,
        data: ymaps$IDataManager | { [key: string]: any },
        options: { [key: string]: any }
      ) => vow$Promise<string | ymaps$IClassConstructor<ymaps$IOverlay>>);

  declare type ymaps$InteractivityModelKey =
    | "default#opaque"
    | "default#geoObject"
    | "default#layer"
    | "default#transparent"
    | "default#silent"
    | string;

  declare type ymaps$PresetKey = string;

  declare var npm$namespace$ymaps$behavior: {
    storage: typeof ymaps$behavior$storage,

    DblClickZoom: typeof ymaps$behavior$DblClickZoom,
    Drag: typeof ymaps$behavior$Drag,
    LeftMouseButtonMagnifier: typeof ymaps$behavior$LeftMouseButtonMagnifier,
    MultiTouch: typeof ymaps$behavior$MultiTouch,
    RightMouseButtonMagnifier: typeof ymaps$behavior$RightMouseButtonMagnifier,
    RouteEditor: typeof ymaps$behavior$RouteEditor,
    Ruler: typeof ymaps$behavior$Ruler,
    ScrollZoom: typeof ymaps$behavior$ScrollZoom
  };
  declare class ymaps$behavior$DblClickZoom mixins IBehavior {
    constructor(options?: behavior$IDblClickZoomOptions): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    getParent(): ymaps$IControlParent | null;
    setParent(parent: ymaps$IControlParent): this;
  }

  declare type ymaps$behavior$IDblClickZoomOptions = {
    centering?: boolean,
    duration?: number
  } & IMapMarginOptions;

  declare class ymaps$behavior$Drag mixins IBehavior {
    constructor(options?: behavior$IDragOptions): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
  }

  declare interface ymaps$behavior$IDragOptions {
    actionCursor?: string;
    cursor?: string;
    inertia?: boolean;
    inertiaDuration?: number;
    tremor?: number;
  }

  declare class ymaps$behavior$LeftMouseButtonMagnifier mixins IBehavior {
    constructor(options?: behavior$ILeftMouseButtonMagnifierOptions): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
  }

  declare interface ymaps$behavior$ILeftMouseButtonMagnifierOptions {
    actionCursor?: string;
    cursor?: string;
    duration?: number;
  }

  declare class ymaps$behavior$MultiTouch mixins IBehavior {
    constructor(options?: behavior$IMultiTouchOptions): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
  }

  declare interface ymaps$behavior$IMultiTouchOptions {
    tremor?: number;
  }

  declare class ymaps$behavior$RightMouseButtonMagnifier mixins IBehavior {
    constructor(options?: behavior$IRightMouseButtonMagnifierOptions): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
  }

  declare interface ymaps$behavior$IRightMouseButtonMagnifierOptions {
    actionCursor?: string;
    duration?: number;
  }

  declare class ymaps$behavior$RouteEditor mixins IBehavior {
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getRoute(): router$Route;
    getState(): string;
    setState(state: string | null): void;
  }

  declare class ymaps$behavior$Ruler mixins IBehavior {
    constructor(options?: behavior$IRulerOptions): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    close(): boolean;
    getState(): string;
    setState(state: string | null): void;
  }

  declare interface ymaps$behavior$IRulerOptions {
    balloonAutoPan?: boolean;
  }

  declare class ymaps$behavior$ScrollZoom mixins IBehavior {
    constructor(options?: behavior$IScrollZoomOptions): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
  }

  declare interface ymaps$behavior$IScrollZoomOptions {
    maximumDelta?: number;
    speed?: number;
  }

  declare var ymaps$behavior$storage: util$Storage;

  declare var npm$namespace$ymaps$clusterer: {
    Balloon: typeof ymaps$clusterer$Balloon,
    Hint: typeof ymaps$clusterer$Hint
  };
  declare class ymaps$clusterer$Balloon
    mixins IBalloonManager<ymaps$Clusterer> {
    constructor(clusterer: ymaps$Clusterer): this;
    events: ymaps$IEventManager;
    autoPan(): vow$Promise<ymaps$Clusterer>;
    close(force?: boolean): vow$Promise<ymaps$Clusterer>;
    destroy(): void;
    getData(): { [key: string]: any } | null;
    getOptions(): ymaps$IOptionManager | null;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getPosition(): number[] | null;
    isOpen(): boolean;
    open(
      position?: number[],
      data?: { [key: string]: any } | string | HTMLElement,
      options?: { [key: string]: any }
    ): vow$Promise<ymaps$Clusterer>;
    setData(
      data: { [key: string]: any } | string | HTMLElement
    ): vow$Promise<ymaps$Clusterer>;
    setOptions(options: { [key: string]: any }): vow$Promise<ymaps$Clusterer>;
    setPosition(position: number[]): vow$Promise<ymaps$Clusterer>;
  }

  declare class ymaps$clusterer$Hint mixins IHintManager<ymaps$Clusterer> {
    constructor(clusterer: ymaps$Clusterer): this;
    events: ymaps$IEventManager;
    close(force?: boolean): vow$Promise<ymaps$Clusterer>;
    destroy(): void;
    getData(): { [key: string]: any } | null;
    getOptions(): ymaps$IOptionManager | null;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getPosition(): number[] | null;
    isOpen(): boolean;
    open(
      position?: number[],
      data?: { [key: string]: any } | string | HTMLElement,
      options?: { [key: string]: any }
    ): vow$Promise<ymaps$Clusterer>;
    setData(
      data: { [key: string]: any } | string | HTMLElement
    ): vow$Promise<ymaps$Clusterer>;
    setOptions(options: { [key: string]: any }): vow$Promise<ymaps$Clusterer>;
    setPosition(position: number[]): vow$Promise<ymaps$Clusterer>;
  }

  declare var npm$namespace$ymaps$collection: {
    Item: typeof ymaps$collection$Item
  };
  declare class ymaps$collection$Item
    mixins IChildOnMap, ICustomizable, IEventEmitter, IParentOnMap {
    constructor(options?: { [key: string]: any }): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getMap(): ymaps$Map;
    onAddToMap(map: ymaps$Map): void;
    onRemoveFromMap(oldMap: ymaps$Map): void;
  }

  declare var npm$namespace$ymaps$control: {
    Button: typeof ymaps$control$Button,
    FullscreenControl: typeof ymaps$control$FullscreenControl,
    GeolocationControl: typeof ymaps$control$GeolocationControl,
    ListBox: typeof ymaps$control$ListBox,
    ListBoxItem: typeof ymaps$control$ListBoxItem,
    Manager: typeof ymaps$control$Manager,
    RouteButton: typeof ymaps$control$RouteButton,
    RouteEditor: typeof ymaps$control$RouteEditor,
    RulerControl: typeof ymaps$control$RulerControl,
    SearchControl: typeof ymaps$control$SearchControl
  };
  declare class ymaps$control$Button mixins ICustomizable, ISelectableControl {
    constructor(parameters?: control$IButtonParameters | string): this;
    options: ymaps$IOptionManager;
    events: ymaps$IEventManager;
    ymaps$data: data$Manager;
    state: data$Manager;
    deselect(): void;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    isSelected(): boolean;
    select(): void;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
  }

  declare interface ymaps$control$IBaseButtonParametersOptions {
    adjustMapMargin?: boolean;
    float?: "none" | "left" | "right";
    floatIndex?: number;
    layout?: ymaps$IClassConstructor<ymaps$ISelectableControlLayout> | string;
    maxWidth?: number[][] | number[] | number;
    position?: {
      bottom?: number | string,
      left?: number | string,
      right?: number | string,
      top?: number | string
    };
    visible?: boolean;
  }

  declare interface ymaps$control$IButtonParameters {
    data?: {
      content?: string,
      image?: string,
      title?: string
    };
    options?: ymaps$control$IBaseButtonParametersOptions & {
      selectOnClick?: boolean,
      size?: "auto" | "small" | "medium" | "large"
    };
    state?: {
      enabled?: boolean,
      selected?: boolean
    };
  }

  declare class ymaps$control$FullscreenControl mixins Button {
    constructor(parameters?: control$IFullscreenControlParameters): this;
    enterFullscreen(): void;
    exitFullscreen(): void;
  }

  declare interface ymaps$control$IFullscreenControlParameters {
    data?: {
      title?: string
    };
    options?: ymaps$control$IBaseButtonParametersOptions & {
      collapseOnBlur?: boolean,
      expandOnClick?: boolean,
      popupFloat?: "left" | "right"
    };
    state?: {
      expanded?: boolean
    };
  }

  declare class ymaps$control$GeolocationControl mixins Button {
    constructor(parameters?: control$IGeolocationControlParameters): this;
  }

  declare type ymaps$control$IGeolocationControlParameters = {
    data?: {
      image?: string,
      title?: string
    },
    options?: ymaps$control$IBaseButtonParametersOptions
  } & IButtonParameters;

  declare class ymaps$control$ListBox
    mixins ICollection, IControl, ICustomizable {
    constructor(parameters?: control$IListBoxParameters): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    ymaps$data: data$Manager;
    state: data$Manager;
    add(object: { [key: string]: any }): this;
    getIterator(): ymaps$IIterator;
    remove(object: { [key: string]: any }): this;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
  }

  declare type ymaps$control$IListBoxParameters = {
    options?: ymaps$control$IBaseButtonParametersOptions & {
      noPlacemark?: boolean
    }
  } & IButtonParameters;

  declare class ymaps$control$ListBoxItem
    mixins ICustomizable, ISelectableControl {
    constructor(parameters?: control$IListBoxItemParameters): this;
    options: ymaps$IOptionManager;
    events: ymaps$IEventManager;
    ymaps$data: data$Manager;
    state: data$Manager;
    deselect(): void;
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    isSelected(): boolean;
    select(): void;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getMap(): ymaps$Map;
  }

  declare interface ymaps$control$IListBoxItemParameters {
    data?: {
      content?: string
    };
    options?: {
      layout?: string | ymaps$IClassConstructor<ymaps$ISelectableControlLayout>,
      selectableLayout?:
        | string
        | ymaps$IClassConstructor<ymaps$ISelectableControlLayout>,
      selectOnClick?: boolean,
      separatorLayout?:
        | string
        | ymaps$IClassConstructor<ymaps$ISelectableControlLayout>,
      type?: "selectable" | "separator",
      visible?: boolean
    };
    state?: {
      selected?: boolean
    };
  }

  declare class ymaps$control$Manager {
    constructor(
      map: ymaps$Map,
      controls?: Array<string | ymaps$IControl>,
      options?: control$IManagerOptions
    ): this;
    events: event$Manager;
    options: option$Manager;
    state: data$Manager;
    add(
      control: ymaps$IControl | ymaps$ControlKey,
      options?: control$IManagerControlOptions
    ): this;
    each(
      callback: (control: ymaps$IControl) => void,
      context: { [key: string]: any }
    ): this;
    get(index: number | string): ymaps$IControl | null;
    getChildElement(control: ymaps$IControl): vow$Promise<HTMLElement>;
    getContainer(): HTMLElement;
    getMap(): ymaps$Map;
    indexOf(childToFind: ymaps$IControl | string): number;
    remove(control: ymaps$IControl | string): this;
  }

  declare interface ymaps$control$IManagerOptions {
    margin?: number;
    pane?: ymaps$IPane;
    states?: string[];
  }

  declare interface ymaps$control$IManagerControlOptions {
    float?: "none" | "left" | "right";
    floatIndex?: number;
    position?: {
      bottom?: number | string,
      left?: number | string,
      right?: number | string,
      top?: number | string
    };
  }

  declare class ymaps$control$RouteButton mixins IControl, ICustomizable {
    constructor(parameters?: control$IRouteButtonParameters): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    routePanel: ymaps$IRoutePanel;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
  }

  declare interface ymaps$control$IRouteButtonParameters {
    options?: {
      adjustMapMargin?: boolean,
      collapseOnBlur?: boolean,
      float?: "none" | "left" | "right",
      floatIndex?: number,
      popupAnimate?: boolean,
      popupFloat?: "auto" | "left" | "right",
      popupWidth?: string,
      position?: {
        bottom?: number | string,
        left?: number | string,
        right?: number | string,
        top?: number | string
      },
      size?: "auto" | "small" | "medium" | "large",
      visible?: boolean
    };
    state?: {
      expanded?: boolean
    };
  }

  declare class ymaps$control$RouteEditor mixins Button {
    constructor(parameters?: control$IRouteEditorParameters): this;
    getRoute(): router$Route;
  }

  declare interface ymaps$control$IRouteEditorParameters {
    data?: {
      image?: string,
      title?: string
    };
    options?: ymaps$control$IBaseButtonParametersOptions;
    state?: {};
  }

  declare class ymaps$control$RulerControl mixins Button {
    constructor(parameters?: control$IRulerControlParameters): this;
  }

  declare interface ymaps$control$IRulerControlParameters {
    data?: {};
    options?: {
      adjustMapMargin?: boolean,
      position?: {
        bottom?: number | string,
        left?: number | string,
        right?: number | string,
        top?: number | string
      },
      scaleLine?: boolean,
      visible?: boolean
    };
    state?: {};
  }

  declare class ymaps$control$SearchControl mixins IControl, ICustomizable {
    constructor(parameters?: control$ISearchControlParameters): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    state: data$Manager;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    clear(): void;
    getMap(): ymaps$Map;
    getRequestString(): string;
    getResponseMetaData(): { [key: string]: any };
    getResult(index: number): vow$Promise<{ [key: string]: any }>;
    getResultsArray(): { [key: string]: any }[];
    getResultsCount(): number;
    getSelectedIndex(): number;
    hideResult(): void;
    search(request: string): vow$Promise<void>;
    showResult(index: number): this;
  }

  declare interface ymaps$control$ISearchControlParameters {
    data?: {};
    options?: {
      adjustMapMargin?: boolean,
      boundedBy?: number[][],
      fitMaxWidth?: boolean,
      float?: "none" | "left" | "right",
      floatIndex?: number,
      formLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
      kind?: "house" | "street" | "metro" | "district" | "locality",
      layout?: string | ymaps$IClassConstructor<ymaps$ISearchControlLayout>,
      maxWidth?: number[][] | number[] | number,
      noCentering?: boolean,
      noPlacemark?: boolean,
      noPopup?: boolean,
      noSelect?: boolean,
      noSuggestPanel?: boolean,
      placeholderContent?: string,
      popupItemLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
      popupLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
      position?: {
        bottom?: number | string,
        left?: number | string,
        right?: number | string,
        top?: number | string
      },
      provider?: ymaps$IGeocodeProvider | "yandex#map" | "yandex#search",
      searchCoordOrder?: "latlong" | "longlat",
      size?: "auto" | "small" | "medium" | "large",
      strictBounds?: boolean,
      suppressYandexSearch?: boolean,
      useMapBounds?: boolean,
      zoomMargin?: number,
      visible?: boolean
    };
    state?: {};
  }

  declare var npm$namespace$ymaps$data: {
    Manager: typeof ymaps$data$Manager
  };
  declare class ymaps$data$Manager mixins IDataManager, IFreezable {
    constructor(data?: { [key: string]: any }): this;
    events: ymaps$IEventManager;
    get(
      path: string,
      defaultValue: { [key: string]: any }
    ): { [key: string]: any };
    getAll(): { [key: string]: any };
    set(
      path: { [key: string]: any } | string,
      value: { [key: string]: any }
    ): this;
    setAll(): this;
    unset(path: { [key: string]: any } | string): this;
    unsetAll(): this;
    freeze(): ymaps$IFreezable;
    isFrozen(): boolean;
    unfreeze(): ymaps$IFreezable;
    add(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    getParent(): ymaps$IEventManager | null;
    group(): ymaps$IEventGroup;
    remove(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    setParent(parent: ymaps$IEventManager | null): this;
    fire(
      type: string,
      eventobject: { [key: string]: any } | ymaps$IEvent
    ): this;
  }

  declare var npm$namespace$ymaps$event: {
    Manager: typeof ymaps$event$Manager
  };
  declare class ymaps$event$Manager mixins IEventManager {
    constructor(params?: {
      context?: { [key: string]: any },
      controllers?: ymaps$IEventWorkflowController[],
      parent?: ymaps$IEventManager
    }): this;
    add(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    getParent(): ymaps$IEventManager | null;
    group(): ymaps$IEventGroup;
    remove(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    setParent(parent: ymaps$IEventManager | null): this;
    fire(
      type: string,
      eventobject: { [key: string]: any } | ymaps$IEvent
    ): this;
    createEventobject(
      type: string,
      event: { [key: string]: any },
      target: { [key: string]: any }
    ): ymaps$Event;
    once(
      types: string[][] | string[] | string,
      callback: (event: ymaps$IEvent) => any,
      context?: { [key: string]: any },
      priority?: number
    ): this;
  }

  declare var npm$namespace$ymaps$geometry: {
    LineString: typeof ymaps$geometry$LineString,
    Point: typeof ymaps$geometry$Point,
    Polygon: typeof ymaps$geometry$Polygon,
    base: typeof npm$namespace$ymaps$geometry$base
  };

  declare var npm$namespace$ymaps$geometry$base: {
    LineString: typeof ymaps$geometry$base$LineString,
    Point: typeof ymaps$geometry$base$Point,
    Polygon: typeof ymaps$geometry$base$Polygon
  };
  declare class ymaps$geometry$base$LineString mixins IBaseLineStringGeometry {
    events: ymaps$IEventManager;
    static fromEncodedCoordinates(
      encodedCoordinates: string
    ): geometry$LineString;
    static toEncodedCoordinates(geometry: geometry$LineString): string;
    getBounds(): number[][] | null;
    getType(): string;
    get(index: number): number[];
    getChildGeometry(index: number): ymaps$IPointGeometryAccess;
    getClosest(anchorPosition: number[]): { [key: string]: any };
    getCoordinates(): number[][];
    getLength(): number;
    insert(
      index: number,
      coordinates: number[][]
    ): ymaps$ILineStringGeometryAccess;
    remove(index: number): number[];
    remove(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    set(index: number, coordinates: number[]): ymaps$ILineStringGeometryAccess;
    setCoordinates(coordinates: number[]): ymaps$ILineStringGeometryAccess;
    splice(index: number, length: number): number[][];
    freeze(): ymaps$IFreezable;
    isFrozen(): boolean;
    unfreeze(): ymaps$IFreezable;
    add(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    getParent(): { [key: string]: any } | null;
    group(): ymaps$IEventGroup;
    setParent(parent: ymaps$IEventManager | null): this;
    fire(
      type: string,
      eventobject: { [key: string]: any } | ymaps$IEvent
    ): this;
  }

  declare class ymaps$geometry$base$Point mixins IBasePointGeometry {
    events: ymaps$IEventManager;
    getBounds(): number[][] | null;
    getType(): string;
    getCoordinates(): number[] | null;
    setCoordinates(coordinates: number[] | null): this;
  }

  declare class ymaps$geometry$base$Polygon mixins IBasePointGeometry {
    constructor(
      coordinates?: number[][][],
      fillRule?: "evenOdd" | "nonZero"
    ): this;
    events: ymaps$IEventManager;
    static fromEncodedCoordinates(
      encodedCoordinates: string
    ): ymaps$geometry$base$Polygon;
    static toEncodedCoordinates(geometry: ymaps$geometry$base$Polygon): string;
    contains(position: number[]): boolean;
    freeze(): ymaps$IFreezable;
    get(index: number): number[][];
    getBounds(): number[][] | null;
    getChildGeometry(index: number): ymaps$ILinearRingGeometryAccess;
    getClosest(anchorPosition: number[]): { [key: string]: any };
    getCoordinates(): number[] | null;
    getFillRule(): string;
    getLength(): number;
    getType(): string;
    insert(index: number, path: number[][]): ymaps$IPolygonGeometryAccess;
    isFrozen(): boolean;
    remove(index: number): ymaps$ILinearRingGeometryAccess;
    set(index: number, path: number[][]): ymaps$IPolygonGeometryAccess;
    setCoordinates(coordinates: number[] | null): this;
    setFillRule(fillRule: string): ymaps$IPolygonGeometryAccess;
    splice(index: number, number: number): ymaps$ILinearRingGeometryAccess[];
    unfreeze(): ymaps$IFreezable;
  }

  declare class ymaps$geometry$LineString mixins ILineStringGeometry {
    constructor(
      coordinates?: number[][],
      options?: {
        coordRendering?: "shortestPath" | "straightPath",
        geodesic?: boolean,
        pixelRendering?: "jumpy" | "static",
        projection?: ymaps$IProjection,
        simplification?: boolean
      }
    ): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    static fromEncodedCoordinates(
      encodedCoordinates: string
    ): ymaps$geometry$LineString;
    static toEncodedCoordinates(geometry: ymaps$geometry$LineString): string;
    getMap(): ymaps$Map | null;
    getPixelGeometry(options?: { [key: string]: any }): ymaps$IPixelGeometry;
    setMap(map: ymaps$Map): void;
    getBounds(): number[][] | null;
    getType(): string;
    get(index: number): number[];
    getChildGeometry(index: number): ymaps$IPointGeometryAccess;
    getClosest(anchorPosition: number[]): { [key: string]: any };
    getCoordinates(): number[][];
    getLength(): number;
    insert(
      index: number,
      coordinates: number[][]
    ): ymaps$ILineStringGeometryAccess;
    remove(index: number): number[];
    remove(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    set(index: number, coordinates: number[]): ymaps$ILineStringGeometryAccess;
    setCoordinates(coordinates: number[]): ymaps$ILineStringGeometryAccess;
    splice(index: number, length: number): number[][];
    freeze(): ymaps$IFreezable;
    isFrozen(): boolean;
    unfreeze(): ymaps$IFreezable;
    add(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    getParent(): { [key: string]: any } | null;
    group(): ymaps$IEventGroup;
    setParent(parent: ymaps$IEventManager | null): this;
    fire(
      type: string,
      eventobject: { [key: string]: any } | ymaps$IEvent
    ): this;
  }

  declare class ymaps$geometry$Point mixins IPointGeometry {
    constructor(coordinates?: number[] | null): this;
    options: ymaps$IOptionManager;
    events: ymaps$IEventManager;
    getMap(): ymaps$Map | null;
    getPixelGeometry(options?: { [key: string]: any }): ymaps$IPixelGeometry;
    setMap(map: ymaps$Map): void;
    getBounds(): number[][] | null;
    getType(): string;
    getCoordinates(): number[] | null;
    setCoordinates(coordinates: number[] | null): this;
  }

  declare class ymaps$geometry$Polygon mixins IPolygonGeometry {
    constructor(
      coordinates?: number[][][],
      fillRule?: "evenOdd" | "nonZero",
      options?: { [key: string]: any }
    ): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    static fromEncodedCoordinates(
      encodedCoordinates: string
    ): ymaps$geometry$Polygon;
    static toEncodedCoordinates(geometry: ymaps$geometry$Polygon): string;
    add(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    contains(position: number[]): boolean;
    fire(
      type: string,
      eventobject: { [key: string]: any } | ymaps$IEvent
    ): this;
    freeze(): ymaps$IFreezable;
    get(index: number): number[][];
    getBounds(): number[][] | null;
    getChildGeometry(index: number): ymaps$ILinearRingGeometryAccess;
    getClosest(anchorPosition: number[]): { [key: string]: any };
    getCoordinates(): number[][][];
    getFillRule(): string;
    getLength(): number;
    getMap(): ymaps$Map | null;
    getParent(): { [key: string]: any } | null;
    getPixelGeometry(options?: { [key: string]: any }): ymaps$IPixelGeometry;
    getType(): string;
    group(): ymaps$IEventGroup;
    insert(index: number, path: number[][]): ymaps$IPolygonGeometryAccess;
    isFrozen(): boolean;
    remove(index: number): ymaps$ILinearRingGeometryAccess;
    set(index: number, path: number[][]): ymaps$IPolygonGeometryAccess;
    setCoordinates(coordinates: number[][][]): ymaps$IPolygonGeometryAccess;
    setFillRule(fillRule: string): ymaps$IPolygonGeometryAccess;
    setMap(map: ymaps$Map): void;
    setParent(parent: { [key: string]: any } | null): this;
    splice(index: number, number: number): ymaps$ILinearRingGeometryAccess[];
    unfreeze(): ymaps$IFreezable;
  }

  declare var npm$namespace$ymaps$geometryEditor: {
    Circle: typeof ymaps$geometryEditor$Circle,
    LineString: typeof ymaps$geometryEditor$LineString,
    Point: typeof ymaps$geometryEditor$Point,
    Polygon: typeof ymaps$geometryEditor$Polygon,
    model: typeof npm$namespace$ymaps$geometryEditor$model,
    view: typeof npm$namespace$ymaps$geometryEditor$view
  };
  declare class ymaps$geometryEditor$Circle mixins IGeometryEditor {
    constructor(
      geometry: ymaps$ICircleGeometry,
      options?: { [key: string]: any }
    ): this;
    events: ymaps$IEventManager;
    ymaps$geometry: ymaps$IGeometry;
    options: ymaps$IOptionManager;
    state: ymaps$IDataManager;
    startDrawing(): vow$Promise;
    startEditing(): void;
    stopDrawing(): vow$Promise;
    stopEditing(): void;
  }

  declare class ymaps$geometryEditor$LineString mixins IGeometryEditor {
    constructor(
      geometry: ymaps$ILineStringGeometry,
      options?: { [key: string]: any }
    ): this;
    events: ymaps$IEventManager;
    ymaps$geometry: ymaps$IGeometry;
    options: ymaps$IOptionManager;
    state: ymaps$IDataManager;
    getModel(): vow$Promise;
    getModelSync(): model$RootLineString | null;
    getView(): vow$Promise;
    getViewSync(): view$Path | null;
    startDrawing(): vow$Promise;
    startEditing(): vow$Promise;
    startFraming(): vow$Promise;
    stopDrawing(): void;
    stopEditing(): void;
    stopFraming(): void;
  }

  declare var npm$namespace$ymaps$geometryEditor$model: {
    ChildLinearRing: typeof ymaps$geometryEditor$model$ChildLinearRing,
    ChildLineString: typeof ymaps$geometryEditor$model$ChildLineString,
    ChildVertex: typeof ymaps$geometryEditor$model$ChildVertex,
    Edge: typeof ymaps$geometryEditor$model$Edge,
    EdgeGeometry: typeof ymaps$geometryEditor$model$EdgeGeometry,
    RootLineString: typeof ymaps$geometryEditor$model$RootLineString,
    RootPolygon: typeof ymaps$geometryEditor$model$RootPolygon
  };
  declare class ymaps$geometryEditor$model$ChildLinearRing
    mixins ChildLineString {}

  declare class ymaps$geometryEditor$model$ChildLineString
    mixins IGeometryEditorChildModel {
    editor: ymaps$IGeometryEditor;
    events: ymaps$IEventManager;
    ymaps$geometry: ymaps$IBaseGeometry;
    destroy(): void;
    getAllVerticesNumber(): number;
    getEdgeModels(): view$Edge[];
    getIndex(): number;
    getParent(): ymaps$IGeometryEditorModel;
    getPixels(): number[];
    getVertexModels(): model$ChildVertex[];
    setIndex(index: number): void;
    setPixels(pixels: number[]): void;
    spliceVertices(start: number, deleteCount: number): number[][];
  }

  declare class ymaps$geometryEditor$model$ChildVertex
    mixins IGeometryEditorChildModel {
    editor: ymaps$IGeometryEditor;
    events: ymaps$IEventManager;
    ymaps$geometry: ymaps$IBaseGeometry;
    destroy(): void;
    getAllVerticesNumber(): number;
    getIndex(): number;
    getNextVertex(): ymaps$geometryEditor$model$ChildVertex | null;
    getParent(): ymaps$IGeometryEditorModel;
    getPixels(): number[];
    getPrevVertex(): ymaps$geometryEditor$model$ChildVertex | null;
    setGlobalPixels(pixels: number[]): void;
    setIndex(index: number): void;
    setNextVertex(nextVertex: ymaps$geometryEditor$model$ChildVertex): void;
    setPixels(pixels: number[]): void;
    setPrevVertex(prevVertex: ymaps$geometryEditor$model$ChildVertex): void;
  }

  declare class ymaps$geometryEditor$model$Edge
    mixins IGeometryEditorRootModel {
    events: ymaps$IEventManager;
    destroy(): void;
    getNextVertex(): ymaps$geometryEditor$model$ChildVertex | null;
    getPixels(): number[];
    getPrevVertex(): ymaps$geometryEditor$model$ChildVertex | null;
    setNextVertex(nextVertex: ymaps$geometryEditor$model$ChildVertex): void;
    setPrevVertex(prevVertex: ymaps$geometryEditor$model$ChildVertex): void;
  }

  declare class ymaps$geometryEditor$model$EdgeGeometry mixins IGeometry {
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    getBounds(): number[][] | null;
    getMap(): ymaps$Map | null;
    getPixelGeometry(options?: { [key: string]: any }): ymaps$IPixelGeometry;
    getType(): string;
    setMap(map: ymaps$Map): void;
  }

  declare class ymaps$geometryEditor$model$RootLineString
    mixins IGeometryEditorRootModel {
    events: ymaps$IEventManager;
    destroy(): void;
    getAllVerticesNumber(): number;
    getPixels(): number[];
    getVertexModels(): ymaps$geometryEditor$model$ChildVertex[];
    spliceVertices(start: number, deleteCount: number): number[][];
  }

  declare class ymaps$geometryEditor$model$RootPolygon
    mixins IGeometryEditorRootModel {
    events: ymaps$IEventManager;
    destroy(): void;
    getAllVerticesNumber(): number;
    getPathModels(): ymaps$geometryEditor$model$ChildLinearRing[];
    getPixels(): number[];
    splicePaths(start: number, deleteCount: number): number[][];
  }

  declare class ymaps$geometryEditor$Point mixins IGeometryEditor {
    events: ymaps$IEventManager;
    ymaps$geometry: ymaps$IGeometry;
    options: ymaps$IOptionManager;
    state: ymaps$IDataManager;
    startDrawing(): vow$Promise;
    startEditing(): void;
    stopDrawing(): vow$Promise;
    stopEditing(): void;
  }

  declare class ymaps$geometryEditor$Polygon mixins IGeometryEditor {
    constructor(
      geometry: ymaps$IPolygonGeometry,
      options: { [key: string]: any }
    ): this;
    events: ymaps$IEventManager;
    ymaps$geometry: ymaps$IGeometry;
    options: ymaps$IOptionManager;
    state: ymaps$IDataManager;
    getModel(): vow$Promise;
    getModelSync(): model$RootPolygon | null;
    getView(): vow$Promise;
    getViewSync(): view$MultiPath | null;
    startDrawing(): vow$Promise;
    startEditing(): vow$Promise;
    startFraming(): vow$Promise;
    stopDrawing(): void;
    stopEditing(): void;
    stopFraming(): void;
  }

  declare var npm$namespace$ymaps$geometryEditor$view: {
    Edge: typeof ymaps$geometryEditor$view$Edge,
    MultiPath: typeof ymaps$geometryEditor$view$MultiPath,
    Path: typeof ymaps$geometryEditor$view$Path,
    Vertex: typeof ymaps$geometryEditor$view$Vertex
  };
  declare class ymaps$geometryEditor$view$Edge {
    getPlacemark(): ymaps$GeoObject;
  }

  declare class ymaps$geometryEditor$view$MultiPath {
    getEdgePlacemarks(): ymaps$GeoObjectCollection;
    getPathViews(): masstransit$Path[];
    getVertexPlacemarks(): ymaps$GeoObjectCollection;
  }

  declare class ymaps$geometryEditor$view$Path {
    getEdgePlacemarks(): ymaps$GeoObjectCollection;
    getEdgeViews(): ymaps$geometryEditor$view$Edge[];
    getVertexPlacemarks(): ymaps$GeoObjectCollection;
    getVertexViews(): view$Vertex[];
  }

  declare class ymaps$geometryEditor$view$Vertex {
    getPlacemark(): ymaps$GeoObject;
  }

  declare var npm$namespace$ymaps$geoObject: {
    Balloon: typeof ymaps$geoObject$Balloon,
    Hint: typeof ymaps$geoObject$Hint,
    Sequence: typeof ymaps$geoObject$Sequence
  };
  declare class ymaps$geoObject$Balloon
    mixins IBalloonManager<ymaps$GeoObject> {
    constructor(geoObject: ymaps$GeoObject): this;
    events: ymaps$IEventManager;
    autoPan(): vow$Promise<ymaps$GeoObject>;
    close(force?: boolean): vow$Promise<ymaps$GeoObject>;
    destroy(): void;
    getData(): { [key: string]: any } | null;
    getOptions(): ymaps$IOptionManager | null;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getPosition(): number[] | null;
    isOpen(): boolean;
    open(
      position?: number[],
      data?: { [key: string]: any } | string | HTMLElement,
      options?: { [key: string]: any }
    ): vow$Promise<ymaps$GeoObject>;
    setData(
      data: { [key: string]: any } | string | HTMLElement
    ): vow$Promise<ymaps$GeoObject>;
    setOptions(options: { [key: string]: any }): vow$Promise<ymaps$GeoObject>;
    setPosition(position: number[]): vow$Promise<ymaps$GeoObject>;
  }

  declare class ymaps$geoObject$Hint mixins IHintManager<ymaps$GeoObject> {
    constructor(geoObject: ymaps$GeoObject): this;
    events: ymaps$IEventManager;
    close(force?: boolean): vow$Promise<ymaps$GeoObject>;
    destroy(): void;
    getData(): { [key: string]: any } | null;
    getOptions(): ymaps$IOptionManager | null;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getPosition(): number[] | null;
    isOpen(): boolean;
    open(
      position?: number[],
      data?: { [key: string]: any } | string | HTMLElement,
      options?: { [key: string]: any }
    ): vow$Promise<ymaps$GeoObject>;
    setData(
      data: { [key: string]: any } | string | HTMLElement
    ): vow$Promise<ymaps$GeoObject>;
    setOptions(options: { [key: string]: any }): vow$Promise<ymaps$GeoObject>;
    setPosition(position: number[]): vow$Promise<ymaps$GeoObject>;
  }

  declare class ymaps$geoObject$Sequence mixins IGeoObject, IGeoObjectSequence {
    constructor(geoObject: ymaps$GeoObject): this;
    ymaps$geometry: ymaps$IGeometry | null;
    properties: ymaps$IDataManager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getMap(): ymaps$Map;
    each(
      callback: (geoObject: ymaps$IGeoObject) => void,
      context?: { [key: string]: any }
    ): void;
    get(index: number): ymaps$IGeoObject;
    getBounds(): number[][] | null;
    getIterator(): ymaps$IIterator;
    getLength(): number;
    getPixelBounds(): number[][] | null;
    indexOf(geoObject: ymaps$IGeoObject): number;
  }

  declare var npm$namespace$ymaps$layout: {
    templateBased: typeof npm$namespace$ymaps$layout$templateBased
  };

  declare var npm$namespace$ymaps$layout$templateBased: {
    Base: typeof ymaps$layout$templateBased$Base
  };
  declare class ymaps$layout$templateBased$Base mixins ILayout {
    constructor(data: { [key: string]: any }): this;
    events: ymaps$IEventManager;
    destroy(): void;
    getData(): { [key: string]: any };
    getParentElement(): HTMLElement;
    getShape(): ymaps$IShape | null;
    isEmpty(): boolean;
    setData(data: { [key: string]: any }): void;
    setParentElement(parent: HTMLElement | null): this;
    build(): void;
    clear(): void;
    onSublayoutSizeChange(
      sublayoutInfo: { [key: string]: any },
      nodeSizeByContent: { [key: string]: any }
    ): void;
    rebuild(): void;
  }

  declare var npm$namespace$ymaps$map: {
    Balloon: typeof ymaps$map$Balloon,
    Container: typeof ymaps$map$Container,
    Converter: typeof ymaps$map$Converter,
    Copyrights: typeof ymaps$map$Copyrights,
    GeoObjects: typeof ymaps$map$GeoObjects,
    Hint: typeof ymaps$map$Hint,
    ZoomRange: typeof ymaps$map$ZoomRange,
    action: typeof npm$namespace$ymaps$map$action,
    behavior: typeof npm$namespace$ymaps$map$behavior,
    layer: typeof npm$namespace$ymaps$map$layer,
    margin: typeof npm$namespace$ymaps$map$margin,
    pane: typeof npm$namespace$ymaps$map$pane
  };

  declare var npm$namespace$ymaps$map$action: {
    Manager: typeof ymaps$map$action$Manager
  };
  declare class ymaps$map$action$Manager mixins IEventEmitter {
    constructor(map: ymaps$Map): this;
    events: ymaps$IEventManager;
    breakTick(): void;
    execute(action: ymaps$IMapAction): void;
    getCurrentState(): { [key: string]: any };
    getMap(): ymaps$Map;
    setCorrection(userFunction: () => void): void;
    stop(): void;
  }

  declare var npm$namespace$ymaps$map$behavior: {
    Manager: typeof ymaps$map$behavior$Manager
  };
  declare class ymaps$map$behavior$Manager
    mixins ICustomizable, IEventEmitter, IParentOnMap {
    constructor(
      map: ymaps$Map,
      behaviors?: string[][] | string[],
      options?: { [key: string]: any }
    ): this;
    options: ymaps$IOptionManager;
    events: ymaps$IEventManager;
    getMap(): ymaps$Map;
    disable(behaviors: string[][] | string[] | string): this;
    enable(behaviors: string[][] | string[] | string): this;
    get(behaviorName: string): ymaps$IBehavior;
    isEnabled(behaviorName: string): boolean;
  }

  declare var npm$namespace$ymaps$map$layer: {
    Manager: typeof ymaps$map$layer$Manager
  };
  declare class ymaps$map$layer$Manager mixins ILayer, IMapObjectCollection {
    constructor(
      map: ymaps$Map,
      options?: {
        trafficImageZIndex?: number,
        trafficInfoZIndex?: number,
        trafficJamZIndex?: number
      }
    ): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    add(object: { [key: string]: any }): this;
    getIterator(): ymaps$IIterator;
    remove(object: { [key: string]: any }): this;
    getMap(): ymaps$Map;
  }

  declare var npm$namespace$ymaps$map$margin: {
    Accessor: typeof ymaps$map$margin$Accessor,
    Manager: typeof ymaps$map$margin$Manager
  };
  declare class ymaps$map$margin$Accessor {
    constructor(screenArea: { [key: string]: any }): this;
    getArea(): { [key: string]: any };
    remove(): this;
    setArea(screenArea: { [key: string]: any }): this;
  }

  declare class ymaps$map$margin$Manager {
    constructor(map: ymaps$Map): this;
    addArea(screenArea: { [key: string]: any }): ymaps$map$margin$Accessor;
    destroy(): this;
    getMargin(): number[];
    getOffset(): number[];
    setDefaultMargin(margin: number[][] | number[] | number): void;
  }

  declare var npm$namespace$ymaps$map$pane: {
    Manager: typeof ymaps$map$pane$Manager
  };
  declare class ymaps$map$pane$Manager {
    constructor(map: ymaps$Map): this;
    append(key: string, pane: ymaps$IPane): void;
    destroy(): void;
    get(key: string): ymaps$IPane | null;
    getLower(): string;
    getUpper(): string;
    insertBefore(key: string, pane: ymaps$IPane, referenceKey: string): void;
    remove(pane: ymaps$IPane): void;
  }

  declare class ymaps$map$Balloon mixins IBalloonManager<ymaps$map$Balloon> {
    constructor(map: ymaps$Map): this;
    events: ymaps$IEventManager;
    autoPan(): vow$Promise<ymaps$map$Balloon>;
    close(force?: boolean): vow$Promise<ymaps$map$Balloon>;
    destroy(): void;
    getData(): { [key: string]: any } | null;
    getOptions(): ymaps$IOptionManager | null;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getPosition(): number[] | null;
    isOpen(): boolean;
    open(
      position?: number[],
      data?: { [key: string]: any } | string | HTMLElement,
      options?: { [key: string]: any }
    ): vow$Promise<ymaps$map$Balloon>;
    setData(
      data: { [key: string]: any } | string | HTMLElement
    ): vow$Promise<ymaps$map$Balloon>;
    setOptions(options: { [key: string]: any }): vow$Promise<ymaps$map$Balloon>;
    setPosition(position: number[]): vow$Promise<ymaps$map$Balloon>;
  }

  declare class ymaps$map$Container mixins IDomEventEmitter {
    constructor(parentElement: string | HTMLElement): this;
    events: ymaps$IEventManager;
    enterFullscreen(): void;
    exitFullscreen(): void;
    fitToViewport(preservePixelPosition?: boolean): void;
    getElement(): HTMLElement;
    getOffset(): number[];
    getParentElement(): HTMLElement;
    getSize(): number[];
    isFullscreen(): boolean;
  }

  declare class ymaps$map$Converter {
    constructor(map: ymaps$Map): this;
    globalToPage(globalPixelPoint: number[]): number[];
    pageToGlobal(pagePixelPoint: number[]): number[];
  }

  declare class ymaps$map$Copyrights {
    constructor(map: ymaps$Map): this;
    add(
      customCopyrights: string | HTMLElement | Array<string | HTMLElement>
    ): ymaps$ICopyrightsAccessor;
    addProvider(provider: ymaps$ICopyrightsProvider): this;
    get(
      point?: number[],
      zoom?: number
    ): vow$Promise<Array<string | HTMLElement>>;
    getPromoLink(): string;
    removeProvider(provider: ymaps$ICopyrightsProvider): this;
  }

  declare class ymaps$map$GeoObjects mixins IGeoObjectCollection {
    constructor(map: ymaps$Map, options?: { [key: string]: any }): this;
    options: ymaps$IOptionManager;
    events: ymaps$IEventManager;
    add(child: ymaps$IGeoObject, index?: number): this;
    each(
      callback: (object: ymaps$IGeoObject) => void,
      context: { [key: string]: any }
    ): void;
    get(index: number): ymaps$IGeoObject;
    getBounds(): number[][] | null;
    getIterator(): ymaps$IIterator;
    getLength(): number;
    getPixelBounds(): number[][] | null;
    indexOf(object: ymaps$IGeoObject): number;
    remove(child: ymaps$IGeoObject): this;
    removeAll(): this;
    set(index: number, child: ymaps$IGeoObject): this;
    splice(index: number, length: number): this;
    getMap(): ymaps$Map;
  }

  declare class ymaps$map$Hint mixins IHintManager<ymaps$map$Hint> {
    constructor(map: ymaps$Map): this;
    events: ymaps$IEventManager;
    close(force?: boolean): vow$Promise<ymaps$map$Hint>;
    destroy(): void;
    getData(): { [key: string]: any } | null;
    getOptions(): ymaps$IOptionManager | null;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getPosition(): number[] | null;
    isOpen(): boolean;
    open(
      position?: number[],
      data?: { [key: string]: any } | string | HTMLElement,
      options?: { [key: string]: any }
    ): vow$Promise<ymaps$map$Hint>;
    setData(
      data: { [key: string]: any } | string | HTMLElement
    ): vow$Promise<ymaps$map$Hint>;
    setOptions(options: { [key: string]: any }): vow$Promise<ymaps$map$Hint>;
    setPosition(position: number[]): vow$Promise<ymaps$map$Hint>;
  }

  declare class ymaps$map$ZoomRange mixins IEventEmitter {
    constructor(map: ymaps$Map, constraints: number[]): this;
    events: ymaps$IEventManager;
    get(coords?: number[]): vow$Promise<number[]>;
    getCurrent(): number[];
  }

  declare var npm$namespace$ymaps$multiRouter: {
    EditorAddon: typeof ymaps$multiRouter$EditorAddon,
    MultiRoute: typeof ymaps$multiRouter$MultiRoute,
    MultiRouteModel: typeof ymaps$multiRouter$MultiRouteModel,
    ViaPoint: typeof ymaps$multiRouter$ViaPoint,
    ViaPointModel: typeof ymaps$multiRouter$ViaPointModel,
    WayPoint: typeof ymaps$multiRouter$WayPoint,
    WayPointModel: typeof ymaps$multiRouter$WayPointModel,
    driving: typeof npm$namespace$ymaps$multiRouter$driving,
    masstransit: typeof npm$namespace$ymaps$multiRouter$masstransit
  };

  declare var npm$namespace$ymaps$multiRouter$driving: {
    Path: typeof ymaps$multiRouter$driving$Path,
    PathModel: typeof ymaps$multiRouter$driving$PathModel,
    Route: typeof ymaps$multiRouter$driving$Route,
    RouteModel: typeof ymaps$multiRouter$driving$RouteModel,
    Segment: typeof ymaps$multiRouter$driving$Segment,
    SegmentModel: typeof ymaps$multiRouter$driving$SegmentModel
  };
  declare class ymaps$multiRouter$driving$Path mixins IGeoObject {
    ymaps$geometry: ymaps$IGeometry | null;
    properties: data$Manager;
    state: ymaps$IDataManager;
    geometryEditor$model: masstransit$PathModel;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): { [key: string]: any } | null;
    setParent(parent: { [key: string]: any }): this;
    getMap(): ymaps$Map;
    getSegments(): ymaps$GeoObjectCollection;
  }

  declare class ymaps$multiRouter$driving$PathModel mixins IEventEmitter {
    events: ymaps$IEventManager;
    properties: data$Manager;
    route: masstransit$RouteModel;
    destroy(): void;
    getSegments(): driving$SegmentModel[];
    getType(): string;
    update(pathJson: { [key: string]: any }): void;
  }

  declare class ymaps$multiRouter$driving$Route mixins IGeoObject {
    ymaps$geometry: ymaps$IGeometry | null;
    properties: ymaps$IDataManager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): { [key: string]: any } | null;
    setParent(parent: { [key: string]: any }): this;
    getMap(): ymaps$Map;
    getPaths(): ymaps$GeoObjectCollection;
  }

  declare class ymaps$multiRouter$driving$RouteModel mixins IEventEmitter {
    events: ymaps$IEventManager;
    multiRoute: multiRouter$MultiRouteModel;
    properties: data$Manager;
    destroy(): void;
    getPaths(): ymaps$multiRouter$driving$PathModel[];
    update(routeJson: { [key: string]: any }): void;
    getType(): string;
  }

  declare class ymaps$multiRouter$driving$Segment mixins IGeoObject {
    ymaps$geometry: ymaps$IGeometry | null;
    properties: data$Manager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): { [key: string]: any } | null;
    setParent(parent: { [key: string]: any }): this;
    getMap(): ymaps$Map;
  }

  declare class ymaps$multiRouter$driving$SegmentModel mixins IEventEmitter {
    events: ymaps$IEventManager;
    ymaps$geometry: geometry$baseLineString;
    path: ymaps$multiRouter$driving$PathModel;
    destroy(): void;
    getType(): string;
    getViaPoints(): multiRouter$ViaPointModel[];
    update(segmentJson: { [key: string]: any }): void;
  }

  declare var npm$namespace$ymaps$multiRouter$masstransit: {
    Path: typeof ymaps$multiRouter$masstransit$Path,
    PathModel: typeof ymaps$multiRouter$masstransit$PathModel,
    Route: typeof ymaps$multiRouter$masstransit$Route,
    RouteModel: typeof ymaps$multiRouter$masstransit$RouteModel,
    StopModel: typeof ymaps$multiRouter$masstransit$StopModel,
    TransferSegment: typeof ymaps$multiRouter$masstransit$TransferSegment,
    TransferSegmentModel: typeof ymaps$multiRouter$masstransit$TransferSegmentModel,
    TransportSegment: typeof ymaps$multiRouter$masstransit$TransportSegment,
    TransportSegmentModel: typeof ymaps$multiRouter$masstransit$TransportSegmentModel,
    WalkSegment: typeof ymaps$multiRouter$masstransit$WalkSegment,
    WalkSegmentModel: typeof ymaps$multiRouter$masstransit$WalkSegmentModel
  };
  declare class ymaps$multiRouter$masstransit$Path mixins IGeoObject {
    ymaps$geometry: ymaps$IGeometry | null;
    properties: data$Manager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    geometryEditor$model: ymaps$multiRouter$driving$PathModel;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): { [key: string]: any } | null;
    setParent(parent: { [key: string]: any }): this;
    getMap(): ymaps$Map;
    getSegmentMarkers(): ymaps$GeoObjectCollection;
    getSegments(): ymaps$GeoObjectCollection;
  }

  declare class ymaps$multiRouter$masstransit$PathModel mixins IEventEmitter {
    events: ymaps$IEventManager;
    properties: data$Manager;
    route: ymaps$multiRouter$driving$RouteModel;
    destroy(): void;
    getSegments(): Array<
      | masstransit$TransferSegmentModel
      | masstransit$TransportSegmentModel
      | masstransit$WalkSegmentModel
    >;
    getType(): string;
    update(pathJson: { [key: string]: any }): void;
  }

  declare class ymaps$multiRouter$masstransit$Route mixins IGeoObject {
    ymaps$geometry: ymaps$IGeometry | null;
    properties: data$Manager;
    geometryEditor$model: ymaps$multiRouter$driving$RouteModel;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): { [key: string]: any } | null;
    setParent(parent: { [key: string]: any }): this;
    getMap(): ymaps$Map;
    getPaths(): ymaps$GeoObjectCollection;
  }

  declare class ymaps$multiRouter$masstransit$RouteModel mixins IEventEmitter {
    events: ymaps$IEventManager;
    multiRoute: multiRouter$MultiRouteModel;
    properties: data$Manager;
    destroy(): void;
    getPaths(): ymaps$multiRouter$masstransit$PathModel[];
    getType(): string;
    update(routeJson: { [key: string]: any }): void;
  }

  declare class ymaps$multiRouter$masstransit$StopModel mixins IEventEmitter {
    events: ymaps$IEventManager;
    ymaps$geometry: geometry$basePoint;
    properties: data$Manager;
    segment: masstransit$TransportSegmentModel;
    update(stopJson: { [key: string]: any }): void;
  }

  declare class ymaps$multiRouter$masstransit$TransferSegment
    mixins IGeoObject {
    ymaps$geometry: ymaps$IGeometry | null;
    properties: data$Manager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    geometryEditor$model: masstransit$TransferSegmentModel;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): { [key: string]: any } | null;
    setParent(parent: { [key: string]: any }): this;
    getMap(): ymaps$Map;
  }

  declare class ymaps$multiRouter$masstransit$TransferSegmentModel
    mixins IEventEmitter {
    events: ymaps$IEventManager;
    ymaps$geometry: geometry$baseLineString;
    path: ymaps$multiRouter$masstransit$PathModel;
    properties: data$Manager;
    destroy(segmentJson: { [key: string]: any }): void;
    getType(): string;
  }

  declare class ymaps$multiRouter$masstransit$TransportSegment
    mixins IGeoObject {
    ymaps$geometry: ymaps$IGeometry | null;
    properties: data$Manager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    geometryEditor$model: masstransit$TransportSegmentModel;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): { [key: string]: any } | null;
    setParent(parent: { [key: string]: any }): this;
    getMap(): ymaps$Map;
  }

  declare class ymaps$multiRouter$masstransit$TransportSegmentModel
    mixins IEventEmitter {
    events: ymaps$IEventManager;
    ymaps$geometry: geometry$baseLineString;
    path: ymaps$multiRouter$masstransit$PathModel;
    properties: data$Manager;
    destroy(): void;
    getStops(): ymaps$multiRouter$masstransit$StopModel[];
    getType(): string;
    update(segmentJson: { [key: string]: any }): void;
  }

  declare class ymaps$multiRouter$masstransit$WalkSegment mixins IGeoObject {
    ymaps$geometry: ymaps$IGeometry | null;
    properties: data$Manager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    geometryEditor$model: masstransit$WalkSegmentModel;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): { [key: string]: any } | null;
    setParent(parent: { [key: string]: any }): this;
    getMap(): ymaps$Map;
  }

  declare class ymaps$multiRouter$masstransit$WalkSegmentModel
    mixins IEventEmitter {
    events: ymaps$IEventManager;
    ymaps$geometry: geometry$baseLineString;
    path: ymaps$multiRouter$masstransit$PathModel;
    properties: data$Manager;
    destroy(): void;
    getType(): string;
  }

  declare class ymaps$multiRouter$EditorAddon
    mixins ICustomizable, IEventEmitter {
    options: ymaps$IOptionManager;
    events: ymaps$IEventManager;
    state: data$Manager;
    isActive(): boolean;
    start(state: { [key: string]: any }): void;
    stop(): void;
  }

  declare class ymaps$multiRouter$MultiRoute mixins IGeoObject {
    constructor(
      model: multiRouter$MultiRouteModel | ymaps$IMultiRouteModelJson,
      options?: {
        activeRouteAutoSelection?: boolean,
        boundsAutoApply?: boolean,
        dragUpdateInterval?: string | number,
        preventDragUpdate?: boolean,
        useMapMargin?: boolean,
        zoomMargin?: number[][] | number[] | number,
        [index: string]: any
      }
    ): this;
    editor: ymaps$multiRouter$EditorAddon;
    geometryEditor$model: multiRouter$MultiRouteModel;
    ymaps$geometry: ymaps$IGeometry | null;
    properties: ymaps$IDataManager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): { [key: string]: any } | null;
    setParent(parent: { [key: string]: any }): this;
    getMap(): ymaps$Map;
    getActiveRoute(): driving$Route | masstransit$Route | null;
    getBounds(): number[][] | null;
    getPixelBounds(): number[][] | null;
    getRoutes(): ymaps$GeoObjectCollection;
    getViaPoints(): ymaps$GeoObjectCollection;
    getWayPoints(): ymaps$GeoObjectCollection;
    setActiveRoute(route: driving$Route | masstransit$Route | null): void;
  }

  declare class ymaps$multiRouter$MultiRouteModel mixins IEventEmitter {
    constructor(
      referencePoints: ymaps$IMultiRouteReferencePoint[],
      params?: ymaps$IMultiRouteParams
    ): this;
    events: ymaps$IEventManager;
    properties: data$Manager;
    destroy(): void;
    getAllPoints(): Array<
      multiRouter$WayPointModel | multiRouter$ViaPointModel
    >;
    getJson(): { [key: string]: any };
    getParams(): ymaps$IMultiRouteParams;
    getPoints(): Array<multiRouter$WayPointModel | multiRouter$ViaPointModel>;
    getReferencePointIndexes(): { [key: string]: any };
    getReferencePoints(): ymaps$IMultiRouteReferencePoint[];
    getRoutes(): driving$RouteModel[] | masstransit$RouteModel[];
    getViaPoints(): multiRouter$ViaPointModel[];
    getWayPoints(): multiRouter$WayPointModel[];
    setParams(
      params: ymaps$IMultiRouteParams,
      extend?: boolean,
      clearRequests?: boolean
    ): void;
    setReferencePoints(
      referencePoints: ymaps$IMultiRouteReferencePoint[],
      viaIndexes?: number[],
      clearRequests?: boolean
    ): void;
  }

  declare class ymaps$multiRouter$ViaPoint mixins IGeoObject {
    ymaps$geometry: ymaps$IGeometry | null;
    properties: data$Manager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): { [key: string]: any } | null;
    setParent(parent: { [key: string]: any }): this;
    getMap(): ymaps$Map;
  }

  declare class ymaps$multiRouter$ViaPointModel mixins IEventEmitter {
    events: ymaps$IEventManager;
    ymaps$geometry: geometry$basePoint;
    multiRoute: ymaps$multiRouter$MultiRouteModel;
    properties: data$Manager;
    destroy(): void;
    getReferencePoint(): { [key: string]: any };
    getReferencePointIndex(): number;
    setReferencePoint(referencePoint: { [key: string]: any }): void;
    update(viaPointJson: { [key: string]: any }): void;
  }

  declare class ymaps$multiRouter$WayPoint mixins IGeoObject {
    ymaps$geometry: ymaps$IGeometry | null;
    properties: data$Manager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    geometryEditor$model: multiRouter$WayPointModel;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): { [key: string]: any } | null;
    setParent(parent: { [key: string]: any }): this;
    getMap(): ymaps$Map;
  }

  declare class ymaps$multiRouter$WayPointModel mixins IEventEmitter {
    events: ymaps$IEventManager;
    ymaps$geometry: geometry$basePoint;
    multiRoute: ymaps$multiRouter$MultiRouteModel;
    properties: data$Manager;
    destroy(): void;
    getReferencePoint(): { [key: string]: any };
    getReferencePointIndex(): number;
    setReferencePoint(referencePoint: { [key: string]: any }): void;
    update(wayPointJson: { [key: string]: any }): void;
  }

  declare var npm$namespace$ymaps$option: {
    Manager: typeof ymaps$option$Manager
  };
  declare class ymaps$option$Manager mixins IOptionManager {
    constructor(
      options?: { [key: string]: any },
      parent?: ymaps$IOptionManager,
      name?: string
    ): this;
    events: ymaps$IEventManager;
    get(
      key: string,
      defaultValue: { [key: string]: any }
    ): { [key: string]: any };
    getAll(): { [key: string]: any };
    getName(): string;
    getNative(key: string): { [key: string]: any };
    resolve(key: string, name?: string): { [key: string]: any };
    set(
      key: { [key: string]: any } | string,
      value?: { [key: string]: any }
    ): this;
    unset(keys: string[][] | string[] | string): this;
    unsetAll(): this;
    setName(name: string): void;
    getParent(): null | ymaps$IOptionManager;
    setParent(parent: ymaps$IOptionManager): this;
    freeze(): ymaps$IFreezable;
    isFrozen(): boolean;
    unfreeze(): ymaps$IFreezable;
    add(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    group(): ymaps$IEventGroup;
    remove(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    fire(
      type: string,
      eventobject: { [key: string]: any } | ymaps$IEvent
    ): this;
  }

  declare var npm$namespace$ymaps$panorama: {
    Manager: typeof ymaps$panorama$Manager,
    Player: typeof ymaps$panorama$Player
  };
  declare class ymaps$panorama$Manager mixins IEventEmitter {
    events: ymaps$IEventManager;
    closePlayer(): void;
    disableLookup(): void;
    enableLookup(): void;
    getPlayer(): panorama$Player;
    isLookupEnabled(): boolean;
    openPlayer(panorama: ymaps$IPanorama[] | number): vow$Promise<void>;
  }

  declare class ymaps$panorama$Player mixins IEventEmitter {
    constructor(
      element: HTMLElement | string,
      panorama: ymaps$IPanorama,
      options?: {
        autoFitToViewport?: "none" | "ifNull" | "always",
        controls?: string[],
        direction?: number[] | string,
        hotkeysEnabled?: boolean,
        scrollZoomBehavior?: boolean,
        span?: number[] | string,
        suppressMapOpenBlock?: boolean
      }
    ): this;
    events: ymaps$IEventManager;
    destroy(): void;
    fitToViewport(): void;
    getDirection(): number[];
    getPanorama(): ymaps$IPanorama;
    getSpan(): number[];
    lookAt(point: number[]): this;
    moveTo(
      point: number[],
      options?: {
        direction?: number[] | string,
        layer?: "yandex#panorama" | "yandex#airPanorama",
        span?: number[] | string
      }
    ): vow$Promise<void>;
    setDirection(direction: number[] | string): this;
    setPanorama(panorama: ymaps$IPanorama): this;
    setSpan(span: number[] | string): this;
  }

  declare var npm$namespace$ymaps$router: {
    Editor: typeof ymaps$router$Editor,
    Route: typeof ymaps$router$Route
  };
  declare class ymaps$router$Editor mixins ICustomizable, IEventEmitter {
    options: ymaps$IOptionManager;
    events: ymaps$IEventManager;
    start(options?: {
      addViaPoints?: boolean,
      addWayPoints?: boolean,
      editViaPoints?: boolean,
      editWayPoints?: boolean,
      removeViaPoints?: boolean,
      removeWayPoints?: boolean
    }): void;
    stop(): void;
  }

  declare class ymaps$router$Route mixins IGeoObject {
    ymaps$geometry: ymaps$IGeometry | null;
    properties: ymaps$IDataManager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    editor: ymaps$router$Editor;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getMap(): ymaps$Map;
    getHumanJamsTime(): string;
    getHumanLength(): string;
    getHumanTime(): string;
    getJamsTime(): number;
    getLength(): number;
    getPaths(): ymaps$GeoObjectCollection;
    getTime(): number;
    getViaPoints(): ymaps$GeoObjectCollection;
    getWayPoints(): ymaps$GeoObjectCollection;
  }

  declare class ymaps$Balloon
    mixins Popup<ymaps$Balloon>, IBaloon<ymaps$Balloon> {
    constructor(map: ymaps$Map, options?: ymaps$IBalloonOptions): this;
    getData(): { [key: string]: any };
    close(force?: boolean): vow$Promise<ymaps$Balloon>;
    getParent(): ymaps$Balloon | null;
    setParent(parent: ymaps$Balloon): this;
    autoPan(): vow$Promise<ymaps$Balloon>;
    freeze(): ymaps$IFreezable;
    isFrozen(): boolean;
    unfreeze(): ymaps$IFreezable;
    add(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    group(): ymaps$IEventGroup;
    remove(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    fire(
      type: string,
      eventobject: { [key: string]: any } | ymaps$IEvent
    ): this;
  }

  declare interface ymaps$IBalloonOptions {
    autoPan?: boolean;
    autoPanCheckZoomRange?: boolean;
    autoPanDuration?: number;
    autoPanMargin?: number[][] | number[] | number;
    autoPanUseMapMargin?: boolean;
    closeButton?: boolean;
    contentLayout?: ymaps$IClassConstructor<ymaps$ILayout> | string;
    layout?: ymaps$IClassConstructor<ymaps$ILayout> | string;
    maxHeight?: number;
    maxWidth?: number;
    minHeight?: number;
    minWidth?: number;
    offset?: number[];
    pane?: string;
    panelContentLayout?: ymaps$IClassConstructor<ymaps$ILayout> | string;
    panelMaxHeightRatio?: number;
    panelMaxMapArea?: number;
    shadow?: boolean;
    shadowLayout?: ymaps$IClassConstructor<ymaps$ILayout> | string;
    shadowOffset?: number[];
  }

  declare class ymaps$Circle mixins GeoObject {
    constructor(
      geometry:
        | ymaps$ICircleGeometry[][][][]
        | number[][]
        | { [key: string]: any },
      properties?: { [key: string]: any } | ymaps$IDataManager,
      options?: ymaps$ICircleOptions
    ): this;
    balloon: geoObject$Balloon;
    editor: ymaps$IGeometryEditor;
    hint: geoObject$Hint;
    events: event$Manager;
    options: option$Manager;
    properties: data$Manager;
    state: data$Manager;
    ymaps$geometry: ymaps$IGeometry | null;
    indices: ArrayBuffer;
    vertices: ArrayBuffer;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getMap(): ymaps$Map;
  }

  declare interface ymaps$ICircleOptions {
    circleOverlay?:
      | string
      | ((
          geometry: ymaps$IPixelCircleGeometry,
          data: { [key: string]: any },
          options: { [key: string]: any }
        ) => vow$Promise<ymaps$IOverlay>);
    cursor?: string;
    draggable?: boolean;
    fill?: boolean;
    fillColor?: string;
    fillImageHref?: string;
    fillMethod?: "stretch" | "tile";
    fillOpacity?: number;
    hasBalloon?: boolean;
    hasHint?: boolean;
    hideIconOnBalloonOpen?: boolean;
    interactiveZIndex?: boolean;
    interactivityModel?: ymaps$InteractivityModelKey;
    opacity?: number;
    openBalloonOnClick?: boolean;
    openEmptyBalloon?: boolean;
    openEmptyHint?: boolean;
    openHintOnHover?: boolean;
    outline?: boolean;
    pane?: string;
    strokeColor?: string[][] | string[] | string;
    strokeOpacity?: number[][] | number[] | number;
    strokeStyle?:
      | string[][][]
      | { [key: string]: any }[][]
      | string[]
      | { [key: string]: any }[]
      | string
      | { [key: string]: any };
    strokeWidth?: number[][] | number[] | number;
    syncOverlayInit?: boolean;
    useMapMarginInDragging?: boolean;
    visible?: boolean;
    zIndex?: number;
    zIndexActive?: number;
    zIndexDrag?: number;
    zIndexHover?: number;
  }

  declare class ymaps$Clusterer
    mixins IChildOnMap, ICustomizable, IEventEmitter, IParentOnMap {
    constructor(options?: ymaps$IClustererOptions): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    balloon: clusterer$Balloon;
    hint: clusterer$Hint;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getMap(): ymaps$Map;
  }

  declare interface ymaps$IClustererOptions {
    gridSize?: number;
    groupByCoordinates?: boolean;
    hasBalloon?: boolean;
    hasHint?: boolean;
    margin?: number[][] | number[] | number;
    maxZoom?: number[] | number;
    minClusterSize?: number;
    preset?: ymaps$PresetKey;
    showInAlphabeticalOrder?: boolean;
    useMapMargin?: boolean;
    viewportMargin?: number[][] | number[] | number;
    zoomMargin?: number[][] | number[] | number;
  }

  declare class ymaps$ClusterPlacemark mixins IGeoObject, collection$Item {
    constructor(
      geometry: number[] | { [key: string]: any } | ymaps$IPointGeometry,
      properties: ymaps$IClusterPlacemarkProperties,
      options?: ymaps$IClusterPlacemarkOptions
    ): this;
    ymaps$geometry: ymaps$IGeometry | null;
    properties: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    state: data$Manager;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getMap(): ymaps$Map;
    onAddToMap(map: ymaps$Map): void;
    onRemoveFromMap(oldMap: ymaps$Map): void;
    getBounds(): number[][] | null;
    getGeoObjects(): ymaps$IGeoObject[];
  }

  declare type ymaps$IClusterPlacemarkProperties = {
    geoObjects: ymaps$IGeoObject[]
  } & IDataManager;

  declare interface ymaps$IClusterPlacemarkOptions {
    balloonContentLayout?:
      | "cluster#balloonTwoColumns"
      | "cluster#balloonCarousel"
      | "cluster#balloonAccordion"
      | string
      | ymaps$IClassConstructor<ymaps$ILayout>;
    balloonContentLayoutHeight?: number;
    balloonContentLayoutWidth?: number;
    balloonItemContentLayout?: ymaps$ILayout | string;
    balloonPanelContentLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>;
    cursor?: string;
    disableClickZoom?: boolean;
    hideIconOnBalloonOpen?: boolean;
    iconColor?: string;
    iconContentLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>;
    iconLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>;
    icons?: Array<{
      href: string,
      size: number[],
      ooffset: number[],
      shape?: ymaps$IShape | ymaps$IGeometryJson
    }>;
    iconShape?: ymaps$IGeometryJson;
    interactivityModel?: ymaps$InteractivityModelKey;
    numbers?: number[];
    openBalloonOnClick?: boolean;
    openEmptyHint?: boolean;
    openHintOnHover?: boolean;
    zIndexHover?: number;
  }

  declare class ymaps$Collection mixins ICollection, collection$Item {
    constructor(options?: { [key: string]: any }): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    add(object: { [key: string]: any }): this;
    getIterator(): ymaps$IIterator;
    remove(object: { [key: string]: any }): this;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getMap(): ymaps$Map;
    onAddToMap(map: ymaps$Map): void;
    onRemoveFromMap(oldMap: ymaps$Map): void;
    filter(
      filterFunction: (object: { [key: string]: any }) => boolean
    ): { [key: string]: any }[];
    get(index: number): { [key: string]: any };
    getAll(): { [key: string]: any }[];
    getLength(): number;
    indexOf(childToFind: { [key: string]: any }): number;
    removeAll(): this;
  }

  declare class ymaps$Event mixins IEvent {
    constructor(
      originalEvent: { [key: string]: any },
      sourceEvent: ymaps$IEvent
    ): this;
    allowMapEvent(): void;
    callMethod(name: string): void;
    get(name: string): { [key: string]: any };
    getSourceEvent(): ymaps$IEvent | null;
    isDefaultPrevented(): boolean;
    isImmediatePropagationStopped(): boolean;
    isMapEventAllowed(): boolean;
    isPropagationStopped(): boolean;
    preventDefault(): boolean;
    stopImmediatePropagation(): boolean;
    stopPropagation(): boolean;
  }

  declare class ymaps$GeoObject mixins IGeoObject {
    constructor(
      feature?: ymaps$IGeoObjectFeature,
      options?: ymaps$IGeoObjectOptions
    ): this;
    ymaps$geometry: ymaps$IGeometry | null;
    balloon: geoObject$Balloon;
    editor: ymaps$IGeometryEditor;
    hint: geoObject$Hint;
    events: event$Manager;
    options: option$Manager;
    properties: data$Manager;
    state: data$Manager;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getMap(): ymaps$Map;
  }

  declare interface ymaps$IGeoObjectFeature {
    geometry?: ymaps$IGeometry | ymaps$IGeometryJson;
    properties?: ymaps$IDataManager | { [key: string]: any };
  }

  declare type ymaps$IGeoObjectOptions = {
    iconCaptionMaxWidth?: number,
    iconColor?: string,
    iconContentLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
    iconContentOffset?: number[],
    iconContentPadding?: number[],
    iconContentSize?: number[],
    iconImageClipRect?: number[][],
    iconImageHref?: string,
    iconImageOffset?: number[],
    iconImageShape?: ymaps$IShape | null,
    iconImageSize?: number[],
    iconLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
    iconMaxHeight?: number,
    iconMaxWidth?: number,
    iconOffset?: number[],
    iconShadow?: boolean,
    iconShadowImageClipRect?: number[][],
    iconShadowImageHref?: string,
    iconShadowImageOffset?: number[],
    iconShadowImageSize?: number[],
    iconShadowLayout?: string | ymaps$IClassConstructor<ymaps$ILayout>,
    iconShadowOffset?: number[],
    lineStringOverlay?: ymaps$OverlayKey,
    pointOverlay?: ymaps$OverlayKey,
    polygonOverlay?: ymaps$OverlayKey,
    preset?: string,
    rectangleOverlay?: ymaps$OverlayKey,
    setMapCursorInDragging?: boolean
  } & ICircleOptions;

  declare class ymaps$GeoObjectCollection
    mixins IGeoObject, IGeoObjectCollection {
    constructor(
      feature?: {
        children?: ymaps$IGeoObject[],
        geometry?: ymaps$IGeometry | { [key: string]: any },
        properties?: ymaps$IDataManager | { [key: string]: any }
      },
      options?: { [key: string]: any }
    ): this;
    ymaps$geometry: ymaps$IGeometry | null;
    properties: ymaps$IDataManager;
    state: ymaps$IDataManager;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    getOverlay(): vow$Promise<ymaps$IOverlay | null>;
    getOverlaySync(): ymaps$IOverlay | null;
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getMap(): ymaps$Map;
    add(child: ymaps$IGeoObject, index?: number): this;
    each(
      callback: (object: ymaps$IGeoObject) => void,
      context: { [key: string]: any }
    ): void;
    get(index: number): ymaps$IGeoObject;
    getBounds(): number[][] | null;
    getIterator(): ymaps$IIterator;
    getLength(): number;
    getPixelBounds(): number[][] | null;
    indexOf(object: ymaps$IGeoObject): number;
    remove(child: ymaps$IGeoObject): this;
    removeAll(): this;
    set(index: number, child: ymaps$IGeoObject): this;
    splice(index: number, length: number): this;
    toArray(): ymaps$IGeoObject[];
  }

  declare class ymaps$Layer mixins ILayer, IParentOnMap, IPositioningContext {
    constructor(
      tileUrlTemplate:
        | string
        | ((tileNumber: number[], tileZoom: number) => string)
    ): this;
    events: ymaps$IEventManager;
    options: ymaps$IOptionManager;
    fromClientPixels(clientPixelPoint: number[]): number[];
    getZoom(): number;
    toClientPixels(globalPixelPoint: number[]): number[];
    getParent(): null | ymaps$IControlParent;
    setParent(parent: ymaps$IControlParent): this;
    getMap(): ymaps$Map;
  }

  declare class ymaps$Map mixins IDomEventEmitter {
    constructor(
      parentElement: HTMLElement | string,
      state: ymaps$IMapState,
      options?: ymaps$IMapOptions
    ): this;
    map$action: map$actionManager;
    balloon: map$Balloon;
    behaviors: map$behaviorManager;
    container: map$Container;
    controls: control$Manager;
    converter: map$Converter;
    copyrights: map$Copyrights;
    cursors: util$cursorManager;
    events: event$Manager;
    geoObjects: map$GeoObjects;
    hint: map$Hint;
    layers: map$layerManager;
    map$margin: map$marginManager;
    options: option$Manager;
    panes: map$paneManager;
    zoomRange: map$ZoomRange;
    destroy(): void;
    getBounds(options?: ymaps$IMapMarginOptions): number[][];
    getCenter(options?: ymaps$IMapMarginOptions): number[];
    getGlobalPixelCenter(options?: ymaps$IMapMarginOptions): number[];
    getPanoramaManager(): vow$Promise<panorama$Manager>;
    getType(): string | ymaps$MapType;
    getZoom(): number;
    panTo(
      center: number[] | { [key: string]: any }[],
      options?: ymaps$IMapPanOptions
    ): vow$Promise<void>;
    setBounds(
      bounds: number[][],
      options?: ymaps$IMapBoundsOptions
    ): vow$Promise<void>;
    setCenter(
      center: number[],
      zoom?: number,
      options?: ymaps$IMapPositionOptions
    ): vow$Promise<void>;
    setGlobalPixelCenter(
      globalPixelCenter: number[],
      zoom?: number,
      options?: ymaps$IMapPositionOptions
    ): vow$Promise<void>;
    setType(
      type: string | ymaps$MapType,
      options?: ymaps$IMapCheckZoomRangeOptions
    ): vow$Promise<void>;
    setZoom(zoom: number, options?: ymaps$IMapZoomOptions): vow$Promise<void>;
  }

  declare interface ymaps$IMapMarginOptions {
    useMapMargin?: boolean;
  }

  declare interface ymaps$IMapCheckZoomRangeOptions {
    checkZoomRange?: boolean;
  }

  declare type ymaps$IMapZoomOptions = {
    duration?: number
  } & IMapMarginOptions &
    IMapCheckZoomRangeOptions;

  declare type ymaps$IMapPositionOptions = {
    timingFunction?: string
  } & IMapZoomOptions;

  declare type ymaps$IMapBoundsOptions = {
    preciseZoom?: boolean,
    zoomMargin?: number[][] | number[]
  } & IMapPositionOptions;

  declare type ymaps$IMapPanOptions = {
    delay?: number,
    flying?: boolean,
    safe?: boolean
  } & IMapPositionOptions;

  declare class ymaps$MapType {
    constructor(
      name: string,
      layers: Array<ymaps$IClassConstructor<ymaps$Layer> | string>
    ): this;
  }

  declare interface ymaps$IMapState {
    behaviors?: string[];
    bounds?: number[][];
    center?: number[];
    controls?: string[];
    margin?: number[][] | number[];
    type?: "yandex#map" | "yandex#satellite" | "yandex#hybrid";
    zoom?: number;
  }

  declare interface ymaps$IMapOptions {
    autoFitToViewport?: "none" | "ifNull" | "always";
    avoidFractionalZoom?: boolean;
    exitFullscreenByEsc?: boolean;
    fullscreenZIndex?: number;
    mapAutoFocus?: boolean;
    maxAnimationZoomDifference?: number;
    maxZoom?: number;
    minZoom?: number;
    nativeFullscreen?: boolean;
    projection?: ymaps$IProjection;
    restrictMapArea?: boolean;
    suppressMapOpenBlock?: boolean;
    suppressObsoleteBrowserNotifier?: boolean;
    yandexMapAutoSwitch?: boolean;
    yandexMapDisablePoiInteractivity?: boolean;
  }

  declare class ymaps$Placemark mixins GeoObject {
    constructor(
      geometry: number[] | { [key: string]: any } | ymaps$IPointGeometry,
      properties: { [key: string]: any } | ymaps$IDataManager,
      options?: ymaps$IPlacemarkOptions
    ): this;
  }

  declare interface ymaps$IPlacemarkOptions {
    cursor?: string;
    draggable?: boolean;
    hasBalloon?: boolean;
    hasHint?: boolean;
    hideIconOnBalloonOpen?: boolean;
    iconOffset?: number[];
    iconShape?: ymaps$IGeometryJson | null;
    interactiveZIndex?: boolean;
    interactivityModel?: string;
    openBalloonOnClick?: boolean;
    openEmptyBalloon?: boolean;
    openEmptyHint?: boolean;
    openHintOnHover?: boolean;
    pane?: string;
    pointOverlay?: string;
    syncOverlayInit?: boolean;
    useMapMarginInDragging?: boolean;
    visible?: boolean;
    zIndex?: number;
    zIndexActive?: number;
    zIndexDrag?: number;
    zIndexHover?: number;
  }

  declare class ymaps$Polygon mixins GeoObject {
    constructor(
      geometry: number[][][] | { [key: string]: any } | ymaps$IPolygonGeometry,
      properties?: { [key: string]: any } | ymaps$IDataManager,
      options?: ymaps$IPolygonOptions
    ): this;
  }

  declare interface ymaps$IPolygonOptions {
    cursor?: string;
    draggable?: boolean;
    fill?: boolean;
    fillColor?: string;
    fillImageHref?: string;
    fillMethod?: "stretch" | "tile";
    fillOpacity?: number;
    hasBalloon?: boolean;
    hasHint?: boolean;
    interactiveZIndex?: boolean;
    interactivityModel?: string;
    opacity?: number;
    openBalloonOnClick?: boolean;
    openEmptyBalloon?: boolean;
    openEmptyHint?: boolean;
    openHintOnHover?: boolean;
    outline?: boolean;
    pane?: string;
    polygonOverlay?: string;
    strokeColor?: string | string[];
    strokeOpacity?: number | number[];
    strokeStyle?:
      | string
      | string[]
      | { [key: string]: any }
      | { [key: string]: any }[];
    strokeWidth?: number | number[];
    syncOverlayInit?: boolean;
    useMapMarginInDragging?: boolean;
    visible?: boolean;
    zIndex?: number;
    zIndexActive?: number;
    zIndexDrag?: number;
    zIndexHover?: number;
  }

  declare class ymaps$Polyline mixins GeoObject {
    constructor(
      geometry: number[][] | { [key: string]: any } | ymaps$ILineStringGeometry,
      properties?: { [key: string]: any } | ymaps$IDataManager,
      options?: ymaps$IPolylineOptions
    ): this;
  }

  declare interface ymaps$IPolylineOptions {
    cursor?: string;
    draggable?: boolean;
    hasBalloon?: boolean;
    hasHint?: boolean;
    interactiveZIndex?: boolean;
    interactivityModel?: string;
    lineStringOverlay?: () => { [key: string]: any } | string;
    opacity?: number;
    openBalloonOnClick?: boolean;
    openEmptyBalloon?: boolean;
    openEmptyHint?: boolean;
    openHintOnHover?: boolean;
    pane?: string;
    strokeColor?: string | string[];
    strokeOpacity?: number | number[];
    strokeStyle?:
      | string
      | string[]
      | { [key: string]: any }
      | { [key: string]: any }[];
    strokeWidth?: number | number[];
    syncOverlayInit?: boolean;
    useMapMarginInDragging?: boolean;
    visible?: boolean;
    zIndex?: number;
    zIndexActive?: number;
    zIndexDrag?: number;
    zIndexHover?: number;
  }

  declare class ymaps$Popup<T> mixins IPopup<T> {
    constructor(map: ymaps$Map, options?: ymaps$IPopupOptions): this;
    options: ymaps$IOptionManager;
    events: ymaps$IEventManager;
    close(force?: boolean): vow$Promise<T>;
    getData(): { [key: string]: any };
    getOverlay(): vow$Promise<ymaps$IOverlay>;
    getOverlaySync(): ymaps$IOverlay;
    getPosition(): number[];
    isOpen(): boolean;
    open(
      position: number[],
      data: { [key: string]: any } | string | HTMLElement
    ): vow$Promise<T>;
    setData(
      data: { [key: string]: any } | string | HTMLElement
    ): vow$Promise<T>;
    setPosition(position: number[]): vow$Promise<T>;
  }

  declare interface ymaps$IPopupOptions {
    closeTimeout?: number;
    interactivityModel?: ymaps$InteractivityModelKey;
    openTimeout?: number;
    pane?: ymaps$IPane | string;
    projection?: ymaps$IProjection;
    zIndex?: number;
  }

  declare function ymaps$ready(
    successCallback?: () => any | ymaps$IReadyobject,
    errorCallback?: () => any,
    context?: { [key: string]: any }
  ): vow$Promise<void>;

  declare interface ymaps$IReadyobject {
    require?: string[];
    context?: { [key: string]: any };
    successCallback?: () => void;
    errorCallback?: () => void;
  }

  declare var npm$namespace$ymaps$templateLayoutFactory: {
    createClass: typeof ymaps$templateLayoutFactory$createClass
  };
  declare function ymaps$templateLayoutFactory$createClass(
    template: string,
    overrides?: { [key: string]: any },
    staticMethods?: { [key: string]: any }
  ): ymaps$IClassConstructor<layout$templateBasedBase>;

  declare var npm$namespace$ymaps$util: {
    Storage: typeof ymaps$util$Storage,
    cursor: typeof npm$namespace$ymaps$util$cursor
  };

  declare var npm$namespace$ymaps$util$cursor: {
    Accessor: typeof ymaps$util$cursor$Accessor,
    Manager: typeof ymaps$util$cursor$Manager
  };
  declare class ymaps$util$cursor$Accessor {
    constructor(key: string): this;
    getKey(): string;
    remove(): void;
    setKey(): void;
  }

  declare class ymaps$util$cursor$Manager {
    constructor(element: HTMLElement): this;
    push(key: string): ymaps$util$cursor$Accessor;
  }

  declare class ymaps$util$Storage {
    add(key: string, object: { [key: string]: any }): this;
    get(key: string | { [key: string]: any }): { [key: string]: any } | string;
    remove(key: string): { [key: string]: any };
  }

  declare var npm$namespace$ymaps$vow: {
    Deferred: typeof ymaps$vow$Deferred,
    Promise: typeof ymaps$vow$Promise
  };
  declare class ymaps$vow$Deferred {
    promise(): vow$Promise;
    reject(reason: { [key: string]: any }): void;
    resolve(value: { [key: string]: any }): void;
  }

  declare class ymaps$vow$Promise {
    constructor(resolver?: () => void): this;
    done(
      onFulfilled?: () => void,
      onRejected?: () => void,
      onProgress?: () => void,
      ctx?: { [key: string]: any }
    ): void;
    spread(
      onFulfilled?: () => void,
      onRejected?: () => void,
      ctx?: { [key: string]: any }
    ): ymaps$vow$Promise;
    then(
      onFulfilled?: () => void,
      onRejected?: () => void,
      onProgress?: () => void,
      ctx?: { [key: string]: any }
    ): ymaps$vow$Promise;
    valueOf(): { [key: string]: any };
  }

  declare type ymaps$IBaloon<T> = {
    autoPan(): ymaps$vow$Promise<T>
  } & IPopup<T> &
    ICustomizable &
    IChild<T> &
    IFreezable;

  declare type ymaps$IBalloonManager<T> = {
    autoPan(): ymaps$vow$Promise<T>
  } & IPopupManager<T>;

  declare type ymaps$IBaseGeometry = {
    getBounds(): number[][] | null,
    getType(): string
  } & IEventEmitter;

  declare type ymaps$IBaseLineStringGeometry = {} & IBaseGeometry &
    ILineStringGeometryAccess;

  declare type ymaps$IBasePointGeometry = {} & IBaseGeometry &
    IPointGeometryAccess;

  declare type ymaps$IBasePolygonGeometry = {} & IBaseGeometry &
    IPolygonGeometryAccess;

  declare type ymaps$IBehavior = {
    disable(): void,
    enable(): void,
    isEnabled(): boolean
  } & IChildOnMap &
    ICustomizable;

  declare type ymaps$IChild<T> = {
    getParent(): { [key: string]: any } | null,
    setParent(parent: { [key: string]: any } | null): this
  } & IEventEmitter;

  declare type ymaps$IChildOnMap = {} & IChild<ymaps$IControlParent>;

  declare type ymaps$ICircleGeometry = {} & ICircleGeometryAccess & IGeometry;

  declare type ymaps$ICircleGeometryAccess = {
    contains(position: number[]): boolean,
    getClosest(anchorPosition: number[]): { [key: string]: any },
    getCoordinates(): number[] | null,
    getRadius(): number,
    setCoordinates(coordinates: number[] | null): this,
    setRadius(radius: number): this
  } & IFreezable;

  declare type ymaps$ICollection = {
    add(object: { [key: string]: any }): this,
    getIterator(): ymaps$IIterator,
    remove(object: { [key: string]: any }): this
  } & IEventEmitter;

  declare type ymaps$IControl = {} & IChildOnMap;

  declare type ymaps$IControlParent = {
    getChildElement(child: ymaps$IControl): ymaps$vow$Promise<HTMLElement>
  } & IParentOnMap;

  declare interface ymaps$ICoordSystem {
    getDistance(point1: number[], point2: number[]): number;
    solveDirectProblem(
      startPoint: number[],
      direction: number[],
      distance: number
    ): { [key: string]: any };
    solveInverseProblem(
      startPoint: number[],
      endPoint: number[],
      reverseDirection?: boolean
    ): { [key: string]: any };
  }

  declare type ymaps$ICopyrightsAccessor = {} & ICopyrightsProvider;

  declare type ymaps$ICopyrightsProvider = {
    getCopyrights(
      coords: number[],
      zoom: number
    ): ymaps$vow$Promise<Array<string | HTMLElement>>,
    remove(): void,
    setCopyrights(
      copyrights: string | HTMLElement | Array<string | HTMLElement>
    ): void
  } & IEventEmitter;

  declare type ymaps$ICustomizable = {
    options: ymaps$IOptionManager
  } & IEventEmitter;

  declare type ymaps$IDataManager = {
    get(
      path: string,
      defaultValue: { [key: string]: any }
    ): { [key: string]: any }
  } & IEventEmitter;

  declare type ymaps$IDomEventEmitter = {} & IEventEmitter;

  declare interface ymaps$IEvent {
    allowMapEvent(): void;
    callMethod(name: string): void;
    get(name: string): { [key: string]: any };
    getSourceEvent(): ymaps$IEvent | null;
    isDefaultPrevented(): boolean;
    isImmediatePropagationStopped(): boolean;
    isMapEventAllowed(): boolean;
    isPropagationStopped(): boolean;
    preventDefault(): boolean;
    stopImmediatePropagation(): boolean;
    stopPropagation(): boolean;
  }

  declare interface ymaps$IEventController {
    onStartListening?: (events: ymaps$IEventManager, type: string) => void;
    onStopListening?: (events: ymaps$IEventManager, type: string) => void;
  }

  declare interface ymaps$IEventEmitter {
    events: ymaps$IEventManager;
  }

  declare interface ymaps$IEventGroup {
    add(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    remove(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this;
    removeAll(): this;
  }

  declare type ymaps$IEventManager = {
    add(
      types: string[][] | string[] | string,
      callback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: { [key: string]: any },
      priority?: number
    ): this,
    getParent(): { [key: string]: any } | null,
    group(): ymaps$IEventGroup,
    setParent(parent: { [key: string]: any } | null): this
  } & IEventTrigger;

  declare interface ymaps$IEventTrigger {
    fire(
      type: string,
      eventobject: { [key: string]: any } | ymaps$IEvent
    ): this;
  }

  declare type ymaps$IEventWorkflowController = {
    onAfterEventFiring?: (
      events: ymaps$IEventManager,
      type: string,
      event?: ymaps$IEvent
    ) => void,
    onBeforeEventFiring?: (
      events: ymaps$IEventManager,
      type: string,
      event?: ymaps$IEvent
    ) => void
  } & IEventController;

  declare type ymaps$IExpandableControlLayout = {} & ILayout;

  declare type ymaps$IFreezable = {
    freeze(): ymaps$IFreezable,
    isFrozen(): boolean,
    unfreeze(): ymaps$IFreezable
  } & IEventManager;

  declare interface ymaps$IGeocodeProvider {
    geocode(
      request: string,
      options?: {
        boundedBy?: number[][],
        results?: number,
        skip?: number,
        strictBounds?: boolean
      }
    ): ymaps$vow$Promise<{ [key: string]: any }>;
    suggest(
      request: string,
      options?: {
        boundedBy?: number[][],
        results?: number,
        strictBounds?: boolean
      }
    ): ymaps$vow$Promise<{ [key: string]: any }>;
  }

  declare type ymaps$IGeometry = {
    getMap(): ymaps$Map | null,
    getPixelGeometry(options?: { [key: string]: any }): ymaps$IPixelGeometry,
    setMap(map: ymaps$Map): void
  } & IBaseGeometry &
    ICustomizable;

  declare type ymaps$IGeometryEditor = {
    geometry: ymaps$IGeometry,
    state: ymaps$IDataManager,
    startEditing(): void,
    stopEditing(): void
  } & ICustomizable &
    IEventEmitter;

  declare type ymaps$IGeometryEditorChildModel = {
    editor: ymaps$IGeometryEditor,
    geometry: ymaps$IBaseGeometry,
    getParent(): ymaps$IGeometryEditorModel,
    setPixels(pixels: number[]): void
  } & IGeometryEditorModel;

  declare type ymaps$IGeometryEditorModel = {
    destroy(): void,
    getPixels(): number[]
  } & IEventEmitter;

  declare type ymaps$IGeometryEditorRootModel = {} & IGeometryEditorModel;

  declare interface ymaps$IGeometryJson {
    type: string;
  }

  declare type ymaps$IGeoObject = {
    geometry: ymaps$IGeometry | null,
    properties: ymaps$IDataManager,
    state: ymaps$IDataManager,
    getOverlay(): ymaps$vow$Promise<ymaps$IOverlay | null>,
    getOverlaySync(): ymaps$IOverlay | null
  } & IChildOnMap &
    ICustomizable &
    IDomEventEmitter &
    IParentOnMap;

  declare type ymaps$IGeoObjectCollection = {
    add(child: ymaps$IGeoObject, index?: number): this,
    each(
      callback: (object: ymaps$IGeoObject) => void,
      context: { [key: string]: any }
    ): void,
    get(index: number): ymaps$IGeoObject,
    getBounds(): number[][] | null,
    getIterator(): ymaps$IIterator,
    getLength(): number,
    getPixelBounds(): number[][] | null,
    indexOf(object: ymaps$IGeoObject): number,
    remove(child: ymaps$IGeoObject): this,
    removeAll(): this,
    set(index: number, child: ymaps$IGeoObject): this,
    splice(index: number, length: number): this
  } & ICustomizable &
    IEventEmitter &
    IParentOnMap;

  declare type ymaps$IGeoObjectSequence = {
    each(
      callback: (geoObject: ymaps$IGeoObject) => void,
      context?: { [key: string]: any }
    ): void,
    get(index: number): ymaps$IGeoObject,
    getBounds(): number[][] | null,
    getIterator(): ymaps$IIterator,
    getLength(): number,
    getPixelBounds(): number[][] | null,
    indexOf(geoObject: ymaps$IGeoObject): number
  } & ICustomizable &
    IEventEmitter &
    IParentOnMap;

  declare type ymaps$IHintManager<T> = {} & IPopupManager<T>;

  declare interface ymaps$IIterator {
    getNext(): { [key: string]: any } | null;
  }

  declare type ymaps$ILayer = {
    getBrightness?: () => number,
    getCopyrights?: (
      coords: number[],
      zoom: number
    ) => ymaps$vow$Promise<Array<string | HTMLElement>>,
    getZoomRange?: (point: number[]) => ymaps$vow$Promise<number[]>
  } & IChildOnMap &
    ICustomizable &
    IEventEmitter;

  declare type ymaps$ILayout = {
    destroy(): void,
    getData(): { [key: string]: any },
    getParentElement(): HTMLElement,
    getShape(): ymaps$IShape | null,
    isEmpty(): boolean,
    setData(data: { [key: string]: any }): void,
    setParentElement(parent: HTMLElement | null): void
  } & IDomEventEmitter;

  declare type ymaps$ILinearRingGeometryAccess = {
    contain(position: number): boolean,
    freeze(): ymaps$IFreezable,
    get(index: number): number[],
    getChildGeometry(index: number): ymaps$IPointGeometryAccess,
    getClosest(anchorPosition: number[]): { [key: string]: any },
    getCoordinates(): number[][],
    getFillRule(): string,
    getLength(): number,
    insert(
      index: number,
      coordinates: number[]
    ): ymaps$ILinearRingGeometryAccess,
    isFrozen(): boolean,
    remove(index: number): number[],
    set(index: number, coordinates: number[]): ymaps$ILinearRingGeometryAccess,
    setCoordinates(coordinates: number[][]): ymaps$ILinearRingGeometryAccess,
    setFillRule(fillRule: string): ymaps$ILinearRingGeometryAccess,
    splice(index: number, number: number): number[][],
    unfreeze(): ymaps$IFreezable
  } & IFreezable;

  declare type ymaps$ILineStringGeometry = {} & IGeometry &
    ILineStringGeometryAccess;

  declare type ymaps$ILineStringGeometryAccess = {
    get(index: number): number[],
    getChildGeometry(index: number): ymaps$IPointGeometryAccess,
    getClosest(anchorPosition: number[]): { [key: string]: any },
    getCoordinates(): number[][],
    getLength(): number,
    insert(
      index: number,
      coordinates: number[][]
    ): ymaps$ILineStringGeometryAccess,
    remove(index: number): number[],
    set(index: number, coordinates: number[]): ymaps$ILineStringGeometryAccess,
    setCoordinates(coordinates: number[]): ymaps$ILineStringGeometryAccess,
    splice(index: number, length: number): number[][]
  } & IFreezable;

  declare type ymaps$IMapAction = {
    begin(mapActionManager: map$actionManager): void,
    end(): void
  } & IEventEmitter;

  declare type ymaps$IMapObjectCollection = {} & ICollection &
    ICustomizable &
    IParentOnMap;

  declare interface ymaps$IMultiRouteModelJson {
    params: ymaps$IMultiRouteParams;
    referencePoints: ymaps$IMultiRouteReferencePoint[];
  }

  declare interface ymaps$IMultiRouteParams {
    avoidTrafficJams?: boolean;
    boundedBy?: number[][] | null;
    requestSendInterval?: string | number;
    results?: number;
    reverseGeocoding?: boolean;
    routingMode?: "auto" | "masstransit" | "pedestrian";
    searchCoordOrder?: string;
    strictBounds?: boolean;
    viaIndexes?: number[];
  }

  declare type ymaps$IMultiRouteReferencePoint =
    | string
    | number[]
    | geometry$Point;

  declare type ymaps$IOptionManager = {
    get(
      key: string,
      defaultValue: { [key: string]: any }
    ): { [key: string]: any },
    getAll(): { [key: string]: any },
    getName(): string,
    getNative(key: string): { [key: string]: any },
    resolve(key: string, name?: string): { [key: string]: any },
    setName(name: string): void
  } & IChild<ymaps$IOptionManager> &
    IEventEmitter &
    IFreezable;

  declare type ymaps$IOverlay = {
    getData(): { [key: string]: any },
    getGeometry(): ymaps$IPixelGeometry,
    getMap(): ymaps$Map | null,
    getShape(): ymaps$IShape | null,
    isEmpty(): boolean,
    setData(data: { [key: string]: any }): void,
    setGeometry(geometry: ymaps$IPixelGeometry): void,
    setMap(map: ymaps$Map | null): void
  } & ICustomizable &
    IDomEventEmitter;

  declare type ymaps$IPane = {
    destroy(): void,
    getElement(): HTMLElement,
    getMap(): ymaps$Map,
    getOverflow(): "visible" | "hidden",
    getZIndex(): number
  } & IEventEmitter;

  declare interface ymaps$IPanorama {
    getAngularBBox(): number[];
    getConnectionArrows(): ymaps$IPanoramaConnectionArrow[];
    getConnectionMarkers(): ymaps$IPanoramaConnectionMarker[];
    getCoordSystem(): ymaps$ICoordSystem;
    getDefaultDirection(): number[];
    getDefaultSpan(): number[];
    getGraph(): ymaps$IPanoramaGraph | null;
    getMarkers(): ymaps$IPanoramaMarker[];
    getName(): string;
    getPosition(): number[];
    getTileLevels(): ymaps$IPanoramaTileLevel[];
    getTileSize(): number[];
  }

  declare interface ymaps$IPanoramaConnection {
    getConnectedPanorama(): ymaps$vow$Promise<ymaps$IPanorama>;
  }

  declare type ymaps$IPanoramaConnectionArrow = {
    properties: data$Manager,
    getDirection(): number[],
    getPanorama(): ymaps$IPanorama
  } & IPanoramaConnection;

  declare type ymaps$IPanoramaConnectionMarker = {} & IPanoramaConnection &
    IPanoramaMarker;

  declare interface ymaps$IPanoramaGraph {
    getEdges(): ymaps$IPanoramaGraphEdge[];
    getNodes(): ymaps$IPanoramaGraphEdge[];
    getPanorama(): ymaps$IPanorama;
  }

  declare interface ymaps$IPanoramaGraphEdge {
    getEndNodes(): ymaps$IPanoramaGraphNode[];
  }

  declare interface ymaps$IPanoramaGraphNode {
    getConnectedPanorama(): ymaps$vow$Promise<ymaps$IPanorama>;
  }

  declare interface ymaps$IPanoramaMarker {
    properties: data$Manager;
    getIconSet(): ymaps$vow$Promise<ymaps$IPanoramaMarkerIconSet>;
    getPanorama(): ymaps$IPanorama;
    getPosition(): number[];
  }

  declare interface ymaps$IPanoramaMarkerIcon {
    image: HTMLCanvasElement | HTMLImageElement;
    offset: number[];
  }

  declare interface ymaps$IPanoramaMarkerIconSet {
    default: ymaps$IPanoramaMarkerIcon | null;
    expanded: ymaps$IPanoramaMarkerIcon | null;
    expandedHovered: ymaps$IPanoramaMarkerIcon | null;
    hovered: ymaps$IPanoramaMarkerIcon | null;
  }

  declare interface ymaps$IPanoramaTileLevel {
    getImageSize(): number[];
    getTileUrl(x: number, y: number): string;
  }

  declare interface ymaps$IParentOnMap {
    getMap(): ymaps$Map;
  }

  declare type ymaps$IPixelCircleGeometry = {
    getCoordinates(): number[],
    getRadius(): number
  } & IPixelGeometry;

  declare type ymaps$IPixelLineStringGeometry = {
    getClosest(anchorPosition: number[]): { [key: string]: any },
    getCoordinates(): number[][],
    getLength(): number
  } & IPixelGeometry;

  declare type ymaps$IPixelGeometry = {
    equals(geometry: ymaps$IPixelGeometry): boolean,
    getMetaData(): { [key: string]: any },
    scale(factor: number): ymaps$IPixelGeometry,
    shift(offset: number[]): ymaps$IPixelGeometry
  } & IBaseGeometry;

  declare type ymaps$IPointGeometry = {} & IGeometry & IPointGeometryAccess;

  declare interface ymaps$IPointGeometryAccess {
    getCoordinates(): number[] | null;
    setCoordinates(coordinates: number[] | null): this;
  }

  declare type ymaps$IPolygonGeometry = {} & IGeometry & IPolygonGeometryAccess;

  declare type ymaps$IPolygonGeometryAccess = {
    contains(position: number[]): boolean,
    get(index: number): number[][],
    getChildGeometry(index: number): ymaps$ILinearRingGeometryAccess,
    getClosest(anchorPosition: number[]): { [key: string]: any },
    getCoordinates(): number[][][],
    getFillRule(): string,
    getLength(): number,
    insert(index: number, path: number[][]): ymaps$IPolygonGeometryAccess,
    remove(index: number): ymaps$ILinearRingGeometryAccess,
    set(index: number, path: number[][]): ymaps$IPolygonGeometryAccess,
    setCoordinates(coordinates: number[][][]): ymaps$IPolygonGeometryAccess,
    setFillRule(fillRule: string): ymaps$IPolygonGeometryAccess,
    splice(index: number, number: number): ymaps$ILinearRingGeometryAccess[]
  } & IFreezable;

  declare type ymaps$IPopup<T> = {
    close(force?: boolean): ymaps$vow$Promise<T>,
    getData(): { [key: string]: any },
    getOverlay(): ymaps$vow$Promise<ymaps$IOverlay>,
    getOverlaySync(): ymaps$IOverlay,
    getPosition(): number[],
    isOpen(): boolean,
    open(
      position: number[],
      data: { [key: string]: any } | string | HTMLElement
    ): ymaps$vow$Promise<T>,
    setData(
      data: { [key: string]: any } | string | HTMLElement
    ): ymaps$vow$Promise<T>,
    setPosition(position: number[]): ymaps$vow$Promise<T>
  } & ICustomizable &
    IEventEmitter;

  declare type ymaps$IPopupManager<T> = {
    close(force?: boolean): ymaps$vow$Promise<T>,
    destroy(): void,
    getData(): { [key: string]: any } | null,
    getOptions(): ymaps$IOptionManager | null,
    getOverlay(): ymaps$vow$Promise<ymaps$IOverlay | null>,
    getOverlaySync(): ymaps$IOverlay | null,
    getPosition(): number[] | null,
    isOpen(): boolean,
    open(
      position?: number[],
      data?: { [key: string]: any } | string | HTMLElement,
      options?: { [key: string]: any }
    ): ymaps$vow$Promise<T>,
    setData(
      data: { [key: string]: any } | string | HTMLElement
    ): ymaps$vow$Promise<T>,
    setOptions(options: { [key: string]: any }): ymaps$vow$Promise<T>,
    setPosition(position: number[]): ymaps$vow$Promise<T>
  } & IEventEmitter;

  declare interface ymaps$IPositioningContext {
    fromClientPixels(clientPixelPoint: number[]): number[];
    getZoom(): number;
    toClientPixels(globalPixelPoint: number[]): number[];
  }

  declare interface ymaps$IProjection {
    fromGlobalPixels(globalPixelPoint: number[], zoom: number): number[];
    getCoordSystem(): ymaps$ICoordSystem;
    isCycled(): boolean[];
    toGlobalPixels(coordPoint: number[], zoom: number): number[];
  }

  declare interface ymaps$IRoutePanel {
    options: ymaps$IOptionManager;
    state: ymaps$IDataManager;
    getRoute(): multiRouter$MultiRoute;
    switchPoints(): void;
  }

  declare type ymaps$ISearchControlLayout = {} & IExpandableControlLayout;

  declare type ymaps$ISelectableControl = {
    deselect(): void,
    disable(): void,
    enable(): void,
    isEnabled(): boolean,
    isSelected(): boolean,
    select(): void
  } & IControl;

  declare type ymaps$ISelectableControlLayout = {} & ILayout;

  declare interface ymaps$IShape {
    contains(position: number[]): boolean;
    equals(shape: ymaps$IShape): boolean;
    getBounds(): number[][] | null;
    getGeometry(): ymaps$IPixelGeometry;
    getType(): string;
    scale(factor: number): ymaps$IShape;
    shift(offset: number[]): ymaps$IShape;
  }

  declare class ymaps$Monitor {
    constructor(dataManager: ymaps$IDataManager | ymaps$IOptionManager): this;
    add(
      name: string[] | string,
      changeCallback: (event: { [key: string]: any } | ymaps$IEvent) => void,
      context?: any,
      params?: any
    ): ymaps$Monitor;
    forceChange(): ymaps$Monitor;
    get(name: string): any;
    remove(name: string): ymaps$Monitor;
    removeAll(): ymaps$Monitor;
  }
}
