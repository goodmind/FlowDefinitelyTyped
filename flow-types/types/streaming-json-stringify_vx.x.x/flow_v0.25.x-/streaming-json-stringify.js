declare module "streaming-json-stringify" {
  import typeof * as stream from "stream";

  declare module.exports: typeof Stringify;

  declare var Stringify: StringifyFactory;
  declare interface StringifyFactory {
    (
      options?: Stringify$Stringify$Options
    ): Stringify$Stringify$Instance & stream.Transform;
    new(
      options?: Stringify$Stringify$Options
    ): Stringify$Stringify$Instance & stream.Transform;
  }
  declare interface Stringify$Instance {
    replacer: Stringify$Replacer;
    space: string | number;
    opener: string;
    seperator: string;
    closer: string;
    stringifier(
      value: any,
      replacer: Stringify$Replacer,
      space: string | number
    ): string;
  }

  declare type Stringify$Replacer = (key: string, value: any) => any;

  declare type Stringify$Options = $Shape<Stringify$Instance> &
    stream.TransformOptions;
}
