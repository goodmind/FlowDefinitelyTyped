declare module "navermaps" {
  declare var npm$namespace$naver: {
    maps: typeof npm$namespace$naver$maps
  };

  declare var npm$namespace$naver$maps: {
    onJSContentLoaded: typeof naver$maps$onJSContentLoaded,
    NaverMapTypeOption: typeof naver$maps$NaverMapTypeOption,
    drawing: typeof naver$maps$drawing,
    visualization: typeof naver$maps$visualization,
    Service: typeof naver$maps$Service,
    TransCoord: typeof naver$maps$TransCoord,
    Event: typeof naver$maps$Event,
    EPSG3857: typeof naver$maps$EPSG3857,
    UTMK: typeof naver$maps$UTMK,
    UTMK_NAVER: typeof naver$maps$UTMK_NAVER,
    EPSG3857Coord: typeof naver$maps$EPSG3857Coord,
    TM128: typeof naver$maps$TM128,
    TM128Coord: typeof naver$maps$TM128Coord,
    UTMK_NAVERCoord: typeof naver$maps$UTMK_NAVERCoord,
    UTMKCoord: typeof naver$maps$UTMKCoord,
    jsContentLoaded: typeof naver$maps$jsContentLoaded,
    MapTypeControlStyle: typeof naver$maps$MapTypeControlStyle,
    ZoomControlStyle: typeof naver$maps$ZoomControlStyle,
    Animation: typeof naver$maps$Animation,
    PointingIcon: typeof naver$maps$PointingIcon,
    Position: typeof naver$maps$Position,
    SymbolPath: typeof naver$maps$SymbolPath,
    KVO: typeof naver$maps$KVO,
    KVOArray: typeof naver$maps$KVOArray,
    Point: typeof naver$maps$Point,
    Size: typeof naver$maps$Size,
    PointBounds: typeof naver$maps$PointBounds,
    LatLng: typeof naver$maps$LatLng,
    LatLngBounds: typeof naver$maps$LatLngBounds,
    Map: typeof naver$maps$Map,
    Tile: typeof naver$maps$Tile,
    CanvasTile: typeof naver$maps$CanvasTile,
    ImageTile: typeof naver$maps$ImageTile,
    CanvasMapType: typeof naver$maps$CanvasMapType,
    ImageMapType: typeof naver$maps$ImageMapType,
    MapTypeRegistry: typeof naver$maps$MapTypeRegistry,
    CustomControl: typeof naver$maps$CustomControl,
    LogoControl: typeof naver$maps$LogoControl,
    MapDataControl: typeof naver$maps$MapDataControl,
    MapTypeControl: typeof naver$maps$MapTypeControl,
    ScaleControl: typeof naver$maps$ScaleControl,
    ZoomControl: typeof naver$maps$ZoomControl,
    Layer: typeof naver$maps$Layer,
    LabelLayer: typeof naver$maps$LabelLayer,
    CadastralLayer: typeof naver$maps$CadastralLayer,
    StreetLayer: typeof naver$maps$StreetLayer,
    TrafficLayer: typeof naver$maps$TrafficLayer,
    Data: typeof naver$maps$Data,
    Feature: typeof naver$maps$Feature,
    Geometry: typeof naver$maps$Geometry,
    OverlayView: typeof naver$maps$OverlayView,
    Circle: typeof naver$maps$Circle,
    Ellipse: typeof naver$maps$Ellipse,
    GroundOverlay: typeof naver$maps$GroundOverlay,
    InfoWindow: typeof naver$maps$InfoWindow,
    Marker: typeof naver$maps$Marker,
    Polygon: typeof naver$maps$Polygon,
    Polyline: typeof naver$maps$Polyline,
    Rectangle: typeof naver$maps$Rectangle,
    PanoramaProjection: typeof naver$maps$PanoramaProjection,
    Panorama: typeof naver$maps$Panorama,
    FlightSpot: typeof naver$maps$FlightSpot,
    AroundControl: typeof naver$maps$AroundControl,
    MapTypeId: typeof npm$namespace$naver$maps$MapTypeId,
    SymbolStyle: typeof npm$namespace$naver$maps$SymbolStyle,
    NaverMapTypeOption: typeof npm$namespace$naver$maps$NaverMapTypeOption,
    drawing: typeof npm$namespace$naver$maps$drawing,
    visualization: typeof npm$namespace$naver$maps$visualization,
    Service: typeof npm$namespace$naver$maps$Service,
    TransCoord: typeof npm$namespace$naver$maps$TransCoord,
    Event: typeof npm$namespace$naver$maps$Event,
    EPSG3857: typeof npm$namespace$naver$maps$EPSG3857,
    UTMK: typeof npm$namespace$naver$maps$UTMK,
    UTMK_NAVER: typeof npm$namespace$naver$maps$UTMK_NAVER,
    EPSG3857Coord: typeof npm$namespace$naver$maps$EPSG3857Coord,
    TM128: typeof npm$namespace$naver$maps$TM128,
    TM128Coord: typeof npm$namespace$naver$maps$TM128Coord,
    UTMK_NAVERCoord: typeof npm$namespace$naver$maps$UTMK_NAVERCoord,
    UTMKCoord: typeof npm$namespace$naver$maps$UTMKCoord
  };

  /**
   * Types
   */
  declare type naver$maps$PointArrayLiteral = [number, number];

  declare type naver$maps$PointLiteral =
    | naver$maps$PointArrayLiteral
    | maps$PointObjectLiteral;

  declare type naver$maps$SizeArrayLiteral = [number, number];

  declare type naver$maps$SizeLiteral =
    | naver$maps$SizeArrayLiteral
    | maps$SizeObjectLiteral;

  declare type naver$maps$LatLngLiteral =
    | naver$maps$PointLiteral
    | maps$LatLngObjectLiteral;

  declare type naver$maps$PointBoundsArrayLiteral = [
    number,
    number,
    number,
    number
  ];

  declare type naver$maps$PointBoundsLiteral =
    | naver$maps$PointBoundsArrayLiteral
    | maps$PointBoundsObjectLiteral;

  declare type naver$maps$LatLngBoundsLiteral =
    | naver$maps$PointBoundsLiteral
    | maps$LatLngBoundsObjectLiteral;

  declare type naver$maps$BoundsLiteral =
    | naver$maps$PointBoundsLiteral
    | naver$maps$LatLngBoundsLiteral;

  declare type naver$maps$CoordLiteral =
    | naver$maps$PointLiteral
    | naver$maps$LatLngLiteral;

  declare type naver$maps$Coord = maps$Point | maps$LatLng;

  declare type naver$maps$Bounds = maps$PointBounds | maps$LatLngBounds;

  declare type naver$maps$DOMEvent = maps$Event;

  declare type naver$maps$StylingFunction = (
    feature: maps$Feature
  ) => maps$StyleOptions;

  declare type naver$maps$ArrayOfCoords = maps$Point[] | maps$LatLng[];

  declare type naver$maps$ArrayOfBounds =
    | maps$PointBounds[]
    | maps$LatLngBounds[];

  declare type naver$maps$ArrayOfBoundsLiteral =
    | naver$maps$PointBoundsLiteral[]
    | naver$maps$LatLngBoundsLiteral[];

  declare type naver$maps$forEachOverlayCallback = (
    overlay: maps$Marker | maps$Polyline | maps$Polygon,
    index: number
  ) => void;

  declare type naver$maps$GeoJSON = any;

  declare type naver$maps$GPX = any;

  declare type naver$maps$KML = any;

  declare type naver$maps$KVOArrayOfCoords = any;

  declare type naver$maps$ArrayOfCoordsLiteral =
    | naver$maps$PointLiteral[]
    | naver$maps$LatLngLiteral[];

  declare type naver$maps$strokeStyleType =
    | "solid"
    | "shortdash"
    | "shortdot"
    | "shortdashdot"
    | "shortdashdotdot"
    | "dot"
    | "dash"
    | "longdash"
    | "dashdot"
    | "longdashdot"
    | "longdashdotdot";

  declare type naver$maps$strokeLineCapType = "butt" | "round" | "square";

  declare type naver$maps$strokeLineJoinType = "miter" | "round " | "bevel";

  /**
   * Interfaces
   */
  declare interface naver$maps$MapEventListener {
    eventName: string;
    listener: (event: any) => any;
    listenerId: string;
    target: any;
  }

  declare interface naver$maps$PointObjectLiteral {
    x: number;
    y: number;
  }

  declare interface naver$maps$SizeObjectLiteral {
    width: number;
    height: number;
  }

  declare interface naver$maps$LatLngObjectLiteral {
    lat: number;
    lng: number;
  }

  declare interface naver$maps$PointBoundsObjectLiteral {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  }

  declare interface naver$maps$LatLngBoundsObjectLiteral {
    north: number;
    east: number;
    south: number;
    west: number;
  }

  declare type naver$maps$MapSystemProjection = {
    factor(zoom: number): number,
    fromCoordToOffset(coord: naver$maps$Coord): maps$Point,
    fromCoordToPoint(coord: naver$maps$Coord): maps$Point,
    fromOffsetToCoord(offset: maps$Point): naver$maps$Coord,
    fromOffsetToPoint(offset: maps$Point): maps$Point,
    fromPointToCoord(point: maps$Point): naver$maps$Coord,
    fromPointToOffset(point: maps$Point): maps$Point,
    getDestinationCoord(
      fromCoord: naver$maps$Coord,
      angle: number,
      meter: number
    ): naver$maps$Coord,
    getDistance(coord1: naver$maps$Coord, coord2: naver$maps$Coord): number,
    getProjectionName(): number,
    scaleDown(
      operand: number | maps$Point | maps$Size,
      zoom: number
    ): number | maps$Point | maps$Size,
    scaleUp(
      operand: number | maps$Point | maps$Size,
      zoom: number
    ): number | maps$Point | maps$Size
  } & KVO;

  declare interface naver$maps$MapOptions {
    background?: string;
    baseTileOpacity?: number;
    bounds?: any;
    center?: any;
    disableDoubleClickZoom?: boolean;
    disableDoubleTapZoom?: boolean;
    disableKineticPan?: boolean;
    disableTwoFingerTapZoom?: boolean;
    draggable?: boolean;
    keyboardShortcuts?: boolean;
    logoControl?: boolean;
    logoControlOptions?: any;
    mapDataControl?: boolean;
    mapDataControlOptions?: any;
    mapTypeControl?: boolean;
    mapTypeControlOptions?: any;
    mapTypeId?: string;
    mapTypes?: any;
    maxBounds?: any;
    maxZoom?: number;
    minZoom?: number;
    padding?: any;
    pinchZoom?: boolean;
    resizeOrigin?: any;
    scaleControl?: boolean;
    scaleControlOptions?: any;
    scrollWheel?: boolean;
    size?: any;
    overlayZoomEffect?: null | string;
    tileSpare?: number;
    tileTransition?: boolean;
    zoom?: number;
    zoomControl?: boolean;
    zoomControlOptions?: any;
    zoomOrigin?: any;
  }

  declare interface naver$maps$MarkerOptions {
    animation?: any;
    map?: maps$Map;
    position?: any;
    icon?: any;
    shape?: any;
    title?: string;
    cursor?: string;
    clickable?: boolean;
    draggable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }

  declare interface naver$maps$MapPanes {
    overlayLayer: HTMLElement;
    overlayImage: HTMLElement;
    floatPane: HTMLElement;
  }

  declare interface naver$maps$InfoWindowOptions {
    position?: naver$maps$Coord | naver$maps$CoordLiteral;
    content: string | HTMLElement;
    zIndex?: number;
    maxWidth?: number;
    pixelOffset?: maps$Point | naver$maps$PointLiteral;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    disableAutoPan?: boolean;
    disableAnchor?: boolean;
    anchorSkew?: boolean;
    anchorSize?: maps$Size | naver$maps$SizeLiteral;
    anchorColor?: string;
  }

  declare interface naver$maps$ImageTileOptions {
    urls: string[];
    imgonload?: () => any;
    imgonerror?: () => any;
    opacity?: number;
    transition?: boolean;
    offset?: maps$Point;
    zIndex?: number;
    size?: maps$Size;
    pane?: HTMLElement;
  }

  declare interface naver$maps$ImageMapTypeOptions {
    name: string;
    maxZoom: number;
    minZoom: number;
    projection: maps$Projection;
    tileSize?: maps$Size | naver$maps$SizeLiteral;
    repeatX?: boolean;
    vendor?: string;
    provider?: maps$MapDataProvider[];
    uid?: string;
    darktheme?: boolean;
    getTileUrl?: () => any;
    tileSet?: string | string[];
  }

  declare interface naver$maps$GroundOverlayOptions {
    clickable?: boolean;
    map?: maps$Map | null;
    opacity?: number;
  }

  declare interface naver$maps$EllipseOptions {
    map?: maps$Map;
    bounds: naver$maps$Bounds | naver$maps$BoundsLiteral;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: naver$maps$strokeStyleType;
    strokeLineCap?: naver$maps$strokeLineCapType;
    strokeLineJoin?: naver$maps$strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }

  declare interface naver$maps$FeatureEvent {
    feature: maps$Feature;
  }

  declare interface naver$maps$PointerEvent {
    coord: naver$maps$Coord;
    point: maps$Point;
    offset: maps$Point;
    pointerEvent: naver$maps$DOMEvent;
    feature: maps$Feature;
  }

  declare interface naver$maps$PropertyEvent {
    feature: maps$Feature;
    name: string;
    oldValue: any;
    newValue: any;
  }

  declare interface naver$maps$StyleOptions {
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    icon?: string | maps$ImageIcon | maps$SymbolIcon | maps$HtmlIcon;
    shape?: maps$MarkerShape;
    title?: string;
    visible?: boolean;
    zIndex?: number;
  }

  declare interface naver$maps$ControlOptions {
    position: maps$Position;
  }

  declare interface naver$maps$CircleOptions {
    map?: maps$Map;
    center: naver$maps$Coord | naver$maps$CoordLiteral;
    radius?: number;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: naver$maps$strokeStyleType;
    strokeLineCap?: naver$maps$strokeLineCapType;
    strokeLineJoin?: naver$maps$strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }

  declare interface naver$maps$TileOptions {
    opacity?: number;
    transition?: boolean;
    offset?: maps$Point;
    zIndex?: number;
    size?: maps$Size;
    pane?: HTMLElement;
  }

  declare interface naver$maps$TileIndex {
    xIndex: number;
    yIndex: number;
  }

  declare interface naver$maps$CanvasTileOptions {
    imageData?: ImageData;
    opacity?: number;
    transition?: boolean;
    offset?: maps$Point;
    zIndex?: number;
    size?: maps$Size;
    pane?: HTMLElement;
  }

  declare interface naver$maps$CanvasMapTypeOptions {
    name: string;
    maxZoom: number;
    minZoom: number;
    projection: maps$Projection;
    tileSize?: maps$Size | naver$maps$SizeLiteral;
    repeatX?: boolean;
    vendor?: string;
    provider?: maps$MapDataProvider[];
    uid?: string;
    darktheme?: boolean;
    getTileData?: () => any;
  }

  declare interface naver$maps$MapDataProvider {
    title: string;
    link?: string;
    bounds?:
      | naver$maps$Bounds
      | naver$maps$BoundsLiteral
      | naver$maps$ArrayOfBounds
      | naver$maps$ArrayOfBoundsLiteral;
  }

  declare interface naver$maps$MapType {
    maxZoom: number;
    minZoom: number;
    name: string;
    projection: maps$Projection;
    tileSize: maps$Size;
    getTile(x: number, y: number, z: number): HTMLElement | maps$Tile;
  }

  declare interface naver$maps$Projection {
    fromCoordToPoint(coord: naver$maps$Coord): maps$Point;
    fromPointToCoord(point: maps$Point): naver$maps$Coord;
  }

  declare interface naver$maps$CadastralLayerOptions {
    overlayMap: boolean | void;
    zIndex: number | void;
    overlayMap: boolean | void;
    zIndex: number | void;
  }

  declare interface naver$maps$AroundControlOptions {
    position: maps$Position;
  }

  declare interface naver$maps$NaverImageMapTypeOptions {
    maxZoom?: number;
    minZoom?: number;
    projection?: naver$maps$Projection;
    tileSize?: maps$Size;
    hd?: string;
  }

  declare interface naver$maps$LogoControlOptions {
    position: maps$Position;
  }

  declare interface naver$maps$MapDataControlOptions {
    position: maps$Position;
  }

  declare interface naver$maps$MapTypeControlOptions {
    mapTypeIds: maps$MapTypeId[] | null;
    position: maps$Position;
    style: maps$MapTypeControlStyle;
  }

  declare interface naver$maps$ScaleControlOptions {
    position: maps$Position;
  }

  declare interface naver$maps$ZoomControlOptions {
    position: maps$Position;
    style: maps$ZoomControlStyle;
    legendDisabled: boolean;
  }

  declare interface naver$maps$LayerOptions {
    hd: boolean;
    overlayMap: boolean | void;
    zIndex: number | void;
  }

  declare interface naver$maps$StreetLayerOptions {
    overlayMap: boolean | void;
    zIndex: number | void;
  }

  declare interface naver$maps$TrafficLayerOptions {
    interval: number;
    overlayMap: boolean | void;
    zIndex: number | void;
  }

  declare interface naver$maps$HtmlIcon {
    content: string | HTMLElement;
    size?: maps$Size | naver$maps$SizeLiteral;
    anchor?: maps$Point | naver$maps$PointLiteral | maps$Position;
  }

  declare interface naver$maps$ImageIcon {
    url: string;
    size?: maps$Size | naver$maps$SizeLiteral;
    scaledSize?: maps$Size | naver$maps$SizeLiteral;
    origin?: maps$Point | naver$maps$PointLiteral;
    anchor?: maps$Point | naver$maps$PointLiteral | maps$Position;
  }

  declare interface naver$maps$MarkerShape {
    coords: any[];
    type: string;
  }

  declare interface naver$maps$SymbolIcon {
    path: maps$SymbolPath | maps$Point[] | naver$maps$PointLiteral[];
    style?: maps$SymbolStyle;
    radius?: number;
    fillColor?: string;
    fillOpacity?: number;
    strokeColor?: string;
    strokeWeight?: number;
    strokeOpacity?: number;
    anchor?: maps$Point | naver$maps$PointLiteral | maps$Position;
  }

  declare interface naver$maps$PolygonOptions {
    map?: maps$Map;
    paths:
      | naver$maps$ArrayOfCoords[]
      | naver$maps$KVOArrayOfCoords[]
      | naver$maps$ArrayOfCoordsLiteral[];
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: naver$maps$strokeStyleType;
    strokeLineCap?: naver$maps$strokeLineCapType;
    strokeLineJoin?: naver$maps$strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }

  declare interface naver$maps$PolylineOptions {
    map?: maps$Map;
    path:
      | naver$maps$ArrayOfCoords
      | naver$maps$KVOArrayOfCoords
      | naver$maps$ArrayOfCoordsLiteral;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: naver$maps$strokeStyleType;
    strokeLineCap?: naver$maps$strokeLineCapType;
    strokeLineJoin?: naver$maps$strokeLineJoinType;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
    startIcon?: maps$PointingIcon;
    startIconSize?: number;
    endIcon?: maps$PointingIcon;
    endIconSize?: number;
  }

  declare interface naver$maps$RectangleOptions {
    map?: maps$Map;
    bounds: naver$maps$Bounds | naver$maps$BoundsLiteral;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: naver$maps$strokeStyleType;
    strokeLineCap?: naver$maps$strokeLineCapType;
    strokeLineJoin?: naver$maps$strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }

  declare interface naver$maps$PanoramaOptions {
    size: maps$Size | naver$maps$SizeLiteral;
    panoId: string;
    position: maps$LatLng | naver$maps$LatLngLiteral;
    pov: maps$PanoramaPov;
    visible: boolean;
    minScale: number;
    maxScale: number;
    minZoom: number;
    maxZoom: number;
    logoControl: boolean;
    logoControlOptions: naver$maps$LogoControlOptions;
    zoomControl: boolean;
    zoomControlOptions: naver$maps$ZoomControlOptions;
    aroundControl: boolean;
    aroundControlOptions: naver$maps$AroundControlOptions;
  }

  declare interface naver$maps$PanoramaPov {
    pan: number;
    tilt: number;
    fov: number;
  }

  declare interface naver$maps$PanoramaLocation {
    panoId: string;
    title: string;
    address: string;
    coord: maps$LatLng;
    photodate: string;
  }

  declare interface naver$maps$DOMEventListener {
    eventName: string;
    listener: () => any;
    target: HTMLElement;
  }

  declare interface naver$maps$Margin {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }

  declare interface naver$maps$TransitionOptions {
    duration?: number;
    easing?: string;
  }

  /**
   * Enums
   */

  declare var naver$maps$MapTypeControlStyle: {|
    +BUTTON: 0, // 0
    +DROPDOWN: 1 // 1
  |};

  declare var naver$maps$ZoomControlStyle: {|
    +LARGE: 0, // 0
    +SMALL: 1 // 1
  |};

  /**
   * Members
   */

  declare var naver$maps$Animation: {|
    +BOUNCE: 1, // 1
    +DROP: 1 // 1
  |};

  declare var naver$maps$jsContentLoaded: boolean;

  declare type naver$maps$MapTypeId = string;

  declare var npm$namespace$naver$maps$MapTypeId: {
    NORMAL: typeof naver$maps$MapTypeId$NORMAL,
    TERRAIN: typeof naver$maps$MapTypeId$TERRAIN,
    SATELLITE: typeof naver$maps$MapTypeId$SATELLITE,
    HYBRID: typeof naver$maps$MapTypeId$HYBRID
  };
  declare var naver$maps$MapTypeId$NORMAL: string;

  declare var naver$maps$MapTypeId$TERRAIN: string;

  declare var naver$maps$MapTypeId$SATELLITE: string;

  declare var naver$maps$MapTypeId$HYBRID: string;

  declare function naver$maps$onJSContentLoaded(...args: any[]): any;

  declare var naver$maps$PointingIcon: {|
    +OPEN_ARROW: 1, // 1
    +BLOCK_ARROW: 1, // 1
    +CIRCLE: 2, // 2
    +DIAMOND: 3 // 3
  |};

  declare var naver$maps$Position: {|
    +CENTER: 0, // 0
    +TOP_LEFT: 1, // 1
    +TOP_CENTER: 2, // 2
    +TOP_RIGHT: 3, // 3
    +LEFT_CENTER: 4, // 4
    +LEFT_TOP: 5, // 5
    +LEFT_BOTTOM: 6, // 6
    +RIGHT_TOP: 7, // 7
    +RIGHT_CENTER: 8, // 8
    +RIGHT_BOTTOM: 9, // 9
    +BOTTOM_LEFT: 10, // 10
    +BOTTOM_CENTER: 11, // 11
    +BOTTOM_RIGHT: 12 // 12
  |};

  declare var naver$maps$SymbolPath: {|
    +BACKWARD_CLOSED_ARROW: 1, // 1
    +BACKWARD_OPEN_ARROW: 1, // 1
    +CIRCLE: 2, // 2
    +FORWARD_CLOSED_ARROW: 3, // 3
    +FORWARD_OPEN_ARROW: 4 // 4
  |};

  declare type naver$maps$SymbolStyle = string;

  declare var npm$namespace$naver$maps$SymbolStyle: {
    CIRCLE: typeof naver$maps$SymbolStyle$CIRCLE,
    PATH: typeof naver$maps$SymbolStyle$PATH,
    CLOSED_PATH: typeof naver$maps$SymbolStyle$CLOSED_PATH
  };
  declare var naver$maps$SymbolStyle$CIRCLE: string;

  declare var naver$maps$SymbolStyle$PATH: string;

  declare var naver$maps$SymbolStyle$CLOSED_PATH: string;

  /**
   * Classes
   */
  declare class naver$maps$KVO {
    constructor(): this;
    addListener(
      eventName: any,
      listener: () => any
    ): naver$maps$MapEventListener;
    addListenerOnce(
      eventName: any,
      listener: () => any
    ): naver$maps$MapEventListener;
    bindTo(key: string, target: naver$maps$KVO, targetKey?: string): void;
    clearListeners(eventName: string): void;
    get(key: string): any;
    hasListener(eventName: string): boolean;
    removeListener(
      listeners: naver$maps$MapEventListener | naver$maps$MapEventListener[]
    ): void;
    set(key: string, value: any, silently?: boolean): void;
    setValues(properties: any): void;
    trigger(eventName: string, eventObject?: any): void;
    unbind(key: string): void;
    unbindAll(): void;
  }

  declare class naver$maps$KVOArray mixins KVO {
    constructor(array: any[]): this;
    clear(): void;
    forEach(callback: (element: any, index: number) => void): void;
    getArray(): any[];
    getAt(index: number): any;
    getIndexOfElement(element: any): number;
    getLength(): number;
    insertAt(index: number, element: any): void;
    pop(): any;
    push(element: any): number;
    removeAt(index: number): any;
    removeElement(element: any): void;
    setAt(index: number, element: any): void;
    splice(startIndex: number, deleteCount: number, element?: any): any[];
  }

  declare class naver$maps$Point {
    constructor(x: number, y: number): this;
    add(point: naver$maps$Coord | naver$maps$PointLiteral): naver$maps$Point;
    add(x: number, y: number): naver$maps$Point;
    ceil(): naver$maps$Point;
    clone(): naver$maps$Point;
    div(point: naver$maps$Coord | naver$maps$PointLiteral): void;
    div(x: number, y: number): naver$maps$Point;
    equals(point: naver$maps$Point): boolean;
    floor(): naver$maps$Point;
    mul(point: naver$maps$Coord | naver$maps$PointLiteral): naver$maps$Point;
    mul(x: number, y: number): naver$maps$Point;
    round(): naver$maps$Point;
    sub(point: naver$maps$Coord | naver$maps$PointLiteral): naver$maps$Point;
    sub(x: number, y: number): naver$maps$Point;
    toString(): string;
  }

  declare class naver$maps$Size {
    width: number;
    height: number;
    constructor(width: number, height: number): this;
    add(size: naver$maps$Size | naver$maps$SizeLiteral): naver$maps$Size;
    add(width: number, height: number): naver$maps$Size;
    ceil(): naver$maps$Size;
    clone(): naver$maps$Size;
    div(width: number, height: number): naver$maps$Size;
    div(size: naver$maps$Size | naver$maps$SizeLiteral): naver$maps$Size;
    equals(size: naver$maps$Size | naver$maps$SizeLiteral): boolean;
    floor(): naver$maps$Size;
    mul(size: naver$maps$Size | naver$maps$SizeLiteral): naver$maps$Size;
    mul(width: number, height: number): naver$maps$Size;
    round(): naver$maps$Size;
    sub(size: naver$maps$Size | naver$maps$SizeLiteral): naver$maps$Size;
    sub(width: number, height: number): naver$maps$Size;
    toString(): string;
  }

  declare class naver$maps$PointBounds {
    constructor(minPoint: naver$maps$Point, maxPoint: naver$maps$Point): this;
    static bounds(
      point: naver$maps$Coord | naver$maps$PointLiteral,
      pointN: naver$maps$Coord | naver$maps$PointLiteral
    ): naver$maps$PointBounds;
    clone(): naver$maps$PointBounds;
    equals(bounds: naver$maps$Bounds | naver$maps$PointBoundsLiteral): boolean;
    extend(
      point: naver$maps$Coord | naver$maps$PointLiteral
    ): naver$maps$PointBounds;
    getCenter(): naver$maps$Point;
    getMax(): naver$maps$Point;
    getMin(): naver$maps$Point;
    hasBounds(
      bounds: naver$maps$Bounds | naver$maps$PointBoundsLiteral
    ): boolean;
    hasPoint(point: naver$maps$Coord | naver$maps$PointLiteral): boolean;
    intersects(
      bounds: naver$maps$Bounds | naver$maps$PointBoundsLiteral
    ): boolean;
    maxX(): number;
    maxY(): number;
    minX(): number;
    minY(): number;
    toString(): string;
    union(
      bounds: naver$maps$Bounds | naver$maps$PointBoundsLiteral
    ): naver$maps$PointBounds;
  }

  declare class naver$maps$LatLng mixins Point {
    constructor(lat: number, lng: number): this;
    clone(): naver$maps$LatLng;
    destinationPoint(angle: number, meter: number): naver$maps$LatLng;
    equals(point: naver$maps$Coord | naver$maps$LatLngLiteral): boolean;
    lat(): number;
    lng(): number;
    toPoint(): naver$maps$Point;
    toString(): string;
  }

  declare class naver$maps$LatLngBounds mixins PointBounds {
    constructor(sw: naver$maps$LatLng, ne: naver$maps$LatLng): this;
    static bounds(
      latlng: naver$maps$Coord | naver$maps$LatLngLiteral,
      latlngN: naver$maps$Coord | naver$maps$LatLngLiteral
    ): naver$maps$LatLngBounds;
    clone(): naver$maps$LatLngBounds;
    east(): number;
    equals(bounds: naver$maps$Bounds | naver$maps$LatLngBoundsLiteral): boolean;
    extend(
      latlng: naver$maps$Coord | naver$maps$LatLngLiteral
    ): naver$maps$LatLngBounds;
    getCenter(): naver$maps$LatLng;
    getNE(): naver$maps$LatLng;
    getSW(): naver$maps$LatLng;
    hasLatLng(latlng: naver$maps$Coord | naver$maps$LatLngLiteral): boolean;
    intersects(
      bounds: naver$maps$Bounds | naver$maps$LatLngBoundsLiteral
    ): boolean;
    north(): number;
    south(): number;
    toPointBounds(): naver$maps$PointBounds;
    union(
      bounds: naver$maps$Bounds | naver$maps$LatLngBoundsLiteral
    ): naver$maps$LatLngBounds;
    west(): number;
  }

  declare class naver$maps$Map mixins KVO {
    controls: any;
    data: any;
    layers: any;
    mapTypes: any;
    mapSystemProjection: any;
    constructor(
      mapDiv: string | HTMLElement,
      mapOptions?: naver$maps$MapOptions
    ): this;
    addPane(name: string, elementOrIndex: HTMLElement | number): void;
    destory(): void;
    fitBounds(bounds: any, margin?: any): void;
    getBounds(): naver$maps$Bounds;
    getCenter(): naver$maps$Coord;
    getCenterPoint(): naver$maps$Coord;
    getElement(): HTMLElement;
    getMapTypeId(): string;
    getOptions(key?: string): any;
    getPanes(): naver$maps$MapPanes;
    getPrimitiveProjection(): naver$maps$Projection;
    getProjection(): naver$maps$MapSystemProjection;
    getSize(): naver$maps$Size;
    getZoom(): number;
    morph(
      coord: naver$maps$Coord | naver$maps$CoordLiteral,
      zoom?: number,
      transitionOptions?: naver$maps$TransitionOptions
    ): void;
    panBy(offset: naver$maps$Point | naver$maps$PointLiteral): void;
    panTo(
      coord: naver$maps$Coord | naver$maps$CoordLiteral,
      transitionOptions: naver$maps$TransitionOptions
    ): void;
    panToBounds(
      bounds: naver$maps$Bounds | naver$maps$BoundsLiteral,
      transitionOptions: naver$maps$TransitionOptions,
      margin?: naver$maps$Margin
    ): void;
    refresh(noEffect?: boolean): void;
    removePane(name: string): void;
    setCenter(center: naver$maps$Coord | naver$maps$CoordLiteral): void;
    setCenterPoint(point: naver$maps$Point | naver$maps$PointLiteral): void;
    setMapTypeId(mapTypeId: string): void;
    setOptions(newOptionsOrKey: any, value?: any): void;
    setSize(size: naver$maps$Size | naver$maps$SizeLiteral): void;
    setZoom(zoom: number, effect?: boolean): void;
    updateBy(
      coord: naver$maps$Coord | naver$maps$CoordLiteral,
      zoom: number
    ): void;
    zoomBy(
      deltaZoom: number,
      zoomOrigin?: naver$maps$Coord | naver$maps$CoordLiteral,
      effect?: boolean
    ): void;
  }

  declare class naver$maps$Tile mixins KVO {
    constructor(
      element: HTMLElement,
      tileOptions?: naver$maps$TileOptions
    ): this;
    appendTo(parentNode: HTMLElement): void;
    cancelFadeIn(): void;
    destroy(): void;
    fadeIn(callback: () => any, startOpacity?: number): void;
    getElement(): HTMLElement;
    getOffset(): naver$maps$Point;
    getOpacity(): number;
    getSize(): naver$maps$Size;
    getTileIndex(): naver$maps$TileIndex;
    getZIndex(): number;
    hide(): void;
    load(tileOptions?: naver$maps$TileOptions): void;
    remove(): void;
    reset(
      mapType: naver$maps$MapType,
      zoom: number,
      tileOptions?: naver$maps$TileOptions
    ): void;
    setBlank(): void;
    setOffset(offset: naver$maps$Point): void;
    setOffset(x: number, y: number): void;
    setOpacity(opacity: number): void;
    setSize(size: naver$maps$Size): void;
    setTileIndex(tileIndex: naver$maps$TileIndex): void;
    setZIndex(zIndex: number): void;
    show(): void;
  }

  declare class naver$maps$CanvasTile mixins Tile {
    constructor(canvasTileOptions: naver$maps$CanvasTileOptions): this;
  }

  declare class naver$maps$ImageTile mixins Tile {
    constructor(imageTileOptions: naver$maps$ImageTileOptions): this;
    getImageElements(): HTMLElement[];
    getUrls(): string[];
    setUrls(urls: string[]): void;
  }

  declare class naver$maps$CanvasMapType mixins MapType {
    maxZoom: number;
    minZoom: number;
    name: string;
    projection: naver$maps$Projection;
    tileSize: naver$maps$Size;
    constructor(canvasMapTypeOptions: naver$maps$CanvasMapTypeOptions): this;
    getMapTypeOptions(): naver$maps$CanvasMapTypeOptions;
    getMaxZoom(): number;
    getMinZoom(): number;
    getName(): string;
    getTile(x: number, y: number, z: number): naver$maps$CanvasTile;
    getTileData(x: number, y: number, z: number): ImageData;
    setMapTypeOptions(
      canvasMapTypeOptions: naver$maps$CanvasMapTypeOptions
    ): void;
  }

  declare class naver$maps$ImageMapType mixins MapType {
    maxZoom: number;
    minZoom: number;
    name: string;
    projection: naver$maps$Projection;
    tileSize: naver$maps$Size;
    constructor(imageMapTypeOptions: naver$maps$ImageMapTypeOptions): this;
    getMapTypeOptions(): naver$maps$ImageMapTypeOptions;
    getMaxZoom(): number;
    getMinZoom(): number;
    getName(): string;
    getTile(x: number, y: number, z: number): naver$maps$ImageTile;
    getTileUrls(x: number, y: number, z: number): string[];
    setMapTypeOptions(
      imageMapTypeOptions: naver$maps$ImageMapTypeOptions
    ): void;
  }

  declare class naver$maps$MapTypeRegistry mixins KVO {
    constructor(mapTypeInfo?: any, defaultMapTypeId?: string): this;
    getPreviousTypeId(): string;
    getSelectedType(): naver$maps$MapType;
    getSelectedTypeId(): string;
    getTypeIds(): string[];
    set(mapTypeId: string, mapType: naver$maps$MapType): void;
    setSelectedTypeId(mapTypeId: string): void;
  }

  declare function naver$maps$NaverMapTypeOption(
    options: naver$maps$NaverImageMapTypeOptions
  ): void;

  declare var npm$namespace$naver$maps$NaverMapTypeOption: {
    getBicycleLayer: typeof naver$maps$NaverMapTypeOption$getBicycleLayer,
    getBlankMap: typeof naver$maps$NaverMapTypeOption$getBlankMap,
    getCadastralLayer: typeof naver$maps$NaverMapTypeOption$getCadastralLayer,
    getHybridMap: typeof naver$maps$NaverMapTypeOption$getHybridMap,
    getMapTypes: typeof naver$maps$NaverMapTypeOption$getMapTypes,
    getNormalLabelLayer: typeof naver$maps$NaverMapTypeOption$getNormalLabelLayer,
    getNormalMap: typeof naver$maps$NaverMapTypeOption$getNormalMap,
    getSatelliteLabelLayer: typeof naver$maps$NaverMapTypeOption$getSatelliteLabelLayer,
    getSatelliteMap: typeof naver$maps$NaverMapTypeOption$getSatelliteMap,
    getStreetLayer: typeof naver$maps$NaverMapTypeOption$getStreetLayer,
    getTerrainMap: typeof naver$maps$NaverMapTypeOption$getTerrainMap,
    getTrafficLayer: typeof naver$maps$NaverMapTypeOption$getTrafficLayer,
    getVectorMap: typeof naver$maps$NaverMapTypeOption$getVectorMap,
    getWorldMap: typeof naver$maps$NaverMapTypeOption$getWorldMap
  };
  declare function naver$maps$NaverMapTypeOption$getBicycleLayer(
    opts: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getBlankMap(
    opts: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getCadastralLayer(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getHybridMap(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getMapTypes(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$MapTypeRegistry;

  declare function naver$maps$NaverMapTypeOption$getNormalLabelLayer(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getNormalMap(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getSatelliteLabelLayer(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getSatelliteMap(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getStreetLayer(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getTerrainMap(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getTrafficLayer(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getVectorMap(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare function naver$maps$NaverMapTypeOption$getWorldMap(
    opts?: naver$maps$NaverImageMapTypeOptions
  ): naver$maps$ImageMapType;

  declare class naver$maps$CustomControl mixins KVO {
    constructor(html: string, ControlOptions: naver$maps$ControlOptions): this;
    getElement(): HTMLElement;
    getMap(): naver$maps$Map | null;
    getOptions(key?: string): any;
    html(html?: string): string | void;
    setMap(map?: naver$maps$Map | null): void;
    setOptions(newOptions: naver$maps$ControlOptions): void;
    setPosition(position: naver$maps$Position): void;
  }

  declare class naver$maps$LogoControl mixins CustomControl {
    constructor(LogoControlOptions: naver$maps$LogoControlOptions): this;
  }

  declare class naver$maps$MapDataControl mixins CustomControl {
    constructor(MapDataControlOptions: naver$maps$MapDataControlOptions): this;
  }

  declare class naver$maps$MapTypeControl mixins CustomControl {
    constructor(MapTypeControlOptions: naver$maps$MapTypeControlOptions): this;
  }

  declare class naver$maps$ScaleControl mixins CustomControl {
    constructor(ScaleControlOptions: naver$maps$ScaleControlOptions): this;
  }

  declare class naver$maps$ZoomControl mixins CustomControl {
    constructor(ZoomControlOptions: naver$maps$ZoomControlOptions): this;
  }

  declare class naver$maps$Layer mixins KVO {
    constructor(
      name: string,
      MapTypeRegistry: naver$maps$MapTypeRegistry,
      options: naver$maps$LayerOptions
    ): this;
    getLayerType(): naver$maps$MapType;
    getLayerTypeId(): string;
    getMap(): naver$maps$Map | null;
    getOpacity(): number;
    getPaneElement(): HTMLElement;
    refresh(noEffect?: boolean): void;
    setLayerTypeId(typeId: string): void;
    setMap(map: naver$maps$Map | null): void;
    setOpacity(opacity: number): void;
  }

  declare class naver$maps$LabelLayer mixins Layer {
    constructor(
      name: string,
      registry: naver$maps$ImageMapType,
      option: any
    ): this;
  }

  declare class naver$maps$CadastralLayer mixins LabelLayer {
    name: string;
    constructor(option?: naver$maps$CadastralLayerOptions): this;
  }

  declare class naver$maps$StreetLayer mixins LabelLayer {
    name: string;
    constructor(option?: naver$maps$StreetLayerOptions): this;
  }

  declare class naver$maps$TrafficLayer mixins LabelLayer {
    name: string;
    constructor(option?: naver$maps$TrafficLayerOptions): this;
    endAutoRefresh(): void;
    startAutoRefresh(): void;
  }

  declare class naver$maps$Data mixins KVO {
    constructor(): this;
    addFeature(feature: maps$Feature, autoStyle: boolean): void;
    addGeoJson(geojson: naver$maps$GeoJSON, autoStyle: boolean): void;
    addGpx(xmlDoc: naver$maps$GPX, autoStyle: boolean): void;
    addKml(xmlDoc: naver$maps$KML, autoStyle: boolean): void;
    forEach(callback: (feature: maps$Feature, index: number) => void): void;
    getAllFeature(): maps$Feature[];
    getFeatureById(id: string | number): maps$Feature;
    getMap(): naver$maps$Map | null;
    getStyle(): naver$maps$StyleOptions | naver$maps$StylingFunction;
    overrideStyle(feature: maps$Feature, style: naver$maps$StyleOptions): void;
    removeFeature(feature: maps$Feature): void;
    removeGeoJson(geojson: naver$maps$GeoJSON): void;
    revertStyle(feature: maps$Feature): void;
    setMap(map: naver$maps$Map | null): void;
    setStyle(style: naver$maps$StyleOptions | naver$maps$StylingFunction): void;
    toGeoJson(): naver$maps$GeoJSON;
  }

  declare class naver$maps$Feature mixins KVO {
    constructor(rawFeature: any): this;
    forEachOverlay(callback: naver$maps$forEachOverlayCallback): void;
    getBounds(): naver$maps$Bounds;
    getGeometries(): maps$Geometry[];
    getId(): string;
    getOverlays(): maps$Marker[] | maps$Polyline[] | maps$Polygon[];
    getProperty(name: string): any;
    getRaw(): naver$maps$GeoJSON;
    setProperty(name: string, value: any): void;
    setStyle(styleOptions: naver$maps$StyleOptions): void;
  }

  declare class naver$maps$Geometry mixins KVO {
    constructor(rawGeometry: any): this;
    getCoords(): naver$maps$ArrayOfCoords;
    getType(): string;
  }

  declare class naver$maps$OverlayView mixins KVO {
    draw(): void;
    getContainerTopLeft(): naver$maps$Point;
    getMap(): naver$maps$Map | null;
    getPanes(): naver$maps$MapPanes;
    getProjection(): naver$maps$MapSystemProjection;
    onAdd(): any;
    onRemove(): any;
    setMap(map: naver$maps$Map | null): void;
  }

  declare class naver$maps$Circle mixins OverlayView {
    constructor(options?: naver$maps$CircleOptions): this;
    getAreaSize(): number;
    getBounds(): naver$maps$Bounds;
    getCenter(): naver$maps$Coord;
    getClickable(): boolean;
    getDrawingRect(): naver$maps$Bounds;
    getOptions(key?: string): naver$maps$CircleOptions;
    getRadius(): number;
    getStyles(key: string): naver$maps$CircleOptions;
    getVisible(): boolean;
    getZIndex(): number;
    setCenter(center: naver$maps$Coord | naver$maps$CoordLiteral): void;
    setClickable(clickable: boolean): void;
    setOptions(key: string, value: any): void;
    setOptions(options: naver$maps$CircleOptions): void;
    setRadius(radius: number): void;
    setStyles(key: string, value: string): void;
    setStyles(options: naver$maps$CircleOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class naver$maps$Ellipse mixins OverlayView {
    constructor(options?: naver$maps$EllipseOptions): this;
    getAreaSize(): number;
    getBounds(): naver$maps$Bounds;
    getClickable(): boolean;
    getDrawingRect(): naver$maps$Bounds;
    getOptions(key?: string): naver$maps$EllipseOptions;
    getStyles(key?: string): naver$maps$EllipseOptions;
    getVisible(): boolean;
    getZIndex(): number;
    setBounds(bounds: naver$maps$Bounds | naver$maps$BoundsLiteral): void;
    setOptions(options: naver$maps$EllipseOptions): void;
    setOptions(key: string, value: any): void;
    setStyles(options: naver$maps$EllipseOptions): void;
    setStyles(key: string, value: any): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class naver$maps$GroundOverlay mixins OverlayView {
    constructor(
      url: string,
      bounds: naver$maps$Bounds | naver$maps$BoundsLiteral,
      options?: naver$maps$GroundOverlayOptions
    ): this;
    getBounds(): naver$maps$Bounds;
    getOpacity(): number;
    getUrl(): string;
    setOpacity(opacity: number): void;
  }

  declare class naver$maps$InfoWindow mixins OverlayView {
    constructor(options: naver$maps$InfoWindowOptions): this;
    close(): void;
    getContent(): HTMLElement;
    getOptions(key?: string): naver$maps$InfoWindowOptions;
    getPosition(): naver$maps$Coord;
    getZIndex(): number;
    open(
      map: naver$maps$Map,
      anchor: naver$maps$Coord | naver$maps$CoordLiteral | maps$Marker
    ): void;
    setContent(content: string | HTMLElement): void;
    setOptions(options: naver$maps$InfoWindowOptions): void;
    setPosition(position: naver$maps$Coord | naver$maps$CoordLiteral): void;
    setZIndex(zIndex: number): void;
  }

  declare class naver$maps$Marker mixins OverlayView {
    constructor(options: naver$maps$MarkerOptions): this;
    draw(): void;
    getAnimation(): naver$maps$Animation;
    getClickable(): boolean;
    getCursor(): string;
    getDraggable(): boolean;
    getDrawingRect(): naver$maps$Bounds;
    getIcon():
      | naver$maps$ImageIcon
      | naver$maps$SymbolIcon
      | naver$maps$HtmlIcon;
    getOptions(key?: string): naver$maps$MarkerOptions;
    getPosition(): naver$maps$Coord;
    getShape(): naver$maps$MarkerShape;
    getTitle(): string;
    getVisible(): boolean;
    getZIndex(): number;
    onAdd(): void;
    onRemove(): void;
    setAnimation(animation: naver$maps$Animation): void;
    setClickable(clickable: boolean): void;
    setCursor(cursor: string): void;
    setDraggable(draggable: boolean): void;
    setIcon(
      icon:
        | string
        | naver$maps$ImageIcon
        | naver$maps$SymbolIcon
        | naver$maps$HtmlIcon
    ): void;
    setOptions(options: naver$maps$MarkerOptions): void;
    setPosition(position: naver$maps$Coord | naver$maps$CoordLiteral): void;
    setShape(shape: naver$maps$MarkerShape): void;
    setTitle(title: string): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class naver$maps$Polygon mixins OverlayView {
    constructor(options?: naver$maps$PolygonOptions): this;
    getAreaSize(): number;
    getBounds(): naver$maps$Bounds;
    getClickable(): boolean;
    getDrawingRect(): naver$maps$Bounds;
    getOptions(key?: string): naver$maps$PolygonOptions;
    getPath(): naver$maps$ArrayOfCoords | naver$maps$KVOArrayOfCoords;
    getPaths(): naver$maps$ArrayOfCoords[] | naver$maps$KVOArrayOfCoords[];
    getStyles(key?: string): naver$maps$PolygonOptions;
    getVisible(): boolean;
    getZIndex(): number;
    setClickable(clickable: boolean): void;
    setOptions(key: string, value: any): void;
    setOptions(options: naver$maps$PolygonOptions): void;
    setPath(
      path:
        | naver$maps$ArrayOfCoords
        | naver$maps$KVOArrayOfCoords
        | naver$maps$ArrayOfCoordsLiteral
    ): void;
    setPaths(
      paths: naver$maps$ArrayOfCoords[] | naver$maps$ArrayOfCoordsLiteral
    ): void;
    setStyles(key: string, value: any): void;
    setStyles(options: naver$maps$PolygonOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class naver$maps$Polyline mixins OverlayView {
    constructor(options?: naver$maps$PolylineOptions): this;
    getBounds(): naver$maps$Bounds;
    getClickable(): boolean;
    getDistance(): number;
    getDrawingRect(): naver$maps$Bounds;
    getOptions(key?: string): naver$maps$PolylineOptions;
    getPath(): naver$maps$ArrayOfCoords | naver$maps$KVOArrayOfCoords;
    getStyles(key?: string): naver$maps$PolylineOptions;
    getVisible(): boolean;
    getZIndex(): number;
    setClickable(clickable: boolean): void;
    setOptions(key: string, value: any): void;
    setOptions(options: naver$maps$PolylineOptions): void;
    setPath(
      path:
        | naver$maps$ArrayOfCoords
        | naver$maps$KVOArrayOfCoords
        | naver$maps$ArrayOfCoordsLiteral
    ): void;
    setStyles(key: string, value: any): void;
    setStyles(options: naver$maps$PolylineOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class naver$maps$Rectangle mixins OverlayView {
    constructor(options?: naver$maps$RectangleOptions): this;
    getAreaSize(): number;
    getBounds(): naver$maps$Bounds;
    getClickable(): boolean;
    getDrawingRect(): naver$maps$Bounds;
    getOptions(key?: string): naver$maps$RectangleOptions;
    getStyles(key?: string): naver$maps$RectangleOptions;
    getVisible(): boolean;
    getZIndex(): number;
    setBounds(bounds: naver$maps$Bounds | naver$maps$BoundsLiteral): void;
    setClickable(clickable: boolean): void;
    setOptions(options: naver$maps$RectangleOptions): void;
    setOptions(key: string, value: any): void;
    setStyles(key: string, value: any): void;
    setStyles(options: naver$maps$RectangleOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class naver$maps$PanoramaProjection mixins KVO {
    fromCoordToPov(coord: naver$maps$LatLng): naver$maps$PanoramaPov;
  }

  declare class naver$maps$Panorama mixins KVO {
    constructor(
      panoramaDiv: string | HTMLElement,
      panoramaOptions: naver$maps$PanoramaOptions
    ): this;
    getLocation(): naver$maps$PanoramaLocation;
    getMaxScale(): number;
    getMaxZoom(): number;
    getMinScale(): number;
    getMinZoom(): number;
    getPanoId(): string;
    getPosition(): naver$maps$LatLng;
    getPov(): naver$maps$PanoramaPov;
    getProjection(): naver$maps$PanoramaProjection;
    getScale(): number;
    getSize(): naver$maps$Size;
    getVisible(): boolean;
    getZoom(): number;
    setOptions(key: string, value: any): void;
    setOptions(newOptions: naver$maps$PanoramaOptions): void;
    setPanoId(panoId: string): void;
    setPanoIdWithPov(panoId: string, pov: naver$maps$PanoramaPov): void;
    setPosition(position: naver$maps$LatLng | naver$maps$LatLngLiteral): void;
    setPov(pov: naver$maps$PanoramaPov): void;
    setScale(scale: number): void;
    setSize(size: naver$maps$Size | naver$maps$SizeLiteral): void;
    setVisible(visible: boolean): void;
    setZoom(zoom: number): void;
    zoomIn(): void;
    zoomOut(): void;
  }

  declare class naver$maps$FlightSpot mixins KVO {
    constructor(): this;
    getMap(): naver$maps$Map | null;
    setMap(map: naver$maps$Map | null): void;
  }

  declare class naver$maps$AroundControl mixins CustomControl {
    constructor(aroundControlOptions: naver$maps$AroundControlOptions): this;
  }

  declare function naver$maps$drawing(): void;

  declare var npm$namespace$naver$maps$drawing: {
    DrawingStyle: typeof naver$maps$drawing$DrawingStyle,
    DrawingMode: typeof naver$maps$drawing$DrawingMode,
    DrawingEvent: typeof naver$maps$drawing$DrawingEvent,
    DrawingManager: typeof naver$maps$drawing$DrawingManager
  };
  declare interface naver$maps$drawing$DrawingOptions {
    map?: naver$maps$Map;
    drawingControl?: drawing$DrawingMode[];
    drawingControlOptions?: drawing$drawingControlOptions;
    drawingMode?: drawing$DrawingMode;
    controlPointOptions?: drawing$controlPointOptions;
    rectangleOptions?: naver$maps$RectangleOptions;
    ellipseOptions?: naver$maps$EllipseOptions;
    polylineOptions?: naver$maps$PolylineOptions;
    arrowlineOptions?: naver$maps$PolylineOptions;
    polygonOptions?: naver$maps$PolygonOptions;
    markerOptions?: naver$maps$MarkerOptions;
  }

  declare type naver$maps$drawing$drawingControlOptions = drawing$DrawingControlOptions;

  declare interface naver$maps$drawing$DrawingControlOptions {
    position?: naver$maps$Position;
    style?: drawing$DrawingStyle;
  }

  declare type naver$maps$drawing$controlPointOptions = drawing$ControlPointOptions;

  declare interface naver$maps$drawing$ControlPointOptions {
    anchorPointOptions: naver$maps$CircleOptions;
    midPointOptions: naver$maps$CircleOptions;
  }

  declare interface naver$maps$drawing$DrawingOverlay {
    id: string;
    name: string;
    setEditable: (
      editable: boolean,
      controlPointOptions?: naver$maps$drawing$controlPointOptions
    ) => void;
  }

  declare var naver$maps$drawing$DrawingStyle: {|
    +HORIZONTAL: 0, // 0
    +VERTICAL: 1, // 1
    +HORIZONTAL_2: 2, // 2
    +VERTICAL_2: 3 // 3
  |};

  declare var naver$maps$drawing$DrawingMode: {|
    +HAND: 0, // 0
    +RECTANGLE: 1, // 1
    +ELLIPSE: 2, // 2
    +POLYLINE: 3, // 3
    +ARROWLINE: 4, // 4
    +POLYGON: 5, // 5
    +MARKER: 6 // 6
  |};

  declare var naver$maps$drawing$DrawingEvent: {|
    +ADD: 0, // 0
    +REMOVE: 1, // 1
    +SELECT: 2, // 2
    +Added: 3, // 3
    +Removed: 4, // 4
    +Selected: 5 // 5
  |};

  declare class naver$maps$drawing$DrawingManager mixins KVO {
    constructor(options?: naver$maps$drawing$DrawingOptions): this;
    addDrawing(
      overlay: naver$maps$drawing$DrawingOverlay,
      drawingMode: naver$maps$drawing$DrawingMode,
      id?: string
    ): void;
    addListener(
      eventName: naver$maps$drawing$DrawingEvent,
      listener: (overlay: naver$maps$drawing$DrawingOverlay) => void
    ): naver$maps$MapEventListener;
    destroy(): void;
    getDrawing(id: string): naver$maps$drawing$DrawingOverlay;
    getDrawings(): any;
    getMap(): naver$maps$Map | null;
    setMap(map: naver$maps$Map | null): void;
    toGeoJson(): any;
  }

  declare function naver$maps$visualization(): void;

  declare var npm$namespace$naver$maps$visualization: {
    SpectrumStyle: typeof naver$maps$visualization$SpectrumStyle,
    DotMap: typeof naver$maps$visualization$DotMap,
    HeatMap: typeof naver$maps$visualization$HeatMap,
    WeightedLocation: typeof naver$maps$visualization$WeightedLocation
  };
  declare interface naver$maps$visualization$DotMapOptions {
    map: naver$maps$Map;
    data:
      | naver$maps$LatLng[]
      | naver$maps$PointArrayLiteral[]
      | visualization$WeightedLocation[];
    opacity?: number;
    radius?: number;
    strokeWeight?: number;
    strokeColor?: string;
    strokeLineCap?: naver$maps$strokeLineCapType;
    strokeLineJoin?: naver$maps$strokeLineJoinType;
    fillColor?: string;
  }

  declare interface naver$maps$visualization$HeatMapOptions {
    map: naver$maps$Map;
    data:
      | naver$maps$LatLng[]
      | naver$maps$PointArrayLiteral[]
      | visualization$WeightedLocation[];
    opacity?: number;
    radius?: number;
    colorMap?: visualization$SpectrumStyle;
  }

  declare var naver$maps$visualization$SpectrumStyle: {|
    +JET: 0, // 0
    +HSV: 1, // 1
    +HOT: 2, // 2
    +COOL: 3, // 3
    +GREYS: 4, // 4
    +YIGnBu: 5, // 5
    +YIOrRd: 6, // 6
    +RdBu: 7, // 7
    +RAINBOW: 8, // 8
    +PORTLAND: 9, // 9
    +OXYGEN: 10 // 10
  |};

  declare class naver$maps$visualization$DotMap mixins KVO {
    constructor(dotMapOptions?: naver$maps$visualization$DotMapOptions): this;
    addDrawing(
      overlay: drawing$DrawingOverlay,
      drawingMode: drawing$DrawingMode,
      id?: string
    ): void;
    addListener(
      eventName: drawing$DrawingEvent,
      listener: (overlay: drawing$DrawingOverlay) => void
    ): naver$maps$MapEventListener;
    destroy(): void;
    getDrawing(id: string): drawing$DrawingOverlay;
    getDrawings(): any;
    getMap(): naver$maps$Map | null;
    setMap(map: naver$maps$Map | null): void;
    toGeoJson(): any;
  }

  declare class naver$maps$visualization$HeatMap {
    constructor(heatMapOptions?: naver$maps$visualization$HeatMapOptions): this;
    getColorMap(): naver$maps$visualization$SpectrumStyle;
    getData(): naver$maps$LatLng[] | naver$maps$PointArrayLiteral[];
    getMap(): naver$maps$Map | null;
    getOptions(key?: string): naver$maps$visualization$HeatMapOptions;
    redraw(): void;
    setColorMap(
      colormap: naver$maps$visualization$SpectrumStyle,
      inReverse: boolean
    ): void;
    setData(data: naver$maps$LatLng[] | naver$maps$PointArrayLiteral[]): void;
    setMap(map: naver$maps$Map | null): void;
    setOptions(key: string, value: any): void;
    setOptions(options: naver$maps$visualization$HeatMapOptions): void;
  }

  declare class naver$maps$visualization$WeightedLocation {
    constructor(lat: number, lng: number, weight?: number): this;
    clone(): naver$maps$visualization$WeightedLocation;
    getLocation(): naver$maps$LatLng;
    getWeight(): number;
    lat(): number;
    lng(): number;
    toString(): string;
  }

  declare function naver$maps$Service(): void;

  declare var npm$namespace$naver$maps$Service: {
    fromAddrToCoord: typeof naver$maps$Service$fromAddrToCoord,
    fromCoordToAddr: typeof naver$maps$Service$fromCoordToAddr,
    geocode: typeof naver$maps$Service$geocode,
    reverseGeocode: typeof naver$maps$Service$reverseGeocode,

    CoordType: typeof naver$maps$Service$CoordType,
    Encoding: typeof naver$maps$Service$Encoding,
    Status: typeof naver$maps$Service$Status
  };
  declare interface naver$maps$Service$ServiceOptions {
    encoding?: any;
    coordType?: any;
  }

  declare type naver$maps$Service$GeocodeServiceOptions = {
    address?: string
  } & ServiceOptions;

  declare type naver$maps$Service$ReverseServiceOptions = {
    location?: naver$maps$Coord | naver$maps$CoordLiteral
  } & ServiceOptions;

  declare interface naver$maps$Service$AddressItem {
    address: string;
    addrdetail: {
      country: string,
      sido: string,
      sigugun: string,
      dongmyun: string,
      rest: string
    };
  }

  declare interface naver$maps$Service$GeocodeResponse {
    result: {
      userquery: any,
      total: number,
      items: naver$maps$Service$AddressItem[]
    };
  }

  declare interface naver$maps$Service$ReverseGeocodeResponse {
    result: {
      userquery: string,
      total: number,
      items: naver$maps$Service$AddressItem[]
    };
  }

  declare var naver$maps$Service$CoordType: {|
    +LATLNG: 0, // 0
    +TM128: 1 // 1
  |};

  declare var naver$maps$Service$Encoding: {|
    +UTF_8: 0, // 0
    +EUC_KR: 1 // 1
  |};

  declare var naver$maps$Service$Status: {|
    +OK: 0, // 0
    +ERROR: 1 // 1
  |};

  declare function naver$maps$Service$fromAddrToCoord(): void;

  declare function naver$maps$Service$fromCoordToAddr(): void;

  declare function naver$maps$Service$geocode(
    options: naver$maps$Service$GeocodeServiceOptions,
    callback?: (
      status: naver$maps$Service$Status,
      response: naver$maps$Service$GeocodeResponse
    ) => void
  ): void;

  declare function naver$maps$Service$reverseGeocode(
    options: naver$maps$Service$ReverseServiceOptions,
    callback?: (
      status: naver$maps$Service$Status,
      response: naver$maps$Service$ReverseGeocodeResponse
    ) => void
  ): void;

  declare function naver$maps$TransCoord(): void;

  declare var npm$namespace$naver$maps$TransCoord: {
    fromEPSG3857ToLatLng: typeof naver$maps$TransCoord$fromEPSG3857ToLatLng,
    fromEPSG3857ToNaver: typeof naver$maps$TransCoord$fromEPSG3857ToNaver,
    fromEPSG3857ToTM128: typeof naver$maps$TransCoord$fromEPSG3857ToTM128,
    fromEPSG3857ToUTMK: typeof naver$maps$TransCoord$fromEPSG3857ToUTMK,
    fromLatLngToEPSG3857: typeof naver$maps$TransCoord$fromLatLngToEPSG3857,
    fromLatLngToNaver: typeof naver$maps$TransCoord$fromLatLngToNaver,
    fromLatLngToTM128: typeof naver$maps$TransCoord$fromLatLngToTM128,
    fromLatLngToUTMK: typeof naver$maps$TransCoord$fromLatLngToUTMK,
    fromNaverToEPSG3857: typeof naver$maps$TransCoord$fromNaverToEPSG3857,
    fromNaverToLatLng: typeof naver$maps$TransCoord$fromNaverToLatLng,
    fromNaverToTM128: typeof naver$maps$TransCoord$fromNaverToTM128,
    fromNaverToUTMK: typeof naver$maps$TransCoord$fromNaverToUTMK,
    fromTM128ToEPSG3857: typeof naver$maps$TransCoord$fromTM128ToEPSG3857,
    fromTM128ToLatLng: typeof naver$maps$TransCoord$fromTM128ToLatLng,
    fromTM128ToNaver: typeof naver$maps$TransCoord$fromTM128ToNaver,
    fromTM128ToUTMK: typeof naver$maps$TransCoord$fromTM128ToUTMK,
    fromUTMKToEPSG3857: typeof naver$maps$TransCoord$fromUTMKToEPSG3857,
    fromUTMKToLatLng: typeof naver$maps$TransCoord$fromUTMKToLatLng,
    fromUTMKToNaver: typeof naver$maps$TransCoord$fromUTMKToNaver,
    fromUTMKToTM128: typeof naver$maps$TransCoord$fromUTMKToTM128
  };
  declare function naver$maps$TransCoord$fromEPSG3857ToLatLng(
    coord: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$TransCoord$fromEPSG3857ToNaver(
    coord: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromEPSG3857ToTM128(
    coord: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromEPSG3857ToUTMK(
    coord: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromLatLngToEPSG3857(
    latlng: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromLatLngToNaver(
    latlng: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromLatLngToTM128(
    latlng: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromLatLngToUTMK(
    latlng: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromNaverToEPSG3857(
    n: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromNaverToLatLng(
    n: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$TransCoord$fromNaverToTM128(
    n: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromNaverToUTMK(
    n: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromTM128ToEPSG3857(
    tm128: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromTM128ToLatLng(
    tm128: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$TransCoord$fromTM128ToNaver(
    tm128: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromTM128ToUTMK(
    tm128: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromUTMKToEPSG3857(
    utmk: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromUTMKToLatLng(
    utmk: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$TransCoord$fromUTMKToNaver(
    utmk: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TransCoord$fromUTMKToTM128(
    utmk: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$Event(): void;

  declare var npm$namespace$naver$maps$Event: {
    addDOMListener: typeof naver$maps$Event$addDOMListener,
    addListener: typeof naver$maps$Event$addListener,
    clearInstanceListeners: typeof naver$maps$Event$clearInstanceListeners,
    clearListeners: typeof naver$maps$Event$clearListeners,
    forward: typeof naver$maps$Event$forward,
    hasListener: typeof naver$maps$Event$hasListener,
    once: typeof naver$maps$Event$once,
    removeDOMListener: typeof naver$maps$Event$removeDOMListener,
    removeListener: typeof naver$maps$Event$removeListener,
    resumeDispatch: typeof naver$maps$Event$resumeDispatch,
    stopDispatch: typeof naver$maps$Event$stopDispatch,
    trigger: typeof naver$maps$Event$trigger
  };
  declare function naver$maps$Event$addDOMListener(
    element: HTMLElement,
    eventName: string,
    listener: (event: any) => any
  ): void;

  declare function naver$maps$Event$addListener(
    target: any,
    eventName: string,
    listener: (event: any) => any
  ): naver$maps$MapEventListener;

  declare function naver$maps$Event$clearInstanceListeners(target: any): void;

  declare function naver$maps$Event$clearListeners(
    target: any,
    fromEventName: string
  ): void;

  declare function naver$maps$Event$forward(
    source: any,
    fromEventName: string,
    target: any,
    toEventName: string
  ): naver$maps$MapEventListener;

  declare function naver$maps$Event$hasListener(
    target: any,
    eventName: string
  ): boolean;

  declare function naver$maps$Event$once(
    target: any,
    eventName: string,
    listener: (event: any) => any
  ): naver$maps$MapEventListener;

  declare function naver$maps$Event$removeDOMListener(
    element: HTMLElement,
    eventName: string,
    listener: (event: any) => any
  ): void;

  declare function naver$maps$Event$removeDOMListener(
    listeners: naver$maps$DOMEventListener | naver$maps$DOMEventListener[]
  ): void;

  declare function naver$maps$Event$removeListener(
    listeners: naver$maps$MapEventListener | naver$maps$MapEventListener[]
  ): void;

  declare function naver$maps$Event$resumeDispatch(
    target: any,
    eventName: string
  ): void;

  declare function naver$maps$Event$stopDispatch(
    target: any,
    eventName: string
  ): void;

  declare function naver$maps$Event$trigger(
    target: any,
    eventName: string,
    eventObject?: any
  ): void;

  declare function naver$maps$EPSG3857(): void;

  declare var npm$namespace$naver$maps$EPSG3857: {
    fromCoordToPoint: typeof naver$maps$EPSG3857$fromCoordToPoint,
    fromLatLngToPoint: typeof naver$maps$EPSG3857$fromLatLngToPoint,
    fromPointToCoord: typeof naver$maps$EPSG3857$fromPointToCoord,
    fromPointToLatLng: typeof naver$maps$EPSG3857$fromPointToLatLng,
    getDestinationCoord: typeof naver$maps$EPSG3857$getDestinationCoord,
    getDistance: typeof naver$maps$EPSG3857$getDistance
  };
  declare function naver$maps$EPSG3857$fromCoordToPoint(
    coord: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$EPSG3857$fromLatLngToPoint(
    latlng: naver$maps$LatLng
  ): naver$maps$Point;

  declare function naver$maps$EPSG3857$fromPointToCoord(
    point: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$EPSG3857$fromPointToLatLng(
    point: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$EPSG3857$getDestinationCoord(
    fromLatLng: naver$maps$LatLng,
    angle: number,
    meter: number
  ): naver$maps$LatLng;

  declare function naver$maps$EPSG3857$getDistance(
    latlng1: naver$maps$LatLng,
    latlng2: naver$maps$LatLng
  ): number;

  declare function naver$maps$UTMK(): void;

  declare var npm$namespace$naver$maps$UTMK: {
    fromCoordToPoint: typeof naver$maps$UTMK$fromCoordToPoint,
    fromCoordToUTMK: typeof naver$maps$UTMK$fromCoordToUTMK,
    fromLatLngToPoint: typeof naver$maps$UTMK$fromLatLngToPoint,
    fromLatLngToUTMK: typeof naver$maps$UTMK$fromLatLngToUTMK,
    fromPointToCoord: typeof naver$maps$UTMK$fromPointToCoord,
    fromPointToLatLng: typeof naver$maps$UTMK$fromPointToLatLng,
    fromPointToUTMK: typeof naver$maps$UTMK$fromPointToUTMK,
    fromUTMKToCoord: typeof naver$maps$UTMK$fromUTMKToCoord,
    fromUTMKToLatLng: typeof naver$maps$UTMK$fromUTMKToLatLng,
    fromUTMKToPoint: typeof naver$maps$UTMK$fromUTMKToPoint,
    getDestinationCoord: typeof naver$maps$UTMK$getDestinationCoord,
    getDistance: typeof naver$maps$UTMK$getDistance,
    name: typeof naver$maps$UTMK$name,
    pointPerMeter: typeof naver$maps$UTMK$pointPerMeter
  };
  declare var naver$maps$UTMK$name: string;

  declare var naver$maps$UTMK$pointPerMeter: number;

  declare function naver$maps$UTMK$fromCoordToPoint(
    latlng: naver$maps$LatLng
  ): naver$maps$Point;

  declare function naver$maps$UTMK$fromCoordToUTMK(
    latlng: naver$maps$LatLng
  ): naver$maps$Point;

  declare function naver$maps$UTMK$fromLatLngToPoint(
    latlng: naver$maps$LatLng
  ): naver$maps$Point;

  declare function naver$maps$UTMK$fromLatLngToUTMK(
    latlng: naver$maps$LatLng
  ): naver$maps$Point;

  declare function naver$maps$UTMK$fromPointToCoord(
    point: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$UTMK$fromPointToLatLng(
    point: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$UTMK$fromPointToUTMK(
    point: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$UTMK$fromUTMKToCoord(
    utmk: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$UTMK$fromUTMKToLatLng(
    utmk: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$UTMK$fromUTMKToPoint(
    utmk: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$UTMK$getDestinationCoord(
    fromLatLng: naver$maps$LatLng,
    angle: number,
    meter: number
  ): naver$maps$LatLng;

  declare function naver$maps$UTMK$getDistance(
    latlng1: naver$maps$LatLng,
    latlng2: naver$maps$LatLng
  ): number;

  declare function naver$maps$UTMK_NAVER(): void;

  declare var npm$namespace$naver$maps$UTMK_NAVER: {
    fromCoordToNaver: typeof naver$maps$UTMK_NAVER$fromCoordToNaver,
    fromLatLngToNaver: typeof naver$maps$UTMK_NAVER$fromLatLngToNaver,
    fromNaverToCoord: typeof naver$maps$UTMK_NAVER$fromNaverToCoord,
    fromNaverToLatLng: typeof naver$maps$UTMK_NAVER$fromNaverToLatLng,
    fromNaverToPoint: typeof naver$maps$UTMK_NAVER$fromNaverToPoint,
    fromNaverToUTMK: typeof naver$maps$UTMK_NAVER$fromNaverToUTMK,
    fromPointToNaver: typeof naver$maps$UTMK_NAVER$fromPointToNaver,
    fromUTMKToNaver: typeof naver$maps$UTMK_NAVER$fromUTMKToNaver,
    name: typeof naver$maps$UTMK_NAVER$name,
    pointPerMeter: typeof naver$maps$UTMK_NAVER$pointPerMeter
  };
  declare var naver$maps$UTMK_NAVER$name: string;

  declare var naver$maps$UTMK_NAVER$pointPerMeter: number;

  declare function naver$maps$UTMK_NAVER$fromCoordToNaver(
    latlng: naver$maps$LatLng
  ): naver$maps$Point;

  declare function naver$maps$UTMK_NAVER$fromLatLngToNaver(
    latlng: naver$maps$LatLng
  ): naver$maps$Point;

  declare function naver$maps$UTMK_NAVER$fromNaverToCoord(
    naverPoint: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$UTMK_NAVER$fromNaverToLatLng(
    naverPoint: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$UTMK_NAVER$fromNaverToPoint(
    naverPoint: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$UTMK_NAVER$fromNaverToUTMK(
    naverPoint: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$UTMK_NAVER$fromPointToNaver(
    point: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$UTMK_NAVER$fromUTMKToNaver(
    utmk: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$EPSG3857Coord(): void;

  declare var npm$namespace$naver$maps$EPSG3857Coord: {
    fromCoordToLatLng: typeof naver$maps$EPSG3857Coord$fromCoordToLatLng,
    fromCoordToPoint: typeof naver$maps$EPSG3857Coord$fromCoordToPoint,
    fromEPSG3857ToLatLng: typeof naver$maps$EPSG3857Coord$fromEPSG3857ToLatLng,
    fromEPSG3857ToPoint: typeof naver$maps$EPSG3857Coord$fromEPSG3857ToPoint,
    fromLatLngToCoord: typeof naver$maps$EPSG3857Coord$fromLatLngToCoord,
    fromLatLngToEPSG3857: typeof naver$maps$EPSG3857Coord$fromLatLngToEPSG3857,
    fromPointToCoord: typeof naver$maps$EPSG3857Coord$fromPointToCoord,
    fromPointToEPSG3857: typeof naver$maps$EPSG3857Coord$fromPointToEPSG3857
  };
  declare function naver$maps$EPSG3857Coord$fromCoordToLatLng(
    coord: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$EPSG3857Coord$fromCoordToPoint(
    coord: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$EPSG3857Coord$fromEPSG3857ToLatLng(
    coord: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$EPSG3857Coord$fromEPSG3857ToPoint(
    coord: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$EPSG3857Coord$fromLatLngToCoord(
    coord: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$EPSG3857Coord$fromLatLngToEPSG3857(
    coord: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$EPSG3857Coord$fromPointToCoord(
    point: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$EPSG3857Coord$fromPointToEPSG3857(
    point: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TM128(): void;

  declare var npm$namespace$naver$maps$TM128: {
    fromCoordToPoint: typeof naver$maps$TM128$fromCoordToPoint,
    fromPointToCoord: typeof naver$maps$TM128$fromPointToCoord
  };
  declare function naver$maps$TM128$fromCoordToPoint(
    latlng: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$TM128$fromPointToCoord(
    point: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$TM128Coord(): void;

  declare var npm$namespace$naver$maps$TM128Coord: {
    fromCoordToLatLng: typeof naver$maps$TM128Coord$fromCoordToLatLng,
    fromCoordToPoint: typeof naver$maps$TM128Coord$fromCoordToPoint,
    fromLatLngToCoord: typeof naver$maps$TM128Coord$fromLatLngToCoord,
    fromLatLngToTM128: typeof naver$maps$TM128Coord$fromLatLngToTM128,
    fromPointToCoord: typeof naver$maps$TM128Coord$fromPointToCoord,
    fromPointToTM128: typeof naver$maps$TM128Coord$fromPointToTM128,
    fromTM128ToLatLng: typeof naver$maps$TM128Coord$fromTM128ToLatLng,
    fromTM128ToPoint: typeof naver$maps$TM128Coord$fromTM128ToPoint,
    fromTM128ToUTMK: typeof naver$maps$TM128Coord$fromTM128ToUTMK,
    fromUTMKToTM128: typeof naver$maps$TM128Coord$fromUTMKToTM128
  };
  declare function naver$maps$TM128Coord$fromCoordToLatLng(
    tm128: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$TM128Coord$fromCoordToPoint(
    tm128: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TM128Coord$fromLatLngToCoord(
    latlng: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$TM128Coord$fromLatLngToTM128(
    latlng: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$TM128Coord$fromPointToCoord(
    point: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TM128Coord$fromPointToTM128(
    point: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TM128Coord$fromTM128ToLatLng(
    tm128: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$TM128Coord$fromTM128ToPoint(
    tm128: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TM128Coord$fromTM128ToUTMK(
    tm128: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$TM128Coord$fromUTMKToTM128(
    utmk: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$UTMK_NAVERCoord(): void;

  declare var npm$namespace$naver$maps$UTMK_NAVERCoord: {
    fromCoordToLatLng: typeof naver$maps$UTMK_NAVERCoord$fromCoordToLatLng,
    fromCoordToPoint: typeof naver$maps$UTMK_NAVERCoord$fromCoordToPoint,
    fromLatLngToCoord: typeof naver$maps$UTMK_NAVERCoord$fromLatLngToCoord,
    fromPointToCoord: typeof naver$maps$UTMK_NAVERCoord$fromPointToCoord
  };
  declare function naver$maps$UTMK_NAVERCoord$fromCoordToLatLng(
    n: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$UTMK_NAVERCoord$fromCoordToPoint(
    n: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$UTMK_NAVERCoord$fromLatLngToCoord(
    latlng: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$UTMK_NAVERCoord$fromPointToCoord(
    point: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$UTMKCoord(): void;

  declare var npm$namespace$naver$maps$UTMKCoord: {
    fromCoordToLatLng: typeof naver$maps$UTMKCoord$fromCoordToLatLng,
    fromCoordToPoint: typeof naver$maps$UTMKCoord$fromCoordToPoint,
    fromLatLngToCoord: typeof naver$maps$UTMKCoord$fromLatLngToCoord,
    fromPointToCoord: typeof naver$maps$UTMKCoord$fromPointToCoord
  };
  declare function naver$maps$UTMKCoord$fromCoordToLatLng(
    utmk: naver$maps$Point
  ): naver$maps$LatLng;

  declare function naver$maps$UTMKCoord$fromCoordToPoint(
    utmk: naver$maps$Point
  ): naver$maps$Point;

  declare function naver$maps$UTMKCoord$fromLatLngToCoord(
    latlng: naver$maps$Coord
  ): naver$maps$Point;

  declare function naver$maps$UTMKCoord$fromPointToCoord(
    point: naver$maps$Point
  ): naver$maps$Point;
}
