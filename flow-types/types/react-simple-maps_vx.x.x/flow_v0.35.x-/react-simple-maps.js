declare module 'react-simple-maps' {
        import typeof * as React from 'react';

	declare export type Point = [number, number];
	declare export interface MarkerType {
coordinates: Point
} 
	declare export class Line mixins React.Component<LineProps> {}
	declare export interface ComposableMapProps {
width?: number,
height?: number,
projection?: string | (() => void),
projectionConfig?: {
scale?: number,
xOffset?: number,
yOffset?: number,
rotation?: number[],
precision?: number
},
style?: React.CSSProperties,
defs?: SVGDefsElement,
className?: string,
showCenter?: boolean,
preserveAspectRatio?: string,
viewBox?: string
} 
	declare export interface ZoomableGlobeProps {
center?: Point,
zoom?: number,
disablePanning?: boolean,
style?: React.CSSProperties,
width?: number,
height?: number,
onMoveStart?: (currentCenter: Point) => void,
onMoveEnd?: (newCenter: Point) => void,
sensitivity?: number
} 
	declare export interface ZoomableGroupProps {
center?: Point,
zoom?: number,
disablePanning?: boolean,
style?: React.CSSProperties,
width?: number,
height?: number,
onMoveStart?: (currentCenter: Point) => void,
onMoveEnd?: (newCenter: Point) => void,
backdrop?: {
x: Point,
y: Point
}
} 
	declare export interface GeographiesProps {
disableOptimization?: boolean,
geography?: string | {
[key: string]: any
} | string[],
children?: (
geographies: {[key: string]: any}[],
projection: (point: Point) => void) => void
} 
	declare export interface GeographyProps {
cacheId?: number | string | null,
precision?: number,
round?: boolean,
geography?: {[key: string]: any},
projection?: (point: Point) => void,
tabable?: boolean,
style?: {
default?: React.CSSProperties,
hover?: React.CSSProperties,
pressed?: React.CSSProperties
},
onClick?: (geography: {[key: string]: any}, evt: React.MouseEvent<SVGPathElement>) => void,
onMouseEnter?: (geography: {[key: string]: any}, evt: React.MouseEvent<SVGPathElement>) => void,
onMouseMove?: (geography: {[key: string]: any}, evt: React.MouseEvent<SVGPathElement>) => void,
onMouseLeave?: (geography: {[key: string]: any}, evt: React.MouseEvent<SVGPathElement>) => void,
onMouseDown?: (geography: {[key: string]: any}, evt: React.MouseEvent<SVGPathElement>) => void,
onMouseUp?: (geography: {[key: string]: any}, evt: React.MouseEvent<SVGPathElement>) => void,
onFocus?: (geography: {[key: string]: any}, evt: React.FocusEvent<SVGPathElement>) => void,
onBlur?: (geography: {[key: string]: any}, evt: React.FocusEvent<SVGPathElement>) => void
} 
	declare export interface MarkerProps {
marker?: MarkerType,
tabable?: boolean,
style?: {
default?: React.CSSProperties,
hover?: React.CSSProperties,
pressed?: React.CSSProperties
},
preserveMarkerAspect?: boolean,
onClick?: (marker: MarkerType, evt: React.MouseEvent<SVGGElement>) => void,
onMouseEnter?: (marker: MarkerType, evt: React.MouseEvent<SVGGElement>) => void,
onMouseMove?: (marker: MarkerType, evt: React.MouseEvent<SVGGElement>) => void,
onMouseLeave?: (marker: MarkerType, evt: React.MouseEvent<SVGGElement>) => void,
onMouseDown?: (marker: MarkerType, evt: React.MouseEvent<SVGGElement>) => void,
onMouseUp?: (marker: MarkerType, evt: React.MouseEvent<SVGGElement>) => void,
onFocus?: (marker: MarkerType, evt: React.FocusEvent<SVGGElement>) => void,
onBlur?: (marker: MarkerType, evt: React.FocusEvent<SVGGElement>) => void
} 
	declare export interface AnnotationProps {
subject?: Point,
dx?: number,
dy?: number,
zoom?: number,
stroke?: string,
strokeWidth?: number,
style?: React.CSSProperties,
markerEnd?: string,
curve?: number
} 
	declare export interface GraticuleProps {
step?: Point,
round?: boolean,
precision?: number,
outline?: boolean,
stroke?: string,
fill?: string,
style?: React.CSSProperties,
disableOptimization?: boolean,
Globe?: boolean
} 
	declare export interface LineProps {
line?: Line,
tabable?: boolean,
style?: {
default?: React.CSSProperties,
hover?: React.CSSProperties,
pressed?: React.CSSProperties
},
preserveMarkerAspect?: boolean,
buildPath?: (start: Point, end: Point, line: Line) => string,
onClick?: (line: Line, evt: React.MouseEvent<SVGPathElement>) => void,
onMouseEnter?: (line: Line, evt: React.MouseEvent<SVGPathElement>) => void,
onMouseMove?: (line: Line, evt: React.MouseEvent<SVGPathElement>) => void,
onMouseLeave?: (line: Line, evt: React.MouseEvent<SVGPathElement>) => void,
onMouseDown?: (line: Line, evt: React.MouseEvent<SVGPathElement>) => void,
onMouseUp?: (line: Line, evt: React.MouseEvent<SVGPathElement>) => void,
onFocus?: (line: Line, evt: React.FocusEvent<SVGPathElement>) => void,
onBlur?: (line: Line, evt: React.FocusEvent<SVGPathElement>) => void
} 
	declare export class ComposableMap mixins React.Component<ComposableMapProps> {}
	declare export class ZoomableGroup mixins React.Component<ZoomableGroupProps> {}
	declare export class ZoomableGlobe mixins React.Component<ZoomableGlobeProps> {}
	declare export class Geographies mixins React.Component<GeographiesProps> {}
	declare export class Geography mixins React.Component<GeographyProps> {}
	declare export class Markers mixins React.Component {}
	declare export class Marker mixins React.Component<MarkerProps> {}
	declare export class Annotations mixins React.Component {}
	declare export class Annotation mixins React.Component<AnnotationProps> {}
	declare export class Graticule mixins React.Component<GraticuleProps> {}
	declare export class Lines mixins React.Component {}
    }
