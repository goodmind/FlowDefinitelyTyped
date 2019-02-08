declare var npm$namespace$duration: {
  fn: typeof duration$fn
};
declare var duration$fn: Duration;
declare module "moment" {
  declare interface Duration {
    format: Format;
  }
  declare interface Format {
    defaults: DurationFormatSettings;
    (
      template: string | TemplateFunction,
      precision: number,
      settings?: DurationFormatSettings
    ): string;
    (
      template: string | TemplateFunction,
      settings?: DurationFormatSettings
    ): string;
    (settings?: DurationFormatSettings): string;
  }
  declare type UnitOfTrimV1 = "left" | "right";
  declare type UnitOfTrim =
    | "large"
    | "small"
    | "both"
    | "mid"
    | "all"
    | "final";
  declare interface DurationFormatSettings {
    trim?:
      | false
      | UnitOfTrimV1
      | UnitOfTrim
      | string
      | Array<UnitOfTrim | string>;
    largest?: number;
    trunc?: true;
    stopTrim?: string;
    minValue?: number;
    maxValue?: number;
    useGrouping?: boolean;
    precision?: number;
    decimalSeparator?: string;
    groupingSeparator?: string;
    grouping?: number[];
    useSignificantDigits?: true;
    forceLength?: boolean;
    template?: string | TemplateFunction;
    userLocale?: string;
    usePlural?: boolean;
    useLeftUnits?: boolean;
    useToLocaleString?: boolean;
  }
  declare type DurationLabelType = "long" | "standard" | "short";
  declare type DurationTemplate = "HMS" | "HM" | "MS";
  declare type DurationToken =
    | "S"
    | "SS"
    | "SSS"
    | "s"
    | "ss"
    | "sss"
    | "m"
    | "mm"
    | "mmm"
    | "h"
    | "hh"
    | "hhh"
    | "d"
    | "dd"
    | "ddd"
    | "w"
    | "ww"
    | "www"
    | "M"
    | "MM"
    | "MMM"
    | "y"
    | "yy"
    | "yyy";
  declare type DurationLabelDef = $ObjMapi<
    { [k: DurationToken]: any },
    <duration>(duration) => string
  >;
  declare type DurationTimeDef = $ObjMapi<
    { [k: DurationTemplate]: any },
    <template>(template) => string
  >;
  declare interface DurationLabelTypeDef {
    type: DurationLabelType;
    string: string;
  }
  declare interface LocaleSpecification {
    durationLabelsLong?: DurationLabelDef;
    durationLabelsStandard?: DurationLabelDef;
    durationLabelsShort?: DurationLabelDef;
    durationTimeTemplates?: DurationTimeDef;
    durationLabelTypes?: DurationLabelTypeDef[];
    durationPluralKey?: (
      token: string,
      integerValue: number,
      decimalValue: number
    ) => string;
  }
  declare type TemplateFunction = () => string;
}
declare module "moment-duration-format" {
  import typeof * as moment from "moment";

  declare function momentDurationFormatSetup(_moment: typeof moment): void;

  declare module.exports: typeof momentDurationFormatSetup;
}
