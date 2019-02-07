declare module "d3-dsv" {
  /**
   * An object representing a DSV parsed row with values represented as strings.
   * When the DSV content is not well-structured and some column-values are missing, `undefined` is used as value.
   */
  declare export type DSVRowString<Columns: string = string> = $ObjMapi<
    { [k: Columns]: any },
    <key>(key) => string | void
  >;

  /**
   * An object in raw format before parsing, that is with only string values.
   * When the DSV content is not well-structured and some column-values are missing, `undefined` is used as value.
   */
  declare export type DSVRaw<T: { [key: string]: any }> = $ObjMapi<
    T,
    <key>(key) => string | void
  >;

  /**
   * An object representing a DSV parsed row with values represented as an arbitrary datatype, depending
   * on the performed parsed row mapping.
   * @deprecated Use `object` instead.
   */
  declare export interface DSVRowAny {
    [key: string]: any;
  }

  /**
   * An array object representing all deserialized rows. The array is enhanced with a property listing
   * the names of the parsed columns.
   */
  declare export type DSVRowArray<Columns: string = string> = {
    /**
     * List of column names.
     */
    columns: Columns[]
  } & Array<DSVRowString<Columns>>;

  /**
   * An array object representing all parsed rows. The array is enhanced with a property listing
   * the names of the parsed columns.
   */
  declare export type DSVParsedArray<T> = {
    /**
     * List of column names.
     */
    columns: Array<$Keys<T>>
  } & Array<T>;

  /**
   * Parses the specified string, which must be in the comma-separated values format, returning an array of objects representing the parsed rows.
   *
   * Unlike csvParseRows, this method requires that the first line of the CSV content contains a comma-separated list of column names;
   * these column names become the attributes on the returned objects.
   *
   * The returned array also exposes a columns property containing the column names in input order (in contrast to Object.keys, whose iteration order is arbitrary).
   *
   * Equivalent to `dsvFormat(",").parse`.
   * @param csvString A string, which must be in the comma-separated values format.
   */
  declare export function csvParse<Columns: string>(
    csvString: string
  ): DSVRowArray<Columns>;

  /**
 * Parses the specified string, which must be in the comma-separated values format, returning an array of objects representing the parsed rows.
 * 
 * Unlike csvParseRows, this method requires that the first line of the CSV content contains a comma-separated list of column names;
 * these column names become the attributes on the returned objects.
 * 
 * The returned array also exposes a columns property containing the column names in input order (in contrast to Object.keys, whose iteration order is arbitrary).
 * 
 * Equivalent to `dsvFormat(",").parse`.
 * @param csvString A string, which must be in the comma-separated values format.
 * @param row A row conversion function which is invoked for each row, being passed an object representing the current row (d),
the index (i) starting at zero for the first non-header row, and the array of column names. If the returned value is null or undefined,
the row is skipped and will be omitted from the array returned by dsv.parse; otherwise, the returned value defines the corresponding row object.
In effect, row is similar to applying a map and filter operator to the returned rows.
 */
  declare export function csvParse<
    ParsedRow: { [key: string]: any },
    Columns: string
  >(
    csvString: string,
    row: (
      rawRow: DSVRowString<Columns>,
      index: number,
      columns: Columns[]
    ) => ParsedRow | void | null
  ): DSVParsedArray<ParsedRow>;

  /**
   * Parses the specified string, which must be in the comma-separated values format, returning an array of arrays representing the parsed rows.
   *
   * Unlike csvParse, this method treats the header line as a standard row, and should be used whenever CSV content does not contain a header.
   * Each row is represented as an array rather than an object. Rows may have variable length.
   *
   * If a row conversion function is not specified, field values are strings. For safety, there is no automatic conversion to numbers, dates, or other types.
   * In some cases, JavaScript may coerce strings to numbers for you automatically (for example, using the + operator), but better is to specify a row conversion function.
   *
   * Equivalent to `dsvFormat(",").parseRows`.
   * @param csvString A string, which must be in the comma-separated values format.
   */
  declare export function csvParseRows(csvString: string): string[][];

  /**
 * Parses the specified string, which must be in the comma-separated values format, returning an array of arrays representing the parsed rows.
 * 
 * Unlike csvParse, this method treats the header line as a standard row, and should be used whenever CSV content does not contain a header.
 * Each row is represented as an array rather than an object. Rows may have variable length.
 * 
 * Equivalent to `dsvFormat(",").parseRows`.
 * @param csvString A string, which must be in the comma-separated values format.
 * @param row A row conversion function which is invoked for each row, being passed an array representing the current row (d), the index (i)
starting at zero for the first row, and the array of column names. If the returned value is null or undefined,
the row is skipped and will be omitted from the array returned by dsv.parse; otherwise, the returned value defines the corresponding row object.
In effect, row is similar to applying a map and filter operator to the returned rows.
 */
  declare export function csvParseRows<ParsedRow: { [key: string]: any }>(
    csvString: string,
    row: (rawRow: string[], index: number) => ParsedRow | void | null
  ): ParsedRow[];

  /**
   * Formats the specified array of object rows as comma-separated values, returning a string.
   * This operation is the inverse of csvParse. Each row will be separated by a newline (\n),
   * and each column within each row will be separated by the comma-delimiter.
   * Values that contain either the comma-delimiter, a double-quote (") or a newline will be escaped using double-quotes.
   *
   * If columns is not specified, the list of column names that forms the header row is determined by the union of all properties on all objects in rows;
   * the order of columns is nondeterministic.
   *
   * Equivalent to `dsvFormat(",").format`.
   * @param rows Array of object rows.
   * @param columns An array of strings representing the column names.
   */
  declare export function csvFormat<T: { [key: string]: any }>(
    rows: T[],
    columns?: Array<$Keys<T>>
  ): string;

  /**
   * Formats the specified array of array of string rows as comma-separated values, returning a string.
   * This operation is the reverse of csvParseRows. Each row will be separated by a newline (\n),
   * and each column within each row will be separated by the comma-delimiter.
   * Values that contain either the comma-delimiter, a double-quote (") or a newline will be escaped using double-quotes.
   *
   * To convert an array of objects to an array of arrays while explicitly specifying the columns, use array.map.
   * If you like, you can also array.concat this result with an array of column names to generate the first row.
   *
   * Equivalent to `dsvFormat(",").formatRows`.
   * @param rows An array of array of string rows.
   */
  declare export function csvFormatRows(rows: string[][]): string;

  /**
   * Parses the specified string, which must be in the tab-separated values format, returning an array of objects representing the parsed rows.
   *
   * Unlike tsvParseRows, this method requires that the first line of the TSV content contains a tab-separated list of column names;
   * these column names become the attributes on the returned objects.
   *
   * The returned array also exposes a columns property containing the column names in input order (in contrast to Object.keys, whose iteration order is arbitrary).
   *
   * Equivalent to `dsvFormat("\t").parse`.
   * @param tsvString A string, which must be in the tab-separated values format.
   */
  declare export function tsvParse<Columns: string>(
    tsvString: string
  ): DSVRowArray<Columns>;

  /**
 * Parses the specified string, which must be in the tab-separated values format, returning an array of objects representing the parsed rows.
 * 
 * Unlike tsvParseRows, this method requires that the first line of the TSV content contains a tab-separated list of column names;
 * these column names become the attributes on the returned objects.
 * 
 * The returned array also exposes a columns property containing the column names in input order (in contrast to Object.keys, whose iteration order is arbitrary).
 * 
 * Equivalent to `dsvFormat("\t").parse`.
 * @param tsvString A string, which must be in the tab-separated values format.
 * @param row A row conversion function which is invoked for each row, being passed an object representing the current row (d),
the index (i) starting at zero for the first non-header row, and the array of column names. If the returned value is null or undefined,
the row is skipped and will be omitted from the array returned by dsv.parse; otherwise, the returned value defines the corresponding row object.
In effect, row is similar to applying a map and filter operator to the returned rows.
 */
  declare export function tsvParse<
    ParsedRow: { [key: string]: any },
    Columns: string
  >(
    tsvString: string,
    row: (
      rawRow: DSVRowString<Columns>,
      index: number,
      columns: Columns[]
    ) => ParsedRow | void | null
  ): DSVParsedArray<ParsedRow>;

  /**
   * Parses the specified string, which must be in the tab-separated values format, returning an array of arrays representing the parsed rows.
   *
   * Unlike tsvParse, this method treats the header line as a standard row, and should be used whenever TSV content does not contain a header.
   * Each row is represented as an array rather than an object. Rows may have variable length.
   *
   * If a row conversion function is not specified, field values are strings. For safety, there is no automatic conversion to numbers, dates, or other types.
   * In some cases, JavaScript may coerce strings to numbers for you automatically (for example, using the + operator), but better is to specify a row conversion function.
   *
   * Equivalent to `dsvFormat("\t").parseRows`.
   * @param tsvString A string, which must be in the tab-separated values format.
   */
  declare export function tsvParseRows(tsvString: string): string[][];

  /**
 * Parses the specified string, which must be in the tab-separated values format, returning an array of arrays representing the parsed rows.
 * 
 * Unlike tsvParse, this method treats the header line as a standard row, and should be used whenever TSV content does not contain a header.
 * Each row is represented as an array rather than an object. Rows may have variable length.
 * 
 * Equivalent to `dsvFormat("\t").parseRows`.
 * @param tsvString A string, which must be in the tab-separated values format.
 * @param row A row conversion function which is invoked for each row, being passed an array representing the current row (d), the index (i)
starting at zero for the first row, and the array of column names. If the returned value is null or undefined,
the row is skipped and will be omitted from the array returned by dsv.parse; otherwise, the returned value defines the corresponding row object.
In effect, row is similar to applying a map and filter operator to the returned rows.
 */
  declare export function tsvParseRows<ParsedRow: { [key: string]: any }>(
    tsvString: string,
    row: (rawRow: string[], index: number) => ParsedRow | void | null
  ): ParsedRow[];

  /**
   * Formats the specified array of object rows as tab-separated values, returning a string.
   * This operation is the inverse of tsvParse. Each row will be separated by a newline (\n),
   * and each column within each row will be separated by the tab-delimiter.
   * Values that contain either the tab-delimiter, a double-quote (") or a newline will be escaped using double-quotes.
   *
   * If columns is not specified, the list of column names that forms the header row is determined by the union of all properties on all objects in rows;
   * the order of columns is nondeterministic.
   *
   * Equivalent to `dsvFormat("\t").format`.
   * @param rows Array of object rows.
   * @param columns An array of strings representing the column names.
   */
  declare export function tsvFormat<T: { [key: string]: any }>(
    rows: T[],
    columns?: Array<$Keys<T>>
  ): string;

  /**
   * Formats the specified array of array of string rows as tab-separated values, returning a string.
   * This operation is the reverse of tsvParseRows. Each row will be separated by a newline (\n),
   * and each column within each row will be separated by the tab-delimiter.
   * Values that contain either the tab-delimiter, a double-quote (") or a newline will be escaped using double-quotes.
   *
   * To convert an array of objects to an array of arrays while explicitly specifying the columns, use array.map.
   * If you like, you can also array.concat this result with an array of column names to generate the first row.
   *
   * Equivalent to `dsvFormat("\t").formatRows`.
   * @param rows An array of array of string rows.
   */
  declare export function tsvFormatRows(rows: string[][]): string;

  /**
   * A DSV parser and formatter
   */
  declare export interface DSV {
    /**
     * Parses the specified string, which must be in the delimiter-separated values format with the appropriate delimiter, returning an array of objects representing the parsed rows.
     *
     * Unlike dsv.parseRows, this method requires that the first line of the DSV content contains a delimiter-separated list of column names;
     * these column names become the attributes on the returned objects.
     *
     * The returned array also exposes a columns property containing the column names in input order (in contrast to Object.keys, whose iteration order is arbitrary).
     * @param dsvString A string, which must be in the delimiter-separated values format with the appropriate delimiter.
     */
    parse<Columns: string>(dsvString: string): DSVRowArray<Columns>;

    /**
 * Parses the specified string, which must be in the delimiter-separated values format with the appropriate delimiter, returning an array of objects representing the parsed rows.
 * 
 * Unlike dsv.parseRows, this method requires that the first line of the DSV content contains a delimiter-separated list of column names;
 * these column names become the attributes on the returned objects.
 * 
 * The returned array also exposes a columns property containing the column names in input order (in contrast to Object.keys, whose iteration order is arbitrary).
 * @param dsvString A string, which must be in the delimiter-separated values format with the appropriate delimiter.
 * @param row A row conversion function which is invoked for each row, being passed an object representing the current row (d),
the index (i) starting at zero for the first non-header row, and the array of column names. If the returned value is null or undefined,
the row is skipped and will be omitted from the array returned by dsv.parse; otherwise, the returned value defines the corresponding row object.
In effect, row is similar to applying a map and filter operator to the returned rows.
 */
    parse<ParsedRow: { [key: string]: any }, Columns: string>(
      dsvString: string,
      row: (
        rawRow: DSVRowString<Columns>,
        index: number,
        columns: Columns[]
      ) => ParsedRow | void | null
    ): DSVParsedArray<ParsedRow>;

    /**
     * Parses the specified string, which must be in the delimiter-separated values format with the appropriate delimiter, returning an array of arrays representing the parsed rows.
     *
     * Unlike dsv.parse, this method treats the header line as a standard row, and should be used whenever DSV content does not contain a header.
     * Each row is represented as an array rather than an object. Rows may have variable length.
     *
     * If a row conversion function is not specified, field values are strings. For safety, there is no automatic conversion to numbers, dates, or other types.
     * In some cases, JavaScript may coerce strings to numbers for you automatically (for example, using the + operator), but better is to specify a row conversion function.
     * @param dsvString A string, which must be in the delimiter-separated values format with the appropriate delimiter.
     */
    parseRows(dsvString: string): string[][];

    /**
 * Parses the specified string, which must be in the delimiter-separated values format with the appropriate delimiter, returning an array of arrays representing the parsed rows.
 * 
 * Unlike dsv.parse, this method treats the header line as a standard row, and should be used whenever DSV content does not contain a header.
 * Each row is represented as an array rather than an object. Rows may have variable length.
 * @param dsvString A string, which must be in the delimiter-separated values format with the appropriate delimiter.
 * @param row A row conversion function which is invoked for each row, being passed an array representing the current row (d), the index (i)
starting at zero for the first row, and the array of column names. If the returned value is null or undefined,
the row is skipped and will be omitted from the array returned by dsv.parse; otherwise, the returned value defines the corresponding row object.
In effect, row is similar to applying a map and filter operator to the returned rows.
 */
    parseRows<ParsedRow: { [key: string]: any }>(
      dsvString: string,
      row: (rawRow: string[], index: number) => ParsedRow | void | null
    ): ParsedRow[];

    /**
     * Formats the specified array of object rows as delimiter-separated values, returning a string.
     * This operation is the inverse of dsv.parse. Each row will be separated by a newline (\n),
     * and each column within each row will be separated by the delimiter (such as a comma, ,).
     * Values that contain either the delimiter, a double-quote (") or a newline will be escaped using double-quotes.
     *
     * If columns is not specified, the list of column names that forms the header row is determined by the union of all properties on all objects in rows;
     * the order of columns is nondeterministic.
     * @param rows Array of object rows.
     * @param columns An array of strings representing the column names.
     */
    format<T: { [key: string]: any }>(
      rows: T[],
      columns?: Array<$Keys<T>>
    ): string;

    /**
     * Formats the specified array of array of string rows as delimiter-separated values, returning a string.
     * This operation is the reverse of dsv.parseRows. Each row will be separated by a newline (\n),
     * and each column within each row will be separated by the delimiter (such as a comma, ,).
     * Values that contain either the delimiter, a double-quote (") or a newline will be escaped using double-quotes.
     *
     * To convert an array of objects to an array of arrays while explicitly specifying the columns, use array.map.
     * If you like, you can also array.concat this result with an array of column names to generate the first row.
     * @param rows An array of array of string rows.
     */
    formatRows(rows: string[][]): string;
  }

  /**
 * Constructs a new DSV parser and formatter for the specified delimiter.
 * @param delimiter A delimiter character. The delimiter must be a single character (i.e., a single 16-bit code unit);
so, ASCII delimiters are fine, but emoji delimiters are not.
 */
  declare export function dsvFormat(delimiter: string): DSV;
}
