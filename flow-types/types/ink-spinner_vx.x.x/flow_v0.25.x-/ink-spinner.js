declare module "ink-spinner" {
  import type { Chalk } from "chalk";

  import typeof * as cliSpinners from "cli-spinners";

  import type { Component } from "ink";

  declare type StringifyPartial<T> = $ObjMapi<T, <P>(P) => string>;
  declare type BooleansPartial<T> = $ObjMapi<T, <P>(P) => boolean>;
  declare type TupleOfNumbersPartial<T> = $ObjMapi<
    T,
    <P>(P) => [number, number, number]
  >;
  declare type Omit<T, K> = Pick<T, Exclude<$Keys<T>, K>>;
  declare type ChalkColorModels = Pick<
    Chalk,
    "rgb" | "hsl" | "hsv" | "hwb" | "bgRgb" | "bgHsl" | "bgHsv" | "bgHwb"
  >;
  declare type ChalkKeywordsAndHexes = Pick<
    Chalk,
    "keyword" | "hex" | "bgKeyword" | "bgHex"
  >;
  declare type ChalkCommons = Omit<
    Chalk,
    | $Keys<ChalkColorModels>
    | $Keys<ChalkKeywordsAndHexes>
    | "constructor"
    | "level"
    | "enabled"
  >;
  declare interface SpinnerProps {
    type?: cliSpinners.SpinnerName;
  }
  declare type ChalkProps = BooleansPartial<ChalkCommons> &
    StringifyPartial<ChalkKeywordsAndHexes> &
    TupleOfNumbersPartial<ChalkColorModels>;
  declare class Spinner mixins Component<SpinnerProps & ChalkProps> {}
  declare export default typeof Spinner;
}
