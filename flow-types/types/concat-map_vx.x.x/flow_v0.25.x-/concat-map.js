declare module "concat-map" {
  declare export default typeof concat_map;

  declare function concat_map<T, R>(xs: T[], fn: (x: T) => R | R[]): R[];
}
