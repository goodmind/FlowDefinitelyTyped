declare module "millisecond" {
  declare function millisecond(ms: string | number): number;

  declare module.exports: typeof millisecond;
}
