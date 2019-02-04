declare module 'react-leaflet-markercluster' {
        import typeof * as Leaflet from 'leaflet';

	import typeof * as ReactLeaflet from 'react-leaflet';

	declare export type MarkerClusterGroupProps = ReactLeaflet.MapLayerProps & Leaflet.MarkerClusterGroupOptions;
	declare export default class MarkerClusterGroup<P: MarkerClusterGroupProps> mixins ReactLeaflet.MapLayer<P> {}
    }
