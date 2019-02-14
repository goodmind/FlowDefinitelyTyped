declare module "global" {
  declare var npm$namespace$L: {
    mapbox: typeof npm$namespace$L$mapbox
  };

  declare var npm$namespace$L$mapbox: {
    map: typeof L$mapbox$map,
    tileLayer: typeof L$mapbox$tileLayer,
    gridLayer: typeof L$mapbox$gridLayer,
    featureLayer: typeof L$mapbox$featureLayer,
    styleLayer: typeof L$mapbox$styleLayer,
    geocoder: typeof L$mapbox$geocoder,
    infoControl: typeof L$mapbox$infoControl,
    legendControl: typeof L$mapbox$legendControl,
    gridControl: typeof L$mapbox$gridControl,
    geocoderControl: typeof L$mapbox$geocoderControl,
    shareControl: typeof L$mapbox$shareControl,
    sanitize: typeof L$mapbox$sanitize,
    template: typeof L$mapbox$template,
    accessToken: typeof L$mapbox$accessToken,

    marker: typeof npm$namespace$L$mapbox$marker,
    simplestyle: typeof npm$namespace$L$mapbox$simplestyle,
    config: typeof npm$namespace$L$mapbox$config
  };
  declare var L$mapbox$accessToken: string;

  /**
   * Create and automatically configure a map with layers, markers, and interactivity.
   */
  declare function L$mapbox$map(
    element: string | Element,
    idOrTileJson: any,
    options?: mapbox$MapOptions
  ): mapbox$Map;

  declare type L$mapbox$MapOptions = {
    featureLayer?: mapbox$FeatureLayerOptions,
    gridLayer?: any,
    tileLayer?: mapbox$TileLayerOptions,
    infoControl?: mapbox$ControlOptions,
    legendControl?: mapbox$ControlOptions,
    shareControl?: mapbox$ShareControlOptions
  } & undefined.MapOptions;

  declare type L$mapbox$FilterFunction = (feature: any) => boolean;

  declare type L$mapbox$Map = {
    tileLayer: mapbox$TileLayer,
    gridLayer: mapbox$GridLayer,
    featureLayer: mapbox$FeatureLayer,
    gridControl: mapbox$GridControl,
    infoControl: mapbox$InfoControl,
    legendControl: mapbox$LegendControl,
    shareControl: mapbox$ShareControl,
    getTileJSON(): any
  } & Leaflet.Map;

  /**
   * You can add a tiled layer to your map with L.mapbox.tileLayer(), a simple interface to layers from Mapbox and elsewhere.
   */
  declare function L$mapbox$tileLayer(
    idOrTileJson: string,
    options?: mapbox$TileLayerOptions
  ): mapbox$TileLayer;

  declare type L$mapbox$TileLayerOptions = {
    retinaVersion?: string
  } & Leaflet.TileLayerOptions;

  declare type L$mapbox$TileLayer = {
    /**
     * Returns this layer's TileJSON object which determines its tile source, zoom bounds and other metadata.
     */
    getTileJSON(): any,

    /**
     * Set the image format of tiles in this layer. You can use lower-quality tiles in order to load maps faster
     */
    setFormat(format: string): L$mapbox$TileLayer
  } & Leaflet.TileLayer;

  /**
   * An L.mapbox.gridLayer loads UTFGrid tiles of interactivity into your map, which you can easily access with L.mapbox.gridControl.
   */
  declare function L$mapbox$gridLayer(idOrTileJson: any): mapbox$GridLayer;

  declare interface L$mapbox$GridLayer {
    active(): boolean;
    addTo(map: L$mapbox$Map): any;
    onAdd(map: L$mapbox$Map): any;
    onRemove(): any;

    /**
     * Bind an event handler to a given event on this L.mapbox.gridLayer instance. GridLayers expose a number of useful events that give you access to UTFGrid data as the user interacts with the map.
     */
    on(event: string, handler: Function, context?: any): any;

    /**
     * Returns this layer's TileJSON object which determines its tile source, zoom bounds and other metadata.
     */
    getTileJSON(): any;

    /**
     * Load data for a given latitude, longitude point on the map, and call the callback function with that data, if any.
     */
    getData(latlng: LatLng, callback: Function): any;
  }

  /**
   * L.mapbox.featureLayer provides an easy way to integrate GeoJSON from Mapbox and elsewhere into your map.
   */
  declare function L$mapbox$featureLayer(
    idOrGeoJson?: any,
    options?: mapbox$FeatureLayerOptions
  ): mapbox$FeatureLayer;

  declare interface L$mapbox$FeatureLayerOptions {
    filter?: L$mapbox$FilterFunction;
    sanitizer?: (template: string) => string;
  }

  declare type L$mapbox$FeatureLayer = {
    /**
     * Load GeoJSON data for this layer from the URL given by url.
     */
    loadURL(url: string): any,

    /**
     * Load marker GeoJSON data from a map with the given id on Mapbox.
     */
    loadID(id: string): any,

    /**
     * Sets the filter function for this data layer.
     */
    setFilter(filter: L$mapbox$FilterFunction): any,

    /**
     * Gets the filter function for this data layer.
     */
    getFilter(): L$mapbox$FilterFunction,

    /**
     * Set the contents of a markers layer: run the provided features through
     * the filter function and then through the factory function to create
     * elements for the map. If the layer already has features, they are
     * replaced with the new features. An empty array will clear the
     * layer of all features.
     */
    setGeoJSON(geojson: any): L$mapbox$FeatureLayer,

    /**
     * Get the contents of this layer as GeoJSON data.
     */
    getGeoJSON(): any
  } & FeatureGroup<ILayer>;

  /**
   * L.mapbox.styleLayer provides a way to integrate styles created with Mapbox Studio into your map.
   */
  declare function L$mapbox$styleLayer(
    url: string,
    options?: mapbox$StyleLayerOptions
  ): mapbox$StyleLayer;

  declare type L$mapbox$StyleLayerOptions = {
    sanitizer?: (template: string) => string
  } & Leaflet.TileLayerOptions;

  declare type L$mapbox$StyleLayer = Leaflet.TileLayer;

  /**
   * A low-level interface to geocoding, useful for more complex uses and reverse-geocoding.
   */
  declare function L$mapbox$geocoder(id: string): mapbox$Geocoder;

  declare interface L$mapbox$Geocoder {
    getURL(): string;
    setURL(url: string): any;
    setID(id: string): any;
    setTileJSON(tilejson: any): any;
    queryURL(url: string): string;

    /**
     * Queries the geocoder with a query string, and returns its result, if any.
     */
    query(queryString: string, callback: Function): any;

    /**
     * Queries the geocoder with a location, and returns its result, if any.
     */
    reverseQuery(location: any, callback: Function): any;
  }

  declare type L$mapbox$ControlOptions = {
    sanitizer?: (template: string) => string
  } & Leaflet.ControlOptions;

  /**
   * A map control that shows a toggleable info container. If set, attribution is auto-detected from active layers and added to the info container.
   */
  declare function L$mapbox$infoControl(
    options?: L$mapbox$ControlOptions
  ): mapbox$InfoControl;

  declare type L$mapbox$InfoControl = {
    onAdd(map: L$mapbox$Map): any,
    onRemove(map: L$mapbox$Map): any,

    /**
     * Adds an info string to infoControl.
     */
    addInfo(info: string): any,

    /**
     * Removes an info string from infoControl
     */
    removeInfo(info: string): any
  } & Control;

  /**
   * A map control that shows legends added to maps in Mapbox.
   * Legends are auto-detected from active layers.
   */
  declare function L$mapbox$legendControl(
    options?: L$mapbox$ControlOptions
  ): mapbox$LegendControl;

  declare type L$mapbox$LegendControl = {
    onAdd(map: L$mapbox$Map): any,

    /**
     * Adds a legend to the legendControl.
     */
    addLegend(legend: string): any,

    /**
     * Removes a legend from the legendControl.
     */
    removeLegend(legend: string): any
  } & Control;

  /**
   * Interaction is what we call interactive parts of maps that are created with
   * the powerful tooltips & regions system in TileMill. Under the hood, it's powered by the open UTFGrid specification.
   */
  declare function L$mapbox$gridControl(
    layer: string,
    options?: mapbox$GridControlOptions
  ): mapbox$GridControl;

  declare type L$mapbox$GridControlOptions = {
    template?: string,
    follow?: boolean,
    pinnable?: boolean,
    touchTeaser?: boolean,
    location?: boolean
  } & ControlOptions;

  declare type L$mapbox$GridControl = {
    onAdd(map: L$mapbox$Map): any,
    onRemove(map: L$mapbox$Map): any,

    /**
     * If a tooltip is currently shown by the gridControl, hide and close it.
     */
    hide(): any,

    /**
     * Change the Mustache template used to transform the UTFGrid data in the map's interactivity into HTML for display.
     */
    setTemplate(template: string): any
  } & Control;

  /**
   * Adds geocoder functionality as well as a UI element to a map. This uses the Mapbox Geocoding API.
   */
  declare function L$mapbox$geocoderControl(
    id: string,
    options?: mapbox$GeocoderControlOptions
  ): mapbox$GeocoderControl;

  declare type L$mapbox$GeocoderControlOptions = {
    keepOpen?: boolean
  } & Leaflet.ControlOptions;

  declare interface L$mapbox$GeocoderControl {
    getURL(): string;
    onAdd(map: L$mapbox$Map): any;

    /**
     * Set the url used for geocoding.
     */
    setURL(url: string): any;

    /**
     * Set the map id used for geocoding.
     */
    setID(id: string): any;

    /**
     * Set the TileJSON used for geocoding.
     */
    setTileJSON(tilejson: any): any;

    /**
     * Bind a listener to an event emitted by the geocoder control. Supported additional events are
     */
    on(event: string, callback: Function): any;
  }

  /**
   * Adds a "Share" button to the map, which can be used to share the map to Twitter or Facebook, or generate HTML for a map embed.
   */
  declare function L$mapbox$shareControl(
    id: string,
    options?: mapbox$ShareControlOptions
  ): mapbox$ShareControl;

  declare type L$mapbox$ShareControlOptions = {
    url?: string
  } & ControlOptions;

  declare type L$mapbox$ShareControl = {
    onAdd(map: L$mapbox$Map): any
  } & Control;

  declare var npm$namespace$L$mapbox$marker: {
    icon: typeof L$mapbox$marker$icon,
    style: typeof L$mapbox$marker$style
  };

  /**
   * A core icon generator used in L.mapbox.marker.style
   */
  declare function L$mapbox$marker$icon(feature: any): Icon;

  /**
   * An icon generator for use in conjunction with pointToLayer to generate markers from the Mapbox Markers API and support the simplestyle-spec for features.
   */
  declare function L$mapbox$marker$style(feature: any, latlng: any): Marker;

  declare var npm$namespace$L$mapbox$simplestyle: {
    style: typeof L$mapbox$simplestyle$style
  };

  /**
   * Given a GeoJSON Feature with optional simplestyle-spec properties, return an options object formatted to be used as Leaflet Path options.
   */
  declare function L$mapbox$simplestyle$style(feature: any): PathOptions;

  /**
   * A HTML sanitization function, with the same effect as the default value of the sanitizer option of L.mapbox.featureLayer, L.mapbox.gridControl, and L.mapbox.legendControl.
   */
  declare function L$mapbox$sanitize(text: string): string;

  /**
   * A mustache template rendering function, as used by the templating feature provided by L.mapbox.gridControl.
   */
  declare function L$mapbox$template(template: string, data?: any): string;

  declare var npm$namespace$L$mapbox$config: {
    FORCE_HTTPS: typeof L$mapbox$config$FORCE_HTTPS,
    HTTP_URLS: typeof L$mapbox$config$HTTP_URLS,
    HTTPS_URLS: typeof L$mapbox$config$HTTPS_URLS
  };
  declare var L$mapbox$config$FORCE_HTTPS: boolean;

  declare var L$mapbox$config$HTTP_URLS: string[];

  declare var L$mapbox$config$HTTPS_URLS: string[];
}
declare module "mapbox" {
  import typeof * as Leaflet from "leaflet";
}
