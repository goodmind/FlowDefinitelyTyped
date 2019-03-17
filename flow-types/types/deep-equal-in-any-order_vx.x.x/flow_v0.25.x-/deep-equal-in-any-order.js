declare module "global" {
  declare interface Chai$Deep {
    equalInAnyOrder: Equal;
  }
}
declare module "deep-equal-in-any-order" {
  declare function deepEqualInAnyOrder(chai: any, utils: any): void;

  declare export default typeof deepEqualInAnyOrder;
}
