declare module "leaflet" {
  declare var npm$namespace$Geocoding: {
    geosearch: typeof Geocoding$geosearch,
    geocodeService: typeof Geocoding$geocodeService,
    geocode: typeof Geocoding$geocode,
    suggest: typeof Geocoding$suggest,
    reverseGeocode: typeof Geocoding$reverseGeocode,
    arcgisOnlineProvider: typeof Geocoding$arcgisOnlineProvider,
    geocodeServiceProvider: typeof Geocoding$geocodeServiceProvider,
    featureLayerProvider: typeof Geocoding$featureLayerProvider,
    mapServiceProvider: typeof Geocoding$mapServiceProvider,
    Geosearch: typeof Geocoding$Geosearch
  };
  declare type Geocoding$GeosearchConstructor = (
    options?: Geocoding$GeosearchObject
  ) => Geocoding$Geosearch;

  declare type Geocoding$Geosearch = Geocoding$GeosearchControl & Evented;

  declare type Geocoding$GeosearchControl = {
    clear(): this,
    clearSuggestions(): this,
    disable(): this,
    enable(): this
  } & Control;

  declare var Geocoding$Geosearch: Geocoding$GeosearchConstructor;

  declare function Geocoding$geosearch(
    options?: Geocoding$GeosearchObject
  ): Geocoding$Geosearch;

  declare interface Geocoding$GeosearchObject {
    position?: ControlPosition;
    zoomToResult?: boolean;
    useMapBounds?: boolean | number;
    collapseAfterResult?: boolean;
    expanded?: boolean;
    allowMultipleResults?: boolean;
    providers?: Geocoding$GeosearchProvider[];
    placeholder?: string;
    title?: string;
    searchBounds?: LatLngBoundsExpression | null;
  }

  declare class Geocoding$GeocodeService mixins Service {
    constructor(options?: Geocoding$GeocodeServiceOptions): this;
    geocode(): Geocoding$Geocode;
    suggest(): Geocoding$Suggest;
    reverse(): Geocoding$ReverseGeocode;
  }

  declare function Geocoding$geocodeService(
    options?: Geocoding$GeocodeServiceOptions
  ): Geocoding$GeocodeService;

  declare type Geocoding$GeocodeServiceOptions = {
    supportsSuggest?: boolean
  } & ServiceOptions;

  declare class Geocoding$Geocode mixins Task {
    constructor(options?: TaskOptions | Service): this;
    text(text: string): this;
    address(text: string): this;
    neighborhood(text: string): this;
    city(text: string): this;
    subregion(text: string): this;
    region(text: string): this;
    postal(text: string): this;
    country(text: string): this;
    category(text: string): this;
    within(bounds: LatLngBoundsExpression): this;
    nearby(latlng: LatLngExpression, distance: number): this;
    run(
      callback: (
        error: any | void,
        results: {
          results: any[]
        },
        response: any
      ) => void,
      context?: any
    ): this;
  }

  declare function Geocoding$geocode(
    options?: TaskOptions | Service
  ): Geocoding$Geocode;

  declare class Geocoding$Suggest mixins Task {
    constructor(options?: TaskOptions | Service): this;
    text(text: string): this;
    category(text: string): this;
    within(bounds: LatLngBoundsExpression): this;
    nearby(latlng: LatLngExpression, distance: number): this;
    run(
      callback: (error: any | void, results: any, response: any) => void,
      context?: any
    ): this;
  }

  declare function Geocoding$suggest(
    options?: TaskOptions | Service
  ): Geocoding$Suggest;

  declare class Geocoding$ReverseGeocode mixins Task {
    constructor(options?: TaskOptions | Service): this;
    latlng(latlng: LatLngExpression): this;
    distance(distance: number): this;
    language(language: string): this;
    run(
      callback: (
        error: any | void,
        results: {
          latlng: LatLng,
          address: string
        },
        response: any
      ) => void,
      context?: any
    ): this;
  }

  declare function Geocoding$reverseGeocode(
    options?: TaskOptions | Service
  ): Geocoding$ReverseGeocode;

  declare interface Geocoding$GeosearchProvider {
    suggestions(
      text: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: Geocoding$GeosearchCallback
    ): Task;
    results(
      text: string,
      key: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: Geocoding$GeosearchCallback
    ): Task;
  }

  declare type Geocoding$GeosearchCallback = (
    error: any | void,
    results: any
  ) => void;

  declare interface Geocoding$BaseProviderOptions {
    label?: string;
    maxResults?: number;
    attribution?: string;
    token?: string | null;
  }

  declare class Geocoding$ArcgisOnlineProvider
    mixins Geocoding$GeocodeService, Geocoding$GeosearchProvider {
    constructor(options?: Geocoding$ArcgisOnlineProviderOptions): this;
    suggestions(
      text: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: Geocoding$GeosearchCallback
    ): Geocoding$Suggest;
    results(
      text: string,
      key: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: Geocoding$GeosearchCallback
    ): Geocoding$Geocode;
  }

  declare function Geocoding$arcgisOnlineProvider(
    options?: Geocoding$ArcgisOnlineProviderOptions
  ): Geocoding$ArcgisOnlineProvider;

  declare type Geocoding$ArcgisOnlineProviderOptions = {
    countries?: string | string[],
    categories?: string | string[],
    forStorage?: boolean
  } & Geocoding$BaseProviderOptions;

  declare class Geocoding$GeocodeServiceProvider
    mixins Geocoding$GeocodeService, Geocoding$GeosearchProvider {
    constructor(options?: Geocoding$GeocodeServiceProviderOptions): this;
    suggestions(
      text: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: Geocoding$GeosearchCallback
    ): Geocoding$Suggest;
    results(
      text: string,
      key: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: Geocoding$GeosearchCallback
    ): Geocoding$Geocode;
  }

  declare function Geocoding$geocodeServiceProvider(
    options?: Geocoding$GeocodeServiceProviderOptions
  ): Geocoding$GeocodeServiceProvider;

  declare type Geocoding$GeocodeServiceProviderOptions = {
    url: string
  } & Geocoding$BaseProviderOptions;

  declare class Geocoding$FeatureLayerProvider
    mixins FeatureLayerService, Geocoding$GeosearchProvider {
    constructor(options?: Geocoding$FeatureLayerProviderOptions): this;
    suggestions(
      text: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: Geocoding$GeosearchCallback
    ): Query;
    results(
      text: string,
      key: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: Geocoding$GeosearchCallback
    ): Query;
  }

  declare function Geocoding$featureLayerProvider(
    options?: Geocoding$FeatureLayerProviderOptions
  ): Geocoding$FeatureLayerProvider;

  declare type Geocoding$FeatureLayerProviderOptions = {
    url: string,
    searchFields?: string | string[],
    bufferRadius?: number,
    formatSuggestion?: (featureInformation: any) => string
  } & Geocoding$BaseProviderOptions;

  declare class Geocoding$MapServiceProvider
    mixins MapService, Geocoding$GeosearchProvider {
    constructor(options?: Geocoding$MapServiceProviderOptions): this;
    suggestions(
      text: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: Geocoding$GeosearchCallback
    ): Find;
    results(
      text: string,
      key: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: Geocoding$GeosearchCallback
    ): Query | Find;
  }

  declare function Geocoding$mapServiceProvider(
    options?: Geocoding$MapServiceProviderOptions
  ): Geocoding$MapServiceProvider;

  declare type Geocoding$MapServiceProviderOptions = {
    url: string,
    searchFields: string | string[],
    layers: number | number[],
    bufferRadius: number | number[],
    formatSuggestion(featureInformation: any): string
  } & Geocoding$BaseProviderOptions;

  declare interface Geocoding$ResultObject {
    text?: string;
    bounds?: LatLngBoundsExpression;
    latlng?: LatLngExpression;
    properties?: any;
    geojson?: GeoJSON;
    [key: string]: any;
  }

  declare interface Geocoding$Results {
    bounds: LatLngBoundsExpression;
    latlng: LatLngExpression;
    results: Geocoding$ResultObject[];
  }
}
declare module "esri-leaflet-geocoder" {
  import typeof * as L from "leaflet";
}
