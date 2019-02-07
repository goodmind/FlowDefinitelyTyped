declare module "csv-stringify" {
  declare interface stringify$StringifyOpts {
    /**
     * List of fields, applied when transform returns an object.
     * Order matters, read the transformer documentation for additionnal information,
     * columns are auto discovered when the user write object, see the "header" option on how to print columns names on the first line.
     */
    columns?:
      | {
          [index: string]: string
        }
      | string[];

    /**
     * Set the field delimiter, one character only, defaults to a comma.
     */
    delimiter?: string;

    /**
     * Add the value of "options.rowDelimiter" on the last line, default to true.
     */
    eof?: boolean;

    /**
     * Defaults to the escape read option.
     */
    escape?: boolean;

    /**
     * Display the column names on the first line if the columns option is provided or discovered.
     */
    header?: boolean;

    /**
     * String used to delimit record rows or a special value;
     * special values are 'auto', 'unix', 'mac', 'windows', 'unicode'; defaults to 'auto' (discovered in source or 'unix' if no source is specified).
     */
    lineBreaks?: string;

    /**
     * Defaults to the quote read option.
     */
    quote?: string;

    /**
     * Boolean, default to false, quote all the non-empty fields even if not required.
     */
    quoted?: boolean;

    /**
     * Boolean, no default, quote empty fields? If specified, overrides quotedString for empty strings.
     */
    quotedEmpty?: boolean;

    /**
     * Boolean, default to false, quote all fields of type string even if not required.
     */
    quotedString?: boolean;

    /**
     * String used to delimit record rows or a special value;
     * special values are 'auto', 'unix', 'mac', 'windows', 'unicode'; defaults to 'auto' (discovered in source or 'unix' if no source is specified).
     */
    rowDelimiter?: string;

    /**
     * Override serialization of boolean, dates and complex objects.
     */
    formatters?: stringify$FormatterOpts;
  }

  declare interface stringify$FormatterOpts {
    bool?: (value: boolean) => string;
    date?: (value: Date) => string;
    object?: (value: any) => string;
  }

  declare type stringify$Stringifier = {
    write(
      line: string[] | any,
      encoding?: string,
      cb?: (error: Error | void, output: string) => void
    ): boolean,
    write(
      buffer: string | Buffer,
      cb?: (error: Error | void, output: string) => void
    ): boolean
  } & NodeJS.ReadWriteStream;

  /**
   * Streaming stringifier
   */
  declare function stringify(
    opts?: stringify$stringify$StringifyOpts
  ): stringify$stringify$Stringifier;

  /**
   * Callback version: string in --> callback with string out
   */
  declare function stringify(
    input: any[][] | Array<{}>,
    opts: stringify$stringify$StringifyOpts,
    callback: (error: Error | void, output: string) => void
  ): void;

  declare function stringify(
    input: any[][] | Array<{}>,
    callback: (error: Error | void, output: string) => void
  ): void;

  declare module.exports: typeof stringify;
}
