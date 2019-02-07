declare module "sparkly" {
  declare module.exports: typeof sparkly;

  declare function sparkly(
    numbers: Array<number | "">,
    options?: sparkly$sparkly$Options
  ): string;

  declare interface sparkly$Options {
    min?: number;
    max?: number;
    style?: "fire";
  }
}
