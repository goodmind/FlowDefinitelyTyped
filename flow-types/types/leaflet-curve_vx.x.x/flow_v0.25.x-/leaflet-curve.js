declare module "leaflet" {
  /**
   * Drawing Bezier curves and other complex shapes.
   */
  declare function curve(path: any[], options?: PathOptions): Path;
}
declare module "leaflet-curve" {
  import typeof * as L from "leaflet";
}
