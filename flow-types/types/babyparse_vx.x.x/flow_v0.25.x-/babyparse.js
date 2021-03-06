declare interface BabyParse$Static {
  /**
   * Parse a csv string or a csv file
   */
  parse(
    csvString: string,
    config?: BabyParse$ParseConfig
  ): BabyParse$ParseResult;

  /**
   * Parse single file or multiple files
   */
  parseFiles(
    input: string | string[] | BabyParse$FileObject | BabyParse$FileObject[],
    config?: BabyParse$ParseConfig
  ): BabyParse$ParseResult;

  /**
   * Unparses javascript data objects and returns a csv string
   */
  unparse(data: Array<Object>, config?: BabyParse$UnparseConfig): string;
  unparse(data: Array<Array<any>>, config?: BabyParse$UnparseConfig): string;
  unparse(
    data: BabyParse$UnparseObject,
    config?: BabyParse$UnparseConfig
  ): string;

  /**
   * Read-Only Properties
   */
  BAD_DELIMETERS: Array<string>;
  RECORD_SEP: string;
  UNIT_SEP: string;
  WORKERS_SUPPORTED: boolean;
  SCRIPT_PATH: string;

  /**
   * Configurable Properties
   */
  LocalChunkSize: string;
  RemoteChunkSize: string;
  DefaultDelimiter: string;

  /**
   * On Papa there are actually more classes exposed
   * but none of them are officially documented
   * Since we can interact with the Parser from one of the callbacks
   * I have included the API for this class.
   */
  BabyParse$Parser: BabyParse$ParserConstructor;
}

declare interface BabyParse$ParseConfig {
  delimiter?: string;
  newline?: string;
  header?: boolean;
  dynamicTyping?: boolean;
  preview?: number;
  encoding?: string;
  worker?: boolean;
  comments?: boolean;
  download?: boolean;
  skipEmptyLines?: boolean;
  fastMode?: boolean;
  step?: (results: BabyParse$ParseResult, parser: BabyParse$Parser) => void;
  complete?: (results: BabyParse$ParseResult) => void;
}

declare interface BabyParse$UnparseConfig {
  quotes?: boolean | boolean[];
  delimiter?: string;
  newline?: string;
}

declare interface BabyParse$UnparseObject {
  fields: Array<any>;
  data: string | Array<any>;
}

declare interface BabyParse$FileObject {
  file: string;
  config?: BabyParse$ParseConfig;
}

declare interface BabyParse$ParseError {
  type: string;
  code: string;
  message: string;
  row: number;
}

declare interface BabyParse$ParseMeta {
  delimiter: string;
  linebreak: string;
  aborted: boolean;
  fields: Array<string>;
  truncated: boolean;
}

/**
 * @interface ParseResult

data: is an array of rows. If header is false, rows are arrays; otherwise they are objects of data keyed by the field name.
errors: is an array of errors
meta: contains extra information about the parse, such as delimiter used, the newline sequence, whether the process was aborted, etc. Properties in this object are not guaranteed to exist in all situations
 */
declare interface BabyParse$ParseResult {
  data: Array<any>;
  errors: Array<BabyParse$ParseError>;
  meta: BabyParse$ParseMeta;
}

declare interface BabyParse$ParserConstructor {
  new(config: BabyParse$ParseConfig): BabyParse$Parser;
}

declare interface BabyParse$Parser {
  parse(input: string): any;
  abort(): void;
  getCharIndex(): number;
}
declare var Baby: BabyParse$BabyParse$Static;
declare module "babyparse" {
  declare var Baby: BabyParse$BabyParse$Static;
  declare module.exports: typeof Baby;
}
