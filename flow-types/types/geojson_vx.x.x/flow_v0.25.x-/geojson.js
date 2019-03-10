declare module "geojson" {
  /**
   * The valid values for the "type" property of GeoJSON geometry objects.
   * https://tools.ietf.org/html/rfc7946#section-1.4
   */
  declare export type GeoJsonGeometryTypes = $PropertyType<Geometry, "type">;

  /**
   * The value values for the "type" property of GeoJSON Objects.
   * https://tools.ietf.org/html/rfc7946#section-1.4
   */
  declare export type GeoJsonTypes = $PropertyType<GeoJSON, "type">;

  /**
   * Bounding box
   * https://tools.ietf.org/html/rfc7946#section-5
   */
  declare export type BBox =
    | [number, number, number, number]
    | [number, number, number, number, number, number];

  /**
   * A Position is an array of coordinates.
   * https://tools.ietf.org/html/rfc7946#section-3.1.1
   * Array should contain between two and three elements.
   * The previous GeoJSON specification allowed more elements (e.g., which could be used to represent M values),
   * but the current specification only allows X, Y, and (optionally) Z to be defined.
   */
  declare export type Position = number[];

  /**
   * The base GeoJSON object.
   * https://tools.ietf.org/html/rfc7946#section-3
   * The GeoJSON specification also allows foreign members
   * (https://tools.ietf.org/html/rfc7946#section-6.1)
   * Developers should use "&" type in TypeScript or extend the interface
   * to add these foreign members.
   */
  declare export interface GeoJsonObject {
    /**
     * Specifies the type of GeoJSON object.
     */
    type: GeoJsonTypes;

    /**
     * Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
     * The value of the bbox member is an array of length 2*n where n is the number of dimensions
     * represented in the contained geometries, with all axes of the most southwesterly point
     * followed by all axes of the more northeasterly point.
     * The axes order of a bbox follows the axes order of geometries.
     * https://tools.ietf.org/html/rfc7946#section-5
     */
    bbox?: BBox;
  }

  /**
   * Union of GeoJSON objects.
   */
  declare export type GeoJSON = Geometry | Feature<> | FeatureCollection<>;

  /**
   * Geometry object.
   * https://tools.ietf.org/html/rfc7946#section-3
   */
  declare export type Geometry =
    | Point
    | MultiPoint
    | LineString
    | MultiLineString
    | Polygon
    | MultiPolygon
    | GeometryCollection;
  declare export type GeometryObject = Geometry;

  /**
   * Point geometry object.
   * https://tools.ietf.org/html/rfc7946#section-3.1.2
   */
  declare export type Point = {
    type: "Point",
    coordinates: Position
  } & GeoJsonObject;

  /**
   * MultiPoint geometry object.
   *   https://tools.ietf.org/html/rfc7946#section-3.1.3
   */
  declare export type MultiPoint = {
    type: "MultiPoint",
    coordinates: Position[]
  } & GeoJsonObject;

  /**
   * LineString geometry object.
   * https://tools.ietf.org/html/rfc7946#section-3.1.4
   */
  declare export type LineString = {
    type: "LineString",
    coordinates: Position[]
  } & GeoJsonObject;

  /**
   * MultiLineString geometry object.
   * https://tools.ietf.org/html/rfc7946#section-3.1.5
   */
  declare export type MultiLineString = {
    type: "MultiLineString",
    coordinates: Position[][]
  } & GeoJsonObject;

  /**
   * Polygon geometry object.
   * https://tools.ietf.org/html/rfc7946#section-3.1.6
   */
  declare export type Polygon = {
    type: "Polygon",
    coordinates: Position[][]
  } & GeoJsonObject;

  /**
   * MultiPolygon geometry object.
   * https://tools.ietf.org/html/rfc7946#section-3.1.7
   */
  declare export type MultiPolygon = {
    type: "MultiPolygon",
    coordinates: Position[][][]
  } & GeoJsonObject;

  /**
   * Geometry Collection
   * https://tools.ietf.org/html/rfc7946#section-3.1.8
   */
  declare export type GeometryCollection = {
    type: "GeometryCollection",
    geometries: Geometry[]
  } & GeoJsonObject;

  declare export type GeoJsonProperties = {
    [name: string]: any
  } | null;

  /**
   * A feature object which contains a geometry and associated properties.
   * https://tools.ietf.org/html/rfc7946#section-3.2
   */
  declare export type Feature<
    G: Geometry | null = Geometry,
    P = GeoJsonProperties
  > = {
    type: "Feature",

    /**
     * The feature's geometry
     */
    geometry: G,

    /**
     * A value that uniquely identifies this feature in a
     * https://tools.ietf.org/html/rfc7946#section-3.2.
     */
    id?: string | number,

    /**
     * Properties associated with this feature.
     */
    properties: P
  } & GeoJsonObject;

  /**
   * A collection of feature objects.
   *   https://tools.ietf.org/html/rfc7946#section-3.3
   */
  declare export type FeatureCollection<
    G: Geometry | null = Geometry,
    P = GeoJsonProperties
  > = {
    type: "FeatureCollection",
    features: Array<Feature<G, P>>
  } & GeoJsonObject;
}
