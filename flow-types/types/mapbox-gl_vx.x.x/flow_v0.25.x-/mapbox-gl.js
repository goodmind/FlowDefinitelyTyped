declare module "mapbox-gl" {
  declare export default typeof mapboxgl;

  declare var npm$namespace$mapboxgl: {
    supported: typeof mapboxgl$supported,
    setRTLTextPlugin: typeof mapboxgl$setRTLTextPlugin,
    accessToken: typeof mapboxgl$accessToken,
    version: typeof mapboxgl$version,

    Map: typeof mapboxgl$Map,
    BoxZoomHandler: typeof mapboxgl$BoxZoomHandler,
    ScrollZoomHandler: typeof mapboxgl$ScrollZoomHandler,
    DragPanHandler: typeof mapboxgl$DragPanHandler,
    DragRotateHandler: typeof mapboxgl$DragRotateHandler,
    KeyboardHandler: typeof mapboxgl$KeyboardHandler,
    DoubleClickZoomHandler: typeof mapboxgl$DoubleClickZoomHandler,
    TouchZoomRotateHandler: typeof mapboxgl$TouchZoomRotateHandler,
    Control: typeof mapboxgl$Control,
    NavigationControl: typeof mapboxgl$NavigationControl,
    PositionOptions: typeof mapboxgl$PositionOptions,
    GeolocateControl: typeof mapboxgl$GeolocateControl,
    AttributionControl: typeof mapboxgl$AttributionControl,
    ScaleControl: typeof mapboxgl$ScaleControl,
    FullscreenControl: typeof mapboxgl$FullscreenControl,
    Popup: typeof mapboxgl$Popup,
    GeoJSONSource: typeof mapboxgl$GeoJSONSource,
    VideoSource: typeof mapboxgl$VideoSource,
    ImageSource: typeof mapboxgl$ImageSource,
    CanvasSource: typeof mapboxgl$CanvasSource,
    LngLat: typeof mapboxgl$LngLat,
    LngLatBounds: typeof mapboxgl$LngLatBounds,
    Point: typeof mapboxgl$Point,
    Marker: typeof mapboxgl$Marker,
    Evented: typeof mapboxgl$Evented,
    MapboxEvent: typeof mapboxgl$MapboxEvent,
    MapMouseEvent: typeof mapboxgl$MapMouseEvent,
    MapTouchEvent: typeof mapboxgl$MapTouchEvent,
    MapWheelEvent: typeof mapboxgl$MapWheelEvent,
    ErrorEvent: typeof mapboxgl$ErrorEvent
  };
  declare var mapboxgl$accessToken: string;

  declare var mapboxgl$version: string;

  declare export function mapboxgl$supported(options?: {
    failIfMajorPerformanceCaveat?: boolean
  }): boolean;

  declare export function mapboxgl$setRTLTextPlugin(
    pluginURL: string,
    callback: (error: Error) => void
  ): void;

  declare type mapboxgl$LngLatLike =
    | mapboxgl$LngLat
    | {
        lng: number,
        lat: number
      }
    | {
        lon: number,
        lat: number
      }
    | [number, number];

  declare type mapboxgl$LngLatBoundsLike =
    | mapboxgl$LngLatBounds
    | [mapboxgl$LngLatLike, mapboxgl$LngLatLike]
    | [number, number, number, number];

  declare type mapboxgl$PointLike = mapboxgl$Point | [number, number];

  declare type mapboxgl$ExpressionName =
    | "array"
    | "boolean"
    | "collator"
    | "format"
    | "literal"
    | "number"
    | "object"
    | "string"
    | "to-boolean"
    | "to-color"
    | "to-number"
    | "to-string"
    | "typeof"
    | "feature-state"
    | "geometry-type"
    | "id"
    | "line-progress"
    | "properties"
    | "at"
    | "get"
    | "has"
    | "length"
    | "!="
    | "<"
    | "<="
    | "=="
    | ">"
    | ">="
    | "all"
    | "any"
    | "case"
    | "match"
    | "interpolate"
    | "interpolate-hcl"
    | "interpolate-lab"
    | "step"
    | "let"
    | "var"
    | "concat"
    | "downcase"
    | "is-supported-script"
    | "resolved-locale"
    | "upcase"
    | "rgb"
    | "rgba"
    | "-"
    | "*"
    | "/"
    | "%"
    | "^"
    | "+"
    | "abs"
    | "acos"
    | "asin"
    | "atan"
    | "ceil"
    | "cos"
    | "e"
    | "floor"
    | "ln"
    | "ln2"
    | "log10"
    | "log2"
    | "max"
    | "min"
    | "pi"
    | "round"
    | "sin"
    | "sqrt"
    | "tan"
    | "zoom"
    | "heatmap-density";

  declare type mapboxgl$Expression = [
    mapboxgl$ExpressionName,
    "NO PRINT IMPLEMENTED: RestType"
  ];

  declare type mapboxgl$Anchor =
    | "center"
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";

  /**
   * Map
   */
  declare export class mapboxgl$Map mixins mapboxgl$Evented {
    constructor(options?: mapboxgl$MapboxOptions): this;
    addControl(
      control: mapboxgl$Control | mapboxgl$IControl,
      position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
    ): this;
    removeControl(control: mapboxgl$Control | mapboxgl$IControl): this;
    resize(eventData?: mapboxgl$EventData): this;
    getBounds(): mapboxgl$LngLatBounds;
    getMaxBounds(): mapboxgl$LngLatBounds | null;
    setMaxBounds(lnglatbounds?: mapboxgl$LngLatBoundsLike): this;
    setMinZoom(minZoom?: number): this;
    getMinZoom(): number;
    setMaxZoom(maxZoom?: number): this;
    getMaxZoom(): number;
    getRenderWorldCopies(): boolean;
    setRenderWorldCopies(renderWorldCopies?: boolean): this;
    project(lnglat: mapboxgl$LngLatLike): mapboxgl$Point;
    unproject(point: mapboxgl$PointLike): mapboxgl$LngLat;
    isMoving(): boolean;
    isZooming(): boolean;
    isRotating(): boolean;
    queryRenderedFeatures(
      pointOrBox?:
        | mapboxgl$PointLike
        | [mapboxgl$PointLike, mapboxgl$PointLike],
      parameters?: {
        layers?: string[],
        filter?: any[]
      }
    ): mapboxgl$MapboxGeoJSONFeature[];
    querySourceFeatures(
      sourceID: string,
      parameters?: {
        sourceLayer?: string,
        filter?: any[]
      }
    ): mapboxgl$MapboxGeoJSONFeature[];
    setStyle(
      style: mapboxgl$Style | string,
      options?: {
        diff?: boolean,
        localIdeographFontFamily?: string
      }
    ): this;
    getStyle(): mapboxgl$Style;
    isStyleLoaded(): boolean;
    addSource(id: string, source: mapboxgl$AnySourceData): this;
    isSourceLoaded(id: string): boolean;
    areTilesLoaded(): boolean;
    removeSource(id: string): this;
    getSource(id: string): mapboxgl$AnySourceImpl;
    addImage(
      name: string,
      image:
        | HTMLImageElement
        | ArrayBufferView
        | {
            width: number,
            height: number,
            data: Uint8Array | Uint8ClampedArray
          }
        | ImageData,
      options?: {
        pixelRatio?: number,
        sdf?: boolean
      }
    ): this;
    hasImage(name: string): boolean;
    removeImage(name: string): this;
    loadImage(url: string, callback: Function): this;
    listImages(): string[];
    addLayer(layer: mapboxgl$Layer, before?: string): this;
    moveLayer(id: string, beforeId?: string): this;
    removeLayer(id: string): this;
    getLayer(id: string): mapboxgl$Layer;
    setFilter(layer: string, filter?: any[]): this;
    setLayerZoomRange(layerId: string, minzoom: number, maxzoom: number): this;
    getFilter(layer: string): any[];
    setPaintProperty(
      layer: string,
      name: string,
      value: any,
      klass?: string
    ): this;
    getPaintProperty(layer: string, name: string): any;
    setLayoutProperty(layer: string, name: string, value: any): this;
    getLayoutProperty(layer: string, name: string): any;
    setLight(options: mapboxgl$Light, lightOptions?: any): this;
    getLight(): mapboxgl$Light;
    setFeatureState(
      feature:
        | {
            source: string,
            sourceLayer?: string,
            id: string | number
          }
        | mapboxgl$MapboxGeoJSONFeature,
      state: {
        [key: string]: any
      }
    ): void;
    getFeatureState(
      feature:
        | {
            source: string,
            sourceLayer?: string,
            id: string | number
          }
        | mapboxgl$MapboxGeoJSONFeature
    ): {
      [key: string]: any
    };
    getContainer(): HTMLElement;
    getCanvasContainer(): HTMLElement;
    getCanvas(): HTMLCanvasElement;
    loaded(): boolean;
    remove(): void;
    showTileBoundaries: boolean;
    showCollisionBoxes: boolean;
    repaint: boolean;
    getCenter(): mapboxgl$LngLat;
    setCenter(
      center: mapboxgl$LngLatLike,
      eventData?: mapboxgl$EventData
    ): this;
    panBy(
      offset: mapboxgl$PointLike,
      options?: mapboxgl$AnimationOptions,
      eventData?: mapboxgl$EventData
    ): this;
    panTo(
      lnglat: mapboxgl$LngLatLike,
      options?: mapboxgl$AnimationOptions,
      eventdata?: mapboxgl$EventData
    ): this;
    getZoom(): number;
    setZoom(zoom: number, eventData?: mapboxgl$EventData): this;
    zoomTo(
      zoom: number,
      options?: mapboxgl$AnimationOptions,
      eventData?: mapboxgl$EventData
    ): this;
    zoomIn(
      options?: mapboxgl$AnimationOptions,
      eventData?: mapboxgl$EventData
    ): this;
    zoomOut(
      options?: mapboxgl$AnimationOptions,
      eventData?: mapboxgl$EventData
    ): this;
    getBearing(): number;
    setBearing(bearing: number, eventData?: mapboxgl$EventData): this;
    rotateTo(
      bearing: number,
      options?: mapboxgl$AnimationOptions,
      eventData?: mapboxgl$EventData
    ): this;
    resetNorth(
      options?: mapboxgl$AnimationOptions,
      eventData?: mapboxgl$EventData
    ): this;
    snapToNorth(
      options?: mapboxgl$AnimationOptions,
      eventData?: mapboxgl$EventData
    ): this;
    getPitch(): number;
    setPitch(pitch: number, eventData?: mapboxgl$EventData): this;
    cameraForBounds(
      bounds: mapboxgl$LngLatBoundsLike,
      options?: mapboxgl$CameraForBoundsOptions
    ): mapboxgl$CameraOptions | void;
    fitBounds(
      bounds: mapboxgl$LngLatBoundsLike,
      options?: mapboxgl$FitBoundsOptions,
      eventData?: mapboxgl$EventData
    ): this;
    fitScreenCoordinates(
      p0: mapboxgl$PointLike,
      p1: mapboxgl$PointLike,
      bearing: number,
      options?: mapboxgl$AnimationOptions & mapboxgl$CameraOptions,
      eventData?: mapboxgl$EventData
    ): this;
    jumpTo(
      options: mapboxgl$CameraOptions,
      eventData?: mapboxgl$EventData
    ): this;
    easeTo(
      options: mapboxgl$CameraOptions &
        mapboxgl$AnimationOptions & {
          delayEndEvents?: number
        },
      eventData?: mapboxgl$EventData
    ): this;
    flyTo(options: mapboxgl$FlyToOptions, eventData?: mapboxgl$EventData): this;
    isEasing(): boolean;
    stop(): this;
    on<T: $Keys<mapboxgl$MapLayerEventType>>(
      type: T,
      layer: string,
      listener: (
        ev: $ElementType<mapboxgl$MapLayerEventType, T> & mapboxgl$EventData
      ) => void
    ): this;
    on<T: $Keys<mapboxgl$MapEventType>>(
      type: T,
      listener: (
        ev: $ElementType<mapboxgl$MapEventType, T> & mapboxgl$EventData
      ) => void
    ): this;
    on(type: string, listener: (ev: any) => void): this;
    once<T: $Keys<mapboxgl$MapLayerEventType>>(
      type: T,
      layer: string,
      listener: (
        ev: $ElementType<mapboxgl$MapLayerEventType, T> & mapboxgl$EventData
      ) => void
    ): this;
    once<T: $Keys<mapboxgl$MapEventType>>(
      type: T,
      listener: (
        ev: $ElementType<mapboxgl$MapEventType, T> & mapboxgl$EventData
      ) => void
    ): this;
    once(type: string, listener: (ev: any) => void): this;
    off<T: $Keys<mapboxgl$MapLayerEventType>>(
      type: T,
      layer: string,
      listener: (
        ev: $ElementType<mapboxgl$MapLayerEventType, T> & mapboxgl$EventData
      ) => void
    ): this;
    off<T: $Keys<mapboxgl$MapEventType>>(
      type: T,
      listener: (
        ev: $ElementType<mapboxgl$MapEventType, T> & mapboxgl$EventData
      ) => void
    ): this;
    off(type: string, listener: (ev: any) => void): this;
    scrollZoom: mapboxgl$ScrollZoomHandler;
    boxZoom: mapboxgl$BoxZoomHandler;
    dragRotate: mapboxgl$DragRotateHandler;
    dragPan: mapboxgl$DragPanHandler;
    keyboard: mapboxgl$KeyboardHandler;
    doubleClickZoom: mapboxgl$DoubleClickZoomHandler;
    touchZoomRotate: mapboxgl$TouchZoomRotateHandler;
  }

  declare export interface mapboxgl$MapboxOptions {
    /**
     * If true, an attribution control will be added to the map.
     */
    attributionControl?: boolean;
    bearing?: number;

    /**
     * Snap to north threshold in degrees.
     */
    bearingSnap?: number;

    /**
     * If true, enable the "box zoom" interaction (see BoxZoomHandler)
     */
    boxZoom?: boolean;

    /**
     * initial map center
     */
    center?: mapboxgl$LngLatLike;

    /**
     * The max number of pixels a user can shift the mouse pointer during a click for it to be
     * considered a valid click (as opposed to a mouse drag).
     * @default 3
     */
    clickTolerance?: number;

    /**
     * If `true`, Resource Timing API information will be collected for requests made by GeoJSON
     * and Vector Tile web workers (this information is normally inaccessible from the main
     * Javascript thread). Information will be returned in a `resourceTiming` property of
     * relevant `data` events.
     * @default false
     */
    collectResourceTiming?: boolean;

    /**
     * If `true`, symbols from multiple sources can collide with each other during collision
     * detection. If `false`, collision detection is run separately for the symbols in each source.
     * @default true
     */
    crossSourceCollisions?: boolean;

    /**
     * ID of the container element
     */
    container: string | Element;

    /**
     * String or strings to show in an AttributionControl.
     * Only applicable if options.attributionControl is `true`.
     */
    customAttribution?: string | string[];

    /**
     * If true, enable the "drag to pan" interaction (see DragPanHandler).
     */
    dragPan?: boolean;

    /**
     * If true, enable the "drag to rotate" interaction (see DragRotateHandler).
     */
    dragRotate?: boolean;

    /**
     * If true, enable the "double click to zoom" interaction (see DoubleClickZoomHandler).
     */
    doubleClickZoom?: boolean;

    /**
     * If true, the map will track and update the page URL according to map position
     */
    hash?: boolean;

    /**
     * Controls the duration of the fade-in/fade-out animation for label collisions, in milliseconds.
     * This setting affects all symbol layers. This setting does not affect the duration of runtime
     * styling transitions or raster tile cross-fading.
     * @default 300
     */
    fadeDuration?: number;

    /**
     * If true, map creation will fail if the implementation determines that the performance of the created WebGL context would be dramatically lower than expected.
     */
    failIfMajorPerformanceCaveat?: boolean;

    /**
     * If false, no mouse, touch, or keyboard listeners are attached to the map, so it will not respond to input
     */
    interactive?: boolean;

    /**
     * If true, enable keyboard shortcuts (see KeyboardHandler).
     */
    keyboard?: boolean;

    /**
     * If specified, defines a CSS font-family for locally overriding generation of glyphs in the
     * 'CJK Unified Ideographs' and 'Hangul Syllables' ranges. In these ranges, font settings from
     * the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold).
     * The purpose of this option is to avoid bandwidth-intensive glyph server requests.
     * @default null
     */
    localIdeographFontFamily?: string;

    /**
     * A string representing the position of the Mapbox wordmark on the map.
     * @default "bottom-left"
     */
    logoPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";

    /**
     * If set, the map is constrained to the given bounds.
     */
    maxBounds?: mapboxgl$LngLatBoundsLike;

    /**
     * Maximum zoom of the map
     */
    maxZoom?: number;

    /**
     * Minimum zoom of the map
     */
    minZoom?: number;

    /**
     * If true, The maps canvas can be exported to a PNG using map.getCanvas().toDataURL();. This is false by default as a performance optimization.
     */
    preserveDrawingBuffer?: boolean;

    /**
     * The initial pitch (tilt) of the map, measured in degrees away from the plane of the
     * screen (0-60).
     * @default 0
     */
    pitch?: number;

    /**
     * If `false`, the map's pitch (tilt) control with "drag to rotate" interaction will be disabled.
     * @default true
     */
    pitchWithRotate?: boolean;

    /**
     * If `false`, the map won't attempt to re-request tiles once they expire per their HTTP
     * `cacheControl`/`expires` headers.
     * @default true
     */
    refreshExpiredTiles?: boolean;

    /**
     * If `true`, multiple copies of the world will be rendered, when zoomed out.
     * @default true
     */
    renderWorldCopies?: boolean;

    /**
     * If true, enable the "scroll to zoom" interaction
     */
    scrollZoom?: boolean;

    /**
     * stylesheet location
     */
    style?: mapboxgl$Style | string;

    /**
     * If  true, the map will automatically resize when the browser window resizes
     */
    trackResize?: boolean;

    /**
     * A callback run before the Map makes a request for an external URL. The callback can be
     * used to modify the url, set headers, or set the credentials property for cross-origin requests.
     * @default null
     */
    transformRequest?: mapboxgl$TransformRequestFunction;

    /**
     * If true, enable the "pinch to rotate and zoom" interaction (see TouchZoomRotateHandler).
     */
    touchZoomRotate?: boolean;

    /**
     * Initial zoom level
     */
    zoom?: number;

    /**
     * The maximum number of tiles stored in the tile cache for a given source. If omitted, the
     * cache will be dynamically sized based on the current viewport.
     * @default null
     */
    maxTileCacheSize?: number;
  }

  declare export type mapboxgl$ResourceType =
    | "Unknown"
    | "Style"
    | "Source"
    | "Tile"
    | "Glyphs"
    | "SpriteImage"
    | "SpriteJSON"
    | "Image";

  declare export interface mapboxgl$RequestParameters {
    /**
     * The URL to be requested.
     */
    url: string;

    /**
     * Use `'include'` to send cookies with cross-origin requests.
     */
    credentials?: "same-origin" | "include";

    /**
     * The headers to be sent with the request.
     */
    headers?: {
      [header: string]: any
    };
    method?: "GET" | "POST" | "PUT";
    collectResourceTiming?: boolean;
  }

  declare export type mapboxgl$TransformRequestFunction = (
    url: string,
    resourceType: mapboxgl$ResourceType
  ) => mapboxgl$RequestParameters;

  declare export interface mapboxgl$PaddingOptions {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }

  /**
   * BoxZoomHandler
   */
  declare export class mapboxgl$BoxZoomHandler {
    constructor(map: mapboxgl$Map): this;
    isEnabled(): boolean;
    isActive(): boolean;
    enable(): void;
    disable(): void;
  }

  /**
   * ScrollZoomHandler
   */
  declare export class mapboxgl$ScrollZoomHandler {
    constructor(map: mapboxgl$Map): this;
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
  }

  /**
   * DragPenHandler
   */
  declare export class mapboxgl$DragPanHandler {
    constructor(map: mapboxgl$Map): this;
    isEnabled(): boolean;
    isActive(): boolean;
    enable(): void;
    disable(): void;
  }

  /**
   * DragRotateHandler
   */
  declare export class mapboxgl$DragRotateHandler {
    constructor(
      map: mapboxgl$Map,
      options?: {
        bearingSnap?: number,
        pitchWithRotate?: boolean
      }
    ): this;
    isEnabled(): boolean;
    isActive(): boolean;
    enable(): void;
    disable(): void;
  }

  /**
   * KeyboardHandler
   */
  declare export class mapboxgl$KeyboardHandler {
    constructor(map: mapboxgl$Map): this;
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
  }

  /**
   * DoubleClickZoomHandler
   */
  declare export class mapboxgl$DoubleClickZoomHandler {
    constructor(map: mapboxgl$Map): this;
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
  }

  /**
   * TouchZoomRotateHandler
   */
  declare export class mapboxgl$TouchZoomRotateHandler {
    constructor(map: mapboxgl$Map): this;
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    disableRotation(): void;
    enableRotation(): void;
  }

  declare export interface mapboxgl$IControl {
    onAdd(map: mapboxgl$Map): HTMLElement;
    onRemove(map: mapboxgl$Map): any;
    getDefaultPosition?: () => string;
  }

  /**
   * Control
   */
  declare export class mapboxgl$Control mixins mapboxgl$Evented {}

  /**
   * Navigation
   */
  declare export class mapboxgl$NavigationControl mixins mapboxgl$Control {
    constructor(options?: {
      showCompass?: boolean,
      showZoom?: boolean
    }): this;
  }

  declare export class mapboxgl$PositionOptions {
    enableHighAccuracy: boolean;
    timeout: number;
    maximumAge: number;
  }

  /**
   * Geolocate
   */
  declare export class mapboxgl$GeolocateControl mixins mapboxgl$Control {
    constructor(options?: {
      positionOptions?: mapboxgl$PositionOptions,
      fitBoundsOptions?: mapboxgl$FitBoundsOptions,
      trackUserLocation?: boolean,
      showUserLocation?: boolean
    }): this;
    trigger(): boolean;
  }

  /**
   * Attribution
   */
  declare export class mapboxgl$AttributionControl mixins mapboxgl$Control {
    constructor(options?: {
      compact?: boolean,
      customAttribution?: string | string[]
    }): this;
  }

  /**
   * Scale
   */
  declare export class mapboxgl$ScaleControl mixins mapboxgl$Control {
    constructor(options?: {
      maxWidth?: number,
      unit?: string
    }): this;
    setUnit(unit: "imperial" | "metric" | "nautical"): void;
  }

  /**
   * Fullscreen
   */
  declare export class mapboxgl$FullscreenControl mixins mapboxgl$Control {
    constructor(): this;
  }

  /**
   * Popup
   */
  declare export class mapboxgl$Popup mixins mapboxgl$Evented {
    constructor(options?: mapboxgl$PopupOptions): this;
    addTo(map: mapboxgl$Map): this;
    isOpen(): boolean;
    remove(): this;
    getLngLat(): mapboxgl$LngLat;
    setLngLat(lnglat: mapboxgl$LngLatLike): this;
    setText(text: string): this;
    setHTML(html: string): this;
    setDOMContent(htmlNode: Node): this;
  }

  declare export interface mapboxgl$PopupOptions {
    closeButton?: boolean;
    closeOnClick?: boolean;
    anchor?: mapboxgl$Anchor;
    offset?:
      | number
      | mapboxgl$PointLike
      | {
          [key: string]: mapboxgl$PointLike
        };
    className?: string;
  }

  declare export interface mapboxgl$Style {
    bearing?: number;
    center?: number[];
    glyphs?: string;
    layers?: mapboxgl$Layer[];
    metadata?: any;
    name?: string;
    pitch?: number;
    light?: mapboxgl$Light;
    sources?: mapboxgl$Sources;
    sprite?: string;
    transition?: mapboxgl$Transition;
    version: number;
    zoom?: number;
  }

  declare export interface mapboxgl$Transition {
    delay?: number;
    duration?: number;
  }

  declare export interface mapboxgl$Light {
    anchor?: "map" | "viewport";
    position?: number[];
    "position-transition"?: mapboxgl$Transition;
    color?: string;
    "color-transition"?: mapboxgl$Transition;
    intensity?: number;
    "intensity-transition"?: mapboxgl$Transition;
  }

  declare export interface mapboxgl$Sources {
    [sourceName: string]: mapboxgl$AnySourceData;
  }

  declare export type mapboxgl$AnySourceData =
    | mapboxgl$GeoJSONSourceRaw
    | mapboxgl$VideoSourceRaw
    | mapboxgl$ImageSourceRaw
    | mapboxgl$CanvasSourceRaw
    | mapboxgl$VectorSource
    | mapboxgl$RasterSource
    | mapboxgl$RasterDemSource;

  declare export type mapboxgl$AnySourceImpl =
    | mapboxgl$GeoJSONSource
    | mapboxgl$VideoSource
    | mapboxgl$ImageSource
    | mapboxgl$CanvasSource
    | mapboxgl$VectorSource
    | mapboxgl$RasterSource
    | mapboxgl$RasterDemSource;

  declare export interface mapboxgl$Source {
    type:
      | "vector"
      | "raster"
      | "raster-dem"
      | "geojson"
      | "image"
      | "video"
      | "canvas";
  }

  /**
   * GeoJSONSource
   */
  declare export type mapboxgl$GeoJSONSourceRaw = {
    type: "geojson"
  } & mapboxgl$Source &
    mapboxgl$GeoJSONSourceOptions;

  declare export class mapboxgl$GeoJSONSource mixins mapboxgl$GeoJSONSourceRaw {
    type: "geojson";
    constructor(options?: mapboxgl$GeoJSONSourceOptions): this;
    setData(
      data:
        | GeoJSON.Feature<GeoJSON.Geometry>
        | GeoJSON.FeatureCollection<GeoJSON.Geometry>
        | String
    ): this;
    getClusterExpansionZoom(
      clusterId: number,
      callback: (error: any, zoom: number) => void
    ): this;
    getClusterChildren(
      clusterId: number,
      callback: (
        error: any,
        features: GeoJSON.Feature<GeoJSON.Geometry>[]
      ) => void
    ): this;
    getClusterLeaves(
      cluserId: number,
      limit: number,
      offset: number,
      callback: (
        error: any,
        features: GeoJSON.Feature<GeoJSON.Geometry>[]
      ) => void
    ): this;
  }

  declare export interface mapboxgl$GeoJSONSourceOptions {
    data?:
      | GeoJSON.Feature<GeoJSON.Geometry>
      | GeoJSON.FeatureCollection<GeoJSON.Geometry>
      | string;
    maxzoom?: number;
    attribution?: string;
    buffer?: number;
    tolerance?: number;
    cluster?: number | boolean;
    clusterRadius?: number;
    clusterMaxZoom?: number;
    lineMetrics?: boolean;
    generateId?: boolean;
  }

  /**
   * VideoSource
   */
  declare export type mapboxgl$VideoSourceRaw = {
    type: "video"
  } & mapboxgl$Source &
    mapboxgl$VideoSourceOptions;

  declare export class mapboxgl$VideoSource mixins mapboxgl$VideoSourceRaw {
    type: "video";
    constructor(options?: mapboxgl$VideoSourceOptions): this;
    getVideo(): HTMLVideoElement;
    setCoordinates(coordinates: number[][]): this;
  }

  declare export interface mapboxgl$VideoSourceOptions {
    urls?: string[];
    coordinates?: number[][];
  }

  /**
   * ImageSource
   */
  declare export type mapboxgl$ImageSourceRaw = {
    type: "image"
  } & mapboxgl$Source &
    mapboxgl$ImageSourceOptions;

  declare export class mapboxgl$ImageSource mixins mapboxgl$ImageSourceRaw {
    type: "image";
    constructor(options?: mapboxgl$ImageSourceOptions): this;
    setCoordinates(coordinates: number[][]): this;
  }

  declare export interface mapboxgl$ImageSourceOptions {
    url?: string;
    coordinates?: number[][];
  }

  /**
   * CanvasSource
   */
  declare export type mapboxgl$CanvasSourceRaw = {
    type: "canvas"
  } & mapboxgl$Source &
    mapboxgl$CanvasSourceOptions;

  declare export class mapboxgl$CanvasSource mixins mapboxgl$CanvasSourceRaw {
    type: "canvas";
    coordinates: number[][];
    canvas: string | HTMLCanvasElement;
    play(): void;
    pause(): void;
    getCanvas(): HTMLCanvasElement;
    setCoordinates(coordinates: number[][]): this;
  }

  declare export interface mapboxgl$CanvasSourceOptions {
    coordinates: number[][];
    animate?: boolean;
    canvas: string | HTMLCanvasElement;
  }

  declare type mapboxgl$VectorSource = {
    type: "vector",
    url?: string,
    tiles?: string[],
    bounds?: number[],
    scheme?: "xyz" | "tms",
    minzoom?: number,
    maxzoom?: number,
    attribution?: string
  } & mapboxgl$Source;

  declare type mapboxgl$RasterSource = {
    type: "raster",
    url?: string,
    tiles?: string[],
    bounds?: number[],
    minzoom?: number,
    maxzoom?: number,
    tileSize?: number,
    scheme?: "xyz" | "tms",
    attribution?: string
  } & mapboxgl$Source;

  declare type mapboxgl$RasterDemSource = {
    type: "raster-dem",
    url?: string,
    tiles?: string[],
    bounds?: number[],
    minzoom?: number,
    maxzoom?: number,
    tileSize?: number,
    attribution?: string,
    encoding?: "terrarium" | "mapbox"
  } & mapboxgl$Source;

  /**
   * LngLat
   */
  declare export class mapboxgl$LngLat {
    lng: number;
    lat: number;
    constructor(lng: number, lat: number): this;

    /**
     * Return a new LngLat object whose longitude is wrapped to the range (-180, 180).
     */
    wrap(): mapboxgl$LngLat;

    /**
     * Return a LngLat as an array
     */
    toArray(): number[];

    /**
     * Return a LngLat as a string
     */
    toString(): string;
    toBounds(radius: number): mapboxgl$LngLatBounds;
    static convert(input: mapboxgl$LngLatLike): mapboxgl$LngLat;
  }

  /**
   * LngLatBounds
   */
  declare export class mapboxgl$LngLatBounds {
    sw: mapboxgl$LngLatLike;
    ne: mapboxgl$LngLatLike;
    constructor(
      boundsLike?:
        | [mapboxgl$LngLatLike, mapboxgl$LngLatLike]
        | [number, number, number, number]
    ): this;
    constructor(sw: mapboxgl$LngLatLike, ne: mapboxgl$LngLatLike): this;
    setNorthEast(ne: mapboxgl$LngLatLike): this;
    setSouthWest(sw: mapboxgl$LngLatLike): this;

    /**
     * Extend the bounds to include a given LngLat or LngLatBounds.
     */
    extend(obj: mapboxgl$LngLat | mapboxgl$LngLatBounds): this;

    /**
     * Get the point equidistant from this box's corners
     */
    getCenter(): mapboxgl$LngLat;

    /**
     * Get southwest corner
     */
    getSouthWest(): mapboxgl$LngLat;

    /**
     * Get northeast corner
     */
    getNorthEast(): mapboxgl$LngLat;

    /**
     * Get northwest corner
     */
    getNorthWest(): mapboxgl$LngLat;

    /**
     * Get southeast corner
     */
    getSouthEast(): mapboxgl$LngLat;

    /**
     * Get west edge longitude
     */
    getWest(): number;

    /**
     * Get south edge latitude
     */
    getSouth(): number;

    /**
     * Get east edge longitude
     */
    getEast(): number;

    /**
     * Get north edge latitude
     */
    getNorth(): number;

    /**
     * Returns a LngLatBounds as an array
     */
    toArray(): number[][];

    /**
     * Return a LngLatBounds as a string
     */
    toString(): string;

    /**
     * Returns a boolean
     */
    isEmpty(): boolean;

    /**
     * Convert an array to a LngLatBounds object, or return an existing LngLatBounds object unchanged.
     */
    static convert(input: mapboxgl$LngLatBoundsLike): mapboxgl$LngLatBounds;
  }

  /**
   * Point
   */
  declare export class mapboxgl$Point {
    x: number;
    y: number;
    constructor(x: number, y: number): this;
    clone(): mapboxgl$Point;
    add(p: mapboxgl$Point): mapboxgl$Point;
    sub(p: mapboxgl$Point): mapboxgl$Point;
    mult(k: number): mapboxgl$Point;
    div(k: number): mapboxgl$Point;
    rotate(a: number): mapboxgl$Point;
    matMult(m: number): mapboxgl$Point;
    unit(): mapboxgl$Point;
    perp(): mapboxgl$Point;
    round(): mapboxgl$Point;
    mag(): number;
    equals(p: mapboxgl$Point): boolean;
    dist(p: mapboxgl$Point): number;
    distSqr(p: mapboxgl$Point): number;
    angle(): number;
    angleTo(p: mapboxgl$Point): number;
    angleWidth(p: mapboxgl$Point): number;
    angleWithSep(x: number, y: number): number;
    static convert(a: mapboxgl$PointLike): mapboxgl$Point;
  }

  /**
   * Marker
   */
  declare export class mapboxgl$Marker mixins mapboxgl$Evented {
    constructor(options?: mapboxgl$MarkerOptions): this;
    constructor(element?: HTMLElement, options?: mapboxgl$MarkerOptions): this;
    addTo(map: mapboxgl$Map): this;
    remove(): this;
    getLngLat(): mapboxgl$LngLat;
    setLngLat(lngLat: mapboxgl$LngLatLike): this;
    getElement(): HTMLElement;
    setPopup(popup?: mapboxgl$Popup): this;
    getPopup(): mapboxgl$Popup;
    togglePopup(): this;
    getOffset(): mapboxgl$PointLike;
    setOffset(offset: mapboxgl$PointLike): this;
    setDraggable(shouldBeDraggable: boolean): this;
    isDraggable(): boolean;
  }

  declare export interface mapboxgl$MarkerOptions {
    element?: HTMLElement;
    offset?: mapboxgl$PointLike;
    anchor?: mapboxgl$Anchor;
    color?: string;
    draggable?: boolean;
  }

  /**
   * Evented
   */
  declare export class mapboxgl$Evented {
    on(type: string, listener: Function): this;
    off(type?: string | any, listener?: Function): this;
    once(type: string, listener: Function): this;
    fire(
      type: string,
      properties?: {
        [key: string]: any
      }
    ): this;
  }

  /**
   * StyleOptions
   */
  declare export interface mapboxgl$StyleOptions {
    transition?: boolean;
  }

  declare export type mapboxgl$MapboxGeoJSONFeature = GeoJSON.Feature<GeoJSON.Geometry> & {
    layer: mapboxgl$Layer,
    source: string,
    sourceLayer: string,
    state: {
      [key: string]: any
    }
  };

  declare export type mapboxgl$EventData = {
    [key: string]: any
  };

  declare export class mapboxgl$MapboxEvent<TOrig = void> {
    type: string;
    target: mapboxgl$Map;
    originalEvent: TOrig;
  }

  declare export class mapboxgl$MapMouseEvent
    mixins mapboxgl$MapboxEvent<MouseEvent> {
    type:
      | "mousedown"
      | "mouseup"
      | "click"
      | "dblclick"
      | "mousemove"
      | "mouseover"
      | "mouseenter"
      | "mouseleave"
      | "mouseout"
      | "contextmenu";
    point: mapboxgl$Point;
    lngLat: mapboxgl$LngLat;
    preventDefault(): void;
    defaultPrevented: boolean;
  }

  declare export type mapboxgl$MapLayerMouseEvent = mapboxgl$MapMouseEvent & {
    features?: mapboxgl$MapboxGeoJSONFeature[]
  };

  declare export class mapboxgl$MapTouchEvent
    mixins mapboxgl$MapboxEvent<TouchEvent> {
    type: "touchstart" | "touchend" | "touchcancel";
    point: mapboxgl$Point;
    lngLat: mapboxgl$LngLat;
    points: mapboxgl$Point[];
    lngLats: mapboxgl$LngLat[];
    preventDefault(): void;
    defaultPrevented: boolean;
  }

  declare export type mapboxgl$MapLayerTouchEvent = mapboxgl$MapTouchEvent & {
    features?: mapboxgl$MapboxGeoJSONFeature[]
  };

  declare export class mapboxgl$MapWheelEvent
    mixins mapboxgl$MapboxEvent<WheelEvent> {
    type: "wheel";
    preventDefault(): void;
    defaultPrevented: boolean;
  }

  declare export type mapboxgl$MapBoxZoomEvent = {
    type: "boxzoomstart" | "boxzoomend" | "boxzoomcancel",
    boxZoomBounds: mapboxgl$LngLatBounds
  } & mapboxgl$MapboxEvent<MouseEvent>;

  declare export type mapboxgl$MapDataEvent =
    | mapboxgl$MapSourceDataEvent
    | mapboxgl$MapStyleDataEvent;

  declare export type mapboxgl$MapStyleDataEvent = {
    dataType: "style"
  } & mapboxgl$MapboxEvent;

  declare export type mapboxgl$MapSourceDataEvent = {
    dataType: "source",
    isSourceLoaded: boolean,
    source: mapboxgl$Source,
    sourceId: string,
    sourceDataType: "metadata" | "content",
    tile: any,
    coord: mapboxgl$Coordinate
  } & mapboxgl$MapboxEvent;

  declare export interface mapboxgl$Coordinate {
    canonical: mapboxgl$CanonicalCoordinate;
    wrap: number;
    key: number;
  }

  declare export interface mapboxgl$CanonicalCoordinate {
    x: number;
    y: number;
    z: number;
    key: number;
    equals(coord: mapboxgl$CanonicalCoordinate): boolean;
  }

  declare export type mapboxgl$MapContextEvent = {
    type: "webglcontextlost" | "webglcontextrestored"
  } & mapboxgl$MapboxEvent<WebGLContextEvent>;

  declare export class mapboxgl$ErrorEvent mixins mapboxgl$MapboxEvent {
    type: "error";
    error: Error;
  }

  /**
   * AnimationOptions
   */
  declare export interface mapboxgl$AnimationOptions {
    /**
     * Number in milliseconds
     */
    duration?: number;

    /**
     * A function taking a time in the range 0..1 and returning a number where 0 is the initial
     * state and 1 is the final state.
     */
    easing?: (time: number) => number;

    /**
     * point, origin of movement relative to map center
     */
    offset?: mapboxgl$PointLike;

    /**
     * When set to false, no animation happens
     */
    animate?: boolean;
  }

  /**
   * CameraOptions
   */
  declare export interface mapboxgl$CameraOptions {
    /**
     * Map center
     */
    center?: mapboxgl$LngLatLike;

    /**
     * Map zoom level
     */
    zoom?: number;

    /**
     * Map rotation bearing in degrees counter-clockwise from north
     */
    bearing?: number;

    /**
     * Map angle in degrees at which the camera is looking at the ground
     */
    pitch?: number;

    /**
     * If zooming, the zoom center (defaults to map center)
     */
    around?: mapboxgl$LngLatLike;
  }

  declare export type mapboxgl$CameraForBoundsOptions = {
    padding?: number | mapboxgl$PaddingOptions,
    offset?: mapboxgl$PointLike,
    maxZoom?: number
  } & mapboxgl$CameraOptions;

  /**
   * FlyToOptions
   */
  declare export type mapboxgl$FlyToOptions = {
    curve?: number,
    minZoom?: number,
    speed?: number,
    screenSpeed?: number,
    maxDuration?: number
  } & mapboxgl$AnimationOptions &
    mapboxgl$CameraOptions;

  declare export type mapboxgl$FitBoundsOptions = {
    linear?: boolean,
    padding?: number | mapboxgl$PaddingOptions,
    offset?: mapboxgl$PointLike,
    maxZoom?: number,
    maxDuration?: number
  } & mapboxgl$FlyToOptions;

  /**
   * MapEvent
   */
  declare export type mapboxgl$MapEventType = {
    error: mapboxgl$ErrorEvent,
    load: mapboxgl$MapboxEvent<>,
    remove: mapboxgl$MapboxEvent<>,
    render: mapboxgl$MapboxEvent<>,
    resize: mapboxgl$MapboxEvent<>,
    webglcontextlost: mapboxgl$MapContextEvent,
    webglcontextrestored: mapboxgl$MapContextEvent,
    dataloading: mapboxgl$MapDataEvent,
    data: mapboxgl$MapDataEvent,
    tiledataloading: mapboxgl$MapDataEvent,
    sourcedataloading: mapboxgl$MapSourceDataEvent,
    styledataloading: mapboxgl$MapStyleDataEvent,
    sourcedata: mapboxgl$MapSourceDataEvent,
    styledata: mapboxgl$MapStyleDataEvent,
    boxzoomcancel: mapboxgl$MapBoxZoomEvent,
    boxzoomstart: mapboxgl$MapBoxZoomEvent,
    boxzoomend: mapboxgl$MapBoxZoomEvent,
    touchcancel: mapboxgl$MapTouchEvent,
    touchmove: mapboxgl$MapTouchEvent,
    touchend: mapboxgl$MapTouchEvent,
    touchstart: mapboxgl$MapTouchEvent,
    click: mapboxgl$MapMouseEvent,
    contextmenu: mapboxgl$MapMouseEvent,
    dblclick: mapboxgl$MapMouseEvent,
    mousemove: mapboxgl$MapMouseEvent,
    mouseup: mapboxgl$MapMouseEvent,
    mousedown: mapboxgl$MapMouseEvent,
    mouseout: mapboxgl$MapMouseEvent,
    mouseover: mapboxgl$MapMouseEvent,
    movestart: mapboxgl$MapboxEvent<
      MouseEvent | TouchEvent | WheelEvent | void
    >,
    move: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | WheelEvent | void>,
    moveend: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | WheelEvent | void>,
    zoomstart: mapboxgl$MapboxEvent<
      MouseEvent | TouchEvent | WheelEvent | void
    >,
    zoom: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | WheelEvent | void>,
    zoomend: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | WheelEvent | void>,
    rotatestart: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | void>,
    rotate: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | void>,
    rotateend: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | void>,
    dragstart: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | void>,
    drag: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | void>,
    dragend: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | void>,
    pitchstart: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | void>,
    pitch: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | void>,
    pitchend: mapboxgl$MapboxEvent<MouseEvent | TouchEvent | void>,
    wheel: mapboxgl$MapWheelEvent
  };

  declare export type mapboxgl$MapLayerEventType = {
    click: mapboxgl$MapLayerMouseEvent,
    dblclick: mapboxgl$MapLayerMouseEvent,
    mousedown: mapboxgl$MapLayerMouseEvent,
    mouseup: mapboxgl$MapLayerMouseEvent,
    mousemove: mapboxgl$MapLayerMouseEvent,
    mouseenter: mapboxgl$MapLayerMouseEvent,
    mouseleave: mapboxgl$MapLayerMouseEvent,
    mouseover: mapboxgl$MapLayerMouseEvent,
    mouseout: mapboxgl$MapLayerMouseEvent,
    contextmenu: mapboxgl$MapLayerMouseEvent,
    touchstart: mapboxgl$MapLayerTouchEvent,
    touchend: mapboxgl$MapLayerTouchEvent,
    touchcancel: mapboxgl$MapLayerTouchEvent
  };

  declare export interface mapboxgl$Layer {
    id: string;
    type?:
      | "fill"
      | "line"
      | "symbol"
      | "circle"
      | "fill-extrusion"
      | "raster"
      | "background"
      | "heatmap"
      | "hillshade";
    metadata?: any;
    ref?: string;
    source?: string | mapboxgl$AnySourceData;
    "source-layer"?: string;
    minzoom?: number;
    maxzoom?: number;
    interactive?: boolean;
    filter?: any[];
    layout?:
      | mapboxgl$BackgroundLayout
      | mapboxgl$FillLayout
      | mapboxgl$FillExtrusionLayout
      | mapboxgl$LineLayout
      | mapboxgl$SymbolLayout
      | mapboxgl$RasterLayout
      | mapboxgl$CircleLayout
      | mapboxgl$HeatmapLayout
      | mapboxgl$HillshadeLayout;
    paint?:
      | mapboxgl$BackgroundPaint
      | mapboxgl$FillPaint
      | mapboxgl$FillExtrusionPaint
      | mapboxgl$LinePaint
      | mapboxgl$SymbolPaint
      | mapboxgl$RasterPaint
      | mapboxgl$CirclePaint
      | mapboxgl$HeatmapPaint
      | mapboxgl$HillshadePaint;
  }

  declare export interface mapboxgl$StyleFunction {
    stops?: any[][];
    property?: string;
    base?: number;
    type?: "identity" | "exponential" | "interval" | "categorical";
    default?: any;
    colorSpace?: "rgb" | "lab" | "hcl";
  }

  declare export interface mapboxgl$BackgroundLayout {
    visibility?: "visible" | "none";
  }

  declare export interface mapboxgl$BackgroundPaint {
    "background-color"?: string | mapboxgl$Expression;
    "background-color-transition"?: mapboxgl$Transition;
    "background-pattern"?: string;
    "background-pattern-transition"?: mapboxgl$Transition;
    "background-opacity"?: number | mapboxgl$Expression;
    "background-opacity-transition"?: mapboxgl$Transition;
  }

  declare export interface mapboxgl$FillLayout {
    visibility?: "visible" | "none";
  }

  declare export interface mapboxgl$FillPaint {
    "fill-antialias"?: boolean | mapboxgl$Expression;
    "fill-opacity"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "fill-opacity-transition"?: mapboxgl$Transition;
    "fill-color"?: string | mapboxgl$StyleFunction | mapboxgl$Expression;
    "fill-color-transition"?: mapboxgl$Transition;
    "fill-outline-color"?:
      | string
      | mapboxgl$StyleFunction
      | mapboxgl$Expression;
    "fill-outline-color-transition"?: mapboxgl$Transition;
    "fill-translate"?: number[];
    "fill-translate-transition"?: mapboxgl$Transition;
    "fill-translate-anchor"?: "map" | "viewport";
    "fill-pattern"?: string | mapboxgl$Expression;
    "fill-pattern-transition"?: mapboxgl$Transition;
  }

  declare export interface mapboxgl$FillExtrusionLayout {
    visibility?: "visible" | "none";
  }

  declare export interface mapboxgl$FillExtrusionPaint {
    "fill-extrusion-opacity"?: number | mapboxgl$Expression;
    "fill-extrusion-opacity-transition"?: mapboxgl$Transition;
    "fill-extrusion-color"?:
      | string
      | mapboxgl$StyleFunction
      | mapboxgl$Expression;
    "fill-extrusion-color-transition"?: mapboxgl$Transition;
    "fill-extrusion-translate"?: number[] | mapboxgl$Expression;
    "fill-extrusion-translate-transition"?: mapboxgl$Transition;
    "fill-extrusion-translate-anchor"?: "map" | "viewport";
    "fill-extrusion-pattern"?: string | mapboxgl$Expression;
    "fill-extrusion-pattern-transition"?: mapboxgl$Transition;
    "fill-extrusion-height"?:
      | number
      | mapboxgl$StyleFunction
      | mapboxgl$Expression;
    "fill-extrusion-height-transition"?: mapboxgl$Transition;
    "fill-extrusion-base"?:
      | number
      | mapboxgl$StyleFunction
      | mapboxgl$Expression;
    "fill-extrusion-base-transition"?: mapboxgl$Transition;
    "fill-extrusion-vertical-gradient"?: boolean;
  }

  declare export interface mapboxgl$LineLayout {
    visibility?: "visible" | "none";
    "line-cap"?: "butt" | "round" | "square";
    "line-join"?: "bevel" | "round" | "miter" | mapboxgl$Expression;
    "line-miter-limit"?: number | mapboxgl$Expression;
    "line-round-limit"?: number | mapboxgl$Expression;
  }

  declare export interface mapboxgl$LinePaint {
    "line-opacity"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "line-opacity-transition"?: mapboxgl$Transition;
    "line-color"?: string | mapboxgl$StyleFunction | mapboxgl$Expression;
    "line-color-transition"?: mapboxgl$Transition;
    "line-translate"?: number[] | mapboxgl$Expression;
    "line-translate-transition"?: mapboxgl$Transition;
    "line-translate-anchor"?: "map" | "viewport";
    "line-width"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "line-width-transition"?: mapboxgl$Transition;
    "line-gap-width"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "line-gap-width-transition"?: mapboxgl$Transition;
    "line-offset"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "line-offset-transition"?: mapboxgl$Transition;
    "line-blur"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "line-blur-transition"?: mapboxgl$Transition;
    "line-dasharray"?: number[];
    "line-dasharray-transition"?: mapboxgl$Transition;
    "line-pattern"?: string | mapboxgl$Expression;
    "line-pattern-transition"?: mapboxgl$Transition;
    "line-gradient"?: mapboxgl$Expression;
  }

  declare export interface mapboxgl$SymbolLayout {
    visibility?: "visible" | "none";
    "symbol-placement"?: "point" | "line" | "line-center";
    "symbol-spacing"?: number | mapboxgl$Expression;
    "symbol-avoid-edges"?: boolean;
    "symbol-z-order"?: "viewport-y" | "source";
    "icon-allow-overlap"?:
      | boolean
      | mapboxgl$StyleFunction
      | mapboxgl$Expression;
    "icon-ignore-placement"?: boolean;
    "icon-optional"?: boolean;
    "icon-rotation-alignment"?: "map" | "viewport" | "auto";
    "icon-size"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "icon-text-fit"?: "none" | "both" | "width" | "height";
    "icon-text-fit-padding"?: number[] | mapboxgl$Expression;
    "icon-image"?: string | mapboxgl$StyleFunction | mapboxgl$Expression;
    "icon-rotate"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "icon-padding"?: number | mapboxgl$Expression;
    "icon-keep-upright"?: boolean;
    "icon-offset"?: number[] | mapboxgl$StyleFunction | mapboxgl$Expression;
    "icon-anchor"?:
      | mapboxgl$Anchor
      | mapboxgl$StyleFunction
      | mapboxgl$Expression;
    "icon-pitch-alignment"?: "map" | "viewport" | "auto";
    "text-pitch-alignment"?: "map" | "viewport" | "auto";
    "text-rotation-alignment"?: "map" | "viewport" | "auto";
    "text-field"?: string | mapboxgl$StyleFunction | mapboxgl$Expression;
    "text-font"?: string | string[];
    "text-size"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "text-max-width"?: number | mapboxgl$Expression;
    "text-line-height"?: number | mapboxgl$Expression;
    "text-letter-spacing"?: number | mapboxgl$Expression;
    "text-justify"?: "left" | "center" | "right";
    "text-anchor"?:
      | mapboxgl$Anchor
      | mapboxgl$StyleFunction
      | mapboxgl$Expression;
    "text-max-angle"?: number | mapboxgl$Expression;
    "text-rotate"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "text-padding"?: number | mapboxgl$Expression;
    "text-keep-upright"?: boolean;
    "text-transform"?:
      | "none"
      | "uppercase"
      | "lowercase"
      | mapboxgl$StyleFunction
      | mapboxgl$Expression;
    "text-offset"?: number[] | mapboxgl$Expression;
    "text-allow-overlap"?: boolean;
    "text-ignore-placement"?: boolean;
    "text-optional"?: boolean;
  }

  declare export interface mapboxgl$SymbolPaint {
    "icon-opacity"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "icon-opacity-transition"?: mapboxgl$Transition;
    "icon-color"?: string | mapboxgl$StyleFunction | mapboxgl$Expression;
    "icon-color-transition"?: mapboxgl$Transition;
    "icon-halo-color"?: string | mapboxgl$StyleFunction | mapboxgl$Expression;
    "icon-halo-color-transition"?: mapboxgl$Transition;
    "icon-halo-width"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "icon-halo-width-transition"?: mapboxgl$Transition;
    "icon-halo-blur"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "icon-halo-blur-transition"?: mapboxgl$Transition;
    "icon-translate"?: number[] | mapboxgl$Expression;
    "icon-translate-transition"?: mapboxgl$Transition;
    "icon-translate-anchor"?: "map" | "viewport";
    "text-opacity"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "text-opacity-transition"?: mapboxgl$Transition;
    "text-color"?: string | mapboxgl$StyleFunction | mapboxgl$Expression;
    "text-color-transition"?: mapboxgl$Transition;
    "text-halo-color"?: string | mapboxgl$StyleFunction | mapboxgl$Expression;
    "text-halo-color-transition"?: mapboxgl$Transition;
    "text-halo-width"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "text-halo-width-transition"?: mapboxgl$Transition;
    "text-halo-blur"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "text-halo-blur-transition"?: mapboxgl$Transition;
    "text-translate"?: number[] | mapboxgl$Expression;
    "text-translate-transition"?: mapboxgl$Transition;
    "text-translate-anchor"?: "map" | "viewport";
  }

  declare export interface mapboxgl$RasterLayout {
    visibility?: "visible" | "none";
  }

  declare export interface mapboxgl$RasterPaint {
    "raster-opacity"?: number | mapboxgl$Expression;
    "raster-opacity-transition"?: mapboxgl$Transition;
    "raster-hue-rotate"?: number | mapboxgl$Expression;
    "raster-hue-rotate-transition"?: mapboxgl$Transition;
    "raster-brightness-min"?: number | mapboxgl$Expression;
    "raster-brightness-min-transition"?: mapboxgl$Transition;
    "raster-brightness-max"?: number | mapboxgl$Expression;
    "raster-brightness-max-transition"?: mapboxgl$Transition;
    "raster-saturation"?: number | mapboxgl$Expression;
    "raster-saturation-transition"?: mapboxgl$Transition;
    "raster-contrast"?: number | mapboxgl$Expression;
    "raster-contrast-transition"?: mapboxgl$Transition;
    "raster-fade-duration"?: number | mapboxgl$Expression;
    "raster-resample"?: "linear" | "nearest";
  }

  declare export interface mapboxgl$CircleLayout {
    visibility?: "visible" | "none";
  }

  declare export interface mapboxgl$CirclePaint {
    "circle-radius"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "circle-radius-transition"?: mapboxgl$Transition;
    "circle-color"?: string | mapboxgl$StyleFunction | mapboxgl$Expression;
    "circle-color-transition"?: mapboxgl$Transition;
    "circle-blur"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "circle-blur-transition"?: mapboxgl$Transition;
    "circle-opacity"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "circle-opacity-transition"?: mapboxgl$Transition;
    "circle-translate"?: number[] | mapboxgl$Expression;
    "circle-translate-transition"?: mapboxgl$Transition;
    "circle-translate-anchor"?: "map" | "viewport";
    "circle-pitch-scale"?: "map" | "viewport";
    "circle-pitch-alignment"?: "map" | "viewport";
    "circle-stroke-width"?:
      | number
      | mapboxgl$StyleFunction
      | mapboxgl$Expression;
    "circle-stroke-width-transition"?: mapboxgl$Transition;
    "circle-stroke-color"?:
      | string
      | mapboxgl$StyleFunction
      | mapboxgl$Expression;
    "circle-stroke-color-transition"?: mapboxgl$Transition;
    "circle-stroke-opacity"?:
      | number
      | mapboxgl$StyleFunction
      | mapboxgl$Expression;
    "circle-stroke-opacity-transition"?: mapboxgl$Transition;
  }

  declare export interface mapboxgl$HeatmapLayout {
    visibility?: "visible" | "none";
  }

  declare export interface mapboxgl$HeatmapPaint {
    "heatmap-radius"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "heatmap-radius-transition"?: mapboxgl$Transition;
    "heatmap-weight"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "heatmap-intensity"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "heatmap-intensity-transition"?: mapboxgl$Transition;
    "heatmap-color"?: string | mapboxgl$StyleFunction | mapboxgl$Expression;
    "heatmap-opacity"?: number | mapboxgl$StyleFunction | mapboxgl$Expression;
    "heatmap-opacity-transition"?: mapboxgl$Transition;
  }

  declare export interface mapboxgl$HillshadeLayout {
    visibility?: "visible" | "none";
  }

  declare export interface mapboxgl$HillshadePaint {
    "hillshade-illumination-direction"?: number | mapboxgl$Expression;
    "hillshade-illumination-anchor"?: "map" | "viewport";
    "hillshade-exaggeration"?: number | mapboxgl$Expression;
    "hillshade-exaggeration-transition"?: mapboxgl$Transition;
    "hillshade-shadow-color"?: string | mapboxgl$Expression;
    "hillshade-shadow-color-transition"?: mapboxgl$Transition;
    "hillshade-highlight-color"?: string | mapboxgl$Expression;
    "hillshade-highlight-color-transition"?: mapboxgl$Transition;
    "hillshade-accent-color"?: string | mapboxgl$Expression;
    "hillshade-accent-color-transition"?: mapboxgl$Transition;
  }
}
