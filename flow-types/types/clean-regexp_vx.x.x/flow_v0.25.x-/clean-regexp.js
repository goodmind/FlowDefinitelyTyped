declare module "clean-regexp" {
  declare module.exports: typeof cleanRegexp;

  declare function cleanRegexp(regexp: string, flags?: string): string;
}
