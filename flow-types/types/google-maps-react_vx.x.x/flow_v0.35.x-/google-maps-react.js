declare module 'google-maps-react' {
        
	import typeof * as React from 'react';

	declare export interface GoogleApiOptions {
apiKey: string,
libraries?: string[],
client?: string,
url?: string,
version?: string,
language?: string,
region?: string,
LoadingContainer?: any
} 
	declare export type GoogleApiOptionsFunc = (props: any) => GoogleApiOptions;
	declare type Omit<T1, T2> = Pick<T1, Exclude<$Keys<T1>, $Keys<T2>>>;
	declare export type GoogleAPI = typeof google;
	declare export function GoogleApiWrapper(
opts: GoogleApiOptions | GoogleApiOptionsFunc): <TProps: ProvidedProps>(
ctor: React.ComponentType<TProps>) => React.ComponentType<Omit<TProps, ProvidedProps>>

	declare export interface ProvidedProps {
google: GoogleAPI,
loaded?: boolean
} 
	declare type mapEventHandler = (mapProps?: MapProps, map?: google.maps.Map, event?: any) => any;
	declare export type MapProps = {
google: GoogleAPI,
loaded?: boolean,
bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral,
centerAroundCurrentLocation?: boolean,
initialCenter?: google.maps.LatLngLiteral,
visible?: boolean,
onReady?: mapEventHandler,
onClick?: mapEventHandler,
onDragend?: mapEventHandler,
onRecenter?: mapEventHandler,
onBoundsChanged?: mapEventHandler,
onCenterChanged?: mapEventHandler,
onDblclick?: mapEventHandler,
onDragstart?: mapEventHandler,
onHeadingChange?: mapEventHandler,
onIdle?: mapEventHandler,
onMaptypeidChanged?: mapEventHandler,
onMousemove?: mapEventHandler,
onMouseover?: mapEventHandler,
onMouseout?: mapEventHandler,
onProjectionChanged?: mapEventHandler,
onResize?: mapEventHandler,
onRightclick?: mapEventHandler,
onTilesloaded?: mapEventHandler,
onTiltChanged?: mapEventHandler,
onZoomChanged?: mapEventHandler
} & undefined.MapOptions

	declare type markerEventHandler = (props?: MarkerProps, marker?: google.maps.Marker, event?: any) => any;
	declare export type MarkerProps = {
mapCenter?: google.maps.LatLng | google.maps.LatLngLiteral,
onClick?: markerEventHandler,
onMouseover?: markerEventHandler
} & $Shape<google.maps.MarkerOptions>

	declare export class Map mixins React.Component<MapProps, any> {}
	declare export class Marker mixins React.Component<MarkerProps, any> {}
	declare export class Polygon mixins React.Component<any, any> {}
	declare export class Polyline mixins React.Component<any, any> {}
	declare export class Circle mixins React.Component<any, any> {}
	declare export class HeatMap mixins React.Component<any, any> {}
	declare export type InfoWindowProps = {
google: typeof google,
map: google.maps.Map,
marker: google.maps.Marker,
mapCenter?: google.maps.LatLng | google.maps.LatLngLiteral,
visible?: boolean
} & $Shape<google.maps.InfoWindowOptions>

	declare export class InfoWindow mixins React.Component<InfoWindowProps, any> {}
	declare export {
          
        }

    }
