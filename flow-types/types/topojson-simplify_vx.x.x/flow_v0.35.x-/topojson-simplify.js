declare module 'topojson-simplify' {
        import typeof * as GeoJSON from 'geojson';

	import type {
          Objects,OrNull,Topology
        } from 'topojson-specification';

	declare export type Triangle = [[number, number], [number, number], [number, number]];
	declare export type TriangleWeighter = (triangle: Triangle) => number;
	declare export type Ring = Array<[number, number]>;
	declare export type RingWeighter = (triangle: Ring) => number;
	declare export type Filter = (ring: Ring, interior: boolean) => boolean;
	declare export function presimplify<T: Objects>(topology: Topology<T>, weight?: TriangleWeighter): Topology<T>

	declare export function simplify<T: Objects>(topology: Topology<T>, minWeight?: number): Topology<T>

	declare export function quantile(topology: Topology, p: number): number

	declare export function filter<K: Objects>(topology: Topology<K>, filter: Filter): Topology<OrNull<K>>

	declare export function filterAttached(topology: Topology): Filter

	declare export function filterAttachedWeight(topology: Topology, minWeight?: number, weight?: RingWeighter): Filter

	declare export function filterWeight(topology: Topology, minWeight?: number, weight?: RingWeighter): Filter

	declare export function planarRingArea(ring: Ring): number

	declare export function planarTriangleArea(triangle: Triangle): number

	declare export function sphericalRingArea(ring: Ring, interior: boolean): number

	declare export function sphericalTriangleArea(triangle: Triangle): number

    }
