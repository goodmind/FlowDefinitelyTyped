declare module "leaflet" {
  declare type HeatLatLngTuple = [number, number, number];
  declare interface ColorGradientConfig {
    [key: number]: string;
  }
  declare interface HeatMapOptions {
    minOpacity?: number;
    maxZoom?: number;
    max?: number;
    radius?: number;
    blur?: number;
    gradient?: ColorGradientConfig;
  }
  declare type HeatLayer = {
    setOptions(options: HeatMapOptions): HeatLayer,
    addLatLng(latlng: LatLng | HeatLatLngTuple): HeatLayer,
    setLatLngs(latlngs: Array<LatLng | HeatLatLngTuple>): HeatLayer
  } & TileLayer;

  declare function heatLayer(
    latlngs: Array<LatLng | HeatLatLngTuple>,
    options: HeatMapOptions
  ): HeatLayer;
}
declare module "leaflet.heat" {
  import typeof * as L from "leaflet";
}
