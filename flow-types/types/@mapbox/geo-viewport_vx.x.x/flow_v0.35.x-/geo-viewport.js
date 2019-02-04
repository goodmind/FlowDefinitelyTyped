declare module '@mapbox/geo-viewport' {
        declare export interface GeoViewport {
center: [number, number],
zoom: number
} 
	declare export type BoundingBox = [number, number, number, number];
	declare export function viewport(
bounds: BoundingBox,
dimensions: [number, number],
minzoom?: number,
maxzoom?: number,
tileSize?: number,
allowFloat?: boolean): GeoViewport

	declare export function bounds(
viewport: {
lon: number,
lat: number
} | [number, number],
zoom: number,
dimensions: [number, number],
tileSize?: number): BoundingBox

    }
