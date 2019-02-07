declare module "navermaps" {
  declare var npm$namespace$maps: {
    onJSContentLoaded: typeof maps$onJSContentLoaded,
    NaverMapTypeOption: typeof maps$NaverMapTypeOption,
    drawing: typeof maps$drawing,
    visualization: typeof maps$visualization,
    Service: typeof maps$Service,
    TransCoord: typeof maps$TransCoord,
    Event: typeof maps$Event,
    EPSG3857: typeof maps$EPSG3857,
    UTMK: typeof maps$UTMK,
    UTMK_NAVER: typeof maps$UTMK_NAVER,
    EPSG3857Coord: typeof maps$EPSG3857Coord,
    TM128: typeof maps$TM128,
    TM128Coord: typeof maps$TM128Coord,
    UTMK_NAVERCoord: typeof maps$UTMK_NAVERCoord,
    UTMKCoord: typeof maps$UTMKCoord,
    jsContentLoaded: typeof maps$jsContentLoaded
  };

  /**
   * Types
   */
  declare type maps$PointArrayLiteral = [number, number];

  declare type maps$PointLiteral =
    | maps$PointArrayLiteral
    | maps$PointObjectLiteral;

  declare type maps$SizeArrayLiteral = [number, number];

  declare type maps$SizeLiteral =
    | maps$SizeArrayLiteral
    | maps$SizeObjectLiteral;

  declare type maps$LatLngLiteral =
    | maps$PointLiteral
    | maps$LatLngObjectLiteral;

  declare type maps$PointBoundsArrayLiteral = [number, number, number, number];

  declare type maps$PointBoundsLiteral =
    | maps$PointBoundsArrayLiteral
    | maps$PointBoundsObjectLiteral;

  declare type maps$LatLngBoundsLiteral =
    | maps$PointBoundsLiteral
    | maps$LatLngBoundsObjectLiteral;

  declare type maps$BoundsLiteral =
    | maps$PointBoundsLiteral
    | maps$LatLngBoundsLiteral;

  declare type maps$CoordLiteral = maps$PointLiteral | maps$LatLngLiteral;

  declare type maps$Coord = maps$Point | maps$LatLng;

  declare type maps$Bounds = maps$PointBounds | maps$LatLngBounds;

  declare type maps$DOMEvent = maps$Event;

  declare type maps$StylingFunction = (
    feature: maps$Feature
  ) => maps$StyleOptions;

  declare type maps$ArrayOfCoords = maps$Point[] | maps$LatLng[];

  declare type maps$ArrayOfBounds = maps$PointBounds[] | maps$LatLngBounds[];

  declare type maps$ArrayOfBoundsLiteral =
    | maps$PointBoundsLiteral[]
    | maps$LatLngBoundsLiteral[];

  declare type maps$forEachOverlayCallback = (
    overlay: maps$Marker | maps$Polyline | maps$Polygon,
    index: number
  ) => void;

  declare type maps$GeoJSON = any;

  declare type maps$GPX = any;

  declare type maps$KML = any;

  declare type maps$KVOArrayOfCoords = any;

  declare type maps$ArrayOfCoordsLiteral =
    | maps$PointLiteral[]
    | maps$LatLngLiteral[];

  declare type maps$strokeStyleType =
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

  declare type maps$strokeLineCapType = "butt" | "round" | "square";

  declare type maps$strokeLineJoinType = "miter" | "round " | "bevel";

  /**
   * Interfaces
   */
  declare interface maps$MapEventListener {
    eventName: string;
    listener: (event: any) => any;
    listenerId: string;
    target: any;
  }

  declare interface maps$PointObjectLiteral {
    x: number;
    y: number;
  }

  declare interface maps$SizeObjectLiteral {
    width: number;
    height: number;
  }

  declare interface maps$LatLngObjectLiteral {
    lat: number;
    lng: number;
  }

  declare interface maps$PointBoundsObjectLiteral {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  }

  declare interface maps$LatLngBoundsObjectLiteral {
    north: number;
    east: number;
    south: number;
    west: number;
  }

  declare type maps$MapSystemProjection = {
    factor(zoom: number): number,
    fromCoordToOffset(coord: maps$Coord): maps$Point,
    UTMKCoord$fromCoordToPoint(coord: maps$Coord): maps$Point,
    fromOffsetToCoord(offset: maps$Point): maps$Coord,
    fromOffsetToPoint(offset: maps$Point): maps$Point,
    UTMKCoord$fromPointToCoord(point: maps$Point): maps$Coord,
    fromPointToOffset(point: maps$Point): maps$Point,
    UTMK$getDestinationCoord(
      fromCoord: maps$Coord,
      angle: number,
      meter: number
    ): maps$Coord,
    UTMK$getDistance(coord1: maps$Coord, coord2: maps$Coord): number,
    getProjectionName(): number,
    scaleDown(
      operand: number | maps$Point | maps$Size,
      zoom: number
    ): number | maps$Point | maps$Size,
    scaleUp(
      operand: number | maps$Point | maps$Size,
      zoom: number
    ): number | maps$Point | maps$Size
  } & maps$KVO;

  declare interface maps$MapOptions {
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

  declare interface maps$MarkerOptions {
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

  declare interface maps$MapPanes {
    overlayLayer: HTMLElement;
    overlayImage: HTMLElement;
    floatPane: HTMLElement;
  }

  declare interface maps$InfoWindowOptions {
    position?: maps$Coord | maps$CoordLiteral;
    content: string | HTMLElement;
    zIndex?: number;
    maxWidth?: number;
    pixelOffset?: maps$Point | maps$PointLiteral;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    disableAutoPan?: boolean;
    disableAnchor?: boolean;
    anchorSkew?: boolean;
    anchorSize?: maps$Size | maps$SizeLiteral;
    anchorColor?: string;
  }

  declare interface maps$ImageTileOptions {
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

  declare interface maps$ImageMapTypeOptions {
    name: string;
    maxZoom: number;
    minZoom: number;
    projection: maps$Projection;
    tileSize?: maps$Size | maps$SizeLiteral;
    repeatX?: boolean;
    vendor?: string;
    provider?: maps$MapDataProvider[];
    uid?: string;
    darktheme?: boolean;
    getTileUrl?: () => any;
    tileSet?: string | string[];
  }

  declare interface maps$GroundOverlayOptions {
    clickable?: boolean;
    map?: maps$Map | null;
    opacity?: number;
  }

  declare interface maps$EllipseOptions {
    map?: maps$Map;
    bounds: maps$Bounds | maps$BoundsLiteral;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: maps$strokeStyleType;
    strokeLineCap?: maps$strokeLineCapType;
    strokeLineJoin?: maps$strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }

  declare interface maps$FeatureEvent {
    feature: maps$Feature;
  }

  declare interface maps$PointerEvent {
    coord: maps$Coord;
    point: maps$Point;
    offset: maps$Point;
    pointerEvent: maps$DOMEvent;
    feature: maps$Feature;
  }

  declare interface maps$PropertyEvent {
    feature: maps$Feature;
    name: string;
    oldValue: any;
    newValue: any;
  }

  declare interface maps$StyleOptions {
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

  declare interface maps$ControlOptions {
    position: maps$Position;
  }

  declare interface maps$CircleOptions {
    map?: maps$Map;
    center: maps$Coord | maps$CoordLiteral;
    radius?: number;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: maps$strokeStyleType;
    strokeLineCap?: maps$strokeLineCapType;
    strokeLineJoin?: maps$strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }

  declare interface maps$TileOptions {
    opacity?: number;
    transition?: boolean;
    offset?: maps$Point;
    zIndex?: number;
    size?: maps$Size;
    pane?: HTMLElement;
  }

  declare interface maps$TileIndex {
    xIndex: number;
    yIndex: number;
  }

  declare interface maps$CanvasTileOptions {
    imageData?: ImageData;
    opacity?: number;
    transition?: boolean;
    offset?: maps$Point;
    zIndex?: number;
    size?: maps$Size;
    pane?: HTMLElement;
  }

  declare interface maps$CanvasMapTypeOptions {
    name: string;
    maxZoom: number;
    minZoom: number;
    projection: maps$Projection;
    tileSize?: maps$Size | maps$SizeLiteral;
    repeatX?: boolean;
    vendor?: string;
    provider?: maps$MapDataProvider[];
    uid?: string;
    darktheme?: boolean;
    getTileData?: () => any;
  }

  declare interface maps$MapDataProvider {
    title: string;
    link?: string;
    bounds?:
      | maps$Bounds
      | maps$BoundsLiteral
      | maps$ArrayOfBounds
      | maps$ArrayOfBoundsLiteral;
  }

  declare interface maps$MapType {
    maxZoom: number;
    minZoom: number;
    name: string;
    projection: maps$Projection;
    tileSize: maps$Size;
    getTile(x: number, y: number, z: number): HTMLElement | maps$Tile;
  }

  declare interface maps$Projection {
    UTMKCoord$fromCoordToPoint(coord: maps$Coord): maps$Point;
    UTMKCoord$fromPointToCoord(point: maps$Point): maps$Coord;
  }

  declare interface maps$CadastralLayerOptions {
    overlayMap: boolean | void;
    zIndex: number | void;
    overlayMap: boolean | void;
    zIndex: number | void;
  }

  declare interface maps$AroundControlOptions {
    position: maps$Position;
  }

  declare interface maps$NaverImageMapTypeOptions {
    maxZoom?: number;
    minZoom?: number;
    projection?: maps$Projection;
    tileSize?: maps$Size;
    hd?: string;
  }

  declare interface maps$LogoControlOptions {
    position: maps$Position;
  }

  declare interface maps$MapDataControlOptions {
    position: maps$Position;
  }

  declare interface maps$MapTypeControlOptions {
    mapTypeIds: maps$MapTypeId[] | null;
    position: maps$Position;
    style: maps$MapTypeControlStyle;
  }

  declare interface maps$ScaleControlOptions {
    position: maps$Position;
  }

  declare interface maps$ZoomControlOptions {
    position: maps$Position;
    style: maps$ZoomControlStyle;
    legendDisabled: boolean;
  }

  declare interface maps$LayerOptions {
    hd: boolean;
    overlayMap: boolean | void;
    zIndex: number | void;
  }

  declare interface maps$StreetLayerOptions {
    overlayMap: boolean | void;
    zIndex: number | void;
  }

  declare interface maps$TrafficLayerOptions {
    interval: number;
    overlayMap: boolean | void;
    zIndex: number | void;
  }

  declare interface maps$HtmlIcon {
    content: string | HTMLElement;
    size?: maps$Size | maps$SizeLiteral;
    anchor?: maps$Point | maps$PointLiteral | maps$Position;
  }

  declare interface maps$ImageIcon {
    url: string;
    size?: maps$Size | maps$SizeLiteral;
    scaledSize?: maps$Size | maps$SizeLiteral;
    origin?: maps$Point | maps$PointLiteral;
    anchor?: maps$Point | maps$PointLiteral | maps$Position;
  }

  declare interface maps$MarkerShape {
    coords: any[];
    type: string;
  }

  declare interface maps$SymbolIcon {
    path: maps$SymbolPath | maps$Point[] | maps$PointLiteral[];
    style?: maps$SymbolStyle;
    radius?: number;
    fillColor?: string;
    fillOpacity?: number;
    strokeColor?: string;
    strokeWeight?: number;
    strokeOpacity?: number;
    anchor?: maps$Point | maps$PointLiteral | maps$Position;
  }

  declare interface maps$PolygonOptions {
    map?: maps$Map;
    paths:
      | maps$ArrayOfCoords[]
      | maps$KVOArrayOfCoords[]
      | maps$ArrayOfCoordsLiteral[];
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: maps$strokeStyleType;
    strokeLineCap?: maps$strokeLineCapType;
    strokeLineJoin?: maps$strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }

  declare interface maps$PolylineOptions {
    map?: maps$Map;
    path:
      | maps$ArrayOfCoords
      | maps$KVOArrayOfCoords
      | maps$ArrayOfCoordsLiteral;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: maps$strokeStyleType;
    strokeLineCap?: maps$strokeLineCapType;
    strokeLineJoin?: maps$strokeLineJoinType;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
    startIcon?: maps$PointingIcon;
    startIconSize?: number;
    endIcon?: maps$PointingIcon;
    endIconSize?: number;
  }

  declare interface maps$RectangleOptions {
    map?: maps$Map;
    bounds: maps$Bounds | maps$BoundsLiteral;
    strokeWeight?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    strokeStyle?: maps$strokeStyleType;
    strokeLineCap?: maps$strokeLineCapType;
    strokeLineJoin?: maps$strokeLineJoinType;
    fillColor?: string;
    fillOpacity?: number;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
  }

  declare interface maps$PanoramaOptions {
    size: maps$Size | maps$SizeLiteral;
    panoId: string;
    position: maps$LatLng | maps$LatLngLiteral;
    pov: maps$PanoramaPov;
    visible: boolean;
    minScale: number;
    maxScale: number;
    minZoom: number;
    maxZoom: number;
    logoControl: boolean;
    logoControlOptions: maps$LogoControlOptions;
    zoomControl: boolean;
    zoomControlOptions: maps$ZoomControlOptions;
    aroundControl: boolean;
    aroundControlOptions: maps$AroundControlOptions;
  }

  declare interface maps$PanoramaPov {
    pan: number;
    tilt: number;
    fov: number;
  }

  declare interface maps$PanoramaLocation {
    panoId: string;
    title: string;
    address: string;
    coord: maps$LatLng;
    photodate: string;
  }

  declare interface maps$DOMEventListener {
    eventName: string;
    listener: () => any;
    target: HTMLElement;
  }

  declare interface maps$Margin {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }

  declare interface maps$TransitionOptions {
    duration?: number;
    easing?: string;
  }

  /**
   * Enums
   */
  declare class maps$MapTypeControlStyle {
    constructor(...args: empty): mixed;
    static +BUTTON: Class<maps$MapTypeControlStyle__BUTTON> &
      maps$MapTypeControlStyle__BUTTON &
      0; // 0
    static +DROPDOWN: Class<maps$MapTypeControlStyle__DROPDOWN> &
      maps$MapTypeControlStyle__DROPDOWN &
      1; // 1
  }

  declare class maps$MapTypeControlStyle__BUTTON
    mixins maps$MapTypeControlStyle {}
  declare class maps$MapTypeControlStyle__DROPDOWN
    mixins maps$MapTypeControlStyle {}

  declare class maps$ZoomControlStyle {
    constructor(...args: empty): mixed;
    static +LARGE: Class<maps$ZoomControlStyle__LARGE> &
      maps$ZoomControlStyle__LARGE &
      0; // 0
    static +SMALL: Class<maps$ZoomControlStyle__SMALL> &
      maps$ZoomControlStyle__SMALL &
      1; // 1
  }

  declare class maps$ZoomControlStyle__LARGE mixins maps$ZoomControlStyle {}
  declare class maps$ZoomControlStyle__SMALL mixins maps$ZoomControlStyle {}

  /**
   * Members
   */
  declare class maps$Animation {
    constructor(...args: empty): mixed;
    static +BOUNCE: Class<maps$Animation__BOUNCE> & maps$Animation__BOUNCE & 1; // 1
    static +DROP: Class<maps$Animation__DROP> & maps$Animation__DROP & 1; // 1
  }

  declare class maps$Animation__BOUNCE mixins maps$Animation {}
  declare class maps$Animation__DROP mixins maps$Animation {}

  declare var maps$jsContentLoaded: boolean;

  declare type maps$MapTypeId = string;

  declare var npm$namespace$MapTypeId: {
    NORMAL: typeof MapTypeId$NORMAL,
    TERRAIN: typeof MapTypeId$TERRAIN,
    SATELLITE: typeof MapTypeId$SATELLITE,
    HYBRID: typeof MapTypeId$HYBRID
  };
  declare var MapTypeId$NORMAL: string;

  declare var MapTypeId$TERRAIN: string;

  declare var MapTypeId$SATELLITE: string;

  declare var MapTypeId$HYBRID: string;

  declare function maps$onJSContentLoaded(...args: any[]): any;

  declare class maps$PointingIcon {
    constructor(...args: empty): mixed;
    static +OPEN_ARROW: Class<maps$PointingIcon__OPEN_ARROW> &
      maps$PointingIcon__OPEN_ARROW &
      1; // 1
    static +BLOCK_ARROW: Class<maps$PointingIcon__BLOCK_ARROW> &
      maps$PointingIcon__BLOCK_ARROW &
      1; // 1
    static +CIRCLE: Class<maps$PointingIcon__CIRCLE> &
      maps$PointingIcon__CIRCLE &
      2; // 2
    static +DIAMOND: Class<maps$PointingIcon__DIAMOND> &
      maps$PointingIcon__DIAMOND &
      3; // 3
  }

  declare class maps$PointingIcon__OPEN_ARROW mixins maps$PointingIcon {}
  declare class maps$PointingIcon__BLOCK_ARROW mixins maps$PointingIcon {}
  declare class maps$PointingIcon__CIRCLE mixins maps$PointingIcon {}
  declare class maps$PointingIcon__DIAMOND mixins maps$PointingIcon {}

  declare class maps$Position {
    constructor(...args: empty): mixed;
    static +CENTER: Class<maps$Position__CENTER> & maps$Position__CENTER & 0; // 0
    static +TOP_LEFT: Class<maps$Position__TOP_LEFT> &
      maps$Position__TOP_LEFT &
      1; // 1
    static +TOP_CENTER: Class<maps$Position__TOP_CENTER> &
      maps$Position__TOP_CENTER &
      2; // 2
    static +TOP_RIGHT: Class<maps$Position__TOP_RIGHT> &
      maps$Position__TOP_RIGHT &
      3; // 3
    static +LEFT_CENTER: Class<maps$Position__LEFT_CENTER> &
      maps$Position__LEFT_CENTER &
      4; // 4
    static +LEFT_TOP: Class<maps$Position__LEFT_TOP> &
      maps$Position__LEFT_TOP &
      5; // 5
    static +LEFT_BOTTOM: Class<maps$Position__LEFT_BOTTOM> &
      maps$Position__LEFT_BOTTOM &
      6; // 6
    static +RIGHT_TOP: Class<maps$Position__RIGHT_TOP> &
      maps$Position__RIGHT_TOP &
      7; // 7
    static +RIGHT_CENTER: Class<maps$Position__RIGHT_CENTER> &
      maps$Position__RIGHT_CENTER &
      8; // 8
    static +RIGHT_BOTTOM: Class<maps$Position__RIGHT_BOTTOM> &
      maps$Position__RIGHT_BOTTOM &
      9; // 9
    static +BOTTOM_LEFT: Class<maps$Position__BOTTOM_LEFT> &
      maps$Position__BOTTOM_LEFT &
      10; // 10
    static +BOTTOM_CENTER: Class<maps$Position__BOTTOM_CENTER> &
      maps$Position__BOTTOM_CENTER &
      11; // 11
    static +BOTTOM_RIGHT: Class<maps$Position__BOTTOM_RIGHT> &
      maps$Position__BOTTOM_RIGHT &
      12; // 12
  }

  declare class maps$Position__CENTER mixins maps$Position {}
  declare class maps$Position__TOP_LEFT mixins maps$Position {}
  declare class maps$Position__TOP_CENTER mixins maps$Position {}
  declare class maps$Position__TOP_RIGHT mixins maps$Position {}
  declare class maps$Position__LEFT_CENTER mixins maps$Position {}
  declare class maps$Position__LEFT_TOP mixins maps$Position {}
  declare class maps$Position__LEFT_BOTTOM mixins maps$Position {}
  declare class maps$Position__RIGHT_TOP mixins maps$Position {}
  declare class maps$Position__RIGHT_CENTER mixins maps$Position {}
  declare class maps$Position__RIGHT_BOTTOM mixins maps$Position {}
  declare class maps$Position__BOTTOM_LEFT mixins maps$Position {}
  declare class maps$Position__BOTTOM_CENTER mixins maps$Position {}
  declare class maps$Position__BOTTOM_RIGHT mixins maps$Position {}

  declare class maps$SymbolPath {
    constructor(...args: empty): mixed;
    static +BACKWARD_CLOSED_ARROW: Class<maps$SymbolPath__BACKWARD_CLOSED_ARROW> &
      maps$SymbolPath__BACKWARD_CLOSED_ARROW &
      1; // 1
    static +BACKWARD_OPEN_ARROW: Class<maps$SymbolPath__BACKWARD_OPEN_ARROW> &
      maps$SymbolPath__BACKWARD_OPEN_ARROW &
      1; // 1
    static +CIRCLE: Class<maps$SymbolPath__CIRCLE> &
      maps$SymbolPath__CIRCLE &
      2; // 2
    static +FORWARD_CLOSED_ARROW: Class<maps$SymbolPath__FORWARD_CLOSED_ARROW> &
      maps$SymbolPath__FORWARD_CLOSED_ARROW &
      3; // 3
    static +FORWARD_OPEN_ARROW: Class<maps$SymbolPath__FORWARD_OPEN_ARROW> &
      maps$SymbolPath__FORWARD_OPEN_ARROW &
      4; // 4
  }

  declare class maps$SymbolPath__BACKWARD_CLOSED_ARROW mixins maps$SymbolPath {}
  declare class maps$SymbolPath__BACKWARD_OPEN_ARROW mixins maps$SymbolPath {}
  declare class maps$SymbolPath__CIRCLE mixins maps$SymbolPath {}
  declare class maps$SymbolPath__FORWARD_CLOSED_ARROW mixins maps$SymbolPath {}
  declare class maps$SymbolPath__FORWARD_OPEN_ARROW mixins maps$SymbolPath {}

  declare type maps$SymbolStyle = string;

  declare var npm$namespace$SymbolStyle: {
    CIRCLE: typeof SymbolStyle$CIRCLE,
    PATH: typeof SymbolStyle$PATH,
    CLOSED_PATH: typeof SymbolStyle$CLOSED_PATH
  };
  declare var SymbolStyle$CIRCLE: string;

  declare var SymbolStyle$PATH: string;

  declare var SymbolStyle$CLOSED_PATH: string;

  /**
   * Classes
   */
  declare class maps$KVO {
    constructor(): this;
    addListener(eventName: any, listener: () => any): maps$MapEventListener;
    addListenerOnce(eventName: any, listener: () => any): maps$MapEventListener;
    bindTo(key: string, target: maps$KVO, targetKey?: string): void;
    clearListeners(eventName: string): void;
    get(key: string): any;
    hasListener(eventName: string): boolean;
    removeListener(
      listeners: maps$MapEventListener | maps$MapEventListener[]
    ): void;
    set(key: string, value: any, silently?: boolean): void;
    setValues(properties: any): void;
    trigger(eventName: string, eventObject?: any): void;
    unbind(key: string): void;
    unbindAll(): void;
  }

  declare class maps$KVOArray mixins maps$KVO {
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

  declare class maps$Point {
    constructor(x: number, y: number): this;
    add(point: maps$Coord | maps$PointLiteral): maps$Point;
    add(x: number, y: number): maps$Point;
    ceil(): maps$Point;
    clone(): maps$Point;
    div(point: maps$Coord | maps$PointLiteral): void;
    div(x: number, y: number): maps$Point;
    equals(point: maps$Point): boolean;
    floor(): maps$Point;
    mul(point: maps$Coord | maps$PointLiteral): maps$Point;
    mul(x: number, y: number): maps$Point;
    round(): maps$Point;
    sub(point: maps$Coord | maps$PointLiteral): maps$Point;
    sub(x: number, y: number): maps$Point;
    toString(): string;
  }

  declare class maps$Size {
    width: number;
    height: number;
    constructor(width: number, height: number): this;
    add(size: maps$Size | maps$SizeLiteral): maps$Size;
    add(width: number, height: number): maps$Size;
    ceil(): maps$Size;
    clone(): maps$Size;
    div(width: number, height: number): maps$Size;
    div(size: maps$Size | maps$SizeLiteral): maps$Size;
    equals(size: maps$Size | maps$SizeLiteral): boolean;
    floor(): maps$Size;
    mul(size: maps$Size | maps$SizeLiteral): maps$Size;
    mul(width: number, height: number): maps$Size;
    round(): maps$Size;
    sub(size: maps$Size | maps$SizeLiteral): maps$Size;
    sub(width: number, height: number): maps$Size;
    toString(): string;
  }

  declare class maps$PointBounds {
    constructor(minPoint: maps$Point, maxPoint: maps$Point): this;
    static bounds(
      point: maps$Coord | maps$PointLiteral,
      pointN: maps$Coord | maps$PointLiteral
    ): maps$PointBounds;
    clone(): maps$PointBounds;
    equals(bounds: maps$Bounds | maps$PointBoundsLiteral): boolean;
    extend(point: maps$Coord | maps$PointLiteral): maps$PointBounds;
    getCenter(): maps$Point;
    getMax(): maps$Point;
    getMin(): maps$Point;
    hasBounds(bounds: maps$Bounds | maps$PointBoundsLiteral): boolean;
    hasPoint(point: maps$Coord | maps$PointLiteral): boolean;
    intersects(bounds: maps$Bounds | maps$PointBoundsLiteral): boolean;
    maxX(): number;
    maxY(): number;
    minX(): number;
    minY(): number;
    toString(): string;
    union(bounds: maps$Bounds | maps$PointBoundsLiteral): maps$PointBounds;
  }

  declare class maps$LatLng mixins maps$Point {
    constructor(lat: number, lng: number): this;
    clone(): maps$LatLng;
    destinationPoint(angle: number, meter: number): maps$LatLng;
    equals(point: maps$Coord | maps$LatLngLiteral): boolean;
    lat(): number;
    lng(): number;
    toPoint(): maps$Point;
    toString(): string;
  }

  declare class maps$LatLngBounds mixins maps$PointBounds {
    constructor(sw: maps$LatLng, ne: maps$LatLng): this;
    static bounds(
      latlng: maps$Coord | maps$LatLngLiteral,
      latlngN: maps$Coord | maps$LatLngLiteral
    ): maps$LatLngBounds;
    clone(): maps$LatLngBounds;
    east(): number;
    equals(bounds: maps$Bounds | maps$LatLngBoundsLiteral): boolean;
    extend(latlng: maps$Coord | maps$LatLngLiteral): maps$LatLngBounds;
    getCenter(): maps$LatLng;
    getNE(): maps$LatLng;
    getSW(): maps$LatLng;
    hasLatLng(latlng: maps$Coord | maps$LatLngLiteral): boolean;
    intersects(bounds: maps$Bounds | maps$LatLngBoundsLiteral): boolean;
    north(): number;
    south(): number;
    toPointBounds(): maps$PointBounds;
    union(bounds: maps$Bounds | maps$LatLngBoundsLiteral): maps$LatLngBounds;
    west(): number;
  }

  declare class maps$Map mixins maps$KVO {
    controls: any;
    data: any;
    layers: any;
    mapTypes: any;
    mapSystemProjection: any;
    constructor(
      mapDiv: string | HTMLElement,
      mapOptions?: maps$MapOptions
    ): this;
    addPane(name: string, elementOrIndex: HTMLElement | number): void;
    destory(): void;
    fitBounds(bounds: any, margin?: any): void;
    getBounds(): maps$Bounds;
    getCenter(): maps$Coord;
    getCenterPoint(): maps$Coord;
    getElement(): HTMLElement;
    getMapTypeId(): string;
    getOptions(key?: string): any;
    getPanes(): maps$MapPanes;
    getPrimitiveProjection(): maps$Projection;
    getProjection(): maps$MapSystemProjection;
    getSize(): maps$Size;
    getZoom(): number;
    morph(
      coord: maps$Coord | maps$CoordLiteral,
      zoom?: number,
      transitionOptions?: maps$TransitionOptions
    ): void;
    panBy(offset: maps$Point | maps$PointLiteral): void;
    panTo(
      coord: maps$Coord | maps$CoordLiteral,
      transitionOptions: maps$TransitionOptions
    ): void;
    panToBounds(
      bounds: maps$Bounds | maps$BoundsLiteral,
      transitionOptions: maps$TransitionOptions,
      margin?: maps$Margin
    ): void;
    refresh(noEffect?: boolean): void;
    removePane(name: string): void;
    setCenter(center: maps$Coord | maps$CoordLiteral): void;
    setCenterPoint(point: maps$Point | maps$PointLiteral): void;
    setMapTypeId(mapTypeId: string): void;
    setOptions(newOptionsOrKey: any, value?: any): void;
    setSize(size: maps$Size | maps$SizeLiteral): void;
    setZoom(zoom: number, effect?: boolean): void;
    updateBy(coord: maps$Coord | maps$CoordLiteral, zoom: number): void;
    zoomBy(
      deltaZoom: number,
      zoomOrigin?: maps$Coord | maps$CoordLiteral,
      effect?: boolean
    ): void;
  }

  declare class maps$Tile mixins maps$KVO {
    constructor(element: HTMLElement, tileOptions?: maps$TileOptions): this;
    appendTo(parentNode: HTMLElement): void;
    cancelFadeIn(): void;
    destroy(): void;
    fadeIn(callback: () => any, startOpacity?: number): void;
    getElement(): HTMLElement;
    getOffset(): maps$Point;
    getOpacity(): number;
    getSize(): maps$Size;
    getTileIndex(): maps$TileIndex;
    getZIndex(): number;
    hide(): void;
    load(tileOptions?: maps$TileOptions): void;
    remove(): void;
    reset(
      mapType: maps$MapType,
      zoom: number,
      tileOptions?: maps$TileOptions
    ): void;
    setBlank(): void;
    setOffset(offset: maps$Point): void;
    setOffset(x: number, y: number): void;
    setOpacity(opacity: number): void;
    setSize(size: maps$Size): void;
    setTileIndex(tileIndex: maps$TileIndex): void;
    setZIndex(zIndex: number): void;
    show(): void;
  }

  declare class maps$CanvasTile mixins maps$Tile {
    constructor(canvasTileOptions: maps$CanvasTileOptions): this;
  }

  declare class maps$ImageTile mixins maps$Tile {
    constructor(imageTileOptions: maps$ImageTileOptions): this;
    getImageElements(): HTMLElement[];
    getUrls(): string[];
    setUrls(urls: string[]): void;
  }

  declare class maps$CanvasMapType mixins maps$MapType {
    maxZoom: number;
    minZoom: number;
    name: string;
    projection: maps$Projection;
    tileSize: maps$Size;
    constructor(canvasMapTypeOptions: maps$CanvasMapTypeOptions): this;
    getMapTypeOptions(): maps$CanvasMapTypeOptions;
    getMaxZoom(): number;
    getMinZoom(): number;
    getName(): string;
    getTile(x: number, y: number, z: number): maps$CanvasTile;
    getTileData(x: number, y: number, z: number): ImageData;
    setMapTypeOptions(canvasMapTypeOptions: maps$CanvasMapTypeOptions): void;
  }

  declare class maps$ImageMapType mixins maps$MapType {
    maxZoom: number;
    minZoom: number;
    name: string;
    projection: maps$Projection;
    tileSize: maps$Size;
    constructor(imageMapTypeOptions: maps$ImageMapTypeOptions): this;
    getMapTypeOptions(): maps$ImageMapTypeOptions;
    getMaxZoom(): number;
    getMinZoom(): number;
    getName(): string;
    getTile(x: number, y: number, z: number): maps$ImageTile;
    getTileUrls(x: number, y: number, z: number): string[];
    setMapTypeOptions(imageMapTypeOptions: maps$ImageMapTypeOptions): void;
  }

  declare class maps$MapTypeRegistry mixins maps$KVO {
    constructor(mapTypeInfo?: any, defaultMapTypeId?: string): this;
    getPreviousTypeId(): string;
    getSelectedType(): maps$MapType;
    getSelectedTypeId(): string;
    getTypeIds(): string[];
    set(mapTypeId: string, mapType: maps$MapType): void;
    setSelectedTypeId(mapTypeId: string): void;
  }

  declare function maps$NaverMapTypeOption(
    options: maps$NaverImageMapTypeOptions
  ): void;

  declare var npm$namespace$NaverMapTypeOption: {
    getBicycleLayer: typeof NaverMapTypeOption$getBicycleLayer,
    getBlankMap: typeof NaverMapTypeOption$getBlankMap,
    getCadastralLayer: typeof NaverMapTypeOption$getCadastralLayer,
    getHybridMap: typeof NaverMapTypeOption$getHybridMap,
    getMapTypes: typeof NaverMapTypeOption$getMapTypes,
    getNormalLabelLayer: typeof NaverMapTypeOption$getNormalLabelLayer,
    getNormalMap: typeof NaverMapTypeOption$getNormalMap,
    getSatelliteLabelLayer: typeof NaverMapTypeOption$getSatelliteLabelLayer,
    getSatelliteMap: typeof NaverMapTypeOption$getSatelliteMap,
    getStreetLayer: typeof NaverMapTypeOption$getStreetLayer,
    getTerrainMap: typeof NaverMapTypeOption$getTerrainMap,
    getTrafficLayer: typeof NaverMapTypeOption$getTrafficLayer,
    getVectorMap: typeof NaverMapTypeOption$getVectorMap,
    getWorldMap: typeof NaverMapTypeOption$getWorldMap
  };
  declare function NaverMapTypeOption$getBicycleLayer(
    opts: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getBlankMap(
    opts: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getCadastralLayer(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getHybridMap(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getMapTypes(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$MapTypeRegistry;

  declare function NaverMapTypeOption$getNormalLabelLayer(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getNormalMap(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getSatelliteLabelLayer(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getSatelliteMap(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getStreetLayer(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getTerrainMap(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getTrafficLayer(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getVectorMap(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare function NaverMapTypeOption$getWorldMap(
    opts?: maps$NaverImageMapTypeOptions
  ): maps$ImageMapType;

  declare class maps$CustomControl mixins maps$KVO {
    constructor(html: string, maps$ControlOptions: maps$ControlOptions): this;
    getElement(): HTMLElement;
    getMap(): maps$Map | null;
    getOptions(key?: string): any;
    html(html?: string): string | void;
    setMap(map?: maps$Map | null): void;
    setOptions(newOptions: maps$ControlOptions): void;
    setPosition(position: maps$Position): void;
  }

  declare class maps$LogoControl mixins maps$CustomControl {
    constructor(maps$LogoControlOptions: maps$LogoControlOptions): this;
  }

  declare class maps$MapDataControl mixins maps$CustomControl {
    constructor(maps$MapDataControlOptions: maps$MapDataControlOptions): this;
  }

  declare class maps$MapTypeControl mixins maps$CustomControl {
    constructor(maps$MapTypeControlOptions: maps$MapTypeControlOptions): this;
  }

  declare class maps$ScaleControl mixins maps$CustomControl {
    constructor(maps$ScaleControlOptions: maps$ScaleControlOptions): this;
  }

  declare class maps$ZoomControl mixins maps$CustomControl {
    constructor(maps$ZoomControlOptions: maps$ZoomControlOptions): this;
  }

  declare class maps$Layer mixins maps$KVO {
    constructor(
      name: string,
      maps$MapTypeRegistry: maps$MapTypeRegistry,
      options: maps$LayerOptions
    ): this;
    getLayerType(): maps$MapType;
    getLayerTypeId(): string;
    getMap(): maps$Map | null;
    getOpacity(): number;
    getPaneElement(): HTMLElement;
    refresh(noEffect?: boolean): void;
    setLayerTypeId(typeId: string): void;
    setMap(map: maps$Map | null): void;
    setOpacity(opacity: number): void;
  }

  declare class maps$LabelLayer mixins maps$Layer {
    constructor(name: string, registry: maps$ImageMapType, option: any): this;
  }

  declare class maps$CadastralLayer mixins maps$LabelLayer {
    name: string;
    constructor(option?: maps$CadastralLayerOptions): this;
  }

  declare class maps$StreetLayer mixins maps$LabelLayer {
    name: string;
    constructor(option?: maps$StreetLayerOptions): this;
  }

  declare class maps$TrafficLayer mixins maps$LabelLayer {
    name: string;
    constructor(option?: maps$TrafficLayerOptions): this;
    endAutoRefresh(): void;
    startAutoRefresh(): void;
  }

  declare class maps$Data mixins maps$KVO {
    constructor(): this;
    addFeature(feature: maps$Feature, autoStyle: boolean): void;
    addGeoJson(geojson: maps$GeoJSON, autoStyle: boolean): void;
    addGpx(xmlDoc: maps$GPX, autoStyle: boolean): void;
    addKml(xmlDoc: maps$KML, autoStyle: boolean): void;
    forEach(callback: (feature: maps$Feature, index: number) => void): void;
    getAllFeature(): maps$Feature[];
    getFeatureById(id: string | number): maps$Feature;
    getMap(): maps$Map | null;
    getStyle(): maps$StyleOptions | maps$StylingFunction;
    overrideStyle(feature: maps$Feature, style: maps$StyleOptions): void;
    removeFeature(feature: maps$Feature): void;
    removeGeoJson(geojson: maps$GeoJSON): void;
    revertStyle(feature: maps$Feature): void;
    setMap(map: maps$Map | null): void;
    setStyle(style: maps$StyleOptions | maps$StylingFunction): void;
    toGeoJson(): maps$GeoJSON;
  }

  declare class maps$Feature mixins maps$KVO {
    constructor(rawFeature: any): this;
    forEachOverlay(callback: maps$forEachOverlayCallback): void;
    getBounds(): maps$Bounds;
    getGeometries(): maps$Geometry[];
    getId(): string;
    getOverlays(): maps$Marker[] | maps$Polyline[] | maps$Polygon[];
    getProperty(name: string): any;
    getRaw(): maps$GeoJSON;
    setProperty(name: string, value: any): void;
    setStyle(styleOptions: maps$StyleOptions): void;
  }

  declare class maps$Geometry mixins maps$KVO {
    constructor(rawGeometry: any): this;
    getCoords(): maps$ArrayOfCoords;
    getType(): string;
  }

  declare class maps$OverlayView mixins maps$KVO {
    draw(): void;
    getContainerTopLeft(): maps$Point;
    getMap(): maps$Map | null;
    getPanes(): maps$MapPanes;
    getProjection(): maps$MapSystemProjection;
    onAdd(): any;
    onRemove(): any;
    setMap(map: maps$Map | null): void;
  }

  declare class maps$Circle mixins maps$OverlayView {
    constructor(options?: maps$CircleOptions): this;
    getAreaSize(): number;
    getBounds(): maps$Bounds;
    getCenter(): maps$Coord;
    getClickable(): boolean;
    getDrawingRect(): maps$Bounds;
    getOptions(key?: string): maps$CircleOptions;
    getRadius(): number;
    getStyles(key: string): maps$CircleOptions;
    getVisible(): boolean;
    getZIndex(): number;
    setCenter(center: maps$Coord | maps$CoordLiteral): void;
    setClickable(clickable: boolean): void;
    setOptions(key: string, value: any): void;
    setOptions(options: maps$CircleOptions): void;
    setRadius(radius: number): void;
    setStyles(key: string, value: string): void;
    setStyles(options: maps$CircleOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class maps$Ellipse mixins maps$OverlayView {
    constructor(options?: maps$EllipseOptions): this;
    getAreaSize(): number;
    getBounds(): maps$Bounds;
    getClickable(): boolean;
    getDrawingRect(): maps$Bounds;
    getOptions(key?: string): maps$EllipseOptions;
    getStyles(key?: string): maps$EllipseOptions;
    getVisible(): boolean;
    getZIndex(): number;
    setBounds(bounds: maps$Bounds | maps$BoundsLiteral): void;
    setOptions(options: maps$EllipseOptions): void;
    setOptions(key: string, value: any): void;
    setStyles(options: maps$EllipseOptions): void;
    setStyles(key: string, value: any): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class maps$GroundOverlay mixins maps$OverlayView {
    constructor(
      url: string,
      bounds: maps$Bounds | maps$BoundsLiteral,
      options?: maps$GroundOverlayOptions
    ): this;
    getBounds(): maps$Bounds;
    getOpacity(): number;
    getUrl(): string;
    setOpacity(opacity: number): void;
  }

  declare class maps$InfoWindow mixins maps$OverlayView {
    constructor(options: maps$InfoWindowOptions): this;
    close(): void;
    getContent(): HTMLElement;
    getOptions(key?: string): maps$InfoWindowOptions;
    getPosition(): maps$Coord;
    getZIndex(): number;
    open(
      map: maps$Map,
      anchor: maps$Coord | maps$CoordLiteral | maps$Marker
    ): void;
    setContent(content: string | HTMLElement): void;
    setOptions(options: maps$InfoWindowOptions): void;
    setPosition(position: maps$Coord | maps$CoordLiteral): void;
    setZIndex(zIndex: number): void;
  }

  declare class maps$Marker mixins maps$OverlayView {
    constructor(options: maps$MarkerOptions): this;
    draw(): void;
    getAnimation(): maps$Animation;
    getClickable(): boolean;
    getCursor(): string;
    getDraggable(): boolean;
    getDrawingRect(): maps$Bounds;
    getIcon(): maps$ImageIcon | maps$SymbolIcon | maps$HtmlIcon;
    getOptions(key?: string): maps$MarkerOptions;
    getPosition(): maps$Coord;
    getShape(): maps$MarkerShape;
    getTitle(): string;
    getVisible(): boolean;
    getZIndex(): number;
    onAdd(): void;
    onRemove(): void;
    setAnimation(animation: maps$Animation): void;
    setClickable(clickable: boolean): void;
    setCursor(cursor: string): void;
    setDraggable(draggable: boolean): void;
    setIcon(
      icon: string | maps$ImageIcon | maps$SymbolIcon | maps$HtmlIcon
    ): void;
    setOptions(options: maps$MarkerOptions): void;
    setPosition(position: maps$Coord | maps$CoordLiteral): void;
    setShape(shape: maps$MarkerShape): void;
    setTitle(title: string): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class maps$Polygon mixins maps$OverlayView {
    constructor(options?: maps$PolygonOptions): this;
    getAreaSize(): number;
    getBounds(): maps$Bounds;
    getClickable(): boolean;
    getDrawingRect(): maps$Bounds;
    getOptions(key?: string): maps$PolygonOptions;
    getPath(): maps$ArrayOfCoords | maps$KVOArrayOfCoords;
    getPaths(): maps$ArrayOfCoords[] | maps$KVOArrayOfCoords[];
    getStyles(key?: string): maps$PolygonOptions;
    getVisible(): boolean;
    getZIndex(): number;
    setClickable(clickable: boolean): void;
    setOptions(key: string, value: any): void;
    setOptions(options: maps$PolygonOptions): void;
    setPath(
      path:
        | maps$ArrayOfCoords
        | maps$KVOArrayOfCoords
        | maps$ArrayOfCoordsLiteral
    ): void;
    setPaths(paths: maps$ArrayOfCoords[] | maps$ArrayOfCoordsLiteral): void;
    setStyles(key: string, value: any): void;
    setStyles(options: maps$PolygonOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class maps$Polyline mixins maps$OverlayView {
    constructor(options?: maps$PolylineOptions): this;
    getBounds(): maps$Bounds;
    getClickable(): boolean;
    getDistance(): number;
    getDrawingRect(): maps$Bounds;
    getOptions(key?: string): maps$PolylineOptions;
    getPath(): maps$ArrayOfCoords | maps$KVOArrayOfCoords;
    getStyles(key?: string): maps$PolylineOptions;
    getVisible(): boolean;
    getZIndex(): number;
    setClickable(clickable: boolean): void;
    setOptions(key: string, value: any): void;
    setOptions(options: maps$PolylineOptions): void;
    setPath(
      path:
        | maps$ArrayOfCoords
        | maps$KVOArrayOfCoords
        | maps$ArrayOfCoordsLiteral
    ): void;
    setStyles(key: string, value: any): void;
    setStyles(options: maps$PolylineOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class maps$Rectangle mixins maps$OverlayView {
    constructor(options?: maps$RectangleOptions): this;
    getAreaSize(): number;
    getBounds(): maps$Bounds;
    getClickable(): boolean;
    getDrawingRect(): maps$Bounds;
    getOptions(key?: string): maps$RectangleOptions;
    getStyles(key?: string): maps$RectangleOptions;
    getVisible(): boolean;
    getZIndex(): number;
    setBounds(bounds: maps$Bounds | maps$BoundsLiteral): void;
    setClickable(clickable: boolean): void;
    setOptions(options: maps$RectangleOptions): void;
    setOptions(key: string, value: any): void;
    setStyles(key: string, value: any): void;
    setStyles(options: maps$RectangleOptions): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
  }

  declare class maps$PanoramaProjection mixins maps$KVO {
    fromCoordToPov(coord: maps$LatLng): maps$PanoramaPov;
  }

  declare class maps$Panorama mixins maps$KVO {
    constructor(
      panoramaDiv: string | HTMLElement,
      panoramaOptions: maps$PanoramaOptions
    ): this;
    getLocation(): maps$PanoramaLocation;
    getMaxScale(): number;
    getMaxZoom(): number;
    getMinScale(): number;
    getMinZoom(): number;
    getPanoId(): string;
    getPosition(): maps$LatLng;
    getPov(): maps$PanoramaPov;
    getProjection(): maps$PanoramaProjection;
    getScale(): number;
    getSize(): maps$Size;
    getVisible(): boolean;
    getZoom(): number;
    setOptions(key: string, value: any): void;
    setOptions(newOptions: maps$PanoramaOptions): void;
    setPanoId(panoId: string): void;
    setPanoIdWithPov(panoId: string, pov: maps$PanoramaPov): void;
    setPosition(position: maps$LatLng | maps$LatLngLiteral): void;
    setPov(pov: maps$PanoramaPov): void;
    setScale(scale: number): void;
    setSize(size: maps$Size | maps$SizeLiteral): void;
    setVisible(visible: boolean): void;
    setZoom(zoom: number): void;
    zoomIn(): void;
    zoomOut(): void;
  }

  declare class maps$FlightSpot mixins maps$KVO {
    constructor(): this;
    getMap(): maps$Map | null;
    setMap(map: maps$Map | null): void;
  }

  declare class maps$AroundControl mixins maps$CustomControl {
    constructor(aroundControlOptions: maps$AroundControlOptions): this;
  }

  declare function maps$drawing(): void;

  declare interface drawing$DrawingOptions {
    map?: maps$Map;
    drawingControl?: drawing$DrawingMode[];
    drawing$drawingControlOptions?: drawing$drawingControlOptions;
    drawingMode?: drawing$DrawingMode;
    drawing$controlPointOptions?: drawing$controlPointOptions;
    rectangleOptions?: maps$RectangleOptions;
    ellipseOptions?: maps$EllipseOptions;
    polylineOptions?: maps$PolylineOptions;
    arrowlineOptions?: maps$PolylineOptions;
    polygonOptions?: maps$PolygonOptions;
    markerOptions?: maps$MarkerOptions;
  }

  declare type drawing$drawingControlOptions = drawing$DrawingControlOptions;

  declare interface drawing$DrawingControlOptions {
    position?: maps$Position;
    style?: drawing$DrawingStyle;
  }

  declare type drawing$controlPointOptions = drawing$ControlPointOptions;

  declare interface drawing$ControlPointOptions {
    anchorPointOptions: maps$CircleOptions;
    midPointOptions: maps$CircleOptions;
  }

  declare interface drawing$DrawingOverlay {
    id: string;
    name: string;
    setEditable: (
      editable: boolean,
      drawing$controlPointOptions?: drawing$controlPointOptions
    ) => void;
  }

  declare class drawing$DrawingStyle {
    constructor(...args: empty): mixed;
    static +HORIZONTAL: Class<drawing$DrawingStyle__HORIZONTAL> &
      drawing$DrawingStyle__HORIZONTAL &
      0; // 0
    static +VERTICAL: Class<drawing$DrawingStyle__VERTICAL> &
      drawing$DrawingStyle__VERTICAL &
      1; // 1
    static +HORIZONTAL_2: Class<drawing$DrawingStyle__HORIZONTAL_2> &
      drawing$DrawingStyle__HORIZONTAL_2 &
      2; // 2
    static +VERTICAL_2: Class<drawing$DrawingStyle__VERTICAL_2> &
      drawing$DrawingStyle__VERTICAL_2 &
      3; // 3
  }

  declare class drawing$DrawingStyle__HORIZONTAL mixins drawing$DrawingStyle {}
  declare class drawing$DrawingStyle__VERTICAL mixins drawing$DrawingStyle {}
  declare class drawing$DrawingStyle__HORIZONTAL_2
    mixins drawing$DrawingStyle {}
  declare class drawing$DrawingStyle__VERTICAL_2 mixins drawing$DrawingStyle {}

  declare class drawing$DrawingMode {
    constructor(...args: empty): mixed;
    static +HAND: Class<drawing$DrawingMode__HAND> &
      drawing$DrawingMode__HAND &
      0; // 0
    static +RECTANGLE: Class<drawing$DrawingMode__RECTANGLE> &
      drawing$DrawingMode__RECTANGLE &
      1; // 1
    static +ELLIPSE: Class<drawing$DrawingMode__ELLIPSE> &
      drawing$DrawingMode__ELLIPSE &
      2; // 2
    static +POLYLINE: Class<drawing$DrawingMode__POLYLINE> &
      drawing$DrawingMode__POLYLINE &
      3; // 3
    static +ARROWLINE: Class<drawing$DrawingMode__ARROWLINE> &
      drawing$DrawingMode__ARROWLINE &
      4; // 4
    static +POLYGON: Class<drawing$DrawingMode__POLYGON> &
      drawing$DrawingMode__POLYGON &
      5; // 5
    static +MARKER: Class<drawing$DrawingMode__MARKER> &
      drawing$DrawingMode__MARKER &
      6; // 6
  }

  declare class drawing$DrawingMode__HAND mixins drawing$DrawingMode {}
  declare class drawing$DrawingMode__RECTANGLE mixins drawing$DrawingMode {}
  declare class drawing$DrawingMode__ELLIPSE mixins drawing$DrawingMode {}
  declare class drawing$DrawingMode__POLYLINE mixins drawing$DrawingMode {}
  declare class drawing$DrawingMode__ARROWLINE mixins drawing$DrawingMode {}
  declare class drawing$DrawingMode__POLYGON mixins drawing$DrawingMode {}
  declare class drawing$DrawingMode__MARKER mixins drawing$DrawingMode {}

  declare class drawing$DrawingEvent {
    constructor(...args: empty): mixed;
    static +ADD: Class<drawing$DrawingEvent__ADD> &
      drawing$DrawingEvent__ADD &
      0; // 0
    static +REMOVE: Class<drawing$DrawingEvent__REMOVE> &
      drawing$DrawingEvent__REMOVE &
      1; // 1
    static +SELECT: Class<drawing$DrawingEvent__SELECT> &
      drawing$DrawingEvent__SELECT &
      2; // 2
    static +Added: Class<drawing$DrawingEvent__Added> &
      drawing$DrawingEvent__Added &
      3; // 3
    static +Removed: Class<drawing$DrawingEvent__Removed> &
      drawing$DrawingEvent__Removed &
      4; // 4
    static +Selected: Class<drawing$DrawingEvent__Selected> &
      drawing$DrawingEvent__Selected &
      5; // 5
  }

  declare class drawing$DrawingEvent__ADD mixins drawing$DrawingEvent {}
  declare class drawing$DrawingEvent__REMOVE mixins drawing$DrawingEvent {}
  declare class drawing$DrawingEvent__SELECT mixins drawing$DrawingEvent {}
  declare class drawing$DrawingEvent__Added mixins drawing$DrawingEvent {}
  declare class drawing$DrawingEvent__Removed mixins drawing$DrawingEvent {}
  declare class drawing$DrawingEvent__Selected mixins drawing$DrawingEvent {}

  declare class drawing$DrawingManager mixins maps$KVO {
    constructor(options?: drawing$DrawingOptions): this;
    addDrawing(
      overlay: drawing$DrawingOverlay,
      drawingMode: drawing$DrawingMode,
      id?: string
    ): void;
    addListener(
      eventName: drawing$DrawingEvent,
      listener: (overlay: drawing$DrawingOverlay) => void
    ): maps$MapEventListener;
    destroy(): void;
    getDrawing(id: string): drawing$DrawingOverlay;
    getDrawings(): any;
    getMap(): maps$Map | null;
    setMap(map: maps$Map | null): void;
    toGeoJson(): any;
  }

  declare function maps$visualization(): void;

  declare interface visualization$DotMapOptions {
    map: maps$Map;
    data:
      | maps$LatLng[]
      | maps$PointArrayLiteral[]
      | visualization$WeightedLocation[];
    opacity?: number;
    radius?: number;
    strokeWeight?: number;
    strokeColor?: string;
    strokeLineCap?: maps$strokeLineCapType;
    strokeLineJoin?: maps$strokeLineJoinType;
    fillColor?: string;
  }

  declare interface visualization$HeatMapOptions {
    map: maps$Map;
    data:
      | maps$LatLng[]
      | maps$PointArrayLiteral[]
      | visualization$WeightedLocation[];
    opacity?: number;
    radius?: number;
    colorMap?: visualization$SpectrumStyle;
  }

  declare class visualization$SpectrumStyle {
    constructor(...args: empty): mixed;
    static +JET: Class<visualization$SpectrumStyle__JET> &
      visualization$SpectrumStyle__JET &
      0; // 0
    static +HSV: Class<visualization$SpectrumStyle__HSV> &
      visualization$SpectrumStyle__HSV &
      1; // 1
    static +HOT: Class<visualization$SpectrumStyle__HOT> &
      visualization$SpectrumStyle__HOT &
      2; // 2
    static +COOL: Class<visualization$SpectrumStyle__COOL> &
      visualization$SpectrumStyle__COOL &
      3; // 3
    static +GREYS: Class<visualization$SpectrumStyle__GREYS> &
      visualization$SpectrumStyle__GREYS &
      4; // 4
    static +YIGnBu: Class<visualization$SpectrumStyle__YIGnBu> &
      visualization$SpectrumStyle__YIGnBu &
      5; // 5
    static +YIOrRd: Class<visualization$SpectrumStyle__YIOrRd> &
      visualization$SpectrumStyle__YIOrRd &
      6; // 6
    static +RdBu: Class<visualization$SpectrumStyle__RdBu> &
      visualization$SpectrumStyle__RdBu &
      7; // 7
    static +RAINBOW: Class<visualization$SpectrumStyle__RAINBOW> &
      visualization$SpectrumStyle__RAINBOW &
      8; // 8
    static +PORTLAND: Class<visualization$SpectrumStyle__PORTLAND> &
      visualization$SpectrumStyle__PORTLAND &
      9; // 9
    static +OXYGEN: Class<visualization$SpectrumStyle__OXYGEN> &
      visualization$SpectrumStyle__OXYGEN &
      10; // 10
  }

  declare class visualization$SpectrumStyle__JET
    mixins visualization$SpectrumStyle {}
  declare class visualization$SpectrumStyle__HSV
    mixins visualization$SpectrumStyle {}
  declare class visualization$SpectrumStyle__HOT
    mixins visualization$SpectrumStyle {}
  declare class visualization$SpectrumStyle__COOL
    mixins visualization$SpectrumStyle {}
  declare class visualization$SpectrumStyle__GREYS
    mixins visualization$SpectrumStyle {}
  declare class visualization$SpectrumStyle__YIGnBu
    mixins visualization$SpectrumStyle {}
  declare class visualization$SpectrumStyle__YIOrRd
    mixins visualization$SpectrumStyle {}
  declare class visualization$SpectrumStyle__RdBu
    mixins visualization$SpectrumStyle {}
  declare class visualization$SpectrumStyle__RAINBOW
    mixins visualization$SpectrumStyle {}
  declare class visualization$SpectrumStyle__PORTLAND
    mixins visualization$SpectrumStyle {}
  declare class visualization$SpectrumStyle__OXYGEN
    mixins visualization$SpectrumStyle {}

  declare class visualization$DotMap mixins maps$KVO {
    constructor(dotMapOptions?: visualization$DotMapOptions): this;
    addDrawing(
      overlay: maps$drawing.drawing$DrawingOverlay,
      drawingMode: maps$drawing.drawing$DrawingMode,
      id?: string
    ): void;
    addListener(
      eventName: maps$drawing.drawing$DrawingEvent,
      listener: (overlay: maps$drawing.drawing$DrawingOverlay) => void
    ): maps$MapEventListener;
    destroy(): void;
    getDrawing(id: string): maps$drawing.drawing$DrawingOverlay;
    getDrawings(): any;
    getMap(): maps$Map | null;
    setMap(map: maps$Map | null): void;
    toGeoJson(): any;
  }

  declare class visualization$HeatMap {
    constructor(heatMapOptions?: visualization$HeatMapOptions): this;
    getColorMap(): visualization$SpectrumStyle;
    getData(): maps$LatLng[] | maps$PointArrayLiteral[];
    getMap(): maps$Map | null;
    getOptions(key?: string): visualization$HeatMapOptions;
    redraw(): void;
    setColorMap(
      colormap: visualization$SpectrumStyle,
      inReverse: boolean
    ): void;
    setData(data: maps$LatLng[] | maps$PointArrayLiteral[]): void;
    setMap(map: maps$Map | null): void;
    setOptions(key: string, value: any): void;
    setOptions(options: visualization$HeatMapOptions): void;
  }

  declare class visualization$WeightedLocation {
    constructor(lat: number, lng: number, weight?: number): this;
    clone(): visualization$WeightedLocation;
    getLocation(): maps$LatLng;
    getWeight(): number;
    lat(): number;
    lng(): number;
    toString(): string;
  }

  declare function maps$Service(): void;

  declare var npm$namespace$Service: {
    fromAddrToCoord: typeof Service$fromAddrToCoord,
    fromCoordToAddr: typeof Service$fromCoordToAddr,
    geocode: typeof Service$geocode,
    reverseGeocode: typeof Service$reverseGeocode
  };
  declare interface Service$ServiceOptions {
    encoding?: any;
    coordType?: any;
  }

  declare type Service$GeocodeServiceOptions = {
    address?: string
  } & Service$ServiceOptions;

  declare type Service$ReverseServiceOptions = {
    location?: maps$Coord | maps$CoordLiteral
  } & Service$ServiceOptions;

  declare interface Service$AddressItem {
    address: string;
    addrdetail: {
      country: string,
      sido: string,
      sigugun: string,
      dongmyun: string,
      rest: string
    };
  }

  declare interface Service$GeocodeResponse {
    result: {
      userquery: any,
      total: number,
      items: Service$AddressItem[]
    };
  }

  declare interface Service$ReverseGeocodeResponse {
    result: {
      userquery: string,
      total: number,
      items: Service$AddressItem[]
    };
  }

  declare class Service$CoordType {
    constructor(...args: empty): mixed;
    static +LATLNG: Class<Service$CoordType__LATLNG> &
      Service$CoordType__LATLNG &
      0; // 0
    static +TM128: Class<Service$CoordType__TM128> &
      Service$CoordType__TM128 &
      1; // 1
  }

  declare class Service$CoordType__LATLNG mixins Service$CoordType {}
  declare class Service$CoordType__TM128 mixins Service$CoordType {}

  declare class Service$Encoding {
    constructor(...args: empty): mixed;
    static +UTF_8: Class<Service$Encoding__UTF_8> & Service$Encoding__UTF_8 & 0; // 0
    static +EUC_KR: Class<Service$Encoding__EUC_KR> &
      Service$Encoding__EUC_KR &
      1; // 1
  }

  declare class Service$Encoding__UTF_8 mixins Service$Encoding {}
  declare class Service$Encoding__EUC_KR mixins Service$Encoding {}

  declare class Service$Status {
    constructor(...args: empty): mixed;
    static +OK: Class<Service$Status__OK> & Service$Status__OK & 0; // 0
    static +ERROR: Class<Service$Status__ERROR> & Service$Status__ERROR & 1; // 1
  }

  declare class Service$Status__OK mixins Service$Status {}
  declare class Service$Status__ERROR mixins Service$Status {}

  declare function Service$fromAddrToCoord(): void;

  declare function Service$fromCoordToAddr(): void;

  declare function Service$geocode(
    options: Service$GeocodeServiceOptions,
    callback?: (
      status: Service$Status,
      response: Service$GeocodeResponse
    ) => void
  ): void;

  declare function Service$reverseGeocode(
    options: Service$ReverseServiceOptions,
    callback?: (
      status: Service$Status,
      response: Service$ReverseGeocodeResponse
    ) => void
  ): void;

  declare function maps$TransCoord(): void;

  declare var npm$namespace$TransCoord: {
    fromEPSG3857ToLatLng: typeof TransCoord$fromEPSG3857ToLatLng,
    fromEPSG3857ToNaver: typeof TransCoord$fromEPSG3857ToNaver,
    fromEPSG3857ToTM128: typeof TransCoord$fromEPSG3857ToTM128,
    fromEPSG3857ToUTMK: typeof TransCoord$fromEPSG3857ToUTMK,
    fromLatLngToEPSG3857: typeof TransCoord$fromLatLngToEPSG3857,
    fromLatLngToNaver: typeof TransCoord$fromLatLngToNaver,
    fromLatLngToTM128: typeof TransCoord$fromLatLngToTM128,
    fromLatLngToUTMK: typeof TransCoord$fromLatLngToUTMK,
    fromNaverToEPSG3857: typeof TransCoord$fromNaverToEPSG3857,
    fromNaverToLatLng: typeof TransCoord$fromNaverToLatLng,
    fromNaverToTM128: typeof TransCoord$fromNaverToTM128,
    fromNaverToUTMK: typeof TransCoord$fromNaverToUTMK,
    fromTM128ToEPSG3857: typeof TransCoord$fromTM128ToEPSG3857,
    fromTM128ToLatLng: typeof TransCoord$fromTM128ToLatLng,
    fromTM128ToNaver: typeof TransCoord$fromTM128ToNaver,
    fromTM128ToUTMK: typeof TransCoord$fromTM128ToUTMK,
    fromUTMKToEPSG3857: typeof TransCoord$fromUTMKToEPSG3857,
    fromUTMKToLatLng: typeof TransCoord$fromUTMKToLatLng,
    fromUTMKToNaver: typeof TransCoord$fromUTMKToNaver,
    fromUTMKToTM128: typeof TransCoord$fromUTMKToTM128
  };
  declare function TransCoord$fromEPSG3857ToLatLng(
    coord: maps$Point
  ): maps$LatLng;

  declare function TransCoord$fromEPSG3857ToNaver(
    coord: maps$Point
  ): maps$Point;

  declare function TransCoord$fromEPSG3857ToTM128(
    coord: maps$Point
  ): maps$Point;

  declare function TransCoord$fromEPSG3857ToUTMK(coord: maps$Point): maps$Point;

  declare function TransCoord$fromLatLngToEPSG3857(
    latlng: maps$Coord
  ): maps$Point;

  declare function TransCoord$fromLatLngToNaver(latlng: maps$Coord): maps$Point;

  declare function TransCoord$fromLatLngToTM128(latlng: maps$Coord): maps$Point;

  declare function TransCoord$fromLatLngToUTMK(latlng: maps$Coord): maps$Point;

  declare function TransCoord$fromNaverToEPSG3857(n: maps$Point): maps$Point;

  declare function TransCoord$fromNaverToLatLng(n: maps$Point): maps$LatLng;

  declare function TransCoord$fromNaverToTM128(n: maps$Point): maps$Point;

  declare function TransCoord$fromNaverToUTMK(n: maps$Point): maps$Point;

  declare function TransCoord$fromTM128ToEPSG3857(
    tm128: maps$Point
  ): maps$Point;

  declare function TransCoord$fromTM128ToLatLng(tm128: maps$Point): maps$LatLng;

  declare function TransCoord$fromTM128ToNaver(tm128: maps$Point): maps$Point;

  declare function TransCoord$fromTM128ToUTMK(tm128: maps$Point): maps$Point;

  declare function TransCoord$fromUTMKToEPSG3857(utmk: maps$Point): maps$Point;

  declare function TransCoord$fromUTMKToLatLng(utmk: maps$Point): maps$LatLng;

  declare function TransCoord$fromUTMKToNaver(utmk: maps$Point): maps$Point;

  declare function TransCoord$fromUTMKToTM128(utmk: maps$Point): maps$Point;

  declare function maps$Event(): void;

  declare var npm$namespace$Event: {
    addDOMListener: typeof Event$addDOMListener,
    addListener: typeof Event$addListener,
    clearInstanceListeners: typeof Event$clearInstanceListeners,
    clearListeners: typeof Event$clearListeners,
    forward: typeof Event$forward,
    hasListener: typeof Event$hasListener,
    once: typeof Event$once,
    removeDOMListener: typeof Event$removeDOMListener,
    removeListener: typeof Event$removeListener,
    resumeDispatch: typeof Event$resumeDispatch,
    stopDispatch: typeof Event$stopDispatch,
    trigger: typeof Event$trigger
  };
  declare function Event$addDOMListener(
    element: HTMLElement,
    eventName: string,
    listener: (event: any) => any
  ): void;

  declare function Event$addListener(
    target: any,
    eventName: string,
    listener: (event: any) => any
  ): maps$MapEventListener;

  declare function Event$clearInstanceListeners(target: any): void;

  declare function Event$clearListeners(
    target: any,
    fromEventName: string
  ): void;

  declare function Event$forward(
    source: any,
    fromEventName: string,
    target: any,
    toEventName: string
  ): maps$MapEventListener;

  declare function Event$hasListener(target: any, eventName: string): boolean;

  declare function Event$once(
    target: any,
    eventName: string,
    listener: (event: any) => any
  ): maps$MapEventListener;

  declare function Event$removeDOMListener(
    element: HTMLElement,
    eventName: string,
    listener: (event: any) => any
  ): void;

  declare function Event$removeDOMListener(
    listeners: maps$DOMEventListener | maps$DOMEventListener[]
  ): void;

  declare function Event$removeListener(
    listeners: maps$MapEventListener | maps$MapEventListener[]
  ): void;

  declare function Event$resumeDispatch(target: any, eventName: string): void;

  declare function Event$stopDispatch(target: any, eventName: string): void;

  declare function Event$trigger(
    target: any,
    eventName: string,
    eventObject?: any
  ): void;

  declare function maps$EPSG3857(): void;

  declare var npm$namespace$EPSG3857: {
    fromCoordToPoint: typeof EPSG3857$fromCoordToPoint,
    fromLatLngToPoint: typeof EPSG3857$fromLatLngToPoint,
    fromPointToCoord: typeof EPSG3857$fromPointToCoord,
    fromPointToLatLng: typeof EPSG3857$fromPointToLatLng,
    getDestinationCoord: typeof EPSG3857$getDestinationCoord,
    getDistance: typeof EPSG3857$getDistance
  };
  declare function EPSG3857$fromCoordToPoint(coord: maps$Coord): maps$Point;

  declare function EPSG3857$fromLatLngToPoint(latlng: maps$LatLng): maps$Point;

  declare function EPSG3857$fromPointToCoord(point: maps$Point): maps$LatLng;

  declare function EPSG3857$fromPointToLatLng(point: maps$Point): maps$LatLng;

  declare function EPSG3857$getDestinationCoord(
    fromLatLng: maps$LatLng,
    angle: number,
    meter: number
  ): maps$LatLng;

  declare function EPSG3857$getDistance(
    latlng1: maps$LatLng,
    latlng2: maps$LatLng
  ): number;

  declare function maps$UTMK(): void;

  declare var npm$namespace$UTMK: {
    fromCoordToPoint: typeof UTMK$fromCoordToPoint,
    fromCoordToUTMK: typeof UTMK$fromCoordToUTMK,
    fromLatLngToPoint: typeof UTMK$fromLatLngToPoint,
    fromLatLngToUTMK: typeof UTMK$fromLatLngToUTMK,
    fromPointToCoord: typeof UTMK$fromPointToCoord,
    fromPointToLatLng: typeof UTMK$fromPointToLatLng,
    fromPointToUTMK: typeof UTMK$fromPointToUTMK,
    fromUTMKToCoord: typeof UTMK$fromUTMKToCoord,
    fromUTMKToLatLng: typeof UTMK$fromUTMKToLatLng,
    fromUTMKToPoint: typeof UTMK$fromUTMKToPoint,
    getDestinationCoord: typeof UTMK$getDestinationCoord,
    getDistance: typeof UTMK$getDistance,
    name: typeof UTMK$name,
    pointPerMeter: typeof UTMK$pointPerMeter
  };
  declare var UTMK$name: string;

  declare var UTMK$pointPerMeter: number;

  declare function UTMK$fromCoordToPoint(latlng: maps$LatLng): maps$Point;

  declare function UTMK$fromCoordToUTMK(latlng: maps$LatLng): maps$Point;

  declare function UTMK$fromLatLngToPoint(latlng: maps$LatLng): maps$Point;

  declare function UTMK$fromLatLngToUTMK(latlng: maps$LatLng): maps$Point;

  declare function UTMK$fromPointToCoord(point: maps$Point): maps$LatLng;

  declare function UTMK$fromPointToLatLng(point: maps$Point): maps$LatLng;

  declare function UTMK$fromPointToUTMK(point: maps$Point): maps$Point;

  declare function UTMK$fromUTMKToCoord(utmk: maps$Point): maps$LatLng;

  declare function UTMK$fromUTMKToLatLng(utmk: maps$Point): maps$LatLng;

  declare function UTMK$fromUTMKToPoint(utmk: maps$Point): maps$Point;

  declare function UTMK$getDestinationCoord(
    fromLatLng: maps$LatLng,
    angle: number,
    meter: number
  ): maps$LatLng;

  declare function UTMK$getDistance(
    latlng1: maps$LatLng,
    latlng2: maps$LatLng
  ): number;

  declare function maps$UTMK_NAVER(): void;

  declare var npm$namespace$UTMK_NAVER: {
    fromCoordToNaver: typeof UTMK_NAVER$fromCoordToNaver,
    fromLatLngToNaver: typeof UTMK_NAVER$fromLatLngToNaver,
    fromNaverToCoord: typeof UTMK_NAVER$fromNaverToCoord,
    fromNaverToLatLng: typeof UTMK_NAVER$fromNaverToLatLng,
    fromNaverToPoint: typeof UTMK_NAVER$fromNaverToPoint,
    fromNaverToUTMK: typeof UTMK_NAVER$fromNaverToUTMK,
    fromPointToNaver: typeof UTMK_NAVER$fromPointToNaver,
    fromUTMKToNaver: typeof UTMK_NAVER$fromUTMKToNaver,
    name: typeof UTMK_NAVER$name,
    pointPerMeter: typeof UTMK_NAVER$pointPerMeter
  };
  declare var UTMK_NAVER$name: string;

  declare var UTMK_NAVER$pointPerMeter: number;

  declare function UTMK_NAVER$fromCoordToNaver(latlng: maps$LatLng): maps$Point;

  declare function UTMK_NAVER$fromLatLngToNaver(
    latlng: maps$LatLng
  ): maps$Point;

  declare function UTMK_NAVER$fromNaverToCoord(
    naverPoint: maps$Point
  ): maps$LatLng;

  declare function UTMK_NAVER$fromNaverToLatLng(
    naverPoint: maps$Point
  ): maps$LatLng;

  declare function UTMK_NAVER$fromNaverToPoint(
    naverPoint: maps$Point
  ): maps$Point;

  declare function UTMK_NAVER$fromNaverToUTMK(
    naverPoint: maps$Point
  ): maps$Point;

  declare function UTMK_NAVER$fromPointToNaver(point: maps$Point): maps$Point;

  declare function UTMK_NAVER$fromUTMKToNaver(utmk: maps$Point): maps$Point;

  declare function maps$EPSG3857Coord(): void;

  declare var npm$namespace$EPSG3857Coord: {
    fromCoordToLatLng: typeof EPSG3857Coord$fromCoordToLatLng,
    fromCoordToPoint: typeof EPSG3857Coord$fromCoordToPoint,
    fromEPSG3857ToLatLng: typeof EPSG3857Coord$fromEPSG3857ToLatLng,
    fromEPSG3857ToPoint: typeof EPSG3857Coord$fromEPSG3857ToPoint,
    fromLatLngToCoord: typeof EPSG3857Coord$fromLatLngToCoord,
    fromLatLngToEPSG3857: typeof EPSG3857Coord$fromLatLngToEPSG3857,
    fromPointToCoord: typeof EPSG3857Coord$fromPointToCoord,
    fromPointToEPSG3857: typeof EPSG3857Coord$fromPointToEPSG3857
  };
  declare function EPSG3857Coord$fromCoordToLatLng(
    coord: maps$Point
  ): maps$LatLng;

  declare function EPSG3857Coord$fromCoordToPoint(
    coord: maps$Point
  ): maps$Point;

  declare function EPSG3857Coord$fromEPSG3857ToLatLng(
    coord: maps$Point
  ): maps$LatLng;

  declare function EPSG3857Coord$fromEPSG3857ToPoint(
    coord: maps$Point
  ): maps$Point;

  declare function EPSG3857Coord$fromLatLngToCoord(
    coord: maps$Coord
  ): maps$Point;

  declare function EPSG3857Coord$fromLatLngToEPSG3857(
    coord: maps$Coord
  ): maps$Point;

  declare function EPSG3857Coord$fromPointToCoord(
    point: maps$Point
  ): maps$Point;

  declare function EPSG3857Coord$fromPointToEPSG3857(
    point: maps$Point
  ): maps$Point;

  declare function maps$TM128(): void;

  declare var npm$namespace$TM128: {
    fromCoordToPoint: typeof TM128$fromCoordToPoint,
    fromPointToCoord: typeof TM128$fromPointToCoord
  };
  declare function TM128$fromCoordToPoint(latlng: maps$Coord): maps$Point;

  declare function TM128$fromPointToCoord(point: maps$Point): maps$LatLng;

  declare function maps$TM128Coord(): void;

  declare var npm$namespace$TM128Coord: {
    fromCoordToLatLng: typeof TM128Coord$fromCoordToLatLng,
    fromCoordToPoint: typeof TM128Coord$fromCoordToPoint,
    fromLatLngToCoord: typeof TM128Coord$fromLatLngToCoord,
    fromLatLngToTM128: typeof TM128Coord$fromLatLngToTM128,
    fromPointToCoord: typeof TM128Coord$fromPointToCoord,
    fromPointToTM128: typeof TM128Coord$fromPointToTM128,
    fromTM128ToLatLng: typeof TM128Coord$fromTM128ToLatLng,
    fromTM128ToPoint: typeof TM128Coord$fromTM128ToPoint,
    fromTM128ToUTMK: typeof TM128Coord$fromTM128ToUTMK,
    fromUTMKToTM128: typeof TM128Coord$fromUTMKToTM128
  };
  declare function TM128Coord$fromCoordToLatLng(tm128: maps$Point): maps$LatLng;

  declare function TM128Coord$fromCoordToPoint(tm128: maps$Point): maps$Point;

  declare function TM128Coord$fromLatLngToCoord(latlng: maps$Coord): maps$Point;

  declare function TM128Coord$fromLatLngToTM128(latlng: maps$Coord): maps$Point;

  declare function TM128Coord$fromPointToCoord(point: maps$Point): maps$Point;

  declare function TM128Coord$fromPointToTM128(point: maps$Point): maps$Point;

  declare function TM128Coord$fromTM128ToLatLng(tm128: maps$Point): maps$LatLng;

  declare function TM128Coord$fromTM128ToPoint(tm128: maps$Point): maps$Point;

  declare function TM128Coord$fromTM128ToUTMK(tm128: maps$Point): maps$Point;

  declare function TM128Coord$fromUTMKToTM128(utmk: maps$Point): maps$Point;

  declare function maps$UTMK_NAVERCoord(): void;

  declare var npm$namespace$UTMK_NAVERCoord: {
    fromCoordToLatLng: typeof UTMK_NAVERCoord$fromCoordToLatLng,
    fromCoordToPoint: typeof UTMK_NAVERCoord$fromCoordToPoint,
    fromLatLngToCoord: typeof UTMK_NAVERCoord$fromLatLngToCoord,
    fromPointToCoord: typeof UTMK_NAVERCoord$fromPointToCoord
  };
  declare function UTMK_NAVERCoord$fromCoordToLatLng(
    n: maps$Point
  ): maps$LatLng;

  declare function UTMK_NAVERCoord$fromCoordToPoint(n: maps$Point): maps$Point;

  declare function UTMK_NAVERCoord$fromLatLngToCoord(
    latlng: maps$Coord
  ): maps$Point;

  declare function UTMK_NAVERCoord$fromPointToCoord(
    point: maps$Point
  ): maps$Point;

  declare function maps$UTMKCoord(): void;

  declare var npm$namespace$UTMKCoord: {
    fromCoordToLatLng: typeof UTMKCoord$fromCoordToLatLng,
    fromCoordToPoint: typeof UTMKCoord$fromCoordToPoint,
    fromLatLngToCoord: typeof UTMKCoord$fromLatLngToCoord,
    fromPointToCoord: typeof UTMKCoord$fromPointToCoord
  };
  declare function UTMKCoord$fromCoordToLatLng(utmk: maps$Point): maps$LatLng;

  declare function UTMKCoord$fromCoordToPoint(utmk: maps$Point): maps$Point;

  declare function UTMKCoord$fromLatLngToCoord(latlng: maps$Coord): maps$Point;

  declare function UTMKCoord$fromPointToCoord(point: maps$Point): maps$Point;
}
