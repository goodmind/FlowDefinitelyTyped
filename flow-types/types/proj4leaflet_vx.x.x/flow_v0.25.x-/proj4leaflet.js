declare module "leaflet" {
  declare var npm$namespace$Proj: {
    geoJson: typeof Proj$geoJson,
    imageOverlay: typeof Proj$imageOverlay,

    CRS: typeof Proj$CRS,
    GeoJSON: typeof Proj$GeoJSON,
    ImageOverlay: typeof Proj$ImageOverlay
  };
  declare class Proj$CRS mixins CRS {
    projection: Projection;
    transformation: Transformation;
    code: string;
    wrapLng: [number, number];
    wrapLat: [number, number];
    infinite: boolean;
    constructor(
      projection: proj4.InterfaceProjection,
      options?: Proj$ProjCRSOptions
    ): this;
    constructor(
      code: string,
      proj4def: string,
      options?: Proj$ProjCRSOptions
    ): this;
    latLngToPoint(latlng: LatLngExpression, zoom: number): Point;
    pointToLatLng(point: PointExpression, zoom: number): LatLng;
    project(latlng: LatLng | LatLngLiteral): Point;
    unproject(point: PointExpression): LatLng;
    scale(zoom: number): number;
    zoom(scale: number): number;
    getProjectedBounds(zoom: number): Bounds;
    distance(latlng1: LatLngExpression, latlng2: LatLngExpression): number;
    wrapLatLng(latlng: LatLng | LatLngLiteral): LatLng;
  }

  declare class Proj$GeoJSON mixins L.GeoJSON {}

  declare var Proj$geoJson: (
    geojson?: Proj4GeoJSONFeature,
    options?: GeoJSONOptions
  ) => Proj$GeoJSON;

  declare class Proj$ImageOverlay mixins L.ImageOverlay {}

  declare var Proj$imageOverlay: (
    imageUrl: string,
    bounds: LatLngBoundsExpression,
    options?: ImageOverlayOptions
  ) => Proj$ImageOverlay;

  declare interface Proj$ProjCRSOptions {
    bounds?: Bounds;
    origin?: [number, number];
    scales?: number[];
    resolutions?: number[];
    transformation?: Transformation;
  }
}
declare module "proj4leaflet" {
  import typeof * as geojson from "geojson";

  import typeof * as L from "leaflet";

  import typeof * as proj4 from "proj4";

  declare export type Proj4GeoJSONFeature = geojson.Feature<geojson.GeometryObject> & {
    crs?: {
      type: string,
      properties: {
        name: string
      }
    }
  };
}
