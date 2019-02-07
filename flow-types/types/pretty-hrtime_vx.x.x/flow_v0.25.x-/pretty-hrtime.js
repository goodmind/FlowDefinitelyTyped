declare module "pretty-hrtime" {
  declare module.exports: typeof prettyHrtime;

  declare function prettyHrtime(
    hrTime: [number, number],
    options?: prettyHrtime$prettyHrtime$Options
  ): string;

  declare interface prettyHrtime$Options {
    verbose?: boolean;
    precise?: boolean;
  }
}
