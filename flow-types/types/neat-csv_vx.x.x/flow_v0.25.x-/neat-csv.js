declare module "neat-csv" {
  import type { Readable } from "stream";

  declare function neatCsv(
    input: neatCsv$neatCsv$Input,
    options?: neatCsv$neatCsv$Options
  ): Promise<neatCsv$neatCsv$Row[]>;

  /**
   * The CSV data to parse.
   */
  declare type neatCsv$Input = string | Buffer | Readable;

  /**
   * A configuration object to be passed to csv-parser.
   */
  declare interface neatCsv$Options {
    escape?: string;
    headers?: $ReadOnlyArray<string> | boolean;
    mapHeaders?: (args: {
      header: string,
      index: number
    }) => string | null;
    mapValues?: (args: {
      header: string,
      index: number,
      value: any
    }) => any;
    newline?: string;
    quote?: string;
    raw?: boolean;
    separator?: string;
    skipLines?: number;
    maxRowBytes?: number;
    strict?: boolean;
  }

  /**
   * A representation of one row of the input CSV.
   */
  declare interface neatCsv$Row {
    [header: string]: string;
  }
  declare module.exports: typeof neatCsv;
}
