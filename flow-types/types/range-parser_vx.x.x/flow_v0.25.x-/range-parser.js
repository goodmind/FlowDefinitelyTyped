declare module "range-parser" {
  /**
   * When ranges are returned, the array has a "type" property which is the type of
   * range that is required (most commonly, "bytes"). Each array element is an object
   * with a "start" and "end" property for the portion of the range.
   * @returns `-1` when unsatisfiable and `-2` when syntactically invalid, ranges otherwise.
   */
  declare function RangeParser(
    size: number,
    str: string,
    options?: RangeParser$RangeParser$Options
  ): RangeParser$RangeParser$Result | RangeParser$RangeParser$Ranges;

  declare type RangeParser$Ranges = {
    type: string
  } & Array<RangeParser$Range>;

  declare interface RangeParser$Range {
    start: number;
    end: number;
  }

  declare interface RangeParser$Options {
    /**
     * The "combine" option can be set to `true` and overlapping & adjacent ranges
     * will be combined into a single range.
     */
    combine?: boolean;
  }

  declare type RangeParser$ResultUnsatisfiable = -1;

  declare type RangeParser$ResultInvalid = -2;

  declare type RangeParser$Result =
    | RangeParser$ResultUnsatisfiable
    | RangeParser$ResultInvalid;
  declare module.exports: typeof RangeParser;
}
