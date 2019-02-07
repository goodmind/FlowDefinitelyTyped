declare module "random-int" {
  declare module.exports: typeof randomInt;

  declare function randomInt(max: number): number;

  declare function randomInt(min: number, max: number): number;
}
