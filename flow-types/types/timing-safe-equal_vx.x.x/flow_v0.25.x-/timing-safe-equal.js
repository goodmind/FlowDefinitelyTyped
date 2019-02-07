declare module "timing-safe-equal" {
  declare module.exports: typeof timingSafeEqual;

  declare function timingSafeEqual(a: Buffer, b: Buffer): boolean;
}
