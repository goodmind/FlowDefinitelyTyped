declare module '@mapbox/polyline' {
        declare export function decode(string: string, precision?: number): number[][]

	declare export function encode(coordinates: number[][], precision?: number): string

	declare export function fromGeoJSON(
geojson: GeoJSON.LineString | GeoJSON.Feature<GeoJSON.LineString>,
precision?: number): string

	declare export function toGeoJSON(string: string, precision?: number): GeoJSON.LineString

    }
