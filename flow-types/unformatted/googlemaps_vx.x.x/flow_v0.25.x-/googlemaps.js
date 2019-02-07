declare module 'googlemaps' {
        
/**
 * *** Map ****
 */
declare export class maps$Map mixins maps$MVCObject {
constructor(mapDiv: Element | null, opts?: maps$MapOptions): this;
fitBounds(
bounds: maps$LatLngBounds | maps$LatLngBoundsLiteral,
padding?: number | maps$Padding): void;
getBounds(): maps$LatLngBounds | null | void;
getCenter(): maps$LatLng;
getDiv(): Element;
getHeading(): number;
getMapTypeId(): maps$MapTypeId | string;
getProjection(): maps$Projection;
getStreetView(): maps$StreetViewPanorama;
getTilt(): number;
getZoom(): number;
panBy(x: number, y: number): void;
panTo(latLng: maps$LatLng | maps$LatLngLiteral): void;
panToBounds(
latLngBounds: maps$LatLngBounds | maps$LatLngBoundsLiteral,
padding?: number | maps$Padding): void;
setCenter(latlng: maps$LatLng | maps$LatLngLiteral): void;
setHeading(heading: number): void;
setMapTypeId(mapTypeId: maps$MapTypeId | string): void;
setOptions(options: maps$MapOptions): void;
setStreetView(panorama: maps$StreetViewPanorama): void;
setTilt(tilt: number): void;
setZoom(zoom: number): void;
controls: maps$MVCArray<Node>[];
data: maps$Data;
mapTypes: maps$MapTypeRegistry;
overlayMapTypes: maps$MVCArray<maps$MapType>;
setClickableIcons(clickable: boolean): void
}

declare export interface maps$Padding {
bottom: number,
left: number,
right: number,
top: number
} 

declare export interface maps$MapOptions {

/**
 * Color used for the background of the Map div. This color will be visible
 * when tiles have not yet loaded as the user pans. This option can only be
 * set when the map is initialized.
 */
backgroundColor?: string,

/**
 * The initial Map center. Required.
 */
center?: maps$LatLng | maps$LatLngLiteral,

/**
 * When false, map icons are not clickable. A map icon represents a point of
 * interest, also known as a POI. By default map icons are clickable.
 */
clickableIcons?: boolean,

/**
 * Enables/disables all default UI. May be overridden individually.
 */
disableDefaultUI?: boolean,

/**
 * Enables/disables zoom and center on double click. Enabled by default.
 */
disableDoubleClickZoom?: boolean,

/**
 * If false, prevents the map from being dragged. Dragging is enabled by
 * default.
 */
draggable?: boolean,

/**
 * The name or url of the cursor to display when mousing over a draggable
 * map. This property uses the css cursor attribute to change the icon. As
 * with the css property, you must specify at least one fallback cursor that
 * is not a URL. For example: draggableCursor:
 * 'url(http://www.example.com/icon.png), auto;'.
 */
draggableCursor?: string,

/**
 * The name or url of the cursor to display when the map is being dragged.
 * This property uses the css cursor attribute to change the icon. As with
 * the css property, you must specify at least one fallback cursor that is
 * not a URL. For example: draggingCursor:
 * 'url(http://www.example.com/icon.png), auto;'.
 */
draggingCursor?: string,

/**
 * The enabled/disabled state of the Fullscreen control.
 */
fullscreenControl?: boolean,

/**
 * The display options for the Fullscreen control.
 */
fullscreenControlOptions?: maps$FullscreenControlOptions,

/**
 * This setting controls how gestures on the map are handled.
 */
gestureHandling?: maps$GestureHandlingOptions,

/**
 * The heading for aerial imagery in degrees measured clockwise from
 * cardinal direction North. Headings are snapped to the nearest available
 * angle for which imagery is available.
 */
heading?: number,

/**
 * If false, prevents the map from being controlled by the keyboard.
 * Keyboard shortcuts are enabled by default.
 */
keyboardShortcuts?: boolean,

/**
 * The initial enabled/disabled state of the Map type control.
 */
mapTypeControl?: boolean,

/**
 * The initial display options for the Map type control.
 */
mapTypeControlOptions?: maps$MapTypeControlOptions,

/**
 * The initial Map mapTypeId. Defaults to ROADMAP.
 */
mapTypeId?: maps$MapTypeId,

/**
 * The maximum zoom level which will be displayed on the map. If omitted, or
 * set to null, the maximum zoom from the current map type is used instead.
 * Valid values: Integers between zero, and up to the supported maximum zoom
 * level.
 */
maxZoom?: number,

/**
 * The minimum zoom level which will be displayed on the map. If omitted, or
 * set to null, the minimum zoom from the current map type is used instead.
 * Valid values: Integers between zero, and up to the supported maximum zoom
 * level.
 */
minZoom?: number,

/**
 * If true, do not clear the contents of the Map div.
 */
noClear?: boolean,
overviewMapControl?: boolean,
overviewMapControlOptions?: maps$OverviewMapControlOptions,

/**
 * The enabled/disabled state of the Pan control.
 * Note: The Pan control is not available in the new set of controls
 * introduced in v3.22 of the Google Maps JavaScript API. While using v3.22
 * and v3.23, you can choose to use the earlier set of controls rather than
 * the new controls, thus making the Pan control available as part of the
 * old control set. See {@link
 * https://developers.google.com/maps/articles/v322-controls-diff|What's New
 * in the v3.22 Map Controls}.
 */
panControl?: boolean,

/**
 * The display options for the Pan control.
 * Note: The Pan control is not available in the new set of controls
 * introduced in v3.22 of the Google Maps JavaScript API. While using v3.22
 * and v3.23, you can choose to use the earlier set of controls rather than
 * the new controls, thus making the Pan control available as part of the
 * old control set. See {@link
 * https://developers.google.com/maps/articles/v322-controls-diff|What's New
 * in the v3.22 Map Controls}.
 */
panControlOptions?: maps$PanControlOptions,

/**
 * The enabled/disabled state of the Rotate control.
 */
rotateControl?: boolean,

/**
 * The display options for the Rotate control.
 */
rotateControlOptions?: maps$RotateControlOptions,

/**
 * The initial enabled/disabled state of the Scale control.
 */
scaleControl?: boolean,

/**
 * The initial display options for the Scale control.
 */
scaleControlOptions?: maps$ScaleControlOptions,

/**
 * If false, disables scrollwheel zooming on the map. The scrollwheel is
 * enabled by default.
 */
scrollwheel?: boolean,

/**
 * The enabled/disabled state of the sign in control. This option only
 * applies if signed_in=true has been passed as a URL parameter in the
 * bootstrap request. You may want to use this option to hide the map's sign
 * in control if you have provided another way for your users to sign in,
 * such as the Google Sign-In button. This option does not affect the
 * visibility of the Google avatar shown when the user is already signed in.
 */
signInControl?: boolean,

/**
 * A StreetViewPanorama to display when the Street View pegman is dropped on
 * the map. If no panorama is specified, a default StreetViewPanorama will
 * be displayed in the map's div when the pegman is dropped.
 */
streetView?: maps$StreetViewPanorama,

/**
 * The initial enabled/disabled state of the Street View Pegman control.
 * This control is part of the default UI, and should be set to false when
 * displaying a map type on which the Street View road overlay should not
 * appear (e.g. a non-Earth map type).
 */
streetViewControl?: boolean,

/**
 * The initial display options for the Street View Pegman control.
 */
streetViewControlOptions?: maps$StreetViewControlOptions,

/**
 * Styles to apply to each of the default map types. Note that for
 * satellite/hybrid and terrain modes, these styles will only apply to
 * labels and geometry.
 */
styles?: maps$MapTypeStyle[],

/**
 * Controls the automatic switching behavior for the angle of incidence of
 * the map. The only allowed values are 0 and 45. The value 0 causes the map
 * to always use a 0° overhead view regardless of the zoom level and
 * viewport. The value 45 causes the tilt angle to automatically switch to
 * 45 whenever 45° imagery is available for the current zoom level and
 * viewport, and switch back to 0 whenever 45° imagery is not available
 * (this is the default behavior). 45° imagery is only available for
 * satellite and hybrid map types, within some locations, and at some zoom
 * levels. Note: getTilt returns the current tilt angle, not the value
 * specified by this option. Because getTilt and this option refer to
 * different things, do not bind() the tilt property; doing so may yield
 * unpredictable effects.
 */
tilt?: number,

/**
 * The initial Map zoom level. Required. Valid values: Integers between
 * zero, and up to the supported maximum zoom level.
 */
zoom?: number,

/**
 * The enabled/disabled state of the Zoom control.
 */
zoomControl?: boolean,

/**
 * The display options for the Zoom control.
 */
zoomControlOptions?: maps$ZoomControlOptions
} 


/**
 * Identifiers for common MapTypes. Specify these by value, or by using the
 * constant's name. For example, 'satellite' or
 * google.maps.MapTypeId.SATELLITE.
 */
declare export  class maps$MapTypeId {
  constructor(...args: empty): mixed;
static +HYBRID: Class<maps$MapTypeId__HYBRID> & maps$MapTypeId__HYBRID & 0;// 0
static +ROADMAP: Class<maps$MapTypeId__ROADMAP> & maps$MapTypeId__ROADMAP & 1;// 1
static +SATELLITE: Class<maps$MapTypeId__SATELLITE> & maps$MapTypeId__SATELLITE & 2;// 2
static +TERRAIN: Class<maps$MapTypeId__TERRAIN> & maps$MapTypeId__TERRAIN & 3;// 3

}

declare class maps$MapTypeId__HYBRID mixins maps$MapTypeId {}
declare class maps$MapTypeId__ROADMAP mixins maps$MapTypeId {}
declare class maps$MapTypeId__SATELLITE mixins maps$MapTypeId {}
declare class maps$MapTypeId__TERRAIN mixins maps$MapTypeId {}



/**
 * *** Controls ****
 * Options for the rendering of the map type control.
 */
declare export interface maps$MapTypeControlOptions {

/**
 * IDs of map types to show in the control.
 */
mapTypeIds?: (maps$MapTypeId | string)[],

/**
 * Position id. Used to specify the position of the control on the map.
 * The default position is TOP_RIGHT.
 */
position?: maps$ControlPosition,

/**
 * Style id. Used to select what style of map type control to display.
 */
style?: maps$MapTypeControlStyle
} 

declare export  class maps$MapTypeControlStyle {
  constructor(...args: empty): mixed;
static +DEFAULT: Class<maps$MapTypeControlStyle__DEFAULT> & maps$MapTypeControlStyle__DEFAULT & 0;// 0
static +DROPDOWN_MENU: Class<maps$MapTypeControlStyle__DROPDOWN_MENU> & maps$MapTypeControlStyle__DROPDOWN_MENU & 1;// 1
static +HORIZONTAL_BAR: Class<maps$MapTypeControlStyle__HORIZONTAL_BAR> & maps$MapTypeControlStyle__HORIZONTAL_BAR & 2;// 2

}

declare class maps$MapTypeControlStyle__DEFAULT mixins maps$MapTypeControlStyle {}
declare class maps$MapTypeControlStyle__DROPDOWN_MENU mixins maps$MapTypeControlStyle {}
declare class maps$MapTypeControlStyle__HORIZONTAL_BAR mixins maps$MapTypeControlStyle {}


declare export interface maps$OverviewMapControlOptions {
opened?: boolean
} 

declare export type maps$GestureHandlingOptions = "cooperative" | "greedy" | "none" | "auto";


/**
 * Options for the rendering of the pan control.
 */
declare export interface maps$PanControlOptions {

/**
 * Position id. Used to specify the position of the control on the map.
 * The default position is TOP_LEFT.
 */
position?: maps$ControlPosition
} 


/**
 * Options for the rendering of the rotate control.
 */
declare export interface maps$RotateControlOptions {

/**
 * Position id. Used to specify the position of the control on the map.
 * The default position is TOP_LEFT.
 */
position?: maps$ControlPosition
} 


/**
 * Options for the rendering of the scale control.
 */
declare export interface maps$ScaleControlOptions {

/**
 * Style id. Used to select what style of scale control to display.
 */
style?: maps$ScaleControlStyle
} 

declare export  class maps$ScaleControlStyle {
  constructor(...args: empty): mixed;
static +DEFAULT: Class<maps$ScaleControlStyle__DEFAULT> & maps$ScaleControlStyle__DEFAULT & 0;// 0

}

declare class maps$ScaleControlStyle__DEFAULT mixins maps$ScaleControlStyle {}



/**
 * Options for the rendering of the Street View pegman control on the map.
 */
declare export interface maps$StreetViewControlOptions {

/**
 * Position id. Used to specify the position of the control on the map. The
 * default position is embedded within the navigation (zoom and pan)
 * controls. If this position is empty or the same as that specified in the
 * zoomControlOptions or panControlOptions, the Street View control will be
 * displayed as part of the navigation controls. Otherwise, it will be
 * displayed separately.
 */
position?: maps$ControlPosition
} 


/**
 * Options for the rendering of the zoom control.
 */
declare export interface maps$ZoomControlOptions {

/**
 * Position id. Used to specify the position of the control on the map.
 * The default position is TOP_LEFT.
 */
position?: maps$ControlPosition,
style?: maps$ZoomControlStyle
} 

declare export  class maps$ZoomControlStyle {
  constructor(...args: empty): mixed;
static +DEFAULT: Class<maps$ZoomControlStyle__DEFAULT> & maps$ZoomControlStyle__DEFAULT & 0;// 0
static +LARGE: Class<maps$ZoomControlStyle__LARGE> & maps$ZoomControlStyle__LARGE & 1;// 1
static +SMALL: Class<maps$ZoomControlStyle__SMALL> & maps$ZoomControlStyle__SMALL & 2;// 2

}

declare class maps$ZoomControlStyle__DEFAULT mixins maps$ZoomControlStyle {}
declare class maps$ZoomControlStyle__LARGE mixins maps$ZoomControlStyle {}
declare class maps$ZoomControlStyle__SMALL mixins maps$ZoomControlStyle {}



/**
 * Identifiers used to specify the placement of controls on the map. Controls
 * are positioned relative to other controls in the same layout position.
 * Controls that are added first are positioned closer to the edge of the map.
 */
declare export  class maps$ControlPosition {
  constructor(...args: empty): mixed;
static +BOTTOM_CENTER: Class<maps$ControlPosition__BOTTOM_CENTER> & maps$ControlPosition__BOTTOM_CENTER & 0;// 0
static +BOTTOM_LEFT: Class<maps$ControlPosition__BOTTOM_LEFT> & maps$ControlPosition__BOTTOM_LEFT & 1;// 1
static +BOTTOM_RIGHT: Class<maps$ControlPosition__BOTTOM_RIGHT> & maps$ControlPosition__BOTTOM_RIGHT & 2;// 2
static +LEFT_BOTTOM: Class<maps$ControlPosition__LEFT_BOTTOM> & maps$ControlPosition__LEFT_BOTTOM & 3;// 3
static +LEFT_CENTER: Class<maps$ControlPosition__LEFT_CENTER> & maps$ControlPosition__LEFT_CENTER & 4;// 4
static +LEFT_TOP: Class<maps$ControlPosition__LEFT_TOP> & maps$ControlPosition__LEFT_TOP & 5;// 5
static +RIGHT_BOTTOM: Class<maps$ControlPosition__RIGHT_BOTTOM> & maps$ControlPosition__RIGHT_BOTTOM & 6;// 6
static +RIGHT_CENTER: Class<maps$ControlPosition__RIGHT_CENTER> & maps$ControlPosition__RIGHT_CENTER & 7;// 7
static +RIGHT_TOP: Class<maps$ControlPosition__RIGHT_TOP> & maps$ControlPosition__RIGHT_TOP & 8;// 8
static +TOP_CENTER: Class<maps$ControlPosition__TOP_CENTER> & maps$ControlPosition__TOP_CENTER & 9;// 9
static +TOP_LEFT: Class<maps$ControlPosition__TOP_LEFT> & maps$ControlPosition__TOP_LEFT & 10;// 10
static +TOP_RIGHT: Class<maps$ControlPosition__TOP_RIGHT> & maps$ControlPosition__TOP_RIGHT & 11;// 11

}

declare class maps$ControlPosition__BOTTOM_CENTER mixins maps$ControlPosition {}
declare class maps$ControlPosition__BOTTOM_LEFT mixins maps$ControlPosition {}
declare class maps$ControlPosition__BOTTOM_RIGHT mixins maps$ControlPosition {}
declare class maps$ControlPosition__LEFT_BOTTOM mixins maps$ControlPosition {}
declare class maps$ControlPosition__LEFT_CENTER mixins maps$ControlPosition {}
declare class maps$ControlPosition__LEFT_TOP mixins maps$ControlPosition {}
declare class maps$ControlPosition__RIGHT_BOTTOM mixins maps$ControlPosition {}
declare class maps$ControlPosition__RIGHT_CENTER mixins maps$ControlPosition {}
declare class maps$ControlPosition__RIGHT_TOP mixins maps$ControlPosition {}
declare class maps$ControlPosition__TOP_CENTER mixins maps$ControlPosition {}
declare class maps$ControlPosition__TOP_LEFT mixins maps$ControlPosition {}
declare class maps$ControlPosition__TOP_RIGHT mixins maps$ControlPosition {}


declare type maps$DrawingMode = "Point" | "LineString" | "Polygon";


/**
 * *** Data ****
 */
declare export class maps$Data mixins maps$MVCObject {
constructor(options?: maps$Data.DataOptions): this;
add(feature: maps$Data.Feature | maps$Data.FeatureOptions): maps$Data.Feature;
addGeoJson(geoJson: Object, options?: maps$Data.GeoJsonOptions): maps$Data.Feature[];
contains(feature: maps$Data.Feature): boolean;
forEach(callback: (feature: maps$Data.Feature) => void): void;
getControlPosition(): maps$ControlPosition;
getControls(): maps$DrawingMode[];
getDrawingMode(): maps$DrawingMode | null;
getFeatureById(id: number | string): maps$Data.Feature;
getMap(): maps$Map;
getStyle(): maps$Data.StylingFunction | maps$Data.StyleOptions;
loadGeoJson(
url: string,
options?: maps$Data.GeoJsonOptions,
callback?: (features: maps$Data.Feature[]) => void): void;
overrideStyle(feature: maps$Data.Feature, style: maps$Data.StyleOptions): void;
remove(feature: maps$Data.Feature): void;
revertStyle(feature?: maps$Data.Feature): void;
setControlPosition(controlPosition: maps$ControlPosition): void;
setControls(controls: maps$DrawingMode[] | null): void;
setDrawingMode(drawingMode: maps$DrawingMode | null): void;
setMap(map: maps$Map | null): void;
setStyle(style: maps$Data.StylingFunction | maps$Data.StyleOptions): void;
toGeoJson(callback: (feature: Object) => void): void
}

declare module 'Data' {
        declare export interface DataOptions {
controlPosition?: maps$ControlPosition,
controls?: maps$DrawingMode[] | null,
drawingMode?: maps$DrawingMode | null,
featureFactory?: (maps$geometry: maps$Data.Geometry) => maps$Data.Feature,
map?: maps$Map,
style?: maps$Data.StylingFunction | maps$Data.StyleOptions
} 
	declare export interface GeoJsonOptions {
idPropertyName?: string
} 
	declare export interface StyleOptions {
clickable?: boolean,
cursor?: string,
draggable?: boolean,
editable?: boolean,
fillColor?: string,
fillOpacity?: number,
icon?: string | maps$Icon | maps$Symbol,
shape?: maps$MarkerShape,
strokeColor?: string,
strokeOpacity?: number,
strokeWeight?: number,
title?: string,
visible?: boolean,
zIndex?: number
} 
	declare export type StylingFunction = (feature: maps$Data.Feature) => maps$Data.StyleOptions;
	declare export class Feature  {
constructor(options?: maps$Data.FeatureOptions): this;
forEachProperty(callback: (value: any, name: string) => void): void;
getGeometry(): maps$Data.Geometry;
getId(): number | string;
getProperty(name: string): any;
removeProperty(name: string): void;
setGeometry(newGeometry: maps$Data.Geometry | maps$LatLng | maps$LatLngLiteral): void;
setProperty(name: string, newValue: any): void;
toGeoJson(callback: (feature: Object) => void): void
}
	declare export interface FeatureOptions {
maps$geometry?: maps$Data.Geometry | maps$LatLng | maps$LatLngLiteral,
id?: number | string,
properties?: Object
} 
	declare export class Geometry  {
getType(): string;
forEachLatLng(callback: (latLng: maps$LatLng) => void): void
}
	declare export class Point mixins Data.Geometry {
constructor(latLng: maps$LatLng | maps$LatLngLiteral): this;
get(): maps$LatLng
}
	declare export class MultiPoint mixins Data.Geometry {
constructor(elements: (maps$LatLng | maps$LatLngLiteral)[]): this;
getArray(): maps$LatLng[];
getAt(n: number): maps$LatLng;
getLength(): number
}
	declare export class LineString mixins Data.Geometry {
constructor(elements: (maps$LatLng | maps$LatLngLiteral)[]): this;
getArray(): maps$LatLng[];
getAt(n: number): maps$LatLng;
getLength(): number
}
	declare export class MultiLineString mixins Data.Geometry {
constructor(elements: (maps$Data.LineString | (maps$LatLng | maps$LatLngLiteral)[])[]): this;
getArray(): maps$Data.LineString[];
getAt(n: number): maps$Data.LineString;
getLength(): number
}
	declare export class LinearRing mixins Data.Geometry {
constructor(elements: (maps$LatLng | maps$LatLngLiteral)[]): this;
getArray(): maps$LatLng[];
getAt(n: number): maps$LatLng;
getLength(): number
}
	declare export class Polygon mixins Data.Geometry {
constructor(elements: (maps$Data.LinearRing | (maps$LatLng | maps$LatLngLiteral)[])[]): this;
getArray(): maps$Data.LinearRing[];
getAt(n: number): maps$Data.LinearRing;
getLength(): number
}
	declare export class MultiPolygon mixins Data.Geometry {
constructor(elements: (maps$Data.maps$Polygon | (LinearRing | (maps$LatLng | maps$LatLngLiteral)[])[])[]): this;
getArray(): maps$Data.maps$Polygon[];
getAt(n: number): maps$Data.maps$Polygon;
getLength(): number
}
	declare export class GeometryCollection mixins Data.Geometry {
constructor(elements: (maps$Data.Geometry[] | maps$LatLng[] | maps$LatLngLiteral)[]): this;
getArray(): maps$Data.Geometry[];
getAt(n: number): maps$Data.Geometry;
getLength(): number
}
	declare export type MouseEvent = {
feature: maps$Data.Feature
} & undefined.maps$MouseEvent

	declare export interface AddFeatureEvent {
feature: maps$Data.Feature
} 
	declare export interface RemoveFeatureEvent {
feature: maps$Data.Feature
} 
	declare export interface SetGeometryEvent {
feature: maps$Data.Feature,
newGeometry: maps$Data.Geometry,
oldGeometry: maps$Data.Geometry
} 
	declare export interface SetPropertyEvent {
feature: maps$Data.Feature,
name: string,
newValue: any,
oldValue: any
} 
	declare export interface RemovePropertyEvent {
feature: maps$Data.Feature,
name: string,
oldValue: any
} 
    }



/**
 * *** Overlays ****
 */
declare export class maps$Marker mixins maps$MVCObject {
static MAX_ZINDEX: number;
constructor(opts?: maps$MarkerOptions): this;
getAnimation(): maps$Animation;
getAttribution(): maps$Attribution;
getClickable(): boolean;
getCursor(): string;
getDraggable(): boolean;
getIcon(): string | maps$Icon | maps$Symbol;
getLabel(): maps$MarkerLabel;
getMap(): maps$Map | maps$StreetViewPanorama;
getOpacity(): number;
getPlace(): maps$Place;
getPosition(): maps$LatLng;
getShape(): maps$MarkerShape;
getTitle(): string;
getVisible(): boolean;
getZIndex(): number;
setAnimation(animation: maps$Animation | null): void;
setAttribution(attribution: maps$Attribution): void;
setClickable(flag: boolean): void;
setCursor(cursor: string): void;
setDraggable(flag: boolean): void;
setIcon(icon: string | maps$Icon | maps$Symbol): void;
setLabel(label: string | maps$MarkerLabel): void;
setMap(map: maps$Map | maps$StreetViewPanorama | null): void;
setOpacity(opacity: number): void;
setOptions(options: maps$MarkerOptions): void;
setPlace(place: maps$Place): void;
setPosition(latlng: maps$LatLng | maps$LatLngLiteral): void;
setShape(shape: maps$MarkerShape): void;
setTitle(title: string): void;
setVisible(visible: boolean): void;
setZIndex(zIndex: number): void
}

declare export interface maps$MarkerOptions {

/**
 * The offset from the marker's position to the tip of an InfoWindow
 * that has been opened with the marker as anchor.
 */
anchorPoint?: maps$Point,

/**
 * Which animation to play when marker is added to a map.
 */
animation?: maps$Animation,

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
 * If a string is provided, it is treated as though it were an Icon with the
 * string as url.
 * @type {(string | maps$Icon | maps$Symbol)}
 */
icon?: string | maps$Icon | maps$Symbol,

/**
 * Adds a label to the marker. The label can either be a string, or a
 * MarkerLabel object. Only the first character of the string will be
 * displayed.
 * @type {(string | maps$MarkerLabel)}
 */
label?: string | maps$MarkerLabel,

/**
 * Map on which to display Marker.
 * @type {(maps$Map | maps$StreetViewPanorama)}
 */
map?: maps$Map | maps$StreetViewPanorama,

/**
 * The marker's opacity between 0.0 and 1.0.
 */
opacity?: number,

/**
 * Optimization renders many markers as a single static element.
 * Optimized rendering is enabled by default.
 * Disable optimized rendering for animated GIFs or PNGs, or when each
 * marker must be rendered as a separate DOM element (advanced usage
 * only).
 */
optimized?: boolean,

/**
 * Place information, used to identify and describe the place
 * associated with this Marker. In this context, 'place' means a
 * business, point of interest or geographic location. To allow a user
 * to save this place, open an info window anchored on this marker.
 * The info window will contain information about the place and an
 * option for the user to save it. Only one of position or place can
 * be specified.
 */
place?: maps$Place,

/**
 * Marker position. Required.
 */
position: maps$LatLng | maps$LatLngLiteral,

/**
 * Image map region definition used for drag/click.
 */
shape?: maps$MarkerShape,

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
 * By default, markers are displayed according to their vertical position on
 * screen, with lower markers appearing in front of markers further up the
 * screen.
 */
zIndex?: number
} 

declare export interface maps$Icon {

/**
 * The position at which to anchor an image in correspondence to the
 * location of the marker on the map. By default, the anchor is
 * located along the center point of the bottom of the image.
 */
anchor?: maps$Point,

/**
 * The origin of the label relative to the top-left corner of the icon
 * image, if a label is supplied by the marker. By default, the origin
 * is located in the center point of the image.
 */
labelOrigin?: maps$Point,

/**
 * The position of the image within a sprite, if any. By default, the
 * origin is located at the top left corner of the image (0, 0).
 */
origin?: maps$Point,

/**
 * The size of the entire image after scaling, if any. Use this
 * property to stretch/ shrink an image or a sprite.
 */
scaledSize?: maps$Size,

/**
 * The display size of the sprite or image. When using sprites, you
 * must specify the sprite size. If the size is not provided, it will
 * be set when the image loads.
 */
size?: maps$Size,

/**
 * The URL of the image or sprite sheet.
 */
url?: string
} 

declare export interface maps$MarkerLabel {

/**
 * The color of the label text. Default color is black.
 */
color?: string,

/**
 * The font family of the label text (equivalent to the CSS font-family
 * property).
 */
fontFamily?: string,

/**
 * The font size of the label text (equivalent to the CSS font-size
 * property). Default size is 14px.
 */
fontSize?: string,

/**
 * The font weight of the label text (equivalent to the CSS font-weight
 * property).
 */
fontWeight?: string,

/**
 * The text to be displayed in the label. Only the first character of this
 * string will be shown.
 */
text?: string
} 

declare export interface maps$MarkerShape {
coords?: number[],
type?: string
} 

declare export interface maps$Symbol {

/**
 * The position of the symbol relative to the marker or polyline.
 * The coordinates of the symbol's path are translated left and up by the
 * anchor's x and y coordinates respectively. By default, a symbol is
 * anchored at (0, 0). The position is expressed in the same coordinate
 * system as the symbol's path.
 */
anchor?: maps$Point,

/**
 * The symbol's fill color.
 * All CSS3 colors are supported except for extended named colors. For
 * symbol markers, this defaults to 'black'. For symbols on polylines, this
 * defaults to the stroke color of the corresponding polyline.
 */
fillColor?: string,

/**
 * The symbol's fill opacity.
 * @default 0
 */
fillOpacity?: number,

/**
 * The symbol's path, which is a built-in symbol path, or a custom path
 * expressed using SVG path notation. Required.
 * @type {(maps$SymbolPath | string)}
 */
path?: maps$SymbolPath | string,

/**
 * The angle by which to rotate the symbol, expressed clockwise in degrees.
 * Defaults to 0.
 * A symbol in an IconSequence where fixedRotation is false is rotated
 * relative to the angle of the edge on which it lies.
 */
rotation?: number,

/**
 * The amount by which the symbol is scaled in size.
 * For symbol markers, this defaults to 1; after scaling, the symbol may be
 * of any size. For symbols on a polyline, this defaults to the stroke
 * weight of the polyline; after scaling, the symbol must lie inside a
 * square 22 pixels in size centered at the symbol's anchor.
 */
scale?: number,

/**
 * The symbol's stroke color. All CSS3 colors are supported except for
 * extended named colors. For symbol markers, this defaults to 'black'. For
 * symbols on a polyline, this defaults to the stroke color of the polyline.
 */
strokeColor?: string,

/**
 * The symbol's stroke opacity. For symbol markers, this defaults to 1.
 * For symbols on a polyline, this defaults to the stroke opacity of the
 * polyline.
 */
strokeOpacity?: number,

/**
 * The symbol's stroke weight. Defaults to the scale of the symbol.v
 */
strokeWeight?: number
} 


/**
 * Built-in symbol paths.
 */
declare export  class maps$SymbolPath {
  constructor(...args: empty): mixed;
static +BACKWARD_CLOSED_ARROW: Class<maps$SymbolPath__BACKWARD_CLOSED_ARROW> & maps$SymbolPath__BACKWARD_CLOSED_ARROW & 0;// 0
static +BACKWARD_OPEN_ARROW: Class<maps$SymbolPath__BACKWARD_OPEN_ARROW> & maps$SymbolPath__BACKWARD_OPEN_ARROW & 1;// 1
static +CIRCLE: Class<maps$SymbolPath__CIRCLE> & maps$SymbolPath__CIRCLE & 2;// 2
static +FORWARD_CLOSED_ARROW: Class<maps$SymbolPath__FORWARD_CLOSED_ARROW> & maps$SymbolPath__FORWARD_CLOSED_ARROW & 3;// 3
static +FORWARD_OPEN_ARROW: Class<maps$SymbolPath__FORWARD_OPEN_ARROW> & maps$SymbolPath__FORWARD_OPEN_ARROW & 4;// 4

}

declare class maps$SymbolPath__BACKWARD_CLOSED_ARROW mixins maps$SymbolPath {}
declare class maps$SymbolPath__BACKWARD_OPEN_ARROW mixins maps$SymbolPath {}
declare class maps$SymbolPath__CIRCLE mixins maps$SymbolPath {}
declare class maps$SymbolPath__FORWARD_CLOSED_ARROW mixins maps$SymbolPath {}
declare class maps$SymbolPath__FORWARD_OPEN_ARROW mixins maps$SymbolPath {}


declare export  class maps$Animation {
  constructor(...args: empty): mixed;
static +BOUNCE: Class<maps$Animation__BOUNCE> & maps$Animation__BOUNCE & 0;// 0
static +DROP: Class<maps$Animation__DROP> & maps$Animation__DROP & 1;// 1

}

declare class maps$Animation__BOUNCE mixins maps$Animation {}
declare class maps$Animation__DROP mixins maps$Animation {}



/**
 * An overlay that looks like a bubble and is often connected to a marker.
 * This class extends MVCObject.
 */
declare export class maps$InfoWindow mixins maps$MVCObject {

/**
 * Creates an info window with the given options. An InfoWindow can be
 * placed on a map at a particular position or above a marker,
 * depending on what is specified in the options. Unless auto-pan is
 * disabled, an InfoWindow will pan the map to make itself visible
 * when it is opened. After constructing an InfoWindow, you must call
 * open to display it on the map. The user can click the close button
 * on the InfoWindow to remove it from the map, or the developer can
 * call close() for the same effect.
 */
constructor(opts?: maps$InfoWindowOptions): this;

/**
 * Closes this InfoWindow by removing it from the DOM structure.
 */
close(): void;
getContent(): string | Element;
getPosition(): maps$LatLng;
getZIndex(): number;

/**
 * Opens this InfoWindow on the given map. Optionally, an InfoWindow can be
 * associated with an anchor. In the core API, the only anchor is the Marker
 * class. However, an anchor can be any MVCObject that exposes a LatLng
 * position property and optionally a Point anchorPoint property for
 * calculating the pixelOffset (see InfoWindowOptions). The anchorPoint is
 * the offset from the anchor's position to the tip of the InfoWindow.
 */
open(map?: maps$Map | maps$StreetViewPanorama, anchor?: maps$MVCObject): void;
setContent(content: string | Node): void;
setOptions(options: maps$InfoWindowOptions): void;
setPosition(position: maps$LatLng | maps$LatLngLiteral): void;
setZIndex(zIndex: number): void
}

declare export interface maps$InfoWindowOptions {

/**
 * Content to display in the InfoWindow. This can be an HTML element, a
 * plain-text string, or a string containing HTML. The InfoWindow will be
 * sized according to the content. To set an explicit size for the content,
 * set content to be a HTML element with that size.
 * @type {(string | Node)}
 */
content?: string | Node,

/**
 * Disable auto-pan on open. By default, the info window will pan the map so
 * that it is fully visible when it opens.
 */
disableAutoPan?: boolean,

/**
 * Maximum width of the infowindow, regardless of content's width.
 * This value is only considered if it is set before a call to open.
 * To change the maximum width when changing content, call close,
 * setOptions, and then open.
 */
maxWidth?: number,

/**
 * The offset, in pixels, of the tip of the info window from the point on
 * the map at whose geographical coordinates the info window is anchored. If
 * an InfoWindow is opened with an anchor, the pixelOffset will be
 * calculated from the anchor's anchorPoint property.
 */
pixelOffset?: maps$Size,

/**
 * The LatLng at which to display this InfoWindow. If the InfoWindow is
 * opened with an anchor, the anchor's position will be used instead.
 */
position?: maps$LatLng | maps$LatLngLiteral,

/**
 * All InfoWindows are displayed on the map in order of their zIndex,
 * with higher values displaying in front of InfoWindows with lower values.
 * By default, InfoWindows are displayed according to their latitude,
 * with InfoWindows of lower latitudes appearing in front of InfoWindows at
 * higher latitudes. InfoWindows are always displayed in front of markers.
 */
zIndex?: number
} 

declare export class maps$Polyline mixins maps$MVCObject {
constructor(opts?: maps$PolylineOptions): this;
getDraggable(): boolean;
getEditable(): boolean;
getMap(): maps$Map;
getPath(): maps$MVCArray<maps$LatLng>;
getVisible(): boolean;
setDraggable(draggable: boolean): void;
setEditable(editable: boolean): void;
setMap(map: maps$Map | null): void;
setOptions(options: maps$PolylineOptions): void;
setPath(path: maps$MVCArray<maps$LatLng> | maps$LatLng[] | maps$LatLngLiteral[]): void;
setVisible(visible: boolean): void
}

declare export interface maps$PolylineOptions {

/**
 * Indicates whether this Polyline handles mouse events. Defaults to true.
 */
clickable?: boolean,

/**
 * If set to true, the user can drag this shape over the map.
 * The geodesic property defines the mode of dragging. Defaults to false.
 */
draggable?: boolean,

/**
 * If set to true, the user can edit this shape by dragging the control
 * points shown at the vertices and on each segment. Defaults to false.
 */
editable?: boolean,

/**
 * When true, edges of the polygon are interpreted as geodesic and will
 * follow the curvature of the Earth. When false, edges of the polygon are
 * rendered as straight lines in screen space. Note that the shape of a
 * geodesic polygon may appear to change when dragged, as the dimensions are
 * maintained relative to the surface of the earth. Defaults to false.
 */
geodesic?: boolean,

/**
 * The icons to be rendered along the polyline.
 */
icons?: maps$IconSequence[],

/**
 * Map on which to display Polyline.
 */
map?: maps$Map,

/**
 * The ordered sequence of coordinates of the Polyline.
 * This path may be specified using either a simple array of LatLngs, or an
 * MVCArray of LatLngs. Note that if you pass a simple array, it will be
 * converted to an MVCArray Inserting or removing LatLngs in the MVCArray
 * will automatically update the polyline on the map.
 */
path?: maps$MVCArray<maps$LatLng> | maps$LatLng[] | maps$LatLngLiteral[],

/**
 * The stroke color. All CSS3 colors are supported except for extended
 * named colors.
 */
strokeColor?: string,

/**
 * The stroke opacity between 0.0 and 1.0.
 */
strokeOpacity?: number,

/**
 * The stroke width in pixels.
 */
strokeWeight?: number,

/**
 * Whether this polyline is visible on the map. Defaults to true.
 */
visible?: boolean,

/**
 * The zIndex compared to other polys.
 */
zIndex?: number
} 

declare export interface maps$IconSequence {
fixedRotation?: boolean,
icon?: maps$Symbol,
offset?: string,
repeat?: string
} 

declare export class maps$Polygon mixins maps$MVCObject {
constructor(opts?: maps$PolygonOptions): this;
getDraggable(): boolean;
getEditable(): boolean;
getMap(): maps$Map;

/**
 * Retrieves the first path.
 */
getPath(): maps$MVCArray<maps$LatLng>;

/**
 * Retrieves the paths for this polygon.
 */
getPaths(): maps$MVCArray<maps$MVCArray<maps$LatLng>>;
getVisible(): boolean;
setDraggable(draggable: boolean): void;
setEditable(editable: boolean): void;
setMap(map: maps$Map | null): void;
setOptions(options: maps$PolygonOptions): void;
setPath(path: maps$MVCArray<maps$LatLng> | maps$LatLng[] | maps$LatLngLiteral[]): void;
setPaths(
paths: maps$MVCArray<maps$MVCArray<maps$LatLng>>
| maps$MVCArray<maps$LatLng>
| maps$LatLng[][]
| maps$LatLngLiteral[][]
| maps$LatLng[]
| maps$LatLngLiteral[]): void;
setVisible(visible: boolean): void
}

declare export interface maps$PolygonOptions {

/**
 * Indicates whether this Polygon handles mouse events. Defaults to true.
 */
clickable?: boolean,

/**
 * If set to true, the user can drag this shape over the map.
 * The geodesic property defines the mode of dragging. Defaults to false.
 */
draggable?: boolean,

/**
 * If set to true, the user can edit this shape by dragging the control
 * points shown at the vertices and on each segment. Defaults to false.
 */
editable?: boolean,

/**
 * The fill color. All CSS3 colors are supported except for extended named
 * colors.
 */
fillColor?: string,

/**
 * The fill opacity between 0.0 and 1.0
 */
fillOpacity?: number,

/**
 * When true, edges of the polygon are interpreted as geodesic and will
 * follow the curvature of the Earth. When false, edges of the polygon are
 * rendered as straight lines in screen space. Note that the shape of a
 * geodesic polygon may appear to change when dragged, as the dimensions are
 * maintained relative to the surface of the earth. Defaults to false.
 */
geodesic?: boolean,

/**
 * Map on which to display Polygon.
 */
map?: maps$Map,

/**
 * The ordered sequence of coordinates that designates a closed loop. Unlike
 * polylines, a polygon may consist of one or more paths. As a result, the
 * paths property may specify one or more arrays of LatLng coordinates.
 * Paths are closed automatically; do not repeat the first vertex of the
 * path as the last vertex. Simple polygons may be defined using a single
 * array of LatLngs. More complex polygons may specify an array of arrays.
 * Any simple arrays are converted into MVCArrays. Inserting or removing
 * LatLngs from the MVCArray will automatically update the polygon on the
 * map.
 */
paths?: maps$MVCArray<maps$MVCArray<maps$LatLng>>
| maps$MVCArray<maps$LatLng>
| maps$LatLng[][]
| maps$LatLngLiteral[][]
| maps$LatLng[]
| maps$LatLngLiteral[],

/**
 * The stroke color.
 * All CSS3 colors are supported except for extended named colors.
 */
strokeColor?: string,

/**
 * The stroke opacity between 0.0 and 1.0
 */
strokeOpacity?: number,

/**
 * The stroke position. Defaults to CENTER.
 * This property is not supported on Internet Explorer 8 and earlier.
 */
strokePosition?: maps$StrokePosition,

/**
 * The stroke width in pixels.
 */
strokeWeight?: number,

/**
 * Whether this polygon is visible on the map. Defaults to true.
 */
visible?: boolean,

/**
 * The zIndex compared to other polys.
 */
zIndex?: number
} 

declare export type maps$PolyMouseEvent = {
edge?: number,
path?: number,
vertex?: number
} & maps$MouseEvent


declare export class maps$Rectangle mixins maps$MVCObject {
constructor(opts?: maps$RectangleOptions): this;
getBounds(): maps$LatLngBounds;
getDraggable(): boolean;
getEditable(): boolean;
getMap(): maps$Map;
getVisible(): boolean;
setBounds(bounds: maps$LatLngBounds | maps$LatLngBoundsLiteral): void;
setDraggable(draggable: boolean): void;
setEditable(editable: boolean): void;
setMap(map: maps$Map | null): void;
setOptions(options: maps$RectangleOptions): void;
setVisible(visible: boolean): void
}

declare export interface maps$RectangleOptions {
bounds?: maps$LatLngBounds | maps$LatLngBoundsLiteral,
clickable?: boolean,
draggable?: boolean,
editable?: boolean,
fillColor?: string,
fillOpacity?: number,
map?: maps$Map,
strokeColor?: string,
strokeOpacity?: number,
strokePosition?: maps$StrokePosition,
strokeWeight?: number,
visible?: boolean,
zIndex?: number
} 


/**
 * A circle on the Earth's surface; also known as a "spherical cap".
 */
declare export class maps$Circle mixins maps$MVCObject {

/**
 * Create a circle using the passed CircleOptions, which specify the
 * center, radius, and style.
 */
constructor(opts?: maps$CircleOptions): this;

/**
 * Gets the LatLngBounds of this Circle.
 */
getBounds(): maps$LatLngBounds;

/**
 * Returns the center of this circle.
 */
getCenter(): maps$LatLng;

/**
 * Returns whether this circle can be dragged by the user.
 */
getDraggable(): boolean;

/**
 * Returns whether this circle can be edited by the user.
 */
getEditable(): boolean;

/**
 * Returns the map on which this circle is displayed.
 */
getMap(): maps$Map;

/**
 * Returns the radius of this circle (in meters).
 */
getRadius(): number;

/**
 * Returns whether this circle is visible on the map.
 */
getVisible(): boolean;

/**
 * Sets the center of this circle.
 */
setCenter(center: maps$LatLng | maps$LatLngLiteral): void;

/**
 * If set to true, the user can drag this circle over the map.
 */
setDraggable(draggable: boolean): void;

/**
 * If set to true, the user can edit this circle by dragging the control
 * points shown at the center and around the circumference of the circle.
 */
setEditable(editable: boolean): void;

/**
 * Renders the circle on the specified map. If map is set to null, the
 * circle will be removed.
 */
setMap(map: maps$Map | null): void;
setOptions(options: maps$CircleOptions): void;

/**
 * Sets the radius of this circle (in meters).
 */
setRadius(radius: number): void;

/**
 * Hides this circle if set to false.
 */
setVisible(visible: boolean): void
}

declare export interface maps$CircleOptions {

/**
 * The center
 */
center?: maps$LatLng | maps$LatLngLiteral,

/**
 * Indicates whether this Circle handles mouse events. Defaults to true.
 */
clickable?: boolean,

/**
 * If set to true, the user can drag this circle over the map. Defaults to
 * false.
 */
draggable?: boolean,

/**
 * If set to true, the user can edit this circle by dragging the control
 * points shown at the center and around the circumference of the circle.
 * Defaults to false.
 */
editable?: boolean,

/**
 * The fill color. All CSS3 colors are supported except for extended named
 * colors.
 */
fillColor?: string,

/**
 * The fill opacity between 0.0 and 1.0
 */
fillOpacity?: number,

/**
 * Map on which to display Circle.
 */
map?: maps$Map,

/**
 * The radius in meters on the Earth's surface
 */
radius?: number,

/**
 * The stroke color. All CSS3 colors are supported except for extended
 * named colors.
 */
strokeColor?: string,

/**
 * The stroke opacity between 0.0 and 1.0
 */
strokeOpacity?: number,

/**
 * The stroke position. Defaults to CENTER. This property is not supported
 * on Internet Explorer 8 and earlier.
 */
strokePosition?: maps$StrokePosition,

/**
 * The stroke width in pixels.
 */
strokeWeight?: number,

/**
 * Whether this circle is visible on the map. Defaults to true.
 */
visible?: boolean,

/**
 * The zIndex compared to other polys.
 */
zIndex?: number
} 

declare export type maps$CircleLiteral = {

/**
 * The center of the Circle.
 */
center?: maps$LatLng | maps$LatLngLiteral,

/**
 * The radius in meters on the Earth's surface.
 */
radius?: number
} & maps$CircleOptions



/**
 * The possible positions of the stroke on a polygon.
 */
declare export  class maps$StrokePosition {
  constructor(...args: empty): mixed;
static +CENTER: Class<maps$StrokePosition__CENTER> & maps$StrokePosition__CENTER & 0;// 0
static +INSIDE: Class<maps$StrokePosition__INSIDE> & maps$StrokePosition__INSIDE & 1;// 1
static +OUTSIDE: Class<maps$StrokePosition__OUTSIDE> & maps$StrokePosition__OUTSIDE & 2;// 2

}

declare class maps$StrokePosition__CENTER mixins maps$StrokePosition {}
declare class maps$StrokePosition__INSIDE mixins maps$StrokePosition {}
declare class maps$StrokePosition__OUTSIDE mixins maps$StrokePosition {}


declare export class maps$GroundOverlay mixins maps$MVCObject {
constructor(url: string, bounds: maps$LatLngBounds | maps$LatLngBoundsLiteral, opts?: maps$GroundOverlayOptions): this;
getBounds(): maps$LatLngBounds;
getMap(): maps$Map;
getOpacity(): number;
getUrl(): string;
setMap(map: maps$Map | null): void;
setOpacity(opacity: number): void
}

declare export interface maps$GroundOverlayOptions {
clickable?: boolean,
map?: maps$Map,
opacity?: number
} 

declare export class maps$OverlayView mixins maps$MVCObject {
draw(): void;
getMap(): maps$Map | maps$StreetViewPanorama;
getPanes(): maps$MapPanes;
getProjection(): maps$MapCanvasProjection;
onAdd(): void;
onRemove(): void;
setMap(map: maps$Map | maps$StreetViewPanorama | null): void
}

declare export interface maps$MapPanes {
floatPane: Element,
floatShadow: Element,
mapPane: Element,
markerLayer: Element,
overlayImage: Element,
overlayLayer: Element,
overlayMouseTarget: Element,
overlayShadow: Element
} 

declare export class maps$MapCanvasProjection mixins maps$MVCObject {
fromContainerPixelToLatLng(pixel: maps$Point, nowrap?: boolean): maps$LatLng;
fromDivPixelToLatLng(pixel: maps$Point, nowrap?: boolean): maps$LatLng;
fromLatLngToContainerPixel(latLng: maps$LatLng): maps$Point;
fromLatLngToDivPixel(latLng: maps$LatLng): maps$Point;
getWorldWidth(): number
}


/**
 * *** Services ****
 */
declare export class maps$Geocoder  {
geocode(
request: maps$GeocoderRequest,
callback: (results: maps$GeocoderResult[], status: maps$GeocoderStatus) => void): void
}

declare export interface maps$GeocoderRequest {
address?: string,
bounds?: maps$LatLngBounds | maps$LatLngBoundsLiteral,
componentRestrictions?: maps$GeocoderComponentRestrictions,
location?: maps$LatLng | maps$LatLngLiteral,
placeId?: string,
region?: string
} 

declare export interface maps$GeocoderComponentRestrictions {
administrativeArea?: string,
country?: string | string[],
locality?: string,
postalCode?: string,
route?: string
} 

declare export  class maps$GeocoderStatus {
  constructor(...args: empty): mixed;
static +ERROR: Class<maps$GeocoderStatus__ERROR> & maps$GeocoderStatus__ERROR & 0;// 0
static +INVALID_REQUEST: Class<maps$GeocoderStatus__INVALID_REQUEST> & maps$GeocoderStatus__INVALID_REQUEST & 1;// 1
static +OK: Class<maps$GeocoderStatus__OK> & maps$GeocoderStatus__OK & 2;// 2
static +OVER_QUERY_LIMIT: Class<maps$GeocoderStatus__OVER_QUERY_LIMIT> & maps$GeocoderStatus__OVER_QUERY_LIMIT & 3;// 3
static +REQUEST_DENIED: Class<maps$GeocoderStatus__REQUEST_DENIED> & maps$GeocoderStatus__REQUEST_DENIED & 4;// 4
static +UNKNOWN_ERROR: Class<maps$GeocoderStatus__UNKNOWN_ERROR> & maps$GeocoderStatus__UNKNOWN_ERROR & 5;// 5
static +ZERO_RESULTS: Class<maps$GeocoderStatus__ZERO_RESULTS> & maps$GeocoderStatus__ZERO_RESULTS & 6;// 6

}

declare class maps$GeocoderStatus__ERROR mixins maps$GeocoderStatus {}
declare class maps$GeocoderStatus__INVALID_REQUEST mixins maps$GeocoderStatus {}
declare class maps$GeocoderStatus__OK mixins maps$GeocoderStatus {}
declare class maps$GeocoderStatus__OVER_QUERY_LIMIT mixins maps$GeocoderStatus {}
declare class maps$GeocoderStatus__REQUEST_DENIED mixins maps$GeocoderStatus {}
declare class maps$GeocoderStatus__UNKNOWN_ERROR mixins maps$GeocoderStatus {}
declare class maps$GeocoderStatus__ZERO_RESULTS mixins maps$GeocoderStatus {}


declare export interface maps$GeocoderResult {
address_components: maps$GeocoderAddressComponent[],
formatted_address: string,
maps$geometry: maps$GeocoderGeometry,
partial_match: boolean,
place_id: string,
postcode_localities: string[],
types: string[]
} 

declare export interface maps$GeocoderAddressComponent {
long_name: string,
short_name: string,
types: string[]
} 

declare export interface maps$GeocoderGeometry {
bounds: maps$LatLngBounds,
location: maps$LatLng,
location_type: maps$GeocoderLocationType,
viewport: maps$LatLngBounds
} 

declare export  class maps$GeocoderLocationType {
  constructor(...args: empty): mixed;
static +APPROXIMATE: Class<maps$GeocoderLocationType__APPROXIMATE> & maps$GeocoderLocationType__APPROXIMATE & 0;// 0
static +GEOMETRIC_CENTER: Class<maps$GeocoderLocationType__GEOMETRIC_CENTER> & maps$GeocoderLocationType__GEOMETRIC_CENTER & 1;// 1
static +RANGE_INTERPOLATED: Class<maps$GeocoderLocationType__RANGE_INTERPOLATED> & maps$GeocoderLocationType__RANGE_INTERPOLATED & 2;// 2
static +ROOFTOP: Class<maps$GeocoderLocationType__ROOFTOP> & maps$GeocoderLocationType__ROOFTOP & 3;// 3

}

declare class maps$GeocoderLocationType__APPROXIMATE mixins maps$GeocoderLocationType {}
declare class maps$GeocoderLocationType__GEOMETRIC_CENTER mixins maps$GeocoderLocationType {}
declare class maps$GeocoderLocationType__RANGE_INTERPOLATED mixins maps$GeocoderLocationType {}
declare class maps$GeocoderLocationType__ROOFTOP mixins maps$GeocoderLocationType {}


declare export class maps$DirectionsRenderer mixins maps$MVCObject {
constructor(opts?: maps$DirectionsRendererOptions): this;
getDirections(): maps$DirectionsResult;
getMap(): maps$Map;
getPanel(): Element;
getRouteIndex(): number;
setDirections(directions: maps$DirectionsResult): void;
setMap(map: maps$Map | null): void;
setOptions(options: maps$DirectionsRendererOptions): void;
setPanel(panel: Element): void;
setRouteIndex(routeIndex: number): void
}

declare export interface maps$DirectionsRendererOptions {
directions?: maps$DirectionsResult,
draggable?: boolean,
hideRouteList?: boolean,
infoWindow?: maps$InfoWindow,
map?: maps$Map,
markerOptions?: maps$MarkerOptions,
panel?: Element,
polylineOptions?: maps$PolylineOptions,
preserveViewport?: boolean,
routeIndex?: number,
suppressBicyclingLayer?: boolean,
suppressInfoWindows?: boolean,
suppressMarkers?: boolean,
suppressPolylines?: boolean
} 

declare export class maps$DirectionsService  {
route(
request: maps$DirectionsRequest,
callback: (result: maps$DirectionsResult, status: maps$DirectionsStatus) => void): void
}


/**
 * A directions query to be sent to the DirectionsService.
 */
declare export interface maps$DirectionsRequest {

/**
 * If true, instructs the Directions service to avoid ferries where
 * possible. Optional.
 */
avoidFerries?: boolean,

/**
 * If true, instructs the Directions service to avoid highways where
 * possible. Optional.
 */
avoidHighways?: boolean,

/**
 * If true, instructs the Directions service to avoid toll roads where
 * possible. Optional.
 */
avoidTolls?: boolean,

/**
 * Location of destination. This can be specified as either a string to be
 * geocoded, or a LatLng, or a Place. Required.
 */
destination?: string | maps$LatLng | maps$LatLngLiteral | maps$Place,

/**
 * Deprecated. Use drivingOptions field instead
 */
durationInTraffic?: boolean,

/**
 * Settings that apply only to requests where travelMode is DRIVING. This
 * object will have no effect for other travel modes.
 */
drivingOptions?: maps$DrivingOptions,

/**
 * If set to true, the DirectionService will attempt to re-order the
 * supplied intermediate waypoints to minimize overall cost of the route. If
 * waypoints are optimized, inspect DirectionsRoute.waypoint_order in the
 * response to determine the new ordering.
 */
optimizeWaypoints?: boolean,

/**
 * Location of origin. This can be specified as either a string to be
 * geocoded, or a LatLng, or a Place. Required.
 */
origin?: string | maps$LatLng | maps$LatLngLiteral | maps$Place,

/**
 * Whether or not route alternatives should be provided. Optional.
 */
provideRouteAlternatives?: boolean,

/**
 * Region code used as a bias for geocoding requests. Optional.
 */
region?: string,

/**
 * Settings that apply only to requests where travelMode is TRANSIT. This
 * object will have no effect for other travel modes.
 */
transitOptions?: maps$TransitOptions,

/**
 * Type of routing requested. Required.
 */
travelMode?: maps$TravelMode,

/**
 * Preferred unit system to use when displaying distance. Defaults to the
 * unit system used in the country of origin.
 */
unitSystem?: maps$UnitSystem,

/**
 * Array of intermediate waypoints. Directions will be calculated from the
 * origin to the destination by way of each waypoint in this array. The
 * maximum allowed waypoints is 8, plus the origin, and destination. Premium
 * Plan customers are allowed 23 waypoints, plus the origin, and
 * destination. Waypoints are not supported for transit directions.
 * Optional.
 */
waypoints?: maps$DirectionsWaypoint[]
} 

declare export  class maps$TravelMode {
  constructor(...args: empty): mixed;
static +BICYCLING: Class<maps$TravelMode__BICYCLING> & maps$TravelMode__BICYCLING & 0;// 0
static +DRIVING: Class<maps$TravelMode__DRIVING> & maps$TravelMode__DRIVING & 1;// 1
static +TRANSIT: Class<maps$TravelMode__TRANSIT> & maps$TravelMode__TRANSIT & 2;// 2
static +WALKING: Class<maps$TravelMode__WALKING> & maps$TravelMode__WALKING & 3;// 3

}

declare class maps$TravelMode__BICYCLING mixins maps$TravelMode {}
declare class maps$TravelMode__DRIVING mixins maps$TravelMode {}
declare class maps$TravelMode__TRANSIT mixins maps$TravelMode {}
declare class maps$TravelMode__WALKING mixins maps$TravelMode {}


declare export  class maps$UnitSystem {
  constructor(...args: empty): mixed;
static +IMPERIAL: Class<maps$UnitSystem__IMPERIAL> & maps$UnitSystem__IMPERIAL & 0;// 0
static +METRIC: Class<maps$UnitSystem__METRIC> & maps$UnitSystem__METRIC & 1;// 1

}

declare class maps$UnitSystem__IMPERIAL mixins maps$UnitSystem {}
declare class maps$UnitSystem__METRIC mixins maps$UnitSystem {}


declare export interface maps$TransitOptions {
arrivalTime?: Date,
departureTime?: Date,
modes?: maps$TransitMode[],
routingPreference?: maps$TransitRoutePreference
} 

declare export  class maps$TransitMode {
  constructor(...args: empty): mixed;
static +BUS: Class<maps$TransitMode__BUS> & maps$TransitMode__BUS & 0;// 0
static +RAIL: Class<maps$TransitMode__RAIL> & maps$TransitMode__RAIL & 1;// 1
static +SUBWAY: Class<maps$TransitMode__SUBWAY> & maps$TransitMode__SUBWAY & 2;// 2
static +TRAIN: Class<maps$TransitMode__TRAIN> & maps$TransitMode__TRAIN & 3;// 3
static +TRAM: Class<maps$TransitMode__TRAM> & maps$TransitMode__TRAM & 4;// 4

}

declare class maps$TransitMode__BUS mixins maps$TransitMode {}
declare class maps$TransitMode__RAIL mixins maps$TransitMode {}
declare class maps$TransitMode__SUBWAY mixins maps$TransitMode {}
declare class maps$TransitMode__TRAIN mixins maps$TransitMode {}
declare class maps$TransitMode__TRAM mixins maps$TransitMode {}


declare export  class maps$TransitRoutePreference {
  constructor(...args: empty): mixed;
static +FEWER_TRANSFERS: Class<maps$TransitRoutePreference__FEWER_TRANSFERS> & maps$TransitRoutePreference__FEWER_TRANSFERS & 0;// 0
static +LESS_WALKING: Class<maps$TransitRoutePreference__LESS_WALKING> & maps$TransitRoutePreference__LESS_WALKING & 1;// 1

}

declare class maps$TransitRoutePreference__FEWER_TRANSFERS mixins maps$TransitRoutePreference {}
declare class maps$TransitRoutePreference__LESS_WALKING mixins maps$TransitRoutePreference {}


declare export interface maps$TransitFare {} 

declare export interface maps$DrivingOptions {
departureTime: Date,
trafficModel?: maps$TrafficModel
} 

declare export  class maps$TrafficModel {
  constructor(...args: empty): mixed;
static +BEST_GUESS: Class<maps$TrafficModel__BEST_GUESS> & maps$TrafficModel__BEST_GUESS & 0;// 0
static +OPTIMISTIC: Class<maps$TrafficModel__OPTIMISTIC> & maps$TrafficModel__OPTIMISTIC & 1;// 1
static +PESSIMISTIC: Class<maps$TrafficModel__PESSIMISTIC> & maps$TrafficModel__PESSIMISTIC & 2;// 2

}

declare class maps$TrafficModel__BEST_GUESS mixins maps$TrafficModel {}
declare class maps$TrafficModel__OPTIMISTIC mixins maps$TrafficModel {}
declare class maps$TrafficModel__PESSIMISTIC mixins maps$TrafficModel {}



/**
 * A DirectionsWaypoint represents a location between origin and destination
 * through which the trip should be routed.
 */
declare export interface maps$DirectionsWaypoint {

/**
 * Waypoint location. Can be an address string, a LatLng, or a Place.
 * Optional.
 */
location: maps$LatLng | maps$LatLngLiteral | string,

/**
 * If true, indicates that this waypoint is a stop between the origin and
 * destination. This has the effect of splitting the route into two legs. If
 * false, indicates that the route should be biased to go through this
 * waypoint, but not split into two legs. This is useful if you want to
 * create a route in response to the user dragging waypoints on a map. This
 * value is true by default. Optional.
 */
stopover: boolean
} 

declare export  class maps$DirectionsStatus {
  constructor(...args: empty): mixed;
static +INVALID_REQUEST: Class<maps$DirectionsStatus__INVALID_REQUEST> & maps$DirectionsStatus__INVALID_REQUEST & 0;// 0
static +MAX_WAYPOINTS_EXCEEDED: Class<maps$DirectionsStatus__MAX_WAYPOINTS_EXCEEDED> & maps$DirectionsStatus__MAX_WAYPOINTS_EXCEEDED & 1;// 1
static +NOT_FOUND: Class<maps$DirectionsStatus__NOT_FOUND> & maps$DirectionsStatus__NOT_FOUND & 2;// 2
static +OK: Class<maps$DirectionsStatus__OK> & maps$DirectionsStatus__OK & 3;// 3
static +OVER_QUERY_LIMIT: Class<maps$DirectionsStatus__OVER_QUERY_LIMIT> & maps$DirectionsStatus__OVER_QUERY_LIMIT & 4;// 4
static +REQUEST_DENIED: Class<maps$DirectionsStatus__REQUEST_DENIED> & maps$DirectionsStatus__REQUEST_DENIED & 5;// 5
static +UNKNOWN_ERROR: Class<maps$DirectionsStatus__UNKNOWN_ERROR> & maps$DirectionsStatus__UNKNOWN_ERROR & 6;// 6
static +ZERO_RESULTS: Class<maps$DirectionsStatus__ZERO_RESULTS> & maps$DirectionsStatus__ZERO_RESULTS & 7;// 7

}

declare class maps$DirectionsStatus__INVALID_REQUEST mixins maps$DirectionsStatus {}
declare class maps$DirectionsStatus__MAX_WAYPOINTS_EXCEEDED mixins maps$DirectionsStatus {}
declare class maps$DirectionsStatus__NOT_FOUND mixins maps$DirectionsStatus {}
declare class maps$DirectionsStatus__OK mixins maps$DirectionsStatus {}
declare class maps$DirectionsStatus__OVER_QUERY_LIMIT mixins maps$DirectionsStatus {}
declare class maps$DirectionsStatus__REQUEST_DENIED mixins maps$DirectionsStatus {}
declare class maps$DirectionsStatus__UNKNOWN_ERROR mixins maps$DirectionsStatus {}
declare class maps$DirectionsStatus__ZERO_RESULTS mixins maps$DirectionsStatus {}


declare export interface maps$DirectionsResult {
geocoded_waypoints: maps$DirectionsGeocodedWaypoint[],
routes: maps$DirectionsRoute[]
} 


/**
 * A single geocoded waypoint.
 */
declare export interface maps$DirectionsGeocodedWaypoint {
partial_match: boolean,
place_id: string,
types: string[]
} 


/**
 * A single route containing a set of legs in a DirectionsResult.
 * Note that though this object is "JSON-like," it is not strictly JSON,
 * as it directly and indirectly includes LatLng objects.
 */
declare export interface maps$DirectionsRoute {

/**
 * The bounds for this route.
 */
bounds: maps$LatLngBounds,

/**
 * Copyrights text to be displayed for this route.
 */
copyrights: string,

/**
 * The total fare for the whole transit trip. Only applicable to transit
 * requests.
 */
fare: maps$TransitFare,

/**
 * An array of DirectionsLegs, each of which contains information about the
 * steps of which it is composed. There will be one leg for each stopover
 * waypoint or destination specified. So a route with no stopover waypoints
 * will contain one DirectionsLeg and a route with one stopover waypoint
 * will contain two.
 */
legs: maps$DirectionsLeg[],

/**
 * An array of LatLngs representing the entire course of this route. The
 * path is simplified in order to make it suitable in contexts where a small
 * number of vertices is required (such as Static Maps API URLs).
 */
overview_path: maps$LatLng[],

/**
 * An encoded polyline representation of the route in overview_path.
 * This polyline is an approximate (smoothed) path of the resulting
 * directions.
 */
overview_polyline: string,

/**
 * Warnings to be displayed when showing these directions.
 */
warnings: string[],

/**
 * If optimizeWaypoints was set to true, this field will contain the
 * re-ordered permutation of the input waypoints. For example, if the input
 * was: Origin: Los Angeles Waypoints: Dallas, Bangor, Phoenix Destination:
 * New York and the optimized output was ordered as follows: Origin: Los
 * Angeles Waypoints: Phoenix, Dallas, Bangor Destination: New York then
 * this field will be an Array containing the values [2, 0, 1]. Note that
 * the numbering of waypoints is zero-based. If any of the input waypoints
 * has stopover set to false, this field will be empty, since route
 * optimization is not available for such queries.
 */
waypoint_order: number[]
} 

declare export interface maps$DirectionsLeg {
arrival_time: maps$Time,
departure_time: maps$Time,
distance: maps$Distance,
duration: maps$Duration,
duration_in_traffic: maps$Duration,
end_address: string,
end_location: maps$LatLng,
start_address: string,
start_location: maps$LatLng,
steps: maps$DirectionsStep[],
via_waypoints: maps$LatLng[]
} 

declare export interface maps$DirectionsStep {
distance: maps$Distance,
duration: maps$Duration,
end_location: maps$LatLng,
instructions: string,
path: maps$LatLng[],
start_location: maps$LatLng,
steps: maps$DirectionsStep,
transit: maps$TransitDetails,
travel_mode: maps$TravelMode
} 

declare export interface maps$Distance {
text: string,
value: number
} 

declare export interface maps$Duration {
text: string,
value: number
} 

declare export interface maps$Time {
text: string,
time_zone: string,
value: Date
} 

declare export interface maps$TransitDetails {
arrival_stop: maps$TransitStop,
arrival_time: maps$Time,
departure_stop: maps$TransitStop,
departure_time: maps$Time,
headsign: string,
headway: number,
line: maps$TransitLine,
num_stops: number
} 

declare export interface maps$TransitStop {
location: maps$LatLng,
name: string
} 

declare export interface maps$TransitLine {
agencies: maps$TransitAgency[],
color: string,
icon: string,
name: string,
short_name: string,
text_color: string,
url: string,
vehicle: maps$TransitVehicle
} 

declare export interface maps$TransitAgency {
name: string,
phone: string,
url: string
} 

declare export interface maps$TransitVehicle {
icon: string,
local_icon: string,
name: string,
type: maps$VehicleType
} 

declare export  class maps$VehicleType {
  constructor(...args: empty): mixed;
static +BUS: Class<maps$VehicleType__BUS> & maps$VehicleType__BUS & 0;// 0
static +CABLE_CAR: Class<maps$VehicleType__CABLE_CAR> & maps$VehicleType__CABLE_CAR & 1;// 1
static +COMMUTER_TRAIN: Class<maps$VehicleType__COMMUTER_TRAIN> & maps$VehicleType__COMMUTER_TRAIN & 2;// 2
static +FERRY: Class<maps$VehicleType__FERRY> & maps$VehicleType__FERRY & 3;// 3
static +FUNICULAR: Class<maps$VehicleType__FUNICULAR> & maps$VehicleType__FUNICULAR & 4;// 4
static +GONDOLA_LIFT: Class<maps$VehicleType__GONDOLA_LIFT> & maps$VehicleType__GONDOLA_LIFT & 5;// 5
static +HEAVY_RAIL: Class<maps$VehicleType__HEAVY_RAIL> & maps$VehicleType__HEAVY_RAIL & 6;// 6
static +HIGH_SPEED_TRAIN: Class<maps$VehicleType__HIGH_SPEED_TRAIN> & maps$VehicleType__HIGH_SPEED_TRAIN & 7;// 7
static +INTERCITY_BUS: Class<maps$VehicleType__INTERCITY_BUS> & maps$VehicleType__INTERCITY_BUS & 8;// 8
static +METRO_RAIL: Class<maps$VehicleType__METRO_RAIL> & maps$VehicleType__METRO_RAIL & 9;// 9
static +MONORAIL: Class<maps$VehicleType__MONORAIL> & maps$VehicleType__MONORAIL & 10;// 10
static +OTHER: Class<maps$VehicleType__OTHER> & maps$VehicleType__OTHER & 11;// 11
static +RAIL: Class<maps$VehicleType__RAIL> & maps$VehicleType__RAIL & 12;// 12
static +SHARE_TAXI: Class<maps$VehicleType__SHARE_TAXI> & maps$VehicleType__SHARE_TAXI & 13;// 13
static +SUBWAY: Class<maps$VehicleType__SUBWAY> & maps$VehicleType__SUBWAY & 14;// 14
static +TRAM: Class<maps$VehicleType__TRAM> & maps$VehicleType__TRAM & 15;// 15
static +TROLLEYBUS: Class<maps$VehicleType__TROLLEYBUS> & maps$VehicleType__TROLLEYBUS & 16;// 16

}

declare class maps$VehicleType__BUS mixins maps$VehicleType {}
declare class maps$VehicleType__CABLE_CAR mixins maps$VehicleType {}
declare class maps$VehicleType__COMMUTER_TRAIN mixins maps$VehicleType {}
declare class maps$VehicleType__FERRY mixins maps$VehicleType {}
declare class maps$VehicleType__FUNICULAR mixins maps$VehicleType {}
declare class maps$VehicleType__GONDOLA_LIFT mixins maps$VehicleType {}
declare class maps$VehicleType__HEAVY_RAIL mixins maps$VehicleType {}
declare class maps$VehicleType__HIGH_SPEED_TRAIN mixins maps$VehicleType {}
declare class maps$VehicleType__INTERCITY_BUS mixins maps$VehicleType {}
declare class maps$VehicleType__METRO_RAIL mixins maps$VehicleType {}
declare class maps$VehicleType__MONORAIL mixins maps$VehicleType {}
declare class maps$VehicleType__OTHER mixins maps$VehicleType {}
declare class maps$VehicleType__RAIL mixins maps$VehicleType {}
declare class maps$VehicleType__SHARE_TAXI mixins maps$VehicleType {}
declare class maps$VehicleType__SUBWAY mixins maps$VehicleType {}
declare class maps$VehicleType__TRAM mixins maps$VehicleType {}
declare class maps$VehicleType__TROLLEYBUS mixins maps$VehicleType {}


declare export class maps$ElevationService  {
getElevationAlongPath(
request: maps$PathElevationRequest,
callback: (results: maps$ElevationResult[], status: maps$ElevationStatus) => void): void;
getElevationForLocations(
request: maps$LocationElevationRequest,
callback: (results: maps$ElevationResult[], status: maps$ElevationStatus) => void): void
}

declare export interface maps$LocationElevationRequest {
locations: maps$LatLng[]
} 

declare export interface maps$PathElevationRequest {
path?: maps$LatLng[],
samples?: number
} 

declare export interface maps$ElevationResult {
elevation: number,
location: maps$LatLng,
resolution: number
} 

declare export  class maps$ElevationStatus {
  constructor(...args: empty): mixed;
static +INVALID_REQUEST: Class<maps$ElevationStatus__INVALID_REQUEST> & maps$ElevationStatus__INVALID_REQUEST & 0;// 0
static +OK: Class<maps$ElevationStatus__OK> & maps$ElevationStatus__OK & 1;// 1
static +OVER_QUERY_LIMIT: Class<maps$ElevationStatus__OVER_QUERY_LIMIT> & maps$ElevationStatus__OVER_QUERY_LIMIT & 2;// 2
static +REQUEST_DENIED: Class<maps$ElevationStatus__REQUEST_DENIED> & maps$ElevationStatus__REQUEST_DENIED & 3;// 3
static +UNKNOWN_ERROR: Class<maps$ElevationStatus__UNKNOWN_ERROR> & maps$ElevationStatus__UNKNOWN_ERROR & 4;// 4

}

declare class maps$ElevationStatus__INVALID_REQUEST mixins maps$ElevationStatus {}
declare class maps$ElevationStatus__OK mixins maps$ElevationStatus {}
declare class maps$ElevationStatus__OVER_QUERY_LIMIT mixins maps$ElevationStatus {}
declare class maps$ElevationStatus__REQUEST_DENIED mixins maps$ElevationStatus {}
declare class maps$ElevationStatus__UNKNOWN_ERROR mixins maps$ElevationStatus {}


declare export class maps$MaxZoomService  {
getMaxZoomAtLatLng(
latlng: maps$LatLng | maps$LatLngLiteral,
callback: (result: maps$MaxZoomResult) => void): void
}

declare export interface maps$MaxZoomResult {
status: maps$MaxZoomStatus,
zoom: number
} 

declare export  class maps$MaxZoomStatus {
  constructor(...args: empty): mixed;
static +ERROR: Class<maps$MaxZoomStatus__ERROR> & maps$MaxZoomStatus__ERROR & 0;// 0
static +OK: Class<maps$MaxZoomStatus__OK> & maps$MaxZoomStatus__OK & 1;// 1

}

declare class maps$MaxZoomStatus__ERROR mixins maps$MaxZoomStatus {}
declare class maps$MaxZoomStatus__OK mixins maps$MaxZoomStatus {}


declare export class maps$DistanceMatrixService  {
getDistanceMatrix(
request: maps$DistanceMatrixRequest,
callback: (
response: maps$DistanceMatrixResponse,
status: maps$DistanceMatrixStatus) => void): void
}

declare export interface maps$DistanceMatrixRequest {
avoidFerries?: boolean,
avoidHighways?: boolean,
avoidTolls?: boolean,
destinations?: string[] | maps$LatLng[] | maps$LatLngLiteral[] | maps$Place[],
drivingOptions?: maps$DrivingOptions,
durationInTraffic?: boolean,
origins?: string[] | maps$LatLng[] | maps$LatLngLiteral[] | maps$Place[],
region?: string,
transitOptions?: maps$TransitOptions,
travelMode?: maps$TravelMode,
unitSystem?: maps$UnitSystem
} 

declare export interface maps$DistanceMatrixResponse {
destinationAddresses: string[],
originAddresses: string[],
rows: maps$DistanceMatrixResponseRow[]
} 

declare export interface maps$DistanceMatrixResponseRow {
elements: maps$DistanceMatrixResponseElement[]
} 

declare export interface maps$DistanceMatrixResponseElement {
distance: maps$Distance,
duration: maps$Duration,
duration_in_traffic: maps$Duration,
fare: maps$TransitFare,
status: maps$DistanceMatrixElementStatus
} 

declare export  class maps$DistanceMatrixStatus {
  constructor(...args: empty): mixed;
static +INVALID_REQUEST: Class<maps$DistanceMatrixStatus__INVALID_REQUEST> & maps$DistanceMatrixStatus__INVALID_REQUEST & 0;// 0
static +MAX_DIMENSIONS_EXCEEDED: Class<maps$DistanceMatrixStatus__MAX_DIMENSIONS_EXCEEDED> & maps$DistanceMatrixStatus__MAX_DIMENSIONS_EXCEEDED & 1;// 1
static +MAX_ELEMENTS_EXCEEDED: Class<maps$DistanceMatrixStatus__MAX_ELEMENTS_EXCEEDED> & maps$DistanceMatrixStatus__MAX_ELEMENTS_EXCEEDED & 2;// 2
static +OK: Class<maps$DistanceMatrixStatus__OK> & maps$DistanceMatrixStatus__OK & 3;// 3
static +OVER_QUERY_LIMIT: Class<maps$DistanceMatrixStatus__OVER_QUERY_LIMIT> & maps$DistanceMatrixStatus__OVER_QUERY_LIMIT & 4;// 4
static +REQUEST_DENIED: Class<maps$DistanceMatrixStatus__REQUEST_DENIED> & maps$DistanceMatrixStatus__REQUEST_DENIED & 5;// 5
static +UNKNOWN_ERROR: Class<maps$DistanceMatrixStatus__UNKNOWN_ERROR> & maps$DistanceMatrixStatus__UNKNOWN_ERROR & 6;// 6

}

declare class maps$DistanceMatrixStatus__INVALID_REQUEST mixins maps$DistanceMatrixStatus {}
declare class maps$DistanceMatrixStatus__MAX_DIMENSIONS_EXCEEDED mixins maps$DistanceMatrixStatus {}
declare class maps$DistanceMatrixStatus__MAX_ELEMENTS_EXCEEDED mixins maps$DistanceMatrixStatus {}
declare class maps$DistanceMatrixStatus__OK mixins maps$DistanceMatrixStatus {}
declare class maps$DistanceMatrixStatus__OVER_QUERY_LIMIT mixins maps$DistanceMatrixStatus {}
declare class maps$DistanceMatrixStatus__REQUEST_DENIED mixins maps$DistanceMatrixStatus {}
declare class maps$DistanceMatrixStatus__UNKNOWN_ERROR mixins maps$DistanceMatrixStatus {}


declare export  class maps$DistanceMatrixElementStatus {
  constructor(...args: empty): mixed;
static +NOT_FOUND: Class<maps$DistanceMatrixElementStatus__NOT_FOUND> & maps$DistanceMatrixElementStatus__NOT_FOUND & 0;// 0
static +OK: Class<maps$DistanceMatrixElementStatus__OK> & maps$DistanceMatrixElementStatus__OK & 1;// 1
static +ZERO_RESULTS: Class<maps$DistanceMatrixElementStatus__ZERO_RESULTS> & maps$DistanceMatrixElementStatus__ZERO_RESULTS & 2;// 2

}

declare class maps$DistanceMatrixElementStatus__NOT_FOUND mixins maps$DistanceMatrixElementStatus {}
declare class maps$DistanceMatrixElementStatus__OK mixins maps$DistanceMatrixElementStatus {}
declare class maps$DistanceMatrixElementStatus__ZERO_RESULTS mixins maps$DistanceMatrixElementStatus {}



/**
 * *** Save to Google Maps ****
 */
declare export interface maps$Attribution {
iosDeepLinkId?: string,
source?: string,
webUrl?: string
} 

declare export interface maps$Place {
location?: maps$LatLng | maps$LatLngLiteral,
placeId?: string,
query?: string
} 

declare export class maps$SaveWidget  {
constructor(container: Node, opts?: maps$SaveWidgetOptions): this;
getAttribution(): maps$Attribution;
getPlace(): maps$Place;
setAttribution(attribution: maps$Attribution): void;
setOptions(opts: maps$SaveWidgetOptions): void;
setPlace(place: maps$Place): void
}

declare export interface maps$SaveWidgetOptions {
attribution?: maps$Attribution,
place?: maps$Place
} 


/**
 * *** Map Types ****
 */
declare export interface maps$MapType {
getTile(tileCoord: maps$Point, zoom: number, ownerDocument: Document): Element,
releaseTile(tile: Element): void,
alt?: string,
maxZoom?: number,
minZoom?: number,
name?: string,
projection?: maps$Projection,
radius?: number,
tileSize?: maps$Size
} 

declare export class maps$MapTypeRegistry mixins maps$MVCObject {
constructor(): this;
set(id: string, mapType: maps$MapType): void
}

declare export interface maps$Projection {
fromLatLngToPoint(latLng: maps$LatLng, point?: maps$Point): maps$Point,
fromPointToLatLng(pixel: maps$Point, noWrap?: boolean): maps$LatLng
} 

declare export class maps$ImageMapType mixins maps$MVCObject, maps$MapType {
constructor(opts: maps$ImageMapTypeOptions): this;
getOpacity(): number;
getTile(tileCoord: maps$Point, zoom: number, ownerDocument: Document): Element;
releaseTile(tile: Element): void;
setOpacity(opacity: number): void
}

declare export interface maps$ImageMapTypeOptions {
alt?: string,
getTileUrl(tileCoord: maps$Point, zoom: number): string,
maxZoom?: number,
minZoom?: number,
name?: string,
opacity?: number,
tileSize?: maps$Size
} 

declare export class maps$StyledMapType mixins maps$MVCObject, maps$MapType {
constructor(styles: maps$MapTypeStyle[], options?: maps$StyledMapTypeOptions): this;
getTile(tileCoord: maps$Point, zoom: number, ownerDocument: Document): Element;
releaseTile(tile: Element): void
}

declare export interface maps$StyledMapTypeOptions {
alt?: string,
maxZoom?: number,
minZoom?: number,
name?: string
} 

declare export interface maps$MapTypeStyle {
elementType?: maps$MapTypeStyleElementType,
featureType?: maps$MapTypeStyleFeatureType,
stylers?: maps$MapTypeStyler[]
} 

declare export type maps$MapTypeStyleFeatureType = "all"
| "administrative"
| "administrative.country"
| "administrative.land_parcel"
| "administrative.locality"
| "administrative.neighborhood"
| "administrative.province"
| "landscape"
| "landscape.man_made"
| "landscape.natural"
| "landscape.natural.landcover"
| "landscape.natural.terrain"
| "poi"
| "poi.attraction"
| "poi.business"
| "poi.government"
| "poi.medical"
| "poi.park"
| "poi.place_of_worship"
| "poi.school"
| "poi.sports_complex"
| "road"
| "road.arterial"
| "road.highway"
| "road.highway.controlled_access"
| "road.local"
| "transit"
| "transit.line"
| "transit.station"
| "transit.station.airport"
| "transit.station.bus"
| "transit.station.rail"
| "water";

declare export type maps$MapTypeStyleElementType = "all"
| "geometry"
| "geometry.fill"
| "geometry.stroke"
| "labels"
| "labels.icon"
| "labels.text"
| "labels.text.fill"
| "labels.text.stroke";

declare export interface maps$MapTypeStyler {
color?: string,
gamma?: number,
hue?: string,
invert_lightness?: boolean,
lightness?: number,
saturation?: number,
visibility?: string,
weight?: number
} 


/**
 * *** Layers ****
 */
declare export class maps$BicyclingLayer mixins maps$MVCObject {
constructor(): this;
getMap(): maps$Map;
setMap(map: maps$Map | null): void
}

declare export class maps$FusionTablesLayer mixins maps$MVCObject {
constructor(options: maps$FusionTablesLayerOptions): this;
getMap(): maps$Map;
setMap(map: maps$Map | null): void;
setOptions(options: maps$FusionTablesLayerOptions): void
}

declare export interface maps$FusionTablesLayerOptions {
clickable?: boolean,
heatmap?: maps$FusionTablesHeatmap,
map?: maps$Map,
query?: maps$FusionTablesQuery,
styles?: maps$FusionTablesStyle[],
suppressInfoWindows?: boolean
} 

declare export interface maps$FusionTablesQuery {
from?: string,
limit?: number,
offset?: number,
orderBy?: string,
select?: string,
where?: string
} 

declare export interface maps$FusionTablesStyle {
markerOptions?: maps$FusionTablesMarkerOptions,
polygonOptions?: maps$FusionTablesPolygonOptions,
polylineOptions?: maps$FusionTablesPolylineOptions,
where?: string
} 

declare export interface maps$FusionTablesHeatmap {
enabled: boolean
} 

declare export interface maps$FusionTablesMarkerOptions {
iconName: string
} 

declare export interface maps$FusionTablesPolygonOptions {
fillColor?: string,
fillOpacity?: number,
strokeColor?: string,
strokeOpacity?: number,
strokeWeight?: number
} 

declare export interface maps$FusionTablesPolylineOptions {
strokeColor?: string,
strokeOpacity?: number,
strokeWeight?: number
} 

declare export interface maps$FusionTablesMouseEvent {
infoWindowHtml?: string,
latLng?: maps$LatLng,
pixelOffset?: maps$Size,
row?: Object
} 

declare export interface maps$FusionTablesCell {
columnName?: string,
value?: string
} 

declare export class maps$KmlLayer mixins maps$MVCObject {
constructor(opts?: maps$KmlLayerOptions): this;
getDefaultViewport(): maps$LatLngBounds;
getMap(): maps$Map;
getMetadata(): maps$KmlLayerMetadata;
getStatus(): maps$KmlLayerStatus;
getUrl(): string;
getZIndex(): number;
setMap(map: maps$Map | null): void;
setUrl(url: string): void;
setZIndex(zIndex: number): void;
setOptions(options: maps$KmlLayerOptions): void
}

declare export interface maps$KmlLayerOptions {
clickable?: boolean,
map?: maps$Map,
preserveViewport?: boolean,
screenOverlays?: boolean,
suppressInfoWindows?: boolean,
url?: string,
zIndex?: number
} 

declare export interface maps$KmlLayerMetadata {
author: maps$KmlAuthor,
description: string,
hasScreenOverlays: boolean,
name: string,
snippet: string
} 

declare export  class maps$KmlLayerStatus {
  constructor(...args: empty): mixed;
static +DOCUMENT_NOT_FOUND: Class<maps$KmlLayerStatus__DOCUMENT_NOT_FOUND> & maps$KmlLayerStatus__DOCUMENT_NOT_FOUND & 0;// 0
static +DOCUMENT_TOO_LARGE: Class<maps$KmlLayerStatus__DOCUMENT_TOO_LARGE> & maps$KmlLayerStatus__DOCUMENT_TOO_LARGE & 1;// 1
static +FETCH_ERROR: Class<maps$KmlLayerStatus__FETCH_ERROR> & maps$KmlLayerStatus__FETCH_ERROR & 2;// 2
static +INVALID_DOCUMENT: Class<maps$KmlLayerStatus__INVALID_DOCUMENT> & maps$KmlLayerStatus__INVALID_DOCUMENT & 3;// 3
static +INVALID_REQUEST: Class<maps$KmlLayerStatus__INVALID_REQUEST> & maps$KmlLayerStatus__INVALID_REQUEST & 4;// 4
static +LIMITS_EXCEEDED: Class<maps$KmlLayerStatus__LIMITS_EXCEEDED> & maps$KmlLayerStatus__LIMITS_EXCEEDED & 5;// 5
static +OK: Class<maps$KmlLayerStatus__OK> & maps$KmlLayerStatus__OK & 6;// 6
static +TIMED_OUT: Class<maps$KmlLayerStatus__TIMED_OUT> & maps$KmlLayerStatus__TIMED_OUT & 7;// 7
static +UNKNOWN: Class<maps$KmlLayerStatus__UNKNOWN> & maps$KmlLayerStatus__UNKNOWN & 8;// 8

}

declare class maps$KmlLayerStatus__DOCUMENT_NOT_FOUND mixins maps$KmlLayerStatus {}
declare class maps$KmlLayerStatus__DOCUMENT_TOO_LARGE mixins maps$KmlLayerStatus {}
declare class maps$KmlLayerStatus__FETCH_ERROR mixins maps$KmlLayerStatus {}
declare class maps$KmlLayerStatus__INVALID_DOCUMENT mixins maps$KmlLayerStatus {}
declare class maps$KmlLayerStatus__INVALID_REQUEST mixins maps$KmlLayerStatus {}
declare class maps$KmlLayerStatus__LIMITS_EXCEEDED mixins maps$KmlLayerStatus {}
declare class maps$KmlLayerStatus__OK mixins maps$KmlLayerStatus {}
declare class maps$KmlLayerStatus__TIMED_OUT mixins maps$KmlLayerStatus {}
declare class maps$KmlLayerStatus__UNKNOWN mixins maps$KmlLayerStatus {}


declare export interface maps$KmlMouseEvent {
featureData: maps$KmlFeatureData,
latLng: maps$LatLng,
pixelOffset: maps$Size
} 

declare export interface maps$KmlFeatureData {
author: maps$KmlAuthor,
description: string,
id: string,
infoWindowHtml: string,
name: string,
snippet: string
} 

declare export interface maps$KmlAuthor {
email: string,
name: string,
uri: string
} 

declare export class maps$TrafficLayer mixins maps$MVCObject {
constructor(opts?: maps$TrafficLayerOptions): this;
getMap(): maps$Map;
setMap(map: maps$Map | null): void;
setOptions(options: maps$TrafficLayerOptions): void
}

declare export interface maps$TrafficLayerOptions {
autoRefresh?: boolean,
map?: maps$Map
} 

declare export class maps$TransitLayer mixins maps$MVCObject {
constructor(): this;
getMap(): void;
setMap(map: maps$Map | null): void
}


/**
 * *** Street View ****
 */
declare export class maps$StreetViewPanorama mixins maps$MVCObject {
constructor(container: Element, opts?: maps$StreetViewPanoramaOptions): this;
controls: maps$MVCArray<Node>[];
getLinks(): maps$StreetViewLink[];
getLocation(): maps$StreetViewLocation;
getMotionTracking(): boolean;
getPano(): string;
getPhotographerPov(): maps$StreetViewPov;
getPosition(): maps$LatLng;
getPov(): maps$StreetViewPov;
getStatus(): maps$StreetViewStatus;
getVisible(): boolean;
getZoom(): number;
registerPanoProvider(provider: (input: string) => maps$StreetViewPanoramaData): void;
setLinks(links: Array<maps$StreetViewLink>): void;
setMotionTracking(motionTracking: boolean): void;
setOptions(options: maps$StreetViewPanoramaOptions): void;
setPano(pano: string): void;
setPosition(latLng: maps$LatLng | maps$LatLngLiteral): void;
setPov(pov: maps$StreetViewPov): void;
setVisible(flag: boolean): void;
setZoom(zoom: number): void
}


/**
 * Options for the rendering of the fullscreen control.
 */
declare export interface maps$FullscreenControlOptions {

/**
 * Position id. Used to specify the position of the control on the map.
 * The default position is RIGHT_TOP.
 */
position?: maps$ControlPosition
} 

declare export interface maps$StreetViewPanoramaOptions {
addressControl?: boolean,
addressControlOptions?: maps$StreetViewAddressControlOptions,
clickToGo?: boolean,
disableDefaultUI?: boolean,
disableDoubleClickZoom?: boolean,
enableCloseButton?: boolean,
fullscreenControl?: boolean,
fullscreenControlOptions?: maps$FullscreenControlOptions,
imageDateControl?: boolean,
linksControl?: boolean,
motionTracking?: boolean,
motionTrackingControl?: boolean,
motionTrackingControlOptions?: maps$MotionTrackingControlOptions,
mode?: "html4" | "html5" | "webgl",
panControl?: boolean,
panControlOptions?: maps$PanControlOptions,
pano?: string,
panoProvider?: (input: string) => maps$StreetViewPanoramaData,
position?: maps$LatLng | maps$LatLngLiteral,
pov?: maps$StreetViewPov,
scrollwheel?: boolean,
visible?: boolean,
zoom?: number,
zoomControl?: boolean,
zoomControlOptions?: maps$ZoomControlOptions
} 

declare export interface maps$StreetViewAddressControlOptions {
position?: maps$ControlPosition
} 

declare export interface maps$StreetViewLink {
description?: string,
heading?: number,
pano?: string
} 

declare export interface maps$StreetViewPov {
heading?: number,
pitch?: number
} 

declare export interface maps$StreetViewPanoramaData {
copyright?: string,
imageDate?: string,
links?: maps$StreetViewLink[],
location?: maps$StreetViewLocation,
tiles?: maps$StreetViewTileData
} 

declare export interface maps$StreetViewLocation {
description?: string,
latLng?: maps$LatLng,
pano?: string,
shortDescription?: string
} 

declare export interface maps$StreetViewTileData {
getTileUrl(pano: string, tileZoom: number, tileX: number, tileY: number): string,
centerHeading?: number,
tileSize?: maps$Size,
worldSize?: maps$Size
} 

declare export  class maps$StreetViewPreference {
  constructor(...args: empty): mixed;
static +BEST: Class<maps$StreetViewPreference__BEST> & maps$StreetViewPreference__BEST & 0;// 0
static +NEAREST: Class<maps$StreetViewPreference__NEAREST> & maps$StreetViewPreference__NEAREST & 1;// 1

}

declare class maps$StreetViewPreference__BEST mixins maps$StreetViewPreference {}
declare class maps$StreetViewPreference__NEAREST mixins maps$StreetViewPreference {}


declare export  class maps$StreetViewSource {
  constructor(...args: empty): mixed;
static +DEFAULT: Class<maps$StreetViewSource__DEFAULT> & maps$StreetViewSource__DEFAULT & 0;// 0
static +OUTDOOR: Class<maps$StreetViewSource__OUTDOOR> & maps$StreetViewSource__OUTDOOR & 1;// 1

}

declare class maps$StreetViewSource__DEFAULT mixins maps$StreetViewSource {}
declare class maps$StreetViewSource__OUTDOOR mixins maps$StreetViewSource {}


declare export interface maps$StreetViewLocationRequest {
location: maps$LatLng | maps$LatLngLiteral,
preference?: maps$StreetViewPreference,
radius?: number,
source?: maps$StreetViewSource
} 

declare export interface maps$StreetViewPanoRequest {
pano: string
} 

declare export class maps$StreetViewService  {
getPanorama(
request: maps$StreetViewLocationRequest | maps$StreetViewPanoRequest,
cb: (data: maps$StreetViewPanoramaData, status: maps$StreetViewStatus) => void): void;
getPanoramaById(
pano: string,
callback: (
streetViewPanoramaData: maps$StreetViewPanoramaData,
streetViewStatus: maps$StreetViewStatus) => void): void;
getPanoramaByLocation(
latlng: maps$LatLng | maps$LatLngLiteral,
radius: number,
callback: (
streetViewPanoramaData: maps$StreetViewPanoramaData,
streetViewStatus: maps$StreetViewStatus) => void): void
}

declare export  class maps$StreetViewStatus {
  constructor(...args: empty): mixed;
static +OK: Class<maps$StreetViewStatus__OK> & maps$StreetViewStatus__OK & 0;// 0
static +UNKNOWN_ERROR: Class<maps$StreetViewStatus__UNKNOWN_ERROR> & maps$StreetViewStatus__UNKNOWN_ERROR & 1;// 1
static +ZERO_RESULTS: Class<maps$StreetViewStatus__ZERO_RESULTS> & maps$StreetViewStatus__ZERO_RESULTS & 2;// 2

}

declare class maps$StreetViewStatus__OK mixins maps$StreetViewStatus {}
declare class maps$StreetViewStatus__UNKNOWN_ERROR mixins maps$StreetViewStatus {}
declare class maps$StreetViewStatus__ZERO_RESULTS mixins maps$StreetViewStatus {}


declare export class maps$StreetViewCoverageLayer mixins maps$MVCObject {
getMap(): maps$Map;
setMap(map: maps$Map | null): void
}

declare export interface maps$MotionTrackingControlOptions {
position?: maps$ControlPosition
} 


/**
 * *** Events ****
 */
declare export interface maps$MapsEventListener {

/**
 * Removes the listener.  Equivalent to calling
 * google.maps.event.removeListener(listener).
 */
remove(): void
} 

declare export class maps$event  {

/**
 * Cross browser event handler registration. This listener is removed by
 * calling removeListener(handle) for the handle that is returned by this
 * function.
 */
static addDomListener(
instance: Object,
eventName: string,
handler: Function,
capture?: boolean): maps$MapsEventListener;

/**
 * Wrapper around addDomListener that removes the listener after the first
 * event.
 */
static addDomListenerOnce(
instance: Object,
eventName: string,
handler: Function,
capture?: boolean): maps$MapsEventListener;

/**
 * Adds the given listener function to the given event name for the given
 * object instance. Returns an identifier for this listener that can be used
 * with removeListener().
 */
static addListener(instance: Object, eventName: string, handler: Function): maps$MapsEventListener;

/**
 * Like addListener, but the handler removes itself after handling the first
 * event.
 */
static addListenerOnce(instance: Object, eventName: string, handler: Function): maps$MapsEventListener;

/**
 * Removes all listeners for all events for the given instance.
 */
static clearInstanceListeners(instance: Object): void;

/**
 * Removes all listeners for the given event for the given instance.
 */
static clearListeners(instance: Object, eventName: string): void;

/**
 * Removes the given listener, which should have been returned by
 * addListener above. Equivalent to calling listener.remove().
 */
static removeListener(listener: maps$MapsEventListener): void;

/**
 * Triggers the given event. All arguments after eventName are passed as
 * arguments to the listeners.
 */
static trigger(instance: any, eventName: string, ...args: any[]): void
}


/**
 * This object is returned from various mouse events on the map and overlays,
 * and contains all the fields shown below.
 */
declare export interface maps$MouseEvent {

/**
 * Prevents this event from propagating further.
 */
stop(): void,

/**
 * The latitude/longitude that was below the cursor when the event
 * occurred.
 */
latLng: maps$LatLng
} 


/**
 * This object is sent in an event when a user clicks on an icon on the map.
 * The place ID of this place is stored in the placeId member.
 * To prevent the default info window from showing up, call the stop() method
 * on this event to prevent it being propagated. Learn more about place IDs in
 * the Places API developer guide.
 */
declare export type maps$IconMouseEvent = {

/**
 * The place ID of the place that was clicked.
 * This place ID can be used to query more information about the feature
 * that was clicked.
 */
placeId: string
} & maps$MouseEvent



/**
 * A LatLng is a point in geographical coordinates: latitude and longitude.
 * 
 * * Latitude ranges between -90 and 90 degrees, inclusive. Values above or
 *    below this range will be clamped to the range [-90, 90]. This means
 *    that if the value specified is less than -90, it will be set to -90.
 *    And if the value is greater than 90, it will be set to 90.
 * * Longitude ranges between -180 and 180 degrees, inclusive. Values above
 *    or below this range will be wrapped so that they fall within the
 *    range. For example, a value of -190 will be converted to 170. A value
 *    of 190 will be converted to -170. This reflects the fact that
 *    longitudes wrap around the globe.
 * 
 * Although the default map projection associates longitude with the
 * x-coordinate of the map, and latitude with the y-coordinate, the
 * latitude coordinate is always written first, followed by the longitude.
 * Notice that you cannot modify the coordinates of a LatLng. If you want
 * to compute another point, you have to create a new one.
 */
declare export class maps$LatLng  {

/**
 * Creates a LatLng object representing a geographic point.
 * Note the ordering of latitude and longitude.
 * @param lat Latitude is specified in degrees within the range [-90, 90].
 * @param lng Longitude is specified in degrees within the range [-180,
180].
 * @param noWrap Set noWrap to true to enable values outside of this range.
 */
constructor(lat: number, lng: number, noWrap?: boolean): this;

/**
 * Comparison function.
 */
equals(other: maps$LatLng): boolean;

/**
 * Returns the latitude in degrees.
 */
lat(): number;

/**
 * Returns the longitude in degrees.
 */
lng(): number;

/**
 * Converts to string representation.
 */
toString(): string;

/**
 * Returns a string of the form "lat,lng". We round the lat/lng values to 6
 * decimal places by default.
 */
toUrlValue(precision?: number): string;

/**
 * Converts to JSON representation. This function is intended to be used
 * via JSON.stringify.
 */
toJSON(): maps$LatLngLiteral
}

declare export type maps$LatLngLiteral = {
lat: number,
lng: number
};

declare export type maps$LatLngBoundsLiteral = {
east: number,
north: number,
south: number,
west: number
};


/**
 * A LatLngBounds instance represents a rectangle in geographical coordinates,
 * including one that crosses the 180 degrees longitudinal meridian.
 */
declare export class maps$LatLngBounds  {

/**
 * Constructs a rectangle from the points at its south-west and north-east
 * corners.
 */
constructor(sw?: maps$LatLng | maps$LatLngLiteral, ne?: maps$LatLng | maps$LatLngLiteral): this;

/**
 * Returns true if the given lat/lng is in this bounds.
 */
contains(latLng: maps$LatLng | maps$LatLngLiteral): boolean;

/**
 * Returns true if this bounds approximately equals the given bounds.
 */
equals(other: maps$LatLngBounds | maps$LatLngBoundsLiteral): boolean;

/**
 * Extends this bounds to contain the given point.
 */
extend(point: maps$LatLng | maps$LatLngLiteral): maps$LatLngBounds;

/**
 * Computes the center of this LatLngBounds
 */
getCenter(): maps$LatLng;

/**
 * Returns the north-east corner of this bounds.
 */
getNorthEast(): maps$LatLng;

/**
 * Returns the south-west corner of this bounds.
 */
getSouthWest(): maps$LatLng;

/**
 * Returns true if this bounds shares any points with the other bounds.
 */
intersects(other: maps$LatLngBounds | maps$LatLngBoundsLiteral): boolean;

/**
 * Returns if the bounds are empty.
 */
isEmpty(): boolean;

/**
 * Converts to JSON representation. This function is intended to be used
 * via JSON.stringify.
 */
toJSON(): maps$LatLngBoundsLiteral;

/**
 * Converts the given map bounds to a lat/lng span.
 */
toSpan(): maps$LatLng;

/**
 * Converts to string.
 */
toString(): string;

/**
 * Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this
 * bounds, where "lo" corresponds to the southwest corner of the bounding
 * box, while "hi" corresponds to the northeast corner of that box.
 */
toUrlValue(precision?: number): string;

/**
 * Extends this bounds to contain the union of this and the given bounds.
 */
union(other: maps$LatLngBounds | maps$LatLngBoundsLiteral): maps$LatLngBounds
}

declare export class maps$Point  {

/**
 * A point on a two-dimensional plane.
 */
constructor(x: number, y: number): this;

/**
 * The X coordinate
 */
x: number;

/**
 * The Y coordinate
 */
y: number;

/**
 * Compares two Points
 */
equals(other: maps$Point): boolean;

/**
 * Returns a string representation of this Point.
 */
toString(): string
}

declare export class maps$Size  {
constructor(width: number, height: number, widthUnit?: string, heightUnit?: string): this;
height: number;
width: number;
equals(other: maps$Size): boolean;
toString(): string
}


/**
 * *** MVC ****
 * Base class implementing KVO.
 */
declare export class maps$MVCObject  {

/**
 * The MVCObject constructor is guaranteed to be an empty function, and so
 * you may inherit from MVCObject by simply writing MySubclass.prototype =
 * new google.maps.MVCObject();. Unless otherwise noted, this is not true of
 * other classes in the API, and inheriting from other classes in the API is
 * not supported.
 */
constructor(): this;

/**
 * Adds the given listener function to the given event name. Returns an
 * identifier for this listener that can be used with
 * google.maps.event.removeListener.
 */
addListener(eventName: string, handler: (...args: any[]) => void): maps$MapsEventListener;

/**
 * Binds a View to a Model.
 */
bindTo(
key: string,
target: maps$MVCObject,
targetKey?: string,
noNotify?: boolean): void;
changed(key: string): void;

/**
 * Gets a value.
 */
get(key: string): any;

/**
 * Notify all observers of a change on this property. This notifies both
 * objects that are bound to the object's property as well as the object
 * that it is bound to.
 */
notify(key: string): void;

/**
 * Sets a value.
 */
set(key: string, value: any): void;

/**
 * Sets a collection of key-value pairs.
 */
setValues(values: any): void;

/**
 * Removes a binding. Unbinding will set the unbound property to the current
 * value. The object will not be notified, as the value has not changed.
 */
unbind(key: string): void;

/**
 * Removes all bindings.
 */
unbindAll(): void
}


/**
 * This class extends MVCObject.
 */
declare export class maps$MVCArray<T> mixins maps$MVCObject {

/**
 * A mutable MVC Array.
 */
constructor(array?: T[]): this;

/**
 * Removes all elements from the array.
 */
clear(): void;

/**
 * Iterate over each element, calling the provided callback.
 * The callback is called for each element like: callback(element, index).
 */
forEach(callback: (elem: T, i: number) => void): void;

/**
 * Returns a reference to the underlying Array.
 * Warning: if the Array is mutated, no events will be fired by this object.
 */
getArray(): T[];

/**
 * Returns the element at the specified index.
 */
getAt(i: number): T;

/**
 * Returns the number of elements in this array.
 */
getLength(): number;

/**
 * Inserts an element at the specified index.
 */
insertAt(i: number, elem: T): void;

/**
 * Removes the last element of the array and returns that element.
 */
pop(): T;

/**
 * Adds one element to the end of the array and returns the new length of
 * the array.
 */
push(elem: T): number;

/**
 * Removes an element from the specified index.
 */
removeAt(i: number): T;

/**
 * Sets an element at the specified index.
 */
setAt(i: number, elem: T): void
}

declare module 'geometry' {
        declare export class encoding  {
static decodePath(encodedPath: string): maps$LatLng[];
static encodePath(path: maps$LatLng[] | maps$MVCArray<maps$LatLng>): string
}
	
/**
 * Utility functions for computing geodesic angles, distances and areas.
 * The default radius is Earth's radius of 6378137 meters.
 */
declare export class spherical  {

/**
 * Returns the area of a closed path.
 * The computed area uses the same units as the radius.
 * The radius defaults to the Earth's radius in meters,
 * in which case the area is in square meters.
 */
static computeArea(path: maps$LatLng[] | maps$MVCArray<maps$LatLng>, radius?: number): number;

/**
 * Returns the distance, in meters, between two LatLngs.
 * You can optionally specify a custom radius.
 * The radius defaults to the radius of the Earth.
 */
static computeDistanceBetween(from: maps$LatLng, to: maps$LatLng, radius?: number): number;

/**
 * Returns the heading from one LatLng to another LatLng.
 * Headings are expressed in degrees clockwise from North within the range
 * [-180,180).
 */
static computeHeading(from: maps$LatLng, to: maps$LatLng): number;

/**
 * Returns the length of the given path.
 */
static computeLength(path: maps$LatLng[] | maps$MVCArray<maps$LatLng>, radius?: number): number;

/**
 * Returns the LatLng resulting from moving a distance from an origin in
 * the specified heading (expressed in degrees clockwise from north).
 */
static computeOffset(
from: maps$LatLng,
distance: number,
heading: number,
radius?: number): maps$LatLng;

/**
 * Returns the location of origin when provided with a LatLng destination,
 * meters travelled and original heading. Headings are expressed in
 * degrees clockwise from North. This function returns null when no
 * solution is available.
 */
static computeOffsetOrigin(
to: maps$LatLng,
distance: number,
heading: number,
radius?: number): maps$LatLng;

/**
 * Returns the signed area of a closed path. The signed area may be used
 * to determine the orientation of the path. The computed area uses the
 * same units as the radius. The radius defaults to the Earth's radius in
 * meters, in which case the area is in square meters.
 */
static computeSignedArea(loop: maps$LatLng[] | maps$MVCArray<maps$LatLng>, radius?: number): number;

/**
 * Returns the LatLng which lies the given fraction of the way between the
 * origin LatLng and the destination LatLng.
 */
static interpolate(from: maps$LatLng, to: maps$LatLng, fraction: number): maps$LatLng
}
	declare export class poly  {
static containsLocation(point: maps$LatLng, polygon: maps$Polygon): boolean;
static isLocationOnEdge(
point: maps$LatLng,
poly: maps$Polygon | maps$Polyline,
tolerance?: number): boolean
}
    }


declare module 'adsense' {
        declare export class AdUnit mixins maps$MVCObject {
constructor(container: Element, opts: AdUnitOptions): this;
getBackgroundColor(): string;
getBorderColor(): string;
getChannelNumber(): string;
getContainer(): Element;
getFormat(): AdFormat;
getMap(): maps$Map;
getPosition(): maps$ControlPosition;
getPublisherId(): string;
getTextColor(): string;
getTitleColor(): string;
getUrlColor(): string;
setBackgroundColor(backgroundColor: string): void;
setBorderColor(borderColor: string): void;
setChannelNumber(channelNumber: string): void;
setFormat(format: AdFormat): void;
setMap(map: maps$Map | null): void;
setPosition(position: maps$ControlPosition): void;
setTextColor(textColor: string): void;
setTitleColor(titleColor: string): void;
setUrlColor(urlColor: string): void
}
	declare export interface AdUnitOptions {
backgroundColor?: string,
borderColor?: string,
channelNumber?: string,
format?: AdFormat,
map?: maps$Map,
position?: maps$ControlPosition,
publisherId?: string,
textColor?: string,
titleColor?: string,
urlColor?: string
} 
	declare export  class AdFormat {
  constructor(...args: empty): mixed;
static +BANNER: Class<AdFormat__BANNER> & AdFormat__BANNER & 0;// 0
static +BUTTON: Class<AdFormat__BUTTON> & AdFormat__BUTTON & 1;// 1
static +HALF_BANNER: Class<AdFormat__HALF_BANNER> & AdFormat__HALF_BANNER & 2;// 2
static +LARGE_HORIZONTAL_LINK_UNIT: Class<AdFormat__LARGE_HORIZONTAL_LINK_UNIT> & AdFormat__LARGE_HORIZONTAL_LINK_UNIT & 3;// 3
static +LARGE_RECTANGLE: Class<AdFormat__LARGE_RECTANGLE> & AdFormat__LARGE_RECTANGLE & 4;// 4
static +LARGE_VERTICAL_LINK_UNIT: Class<AdFormat__LARGE_VERTICAL_LINK_UNIT> & AdFormat__LARGE_VERTICAL_LINK_UNIT & 5;// 5
static +LEADERBOARD: Class<AdFormat__LEADERBOARD> & AdFormat__LEADERBOARD & 6;// 6
static +MEDIUM_RECTANGLE: Class<AdFormat__MEDIUM_RECTANGLE> & AdFormat__MEDIUM_RECTANGLE & 7;// 7
static +MEDIUM_VERTICAL_LINK_UNIT: Class<AdFormat__MEDIUM_VERTICAL_LINK_UNIT> & AdFormat__MEDIUM_VERTICAL_LINK_UNIT & 8;// 8
static +SKYSCRAPER: Class<AdFormat__SKYSCRAPER> & AdFormat__SKYSCRAPER & 9;// 9
static +SMALL_HORIZONTAL_LINK_UNIT: Class<AdFormat__SMALL_HORIZONTAL_LINK_UNIT> & AdFormat__SMALL_HORIZONTAL_LINK_UNIT & 10;// 10
static +SMALL_RECTANGLE: Class<AdFormat__SMALL_RECTANGLE> & AdFormat__SMALL_RECTANGLE & 11;// 11
static +SMALL_SQUARE: Class<AdFormat__SMALL_SQUARE> & AdFormat__SMALL_SQUARE & 12;// 12
static +SMALL_VERTICAL_LINK_UNIT: Class<AdFormat__SMALL_VERTICAL_LINK_UNIT> & AdFormat__SMALL_VERTICAL_LINK_UNIT & 13;// 13
static +SQUARE: Class<AdFormat__SQUARE> & AdFormat__SQUARE & 14;// 14
static +VERTICAL_BANNER: Class<AdFormat__VERTICAL_BANNER> & AdFormat__VERTICAL_BANNER & 15;// 15
static +WIDE_SKYSCRAPER: Class<AdFormat__WIDE_SKYSCRAPER> & AdFormat__WIDE_SKYSCRAPER & 16;// 16
static +X_LARGE_VERTICAL_LINK_UNIT: Class<AdFormat__X_LARGE_VERTICAL_LINK_UNIT> & AdFormat__X_LARGE_VERTICAL_LINK_UNIT & 17;// 17

}

declare class AdFormat__BANNER mixins AdFormat {}
declare class AdFormat__BUTTON mixins AdFormat {}
declare class AdFormat__HALF_BANNER mixins AdFormat {}
declare class AdFormat__LARGE_HORIZONTAL_LINK_UNIT mixins AdFormat {}
declare class AdFormat__LARGE_RECTANGLE mixins AdFormat {}
declare class AdFormat__LARGE_VERTICAL_LINK_UNIT mixins AdFormat {}
declare class AdFormat__LEADERBOARD mixins AdFormat {}
declare class AdFormat__MEDIUM_RECTANGLE mixins AdFormat {}
declare class AdFormat__MEDIUM_VERTICAL_LINK_UNIT mixins AdFormat {}
declare class AdFormat__SKYSCRAPER mixins AdFormat {}
declare class AdFormat__SMALL_HORIZONTAL_LINK_UNIT mixins AdFormat {}
declare class AdFormat__SMALL_RECTANGLE mixins AdFormat {}
declare class AdFormat__SMALL_SQUARE mixins AdFormat {}
declare class AdFormat__SMALL_VERTICAL_LINK_UNIT mixins AdFormat {}
declare class AdFormat__SQUARE mixins AdFormat {}
declare class AdFormat__VERTICAL_BANNER mixins AdFormat {}
declare class AdFormat__WIDE_SKYSCRAPER mixins AdFormat {}
declare class AdFormat__X_LARGE_VERTICAL_LINK_UNIT mixins AdFormat {}

    }


declare module 'places' {
        declare export class Autocomplete mixins maps$MVCObject {
constructor(inputField: HTMLInputElement, opts?: AutocompleteOptions): this;
getBounds(): maps$LatLngBounds;
getPlace(): PlaceResult;
setBounds(bounds: maps$LatLngBounds | maps$LatLngBoundsLiteral): void;
setComponentRestrictions(restrictions: ComponentRestrictions): void;
setTypes(types: string[]): void
}
	declare export interface AutocompleteOptions {
bounds?: maps$LatLngBounds | maps$LatLngBoundsLiteral,
componentRestrictions?: ComponentRestrictions,
placeIdOnly?: boolean,
strictBounds?: boolean,
types?: string[],
type?: string,
fields?: string[]
} 
	declare export interface AutocompletePrediction {
description: string,
matched_substrings: PredictionSubstring[],
place_id: string,
reference: string,
structured_formatting: AutocompleteStructuredFormatting,
terms: PredictionTerm[],
types: string[]
} 
	declare export interface AutocompleteStructuredFormatting {
main_text: string,
main_text_matched_substrings: PredictionSubstring[],
secondary_text: string
} 
	declare export interface OpeningHours {
open_now: boolean,
periods: OpeningPeriod[],
weekday_text: string[]
} 
	declare export interface OpeningPeriod {
open: OpeningHoursTime,
close?: OpeningHoursTime
} 
	declare export interface OpeningHoursTime {
day: number,
hours: number,
minutes: number,
nextDate: number,
time: string
} 
	declare export interface PredictionTerm {
offset: number,
value: string
} 
	declare export interface PredictionSubstring {
length: number,
offset: number
} 
	declare export class AutocompleteService  {
constructor(): this;
getPlacePredictions(
request: AutocompletionRequest,
callback: (result: AutocompletePrediction[], status: PlacesServiceStatus) => void): void;
getQueryPredictions(
request: QueryAutocompletionRequest,
callback: (result: QueryAutocompletePrediction[], status: PlacesServiceStatus) => void): void
}
	declare export class AutocompleteSessionToken  {
constructor(): this
}
	declare export interface AutocompletionRequest {
bounds?: maps$LatLngBounds | maps$LatLngBoundsLiteral,
componentRestrictions?: ComponentRestrictions,
input: string,
location?: maps$LatLng,
offset?: number,
radius?: number,
sessionToken?: AutocompleteSessionToken,
types?: string[]
} 
	declare export interface ComponentRestrictions {
country: string | string[]
} 
	declare export type LocationBias = maps$LatLng
| maps$LatLngLiteral
| maps$LatLngBounds
| maps$LatLngBoundsLiteral
| maps$Circle
| maps$CircleLiteral
| string;
	declare export interface PlaceAspectRating {
rating: number,
type: string
} 
	declare export interface PlaceDetailsRequest {
placeId: string,
fields?: string[],
sessionToken?: AutocompleteSessionToken
} 
	declare export interface PlaceGeometry {
location: maps$LatLng,
viewport: maps$LatLngBounds
} 
	declare export interface PlacePhoto {
height: number,
html_attributions: string[],
width: number,
getUrl(opts: PhotoOptions): string
} 
	declare export interface PhotoOptions {
maxHeight?: number,
maxWidth?: number
} 
	declare export interface PlaceResult {
address_components: maps$GeocoderAddressComponent[],
adr_address: string,
aspects: PlaceAspectRating[],
formatted_address: string,
formatted_phone_number: string,
maps$geometry: PlaceGeometry,
html_attributions: string[],
icon: string,
id: string,
international_phone_number: string,
name: string,
opening_hours: OpeningHours,
permanently_closed: boolean,
photos: PlacePhoto[],
place_id: string,
price_level: number,
rating: number,
reviews: PlaceReview[],
types: string[],
url: string,
utc_offset: number,
vicinity: string,
website: string
} 
	declare export interface PlaceReview {
aspects: PlaceAspectRating[],
author_name: string,
author_url: string,
language: string,
text: string
} 
	declare export interface PlaceSearchPagination {
nextPage(): void,
hasNextPage: boolean
} 
	declare export interface PlaceSearchRequest {
bounds?: maps$LatLngBounds | maps$LatLngBoundsLiteral,
keyword?: string,
location?: maps$LatLng | maps$LatLngLiteral,
maxPriceLevel?: number,
minPriceLevel?: number,
name?: string,
openNow?: boolean,
radius?: number,
rankBy?: RankBy,
types?: string[],
type?: string
} 
	declare export class PlacesService  {
constructor(attrContainer: HTMLDivElement | maps$Map): this;
findPlaceFromPhoneNumber(
request: FindPlaceFromPhoneNumberRequest,
callback: (results: PlaceResult[], status: PlacesServiceStatus) => void): void;
findPlaceFromQuery(
request: FindPlaceFromQueryRequest,
callback: (results: PlaceResult[], status: PlacesServiceStatus) => void): void;
getDetails(
request: PlaceDetailsRequest,
callback: (result: PlaceResult, status: PlacesServiceStatus) => void): void;
nearbySearch(
request: PlaceSearchRequest,
callback: (
results: PlaceResult[],
status: PlacesServiceStatus,
pagination: PlaceSearchPagination) => void): void;

/**
 * @deprecated Radar search is deprecated as of June 30, 2018. After that
time, this feature will no longer be available.
 */
radarSearch(
request: RadarSearchRequest,
callback: (results: PlaceResult[], status: PlacesServiceStatus) => void): void;
textSearch(
request: TextSearchRequest,
callback: (
results: PlaceResult[],
status: PlacesServiceStatus,
pagination: PlaceSearchPagination) => void): void
}
	declare export  class PlacesServiceStatus {
  constructor(...args: empty): mixed;
static +ERROR: Class<PlacesServiceStatus__ERROR> & PlacesServiceStatus__ERROR & 0;// 0
static +INVALID_REQUEST: Class<PlacesServiceStatus__INVALID_REQUEST> & PlacesServiceStatus__INVALID_REQUEST & 1;// 1
static +OK: Class<PlacesServiceStatus__OK> & PlacesServiceStatus__OK & 2;// 2
static +OVER_QUERY_LIMIT: Class<PlacesServiceStatus__OVER_QUERY_LIMIT> & PlacesServiceStatus__OVER_QUERY_LIMIT & 3;// 3
static +NOT_FOUND: Class<PlacesServiceStatus__NOT_FOUND> & PlacesServiceStatus__NOT_FOUND & 4;// 4
static +REQUEST_DENIED: Class<PlacesServiceStatus__REQUEST_DENIED> & PlacesServiceStatus__REQUEST_DENIED & 5;// 5
static +UNKNOWN_ERROR: Class<PlacesServiceStatus__UNKNOWN_ERROR> & PlacesServiceStatus__UNKNOWN_ERROR & 6;// 6
static +ZERO_RESULTS: Class<PlacesServiceStatus__ZERO_RESULTS> & PlacesServiceStatus__ZERO_RESULTS & 7;// 7

}

declare class PlacesServiceStatus__ERROR mixins PlacesServiceStatus {}
declare class PlacesServiceStatus__INVALID_REQUEST mixins PlacesServiceStatus {}
declare class PlacesServiceStatus__OK mixins PlacesServiceStatus {}
declare class PlacesServiceStatus__OVER_QUERY_LIMIT mixins PlacesServiceStatus {}
declare class PlacesServiceStatus__NOT_FOUND mixins PlacesServiceStatus {}
declare class PlacesServiceStatus__REQUEST_DENIED mixins PlacesServiceStatus {}
declare class PlacesServiceStatus__UNKNOWN_ERROR mixins PlacesServiceStatus {}
declare class PlacesServiceStatus__ZERO_RESULTS mixins PlacesServiceStatus {}

	declare export interface QueryAutocompletePrediction {
description: string,
matched_substrings: PredictionSubstring[],
place_id: string,
terms: PredictionTerm[]
} 
	declare export interface QueryAutocompletionRequest {
bounds?: maps$LatLngBounds | maps$LatLngBoundsLiteral,
input?: string,
location?: maps$LatLng,
offset?: number,
radius?: number
} 
	declare export interface RadarSearchRequest {
bounds?: maps$LatLngBounds | maps$LatLngBoundsLiteral,
keyword?: string,
location?: maps$LatLng | maps$LatLngLiteral,
name?: string,
radius?: number,
types?: string[],
type?: string
} 
	declare export  class RankBy {
  constructor(...args: empty): mixed;
static +DISTANCE: Class<RankBy__DISTANCE> & RankBy__DISTANCE & 0;// 0
static +PROMINENCE: Class<RankBy__PROMINENCE> & RankBy__PROMINENCE & 1;// 1

}

declare class RankBy__DISTANCE mixins RankBy {}
declare class RankBy__PROMINENCE mixins RankBy {}

	declare export class SearchBox mixins maps$MVCObject {
constructor(inputField: HTMLInputElement, opts?: SearchBoxOptions): this;
getBounds(): maps$LatLngBounds;
getPlaces(): PlaceResult[];
setBounds(bounds: maps$LatLngBounds | maps$LatLngBoundsLiteral): void
}
	declare export interface SearchBoxOptions {
bounds: maps$LatLngBounds | maps$LatLngBoundsLiteral
} 
	declare export interface TextSearchRequest {
bounds?: maps$LatLngBounds | maps$LatLngBoundsLiteral,
location?: maps$LatLng | maps$LatLngLiteral,
query: string,
radius?: number,
types?: string[],
type?: string
} 
	declare export interface FindPlaceFromQueryRequest {
fields: string[],
locationBias?: LocationBias,
query: string
} 
	declare export interface FindPlaceFromPhoneNumberRequest {
fields: string[],
locationBias?: LocationBias,
phoneNumber: string
} 
    }


declare module 'drawing' {
        declare export class DrawingManager mixins maps$MVCObject {
constructor(options?: DrawingManagerOptions): this;
getDrawingMode(): OverlayType;
getMap(): maps$Map;
setDrawingMode(drawingMode: OverlayType | null): void;
setMap(map: maps$Map | null): void;
setOptions(options: DrawingManagerOptions): void
}
	
/**
 * Options for the drawing manager.
 */
declare export interface DrawingManagerOptions {

/**
 * Options to apply to any new circles created with this DrawingManager.
 * The center and radius properties are ignored, and the map property of a
 * new circle is always set to the DrawingManager's map.
 */
circleOptions?: maps$CircleOptions,

/**
 * The enabled/disabled state of the drawing control. Defaults to true.
 */
drawingControl?: boolean,

/**
 * The display options for the drawing control.
 */
drawingControlOptions?: DrawingControlOptions,

/**
 * The DrawingManager's drawing mode, which defines the type of overlay to
 * be added on the map. Accepted values are 'marker', 'polygon',
 * 'polyline', 'rectangle', 'circle', or null. A drawing mode of null
 * means that the user can interact with the map as normal, and clicks do
 * not draw anything.
 */
drawingMode?: OverlayType | null,

/**
 * The Map to which the DrawingManager is attached, which is the Map on
 * which the overlays created will be placed.
 */
map?: maps$Map,

/**
 * Options to apply to any new markers created with this DrawingManager.
 * The position property is ignored, and the map property of a new marker
 * is always set to the DrawingManager's map.
 */
markerOptions?: maps$MarkerOptions,

/**
 * Options to apply to any new polygons created with this DrawingManager.
 * The paths property is ignored, and the map property of a new polygon is
 * always set to the DrawingManager's map.
 */
polygonOptions?: maps$PolygonOptions,

/**
 * Options to apply to any new polylines created with this DrawingManager.
 * The path property is ignored, and the map property of a new polyline is
 * always set to the DrawingManager's map.
 */
polylineOptions?: maps$PolylineOptions,

/**
 * Options to apply to any new rectangles created with this
 * DrawingManager. The bounds property is ignored, and the map property of
 * a new rectangle is always set to the DrawingManager's map.
 */
rectangleOptions?: maps$RectangleOptions
} 
	declare export interface DrawingControlOptions {
drawingModes?: OverlayType[],
position?: maps$ControlPosition
} 
	
/**
 * The properties of an overlaycomplete event on a DrawingManager..
 */
declare export interface OverlayCompleteEvent {

/**
 * The completed overlay.
 */
overlay: maps$Marker
| maps$Polygon
| maps$Polyline
| maps$Rectangle
| maps$Circle,

/**
 * The completed overlay's type.
 */
type: OverlayType
} 
	
/**
 * The types of overlay that may be created by the DrawingManager. Specify
 * these by value, or by using the constant's name. For example, 'polygon'
 * or google.maps.drawing.OverlayType.POLYGON.
 */
declare export  class OverlayType {
  constructor(...args: empty): mixed;
static +CIRCLE: Class<OverlayType__CIRCLE> & OverlayType__CIRCLE & 0;// 0
static +MARKER: Class<OverlayType__MARKER> & OverlayType__MARKER & 1;// 1
static +POLYGON: Class<OverlayType__POLYGON> & OverlayType__POLYGON & 2;// 2
static +POLYLINE: Class<OverlayType__POLYLINE> & OverlayType__POLYLINE & 3;// 3
static +RECTANGLE: Class<OverlayType__RECTANGLE> & OverlayType__RECTANGLE & 4;// 4

}

declare class OverlayType__CIRCLE mixins OverlayType {}
declare class OverlayType__MARKER mixins OverlayType {}
declare class OverlayType__POLYGON mixins OverlayType {}
declare class OverlayType__POLYLINE mixins OverlayType {}
declare class OverlayType__RECTANGLE mixins OverlayType {}

    }


declare module 'visualization' {
        declare export class MapsEngineLayer mixins maps$MVCObject {
constructor(options: MapsEngineLayerOptions): this;
getLayerId(): string;
getLayerKey(): string;
getMap(): maps$Map;
getMapId(): string;
getOpacity(): number;
getProperties(): MapsEngineLayerProperties;
getStatus(): MapsEngineStatus;
getZIndex(): number;
setLayerId(layerId: string): void;
setLayerKey(layerKey: string): void;
setMap(map: maps$Map | null): void;
setMapId(mapId: string): void;
setOpacity(opacity: number): void;
setOptions(options: MapsEngineLayerOptions): void;
setZIndex(zIndex: number): void
}
	declare export interface MapsEngineLayerOptions {
accessToken?: string,
clickable?: boolean,
fitBounds?: boolean,
layerId?: string,
layerKey?: string,
map?: maps$Map,
mapId?: string,
opacity?: number,
suppressInfoWindows?: boolean,
zIndex?: number
} 
	declare export interface MapsEngineLayerProperties {
name: string
} 
	declare export interface MapsEngineMouseEvent {
featureId?: string,
infoWindowHtml?: string,
latLng?: maps$LatLng,
pixelOffset?: maps$Size
} 
	declare export  class MapsEngineStatus {
  constructor(...args: empty): mixed;
static +INVALID_LAYER: Class<MapsEngineStatus__INVALID_LAYER> & MapsEngineStatus__INVALID_LAYER & 0;// 0
static +OK: Class<MapsEngineStatus__OK> & MapsEngineStatus__OK & 1;// 1
static +UNKNOWN_ERROR: Class<MapsEngineStatus__UNKNOWN_ERROR> & MapsEngineStatus__UNKNOWN_ERROR & 2;// 2

}

declare class MapsEngineStatus__INVALID_LAYER mixins MapsEngineStatus {}
declare class MapsEngineStatus__OK mixins MapsEngineStatus {}
declare class MapsEngineStatus__UNKNOWN_ERROR mixins MapsEngineStatus {}

	declare export class HeatmapLayer mixins maps$MVCObject {
constructor(opts?: HeatmapLayerOptions): this;
getData<T: maps$LatLng | WeightedLocation>(): maps$MVCArray<T>;
getMap(): maps$Map;
setData(
data: maps$MVCArray<maps$LatLng | WeightedLocation> | maps$LatLng[] | WeightedLocation[]): void;
setMap(map: maps$Map | null): void
}
	declare export interface HeatmapLayerOptions {
data: any,
dissipating?: boolean,
gradient?: string[],
map?: maps$Map,
maxIntensity?: number,
opacity?: number,
radius?: number
} 
	declare export interface WeightedLocation {
location: maps$LatLng,
weight: number
} 
	declare export class MouseEvent  {
stop(): void
}
	declare export class MapsEventListener  {}
    }

    }
