declare module 'topojson-client' {
        import typeof * as GeoJSON from 'geojson';

	import type {
          GeometryCollection,GeometryObject,LineString,MultiLineString,MultiPoint,MultiPolygon,Objects,Point,Polygon,Topology,Transform
        } from 'topojson-specification';

	declare export type Transformer = (point: number[], index?: boolean) => number[];
	declare export function feature<P= GeoJSON.GeoJsonProperties>(
topology: Topology,
object: Point<P>): GeoJSON.Feature<GeoJSON.Point, P>

	declare export function feature<P= GeoJSON.GeoJsonProperties>(
topology: Topology,
object: MultiPoint<P>): GeoJSON.Feature<GeoJSON.MultiPoint, P>

	declare export function feature<P= GeoJSON.GeoJsonProperties>(
topology: Topology,
object: LineString<P>): GeoJSON.Feature<GeoJSON.LineString, P>

	declare export function feature<P= GeoJSON.GeoJsonProperties>(
topology: Topology,
object: MultiLineString<P>): GeoJSON.Feature<GeoJSON.MultiLineString, P>

	declare export function feature<P= GeoJSON.GeoJsonProperties>(
topology: Topology,
object: Polygon<P>): GeoJSON.Feature<GeoJSON.Polygon, P>

	declare export function feature<P= GeoJSON.GeoJsonProperties>(
topology: Topology,
object: MultiPolygon<P>): GeoJSON.Feature<GeoJSON.MultiPolygon, P>

	declare export function feature<P= GeoJSON.GeoJsonProperties>(
topology: Topology,
object: GeometryCollection<P>): GeoJSON.FeatureCollection<GeoJSON.GeometryObject, P>

	declare export function feature<P= GeoJSON.GeoJsonProperties>(
topology: Topology,
object: GeometryObject<P>): GeoJSON.Feature<GeoJSON.GeometryObject, P> | GeoJSON.FeatureCollection<GeoJSON.GeometryObject, P>

	declare export function merge(
topology: Topology,
objects: Array<Polygon | MultiPolygon>): GeoJSON.MultiPolygon

	declare export function mergeArcs(topology: Topology, objects: Array<Polygon | MultiPolygon>): MultiPolygon

	declare export function mesh(
topology: Topology,
obj?: GeometryObject,
filter?: (a: GeometryObject, b: GeometryObject) => boolean): GeoJSON.MultiLineString

	declare export function meshArcs(
topology: Topology,
obj?: GeometryObject,
filter?: (a: GeometryObject, b: GeometryObject) => boolean): MultiLineString

	declare export function neighbors(objects: GeometryObject[]): number[][]

	declare export function bbox(topology: Topology): GeoJSON.BBox

	declare export function quantize<T: Objects>(topology: Topology<T>, transform: Transform | number): Topology<T>

	declare export function transform(transform: Transform | null): Transformer

	declare export function untransform(transform: Transform | null): Transformer

    }
