declare module "@mapbox/sphericalmercator" {
  declare interface XYBounds {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  }
  declare export {};

  declare type LatLngPoint = [number, number];
  declare type XYPoint = [number, number];
  declare type BoundingBox = [number, number, number, number];
  declare type Projection = "WGS84" | "900913";
  declare export default class SphericalMercator {
    constructor(options: {
      size: number
    }): this;
    px(ll: LatLngPoint, zoom: number): XYPoint;
    ll(px: XYPoint, zoom: number): LatLngPoint;
    bbox(
      x: number,
      y: number,
      zoom: number,
      tms_style: boolean,
      srs: Projection
    ): BoundingBox;
    xyz(
      bbox: BoundingBox,
      zoom: number,
      tms_style: boolean,
      srs: Projection
    ): XYBounds;
    convert(bbox: BoundingBox, to: Projection): BoundingBox;
    forward(ll: LatLngPoint): XYPoint;
    inverse(xy: XYPoint): LatLngPoint;
  }
}
