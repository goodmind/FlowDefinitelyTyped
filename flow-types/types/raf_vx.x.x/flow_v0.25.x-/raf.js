declare module "raf" {
  declare var raf: {
    (callback: (timestamp: number) => void): number,
    cancel: (handle: number) => void,
    polyfill: (globalObject?: any) => void
  };
  declare module.exports: typeof raf;
}
