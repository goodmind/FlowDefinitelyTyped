declare module "format-number" {
  declare export default function fn(options?: {
    negativeType?: "right" | "left" | "brackets" | null,
    negativeLeftSymbol?: string,
    negative?: "R" | null,
    negativeRightSymbol?: string,
    negativeLeftOut?: boolean,
    negativeOut?: boolean,
    prefix?: string,
    suffix?: string,
    integerSeparator?: string,
    separator?: string,
    decimalsSeparator?: string,
    decimal?: string,
    padLeft?: number,
    padRight?: number,
    round?: number,
    truncate?: number,
    allowedSeparators?: string[]
  }): (
    number: number,
    overrideOptions?: {
      noUnits: boolean,
      noSeparator: boolean
    }
  ) => string;
}
