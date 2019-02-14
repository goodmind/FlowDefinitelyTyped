declare module "power-assert-formatter" {
  declare function powerAssertFormatter(
    options?: powerAssertFormatter$Options
  ): powerAssertFormatter$Formatter;

  declare var npm$namespace$powerAssertFormatter: {
    defaultOptions: typeof powerAssertFormatter$defaultOptions
  };
  declare export interface powerAssertFormatter$Options {
    lineDiffThreshold?: number;
    maxDepth?: number;
    outputOffset?: number;
    anonymous?: string;
    circular?: string;
    lineSeparator?: string;
    ambiguousEastAsianCharWidth?: number;
    widthOf?: Function;
    stringify?: Function;
    diff?: Function;
    writerClass?: {
      new(): any
    };
    renderers?: any[];
  }

  declare export interface powerAssertFormatter$Formatter {
    (powerAssertContext: any): string;
  }

  declare export function powerAssertFormatter$defaultOptions(): powerAssertFormatter$Options;
}
