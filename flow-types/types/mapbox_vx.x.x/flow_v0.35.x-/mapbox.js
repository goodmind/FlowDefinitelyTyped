declare module 'mapbox' {
        import typeof * as Leaflet from 'leaflet';

	declare module 'global' {
        
      declare var npm$namespace$mapbox: {
        map: typeof mapbox$map,
tileLayer: typeof mapbox$tileLayer,
gridLayer: typeof mapbox$gridLayer,
featureLayer: typeof mapbox$featureLayer,
styleLayer: typeof mapbox$styleLayer,
geocoder: typeof mapbox$geocoder,
infoControl: typeof mapbox$infoControl,
legendControl: typeof mapbox$legendControl,
gridControl: typeof mapbox$gridControl,
geocoderControl: typeof mapbox$geocoderControl,
shareControl: typeof mapbox$shareControl,
sanitize: typeof mapbox$sanitize,
template: typeof mapbox$template,
        accessToken: typeof mapbox$accessToken,
      }
declare var mapbox$accessToken: string;


/**
 * Create and automatically configure a map with layers, markers, and interactivity.
 */
declare function mapbox$map(
element: string | Element,
idOrTileJson: any,
options?: mapbox$MapOptions): mapbox$Map


declare type mapbox$MapOptions = {
mapbox$featureLayer?: mapbox$FeatureLayerOptions,
mapbox$gridLayer?: any,
mapbox$tileLayer?: mapbox$TileLayerOptions,
mapbox$infoControl?: mapbox$ControlOptions,
mapbox$legendControl?: mapbox$ControlOptions,
mapbox$shareControl?: mapbox$ShareControlOptions
} & undefined.mapbox$MapOptions


declare type mapbox$FilterFunction = (feature: any) => boolean;

declare type mapbox$Map = {
mapbox$tileLayer: mapbox$TileLayer,
mapbox$gridLayer: mapbox$GridLayer,
mapbox$featureLayer: mapbox$FeatureLayer,
mapbox$gridControl: mapbox$GridControl,
mapbox$infoControl: mapbox$InfoControl,
mapbox$legendControl: mapbox$LegendControl,
mapbox$shareControl: mapbox$ShareControl,
getTileJSON(): any
} & Leaflet.mapbox$Map



/**
 * You can add a tiled layer to your map with L.mapbox.tileLayer(), a simple interface to layers from Mapbox and elsewhere.
 */
declare function mapbox$tileLayer(idOrTileJson: string, options?: mapbox$TileLayerOptions): mapbox$TileLayer


declare type mapbox$TileLayerOptions = {
retinaVersion?: string
} & Leaflet.mapbox$TileLayerOptions


declare type mapbox$TileLayer = {

/**
 * Returns this layer's TileJSON object which determines its tile source, zoom bounds and other metadata.
 */
getTileJSON(): any,

/**
 * Set the image format of tiles in this layer. You can use lower-quality tiles in order to load maps faster
 */
setFormat(format: string): mapbox$TileLayer
} & Leaflet.mapbox$TileLayer



/**
 * An L.mapbox.gridLayer loads UTFGrid tiles of interactivity into your map, which you can easily access with L.mapbox.gridControl.
 */
declare function mapbox$gridLayer(idOrTileJson: any): mapbox$GridLayer


declare interface mapbox$GridLayer {
active(): boolean,
addTo(mapbox$map: mapbox$Map): any,
onAdd(mapbox$map: mapbox$Map): any,
onRemove(): any,

/**
 * Bind an event handler to a given event on this L.mapbox.gridLayer instance. GridLayers expose a number of useful events that give you access to UTFGrid data as the user interacts with the map.
 */
on(event: string, handler: Function, context?: any): any,

/**
 * Returns this layer's TileJSON object which determines its tile source, zoom bounds and other metadata.
 */
getTileJSON(): any,

/**
 * Load data for a given latitude, longitude point on the map, and call the callback function with that data, if any.
 */
getData(latlng: LatLng, callback: Function): any
} 


/**
 * L.mapbox.featureLayer provides an easy way to integrate GeoJSON from Mapbox and elsewhere into your map.
 */
declare function mapbox$featureLayer(idOrGeoJson?: any, options?: mapbox$FeatureLayerOptions): mapbox$FeatureLayer


declare interface mapbox$FeatureLayerOptions {
filter?: mapbox$FilterFunction,
sanitizer(mapbox$template: string): string
} 

declare type mapbox$FeatureLayer = {

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
setFilter(filter: mapbox$FilterFunction): any,

/**
 * Gets the filter function for this data layer.
 */
getFilter(): mapbox$FilterFunction,

/**
 * Set the contents of a markers layer: run the provided features through
 * the filter function and then through the factory function to create
 * elements for the map. If the layer already has features, they are
 * replaced with the new features. An empty array will clear the
 * layer of all features.
 */
setGeoJSON(geojson: any): mapbox$FeatureLayer,

/**
 * Get the contents of this layer as GeoJSON data.
 */
getGeoJSON(): any
} & FeatureGroup<ILayer>



/**
 * L.mapbox.styleLayer provides a way to integrate styles created with Mapbox Studio into your map.
 */
declare function mapbox$styleLayer(url: string, options?: mapbox$StyleLayerOptions): mapbox$StyleLayer


declare type mapbox$StyleLayerOptions = {
sanitizer(mapbox$template: string): string
} & Leaflet.mapbox$TileLayerOptions


declare type mapbox$StyleLayer = Leaflet.mapbox$TileLayer;


/**
 * A low-level interface to geocoding, useful for more complex uses and reverse-geocoding.
 */
declare function mapbox$geocoder(id: string): mapbox$Geocoder


declare interface mapbox$Geocoder {
getURL(): string,
setURL(url: string): any,
setID(id: string): any,
setTileJSON(tilejson: any): any,
queryURL(url: string): string,

/**
 * Queries the geocoder with a query string, and returns its result, if any.
 */
query(queryString: string, callback: Function): any,

/**
 * Queries the geocoder with a location, and returns its result, if any.
 */
reverseQuery(location: any, callback: Function): any
} 

declare type mapbox$ControlOptions = {
sanitizer(mapbox$template: string): string
} & Leaflet.mapbox$ControlOptions



/**
 * A map control that shows a toggleable info container. If set, attribution is auto-detected from active layers and added to the info container.
 */
declare function mapbox$infoControl(options?: mapbox$ControlOptions): mapbox$InfoControl


declare type mapbox$InfoControl = {
onAdd(mapbox$map: mapbox$Map): any,
onRemove(mapbox$map: mapbox$Map): any,

/**
 * Adds an info string to infoControl.
 */
addInfo(info: string): any,

/**
 * Removes an info string from infoControl
 */
removeInfo(info: string): any
} & Control



/**
 * A map control that shows legends added to maps in Mapbox.
 * Legends are auto-detected from active layers.
 */
declare function mapbox$legendControl(options?: mapbox$ControlOptions): mapbox$LegendControl


declare type mapbox$LegendControl = {
onAdd(mapbox$map: mapbox$Map): any,

/**
 * Adds a legend to the legendControl.
 */
addLegend(legend: string): any,

/**
 * Removes a legend from the legendControl.
 */
removeLegend(legend: string): any
} & Control



/**
 * Interaction is what we call interactive parts of maps that are created with
 * the powerful tooltips & regions system in TileMill. Under the hood, it's powered by the open UTFGrid specification.
 */
declare function mapbox$gridControl(layer: string, options?: mapbox$GridControlOptions): mapbox$GridControl


declare type mapbox$GridControlOptions = {
mapbox$template?: string,
follow?: boolean,
pinnable?: boolean,
touchTeaser?: boolean,
location?: boolean
} & mapbox$ControlOptions


declare type mapbox$GridControl = {
onAdd(mapbox$map: mapbox$Map): any,
onRemove(mapbox$map: mapbox$Map): any,

/**
 * If a tooltip is currently shown by the gridControl, hide and close it.
 */
hide(): any,

/**
 * Change the Mustache template used to transform the UTFGrid data in the map's interactivity into HTML for display.
 */
setTemplate(mapbox$template: string): any
} & Control



/**
 * Adds geocoder functionality as well as a UI element to a map. This uses the Mapbox Geocoding API.
 */
declare function mapbox$geocoderControl(id: string, options?: mapbox$GeocoderControlOptions): mapbox$GeocoderControl


declare type mapbox$GeocoderControlOptions = {
keepOpen?: boolean
} & Leaflet.mapbox$ControlOptions


declare interface mapbox$GeocoderControl {
getURL(): string,
onAdd(mapbox$map: mapbox$Map): any,

/**
 * Set the url used for geocoding.
 */
setURL(url: string): any,

/**
 * Set the map id used for geocoding.
 */
setID(id: string): any,

/**
 * Set the TileJSON used for geocoding.
 */
setTileJSON(tilejson: any): any,

/**
 * Bind a listener to an event emitted by the geocoder control. Supported additional events are
 */
on(event: string, callback: Function): any
} 


/**
 * Adds a "Share" button to the map, which can be used to share the map to Twitter or Facebook, or generate HTML for a map embed.
 */
declare function mapbox$shareControl(id: string, options?: mapbox$ShareControlOptions): mapbox$ShareControl


declare type mapbox$ShareControlOptions = {
url?: string
} & mapbox$ControlOptions


declare type mapbox$ShareControl = {
onAdd(mapbox$map: mapbox$Map): any
} & Control



      declare var npm$namespace$marker: {
        icon: typeof marker$icon,
style: typeof marker$style,
        
      }

/**
 * A core icon generator used in L.mapbox.marker.style
 */
declare function marker$icon(feature: any): Icon



/**
 * An icon generator for use in conjunction with pointToLayer to generate markers from the Mapbox Markers API and support the simplestyle-spec for features.
 */
declare function marker$style(feature: any, latlng: any): Marker



      declare var npm$namespace$simplestyle: {
        style: typeof simplestyle$style,
        
      }

/**
 * Given a GeoJSON Feature with optional simplestyle-spec properties, return an options object formatted to be used as Leaflet Path options.
 */
declare function simplestyle$style(feature: any): PathOptions



/**
 * A HTML sanitization function, with the same effect as the default value of the sanitizer option of L.mapbox.featureLayer, L.mapbox.gridControl, and L.mapbox.legendControl.
 */
declare function mapbox$sanitize(text: string): string



/**
 * A mustache template rendering function, as used by the templating feature provided by L.mapbox.gridControl.
 */
declare function mapbox$template(mapbox$template: string, data?: any): string



      declare var npm$namespace$config: {
        
        FORCE_HTTPS: typeof config$FORCE_HTTPS,
HTTP_URLS: typeof config$HTTP_URLS,
HTTPS_URLS: typeof config$HTTPS_URLS,
      }
declare var config$FORCE_HTTPS: boolean;

declare var config$HTTP_URLS: string[];

declare var config$HTTPS_URLS: string[];
    }

    }
