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
    transform(point: Point, scale?: number): Point;
    untransform(point: Point, scale?: number): Point;
  }

  declare var npm$namespace$LineUtil: {
    simplify: typeof LineUtil$simplify,
    pointToSegmentDistance: typeof LineUtil$pointToSegmentDistance,
    closestPointOnSegment: typeof LineUtil$closestPointOnSegment,
    isFlat: typeof LineUtil$isFlat
  };
  declare function LineUtil$simplify(
    points: Point[],
    tolerance: number
  ): Point[];

  declare function LineUtil$pointToSegmentDistance(
    p: Point,
    p1: Point,
    p2: Point
  ): number;

  declare function LineUtil$closestPointOnSegment(
    p: Point,
    p1: Point,
    p2: Point
  ): Point;

  declare function LineUtil$isFlat(latlngs: LatLngExpression[]): boolean;

  declare var npm$namespace$PolyUtil: {
    clipPolygon: typeof PolyUtil$clipPolygon
  };
  declare function PolyUtil$clipPolygon(
    points: Point[],
    bounds: BoundsExpression,
    round?: boolean
  ): Point[];

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
    element: string | HTMLElement
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

  declare function DomUtil$hasClass(el: HTMLElement, name: string): boolean;

  declare function DomUtil$addClass(el: HTMLElement, name: string): void;

  declare function DomUtil$removeClass(el: HTMLElement, name: string): void;

  declare function DomUtil$setClass(el: HTMLElement, name: string): void;

  declare function DomUtil$getClass(el: HTMLElement): string;

  declare function DomUtil$setOpacity(el: HTMLElement, opacity: number): void;

  declare function DomUtil$testProp(props: string[]): string | false;

  declare function DomUtil$setTransform(
    el: HTMLElement,
    offset: Point,
    scale?: number
  ): void;

  declare function DomUtil$setPosition(el: HTMLElement, position: Point): void;

  declare function DomUtil$getPosition(el: HTMLElement): Point;

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
    latLngToPoint(latlng: LatLngExpression, zoom: number): Point;
    pointToLatLng(point: PointExpression, zoom: number): LatLng;
    project(latlng: LatLng | LatLngLiteral): Point;
    unproject(point: PointExpression): LatLng;
    scale(zoom: number): number;
    zoom(scale: number): number;
    getProjectedBounds(zoom: number): Bounds;
    distance(latlng1: LatLngExpression, latlng2: LatLngExpression): number;
    wrapLatLng(latlng: LatLng | LatLngLiteral): LatLng;
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
    project(latlng: LatLng | LatLngLiteral): Point;
    unproject(point: PointExpression): LatLng;
    bounds: Bounds;
  }

  declare var npm$namespace$Projection: {
    LonLat: typeof Projection$LonLat,
    Mercator: typeof Projection$Mercator,
    SphericalMercator: typeof Projection$SphericalMercator
  };
  declare var Projection$LonLat: Projection;

  declare var Projection$Mercator: Projection;

  declare var Projection$SphericalMercator: Projection;
  declare export class LatLng {
    constructor(latitude: number, longitude: number, altitude?: number): this;
    equals(otherLatLng: LatLngExpression, maxMargin?: number): boolean;
    toString(): string;
    distanceTo(otherLatLng: LatLngExpression): number;
    wrap(): LatLng;
    toBounds(sizeInMeters: number): LatLngBounds;
    lat: number;
    lng: number;
    alt: number;
  }
  declare export interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  declare export type LatLngTuple = [number, number];
  declare export type LatLngExpression = LatLng | LatLngLiteral | LatLngTuple;
  declare export function latLng(
    latitude: number,
    longitude: number,
    altitude?: number
  ): LatLng;

  declare export function latLng(
    coords:
      | LatLngTuple
      | [number, number, number]
      | LatLngLiteral
      | {
          lat: number,
          lng: number,
          alt?: number
        }
  ): LatLng;

  declare export class LatLngBounds {
    constructor(southWest: LatLngExpression, northEast: LatLngExpression): this;
    constructor(latlngs: LatLngBoundsLiteral): this;
    extend(latlngOrBounds: LatLngExpression | LatLngBoundsExpression): this;
    pad(bufferRatio: number): LatLngBounds;
    getCenter(): LatLng;
    getSouthWest(): LatLng;
    getNorthEast(): LatLng;
    getNorthWest(): LatLng;
    getSouthEast(): LatLng;
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
    | LatLngBounds
    | LatLngBoundsLiteral;
  declare export function latLngBounds(
    southWest: LatLngExpression,
    northEast: LatLngExpression
  ): LatLngBounds;

  declare export function latLngBounds(
    latlngs: LatLngExpression[]
  ): LatLngBounds;

  declare export type PointTuple = [number, number];
  declare export class Point {
    constructor(x: number, y: number, round?: boolean): this;
    clone(): Point;
    add(otherPoint: PointExpression): Point;
    subtract(otherPoint: PointExpression): Point;
    divideBy(num: number): Point;
    multiplyBy(num: number): Point;
    scaleBy(scale: PointExpression): Point;
    unscaleBy(scale: PointExpression): Point;
    round(): Point;
    floor(): Point;
    ceil(): Point;
    distanceTo(otherPoint: PointExpression): number;
    equals(otherPoint: PointExpression): boolean;
    contains(otherPoint: PointExpression): boolean;
    toString(): string;
    x: number;
    y: number;
  }
  declare export type Coords = {
    z: number
  } & Point;

  declare export type PointExpression = Point | PointTuple;
  declare export function point(x: number, y: number, round?: boolean): Point;

  declare export function point(
    coords:
      | PointTuple
      | {
          x: number,
          y: number
        }
  ): Point;

  declare export type BoundsLiteral = [PointTuple, PointTuple];
  declare export class Bounds {
    constructor(topLeft: PointExpression, bottomRight: PointExpression): this;
    constructor(points: Point[] | BoundsLiteral): this;
    extend(point: PointExpression): this;
    getCenter(round?: boolean): Point;
    getBottomLeft(): Point;
    getTopRight(): Point;
    getSize(): Point;
    contains(pointOrBounds: BoundsExpression | PointExpression): boolean;
    intersects(otherBounds: BoundsExpression): boolean;
    overlaps(otherBounds: BoundsExpression): boolean;
    min: Point;
    max: Point;
  }
  declare export type BoundsExpression = Bounds | BoundsLiteral;
  declare export function bounds(
    topLeft: PointExpression,
    bottomRight: PointExpression
  ): Bounds;

  declare export function bounds(points: Point[] | BoundsLiteral): Bounds;

  declare export type LeafletEventHandlerFn = (event: LeafletEvent) => void;
  declare export interface LeafletEventHandlerFnMap {
    [type: string]: LeafletEventHandlerFn;
  }

  /**
   * A set of methods shared between event-powered classes (like Map and Marker).
   * Generally, events allow you to execute some function when something happens
   * with an object (e.g. the user clicks on the map, causing the map to fire
   * 'click' event).
   */
  declare export class Evented mixins Class {
    /**
     * Adds a listener function (fn) to a particular event type of the object.
     * You can optionally specify the context of the listener (object the this
     * keyword will point to). You can also pass several space-separated types
     * (e.g. 'click dblclick').
     */
    on(type: string, fn: LeafletEventHandlerFn, context?: any): this;

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
    off(type: string, fn?: LeafletEventHandlerFn, context?: any): this;

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
    fire(type: string, data?: any, propagate?: boolean): this;

    /**
     * Returns true if a particular event type has any listeners attached to it.
     */
    listens(type: string): boolean;

    /**
     * Behaves as on(...), except the listener will only get fired once and then removed.
     */
    once(type: string, fn: LeafletEventHandlerFn, context?: any): this;

    /**
     * Behaves as on(...), except the listener will only get fired once and then removed.
     */
    once(eventMap: LeafletEventHandlerFnMap): this;

    /**
     * Adds an event parent - an Evented that will receive propagated events
     */
    addEventParent(obj: Evented): this;

    /**
     * Removes an event parent, so it will stop receiving propagated events
     */
    removeEventParent(obj: Evented): this;

    /**
     * Alias for on(...)
     *
     * Adds a listener function (fn) to a particular event type of the object.
     * You can optionally specify the context of the listener (object the this
     * keyword will point to). You can also pass several space-separated types
     * (e.g. 'click dblclick').
     */
    addEventListener(
      type: string,
      fn: LeafletEventHandlerFn,
      context?: any
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
      type: string,
      fn?: LeafletEventHandlerFn,
      context?: any
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
      type: string,
      fn: LeafletEventHandlerFn,
      context?: any
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
    fireEvent(type: string, data?: any, propagate?: boolean): this;

    /**
     * Alias for listens(...)
     *
     * Returns true if a particular event type has any listeners attached to it.
     */
    hasEventListeners(type: string): boolean;
  }

  /**
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   */
  declare export class Draggable mixins Evented {
    constructor(
      element: HTMLElement,
      dragStartTarget?: HTMLElement,
      preventOutline?: boolean
    ): this;
    enable(): void;
    disable(): void;
    finishDrag(): void;
  }
  declare export interface LayerOptions {
    pane?: string;
    attribution?: string;
  }
  declare export type InteractiveLayerOptions = {
    interactive?: boolean,
    bubblingMouseEvents?: boolean
  } & LayerOptions;

  declare export class Layer mixins Evented {
    constructor(options?: LayerOptions): this;
    addTo(map: Map | LayerGroup<>): this;
    remove(): this;
    removeFrom(map: Map): this;
    getPane(name?: string): HTMLElement | void;
    bindPopup(
      content: ((layer: Layer) => Content) | Content | Popup,
      options?: PopupOptions
    ): this;
    unbindPopup(): this;
    openPopup(latlng?: LatLngExpression): this;
    closePopup(): this;
    togglePopup(): this;
    isPopupOpen(): boolean;
    setPopupContent(content: Content | Popup): this;
    getPopup(): Popup | void;
    bindTooltip(
      content: ((layer: Layer) => Content) | Tooltip | Content,
      options?: TooltipOptions
    ): this;
    unbindTooltip(): this;
    openTooltip(latlng?: LatLngExpression): this;
    closeTooltip(): this;
    toggleTooltip(): this;
    isTooltipOpen(): boolean;
    setTooltipContent(content: Content | Tooltip): this;
    getTooltip(): Tooltip | void;
    onAdd(map: Map): this;
    onRemove(map: Map): this;
    getEvents(): {
      [name: string]: (event: LeafletEvent) => void
    };
    getAttribution(): string | null;
    beforeAdd(map: Map): this;
    _map: Map;
  }
  declare export interface GridLayerOptions {
    tileSize?: number | Point;
    opacity?: number;
    updateWhenIdle?: boolean;
    updateWhenZooming?: boolean;
    updateInterval?: number;
    attribution?: string;
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
    error?: Error,
    tile?: HTMLElement
  ) => void;
  declare export interface InternalTiles {
    [key: string]: {
      active?: boolean,
      coords: Coords,
      current: boolean,
      el: HTMLElement,
      loaded?: Date,
      retain?: boolean
    };
  }
  declare export class GridLayer mixins Layer {
    constructor(options?: GridLayerOptions): this;
    bringToFront(): this;
    bringToBack(): this;
    getContainer(): HTMLElement | null;
    setOpacity(opacity: number): this;
    setZIndex(zIndex: number): this;
    isLoading(): boolean;
    redraw(): this;
    getTileSize(): Point;
    createTile(coords: Coords, done: DoneCallback): HTMLElement;
    _tileCoordsToKey(coords: Coords): string;
    _tiles: InternalTiles;
    _tileZoom: number;
  }
  declare export function gridLayer(options?: GridLayerOptions): GridLayer;

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
    constructor(urlTemplate: string, options?: TileLayerOptions): this;
    setUrl(url: string, noRedraw?: boolean): this;
    _abortLoading(): void;
    _getZoomForUrl(): number;
    options: TileLayerOptions;
  }
  declare export function tileLayer(
    urlTemplate: string,
    options?: TileLayerOptions
  ): TileLayer;

  declare var npm$namespace$TileLayer: {
    WMS: typeof TileLayer$WMS
  };
  declare class TileLayer$WMS mixins TileLayer {
    constructor(baseUrl: string, options: WMSOptions): this;
    setParams(params: WMSParams, noRedraw?: boolean): this;
    wmsParams: WMSParams;
    options: WMSOptions;
  }
  declare export type WMSOptions = {
    layers?: string,
    styles?: string,
    format?: string,
    transparent?: boolean,
    version?: string,
    crs?: CRS,
    uppercase?: boolean
  } & TileLayerOptions;

  declare export interface WMSParams {
    format?: string;
    layers: string;
    request?: string;
    service?: string;
    styles?: string;
    version?: string;
    transparent?: boolean;
    width?: number;
    height?: number;
  }

  declare var npm$namespace$tileLayer: {
    wms: typeof tileLayer$wms
  };
  declare function tileLayer$wms(
    baseUrl: string,
    options?: WMSOptions
  ): TileLayer$WMS;

  declare export type ImageOverlayOptions = {
    opacity?: number,
    alt?: string,
    interactive?: boolean,
    attribution?: string,
    crossOrigin?: boolean,
    className?: string
  } & InteractiveLayerOptions;

  declare export class ImageOverlay mixins Layer {
    constructor(
      imageUrl: string,
      bounds: LatLngBoundsExpression,
      options?: ImageOverlayOptions
    ): this;
    setOpacity(opacity: number): this;
    bringToFront(): this;
    bringToBack(): this;
    setUrl(url: string): this;

    /**
     * Update the bounds that this ImageOverlay covers
     */
    setBounds(bounds: LatLngBounds): this;

    /**
     * Get the bounds that this ImageOverlay covers
     */
    getBounds(): LatLngBounds;

    /**
     * Get the img element that represents the ImageOverlay on the map
     */
    getElement(): HTMLImageElement | void;
    options: ImageOverlayOptions;
  }
  declare export function imageOverlay(
    imageUrl: string,
    bounds: LatLngBoundsExpression,
    options?: ImageOverlayOptions
  ): ImageOverlay;

  declare export type VideoOverlayOptions = {
    autoplay?: boolean,
    loop?: boolean
  } & ImageOverlayOptions;

  declare export class VideoOverlay mixins Layer {
    constructor(
      video: string | string[] | HTMLVideoElement,
      bounds: LatLngBoundsExpression,
      options?: VideoOverlayOptions
    ): this;
    setOpacity(opacity: number): this;
    bringToFront(): this;
    bringToBack(): this;
    setUrl(url: string): this;

    /**
     * Update the bounds that this VideoOverlay covers
     */
    setBounds(bounds: LatLngBounds): this;

    /**
     * Get the bounds that this VideoOverlay covers
     */
    getBounds(): LatLngBounds;

    /**
     * Get the video element that represents the VideoOverlay on the map
     */
    getElement(): HTMLVideoElement | void;
    options: VideoOverlayOptions;
  }
  declare export function videoOverlay(
    video: string | string[] | HTMLVideoElement,
    bounds: LatLngBoundsExpression,
    options?: VideoOverlayOptions
  ): VideoOverlay;

  declare export type LineCapShape = "butt" | "round" | "square" | "inherit";
  declare export type LineJoinShape = "miter" | "round" | "bevel" | "inherit";
  declare export type FillRule = "nonzero" | "evenodd" | "inherit";
  declare export type PathOptions = {
    stroke?: boolean,
    color?: string,
    weight?: number,
    opacity?: number,
    lineCap?: LineCapShape,
    lineJoin?: LineJoinShape,
    dashArray?: string,
    dashOffset?: string,
    fill?: boolean,
    fillColor?: string,
    fillOpacity?: number,
    fillRule?: FillRule,
    renderer?: Renderer,
    className?: string
  } & InteractiveLayerOptions;

  declare export class Path mixins Layer {
    redraw(): this;
    setStyle(style: PathOptions): this;
    bringToFront(): this;
    bringToBack(): this;
    getElement(): Element | void;
    options: PathOptions;
  }
  declare export type PolylineOptions = {
    smoothFactor?: number,
    noClip?: boolean
  } & PathOptions;

  declare export class Polyline<
    T: geojson.GeometryObject = geojson.LineString | geojson.MultiLineString,
    P = any
  > mixins Path {
    constructor(
      latlngs: LatLngExpression[] | LatLngExpression[][],
      options?: PolylineOptions
    ): this;
    toGeoJSON(): geojson.Feature<T, P>;
    getLatLngs(): LatLng[] | LatLng[][] | LatLng[][][];
    setLatLngs(
      latlngs:
        | LatLngExpression[]
        | LatLngExpression[][]
        | LatLngExpression[][][]
    ): this;
    isEmpty(): boolean;
    getCenter(): LatLng;
    getBounds(): LatLngBounds;
    addLatLng(latlng: LatLngExpression | LatLngExpression[]): this;
    feature: geojson.Feature<T, P>;
    options: PolylineOptions;
  }
  declare export function polyline(
    latlngs: LatLngExpression[] | LatLngExpression[][],
    options?: PolylineOptions
  ): Polyline<>;

  declare export class Polygon<P = any>
    mixins Polyline<geojson.Polygon | geojson.MultiPolygon, P> {
    constructor(
      latlngs:
        | LatLngExpression[]
        | LatLngExpression[][]
        | LatLngExpression[][][],
      options?: PolylineOptions
    ): this;
  }
  declare export function polygon(
    latlngs: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][],
    options?: PolylineOptions
  ): Polygon<>;

  declare export class Rectangle<P = any> mixins Polygon<P> {
    constructor(
      latLngBounds: LatLngBoundsExpression,
      options?: PolylineOptions
    ): this;
    setBounds(latLngBounds: LatLngBoundsExpression): this;
  }
  declare export function rectangle(
    latLngBounds: LatLngBoundsExpression,
    options?: PolylineOptions
  ): Rectangle<>;

  declare export type CircleMarkerOptions = {
    radius?: number
  } & PathOptions;

  declare export class CircleMarker<P = any> mixins Path {
    constructor(latlng: LatLngExpression, options?: CircleMarkerOptions): this;
    toGeoJSON(): geojson.Feature<geojson.Point, P>;
    setLatLng(latLng: LatLngExpression): this;
    getLatLng(): LatLng;
    setRadius(radius: number): this;
    getRadius(): number;
    options: CircleMarkerOptions;
    feature: geojson.Feature<geojson.Point, P>;
  }
  declare export function circleMarker(
    latlng: LatLngExpression,
    options?: CircleMarkerOptions
  ): CircleMarker<>;

  declare export class Circle<P = any> mixins CircleMarker<P> {
    constructor(latlng: LatLngExpression, options?: CircleMarkerOptions): this;
    constructor(
      latlng: LatLngExpression,
      radius: number,
      options?: CircleMarkerOptions
    ): this;
    getBounds(): LatLngBounds;
  }
  declare export function circle(
    latlng: LatLngExpression,
    options?: CircleMarkerOptions
  ): Circle<>;

  declare export function circle(
    latlng: LatLngExpression,
    radius: number,
    options?: CircleMarkerOptions
  ): Circle<>;

  declare export type RendererOptions = {
    padding?: number
  } & LayerOptions;

  declare export class Renderer mixins Layer {
    constructor(options?: RendererOptions): this;
    options: RendererOptions;
  }
  declare export class SVG mixins Renderer {}

  declare var npm$namespace$SVG: {
    create: typeof SVG$create,
    pointsToPath: typeof SVG$pointsToPath
  };
  declare function SVG$create(name: string): SVGElement;

  declare function SVG$pointsToPath(
    rings: PointExpression[],
    close: boolean
  ): string;

  declare export function svg(options?: RendererOptions): SVG;

  declare export class Canvas mixins Renderer {}
  declare export function canvas(options?: RendererOptions): Canvas;

  /**
   * Used to group several layers and handle them as one.
   * If you add it to the map, any layers added or removed from the group will be
   * added/removed on the map as well. Extends Layer.
   */
  declare export class LayerGroup<P = any> mixins Layer {
    constructor(layers?: Layer[], options?: LayerOptions): this;

    /**
     * Returns a GeoJSON representation of the layer group (as a GeoJSON GeometryCollection, GeoJSONFeatureCollection or Multipoint).
     */
    toGeoJSON():
      | geojson.FeatureCollection<geojson.GeometryObject, P>
      | geojson.Feature<geojson.MultiPoint, P>
      | geojson.GeometryCollection;

    /**
     * Adds the given layer to the group.
     */
    addLayer(layer: Layer): this;

    /**
     * Removes the layer with the given internal ID or the given layer from the group.
     */
    removeLayer(layer: number | Layer): this;

    /**
     * Returns true if the given layer is currently added to the group.
     */
    hasLayer(layer: Layer): boolean;

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
    eachLayer(fn: (layer: Layer) => void, context?: any): this;

    /**
     * Returns the layer with the given internal ID.
     */
    getLayer(id: number): Layer | void;

    /**
     * Returns an array of all the layers added to the group.
     */
    getLayers(): Layer[];

    /**
     * Calls setZIndex on every layer contained in this group, passing the z-index.
     */
    setZIndex(zIndex: number): this;

    /**
     * Returns the internal ID for a layer
     */
    getLayerId(layer: Layer): number;
    feature:
      | geojson.FeatureCollection<geojson.GeometryObject, P>
      | geojson.Feature<geojson.MultiPoint, P>
      | geojson.GeometryCollection;
  }

  /**
   * Create a layer group, optionally given an initial set of layers and an `options` object.
   */
  declare export function layerGroup(
    layers?: Layer[],
    options?: LayerOptions
  ): LayerGroup<>;

  /**
   * Extended LayerGroup that also has mouse events (propagated from
   * members of the group) and a shared bindPopup method.
   */
  declare export class FeatureGroup<P = any> mixins LayerGroup<P> {
    /**
     * Sets the given path options to each layer of the group that has a setStyle method.
     */
    setStyle(style: PathOptions): this;

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
    getBounds(): LatLngBounds;
  }

  /**
   * Create a feature group, optionally given an initial set of layers.
   */
  declare export function featureGroup(layers?: Layer[]): FeatureGroup<>;

  declare export type StyleFunction<P = any> = (
    feature?: geojson.Feature<geojson.GeometryObject, P>
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
      geoJsonPoint: geojson.Feature<geojson.Point, P>,
      latlng: LatLng
    ) => Layer,

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
    style?: PathOptions | StyleFunction<P>,

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
      feature: geojson.Feature<geojson.GeometryObject, P>,
      layer: Layer
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
    filter?: (
      geoJsonFeature: geojson.Feature<geojson.GeometryObject, P>
    ) => boolean,

    /**
     * A Function that will be used for converting GeoJSON coordinates to LatLngs.
     * The default is the coordsToLatLng static method.
     */
    coordsToLatLng?: (
      coords: [number, number] | [number, number, number]
    ) => LatLng
  } & LayerOptions;

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
      featureData: geojson.Feature<geojson.GeometryObject, P>,
      options?: GeoJSONOptions<P>
    ): Layer;

    /**
     * Creates a LatLng object from an array of 2 numbers (longitude, latitude) or
     * 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
     */
    static coordsToLatLng(
      coords: [number, number] | [number, number, number]
    ): LatLng;

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
      ) => LatLng
    ): any[];

    /**
     * Reverse of coordsToLatLng
     */
    static latLngToCoords(
      latlng: LatLng
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
        | geojson.Feature<geojson.GeometryObject, P>
        | geojson.GeometryObject
    ): geojson.Feature<geojson.GeometryObject, P>;
    constructor(
      geojson?: geojson.GeoJsonObject,
      options?: GeoJSONOptions<P>
    ): this;

    /**
     * Adds a GeoJSON object to the layer.
     */
    addData(data: geojson.GeoJsonObject): Layer;

    /**
     * Resets the given vector layer's style to the original GeoJSON style,
     * useful for resetting style after hover events.
     */
    resetStyle(layer: Layer): Layer;

    /**
     * Same as FeatureGroup's setStyle method, but style-functions are also
     * allowed here to set the style according to the feature.
     */
    setStyle(style: PathOptions | StyleFunction<P>): this;
    options: GeoJSONOptions<P>;
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
    options?: GeoJSONOptions<P>
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
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    layers?: Layer[];
    maxBounds?: LatLngBoundsExpression;
    renderer?: Renderer;
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
    position?: ControlPosition;
  }
  declare export class Control mixins Class {
    constructor(options?: ControlOptions): this;
    getPosition(): ControlPosition;
    setPosition(position: ControlPosition): this;
    getContainer(): HTMLElement | void;
    addTo(map: Map): this;
    remove(): this;
    onAdd(map: Map): HTMLElement;
    onRemove(map: Map): void;
    options: ControlOptions;
  }

  declare var npm$namespace$Control: {
    Zoom: typeof Control$Zoom,
    Attribution: typeof Control$Attribution,
    Layers: typeof Control$Layers,
    Scale: typeof Control$Scale
  };
  declare type Control$ZoomOptions = {
    zoomInText?: string,
    zoomInTitle?: string,
    zoomOutText?: string,
    zoomOutTitle?: string
  } & ControlOptions;

  declare class Control$Zoom mixins Control {
    constructor(options?: Control$ZoomOptions): this;
    options: Control$ZoomOptions;
  }

  declare type Control$AttributionOptions = {
    prefix?: string | boolean
  } & ControlOptions;

  declare class Control$Attribution mixins Control {
    constructor(options?: Control$AttributionOptions): this;
    setPrefix(prefix: string): this;
    addAttribution(text: string): this;
    removeAttribution(text: string): this;
    options: Control$AttributionOptions;
  }

  declare type Control$LayersOptions = {
    collapsed?: boolean,
    autoZIndex?: boolean,
    hideSingleBase?: boolean
  } & ControlOptions;

  declare interface Control$LayersObject {
    [name: string]: Layer;
  }

  declare class Control$Layers mixins Control {
    constructor(
      baseLayers?: Control$LayersObject,
      overlays?: Control$LayersObject,
      options?: Control$LayersOptions
    ): this;
    addBaseLayer(layer: Layer, name: string): this;
    addOverlay(layer: Layer, name: string): this;
    removeLayer(layer: Layer): this;
    expand(): this;
    collapse(): this;
    options: Control$LayersOptions;
  }

  declare type Control$ScaleOptions = {
    maxWidth?: number,
    metric?: boolean,
    imperial?: boolean,
    updateWhenIdle?: boolean
  } & ControlOptions;

  declare class Control$Scale mixins Control {
    constructor(options?: Control$ScaleOptions): this;
    options: Control$ScaleOptions;
  }

  declare var npm$namespace$control: {
    zoom: typeof control$zoom,
    attribution: typeof control$attribution,
    layers: typeof control$layers,
    scale: typeof control$scale
  };
  declare function control$zoom(options?: Control$ZoomOptions): Control$Zoom;

  declare function control$attribution(
    options?: Control$AttributionOptions
  ): Control$Attribution;

  declare function control$layers(
    baseLayers?: Control$LayersObject,
    overlays?: Control$LayersObject,
    options?: Control$LayersOptions
  ): Control$Layers;

  declare function control$scale(options?: Control$ScaleOptions): Control$Scale;

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
  declare export class Popup mixins Layer {
    constructor(options?: PopupOptions, source?: Layer): this;
    getLatLng(): LatLng | void;
    setLatLng(latlng: LatLngExpression): this;
    getContent(): Content | ((source: Layer) => Content) | void;
    setContent(htmlContent: ((source: Layer) => Content) | Content): this;
    getElement(): HTMLElement | void;
    update(): void;
    isOpen(): boolean;
    bringToFront(): this;
    bringToBack(): this;
    openOn(map: Map): this;
    options: PopupOptions;
  }
  declare export function popup(options?: PopupOptions, source?: Layer): Popup;

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
    opacity?: number
  } & DivOverlayOptions;

  declare export class Tooltip mixins Layer {
    constructor(options?: TooltipOptions, source?: Layer): this;
    setOpacity(val: number): void;
    getLatLng(): LatLng | void;
    setLatLng(latlng: LatLngExpression): this;
    getContent(): Content | void;
    setContent(htmlContent: ((source: Layer) => Content) | Content): this;
    getElement(): HTMLElement | void;
    update(): void;
    isOpen(): boolean;
    bringToFront(): this;
    bringToBack(): this;
    options: TooltipOptions;
  }
  declare export function tooltip(
    options?: TooltipOptions,
    source?: Layer
  ): Tooltip;

  declare export interface ZoomOptions {
    animate?: boolean;
  }
  declare export interface PanOptions {
    animate?: boolean;
    duration?: number;
    easeLinearity?: number;
    noMoveStart?: boolean;
  }
  declare export type ZoomPanOptions = {} & ZoomOptions & PanOptions;

  declare export type FitBoundsOptions = {
    paddingTopLeft?: PointExpression,
    paddingBottomRight?: PointExpression,
    padding?: PointExpression,
    maxZoom?: number
  } & ZoomOptions &
    PanOptions;

  declare export interface PanInsideOptions {
    paddingTopLeft?: PointExpression;
    paddingBottomRight?: PointExpression;
    padding?: PointExpression;
  }
  declare export interface LocateOptions {
    watch?: boolean;
    setView?: boolean;
    maxZoom?: number;
    timeout?: number;
    maximumAge?: number;
    enableHighAccuracy?: boolean;
  }
  declare export class Handler mixins Class {
    constructor(map: Map): this;
    enable(): this;
    disable(): this;
    enabled(): boolean;
    addHooks(): void;
    removeHooks(): void;
  }
  declare export interface LeafletEvent {
    type: string;
    target: any;
  }
  declare export type LeafletMouseEvent = {
    latlng: LatLng,
    layerPoint: Point,
    containerPoint: Point,
    originalEvent: MouseEvent
  } & LeafletEvent;

  declare export type LeafletKeyboardEvent = {
    originalEvent: KeyboardEvent
  } & LeafletEvent;

  declare export type LocationEvent = {
    latlng: LatLng,
    bounds: LatLngBounds,
    accuracy: number,
    altitude: number,
    altitudeAccuracy: number,
    heading: number,
    speed: number,
    timestamp: number
  } & LeafletEvent;

  declare export type ErrorEvent = {
    message: string,
    code: number
  } & LeafletEvent;

  declare export type LayerEvent = {
    layer: Layer
  } & LeafletEvent;

  declare export type LayersControlEvent = {
    name: string
  } & LayerEvent;

  declare export type TileEvent = {
    tile: HTMLImageElement,
    coords: Point
  } & LeafletEvent;

  declare export type TileErrorEvent = {
    error: Error
  } & TileEvent;

  declare export type ResizeEvent = {
    oldSize: Point,
    newSize: Point
  } & LeafletEvent;

  declare export type GeoJSONEvent = {
    layer: Layer,
    properties: any,
    geometryType: string,
    id: string
  } & LeafletEvent;

  declare export type PopupEvent = {
    popup: Popup
  } & LeafletEvent;

  declare export type TooltipEvent = {
    tooltip: Tooltip
  } & LeafletEvent;

  declare export type DragEndEvent = {
    distance: number
  } & LeafletEvent;

  declare export type ZoomAnimEvent = {
    center: LatLng,
    zoom: number,
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
  declare type DomEvent$EventHandlerFn = (event: Event) => void;

  declare function DomEvent$on(
    el: HTMLElement,
    types: string,
    fn: DomEvent$EventHandlerFn,
    context?: any
  ): typeof DomEvent;

  declare function DomEvent$on(
    el: HTMLElement,
    eventMap: {
      [eventName: string]: DomEvent$EventHandlerFn
    },
    context?: any
  ): typeof DomEvent;

  declare function DomEvent$off(
    el: HTMLElement,
    types: string,
    fn: DomEvent$EventHandlerFn,
    context?: any
  ): typeof DomEvent;

  declare function DomEvent$off(
    el: HTMLElement,
    eventMap: {
      [eventName: string]: DomEvent$EventHandlerFn
    },
    context?: any
  ): typeof DomEvent;

  declare function DomEvent$stopPropagation(ev: Event): typeof DomEvent;

  declare function DomEvent$disableScrollPropagation(
    el: HTMLElement
  ): typeof DomEvent;

  declare function DomEvent$disableClickPropagation(
    el: HTMLElement
  ): typeof DomEvent;

  declare function DomEvent$preventDefault(ev: Event): typeof DomEvent;

  declare function DomEvent$stop(ev: Event): typeof DomEvent;

  declare function DomEvent$getMousePosition(
    ev: MouseEvent,
    container?: HTMLElement
  ): Point;

  declare function DomEvent$getWheelDelta(ev: Event): number;

  declare function DomEvent$addListener(
    el: HTMLElement,
    types: string,
    fn: DomEvent$EventHandlerFn,
    context?: any
  ): typeof DomEvent;

  declare function DomEvent$addListener(
    el: HTMLElement,
    eventMap: {
      [eventName: string]: DomEvent$EventHandlerFn
    },
    context?: any
  ): typeof DomEvent;

  declare function DomEvent$removeListener(
    el: HTMLElement,
    types: string,
    fn: DomEvent$EventHandlerFn,
    context?: any
  ): typeof DomEvent;

  declare function DomEvent$removeListener(
    el: HTMLElement,
    eventMap: {
      [eventName: string]: DomEvent$EventHandlerFn
    },
    context?: any
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
  declare export class Map mixins Evented {
    constructor(element: string | HTMLElement, options?: MapOptions): this;
    getRenderer(layer: Path): Renderer;
    addControl(control: Control): this;
    removeControl(control: Control): this;
    addLayer(layer: Layer): this;
    removeLayer(layer: Layer): this;
    hasLayer(layer: Layer): boolean;
    eachLayer(fn: (layer: Layer) => void, context?: any): this;
    openPopup(popup: Popup): this;
    openPopup(
      content: Content,
      latlng: LatLngExpression,
      options?: PopupOptions
    ): this;
    closePopup(popup?: Popup): this;
    openTooltip(tooltip: Tooltip): this;
    openTooltip(
      content: Content,
      latlng: LatLngExpression,
      options?: TooltipOptions
    ): this;
    closeTooltip(tooltip?: Tooltip): this;
    setView(
      center: LatLngExpression,
      zoom: number,
      options?: ZoomPanOptions
    ): this;
    setZoom(zoom: number, options?: ZoomPanOptions): this;
    zoomIn(delta?: number, options?: Control$ZoomOptions): this;
    zoomOut(delta?: number, options?: Control$ZoomOptions): this;
    setZoomAround(
      position: Point | LatLngExpression,
      zoom: number,
      options?: Control$ZoomOptions
    ): this;
    fitBounds(bounds: LatLngBoundsExpression, options?: FitBoundsOptions): this;
    fitWorld(options?: FitBoundsOptions): this;
    panTo(latlng: LatLngExpression, options?: PanOptions): this;
    panBy(offset: PointExpression): this;
    setMaxBounds(bounds: LatLngBoundsExpression): this;
    setMinZoom(zoom: number): this;
    setMaxZoom(zoom: number): this;
    panInside(latLng: LatLngExpression, options?: PanInsideOptions): this;
    panInsideBounds(bounds: LatLngBoundsExpression, options?: PanOptions): this;

    /**
     * Boolean for animate or advanced ZoomPanOptions
     */
    invalidateSize(options?: boolean | ZoomPanOptions): this;
    stop(): this;
    flyTo(
      latlng: LatLngExpression,
      zoom?: number,
      options?: ZoomPanOptions
    ): this;
    flyToBounds(
      bounds: LatLngBoundsExpression,
      options?: FitBoundsOptions
    ): this;
    addHandler(name: string, HandlerClass: typeof Handler): this;
    remove(): this;
    createPane(name: string, container?: HTMLElement): HTMLElement;

    /**
     * Name of the pane or the pane as HTML-Element
     */
    getPane(pane: string | HTMLElement): HTMLElement | void;
    getPanes(): {
      [name: string]: HTMLElement
    } & DefaultMapPanes;
    getContainer(): HTMLElement;
    whenReady(fn: () => void, context?: any): this;
    getCenter(): LatLng;
    getZoom(): number;
    getBounds(): LatLngBounds;
    getMinZoom(): number;
    getMaxZoom(): number;
    getBoundsZoom(bounds: LatLngBoundsExpression, inside?: boolean): number;
    getSize(): Point;
    getPixelBounds(): Bounds;
    getPixelOrigin(): Point;
    getPixelWorldBounds(zoom?: number): Bounds;
    getZoomScale(toZoom: number, fromZoom: number): number;
    getScaleZoom(scale: number, fromZoom: number): number;
    project(latlng: LatLngExpression, zoom: number): Point;
    unproject(point: PointExpression, zoom: number): LatLng;
    layerPointToLatLng(point: PointExpression): LatLng;
    latLngToLayerPoint(latlng: LatLngExpression): Point;
    wrapLatLng(latlng: LatLngExpression): LatLng;
    wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds;
    distance(latlng1: LatLngExpression, latlng2: LatLngExpression): number;
    containerPointToLayerPoint(point: PointExpression): Point;
    containerPointToLatLng(point: PointExpression): LatLng;
    layerPointToContainerPoint(point: PointExpression): Point;
    latLngToContainerPoint(latlng: LatLngExpression): Point;
    mouseEventToContainerPoint(ev: MouseEvent): Point;
    mouseEventToLayerPoint(ev: MouseEvent): Point;
    mouseEventToLatLng(ev: MouseEvent): LatLng;
    locate(options?: LocateOptions): this;
    stopLocate(): this;
    boxZoom: Handler;
    doubleClickZoom: Handler;
    dragging: Handler;
    keyboard: Handler;
    scrollWheelZoom: Handler;
    tap: Handler;
    touchZoom: Handler;
    zoomControl: Control$Zoom;
    options: MapOptions;
  }

  /**
   * ID of a HTML-Element as string or the HTML-ELement itself
   */
  declare export function map(
    element: string | HTMLElement,
    options?: MapOptions
  ): Map;

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
  } & LayerOptions;

  declare export type IconOptions = {
    iconUrl: string
  } & BaseIconOptions;

  declare export class Icon<T: BaseIconOptions = IconOptions> mixins Layer {
    constructor(options: T): this;
    createIcon(oldIcon?: HTMLElement): HTMLElement;
    createShadow(oldIcon?: HTMLElement): HTMLElement;
    options: T;
  }

  declare var npm$namespace$Icon: {
    Default: typeof Icon$Default
  };
  declare type Icon$DefaultIconOptions = {
    imagePath?: string
  } & BaseIconOptions;

  declare class Icon$Default mixins Icon<Icon$DefaultIconOptions> {
    static imagePath: string;
    constructor(options?: Icon$DefaultIconOptions): this;
  }
  declare export function icon(options: IconOptions): Icon<>;

  declare export type DivIconOptions = {
    html?: string | false,
    bgPos?: PointExpression,
    iconSize?: PointExpression,
    iconAnchor?: PointExpression,
    popupAnchor?: PointExpression,
    className?: string
  } & BaseIconOptions;

  declare export class DivIcon mixins Icon<DivIconOptions> {
    constructor(options?: DivIconOptions): this;
  }
  declare export function divIcon(options?: DivIconOptions): DivIcon;

  declare export type MarkerOptions = {
    icon?: Icon<> | DivIcon,
    clickable?: boolean,
    draggable?: boolean,
    keyboard?: boolean,
    title?: string,
    alt?: string,
    zIndexOffset?: number,
    opacity?: number,
    riseOnHover?: boolean,
    riseOffset?: number
  } & InteractiveLayerOptions;

  declare export class Marker<P = any> mixins Layer {
    constructor(latlng: LatLngExpression, options?: MarkerOptions): this;
    toGeoJSON(): geojson.Feature<geojson.Point, P>;
    getLatLng(): LatLng;
    setLatLng(latlng: LatLngExpression): this;
    setZIndexOffset(offset: number): this;
    setIcon(icon: Icon<> | DivIcon): this;
    setOpacity(opacity: number): this;
    getElement(): HTMLElement | void;
    options: MarkerOptions;
    dragging: Handler;
    feature: geojson.Feature<geojson.Point, P>;
  }
  declare export function marker(
    latlng: LatLngExpression,
    options?: MarkerOptions
  ): Marker<>;

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
    context: any
  ): () => void;

  declare function Util$wrapNum(
    num: number,
    range: number[],
    includeMax?: boolean
  ): number;

  declare function Util$falseFn(): false;

  declare function Util$formatNum(num: number, digits?: number): number;

  declare function Util$trim(str: string): string;

  declare function Util$splitWords(str: string): string[];

  declare function Util$setOptions(obj: any, options: any): any;

  declare function Util$getParamString(
    obj: any,
    existingUrl?: string,
    uppercase?: boolean
  ): string;

  declare function Util$template(str: string, data: any): string;

  declare function Util$isArray(obj: any): boolean;

  declare function Util$indexOf(array: any[], el: any): number;

  declare function Util$requestAnimFrame(
    fn: (timestamp: number) => void,
    context?: any,
    immediate?: boolean
  ): number;

  declare function Util$cancelAnimFrame(id: number): void;

  declare var Util$lastId: number;

  declare var Util$emptyImageUrl: string;
}
