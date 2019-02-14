declare module "sass" {
  declare export type ImporterReturnType =
    | {
        file: string
      }
    | {
        contents: string
      }
    | Error
    | null;
  declare export type Importer = (
    url: string,
    prev: string,
    done: (data: ImporterReturnType) => void
  ) => ImporterReturnType | void;
  declare export interface Options {
    /**
     * Path to a file to compile.
     * @default null
     */
    file?: string;

    /**
     * A string to pass to compile.
     *
     * It is recommended that you use `includePaths` in conjunction with this so that sass can find files when using the @import directive.
     * @default null
     */
    data?: string;

    /**
     * Handles when the @import directive is encountered.
     *
     * A custom importer allows extension of the sass engine in both a synchronous and asynchronous manner.
     * @default undefined
     */
    importer?: Importer | Importer[];

    /**
     * Holds a collection of custom functions that may be invoked by the sass files being compiled.
     * @default undefined
     */
    functions?: {
      [key: string]: (...args: types$SassType[]) => types$SassType | void
    };

    /**
     * An array of paths that should be looked in to attempt to resolve your @import declarations.
     * When using `data`, it is recommended that you use this.
     * @default []
     */
    includePaths?: string[];

    /**
     * Enable Sass Indented Syntax for parsing the data string or file.
     * @default false
     */
    indentedSyntax?: boolean;

    /**
     * Used to determine whether to use space or tab character for indentation.
     * @default 'space'
     */
    indentType?: "space" | "tab";

    /**
     * Used to determine the number of spaces or tabs to be used for indentation.
     * @default 2
     */
    indentWidth?: number;

    /**
     * Used to determine which sequence to use for line breaks.
     * @default 'lf'
     */
    linefeed?: "cr" | "crlf" | "lf" | "lfcr";

    /**
     * Disable the inclusion of source map information in the output file.
     * @default false
     */
    omitSourceMapUrl?: boolean;

    /**
     * Specify the intended location of the output file.
     * Strongly recommended when outputting source maps so that they can properly refer back to their intended files.
     * @default null
     */
    outFile?: string;

    /**
     * Determines the output format of the final CSS style.
     * @default 'expanded'
     */
    outputStyle?: "compressed" | "expanded";

    /**
     * Enables the outputting of a source map.
     * @default undefined
     */
    sourceMap?: boolean | string;

    /**
     * Includes the contents in the source map information.
     * @default false
     */
    sourceMapContents?: boolean;

    /**
     * Embeds the source map as a data URI.
     * @default false
     */
    sourceMapEmbed?: boolean;

    /**
     * The value will be emitted as `sourceRoot` in the source map information.
     * @default undefined
     */
    sourceMapRoot?: string;
  }
  declare export type SassException = {
    /**
     * The error message.
     */
    message: string,

    /**
     * The formatted error.
     */
    formatted: string,

    /**
     * The line number of error.
     */
    line: number,

    /**
     * The column number of error.
     */
    column: number,

    /**
     * The status code.
     */
    status: number,

    /**
     * The filename of error.
     *
     * In case file option was not set (in favour of `data`), this will reflect the value `stdin`.
     */
    file: string
  } & Error;

  declare export interface Result {
    /**
     * The compiled CSS.
     *
     * Write this to a file, or serve it out as needed.
     */
    css: Buffer;

    /**
     * The source map.
     */
    map?: Buffer;
    stats: {
      /**
       * The path to the scss file, or `data` if the source was not a file.
       */
      entry: string,

      /**
       * `Date.now()` before the compilation.
       */
      start: number,

      /**
       * `Date.now()` after the compilation.
       */
      end: number,

      /**
       * `end - start`
       */
      duration: number,

      /**
       * Absolute paths to all related files in no particular order.
       */
      includedFiles: string[]
    };
  }
  declare export function render(
    options: Options,
    callback: (exception: SassException, result: Result) => void
  ): void;

  declare export function renderSync(options: Options): Result;

  declare var npm$namespace$types: {
    Null: typeof types$Null,

    SassType: typeof types$SassType,
    Number: typeof types$Number,
    String: typeof types$String,
    Boolean: typeof types$Boolean,
    Color: typeof types$Color,
    List: typeof types$List,
    Map: typeof types$Map
  };
  declare class types$SassType {}

  declare type types$Null = {
    NULL: types$Null
  } & SassType;

  declare var types$Null: types$Null;

  declare class types$Number mixins SassType {
    constructor(value: number, unit?: string): this;
    getValue(): number;
    setValue(value: number): void;
    getUnit(): string;
    setUnit(unit: string): void;
  }

  declare class types$String mixins SassType {
    constructor(value: string): this;
    getValue(): string;
    setValue(value: string): void;
  }

  declare class types$Boolean<T: boolean = boolean> mixins SassType {
    constructor(value: T): this;
    getValue(): T;
    static TRUE: types$Boolean<true>;
    static FALSE: types$Boolean<false>;
  }

  declare class types$Color mixins SassType {
    constructor(r: number, g: number, b: number, a?: number): this;
    getR(): number;
    setR(value: number): void;
    getG(): number;
    setG(value: number): void;
    getB(): number;
    setB(value: number): void;
    getA(): number;
    setA(value: number): void;
  }

  declare class types$List<T: types$SassType = types$SassType> mixins SassType {
    constructor(length: number, commaSeparator?: boolean): this;
    getValue(index: number): T | void;
    setValue(index: number, value: T): void;
    getSeparator(): boolean;
    setSeparator(isComma: boolean): void;
    getLength(): number;
  }

  declare class types$Map<
    K: types$SassType = types$SassType,
    V: types$SassType = types$SassType
  > mixins SassType {
    constructor(length: number): this;
    getValue(index: number): V;
    setValue(index: number, value: V): void;
    getKey(index: number): K;
    setKey(index: number, key: K): void;
    getLength(): number;
  }
}
