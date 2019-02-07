declare module "object-diff" {
  declare function diff(a: any, b: any): any;

  declare module.exports: typeof diff;
}
