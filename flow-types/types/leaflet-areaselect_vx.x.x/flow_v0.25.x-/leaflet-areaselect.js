declare module "leaflet" {
  declare function areaSelect(box: AreaSelectOptions): AreaSelect;

  declare interface AreaSelectOptions {
    width?: number;
    height?: number;
    keepAspectRatio?: boolean;
  }
  declare interface Dimension {
    width: number;
    height: number;
  }
  declare interface AreaSelect {
    addTo(map: Map): Map;
    getBounds(): LatLngBounds;
    remove(): void;
    setDimensions(dim: Dimension): void;
  }
}
declare module "leaflet-areaselect" {
  import typeof * as L from "leaflet";
}
