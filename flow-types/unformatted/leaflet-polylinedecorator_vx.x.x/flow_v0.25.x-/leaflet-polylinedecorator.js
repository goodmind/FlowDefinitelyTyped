declare module 'leaflet-polylinedecorator' {
        import typeof * as L from 'leaflet';

	declare module 'leaflet' {
        
      declare var npm$namespace$Symbol: {
        dash: typeof Symbol$dash,
arrowHead: typeof Symbol$arrowHead,
marker: typeof Symbol$marker,
        
      }
declare interface Symbol$DashOptions {
pixelSize?: number,
pathOptions?: PathOptions
} 

declare class Symbol$Dash  {
constructor(options?: Symbol$DashOptions): this
}

declare function Symbol$dash(options?: Symbol$DashOptions): Symbol$Dash


declare interface Symbol$ArrowHeadOptions {
polygon?: boolean,
pixelSize?: number,
headAngle?: number,
pathOptions?: PathOptions
} 

declare class Symbol$ArrowHead  {
constructor(options?: Symbol$ArrowHeadOptions): this
}

declare function Symbol$arrowHead(options?: Symbol$ArrowHeadOptions): Symbol$ArrowHead


declare interface Symbol$MarkerOptions {
rotate?: boolean,
markerOptions?: L.Symbol$MarkerOptions
} 

declare class Symbol$Marker  {
constructor(options?: Symbol$MarkerOptions): this
}

declare function Symbol$marker(options?: Symbol$MarkerOptions): Symbol$Marker

	declare interface Pattern {
offset?: number | string,
endOffset?: number | string,
repeat: number | string,
symbol: Symbol$Symbol$Dash | Symbol$Symbol$ArrowHead | Symbol$Symbol$Marker
} 
	declare interface PolylineDecoratorOptions {
patterns: Pattern[]
} 
	declare class PolylineDecorator mixins FeatureGroup {
constructor(paths: Polyline
| Polygon
| LatLngExpression[]
| Polyline[]
| Polygon[]
| LatLngExpression[][], options?: PolylineDecoratorOptions): this
}
	declare function polylineDecorator(
paths: Polyline | Polyline[],
options?: PolylineDecoratorOptions): PolylineDecorator

    }

    }
