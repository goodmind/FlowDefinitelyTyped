declare module "shuffle-array" {
  /**
   * copy - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
   * rng - Specifies a custom random number generator.
   */
  declare interface ShuffleOption {
    copy?: boolean;
    rng?: () => number;
  }

  /**
   * picks - Specifies how many random elements you want to pick. By default it picks 1.
   * rng - Specifies a custom random number generator.
   */
  declare interface PickOption {
    picks?: number;
    rng?: () => number;
  }
  declare interface ShuffleArray {
    /**
     * Randomizes the order of the elements in a given array.
     *
     * arr - The given array.
     * options - Optional configuration options.
     */
    <T>(arr: T[], options?: ShuffleOption): T[];

    /**
     * Pick one or more random elements from the given array.
     *
     * arr - The given array.
     * options - Optional configuration options.
     */
    pick<T>(arr: T[], options?: Object): T[];
  }
  declare var shuffle: ShuffleArray;
  declare module.exports: typeof shuffle;
}
