declare module 'leaflet-draw' {
        import typeof * as L from 'leaflet';

	declare module 'leaflet' {
        declare interface MapOptions {
drawControl?: boolean
} 
	declare interface ToolbarAction {
title: string,
text: string,
callback: () => void,
context: {[key: string]: any}
} 
	declare interface ToolbarModeHandler {
enabled: boolean,
handler: Handler,
title: string
} 
	declare interface ToolbarOptions {
polyline?: Control$DrawOptions.DrawOptions$PolylineOptions,
polygon?: Control$DrawOptions.DrawOptions$PolygonOptions,
rectangle?: Control$DrawOptions.DrawOptions$RectangleOptions,
circle?: Control$DrawOptions.DrawOptions$CircleOptions,
marker?: Control$DrawOptions.DrawOptions$MarkerOptions,
circlemarker?: Control$DrawOptions.DrawOptions$CircleOptions
} 
	declare interface PrecisionOptions {
km?: number,
ha?: number,
m?: number,
mi?: number,
ac?: number,
yd?: number,
ft?: number,
nm?: number
} 
	declare class Toolbar mixins Class {
constructor(options?: ToolbarOptions): this;
addToolbar(map: Map): HTMLElement | void;
removeToolbar(): void
}
	declare class DrawToolbar mixins Toolbar {
getModeHandlers(map: Map): ToolbarModeHandler[];
getActions(handler: Control$Draw.Draw$Feature): ToolbarAction[];
setOptions(options: Control$Control$DrawConstructorOptions): void
}
	declare class EditToolbar mixins Toolbar {
getModeHandlers(map: Map): ToolbarModeHandler[];
getActions(handler: Control$Draw.Draw$Feature): ToolbarAction[];
setOptions(options: Control$Control$DrawConstructorOptions): void
}
	declare interface Control$DrawConstructorOptions {

/**
 * The initial position of the control (one of the map corners).
 * 
 * Default value: 'topleft'
 */
position?: string,

/**
 * The options used to configure the draw toolbar.
 * 
 * Default value: {}
 */
draw?: Control$DrawOptions,

/**
 * The options used to configure the edit toolbar.
 * 
 * Default value: false
 */
edit?: Control$EditOptions
} 

declare interface Control$DrawOptions {

/**
 * Polyline draw handler options. Set to false to disable handler.
 * 
 * Default value: {}
 */
polyline?: Control$DrawOptions.DrawOptions$PolylineOptions | false,

/**
 * Polygon draw handler options. Set to false to disable handler.
 * 
 * Default value: {}
 */
polygon?: Control$DrawOptions.DrawOptions$PolygonOptions | false,

/**
 * Rectangle draw handler options. Set to false to disable handler.
 * 
 * Default value: {}
 */
rectangle?: Control$DrawOptions.DrawOptions$RectangleOptions | false,

/**
 * Circle draw handler options. Set to false to disable handler.
 * 
 * Default value: {}
 */
circle?: Control$DrawOptions.DrawOptions$CircleOptions | false,

/**
 * Circle marker draw handler options. Set to false to disable handler.
 * 
 * Default value: {}
 */
circlemarker?: Control$DrawOptions.DrawOptions$CircleMarkerOptions | false,

/**
 * Marker draw handler options. Set to false to disable handler.
 * 
 * Default value: {}
 */
marker?: Control$DrawOptions.DrawOptions$MarkerOptions | false
} 

declare interface Control$EditOptions {

/**
 * This is the FeatureGroup that stores all editable shapes.
 * THIS IS REQUIRED FOR THE EDIT TOOLBAR TO WORK
 * 
 * Default value: null
 */
featureGroup: FeatureGroup,

/**
 * Edit handler options. Set to false to disable handler.
 * 
 * Default value: null
 */
edit?: Control$DrawOptions.DrawOptions$EditHandlerOptions | false,

/**
 * Delete handler options. Set to false to disable handler.
 * 
 * Default value: null
 */
remove?: Control$DrawOptions.DrawOptions$DeleteHandlerOptions | false
} 

declare class Control$Draw  {
constructor(options?: Control$DrawConstructorOptions): this
}
	declare interface DrawOptions$SimpleShapeOptions {

/**
 * Determines if the draw tool remains enabled after drawing a shape.
 * 
 * Default value: false
 */
repeatMode?: boolean
} 

declare interface DrawOptions$PolylineOptions {

/**
 * Determines if line segments can cross.
 * 
 * Default value: true
 */
allowIntersection?: boolean,

/**
 * Determines if the draw tool remains enabled after drawing a shape.
 * 
 * Default value: false
 */
repeatMode?: boolean,

/**
 * Configuration options for the error that displays if an intersection is detected.
 * 
 * Default value: See code
 */
drawError?: DrawOptions$DrawErrorOptions,
icon?: Icon | DivIcon,
touchIcon?: Icon | DivIcon,

/**
 * Distance in pixels between each guide dash.
 * 
 * Default value: 20
 */
guidelineDistance?: number,

/**
 * The maximum length of the guide line
 * 
 * Default value: 4000
 */
maxGuideLineLength?: number,

/**
 * The options used when drawing the polyline/polygon on the map.
 * 
 * Default value: See code
 */
shapeOptions?: PathOptions,

/**
 * Determines which measurement system (metric or imperial) is used.
 * 
 * Default value: true
 */
metric?: boolean,

/**
 * When not metric, to use feet instead of yards for display.
 * 
 * Default value: true
 */
feet?: boolean,

/**
 * When not metric, not feet use nautic mile for display
 * 
 * Default value: false
 */
nautic?: boolean,

/**
 * Whether to display distance in the tooltip
 * 
 * Default value: true
 */
showLength?: boolean,

/**
 * This should be a high number to ensure that you can draw over all other layers on the map.
 * 
 * Default value: 2000
 */
zIndexOffset?: number,

/**
 * To change distance calculation
 * 
 * Default value: 1
 */
factor?: number,

/**
 * Once this number of points are placed, finish shape
 * 
 * Default value: 0
 */
maxPoints?: number
} 

declare type DrawOptions$PolygonOptions = {

/**
 * Show the area of the drawn polygon in m², ha or km².
 * The area is only approximate and become less accurate the larger the polygon is.
 * 
 * Default value: false
 */
showArea?: boolean,

/**
 * Defines the precision for each type of unit (e.g. {km: 2, ft: 0}
 * 
 * Default value: {}
 */
precision?: PrecisionOptions
} & DrawOptions$PolylineOptions


declare type DrawOptions$RectangleOptions = {

/**
 * The options used when drawing the rectangle on the map.
 * 
 * Default value: See code
 */
shapeOptions?: PathOptions,

/**
 * Whether to use the metric measurement system or imperial
 * 
 * Default value: true
 */
metric?: boolean
} & DrawOptions$SimpleShapeOptions


declare type DrawOptions$CircleOptions = {

/**
 * The options used when drawing the circle on the map.
 * 
 * Default value: See code
 */
shapeOptions?: PathOptions,

/**
 * Whether to show the radius in the tooltip
 * 
 * Default value: true
 */
showRadius?: boolean,

/**
 * Whether to use the metric measurement system or imperial
 * 
 * Default value: true
 */
metric?: boolean,

/**
 * When not metric, use feet instead of yards for display
 * 
 * Default value: true
 */
feet?: boolean,

/**
 * When not metric, not feet use nautic mile for display
 * 
 * Default value: false
 */
nautic?: boolean
} & DrawOptions$SimpleShapeOptions


declare interface DrawOptions$CircleMarkerOptions {

/**
 * Whether to draw stroke around the circle marker.
 * 
 * Default value: true
 */
stroke?: boolean,

/**
 * The stroke color of the circle marker.
 * 
 * Default value: '#3388ff'
 */
color?: string,

/**
 * The stroke width in pixels of the circle marker.
 * 
 * Default value: 4
 */
weight?: number,

/**
 * The stroke opacity of the circle marker.
 * 
 * Default value: 0.5
 */
opacity?: number,

/**
 * Whether to fill the circle marker with color.
 * 
 * Default value: true
 */
fill?: boolean,

/**
 * The fill color of the circle marker. Defaults to the value of the color option.
 * 
 * Default value: null
 */
fillColor?: string,

/**
 * The opacity of the circle marker.
 * 
 * Default value: 0.2
 */
fillOpacity?: number,

/**
 * Whether you can click the circle marker.
 * 
 * Default value: true
 */
clickable?: boolean,

/**
 * This should be a high number to ensure that you can draw over all other layers on the map.
 * 
 * Default value: 2000
 */
zIndexOffset?: number
} 

declare interface DrawOptions$MarkerOptions {

/**
 * TThe icon displayed when drawing a marker.
 * 
 * Default value: L.Icon.Default()
 */
icon?: Icon | DivIcon,

/**
 * This should be a high number to ensure that you can draw over all other layers on the map.
 * 
 * Default value: 2000
 */
zIndexOffset?: number,

/**
 * Determines if the draw tool remains enabled after drawing a shape.
 * 
 * Default value: false
 */
repeatMode?: boolean
} 

declare interface DrawOptions$EditHandlerOptions {

/**
 * The path options for how the layers will look while in edit mode.
 * If this is set to null the editable path options will not be set.
 * 
 * Default value: See code
 */
selectedPathOptions?: PathOptions
} 

declare interface DrawOptions$DeleteHandlerOptions {} 

declare interface DrawOptions$DrawErrorOptions {
color?: string,
timeout?: number
} 
	
      declare var npm$namespace$Event: {
        
        CREATED: typeof Event$CREATED,
EDITED: typeof Event$EDITED,
DELETED: typeof Event$DELETED,
DRAWSTART: typeof Event$DRAWSTART,
DRAWSTOP: typeof Event$DRAWSTOP,
DRAWVERTEX: typeof Event$DRAWVERTEX,
EDITSTART: typeof Event$EDITSTART,
EDITMOVE: typeof Event$EDITMOVE,
EDITRESIZE: typeof Event$EDITRESIZE,
EDITVERTEX: typeof Event$EDITVERTEX,
EDITSTOP: typeof Event$EDITSTOP,
DELETESTART: typeof Event$DELETESTART,
DELETESTOP: typeof Event$DELETESTOP,
TOOLBAROPENED: typeof Event$TOOLBAROPENED,
TOOLBARCLOSED: typeof Event$TOOLBARCLOSED,
TOOLBARCONTEXT: typeof Event$TOOLBARCONTEXT,
      }
declare var Event$CREATED: string;

declare var Event$EDITED: string;

declare var Event$DELETED: string;

declare var Event$DRAWSTART: string;

declare var Event$DRAWSTOP: string;

declare var Event$DRAWVERTEX: string;

declare var Event$EDITSTART: string;

declare var Event$EDITMOVE: string;

declare var Event$EDITRESIZE: string;

declare var Event$EDITVERTEX: string;

declare var Event$EDITSTOP: string;

declare var Event$DELETESTART: string;

declare var Event$DELETESTOP: string;

declare var Event$TOOLBAROPENED: string;

declare var Event$TOOLBARCLOSED: string;

declare var Event$TOOLBARCONTEXT: string;

declare class Draw$Feature mixins Handler {
initialize(
map: Map,
options: Control$DrawOptions.DrawOptions$PolylineOptions
| Control$DrawOptions.DrawOptions$PolygonOptions
| Control$DrawOptions.DrawOptions$RectangleOptions
| Control$DrawOptions.DrawOptions$MarkerOptions
| Control$DrawOptions.DrawOptions$EditHandlerOptions
| Control$DrawOptions.DrawOptions$DeleteHandlerOptions): void;
setOptions(
options: Control$DrawOptions.DrawOptions$PolylineOptions
| Control$DrawOptions.DrawOptions$PolygonOptions
| Control$DrawOptions.DrawOptions$RectangleOptions
| Control$DrawOptions.DrawOptions$MarkerOptions
| Control$DrawOptions.DrawOptions$EditHandlerOptions
| Control$DrawOptions.DrawOptions$DeleteHandlerOptions): void
}

declare class Draw$SimpleShape mixins Draw$Feature {}

declare class Draw$Marker mixins Draw$Feature {
constructor(map: Map, options?: Control$DrawOptions.DrawOptions$MarkerOptions): this
}

declare class Draw$CircleMarker mixins Draw$Marker {
constructor(map: Map, options?: Control$DrawOptions.DrawOptions$MarkerOptions): this
}

declare class Draw$Circle mixins Draw$SimpleShape {
constructor(map: Map, options?: Control$DrawOptions.DrawOptions$CircleOptions): this
}

declare class Draw$Polyline mixins Draw$Feature {
constructor(map: Map, options?: Control$DrawOptions.DrawOptions$PolylineOptions): this;
deleteLastVertex(): void;
addVertex(latlng: LatLng): void;
completeShape(): void
}

declare class Draw$Rectangle mixins Draw$SimpleShape {
constructor(map: Map, options?: Control$DrawOptions.DrawOptions$RectangleOptions): this
}

declare class Draw$Polygon mixins Draw$Polyline {
constructor(map: Map, options?: Control$DrawOptions.DrawOptions$PolygonOptions): this
}

declare class Draw$Tooltip mixins Class {
constructor(map: Map): this;
dispose(): void;
updateContent(labelText?: {
text: string,
subtext?: string
}): Draw$Tooltip;
updatePosition(latlng: LatLng): Draw$Tooltip;
showAsError(): Draw$Tooltip;
removeError(): Draw$Tooltip
}
	declare type DrawEvents$Created = {

/**
 * Layer that was just created.
 */
layer: Draw$Circle
| Draw$CircleMarker
| Draw$Marker
| Draw$Polygon
| Draw$Polyline
| Draw$Rectangle,

/**
 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker.
 */
layerType: string
} & Event


declare type DrawEvents$Edited = {

/**
 * List of all layers just edited on the map.
 */
layers: LayerGroup
} & Event



/**
 * Triggered when layers have been removed (and saved) from the FeatureGroup.
 */
declare type DrawEvents$Deleted = {

/**
 * List of all layers just removed from the map.
 */
layers: LayerGroup
} & Event


declare type DrawEvents$DrawStart = {

/**
 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker
 */
layerType: string
} & Event


declare type DrawEvents$DrawStop = {

/**
 * The type of layer this is. One of: polyline, polygon, rectangle, circle, marker
 */
layerType: string
} & Event


declare type DrawEvents$DrawVertex = {

/**
 * List of all layers just being added from the map.
 */
layers: LayerGroup
} & Event


declare type DrawEvents$EditStart = {

/**
 * The type of edit this is. One of: edit
 */
handler: string
} & Event


declare type DrawEvents$EditMove = {

/**
 * Layer that was just moved.
 */
layer: Layer
} & Event


declare type DrawEvents$EditResize = {

/**
 * Layer that was just resized.
 */
layer: Layer
} & Event


declare type DrawEvents$EditVertex = {

/**
 * List of all layers just being edited from the map.
 */
layers: LayerGroup,
poly: Draw$Polyline | Draw$Polygon
} & Event


declare type DrawEvents$EditStop = {

/**
 * The type of edit this is. One of: edit
 */
handler: string
} & Event


declare type DrawEvents$DeleteStart = {

/**
 * The type of edit this is. One of: remove
 */
handler: string
} & Event


declare type DrawEvents$DeleteStop = {

/**
 * The type of edit this is. One of: remove
 */
handler: string
} & Event


declare type DrawEvents$ToolbarOpened = {} & Event


declare type DrawEvents$ToolbarClosed = {} & Event


declare type DrawEvents$MarkerContext = {} & Event

	
      declare var npm$namespace$GeometryUtil: {
        geodesicArea: typeof GeometryUtil$geodesicArea,
formattedNumber: typeof GeometryUtil$formattedNumber,
readableArea: typeof GeometryUtil$readableArea,
readableDistance: typeof GeometryUtil$readableDistance,
isVersion07x: typeof GeometryUtil$isVersion07x,
        
      }

/**
 * Returns the area of a polygon drawn with leaflet.draw
 */
declare function GeometryUtil$geodesicArea(coordinates: LatLngLiteral[]): number



/**
 * Returns n in specified number format (if defined) and precision
 */
declare function GeometryUtil$formattedNumber(n: string, precision: number): string



/**
 * Returns a readable area string in yards or metric
 */
declare function GeometryUtil$readableArea(area: number, isMetric?: boolean, precision?: PrecisionOptions): string



/**
 * Converts metric distance to distance string.
 * The value will be rounded as defined by the precision option object.
 */
declare function GeometryUtil$readableDistance(
distance: number,
isMetric?: boolean,
isFeet?: boolean,
isNauticalMile?: boolean,
precision?: PrecisionOptions): string



/**
 * Returns true if the Leaflet version is 0.7.x, false otherwise.
 */
declare function GeometryUtil$isVersion07x(): boolean

	
      declare var npm$namespace$LatLngUtil: {
        cloneLatLngs: typeof LatLngUtil$cloneLatLngs,
cloneLatLng: typeof LatLngUtil$cloneLatLng,
        
      }

/**
 * Clone the latLng point or points or nested points and return an array with those points
 */
declare function LatLngUtil$cloneLatLngs(latlngs: LatLng[]): LatLng[][]



/**
 * Clone the latLng and return a new LatLng object.
 */
declare function LatLngUtil$cloneLatLng(latlng: LatLng): LatLng

	declare class EditToolbar$Edit mixins Toolbar {
constructor(map: Map, options?: ToolbarOptions): this;
revertLayers(): void;
save(): void
}

declare class EditToolbar$Delete mixins Toolbar {
constructor(map: Map, options?: ToolbarOptions): this;
revertLayers(): void;
save(): void;
removeAllLayers(): void
}
	declare interface EditOptions$EditPolyVerticesEditOptions {
icon?: Icon | DivIcon,
touchIcon?: Icon | DivIcon,
drawError?: Control$DrawOptions.DrawOptions$DrawErrorOptions
} 

declare interface EditOptions$EditSimpleShapeOptions {
moveIcon?: Icon | DivIcon,
resizeIcon?: Icon | DivIcon,
touchMoveIcon?: Icon | DivIcon,
touchResizeIcon?: Icon | DivIcon
} 
	declare class Edit$Circle mixins Draw$CircleMarker {}

declare class Edit$CircleMarker mixins Draw$SimpleShape {}

declare class Edit$Marker mixins Handler {
constructor(marker: Edit$Marker, options?: {[key: string]: any}): this
}

declare class Edit$Poly mixins Handler {
constructor(poly: Control$Draw.Draw$Polyline): this;
updateMarkers(): void
}

declare class Edit$PolyVerticesEdit mixins Handler {
constructor(poly: Edit$Poly, latlngs: LatLngExpression[], options?: Control$EditOptions.EditOptions$EditPolyVerticesEditOptions): this;
updateMarkers(): void
}

declare class Edit$Rectangle mixins Draw$SimpleShape {}

declare class Edit$SimpleShape mixins Handler {
constructor(shape: Edit$SimpleShape, options?: Control$EditOptions.EditOptions$EditSimpleShapeOptions): this;
updateMarkers(): void
}
    }

    }
