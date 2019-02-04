declare module 'arcgis-to-geojson-utils' {
        import typeof * as ArcGis from 'arcgis-rest-api';

	
/**
 * Converts an ArcGIS geometry into a GeoJSON geometry.
 */
declare export function arcgisToGeoJSON<T: ArcGis.Geometry>(arcgis: T): GeoJSON.GeometryObject

	
/**
 * Converts a GeoJSON geometry into a ArcGIS geometry.
 */
declare export function geojsonToArcGIS(geojson: GeoJSON.GeometryObject): ArcGis.Geometry

    }
