declare module "xtend" {
  declare interface Xtend {
    <T, U>(target: T, source: U): T & U;
    <T, U, V>(target: T, source1: U, source2: V): T & U & V;
    <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    <T, U, V, W, Q>(
      target: T,
      source1: U,
      source2: V,
      source3: W,
      source4: Q
    ): T & U & V & W & Q;
    <T, U, V, W, Q, R>(
      target: T,
      source1: U,
      source2: V,
      source3: W,
      source4: Q,
      source5: R
    ): T & U & V & W & Q & R;
    (target: any, ...sources: any[]): any;
  }
  declare var xtend: Xtend;
  declare module.exports: typeof xtend;
}
