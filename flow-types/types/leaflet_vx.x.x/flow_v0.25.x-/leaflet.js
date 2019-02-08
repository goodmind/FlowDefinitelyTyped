declare module "leaflet" {
  import typeof * as geojson from "geojson";

  declare export class Class {
    static extend(
      props: any
    ): {
      new(...args: any[]): any
    } & typeof Class;
    static include(props: any): any & typeof Class;
    static mergeOptions(props: any): any & typeof Class;
    static addInitHook(initHookFn: () => void): any & typeof Class;
    static addInitHook(methodName: string, ...args: any[]): any & typeof Class;
  }
  declare export class Transformation {
    constructor(a: number, b: number, c: number, d: number): this;
    transform(point: math$Point, control$scale?: number): math$Point;
    untransform(point: math$Point, control$scale?: number): math$Point;
  }

  declare var npm$namespace$LineUtil: {
    simplify: typeof LineUtil$simplify,
    pointToSegmentDistance: typeof LineUtil$pointToSegmentDistance,
    closestPointOnSegment: typeof LineUtil$closestPointOnSegment,
    isFlat: typeof LineUtil$isFlat
  };
  declare function LineUtil$simplify(
    points: math$Point[],
    tolerance: number
  ): math$Point[];

  declare function LineUtil$pointToSegmentDistance(
    p: math$Point,
    p1: math$Point,
    p2: math$Point
  ): number;

  declare function LineUtil$closestPointOnSegment(
    p: math$Point,
    p1: math$Point,
    p2: math$Point
  ): math$Point;

  declare function LineUtil$isFlat(latlngs: LatLngExpression[]): boolean;

  declare var npm$namespace$PolyUtil: {
    clipPolygon: typeof PolyUtil$clipPolygon
  };
  declare function PolyUtil$clipPolygon(
    points: math$Point[],
    bounds: BoundsExpression,
    round?: boolean
  ): math$Point[];

  declare var npm$namespace$DomUtil: {
    get: typeof DomUtil$get,
    getStyle: typeof DomUtil$getStyle,
    create: typeof DomUtil$create,
    remove: typeof DomUtil$remove,
    empty: typeof DomUtil$empty,
    toFront: typeof DomUtil$toFront,
    toBack: typeof DomUtil$toBack,
    hasClass: typeof DomUtil$hasClass,
    addClass: typeof DomUtil$addClass,
    removeClass: typeof DomUtil$removeClass,
    setClass: typeof DomUtil$setClass,
    getClass: typeof DomUtil$getClass,
    setOpacity: typeof DomUtil$setOpacity,
    testProp: typeof DomUtil$testProp,
    setTransform: typeof DomUtil$setTransform,
    setPosition: typeof DomUtil$setPosition,
    getPosition: typeof DomUtil$getPosition,
    disableTextSelection: typeof DomUtil$disableTextSelection,
    enableTextSelection: typeof DomUtil$enableTextSelection,
    disableImageDrag: typeof DomUtil$disableImageDrag,
    enableImageDrag: typeof DomUtil$enableImageDrag,
    preventOutline: typeof DomUtil$preventOutline,
    restoreOutline: typeof DomUtil$restoreOutline,
    TRANSFORM: typeof DomUtil$TRANSFORM,
    TRANSITION: typeof DomUtil$TRANSITION,
    TRANSITION_END: typeof DomUtil$TRANSITION_END
  };

  /**
   * Get Element by its ID or with the given HTML-Element
   */
  declare function DomUtil$get(
    htmlParser$element: string | HTMLElement
  ): HTMLElement | null;

  declare function DomUtil$getStyle(
    el: HTMLElement,
    styleAttrib: string
  ): string | null;

  declare function DomUtil$create(
    tagName: string,
    className?: string,
    container?: HTMLElement
  ): HTMLElement;

  declare function DomUtil$remove(el: HTMLElement): void;

  declare function DomUtil$empty(el: HTMLElement): void;

  declare function DomUtil$toFront(el: HTMLElement): void;

  declare function DomUtil$toBack(el: HTMLElement): void;

  declare function DomUtil$hasClass(
    el: HTMLElement,
    skin$name: string
  ): boolean;

  declare function DomUtil$addClass(el: HTMLElement, skin$name: string): void;

  declare function DomUtil$removeClass(
    el: HTMLElement,
    skin$name: string
  ): void;

  declare function DomUtil$setClass(el: HTMLElement, skin$name: string): void;

  declare function DomUtil$getClass(el: HTMLElement): string;

  declare function DomUtil$setOpacity(
    el: HTMLElement,
    __esri$opacity: number
  ): void;

  declare function DomUtil$testProp(props: string[]): string | false;

  declare function DomUtil$setTransform(
    el: HTMLElement,
    offset: math$Point,
    control$scale?: number
  ): void;

  declare function DomUtil$setPosition(
    el: HTMLElement,
    dom$position: math$Point
  ): void;

  declare function DomUtil$getPosition(el: HTMLElement): math$Point;

  declare function DomUtil$disableTextSelection(): void;

  declare function DomUtil$enableTextSelection(): void;

  declare function DomUtil$disableImageDrag(): void;

  declare function DomUtil$enableImageDrag(): void;

  declare function DomUtil$preventOutline(el: HTMLElement): void;

  declare function DomUtil$restoreOutline(): void;

  declare var DomUtil$TRANSFORM: string;

  declare var DomUtil$TRANSITION: string;

  declare var DomUtil$TRANSITION_END: string;
  declare export interface CRS {
    latLngToPoint(latlng: LatLngExpression, control$zoom: number): math$Point;
    pointToLatLng(point: PointExpression, control$zoom: number): maps$LatLng;
    project(latlng: maps$LatLng | maps$LatLngLiteral): math$Point;
    unproject(point: PointExpression): maps$LatLng;
    control$scale(control$zoom: number): number;
    control$zoom(control$scale: number): number;
    getProjectedBounds(control$zoom: number): BPMNModdle$Bounds;
    distance(latlng1: LatLngExpression, latlng2: LatLngExpression): number;
    wrapLatLng(latlng: maps$LatLng | maps$LatLngLiteral): maps$LatLng;
    code?: string;
    wrapLng?: [number, number];
    wrapLat?: [number, number];
    infinite: boolean;
  }

  declare var npm$namespace$CRS: {
    EPSG3395: typeof CRS$EPSG3395,
    EPSG3857: typeof CRS$EPSG3857,
    EPSG4326: typeof CRS$EPSG4326,
    Earth: typeof CRS$Earth,
    Simple: typeof CRS$Simple
  };
  declare var CRS$EPSG3395: CRS;

  declare var CRS$EPSG3857: CRS;

  declare var CRS$EPSG4326: CRS;

  declare var CRS$Earth: CRS;

  declare var CRS$Simple: CRS;
  declare export interface Projection {
    project(latlng: maps$LatLng | maps$LatLngLiteral): math$Point;
    unproject(point: PointExpression): maps$LatLng;
    bounds: BPMNModdle$Bounds;
  }

  declare var npm$namespace$Projection: {
    LonLat: typeof Projection$LonLat,
    Mercator: typeof Projection$Mercator,
    SphericalMercator: typeof Projection$SphericalMercator
  };
  declare var Projection$LonLat: maps$Projection;

  declare var Projection$Mercator: maps$Projection;

  declare var Projection$SphericalMercator: maps$Projection;
  declare export class LatLng {
    constructor(latitude: number, longitude: number, altitude?: number): this;
    equals(otherLatLng: LatLngExpression, maxMargin?: number): boolean;
    toString(): string;
    distanceTo(otherLatLng: LatLngExpression): number;
    wrap(): maps$LatLng;
    toBounds(sizeInMeters: number): maps$LatLngBounds;
    lat: number;
    lng: number;
    alt: number;
  }
  declare export interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  declare export type LatLngTuple = [number, number];
  declare export type LatLngExpression =
    | maps$LatLng
    | maps$LatLngLiteral
    | LatLngTuple;
  declare export function latLng(
    latitude: number,
    longitude: number,
    altitude?: number
  ): maps$LatLng;

  declare export function latLng(
    coords:
      | LatLngTuple
      | [number, number, number]
      | maps$LatLngLiteral
      | {
          lat: number,
          lng: number,
          alt?: number
        }
  ): maps$LatLng;

  declare export class LatLngBounds {
    constructor(southWest: LatLngExpression, northEast: LatLngExpression): this;
    constructor(latlngs: maps$LatLngBoundsLiteral): this;
    extend(latlngOrBounds: LatLngExpression | LatLngBoundsExpression): this;
    pad(bufferRatio: number): maps$LatLngBounds;
    getCenter(): maps$LatLng;
    getSouthWest(): maps$LatLng;
    getNorthEast(): maps$LatLng;
    getNorthWest(): maps$LatLng;
    getSouthEast(): maps$LatLng;
    getWest(): number;
    getSouth(): number;
    getEast(): number;
    getNorth(): number;
    contains(
      otherBoundsOrLatLng: LatLngBoundsExpression | LatLngExpression
    ): boolean;
    intersects(otherBounds: LatLngBoundsExpression): boolean;
    overlaps(otherBounds: BoundsExpression): boolean;
    toBBoxString(): string;
    equals(otherBounds: LatLngBoundsExpression): boolean;
    isValid(): boolean;
  }
  declare export type LatLngBoundsLiteral = LatLngTuple[];
  declare export type LatLngBoundsExpression =
    | maps$LatLngBounds
    | maps$LatLngBoundsLiteral;
  declare export function latLngBounds(
    southWest: LatLngExpression,
    northEast: LatLngExpression
  ): maps$LatLngBounds;

  declare export function latLngBounds(
    latlngs: LatLngExpression[]
  ): maps$LatLngBounds;

  declare export type PointTuple = [number, number];
  declare export class Point {
    constructor(x: number, y: number, round?: boolean): this;
    clone(): math$Point;
    add(otherPoint: PointExpression): math$Point;
    subtract(otherPoint: PointExpression): math$Point;
    divideBy(num: number): math$Point;
    multiplyBy(num: number): math$Point;
    scaleBy(control$scale: PointExpression): math$Point;
    unscaleBy(control$scale: PointExpression): math$Point;
    round(): math$Point;
    floor(): math$Point;
    ceil(): math$Point;
    distanceTo(otherPoint: PointExpression): number;
    equals(otherPoint: PointExpression): boolean;
    contains(otherPoint: PointExpression): boolean;
    toString(): string;
    x: number;
    y: number;
  }
  declare export type Coords = {
    z: number
  } & math$Point;

  declare export type PointExpression = math$Point | PointTuple;
  declare export function point(
    x: number,
    y: number,
    round?: boolean
  ): math$Point;

  declare export function point(
    coords:
      | PointTuple
      | {
          x: number,
          y: number
        }
  ): math$Point;

  declare export type BoundsLiteral = [PointTuple, PointTuple];
  declare export class Bounds {
    constructor(topLeft: PointExpression, bottomRight: PointExpression): this;
    constructor(points: math$Point[] | BoundsLiteral): this;
    extend(point: PointExpression): this;
    getCenter(round?: boolean): math$Point;
    getBottomLeft(): math$Point;
    getTopRight(): math$Point;
    getSize(): math$Point;
    contains(pointOrBounds: BoundsExpression | PointExpression): boolean;
    intersects(otherBounds: BoundsExpression): boolean;
    overlaps(otherBounds: BoundsExpression): boolean;
    min: math$Point;
    max: math$Point;
  }
  declare export type BoundsExpression = BPMNModdle$Bounds | BoundsLiteral;
  declare export function bounds(
    topLeft: PointExpression,
    bottomRight: PointExpression
  ): BPMNModdle$Bounds;

  declare export function bounds(
    points: math$Point[] | BoundsLiteral
  ): BPMNModdle$Bounds;

  declare export type LeafletEventHandlerFn = (
    maps$event: LeafletEvent
  ) => void;
  declare export interface LeafletEventHandlerFnMap {
    [notification$type: string]: LeafletEventHandlerFn;
  }

  /**
   * A set of methods shared between event-powered classes (like Map and Marker).
   * Generally, events allow you to execute some function when something happens
   * with an object (e.g. the user clicks on the map, causing the map to fire
   * 'click' event).
   */
  declare export class Evented mixins Access$Class {
    /**
     * Adds a listener function (fn) to a particular event type of the object.
     * You can optionally specify the context of the listener (object the this
     * keyword will point to). You can also pass several space-separated types
     * (e.g. 'click dblclick').
     */
    on(
      notification$type: string,
      fn: LeafletEventHandlerFn,
      balloontoolbar$context?: any
    ): this;

    /**
     * Adds a set of type/listener pairs, e.g. {click: onClick, mousemove: onMouseMove}
     */
    on(eventMap: LeafletEventHandlerFnMap): this;

    /**
     * Removes a previously added listener function. If no function is specified,
     * it will remove all the listeners of that particular event from the object.
     * Note that if you passed a custom context to on, you must pass the same context
     * to off in order to remove the listener.
     */
    off(
      notification$type: string,
      fn?: LeafletEventHandlerFn,
      balloontoolbar$context?: any
    ): this;

    /**
     * Removes a set of type/listener pairs.
     */
    off(eventMap: LeafletEventHandlerFnMap): this;

    /**
     * Removes all listeners to all events on the object.
     */
    off(): this;

    /**
     * Fires an event of the specified type. You can optionally provide a data
     * object — the first argument of the listener function will contain its properties.
     * The event might can optionally be propagated to event parents.
     */
    fire(notification$type: string, main$data?: any, propagate?: boolean): this;

    /**
     * Returns true if a particular event type has any listeners attached to it.
     */
    listens(notification$type: string): boolean;

    /**
     * Behaves as on(...), except the listener will only get fired once and then removed.
     */
    once(
      notification$type: string,
      fn: LeafletEventHandlerFn,
      balloontoolbar$context?: any
    ): this;

    /**
     * Behaves as on(...), except the listener will only get fired once and then removed.
     */
    once(eventMap: LeafletEventHandlerFnMap): this;

    /**
     * Adds an event parent - an Evented that will receive propagated events
     */
    addEventParent(obj: dojo$Evented): this;

    /**
     * Removes an event parent, so it will stop receiving propagated events
     */
    removeEventParent(obj: dojo$Evented): this;

    /**
     * Alias for on(...)
     *
     * Adds a listener function (fn) to a particular event type of the object.
     * You can optionally specify the context of the listener (object the this
     * keyword will point to). You can also pass several space-separated types
     * (e.g. 'click dblclick').
     */
    addEventListener(
      notification$type: string,
      fn: LeafletEventHandlerFn,
      balloontoolbar$context?: any
    ): this;

    /**
     * Alias for on(...)
     *
     * Adds a set of type/listener pairs, e.g. {click: onClick, mousemove: onMouseMove}
     */
    addEventListener(eventMap: LeafletEventHandlerFnMap): this;

    /**
     * Alias for off(...)
     *
     * Removes a previously added listener function. If no function is specified,
     * it will remove all the listeners of that particular event from the object.
     * Note that if you passed a custom context to on, you must pass the same context
     * to off in order to remove the listener.
     */
    removeEventListener(
      notification$type: string,
      fn?: LeafletEventHandlerFn,
      balloontoolbar$context?: any
    ): this;

    /**
     * Alias for off(...)
     *
     * Removes a set of type/listener pairs.
     */
    removeEventListener(eventMap: LeafletEventHandlerFnMap): this;

    /**
     * Alias for off()
     *
     * Removes all listeners to all events on the object.
     */
    clearAllEventListeners(): this;

    /**
     * Alias for once(...)
     *
     * Behaves as on(...), except the listener will only get fired once and then removed.
     */
    addOneTimeEventListener(
      notification$type: string,
      fn: LeafletEventHandlerFn,
      balloontoolbar$context?: any
    ): this;

    /**
     * Alias for once(...)
     *
     * Behaves as on(...), except the listener will only get fired once and then removed.
     */
    addOneTimeEventListener(eventMap: LeafletEventHandlerFnMap): this;

    /**
     * Alias for fire(...)
     *
     * Fires an event of the specified type. You can optionally provide a data
     * object — the first argument of the listener function will contain its properties.
     * The event might can optionally be propagated to event parents.
     */
    fireEvent(
      notification$type: string,
      main$data?: any,
      propagate?: boolean
    ): this;

    /**
     * Alias for listens(...)
     *
     * Returns true if a particular event type has any listeners attached to it.
     */
    hasEventListeners(notification$type: string): boolean;
  }

  /**
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   */
  declare export class Draggable mixins dojo$Evented {
    constructor(
      htmlParser$element: HTMLElement,
      dragStartTarget?: HTMLElement,
      DomUtil$preventOutline?: boolean
    ): this;
    enable(): void;
    disable(): void;
    finishDrag(): void;
  }
  declare export interface LayerOptions {
    pane?: string;
    control$attribution?: string;
  }
  declare export type InteractiveLayerOptions = {
    interactive?: boolean,
    bubblingMouseEvents?: boolean
  } & __esri$LayerOptions;

  declare export class Layer mixins dojo$Evented {
    constructor(notification$options?: __esri$LayerOptions): this;
    addTo(array$map: H$Map | LayerGroup): this;
    remove(): this;
    removeFrom(array$map: H$Map): this;
    getPane(skin$name?: string): HTMLElement | void;
    bindPopup(
      definition$content:
        | ((layer: layer$Layer) => Content)
        | Content
        | __esri$Popup,
      notification$options?: PopupOptions
    ): this;
    unbindPopup(): this;
    openPopup(latlng?: LatLngExpression): this;
    closePopup(): this;
    togglePopup(): this;
    isPopupOpen(): boolean;
    setPopupContent(definition$content: Content | __esri$Popup): this;
    getPopup(): __esri$Popup | void;
    bindTooltip(
      definition$content:
        | ((layer: layer$Layer) => Content)
        | ImageMapster$Tooltip
        | Content,
      notification$options?: Highcharts$TooltipOptions
    ): this;
    unbindTooltip(): this;
    openTooltip(latlng?: LatLngExpression): this;
    closeTooltip(): this;
    toggleTooltip(): this;
    isTooltipOpen(): boolean;
    setTooltipContent(definition$content: Content | ImageMapster$Tooltip): this;
    getTooltip(): ImageMapster$Tooltip | void;
    onAdd(array$map: H$Map): this;
    onRemove(array$map: H$Map): this;
    getEvents(): {
      [skin$name: string]: (maps$event: LeafletEvent) => void
    };
    getAttribution(): string | null;
    beforeAdd(array$map: H$Map): this;
    _map: H$Map;
  }
  declare export interface GridLayerOptions {
    tileSize?: number | math$Point;
    __esri$opacity?: number;
    updateWhenIdle?: boolean;
    updateWhenZooming?: boolean;
    updateInterval?: number;
    control$attribution?: string;
    zIndex?: number;
    bounds?: LatLngBoundsExpression;
    minZoom?: number;
    maxZoom?: number;
    noWrap?: boolean;
    pane?: string;
    className?: string;
    keepBuffer?: number;
  }
  declare export type DoneCallback = (
    log$error?: EventType$Error,
    tile?: HTMLElement
  ) => void;
  declare export interface InternalTiles {
    [key: string]: {
      active?: boolean,
      coords: Location$Coords,
      fibers$current: boolean,
      el: HTMLElement,
      loaded?: entities$Date,
      retain?: boolean
    };
  }
  declare export class GridLayer mixins layer$Layer {
    constructor(notification$options?: GridLayerOptions): this;
    bringToFront(): this;
    bringToBack(): this;
    getContainer(): HTMLElement | null;
    setOpacity(__esri$opacity: number): this;
    setZIndex(zIndex: number): this;
    isLoading(): boolean;
    redraw(): this;
    getTileSize(): math$Point;
    createTile(coords: Location$Coords, done: DoneCallback): HTMLElement;
    _tileCoordsToKey(coords: Location$Coords): string;
    _tiles: InternalTiles;
    _tileZoom: number;
  }
  declare export function gridLayer(
    notification$options?: GridLayerOptions
  ): GridLayer;

  declare export type TileLayerOptions = {
    minZoom?: number,
    maxZoom?: number,
    maxNativeZoom?: number,
    minNativeZoom?: number,
    subdomains?: string | string[],
    errorTileUrl?: string,
    zoomOffset?: number,
    tms?: boolean,
    zoomReverse?: boolean,
    detectRetina?: boolean,
    crossOrigin?: boolean
  } & GridLayerOptions;

  declare export class TileLayer mixins GridLayer {
    constructor(
      urlTemplate: string,
      notification$options?: TileLayerOptions
    ): this;
    setUrl(data$url: string, noRedraw?: boolean): this;
    _abortLoading(): void;
    _getZoomForUrl(): number;
    notification$options: TileLayerOptions;
  }
  declare export function tileLayer(
    urlTemplate: string,
    notification$options?: TileLayerOptions
  ): layer$TileLayer;

  declare class TileLayer$WMS mixins layer$TileLayer {
    constructor(baseUrl: string, notification$options: WMSOptions): this;
    setParams(params: WMSParams, noRedraw?: boolean): this;
    wmsParams: WMSParams;
    notification$options: WMSOptions;
  }
  declare export type WMSOptions = {
    control$layers?: string,
    pastefromword$styles?: string,
    format?: string,
    transparent?: boolean,
    Giraffe$version?: string,
    crs?: CRS,
    uppercase?: boolean
  } & TileLayerOptions;

  declare export interface WMSParams {
    format?: string;
    control$layers: string;
    client$request?: string;
    service?: string;
    pastefromword$styles?: string;
    Giraffe$version?: string;
    transparent?: boolean;
    width?: number;
    height?: number;
  }

  declare var npm$namespace$tileLayer: {
    wms: typeof tileLayer$wms
  };
  declare function tileLayer$wms(
    baseUrl: string,
    notification$options?: WMSOptions
  ): layer$TileLayer.TileLayer$WMS;

  declare export type ImageOverlayOptions = {
    __esri$opacity?: number,
    alt?: string,
    interactive?: boolean,
    control$attribution?: string,
    crossOrigin?: boolean,
    className?: string
  } & InteractiveLayerOptions;

  declare export class ImageOverlay mixins layer$Layer {
    constructor(
      imageUrl: string,
      bounds: LatLngBoundsExpression,
      notification$options?: ImageOverlayOptions
    ): this;
    setOpacity(__esri$opacity: number): this;
    bringToFront(): this;
    bringToBack(): this;
    setUrl(data$url: string): this;

    /**
     * Update the bounds that this ImageOverlay covers
     */
    setBounds(bounds: maps$LatLngBounds): this;

    /**
     * Get the bounds that this ImageOverlay covers
     */
    getBounds(): maps$LatLngBounds;

    /**
     * Get the img element that represents the ImageOverlay on the map
     */
    getElement(): HTMLImageElement | void;
    notification$options: ImageOverlayOptions;
  }
  declare export function imageOverlay(
    imageUrl: string,
    bounds: LatLngBoundsExpression,
    notification$options?: ImageOverlayOptions
  ): ImageOverlay;

  declare export type VideoOverlayOptions = {
    autoplay?: boolean,
    loop?: boolean
  } & ImageOverlayOptions;

  declare export class VideoOverlay mixins layer$Layer {
    constructor(
      video: string | string[] | MSHTML$HTMLVideoElement,
      bounds: LatLngBoundsExpression,
      notification$options?: VideoOverlayOptions
    ): this;
    setOpacity(__esri$opacity: number): this;
    bringToFront(): this;
    bringToBack(): this;
    setUrl(data$url: string): this;

    /**
     * Update the bounds that this VideoOverlay covers
     */
    setBounds(bounds: maps$LatLngBounds): this;

    /**
     * Get the bounds that this VideoOverlay covers
     */
    getBounds(): maps$LatLngBounds;

    /**
     * Get the video element that represents the VideoOverlay on the map
     */
    getElement(): MSHTML$HTMLVideoElement | void;
    notification$options: VideoOverlayOptions;
  }
  declare export function videoOverlay(
    video: string | string[] | MSHTML$HTMLVideoElement,
    bounds: LatLngBoundsExpression,
    notification$options?: VideoOverlayOptions
  ): VideoOverlay;

  declare export type LineCapShape = "butt" | "round" | "square" | "inherit";
  declare export type LineJoinShape = "miter" | "round" | "bevel" | "inherit";
  declare export type FillRule = "nonzero" | "evenodd" | "inherit";
  declare export type PathOptions = {
    stroke?: boolean,
    __esri$color?: string,
    weight?: number,
    __esri$opacity?: number,
    lineCap?: LineCapShape,
    lineJoin?: LineJoinShape,
    dashArray?: string,
    dashOffset?: string,
    fill?: boolean,
    fillColor?: string,
    fillOpacity?: number,
    fillRule?: FillRule,
    renderer?: Highcharts$Renderer,
    className?: string
  } & InteractiveLayerOptions;

  declare export class Path mixins layer$Layer {
    redraw(): this;
    setStyle(CKEDITOR$style: PathOptions): this;
    bringToFront(): this;
    bringToBack(): this;
    getElement(): JSX$Element | void;
    notification$options: PathOptions;
  }
  declare export type PolylineOptions = {
    smoothFactor?: number,
    noClip?: boolean
  } & PathOptions;

  declare export class Polyline<
    T: geojson.GeometryObject =
      | geojson.geo$LineString
      | geojson.geo$MultiLineString,
    P = any
  > mixins Path {
    constructor(
      latlngs: LatLngExpression[] | LatLngExpression[][],
      notification$options?: maps$PolylineOptions
    ): this;
    toGeoJSON(): geojson.__esri$Feature<T, P>;
    getLatLngs(): maps$LatLng[] | maps$LatLng[][] | maps$LatLng[][][];
    setLatLngs(
      latlngs:
        | LatLngExpression[]
        | LatLngExpression[][]
        | LatLngExpression[][][]
    ): this;
    isEmpty(): boolean;
    getCenter(): maps$LatLng;
    getBounds(): maps$LatLngBounds;
    addLatLng(latlng: LatLngExpression | LatLngExpression[]): this;
    CKEDITOR$feature: geojson.__esri$Feature<T, P>;
    notification$options: maps$PolylineOptions;
  }
  declare export function polyline(
    latlngs: LatLngExpression[] | LatLngExpression[][],
    notification$options?: maps$PolylineOptions
  ): map$Polyline;

  declare export class Polygon<P = any>
    mixins map$Polyline<geojson.map$Polygon | geojson.MultiPolygon, P> {
    constructor(
      latlngs:
        | LatLngExpression[]
        | LatLngExpression[][]
        | LatLngExpression[][][],
      notification$options?: maps$PolylineOptions
    ): this;
  }
  declare export function polygon(
    latlngs: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][],
    notification$options?: maps$PolylineOptions
  ): map$Polygon;

  declare export class Rectangle<P = any> mixins map$Polygon<P> {
    constructor(
      latLngBounds: LatLngBoundsExpression,
      notification$options?: maps$PolylineOptions
    ): this;
    setBounds(latLngBounds: LatLngBoundsExpression): this;
  }
  declare export function rectangle(
    latLngBounds: LatLngBoundsExpression,
    notification$options?: maps$PolylineOptions
  ): maps$Rectangle;

  declare export type CircleMarkerOptions = {
    radius?: number
  } & PathOptions;

  declare export class CircleMarker<P = any> mixins Path {
    constructor(
      latlng: LatLngExpression,
      notification$options?: CircleMarkerOptions
    ): this;
    toGeoJSON(): geojson.__esri$Feature<geojson.math$Point, P>;
    setLatLng(latLng: LatLngExpression): this;
    getLatLng(): maps$LatLng;
    setRadius(radius: number): this;
    getRadius(): number;
    notification$options: CircleMarkerOptions;
    CKEDITOR$feature: geojson.__esri$Feature<geojson.math$Point, P>;
  }
  declare export function circleMarker(
    latlng: LatLngExpression,
    notification$options?: CircleMarkerOptions
  ): CircleMarker;

  declare export class Circle<P = any> mixins CircleMarker<P> {
    constructor(
      latlng: LatLngExpression,
      notification$options?: CircleMarkerOptions
    ): this;
    constructor(
      latlng: LatLngExpression,
      radius: number,
      notification$options?: CircleMarkerOptions
    ): this;
    getBounds(): maps$LatLngBounds;
  }
  declare export function circle(
    latlng: LatLngExpression,
    notification$options?: CircleMarkerOptions
  ): Geo$Circle;

  declare export function circle(
    latlng: LatLngExpression,
    radius: number,
    notification$options?: CircleMarkerOptions
  ): Geo$Circle;

  declare export type RendererOptions = {
    padding?: number
  } & __esri$LayerOptions;

  declare export class Renderer mixins layer$Layer {
    constructor(notification$options?: RendererOptions): this;
    notification$options: RendererOptions;
  }
  declare export class SVG mixins Highcharts$Renderer {}

  declare var npm$namespace$SVG: {
    create: typeof SVG$create,
    pointsToPath: typeof SVG$pointsToPath
  };
  declare function SVG$create(skin$name: string): MSHTML$SVGElement;

  declare function SVG$pointsToPath(
    rings: PointExpression[],
    EncryptedCache$close: boolean
  ): string;

  declare export function svg(notification$options?: RendererOptions): SVG;

  declare export class Canvas mixins Highcharts$Renderer {}
  declare export function canvas(
    notification$options?: RendererOptions
  ): Canvas;

  /**
   * Used to group several layers and handle them as one.
   * If you add it to the map, any layers added or removed from the group will be
   * added/removed on the map as well. Extends Layer.
   */
  declare export class LayerGroup<P = any> mixins layer$Layer {
    constructor(
      control$layers?: layer$Layer[],
      notification$options?: __esri$LayerOptions
    ): this;

    /**
     * Returns a GeoJSON representation of the layer group (as a GeoJSON GeometryCollection, GeoJSONFeatureCollection or Multipoint).
     */
    toGeoJSON():
      | geojson.FeatureCollection<geojson.GeometryObject, P>
      | geojson.__esri$Feature<geojson.MultiPoint, P>
      | geojson.GeometryCollection;

    /**
     * Adds the given layer to the group.
     */
    addLayer(layer: layer$Layer): this;

    /**
     * Removes the layer with the given internal ID or the given layer from the group.
     */
    removeLayer(layer: number | layer$Layer): this;

    /**
     * Returns true if the given layer is currently added to the group.
     */
    hasLayer(layer: layer$Layer): boolean;

    /**
     * Removes all the layers from the group.
     */
    clearLayers(): this;

    /**
     * Calls methodName on every layer contained in this group, passing any additional parameters.
     * Has no effect if the layers contained do not implement methodName.
     */
    invoke(methodName: string, ...params: any[]): this;

    /**
     * Iterates over the layers of the group,
     * optionally specifying context of the iterator function.
     */
    eachLayer(
      fn: (layer: layer$Layer) => void,
      balloontoolbar$context?: any
    ): this;

    /**
     * Returns the layer with the given internal ID.
     */
    getLayer(id: number): layer$Layer | void;

    /**
     * Returns an array of all the layers added to the group.
     */
    getLayers(): layer$Layer[];

    /**
     * Calls setZIndex on every layer contained in this group, passing the z-index.
     */
    setZIndex(zIndex: number): this;

    /**
     * Returns the internal ID for a layer
     */
    getLayerId(layer: layer$Layer): number;
    CKEDITOR$feature:
      | geojson.FeatureCollection<geojson.GeometryObject, P>
      | geojson.__esri$Feature<geojson.MultiPoint, P>
      | geojson.GeometryCollection;
  }

  /**
   * Create a layer group, optionally given an initial set of layers and an `options` object.
   */
  declare export function layerGroup(
    control$layers?: layer$Layer[],
    notification$options?: __esri$LayerOptions
  ): LayerGroup;

  /**
   * Extended LayerGroup that also has mouse events (propagated from
   * members of the group) and a shared bindPopup method.
   */
  declare export class FeatureGroup<P = any> mixins LayerGroup<P> {
    /**
     * Sets the given path options to each layer of the group that has a setStyle method.
     */
    setStyle(CKEDITOR$style: PathOptions): this;

    /**
     * Brings the layer group to the top of all other layers
     */
    bringToFront(): this;

    /**
     * Brings the layer group to the top [sic] of all other layers
     */
    bringToBack(): this;

    /**
     * Returns the LatLngBounds of the Feature Group (created from
     * bounds and coordinates of its children).
     */
    getBounds(): maps$LatLngBounds;
  }

  /**
   * Create a feature group, optionally given an initial set of layers.
   */
  declare export function featureGroup(
    control$layers?: layer$Layer[]
  ): FeatureGroup;

  declare export type StyleFunction<P = any> = (
    CKEDITOR$feature?: geojson.__esri$Feature<geojson.GeometryObject, P>
  ) => PathOptions;
  declare export type GeoJSONOptions<P = any> = {
    /**
     * A Function defining how GeoJSON points spawn Leaflet layers.
     * It is internally called when data is added, passing the GeoJSON point
     * feature and its LatLng.
     *
     * The default is to spawn a default Marker:
     *
     * ```
     *      * function(geoJsonPoint, latlng) {
     *      *     return L.marker(latlng);
     *      * }
     *      * ```
     */
    pointToLayer?: (
      geoJsonPoint: geojson.__esri$Feature<geojson.math$Point, P>,
      latlng: maps$LatLng
    ) => layer$Layer,

    /**
     * PathOptions or a Function defining the Path options for styling GeoJSON lines and polygons,
     * called internally when data is added.
     *
     * The default value is to not override any defaults:
     *
     * ```
     *      * function (geoJsonFeature) {
     *      *     return {}
     *      * }
     *      * ```
     */
    CKEDITOR$style?: PathOptions | StyleFunction<P>,

    /**
     * A Function that will be called once for each created Feature, after it
     * has been created and styled. Useful for attaching events and popups to features.
     *
     * The default is to do nothing with the newly created layers:
     *
     * ```
     *      * function (feature, layer) {}
     *      * ```
     */
    onEachFeature?: (
      CKEDITOR$feature: geojson.__esri$Feature<geojson.GeometryObject, P>,
      layer: layer$Layer
    ) => void,

    /**
     * A Function that will be used to decide whether to show a feature or not.
     *
     * The default is to show all features:
     *
     * ```
     *      * function (geoJsonFeature) {
     *      *     return true;
     *      * }
     *      * ```
     */
    util$filter?: (
      geoJsonFeature: geojson.__esri$Feature<geojson.GeometryObject, P>
    ) => boolean,

    /**
     * A Function that will be used for converting GeoJSON coordinates to LatLngs.
     * The default is the coordsToLatLng static method.
     */
    coordsToLatLng?: (
      coords: [number, number] | [number, number, number]
    ) => maps$LatLng
  } & __esri$LayerOptions;

  /**
   * Represents a GeoJSON object or an array of GeoJSON objects.
   * Allows you to parse GeoJSON data and display it on the map. Extends FeatureGroup.
   */
  declare export class GeoJSON<P = any> mixins FeatureGroup<P> {
    /**
     * Creates a Layer from a given GeoJSON feature. Can use a custom pointToLayer
     * and/or coordsToLatLng functions if provided as options.
     */
    static geometryToLayer<P>(
      featureData: geojson.__esri$Feature<geojson.GeometryObject, P>,
      notification$options?: GeoJSONOptions<P>
    ): layer$Layer;

    /**
     * Creates a LatLng object from an array of 2 numbers (longitude, latitude) or
     * 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
     */
    static coordsToLatLng(
      coords: [number, number] | [number, number, number]
    ): maps$LatLng;

    /**
     * Creates a multidimensional array of LatLngs from a GeoJSON coordinates array.
     * levelsDeep specifies the nesting level (0 is for an array of points, 1 for an array of
     * arrays of points, etc., 0 by default).
     * Can use a custom coordsToLatLng function.
     */
    static coordsToLatLngs(
      coords: any[],
      levelsDeep?: number,
      coordsToLatLng?: (
        coords: [number, number] | [number, number, number]
      ) => maps$LatLng
    ): any[];

    /**
     * Reverse of coordsToLatLng
     */
    static latLngToCoords(
      latlng: maps$LatLng
    ): [number, number] | [number, number, number];

    /**
     * Reverse of coordsToLatLngs closed determines whether the first point should be
     * appended to the end of the array to close the feature, only used when levelsDeep is 0.
     * False by default.
     */
    static latLngsToCoords(
      latlngs: any[],
      levelsDeep?: number,
      closed?: boolean
    ): any[];

    /**
     * Normalize GeoJSON geometries/features into GeoJSON features.
     */
    static asFeature<P>(
      geojson:
        | geojson.__esri$Feature<geojson.GeometryObject, P>
        | geojson.GeometryObject
    ): geojson.__esri$Feature<geojson.GeometryObject, P>;
    constructor(
      geojson?: geojson.GeoJsonObject,
      notification$options?: GeoJSONOptions<P>
    ): this;

    /**
     * Adds a GeoJSON object to the layer.
     */
    addData(main$data: geojson.GeoJsonObject): layer$Layer;

    /**
     * Resets the given vector layer's style to the original GeoJSON style,
     * useful for resetting style after hover events.
     */
    resetStyle(layer: layer$Layer): layer$Layer;

    /**
     * Same as FeatureGroup's setStyle method, but style-functions are also
     * allowed here to set the style according to the feature.
     */
    setStyle(CKEDITOR$style: PathOptions | StyleFunction<P>): this;
    notification$options: GeoJSONOptions<P>;
  }

  /**
   * Creates a GeoJSON layer.
   *
   * Optionally accepts an object in GeoJSON format to display on the
   * map (you can alternatively add it later with addData method) and
   * an options object.
   */
  declare export function geoJSON<P>(
    geojson?: geojson.GeoJsonObject,
    notification$options?: GeoJSONOptions<P>
  ): GeoJSON<P>;

  declare export type Zoom = boolean | "center";
  declare export interface MapOptions {
    preferCanvas?: boolean;
    attributionControl?: boolean;
    zoomControl?: boolean;
    closePopupOnClick?: boolean;
    zoomSnap?: number;
    zoomDelta?: number;
    trackResize?: boolean;
    boxZoom?: boolean;
    doubleClickZoom?: Control$Zoom;
    dragging?: boolean;
    crs?: CRS;
    center?: LatLngExpression;
    control$zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    control$layers?: layer$Layer[];
    maxBounds?: LatLngBoundsExpression;
    renderer?: Highcharts$Renderer;
    fadeAnimation?: boolean;
    markerZoomAnimation?: boolean;
    transform3DLimit?: number;
    zoomAnimation?: boolean;
    zoomAnimationThreshold?: number;
    inertia?: boolean;
    inertiaDeceleration?: number;
    inertiaMaxSpeed?: number;
    easeLinearity?: number;
    worldCopyJump?: boolean;
    maxBoundsViscosity?: number;
    keyboard?: boolean;
    keyboardPanDelta?: number;
    scrollWheelZoom?: Control$Zoom;
    wheelDebounceTime?: number;
    wheelPxPerZoomLevel?: number;
    tap?: boolean;
    tapTolerance?: number;
    touchZoom?: Control$Zoom;
    bounceAtZoomLimits?: boolean;
  }
  declare export type ControlPosition =
    | "topleft"
    | "topright"
    | "bottomleft"
    | "bottomright";
  declare export interface ControlOptions {
    dom$position?: maps$ControlPosition;
  }
  declare export class Control mixins Access$Class {
    constructor(notification$options?: UI$ControlOptions): this;
    getPosition(): maps$ControlPosition;
    setPosition(dom$position: maps$ControlPosition): this;
    getContainer(): HTMLElement | void;
    addTo(array$map: H$Map): this;
    remove(): this;
    onAdd(array$map: H$Map): HTMLElement;
    onRemove(array$map: H$Map): void;
    notification$options: UI$ControlOptions;
  }
  declare type Control$ZoomOptions = {
    zoomInText?: string,
    zoomInTitle?: string,
    zoomOutText?: string,
    zoomOutTitle?: string
  } & UI$ControlOptions;

  declare class Control$Zoom mixins ui$Control {
    constructor(notification$options?: Control$ZoomOptions): this;
    notification$options: Control$ZoomOptions;
  }

  declare type Control$AttributionOptions = {
    prefix?: string | boolean
  } & UI$ControlOptions;

  declare class Control$Attribution mixins ui$Control {
    constructor(notification$options?: Control$AttributionOptions): this;
    setPrefix(prefix: string): this;
    addAttribution(dojo$text: string): this;
    removeAttribution(dojo$text: string): this;
    notification$options: Control$AttributionOptions;
  }

  declare type Control$LayersOptions = {
    collapsed?: boolean,
    autoZIndex?: boolean,
    hideSingleBase?: boolean
  } & UI$ControlOptions;

  declare interface Control$LayersObject {
    [skin$name: string]: layer$Layer;
  }

  declare class Control$Layers mixins ui$Control {
    constructor(
      baseLayers?: Control$LayersObject,
      overlays?: Control$LayersObject,
      notification$options?: Control$LayersOptions
    ): this;
    addBaseLayer(layer: layer$Layer, skin$name: string): this;
    addOverlay(layer: layer$Layer, skin$name: string): this;
    removeLayer(layer: layer$Layer): this;
    expand(): this;
    collapse(): this;
    notification$options: Control$LayersOptions;
  }

  declare type Control$ScaleOptions = {
    maxWidth?: number,
    metric?: boolean,
    imperial?: boolean,
    updateWhenIdle?: boolean
  } & UI$ControlOptions;

  declare class Control$Scale mixins ui$Control {
    constructor(notification$options?: Control$ScaleOptions): this;
    notification$options: Control$ScaleOptions;
  }

  declare var npm$namespace$control: {
    zoom: typeof control$zoom,
    attribution: typeof control$attribution,
    layers: typeof control$layers,
    scale: typeof control$scale
  };
  declare function control$zoom(
    notification$options?: ui$Control.Control$ZoomOptions
  ): ui$Control.Control$Zoom;

  declare function control$attribution(
    notification$options?: ui$Control.Control$AttributionOptions
  ): ui$Control.Control$Attribution;

  declare function control$layers(
    baseLayers?: ui$Control.Control$LayersObject,
    overlays?: ui$Control.Control$LayersObject,
    notification$options?: ui$Control.Control$LayersOptions
  ): ui$Control.Control$Layers;

  declare function control$scale(
    notification$options?: ui$Control.Control$ScaleOptions
  ): ui$Control.Control$Scale;

  declare export interface DivOverlayOptions {
    offset?: PointExpression;
    zoomAnimation?: boolean;
    className?: string;
    pane?: string;
  }
  declare export type PopupOptions = {
    maxWidth?: number,
    minWidth?: number,
    maxHeight?: number,
    autoPan?: boolean,
    autoPanPaddingTopLeft?: PointExpression,
    autoPanPaddingBottomRight?: PointExpression,
    autoPanPadding?: PointExpression,
    keepInView?: boolean,
    closeButton?: boolean,
    autoClose?: boolean,
    closeOnClick?: boolean
  } & DivOverlayOptions;

  declare export type Content = string | HTMLElement;
  declare export class Popup mixins layer$Layer {
    constructor(
      notification$options?: PopupOptions,
      source?: layer$Layer
    ): this;
    getLatLng(): maps$LatLng | void;
    setLatLng(latlng: LatLngExpression): this;
    getContent(): Content | ((source: layer$Layer) => Content) | void;
    setContent(htmlContent: ((source: layer$Layer) => Content) | Content): this;
    getElement(): HTMLElement | void;
    update(): void;
    isOpen(): boolean;
    bringToFront(): this;
    bringToBack(): this;
    openOn(array$map: H$Map): this;
    notification$options: PopupOptions;
  }
  declare export function popup(
    notification$options?: PopupOptions,
    source?: layer$Layer
  ): __esri$Popup;

  declare export type Direction =
    | "right"
    | "left"
    | "top"
    | "bottom"
    | "center"
    | "auto";
  declare export type TooltipOptions = {
    pane?: string,
    offset?: PointExpression,
    direction?: Direction,
    permanent?: boolean,
    sticky?: boolean,
    interactive?: boolean,
    __esri$opacity?: number
  } & DivOverlayOptions;

  declare export class Tooltip mixins layer$Layer {
    constructor(
      notification$options?: Highcharts$TooltipOptions,
      source?: layer$Layer
    ): this;
    setOpacity(val: number): void;
    getLatLng(): maps$LatLng | void;
    setLatLng(latlng: LatLngExpression): this;
    getContent(): Content | void;
    setContent(htmlContent: ((source: layer$Layer) => Content) | Content): this;
    getElement(): HTMLElement | void;
    update(): void;
    isOpen(): boolean;
    bringToFront(): this;
    bringToBack(): this;
    notification$options: Highcharts$TooltipOptions;
  }
  declare export function tooltip(
    notification$options?: Highcharts$TooltipOptions,
    source?: layer$Layer
  ): ImageMapster$Tooltip;

  declare export interface ZoomOptions {
    animate?: boolean;
  }
  declare export interface PanOptions {
    animate?: boolean;
    duration?: number;
    easeLinearity?: number;
    noMoveStart?: boolean;
  }
  declare export type ZoomPanOptions = {} & Control$ZoomOptions & PanOptions;

  declare export type FitBoundsOptions = {
    paddingTopLeft?: PointExpression,
    paddingBottomRight?: PointExpression,
    padding?: PointExpression,
    maxZoom?: number
  } & Control$ZoomOptions &
    PanOptions;

  declare export interface PanInsideOptions {
    paddingTopLeft?: PointExpression;
    paddingBottomRight?: PointExpression;
    padding?: PointExpression;
  }
  declare export interface LocateOptions {
    keyboardjs$watch?: boolean;
    setView?: boolean;
    maxZoom?: number;
    timeout?: number;
    maximumAge?: number;
    enableHighAccuracy?: boolean;
  }
  declare export class Handler mixins Access$Class {
    constructor(array$map: H$Map): this;
    enable(): this;
    disable(): this;
    enabled(): boolean;
    addHooks(): void;
    removeHooks(): void;
  }
  declare export interface LeafletEvent {
    notification$type: string;
    target: any;
  }
  declare export type LeafletMouseEvent = {
    latlng: maps$LatLng,
    layerPoint: math$Point,
    containerPoint: math$Point,
    originalEvent: maps$MouseEvent
  } & LeafletEvent;

  declare export type LeafletKeyboardEvent = {
    originalEvent: KeyboardEvent
  } & LeafletEvent;

  declare export type LocationEvent = {
    latlng: maps$LatLng,
    bounds: maps$LatLngBounds,
    accuracy: number,
    altitude: number,
    altitudeAccuracy: number,
    heading: number,
    speed: number,
    CKEDITOR$timestamp: number
  } & LeafletEvent;

  declare export type ErrorEvent = {
    message: string,
    code: number
  } & LeafletEvent;

  declare export type LayerEvent = {
    layer: layer$Layer
  } & LeafletEvent;

  declare export type LayersControlEvent = {
    skin$name: string
  } & LayerEvent;

  declare export type TileEvent = {
    tile: HTMLImageElement,
    coords: math$Point
  } & LeafletEvent;

  declare export type TileErrorEvent = {
    log$error: EventType$Error
  } & TileEvent;

  declare export type ResizeEvent = {
    oldSize: math$Point,
    newSize: math$Point
  } & LeafletEvent;

  declare export type GeoJSONEvent = {
    layer: layer$Layer,
    properties: any,
    geometryType: string,
    id: string
  } & LeafletEvent;

  declare export type PopupEvent = {
    popup: __esri$Popup
  } & LeafletEvent;

  declare export type TooltipEvent = {
    tooltip: ImageMapster$Tooltip
  } & LeafletEvent;

  declare export type DragEndEvent = {
    distance: number
  } & LeafletEvent;

  declare export type ZoomAnimEvent = {
    center: maps$LatLng,
    control$zoom: number,
    noUpdate: boolean
  } & LeafletEvent;

  declare var npm$namespace$DomEvent: {
    on: typeof DomEvent$on,
    off: typeof DomEvent$off,
    stopPropagation: typeof DomEvent$stopPropagation,
    disableScrollPropagation: typeof DomEvent$disableScrollPropagation,
    disableClickPropagation: typeof DomEvent$disableClickPropagation,
    preventDefault: typeof DomEvent$preventDefault,
    stop: typeof DomEvent$stop,
    getMousePosition: typeof DomEvent$getMousePosition,
    getWheelDelta: typeof DomEvent$getWheelDelta,
    addListener: typeof DomEvent$addListener,
    removeListener: typeof DomEvent$removeListener
  };
  declare type DomEvent$EventHandlerFn = (maps$event: Client$Event) => void;

  declare function DomEvent$on(
    el: HTMLElement,
    types: string,
    fn: DomEvent$EventHandlerFn,
    balloontoolbar$context?: any
  ): typeof DomEvent;

  declare function DomEvent$on(
    el: HTMLElement,
    eventMap: {
      [eventName: string]: DomEvent$EventHandlerFn
    },
    balloontoolbar$context?: any
  ): typeof DomEvent;

  declare function DomEvent$off(
    el: HTMLElement,
    types: string,
    fn: DomEvent$EventHandlerFn,
    balloontoolbar$context?: any
  ): typeof DomEvent;

  declare function DomEvent$off(
    el: HTMLElement,
    eventMap: {
      [eventName: string]: DomEvent$EventHandlerFn
    },
    balloontoolbar$context?: any
  ): typeof DomEvent;

  declare function DomEvent$stopPropagation(ev: Client$Event): typeof DomEvent;

  declare function DomEvent$disableScrollPropagation(
    el: HTMLElement
  ): typeof DomEvent;

  declare function DomEvent$disableClickPropagation(
    el: HTMLElement
  ): typeof DomEvent;

  declare function DomEvent$preventDefault(ev: Client$Event): typeof DomEvent;

  declare function DomEvent$stop(ev: Client$Event): typeof DomEvent;

  declare function DomEvent$getMousePosition(
    ev: maps$MouseEvent,
    container?: HTMLElement
  ): math$Point;

  declare function DomEvent$getWheelDelta(ev: Client$Event): number;

  declare function DomEvent$addListener(
    el: HTMLElement,
    types: string,
    fn: DomEvent$EventHandlerFn,
    balloontoolbar$context?: any
  ): typeof DomEvent;

  declare function DomEvent$addListener(
    el: HTMLElement,
    eventMap: {
      [eventName: string]: DomEvent$EventHandlerFn
    },
    balloontoolbar$context?: any
  ): typeof DomEvent;

  declare function DomEvent$removeListener(
    el: HTMLElement,
    types: string,
    fn: DomEvent$EventHandlerFn,
    balloontoolbar$context?: any
  ): typeof DomEvent;

  declare function DomEvent$removeListener(
    el: HTMLElement,
    eventMap: {
      [eventName: string]: DomEvent$EventHandlerFn
    },
    balloontoolbar$context?: any
  ): typeof DomEvent;

  declare export interface DefaultMapPanes {
    mapPane: HTMLElement;
    tilePane: HTMLElement;
    overlayPane: HTMLElement;
    shadowPane: HTMLElement;
    markerPane: HTMLElement;
    tooltipPane: HTMLElement;
    popupPane: HTMLElement;
  }
  declare export class Map mixins dojo$Evented {
    constructor(
      htmlParser$element: string | HTMLElement,
      notification$options?: maps$MapOptions
    ): this;
    getRenderer(layer: Path): Highcharts$Renderer;
    addControl(control: ui$Control): this;
    removeControl(control: ui$Control): this;
    addLayer(layer: layer$Layer): this;
    removeLayer(layer: layer$Layer): this;
    hasLayer(layer: layer$Layer): boolean;
    eachLayer(
      fn: (layer: layer$Layer) => void,
      balloontoolbar$context?: any
    ): this;
    openPopup(popup: __esri$Popup): this;
    openPopup(
      definition$content: Content,
      latlng: LatLngExpression,
      notification$options?: PopupOptions
    ): this;
    closePopup(popup?: __esri$Popup): this;
    openTooltip(tooltip: ImageMapster$Tooltip): this;
    openTooltip(
      definition$content: Content,
      latlng: LatLngExpression,
      notification$options?: Highcharts$TooltipOptions
    ): this;
    closeTooltip(tooltip?: ImageMapster$Tooltip): this;
    setView(
      center: LatLngExpression,
      control$zoom: number,
      notification$options?: ZoomPanOptions
    ): this;
    setZoom(control$zoom: number, notification$options?: ZoomPanOptions): this;
    zoomIn(delta?: number, notification$options?: Control$ZoomOptions): this;
    zoomOut(delta?: number, notification$options?: Control$ZoomOptions): this;
    setZoomAround(
      dom$position: math$Point | LatLngExpression,
      control$zoom: number,
      notification$options?: Control$ZoomOptions
    ): this;
    fitBounds(
      bounds: LatLngBoundsExpression,
      notification$options?: FitBoundsOptions
    ): this;
    fitWorld(notification$options?: FitBoundsOptions): this;
    panTo(latlng: LatLngExpression, notification$options?: PanOptions): this;
    panBy(offset: PointExpression): this;
    setMaxBounds(bounds: LatLngBoundsExpression): this;
    setMinZoom(control$zoom: number): this;
    setMaxZoom(control$zoom: number): this;
    panInside(
      latLng: LatLngExpression,
      notification$options?: PanInsideOptions
    ): this;
    panInsideBounds(
      bounds: LatLngBoundsExpression,
      notification$options?: PanOptions
    ): this;

    /**
     * Boolean for animate or advanced ZoomPanOptions
     */
    invalidateSize(notification$options?: boolean | ZoomPanOptions): this;
    stop(): this;
    flyTo(
      latlng: LatLngExpression,
      control$zoom?: number,
      notification$options?: ZoomPanOptions
    ): this;
    flyToBounds(
      bounds: LatLngBoundsExpression,
      notification$options?: FitBoundsOptions
    ): this;
    addHandler(skin$name: string, HandlerClass: typeof Handler): this;
    remove(): this;
    createPane(skin$name: string, container?: HTMLElement): HTMLElement;

    /**
     * Name of the pane or the pane as HTML-Element
     */
    getPane(pane: string | HTMLElement): HTMLElement | void;
    getPanes(): {
      [skin$name: string]: HTMLElement
    } & DefaultMapPanes;
    getContainer(): HTMLElement;
    whenReady(fn: () => void, balloontoolbar$context?: any): this;
    getCenter(): maps$LatLng;
    getZoom(): number;
    getBounds(): maps$LatLngBounds;
    getMinZoom(): number;
    getMaxZoom(): number;
    getBoundsZoom(bounds: LatLngBoundsExpression, inside?: boolean): number;
    getSize(): math$Point;
    getPixelBounds(): BPMNModdle$Bounds;
    getPixelOrigin(): math$Point;
    getPixelWorldBounds(control$zoom?: number): BPMNModdle$Bounds;
    getZoomScale(toZoom: number, fromZoom: number): number;
    getScaleZoom(control$scale: number, fromZoom: number): number;
    project(latlng: LatLngExpression, control$zoom: number): math$Point;
    unproject(point: PointExpression, control$zoom: number): maps$LatLng;
    layerPointToLatLng(point: PointExpression): maps$LatLng;
    latLngToLayerPoint(latlng: LatLngExpression): math$Point;
    wrapLatLng(latlng: LatLngExpression): maps$LatLng;
    wrapLatLngBounds(bounds: maps$LatLngBounds): maps$LatLngBounds;
    distance(latlng1: LatLngExpression, latlng2: LatLngExpression): number;
    containerPointToLayerPoint(point: PointExpression): math$Point;
    containerPointToLatLng(point: PointExpression): maps$LatLng;
    layerPointToContainerPoint(point: PointExpression): math$Point;
    latLngToContainerPoint(latlng: LatLngExpression): math$Point;
    mouseEventToContainerPoint(ev: maps$MouseEvent): math$Point;
    mouseEventToLayerPoint(ev: maps$MouseEvent): math$Point;
    mouseEventToLatLng(ev: maps$MouseEvent): maps$LatLng;
    locate(notification$options?: LocateOptions): this;
    stopLocate(): this;
    boxZoom: createRouter$Handler;
    doubleClickZoom: createRouter$Handler;
    dragging: createRouter$Handler;
    keyboard: createRouter$Handler;
    scrollWheelZoom: createRouter$Handler;
    tap: createRouter$Handler;
    touchZoom: createRouter$Handler;
    zoomControl: ui$Control.Control$Zoom;
    notification$options: maps$MapOptions;
  }

  /**
   * ID of a HTML-Element as string or the HTML-ELement itself
   */
  declare export function map(
    htmlParser$element: string | HTMLElement,
    notification$options?: maps$MapOptions
  ): H$Map;

  declare export type BaseIconOptions = {
    iconUrl?: string,
    iconRetinaUrl?: string,
    iconSize?: PointExpression,
    iconAnchor?: PointExpression,
    popupAnchor?: PointExpression,
    tooltipAnchor?: PointExpression,
    shadowUrl?: string,
    shadowRetinaUrl?: string,
    shadowSize?: PointExpression,
    shadowAnchor?: PointExpression,
    className?: string
  } & __esri$LayerOptions;

  declare export type IconOptions = {
    iconUrl: string
  } & BaseIconOptions;

  declare export class Icon<T: BaseIconOptions = IconOptions>
    mixins layer$Layer {
    constructor(notification$options: T): this;
    createIcon(oldIcon?: HTMLElement): HTMLElement;
    createShadow(oldIcon?: HTMLElement): HTMLElement;
    notification$options: T;
  }
  declare type Icon$DefaultIconOptions = {
    imagePath?: string
  } & BaseIconOptions;

  declare class Icon$Default mixins FFAddonSDK$Icon<Icon$DefaultIconOptions> {
    static imagePath: string;
    constructor(notification$options?: Icon$DefaultIconOptions): this;
  }
  declare export function icon(
    notification$options: IconOptions
  ): FFAddonSDK$Icon;

  declare export type DivIconOptions = {
    main$html?: string | false,
    bgPos?: PointExpression,
    iconSize?: PointExpression,
    iconAnchor?: PointExpression,
    popupAnchor?: PointExpression,
    className?: string
  } & BaseIconOptions;

  declare export class DivIcon mixins FFAddonSDK$Icon<DivIconOptions> {
    constructor(notification$options?: DivIconOptions): this;
  }
  declare export function divIcon(
    notification$options?: DivIconOptions
  ): DivIcon;

  declare export type MarkerOptions = {
    icon?: FFAddonSDK$Icon | DivIcon,
    clickable?: boolean,
    draggable?: boolean,
    keyboard?: boolean,
    title?: string,
    alt?: string,
    zIndexOffset?: number,
    __esri$opacity?: number,
    riseOnHover?: boolean,
    riseOffset?: number
  } & InteractiveLayerOptions;

  declare export class Marker<P = any> mixins layer$Layer {
    constructor(
      latlng: LatLngExpression,
      notification$options?: maps$MarkerOptions
    ): this;
    toGeoJSON(): geojson.__esri$Feature<geojson.math$Point, P>;
    getLatLng(): maps$LatLng;
    setLatLng(latlng: LatLngExpression): this;
    setZIndexOffset(offset: number): this;
    setIcon(icon: FFAddonSDK$Icon | DivIcon): this;
    setOpacity(__esri$opacity: number): this;
    getElement(): HTMLElement | void;
    notification$options: maps$MarkerOptions;
    dragging: createRouter$Handler;
    CKEDITOR$feature: geojson.__esri$Feature<geojson.math$Point, P>;
  }
  declare export function marker(
    latlng: LatLngExpression,
    notification$options?: maps$MarkerOptions
  ): Highcharts$Marker;

  declare var npm$namespace$Browser: {
    ie: typeof Browser$ie,
    ielt9: typeof Browser$ielt9,
    edge: typeof Browser$edge,
    webkit: typeof Browser$webkit,
    gecko: typeof Browser$gecko,
    android: typeof Browser$android,
    android23: typeof Browser$android23,
    chrome: typeof Browser$chrome,
    safari: typeof Browser$safari,
    win: typeof Browser$win,
    ie3d: typeof Browser$ie3d,
    webkit3d: typeof Browser$webkit3d,
    gecko3d: typeof Browser$gecko3d,
    opera12: typeof Browser$opera12,
    any3d: typeof Browser$any3d,
    mobile: typeof Browser$mobile,
    mobileWebkit: typeof Browser$mobileWebkit,
    mobileWebkit3d: typeof Browser$mobileWebkit3d,
    mobileOpera: typeof Browser$mobileOpera,
    mobileGecko: typeof Browser$mobileGecko,
    touch: typeof Browser$touch,
    msPointer: typeof Browser$msPointer,
    pointer: typeof Browser$pointer,
    retina: typeof Browser$retina,
    canvas: typeof Browser$canvas,
    vml: typeof Browser$vml,
    svg: typeof Browser$svg
  };
  declare var Browser$ie: boolean;

  declare var Browser$ielt9: boolean;

  declare var Browser$edge: boolean;

  declare var Browser$webkit: boolean;

  declare var Browser$gecko: boolean;

  declare var Browser$android: boolean;

  declare var Browser$android23: boolean;

  declare var Browser$chrome: boolean;

  declare var Browser$safari: boolean;

  declare var Browser$win: boolean;

  declare var Browser$ie3d: boolean;

  declare var Browser$webkit3d: boolean;

  declare var Browser$gecko3d: boolean;

  declare var Browser$opera12: boolean;

  declare var Browser$any3d: boolean;

  declare var Browser$mobile: boolean;

  declare var Browser$mobileWebkit: boolean;

  declare var Browser$mobileWebkit3d: boolean;

  declare var Browser$mobileOpera: boolean;

  declare var Browser$mobileGecko: boolean;

  declare var Browser$touch: boolean;

  declare var Browser$msPointer: boolean;

  declare var Browser$pointer: boolean;

  declare var Browser$retina: boolean;

  declare var Browser$canvas: boolean;

  declare var Browser$vml: boolean;

  declare var Browser$svg: boolean;

  declare var npm$namespace$Util: {
    extend: typeof Util$extend,
    create: typeof Util$create,
    bind: typeof Util$bind,
    stamp: typeof Util$stamp,
    throttle: typeof Util$throttle,
    wrapNum: typeof Util$wrapNum,
    falseFn: typeof Util$falseFn,
    formatNum: typeof Util$formatNum,
    trim: typeof Util$trim,
    splitWords: typeof Util$splitWords,
    setOptions: typeof Util$setOptions,
    getParamString: typeof Util$getParamString,
    template: typeof Util$template,
    isArray: typeof Util$isArray,
    indexOf: typeof Util$indexOf,
    requestAnimFrame: typeof Util$requestAnimFrame,
    cancelAnimFrame: typeof Util$cancelAnimFrame,
    lastId: typeof Util$lastId,
    emptyImageUrl: typeof Util$emptyImageUrl
  };
  declare function Util$extend<
    D: { [key: string]: any },
    S1: { [key: string]: any }
  >(
    dest: D,
    src?: S1
  ): D & S1;

  declare function Util$extend<
    D: { [key: string]: any },
    S1: { [key: string]: any },
    S2: { [key: string]: any }
  >(
    dest: D,
    src1: S1,
    src2: S2
  ): D & S1 & S2;

  declare function Util$extend<
    D: { [key: string]: any },
    S1: { [key: string]: any },
    S2: { [key: string]: any },
    S3: { [key: string]: any }
  >(
    dest: D,
    src1: S1,
    src2: S2,
    src3: S3
  ): D & S1 & S2 & S3;

  declare function Util$extend(dest: any, ...src: any[]): any;

  declare function Util$create(
    proto: { [key: string]: any } | null,
    properties?: PropertyDescriptorMap
  ): any;

  declare function Util$bind(fn: () => void, ...obj: any[]): () => void;

  declare function Util$stamp(obj: any): number;

  declare function Util$throttle(
    fn: () => void,
    time: number,
    balloontoolbar$context: any
  ): () => void;

  declare function Util$wrapNum(
    num: number,
    dom$range: number[],
    includeMax?: boolean
  ): number;

  declare function Util$falseFn(): false;

  declare function Util$formatNum(num: number, digits?: number): number;

  declare function Util$trim(str: string): string;

  declare function Util$splitWords(str: string): string[];

  declare function Util$setOptions(obj: any, notification$options: any): any;

  declare function Util$getParamString(
    obj: any,
    existingUrl?: string,
    uppercase?: boolean
  ): string;

  declare function Util$template(str: string, main$data: any): string;

  declare function Util$isArray(obj: any): boolean;

  declare function Util$indexOf(getenv$array: any[], el: any): number;

  declare function Util$requestAnimFrame(
    fn: (CKEDITOR$timestamp: number) => void,
    balloontoolbar$context?: any,
    immediate?: boolean
  ): number;

  declare function Util$cancelAnimFrame(id: number): void;

  declare var Util$lastId: number;

  declare var Util$emptyImageUrl: string;
}
