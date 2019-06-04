declare module "topojson-server" {
  import typeof * as GeoJSON from "geojson";

  import typeof * as TopoJSON from "topojson-specification";

  declare export function topology(
    objects: {
      [k: string]: GeoJSON.GeoJsonObject
    },
    quantization?: number
  ): TopoJSON.Topology;
}
