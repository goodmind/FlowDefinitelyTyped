declare module 'leaflet.markercluster.layersupport' {
        import typeof * as L from 'leaflet';

	
	declare module 'leaflet' {
        declare type MarkerClusterGroup$LayerSupport = {

/**
 * Stamps the passed layers as being part of this group, but without adding
 * them to the map right now.
 */
checkIn(layers: Layer | Layer[]): this,

/**
 * Un-stamps the passed layers from being part of this group. It has to
 * remove them from map (if they are) since they will no longer cluster.
 */
checkOut(layers: Layer | Layer[]): this
} & MarkerClusterGroup

	declare type MarkerClusterGroupLayerSupportOptions = {

/**
 * Buffer single addLayer and removeLayer requests for efficiency.
 */
singleAddRemoveBufferDuration: number
} & MarkerClusterGroupOptions

	
      declare var npm$namespace$markerClusterGroup: {
        layerSupport: typeof markerClusterGroup$layerSupport,
        
      }

/**
 * Create a layer support marker cluster group, optionally given marker cluster group options.
 */
declare function markerClusterGroup$layerSupport(
options?: MarkerClusterGroupLayerSupportOptions): MarkerClusterGroup$MarkerClusterGroup$LayerSupport

    }

    }
