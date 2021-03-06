declare module "osmtogeojson" {
  declare export interface OsmToGeoJSON {
    (
      data: Document | OsmJSON$OsmJSON$OsmJSONObject,
      options?: Options
    ): GeoJSON$GeoJSON$GeoJSONObject;
    toGeojson(
      data: Document | OsmJSON$OsmJSON$OsmJSONObject,
      options?: Options
    ): GeoJSON$GeoJSON$GeoJSONObject;
  }
  declare export interface Options {
    verbose?: boolean;

    /**
     * If true, the resulting GeoJSON feature's properties will be a simple key-value list instead of a structured json object (with separate tags and metadata). default: false
     */
    flatProperties?: boolean;

    /**
     * Either a blacklist of tag keys or a callback function. Will be used to decide if a feature is interesting enough for its own GeoJSON feature.
     */
    uninterestingTags?:
      | {
          [tag: string]: boolean
        }
      | Function;

    /**
     * Either a json object or callback function that is used to determine if a closed way should be treated as a Polygon or LineString.
     */
    polygonFeatures?: any | Function;
  }
  declare export interface GeoJSON$GeoJSONObject {
    type: string;
  }

  declare export type GeoJSON$Feature = {
    id?: string,
    geometry: GeoJSON$Geometry,
    properties: any
  } & GeoJSON$GeoJSONObject;

  declare export type GeoJSON$FeatureCollection = {
    features: GeoJSON$Feature[]
  } & GeoJSON$GeoJSONObject;

  declare export type GeoJSON$Geometry = {
    coordinates:
      | GeoJSON$Coordinate
      | GeoJSON$Coordinate[]
      | GeoJSON$Coordinate[][]
  } & GeoJSON$GeoJSONObject;

  declare export type GeoJSON$GeometryCollection = {
    geometries: GeoJSON$Geometry[]
  } & GeoJSON$GeoJSONObject;

  declare export type GeoJSON$Coordinate2d = [number, number];

  declare export type GeoJSON$Coordinate3d = [number, number, number];

  declare export type GeoJSON$Coordinate =
    | GeoJSON$Coordinate2d
    | GeoJSON$Coordinate3d;
  declare export interface OsmJSON$OsmJSONObject {
    elements: (OsmJSON$Node | OsmJSON$Way | OsmJSON$Relationship)[];
  }

  declare export interface OsmJSON$Element {
    type: string;
    id: number;
    tags?: {
      [name: string]: string
    };
    timestamp?: string;
    version?: number;
    changeset?: number;
    user?: string;
    uid?: number;
  }

  declare export type OsmJSON$Node = {
    lat: number,
    lon: number
  } & OsmJSON$Element;

  declare export type OsmJSON$Way = {
    nodes: number[]
  } & OsmJSON$Element;

  declare export type OsmJSON$Relationship = {
    members: OsmJSON$Member[]
  } & OsmJSON$Element;

  declare export interface OsmJSON$Member {
    type: string;
    ref: number;
    role: string;
  }
  declare var osmtogeojson: OsmToGeoJSON;
  declare export default typeof osmtogeojson;
}
