declare module "topojson-specification" {
  import typeof * as GeoJSON from "geojson";

  declare export interface TopoJSON {
    type: "Topology" | GeoJSON.GeoJsonGeometryTypes | null;
    bbox?: GeoJSON.BBox;
  }
  declare export type Topology<T: Objects<Properties> = Objects<Properties>> = {
    type: "Topology",
    objects: T,
    arcs: Arc[],
    transform?: Transform
  } & TopoJSON;

  declare export type Positions = number[];
  declare export interface Transform {
    scale: [number, number];
    translate: [number, number];
  }
  declare export type Arc = Positions[];
  declare export type ArcIndexes = number[];
  declare export type Properties = GeoJSON.GeoJsonProperties;
  declare export interface Objects<P: Properties = {}> {
    [key: string]: GeometryObject<P>;
  }
  declare export type GeometryObjectA<P: Properties = {}> = {
    type: GeoJSON.GeoJsonGeometryTypes | null,
    id?: number | string,
    properties?: P
  } & TopoJSON;

  declare export type GeometryObject<P: Properties = {}> =
    | Point<P>
    | MultiPoint<P>
    | LineString<P>
    | MultiLineString<P>
    | Polygon<P>
    | MultiPolygon<P>
    | GeometryCollection<P>
    | NullObject;
  declare export type Point<P: Properties = {}> = {
    type: "Point",
    coordinates: Positions
  } & GeometryObjectA<P>;

  declare export type MultiPoint<P: Properties = {}> = {
    type: "MultiPoint",
    coordinates: Positions[]
  } & GeometryObjectA<P>;

  declare export type LineString<P: Properties = {}> = {
    type: "LineString",
    arcs: ArcIndexes
  } & GeometryObjectA<P>;

  declare export type MultiLineString<P: Properties = {}> = {
    type: "MultiLineString",
    arcs: ArcIndexes[]
  } & GeometryObjectA<P>;

  declare export type Polygon<P: Properties = {}> = {
    type: "Polygon",
    arcs: ArcIndexes[]
  } & GeometryObjectA<P>;

  declare export type MultiPolygon<P: Properties = {}> = {
    type: "MultiPolygon",
    arcs: ArcIndexes[][]
  } & GeometryObjectA<P>;

  declare export type GeometryCollection<P: Properties = {}> = {
    type: "GeometryCollection",
    geometries: Array<GeometryObject<P>>
  } & GeometryObjectA<P>;

  declare export type NullObject = {
    type: null
  } & GeometryObjectA;

  declare export type OrNull<T: Objects> = $ObjMapi<
    T,
    <P>(P) => $ElementType<T, P> | NullObject
  >;
}
