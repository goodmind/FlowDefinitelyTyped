declare module "robust-point-in-polygon" {
  declare type Point = [number, number];
  declare function robustPointInPolygon(vs: Point[], point: Point): number;

  declare export default typeof robustPointInPolygon;
}
