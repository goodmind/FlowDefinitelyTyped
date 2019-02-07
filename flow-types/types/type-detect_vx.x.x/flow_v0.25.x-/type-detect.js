declare module "type-detect" {
  declare function typeDetect(obj: any): string;

  declare module.exports: typeof typeDetect;
}
