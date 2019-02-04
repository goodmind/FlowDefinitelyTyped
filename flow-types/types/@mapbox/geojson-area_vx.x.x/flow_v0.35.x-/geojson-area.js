declare module '@mapbox/geojson-area' {
        import type {
          Geometry
        } from 'geojson';

	declare function geometry(geo: Geometry): number

    }
