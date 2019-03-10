declare module "swig" {
  declare export class Swig {
    constructor(options?: SwigOptions): this;
    setFilter(
      name: string,
      method: (input: any, ...args: any[]) => string
    ): void;
    setTag(
      name: string,
      parse: (
        str?: string,
        line?: string,
        parser?: Object,
        types?: $Values<typeof lexer$TYPES>,
        stack?: any,
        opts?: Object,
        swig?: Swig
      ) => boolean,
      compile: (
        compiler?: (
          content?: string,
          parents?: any,
          options?: any,
          blockName?: string
        ) => string,
        args?: any[],
        content?: string,
        parents?: any,
        options?: any,
        blockName?: string
      ) => string,
      ends?: boolean,
      blockLevel?: boolean
    ): void;
    setExtension(name: string, object: any): void;
    parseFile(pathName: string, options?: any): parser$ParseReturn;
    precompile(source: string, options?: SwigOptions): any;
    compile(source: string, options?: SwigOptions): (locals?: any) => string;
    compileFile(
      pathname: string,
      options: SwigOptions,
      cb: (err: Error, compiledRender: (locals?: any) => string) => void
    ): void;
    compileFile(
      pathname: string,
      options?: SwigOptions
    ): (locals?: any) => string;
    render(source: string, options?: SwigOptions): string;
    renderFile(
      pathName: string,
      locals: any,
      cb: (err: Error, output: string) => void
    ): void;
    renderFile(pathName: string, locals?: any): string;
    run(templateFn: Function, locals?: any, filePath?: string): string;
    invalidateCache(): void;
    loaders: typeof loaders;
  }

  declare var npm$namespace$lexer: {
    read: typeof lexer$read,

    TYPES: typeof lexer$TYPES
  };

  declare export var lexer$TYPES: {|
    +WHITESPACE: 0, // 0
    +STRING: 1, // 1
    +FILTER: 2, // 2
    +FILTEREMPTY: 3, // 3
    +FUNCTION: 4, // 4
    +FUNCTIONEMPTY: 5, // 5
    +PARENOPEN: 6, // 6
    +PARENCLOSE: 7, // 7
    +COMMA: 8, // 8
    +VAR: 9, // 9
    +NUMBER: 10, // 10
    +OPERATOR: 11, // 11
    +BRACKETOPEN: 12, // 12
    +BRACKETCLOSE: 13, // 13
    +DOTKEY: 14, // 14
    +ARRAYOPEN: 15, // 15
    +CURLYOPEN: 17, // 17
    +CURLYCLOSE: 18, // 18
    +COLON: 19, // 19
    +COMPARATOR: 20, // 20
    +LOGIC: 21, // 21
    +NOT: 22, // 22
    +BOOL: 23, // 23
    +ASSIGNMENT: 24, // 24
    +METHODOPEN: 25, // 25
    +UNKNOWN: 100 // 100
  |};

  declare export function lexer$read(str: string): string[];

  declare interface parser$ParseReturn {
    name: string;
    parent: any;
    tokens: any[];
    blocks: any;
  }
  declare export interface SwigOptions {
    autoescape?: boolean;
    cache?: any;
    cmtControls?: string[];
    loader?: TemplateLoader;
    locals?: any;
    tagControls?: string[];
    varControls?: string[];
  }
  declare export interface TemplateLoader {
    resolve(to: string, from: string): string;
    load(identifier: string, callback?: (err: Error, data: any) => void): void;
    load(identifier: string): any;
  }

  declare var npm$namespace$loaders: {
    fs: typeof loaders$fs,
    memory: typeof loaders$memory
  };
  declare export function loaders$fs(
    basepath?: string,
    encoding?: string
  ): TemplateLoader;

  declare export function loaders$memory(
    mapping: any,
    basepath?: string
  ): TemplateLoader;

  declare export var version: string;
  declare export function setDefaults(options: SwigOptions): void;

  declare export function setDefaultTZOffset(offset: number): void;

  declare export function setFilter(
    name: string,
    method: (input: any, ...args: any[]) => string
  ): void;

  declare export function setTag(
    name: string,
    parse: (
      str?: string,
      line?: string,
      parser?: Object,
      types?: $Values<typeof lexer$TYPES>,
      stack?: any,
      opts?: Object,
      swig?: Swig
    ) => boolean,
    compile: (
      compiler?: (
        content?: string,
        parents?: any,
        options?: any,
        blockName?: string
      ) => string,
      args?: any[],
      content?: string,
      parents?: any,
      options?: any,
      blockName?: string
    ) => string,
    ends?: boolean,
    blockLevel?: boolean
  ): void;

  declare export function setExtension(name: string, object: any): void;

  declare export function parseFile(
    pathName: string,
    options?: any
  ): parser$ParseReturn;

  declare export function precompile(
    source: string,
    options?: SwigOptions
  ): any;

  declare export function compile(
    source: string,
    options?: SwigOptions
  ): (locals?: any) => string;

  declare export function compileFile(
    pathname: string,
    options: SwigOptions,
    cb: (err: Error, compiledRender: (locals?: any) => string) => void
  ): void;

  declare export function compileFile(
    pathname: string,
    options?: SwigOptions
  ): (locals?: any) => string;

  declare export function render(source: string, options?: SwigOptions): string;

  declare export function renderFile(
    pathName: string,
    locals: any,
    cb: (err: Error, output: string) => void
  ): void;

  declare export function renderFile(pathName: string, locals?: any): string;

  declare export function run(
    templateFn: Function,
    locals?: any,
    filePath?: string
  ): string;

  declare export function invalidateCache(): void;
}
