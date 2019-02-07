declare module "round-to" {
  declare var npm$namespace$roundTo: {
    up: typeof roundTo$up,
    down: typeof roundTo$down
  };

  /**
   * Round the decimals with `Math.ceil`.
   * @param input Number to adjust.
   * @param precision (Integer) number of decimal places.
   */
  declare function roundTo$up(input: number, precision: number): number;

  /**
   * Round the decimals with `Math.floor`.
   * @param input Number to adjust.
   * @param precision (Integer) number of decimal places.
   */
  declare function roundTo$down(input: number, precision: number): number;

  /**
   * Round the decimals with `Math.round`.
   * @param input Number to adjust.
   * @param precision (integer) Number of decimal places.
   */
  declare function roundTo(input: number, precision: number): number;

  declare module.exports: typeof roundTo;
}
