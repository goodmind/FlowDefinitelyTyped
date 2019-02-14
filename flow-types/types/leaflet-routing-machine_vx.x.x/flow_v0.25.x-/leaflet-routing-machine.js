declare module "leaflet" {
  declare var npm$namespace$Routing: {
    control: typeof Routing$control,
    itinerary: typeof Routing$itinerary,
    line: typeof Routing$line,
    plan: typeof Routing$plan,
    osrmv1: typeof Routing$osrmv1,
    formatter: typeof Routing$formatter,
    waypoint: typeof Routing$waypoint,

    Control: typeof Routing$Control,
    Itinerary: typeof Routing$Itinerary,
    Plan: typeof Routing$Plan,
    Line: typeof Routing$Line,
    OSRMv1: typeof Routing$OSRMv1,
    Formatter: typeof Routing$Formatter,
    ItineraryBuilder: typeof Routing$ItineraryBuilder,
    Localization: typeof Routing$Localization
  };
  declare class Routing$Control mixins Itinerary {
    constructor(options?: Routing$RoutingControlOptions): this;
    getWaypoints(): Routing$Waypoint[];
    setWaypoints(waypoints: Routing$Waypoint[] | LatLng[]): this;
    spliceWaypoints(
      index: number,
      waypointsToRemove: number,
      ...wayPoints: Routing$Waypoint[]
    ): Routing$Waypoint[];
    getPlan(): Routing$Plan;
    getRouter(): Routing$IRouter;
    route(): void;
    on(type: string, fn: (event: any) => void, context?: any): this;
  }

  declare type Routing$RoutingControlOptions = {
    waypoints?: Routing$Waypoint[] | LatLng[],
    router?: Routing$IRouter,
    plan?: Routing$Plan,
    geocoder?: any,
    fitSelectedRoutes?: "smart" | boolean,
    lineOptions?: Routing$LineOptions,
    routeLine?: (
      route: Routing$IRoute,
      options: Routing$LineOptions
    ) => Routing$Line,
    autoRoute?: boolean,
    routeWhileDragging?: boolean,
    routeDragInterval?: number,
    waypointMode?: string,
    useZoomParameter?: boolean,
    showAlternatives?: boolean,
    altLineOptions?: Routing$LineOptions
  } & ItineraryOptions;

  declare class Routing$Itinerary mixins L.Control {
    constructor(options: Routing$ItineraryOptions): this;
    setAlternatives(routes: Routing$IRoute[]): any;
    show(): void;
    hide(): void;
  }

  declare interface Routing$ItineraryOptions {
    pointMarkerStyle?: PathOptions;
    summaryTemplate?: string;
    distanceTemplate?: string;
    timeTemplate?: string;
    containerClassName?: string;
    alternativeClassName?: string;
    minimizedClassName?: string;
    itineraryClassName?: string;
    show?: boolean;
    formatter?: Routing$Formatter;
    itineraryFormatter?: Routing$ItineraryBuilder;
    collapsible?: boolean;
    collapseBtn?: (itinerary: Routing$Itinerary) => void;
    collapseBtnClass?: string;
    totalDistanceRoundingSensitivity?: number;
  }

  declare class Routing$Plan mixins Layer {
    constructor(
      waypoints: Routing$Waypoint[] | LatLng[],
      options?: Routing$PlanOptions
    ): this;
    isReady(): boolean;
    getWaypoints(): Routing$Waypoint[];
    setWaypoints(waypoints: Routing$Waypoint[] | LatLng[]): any;
    spliceWaypoints(
      index: number,
      waypointsToRemove: number,
      ...wayPoints: Routing$Waypoint[]
    ): Routing$Waypoint[];
    createGeocoders(): any;
  }

  declare interface Routing$PlanOptions {
    geocoder?: any;
    addWaypoints?: boolean;
    draggableWaypoints?: boolean;
    dragStyles?: PathOptions[];
    maxGeocoderTolerance?: number;
    geocoderPlaceholder?: (
      waypointIndex: number,
      numberWaypoints: number
    ) => string;
    geocodersClassName?: string;
    geocoderClass?: (waypointIndex: number, numberWaypoints: number) => void;
    waypointNameFallback?: (latLng: LatLng) => string;
    createGeocoder?: (
      waypointIndex: number,
      numberWaypoints: number,
      plan: Routing$Plan
    ) => {};
    addButtonClassName?: string;
    createMarker?: (
      waypointIndex: number,
      waypoint: Routing$Waypoint,
      numberWaypoints: number
    ) => Marker;
    routeWhileDragging?: boolean;
    reverseWaypoints?: boolean;
  }

  declare class Routing$Line mixins LayerGroup {
    constructor(route: Routing$IRoute, options?: Routing$LineOptions): this;
    getBounds(): LatLngBounds;
  }

  declare interface Routing$LineOptions {
    styles?: PathOptions[];
    missingRouteStyles?: PathOptions[];
    addWaypoints?: boolean;
  }

  declare class Routing$OSRMv1 mixins IRouter {
    constructor(options?: Routing$OSRMOptions): this;
    route(
      waypoints: Routing$Waypoint[],
      callback: (args?: any) => void,
      context?: {},
      options?: Routing$RoutingOptions
    ): void;
    buildRouteUrl(
      waypoints: Routing$Waypoint[],
      options: Routing$RoutingOptions
    ): string;
  }

  declare interface Routing$OSRMOptions {
    serviceUrl?: string;
    timeout?: number;
    profile?: string;
    polylinePrecision?: number;
    useHints?: boolean;
    routingOptions?: any;
  }

  declare class Routing$Formatter {
    constructor(options?: Routing$FormatterOptions): this;
    formatDistance(d: number, precision?: number): string;
    formatTime(t: number): string;
    formatInstruction(instruction: Routing$IInstruction): string;
  }

  declare interface Routing$FormatterOptions {
    language?: string;
    units?: string;
    roundingSensitivity?: number;
    unitNames?: {};
  }

  declare class Routing$ItineraryBuilder {
    constructor(): this;
    createContainer(className: string): HTMLElement;
    createStepsContainer(container: HTMLElement): void;
    createStep(text: string, distance: string, steps: HTMLElement): void;
  }

  declare class Routing$Localization {
    constructor(lang: string): this;
    localize(text: string): string;
  }

  declare interface Routing$Waypoint {
    latLng: LatLng;
    name?: string;
    options?: Routing$WaypointOptions;
  }

  declare interface Routing$WaypointOptions {
    allowUTurn?: boolean;
  }

  declare interface Routing$RoutingEvent {
    waypoints: Routing$Waypoint[];
  }

  declare interface Routing$RoutingResultEvent {
    waypoints: Routing$Waypoint[];
    routes: Routing$IRoute[];
  }

  declare interface Routing$RoutingErrorEvent {
    error: Routing$IError;
  }

  declare interface Routing$RouteSelectedEvent {
    route: Routing$IRoute;
  }

  declare interface Routing$WaypointsSplicedEvent {
    index: number;
    nRemoved: number;
    added: Routing$Waypoint[];
  }

  declare interface Routing$LineTouchedEvent {
    afterIndex: number;
    latlng: number;
  }

  declare interface Routing$GeocodingEvent {
    waypointIndex: number;
    waypoint: Routing$Waypoint;
  }

  declare interface Routing$RoutingOptions {
    z: number;
    allowUTurns: boolean;
    geometryOnly: boolean;
    fileFormat: string;
    simplifyGeometry: boolean;
  }

  declare interface Routing$IRouter {
    route(
      waypoints: Routing$Waypoint[],
      callback: (error?: Routing$IError, routes?: Routing$IRoute[]) => any,
      context?: {},
      options?: Routing$RoutingOptions
    ): void;
  }

  declare interface Routing$IRoute {
    name?: string;
    summary?: Routing$IRouteSummary;
    coordinates?: LatLng[];
    waypoints?: LatLng[];
    instructions?: Routing$IInstruction[];
  }

  declare interface Routing$IRouteSummary {
    totalTime: number;
    totalDistance: number;
  }

  declare interface Routing$IInstruction {
    distance: number;
    time: number;
    text?: number;
    type?:
      | "Straight"
      | "SlightRight"
      | "Right"
      | "SharpRight"
      | "TurnAround"
      | "SharpLeft"
      | "Left"
      | "SlightLeft"
      | "WaypointReached"
      | "Roundabout"
      | "StartAt"
      | "DestinationReached"
      | "EnterAgainstAllowedDirection"
      | "LeaveAgainstAllowedDirection";
    road?: string;
    direction?: string;
    exit?: number;
  }

  declare interface Routing$IGeocoderElement {
    container: HTMLElement;
    input: HTMLElement;
    closeButton: HTMLElement;
  }

  declare interface Routing$IError {
    status: string | number;
    message: string;
  }

  declare function Routing$control(
    options?: Routing$RoutingControlOptions
  ): Routing$Control;

  declare function Routing$itinerary(
    options?: Routing$ItineraryOptions
  ): Routing$Itinerary;

  declare function Routing$line(
    route: Routing$IRoute,
    options?: Routing$LineOptions
  ): Routing$Line;

  declare function Routing$plan(
    waypoints: Routing$Waypoint[] | LatLng[],
    options?: Routing$PlanOptions
  ): Routing$Plan;

  declare function Routing$osrmv1(
    options?: Routing$OSRMOptions
  ): Routing$OSRMv1;

  declare function Routing$formatter(
    options?: Routing$FormatterOptions
  ): Routing$Formatter;

  declare function Routing$waypoint(
    latLng: LatLng,
    name?: string,
    options?: Routing$WaypointOptions
  ): Routing$Waypoint;

  declare var npm$namespace$routing: {
    control: typeof routing$control,
    itinerary: typeof routing$itinerary,
    line: typeof routing$line,
    plan: typeof routing$plan,
    osrmv1: typeof routing$osrmv1,
    formatter: typeof routing$formatter,
    waypoint: typeof routing$waypoint
  };
  declare function routing$control(
    options?: Routing$RoutingControlOptions
  ): Routing$Control;

  declare function routing$itinerary(
    options?: Routing$ItineraryOptions
  ): Routing$Itinerary;

  declare function routing$line(
    route: Routing$IRoute,
    options?: Routing$LineOptions
  ): Routing$Line;

  declare function routing$plan(
    waypoints: Routing$Waypoint[] | LatLng[],
    options?: Routing$PlanOptions
  ): Routing$Plan;

  declare function routing$osrmv1(
    options?: Routing$OSRMOptions
  ): Routing$OSRMv1;

  declare function routing$formatter(
    options?: Routing$FormatterOptions
  ): Routing$Formatter;

  declare function routing$waypoint(
    latLng: LatLng,
    name?: string,
    options?: Routing$WaypointOptions
  ): Routing$Waypoint;
}
declare module "leaflet-routing-machine" {
  import typeof * as L from "leaflet";
}
