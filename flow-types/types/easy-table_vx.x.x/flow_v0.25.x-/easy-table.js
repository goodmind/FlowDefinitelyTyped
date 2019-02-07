declare module "easy-table" {
  declare class EasyTable {
    /**
     * String to separate columns
     */
    separator: string;

    /**
     * Default printer
     */
    static string(value: any): string;

    /**
     * Create a printer which right aligns the content by padding with `ch` on the left
     * @param {String} ch
     * @returns {Function}
     */
    static leftPadder<T>(ch: string): CellPrinter<T>;
    static padLeft: CellPrinter<string>;

    /**
     * Create a printer which pads with `ch` on the right
     * @param {String} ch
     * @returns {Function}
     */
    static rightPadder<T>(ch: string): CellPrinter<T>;

    /**
     * Create a printer for numbers
     *
     * Will do right alignment and optionally fix the number of digits after decimal point
     * @param {Number} digits - Number of digits for fixpoint notation
     * @returns {Function}
     */
    static number(digits?: number): CellPrinter<number>;
    constructor(): this;

    /**
     * Push the current row to the table and start a new one
     * @returns {Table} `this`
     */
    newRow(): this;

    /**
     * Write cell in the current row
     * @param {String} col - Column name
     * @param {Any} val - Cell value
     * @param {Function} printer - Printer function to format the value
     * @returns {Table} `this`
     */
    cell<T>(col: string, val: T, printer?: CellPrinter<T>): this;

    /**
     * Get list of columns in printing order
     * @returns {string[]}
     */
    columns(): string[];

    /**
     * Format just rows, i.e. print the table without headers and totals
     * @returns {String} String representaion of the table
     */
    print(): string;

    /**
     * Format the table
     * @returns {String}
     */
    toString(): string;

    /**
     * Push delimeter row to the table (with each cell filled with dashs during printing)
     * @param {String[]} cols
     * @returns {Table} `this`
     */
    pushDelimeter(cols?: $ReadOnlyArray<string>): this;

    /**
     * Compute all totals and yield the results to `cb`
     * @param {Function} cb - Callback function with signature `(column, value, printer)`
     */
    forEachTotal<T>(
      cb: (column: string, value: T, printer: CellPrinter<T>) => void
    ): void;

    /**
     * Format the table so that each row represents column and each column represents row
     * @param {IPrintColumnOptions} opts
     * @returns {String}
     */
    printTransposed<T>(opts?: PrintColumnOptions<T>): string;

    /**
     * Sort the table
     * @param {Function | string[]} cmp - Either compare function or a list of columns to sort on
     * @returns {Table} `this`
     */
    sort(cmp?: $ReadOnlyArray<string>): this;

    /**
     * Sort the table
     * @param {Function | string[]} cmp - Either compare function or a list of columns to sort on
     * @returns {Table} `this`
     */
    sort<T>(cmp?: CompareFunction<T>): this;

    /**
     * Add a total for the column
     * @param {String} col - column name
     * @param {Object} opts
     * @returns {Table} `this`
     */
    total<T>(col: string, opts?: TotalOptions<T>): this;

    /**
     * Predefined helpers for totals
     */
    static aggr: Aggregators;

    /**
     * Print the array or object
     * @param {Array | Object} obj - Object to print
     * @param {Function | Object} format - Format options
     * @param {Function} cb - Table post processing and formating
     * @returns {String}
     */
    static print<T>(
      obj: T | T[],
      format?: FormatFunction<T> | FormatObject,
      cb?: TablePostProcessing
    ): string;

    /**
     * Same as `Table.print()` but yields the result to `console.log()`
     */
    static log<T>(
      obj: T | T[],
      format?: FormatFunction<T> | FormatObject,
      cb?: TablePostProcessing
    ): void;

    /**
     * Same as `.toString()` but yields the result to `console.log()`
     */
    log(): void;
  }
  declare type CellPrinter<T> = (val: T, width: number) => string;
  declare type CompareFunction<T> = (a: T, b: T) => number;
  declare type ReduceFunction<T> = (
    acc: T,
    val: T,
    idx: number,
    length: number
  ) => T;
  declare type FormatFunction<T> = (
    obj: T,
    cell: (name: string, val: any) => void
  ) => void;
  declare type TablePostProcessing = (result: EasyTable) => string;
  declare interface PrintColumnOptions<T> {
    /**
     * Column separation string
     */
    separator?: string;

    /**
     * Printer to format column names
     */
    namePrinter?: CellPrinter<T>;
  }
  declare interface Aggregators {
    /**
     * Create a printer which formats the value with `printer`,
     * adds the `prefix` to it and right aligns the whole thing
     * @param {String} prefix
     * @param {Function} printer
     * @returns {printer}
     */
    printer<T>(prefix: string, printer: CellPrinter<T>): CellPrinter<T>;

    /**
     * Sum reduction
     */
    sum: any;

    /**
     * Average reduction
     */
    avg: any;
  }
  declare interface TotalOptions<T> {
    /**
     * reduce(acc, val, idx, length) function to compute the total value
     */
    reduce?: ReduceFunction<T>;

    /**
     * Printer to format the total cell
     */
    printer?: CellPrinter<T>;

    /**
     * Initial value for reduction
     */
    init?: T;
  }
  declare interface FormatObject {
    [key: string]: ColumnFormat<any>;
  }
  declare interface ColumnFormat<T> {
    name?: string;
    printer?: CellPrinter<T>;
  }
  declare module.exports: typeof EasyTable;
}
