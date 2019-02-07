declare module "setasap" {
  declare module.exports: typeof setAsap;

  declare function setAsap(handler: (() => void) | string): void;
}
