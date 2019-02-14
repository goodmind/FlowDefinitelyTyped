declare module "pegjs" {
  declare var npm$namespace$PEG: {
    parse: typeof PEG$parse,

    SyntaxError: typeof PEG$SyntaxError
  };
  declare function PEG$parse(input: string): any;

  declare interface PEG$Location {
    line: number;
    column: number;
    offset: number;
  }

  declare interface PEG$LocationRange {
    start: PEG$Location;
    end: PEG$Location;
  }

  declare class PEG$SyntaxError {
    line: number;
    column: number;
    offset: number;
    location: PEG$LocationRange;
    expected: any[];
    found: any;
    name: string;
    message: string;
  }
  declare export type Location = PEG$Location;
  declare export type LocationRange = PEG$LocationRange;
  declare export interface ExpectedItem {
    type: string;
    value?: string;
    description: string;
  }
  declare export type PegjsError = {
    name: string,
    message: string,
    location: PEG$LocationRange,
    found?: any,
    expected?: ExpectedItem[],
    stack?: any
  } & Error;

  declare export type GrammarError = PegjsError;
  declare export var GrammarError: any;
  declare export interface ParserOptions {
    startRule?: string;
    tracer?: any;
    [key: string]: any;
  }
  declare export interface Parser {
    parse(input: string, options?: ParserOptions): any;
    SyntaxError: any;
  }
  declare export interface BuildOptionsBase {
    /**
     * rules the parser will be allowed to start parsing from (default: the first rule in the grammar)
     */
    allowedStartRules?: string[];

    /**
     * if `true`, makes the parser cache results, avoiding exponential parsing time in pathological cases but making the parser slower (default: `false`)
     */
    cache?: boolean;

    /**
     * selects between optimizing the generated parser for parsing speed (`"speed"`) or code size (`"size"`) (default: `"speed"`)
     */
    optimize?: "speed" | "size";

    /**
     * plugins to use
     */
    plugins?: any[];

    /**
     * makes the parser trace its progress (default: `false`)
     */
    trace?: boolean;
  }
  declare export type ParserBuildOptions = {
    /**
     * if set to `"parser"`, the method will return generated parser object; if set to `"source"`, it will return parser source code as a string (default: `"parser"`)
     */
    output?: "parser"
  } & BuildOptionsBase;

  declare export type OutputFormatAmdCommonjs = {
    /**
     * if set to `"parser"`, the method will return generated parser object; if set to `"source"`, it will return parser source code as a string (default: `"parser"`)
     */
    output: "source",

    /**
     * format of the genreated parser (`"amd"`, `"bare"`, `"commonjs"`, `"globals"`, or `"umd"`); valid only when `output` is set to `"source"` (default: `"bare"`)
     */
    format: "amd" | "commonjs",

    /**
     * parser dependencies, the value is an object which maps variables used to access the dependencies in the parser to module IDs used to load them; valid only when `format` is set to `"amd"`, `"commonjs"`, or `"umd"` (default: `{}`)
     */
    dependencies?: any
  } & BuildOptionsBase;

  declare export type OutputFormatUmd = {
    /**
     * if set to `"parser"`, the method will return generated parser object; if set to `"source"`, it will return parser source code as a string (default: `"parser"`)
     */
    output: "source",

    /**
     * format of the genreated parser (`"amd"`, `"bare"`, `"commonjs"`, `"globals"`, or `"umd"`); valid only when `output` is set to `"source"` (default: `"bare"`)
     */
    format: "umd",

    /**
     * parser dependencies, the value is an object which maps variables used to access the dependencies in the parser to module IDs used to load them; valid only when `format` is set to `"amd"`, `"commonjs"`, or `"umd"` (default: `{}`)
     */
    dependencies?: any,

    /**
     * name of a global variable into which the parser object is assigned to when no module loader is detected; valid only when `format` is set to `"globals"` or `"umd"` (default: `null`)
     */
    exportVar?: any
  } & BuildOptionsBase;

  declare export type OutputFormatGlobals = {
    /**
     * if set to `"parser"`, the method will return generated parser object; if set to `"source"`, it will return parser source code as a string (default: `"parser"`)
     */
    output: "source",

    /**
     * format of the genreated parser (`"amd"`, `"bare"`, `"commonjs"`, `"globals"`, or `"umd"`); valid only when `output` is set to `"source"` (default: `"bare"`)
     */
    format: "globals",

    /**
     * name of a global variable into which the parser object is assigned to when no module loader is detected; valid only when `format` is set to `"globals"` or `"umd"` (default: `null`)
     */
    exportVar?: any
  } & BuildOptionsBase;

  declare export type OutputFormatBare = {
    /**
     * if set to `"parser"`, the method will return generated parser object; if set to `"source"`, it will return parser source code as a string (default: `"parser"`)
     */
    output: "source",

    /**
     * format of the genreated parser (`"amd"`, `"bare"`, `"commonjs"`, `"globals"`, or `"umd"`); valid only when `output` is set to `"source"` (default: `"bare"`)
     */
    format?: "bare"
  } & BuildOptionsBase;

  /**
   * Returns a generated parser object. It will throw an exception if the grammar is invalid. The exception will contain `message` property with more details about the error.
   */
  declare export function generate(
    grammar: string,
    options?: ParserBuildOptions
  ): Parser;

  /**
   * Returns the generated source code as a `string`. It will throw an exception if the grammar is invalid. The exception will contain `message` property with more details about the error.
   */
  declare export function generate(
    grammar: string,
    options: OutputFormatAmdCommonjs
  ): string;

  /**
   * Returns the generated source code as a `string`. It will throw an exception if the grammar is invalid. The exception will contain `message` property with more details about the error.
   */
  declare export function generate(
    grammar: string,
    options: OutputFormatUmd
  ): string;

  /**
   * Returns the generated source code as a `string`. It will throw an exception if the grammar is invalid. The exception will contain `message` property with more details about the error.
   */
  declare export function generate(
    grammar: string,
    options: OutputFormatGlobals
  ): string;

  /**
   * Returns the generated source code as a `string`. It will throw an exception if the grammar is invalid. The exception will contain `message` property with more details about the error.
   */
  declare export function generate(
    grammar: string,
    options: OutputFormatBare
  ): string;

  declare var npm$namespace$parser: {
    SyntaxError: typeof parser$SyntaxError
  };
  declare type parser$SyntaxError = PegjsError;

  declare var parser$SyntaxError: any;
}
