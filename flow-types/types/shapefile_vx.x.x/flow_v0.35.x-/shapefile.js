declare module 'shapefile' {
        import type {
          Feature,FeatureCollection,GeometryObject,GeoJsonProperties
        } from 'geojson';

	import type {
          Readable
        } from 'stream';

	declare export interface Options {
encoding?: string,
highWaterMark?: number
} 
	declare export interface Source<RecordType> {
bbox: number[],
read(): Promise<{
done: boolean,
value: RecordType
}>,
cancel(): Promise<void>
} 
	declare export type Openable = string
| ArrayBuffer
| Uint8Array
| Readable
| ReadableStream;
	declare export function open(shp: Openable, dbf?: Openable, options?: Options): Promise<Source<Feature>>

	declare export function openShp(source: Openable, options?: Options): Promise<Source<GeometryObject>>

	declare export function openDbf(source: Openable, options?: Options): Promise<Source<GeoJsonProperties>>

	declare export function read(shp: Openable, dbf?: Openable, options?: Options): Promise<FeatureCollection>

    }
