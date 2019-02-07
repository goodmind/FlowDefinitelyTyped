declare module 'heremaps' {
        
/**
 * *** Map ****
 * Map class defines map instance in the application. By creating this object you will initialize a visible map object which is attached to the provided dom element.
 * Map class is an entry point to all operations related to layers, map objects and geo-screen transformations. By specifying options you can initialize map with predefined view.
 */
declare class H$Map mixins undefined.util$EventTarget {

/**
 * Constructor
 * @param {base$Element} element - html element into which the map will be rendered
 * @param {H$map.layer.layer$Layer} baseLayer - The layer to be used as the base (bottom most) layer.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - additional map options
 */
constructor(element: base$Element, baseLayer: H$map.layer.layer$Layer, opt_options?: H$H$Map.ContextItem$Options): this;

/**
 * This method returns the map root html element
 * @returns {base$Element}
 */
getElement(): base$Element;

/**
 * This method sets the new center on a map.
 * @param {H$geo.math$IPoint} center - requested center to be set
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_animate - parameter indicates if animated transition should be applied, default is false
 * @returns {H$H$Map} - the instance itself
 */
setCenter(center: H$geo.math$IPoint, opt_animate?: boolean): H$H$Map;

/**
 * This method returns currently rendered center of the map.
 * @returns {H$geo.math$Point}
 */
getCenter(): H$geo.math$Point;

/**
 * This method sets the zoom level on the map. Every zoom level represents different scale i.e map at zoom level 2 is twice as large as the map at zoom level 1.
 * @param {number} zoom - requested zoom level
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_animate - parameter indicates if animated transition should be applied, default is false
 * @returns {H$H$Map} - the instance itself
 */
setZoom(zoom: number, opt_animate?: boolean): H$H$Map;

/**
 * This method returns currently rendered zoom level.
 * @returns {number}
 */
getZoom(): number;

/**
 * This method changes the map zoom while keeping target screen coordinates specified as x,y at the same place where they were before.
 * @param {number} zoom - new zoom level
 * @param {number} x - map viewport x-axis pixel coordinate
 * @param {number} y - map viewport y-axis pixel coordinate
 */
zoomAt(zoom: number, x: number, y: number): void;

/**
 * This method sets the bounding rect to be displayed by the map. Maps display the bounding rect in a way that it fits entirely in the current viewport.
 * @param {H$geo.math$Rect} boundingRect - view bound which should be shown on map
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_animate - parameter indicates if animated transition should be applied, default is false
 * @returns {H$H$Map} - the instance itself
 */
setViewBounds(boundingRect: H$geo.math$Rect, opt_animate?: boolean): H$H$Map;

/**
 * This method returns bounding rect for the current map view. Returned bounding rect defines entire currently viewable area on the screen.
 * @returns {H$geo.math$Rect}
 */
getViewBounds(): H$geo.math$Rect;

/**
 * Calculates the best CameraModel to show the provided bounding rectangle
 * @param {H$geo.math$Rect} rect - The geographical bounding rectangle to use
 * @returns {H$map.map$ViewModel.ViewModel$CameraData} - The result, represented by the properties zoom (number) and position (geo.Point)
 */
getCameraDataForBounds(rect: H$geo.math$Rect): H$map.map$ViewModel.ViewModel$CameraData;

/**
 * This method returns current map viewport.
 * Viewport can be used to modify padding and margin which will reflect the position of the viewport center and the amount of extra data loaded (for margin)
 * @returns {H$map.map$ViewPort}
 */
getViewPort(): H$map.map$ViewPort;

/**
 * This method returns current view model. View model can be used to modify the current view or camera. H.map.ViewModel
 * @returns {H$map.map$ViewModel}
 */
getViewModel(): H$map.map$ViewModel;

/**
 * This method returns the map's current layer collection.
 * @returns {H$map.map$DataModel}
 */
getLayers(): H$map.map$DataModel;

/**
 * This method returns the imprint object for this map.
 * @returns {H$map.map$Imprint}
 */
getImprint(): H$map.map$Imprint;

/**
 * This method captures desired region of the map and objects on it. Result is returned as an HTML5 Canvas element.
 * Origin of coordinate system for capturing is in the top left corner of the viewport.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} callback - Callback function to call once result of the capturing is ready
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_capturables - Collection of "capturable" element(s) to draw into the resulting canvas
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_x1 - The X coordinate of the left edge of the capturing rectangle defaults to 0
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_y1 - The Y coordinate of the top edge of the capturing rectangle defaults to 0
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_x2 - The X coordinate of the right edge of the capturing rectangle defaults to viewport width
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_y2 - The Y coordinate of the bottom edge of the capturing rectangle defaults to viewport height
 */
capture(
callback?: (canvas: HTMLCanvasElement) => void,
opt_capturables?: H$util.util$ICapturable[],
opt_x1?: number,
opt_y1?: number,
opt_x2?: number,
opt_y2?: number): void;

/**
 * This method sets the rendering engine type for the map. Rendering engine is responsible for displaying i.e tiles and data on the map.
 * @param {H$H$Map.Map$EngineType} type
 * @returns {H$H$Map} - the map itself
 */
setEngineType(type: H$H$Map.Map$EngineType): H$H$Map;

/**
 * To persistently store the content of a map layer for a given area and range of zoom levels.
 * It can be used to enable map rendering when no internet connection is established and also to reduce the download traffic for frequently visited map areas.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_onprogress - A callback which is invoked every time when the progress state of the returned store request changes.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_bounds - The area to store, default is the current view bounds
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_min - The minimum zoom level to store, default is the current zoom level
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_max - The maximum zoom level to store, default is the current zoom level
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_layer - The layer to store, default is the current base layer
 * @returns {H$util.util$Request} - A handle to the created storage request
 */
storeContent(
opt_onprogress?: (req: H$util.util$Request) => void,
opt_bounds?: H$geo.math$Rect,
opt_min?: number,
opt_max?: number,
opt_layer?: H$map.layer.layer$BaseTileLayer): H$util.util$Request;

/**
 * To clear the entire stored content
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_onprogress - A callback which is invoked every time when the progress state of the returned clear request changes
 * @returns {H$util.util$Request} - A handle to the created flush request
 */
clearContent(opt_onprogress?: (req: H$util.util$Request) => void): H$util.util$Request;

/**
 * This method adds a layer to the map.
 * @param {H$map.layer.layer$Layer} layer - The map layer to be added
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_idx - index at which the new layer should be inserted
 * @returns {H$H$Map} - current map instance
 */
addLayer(layer: H$map.layer.layer$Layer, opt_idx?: number): H$H$Map;

/**
 * This method removes layer from the map.
 * @param {H$map.layer.layer$Layer} layer - The map layer to be removed
 * @returns {H$H$Map} - current map instance
 */
removeLayer(layer: H$map.layer.layer$Layer): H$H$Map;

/**
 * This method will set provided layer as base map. The layer will be inserted as the bottom most layer in the map.
 * @param {H$map.layer.layer$Layer} layer - The layer to use as base map
 * @returns {H$H$Map} - the instance itself
 */
setBaseLayer(layer: H$map.layer.layer$Layer): H$H$Map;

/**
 * To get the current base map layer.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"}
 */
getBaseLayer(): H$map.layer.layer$Layer;

/**
 * Returns the screen coordinates according to the given geographical coordinates. This method returns a screen pixel coordinates for the provided geo point.
 * @param {H$geo.math$IPoint} geoPoint - point on the map
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"}
 */
geoToScreen(geoPoint: H$geo.math$IPoint): H$math.math$Point;

/**
 * Returns the geographical coordinates according to the given screen coordinates.
 * @param {number} x - map viewport x-axis pixel coordinate
 * @param {number} y - map viewport y-axis pixel coordinate
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"}
 */
screenToGeo(x: number, y: number): H$geo.math$Point;

/**
 * Returns the camera data according to the given screen coordinates. Method converts screen pixel coordinates to correct camera data object
 * @param {number} x - map viewport x-axis pixel coordinate
 * @param {number} y - map viewport y-axis pixel coordinate
 * @returns {H$map.map$ViewModel.ViewModel$CameraData}
 */
screenToCameraData(x: number, y: number): H$map.map$ViewModel.ViewModel$CameraData;

/**
 * This method adds an map object to the map. Map object can be a marker or a spatial object like polygon or polyline.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} mapObject - The map object to add
 * @returns {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} - the added map object
 */
addObject(mapObject: H$map.map$Object): H$map.map$Object;

/**
 * This method removes previously added map object from the map.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} mapObject - The map object to remove
 * @returns {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} - the removed map object
 */
removeObject(mapObject: H$map.map$Object): H$map.map$Object;

/**
 * This method retrieves the list of all objects which have been added to the map.
 * @returns {Array<H$map.map$Object>} - the list of all use objects which are currently on the map.
 */
getObjects(): H$map.map$Object[];

/**
 * This method adds an array of objects or an object group to the map.
 * @param {Array<"NO PRINT IMPLEMENTED: JSDocNonNullableType">} mapObjects
 * @returns {H$H$Map} - the map instance
 */
addObjects(mapObjects: H$map.map$Object[]): H$H$Map;

/**
 * This method removes an array of object or an object group from the map.
 * @param {(Array<H$map.map$Object> | H$map.map$Group)} mapObjects
 * @returns {H$H$Map} - the map instance
 */
removeObjects(mapObjects: (H$map.map$Object[] | H$map.map$Group)): H$H$Map;

/**
 * Returns the top most z-ordered map object found under the specific screen coordinates. Coordinates are viewport pixel coordinates starting from top left corner as (0, 0) point.
 * @param {number} x - map viewport x-axis pixel coordinate
 * @param {number} y - map viewport y-axis pixel coordinate
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"} - the encountered top most map object or null if no object found
 */
getObjectAt(x: number, y: number): H$map.map$Object;

/**
 * Returns a list of map objects in descending z-order found under the specific screen coordinates. Coordinates are viewport pixel coordinates starting from top left corner as (0, 0) point.
 * @param {number} x - map viewport x-axis pixel coordinate
 * @param {number} y - map viewport y-axis pixel coordinate
 * @returns {Array<"NO PRINT IMPLEMENTED: JSDocNonNullableType">}
 */
getObjectsAt(x: number, y: number): H$map.map$Object[];

/**
 * This method will dispatch event on the event target object
 * @param {(H$util.OList$Event | string)} evt - event object or event name
 */
dispatchEvent(evt: (H$util.OList$Event | string)): void;

/**
 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds callback which is triggered when the object is being disposed
 * @param {Function} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope to call the callback in.
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;

/**
 * This returns the map's render engine
 * @return {H$map.render.p2d.p2d$RenderEngine} - map render engine
 */
getEngine(): H$map.render.p2d.p2d$RenderEngine
}


/**
 * It defines the number of lower and higher zoom levels, where cached content of the base map is rendered while content of the current zoom level is still loading.
 * Example: if range was set to {lower: 3, higher: 2} and current level is 10 then rendering engine will try to display cached tiles from lower zoom levels 7, 8, 9 and higher levels 11 and 12.
 * @property lower {number} - The number of lower zoom levels to take into account, default is 0
 * @property higher {number} - The number of higher zoom levels to take into account, default is 0
 */
declare interface Map$BackgroundRange {
lower: number,
higher: number
} 


/**
 * Types of engines
 */
declare  class Map$EngineType {
  constructor(...args: empty): mixed;
static +P2D: Class<Map$EngineType__P2D> & Map$EngineType__P2D & 0;// 0
static +PANORAMA: Class<Map$EngineType__PANORAMA> & Map$EngineType__PANORAMA & 1;// 1

}

declare class Map$EngineType__P2D mixins Map$EngineType {}
declare class Map$EngineType__PANORAMA mixins Map$EngineType {}



/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Map$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Map$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Map$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Map$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Map$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Map$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Map$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Map$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.OList$Event} event
 */
onStateChange?: (event: H$util.OList$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Map$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Map$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Map$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Map$Options | boolean),
panorama?: (H$ui.ui$Pano.Map$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Map$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.OList$Event) => void
} 


/**
 * This class represents the input data structure for data points to be clustered.
 * @property lat {H.geo.Latitude} - The latitude coordinate of the data point's position
 * @property lng {H.geo.Longitude} - The longitude coordinate of the data point's position
 * @property wt {number} - The weight of the data point
 * @property data {*} - Data associated with this data point
 */
declare class clustering$DataPoint mixins undefined.math$IPoint {

/**
 * Constructor
 * @param {H$geo.geo$Latitude} lat - The latitude coordinate of the data point's position
 * @param {H$geo.geo$Longitude} lng - The longitude coordinate of the data point's position
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_weight - The weight of the data point as a positive number > 0. If not specified it , default is 1.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_data - Optional data, which will be associated with this DataPoint
 */
constructor(lat: H$geo.geo$Latitude, lng: H$geo.geo$Longitude, opt_weight?: number, opt_data?: any): this;
lat: H$geo.geo$Latitude;
lng: H$geo.geo$Longitude;
alt: H$geo.geo$Altitude;
ctx: H$geo.geo$AltitudeContext;
wt: number;
data: any
}


/**
 * This interface describes a cluster of data points, which fulfill the clustering specification (i.e. data points are within the epsilon and there are enough points to form a cluster).
 */
declare interface clustering$ICluster {

/**
 * Returns the maximum zoom level where this cluster doesn't fall apart into sub clusters and/or noise poinst
 * @returns {number}
 */
getMaxZoom(): number,

/**
 * Returns the bounding rectangle of this cluster.
 * @returns {H$geo.math$Rect}
 */
getBounds(): H$geo.math$Rect,

/**
 * Invokes the specified callback for each "entry" of the cluster.
 * That "entry" can be either a cluster which implements H.clustering.ICluster interface or a noise point which implements H.clustering.INoisePoint interface.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} callback - The callback gets the currently traversed entry as an argument, which is cluster or noise point.
 */
forEachEntry(callback: (result: H$clustering.clustering$IResult) => void): void,

/**
 * Invokes the specified callback for each data point which is part of this cluster, even indirectly.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} callback - The callback gets the currently traversed noise point as argument.
 */
forEachDataPoint(callback: (noise: H$clustering.clustering$INoisePoint) => void): void,

/**
 * Returns the geographical position of this cluster result.
 * @returns {H$geo.math$Point}
 */
getPosition(): H$geo.math$Point,

/**
 * Returns the weight of this cluster result.
 * @returns {number}
 */
getWeight(): number,

/**
 * To indicate whether this cluster result is a cluster or noise point
 * @returns {boolean}
 */
isCluster(): boolean,

/**
 * Returns the minimum zoom level where this item is not part of another cluster
 * @returns {number}
 */
getMinZoom(): number
} 


/**
 * This interface represents a data point which does not belong to a cluster.
 */
declare interface clustering$INoisePoint {

/**
 * This method returns data which coresponds to this noise point.
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
 */
getData(): any,

/**
 * Returns the geographical position of this cluster result.
 * @returns {H$geo.math$Point}
 */
getPosition(): H$geo.math$Point,

/**
 * Returns the weight of this cluster result.
 * @returns {number}
 */
getWeight(): number,

/**
 * To indicate whether this cluster result is a cluster or noise point
 * @returns {boolean}
 */
isCluster(): boolean,

/**
 * Returns the minimum zoom level where this item is not part of another cluster
 * @returns {number}
 */
getMinZoom(): number
} 


/**
 * This interface represents the result item of a clustering operation.
 */
declare interface clustering$IResult {

/**
 * Returns the geographical position of this cluster result.
 * @returns {H$geo.math$Point}
 */
getPosition(): H$geo.math$Point,

/**
 * Returns the weight of this cluster result.
 * @returns {number}
 */
getWeight(): number,

/**
 * To indicate whether this cluster result is a cluster or noise point
 * @returns {boolean}
 */
isCluster(): boolean,

/**
 * Returns the minimum zoom level where this item is not part of another cluster
 * @returns {number}
 */
getMinZoom(): number
} 


/**
 * Interface which specifies the methods a theme must implement.
 */
declare interface clustering$ITheme {

/**
 * Function returns a cluster presentation as a map object.
 * @param {H$clustering.clustering$ICluster} cluster
 * @returns {H$map.map$Object}
 */
getClusterPresentation(cluster: H$clustering.clustering$ICluster): H$map.map$Object,

/**
 * Function returns noise point presentation as a map object
 * @param {H$clustering.clustering$INoisePoint} noisePoint
 * @returns {H$map.map$Object}
 */
getNoisePresentation(noisePoint: H$clustering.clustering$INoisePoint): H$map.map$Object
} 


/**
 * The clustering provider serves clusters and noise point representation for the map depending on the provided data set.
 * Levels for clustering as well as custom cluster representation can be set via Options.
 * @property min {number} - Minimum zoom level at which provider can cluster data
 * @property max {number} - Maximum zoom level at which provider can cluster data
 */
declare class clustering$Provider mixins undefined.util$EventTarget {

/**
 * Constructor
 * @param {Array<H$clustering.clustering$DataPoint>} dataPoints
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(dataPoints: H$clustering.clustering$DataPoint[], opt_options?: H$clustering.clustering$Provider.Map$Options): this;

/**
 * This method will dispatch event on the event target object
 * @param {(H$util.OList$Event | string)} evt - event object or event name
 */
dispatchEvent(evt: (H$util.OList$Event | string)): void;

/**
 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds callback which is triggered when the object is being disposed
 * @param {Function} callback
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;

/**
 * This method sets new data to the provider
 * @param {Array<H$clustering.clustering$DataPoint>} dataPoints
 */
setDataPoints(dataPoints: H$clustering.clustering$DataPoint[]): void;

/**
 * This method adds a data point to the provider. Beware that this method provokes reclustering of the whole data set.
 * @param {H$clustering.clustering$DataPoint} dataPoint
 */
addDataPoint(dataPoint: H$clustering.clustering$DataPoint): void;

/**
 * This method adds a list of data points to the provider. Beware that this method provokes reclustering of the whole data set.
 * @param {Array<H$clustering.clustering$DataPoint>} dataPoints
 */
addDataPoints(dataPoints: H$clustering.clustering$DataPoint[]): void;

/**
 * This method removes a data point from the provider. Beware that this method provokes reclustering of the whole data set.
 * @param {H$clustering.clustering$DataPoint} dataPoint
 */
removeDataPoint(dataPoint: H$clustering.clustering$DataPoint): void;

/**
 * This method returns current theme used for creating cluster visualization
 * @returns {H$clustering.clustering$ITheme}
 */
getTheme(): H$clustering.clustering$ITheme;

/**
 * This method sets new theme on the provider. Calling this method will change visuals for displayed clusters and noise points.
 * @param {H$clustering.clustering$ITheme} theme
 */
setTheme(theme: H$clustering.clustering$ITheme): void;

/**
 * This method always returns true as we don't have information about visual representation until we have the clustering result and apply the theme.
 * @returns {boolean}
 */
providesDomMarkers(): boolean;

/**
 * Returns all DomMarker cluster and noise point representations which intersect with the provided rectangular area.
 * @param {H$geo.math$Rect} bounds - A rectangular area in geo space to intersect with
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @returns {Array<H$map.map$DomMarker>} - a list of intersecting objects
 */
requestDomMarkers(
bounds: H$geo.math$Rect,
zoomLevel: number,
visiblesOnly: boolean,
cacheOnly: boolean): H$map.map$DomMarker[];

/**
 * This method always returns true as we don't have information about visual representation until we have the clustering result and apply the theme.
 * @returns {boolean}
 */
providesMarkers(): boolean;

/**
 * Returns all cluster and noise point markers which intersect with the provided rectangular area.
 * @param {H$geo.math$Rect} bounds - A rectangular area in geo space to intersect with
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @returns {Array<H$map.map$Marker>} - a list of intersecting objects
 */
requestMarkers(
bounds: H$geo.math$Rect,
zoomLevel: number,
visiblesOnly: boolean,
cacheOnly: boolean): H$map.map$Marker[];

/**
 * This method always returns true as we don't have information about visual representation until we have the clustering result and apply the theme.
 * @returns {boolean}
 */
providesSpatials(): boolean;

/**
 * Returns all polyline, polygon, circle and rect objects which represent cluster and noise points and intersect with the provided area.
 * @param {H$geo.math$Rect} bounds - A rectangular area in geo space to intersect with
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @returns {Array<H$map.map$Spatial>} - a list of intersecting objects
 */
requestSpatials(
bounds: H$geo.math$Rect,
zoomLevel: number,
visiblesOnly: boolean,
cacheOnly: boolean): H$map.map$Spatial[];

/**
 * Returns the spatial objects which intersect the given tile
 * @param {H$map.provider.SpatialTile} tile - The tile for which the objects are requested
 * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @returns {Array<H$map.map$Spatial>} - a list of intersecting objects
 */
requestSpatialsByTile(
tile: H$map.provider.provider$Tile,
visiblesOnly: boolean,
cacheOnly: boolean): H$map.map$Spatial[];

/**
 * Returns the accumulate invalidations of this provider's objects that have occurred.
 * @returns {H$map.provider.provider$Invalidations} - an invalidations object
 */
getInvalidations(): H$map.provider.provider$Invalidations;

/**
 * To signal to this provider that a map object has been changed. The method updates the Invalidations of this provider and the given map object and triggers dispatchUpdate()
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} mapObject - The map object to be invalidated
 * @param {H$math.math$BitMask} changes - The flags indicating the types of occurred changes
 */
invalidateObject(mapObject: H$map.map$Object, changes: H$math.math$BitMask): void;
min: number;
max: number
}


/**
 * Options which are used within cluster calculations.
 * @property eps {number=} - epsilon parameter for cluster calculation. For the FASTGRID strategy it must not exceed 256 and must take values that are power of 2.
For the GRID and DYNAMICGRID strategies it can take values from 10 to 127. Default is 32.
 * @property minWeight {number=} - the minimum points weight sum to form a cluster, default is 2
 * @property projection {H.geo.IProjection=} - projection to use for clustering, default is H.geo.mercator
 * @property strategy {H.clustering.Provider.Strategy=} - clustering stretegy, defaults to H.clustering.Provider.Strategy.FASTGRID
 */
declare interface Provider$ClusteringOptions {
eps?: number,
minWeight?: number,
projection?: H$geo.geo$IProjection,
strategy?: H$clustering.clustering$Provider.Provider$Strategy
} 


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Provider$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Provider$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Provider$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Provider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Provider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Provider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Provider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Provider$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.OList$Event} event
 */
onStateChange?: (event: H$util.OList$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Provider$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Provider$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Provider$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Provider$Options | boolean),
panorama?: (H$ui.ui$Pano.Provider$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Provider$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.OList$Event) => void
} 


/**
 * Enumeration represents possible clustering strategies. FASTGRID clustering is the efficient way to cluster large sets of data points.
 * GRID clustering is slower but has greater precision due to the bigger range of epsilon values, this strategy suitable for clustering smaller data sets (up to 1000 data points)
 * on desktop devices. DYNAMICGRID clustering uses the same algorithm of clustering as the GRID, but clusters on the viewport basis is meant to be used with data sets that are subject
 * to the frequent update operations.
 */
declare  class Provider$Strategy {
  constructor(...args: empty): mixed;
static +FASTGRID: Class<Provider$Strategy__FASTGRID> & Provider$Strategy__FASTGRID & 0;// 0
static +GRID: Class<Provider$Strategy__GRID> & Provider$Strategy__GRID & 1;// 1
static +DYNAMICGRID: Class<Provider$Strategy__DYNAMICGRID> & Provider$Strategy__DYNAMICGRID & 2;// 2

}

declare class Provider$Strategy__FASTGRID mixins Provider$Strategy {}
declare class Provider$Strategy__GRID mixins Provider$Strategy {}
declare class Provider$Strategy__DYNAMICGRID mixins Provider$Strategy {}



/**
 * An abstract reader class defines interface for data readers and has general functionality related to fetching data and reader events.
 */
declare class data$AbstractReader mixins undefined.util$EventTarget {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_url
 */
constructor(opt_url?: string): this;

/**
 * Method returns H.map.layer.ObjectLayer that contains parsed data, and can be added directly to the map. It returns new instance of the class with every invocation.
 * If data hasn't been parsed it will return H.map.layer.ObjectLayer that contains partial information, and reader will add new parsed objects to the layer's provider later on.
 * @returns {H$map.layer.layer$ObjectLayer}
 */
getLayer(): H$map.layer.layer$ObjectLayer;

/**
 * Method returns collection of currently parsed, and converted to H.map.Object data objects. Method returns only currently parsed objects if parsing is ongoing.
 * @returns {Array<H$map.map$Object>}
 */
getParsedObjects(): H$map.map$Object[];

/**
 * Returns URL of the current file, which is either in process of fetching/parsing or file that has been already parsed.
 * @returns {(string | void)} - url
 */
getUrl(): string | void;

/**
 * Method sets reader's URL. Method resets current Reader's state to its initial values (clears data about last parsed objects, etc.), and throws
 * InvalidState exception if Reader's state is not READY or ERROR.
 * @param {string} url - The new URL
 * @returns {H$data.data$AbstractReader}
 */
setUrl(url: string): H$data.data$AbstractReader;

/**
 * Returns the reader's processing state for possible states see H.data.AbstractReader.State
 * @returns {H$data.data$AbstractReader.Request$State}
 */
getState(): H$data.data$AbstractReader.Request$State;

/**
 * Method launches parsing of the data file at the current url (see H.data.AbstractReader#setUrl or H.data.AbstractReader).
 * Method uses XHR as a transport therefore same origin policy applies, or server should respond with proper CORS headers.
 */
parse(): void
}


/**
 * The event class for state events that are dispatched by AbstractReader
 */
declare class AbstractReader$Event mixins undefined.AbstractReader$Event {

/**
 * Constructor
 * @param {(H$data.data$AbstractReader | H$map.map$Object)} target - The target that's passed to event listeners
 * @param {string} type - The type of the event
 * @param {H$data.data$AbstractReader.Request$State} state - The state of the target firing an event
 * @param {string} message - The message associated with an event
 */
constructor(target: (H$data.data$AbstractReader | H$map.map$Object), type: string, state: H$data.data$AbstractReader.Request$State, message: string): this
}


/**
 * The state types of an Reader. Possible states are:
 */
declare  class AbstractReader$State {
  constructor(...args: empty): mixed;
static +ERROR: Class<AbstractReader$State__ERROR> & AbstractReader$State__ERROR & 0;// 0
static +LOADING: Class<AbstractReader$State__LOADING> & AbstractReader$State__LOADING & 1;// 1
static +VISIT: Class<AbstractReader$State__VISIT> & AbstractReader$State__VISIT & 2;// 2
static +READY: Class<AbstractReader$State__READY> & AbstractReader$State__READY & 3;// 3

}

declare class AbstractReader$State__ERROR mixins AbstractReader$State {}
declare class AbstractReader$State__LOADING mixins AbstractReader$State {}
declare class AbstractReader$State__VISIT mixins AbstractReader$State {}
declare class AbstractReader$State__READY mixins AbstractReader$State {}



/**
 * The base class for all geometry types.
 */
declare class geo$AbstractGeometry  {

/**
 * Returns the bounding rectangle of the geometry.
 * @return {H$geo.math$Rect} - the bounding rectangle of the geometry or null if the bounding rectangle can't be computed (e.g. for a geometry without coordinates)
 */
getBounds(): H$geo.math$Rect;

/**
 * Checks whether the geometry is equal to the geometry supplied by the caller.
 * Two geometries are considered as equal if they represent the same geometry type and have equal coordinate values.
 * @param {any} other - The geometry to check against
 * @return {boolean} - true if the two geometries are equal, otherwise false
 */
equals(other: any): boolean;

/**
 * To obtain a Well-Known-Text (WKT) representation of the geometry.
 * @return {string} - the resulting WKT string
 */
toString(): string
}


/**
 * A Geographic coordinate that specifies the height of a point in meters. A value of undefined is treated as 0.
 */
declare type geo$Altitude = number;


/**
 * Contexts for altitudes to specify the contextual origin of an altitude's value
 */
declare  class geo$AltitudeContext {
  constructor(...args: empty): mixed;
static +undefined: Class<geo$AltitudeContext__undefined> & geo$AltitudeContext__undefined & 0;// 0
static +GL: Class<geo$AltitudeContext__GL> & geo$AltitudeContext__GL & 1;// 1
static +OL: Class<geo$AltitudeContext__OL> & geo$AltitudeContext__OL & 2;// 2
static +SL: Class<geo$AltitudeContext__SL> & geo$AltitudeContext__SL & 3;// 3
static +SB: Class<geo$AltitudeContext__SB> & geo$AltitudeContext__SB & 4;// 4
static +WE: Class<geo$AltitudeContext__WE> & geo$AltitudeContext__WE & 5;// 5
static +WG: Class<geo$AltitudeContext__WG> & geo$AltitudeContext__WG & 6;// 6

}

declare class geo$AltitudeContext__undefined mixins geo$AltitudeContext {}
declare class geo$AltitudeContext__GL mixins geo$AltitudeContext {}
declare class geo$AltitudeContext__OL mixins geo$AltitudeContext {}
declare class geo$AltitudeContext__SL mixins geo$AltitudeContext {}
declare class geo$AltitudeContext__SB mixins geo$AltitudeContext {}
declare class geo$AltitudeContext__WE mixins geo$AltitudeContext {}
declare class geo$AltitudeContext__WG mixins geo$AltitudeContext {}



/**
 * An interface to represent a geographic point. Every point in geo space is represented by three coordinates latitude, longitude and optional altitude.
 * @property lat {H.geo.Latitude} - The latitude coordinate.
 * @property lng {H.geo.Longitude} - The longitude coordinate.
 * @property alt {H.geo.Altitude=} - The altitude coordinate.
 * @property ctx {H.geo.AltitudeContext=} - The altitude context.
 */
declare interface geo$IPoint {
lat: H$geo.geo$Latitude,
lng: geo$Longitude,
alt?: H$geo.geo$Altitude,
ctx?: H$geo.geo$AltitudeContext,
x: number,
y: number
} 

declare interface geo$IProjection {
latLngToPoint(lat: number, lng: number, opt_out?: H$math.math$Point): H$math.math$Point,
xyToGeo(x: number, y: number, opt_out?: H$geo.math$Point): H$geo.math$Point,
pointToGeo(point: H$math.geo$IPoint, opt_out?: H$geo.math$Point): H$geo.math$Point,
geoToPoint(geoPoint: H$geo.geo$IPoint, opt_out?: H$math.math$Point): H$math.math$Point
} 


/**
 * A geographic coordinate that specifies the north-south position of a point on the Earth's surface in the range from -90 to + 90 degrees, inclusive.
 */
declare type geo$Latitude = number;


/**
 * A Geographic coordinate that specifies the east-west position of a point on the Earth's surface in the range from -180 to 180 degrees, inclusive.
 */
declare type geo$Longitude = number;

declare class geo$LineString  {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_latLngAlts - An optional array of latitude, longitude and altitude triples to initialize the LineString with.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_ctx - An optional altitude context for all altitudes contained in this LineString.
 * @throws {H.lang.InvalidArgumentError} - in case of invalid lat, lng, alt values
 */
constructor(opt_latLngAlts?: number[], opt_ctx?: H$geo.geo$AltitudeContext): this;

/**
 * This method pushes a lat, lng, alt to the end of this LineString.
 * @param {H$geo.geo$Latitude} lat
 * @param {H$geo.geo$Longitude} lng
 * @param {H$geo.geo$Altitude} alt
 * @throws {H.lang.InvalidArgumentError} - in case of invalid lat, lng, alt value
 */
pushLatLngAlt(
lat: H$geo.geo$Latitude,
lng: H$geo.geo$Longitude,
alt: H$geo.geo$Altitude): void;

/**
 * This method splices the LineString at the provided index, removing the specified number of items at that index and inserting the lat, lng, alt array.
 * @param {number} index - The index at which to splice
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_nRemove - The number of lat, lng, alt values to remove
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_latLngAlts - The lat, lng, alt values to add
 * @return {number[]} - An array of removed elements
 * @throws {H.lang.InvalidArgumentError} - in case of invalid opt_latLngAlts argument
 */
spliceLatLngAlts(index: number, opt_nRemove?: number, opt_latLngAlts?: number[]): number[];

/**
 * This method inserts one set of lat, lng, alt values into the LineString at the specified index.
 * @param {number} index - the index at which to add the element
 * @param {H$geo.geo$Latitude} lat - the latitude to insert
 * @param {H$geo.geo$Longitude} lng - the longitude to insert
 * @param {H$geo.geo$Altitude} alt - the altitude to insert
 */
insertLatLngAlt(
index: number,
lat: H$geo.geo$Latitude,
lng: H$geo.geo$Longitude,
alt: H$geo.geo$Altitude): void;

/**
 * This method removes one set of lat, lng, alt values from the LineString at the specified index
 * @param {number} index
 */
removeLatLngAlt(index: number): void;

/**
 * This method pushes the lat, lng, alt values of a {H.geo.Point} to the end of this LineString.
 * @param {H$geo.geo$IPoint} geoPoint
 * @throws {H.lang.InvalidArgumentError} - in case of invalid geoPoint argument
 */
pushPoint(geoPoint: H$geo.geo$IPoint): void;

/**
 * This method inserts the lat, lng, alt values of a H.geo.Point into the list at the specified index.
 * @param {number} pointIndex
 * @param {H$geo.geo$IPoint} geoPoint
 */
insertPoint(pointIndex: number, geoPoint: H$geo.geo$IPoint): void;

/**
 * This method removes one set of lat, lng, alt values from this LineString at the virtual point index specified.
 * @param {number} pointIndex - the virtual point index
 */
removePoint(pointIndex: number): void;

/**
 * This method extracts a H.geo.Point from this LineString at the virtual point index.
 * If the extracted point has an alt value, the LineString's altitude context will be supplied to the point.
 * @param {number} pointIndex - the virtual point index in the LineString
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - an optional point object to store the lat, lng, alt values
 * @return {H$geo.math$Point} - Returns either the 'opt_out' point object or a new point object.
 */
extractPoint(pointIndex: number, opt_out?: H$geo.math$Point): H$geo.math$Point;

/**
 * A utility method to iterate over the points of a line string.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} eachFn - The function to invoke for every point. It gets the point's latitude, longitude, altitude and index as arguments.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_start - The point's start index (inclusive) to iterate from, defaults to 0.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_end - The point's end index (exclusive) to iterate to, defaults to Infinity.
 */
eachLatLngAlt(
eachFn: (
lat: H$geo.geo$Latitude,
lng: H$geo.geo$Longitude,
alt: H$geo.geo$Altitude,
index: number) => void,
opt_start?: number,
opt_end?: number): void;

/**
 * To obtain whether a leg (formed by the given two longitudes) crosses the International Date Line.
 * @param {H$geo.geo$Longitude} lng1 - The start longitude of the leg
 * @param {H$geo.geo$Longitude} lng2 - The end longitude of the leg
 * @return {boolean}
 */
static isDBC(lng1: H$geo.geo$Longitude, lng2: H$geo.geo$Longitude): boolean;

/**
 * To obtain the number of times that this LineString cross the International Date Line.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_asClosed - Indicates whether the LineString is treated as closed (the LineString's last and first coordinates form the closing leg of a polygon).
It defaults to false.
 * @return {number}
 */
getDBCs(opt_asClosed?: boolean): number;

/**
 * This method return the number of points stored in this LineString.
 * @return {number} - The number of points in this LineString
 */
getPointCount(): number;

/**
 * Returns the vertices of the line segments as an array of alternating latitude, longitude and altitude coordinates.
 * The returned array must be treated as read-only to not violate the integrity of the line-string.
 * @return {number[]} - Returns the raw lat, lng, alt values of this LineString
 */
getLatLngAltArray(): number[];

/**
 * This method returns the bounding box of this LineString.
 * Note: The LineString is treated as an open path. If the bounding rectangle for a closed shape is required, the closing leg must be merged in an extra step.
 * @return {H$geo.math$Rect} - This LineString's bounding rectangle
 */
getBounds(): H$geo.math$Rect;

/**
 * This method initializes a new LineString with an array of lat, lng values. Arrays are expected to have an even length with the format [lat, lng, lat, lng, ...].
 * @param {number[]} latLngs - the array of lat, lng value.
 * @return {H$geo.geo$LineString} - The LineString containing the lat, lng values
 * @throws {H.lang.InvalidArgumentError} - throws an error in case the latLngs array has an odd length
 */
static fromLatLngArray(latLngs: number[]): H$geo.geo$LineString;

/**
 * Checks whether the geometry is equal to the geometry supplied by the caller.
 * Two geometries are considered as equal if they represent the same geometry type and have equal coordinate values.
 * @param {any} other - The geometry to check against
 * @return {boolean} - true if the two geometries are equal, otherwise false
 */
equals(other: any): boolean;

/**
 * To obtain a Well-Known-Text (WKT) representation of the geometry.
 * @return {string} - the resulting WKT string
 */
toString(): string
}

declare class geo$MultiGeometry<T> mixins undefined.geo$AbstractGeometry {

/**
 * The base class for a geometry that is a container for multiple geometries of a generic type. The type of the contained geometries is specified by the generic type parameter T
 * @param {T[]} geometries - The list of geometries which are initially aggregated.
 * @throws {H.lang.InvalidArgumentError} - if geometries parameter is not valid
 */
constructor(geometries: T[]): this;

/**
 * This method splices the specified MultiGeometry at the provided index, removing the specified number of items at that index and inserting new items.
 * @param {number} index - The index at which to start changing the list.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_deleteCount - The number of geometries to remove.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_items - The geometries to add.
 * @return {T[]} - the removed geometries.
 */
splice(index: number, opt_deleteCount?: number, opt_items?: T[]): T[];

/**
 * Removes a contained geometry at the given index.
 * @param {number} index - The index of the geometry to remove.
 * @return {T} - the removed geometry.
 * @throws {H.lang.OutOfRangeError} - if no geometry exists at the given index.
 */
removeAt(index: number): T;

/**
 * Removes the specified geometry from the multi-geometry
 * @param {T} geometry - The geometry (by reference) to remove from this multi-geometry.
 * @return {T} - the removed geometry or null if the geometry was not found
 */
remove(geometry: T): T;

/**
 * Returns the aggregated geometries of the multi-geometry. The returned geometries must be treated as read-only to not violate the integrity of the multi-geometry.
 * @return {T[]} - An array of geometries
 */
getGeometries(): T[];

/**
 * Adds the specified geometry to the current multi-geometry.
 * @param {T} geometry - A geometry which will be added to the current multi-geometry
 * @throws {H.lang.InvalidArgumentError} - in case of invalid geometry argument
 */
push(geometry: T): void;

/**
 * Returns the bounding rectangle of the geometry.
 * @return {H$geo.math$Rect} - the bounding rectangle of the geometry or null if the bounding rectangle can't be computed (e.g. for a geometry without coordinates)
 */
getBounds(): H$geo.math$Rect;

/**
 * Checks whether the geometry is equal to the geometry supplied by the caller.
 * Two geometries are considered as equal if they represent the same geometry type and have equal coordinate values.
 * @param {any} other - The geometry to check against
 * @return {boolean} - true if the two geometries are equal, otherwise false
 */
equals(other: any): boolean;

/**
 * To obtain a Well-Known-Text (WKT) representation of the geometry.
 * @return {string} - the resulting WKT string
 */
toString(): string
}

declare class geo$MultiLineString mixins undefined.geo$MultiGeometry<H$geo.geo$LineString> {

/**
 * A MultiLineString is a collection of line strings represented as a H.geo.MultiGeometry with a H.geo.LineString as generic type parameter T.
 * @param {H$geo.geo$LineString[]} lineStrings - The list of line-strings which are initially represented by the MultiLineString.
 * @throws {H.lang.InvalidArgumentError} - if the lineStrings argument is not valid
 */
constructor(lineStrings: H$geo.geo$LineString[]): this;

/**
 * This method splices the specified MultiGeometry at the provided index, removing the specified number of items at that index and inserting new items.
 * @param {number} index - The index at which to start changing the list.
 * @param {"NO PRINT IMPLEMENTED: JSDocNullableType"} opt_deleteCount - The number of geometries to remove.
 * @param {"NO PRINT IMPLEMENTED: JSDocNullableType"} opt_items - The geometries to add.
 * @return {H$geo.geo$LineString[]} - the removed geometries
 */
splice(
index: number,
opt_deleteCount?: number,
opt_items?: H$geo.geo$LineString[]): H$geo.geo$LineString[];

/**
 * Removes a contained geometry at the given index.
 * @param {number} index - The index of the geometry to remove.
 * @return {H$geo.geo$LineString} - the removed geometry.
 * @throws {H.lang.OutOfRangeError} - if no geometry exists at the given index.
 */
removeAt(index: number): H$geo.geo$LineString;

/**
 * Removes the specified geometry from the multi-geometry
 * @param {H$geo.geo$LineString} geometry -The geometry (by reference) to remove from this multi-geometry
 * @return {H$geo.geo$LineString} -the removed geometry or null if the geometry was not found
 */
remove(geometry: H$geo.geo$LineString): H$geo.geo$LineString;

/**
 * Returns the aggregated geometries of the multi-geometry. The returned geometries must be treated as read-only to not violate the integrity of the multi-geometry.
 * @return {H$geo.geo$LineString[]} - An array of geometries
 */
getGeometries(): H$geo.geo$LineString[];

/**
 * Adds the specified geometry to the current multi-geometry.
 * @param {H$geo.geo$LineString} geometry - A geometry which will be added to the current multi-geometry
 * @throws {H.lang.InvalidArgumentError} - in case of invalid geometry argument
 */
push(geometry: H$geo.geo$LineString): void;

/**
 * Returns the bounding rectangle of the geometry.
 * @return {H$geo.math$Rect} - the bounding rectangle of the geometry or null if the bounding rectangle can't be computed (e.g. for a geometry without coordinates)
 */
getBounds(): H$geo.math$Rect;

/**
 * Checks whether the geometry is equal to the geometry supplied by the caller.
 * Two geometries are considered as equal if they represent the same geometry type and have equal coordinate values.
 * @param {any} other - The geometry to check against
 * @return {boolean} - true if the two geometries are equal, otherwise false
 */
equals(other: any): boolean;

/**
 * To obtain a Well-Known-Text (WKT) representation of the geometry.
 * @return {string} - the resulting WKT string
 */
toString(): string
}


/**
 * PixelProjection transforms pixel world coordinates at a certain scale (zoom level) to geographical coordinates and vice versa.
 * By default, it uses the Mercator projection to transform geographic points into the 2d plane map points, which are adjusted to the current scale.
 * @property projection {H.geo.IProjection} - This property indicates the geographical projection that underlies the given PixelProjection.
 * @property x {number} - This property holds the x-offset in the projection relative to the top-left corner of the screen.
 * @property y {number} - This property holds the y-offset in the projection relative to the top-left corner of the screen.
 * @property w {number} - This property holds a value indicating the width of the world in pixels.
 * @property h {number} - This property holds a value indicating the height of the world in pixels.
 */
declare class geo$PixelProjection  {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_projection - An object representing the projection to use, the default is spherical Mercator H.geo.mercator
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_sizeAtLevelZero A value indicating the size of a tile representation of the world in pixels at zoom level 0, the default is 256
 */
constructor(opt_projection?: H$geo.geo$IProjection, opt_sizeAtLevelZero?: number): this;
projection: H$geo.geo$IProjection;
x: number;
y: number;
w: number;
h: number;

/**
 * This method updates the scale exponent for the pixel projection.
 * @param {number} zoom - A value indicating the zoom level
 */
rescale(zoom: number): void;

/**
 * This method retrieves the current zoom scale factor previously set by a call to H.geo.PixelProjection#rescale.
 * @return {number} - A value indicating the zoom scale factor
 */
getZoomScale(): number;

/**
 * This method translates a point defines in terms of its geographic coordinates to pixel coordinates at the specified zoom level.
 * @param {H$geo.geo$IPoint} geoPoint - An object containing the geographic coordinates
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - An optional point to store the result
 * @return {H$math.geo$IPoint} - An object representing the results of the the conversion to pixel coordinates
 */
geoToPixel(geoPoint: H$geo.geo$IPoint, opt_out?: H$math.geo$IPoint): H$math.geo$IPoint;

/**
 * This method translates a point defined in terms of its pixel coordinates to a location defined in geographic coordinates.
 * @param {H$math.geo$IPoint} point - An object defining a location on the screen in terms of pixel coordinates
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - An optional point to store the result
 * @return {H$geo.geo$IPoint} - An object representing the results of conversion to a geographic location
 */
pixelToGeo(point: H$math.geo$IPoint, opt_out?: H$geo.geo$IPoint): H$geo.geo$IPoint;

/**
 * This method translates the x and y coordinates of a pixel to a geographic point.
 * @param {number} x - A value indicating the pixel x-coordinate
 * @param {number} y - A value indicating the pixel y-coordinate
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - An optional point to store the result
 * @return {H$geo.math$Point} - An object representing the results of the conversion to a geographic location
 */
xyToGeo(x: number, y: number, opt_out?: H$geo.math$Point): H$geo.math$Point;

/**
 * This method translates geographical coordinates (latitude, longitude) supplied by the caller into a point defined in terms of pixel coordinates.
 * This method accepts longitudes outside of the normal longitude range.
 * @param {number} latitude - The latitude to translate
 * @param {number} longitude - The longitude to translate
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - An optional point to store the result
 * @return {H$math.math$Point} - The results of the conversion as a point object containing x and y coordinates (in pixels)
 */
latLngToPixel(
latitude: number,
longitude: number,
opt_out?: H$math.geo$IPoint): H$math.math$Point;

/**
 * This method method translates a map point to world pixel coordinates relative to current projection offset.
 * @param {H$math.geo$IPoint} point - An object representing the map point to convert
 * @return {H$math.math$Point} - The result of the conversion as an object containing pixel coordinate
 */
pointToPixel(point: H$math.geo$IPoint): H$math.math$Point
}


/**
 * Class represents a geographical point, which is defined by the latitude, longitude and optional altitude.
 * @property lat {H.geo.Latitude} - The latitude coordinate.
 * @property lng {H.geo.Longitude} - The longitude coordinate.
 * @property alt {H.geo.Altitude} - The altitude coordinate.
 * @property ctx {H.geo.AltitudeContext} - The altitude context.
 */
declare class geo$Point mixins geo$IPoint {

/**
 * Constructor
 * @property lat {H.geo.Latitude} - The latitude coordinate.
 * @property lng {H.geo.Longitude} - The longitude coordinate.
 * @property opt_alt {H.geo.Altitude=} - The altitude coordinate.
 * @property opt_ctx {H.geo.AltitudeContext=} - The altitude context.
 */
constructor(lat: H$geo.geo$Latitude, lng: geo$Longitude, opt_alt?: H$geo.geo$Altitude, opt_ctx?: H$geo.geo$AltitudeContext): this;

/**
 * To compare this point with a supplied other point for equality. Two points are considered equal if they have the same lat and lng as well as equivalent values for alt and ctx.
 * @param {H$geo.geo$IPoint} other
 * @returns {boolean} - Whether the two points are equal.
 */
equals(other: geo$IPoint): boolean;

/**
 * To calculate the distance between this point and the supplied other point. The method uses the Haversine formula. The altitude is not considered.
 * @param {H$geo.geo$IPoint} other
 * @returns {number} - The distance between the given location and the location supplied by the caller in meters.
 */
distance(other: geo$IPoint): number;

/**
 * This method calculates the geographic point of a destination point using the distance and bearing specified by the caller.
 * The altitude is ignored, instead the WGS84 Mean Radius is taken.
 * @param {number} bearing - The bearing to use in the calculation in degrees.
 * @param {number} distance - The distance to the destination in meters.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_overGreatCircle - If true the computation uses the 'Great Circle' otherwise 'Rhumb Line'.
 * @returns {H$geo.geo$Point} - The calculated point
 */
walk(bearing: number, distance: number, opt_overGreatCircle?: boolean): geo$Point;

/**
 * This method validates the given IPoint. It checks, if lat, lng, alt and ctx have valid types. Additionally the value of the lat property is clamped into a range of -90 ... +90
 * and the value of the lng property is modulo into a range of -180 ... +180 plus validates the values of the alt and ctx properties
 * @param {H$geo.geo$IPoint} point - The point to validate
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_caller - The caller to use for InvalidArgumentError. If omitted no error is thrown
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_argNr - The argument number to use for InvalidArgumentError.
 * @returns {boolean} - if the given point could validate
 */
static validate(point: geo$IPoint, opt_caller?: () => void, opt_argNr?: number): boolean;

/**
 * This method creates a Point instance from a given IPoint object.
 * @param {H$geo.geo$IPoint} iPoint - The IPoint object to use
 * @returns {H$geo.geo$Point} - the created Point instance
 */
static fromIPoint(iPoint: geo$IPoint): geo$Point;
lat: H$geo.geo$Latitude;
lng: H$geo.geo$Longitude;
alt: H$geo.geo$Altitude;
ctx: H$geo.geo$AltitudeContext
}


/**
 * This class represents a rectangular geographic area. The area is defined by four geographical coordinates two (left, right) longitudes and two (top, bottom) latitudes.
 */
declare class geo$Rect  {

/**
 * Constructor
 * @param {H$geo.geo$Latitude} top - the northern-most latitude
 * @param {H$geo.geo$Longitude} left - the left-most longitude
 * @param {H$geo.geo$Latitude} bottom - the southern-most latitude
 * @param {H$geo.geo$Longitude} right - the right-most latitude
 */
constructor(top: H$geo.geo$Latitude, left: H$geo.geo$Longitude, bottom: H$geo.geo$Latitude, right: H$geo.geo$Longitude): this;

/**
 * To compare this rectangle with a supplied other rectangle for equality.
 * @param {H$geo.geo$Rect} other
 * @returns {boolean} - Whether the two rectangles are equal.
 */
equals(other: H$geo.geo$Rect): boolean;

/**
 * Toclone this rectangle.
 * @returns {H$geo.geo$Rect}
 */
clone(): H$geo.geo$Rect;

/**
 * This method returns the top-left corner of the rectangular area.
 * @returns {H$geo.geo$Point} - the top-left corner of the area
 */
getTopLeft(): H$geo.geo$Point;

/**
 * This method returns the bottom-right corner of the rectangular area.
 * @returns {H$geo.geo$Point} - the bottom-right corner of the area
 */
getBottomRight(): H$geo.geo$Point;

/**
 * This method returns the north-most latitude of this rectangular area
 * @returns {H$geo.geo$Latitude} - the north-most latitude of the area
 */
getTop(): H$geo.geo$Latitude;

/**
 * This method returns the south-most latitude of this rectangular area
 * @returns {H$geo.geo$Latitude} - the south-most latitude of the area
 */
getBottom(): H$geo.geo$Latitude;

/**
 * This method returns the left-most longitude of this rectangular area
 * @returns {H$geo.geo$Longitude} - the left-most longitude of the area
 */
getLeft(): H$geo.geo$Longitude;

/**
 * This method returns the right-most longitude of this rectangular area
 * @returns {H$geo.geo$Longitude} - the right-most longitude of the area
 */
getRight(): H$geo.geo$Longitude;

/**
 * This method returns the center point of this rectangular area
 * @returns {H$geo.geo$Point} - the center point of the area
 */
getCenter(): H$geo.geo$Point;

/**
 * Returns this width of this rectangular area in decimal degrees.
 * @returns {number} - the width of this area
 */
getWidth(): number;

/**
 * Returns this height of this rectangular area in decimal degrees.
 * @returns {number} - the height of this area
 */
getHeight(): number;

/**
 * Returns a boolean value indicating whether this rectangular area spans across the date border.
 * @returns {boolean} - true if the area spans across the date border, otherwise false
 */
isCDB(): boolean;

/**
 * The method checks if the area enclosed by the given bounding box is 0.
 * @returns {boolean} - true if the dimensions of the area a 0, otherwise false
 */
isEmpty(): boolean;

/**
 * This method checks if the latitude and longitude supplied by the caller lie within the area of this rectangular area.
 * @param {H$geo.geo$Latitude} lat - the latitude
 * @param {H$geo.geo$Longitude} lng - the longitude
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @returns {boolean} - true if the latitude and longitude are contained in this area, otherwise false
 */
containsLatLng(
lat: H$geo.geo$Latitude,
lng: H$geo.geo$Longitude,
opt_skipValidation?: boolean): boolean;

/**
 * This method checks if the point supplied by the caller lies within the area of this rectangular area.
 * @param {H$geo.geo$IPoint} geoPoint - the point
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @returns {boolean} - true if the point is contained in this area, otherwise false
 */
containsPoint(geoPoint: H$geo.geo$IPoint, opt_skipValidation?: boolean): boolean;

/**
 * This method checks if the rectangular area supplied by the caller is completely contained within the area of this rectangular area.
 * @param {H$geo.geo$Rect} geoRect - the rectangular area
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @returns {boolean} - true if the rectangular area is contained in this area, otherwise false
 */
containsRect(geoRect: H$geo.geo$Rect, opt_skipValidation?: boolean): boolean;

/**
 * This method returns the smallest bounding box that covers this rectangular area and the latitude and longitude supplied by the caller.
 * @param {H$geo.geo$Latitude} lat - the latitude
 * @param {H$geo.geo$Longitude} lng - the longitude
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - an optional rectangular area to store the result
 * @returns {H$geo.geo$Rect} - either the rectangular area passed as out parameter or a new rectangular area
 */
mergeLatLng(
lat: H$geo.geo$Latitude,
lng: H$geo.geo$Longitude,
opt_skipValidation?: boolean,
opt_out?: H$geo.geo$Rect): H$geo.geo$Rect;

/**
 * This method returns the smallest bounding box that covers this rectangular area and the point supplied by the caller.
 * @param {H$geo.geo$IPoint} geoPoint - the point to merge
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - an optional rectangular area to store the result
 * @returns {H$geo.geo$Rect} - either the rectangular area passed as out parameter or a new rectangular area
 */
mergePoint(
geoPoint: H$geo.geo$IPoint,
opt_skipValidation?: boolean,
opt_out?: H$geo.geo$Rect): H$geo.geo$Rect;

/**
 * This method returns the smallest bounding box that covers this rectangular area and the rectangular area supplied by the caller.
 * @param {H$geo.geo$Rect} geoRect - the point to merge
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - an optional rectangular area to store the result
 * @returns {H$geo.geo$Rect} - either the rectangular area passed as out parameter or a new rectangular area
 */
mergeRect(
geoRect: H$geo.geo$Rect,
opt_skipValidation?: boolean,
opt_out?: H$geo.geo$Rect): H$geo.geo$Rect;

/**
 * This method returns the smallest bounding box that covers this rectangular area and the rectangular area supplied by the caller.
 * @param {H$geo.geo$Latitude} top - The top latitude of the rectangle to merge
 * @param {H$geo.geo$Longitude} left - The left longitude of the rectangle to merge
 * @param {H$geo.geo$Latitude} bottom - The bottom latitude of the rectangle to merge
 * @param {H$geo.geo$Longitude} right - The right longitude of the rectangle to merge
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - an optional rectangular area to store the result
 * @returns {H$geo.geo$Rect} - either the rectangular area passed as out parameter or a new rectangular area
 */
mergeTopLeftBottomRight(
top: H$geo.geo$Latitude,
left: H$geo.geo$Longitude,
bottom: H$geo.geo$Latitude,
right: H$geo.geo$Longitude,
opt_skipValidation?: boolean,
opt_out?: H$geo.geo$Rect): H$geo.geo$Rect;

/**
 * This method checks if the intersection of two bounding boxes is non-empty.
 * @param {H$geo.geo$Rect} geoRect - a rectangular area to be tested for intersection with this rectangular area
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @returns {boolean} - a boolean value indicating whether the two areas intersect
 */
intersects(geoRect: H$geo.geo$Rect, opt_skipValidation?: boolean): boolean;

/**
 * This method merges two rects by their values. The result of the merge is a bounding rect which covers all provided rect bounds.
 * @param {H$geo.geo$Latitude} topA - the northern-most latitude
 * @param {H$geo.geo$Longitude} leftA - the left-most longitude of operand A
 * @param {H$geo.geo$Latitude} bottomA - the southern-most latitude of operand A
 * @param {H$geo.geo$Longitude} rightA - the right-most latitude of operand A
 * @param {H$geo.geo$Latitude} topB - the northern-most latitude of operand B
 * @param {H$geo.geo$Longitude} leftB - the left-most longitude of operand B
 * @param {H$geo.geo$Latitude} bottomB - the southern-most latitude of operand B
 * @param {H$geo.geo$Longitude} rightB - the right-most latitude of operand B
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - an optional rect to store the results
 * @returns {H$geo.geo$Rect} - either the opt_out rect or a new rect
 */
static merge(
topA: H$geo.geo$Latitude,
leftA: H$geo.geo$Longitude,
bottomA: H$geo.geo$Latitude,
rightA: H$geo.geo$Longitude,
topB: H$geo.geo$Latitude,
leftB: H$geo.geo$Longitude,
bottomB: H$geo.geo$Latitude,
rightB: H$geo.geo$Longitude,
opt_out?: H$geo.geo$Rect): H$geo.geo$Rect;

/**
 * This method creates a rectangular area from a top-left and bottom-right point pair.
 * @param {H$geo.geo$IPoint} topLeft - the top-left corner of the area
 * @param {H$geo.geo$IPoint} bottomRight - the bottom-right corner of the area
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @returns {H$geo.geo$Rect} - returns the rectangular area defined by the top-left and bottom-right corners
 */
static fromPoints(
topLeft: H$geo.geo$IPoint,
bottomRight: H$geo.geo$IPoint,
opt_skipValidation?: boolean): H$geo.geo$Rect;

/**
 * This method creates the minimum rectangular area covering all of the points in the argument array.
 * @param {Array<H$geo.geo$IPoint>} pointArray - the array of points to cover
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @returns {H$geo.geo$Rect} - returns the minimum rectangular area covering the points or null if no point is covered
 */
static coverPoints(pointArray: H$geo.geo$IPoint[], opt_skipValidation?: boolean): H$geo.geo$Rect;

/**
 * This method creates the minimum rectangular area covering all of the coordinates in the argument array.
 * @param {Array<number>} latLngAltArray - the array of coordinates to cover
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @returns {(H$geo.geo$Rect | void)} - returns the minimum rectangular area covering the coordinates
 */
static coverLatLngAlts(latLngAltArray: number[], opt_skipValidation?: boolean): H$geo.geo$Rect | void;

/**
 * This method creates the minimum rectangular area covering all of the rectangular areas in the argument array.
 * @param {Array<H$geo.geo$Rect>} rectArray - the array of points to cover
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_skipValidation - a boolean flag indicating whether to check validity of the arguments
 * @returns {(H$geo.geo$Rect | void)} - returns the minimum rectangular area covering the rectangular areas
 */
static coverRects(
rectArray: H$geo.geo$Rect[],
opt_skipValidation?: boolean): H$geo.geo$Rect | void;

/**
 * This method clones the given bounding rect and resizes the clone if necessary until the location supplied by the caller is at its center.
 * @param {H$geo.geo$IPoint} center - a point which is to be the center of the resized rectangular area
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - an optional rectangular area to store the result
 * @returns {H$geo.geo$Rect} - the resized rectangular area
 */
resizeToCenter(center: H$geo.geo$IPoint, opt_out?: H$geo.geo$Rect): H$geo.geo$Rect
}


/**
 * A strip is a flat list of latitude, longitude, altitude tuples in a fixed order.
 */
declare class geo$Strip  {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_latLngAlts - An optional array of latitude, longitude and altitude triples to initialize the strip with.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_ctx - An optional altitude context for all altitudes contained in this strip.
 */
constructor(opt_latLngAlts?: number[], opt_ctx?: H$geo.geo$AltitudeContext): this;

/**
 * This method pushes a lat, lng, alt to the end of this strip.
 * @param {H$geo.geo$Latitude} lat
 * @param {H$geo.geo$Longitude} lng
 * @param {H$geo.geo$Altitude} alt
 */
pushLatLngAlt(
lat: H$geo.geo$Latitude,
lng: H$geo.geo$Longitude,
alt: H$geo.geo$Altitude): void;

/**
 * This method splices the strip at the provided index, removing the specified number of items at that index and inserting the lat, lng, alt array.
 * @param {number} index - The index at which to splice
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_nRemove - The number of lat, lng, alt values to remove
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_latLngAlts - The lat, lng, alt values to add
 * @returns {Array<number>} - an array of removed elements
 */
spliceLatLngAlts(index: number, opt_nRemove?: number, opt_latLngAlts?: number[]): number[];

/**
 * This method inserts one set of lat, lng, alt values into the strip at the specified index.
 * @param {number} index - the index at which to add the element
 * @param {H$geo.geo$Latitude} lat - the latitude to insert
 * @param {H$geo.geo$Longitude} lng - the longitude to insert
 * @param {H$geo.geo$Altitude} alt - the altitude to insert
 */
insertLatLngAlt(
index: number,
lat: H$geo.geo$Latitude,
lng: H$geo.geo$Longitude,
alt: H$geo.geo$Altitude): void;

/**
 * This method removes one set of lat, lng, alt values from the strip at the specified index.
 * @param {number} index
 */
removeLatLngAlt(index: number): void;

/**
 * This method pushes the lat, lng, alt values of a H.geo.Point to the end of this strip.
 * @param {H$geo.geo$IPoint} geoPoint
 */
pushPoint(geoPoint: H$geo.geo$IPoint): void;

/**
 * This method inserts the lat, lng, alt values of a H.geo.Point into the list at the specified index.
 * @param {number} pointIndex
 * @param {H$geo.geo$IPoint} geoPoint
 */
insertPoint(pointIndex: number, geoPoint: H$geo.geo$IPoint): void;

/**
 * This method removes one set of lat, lng, alt values from this strip at the virtual point index specified.
 * @param {number} pointIndex - the virtual point index
 */
removePoint(pointIndex: number): void;

/**
 * This method extracts a H.geo.Point from this strip at the virtual point index. If the extracted point has an alt value, the strip's altitude context will be supplied to the point.
 * @param {number} pointIndex - the virtual point index in the strip
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - an optional point object to store the lat, lng, alt values
 * @returns {H$geo.geo$Point} - returns either the 'opt_out' point object or a new point object.
 */
extractPoint(pointIndex: number, opt_out?: H$geo.geo$Point): H$geo.geo$Point;

/**
 * This method is a utility method that iterates over the lat, lng, alt array and calls the provided function for each 3 elements passing lat, lng and alt and the virtual point
 * index as arguments.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} eachFn - the function to be called for each 3 elements
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_start - an optional start index to iterate from
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_end - an optional end index to iterate to
 */
eachLatLngAlt(
eachFn: (
lat: H$geo.geo$Latitude,
lng: H$geo.geo$Longitude,
alt: H$geo.geo$Altitude,
n: number) => void,
opt_start?: number,
opt_end?: number): void;

/**
 * This method returns the number of times that legs in this strip cross the date border.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_closed - indicates whether the strip is closed (i.e. whether the strip's last and first coordinates form the closing leg of a polygon)
 * @returns {number} - the amount of times this strip crosses the date border.
 */
getDBCs(opt_closed?: boolean): number;

/**
 * This method return the number of points stored in this strip.
 * @returns {number} - the number of points in this strip
 */
getPointCount(): number;

/**
 * This method returns the internal array keeping the lat, lng, alt values. Modifying this array directly can destroy the integrity of this strip. Use it only for read access.
 * @returns {Array<number>} - returns the raw lat, lng, alt values of this strip
 */
getLatLngAltArray(): number[];

/**
 * This method returns the bounding box of this strip.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"} - this strip's bounding rectangle
 */
getBounds(): H$geo.geo$Rect;

/**
 * This method checks whether two longitudes form a leg which crosses the date border.
 * @param {H$geo.geo$Longitude} lng1 - the start longitude of the leg
 * @param {H$geo.geo$Longitude} lng2 - the end longitude of the leg
 * @returns {boolean} - true if the leg crosses the date border, otherwise false
 */
static isDBC(lng1: H$geo.geo$Longitude, lng2: H$geo.geo$Longitude): boolean;

/**
 * This method initializes a new strip with an array of lat, lng values. Arrays are expected to have an even length with the format [lat, lng, lat, lng, ...].
 * @param {Array<number>} latLngs - the array of lat, lng value.
 * @returns {H$geo.geo$Strip} - the strip containing the lat, lng values
 */
static fromLatLngArray(latLngs: number[]): H$geo.geo$Strip
}


/**
 * This class represents marker, which offers a means of identifying a location on the map with an icon.
 */
declare class map$AbstractMarker mixins undefined.map$Object {

/**
 * Constructor
 * @param {H$geo.geo$IPoint} position - The location of this marker
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - The values to initialize this marker
 */
constructor(position: H$geo.geo$IPoint, opt_options?: H$map.map$AbstractMarker.Provider$Options): this;

/**
 * This method returns this marker's current position.
 * @returns {H$geo.geo$Point} - current marker geo position
 */
getPosition(): H$geo.geo$Point;

/**
 * This method sets the marker's current position.
 * @param {H$geo.geo$IPoint} position
 * @returns {H$map.map$AbstractMarker} - the marker itself
 */
setPosition(position: H$geo.geo$IPoint): H$map.map$AbstractMarker;

/**
 * Returns this marker's current icon.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNonNullableType"}
 */
getIcon(): (H$map.map$Icon | H$map.map$DomIcon);

/**
 * Sets the marker's current icon.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} icon - The new marker icon
 * @returns {H$map.map$AbstractMarker} - the marker itself
 */
setIcon(icon: (H$map.map$Icon | H$map.map$DomIcon)): H$map.map$AbstractMarker;

/**
 * @property draggable
 * @description This property ensure that the marker can receive drag events.
 */
draggable: boolean
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface AbstractMarker$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.AbstractMarker$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.AbstractMarker$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.AbstractMarker$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.AbstractMarker$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.AbstractMarker$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.AbstractMarker$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.AbstractMarker$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.AbstractMarker$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.AbstractMarker$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.AbstractMarker$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.AbstractMarker$Options | boolean),
panorama?: (H$ui.ui$Pano.AbstractMarker$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.AbstractMarker$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * This class represents style attributes for arrows to be rendered along a polyline. A ArrowStyle instance is always treated as immutable to avoid inconstiencies and must not modified.
 */
declare class map$ArrowStyle  {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(opt_options?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.AbstractMarker$Options)): this;

/**
 * This method checks value-equality with another arrow style.
 * @param {(H$map.map$ArrowStyle | H$map.map$ArrowStyle.AbstractMarker$Options)} other - the arrow style to compare with
 * @returns {boolean} - true if the arrow styles are value-equal, otherwise false
 */
equals(
other: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.AbstractMarker$Options)): boolean
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface ArrowStyle$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.ArrowStyle$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ArrowStyle$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ArrowStyle$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ArrowStyle$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ArrowStyle$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ArrowStyle$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ArrowStyle$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.ArrowStyle$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.ArrowStyle$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.ArrowStyle$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.ArrowStyle$Options | boolean),
panorama?: (H$ui.ui$Pano.ArrowStyle$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.ArrowStyle$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * A Polygon with a circular shape.
 */
declare class map$Circle mixins undefined.map$Polygon {

/**
 * Constructor
 * @param {H$geo.geo$IPoint} center - The geographical coordinates of the circle's center
 * @param {number} radius - The radius of the circle in meters
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - An object that specifies circle options and their initial values (among these, precision has a significant impact on the shape of the circle
 */
constructor(center: H$geo.geo$IPoint, radius: number, opt_options?: H$map.map$Circle.ArrowStyle$Options): this;

/**
 * To set the geographical center point of this circle. If the specified center is an instance of H.geo.Point you must not modify this Point instance without calling setCenter
 * immediately afterwards.
 * @param {H$geo.geo$IPoint} center
 */
setCenter(center: H$geo.geo$IPoint): void;

/**
 * To get the center point of this circle You must not modify the returned Point instance without calling setCenter immediately afterwards.
 * @returns {H$geo.geo$Point}
 */
getCenter(): H$geo.geo$Point;

/**
 * To set the length of the radius of the circle in meters. The value is clamped to the of {@code[0 ... 20015089.27787877]} (half WGS84 mean circumference)
 * @param {number} radius
 */
setRadius(radius: number): void;

/**
 * To get the length of the radius of the circle in meters.
 * @returns {number}
 */
getRadius(): number;

/**
 * To set the precision of this circle {@see H.map.Circle.Options#precision}
 * @param {number} precision
 */
setPrecision(precision: number): void;

/**
 * To get the precision value of this circle
 * @returns {number}
 */
getPrecision(): number
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Circle$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Circle$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Circle$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Circle$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Circle$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Circle$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Circle$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Circle$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Circle$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Circle$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Circle$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Circle$Options | boolean),
panorama?: (H$ui.ui$Pano.Circle$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Circle$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * The class represents data model of the map. It holds list of layers that are rendered by map's RenderEngine.
 * The class listens to 'update' events from layers and dispatches them to the RenderEngine.
 */
declare class map$DataModel mixins undefined.util$OList {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_layers - array of layers to be added to the data model
 */
constructor(opt_layers?: H$map.layer.layer$Layer[]): this
}


/**
 * A visual representation of the H.map.DomMarker.
 */
declare class map$DomIcon  {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} element - The element or markup to use for this icon
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(element: (base$Element | string), opt_options?: H$map.map$DomIcon.Circle$Options): this
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface DomIcon$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.DomIcon$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.DomIcon$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.DomIcon$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.DomIcon$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.DomIcon$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.DomIcon$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.DomIcon$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.DomIcon$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.DomIcon$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.DomIcon$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.DomIcon$Options | boolean),
panorama?: (H$ui.ui$Pano.DomIcon$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.DomIcon$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * A marker with a visual representation in the form of a full styleable and scripteable DOM element. DomMarker are predestinated if small amounts of markers with dynamic styled and/or
 * scripted icons should be displayed om the map (e.g. animated interactive SVG).
 */
declare class map$DomMarker mixins undefined.map$AbstractMarker {

/**
 * Constructor
 * @param {H$geo.geo$IPoint} position
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(position: H$geo.geo$IPoint, opt_options?: H$map.map$DomMarker.DomIcon$Options): this
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface DomMarker$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.DomMarker$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.DomMarker$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.DomMarker$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.DomMarker$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.DomMarker$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.DomMarker$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.DomMarker$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.DomMarker$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.DomMarker$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.DomMarker$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.DomMarker$Options | boolean),
panorama?: (H$ui.ui$Pano.DomMarker$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.DomMarker$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * This class represents a spatial shape in geographic space. It is defined by a path containing the vertices of the shape (lat, lng, alt values).
 */
declare class map$GeoShape mixins undefined.map$Spatial {

/**
 * Constructor
 * @param {boolean} isClosed - Indicates whether this geographical shape is closed (a polygon)
 * @param {H$geo.geo$Strip} strip - The strip describing the shape of the spatial object
 * @param {H$map.map$Spatial.DomMarker$Options} options - The options to apply
 */
constructor(isClosed: boolean, strip: H$geo.geo$Strip, options: H$map.map$Spatial.DomMarker$Options): this;

/**
 * This method returns the strip which represents the shape of the spatial object.
 * @returns {H$geo.geo$Strip} - the strip
 */
getStrip(): H$geo.geo$Strip;

/**
 * This method sets the geo-information for the spatial object
 * @param {"NO PRINT IMPLEMENTED: JSDocNullableType"} strip - The strip which represents the shape of the spatial object.
 * @returns {H$map.map$GeoShape} - the Spatial instance itself
 */
setStrip(strip: H$geo.geo$Strip): H$map.map$GeoShape;

/**
 * This method returns the bounding rectangle for this object. The rectangle is the smallest rectangle which encloses all points of the spatial object.
 * @returns {H$geo.geo$Rect}
 */
getBounds(): H$geo.geo$Rect
}


/**
 * This class represents a map object which can contain other map objects. It's visibility, zIndex and object-order influences the contained map objects
 */
declare class map$Group mixins undefined.map$Object {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - an optional object containing initialization values
 */
constructor(opt_options?: H$map.map$Group.DomMarker$Options): this;

/**
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} callback
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_recursive - Indicates whether sub groups should be traversed recursively
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_context - The context to use as "this" within the callback
 */
forEach(
callback: (object: H$map.map$Object, n: number, group: H$map.map$Group) => void,
opt_recursive?: boolean,
opt_context?: any): void;

/**
 * To get a list of all objects of this group. On groups with many chilren this method can cause a higher memory and CPU consumption. Alternatively you case use H.map.Group#forEach
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_recursive - Indicates whether objects in sub-groups are also collected .
 * @returns {"NO PRINT IMPLEMENTED: JSDocNonNullableType"}
 */
getObjects(opt_recursive?: boolean): H$map.map$Object[];

/**
 * Method returns the bounding rectangle for the group. The rectangle is the smallest rectangle that covers all objects. If group doesn't contains objects method returns null.
 * @returns {H$geo.geo$Rect} - geo ractangle that covers all objects in the group
 */
getBounds(): H$geo.geo$Rect;

/**
 * To add an object to this group.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} object
 * @returns {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} - a reference to the appended object
 */
addObject(object: H$map.map$Object): H$map.map$Object;

/**
 * Appends a list of objects to this group
 * @param {Array<"NO PRINT IMPLEMENTED: JSDocNonNullableType">} objects
 */
addObjects(objects: H$map.map$Object[]): void;

/**
 * Removes an object from this group.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} object - The object to remove
 * @returns {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} - a reference to the removed object
 */
removeObject(object: H$map.map$Object): H$map.map$Object;

/**
 * Removes objects from this group.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} objects - The list of objects to remove
 */
removeObjects(objects: H$map.map$Object[]): void;

/**
 * Method removes all objects from the group.
 */
removeAll(): void
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Group$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Group$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Group$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Group$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Group$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Group$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Group$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Group$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Group$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Group$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Group$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Group$Options | boolean),
panorama?: (H$ui.ui$Pano.Group$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Group$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * This class represents an area that objects, like a marker, occupies in the screen space, meaning that object can be probed and returned by H.Map@getObjectsAt method.
 */
declare class map$HitArea  {

/**
 * Constructor
 * @param {H$map.map$HitArea.HitArea$ShapeType} shapeType - The shape type of the HitArea
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_values - The type-dependent values to define the shape of the hit area. The format for the different types are:
 */
constructor(shapeType: H$map.map$HitArea.HitArea$ShapeType, opt_values?: number[]): this
}


/**
 * Enumeration represents possible shape types that HitArea can have.
 */
declare  class HitArea$ShapeType {
  constructor(...args: empty): mixed;
static +NONE: Class<HitArea$ShapeType__NONE> & HitArea$ShapeType__NONE & 0;// 0
static +RECT: Class<HitArea$ShapeType__RECT> & HitArea$ShapeType__RECT & 1;// 1
static +CIRCLE: Class<HitArea$ShapeType__CIRCLE> & HitArea$ShapeType__CIRCLE & 2;// 2
static +POLYGON: Class<HitArea$ShapeType__POLYGON> & HitArea$ShapeType__POLYGON & 3;// 3

}

declare class HitArea$ShapeType__NONE mixins HitArea$ShapeType {}
declare class HitArea$ShapeType__RECT mixins HitArea$ShapeType {}
declare class HitArea$ShapeType__CIRCLE mixins HitArea$ShapeType {}
declare class HitArea$ShapeType__POLYGON mixins HitArea$ShapeType {}



/**
 * Control interface defines method which are used for direct view or camera manipulation
 */
declare interface map$IControl {

/**
 * This method starts control action for camera. This action allows to control camera animation and movement according to provided values in the H.map.IControl#control function
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_kinetics - kinetics settings
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_atX - control starts at x screen coordinate
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_atY - control starts at y screen coordinate
 */
startControl(
opt_kinetics?: H$util.kinetics.kinetics$IKinetics,
opt_atX?: number,
opt_atY?: number): void,

/**
 * This method triggers single control action on engine. This will trigger an animation which will start modification of the view's or camera's properties according to values begin set.
 * Modification will occur at every frame. The speed values are measure by 'levels per frame' were 1 level cooresponds to a distance to next zoom level.
 * @param {number} moveX - moves the view/cam in right/left direction
 * @param {number} moveY - moves the view/cam in bottom/top direction
 * @param {number} moveZ - moves the view/cam in depth direction (changes zoom level)
 * @param {number} angleX - rotates cam over x-axis
 * @param {number} angleY - rotates cam over y-axis
 * @param {number} angleZ - rotates cam over z-axis
 * @param {number} zoom - changes current zoom level (for view works as moveZ)
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_timestamp
 */
control(
moveX: number,
moveY: number,
moveZ: number,
angleX: number,
angleY: number,
angleZ: number,
zoom: number,
opt_timestamp?: number): void,

/**
 * This method ends current control, which will stop ongoing animation triggered by the startControl method. This method can prevent kinetics as well as it can adjust the final view if
 * the adjust function is being passed.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_preventKinetics - if set to true will prevent kinetics animation
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_adjustView - user defined function which can adjust the final view this function takes last requestedData from the view model and
should return a modified H.map.ViewModel.CameraData which will be set as the final view
 */
endControl(
opt_preventKinetics?: boolean,
opt_adjustView?: (data: H$map.map$ViewModel.ViewModel$CameraData) => void): void
} 


/**
 * An interface to specify a copyright note
 * @property label {string} - A short textual representation of the copyright note, e.g. "DigitalGlobe 2009"
 * @property alt {string} - A detailed textual representation of the copyright note, e.g. "copyright 2009 DigitalGlobe, Inc."
 */
declare interface map$ICopyright {
label: string,
alt: string
} 


/**
 * Interface describes interaction with the view port. Interaction will reflect view change depending on the interaction coordinates passed and the modifiers which specify the type of
 * interaction.
 */
declare interface map$IInteraction {

/**
 * This method starts the interaction with the view port. Should be called every time when new interaction is started i.e mouse grab, or touch start.
 * @param {number} modifiers - a bitmask which specifies what operations should performed during every interaction
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_kinetics - specifies kinetic move at the end of interaction
 */
startInteraction(
modifiers: H$math.math$BitMask,
opt_kinetics?: H$util.kinetics.kinetics$IKinetics): void,

/**
 * This method resolves direct screen (view port) interaction. This function will modify the current view according to values passed in.
 * @param {number} x - viewport x coordinate
 * @param {number} y - viewport y coordinate
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_bx - x coordinate for second pointer/touch if present
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_by - y coordinate for secong pointer/touch if present
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_timestamp - known timestamp which should be passed
 */
interaction(
x: number,
y: number,
opt_bx?: number,
opt_by?: number,
opt_timestamp?: number): void,

/**
 * This method ends interaction and applies kinetic movement if defined by using startInteraction method
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_preventKinetics - if set to true will prevent kinetics behaviour at the end of interaction
 */
endInteraction(opt_preventKinetics?: boolean): void
} 


/**
 * A visual representation of the H.map.Marker.
 */
declare class map$Icon  {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} bitmap - Either an image URL, a SVG markup, an image or a canvas.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(bitmap: (string | HTMLImageElement | HTMLCanvasElement), opt_options?: H$map.map$Icon.Group$Options): this;

/**
 * Returns the icon's bitmap loading state
 * @returns {H$map.map$Icon.prototype.AbstractReader$State}
 */
getState(): H$map.map$Icon.AbstractReader$State;

/**
 * Returns the bitmap of this icon or null if the bitmap is not ready yet (see H.map.Icon#getState)
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"}
 */
getBitmap(): (HTMLImageElement | HTMLCanvasElement);

/**
 * Returns the size of this icon or null if a size wasn't specified in the constructor's options and the state of this icon is not H.map.Icon.prototype.State.READY
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"}
 */
getSize(): H$math.math$Size;

/**
 * Returns the anchor point of this icon or null if an anchor wasn't specified in the constructor's options and the state of this icon is not H.map.Icon.prototype.State.READY.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"}
 */
getAnchor(): H$math.geo$Point;

/**
 * Returns the hit area of the icon.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"} - icon's anchor point
 */
getHitArea(): H$map.map$HitArea;

/**
 * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it.
 * Otherwise memory leak is possible.
 * @param {string} type - name of event
 * @param {Function} handler - event handler function
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - scope for the handler function
 */
addEventListener(type: string, handler: () => void, opt_capture?: boolean, opt_scope?: {}): void;

/**
 * This method will removed previously added listener from the event target
 * @param {string} type - name of event
 * @param {Function} handler - previously added event handler
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - scope for the handler function
 */
removeEventListener(type: string, handler: () => void, opt_capture?: boolean, opt_scope?: {}): void;

/**
 * This method will dispatch event on the event target object
 * @param {(H$util.AbstractReader$Event | string)} evt - event object or event name
 */
dispatchEvent(evt: (H$util.AbstractReader$Event | string)): void;

/**
 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds callback which is triggered when the object is being disposed
 * @param {Function} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope to call the callback in.
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void
}


/**
 * The state types of an Icon
 */
declare  class Icon$State {
  constructor(...args: empty): mixed;
static +ERROR: Class<Icon$State__ERROR> & Icon$State__ERROR & 0;// 0
static +LOADING: Class<Icon$State__LOADING> & Icon$State__LOADING & 1;// 1
static +READY: Class<Icon$State__READY> & Icon$State__READY & 2;// 2

}

declare class Icon$State__ERROR mixins Icon$State {}
declare class Icon$State__LOADING mixins Icon$State {}
declare class Icon$State__READY mixins Icon$State {}



/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Icon$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Icon$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Icon$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Icon$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Icon$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Icon$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Icon$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Icon$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Icon$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Icon$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Icon$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Icon$Options | boolean),
panorama?: (H$ui.ui$Pano.Icon$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Icon$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * This class encapsulates the brand, copyright and terms of use elements on the map.
 */
declare class map$Imprint  {

/**
 * Constructor
 * @param {H$H$Map} map - The map where the imprint is attached to
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - The options to style the imprint
 */
constructor(map: H$H$Map, opt_options?: H$map.map$Imprint.Icon$Options): this;

/**
 * To set the imprint options. If no opt_options argument is defined then all values are reset to their defaults.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - The options to style the imprint
 */
setOptions(opt_options?: H$map.map$Imprint.Icon$Options): void;

/**
 * This method retrieves the copyright string for the current view of the map.
 * @returns {string} - The copyright string for the current map view
 */
getCopyrights(): string;

/**
 * To get the CSS style declaration of the imprint DOM element
 * @returns {CSSStyleDeclaration}
 */
getStyle(): CSSStyleDeclaration;

/**
 * Method adds a callback which will be triggered when the object is disposed
 * @param {Function} callback
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;

/**
 * This method is used to capture the element view
 * @param {HTMLCanvasElement} canvas - HTML Canvas element to draw the view of the capturable element
 * @param {number} pixelRatio - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} callback - Callback function to call once result of the capturing is ready
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_errback - Callback function to call if error occurred during capturing
 */
capture(
canvas: HTMLCanvasElement,
pixelRatio: number,
callback?: (canvas: HTMLCanvasElement) => void,
opt_errback?: (s: string) => void): void
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Imprint$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Imprint$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Imprint$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Imprint$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Imprint$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Imprint$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Imprint$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Imprint$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Imprint$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Imprint$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Imprint$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Imprint$Options | boolean),
panorama?: (H$ui.ui$Pano.Imprint$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Imprint$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * A marker with a visual representation in the form of a bitmap icon. Marker are predestinated if large amounts of markers with static icons should be displayed om the map.
 */
declare class map$Marker mixins undefined.map$AbstractMarker {

/**
 * Constructor
 * @param {H$geo.geo$IPoint} position - The location of this marker
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - The values to initialize this marker
 */
constructor(position: H$geo.geo$IPoint, opt_options?: H$map.map$Marker.Imprint$Options): this
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Marker$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Marker$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Marker$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Marker$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Marker$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Marker$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Marker$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Marker$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Marker$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Marker$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Marker$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Marker$Options | boolean),
panorama?: (H$ui.ui$Pano.Marker$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Marker$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * This class represents the abstract base class for map objects such as polylines, polygons, markers, groups etc.
 */
declare class map$Object mixins undefined.util$EventTarget {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - The values to initialize this object
 */
constructor(opt_options?: H$map.map$Object.Marker$Options): this;

/**
 * Returns the ID of this object.
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
 */
getId(): any;

/**
 * Sets the visibility of this object.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_visibility - Indicates whether this map object should be visible.
 * @returns {H$map.map$Object} - returns this object
 */
setVisibility(opt_visibility?: boolean): H$map.map$Object;

/**
 * Returns the visibility of this object.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
 * @returns {boolean}
 */
getVisibility(opt_effective?: boolean): boolean;

/**
 * Returns the z-index of this object.
 * @returns {(number | void)}
 */
getZIndex(): number | void;

/**
 * To set the-index of this object.
 * @param {(number | void)} zIndex
 * @returns {H$map.map$Object} - returns this object
 */
setZIndex(zIndex?: number): H$map.map$Object;

/**
 * Compares two objects regarding their z-order, useful to sort a list of objects via Array's sort() method
 * @param {H$map.map$Object} first - The first object to compare
 * @param {H$map.map$Object} second - The second object to compare
 * @returns {number} - If less then 0 the first object has a lower z-order. If equal 0 booth objects have the same z-order. If greater then 0 the first object has a higher z-order.
 */
static compareZOrder(first: H$map.map$Object, second: H$map.map$Object): number;

/**
 * Returns the parent group which contains this object or null if the object is not contained by any group.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"}
 */
getParentGroup(): H$map.map$Group;

/**
 * The root object in which this object is attached or the object itself.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNonNullableType"}
 */
getRootGroup(): H$map.map$Object;

/**
 * Checks whether the given object is an inclusive descendant of this object
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} object - The object that's being compared against.
 * @returns {boolean}
 */
contains(object: any): boolean;

/**
 * The current provider of this object
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"} - the current provider
 */
getProvider(): H$map.provider.provider$ObjectProvider;

/**
 * Returns the invalidations of this object
 * @returns {H$map.provider.provider$Invalidations} - an invalidation object
 */
getInvalidations(): H$map.provider.provider$Invalidations;

/**
 * This method invalidates this map object.
 * @param {H$math.math$BitMask} flags - The flags indicating the types of occurred changes
 * @returns {boolean} - indicates whether a validtion was executed (only if the object has a provider)
 */
invalidate(flags: H$math.math$BitMask): boolean;

/**
 * This method returns previously stored arbitrary data from this object.
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"} - the previously stored data or undefined if not data was stored.
 */
getData(): any;

/**
 * This method stores arbitrary data with this map object
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} data - the data to be stored
 * @returns {H$map.map$Object} - returns this map object instance
 */
setData(data: any): H$map.map$Object;

/**
 * This method will dispatch event on the event target object
 * @param {(H$util.AbstractReader$Event | string)} evt - event object or event name
 */
dispatchEvent(evt: (H$util.AbstractReader$Event | string)): void;

/**
 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds callback which is triggered when the object is being disposed
 * @param {Function} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope to call the callback in.
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Object$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Object$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Object$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Object$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Object$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Object$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Object$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Object$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Object$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Object$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Object$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Object$Options | boolean),
panorama?: (H$ui.ui$Pano.Object$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Object$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * The major types of map objects
 */
declare  class Object$Type {
  constructor(...args: empty): mixed;
static +ANY: Class<Object$Type__ANY> & Object$Type__ANY & 0;// 0
static +OVERLAY: Class<Object$Type__OVERLAY> & Object$Type__OVERLAY & 1;// 1
static +SPATIAL: Class<Object$Type__SPATIAL> & Object$Type__SPATIAL & 2;// 2
static +MARKER: Class<Object$Type__MARKER> & Object$Type__MARKER & 3;// 3
static +DOM_MARKER: Class<Object$Type__DOM_MARKER> & Object$Type__DOM_MARKER & 4;// 4
static +GROUP: Class<Object$Type__GROUP> & Object$Type__GROUP & 5;// 5

}

declare class Object$Type__ANY mixins Object$Type {}
declare class Object$Type__OVERLAY mixins Object$Type {}
declare class Object$Type__SPATIAL mixins Object$Type {}
declare class Object$Type__MARKER mixins Object$Type {}
declare class Object$Type__DOM_MARKER mixins Object$Type {}
declare class Object$Type__GROUP mixins Object$Type {}



/**
 * This class represents an overlay, which offers a bitmap that covers a geographical reactangular area on the map.
 */
declare class map$Overlay mixins undefined.map$Object {

/**
 * Constructor
 * @param {H$geo.geo$Rect} bounds - The geographical reactangular area of this overlay
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} bitmap - Either an image URL, a SVG markup, an image or a canvas.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - Optional values values to initialize this overlay
 */
constructor(bounds: H$geo.geo$Rect, bitmap: (string | HTMLImageElement | HTMLCanvasElement), opt_options?: H$map.map$Overlay.Object$Options): this;

/**
 * This method returns this overlay's current bounds.
 * @returns {H$geo.geo$Rect}
 */
getBounds(): H$geo.geo$Rect;

/**
 * This method sets the overlay's current bounds.
 * @param {H$geo.geo$Rect} bounds
 * @returns {H$map.map$Overlay} - the overlay itself
 */
setBounds(bounds: H$geo.geo$Rect): H$map.map$Overlay;

/**
 * Returns this overlay's current bitmap.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"} - the bitmap of this Overlay or null if it isn't ready yet
 */
getBitmap(): (HTMLImageElement | HTMLCanvasElement);

/**
 * Sets the overlay's current bitmap.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} bitmap - Either an image URL, a SVG markup, an image or a canvas.
 * @returns {H$map.map$Overlay} - the overlay itself
 */
setBitmap(bitmap: (string | HTMLImageElement | HTMLCanvasElement)): H$map.map$Overlay;

/**
 * Returns this overlay's current opacity.
 * @returns {number}
 */
getOpacity(): number;

/**
 * Sets the overlay's current opacity.
 * @param {number} opacity - The opacity in range from 0 (transparent) to 1 (opaque).
 * @returns {H$map.map$Overlay} - the overlay itself
 */
setOpacity(opacity: number): H$map.map$Overlay
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Overlay$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Overlay$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Overlay$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Overlay$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Overlay$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Overlay$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Overlay$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Overlay$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Overlay$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Overlay$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Overlay$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Overlay$Options | boolean),
panorama?: (H$ui.ui$Pano.Overlay$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Overlay$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * This class represents a polygon in geo-space. It is defined by a strip containing the vertices of a geo shape object (lat, lng, alt values) and a pen to use when rendering the polyline.
 * Polygon represents a closed plane defined by the list of verticies, projected on the map display. List of vericies which define the polygon are is a list of geo coordinates encapsulated
 * by the strip object H.geo.Strip
 */
declare class map$Polygon mixins undefined.map$GeoShape {

/**
 * Constructor
 * @param {H$geo.geo$Strip} strip - the strip describing this polygon's vertices
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - optional initialization parameters
 */
constructor(strip: H$geo.geo$Strip, opt_options?: H$map.map$Spatial.Overlay$Options): this;

/**
 * To set the indicator whether this polygon covers the north pole. It's needed for Polygons whose strip is defined as lines arround the world on longitude axis (for example a circle whose
 * center is one of the poles). In this case a additional information is needed to know if the southern or northern part of the world should be covered by the poygon.
 * @param {boolean} flag - A value of true means it covers the north pole, false means south pole
 * @returns {H$map.map$Polygon} - the Polygon instance itself
 */
setNorthPoleCovering(flag: boolean): H$map.map$Polygon;

/**
 * See H.map.Polygon#setNorthPoleCovering
 * @returns {boolean}
 */
getNorthPoleCovering(): boolean
}


/**
 * This class represents a polyline in geo-space. It is defined by a path containing the vertices of a polyline (lat, lng, alt values) and a pen to use when tracing the path on the map.
 */
declare class map$Polyline mixins undefined.map$GeoShape {

/**
 * Constructor
 * @param {H$geo.geo$Strip | H$geo.geo$LineString | H$geo.geo$MultiLineString} geometry - The geometry that defines the line segments of the polyline
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - optional initialization parameters
 */
constructor(geometry: H$geo.geo$Strip | H$geo.geo$LineString | H$geo.geo$MultiLineString, opt_options?: H$map.map$Polyline.Overlay$Options): this;

/**
 * To set the polyline's geometry. If the given geometry is modified afterwards, it must be set again via setGeometry(geometry) to not violate the integrity of the polyline.
 * @param {H$geo.geo$LineString | H$geo.geo$MultiLineString} geometry - the geometry to set.
 * @return {H$map.map$Polyline} - The polyline instance itself.
 */
setGeometry(geometry: H$geo.geo$LineString | H$geo.geo$MultiLineString): H$map.map$Polyline;

/**
 * To obtain the polyline's geometry. If you modify the obtained geometry, you must call setGeometry(geometry) afterwards to not violate the integrity of the polyline.
 * @return {H$geo.geo$LineString | H$geo.geo$MultiLineString}
 */
getGeometry(): H$geo.geo$LineString | H$geo.geo$MultiLineString;

/**
 * Clips the geometry of the Polyline to a rectangular area
 * @param {H$geo.geo$Rect} geoRect - The rectangle to clip against.
 * @returns {Array<Array<number>>} - a list of geometry segments that intersecting the given rectangle.
Each segment is represented as a list of alternating latitude and longitude coordinates that describes a line string.
 */
clip(geoRect: H$geo.geo$Rect): number[][];

/**
 * Returns the geometry.
 * @deprecated since 3.0.15.0
 * @return {H$geo.geo$Strip} - spatial object.
 */
getStrip(): H$geo.geo$Strip;

/**
 * Sets the geometry.
 * @deprecated since 3.0.15.0
 * @param {H$geo.geo$Strip} strip - The strip which represents geometry.
 * @return {H$map.map$GeoShape} - The given spatial object
 */
setStrip(strip: H$geo.geo$Strip): H$map.map$GeoShape;

/**
 * Returns the smallest rectangle which encloses the whole geometry of the GeoShape.
 * @return {H$geo.geo$Rect}
 */
getBounds(): H$geo.geo$Rect;

/**
 * This method retrieves the drawing style of the given spatial object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
 * @return {H$map.map$SpatialStyle} - The given spatial object
 */
getStyle(): H$map.map$SpatialStyle;

/**
 * This method sets the drawing style of the given spatial object. If the argument opt_style is an instance of H.map.SpatialStyle,
 * it is treated as immutable and must not be modified afterwards to prevent inconsistencies!
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_style - The style to set. If it evaluates to a false, the H.map.SpatialStyle.DEFAULT_STYLE is used.
 * @return {H$map.map$Spatial} - The given spatial object
 */
setStyle(
opt_style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Overlay$Options): H$map.map$Spatial;

/**
 * This method retrieves the arrow style of the given spatial object or undefined if the style is not defined.
 * The returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
 * @return {H$map.map$ArrowStyle} - An object encapsulating information about the arrow style or undefined if the arrow style is not defined.
 */
getArrows(): H$map.map$ArrowStyle | void;

/**
 * This method sets the arrow style of the given spatial object.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_arrows - The arrow style to be applied
 * @return {H$map.map$Spatial} - The given spatial object
 */
setArrows(
opt_arrows?: H$map.map$ArrowStyle | H$map.map$ArrowStyle.Overlay$Options): H$map.map$Spatial;

/**
 * This method indicates whether this spatial object represents a closed shape
 * @return {boolean} - true if the given spatial object is a closed shape, false otherwise
 */
isClosed(): boolean;

/**
 * This method retrieves the ID of the given object.
 * @return {any} The identifier of the given object.
 */
getId(): any;

/**
 * This method sets the visibility of the given object.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_visibility - Indicates whether the map object should be visible.
 * @return {H$map.map$Object} - The given object
 */
setVisibility(opt_visibility?: boolean): H$map.map$Object;

/**
 * This method retrieves a value indicating the visibility of the given object.
 * @param {boolean} opt_effective - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
 * @return {boolean} - A value indicating if the object is visible (true) or not false
 */
getVisibility(opt_effective?: boolean): boolean;

/**
 * This method retrieves the z-index of the given object.
 * @return {number} - A value reflecting the z-index of the given object.
 */
getZIndex(): number | void;

/**
 * This method sets the z-index of the given object.
 * @param {number | void} zIndex - A value indicating the new z-index
 * @return {H$map.map$Object} - The given object
 */
setZIndex(zIndex: number | void): H$map.map$Object;

/**
 * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
 * @param {H$map.map$Object} other -The map object with which to compare the given object.
 * @return {number} - A value lower than 0 indicates that the given object has a lower z-order. 0 indicates that both objects have the same z-order.
A value greater than 0, indicates that the given object has a higher z-order.
 */
compareZOrder(other: H$map.map$Object): number;

/**
 * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
 * @return {H$map.map$Group} - An object representing the containing group object or null if the given object is not contained in any group.
 */
getParentGroup(): H$map.map$Group;

/**
 * The root object to which the given object is attached or the object itself if it is not attached to another.
 * @return {H$map.map$Object} - An object representing the root group for the given object or the given object if it is not part of a group.
 */
getRootGroup(): H$map.map$Object;

/**
 * This method checks whether the received object is an inclusive descendant of the given object.
 * @param {any} object - The object to check.
 * @return {boolean} - true if the given object is contained in the given object, otherwise false
 */
contains(object: any): boolean;

/**
 * This method obtains the current provider of the given object
 * @return {H$map.provider.provider$ObjectProvider} - An object representing the provider
 */
getProvider(): H$map.provider.provider$ObjectProvider;

/**
 * This method retrieves the invalidation states for the given object.
 * @return {H$map.provider.provider$Invalidations} - An object containing the invalidation states
 */
getInvalidations(): H$map.provider.provider$Invalidations;

/**
 * This method invalidates the given map object.
 * @param {H$math.math$BitMask} flags - The flags indicating the types of changes to the given object
 * @return {boolean} - Indicates whether a validation was executed (only if the object has a provider)
 */
invalidate(flags: H$math.math$BitMask): boolean;

/**
 * This method retrieves previously stored arbitrary data from the given object.
 * @return {any} - The previously stored data or undefined if no data was stored.
 */
getData(): any;

/**
 * This method stores arbitrary data with the given map object.
 * @param {any} data - The data to be stored
 * @return {H$map.map$Object} - The given map object
 */
setData(data: any): H$map.map$Object;

/**
 * This method adds a listener for a specific event.
 * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
 * @param {string} type - The name of the event
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} handler - An event handler function
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An object defining the scope for the handler function
 */
addEventListener(type: string, handler: () => void, opt_capture?: boolean, opt_scope?: {}): void;

/**
 * This method removes a previously added listener from the EventTarget instance.
 * @param {string} type - The name of the event
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} handler - An event handler function
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An object defining the scope for the handler function
 */
removeEventListener(type: string, handler: () => void, opt_capture?: boolean, opt_scope?: {}): void;

/**
 * This method dispatches an event on the EventTarget object.
 * @param {H$util.AbstractReader$Event | string} evt - An object representing the event or a string with the event name
 */
dispatchEvent(evt: H$util.AbstractReader$Event | string): void;

/**
 * This method removes listeners from the given object.
 * Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds a callback which is triggered when the EventTarget object is being disposed.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope for the callback function
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Polyline$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.geo$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Polyline$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Polyline$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Polyline$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Polyline$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Polyline$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Polyline$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.geo$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Polyline$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Polyline$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Polyline$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Polyline$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Polyline$Options | boolean),
panorama?: (H$ui.ui$Pano.Polyline$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Polyline$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * A Polygon with a rectangular shape.
 */
declare class map$Rect mixins undefined.map$Polygon {

/**
 * Constructor
 * @param {H$geo.map$Rect} bounds - The geographical bounding box for this rectangle
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(bounds: H$geo.map$Rect, opt_options?: H$map.map$Spatial.Polyline$Options): this;

/**
 * To set the bounds of this rectangle.
 * @param {H$geo.map$Rect} bounds
 */
setBounds(bounds: H$geo.map$Rect): void
}


/**
 * This class represents a spatial map object which provides its projected geometry.
 */
declare class map$Spatial mixins undefined.map$Object {

/**
 * Constructor
 * @param {boolean} isClosed - Indicates whether this spatial object represents a closed shape
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - The options to apply
 */
constructor(isClosed: boolean, opt_options?: H$map.map$Spatial.Polyline$Options): this;

/**
 * To get the drawing style of this object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
 * @returns {H$map.map$SpatialStyle}
 */
getStyle(): H$map.map$SpatialStyle;

/**
 * To set the drawing style of this object. If the passed opt_style argument is an instance of H.map.SpatialStyle it is treated as immutable and must not be modified afterwards to prevent
 * inconsistancies!
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_style - The style to set. If it evaluates to a falsy the H.map.SpatialStyle.DEFAULT_STYLE is used.
 * @returns {H$map.map$Spatial} - the Spatial instance itself
 */
setStyle(
opt_style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Polyline$Options)): H$map.map$Spatial;

/**
 * To get the arrow style of this spatial object or undefined if no style is defined. A returned arrow style is treated as immutable and must not be modified afterwards to prevent
 * inconsistancies!
 * @returns {(H$map.map$ArrowStyle | void)}
 */
getArrows(): H$map.map$ArrowStyle | void;

/**
 * To set the arrow style of this object.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_arrows - the arrow style to be applied
 * @returns {H$map.map$Spatial} - the Spatial instance itself
 */
setArrows(
opt_arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Polyline$Options)): H$map.map$Spatial;

/**
 * Indicates whether this spatial object represents a closed shape
 * @returns {boolean}
 */
isClosed(): boolean
}


/**
 * Data to used as rendering hint for a label
 * @property x {number} - The X coordinate of the first line's starting point
 * @property y {number} - The Y coordinate of the first line's base line
 * @property angle {number} - The clockwise rotation angle in radians
 * @property font {string} - The CSS font-family
 * @property size {number} - The CSS font-size
 * @property color {string} - The CSS color
 * @property text {string} - The text content, new line characters (\u000A) are interpreted as line breaks
 */
declare interface Spatial$Label {
x: number,
y: number,
angle: number,
font: string,
size: number,
color: string,
text: string
} 


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Spatial$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Spatial$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Spatial$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Spatial$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Spatial$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Spatial$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Spatial$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Spatial$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Spatial$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Spatial$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Spatial$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Spatial$Options | boolean),
panorama?: (H$ui.ui$Pano.Spatial$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Spatial$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * The SpatialStyle class represents a style with which spatial objects like polylines and polygons are drawn. A SpatialStyle instance is always treated as immutable to avoid inconstiencies
 * and must not modified.
 * @property strokeColor {string} - The color of the stroke in CSS syntax, default is 'rgba(0, 85, 170, 0.6)'.
 * @property fillColor {string} - The filling color in CSS syntax, default is 'rgba(0, 85, 170, 0.4)'.
 * @property lineWidth {number} - The width of the line in pixels, default is 2.
 * @property lineCap {H.map.SpatialStyle.LineCap} - The style of the end caps for a line, default is 'round'.
 * @property lineJoin {H.map.SpatialStyle.LineJoin} - The type of corner created, when two lines meet, default is 'miter'.
 * @property miterLimit {number} - The miter length is the distance between the inner corner and the outer corner where two lines meet. The default is 10.
 * @property lineDash {Array<number>} - The line dash pattern as an even numbered list of distances to alternately produce a line and a space. The default is [].
 * @property lineDashOffset {number} - The phase offset of the line dash pattern The default is 0.
 * @property MAX_LINE_WIDTH {number} - This constant represents the maximum line width which can be used for rendering.
 * @property DEFAULT_STYLE {H.map.SpatialStyle} - This static member defines the default style for spatial objects on the map. It's value is
{ strokeColor: '#05A', fillColor: 'rgba(0, 85, 170, 0.4)', lineWidth: 1, lineCap: 'round', lineJoin: 'miter', miterLimit: 10, lineDash: [], lineDashOffset: 0 }
 */
declare class map$SpatialStyle  {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - The optional style attributes
 */
constructor(opt_options?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Spatial$Options)): this;

/**
 * This method checks value-equality with another style.
 * @param {(H$map.map$SpatialStyle | H$map.map$SpatialStyle.Spatial$Options)} other - the style to compare with
 * @returns {boolean} - true if the styles are value-equal, otherwise false
 */
equals(
other: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Spatial$Options)): boolean;

/**
 * Returns a copy of spatial style object and replaces the passed style attributes into it.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_attributes - The style attributes to set on the copied style instance
 * @returns {H$map.map$SpatialStyle}
 */
getCopy(
opt_attributes?: H$map.map$SpatialStyle.Spatial$Options): H$map.map$SpatialStyle;
strokeColor: string;
fillColor: string;
lineWidth: number;
lineCap: H$map.map$SpatialStyle.SpatialStyle$LineCap;
lineJoin: H$map.map$SpatialStyle.SpatialStyle$LineJoin;
miterLimit: number;
lineDash: number[];
lineDashOffset: number;
static MAX_LINE_WIDTH: number;
static DEFAULT_STYLE: H$map.map$SpatialStyle
}


/**
 * The style of the end caps for a line, one of 'butt', 'round' or 'square'.
 */
declare type SpatialStyle$LineCap = "butt" | "round" | "square";


/**
 * The type of corner created, when two lines meet, one of 'round', 'bevel' or 'miter'.
 */
declare type SpatialStyle$LineJoin = "round" | "bevel" | "miter";


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface SpatialStyle$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.SpatialStyle$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.SpatialStyle$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.SpatialStyle$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.SpatialStyle$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.SpatialStyle$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.SpatialStyle$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.SpatialStyle$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.SpatialStyle$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.SpatialStyle$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.SpatialStyle$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.SpatialStyle$Options | boolean),
panorama?: (H$ui.ui$Pano.SpatialStyle$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.SpatialStyle$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * This class represents a view of the map. It consists of a virtual camera and a look-at point both of which have a position in geo-space and orientation angles. The view model allows to
 * change the values of these objects in order to move or rotate the map or zoom in and out.
 */
declare class map$ViewModel mixins undefined.util$EventTarget, undefined.map$IControl {

/**
 * This method returns the camera data, which is currently rendered.
 * @returns {H$map.map$ViewModel.ViewModel$CameraData} - the current rendered camera data
 */
getCameraData(): H$map.map$ViewModel.ViewModel$CameraData;

/**
 * This method sets new camera data to be processed by the renderer.
 * @param {H$map.map$ViewModel.ViewModel$CameraData} data - the values to be modified
 * @returns {H$map.map$ViewModel} - this view model object
 */
setCameraData(data: H$map.map$ViewModel.ViewModel$CameraData): H$map.map$ViewModel;

/**
 * This method sets a new zoom level to be processed by the renderer
 * @param {number} zoom - the new zoom level
 * @param {boolean} animate
 */
setZoom(zoom: number, animate: boolean): void;

/**
 * This method returns the zoom level that is currently rendered.
 * @returns {number} - current zoom level (scale)
 */
getZoom(): number;

/**
 * This method returns the currently requested data.
 * @returns {H$map.map$ViewModel.ViewModel$CameraData} - last requested cam/view data
 */
getRequestedCameraData(): H$map.map$ViewModel.ViewModel$CameraData;

/**
 * A method to signal the begin of a control operation.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_kinetics - kinetics settings
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_atX - x screen coordinate at which control has started
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_atY - y screen coordinate at which control has started
 */
startControl(
opt_kinetics?: H$util.kinetics.kinetics$IKinetics,
opt_atX?: number,
opt_atY?: number): void;

/**
 * A method to set the values for a continuously modification of the ViewModel on different axes. If the current render engine doesn't support certain modifications then they are ignored.
 * @param {number} moveX - The movement on x-axis as levels per millisecond where a level correlates to the distance between camera and look-at point.
 * @param {number} moveY - The movement on y-axis as levels per millisecond where a level correlates to the distance between camera and look-at point
 * @param {number} moveZ - The movement on z-axis as levels per millisecond.
 * @param {number} angleX - The rotation of on screen's x axis as degrees per millisecond.
 * @param {number} angleY - The rotation of on screen's y axis as degrees per millisecond.
 * @param {number} angleZ - The rotation of on screen's z axis as degrees per millisecond.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_zoom - The modification of the zoom level as levels per millisecond
 */
control(
moveX: number,
moveY: number,
moveZ: number,
angleX: number,
angleY: number,
angleZ: number,
opt_zoom?: number): void;

/**
 * A method to signal the end of a control operation.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_preventKinetics - A flag to indicate whether a kinetic effect is performed
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_adjustView - An callback to adjust the final ViewModel by modifying the passed camera data.
 */
endControl(
opt_preventKinetics?: boolean,
opt_adjustView?: (data: H$map.map$ViewModel.ViewModel$CameraData) => void): void;

/**
 * This method will dispatch event on the event target object
 * @param {(H$util.AbstractReader$Event | string)} evt - event object or event name
 */
dispatchEvent(evt: (H$util.AbstractReader$Event | string)): void;

/**
 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds callback which is triggered when the object is being disposed
 * @param {Function} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope to call the callback in.
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void
}


/**
 * Defines camera's properties.
 * @property zoom {number=} - zoom level to be used by rendering engine
 * @property position {H.geo.IPoint} - the position of the virtual camera in geo-space
 * @property pitch {number=} - the rotation of the virtual camera along its local x-axis
 * @property yaw {number=} - the rotation of the virtual camera along its local y-axis
 * @property roll {number=} - the rotation of the virtual camera along its local z-axis
 * @property fov {number=} -
 */
declare interface ViewModel$CameraData {
zoom?: number,
position: H$geo.geo$IPoint,
pitch?: number,
yaw?: number,
roll?: number,
fov?: number
} 


/**
 * Defines currently requested view data, which will be rendered by the map.
 * @property camera {H.map.ViewModel.CameraData=} - The requested camera properties
 * @property zoom {number=} - The requested zoom level
 * @property animate {boolean=} - indicates if the requested transition should be animated
 */
declare interface ViewModel$RequestedData {
camera?: H$map.map$ViewModel.ViewModel$CameraData,
zoom?: number,
animate?: boolean
} 


/**
 * Update event is fired whenever view model data is changed. It contains property which hold currently requested data
 * @property target {*} - Object which triggered the event
 * @property currentTarget {*} - Object which has listener attached
 * @property type {string} - Name of the dispatched event
 * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
 */
declare class ViewModel$UpdateEvent mixins undefined.AbstractReader$Event {

/**
 * Constructor
 * @param {H$map.map$ViewModel.ViewModel$RequestedData} requested
 */
constructor(requested: H$map.map$ViewModel.ViewModel$RequestedData): this;

/**
 * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
 */
preventDefault(): void;

/**
 * Stops propagation for current event.
 */
stopPropagation(): void;
target: any;
currentTarget: any;
type: string;
defaultPrevented: boolean
}


/**
 * ViewPort object holds information about the HTML element where the map is rendered. It contains information regarding the element (view port) size and triggers events when the element size
 * is changed.
 * @property element {Element} - This property holds the HTML element, which defines the viewport.
 * @property width {number} - This property holds this viewport&#x27;s current width
 * @property height {number} - This property holds this viewport&#x27;s current height
 * @property margin {number} - This property holds this viewport&#x27;s current margin value
 * @property padding {H.map.ViewPort.Padding} - This property holds this viewport&#x27;s current padding
 * @property center {H.math.Point} - This property holds this viewport&#x27;s current center point
 */
declare class map$ViewPort mixins undefined.util$EventTarget, undefined.map$IInteraction {

/**
 * Constructor
 * @param {base$Element} element - html element were map will be rendered
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - optional configuration parameters
 */
constructor(element: base$Element, opt_options?: H$map.map$ViewPort.SpatialStyle$Options): this;

/**
 * This method sets the margin on the viewPort
 * @param {number} margin - margin which is used to fetch map data
 */
setMargin(margin: number): void;

/**
 * This method sets the padding on the viewport. Padding will result in shifted map center which will be the visual center of the padded area.
 * @param {number} top - padding from the top
 * @param {number} right - padding from the right
 * @param {number} bottom - padding from the bottom
 * @param {number} left - padding from the left
 */
setPadding(top: number, right: number, bottom: number, left: number): void;

/**
 * This method updates size of the viewport according to container size. It must be called whenever the HTML element changed size in order to update the map&#x27;s viewport values.
 */
resize(): void;

/**
 * This method starts the interaction with the view port. Should be called every time when new interaction is started i.e mouse grab, or touch start.
 * @param {number} modifiers - a bitmask which specifies what operations should performed during every interaction
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_kinetics - specifies kinetic move at the end of interaction
 */
startInteraction(
modifiers: H$math.math$BitMask,
opt_kinetics?: H$util.kinetics.kinetics$IKinetics): void;

/**
 * This method resolves direct screen (view port) interaction. This function will modify the current view according to values passed in.
 * @param {number} x - viewport x coordinate
 * @param {number} y - viewport y coordinate
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_bx - x coordinate for second pointer/touch if present
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_by - y coordinate for secong pointer/touch if present
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_timestamp - known timestamp which should be passed
 */
interaction(
x: number,
y: number,
opt_bx?: number,
opt_by?: number,
opt_timestamp?: number): void;

/**
 * This method ends interaction and applies kinetic movement if defined by using startInteraction method
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_preventKinetics - if set to true will prevent kinetics behaviour at the end of interaction
 */
endInteraction(opt_preventKinetics?: boolean): void;

/**
 * This method will dispatch event on the event target object
 * @param {(H$util.AbstractReader$Event | string)} evt - event object or event name
 */
dispatchEvent(evt: (H$util.AbstractReader$Event | string)): void;

/**
 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds callback which is triggered when the object is being disposed
 * @param {Function} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope to call the callback in.
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
element: base$Element;
width: number;
height: number;
margin: number;
padding: H$map.map$ViewPort.ViewPort$Padding;
center: H$math.geo$Point
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface ViewPort$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.ViewPort$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ViewPort$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ViewPort$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ViewPort$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ViewPort$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ViewPort$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ViewPort$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.ViewPort$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.ViewPort$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.ViewPort$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.ViewPort$Options | boolean),
panorama?: (H$ui.ui$Pano.ViewPort$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.ViewPort$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * Represents viewport padding definition.
 * @property top {number} - the padding on the top edge (in pixels)
 * @property right {number} - the padding on the right edge (in pixels)
 * @property bottom {number} - the padding on the bottom edge (in pixels)
 * @property left {number} - the padding on the left edge (in pixels)
 */
declare interface ViewPort$Padding {
top: number,
right: number,
bottom: number,
left: number
} 


/**
 * BaseTileLayer encapsulates funcitonailty that is common to all layers that deliver tiles, such as H.map.layer.TileLayer. The functionality includes geo bounding box to grid
 * calculation, tile request management.
 */
declare class layer$BaseTileLayer mixins undefined.layer$Layer {

/**
 * Constructor
 * @param {H$map.provider.venues$TileProvider} provider - data source for the TileLayer
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - additional options
 */
constructor(provider: H$map.provider.venues$TileProvider, opt_options?: H$map.layer.layer$ITileLayer.ViewPort$Options): this;

/**
 * This method returns the provider which feeds this layer with data.
 * @returns {H$map.provider.venues$TileProvider} - this layer's provider
 */
getProvider(): H$map.provider.venues$TileProvider;

/**
 * This method transforms a geo-rectangle to geometrical projected rectangle at the current projection zoom level or at provided zoom level
 * @param {H$geo.map$Rect} geoRect - geo bounds to be projected
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_zoom - overrides current projection zoom level
 * @returns {H$math.map$Rect} - projected 2d space rect cooresponding to provided geo bounds
 */
geoRectToRect(geoRect: H$geo.map$Rect, opt_zoom?: number): H$math.map$Rect;

/**
 * This method returns tile grid for a bounding rectangle
 * @param {H$math.map$Rect} rectBounds - projected rect bounds which coorespond to geo bounding box
 * @param {number} zoom - current zoom level
 * @returns {H$math.map$Rect} - rectangle which represents the tile grid bounds
 */
getTileBounds(rectBounds: H$math.map$Rect, zoom: number): H$math.map$Rect;

/**
 * This method requests a single tile according to tile coordinates. It returns either a Tile object if it is already loaded or undefined and starts loading the tile
 * @param {number} x - tile row position
 * @param {number} y - tile column position
 * @param {number} z - The zoom level for which the tile is requested
 * @param {boolean} cacheOnly - indicates whether only cached tiles are to be considered
 * @returns {(H$map.provider.provider$Tile | void)} - tile object corresponding to requested coordinates
 */
requestTile(
x: number,
y: number,
z: number,
cacheOnly: boolean): H$map.provider.provider$Tile | void;

/**
 * This method cancels a previously requested tile.
 * @param {number} x - tile row position
 * @param {number} y - tile column position
 * @param {number} z - zoom level
 */
cancelTile(x: number, y: number, z: number): void;

/**
 * This method requests tiles from the data source (provider). It can return a set of tiles which are currently loaded. All tiles which are not yet loaded will be included in response
 * as soon as they will be available during subsequent calls.
 * @param {H$math.map$Rect} tileBounds - bounds in tile grid
 * @param {boolean} isCDB
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @param {H$math.geo$Point} prioCenter - The priority center as an offset in screen pixel relative to the center
 * @returns {H$map.layer.layer$ITileLayer.ITileLayer$Response} - returns an array if tile which are already loaded
 */
getProviderTiles(
tileBounds: H$math.map$Rect,
isCDB: boolean,
zoomLevel: number,
cacheOnly: boolean,
prioCenter: H$math.geo$Point): H$map.layer.layer$ITileLayer.ITileLayer$Response
}


/**
 * This interface describes a layer which provides marker objects to the renderer.
 */
declare interface layer$IMarkerLayer {

/**
 * This method requests marker objects for provided bounding rectangle.
 * @param {H$geo.map$Rect} boundingRect - the bounding rectangle for which marker are to be returned
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @param {H$math.geo$Point} prioCenter - The priority center as an offset in screen pixel relative to the center
 * @returns {(H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse)} - a response object containing the number of markers and the markers themselves
 */
requestMarkers(
boundingRect: H$geo.map$Rect,
zoomLevel: number,
cacheOnly: boolean,
prioCenter: H$math.geo$Point): (H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse),

/**
 * This method requests dom marker objects for provided bounding rectangle.
 * @param {H$geo.map$Rect} boundingRect - the bounding rectangle for which marker are to be returned
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @param {H$math.geo$Point} prioCenter - The priority center as an offset in screen pixel relative to the center
 * @returns {(H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse)} - a response object containing the number of markers and the markers themselves
 */
requestDomMarkers(
boundingRect: H$geo.map$Rect,
zoomLevel: number,
cacheOnly: boolean,
prioCenter: H$math.geo$Point): (H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse)
} 


/**
 * This type represents a response object returned by the H.map.layer.IMarkerLayer#requestMarkers function.
 * @property total {number} - The total number of markers, inclusive markers with not ready icons
 * @property markers {Array<H.map.AbstractMarker>} - The marker objects for the bounding rectangle (only ready)
 */
declare interface IMarkerLayer$Response {
total: number,
markers: H$map.map$AbstractMarker[],
total: number,
tiles: H$map.provider.provider$Tile[]
} 


/**
 * This type represents a response object returned by the H.map.layer.IMarkerLayer#requestMarkers function.
 * @property number {number} - of returned tiles
 * @property requested {number} - number of requested tiles
 * @property objects {Array<H.map.AbstractMarker>} - the marker objects within requested tiled area
 */
declare interface IMarkerLayer$TiledResponse {
number: number,
requested: number,
objects: H$map.map$AbstractMarker[]
} 


/**
 * This interface describes a layer which provides data partitioned in quad-tree tiles in an x, y, z fashion (where z describes the level within the tree and x and y describe the absolute
 * column and row indeces whithin the level).
 */
declare interface layer$ITileLayer {

/**
 * This method requests tiles for the current bounding rectangle at the given zoom level (z-value).
 * @param {H$geo.map$Rect} boundingRect - the bounding rectangle for which tiles are to be returned
 * @param {number} zoomLevel - The zoom level for which the tiles are requested
 * @param {boolean} cacheOnly - Indicates whether only cached tiles are to be considered
 * @param {H$math.geo$Point} prioCenter - The priority center as an offset in screen pixel relative to the center
 * @returns {H$map.layer.layer$ITileLayer.IMarkerLayer$Response} - a response object containing the total number of tiles requested and the tile objects that could be immediately returned
 */
requestTiles(
boundingRect: H$geo.map$Rect,
zoomLevel: number,
cacheOnly: boolean,
prioCenter: H$math.geo$Point): H$map.layer.layer$ITileLayer.IMarkerLayer$Response,

/**
 * This method requests a single tile according to tile coordinates. It returns either a Tile object if it is already loaded or undefined and starts loading the tile
 * @param {number} x - tile row position
 * @param {number} y - tile column position
 * @param {number} z - The zoom level for which the tile is requested
 * @param {boolean} cacheOnly - indicates whether only cached tiles are to be considered
 * @returns {(H$map.provider.provider$Tile | void)} - tile object corresponding to requested coordinates
 */
requestTile(
x: number,
y: number,
z: number,
cacheOnly: boolean): H$map.provider.provider$Tile | void,

/**
 * This method cancels a previously requested tile.
 * @param {number} x - tile row position
 * @param {number} y - tile column position
 * @param {number} z - zoom level
 */
cancelTile(x: number, y: number, z: number): void
} 


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface ITileLayer$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.ITileLayer$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ITileLayer$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ITileLayer$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ITileLayer$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ITileLayer$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ITileLayer$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ITileLayer$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.ITileLayer$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.ITileLayer$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.ITileLayer$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.ITileLayer$Options | boolean),
panorama?: (H$ui.ui$Pano.ITileLayer$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.ITileLayer$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * This type represents a response object returned by the H.map.layer.IMarkerLayer#requestMarkers function.
 * @property total {number} - The total number of markers, inclusive markers with not ready icons
 * @property markers {Array<H.map.AbstractMarker>} - The marker objects for the bounding rectangle (only ready)
 */
declare interface ITileLayer$Response {
total: number,
markers: H$map.map$AbstractMarker[],
total: number,
tiles: H$map.provider.provider$Tile[]
} 


/**
 * The Layer class represents an object that is evaluated by the renderer in the order in which it is added to the layers collection. It provides the basic infrastructure for dispatching
 * update events to the renderer in case new data is available.
 */
declare class layer$Layer mixins undefined.util$EventTarget {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - optional configuration object
 */
constructor(opt_options?: H$map.layer.layer$Layer.ITileLayer$Options): this;

/**
 * This method checks if a zoom level can be served by this layer.
 * @param {number} zoomLevel - the zoom level to check
 * @returns {boolean} - true if this layer can provide data for the zoom level, otherwise false
 */
isValid(zoomLevel: number): boolean;

/**
 * This method sets the minimum zoom level for which this layer will provide tiles.
 * @param {number} min - The new minimum zoom level of this layer
 * @returns {H$map.layer.layer$Layer} - Returns this instance of the layer
 */
setMin(min: number): H$map.layer.layer$Layer;

/**
 * This method sets the maximum zoom level for which this layer will provide tiles.
 * @param {number} max - The new maximum zoom level of this layer
 * @returns {H$map.layer.layer$Layer} - Returns this instance of the layer
 */
setMax(max: number): H$map.layer.layer$Layer;

/**
 * This method returns the copyright of the current data provider.
 * @param {H$geo.map$Rect} bounds - the bounding area for which to retrieve the copyright information
 * @param {number} level - the zoom level for which to retrieve the copyright information
 * @returns {Array<H$map.map$ICopyright>} - a list of copyright information objects for the provided area and zoom level
 */
getCopyrights(bounds: H$geo.map$Rect, level: number): H$map.map$ICopyright[];

/**
 * This method will dispatch event on the event target object
 * @param {(H$util.AbstractReader$Event | string)} evt - event object or event name
 */
dispatchEvent(evt: (H$util.AbstractReader$Event | string)): void;

/**
 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds callback which is triggered when the object is being disposed
 * @param {Function} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope to call the callback in.
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Layer$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Layer$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Layer$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Layer$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Layer$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Layer$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Layer$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Layer$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Layer$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Layer$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Layer$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Layer$Options | boolean),
panorama?: (H$ui.ui$Pano.Layer$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Layer$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * ObjectTileLayer represents map objects which are requested on a tile basis
 */
declare class layer$MarkerTileLayer mixins undefined.layer$BaseTileLayer, undefined.layer$IMarkerLayer {

/**
 * Constructor
 * @param {H$map.provider.provider$MarkerTileProvider} provider
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(provider: H$map.provider.provider$MarkerTileProvider, opt_options?: H$map.layer.layer$ITileLayer.Layer$Options): this;

/**
 * This method requests marker objects for provided bounding rectangle.
 * @param {H$geo.map$Rect} boundingRect - the bounding rectangle for which marker are to be returned
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @param {H$math.geo$Point} prioCenter - The priority center as an offset in screen pixel relative to the center
 * @returns {(H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse)} - a response object containing the number of markers and the markers themselves
 */
requestMarkers(
boundingRect: H$geo.map$Rect,
zoomLevel: number,
cacheOnly: boolean,
prioCenter: H$math.geo$Point): (H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse);

/**
 * This method requests dom marker objects for provided bounding rectangle.
 * @param {H$geo.map$Rect} boundingRect - the bounding rectangle for which marker are to be returned
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @param {H$math.geo$Point} prioCenter - The priority center as an offset in screen pixel relative to the center
 * @returns {(H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse)} - a response object containing the number of markers and the markers themselves
 */
requestDomMarkers(
boundingRect: H$geo.map$Rect,
zoomLevel: number,
cacheOnly: boolean,
prioCenter: H$math.geo$Point): (H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse)
}


/**
 * This class represents a layer which renders map objects. Spatial objects like polygons and polylines a rendered to tiles before being passed to the enigne. Point objects like markers
 * are provided as objects given an rectangular area.
 */
declare class layer$ObjectLayer mixins undefined.layer$Layer, undefined.layer$ITileLayer {

/**
 * Constructor
 * @param {H$map.provider.provider$ObjectProvider} provider - the ObjectProvider which provides the map objects to this object layer.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - The options for this layer
 */
constructor(provider: H$map.provider.provider$ObjectProvider | H$clustering.clustering$Provider, opt_options?: H$map.layer.layer$ObjectLayer.Layer$Options): this;

/**
 * This method returns current ObjectLayer's data provider
 * @returns {H$map.provider.provider$ObjectProvider}
 */
getProvider(): H$map.provider.provider$ObjectProvider;

/**
 * To request overlay objects for the passsed bounding rectangle. It returns all overlay objects which are contained within this bounding rectangle.
 * @param {H$geo.map$Rect} bounds - The bounding rectangle for which overlays are to be returned
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @param {H$math.geo$Point} prioCenter - The priority center as an offset in screen pixel relative to the center
 * @returns {H$map.layer.layer$ObjectLayer.ObjectLayer$OverlaysResponse}
 */
requestOverlays(
bounds: H$geo.map$Rect,
zoomLevel: number,
cacheOnly: boolean,
prioCenter: H$math.geo$Point): H$map.layer.layer$ObjectLayer.ObjectLayer$OverlaysResponse;

/**
 * This method requests tiles for the current bounding rectangle at the given zoom level (z-value).
 * @param {H$geo.map$Rect} boundingRect - the bounding rectangle for which tiles are to be returned
 * @param {number} zoomLevel - The zoom level for which the tiles are requested
 * @param {boolean} cacheOnly - Indicates whether only cached tiles are to be considered
 * @param {H$math.geo$Point} prioCenter - The priority center as an offset in screen pixel relative to the center
 * @returns {H$map.layer.layer$ITileLayer.ITileLayer$Response} - a response object containing the total number of tiles requested and the tile objects that could be immediately returned
 */
requestTiles(
boundingRect: H$geo.map$Rect,
zoomLevel: number,
cacheOnly: boolean,
prioCenter: H$math.geo$Point): H$map.layer.layer$ITileLayer.ITileLayer$Response;

/**
 * This method requests a single tile according to tile coordinates. It returns either a Tile object if it is already loaded or undefined and starts loading the tile
 * @param {number} x - tile row position
 * @param {number} y - tile column position
 * @param {number} z - The zoom level for which the tile is requested
 * @param {boolean} cacheOnly - indicates whether only cached tiles are to be considered
 * @returns {(H$map.provider.provider$Tile | void)} - tile object corresponding to requested coordinates
 */
requestTile(
x: number,
y: number,
z: number,
cacheOnly: boolean): H$map.provider.provider$Tile | void;

/**
 * This method cancels a previously requested tile.
 * @param {number} x - tile row position
 * @param {number} y - tile column position
 * @param {number} z - zoom level
 */
cancelTile(x: number, y: number, z: number): void;

/**
 * This method requests marker objects for provided bounding rectangle.
 * @param {H$geo.map$Rect} boundingRect - the bounding rectangle for which marker are to be returned
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @param {H$math.geo$Point} prioCenter - The priority center as an offset in screen pixel relative to the center
 * @returns {(H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse)} - a response object containing the number of markers and the markers themselves
 */
requestMarkers(
boundingRect: H$geo.map$Rect,
zoomLevel: number,
cacheOnly: boolean,
prioCenter: H$math.geo$Point): (H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse);

/**
 * This method requests dom marker objects for provided bounding rectangle.
 * @param {H$geo.map$Rect} boundingRect - the bounding rectangle for which marker are to be returned
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @param {H$math.geo$Point} prioCenter - The priority center as an offset in screen pixel relative to the center
 * @returns {(H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse)} - a response object containing the number of markers and the markers themselves
 */
requestDomMarkers(
boundingRect: H$geo.map$Rect,
zoomLevel: number,
cacheOnly: boolean,
prioCenter: H$math.geo$Point): (H$map.layer.layer$IMarkerLayer.ITileLayer$Response | H$map.layer.layer$IMarkerLayer.IMarkerLayer$TiledResponse)
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface ObjectLayer$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.ObjectLayer$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ObjectLayer$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ObjectLayer$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ObjectLayer$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ObjectLayer$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ObjectLayer$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ObjectLayer$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.ObjectLayer$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.ObjectLayer$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.ObjectLayer$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.ObjectLayer$Options | boolean),
panorama?: (H$ui.ui$Pano.ObjectLayer$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.ObjectLayer$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * A response object returned by the H.map.layer.ObjectLayer#requestOverlays function.
 * @property total {number} - The total number of overlays within the requested bounds, inclusive overlays which are not ready loaded yet
 * @property overlays {Array<H.map.Overlay>} - A list all overlays which are ready to render
 */
declare interface ObjectLayer$OverlaysResponse {
total: number,
overlays: H$map.map$Overlay[]
} 


/**
 * Tile Layer, represents data shown on map on a tile basis. Can be used to show map tile images or other type of data which is partitioned into tiles.
 * @event update {H.util.Event}
 */
declare class layer$TileLayer mixins undefined.layer$BaseTileLayer, undefined.layer$ITileLayer {

/**
 * Constructor
 * @param {H$map.provider.venues$TileProvider} provider - data source for the TileLayer
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - additional options
 */
constructor(provider: H$map.provider.venues$TileProvider, opt_options?: H$map.layer.layer$ITileLayer.ObjectLayer$Options): this;

/**
 * This method requests tiles for the current bounding rectangle at the given zoom level (z-value).
 * @param {H$geo.map$Rect} boundingRect - the bounding rectangle for which tiles are to be returned
 * @param {number} zoomLevel - The zoom level for which the tiles are requested
 * @param {boolean} cacheOnly - Indicates whether only cached tiles are to be considered
 * @param {H$math.geo$Point} prioCenter - The priority center as an offset in screen pixel relative to the center
 * @returns {H$map.layer.layer$ITileLayer.ITileLayer$Response} - a response object containing the total number of tiles requested and the tile objects that could be immediately returned
 */
requestTiles(
boundingRect: H$geo.map$Rect,
zoomLevel: number,
cacheOnly: boolean,
prioCenter: H$math.geo$Point): H$map.layer.layer$ITileLayer.ITileLayer$Response;
update: H$util.AbstractReader$Event
}


/**
 * An ImageTileProvider uses network service to provide bitmap images as tiles.
 * @property tileSize {number} - Size of a tile image supported by the provider
 */
declare class provider$ImageTileProvider mixins undefined.provider$RemoteTileProvider {

/**
 * Constructor
 * @param {H$map.provider.provider$ImageTileProvider.ObjectLayer$Options} options - configuration for tile provider
 */
constructor(options: H$map.provider.provider$ImageTileProvider.ObjectLayer$Options): this;
tileSize: number
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface ImageTileProvider$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.ImageTileProvider$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ImageTileProvider$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ImageTileProvider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ImageTileProvider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ImageTileProvider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ImageTileProvider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ImageTileProvider$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.ImageTileProvider$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.ImageTileProvider$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.ImageTileProvider$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.ImageTileProvider$Options | boolean),
panorama?: (H$ui.ui$Pano.ImageTileProvider$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.ImageTileProvider$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * This class represents invalidation states of a renderable object. A renderer can optimize its rendering strategies based on the information in this object.
 * @property MARK_INITIAL {H.map.provider.Invalidations.Mark} - This constant represents the initial invalidation mark an invalidations object has.
 */
declare class provider$Invalidations  {

/**
 * To update invalidation marks accordingly to the given the invalidation types.
 * @param {H$map.provider.provider$Invalidations.Invalidations$Mark} mark - The invalidation mark to set
 * @param {H$math.math$BitMask} types - The descrete invalidation types to update
 */
update(
mark: H$map.provider.provider$Invalidations.Invalidations$Mark,
types: H$math.math$BitMask): void;

/**
 * This method returns the current invalidation mark of this invalidations object.
 * @returns {H$map.provider.provider$Invalidations.Invalidations$Mark} - the current invalidation mark
 */
getMark(): H$map.provider.provider$Invalidations.Invalidations$Mark;

/**
 * Checks whether any change occurred after the specified since mark
 * @param {H$map.provider.provider$Invalidations.Invalidations$Mark} since - The invalidation mark to check against
 * @returns {boolean}
 */
isAny(since: H$map.provider.provider$Invalidations.Invalidations$Mark): boolean;

/**
 * Checks whether a visual change occurred after the specified since mark
 * @param {H$map.provider.provider$Invalidations.Invalidations$Mark} since - The invalidation mark to check against
 * @returns {boolean}
 */
isVisual(since: H$map.provider.provider$Invalidations.Invalidations$Mark): boolean;

/**
 * Checks whether a spatial change occurred after the specified since mark
 * @param {H$map.provider.provider$Invalidations.Invalidations$Mark} since - The invalidation mark to check against
 * @returns {boolean}
 */
isSpatial(since: H$map.provider.provider$Invalidations.Invalidations$Mark): boolean;

/**
 * Checks whether an add-operation occurred after the specified since mark
 * @param {H$map.provider.provider$Invalidations.Invalidations$Mark} since - The invalidation mark to check against
 * @returns {boolean}
 */
isAdd(since: H$map.provider.provider$Invalidations.Invalidations$Mark): boolean;

/**
 * Checks whether a remove operation occurred after the specified since mark
 * @param {H$map.provider.provider$Invalidations.Invalidations$Mark} since - The invalidation mark to check against
 * @returns {boolean}
 */
isRemove(since: H$map.provider.provider$Invalidations.Invalidations$Mark): boolean;

/**
 * Checks whether a z-order change occurred after the specified since mark
 * @param {H$map.provider.provider$Invalidations.Invalidations$Mark} since - The invalidation mark to check against
 * @returns {boolean}
 */
isZOrder(since: H$map.provider.provider$Invalidations.Invalidations$Mark): boolean;
static MARK_INITIAL: H$map.provider.provider$Invalidations.Invalidations$Mark
}


/**
 * This enumeration encapsulates bit flags for different invalidations of map objects.
 */
declare  class Invalidations$Flag {
  constructor(...args: empty): mixed;
static +NONE: Class<Invalidations$Flag__NONE> & Invalidations$Flag__NONE & 0;// 0
static +VISUAL: Class<Invalidations$Flag__VISUAL> & Invalidations$Flag__VISUAL & 1;// 1
static +SPATIAL: Class<Invalidations$Flag__SPATIAL> & Invalidations$Flag__SPATIAL & 2;// 2
static +ADD: Class<Invalidations$Flag__ADD> & Invalidations$Flag__ADD & 3;// 3
static +REMOVE: Class<Invalidations$Flag__REMOVE> & Invalidations$Flag__REMOVE & 4;// 4
static +Z_ORDER: Class<Invalidations$Flag__Z_ORDER> & Invalidations$Flag__Z_ORDER & 5;// 5

}

declare class Invalidations$Flag__NONE mixins Invalidations$Flag {}
declare class Invalidations$Flag__VISUAL mixins Invalidations$Flag {}
declare class Invalidations$Flag__SPATIAL mixins Invalidations$Flag {}
declare class Invalidations$Flag__ADD mixins Invalidations$Flag {}
declare class Invalidations$Flag__REMOVE mixins Invalidations$Flag {}
declare class Invalidations$Flag__Z_ORDER mixins Invalidations$Flag {}



/**
 * The invalidation mark represents a counter which is increased whenever an invalidation takes place.
 */
declare type Invalidations$Mark = any;


/**
 * A MarkerTileProvider uses network service to provide markers on tile basis.
 * @property requestTile {} - Request data on a tile basis
 * @property cancelTile {} - Cancels tile from being requested using x, y, z coordinates (column, row, zoom)
 * @property cancelTileByKey {} - Cancels tile from being requested using a tile-key
 * @property uri {string} - This provider's unique resource identifier, if not provided at construction time it defaults to provider's uid
 * @property min {number} - Minimum zoom level at which provider can serve data, set at construction time
 * @property max {number} - Maximum zoom level at which provider can server data, set at construction time
 * @property uid {string} - Provider instance unique identifier, generated at construction time
 */
declare class provider$MarkerTileProvider mixins undefined.provider$RemoteTileProvider {

/**
 * Constructor
 * @param {H$map.provider.provider$MarkerTileProvider.ImageTileProvider$Options} options - configuration for tile provider
 */
constructor(options: H$map.provider.provider$MarkerTileProvider.ImageTileProvider$Options): this;

/**
 * To signal to this provider that a map object has been changed. The method marks tile, that contains that object as invalid and triggers dispatchUpdate()
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} marker - The map object to be invalidated
 * @param {H$math.math$BitMask} flags - The flags indicating the types of occurred changes
 */
invalidateObject(marker: H$map.map$AbstractMarker, flags: H$math.math$BitMask): void;

/**
 * Checks whether this provider is currently providing H.map.DomMarker map objects.
 * @returns {boolean}
 */
providesDomMarkers(): boolean
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface MarkerTileProvider$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.MarkerTileProvider$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.clustering$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.MarkerTileProvider$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.MarkerTileProvider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.MarkerTileProvider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.MarkerTileProvider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.MarkerTileProvider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.clustering$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.MarkerTileProvider$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.MarkerTileProvider$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.MarkerTileProvider$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.MarkerTileProvider$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.MarkerTileProvider$Options | boolean),
panorama?: (H$ui.ui$Pano.MarkerTileProvider$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.MarkerTileProvider$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * An abstract class to manage and provide map objects (Marker, Polyline, Polygon)
 */
declare class provider$ObjectProvider mixins undefined.clustering$Provider {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(opt_options?: H$map.provider.clustering$Provider.MarkerTileProvider$Options): this;

/**
 * Returns the accumulate invalidations of this provider's objects that have occurred.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_type - The type of objects to consider for the invalidations. If undefined, all types are taken into account.
 * @returns {H$map.provider.provider$Invalidations}
 */
getInvalidations(opt_type?: H$map.map$Object.Object$Type): H$map.provider.provider$Invalidations;

/**
 * To signal to this provider that a map object has been changed. The method updates the Invalidations of this provider and the given map object and triggers dispatchUpdate()
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} mapObject - The map object to be invalidated
 * @param {H$math.math$BitMask} changes - The flags indicating the types of occurred changes
 */
invalidateObject(mapObject: H$map.map$Object, changes: H$math.math$BitMask): void;

/**
 * Checks whether this provider is currently providing overlay map objects. A concrete implementation of ObjectProvider must override it if it currently provides overlays.
 * @returns {boolean}
 */
providesOverlays(): boolean;

/**
 * Returns all Overlay objects which intersect with the provided area.
 * @param {H$geo.map$Rect} geoRect - A rectangular area in geo space to intersect with
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @returns {Array<H$map.map$Overlay>} - a list of intersecting objects
 */
requestOverlays(
geoRect: H$geo.map$Rect,
zoomLevel: number,
visiblesOnly: boolean,
cacheOnly: boolean): H$map.map$Overlay[];

/**
 * Checks whether this provider is currently providing spatial map objects. A concrete implementation of ObjectProvider must override it if it currently provides Spatials.
 * @returns {boolean}
 */
providesSpatials(): boolean;

/**
 * Returns all polyline, polygon, circle and rect objects which intersect with the provided area.
 * @param {H$geo.map$Rect} geoRect - A rectangular area in geo space to intersect with
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @returns {Array<H$map.map$Spatial>} - a list of intersecting objects
 */
requestSpatials(
geoRect: H$geo.map$Rect,
zoomLevel: number,
visiblesOnly: boolean,
cacheOnly: boolean): H$map.map$Spatial[];

/**
 * Returns the spatial objects which intersect the given tile
 * @param {H$map.provider.SpatialTile} tile - The tile for which the objects are requested
 * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @returns {Array<H$map.map$Spatial>} - a list of intersecting objects
 */
requestSpatialsByTile(
tile: H$map.provider.provider$Tile,
visiblesOnly: boolean,
cacheOnly: boolean): H$map.map$Spatial[];

/**
 * Checks whether this provider is currently providing Marker map objects. A concrete implementation of ObjectProvider must override it if it currently provides Markers.
 * @returns {boolean}
 */
providesMarkers(): boolean;

/**
 * Returns all Marker map objects which intersect with the provided rectangular area.
 * @param {H$geo.map$Rect} geoRect - A rectangular area in geo space to intersect with
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @returns {Array<H$map.map$Marker>} - a list of intersecting objects
 */
requestMarkers(
geoRect: H$geo.map$Rect,
zoomLevel: number,
visiblesOnly: boolean,
cacheOnly: boolean): H$map.map$Marker[];

/**
 * Checks whether this provider is currently providing DomMarker map objects. A concrete implementation of ObjectProvider must override it if it currently provides Markers.
 * @returns {boolean}
 */
providesDomMarkers(): boolean;

/**
 * Returns all DomMarker map objects which intersect with the provided rectangular area.
 * @param {H$geo.map$Rect} geoRect - A rectangular area in geo space to intersect with
 * @param {number} zoomLevel - The zoom level for which the objects are requested
 * @param {boolean} visiblesOnly - Indicates whether only invisible objects are to be considered
 * @param {boolean} cacheOnly - Indicates whether only cached objects are to be considered
 * @returns {Array<H$map.map$DomMarker>} - a list of intersecting objects
 */
requestDomMarkers(
geoRect: H$geo.map$Rect,
zoomLevel: number,
visiblesOnly: boolean,
cacheOnly: boolean): H$map.map$DomMarker[]
}


/**
 * A Provider defines an object which works as a database for the map. Providers can exists in different forms they can implement client side object storage or they can request data from
 * the remote service.
 * @property uri {string} - This provider's unique resource identifier, if not provided at construction time it defaults to provider's uid
 * @property min {number} - Minimum zoom level at which provider can serve data, set at construction time
 * @property max {number} - Maximum zoom level at which provider can server data, set at construction time
 * @property uid {string} - Provider instance unique identifier, generated at construction time
 */
declare class provider$Provider mixins undefined.util$EventTarget {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(opt_options?: H$map.provider.provider$Provider.MarkerTileProvider$Options): this;

/**
 * This method returns the copyrights of the provided content for a certain geographical area at a specified zoom level.
 * @param {H$geo.map$Rect} bounds - The bounding area for which to retrieve the copyright information
 * @param {number} level - The zoom level for which to retrieve the copyright information
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"} - a list of copyright information objects for the provided area and zoom level
 */
getCopyrights(bounds: H$geo.map$Rect, level: number): H$map.map$ICopyright[];

/**
 * This method will dispatch event on the event target object
 * @param {(H$util.AbstractReader$Event | string)} evt - event object or event name
 */
dispatchEvent(evt: (H$util.AbstractReader$Event | string)): void;

/**
 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds callback which is triggered when the object is being disposed
 * @param {Function} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope to call the callback in.
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
uri: string;
min: number;
max: number;
uid: string
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Provider$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Provider$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Provider$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Provider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Provider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Provider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Provider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Provider$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Provider$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Provider$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Provider$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Provider$Options | boolean),
panorama?: (H$ui.ui$Pano.Provider$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Provider$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * RemoteTileProvider is an abstract class which should be used by classes implementing data provision on a tile basis. Every child class needs to implement 'requestInternal'
 * (to request remote tile) and 'getCache' (to provide configured cache object were tiled data is being cached)
 */
declare class provider$RemoteTileProvider mixins undefined.venues$TileProvider {

/**
 * Constructor
 * @param {H$map.provider.venues$TileProvider.Provider$Options} options - The options to instantiate this TileProvider
 */
constructor(options: H$map.provider.venues$TileProvider.Provider$Options): this;

/**
 * This method returns cache which should be used to store tiles
 * @returns {H$util.util$ICache} - cache
 */
getCache(): H$util.util$ICache;

/**
 * This method request tile from remote service
 * @param {number} x - The row number of the tile
 * @param {number} y - The column number of the tile
 * @param {number} z - The zoom level for which the tile is requested
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResponse - function which is called after response arrives
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError - function which is called in case of communication error
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_priority - optional request priority level
 * @returns {H$util.util$ICancelable}
 */
requestInternal(
x: number,
y: number,
z: number,
onResponse?: (
object: H$map.map$Object[] | HTMLImageElement | HTMLCanvasElement | ArrayBuffer,
response: any) => void,
onError?: (s: string) => void,
opt_priority?: H$net.util$Request.Request$Priority): H$util.util$ICancelable;

/**
 * This method instructs the provider to reload data from it's source.
 * @param {boolean} hard - a boolean flag indicating whether to invalidate in hard mode (true) or in soft mode (false);
 */
reload(hard: boolean): void
}


/**
 * Generic Tile object which represents a part of the world fiting into the Tile area represented by the Tiel coordinates (x - row, y - column) and the zoom level (z). Number of tiles
 * at particular zoom level (which means number of areas into world is being splitted) is defined as following: numberOfRows &#x3D; numberOfColumns &#x3D; 2^zoomlevel
 * @property key {string} - Unique tile key generated by provider
 * @property data {*} - Tile data (an image for example)
 * @property valid {boolean} - This property holds a boolean flag indicating whether this tile is still valid (true) or whether it should be re-fetched (false)
 * @property x {number} - Tile column
 * @property y {number} - Tile row
 * @property z {number} - Tile zoom level
 */
declare class provider$Tile  {

/**
 * Constructor
 * @param {number} x - x tile coordinate (row)
 * @param {number} y - y tile coordinate (column)
 * @param {number} z - tile zoom level
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} data - generic data object which cooresponds to the given coordinates
 */
constructor(x: number, y: number, z: number, data?: any): this;
key: string;
data: any;
valid: boolean;
x: number;
y: number;
z: number
}


/**
 * TileProvider is an abstract class to provide data on a tile basis
 * @property requestTile {} - Request data on a tile basis
 * @property cancelTile {} - Cancels tile from being requested using x, y, z coordinates (column, row, zoom)
 * @property cancelTileByKey {} - Cancels tile from being requested using a tile-key
 * @property uri {string} - This provider&#x27;s unique resource identifier, if not provided at construction time it defaults to provider&#x27;s uid
 * @property min {number} - Minimum zoom level at which provider can serve data, set at construction time
 * @property max {number} - Maximum zoom level at which provider can server data, set at construction time
 * @property uid {string} - Provider instance unique identifier, generated at construction time
 */
declare class provider$TileProvider mixins undefined.provider$Provider {

/**
 * Constructor
 * @param {H$map.provider.provider$TileProvider.Provider$Options} options - The options to instantiate this TileProvider
 */
constructor(options: H$map.provider.provider$TileProvider.Provider$Options): this;

/**
 * This method creates a tile object with given parameters
 * @param {number} x - x tile coordinate (row)
 * @param {number} y - y tile coordinate (column)
 * @param {number} z - tile coordinate (zoom)
 * @param {(HTMLImageElement | HTMLCanvasElement)} data - data for the tile
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - free form options object. These options are meant to be used in tile specific rendering cases
 * @returns {H$map.provider.provider$Tile}
 */
createTileInternal(
x: number,
y: number,
z: number,
data: (HTMLImageElement | HTMLCanvasElement),
opt_options?: {
[key: string]: any
}): H$map.provider.provider$Tile;

/**
 * This method creates a tile key consisting of the provider&#x27;s uri, and the tile&#x27;s x, y and z coordinates, seperated by underscores e.g.: &quot;4711_7_42_23&quot;
 * @param {number} x - The x tile coordinate (row)
 * @param {number} y - The y tile coordinate (column)
 * @param {number} z - The z tile coordinate (zoom level)
 * @returns {string} - string
 */
getTileKey(x: number, y: number, z: number): string;
requestTile: any;
cancelTile: any;
cancelTileByKey: any;
uri: string;
min: number;
max: number;
uid: string
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface TileProvider$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.TileProvider$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.TileProvider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.TileProvider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.TileProvider$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.TileProvider$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.TileProvider$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.TileProvider$Options | boolean),
panorama?: (H$ui.ui$Pano.TileProvider$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.TileProvider$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * This is an abstract class representing a render engine. Render engines are used to render the geographical position from a view model on the
 * screen (viewport element). The rendered result may be different for different engines, because every engine uses its own capabilities and
 * specific implementation to present the current view model data in best possible way. For example, 2D engines create a two-dimensional flat
 * map composed of tiles, while 3D engines can generate panoramas displaying the same coordinates as a 'street view'.
 */
declare class render$RenderEngine mixins undefined.util$EventTarget {

/**
 * Constructor
 * @param {H$map.map$ViewPort} viewPort - An object representing the map viewport
 * @param {H$map.map$ViewModel} viewModel - An object representing a view of the map
 * @param {H$map.map$DataModel} dataModel - An object encapsulating the data to be rendered on the map (layers and objects)
 * @param {H$map.render.render$RenderEngine.TileProvider$Options} options - An object containing the render engine initialization options
 */
constructor(viewPort: H$map.map$ViewPort, viewModel: H$map.map$ViewModel, dataModel: H$map.map$DataModel, options: H$map.render.render$RenderEngine.TileProvider$Options): this;

/**
 * This method adds a listener for a specific event.
 * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
 * @param {string} type - The name of the event
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} handler - An event handler function
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An object defining the scope for the handler function
 */
addEventListener(
type: string,
handler: (evt: AbstractReader$Event) => void,
opt_capture?: boolean,
opt_scope?: {}): void;

/**
 * This method removes a previously added listener from the EventTarget instance.
 * @param {string} type - The name of the event
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} handler - A previously added event handler
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An object defining the scope for the handler function
 */
removeEventListener(
type: string,
handler: (evt: AbstractReader$Event) => void,
opt_capture?: boolean,
opt_scope?: {}): void;

/**
 * This method dispatches an event on the EventTarget object.
 * @param {H$util.AbstractReader$Event | string} evt - An object representing the event or a string with the event name
 */
dispatchEvent(evt: H$util.AbstractReader$Event | string): void;

/**
 * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove
 * references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds a callback which is triggered when the EventTarget object is being disposed.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope for the callback function
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface RenderEngine$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.RenderEngine$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.RenderEngine$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.RenderEngine$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.RenderEngine$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.RenderEngine$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.RenderEngine$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.RenderEngine$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.RenderEngine$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.RenderEngine$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.RenderEngine$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.RenderEngine$Options | boolean),
panorama?: (H$ui.ui$Pano.RenderEngine$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.RenderEngine$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * This object defines the modifiers to use for H.map.ViewPort#startInteraction.
 */
declare  class RenderEngine$InteractionModifiers {
  constructor(...args: empty): mixed;
static +ZOOM: Class<RenderEngine$InteractionModifiers__ZOOM> & RenderEngine$InteractionModifiers__ZOOM & 0;// 0
static +HEADING: Class<RenderEngine$InteractionModifiers__HEADING> & RenderEngine$InteractionModifiers__HEADING & 1;// 1
static +TILT: Class<RenderEngine$InteractionModifiers__TILT> & RenderEngine$InteractionModifiers__TILT & 2;// 2
static +INCLINE: Class<RenderEngine$InteractionModifiers__INCLINE> & RenderEngine$InteractionModifiers__INCLINE & 3;// 3
static +COORD: Class<RenderEngine$InteractionModifiers__COORD> & RenderEngine$InteractionModifiers__COORD & 4;// 4

}

declare class RenderEngine$InteractionModifiers__ZOOM mixins RenderEngine$InteractionModifiers {}
declare class RenderEngine$InteractionModifiers__HEADING mixins RenderEngine$InteractionModifiers {}
declare class RenderEngine$InteractionModifiers__TILT mixins RenderEngine$InteractionModifiers {}
declare class RenderEngine$InteractionModifiers__INCLINE mixins RenderEngine$InteractionModifiers {}
declare class RenderEngine$InteractionModifiers__COORD mixins RenderEngine$InteractionModifiers {}



/**
 * The rendering states of the layer.
 */
declare  class render$RenderState {
  constructor(...args: empty): mixed;
static +PENDING: Class<render$RenderState__PENDING> & render$RenderState__PENDING & 0;// 0
static +ACTIVE: Class<render$RenderState__ACTIVE> & render$RenderState__ACTIVE & 1;// 1
static +DONE: Class<render$RenderState__DONE> & render$RenderState__DONE & 2;// 2

}

declare class render$RenderState__PENDING mixins render$RenderState {}
declare class render$RenderState__ACTIVE mixins render$RenderState {}
declare class render$RenderState__DONE mixins render$RenderState {}



/**
 * An object containing rendering parameters.
 */
declare interface render$RenderingParams {

/**
 * The geographical area to render. Note that it is not the same as visible viewport. Specified bounds also include H.Map.Options#margin and
 * optionally an additional margin in case of DOM node rendering for a better rendering experience.
 * @type {H$geo.map$Rect}
 */
bounds: H$geo.map$Rect,

/**
 * The zoom level to render the data for.
 * @type {number}
 */
zoom: number,

/**
 * The coordinates of the screen center in CSS pixels.
 * @type {H$math.geo$Point}
 */
screenCenter: H$math.geo$Point,

/**
 * The coordinates relative to the screen center where the rendering has the highest priority. If the layer has to request and/or process data
 * asynchronously, it's recommended to prioritize the rendering close to this center.
 * @type {H$math.geo$Point}
 */
priorityCenter: H$math.geo$Point,

/**
 * The pixel projection to use to project geographical coordinates into screen coordinates and vice versa.
 * @type {H$geo.geo$PixelProjection}
 */
projection: H$geo.geo$PixelProjection,

/**
 * Indicates whether only cached data should be considered.
 * @type {boolean}
 */
cacheOnly: boolean,

/**
 * The size of the area to render.
 * @type {H$math.math$Size}
 */
size: H$math.math$Size,

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays.
 * See https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio.
 * @type {number}
 */
pixelRatio: number
} 


/**
 * This class implements a map render engine. It presents a geographic location (camera data from a view model) and renders all map layers in
 * the order in which they are provided in a single 2D canvas element.
 */
declare class p2d$RenderEngine mixins undefined.p2d$RenderEngine {

/**
 * Constructor
 * @param {H$map.map$ViewPort} viewPort - An object representing the map viewport
 * @param {H$map.map$ViewModel} viewModel - An object representing a view of the map
 * @param {H$map.map$DataModel} dataModel - An object encapsulating the data to be rendered on the map (layers and objects)
 * @param {H$map.render.p2d$RenderEngine.RenderEngine$Options} options - An object containing the render engine initialization options
 */
constructor(viewPort: H$map.map$ViewPort, viewModel: H$map.map$ViewModel, dataModel: H$map.map$DataModel, options: H$map.render.p2d$RenderEngine.RenderEngine$Options): this;

/**
 * This method sets the length (duration) for all animations run by the render engine in milliseconds.
 * @param {number} duration - A value indicating the duration of animations in milliseconds
 */
setAnimationDuration(duration: number): void;

/**
 * This method retrieves the current setting indicating the length of animations (duration) run by the the render engine in milliseconds.
 * @return {number}
 */
getAnimationDuration(): number;

/**
 * This method sets a value indicating the easing to apply to animations run by the render engine.
 * @param {Function} easeFunction (number)} - A function that alters the progress ratio of an animation. It receives an argument indicating
animation progress as a numeric value in the range between 0 and 1 and must return a numeric value in the same range.
 */
setAnimationEase(easeFunction: (progress: number) => number): void;

/**
 * This method retrieves the current setting representing the easing to be applied to animations.
 * @return {Function} (number) => number} - A numeric value in the range 0 to 1
 */
getAnimationEase(): (progress: number) => number;

/**
 * This method resets animation settings on the render engine to defaults.
 * Duration is set to 300ms and easing to H.util.animation.ease.EASE_OUT_QUAD.
 */
resetAnimationDefaults(): void;

/**
 * This method adds a listener for a specific event.
 * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
 * @param {string} type - The name of the event
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} handler - An event handler function
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An object defining the scope for the handler function
 */
addEventListener(
type: string,
handler: (evt: AbstractReader$Event) => void,
opt_capture?: boolean,
opt_scope?: {}): void;

/**
 * This method removes a previously added listener from the EventTarget instance.
 * @param {string} type - The name of the event
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} handler - A previously added event handler
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_capture - true indicates that the method should listen in the capture phase (bubble otherwise)
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An object defining the scope for the handler function
 */
removeEventListener(
type: string,
handler: (evt: AbstractReader$Event) => void,
opt_capture?: boolean,
opt_scope?: {}): void;

/**
 * This method dispatches an event on the EventTarget object.
 * @param {H$util.AbstractReader$Event | string} evt - An object representing the event or a string with the event name
 */
dispatchEvent(evt: H$util.AbstractReader$Event | string): void;

/**
 * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove
 * references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds a callback which is triggered when the EventTarget object is being disposed.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope for the callback function
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface RenderEngine$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.RenderEngine$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.RenderEngine$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.RenderEngine$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.RenderEngine$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.RenderEngine$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.RenderEngine$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.RenderEngine$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.RenderEngine$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.RenderEngine$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.RenderEngine$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.RenderEngine$Options | boolean),
panorama?: (H$ui.ui$Pano.RenderEngine$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.RenderEngine$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * Behavior class uses map events and adds behavior functionality to the map. This allows map panning and zooming via using mouse wheel
 * @property DRAGGING {number} - Map responds to user dragging via mouse or touch
 * @property WHEELZOOM {number} - Map zooms in or out in respond to mouse wheel events
 * @property DBLTAPZOOM {number} - Map zooms in or out in response to double click or double tap. For double tap if more that one touches are on the screen map will zoom out.
 */
declare class mapevents$Behavior mixins undefined.util$Disposable {

/**
 * Constructor
 * @param {H$mapevents.mapevents$MapEvents} mapEvents - previously initialized map events instance
 * @param {H$mapevents.mapevents$Behavior.RenderEngine$Options} options - additional options (i.e kinetics)
 */
constructor(mapEvents: H$mapevents.mapevents$MapEvents, options?: H$mapevents.mapevents$Behavior.RenderEngine$Options): this;

/**
 * This method destroys all map interaction handling. Should be used when the behavior functionality is disposed. Behavior object will also be disposed (this function will be called)
 * when attached H.mapevents.MapEvents object is dispose.
 */
dispose(): void;

/**
 * This method disables the behavior functionality for the map
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_behavior - The bitmask of behaviors to disable. If no arguments are passed, all behaviors will be disabled.
 */
disable(opt_behavior?: H$math.math$BitMask): void;

/**
 * This method re-enables the behavior functionality for the map.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_behavior - The bitmask of behaviors to enable. If no arguments are passed, all behaviors will be enabled.
 */
enable(opt_behavior?: H$math.math$BitMask): void;

/**
 * This method checks if certain functionality is enabled
 * @param {number} behavior - value like H.mapevents.Behavior.DRAGGING which the check is being performed
 * @returns {boolean}
 */
isEnabled(behavior: number): boolean;
static DRAGGING: number;
static WHEELZOOM: number;
static DBLTAPZOOM: number
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Behavior$Options {
center?: H$geo.geo$IPoint,
zoom?: number,
bounds?: H$geo.map$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Behavior$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Behavior$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.geo$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Behavior$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Behavior$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Behavior$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Behavior$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.map$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Behavior$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.AbstractReader$Event} event
 */
onStateChange?: (event: H$util.AbstractReader$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Behavior$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Behavior$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Behavior$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Behavior$Options | boolean),
panorama?: (H$ui.ui$Pano.Behavior$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Behavior$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.AbstractReader$Event) => void
} 


/**
 * ContextMenuEvent should be fired, when a user right-clicks or longpresses on a map object.
 * @property viewportX {Array<H.util.ContextItem>} - Contains ContextItems, that will be used to create context menu entries. Should be filled by listeners of the "contextmenu" event
 * @property viewportY {number} - Map viewport y position
 * @property target {(H.map.Object | H.Map)} - Target for the event
 * @property originalEvent {Event} - Original event
 * @property currentTarget {(H.map.Object | H.Map)} - Object which has listener attached
 * @property type {string} - Name of the dispatched event
 * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
 */
declare class mapevents$ContextMenuEvent mixins undefined.AbstractReader$Event {

/**
 * Constructor
 * @param {number} viewportX - The x coordinate on the viewport
 * @param {number} viewportY - The y coordinate on the viewport
 * @param {(H$H$Map | H$map.map$Object)} target - The event's target element
 * @param {AbstractReader$Event} originalEvent - target of the event
 */
constructor(viewportX: number, viewportY: number, target: (H$H$Map | H$map.map$Object), originalEvent: AbstractReader$Event): this;
viewportX: H$util.util$ContextItem[];
viewportY: number;
originalEvent: AbstractReader$Event
}


/**
 * Custom map event. Contains list of pointers on the map, list of changed pointers and original event. Inherits from H.util.Event.
 * @property pointers {Array<H.mapevents.Pointer>} - Pointers which are currently on the screen
 * @property changedPointers {Array<H.mapevents.Pointer>} - Pointers which has changed in course of event
 * @property targetPointers {Array<H.mapevents.Pointer>} - Pointers which are on same target as the current pointer
 * @property currentPointer {H.mapevents.Pointer} - Current pointer
 * @property originalEvent {Event} - Original event fired by the browser
 * @property target {(H.map.Object | H.Map)} - Object which triggered event. Can be the map object (i.e marker or polyline) or the map itself
 * @property currentTarget {(H.map.Object | H.Map)} - Object which has listener attached
 * @property type {string} - Name of the dispatched event
 * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
 */
declare class mapevents$Event mixins undefined.mapevents$Event {

/**
 * Constructor
 * @param {string} type - type of event
 * @param {Array<H$mapevents.mapevents$Pointer>} pointers - pointers which are currently on the screen
 * @param {Array<H$mapevents.mapevents$Pointer>} changedPointers - pointers which changed during event
 * @param {Array<H$mapevents.mapevents$Pointer>} targetPointers - pointers on the event target
 * @param {H$mapevents.mapevents$Pointer} currentPointer - pointer which triggered the event
 * @param {(H$H$Map | H$map.map$Object)} target - target map object which triggered event
 * @param {mapevents$Event} originalEvent - original dom event
 */
constructor(type: string, pointers: H$mapevents.mapevents$Pointer[], changedPointers: H$mapevents.mapevents$Pointer[], targetPointers: H$mapevents.mapevents$Pointer[], currentPointer: H$mapevents.mapevents$Pointer, target: (H$H$Map | H$map.map$Object), originalEvent: mapevents$Event): this;

/**
 * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
 */
preventDefault(): void;

/**
 * Stops propagation for current event.
 */
stopPropagation(): void;
pointers: H$mapevents.mapevents$Pointer[];
changedPointers: H$mapevents.mapevents$Pointer[];
targetPointers: H$mapevents.mapevents$Pointer[];
currentPointer: H$mapevents.mapevents$Pointer;
originalEvent: mapevents$Event;
target: (H$map.map$Object | H$H$Map);
currentTarget: (H$map.map$Object | H$H$Map);
type: string;
defaultPrevented: boolean
}


/**
 * MapEvents enable the events functionality on the map and on the map objects. By using this extension it is possible to listen to events on map objects like markers, polylines, polygons,
 * circles and on the map object itself. Events are triggered depending on user interaction. Please check the Events Summary section for the list of events fired by this class and by the map
 * objects.
 */
declare class mapevents$MapEvents mixins undefined.util$Disposable {

/**
 * Constructor
 * @param {H$H$Map} map - map instance which is used for firing events
 */
constructor(map: H$H$Map): this;

/**
 * This method destroys the MapEvents by removing all handlers from the map object. After calling this function mapEvents and map objects will not trigger any events. This object will be
 * disposed automatically if the corresponding map object is disposed.
 */
dispose(): void;

/**
 * This method returns map into which events are attached
 * @returns {H$H$Map}
 */
getAttachedMap(): H$H$Map
}


/**
 * Class representing pointer on the map surface. A pointer in platform specific definition would mean either mouse, touch, pen or any pointing device which can trigger browser events.
 * @property viewportX {number} - X coordinate on the map's viewport
 * @property viewportY {number} - Y coordinate on the map's viewport
 * @property target {(H.map.Object | H.Map)} - Map object directly under the pointer. Can be null if if pointer is out of the map viewport
 * @property id {number} - Pointer unique identifier.
 * @property type {string} - Pointer type can be: 'mouse', 'touch' or 'pen'
 * @property dragTarget {(H.map.Object | H.Map)} - Object which is currently dragged by the pointer
 * @property button {H.mapevents.Pointer.Button} - Indicates which pointer device button has changed.
 */
declare class mapevents$Pointer  {

/**
 * Constructor
 * @param {number} viewportX - pointer position on x-axis
 * @param {number} viewportY - pointer position on y-axis
 * @param {number} id - unique pointer identifier among currently available pointers
 * @param {string} type - type of pointer can be i.e 'mouse', 'touch'. 'pen'
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_button - Indicates which pointer device button has changed.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_buttons - Indicates which pointer device buttons are being pressed, expressed as a bitmask. Uses the same values, as "buttons" in Pointer Events spec.
 */
constructor(viewportX: number, viewportY: number, id: number, type: string, opt_button?: H$mapevents.mapevents$Pointer.Pointer$Button, opt_buttons?: H$math.math$BitMask): this;
static viewportX: number;
static viewportY: number;
static target: (H$map.map$Object | H$H$Map);
static id: number;
static type: string;
static dragTarget: (H$map.map$Object | H$H$Map);
static button: H$mapevents.mapevents$Pointer.Pointer$Button
}


/**
 * Types of a button
 */
declare  class Pointer$Button {
  constructor(...args: empty): mixed;
static +NONE: Class<Pointer$Button__NONE> & Pointer$Button__NONE & 0;// 0
static +LEFT: Class<Pointer$Button__LEFT> & Pointer$Button__LEFT & 1;// 1
static +MIDDLE: Class<Pointer$Button__MIDDLE> & Pointer$Button__MIDDLE & 2;// 2
static +RIGHT: Class<Pointer$Button__RIGHT> & Pointer$Button__RIGHT & 3;// 3

}

declare class Pointer$Button__NONE mixins Pointer$Button {}
declare class Pointer$Button__LEFT mixins Pointer$Button {}
declare class Pointer$Button__MIDDLE mixins Pointer$Button {}
declare class Pointer$Button__RIGHT mixins Pointer$Button {}



/**
 * Indicates which pointer device buttons are being pressed, expressed as a bitmask. Bit values are:
 * 
 *    - 0: No button pressed
 *    - 1: Left mouse button pressed, or Touch contact or Pen contact
 *    - 2: Right mouse button pressed, or Pen contact with barrel button pressed
 *    - 4: Middle mouse button pressed
 */
declare type Pointer$Buttons = H$math.math$BitMask;


/**
 * WheelEvent is fired when the mouse wheel is used over the map. It contains information about cursor position and the map object which resides directly under the cursor.
 * @property delta {number} - Wheel move delta
 * @property viewportX {number} - Map viewport x position
 * @property viewportY {number} - Map viewport y position
 * @property target {(H.map.Object | H.Map)} - Target for the event
 * @property originalEvent {Event} - Original mouse wheel event
 * @property currentTarget {(H.map.Object | H.Map)} - Object which has listener attached
 * @property type {string} - Name of the dispatched event
 * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
 */
declare class mapevents$WheelEvent mixins undefined.mapevents$Event {

/**
 * Constructor
 * @param {number} deltaY - The wheel move delta on y-axis
 * @param {number} viewportX - The x coordinate on the viewport
 * @param {number} viewportY - The y coordinate on the viewport
 * @param {(H$H$Map | H$map.map$Object)} target - The event's target element
 * @param {mapevents$Event} originalEvent - target of the event
 */
constructor(deltaY: number, viewportX: number, viewportY: number, target: (H$H$Map | H$map.map$Object), originalEvent: mapevents$Event): this;
delta: number;
viewportX: number;
viewportY: number;
originalEvent: mapevents$Event
}


/**
 * A signed 32 bit integer (JS restriction) where bit operator can be applied to. The range is [-2,147,483,648 ... 2,147,483,647] or [-2^31 ... 2^31 − 1]
 */
declare type math$BitMask = number;


/**
 * An interface to represent a geographic point. Every point in geo space is represented by three coordinates latitude, longitude and optional altitude.
 * @property lat {H.geo.Latitude} - The latitude coordinate.
 * @property lng {H.geo.Longitude} - The longitude coordinate.
 * @property alt {H.geo.Altitude=} - The altitude coordinate.
 * @property ctx {H.geo.AltitudeContext=} - The altitude context.
 */
declare interface math$IPoint {
lat: H$geo.geo$Latitude,
lng: geo$Longitude,
alt?: H$geo.geo$Altitude,
ctx?: H$geo.geo$AltitudeContext,
x: number,
y: number
} 


/**
 * An interface for a 2-dimensional size consisting a with and a height.
 * @property w {number} - The size's width.
 * @property h {number} - The size's height.
 */
declare interface math$ISize {
w: number,
h: number
} 


/**
 * Class represents a 2-dimensional point, defined by x and y coordinates.
 * @property x {number} - The point's coordinate on X-axis.
 * @property y {number} - The point's coordinate on Y-axis.
 */
declare class math$Point mixins math$IPoint {

/**
 * Constructor
 * @param {number} x - The point's coordinate on X-axis.
 * @param {number} y - The point's coordinate on Y-axis.
 */
constructor(x: number, y: number): this;

/**
 * Sets the x and y coordinate of this point
 * @param {number} x - The point's coordinate on X-axis.
 * @param {number} y - The point's coordinate on Y-axis.
 */
set(x: number, y: number): void;

/**
 * This method creates a copy of the current point.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_out - An optional point to store the copied values
 * @returns {H$math.math$Point} - The clone of the point
 */
clone(opt_out?: math$Point): math$Point;

/**
 * This method adds given point coordinates to the current one.
 * @param {H$math.math$IPoint} other - The point to add
 * @returns {H$math.math$Point} - the point itself after adding
 */
add(other: math$IPoint): math$Point;

/**
 * This method subtracts given point coordinates from the current point.
 * @param {H$math.math$IPoint} other - The point to subtract
 * @returns {H$math.math$Point} - the point itself after subtracting
 */
sub(other: math$IPoint): math$Point;

/**
 * This method scales the current point coordinates by the given factor(s).
 * @param {number} factor - multiplication factor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_factorY - If omitted, the factor argument is used
 * @returns {H$math.math$Point} - the point itself after scaling
 */
scale(factor: number, opt_factorY?: number): math$Point;

/**
 * This method rounds the x and y coordinates of the point.
 * @returns {H$math.math$Point} - the point itself after rounding
 */
round(): math$Point;

/**
 * Rounds the x and y coordinates to the next smaller integer values.
 * @returns {H$math.math$Point} - the point itself after flooring
 */
floor(): math$Point;

/**
 * Rounds the x and y coordinates to the next greater integer values.
 * @returns {H$math.math$Point} - the point itself after ceiling
 */
ceil(): math$Point;

/**
 * This method compares current point coordinates with the supplied point coordinates.
 * @param {H$math.math$IPoint} other - The point to compare to.
 * @returns {boolean} - True if the points are equal
 */
equals(other: math$IPoint): boolean;

/**
 * Calculates the closest point on a given line
 * @param {H$math.math$IPoint} start - The start point of the line
 * @param {H$math.math$IPoint} end - The end point of the line
 * @returns {H$math.math$IPoint} - the closest point
 */
getNearest(start: math$IPoint, end: math$IPoint): math$IPoint;

/**
 * This method calculates the distance to a point supplied by the caller.
 * @param {H$math.math$IPoint} other
 * @returns {number}
 */
distance(other: math$IPoint): number;

/**
 * This method creates a Point instance from a given IPoint object.
 * @param {H$math.math$IPoint} iPoint - The IPoint object to use
 * @returns {H$math.math$Point} - the created Point instance
 */
static fromIPoint(iPoint: math$IPoint): math$Point;
x: number;
y: number
}


/**
 * Class defines a rectangle in 2-dimensional geometric space. It is used to represent the area in projected space.
 */
declare class math$Rect  {

/**
 * Constructor
 * @param {number} left - The rectangle's left edge x value
 * @param {number} top - The rectangle's top edge y value
 * @param {number} right - The rectangle's right edge x value
 * @param {number} bottom - The rectangle's bottom edge y value
 */
constructor(left: number, top: number, right: number, bottom: number): this;

/**
 * To set all values of the rectangle's edges
 * @param {number} left - The rectangle's left edge x value
 * @param {number} top - The rectangle's top edge y value
 * @param {number} right - The rectangle's right edge x value
 * @param {number} bottom - The rectangle's bottom edge y value
 */
set(left: number, top: number, right: number, bottom: number): void;

/**
 * To get the rectangle's top-left vertex
 * @returns {H$math.math$Point}
 */
getTopLeft(): H$math.math$Point;

/**
 * To get the rectangle's bottom-right vertex
 * @returns {H$math.math$Point}
 */
getBottomRight(): H$math.math$Point;

/**
 * Method checks if provided coordinates lie within rectangle.
 * @param {number} x - x-coordinate to check
 * @param {number} y - y-coordinate to check
 * @returns {boolean} - returns true if coordinates lie within rectangle, if parameters are isNaN returns false
 */
containsXY(x: number, y: number): boolean;

/**
 * To create a rectangle from a top-left and bottom-right point pair.
 * @param {H$math.math$IPoint} topLeft - the top-left vertex of the rectanle
 * @param {H$math.math$IPoint} bottomRight - the bottom-right vertex of the rectanle
 * @returns {H$math.math$Rect} - returns the rectangular area defined by the top-left and bottom-right vertices
 */
static fromPoints(topLeft: H$math.math$IPoint, bottomRight: H$math.math$IPoint): H$math.math$Rect;

/**
 * To clone a rectangle
 * @returns {H$math.math$Rect}
 */
clone(): H$math.math$Rect
}


/**
 * Class for representing sizes consisting of a width and height.
 * @property w {number} - The size's width value
 * @property h {number} - The size's height value
 */
declare class math$Size  {

/**
 * Constructor
 * @param {number} width - Width.
 * @param {number} height - Height.
 */
constructor(width: number, height: number): this;
w: number;
h: number
}

declare  class Request$State {
  constructor(...args: empty): mixed;
static +DONE: Class<Request$State__DONE> & Request$State__DONE & 2;// 2
static +OPENED: Class<Request$State__OPENED> & Request$State__OPENED & 1;// 1
static +UNSENT: Class<Request$State__UNSENT> & Request$State__UNSENT & 0;// 0

}

declare class Request$State__DONE mixins Request$State {}
declare class Request$State__OPENED mixins Request$State {}
declare class Request$State__UNSENT mixins Request$State {}


declare type Request$Priority = any;


/**
 * Abstract rest service class
 */
declare class service$AbstractRestService mixins undefined.service$IConfigurable {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(opt_options?: H$service.service$AbstractRestService.Behavior$Options): this;

/**
 * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
 * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
 * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
 * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
 * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in
the opt_baseUrl to use HTTPS.
 * @returns {H$service.service$IConfigurable}
 */
configure(
appId: string,
appCode: string,
useHTTPS: boolean,
useCIT: boolean,
opt_baseUrl?: H$service.service$Url): H$service.service$IConfigurable
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface AbstractRestService$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.AbstractRestService$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.AbstractRestService$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.AbstractRestService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.AbstractRestService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.AbstractRestService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.AbstractRestService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.AbstractRestService$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.AbstractRestService$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.AbstractRestService$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.AbstractRestService$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.AbstractRestService$Options | boolean),
panorama?: (H$ui.ui$Pano.AbstractRestService$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.AbstractRestService$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This property specifies collection of pre-configured HERE layers
 */
declare interface service$DefaultLayers {
normal: H$service.service$MapType,
satellite: H$service.service$MapType,
terrain: H$service.service$MapType,
incidents: H$map.layer.layer$MarkerTileLayer,
venues: H$map.layer.layer$TileLayer
} 


/**
 * This class encapsulates Enterprise Routing REST API as a service stub. An instance of this class can be retrieved by calling the factory method on a platform instance.
 * H.service.Platform#getEnterpriseRoutingService.
 */
declare class service$EnterpriseRoutingService mixins undefined.service$AbstractRestService {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(opt_options?: H$service.service$EnterpriseRoutingService.AbstractRestService$Options): this;

/**
 * This method sends a "calculateroute" request to Enterprise Routing REST API and calls the onResult callback function once the service response was received - providing
 * a H.service.ServiceResult object - or the onError callback if a communication error occurred.
 * @param {H$service.service$ServiceParameters} calculateRouteParams - the service parameters to be sent with the routing request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResult - this function will be called once the Enterprise Routing REST API provides a response to the request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError - this function will be called if a communication error occurs during the JSON-P request
 */
calculateRoute(
calculateRouteParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): void;

/**
 * This method sends a "getroute" request to Enterprise Routing REST API and calls the onResult callback function once the service response was received - providing
 * a H.service.ServiceResult object - or the onError callback if a communication error occurred.
 * @param {H$service.service$ServiceParameters} getRouteParams - the service parameters to be sent with the routing request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResult - this function will be called once the Enterprise Routing REST API provides a response to the request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError - this function will be called if a communication error occurs during the JSON-P request
 */
getRoute(
getRouteParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): void;

/**
 * This method sends a "getlinkinfo" request to Enterprise Routing REST API and calls the onResult callback function once the service response was received - providing
 * a H.service.ServiceResult object - or the onError callback if a communication error occured.
 * @param {H$service.service$ServiceParameters} getLinkInfoParams - the service parameters to be sent with the routing request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResult - this function will be called once the Enterprise Routing REST API provides a response to the request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError - this function will be called if a communication error occurs during the JSON-P request
 */
getLinkInfo(
getLinkInfoParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): void;

/**
 * This method sends a "calculateisoline" request to Enterprise Routing REST API and calls the onResult callback function once the service response was received - providing
 * a H.service.ServiceResult object - or the onError callback if a communication error occurred.
 * @param {H$service.service$ServiceParameters} calculateIsolineParams - the service parameters to be sent with the routing request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResult - this function will be called once the Enterprise Routing REST API provides a response to the request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError - this function will be called if a communication error occurs during the JSON-P request
 */
calculateIsoline(
calculateIsolineParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): void
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface EnterpriseRoutingService$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.EnterpriseRoutingService$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.EnterpriseRoutingService$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.EnterpriseRoutingService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.EnterpriseRoutingService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.EnterpriseRoutingService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.EnterpriseRoutingService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.EnterpriseRoutingService$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.EnterpriseRoutingService$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.EnterpriseRoutingService$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.EnterpriseRoutingService$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.EnterpriseRoutingService$Options | boolean),
panorama?: (H$ui.ui$Pano.EnterpriseRoutingService$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.EnterpriseRoutingService$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This class encapsulates the Geocoding REST API in a service stub with calls to its various resources implemented.
 */
declare class service$GeocodingService mixins undefined.service$AbstractRestService {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(opt_options?: H$service.service$GeocodingService.EnterpriseRoutingService$Options): this;

/**
 * This method sends a reverse geocoding request to Geocoder REST API and calls the onResult callback function once the service response was received - providing a H.service.ServiceResult
 * object - or the onError callback if a communication error occured.
 * @param {H$service.service$ServiceParameters} geoodingParams - the service parameters to be sent with the geocoding request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResult - this function will be called once the Geocoder REST API provides a response to the request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError - this function will be called if a communication error occurs during the JSON-P request
 * @returns {H$service.service$JsonpRequestHandle}
 */
geocode(
geoodingParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): H$service.service$JsonpRequestHandle;

/**
 * This method sends a reverse geocoding request to Geocoder REST API and calls the onResult callback function once the service response was received - providing a H.service.ServiceResult
 * object - or the onError callback if a communication error occured.
 * @param {H$service.service$ServiceParameters} reverseGeocodingParams - the service parameters to be sent with the reverse geocoding request
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResult - this function will be called once the Geocoder REST API provides a response to the request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError - this function will be called if a communication error occurs during the JSON-P request
 * @returns {H$service.service$JsonpRequestHandle}
 */
reverseGeocode(
reverseGeocodingParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): H$service.service$JsonpRequestHandle;

/**
 * This method sends a landmark search request to Geocoder REST API and calls the onResult callback function once the service response was received - providing a H.service.ServiceResult
 * object - or the onError callback if a communication error occured.
 * @param {H$service.service$ServiceParameters} searchParams - the service parameters to be sent with the reverse geocoding request
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResult - this function will be called once the Geocoder REST API provides a response to the request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError - this function will be called if a communication error occurs during the JSON-P request
 * @returns {H$service.service$JsonpRequestHandle}
 */
search(
searchParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): H$service.service$JsonpRequestHandle
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface GeocodingService$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.GeocodingService$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.GeocodingService$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.GeocodingService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.GeocodingService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.GeocodingService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.GeocodingService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.GeocodingService$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.GeocodingService$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.GeocodingService$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.GeocodingService$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.GeocodingService$Options | boolean),
panorama?: (H$ui.ui$Pano.GeocodingService$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.GeocodingService$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * An interface represents an object, that can be configured credentials, settings etc. by H.service.Platform
 */
declare interface service$IConfigurable {

/**
 * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
 * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
 * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
 * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
 * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in
the opt_baseUrl to use HTTPS.
 * @returns {H$service.service$IConfigurable}
 */
configure(
appId: string,
appCode: string,
useHTTPS: boolean,
useCIT: boolean,
opt_baseUrl?: H$service.service$Url): H$service.service$IConfigurable
} 


/**
 * @property id {number} - the ID associated internally with this request
 * @property cancel {function()} - this function cancels the request and invokes the errback function
 */
declare interface service$JsonpRequestHandle {
id: number,
cancel(): void
} 


/**
 * This class encapsulates a map tile end point of the HERE Map Tile API.
 */
declare class service$MapTileService mixins undefined.util$EventTarget, undefined.service$IConfigurable {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(opt_options?: H$service.service$MapTileService.GeocodingService$Options): this;

/**
 * This method returns the map tile type provided by this service.
 * @returns {string} - the map tile type
 */
getType(): string;

/**
 * This method returns the map tile service's newest version hash.
 * @returns {string} - meta information for this map tile service
 */
getVersion(): string;

/**
 * This method returns the map tile service's meta information. The method will return an object once the map tile service's data has been fetched.
 * @returns {(H$service.service$MapTileService.Service$Info | void)} - meta information for this map tile service
 */
getInfo(): H$service.service$MapTileService.Service$Info | void;

/**
 * This method creates a tile provider which uses the specified map tiles. This provider can be used as a data source for an ImageTileLayer.
 * @param {string} tileType - the tile type
 * @param {string} scheme - the tile scheme
 * @param {number} tileSize - the tile size
 * @param {string} format - the tile image format
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_additionalParameters - a hash of additional parameters to be
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - additional set of options for the provider
 * @returns {H$map.provider.provider$ImageTileProvider} - the image tile provider
 */
createTileProvider(
tileType: string,
scheme: string,
tileSize: number,
format: string,
opt_additionalParameters?: H$service.service$ServiceParameters,
opt_options?: H$service.service$TileProviderOptions): H$map.provider.provider$ImageTileProvider;

/**
 * This method creates a tile layer. This layer can be used as a layer on a map's data model.
 * @param {string} tileType - the tile type
 * @param {string} scheme - the tile scheme
 * @param {number} tileSize - the tile size
 * @param {string} format - the tile image format
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_additionalParameters - Additional parameters for the map tile service
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_opacity - The opacity of this layer
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_dark - Indicates whether the content of this layer is mainly dark, default is false See also H.Map.Options#autoColor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - additional set of options for the provider
 * @returns {H$map.layer.layer$TileLayer} - the tile layer
 */
createTileLayer(
tileType: string,
scheme: string,
tileSize: number,
format: string,
opt_additionalParameters?: H$service.service$ServiceParameters,
opt_opacity?: number,
opt_dark?: boolean,
opt_options?: H$service.service$TileProviderOptions): H$map.layer.layer$TileLayer;

/**
 * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
 * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
 * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
 * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
 * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in
the opt_baseUrl to use HTTPS.
 * @returns {H$service.service$IConfigurable}
 */
configure(
appId: string,
appCode: string,
useHTTPS: boolean,
useCIT: boolean,
opt_baseUrl?: H$service.service$Url): H$service.service$IConfigurable
}


/**
 * @property maps {Object<string, Object>} -
 * @property schemes {Object<string, Object>} -
 * @property tiletypes {Object<string, Object>} -
 * @property formats {Object<string, Object>} -
 * @property resolutions {Object<string, Object>} -
 * @property languages {Object<string, Object>} -
 */
declare interface MapTileService$Info {
maps: {
[key: string]: any
},
schemes: {
[key: string]: any
},
tiletypes: {
[key: string]: any
},
formats: {
[key: string]: any
},
resolutions: {
[key: string]: any
},
languages: {
[key: string]: any
},
maps: {
[key: string]: any
},
schemes: {
[key: string]: any
},
tiletypes: {
[key: string]: any
},
formats: {
[key: string]: any
},
resolutions: {
[key: string]: any
},
languages: {
[key: string]: any
}
} 


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface MapTileService$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.MapTileService$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.MapTileService$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.MapTileService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.MapTileService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.MapTileService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.MapTileService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.MapTileService$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.MapTileService$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.MapTileService$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.MapTileService$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.MapTileService$Options | boolean),
panorama?: (H$ui.ui$Pano.MapTileService$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.MapTileService$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * A map type is an object holding tile layers corresponding to a map type (e.g. 'normal', 'satellite' or 'terrain'). A map type contains at least a map property which defines the basic
 * map layer for a given map type. In addition it can hold other map layers with the given style, e.g. base, xbase, traffic etc.
 * @property map {H.map.layer.TileLayer} - the basic map tiles with all features and labels
 * @property mapnight {H.map.layer.TileLayer} - the basic map tiles with all features and labels (night mode)
 * @property xbase {H.map.layer.TileLayer=} - map tiles without features and labels
 * @property xbasenight {H.map.layer.TileLayer=} - map tiles without features and labels (night mode)
 * @property base {H.map.layer.TileLayer=} - map tiles without labels
 * @property basenight {H.map.layer.TileLayer=} - map tiles without labels (night mode)
 * @property traffic {H.map.layer.TileLayer=} - map tiles with traffic flow highlighting
 * @property trafficnight {H.map.layer.TileLayer=} - map tiles with traffic flow highlighting (night mode)
 * @property transit {H.map.layer.TileLayer=} - map tiles with public transit lines highlighted
 * @property panorama {H.map.layer.TileLayer=} - map tiles highlighting areas with HERE StreetLevel coverage
 * @property panoramanight {H.map.layer.TileLayer=} - map tiles highlighting areas with HERE StreetLevel coverage (night mode)
 * @property labels {H.map.layer.TileLayer=} - transparent map tiles with labels only
 */
declare interface service$MapType {
map: H$map.layer.layer$TileLayer,
mapnight: H$map.layer.layer$TileLayer,
xbase?: H$map.layer.layer$TileLayer,
xbasenight?: H$map.layer.layer$TileLayer,
base?: H$map.layer.layer$TileLayer,
basenight?: H$map.layer.layer$TileLayer,
traffic?: H$map.layer.layer$TileLayer,
trafficnight?: H$map.layer.layer$TileLayer,
transit?: H$map.layer.layer$TileLayer,
panorama?: H$map.layer.layer$TileLayer,
panoramanight?: H$map.layer.layer$TileLayer,
labels?: H$map.layer.layer$TileLayer
} 


/**
 * Places service implements a low level places RestApi access. Please refer to Restful API documentation for providing parameters and handling response objects.
 */
declare class service$PlacesService mixins undefined.service$AbstractRestService {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(opt_options?: H$service.service$PlacesService.MapTileService$Options): this;

/**
 * This is generic method to query places RestAPI.
 * @param {H$service.service$PlacesService.PlacesService$EntryPoint} entryPoint - can be one of available entry points H.service.PlacesService.EntryPoint i.e value of H.service.PlacesService.EntryPoint.SEARCH
 * @param {map$Object} entryPointParams - parameter map key value pairs will be transformed into the url key=value parametes. For entry point parameters description please refer to places
restful api documentation documentation for available parameters for chose entry point
 * @param {Function} onResult - callback which is called when result is returned
 * @param {Function} onError - callback which is called when error occured (i.e request timeout)
 * @returns {H$service.service$JsonpRequestHandle} - jsonp request handle
 */
request(
entryPoint: H$service.service$PlacesService.PlacesService$EntryPoint,
entryPointParams: {},
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): H$service.service$JsonpRequestHandle;

/**
 * Function triggers places api 'search' entry point. Please refer to documentation for parameter specification and response handling.
 * @param {H$service.service$ServiceParameters} searchParams - places api search entry point parameters please refer to places api documentation
 * @param {Function} onResult
 * @param {Function} onError
 * @returns {H$service.service$JsonpRequestHandle} - jsonp request handle
 */
search(
searchParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): H$service.service$JsonpRequestHandle;

/**
 * Function triggers places api 'suggestions' entry point. Please refer to documentation for parameter specification and response handling.
 * @param {H$service.service$ServiceParameters} suggestParams - places api suggest entry point parameters please refer to places api documentation
 * @param {Function} onResult
 * @param {Function} onError
 * @returns {H$service.service$JsonpRequestHandle} - jsonp request handle
 */
suggest(
suggestParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): H$service.service$JsonpRequestHandle;

/**
 * Function triggers places api 'explore' entry point. Please refer to documentation for parameter specification and response handling.
 * @param {H$service.service$ServiceParameters} exploreParams - places api explore entry point parameters please refer to places api documentation
 * @param {Function} onResult
 * @param {Function} onError
 * @returns {H$service.service$JsonpRequestHandle} - jsonp request handle
 */
explore(
exploreParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): H$service.service$JsonpRequestHandle;

/**
 * Function triggers places api 'around' entry point. Please refer to documentation for parameter specification and response handling.
 * @param {H$service.service$ServiceParameters} aroundParams - places api around entry point parameters please refer to places api documentation
 * @param {Function} onResult
 * @param {Function} onError
 * @returns {H$service.service$JsonpRequestHandle} - jsonp request handle
 */
around(
aroundParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): H$service.service$JsonpRequestHandle;

/**
 * Function triggers places api 'here' entry point. Please refer to documentation for parameter specification and response handling.
 * @param {H$service.service$ServiceParameters} hereParams - places api here entry point parameters please refer to places api documentation
 * @param {Function} onResult
 * @param {Function} onError
 * @returns {H$service.service$JsonpRequestHandle} - jsonp request handle
 */
here(
hereParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): H$service.service$JsonpRequestHandle;

/**
 * Function triggers places api 'categories' entry point. Please refer to documentation for parameter specification and response handling.
 * @param {H$service.service$ServiceParameters} categoriesParams - places api here entry point parameters please refer to places api documentation
 * @param {Function} onResult
 * @param {Function} onError
 * @returns {H$service.service$JsonpRequestHandle} - jsonp request handle
 */
categories(
categoriesParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): H$service.service$JsonpRequestHandle;

/**
 * This method should be used to follow hyperlinks available in results returned by dicovery queries.
 * @param {string} hyperlink
 * @param {Function} onResult
 * @param {Function} onError
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_additionalParameters - additional parameters to send with request
 * @returns {H$service.service$JsonpRequestHandle} - jsonp resquest handle
 */
follow(
hyperlink: string,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void,
opt_additionalParameters?: {}): H$service.service$JsonpRequestHandle
}


/**
 * List of available entry points
 */
declare  class PlacesService$EntryPoint {
  constructor(...args: empty): mixed;
static +SEARCH: Class<PlacesService$EntryPoint__SEARCH> & PlacesService$EntryPoint__SEARCH & 0;// 0
static +SUGGEST: Class<PlacesService$EntryPoint__SUGGEST> & PlacesService$EntryPoint__SUGGEST & 1;// 1
static +EXPLORE: Class<PlacesService$EntryPoint__EXPLORE> & PlacesService$EntryPoint__EXPLORE & 2;// 2
static +AROUND: Class<PlacesService$EntryPoint__AROUND> & PlacesService$EntryPoint__AROUND & 3;// 3
static +HERE: Class<PlacesService$EntryPoint__HERE> & PlacesService$EntryPoint__HERE & 4;// 4
static +CATEGORIES: Class<PlacesService$EntryPoint__CATEGORIES> & PlacesService$EntryPoint__CATEGORIES & 5;// 5

}

declare class PlacesService$EntryPoint__SEARCH mixins PlacesService$EntryPoint {}
declare class PlacesService$EntryPoint__SUGGEST mixins PlacesService$EntryPoint {}
declare class PlacesService$EntryPoint__EXPLORE mixins PlacesService$EntryPoint {}
declare class PlacesService$EntryPoint__AROUND mixins PlacesService$EntryPoint {}
declare class PlacesService$EntryPoint__HERE mixins PlacesService$EntryPoint {}
declare class PlacesService$EntryPoint__CATEGORIES mixins PlacesService$EntryPoint {}



/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface PlacesService$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.PlacesService$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.PlacesService$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.PlacesService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.PlacesService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.PlacesService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.PlacesService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.PlacesService$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.PlacesService$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.PlacesService$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.PlacesService$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.PlacesService$Options | boolean),
panorama?: (H$ui.ui$Pano.PlacesService$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.PlacesService$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * The Platform class represents central class from which all other service stubs are created. It also contains the shared settings to be passed to the individual service stubs, for example
 * the root URL of the platform, application credentials, etc.
 */
declare class service$Platform  {

/**
 * Constructor
 * @param {H$service.service$Platform.PlacesService$Options} options
 */
constructor(options: H$service.service$Platform.PlacesService$Options): this;

/**
 * Method attempts to configure object that implements H.service.IConfigurable
 * @param {H$service.service$IConfigurable} configurable
 * @returns {H$service.service$IConfigurable}
 */
configure(configurable: H$service.service$IConfigurable): H$service.service$IConfigurable;

/**
 * This method enables or disables HTTPS communication with the platform
 * @param {boolean} useHTTPS - a boolean value indicating whether to communicate with the platform via HTTPS
 */
setUseHTTPS(useHTTPS: boolean): void;

/**
 * This method configures whether to use the "customer integration testing" instance of the platform.
 * @param {boolean} useCIT - a boolean value indicating whether the CIT platform instance is to be used
 */
setUseCIT(useCIT: boolean): void;

/**
 * This method modifies the base URL to be used when creating service stubs.
 * @param {H$service.service$Url} baseUrl - the new base URL to use
 */
setBaseUrl(baseUrl: H$service.service$Url): void;

/**
 * This method returns the currently used base URL.
 * @returns {H$service.service$Url}
 */
getBaseUrl(): H$service.service$Url;

/**
 * This method returns an instance of H.service.TrafficIncidentsService to query the Traffic API Traffic Incident Data
 * @returns {H$service.service$TrafficIncidentsService} - a new places service instance
 */
getTrafficIncidentsService(): H$service.service$TrafficIncidentsService;

/**
 * This method returns an instance of H.service.MapTileService to query the Map Tile API.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 * @returns {H$service.service$MapTileService}
 */
getMapTileService(
opt_options?: H$service.service$MapTileService.PlacesService$Options): H$service.service$MapTileService;

/**
 * This method returns an instance of H.service.venues.Service to query the Venue Maps API
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_params - additional service parameters
 * @returns {H$service.venues.venues$Service}
 */
getVenueService(
opt_params?: H$service.venues.venues$Service.PlacesService$Options): H$service.venues.venues$Service;

/**
 * This method returns an instance of H.service.metaInfo.Service to query the Map Tile API Metainfo Tiles
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_params - additional service parameters
 * @returns {H$service.metaInfo.venues$Service}
 */
getMetaInfoService(
opt_params?: H$service.metaInfo.venues$Service.PlacesService$Options): H$service.metaInfo.venues$Service;

/**
 * This method creates a pre-configured set of HERE tile layers for convenient use with the map.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_tileSize - When a number – optional tile size to be queried from the HERE Map Tile API, default is 256.
If this parameter is a number, it indicates the tile size to be queried from the HERE Map Tile API (the default value is 256); if this parameter is an object, it represents
configuration options for the layer and all the remaining parameters (below) should be omitted
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_ppi - optional 'ppi' parameter to use when querying tiles, default is not specified
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_lang - optional primary language parameter, default is not specified
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_secondaryLang - optional secondary language parameter, default is not specified
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_style - optional 'style' parameter to use when querying map tiles, default is not specified
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_pois - indicates if pois are displayed on the map. Pass true to indicate that all pois should be visible. Alternatively you can specify mask for the
POI Categories as described at the Map Tile API documentation POI Categories chapter.
 * @returns {H$service.service$DefaultLayers} - a set of tile layers ready to use
 */
createDefaultLayers(
opt_tileSize?: (H$service.service$Platform.Platform$DefaultLayersOptions | number),
opt_ppi?: number,
opt_lang?: string,
opt_secondaryLang?: string,
opt_style?: string,
opt_pois?: (string | boolean)): H$service.service$DefaultLayers;

/**
 * This method returns an instance of H.service.RoutingService to query the Routing API.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 * @returns {H$service.service$RoutingService}
 */
getRoutingService(
opt_options?: H$service.service$RoutingService.PlacesService$Options): H$service.service$RoutingService;

/**
 * This method returns an instance of H.service.GeocodingService to query the Geocoder API
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - an optional set of options for the new geocoding service to connect to
 * @returns {H$service.service$GeocodingService} - a new geocoding service instance
 */
getGeocodingService(
opt_options?: H$service.service$GeocodingService.PlacesService$Options): H$service.service$GeocodingService;

/**
 * This method returns an instance of H.service.PlacesService to query the Places API.
 * @returns {H$service.service$PlacesService} - a new places service instance
 */
getPlacesService(): H$service.service$PlacesService;

/**
 * This method returns an instance of H.service.EnterpriseRoutingService to query the Enterprise Routing API.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 * @returns {H$service.service$EnterpriseRoutingService}
 */
getEnterpriseRoutingService(
opt_options?: H$service.service$EnterpriseRoutingService.PlacesService$Options): H$service.service$EnterpriseRoutingService
}


/**
 * Options used to create default layers
 * @property tileSize {number=} - tile size to be queried from the HERE Map Tile API, default is 256
 * @property ppi {number=} - 'ppi' parameter to use when querying tiles, default is not specified
 * @property lg {string=} - optional primary language parameter, default is not specified
 * @property lg2 {string=} - optional secondary language parameter, default is not specified
 * @property style {string=} - optional 'style' parameter to use when querying map tiles, default is not specified
 * @property pois {boolean=} - indicates if pois are displayed on the map
 * @property crossOrigin {(string | boolean=)} - indicates if CORS headers should be used for default layers, if false is specified, CORS headers are not set, defaults to 'anonymous'.
Be aware that storing of content is not possible if crossOrigin is not set to true (see H.Map#storeContent).
 */
declare interface Platform$DefaultLayersOptions {
tileSize?: number,
ppi?: number,
lg?: string,
lg2?: string,
style?: string,
pois?: boolean,
crossOrigin?: (string | boolean)
} 


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Platform$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Platform$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Platform$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Platform$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Platform$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Platform$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Platform$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Platform$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Platform$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Platform$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Platform$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Platform$Options | boolean),
panorama?: (H$ui.ui$Pano.Platform$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Platform$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * pre-configured set of HERE tile layers for convenient use with the map.
 */
declare interface Platform$MapTypes {
normal?: H$service.service$MapType,
satellite?: H$service.service$MapType,
terrain?: H$service.service$MapType,
[key: string]: H$service.service$MapType | void
} 


/**
 * This class encapsulates the Routing REST API as a service stub. An instance of this class can be retrieved by calling the factory method on a platform instance.
 * H.service.Platform#getRoutingService.
 */
declare class service$RoutingService mixins undefined.service$AbstractRestService {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(opt_options?: H$service.service$RoutingService.Platform$Options): this;

/**
 * This method sends a "calculateroute" request to Routing REST API and calls the onResult callback function once the service response was received - providing a
 * H.service.ServiceResult object - or the onError callback if a communication error occured.
 * @param {H$service.service$ServiceParameters} calculateRouteParams - the service parameters to be sent with the routing request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResult - this function will be called once the Routing REST API provides a response to the request.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError - this function will be called if a communication error occurs during the JSON-P request
 */
calculateRoute(
calculateRouteParams: H$service.service$ServiceParameters,
onResult: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): void
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface RoutingService$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.RoutingService$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.RoutingService$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.RoutingService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.RoutingService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.RoutingService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.RoutingService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.RoutingService$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.RoutingService$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.RoutingService$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.RoutingService$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.RoutingService$Options | boolean),
panorama?: (H$ui.ui$Pano.RoutingService$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.RoutingService$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This type encapsulates URL parameters to be sent to a HERE platform service.
 */
declare interface service$ServiceParameters {
[key: string]: string
} 


/**
 * This type encapsulates a response object provider by a HERE platform service.
 */
declare interface service$ServiceResult {
[key: string]: any,
response?: {
language?: string,
route?: Array<{
leg: Array<{
maneuver: Array<{
id: string,
instruction: string,
length: number,
note: string[],
position: {
latitude: number,
longitude: number
},
shape: string[],
travelTime: number,
_type: string
}>
}>,
mode: {
feature: any[],
trafficMode: string,
transportModes: string[],
type: string
},
shape: string[],
summary: {
baseTime: number,
distance: number,
flags: string[],
text: string,
trafficTime: number,
travelTime: number
},
waypoint: Array<{
label: string,
linkId: string,
mappedPosition: {
latitude: number,
longitude: number
},
mappedRoadName: string,
originalPosition: {
latitude: number,
longitude: number
},
shapeIndex: number,
sideOfStreet: string,
spot: number,
type: string
}>
}>,
metaInfo: {}
},
results?: {
items?: any[],
next?: string
},
search?: {
context: {
href: string,
location: {
address: {
city: string,
country: string,
countryCode: string,
county: string,
district: string,
house: string,
postalCode: string,
stateCode: string,
street: string,
text: string
},
position: number[]
},
type: string
}
},
ITileLayer$Response?: {
MetaInfo: {
Timestamp: string
},
View: Array<{
Result: Array<{
Location: {
Address: {
AdditionalData: Array<{
key: string,
value: string
}>,
City: string,
Country: string,
County: string,
District: string,
HouseNumber: string,
Spatial$Label: string,
PostalCode: string,
Request$State: string,
Street: string
},
DisplayPosition: {
geo$Latitude: number,
geo$Longitude: number
},
LocationId: string,
LocationType: string,
MapView: {
BottomRight: {
geo$Latitude: number,
geo$Longitude: number
},
TopLeft: {
geo$Latitude: number,
geo$Longitude: number
}
},
NavigationPosition: Array<{
geo$Latitude: number,
geo$Longitude: number
}>
},
MatchLevel: string,
MatchQuality: {
City: number,
HouseNumber: number,
Street: number[]
},
MatchType: string,
Relevance: number
}>
}>,
isolines: any[]
}
} 


/**
 * Options which are used to initialize the tile provider.
 * @property crossOrigin {boolean=} - The string to be set for the crossOrigin attribute for loaded images
 */
declare interface service$TileProviderOptions {
crossOrigin?: boolean
} 


/**
 * TrafficIncindentsService provides functionality to the low level traffic incidents api Traffic API documentation where it is possible to retrieve traffic incident information on a
 * tile basis
 */
declare class service$TrafficIncidentsService mixins undefined.service$AbstractRestService {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(opt_options?: H$service.service$TrafficIncidentsService.RoutingService$Options): this;

/**
 * This method requests traffic incidents based on the service parameters provided.
 * @param {H$service.service$ServiceParameters} serviceParams
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResponse
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError
 * @returns {H$service.service$JsonpRequestHandle}
 */
requestIncidents(
serviceParams: H$service.service$ServiceParameters,
onResponse: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void): H$service.service$JsonpRequestHandle;

/**
 * This method requests traffic incident information by tile coordinates
 * @param {number} x - tile column number
 * @param {number} y - tile row number
 * @param {number} z - zoom level
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResponse - callback to handle service resposne
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError - callback to habdle communication error
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_serviceParams - optional service parameters to be added to the request
 * @returns {H$service.service$JsonpRequestHandle}
 */
requestIncidentsByTile(
x: number,
y: number,
z: number,
onResponse: (result: H$service.service$ServiceResult) => void,
onError: (error: Error) => void,
opt_serviceParams?: H$service.service$ServiceParameters): H$service.service$JsonpRequestHandle
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface TrafficIncidentsService$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.TrafficIncidentsService$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.TrafficIncidentsService$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.TrafficIncidentsService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.TrafficIncidentsService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.TrafficIncidentsService$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.TrafficIncidentsService$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.TrafficIncidentsService$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.TrafficIncidentsService$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.TrafficIncidentsService$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.TrafficIncidentsService$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.TrafficIncidentsService$Options | boolean),
panorama?: (H$ui.ui$Pano.TrafficIncidentsService$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.TrafficIncidentsService$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This class represents a URL giving access to the individual parts that make up a URL,such as the scheme, host/domain, path, etc. Use the static parse method to populate a new URL object
 * from a URL string. Be aware that URLs with user and password like "ftp://user:password@foo.bar/" are not supported!
 */
declare class service$Url  {

/**
 * Constructor
 * @param {string} scheme - the URL scheme (e.g. "http" or "https" or "mailto")
 * @param {string} host - the host (or domain) part of the URL
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_path - the path following the host pointing to a resource
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_params - the query string parameters of this URL
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_port - The port of the host on which the host listens. If a string is passed it must be convertible to an integer.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_anchor - an optional anchor part of the URL (usually preceded by '#');
 */
constructor(scheme: string, host: string, opt_path?: string, opt_params?: {}, opt_port?: number, opt_anchor?: string): this;

/**
 * This function parses a URL string and returns a H.service.Url object. The URL string must contain at least a scheme and a host.
 * @param {string} url - The URL string to parse.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_baseURL - The base URL to use to resolve relative URLs. If ommited the base URL of the document which loaded the API is taken.
 * @returns {H$service.service$Url} - the parsed URL object
 */
static parse(url: string, opt_baseURL?: string): H$service.service$Url;

/**
 * Clones this URL object. Optionally, mutations can be passed to this function to modify properties of the cloned object. Note that URL parameters are not replaced but merged with the
 * parameters of this instance.
 * @returns {H$service.service$Url} - the clone of the URL object
 */
clone(): H$service.service$Url;

/**
 * This function sets the scheme of this URL object.
 * @param {string} scheme - the new scheme
 * @returns {H$service.service$Url} - this URL object
 */
setScheme(scheme: string): H$service.service$Url;

/**
 * This function returns the scheme of this Url object.
 * @returns {string} - the scheme (for example 'http')
 */
getScheme(): string;

/**
 * This function sets the host of this URL object.
 * @param {string} host - the new host
 * @returns {H$service.service$Url} - this URL object
 */
setHost(host: string): H$service.service$Url;

/**
 * This function returns the host name of this Url object.
 * @returns {string} - the host (for example 'api.here.com')
 */
getHost(): string;

/**
 * This function sets the path of this URL object.
 * @param {(string | void)} path - the new path or a boolean to clear the path
 * @returns {H$service.service$Url} - this URL object
 */
setPath(path: string | boolean): H$service.service$Url;

/**
 * This function returns the path part of this Url object.
 * @returns {(string | void)} - the path (for example 'myresources/resource.html')
 */
getPath(): string | void;

/**
 * This function sets the specified parameters for this URL object. Keys in this object, which are associated with undefined values will be treated as query string parameters
 * with no value.
 * @param {(map$Object | void)} params - a hash of query string parameters specifying the parameters to be set.or a boolean to clear the parameters.
 * @returns {H$service.service$Url} - this URL object
 */
setQuery(params?: {} | boolean): H$service.service$Url;

/**
 * This function returns a boolean value indicating whether there are any query string parameter associated with this URL.
 * @returns {boolean} - true if there are parameters, false if none are present
 */
hasQuery(): boolean;

/**
 * This function returns the query object of this Url object.
 * @returns {map$Object} - the query object
 */
getQuery(): {};

/**
 * This function sets the anchor of this URL object.
 * @param {(string | boolean | void)} anchor - the new anchor or undefined to clear the anchor
 * @returns {H$service.service$Url} - this URL object
 */
setAnchor(anchor?: string | boolean): H$service.service$Url;

/**
 * This function returns the anchor of this Url object.
 * @returns {(string | void)} - the anchor
 */
getAnchor(): string | void;

/**
 * This function merges the provided parameters into this URL's existing parameters. Key-value pairs which are defined in the argument and this URL's parameters will be overwritten.
 * Key-value pairs which are defined in the argument and are not defined in this URL's parameters will be added. Prototype properties and function properties will not be merged.
 * @param {map$Object} other - the parmeters to be merged into this URL's query string parameters
 * @returns {H$service.service$Url} - this URL object
 */
mergeQuery(other: {}): H$service.service$Url;

/**
 * This function adds a sub-domain to the host of this URL object.
 * @param {string} subDomain - the sub domain (non-empty string) to be added
 * @returns {H$service.service$Url} - this URL object
 */
addSubDomain(subDomain: string): H$service.service$Url;

/**
 * This function adds a sub-path to this URL's path
 * @param {string} subPath - the path to be added
 * @returns {H$service.service$Url} - this URL object
 */
addSubPath(subPath: string): H$service.service$Url;

/**
 * This function formats this URL object to a full URL string.
 * @returns {string} - the URL's string representation
 */
toString(): string
}


/**
 * This class encapsulates a Metainfo Tile end point of the HERE Map Tile API.
 */
declare class metaInfo$Service mixins undefined.util$EventTarget, undefined.service$IConfigurable {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - additional service parameters
 */
constructor(opt_options?: H$service.metaInfo.metaInfo$Service.TrafficIncidentsService$Options): this;

/**
 * This method returns the meta info tile service's newest version hash.
 * @returns {string} - meta information for this map tile service
 */
getVersion(): string;

/**
 * This method returns the meta info tile service's meta information. The method will return an object once the map tile service's data has been fetched.
 * @returns {(H$service.metaInfo.metaInfo$Service.MapTileService$Info | void)} - meta information for this meta info tile service
 */
getInfo(): H$service.metaInfo.metaInfo$Service.MapTileService$Info | void;

/**
 * This method creates a tile provider which uses the meta info tile backend. This provider can be used as a data source for an TileLayer.
 * @param {number} tileSize - The tile size
 * @param {number} pixelRatio - The tile's pixel ratio, should be aligned with base map tile
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_categoryFilter - A list of meta-info category names which should be suppressed. See Metainfo Tile for valid category names.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_additionalParameters - Additional parameters for the meta info service
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_tileType - the tile type (default is 'maptile')
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scheme - the scheme for which the meta info tiles a requested (default is 'normal.day')
 * @returns {H$map.provider.provider$TileProvider} - the tile provider
 */
createTileProvider(
tileSize: number,
pixelRatio: number,
opt_categoryFilter?: string[],
opt_additionalParameters?: H$service.service$ServiceParameters,
opt_tileType?: string,
opt_scheme?: string): H$map.provider.provider$TileProvider;

/**
 * This method creates a tile layer. This layer can be used as a layer on a map's data model.
 * @param {number} tileSize - The tile size
 * @param {number} pixelRatio - The tile's pixel ratio, should be aligned with base map tile
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_categoryFilter - A list of meta-info category names which should be suppressed. See Metainfo Tile for valid category names.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_additionalParameters - Additional parameters for the meta info service
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_tileType - the tile type (default is 'maptile')
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scheme - the scheme for which the meta info tiles a requested (default is 'normal.day')
 * @returns {H$map.layer.layer$TileLayer} - the tile layer
 */
createTileLayer(
tileSize: number,
pixelRatio: number,
opt_categoryFilter?: string[],
opt_additionalParameters?: H$service.service$ServiceParameters,
opt_tileType?: string,
opt_scheme?: string): H$map.layer.layer$TileLayer;

/**
 * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
 * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
 * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
 * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
 * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified
in the opt_baseUrl to use HTTPS.
 * @returns {H$service.service$IConfigurable}
 */
configure(
appId: string,
appCode: string,
useHTTPS: boolean,
useCIT: boolean,
opt_baseUrl?: H$service.service$Url): H$service.service$IConfigurable
}


/**
 * @property maps {Object<string, Object>} -
 * @property schemes {Object<string, Object>} -
 * @property tiletypes {Object<string, Object>} -
 * @property formats {Object<string, Object>} -
 * @property resolutions {Object<string, Object>} -
 * @property languages {Object<string, Object>} -
 */
declare interface Service$Info {
maps: {
[key: string]: any
},
schemes: {
[key: string]: any
},
tiletypes: {
[key: string]: any
},
formats: {
[key: string]: any
},
resolutions: {
[key: string]: any
},
languages: {
[key: string]: any
},
maps: {
[key: string]: any
},
schemes: {
[key: string]: any
},
tiletypes: {
[key: string]: any
},
formats: {
[key: string]: any
},
resolutions: {
[key: string]: any
},
languages: {
[key: string]: any
}
} 


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Service$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Service$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Service$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Service$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Service$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Service$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Service$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Service$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Service$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Service$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Service$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Service$Options | boolean),
panorama?: (H$ui.ui$Pano.Service$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Service$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This class utilizes Metainfo Tiles functionality provided by the Map Tile API to load meta information about map objects (buildings, labels, public transport etc.).
 */
declare class metaInfo$TileProvider mixins undefined.provider$RemoteTileProvider {

/**
 * Constructor
 * @param {(H$service.metaInfo.metaInfo$Service | H$service.service$MapTileService)} service - the tile service which holds information from about the source of the tiles
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_params - an additional set of URL parameters
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - additional parameters
 */
constructor(service: (H$service.metaInfo.metaInfo$Service | H$service.service$MapTileService), opt_params?: H$service.service$ServiceParameters, opt_options?: H$service.metaInfo.metaInfo$TileProvider.Service$Options): this
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface TileProvider$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.TileProvider$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.TileProvider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.TileProvider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.TileProvider$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.TileProvider$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.TileProvider$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.TileProvider$Options | boolean),
panorama?: (H$ui.ui$Pano.TileProvider$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.TileProvider$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * The class represents the building in the venue hiearachy (see H.service.venues.Venue) and holds floors that belong to the building.
 */
declare class venues$Building mixins undefined.map$Group {

/**
 * Constructor
 * @param {H$map.provider.provider$ObjectProvider} provider - The object provider of this venue building
 * @param {string} uid - The unique identifier of this building
 * @param {number} minLevel - The minimum floor level of this building
 * @param {number} maxLevel - The maximum floor level of this building
 */
constructor(provider: H$map.provider.provider$ObjectProvider, uid: string, minLevel: number, maxLevel: number): this;

/**
 * Method returns the parent object - venue (see H.service.venues.Venue) to which the building belongs to.
 * @returns {H$service.venues.venues$Venue}
 */
getVenue(): H$service.venues.venues$Venue;

/**
 * Method returns the minimum floor level of this building.
 * @returns {number}
 */
getMinLevel(): number;

/**
 * Method returns the maximum floor level of this building
 * @returns {number}
 */
getMaxLevel(): number;

/**
 * Method returns the floor (see H.service.venues.Floor) if one was already loaded. This method doesn't make attempt to fetch the floor data.
 * @param {number} level - floor level within minimum and maximum level boundaries for the building
 * @returns {(H$service.venues.venues$Floor | void)} - The floor object or undefined if floor was not loaded
 */
getFloor(level: number): H$service.venues.venues$Floor | void
}


/**
 * The class represents the floor object in the venue hierarchy (see H.service.venues.Venue). The class holds information about floor geometry and spaces (see H.service.venues.Space)
 * that belong to this floor.
 */
declare class venues$Floor mixins undefined.map$Group {

/**
 * Constructor
 * @param {H$map.provider.provider$ObjectProvider} provider - The object provider of this venue floor
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} data - The meta data of this floor
 * @param {number} level - The level of this floor
 */
constructor(provider: H$map.provider.provider$ObjectProvider, data: any, level: number): this;

/**
 * Method returns the level of the floor in the building.
 * @returns {number}
 */
getLevel(): number;

/**
 * Method returns map geometry that represents floor boundaries.
 * @returns {(H$service.venues.venues$Space | void)}
 */
getFloorSpace(): H$service.venues.venues$Space | void;

/**
 * Method returns the H.map.Group of all spaces that belong to the floor.
 * @returns {H$map.map$Group}
 */
getSpaces(): H$map.map$Group;

/**
 * Method returns parent object - building (see H.service.venues.Building) of the floor.
 * @returns {H$service.venues.venues$Building}
 */
getBuilding(): H$service.venues.venues$Building;

/**
 * Method returns raw data associated with the floor. For more details on data format see
 * http://developer.here.com/rest-apis/documentation/venue-maps/topics/resource-type-venue-interaction-tile-floor.html
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"} - the raw floor data object
 */
getData(): any;

/**
 * Method returns the space object with the given ID, that belongs to the floor.
 * @param {string} id - The ID of the space.
 * @returns {(H$service.venues.venues$Space | void)} - The requested space or undefined if space not found.
 */
getSpace(id: string): H$service.venues.venues$Space | void
}


/**
 * This class encapsulates methods to call Venue Maps API endpoints.
 */
declare class venues$Service mixins undefined.util$EventTarget, undefined.service$IConfigurable {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - additional service parameters
 */
constructor(opt_options?: H$service.venues.venues$Service.TileProvider$Options): this;

/**
 * This method sends a discovery request to the Venue Maps API and calls the onResult callback function once the service response was received - providing a H.service.ServiceResult
 * object, or the onError callback if a communication error occured.
 * @param {H$service.service$ServiceParameters} serviceParams - the service parameters to be sent with the discovery request
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onResult - this function will be called once the Venue Maps API provides a response to the request
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} onError - this function will be called if a communication error occurs during request and error type is passed as an argument
 */
discover(
serviceParams: H$service.service$ServiceParameters,
onResult: (res: H$service.service$ServiceResult) => void,
onError: (s: string) => void): void;

/**
 * This method creates a tile layer which can be added to the map in order to see the venues. It uses Interaction Tile endpoint of the Venue Maps API, more at
 * http://developer.here.com/rest-apis/documentation/venue-maps/topics/quick-start-get-interaction-tile.html.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - Tile provider options
 * @returns {H$map.layer.layer$TileLayer} - the tile layer
 */
createTileLayer(
opt_options?: H$service.venues.metaInfo$TileProvider.TileProvider$Options): H$map.layer.layer$TileLayer;

/**
 * Method returns current state of the service.
 * @returns {H$service.venues.venues$Service.Request$State} - State of the service
 */
getState(): H$service.venues.venues$Service.Request$State;

/**
 * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
 * @param {string} appId - The application ID to identify the client against the platform (mandatory to provide)
 * @param {string} appCode - The application code to identify the client against the platform (mandatory to provide)
 * @param {boolean} useHTTPS - Indicates whether secure communication should be used, default is false
 * @param {boolean} useCIT - Indicates whether the Customer Integration Testing should be used, default is false
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_baseUrl - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified
in the opt_baseUrl to use HTTPS.
 * @returns {H$service.service$IConfigurable}
 */
configure(
appId: string,
appCode: string,
useHTTPS: boolean,
useCIT: boolean,
opt_baseUrl?: H$service.service$Url): H$service.service$IConfigurable
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Service$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Service$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Service$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Service$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Service$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Service$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Service$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Service$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Service$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Service$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Service$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Service$Options | boolean),
panorama?: (H$ui.ui$Pano.Service$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Service$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * The state types of the H.service.venues.Service. Possible states are:
 */
declare  class Service$State {
  constructor(...args: empty): mixed;
static +ERROR: Class<Service$State__ERROR> & Service$State__ERROR & 0;// 0
static +INIT: Class<Service$State__INIT> & Service$State__INIT & 1;// 1
static +READY: Class<Service$State__READY> & Service$State__READY & 2;// 2

}

declare class Service$State__ERROR mixins Service$State {}
declare class Service$State__INIT mixins Service$State {}
declare class Service$State__READY mixins Service$State {}



/**
 * Represents a spatial object for this space. Each space object contains data associated with that space and can be retrieved by using H.service.venues.Space#getData method.
 */
declare class venues$Space  {

/**
 * Constructor
 * @param {H$map.provider.provider$ObjectProvider} provider - The provider of this object.
 * @param {string} uid - The unique identifier of this space
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} data - The meta data of this space
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_isFloorSpace - Indicates whether this space represents a floor itself, defaults to false
 */
constructor(provider: H$map.provider.provider$ObjectProvider, uid: string, data?: any, opt_isFloorSpace?: boolean): this;

/**
 * The method indicates whether the spatial object represents the whole floor space or a space within a floor boundaries, that belongs to the floor.
 * @returns {boolean} - True if this spatial object represents the floor space.
 */
isFloorSpace(): boolean;

/**
 * This method sets custom style to use for rendering the labels. Should be called before the first render of the space, otherwise has no any effect. Note that due to the design
 * consistency currently it is not allowed to change the font family and the size of the labels.
 * @param {(H$map.map$SpatialStyle | H$map.map$SpatialStyle.Service$Options)} labelStyle - Custom label style
 */
initLabelStyle(
labelStyle: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Service$Options)): void;

/**
 * Method returns parent object - floor (see H.service.venues.Floor) of the space.
 * @returns {H$service.venues.venues$Floor}
 */
getFloor(): H$service.venues.venues$Floor;

/**
 * Method returns raw data associated with the space. For more details on data format see
 * http://developer.here.com/rest-apis/documentation/venue-maps/topics/resource-type-venue-interaction-tile-space.html
 * @returns {map$Object} - raw space data object
 */
getData(): {}
}


/**
 * This class represents a Venue Maps tile provider which requests venues tiles from a platform venue tile service.
 */
declare class venues$TileProvider mixins undefined.provider$RemoteTileProvider {

/**
 * Constructor
 * @param {H$service.venues.venues$Service} service
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(service: H$service.venues.venues$Service, opt_options?: H$service.venues.venues$TileProvider.Service$Options): this;

/**
 * Method specifies which floor level of the venues must be fetched by provider. Floor level is global to all venues and defaults to 0.
 * @param {number} level
 */
setCurrentLevel(level: number): void;

/**
 * Method returns the floor level that provider uses for tile fetching.
 * @returns {number} - current provider's floor level
 */
getCurrentLevel(): number
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface TileProvider$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.TileProvider$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.TileProvider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.TileProvider$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.TileProvider$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.TileProvider$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.TileProvider$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.TileProvider$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.TileProvider$Options | boolean),
panorama?: (H$ui.ui$Pano.TileProvider$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.TileProvider$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * The class represents the venue, it is a root for the venue object heirarchy. The venue inherits from H.map.Group and holds building objects (see H.service.venues.Building).
 * Building objects hold floor objects (see H.service.venues.Floor) and inherit from H.map.Group as well. Leaf objects are spaces (see H.service.venues.Space) that are spatial map objects
 * and reside inside floor containers.
 */
declare class venues$Venue mixins undefined.map$Group {

/**
 * Constructor
 * @param {H$map.provider.provider$ObjectProvider} provider - The object provider of this venue
 * @param {string} uid - The unique identifier of this venue
 */
constructor(provider: H$map.provider.provider$ObjectProvider, uid: string): this;

/**
 * Method returns the building object, that belongs to the venue, with the given ID . The method doesn't attempt to fetch building data.
 * @param {string} id - the ID of the building
 * @returns {(H$service.venues.venues$Building | void)} - The requested building or undefined if building wasn't loaded
 */
getBuilding(id: string): H$service.venues.venues$Building | void;

/**
 * Method returns map of all loaded buildings associated with the venue.
 * @returns {map$Object<"NO PRINT IMPLEMENTED: JSDocAllType", H$service.venues.venues$Building>}
 */
getBuildings(): any
}


/**
 * This class represents the base class for UI controls on the map.
 */
declare class ui$Control mixins undefined.base$Container {

/**
 * This abstract method can be overridden by deriving classes to be invoked when the UI object&#x27;s unit system changes.
 * @param {H$ui.ui$UnitSystem} unitSystem - the unit system the UI currently uses
 */
onUnitSystemChange(unitSystem: H$ui.ui$UnitSystem): void;

/**
 * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
 * @param {H$H$Map.Map$EngineType} engineType - the engine type the map currently uses
 */
onMapEngineTypeChange(engineType: H$H$Map.Map$EngineType): void;

/**
 * This method returns the map to which this control is attached.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"} - return the map
 */
getMap(): H$H$Map;

/**
 * This method returns the localization object which corresponds to the UI&#x27;s current locale.
 * @returns {H$ui.i18n.i18n$Localization}
 */
getLocalization(): H$ui.i18n.i18n$Localization;

/**
 * This method returns this control&#x27;s layout alignment.
 * @returns {H$ui.ui$LayoutAlignment} - the control&#x27;s current layout alignment
 */
getAlignment(): H$ui.ui$LayoutAlignment;

/**
 * This method sets the control&#x27;s layout alignments.
 * @param {H$ui.ui$LayoutAlignment} alignment - The new alignment of the control
 * @returns {H$ui.ui$Control} - returns this control instance
 */
setAlignment(alignment: H$ui.ui$LayoutAlignment): H$ui.ui$Control
}


/**
 * This class represents a distance measurement control which helps calculating distances between geographical locations indicated by the user clicks.
 */
declare class ui$DistanceMeasurement mixins undefined.ui$Control {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - optional parameters to be passed to this control
 */
constructor(opt_options?: H$ui.ui$DistanceMeasurement.TileProvider$Options): this
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface DistanceMeasurement$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.DistanceMeasurement$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.DistanceMeasurement$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.DistanceMeasurement$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.DistanceMeasurement$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.DistanceMeasurement$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.DistanceMeasurement$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.DistanceMeasurement$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.DistanceMeasurement$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.DistanceMeasurement$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.DistanceMeasurement$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.DistanceMeasurement$Options | boolean),
panorama?: (H$ui.ui$Pano.DistanceMeasurement$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.DistanceMeasurement$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This class represents an information bubble bound to a geo-position on the map.
 */
declare class ui$InfoBubble mixins base$base$Element {

/**
 * Constructor
 * @param {H$geo.math$IPoint} position - the geo-position to which this info bubble corresponds
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - optional parameters to be passed to the info bubble
 */
constructor(position: H$geo.math$IPoint, opt_options?: ui$InfoBubble.DistanceMeasurement$Options): this;

/**
 * This method sets the geo-position of this info bubble
 * @param {(H$geo.math$IPoint | H$geo.math$Point)} position - the new geo-position of this bubble
 */
setPosition(position: H$geo.math$IPoint | H$geo.math$Point): void;

/**
 * This method returns this info bubble's current state.
 * @returns {H$ui.ui$InfoBubble.Service$State} - this bubble's current state
 */
getState(): ui$InfoBubble.Service$State;

/**
 * This method sets the info bubble's state.
 * @param {H$ui.ui$InfoBubble.Service$State} state - the new state
 */
setState(state: ui$InfoBubble.Service$State): void;

/**
 * This method closes the info bubble (setting its state to CLOSED)
 */
close(): void;

/**
 * This method opens the info bubble (setting its state to OPEN)
 */
open(): void;

/**
 * This method returns the bubble's content element.
 * 
 * Note: Before adding an info bubble to a UI object the content element is null.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"} - the content element of this info bubble
 */
getContentElement(): HTMLElement;

/**
 * This methods sets the content of the info bubble. This can either be a string (applied as innerHTML) to the content element of this info bubble or a HTML node which is appended
 * to the content element.
 * @param {(string | Node)} content - the content for this bubble
 */
setContent(content: string | Node): void
}


/**
 * This enumeration holds the state an info bubble can have.
 */
declare  class InfoBubble$State {
  constructor(...args: empty): mixed;
static +OPEN: Class<InfoBubble$State__OPEN> & InfoBubble$State__OPEN & 0;// 0
static +CLOSED: Class<InfoBubble$State__CLOSED> & InfoBubble$State__CLOSED & 1;// 1

}

declare class InfoBubble$State__OPEN mixins InfoBubble$State {}
declare class InfoBubble$State__CLOSED mixins InfoBubble$State {}



/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface InfoBubble$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.InfoBubble$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.InfoBubble$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.InfoBubble$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.InfoBubble$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.InfoBubble$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.InfoBubble$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.InfoBubble$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.InfoBubble$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.InfoBubble$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.InfoBubble$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.InfoBubble$Options | boolean),
panorama?: (H$ui.ui$Pano.InfoBubble$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.InfoBubble$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This enumeration holds the possible layout alignments for the UI elements.
 */
declare  class ui$LayoutAlignment {
  constructor(...args: empty): mixed;
static +TOP_LEFT: Class<ui$LayoutAlignment__TOP_LEFT> & ui$LayoutAlignment__TOP_LEFT & 0;// 0
static +TOP_CENTER: Class<ui$LayoutAlignment__TOP_CENTER> & ui$LayoutAlignment__TOP_CENTER & 1;// 1
static +TOP_RIGHT: Class<ui$LayoutAlignment__TOP_RIGHT> & ui$LayoutAlignment__TOP_RIGHT & 2;// 2
static +LEFT_TOP: Class<ui$LayoutAlignment__LEFT_TOP> & ui$LayoutAlignment__LEFT_TOP & 3;// 3
static +LEFT_MIDDLE: Class<ui$LayoutAlignment__LEFT_MIDDLE> & ui$LayoutAlignment__LEFT_MIDDLE & 4;// 4
static +LEFT_BOTTOM: Class<ui$LayoutAlignment__LEFT_BOTTOM> & ui$LayoutAlignment__LEFT_BOTTOM & 5;// 5
static +RIGHT_TOP: Class<ui$LayoutAlignment__RIGHT_TOP> & ui$LayoutAlignment__RIGHT_TOP & 6;// 6
static +RIGHT_MIDDLE: Class<ui$LayoutAlignment__RIGHT_MIDDLE> & ui$LayoutAlignment__RIGHT_MIDDLE & 7;// 7
static +RIGHT_BOTTOM: Class<ui$LayoutAlignment__RIGHT_BOTTOM> & ui$LayoutAlignment__RIGHT_BOTTOM & 8;// 8
static +BOTTOM_LEFT: Class<ui$LayoutAlignment__BOTTOM_LEFT> & ui$LayoutAlignment__BOTTOM_LEFT & 9;// 9
static +BOTTOM_CENTER: Class<ui$LayoutAlignment__BOTTOM_CENTER> & ui$LayoutAlignment__BOTTOM_CENTER & 10;// 10
static +BOTTOM_RIGHT: Class<ui$LayoutAlignment__BOTTOM_RIGHT> & ui$LayoutAlignment__BOTTOM_RIGHT & 11;// 11

}

declare class ui$LayoutAlignment__TOP_LEFT mixins ui$LayoutAlignment {}
declare class ui$LayoutAlignment__TOP_CENTER mixins ui$LayoutAlignment {}
declare class ui$LayoutAlignment__TOP_RIGHT mixins ui$LayoutAlignment {}
declare class ui$LayoutAlignment__LEFT_TOP mixins ui$LayoutAlignment {}
declare class ui$LayoutAlignment__LEFT_MIDDLE mixins ui$LayoutAlignment {}
declare class ui$LayoutAlignment__LEFT_BOTTOM mixins ui$LayoutAlignment {}
declare class ui$LayoutAlignment__RIGHT_TOP mixins ui$LayoutAlignment {}
declare class ui$LayoutAlignment__RIGHT_MIDDLE mixins ui$LayoutAlignment {}
declare class ui$LayoutAlignment__RIGHT_BOTTOM mixins ui$LayoutAlignment {}
declare class ui$LayoutAlignment__BOTTOM_LEFT mixins ui$LayoutAlignment {}
declare class ui$LayoutAlignment__BOTTOM_CENTER mixins ui$LayoutAlignment {}
declare class ui$LayoutAlignment__BOTTOM_RIGHT mixins ui$LayoutAlignment {}



/**
 * This class represents a menu control allowing to control which map type the map shows, etc.
 */
declare class ui$MapSettingsControl mixins undefined.ui$Control {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - optional parameters to be passed to this control
 */
constructor(opt_options?: H$ui.ui$MapSettingsControl.InfoBubble$Options): this;

/**
 * Sets the traffic incidents layer to be shown when activating the respective button on the map settings control.
 * @param {H$map.layer.layer$Layer} incidentsLayer - the incidents layer
 */
setIncidentsLayer(incidentsLayer: H$map.layer.layer$Layer): void
}


/**
 * The map type entry is an object containing a display name and a map type object to which it refers.
 * @property name {string} - label which describes the map type
 * @property mapType {H.service.MapType} - reference to map type
 */
declare interface MapSettingsControl$MapTypeEntry {
name: string,
mapType: H$service.service$MapType
} 


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface MapSettingsControl$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.MapSettingsControl$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.MapSettingsControl$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.MapSettingsControl$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.MapSettingsControl$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.MapSettingsControl$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.MapSettingsControl$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.MapSettingsControl$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.MapSettingsControl$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.MapSettingsControl$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.MapSettingsControl$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.MapSettingsControl$Options | boolean),
panorama?: (H$ui.ui$Pano.MapSettingsControl$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.MapSettingsControl$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This class represents the UI controls for panorama
 */
declare class ui$Pano mixins undefined.ui$Control {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - optional parameters to be passed to the map.
 */
constructor(opt_options?: H$ui.ui$Pano.MapSettingsControl$Options): this
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface Pano$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.Pano$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Pano$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Pano$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Pano$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.Pano$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.Pano$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.Pano$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.Pano$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.Pano$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.Pano$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.Pano$Options | boolean),
panorama?: (H$ui.ui$Pano.Pano$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.Pano$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This class represents a UI element showing the current zoom scale.
 */
declare class ui$ScaleBar  {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - optional parameters to be passed to this scale bar.
 */
constructor(opt_options?: H$ui.ui$ScaleBar.Pano$Options): this
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface ScaleBar$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.ScaleBar$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ScaleBar$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ScaleBar$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ScaleBar$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ScaleBar$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ScaleBar$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ScaleBar$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.ScaleBar$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.ScaleBar$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.ScaleBar$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.ScaleBar$Options | boolean),
panorama?: (H$ui.ui$Pano.ScaleBar$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.ScaleBar$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This class encapsulates map UI functionality.
 */
declare class ui$UI mixins undefined.util$ICapturable {

/**
 * Constructor
 * @param {H$H$Map} map
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options
 */
constructor(map: H$H$Map, opt_options?: ui$UI.ScaleBar$Options): this;

/**
 * This method returns this ui's root element.
 * @returns {ELement} - the root element
 */
getElement(): base$Element;

/**
 * Returns the map instance to which this UI was added.
 * @returns {H$H$Map}
 */
getMap(): H$H$Map;

/**
 * This method returns this UI object's current unit system.
 * @returns {H$ui.ui$UnitSystem} - the current unit system
 */
getUnitSystem(): ui$UnitSystem;

/**
 * This method sets this UI object's unit system for displaying distances.
 * @param {H$ui.ui$UnitSystem} unitSystem - the unit system to use
 */
setUnitSystem(unitSystem: ui$UnitSystem): void;

/**
 * Toggles this UI's unit system between {@link H.ui.UnitSystem.METRIC} and {@link H.ui.UnitSystem.IMPERIAL}.
 */
toggleUnitSystem(): void;

/**
 * This method adds an info bubble to the UI.
 * @param {H$ui.ui$InfoBubble} bubble - the info bubble to be added
 */
addBubble(bubble: ui$InfoBubble): void;

/**
 * This method removes a previously added info bubble from the UI.
 * @param {H$ui.ui$InfoBubble} bubble - the info bubble to be removed
 */
removeBubble(bubble: ui$InfoBubble): void;

/**
 * This method returns a list of info bubble objects which are currently attached to this UI.
 * @returns {Array<H$ui.ui$InfoBubble>} - the list of info bubbles
 */
getBubbles(): ui$InfoBubble[];

/**
 * This method appends a control to the UI.
 * @param {string} name - the name under which to register this control
 * @param {H$ui.ui$Control} control - the control to add to this UI
 */
addControl(name: string, control: ui$Control): void;

/**
 * Removes a previously registered control from the UI object.
 * @param {string} name - the name under which this control was previously registered
 * @returns {H$ui.ui$Control} - the removed control
 */
removeControl(name: string): ui$Control;

/**
 * This method returns a UI control which was previously registered with the provided name.
 * @param {string} name - the name under which the control was registered.
 * @returns {H$ui.ui$Control} - the control or undefined if the control does not exist.
 */
getControl(name: string): ui$Control;

/**
 * This function creates the default UI including the zoom control,
 * map settings control and scalebar and panorama discovery control.
 * The default controls will be assigned the following values:
 * 
 * Zoom control:
 *      id: 'zoom'
 *      alignment: 'right-middle'
 * Map settings control:
 *      id: 'mapsettings'
 *      alignment: 'bottom-right'
 * Scalebar:
 *      id: 'scalebar'
 *      alignment: 'bottom-right'
 * Pano:
 *      id: 'panorama'
 *      alignment: 'top-right'
 * @param {H$H$Map} map - The map instance to which to append the UI
 * @param {map$Object<H$service.service$MapType>} mapTypes - The map types to use
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_locale - the language to use (or a full localization object).
 * @returns {H$ui.ui$UI} - the UI instance configured with the default controls
 */
static createDefault(
map: H$H$Map,
mapTypes: H$service.service$Platform.Platform$MapTypes | H$service.service$DefaultLayers,
opt_locale?: H$ui.i18n.i18n$Localization | string): H$ui.ui$UI;

/**
 * This method is used to capture the element view
 * @param {HTMLCanvasElement} canvas - HTML Canvas element to draw the view of the capturable element
 * @param {number} pixelRation - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @param {util$ICapturable} callback ~captureCallback} - Callback function to call once result of the capturing is ready
 * @param {util$ICapturable} opt_errback ~errorCallback} - Callback function to call if error occurred during capturing
 */
capture(
canvas: HTMLCanvasElement,
pixelRation: number,
callback: (canvas?: HTMLCanvasElement) => void,
opt_errback?: (error: string) => void): void
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface UI$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.UI$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.UI$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.UI$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.UI$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.UI$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.UI$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.UI$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.UI$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.UI$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.UI$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.UI$Options | boolean),
panorama?: (H$ui.ui$Pano.UI$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.UI$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This enumeration holds the possible unit systems for the UI to display distances.
 */
declare  class ui$UnitSystem {
  constructor(...args: empty): mixed;
static +IMPERIAL: Class<ui$UnitSystem__IMPERIAL> & ui$UnitSystem__IMPERIAL & 0;// 0
static +METRIC: Class<ui$UnitSystem__METRIC> & ui$UnitSystem__METRIC & 1;// 1

}

declare class ui$UnitSystem__IMPERIAL mixins ui$UnitSystem {}
declare class ui$UnitSystem__METRIC mixins ui$UnitSystem {}



/**
 * This class represents the UI controls for zooming in an out of the map.
 */
declare class ui$ZoomControl mixins undefined.ui$Control {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - optional parameters to be passed to the map.
 */
constructor(opt_options?: H$ui.ui$ZoomControl.UI$Options): this;

/**
 * This method returns the zoom speed (in levels per millisecond) which is applied when the button is pressed constantly.
 * @returns {number} - the current zoom speed
 */
getZoomSpeed(): number
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface ZoomControl$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.ZoomControl$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ZoomControl$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ZoomControl$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ZoomControl$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ZoomControl$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ZoomControl$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ZoomControl$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.ZoomControl$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.ZoomControl$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.ZoomControl$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.ZoomControl$Options | boolean),
panorama?: (H$ui.ui$Pano.ZoomControl$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.ZoomControl$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * This class represents a zoom rectangle control element that allows zooming to the selected area on the screen.
 */
declare class ui$ZoomRectangle mixins undefined.ui$Control {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - optional parameters to be passed to this control
 */
constructor(opt_options?: H$ui.ui$ZoomRectangle.ZoomControl$Options): this
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface ZoomRectangle$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.ZoomRectangle$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ZoomRectangle$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ZoomRectangle$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ZoomRectangle$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ZoomRectangle$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ZoomRectangle$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ZoomRectangle$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.ZoomRectangle$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.ZoomRectangle$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.ZoomRectangle$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.ZoomRectangle$Options | boolean),
panorama?: (H$ui.ui$Pano.ZoomRectangle$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.ZoomRectangle$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 

declare type ui$ES6Element = base$Element;

declare class base$Container mixins undefined.util$EventTarget {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_elementType - the type of HTML element this UI element renders as, default is 'div'
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_className - an optional class name to be used on this element
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_children - optional child elements to be added to this container
 */
constructor(opt_elementType?: string, opt_className?: string, opt_children?: base$Element[]): this;

/**
 * Adds a child element to be rendered within the container element.
 * @param {H$ui.base.base$Element} child - the child element to be added
 * @returns {H$ui.base.base$Container} - this container instance
 */
addChild(child: base$Element): base$Container;

/**
 * Returns the child collection of this container.
 * @returns {Array<H$ui.base.base$Element>} - Returns the child collection of this container.
 */
getChildren(): base$Element[];

/**
 * Removes a child element from this container's child collection.
 * @param {H$ui.base.base$Element} child - the child element to be removed
 */
removeChild(child: base$Element): void;

/**
 * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
 * @param {base$Element} element - this UI element's HTML representation
 * @param {Document} doc - the HTML document into which the element is currently being rendered
 */
renderInternal(element: ui$ES6Element, doc: Document): void;

/**
 * This method returns this UI element's disabled state as a boolean value.
 * @returns {boolean} - true if the element is disabled, false otherwise
 */
isDisabled(): boolean;

/**
 * This method set's the disabled state of this UI element.
 * @param {boolean} disabled - true to disable the element, false to enable it
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
 * @returns {H$ui.base.base$Element} - this element instance
 */
setDisabled(disabled: boolean, opt_force?: boolean): ui$ES6Element;

/**
 * This method returns a previously stored arbitrary data from this element.
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"} - the previously stored data object or null if not data was stored.
 */
getData(): any;

/**
 * This method stores arbitrary data with this UI element.
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} data - the data to be stored
 */
setData(data: any): void;

/**
 * This method returns the HTML element this UI element renders.
 * 
 * Note: Before the UI element was rendered the method returns null.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"} - the element
 */
getElement(): HTMLElement;

/**
 * Sets the visibility of this element.
 * @param {boolean} visibility - visibility
 */
setVisibility(visibility: boolean): void;

/**
 * Returns the visibility of this element.
 * @returns {boolean} - visibility
 */
getVisibility(): boolean;

/**
 * This method adds a CSS class to this UI element (if it is not already present).
 * @param {string} className - the CSS class name to add
 * @returns {H$ui.base.base$Element} - this UI element instance
 */
addClass(className: string): base$Element;

/**
 * This method removes a CSS class from this UI element (if it is present).
 * @param {string} className - the CSS class name to remove
 * @returns {H$ui.base.base$Element} - this UI element instance
 */
removeClass(className: string): base$Element
}

declare class base$Element mixins undefined.util$EventTarget {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_elementType - the type of HTML element this UI element renders as, default is 'div'
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_className - an optional class name to be used on this element
 */
constructor(opt_elementType?: string, opt_className?: string): this;

/**
 * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
 * @param {base$Element} element - this UI element's HTML representation
 * @param {Document} doc - the HTML document into which the element is currently being rendered
 */
renderInternal(element: ui$ES6Element, doc: Document): void;

/**
 * This method returns this UI element's disabled state as a boolean value.
 * @returns {boolean} - true if the element is disabled, false otherwise
 */
isDisabled(): boolean;

/**
 * This method set's the disabled state of this UI element.
 * @param {boolean} disabled - true to disable the element, false to enable it
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_force - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
 * @returns {H$ui.base.base$Element} - this element instance
 */
setDisabled(disabled: boolean, opt_force?: boolean): ui$ES6Element;

/**
 * This method returns a previously stored arbitrary data from this element.
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"} - the previously stored data object or null if not data was stored.
 */
getData(): any;

/**
 * This method stores arbitrary data with this UI element.
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} data - the data to be stored
 */
setData(data: any): void;

/**
 * This method returns the HTML element this UI element renders.
 * 
 * Note: Before the UI element was rendered the method returns null.
 * @returns {"NO PRINT IMPLEMENTED: JSDocNullableType"} - the element
 */
getElement(): HTMLElement;

/**
 * Sets the visibility of this element.
 * @param {boolean} visibility - visibility
 */
setVisibility(visibility: boolean): void;

/**
 * Returns the visibility of this element.
 * @returns {boolean} - visibility
 */
getVisibility(): boolean;

/**
 * This method adds a CSS class to this UI element (if it is not already present).
 * @param {string} className - the CSS class name to add
 * @returns {H$ui.base.base$Element} - this UI element instance
 */
addClass(className: string): base$Element;

/**
 * This method removes a CSS class from this UI element (if it is present).
 * @param {string} className - the CSS class name to remove
 * @returns {H$ui.base.base$Element} - this UI element instance
 */
removeClass(className: string): base$Element
}


      declare var npm$namespace$i18n: {
        
        defaultLocales: typeof i18n$defaultLocales,
      }

/**
 * Default available locales. UI provides default translations for this set of locale codes.
 */
declare var i18n$defaultLocales: string[];


/**
 * This class is used for internationalization of UI components.
 */
declare class i18n$Localization  {
constructor(locale: string, opt_translationMap?: any): this;

/**
 * This method returns current locale code i.e 'en-US'
 * @returns {string} - locale code
 */
getLocale(): string;

/**
 * This method returns translation keys for current locale. Keys from this set can be used to get translations via translate method.
 * @returns {Array<string>}
 */
getKeys(): string[];

/**
 * This method returns a boolean value indicating whether this localization object has a translation for the specified translation key.
 * @param {string} key - a translation key
 * @returns {boolean} - true if the key exists, otherwise false
 */
hasKey(key: string): boolean;

/**
 * This method returns translation for provided key. It throws exception if translation is not available
 * @param {string} key - a translation key
 * @returns {string} - a localized string corresponding to provided key
 */
translate(key: string): string
}


/**
 * The cache represents a in-memory LRU-cache with a fixed size. It stores any data that is added until the cache's content exceeds a maximum size. Once the size of all content elements
 * exceeds the maximum size the cache will drop the least recently retrieved elements until the size of the cache is within the bounds of its maximum size. Data elements are always
 * associated with an identifier that allow to retrieve them at a later stage and their content size.
 */
declare class util$Cache mixins undefined.util$ICache {

/**
 * Constructor
 * @param {number} maxSize - the maximum size of the cache
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_onDrop - A callback to be invoked when a data element is dropped from the cache
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_filter - A function to filter data elements that are not to be cached
 */
constructor(maxSize: number, opt_onDrop?: (s: string, i: any, n: number) => void, opt_filter?: (s: string, i: any, n: number) => boolean): this;

/**
 * This method sets this cache's maximum size to a new size. If the cache's contents exceed the new size, least recently used data elements will be dropped.
 * @param {number} maxSize - the new maximum size of this cache.
 * @returns {H$util.util$Cache} - this cache
 */
setMaxSize(maxSize: number): H$util.util$Cache;

/**
 * This method returns the maximum size of this cache.
 * @returns {number} - the maximum size of the cache
 */
getMaxSize(): number;

/**
 * This method returns the current size of this cache.
 * @returns {number} - the current size of the cache
 */
getCurrentSize(): number;

/**
 * This method adds an element to the cache.
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id - The identifier of this data element, the value is converted to a string.
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} data - the actual data to be stored
 * @param {number} size - the size of the data element
 * @returns {boolean} - a boolean value indicating whether the data was added
 */
add(id: any, data: any, size: number): boolean;

/**
 * This method retrieves an element from the cache.
 * @param {string} id - the ID of the data element to be retrieved.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_noUpdate - and optional flag to indicate that the retrieved object should not be marked as 'most recently used'.
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"} - returns the data associated with the ID or undefined if the data element is not currently in the cache.
 */
get(id: string, opt_noUpdate?: boolean): any;

/**
 * This method explicitly drops an element from the cache.
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id - the id of the item to drop
 */
drop(id: any): void;

/**
 * This method will execute the provided callback function on each of the cache's entries. If the optional match predicate is passed to this method the callback will only be executed
 * on those entries for which the predicated returns true.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} callback - the callback to be invoked for each entry
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_ctx - an optional context object to be used as this within the callback
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_matcher - an optional match predicate to customize on which entries the callback will be called
 */
forEach(
callback: (s: string, i: any, n: number) => void,
opt_ctx?: any,
opt_matcher?: (s: string, i: any, n: number) => boolean): void;

/**
 * This method removes all data elements from the cache. If the optional match predicate is passed to this method only those data elements will be removed for which the predicate
 * return true.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_matcher - an optional function that receives an entries id, data and size and may return true or false to either remove it or
leave the entry in the cache respectively
 */
removeAll(opt_matcher?: (s: string, i: any, n: number) => boolean): void;

/**
 * This method registers a callback that should be called each time an entry is dropped from the cache.
 * @param {("NO PRINT IMPLEMENTED: JSDocFunctionType")} callback - the callback to be invoked for each entry
 */
registerOnDrop(callback: (s: string, i: any, n: number) => void): void
}


/**
 * This event indicates a change. It contains the old and the new value.
 * @property target {*} - Object which triggered the event
 * @property currentTarget {*} - Object which has listener attached
 * @property type {string} - Name of the dispatched event
 * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
 */
declare class util$ChangeEvent mixins undefined.mapevents$Event {

/**
 * Constructor
 * @param {string} type - The type of the event
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} newValue - The new value of the property
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} oldValue - The previous value of the property
 */
constructor(type: string, newValue: any, oldValue: any): this;

/**
 * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
 */
preventDefault(): void;

/**
 * Stops propagation for current event.
 */
stopPropagation(): void;
target: any;
currentTarget: any;
type: string;
defaultPrevented: boolean
}


/**
 * This class represents a contextual information/action.
 * @property SEPARATOR {H.util.ContextItem} - Separator for the context items
 */
declare class util$ContextItem mixins undefined.util$EventTarget {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_options - The values to initialize this context item
 */
constructor(opt_options?: H$util.util$ContextItem.ZoomRectangle$Options): this;

/**
 * This method returns label of the context item
 * @returns {string} - the label of the context item
 */
getLabel(): string;

/**
 * This method changes context item label to the specified one
 * @param {string} label - New label for the context item
 * @returns {H$util.util$ContextItem} - this context item instance
 */
setLabel(label: string): H$util.util$ContextItem;

/**
 * This method returns disabled state of the context item.
 * @returns {boolean} -  true if the item is disabled, false otherwise
 */
isDisabled(): boolean;

/**
 * This method enables/disables the context item
 * @param {boolean} disabled -  true to disable and false to enabled it
 * @returns {H$util.util$ContextItem} - this context item instance
 */
setDisabled(disabled: boolean): H$util.util$ContextItem;

/**
 * This method will dispatch event on the event target object
 * @param {(H$util.mapevents$Event | string)} evt - event object or event name
 */
dispatchEvent(evt: (H$util.mapevents$Event | string)): void;

/**
 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds callback which is triggered when the object is being disposed
 * @param {Function} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope to call the callback in.
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
static SEPARATOR: H$util.util$ContextItem
}


/**
 * This type defines options which can be used to initialize the map.
 * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
 * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
 * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
 * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
 * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
 * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
 * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
Example: {lower: 3, higher: 2}
 * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
See H.map.layer.Layer.Options#dark
 * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
 * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
 * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
 */
declare interface ContextItem$Options {
center?: H$geo.math$IPoint,
zoom?: number,
bounds?: H$geo.math$Rect,
layers?: H$map.layer.layer$Layer[],
engineType?: Map$EngineType,
pixelRatio?: number,
imprint?: H$map.map$Imprint.ContextItem$Options,
renderBaseBackground?: Map$BackgroundRange,
autoColor?: boolean,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
min?: number,
max?: number,
clusteringOptions?: H$clustering.provider$Provider.Provider$ClusteringOptions,
theme?: H$clustering.clustering$ITheme,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon | H$map.map$DomIcon,
data?: any,
fillColor?: string,
width?: number,
length?: number,
frequency?: number,
style?: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ContextItem$Options,
visibility?: boolean,
precision?: number,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
onAttach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
onDetach?: (el: base$Element, icon: H$map.map$DomIcon, marker: H$map.map$DomMarker) => void,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$DomIcon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
objects?: H$map.map$Object[],
size?: H$math.math$ISize | number,
anchor?: H$math.math$IPoint,
hitArea?: H$map.map$HitArea,
asCanvas?: H$map.map$HitArea,
crossOrigin: boolean,
invert?: boolean,
font?: string,
href?: string,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
icon?: H$map.map$Icon,
data?: any,
min?: number,
max?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
min?: number,
max?: number,
opacity?: number,
visibility?: boolean,
zIndex?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ContextItem$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ContextItem$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
style?: (H$map.map$SpatialStyle | H$map.map$SpatialStyle.ContextItem$Options),
arrows?: (H$map.map$ArrowStyle | H$map.map$ArrowStyle.ContextItem$Options),
visibility?: boolean,
zIndex?: number,
min?: number,
max?: number,
provider?: H$map.provider.provider$Provider,
data?: any,
strokeColor?: string,
fillColor?: string,
lineWidth?: number,
lineCap?: H$map.map$SpatialStyle.SpatialStyle$LineCap,
lineJoin?: H$map.map$SpatialStyle.SpatialStyle$LineJoin,
miterLimit?: number,
lineDash?: number[],
lineDashOffset?: number,
margin?: number,
padding?: H$map.map$ViewPort.ViewPort$Padding,
fixedCenter?: boolean,
projection?: H$geo.geo$IProjection,
opacity?: number,
min?: number,
max?: number,
dark?: boolean,
projection?: H$geo.geo$IProjection,
minWorldSize?: number,
tileSize?: number,
tileCacheSize?: number,
dataCacheSize?: number,
pixelRatio?: number,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
tileSize?: number,
getURL(n1: number, n2: number, n3: number): string,
crossOrigin?: string | boolean,
min?: number,
max?: number,
requestData(
n1: number,
n2: number,
n3: number,
markerCallback: (markers: H$map.map$AbstractMarker[]) => void,
f: () => void): H$util.util$ICancelable,
providesDomMarkers?: boolean,
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, n: number) => H$map.map$ICopyright[],
uri?: string,
min?: number,
max?: number,
getCopyrights?: (rect: H$geo.math$Rect, number: number) => H$map.map$ICopyright[],
tileSize?: number,
[key: string]: string,

/**
 * Object describes how many cached zoom levels should be used as a base map background while base map tiles are
 */
renderBaseBackground?: {},

/**
 * The pixelRatio to use for over-sampling in cases of high-resolution displays
 */
pixelRatio: number,

/**
 * optional
 */
enableSubpixelRendering?: boolean,
kinetics?: H$util.kinetics.kinetics$IKinetics,
enable?: H$math.math$BitMask,
"NO PRINT IMPLEMENTED: function Object() { [native code] }",
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
type?: string,
version?: string,
subDomain?: string,
path?: string,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
app_id: string,
app_code: string,
baseUrl?: H$service.service$Url,
useCIT?: boolean,
useHTTPS?: boolean,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
subDomain?: string,
path?: string,
baseUrl?: H$service.service$Url,
type?: string,
version?: string,
subDomain?: string,
tileType?: string,
scheme?: string,
tileCacheSize?: number,
tileSize?: number,
pixelRatio?: number,
categoryFilter?: string[],
subDomain?: string,
path?: string,
tileCacheSize?: number,
pixelRatio?: number,
onSpaceCreated?: (space: H$service.venues.venues$Space) => void,
alignment?: H$ui.ui$LayoutAlignment,
startIcon?: H$map.map$Icon,
stopoverIcon?: H$map.map$Icon,
endIcon?: H$map.map$Icon,
splitIcon?: H$map.map$Icon,
lineStyle: H$map.map$SpatialStyle | H$map.map$SpatialStyle.ContextItem$Options,
distanceFormatter?: (n: number) => void,

/**
 * a callback to be invoked when the info bubble's state changes
 * @param {H$util.mapevents$Event} event
 */
onStateChange?: (event: H$util.mapevents$Event) => void,

/**
 * content to be added to the info bubble
 */
content: string | Node,
alignment?: H$ui.ui$LayoutAlignment,
entries?: H$ui.ui$MapSettingsControl.MapSettingsControl$MapTypeEntry[],
incidents: H$map.layer.layer$Layer,
alignment?: H$ui.ui$LayoutAlignment,
mapTypes: H$service.service$MapType,
alignment?: H$ui.ui$LayoutAlignment,
unitSystem?: H$ui.ui$UnitSystem,
zoom?: (H$ui.ui$ZoomControl.ContextItem$Options | boolean),
zoomrectangle?: (H$ui.ui$ZoomRectangle.ContextItem$Options | boolean),
mapsettings?: (H$ui.ui$MapSettingsControl.ContextItem$Options | boolean),
scalebar?: (H$ui.ui$ScaleBar.ContextItem$Options | boolean),
panorama?: (H$ui.ui$Pano.ContextItem$Options | boolean),
distancemeasurement?: (H$ui.ui$DistanceMeasurement.ContextItem$Options | boolean),
locale?: (H$ui.i18n.i18n$Localization | string),
zoomSpeed?: number,
alignment?: H$ui.ui$LayoutAlignment,
slider?: boolean,
sliderSnaps?: boolean,
alignment?: H$ui.ui$LayoutAlignment,
adjustZoom?: (n: number, m: H$H$Map) => number,
label?: string,
disabled?: boolean,
callback?: (event: H$util.mapevents$Event) => void
} 


/**
 * Object which can be safely disposed.
 */
declare class util$Disposable  {

/**
 * Constructor
 */
constructor(): this;

/**
 * Method adds a callback which will be triggered when the object is disposed
 * @param {Function} callback
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void
}


/**
 * Base Event class which is used for all events dispatched by any EventTarget within the api.
 * @property target {*} - Object which triggered the event
 * @property currentTarget {*} - Object which has listener attached
 * @property type {string} - Name of the dispatched event
 * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
 */
declare class util$Event  {

/**
 * Constructor
 * @param {string} type - Event Type.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_target - Reference to the object that is the target of this event. It has to implement the {@link EventTargetInstance} interface.
 */
constructor(type: string, opt_target?: any): this;

/**
 * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
 */
preventDefault(): void;

/**
 * Stops propagation for current event.
 */
stopPropagation(): void;
target: any;
currentTarget: any;
type: string;
defaultPrevented: boolean
}


/**
 * EventTarget enabled listening and dispatching events on all instances and derived classes.
 */
declare class util$EventTarget  {

/**
 * Constructor
 */
constructor(): this;

/**
 * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it.
 * Otherwise memory leak is possible.
 * @param {string} type - name of event
 * @param {Function} handler - event handler function
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - scope for the handler function
 */
addEventListener(
type: string,
handler: EventListenerOrEventListenerObject,
opt_capture?: boolean,
opt_scope?: any): void;

/**
 * This method will removed previously added listener from the event target
 * @param {string} type - name of event
 * @param {Function} handler - event handler function
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_capture - if set to true will listen in the capture phase (bubble otherwise)
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - scope for the handler function
 */
removeEventListener(
type: string,
handler: EventListenerOrEventListenerObject,
opt_capture?: boolean,
opt_scope?: any): void;

/**
 * This method will dispatch event on the event target object
 * @param {H$util.util$Event | string} evt - event object or event name
 */
dispatchEvent(evt: H$util.util$Event | string): void;

/**
 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds callback which is triggered when the object is being disposed
 * @param {Function} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope to call the callback in.
 */
addOnDisposeCallback(callback: () => void, opt_scope?: any): void
}


/**
 * An interface definition for the generic cache. Any data elements can be stored in the cache. They are always associated with an identifier to retrieve them at a later stage and their
 * content size.
 */
declare interface util$ICache {

/**
 * This method adds an element to the cache.
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id - The identifier of this data element, the value is converted to a string.
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} data - the actual data to be stored
 * @param {number} size - the size of the data element
 * @returns {boolean} - a boolean value indicating whether the data was added
 */
add(id: any, data: any, size: number): boolean,

/**
 * This method retrieves an element from the cache.
 * @param {string} id - the ID of the data element to be retrieved.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_noUpdate - and optional flag to indicate that the retrieved object should not be marked as 'most recently used'.
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"} - returns the data associated with the ID or undefined if the data element is not currently in the cache.
 */
get(id: string, opt_noUpdate?: boolean): any,

/**
 * This method explicitly drops an element from the cache.
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id - the id of the item to drop
 */
drop(id: any): void,

/**
 * This method will execute the provided callback function on each of the cache's entries. If the optional match predicate is passed to this method the callback will only be executed on
 * those entries for which the predicated returns true.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} callback - the callback to be invoked for each entry
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_ctx - an optional context object to be used as this within the callback
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_matcher - an optional match predicate to customize on which entries the callback will be called
 */
forEach(
callback: (s: string, t: any, n: number) => void,
opt_ctx?: {},
opt_matcher?: ((s: string, t: any, n: number) => boolean)): void,

/**
 * This method removes all data elements from the cache. If the optional match predicate is passed to this method only those data elements will be removed for which the predicate
 * return true.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_matcher - an optional function that receives an entries id, data and size and may return true or false to either remove it or
leave the entry in the cache respectively
 */
removeAll(opt_matcher?: ((s: string, t: any, n: number) => boolean)): void,

/**
 * This method registers a callback that should be called each time an entry is dropped from the cache.
 * @param {("NO PRINT IMPLEMENTED: JSDocFunctionType")} callback - the callback to be invoked for each entry
 */
registerOnDrop(callback: ((s: string, t: any, n: number) => void)): void
} 


/**
 * An interface to cancelable requests and actions.
 */
declare interface util$ICancelable {

/**
 * This method is used to cancel current action
 */
cancel(): void
} 

declare interface util$ICapturable {

/**
 * This method is used to capture the element view
 * @param {HTMLCanvasElement} canvas - HTML Canvas element to draw the view of the capturable element
 * @param {number} pixelRation - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
 * @param {util$ICapturable} callback ~captureCallback} - Callback function to call once result of the capturing is ready
 * @param {util$ICapturable} opt_errback ~errorCallback} - Callback function to call if error occurred during capturing
 */
capture(
canvas: HTMLCanvasElement,
pixelRation: number,
callback: (canvas?: HTMLCanvasElement) => void,
opt_errback?: (error: string) => void): void
} 


/**
 * This class represents an list of ordered entries which dispatches events when the list is modified.
 * @event add {H.util.OList.Event} - Fired when an entry was added to the list.
 * @event remove {H.util.OList.Event} - Fired when an entry was removed from the list.
 * @event set {H.util.OList.Event} - Fired when an entry was set in the list.
 * @event move {H.util.OList.Event} - Fired when an entry was moved within the list.
 */
declare class util$OList mixins undefined.util$EventTarget {

/**
 * This method inserts an entry to the list. Optionally it can place new entry at provided index.
 * @param {"NO PRINT IMPLEMENTED: JSDocUnknownType"} entry - The entry to insert
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_idx - The index where the new entry should be inserted; if omitted or greater then the current size of the list, the entry is added at the end of the list;
a negative index is treated as being relative from the end of the list
 */
add(entry: any, opt_idx?: number): void;

/**
 * This method removes an entry by a given index from the list.
 * @param {number} idx - The index of the entry which should be removed; a negative index is treated as being relative from the end of the list
 * @returns {"NO PRINT IMPLEMENTED: JSDocUnknownType"} - The removed entry
 */
removeAt(idx: number): any;

/**
 * This method removes the the first entry which is identical with the given entry.
 * @param {"NO PRINT IMPLEMENTED: JSDocUnknownType"} entry - The entry to remove
 * @returns {boolean} - signals if the entry could be found in the list and is removed
 */
remove(entry: any): boolean;

/**
 * This method replaces an entry at the given index with the given entry.
 * @param {number} idx - The index of the entry which should be replaced; a negative index is treated as being relative from the end of the list
 * @param {"NO PRINT IMPLEMENTED: JSDocUnknownType"} entry - The entry which replaces the existing one
 * @returns {"NO PRINT IMPLEMENTED: JSDocUnknownType"} - The replaced entry
 */
set(idx: number, entry: any): any;

/**
 * This method retrieves the index of the first object in this list that is identical with the object supplied by the caller.
 * @param {"NO PRINT IMPLEMENTED: JSDocUnknownType"} entry - The entry for which to return the index.
 * @returns {number} - The index of the first matching entry in this list or -1 if the entry provided by the caller is not found in the list
 */
indexOf(entry: any): number;

/**
 * To get the entry at the specified index.
 * @param {number} idx - The index of the entry to get a negative index is treated as being relative from the end of the list
 * @returns {"NO PRINT IMPLEMENTED: JSDocUnknownType"} - The element at the given index
 */
get(idx: number): any;

/**
 * This method returns the length of the list.
 * @returns {number}
 */
getLength(): number;

/**
 * This method returns all list's entries as an array.
 * @returns {Array<"NO PRINT IMPLEMENTED: JSDocAllType">} - The list as an array
 */
asArray(): any[];

/**
 * This method removes all entries from the list.
 */
flush(): void;

/**
 * This method will dispatch event on the event target object
 * @param {(H$util.util$Event | string)} evt - event object or event name
 */
dispatchEvent(evt: (H$util.util$Event | string)): void;

/**
 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
 */
dispose(): void;

/**
 * This method adds callback which is triggered when the object is being disposed
 * @param {Function} callback - The callback function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_scope - An optional scope to call the callback in.
 */
addOnDisposeCallback(callback: () => void, opt_scope?: {}): void
}


/**
 * The event class for events that are dispatched by OList
 * @property target {*} - Object which triggered the event
 * @property currentTarget {*} - Object which has listener attached
 * @property type {string} - Name of the dispatched event
 * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
 */
declare class OList$Event mixins undefined.OList$Event {

/**
 * Constructor
 * @param {H$util.util$OList} list - The OList instance which is emitting the event
 * @param {H$util.util$OList.prototype.EventType} type - The type of the event
 * @param {number} idx - The affected index within this list
 * @param {"NO PRINT IMPLEMENTED: JSDocNullableType"} added - The value of the entry which was added or set
 * @param {"NO PRINT IMPLEMENTED: JSDocNullableType"} removed - The value of the entry which was removed or replaced
 * @param {"NO PRINT IMPLEMENTED: JSDocNullableType"} moved - The value of the entry which was moved
 */
constructor(list: H$util.util$OList, type: string, idx: number, added: any, removed: any, moved: any): this;

/**
 * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
 */
preventDefault(): void;

/**
 * Stops propagation for current event.
 */
stopPropagation(): void;
target: any;
currentTarget: any;
type: string;
defaultPrevented: boolean
}


/**
 * A generic class to represent a handle for any kind of asynchronous processed requests
 */
declare class util$Request  {

/**
 * Constructor
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_onprogress - A callback to invoke every time when the request's progress state changes
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} opt_total - The total number of processing steps to complete this request, default is 1
 */
constructor(opt_onprogress?: (req: H$util.util$Request) => void, opt_total?: number): this;

/**
 * Returns the state of this request
 * @returns {H$util.util$Request.InfoBubble$State}
 */
getState(): H$util.util$Request.InfoBubble$State;

/**
 * Returns the number of processing steps to complete this request
 * @returns {number}
 */
getTotal(): number;

/**
 * Returns the number of steps which are already processed by this request
 * @returns {number}
 */
getProcessed(): number;

/**
 * Returns the number of processingsteps which have been failed
 * @returns {number}
 */
getFailed(): number
}


/**
 * The supported states of an request
 */
declare  class Request$State {
  constructor(...args: empty): mixed;
static +PENDING: Class<Request$State__PENDING> & Request$State__PENDING & 0;// 0
static +PROCESSING: Class<Request$State__PROCESSING> & Request$State__PROCESSING & 1;// 1
static +COMPLETE: Class<Request$State__COMPLETE> & Request$State__COMPLETE & 2;// 2
static +CANCELLED: Class<Request$State__CANCELLED> & Request$State__CANCELLED & 3;// 3
static +ERROR: Class<Request$State__ERROR> & Request$State__ERROR & 4;// 4

}

declare class Request$State__PENDING mixins Request$State {}
declare class Request$State__PROCESSING mixins Request$State {}
declare class Request$State__COMPLETE mixins Request$State {}
declare class Request$State__CANCELLED mixins Request$State {}
declare class Request$State__ERROR mixins Request$State {}



/**
 * This mamespace contains easing functions used for Animation class.
 */
declare class animation$ease  {

/**
 * This function defines linear ease.
 * @param {number} val - A value in range [0..1] to translate
 * @returns {number} - the translated value
 */
static LINEAR(val: number): number;

/**
 * This function defines quadratic ease in.
 * @param {number} val - A value in range [0..1] to translate
 * @returns {number} - the translated value
 */
static EASE_IN_QUAD(val: number): number;

/**
 * This function defines quadratic ease out.
 * @param {number} val - A value in range [0..1] to translate
 * @returns {number} - the translated value
 */
static EASE_OUT_QUAD(val: number): number;

/**
 * This function defines ease in and out with slope.
 * @param {number} val - A value in range [0..1] to translate
 * @returns {number} - the translated value
 */
static EASE_IN_OUT_QUINT(val: number): number;

/**
 * This function defines ease out with circ function.
 * @param {number} val - A value in range [0..1] to translate
 * @returns {number} - the translated value
 */
static EASE_OUT_CIRC(val: number): number
}


/**
 * This interface defines kinetic move parameters used by map for kinetic drag.
 * @property power {number} - Power multiplier. Multiplier is used to increase the speed of the kinetic move. By default map uses 1.
 * @property duration {number} - Defines duration of the kinetic move.
 */
declare interface kinetics$IKinetics {

/**
 * Easing function modifies animation progress. In example it can modify the animation in a way it starts rapidly and then slows down at the end.
 * @param {number} p - current progress
 * @returns {number} - modified progress
 */
animation$ease(p: number): number,
power: number,
duration: number
} 
    }
