declare module "apple-mapkit-js" {
  declare var mapkit: typeof npm$namespace$mapkit;

  declare var npm$namespace$mapkit: {
    init: typeof mapkit$init,
    importGeoJSON: typeof mapkit$importGeoJSON,
    addEventListener: typeof mapkit$addEventListener,
    removeEventListener: typeof mapkit$removeEventListener,
    maps: typeof mapkit$maps,
    language: typeof mapkit$language,
    build: typeof mapkit$build,
    version: typeof mapkit$version,
    FeatureVisibility: typeof mapkit$FeatureVisibility,
    MapEvent: typeof mapkit$MapEvent,
    AnnotationEvent: typeof mapkit$AnnotationEvent,
    UserLocationEvent: typeof mapkit$UserLocationEvent,
    Annotation: typeof mapkit$Annotation,
    MarkerAnnotation: typeof mapkit$MarkerAnnotation,
    ImageAnnotation: typeof mapkit$ImageAnnotation,
    BoundingRegion: typeof mapkit$BoundingRegion,
    CircleOverlay: typeof mapkit$CircleOverlay,
    CoordinateRegion: typeof mapkit$CoordinateRegion,
    Coordinate: typeof mapkit$Coordinate,
    Directions: typeof mapkit$Directions,
    CoordinateSpan: typeof mapkit$CoordinateSpan,
    Geocoder: typeof mapkit$Geocoder,
    Map: typeof mapkit$Map,
    MapPoint: typeof mapkit$MapPoint,
    MapRect: typeof mapkit$MapRect,
    MapSize: typeof mapkit$MapSize,
    PolygonOverlay: typeof mapkit$PolygonOverlay,
    Padding: typeof mapkit$Padding,
    PolylineOverlay: typeof mapkit$PolylineOverlay,
    Search: typeof mapkit$Search,
    Style: typeof mapkit$Style,
    TileOverlay: typeof mapkit$TileOverlay,
    Annotation: typeof npm$namespace$mapkit$Annotation,
    Directions: typeof npm$namespace$mapkit$Directions,
    Map: typeof npm$namespace$mapkit$Map
  };
  declare var mapkit$maps: mapkit$Map[];

  declare var mapkit$language: string;

  declare var mapkit$build: string;

  declare var mapkit$version: string;

  declare function mapkit$init(options: mapkit$MapKitInitOptions): void;

  declare function mapkit$importGeoJSON(
    data: string | { [key: string]: any },
    callback?: (
      error: Error,
      result: mapkit$ItemCollection
    ) => void | mapkit$GeoJSONDelegate
  ): mapkit$ItemCollection | Error;

  declare function mapkit$addEventListener(
    type: string,
    listener: (type: string) => void,
    thisObject?: any
  ): void;

  declare function mapkit$removeEventListener(
    type: string,
    listener: (type: string) => void,
    thisObject?: any
  ): void;

  declare interface mapkit$MapKitInitOptions {
    language?: string;
    authorizationCallback?: (done: (token: string) => void) => void;
  }

  declare class mapkit$Annotation {
    northLatitude: number;
    eastLongitude: number;
    southLatitude: number;
    westLongitude: number;
    title: string;
    subtitle: string;
    accessibilityLabel: string;
    draggable: boolean;
    calloutEnabled: boolean;
    animates: boolean;
    appearanceAnimation: string;
    anchorOffset: DOMPoint;
    calloutOffset: DOMPoint;
    callout: mapkit$AnnotationCalloutDelegate;
    size: { [key: string]: any };
    displayPriority: number;
    collisionMode: string;
    clusteringIdentifier: string;
    padding: mapkit$Padding;
    data: any;
    visible: boolean;
    enabled: boolean;
    selected: boolean;
    constructor(
      coordinate: mapkit$Coordinate,
      factory: (
        coordinate: mapkit$Coordinate,
        options: mapkit$AnnotationConstructorOptions
      ) => Element,
      options?: mapkit$AnnotationConstructorOptions
    ): this;
    copy(): mapkit$BoundingRegion;
    toCoordinateRegion(): mapkit$CoordinateRegion;
    addEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
    removeEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
  }

  declare class mapkit$MarkerAnnotation mixins mapkit$Annotation {
    subtitleVisibility: $Values<typeof mapkit$FeatureVisibility>;
    titleVisibility: $Values<typeof mapkit$FeatureVisibility>;
    color: string;
    glyphColor: string;
    glyphText: string;
    glyphImage: any;
    selectedGlyphImage: any;
    constructor(
      coordinate: mapkit$Coordinate,
      options?: mapkit$MarkerAnnotationConstructorOptions
    ): this;
  }

  declare class mapkit$ImageAnnotation mixins mapkit$Annotation {
    url: {
      [key: number]: string
    };
    constructor(
      coordinate: mapkit$Coordinate,
      options?: mapkit$ImageAnnotationConstructorOptions
    ): this;
  }

  declare type mapkit$ImageAnnotationConstructorOptions = {
    url?: {
      [key: number]: string
    }
  } & mapkit$AnnotationConstructorOptions;

  declare type mapkit$MarkerAnnotationConstructorOptions = {
    titleVisibility?: string,
    subtitleVisibility?: string,
    color?: string,
    glyphColor?: string,
    glyphText?: string,
    glyphImage?: any,
    selectedGlyphImage?: any
  } & mapkit$AnnotationConstructorOptions;

  declare type mapkit$AnnotationConstructorOptions = {
    title?: string,
    subtitle?: string,
    accessibilityLabel?: string,
    draggable?: boolean,
    calloutEnabled?: boolean,
    animates?: boolean,
    appearanceAnimation?: string,
    anchorOffset?: DOMPoint,
    calloutOffset?: DOMPoint,
    callout?: mapkit$AnnotationCalloutDelegate,
    size?: { [key: string]: any },
    displayPriority?: number,
    collisionMode?: string,
    clusteringIdentifier?: string,
    padding?: mapkit$Padding
  } & mapkit$OverlayOptions;

  declare interface mapkit$AnnotationCalloutDelegate {
    calloutAnchorOffsetForAnnotation(
      annotation: mapkit$Annotation,
      size: {
        width: number,
        height: number
      }
    ): DOMPoint;
    calloutShouldAppearForAnnotation(annotation: mapkit$Annotation): boolean;
    calloutShouldAnimateForAnnotation(annotation: mapkit$Annotation): boolean;
    calloutAppearanceAnimationForAnnotation(
      annotation: mapkit$Annotation
    ): string;
    calloutContentForAnnotation(annotation: mapkit$Annotation): Element;
    calloutElementForAnnotation(annotation: mapkit$Annotation): Element;
    calloutLeftAccessoryForAnnotation(annotation: mapkit$Annotation): Element;
    calloutRightAccessoryForAnnotation(annotation: mapkit$Annotation): Element;
  }

  declare var npm$namespace$mapkit$Annotation: {
    CollisionMode: typeof mapkit$Annotation$CollisionMode,
    DisplayPriority: typeof mapkit$Annotation$DisplayPriority
  };

  declare var mapkit$Annotation$CollisionMode: {|
    +Rectangle: "rectangle", // "rectangle"
    +Circle: "circle" // "circle"
  |};

  declare var mapkit$Annotation$DisplayPriority: {|
    +Low: 250, // 250
    +High: 750, // 750
    +Require: 1000 // 1000
  |};

  declare class mapkit$BoundingRegion {
    northLatitude: number;
    eastLongitude: number;
    southLatitude: number;
    westLongitude: number;
    constructor(
      northLatitude: number,
      eastLongitude: number,
      southLatitude: number,
      westLongitude: number
    ): this;
    copy(): mapkit$BoundingRegion;
    toCoordinateRegion(): mapkit$CoordinateRegion;
  }

  declare class mapkit$CircleOverlay mixins mapkit$Overlay {
    coordinate: mapkit$Coordinate;
    radius: number;
    data: any;
    enabled: boolean;
    map: mapkit$Map;
    selected: boolean;
    style: mapkit$Style;
    visible: boolean;
    constructor(
      coordinate: mapkit$Coordinate,
      radius: number,
      options?: mapkit$StylesOverlayOptions
    ): this;
    addEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
    removeEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
  }

  declare class mapkit$CoordinateRegion {
    center: mapkit$Coordinate;
    span: mapkit$CoordinateSpan;
    constructor(center: mapkit$Coordinate, span: mapkit$CoordinateSpan): this;
    copy(): mapkit$CoordinateRegion;
    equals(coordinateSpan: mapkit$CoordinateRegion): boolean;
    toBoundingRegion(): mapkit$BoundingRegion;
    toMapRect(): mapkit$MapRect;
  }

  declare class mapkit$Coordinate {
    latitude: number;
    longitude: number;
    constructor(latitude: number, longitude: number): this;
    copy(): mapkit$Coordinate;
    equals(coordinate: mapkit$Coordinate): boolean;
    toMapPoint(): mapkit$MapPoint;
    toUnwrappedMapPoint(): mapkit$MapPoint;
  }

  declare class mapkit$Directions {
    constructor(options?: mapkit$DirectionsConstructorOptions): this;
    route(
      request: mapkit$DirectionsRequest,
      callback: (error: Error, response: mapkit$DirectionsResponse) => void
    ): number;
    cancel(id: number): boolean;
  }

  declare interface mapkit$DirectionsRequest {
    origin: string | mapkit$Coordinate | mapkit$Place;
    destination: string | mapkit$Coordinate | mapkit$Place;
    transportType: $Values<typeof mapkit$Directions$Transport>;
    requestsAlternateRoutes: boolean;
  }

  declare interface mapkit$DirectionsResponse {
    request: mapkit$DirectionsRequest;
    routes: mapkit$Route[];
  }

  declare interface mapkit$Route {
    path: mapkit$Coordinate[][];
    polyline: mapkit$PolylineOverlay;
    steps: mapkit$RouteStep[];
    name: string;
    distance: number;
    expectedTravelTime: number;
    transportType: $Values<typeof mapkit$Directions$Transport>;
  }

  declare interface mapkit$RouteStep {
    path: mapkit$Coordinate[];
    instructions: string;
    distance: number;
    transportType: $Values<typeof mapkit$Directions$Transport>;
  }

  declare interface mapkit$DirectionsConstructorOptions {
    language?: string;
  }

  declare var npm$namespace$mapkit$Directions: {
    Transport: typeof mapkit$Directions$Transport
  };

  declare var mapkit$Directions$Transport: {|
    +Automobile: "automobile", // "automobile"
    +Walking: "walking" // "walking"
  |};

  declare class mapkit$CoordinateSpan {
    latitudeDelta: number;
    longitudeDelta: number;
    constructor(latitudeDelta: number, longitudeDelta: number): this;
    copy(): mapkit$CoordinateSpan;
    equals(coordinateSpan: mapkit$CoordinateSpan): boolean;
  }

  declare var mapkit$FeatureVisibility: {|
    +Adaptive: "adaptive", // "adaptive"
    +Hidden: "hidden", // "hidden"
    +Visible: "visible" // "visible"
  |};

  declare class mapkit$Geocoder {
    getsUserLocation: boolean;
    language: string;
    constructor(options?: mapkit$GeocoderConstructorOptions): this;
    lookup(
      place: string,
      callback: mapkit$GeocoderLookupCallback,
      options?: mapkit$GeocoderLookupOptions
    ): number;
    reverseLookup(
      coordinate: mapkit$Coordinate,
      callback: mapkit$GeocoderLookupCallback,
      options?: mapkit$GeocoderReverseLookupOptions
    ): number;
    cancel(id: number): boolean;
  }

  declare type mapkit$GeocoderLookupCallback = (
    error: Error,
    data: mapkit$GeocoderResponse
  ) => void;

  declare interface mapkit$GeocoderLookupOptions {
    language?: string;
    coordinate?: mapkit$Coordinate;
    region?: mapkit$CoordinateRegion;
    limitToCountries?: string;
  }

  declare interface mapkit$GeocoderReverseLookupOptions {
    language?: string;
  }

  declare interface mapkit$GeocoderResponse {
    results: mapkit$Place[];
  }

  declare interface mapkit$Place {
    name: string;
    coordinate: mapkit$Coordinate;
    formattedAddress: string;
    region: mapkit$CoordinateRegion;
    countryCode: string;
  }

  declare interface mapkit$GeocoderConstructorOptions {
    language: string;
    getsUserLocation: boolean;
  }

  declare interface mapkit$GeoJSONDelegate {
    itemForFeature(
      item: mapkit$Annotation | mapkit$Overlay | mapkit$ItemCollection,
      geoJSON: any
    ): mapkit$ItemType;
    itemForFeatureCollection(
      itemCollection: mapkit$ItemCollection,
      geoJSON: any
    ): mapkit$ItemType;
    itemForLineString(
      overlay: mapkit$PolylineOverlay,
      geoJSON: any
    ): mapkit$ItemType;
    itemForMultiLineString(
      itemCollection: mapkit$ItemCollection,
      geoJSON: any
    ): mapkit$ItemType;
    itemForPoint(coordinate: mapkit$Coordinate, geoJSON: any): mapkit$ItemType;
    itemForMultiPoint(
      itemCollection: mapkit$ItemCollection,
      geoJSON: any
    ): mapkit$ItemType;
    itemForPolygon(
      overlay: mapkit$PolygonOverlay,
      geoJSON: any
    ): mapkit$ItemType;
    itemForMultiPolygon(
      itemCollection: mapkit$ItemCollection,
      geoJSON: any
    ): mapkit$ItemType;
    styleForOverlay(overlay: mapkit$Overlay, geoJSON: any): mapkit$Style;
    geoJSONDidComplete(result: mapkit$ItemCollection, geoJSON: any): void;
    geoJSONDidError(error: Error, geoJSON: any): void;
  }

  declare type mapkit$ItemType =
    | mapkit$Annotation
    | mapkit$Overlay
    | mapkit$Annotation[]
    | mapkit$Overlay[];

  declare interface mapkit$ItemCollection {
    data: any;
    getFlattenedItemList: mapkit$Annotation[] | mapkit$Overlay[];
    items: mapkit$Annotation[] | mapkit$Overlay[] | mapkit$ItemCollection;
  }

  declare class mapkit$Map {
    tileOverlays: mapkit$TileOverlay[];
    element: Element;
    userLocationAnnotation: mapkit$Annotation;
    annotations: mapkit$Annotation[];
    center: mapkit$Coordinate;
    colorScheme: $Values<typeof mapkit$Map$ColorSchemes>;
    isRotationEnabled: boolean;
    isScrollEnabled: boolean;
    isZoomEnabled: boolean;
    mapType: $Values<typeof mapkit$Map$MapTypes>;
    overlays: mapkit$Overlay[];
    padding: mapkit$Padding;
    region: mapkit$CoordinateRegion;
    rotation: number;
    selectedAnnotation: mapkit$Annotation;
    selectedOverlay: mapkit$Overlay;
    showsCompass: boolean;
    showsMapTypeControl: boolean;
    showsPointsOfInterest: boolean;
    showsScale: boolean;
    showsUserLocation: boolean;
    showsUserLocationControl: boolean;
    showsZoomControl: boolean;
    tintColor: string;
    tracksUserLocation: boolean;
    visibleMapRect: mapkit$MapRect;
    constructor(
      parent?: string | HTMLElement,
      options?: mapkit$MapConstructorOptions
    ): this;
    showItems(
      items: $ReadOnlyArray<mapkit$Annotation> | $ReadOnlyArray<mapkit$Overlay>,
      options?: mapkit$MapShowItemsOptions
    ): mapkit$Annotation[] | mapkit$Overlay[];
    annotationsInMapRect(mapRect: mapkit$MapRect): mapkit$Annotation[];
    addAnnotation(annotation: mapkit$Annotation): mapkit$Annotation;
    addAnnotations(
      annotations: $ReadOnlyArray<mapkit$Annotation>
    ): mapkit$Annotation[];
    removeAnnotation(annotation: mapkit$Annotation): mapkit$Annotation;
    removeAnnotations(
      annotations: $ReadOnlyArray<mapkit$Annotation>
    ): mapkit$Annotation[];
    overlaysAtPoint(point: DOMPoint): mapkit$Overlay[];
    addOverlay(overlay: mapkit$Overlay): mapkit$Overlay;
    addOverlays(overlays: $ReadOnlyArray<mapkit$Overlay>): mapkit$Overlay[];
    removeOverlay(overlay: mapkit$Overlay): mapkit$Overlay;
    removeOverlays(overlays: $ReadOnlyArray<mapkit$Overlay>): mapkit$Overlay[];
    topOverlayAtPoint(point: DOMPoint): mapkit$Overlay;
    addTileOverlay(tileOverlay: mapkit$TileOverlay): mapkit$TileOverlay;
    addTileOverlays(
      tileOverlays: $ReadOnlyArray<mapkit$TileOverlay>
    ): mapkit$TileOverlay[];
    removeTileOverlay(tileOverlay: mapkit$TileOverlay): mapkit$TileOverlay;
    removeTileOverlays(
      tileOverlays: $ReadOnlyArray<mapkit$TileOverlay>
    ): mapkit$TileOverlay[];
    convertCoordinateToPointOnPage(coordinate: mapkit$Coordinate): DOMPoint;
    convertPointOnPageToCoordinate(point: DOMPoint): mapkit$Coordinate;
    addEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
    removeEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
    destroy(): void;
  }

  declare var mapkit$MapEvent: {|
    +RegionChange: "region-change-start", // "region-change-start"
    +RegionChangeEnd: "region-change-end", // "region-change-end"
    +ScrollStart: "scroll-start", // "scroll-start"
    +ScrollEnd: "scroll-end", // "scroll-end"
    +ZoomStart: "zoom-start", // "zoom-start"
    +ZoomEnd: "zoom-end", // "zoom-end"
    +MapTypeChange: "map-type-change" // "map-type-change"
  |};

  declare var mapkit$AnnotationEvent: {|
    +Select: "select", // "select"
    +Deselect: "deselect", // "deselect"
    +DragStart: "drag-start", // "drag-start"
    +Dragging: "dragging", // "dragging"
    +DragEnd: "drag-end" // "drag-end"
  |};

  declare var mapkit$UserLocationEvent: {|
    +UserLocationChange: "user-location-change", // "user-location-change"
    +UserLocationError: "user-location-error" // "user-location-error"
  |};

  declare interface mapkit$MapConstructorOptions {
    visibleMapRect?: mapkit$MapRect;
    region?: mapkit$CoordinateRegion;
    center?: mapkit$Coordinate;
    rotation?: number;
    tintColor?: string;
    colorScheme?: $Values<typeof mapkit$Map$ColorSchemes>;
    mapType?: $Values<typeof mapkit$Map$MapTypes>;
    padding?: mapkit$Padding;
    showsMapTypeControl?: boolean;
    isRotationEnabled?: boolean;
    showsCompass?: boolean;
    isZoomEnabled?: boolean;
    showsZoomControl?: boolean;
    isScrollEnabled?: boolean;
    showsScale?: boolean;
    annotations?: mapkit$Annotation[];
    selectedAnnotation?: mapkit$Annotation;
    overlays?: mapkit$Overlay[];
    selectedOverlay?: mapkit$Overlay;
    showsPointsOfInterest?: boolean;
    showsUserLocation?: boolean;
    tracksUserLocation?: boolean;
    showsUserLocationControl?: boolean;
    annotationForCluster?: (
      clusterAnnotation: mapkit$Annotation
    ) => mapkit$Annotation;
  }

  declare interface mapkit$MapShowItemsOptions {
    animate?: boolean;
    padding?: mapkit$Padding;
    minimumSpan?: mapkit$CoordinateSpan;
  }

  declare var npm$namespace$mapkit$Map: {
    ColorSchemes: typeof mapkit$Map$ColorSchemes,
    MapTypes: typeof mapkit$Map$MapTypes
  };

  declare var mapkit$Map$ColorSchemes: {|
    +Light: "light", // "light"
    +Dark: "dark" // "dark"
  |};

  declare var mapkit$Map$MapTypes: {|
    +Satellite: "satellite", // "satellite"
    +Hybrid: "hybrid", // "hybrid"
    +Standard: "standard" // "standard"
  |};

  declare class mapkit$MapPoint {
    x: number;
    y: number;
    constructor(x: number, y: number): this;
    copy(): mapkit$MapPoint;
    equals(point: mapkit$MapPoint): boolean;
    toCoordinate(): mapkit$Coordinate;
  }

  declare class mapkit$MapRect {
    origin: mapkit$MapPoint;
    size: mapkit$MapSize;
    constructor(x: number, y: number, width: number, height: number): this;
    maxX(): number;
    maxY(): number;
    midX(): number;
    midY(): number;
    minX(): number;
    minY(): number;
    copy(): mapkit$MapRect;
    equals(rect: mapkit$MapRect): boolean;
    scale(scaleFactor: number, scaleCenter: mapkit$MapPoint): mapkit$MapRect;
    toCoordinateRegion(): mapkit$CoordinateRegion;
  }

  declare class mapkit$MapSize {
    width: number;
    height: number;
    constructor(width: number, height: number): this;
    copy(): mapkit$MapSize;
    equals(size: mapkit$MapSize): boolean;
  }

  declare type mapkit$Overlay = {
    style: mapkit$Style,
    map: mapkit$Map,
    addEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void,
    removeEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void
  } & mapkit$OverlayOptions;

  declare interface mapkit$OverlayOptions {
    data?: any;
    visible?: boolean;
    enabled?: boolean;
    selected?: boolean;
  }

  declare class mapkit$PolygonOverlay {
    points: mapkit$Coordinate[];
    data: any;
    enabled: boolean;
    map: mapkit$Map;
    selected: boolean;
    style: mapkit$Style;
    visible: boolean;
    constructor(
      points: $ReadOnlyArray<mapkit$Coordinate>,
      options?: mapkit$StylesOverlayOptions
    ): this;
    addEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
    removeEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
  }

  declare class mapkit$Padding {
    latitude: number;
    longitude: number;
    constructor(options?: mapkit$PaddingConstructorOptions | number[]): this;
    copy(): mapkit$Coordinate;
    equals(coordinate: mapkit$Coordinate): boolean;
    toMapPoint(): mapkit$MapPoint;
    toUnwrappedMapPoint(): mapkit$MapPoint;
  }

  declare interface mapkit$PaddingConstructorOptions {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }

  declare class mapkit$PolylineOverlay {
    points: mapkit$Coordinate[];
    data: any;
    enabled: boolean;
    map: mapkit$Map;
    selected: boolean;
    style: mapkit$Style;
    visible: boolean;
    constructor(
      points: $ReadOnlyArray<mapkit$Coordinate>,
      options?: mapkit$StylesOverlayOptions
    ): this;
    addEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
    removeEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
  }

  declare class mapkit$Search {
    constructor(options?: mapkit$SearchConstructorOptions): this;
    search(
      query: string | mapkit$SearchAutocompleteResult,
      callback: mapkit$SearchCallback | mapkit$SearchDelegate,
      options?: mapkit$SearchOptions
    ): number;
    autocomplete(
      query: string,
      callback: mapkit$AutoCompleteCallback | mapkit$SearchDelegate,
      options?: mapkit$SearchOptions
    ): number;
    cancel(id: number): boolean;
  }

  declare type mapkit$SearchCallback = () => void;

  declare type mapkit$AutoCompleteCallback = () => void;

  declare interface mapkit$SearchDelegate {
    autocompleteDidComplete?: (data: mapkit$SearchAutocompleteResponse) => void;
    autocompleteDidError?: (error: Error) => void;
    searchDidComplete?: (response: mapkit$SearchResponse) => void;
    searchDidError?: (error: Error) => void;
  }

  declare interface mapkit$SearchAutocompleteResponse {
    query: string;
    results: mapkit$SearchAutocompleteResult[];
  }

  declare interface mapkit$SearchResponse {
    query: string;
    boundingRegion: mapkit$CoordinateRegion;
    places: mapkit$Place[];
  }

  declare interface mapkit$SearchAutocompleteResult {
    displayLines: string[];
    coordinate: mapkit$Coordinate;
  }

  declare interface mapkit$SearchOptions {
    language?: string;
    coordinate?: mapkit$Coordinate;
    region?: mapkit$CoordinateRegion;
  }

  declare interface mapkit$SearchConstructorOptions {
    language?: string;
    getsUserLocation?: boolean;
    coordinate?: mapkit$Coordinate;
    region?: mapkit$CoordinateRegion;
  }

  declare class mapkit$Style {
    strokeColor: string;
    strokeOpacity: number;
    lineWidth: number;
    lineCap: string;
    lineJoin: string;
    lineDash: number[];
    lineDashOffset: number;
    fillColor: string;
    fillOpacity: number;
    fillRule: string;
    constructor(options?: mapkit$StyleConstructorOptions): this;
  }

  declare interface mapkit$StyleConstructorOptions {
    strokeColor?: string;
    strokeOpacity?: number;
    lineWidth?: number;
    lineCap?: string;
    lineJoin?: string;
    lineDash?: number[];
    lineDashOffset?: number;
    fillColor?: string;
    fillOpacity?: number;
    fillRule?: string;
  }

  declare type mapkit$StylesOverlayOptions = {
    style?: mapkit$Style
  } & mapkit$OverlayOptions;

  declare class mapkit$TileOverlay {
    urlTemplate: string | mapkit$TileCallbackFunction;
    data: { [key: string]: any };
    maximumZ: number;
    minimumZ: number;
    opacity: number;
    constructor(
      urlTemplate: string | mapkit$TileCallbackFunction,
      options?: mapkit$TileOverlayConstructorOptions
    ): this;
    reload(): void;
    addEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
    removeEventListener(
      type: string,
      listener: (type: string) => void,
      thisObject?: any
    ): void;
  }

  declare type mapkit$TileCallbackFunction = (
    x: number,
    y: number,
    z: number,
    scale: number,
    data: any
  ) => string;

  declare interface mapkit$TileOverlayConstructorOptions {
    minimumZ?: number;
    maximumZ?: number;
    opacity?: number;
    data?: { [key: string]: any };
  }
}
