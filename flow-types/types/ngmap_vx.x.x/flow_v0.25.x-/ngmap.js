declare module "ngmap" {
  declare var core$_: string;
  declare module.exports: typeof core$_;
}
declare interface map$IGetMapOptions {
  id?: string;
  timeout?: number;
}

declare interface map$INgMapOptions {
  Symbol$marker: {
    /**
     * The offset from the marker's position to the tip of an InfoWindow
     * that has been opened with the marker as anchor.
     */
    anchorPoint?: GoogleMapsLoader$google.maps.Types$Point,

    /**
     * Which animation to play when marker is added to a map.
     */
    animation?: GoogleMapsLoader$google.maps.Highcharts$Animation,

    /**
     * If true, the marker receives mouse and touch events.
     * @default true
     */
    clickable?: boolean,

    /**
     * Mouse cursor to show on hover.
     */
    cursor?: string,

    /**
     * If true, the marker can be dragged.
     * @default false
     */
    draggable?: boolean,

    /**
     * Icon for the foreground.
     * If a string is provided, it is treated as though it were an Icon with the string as url.
     * @type {(string | FFAddonSDK$Icon | maps$Symbol)}
     */
    marker$icon?:
      | string
      | GoogleMapsLoader$google.maps.FFAddonSDK$Icon
      | GoogleMapsLoader$google.maps.maps$Symbol,

    /**
     * Adds a label to the marker. The label can either be a string, or a MarkerLabel object.
     * Only the first character of the string will be displayed.
     * @type {string}
     */
    label?: string,

    /**
     * Map on which to display Marker.
     * @type {(mapboxgl$Map | maps$StreetViewPanorama)}
     */
    mapbox$map?:
      | GoogleMapsLoader$google.maps.mapboxgl$Map
      | GoogleMapsLoader$google.maps.maps$StreetViewPanorama,

    /**
     * The marker's opacity between 0.0 and 1.0.
     */
    __esri$opacity?: number,

    /**
     * Optimization renders many markers as a single static element.
     * Optimized rendering is enabled by default.
     * Disable optimized rendering for animated GIFs or PNGs, or when each
     * marker must be rendered as a separate DOM element (advanced usage
     * only).
     */
    optimized?: boolean,

    /**
     * Image map region definition used for drag/click.
     */
    shape?: GoogleMapsLoader$google.maps.maps$MarkerShape,

    /**
     * Rollover text.
     */
    title?: string,

    /**
     * If true, the marker is visible.
     */
    visible?: boolean,

    /**
     * All markers are displayed on the map in order of their zIndex,
     * with higher values displaying in front of markers with lower values.
     * By default, markers are displayed according to their vertical position on screen,
     * with lower markers appearing in front of markers further up the screen.
     */
    Styles$zIndex?: number
  };
}

declare interface map$IObserveAndSetFunc {
  (val: any): void;
}

declare interface map$INgMap {
  /**
   * Add map to pool
   * @param {core$Function | any[]} mapCtrl Map controller
   */
  addMap(mapCtrl: core$Function | any[]): void;

  /**
 * Delete map from pool
 * @param {core$Function | any[]} mapCtrl Map controller optional. Defaults to last
controller in pool
 */
  deleteMap(mapCtrl?: core$Function | any[]): void;

  /**
   * Get map coordinates from address.
   * @param {string} address Use 'current' to get users location
   * @param {mapboxgl$PositionOptions} options optional
   * @return {angular$IPromise<GoogleMapsLoader$google.maps.maps$LatLng>} Latitude ang longitude of the address
   */
  getGeoLocation(
    address: string,
    notification$options?: mapboxgl$PositionOptions
  ): ng.IPromise<GoogleMapsLoader$google.maps.maps$LatLng>;

  /**
   * Get map from the pool of all shown maps.
   * @param {map$IGetMapOptions} options optional
   * @return {angular$IPromise<GoogleMapsLoader$google.maps.mapboxgl$Map>} promise
   */
  getMap(
    notification$options?: map$IGetMapOptions
  ): ng.IPromise<GoogleMapsLoader$google.maps.mapboxgl$Map>;

  /**
   * Initialize map from mapId or the current first shown map
   * @param {string} mapId id of the map. default 0
   * @return {GoogleMapsLoader$google.maps.mapboxgl$Map} map
   */
  initMap(mapId?: string): GoogleMapsLoader$google.maps.mapboxgl$Map;

  /**
   * Observe attribute
   * @param {string} attrName attribute name
   * @param {ioBroker$Object} object a Google maps object to be changed
   * @return {map$IObserveAndSetFunc} attribute obvserve function
   */
  observeAndSet(
    attrName: string,
    object: ioBroker$Object
  ): map$IObserveAndSetFunc;

  /**
   * Set display, width, height of map container element
   * @param {HTMLElement} el map container element
   */
  setStyle(el: HTMLElement): void;
}

declare interface map$INgMapProvider {
  /**
 * @param {AST$Hash} options
 * @example app.config(function(NgMapProvider) {
NgMapProvider.setDefaultOptions({
marker: {
optimized: false
}
});
});
 */
  setDefaultOptions(notification$options: map$INgMapOptions): void;
}
