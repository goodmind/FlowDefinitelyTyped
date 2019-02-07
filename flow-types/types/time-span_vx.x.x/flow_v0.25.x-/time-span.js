declare module "time-span" {
  declare interface timeSpan$TimeSpanObject {
    (): number;
    rounded(): number;
    sec(): number;
    nano(): number;
  }
  declare function timeSpan(): timeSpan$timeSpan$TimeSpanObject;

  declare module.exports: typeof timeSpan;
}
