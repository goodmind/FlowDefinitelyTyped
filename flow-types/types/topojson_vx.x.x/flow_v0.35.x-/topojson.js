declare module 'topojson' {
        import typeof * as GeoJSON from 'geojson';

	import typeof * as TopoJSON from 'topojson-specification';

	declare export function topology(
objects: {
[k: string]: GeoJSON.GeoJsonObject
},
quantization?: number): TopoJSON.Topology

	declare export * from 'topojson-simplify';

	declare export * from 'topojson-client';

	declare export type UsAtlas = {
objects: {
counties: {
type: "GeometryCollection",
geometries: Array<TopoJSON.Polygon | TopoJSON.MultiPolygon>
},
states: {
type: "GeometryCollection",
geometries: Array<TopoJSON.Polygon | TopoJSON.MultiPolygon>
},
nation: TopoJSON.GeometryCollection
},
bbox: [number, number, number, number],
transform: TopoJSON.Transform
} & TopoJSON.Topology

	declare export type WorldAtlas = {
objects: {
countries: {
type: "GeometryCollection",
geometries: Array<TopoJSON.Polygon | TopoJSON.MultiPolygon>
},
land: TopoJSON.GeometryCollection
},
bbox: [number, number, number, number],
transform: TopoJSON.Transform
} & TopoJSON.Topology

    }
