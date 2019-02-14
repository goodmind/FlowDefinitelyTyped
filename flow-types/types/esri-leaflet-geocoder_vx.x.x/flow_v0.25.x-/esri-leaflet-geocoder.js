declare module "leaflet" {
  declare var npm$namespace$esri: {
    Geocoding: typeof npm$namespace$esri$Geocoding
  };

  declare var npm$namespace$esri$Geocoding: {
    geosearch: typeof esri$Geocoding$geosearch,
    geocodeService: typeof esri$Geocoding$geocodeService,
    geocode: typeof esri$Geocoding$geocode,
    suggest: typeof esri$Geocoding$suggest,
    reverseGeocode: typeof esri$Geocoding$reverseGeocode,
    arcgisOnlineProvider: typeof esri$Geocoding$arcgisOnlineProvider,
    geocodeServiceProvider: typeof esri$Geocoding$geocodeServiceProvider,
    featureLayerProvider: typeof esri$Geocoding$featureLayerProvider,
    mapServiceProvider: typeof esri$Geocoding$mapServiceProvider,
    Geosearch: typeof esri$Geocoding$Geosearch,

    GeocodeService: typeof esri$Geocoding$GeocodeService,
    Geocode: typeof esri$Geocoding$Geocode,
    Suggest: typeof esri$Geocoding$Suggest,
    ReverseGeocode: typeof esri$Geocoding$ReverseGeocode,
    ArcgisOnlineProvider: typeof esri$Geocoding$ArcgisOnlineProvider,
    GeocodeServiceProvider: typeof esri$Geocoding$GeocodeServiceProvider,
    FeatureLayerProvider: typeof esri$Geocoding$FeatureLayerProvider,
    MapServiceProvider: typeof esri$Geocoding$MapServiceProvider
  };
  declare type esri$Geocoding$GeosearchConstructor = (
    options?: Geocoding$GeosearchObject
  ) => Geocoding$Geosearch;

  declare type esri$Geocoding$Geosearch = Geocoding$GeosearchControl & Evented;

  declare type esri$Geocoding$GeosearchControl = {
    clear(): this,
    clearSuggestions(): this,
    disable(): this,
    enable(): this
  } & Control;

  declare var esri$Geocoding$Geosearch: esri$Geocoding$GeosearchConstructor;

  declare function esri$Geocoding$geosearch(
    options?: Geocoding$GeosearchObject
  ): esri$Geocoding$Geosearch;

  declare interface esri$Geocoding$GeosearchObject {
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

  declare class esri$Geocoding$GeocodeService mixins Service {
    constructor(options?: Geocoding$GeocodeServiceOptions): this;
    geocode(): Geocoding$Geocode;
    suggest(): Geocoding$Suggest;
    reverse(): Geocoding$ReverseGeocode;
  }

  declare function esri$Geocoding$geocodeService(
    options?: Geocoding$GeocodeServiceOptions
  ): esri$Geocoding$GeocodeService;

  declare type esri$Geocoding$GeocodeServiceOptions = {
    supportsSuggest?: boolean
  } & ServiceOptions;

  declare class esri$Geocoding$Geocode mixins Task {
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

  declare function esri$Geocoding$geocode(
    options?: TaskOptions | Service
  ): esri$Geocoding$Geocode;

  declare class esri$Geocoding$Suggest mixins Task {
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

  declare function esri$Geocoding$suggest(
    options?: TaskOptions | Service
  ): esri$Geocoding$Suggest;

  declare class esri$Geocoding$ReverseGeocode mixins Task {
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

  declare function esri$Geocoding$reverseGeocode(
    options?: TaskOptions | Service
  ): esri$Geocoding$ReverseGeocode;

  declare interface esri$Geocoding$GeosearchProvider {
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

  declare type esri$Geocoding$GeosearchCallback = (
    error: any | void,
    results: any
  ) => void;

  declare interface esri$Geocoding$BaseProviderOptions {
    label?: string;
    maxResults?: number;
    attribution?: string;
    token?: string | null;
  }

  declare class esri$Geocoding$ArcgisOnlineProvider
    mixins GeocodeService, GeosearchProvider {
    constructor(options?: Geocoding$ArcgisOnlineProviderOptions): this;
    suggestions(
      text: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: esri$Geocoding$GeosearchCallback
    ): esri$Geocoding$Suggest;
    results(
      text: string,
      key: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: esri$Geocoding$GeosearchCallback
    ): esri$Geocoding$Geocode;
  }

  declare function esri$Geocoding$arcgisOnlineProvider(
    options?: Geocoding$ArcgisOnlineProviderOptions
  ): esri$Geocoding$ArcgisOnlineProvider;

  declare type esri$Geocoding$ArcgisOnlineProviderOptions = {
    countries?: string | string[],
    categories?: string | string[],
    forStorage?: boolean
  } & BaseProviderOptions;

  declare class esri$Geocoding$GeocodeServiceProvider
    mixins GeocodeService, GeosearchProvider {
    constructor(options?: Geocoding$GeocodeServiceProviderOptions): this;
    suggestions(
      text: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: esri$Geocoding$GeosearchCallback
    ): esri$Geocoding$Suggest;
    results(
      text: string,
      key: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: esri$Geocoding$GeosearchCallback
    ): esri$Geocoding$Geocode;
  }

  declare function esri$Geocoding$geocodeServiceProvider(
    options?: Geocoding$GeocodeServiceProviderOptions
  ): esri$Geocoding$GeocodeServiceProvider;

  declare type esri$Geocoding$GeocodeServiceProviderOptions = {
    url: string
  } & BaseProviderOptions;

  declare class esri$Geocoding$FeatureLayerProvider
    mixins FeatureLayerService, GeosearchProvider {
    constructor(options?: Geocoding$FeatureLayerProviderOptions): this;
    suggestions(
      text: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: esri$Geocoding$GeosearchCallback
    ): Query;
    results(
      text: string,
      key: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: esri$Geocoding$GeosearchCallback
    ): Query;
  }

  declare function esri$Geocoding$featureLayerProvider(
    options?: Geocoding$FeatureLayerProviderOptions
  ): esri$Geocoding$FeatureLayerProvider;

  declare type esri$Geocoding$FeatureLayerProviderOptions = {
    url: string,
    searchFields?: string | string[],
    bufferRadius?: number,
    formatSuggestion?: (featureInformation: any) => string
  } & BaseProviderOptions;

  declare class esri$Geocoding$MapServiceProvider
    mixins MapService, GeosearchProvider {
    constructor(options?: Geocoding$MapServiceProviderOptions): this;
    suggestions(
      text: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: esri$Geocoding$GeosearchCallback
    ): Find;
    results(
      text: string,
      key: string,
      bounds: LatLngBoundsExpression | void | null,
      callback: esri$Geocoding$GeosearchCallback
    ): Query | Find;
  }

  declare function esri$Geocoding$mapServiceProvider(
    options?: Geocoding$MapServiceProviderOptions
  ): esri$Geocoding$MapServiceProvider;

  declare type esri$Geocoding$MapServiceProviderOptions = {
    url: string,
    searchFields: string | string[],
    layers: number | number[],
    bufferRadius: number | number[],
    formatSuggestion(featureInformation: any): string
  } & BaseProviderOptions;

  declare interface esri$Geocoding$ResultObject {
    text?: string;
    bounds?: LatLngBoundsExpression;
    latlng?: LatLngExpression;
    properties?: any;
    geojson?: GeoJSON;
    [key: string]: any;
  }

  declare interface esri$Geocoding$Results {
    bounds: LatLngBoundsExpression;
    latlng: LatLngExpression;
    results: esri$Geocoding$ResultObject[];
  }
}
declare module "esri-leaflet-geocoder" {
  import typeof * as L from "leaflet";
}
