declare module "compute-stdev" {
  declare function stdev(data: ArrayLike<number>): number;

  declare module.exports: typeof stdev;
}
