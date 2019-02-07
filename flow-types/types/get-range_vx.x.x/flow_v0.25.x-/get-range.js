declare module "get-range" {
  declare module.exports: typeof getRange;

  declare function getRange(stop: number): Iterator<number> & Iterable<number>;

  declare function getRange(
    start: number,
    stop: number,
    step?: number
  ): Iterator<number> & Iterable<number>;
}
