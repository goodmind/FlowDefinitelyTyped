declare module "loaders" {
  declare export function fs(
    basepath?: string,
    encoding?: string
  ): TemplateLoader;

  declare export function memory(
    mapping: any,
    basepath?: string
  ): TemplateLoader;
}
declare module "parser" {
  declare interface ParseReturn {
    name: string;
    parent: any;
    tokens: any[];
    blocks: any;
  }
}
declare module "lexer" {
  declare export class TYPES {
    constructor(...args: empty): mixed;
    static +WHITESPACE: Class<TYPES__WHITESPACE> & TYPES__WHITESPACE & 0; // 0
    static +STRING: Class<TYPES__STRING> & TYPES__STRING & 1; // 1
    static +FILTER: Class<TYPES__FILTER> & TYPES__FILTER & 2; // 2
    static +FILTEREMPTY: Class<TYPES__FILTEREMPTY> & TYPES__FILTEREMPTY & 3; // 3
    static +FUNCTION: Class<TYPES__FUNCTION> & TYPES__FUNCTION & 4; // 4
    static +FUNCTIONEMPTY: Class<TYPES__FUNCTIONEMPTY> &
      TYPES__FUNCTIONEMPTY &
      5; // 5
    static +PARENOPEN: Class<TYPES__PARENOPEN> & TYPES__PARENOPEN & 6; // 6
    static +PARENCLOSE: Class<TYPES__PARENCLOSE> & TYPES__PARENCLOSE & 7; // 7
    static +COMMA: Class<TYPES__COMMA> & TYPES__COMMA & 8; // 8
    static +VAR: Class<TYPES__VAR> & TYPES__VAR & 9; // 9
    static +NUMBER: Class<TYPES__NUMBER> & TYPES__NUMBER & 10; // 10
    static +OPERATOR: Class<TYPES__OPERATOR> & TYPES__OPERATOR & 11; // 11
    static +BRACKETOPEN: Class<TYPES__BRACKETOPEN> & TYPES__BRACKETOPEN & 12; // 12
    static +BRACKETCLOSE: Class<TYPES__BRACKETCLOSE> & TYPES__BRACKETCLOSE & 13; // 13
    static +DOTKEY: Class<TYPES__DOTKEY> & TYPES__DOTKEY & 14; // 14
    static +ARRAYOPEN: Class<TYPES__ARRAYOPEN> & TYPES__ARRAYOPEN & 15; // 15
    static +CURLYOPEN: Class<TYPES__CURLYOPEN> & TYPES__CURLYOPEN & 17; // 17
    static +CURLYCLOSE: Class<TYPES__CURLYCLOSE> & TYPES__CURLYCLOSE & 18; // 18
    static +COLON: Class<TYPES__COLON> & TYPES__COLON & 19; // 19
    static +COMPARATOR: Class<TYPES__COMPARATOR> & TYPES__COMPARATOR & 20; // 20
    static +LOGIC: Class<TYPES__LOGIC> & TYPES__LOGIC & 21; // 21
    static +NOT: Class<TYPES__NOT> & TYPES__NOT & 22; // 22
    static +BOOL: Class<TYPES__BOOL> & TYPES__BOOL & 23; // 23
    static +ASSIGNMENT: Class<TYPES__ASSIGNMENT> & TYPES__ASSIGNMENT & 24; // 24
    static +METHODOPEN: Class<TYPES__METHODOPEN> & TYPES__METHODOPEN & 25; // 25
    static +UNKNOWN: Class<TYPES__UNKNOWN> & TYPES__UNKNOWN & 100; // 100
  }

  declare class TYPES__WHITESPACE mixins TYPES {}
  declare class TYPES__STRING mixins TYPES {}
  declare class TYPES__FILTER mixins TYPES {}
  declare class TYPES__FILTEREMPTY mixins TYPES {}
  declare class TYPES__FUNCTION mixins TYPES {}
  declare class TYPES__FUNCTIONEMPTY mixins TYPES {}
  declare class TYPES__PARENOPEN mixins TYPES {}
  declare class TYPES__PARENCLOSE mixins TYPES {}
  declare class TYPES__COMMA mixins TYPES {}
  declare class TYPES__VAR mixins TYPES {}
  declare class TYPES__NUMBER mixins TYPES {}
  declare class TYPES__OPERATOR mixins TYPES {}
  declare class TYPES__BRACKETOPEN mixins TYPES {}
  declare class TYPES__BRACKETCLOSE mixins TYPES {}
  declare class TYPES__DOTKEY mixins TYPES {}
  declare class TYPES__ARRAYOPEN mixins TYPES {}
  declare class TYPES__CURLYOPEN mixins TYPES {}
  declare class TYPES__CURLYCLOSE mixins TYPES {}
  declare class TYPES__COLON mixins TYPES {}
  declare class TYPES__COMPARATOR mixins TYPES {}
  declare class TYPES__LOGIC mixins TYPES {}
  declare class TYPES__NOT mixins TYPES {}
  declare class TYPES__BOOL mixins TYPES {}
  declare class TYPES__ASSIGNMENT mixins TYPES {}
  declare class TYPES__METHODOPEN mixins TYPES {}
  declare class TYPES__UNKNOWN mixins TYPES {}

  declare export function read(str: string): string[];
}
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
        types?: lexer.TYPES,
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
    parseFile(pathName: string, options?: any): parser.ParseReturn;
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
      types?: lexer.TYPES,
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
  ): parser.ParseReturn;

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
