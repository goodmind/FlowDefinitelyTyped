declare module 'mapbox-gl-leaflet' {
        import typeof * as L from 'leaflet';

	declare module 'leaflet' {
        declare class MapboxGL mixins Layer {
constructor(options: MapboxGLOptions): this
}
	declare function mapboxGL(options: MapboxGLOptions): MapboxGL

	declare interface MapboxGLOptions {
accessToken: string,
style: string
} 
    }

    }
