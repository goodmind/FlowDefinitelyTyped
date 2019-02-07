declare module "linear-gradient" {
  declare type Color = [number, number, number];
  declare class Gradient {
    constructor(colors: Color[]): this;

    /**
     * the input value should be normalized to the range between 0 and 1
     */
    calcArray(normalizedPercent: number): Color;

    /**
     * the input value should be normalized to the range between 0 and 1
     */
    calcHex(normalizedPrecent: number): string;
  }
  declare module.exports: typeof Gradient;
}
