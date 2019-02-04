declare module 'react-map-gl' {
        import typeof * as React from 'react';

	import typeof * as MapboxGL from 'mapbox-gl';

	import typeof * as GeoJSON from 'geojson';

	declare export interface ViewState {
latitude: number,
longitude: number,
zoom: number,
bearing?: number,
pitch?: number,
altitude?: number
} 
	declare export interface MapError {
error?: {
message: string,
status: number
},
status: number
} 
	declare export interface MapRequest {
url: string,
headers?: {
[index: string]: string
},
credentials?: string
} 
	declare export type MapboxProps = {
container?: {[key: string]: any},
gl?: {[key: string]: any},
mapboxApiAccessToken?: string,
attributionControl?: boolean,
preserveDrawingBuffer?: boolean,
reuseMaps?: boolean,
transformRequest?: (url?: string, resourceType?: string) => MapRequest,
mapOptions?: {[key: string]: any},
mapStyle?: string | {[key: string]: any},
visible?: boolean,
onLoad?: () => void,
onError?: (e: MapError) => void,
reuseMap?: boolean,
width: number | string,
height: number | string,
viewState?: ViewState
} & $Shape<ViewState>

	declare export type StaticMapProps = {
onResize?: (dimensions: {
width: number,
height: number
}) => void,
preventStyleDiffing?: boolean,
disableTokenWarning?: boolean,
className?: string,
style?: {[key: string]: any},
visibilityConstraints?: {
minZoom?: number,
maxZoom?: number,
minPitch?: number,
maxPitch?: number
}
} & MapboxProps

	declare export interface QueryRenderedFeaturesParams {
layers?: string[],
filter?: any[]
} 
	declare export class StaticMap mixins React.Component<StaticMapProps> {
getMap(): MapboxGL.Map;
queryRenderedFeatures(
geometry?: MapboxGL.PointLike | MapboxGL.PointLike[],
parameters?: QueryRenderedFeaturesParams): Array<GeoJSON.Feature<GeoJSON.GeometryObject>>
}
	declare export interface ExtraState {
isDragging: boolean,
isHovering: boolean
} 
	declare export interface PositionInput {
pos: [number, number]
} 
	declare export interface MapControllerOptions {
onViewportChange?: (viewState: ViewState) => void,
onStateChange?: (state: MapState) => void,
eventManager?: any,
isInteractive: boolean,
scrollZoom?: boolean,
dragPan?: boolean,
dragRotate?: boolean,
doubleClickZoom?: boolean,
touchZoom?: boolean,
touchRotate?: boolean,
keyboard?: boolean
} 
	declare export interface ViewportProps {
width: number,
height: number,
latitude: number,
longitude: number,
zoom: number,
bearing: number,
pitch: number,
altitude: number,
maxZoom: number,
minZoom: number,
maxPitch: number,
minPitch: number,
transitionDuration?: number,
transitionInterpolator?: TransitionInterpolator,
transitionInterruption?: TRANSITION_EVENTS,
transitionEasing?: EasingFunction
} 
	declare export interface InteractiveState {
startPanLngLat?: [number, number],
startZoomLngLat?: [number, number],
startBearing?: number,
startPitch?: number,
startZoom?: number
} 
	declare export type MapStateProps = $Shape<ViewportProps & InteractiveState>;
	declare export class MapState  {
constructor(props: MapStateProps): this;
getViewportProps(): ViewportProps;
getInteractiveState(): InteractiveState;
panStart(input: PositionInput): MapState;
pan(input: PositionInput & {
startPos?: [number, number]
}): MapState;
panEnd(): MapState;
rotateStart(input: PositionInput): MapState;
rotate(input: {
deltaScaleX?: number,
deltaScaleY?: number
}): MapState;
rotateEnd(): MapState;
zoomStart(input: PositionInput): MapState;
zoom(
input: PositionInput & {
scale: number,
startPos?: [number, number]
}): MapState;
zoomEnd(): MapState
}
	declare export interface Center {
x: number,
y: number
} 
	declare export interface MapControlEvent {
type: string,
center: Center,
offsetCenter: Center,
target: any,
srcEvent: any,
key?: number,
leftButton?: boolean,
middleButton?: boolean,
rightButton?: boolean,
pointerType?: string,
delta?: number
} 
	declare export interface BaseMapController {
events: string[],
handleEvent(event: MapControlEvent): void
} 
	declare export class MapController mixins BaseMapController {
events: string[];
handleEvent(event: MapControlEvent): void;
getMapState(overrides: $Shape<MapState>): MapState;
setOptions(options: MapControllerOptions): void;
setState(newState: MapState): void;
updateViewport(newMapState: MapState, extraProps: any, extraState: ExtraState): void
}
	declare export interface PointerEvent {
type: string,
point: [number, number],
lngLat: [number, number],
target: any,
srcEvent: any,
features: any[]
} 
	declare export type EasingFunction = (t: number) => number;
	declare export  class TRANSITION_EVENTS {
  constructor(...args: empty): mixed;
static +BREAK: Class<TRANSITION_EVENTS__BREAK> & TRANSITION_EVENTS__BREAK & 1;// 1
static +SNAP_TO_END: Class<TRANSITION_EVENTS__SNAP_TO_END> & TRANSITION_EVENTS__SNAP_TO_END & 2;// 2
static +IGNORE: Class<TRANSITION_EVENTS__IGNORE> & TRANSITION_EVENTS__IGNORE & 3;// 3

}

declare class TRANSITION_EVENTS__BREAK mixins TRANSITION_EVENTS {}
declare class TRANSITION_EVENTS__SNAP_TO_END mixins TRANSITION_EVENTS {}
declare class TRANSITION_EVENTS__IGNORE mixins TRANSITION_EVENTS {}

	declare export class TransitionInterpolator  {}
	declare export class LinearInterpolator mixins TransitionInterpolator {
constructor(transitionProps?: string[]): this
}
	declare export class FlyToInterpolator mixins TransitionInterpolator {}
	declare export interface ViewStateChangeInfo {
viewState: ViewState
} 
	declare export type InteractiveMapProps = {
maxZoom?: number,
minZoom?: number,
maxPitch?: number,
minPitch?: number,
onViewStateChange?: (info: ViewStateChangeInfo) => void,
onViewportChange?: (viewState: ViewState) => void,
onInteractionStateChange?: (state: ExtraState) => void,
transitionDuration?: number,
transitionInterpolator?: TransitionInterpolator,
transitionInterruption?: TRANSITION_EVENTS,
transitionEasing?: EasingFunction,
onTransitionStart?: () => void,
onTransitionInterrupt?: () => void,
onTransitionEnd?: () => void,
scrollZoom?: boolean,
dragPan?: boolean,
dragRotate?: boolean,
doubleClickZoom?: boolean,
touchZoom?: boolean,
touchRotate?: boolean,
keyboard?: boolean,
onHover?: (event: PointerEvent) => void,
onClick?: (event: PointerEvent) => void,
onDblClick?: (event: PointerEvent) => void,
onContextMenu?: (event: PointerEvent) => void,
onMouseDown?: (event: PointerEvent) => void,
onMouseMove?: (event: PointerEvent) => void,
onMouseUp?: (event: PointerEvent) => void,
onTouchStart?: (event: PointerEvent) => void,
onTouchMove?: (event: PointerEvent) => void,
onTouchEnd?: (event: PointerEvent) => void,
onMouseEnter?: (event: PointerEvent) => void,
onMouseLeave?: (event: PointerEvent) => void,
onMouseOut?: (event: PointerEvent) => void,
onWheel?: (event: PointerEvent) => void,
touchAction?: string,
clickRadius?: number,
interactiveLayerIds?: string[],
getCursor?: (state: ExtraState) => void,
controller?: MapController
} & StaticMapProps

	declare export class InteractiveMap mixins React.Component<InteractiveMapProps> {
getMap(): MapboxGL.Map;
queryRenderedFeatures(
geometry?: MapboxGL.PointLike | MapboxGL.PointLike[],
parameters?: QueryRenderedFeaturesParams): Array<GeoJSON.Feature<GeoJSON.GeometryObject>>
}
	declare export default typeof InteractiveMap

	declare export interface BaseControlProps {
captureScroll?: boolean,
captureDrag?: boolean,
captureClick?: boolean,
captureDoubleClick?: boolean
} 
	declare export class BaseControl<T: BaseControlProps> mixins React.Component<T> {}
	declare export interface DragEvent {
lngLat: [number, number],
[key: string]: any
} 
	declare export type MarkerProps = {
className?: string,
longitude: number,
latitude: number,
offsetLeft?: number,
offsetTop?: number,
draggable?: boolean,
onDrag?: (event: DragEvent) => void,
onDragEnd?: (event: DragEvent) => void,
onDragStart?: (event: DragEvent) => void
} & BaseControlProps

	declare export class Marker mixins BaseControl<MarkerProps> {}
	declare export type PopupProps = {
className?: string,
longitude: number,
latitude: number,
altitude?: number,
offsetLeft?: number,
offsetTop?: number,
tipSize?: number,
closeButton?: boolean,
closeOnClick?: boolean,
anchor?: "top"
| "top-left"
| "top-right"
| "bottom"
| "bottom-left"
| "bottom-right"
| "left"
| "right",
dynamicPosition?: boolean,
sortByDepth?: boolean,
onClose?: () => void
} & BaseControlProps

	declare export class Popup mixins BaseControl<PopupProps> {}
	declare export type NavigationControlProps = {
className?: string,
onViewStateChange?: (info: ViewStateChangeInfo) => void,
onViewportChange?: (viewport: ViewState) => void,
showCompass?: boolean,
showZoom?: boolean
} & BaseControlProps

	declare export class NavigationControl mixins BaseControl<NavigationControlProps> {}
	declare export type DraggableControlProps = {
draggable?: boolean,
onDrag?: (event: DragEvent) => void,
onDragEnd?: (event: DragEvent) => void,
onDragStart?: (event: DragEvent) => void
} & BaseControlProps

	declare export class DraggableControl mixins BaseControl<DraggableControlProps> {}
	declare export interface HTMLRedrawOptions {
width: number,
height: number,
project: (lnglat: number[]) => number[],
unproject: (xy: number[]) => number[]
} 
	declare export type HTMLOverlayProps = {
redraw: (opts: HTMLRedrawOptions) => void,
style?: React.CSSProperties
} & BaseControlProps

	declare export class HTMLOverlay mixins BaseControl<HTMLOverlayProps> {}
	declare export type CanvasRedrawOptions = {
ctx: CanvasRenderingContext2D
} & HTMLRedrawOptions

	declare export type CanvasOverlayProps = {
redraw: (opts: CanvasRedrawOptions) => void
} & BaseControlProps

	declare export class CanvasOverlay mixins BaseControl<CanvasOverlayProps> {}
	declare export type SVGRedrawOptions = HTMLRedrawOptions;
	declare export type SVGOverlayProps = {
redraw: (opts: SVGRedrawOptions) => void,
style?: React.CSSProperties
} & BaseControlProps

	declare export class SVGOverlay mixins BaseControl<SVGOverlayProps> {}
    }
