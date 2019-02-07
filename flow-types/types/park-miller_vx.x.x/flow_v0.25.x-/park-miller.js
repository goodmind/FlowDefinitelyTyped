declare module "park-miller" {
  declare module.exports: typeof ParkMiller;

  declare class ParkMiller {
    constructor(seed: number): this;
    integer(): number;
    integerInRange(min: number, max: number): number;
    float(): number;
    floatInRange(min: number, max: number): number;
    boolean(): boolean;
  }
}
