declare module "wnumb" {
  /**
   * Create a wNumb
   */
  declare function wNumb(options?: wNumb$wNumb$Options): wNumb$wNumb$Instance;

  declare interface wNumb$Options {
    /**
     * The number of decimals to include in the result. Limited to 7.
     */
    decimals?: number;

    /**
     * The decimal separator.
     * Defaults to '.' if thousand isn't already set to '.'.
     */
    mark?: string;

    /**
     * Separator for large numbers. For example: ' ' would result in a formatted number of 1 000 000.
     */
    thousand?: string;

    /**
     * A string to prepend to the number. Use cases include prefixing with money symbols such as '$' or '€'.
     */
    prefix?: string;

    /**
     * A number to append to a number. For example: ',-'.
     */
    postfix?: string;

    /**
     * The prefix for negative values. Defaults to '-' if negativeBefore isn't set.
     */
    negative?: string;

    /**
     * The prefix for a negative number. Inserted before prefix.
     */
    negativeBefore?: string;

    /**
     * This is a powerful option to manually modify the slider output.
     *
     * For example, to show a number in another currency:
     * function( value ){
     *   return value * 1.32;
     * }
     */
    encoder?: (value: number) => number;

    /**
     * Reverse the operations set in encoder.
     * Use this option to undo modifications made while encoding the value.
     * function( value ){
     *    return value / 1.32;
     * }
     */
    decoder?: (value: number) => number;

    /**
     * Similar to encoder, but applied after all other formatting options are applied.
     */
    edit?: (value: number) => number;

    /**
     * Similar to decoder and the reverse for edit.
     * Applied before all other formatting options are applied.
     */
    undo?: (value: number) => number;
  }

  declare interface wNumb$Instance {
    /**
     * format to string
     */
    to(val: number): string;

    /**
     * get number from formatted string
     */
    from(val: string): number;
  }
}
