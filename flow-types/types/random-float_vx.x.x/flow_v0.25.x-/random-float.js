declare module "random-float" {
  declare module.exports: typeof randomFloat;

  declare function randomFloat(max: number): number;

  declare function randomFloat(min: number, max: number): number;
}
