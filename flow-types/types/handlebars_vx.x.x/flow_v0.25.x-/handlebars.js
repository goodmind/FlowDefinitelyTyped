declare var npm$namespace$Handlebars: {
  registerHelper: typeof Handlebars$registerHelper,
  unregisterHelper: typeof Handlebars$unregisterHelper,
  registerPartial: typeof Handlebars$registerPartial,
  unregisterPartial: typeof Handlebars$unregisterPartial,
  registerDecorator: typeof Handlebars$registerDecorator,
  unregisterDecorator: typeof Handlebars$unregisterDecorator,
  K: typeof Handlebars$K,
  createFrame: typeof Handlebars$createFrame,
  blockParams: typeof Handlebars$blockParams,
  Exception: typeof Handlebars$Exception,
  log: typeof Handlebars$log,
  parse: typeof Handlebars$parse,
  compile: typeof Handlebars$compile,
  precompile: typeof Handlebars$precompile,
  template: typeof Handlebars$template,
  create: typeof Handlebars$create,
  noConflict: typeof Handlebars$noConflict,
  escapeExpression: typeof Handlebars$escapeExpression,
  logger: typeof Handlebars$logger,
  templates: typeof Handlebars$templates,
  helpers: typeof Handlebars$helpers,
  partials: typeof Handlebars$partials,
  decorators: typeof Handlebars$decorators,

  SafeString: typeof Handlebars$SafeString,
  Visitor: typeof Handlebars$Visitor,
  Utils: typeof npm$namespace$Handlebars$Utils,
  AST: typeof npm$namespace$Handlebars$AST
};
export interface Handlebars$TemplateDelegate<T = any> {
  (context: T, options?: Handlebars$RuntimeOptions): string;
}

export type Handlebars$Template<T = any> =
  | Handlebars$TemplateDelegate<T>
  | string;

export interface Handlebars$RuntimeOptions {
  partial?: boolean;
  depths?: any[];
  helpers?: {
    [name: string]: Function
  };
  partials?: {
    [name: string]: HandlebarsTemplateDelegate
  };
  decorators?: {
    [name: string]: Function
  };
  data?: any;
  blockParams?: any[];
}

export interface Handlebars$HelperOptions {
  fn: Handlebars$TemplateDelegate;
  inverse: Handlebars$TemplateDelegate;
  hash: any;
  data?: any;
}

export interface Handlebars$HelperDelegate {
  (
    context?: any,
    arg1?: any,
    arg2?: any,
    arg3?: any,
    arg4?: any,
    arg5?: any,
    options?: Handlebars$HelperOptions
  ): any;
}

export interface Handlebars$HelperDeclareSpec {
  [key: string]: Handlebars$HelperDelegate;
}

export interface Handlebars$ParseOptions {
  srcName?: string;
  ignoreStandalone?: boolean;
}

declare export function Handlebars$registerHelper(
  name: string,
  fn: Handlebars$HelperDelegate
): void;

declare export function Handlebars$registerHelper(
  name: Handlebars$HelperDeclareSpec
): void;

declare export function Handlebars$unregisterHelper(name: string): void;

declare export function Handlebars$registerPartial(
  name: string,
  fn: Handlebars$Template
): void;

declare export function Handlebars$registerPartial(spec: {
  [name: string]: HandlebarsTemplateDelegate
}): void;

declare export function Handlebars$unregisterPartial(name: string): void;

declare export function Handlebars$registerDecorator(
  name: string,
  fn: Function
): void;

declare export function Handlebars$unregisterDecorator(name: string): void;

declare export function Handlebars$K(): void;

declare export function Handlebars$createFrame(object: any): any;

declare export function Handlebars$blockParams(obj: any[], ids: any[]): any[];

declare export function Handlebars$Exception(message: string): void;

declare export function Handlebars$log(level: number, obj: any): void;

declare export function Handlebars$parse(
  input: string,
  options?: Handlebars$ParseOptions
): hbs$ASTProgram;

declare export function Handlebars$compile<T>(
  input: any,
  options?: CompileOptions
): HandlebarsTemplateDelegate<T>;

declare export function Handlebars$precompile(
  input: any,
  options?: PrecompileOptions
): TemplateSpecification;

declare export function Handlebars$template<T>(
  precompilation: TemplateSpecification
): HandlebarsTemplateDelegate<T>;

declare export function Handlebars$create(): typeof Handlebars;

declare export var Handlebars$escapeExpression: typeof Utils$escapeExpression;

declare export var Handlebars$logger: Logger;

declare export var Handlebars$templates: HandlebarsTemplates;

declare export var Handlebars$helpers: {
  [name: string]: Handlebars$HelperDelegate
};

declare export var Handlebars$partials: {
  [name: string]: any
};

declare export var Handlebars$decorators: {
  [name: string]: Function
};

declare export function Handlebars$noConflict(): typeof Handlebars;

declare export class Handlebars$SafeString {
  constructor(str: string): this;
  toString(): string;
  toHTML(): string;
}

declare var npm$namespace$Handlebars$Utils: {
  escapeExpression: typeof Handlebars$Utils$escapeExpression,
  createFrame: typeof Handlebars$Utils$createFrame,
  blockParams: typeof Handlebars$Utils$blockParams,
  isEmpty: typeof Handlebars$Utils$isEmpty,
  extend: typeof Handlebars$Utils$extend,
  toString: typeof Handlebars$Utils$toString,
  isArray: typeof Handlebars$Utils$isArray,
  isFunction: typeof Handlebars$Utils$isFunction
};
declare export function Handlebars$Utils$escapeExpression(str: string): string;

declare export function Handlebars$Utils$createFrame(object: any): any;

declare export function Handlebars$Utils$blockParams(
  obj: any[],
  ids: any[]
): any[];

declare export function Handlebars$Utils$isEmpty(obj: any): boolean;

declare export function Handlebars$Utils$extend(
  obj: any,
  ...source: any[]
): any;

declare export function Handlebars$Utils$toString(obj: any): string;

declare export function Handlebars$Utils$isArray(obj: any): boolean;

declare export function Handlebars$Utils$isFunction(obj: any): boolean;

declare var npm$namespace$Handlebars$AST: {
  helpers: typeof Handlebars$AST$helpers
};
declare export var Handlebars$AST$helpers: hbs$ASThelpers;

declare interface Handlebars$ICompiler {
  accept(node: hbs$ASTNode): void;
  Program(program: hbs$ASTProgram): void;
  BlockStatement(block: hbs$ASTBlockStatement): void;
  PartialStatement(partial: hbs$ASTPartialStatement): void;
  PartialBlockStatement(partial: hbs$ASTPartialBlockStatement): void;
  DecoratorBlock(decorator: hbs$ASTDecoratorBlock): void;
  Decorator(decorator: hbs$ASTDecorator): void;
  MustacheStatement(mustache: hbs$ASTMustacheStatement): void;
  ContentStatement(content: hbs$ASTContentStatement): void;
  CommentStatement(comment?: hbs$ASTCommentStatement): void;
  SubExpression(sexpr: hbs$ASTSubExpression): void;
  PathExpression(path: hbs$ASTPathExpression): void;
  StringLiteral(str: hbs$ASTStringLiteral): void;
  NumberLiteral(num: hbs$ASTNumberLiteral): void;
  BooleanLiteral(bool: hbs$ASTBooleanLiteral): void;
  UndefinedLiteral(): void;
  NullLiteral(): void;
  Hash(hash: hbs$ASTHash): void;
}

declare export class Handlebars$Visitor mixins ICompiler {
  accept(node: hbs$ASTNode): void;
  acceptKey(node: hbs$ASTNode, name: string): void;
  acceptArray(arr: hbs$ASTExpression[]): void;
  Program(program: hbs$ASTProgram): void;
  BlockStatement(block: hbs$ASTBlockStatement): void;
  PartialStatement(partial: hbs$ASTPartialStatement): void;
  PartialBlockStatement(partial: hbs$ASTPartialBlockStatement): void;
  DecoratorBlock(decorator: hbs$ASTDecoratorBlock): void;
  Decorator(decorator: hbs$ASTDecorator): void;
  MustacheStatement(mustache: hbs$ASTMustacheStatement): void;
  ContentStatement(content: hbs$ASTContentStatement): void;
  CommentStatement(comment?: hbs$ASTCommentStatement): void;
  SubExpression(sexpr: hbs$ASTSubExpression): void;
  PathExpression(path: hbs$ASTPathExpression): void;
  StringLiteral(str: hbs$ASTStringLiteral): void;
  NumberLiteral(num: hbs$ASTNumberLiteral): void;
  BooleanLiteral(bool: hbs$ASTBooleanLiteral): void;
  UndefinedLiteral(): void;
  NullLiteral(): void;
  Hash(hash: hbs$ASTHash): void;
}
/**
 * Implement this interface on your MVW/MVVM/MVC views such as Backbone.View
 */
declare interface HandlebarsTemplatable {
  template: HandlebarsTemplateDelegate;
}
declare type HandlebarsTemplateDelegate<
  T = any
> = Handlebars$TemplateDelegate<T>;
declare interface HandlebarsTemplates {
  [index: string]: HandlebarsTemplateDelegate;
}
declare interface TemplateSpecification {}
declare type RuntimeOptions = Handlebars$RuntimeOptions;
declare interface CompileOptions {
  data?: boolean;
  compat?: boolean;
  knownHelpers?: {
    helperMissing?: boolean,
    blockHelperMissing?: boolean,
    each?: boolean,
    if?: boolean,
    unless?: boolean,
    with?: boolean,
    log?: boolean,
    lookup?: boolean
  };
  knownHelpersOnly?: boolean;
  noEscape?: boolean;
  strict?: boolean;
  assumeObjects?: boolean;
  preventIndent?: boolean;
  ignoreStandalone?: boolean;
  explicitPartialContext?: boolean;
}
declare type PrecompileOptions = {
  srcName?: string,
  destName?: string
} & CompileOptions;
declare type hbs$SafeString = Handlebars$SafeString;

declare type hbs$Utils = typeof Handlebars$Utils;

declare interface hbs$AST$Node {
  type: string;
  loc: AST$SourceLocation;
}

declare interface hbs$AST$SourceLocation {
  source: string;
  start: AST$Position;
  end: AST$Position;
}

declare interface hbs$AST$Position {
  line: number;
  column: number;
}

declare type hbs$AST$Program = {
  body: AST$Statement[],
  blockParams: string[]
} & Node;

declare type hbs$AST$Statement = {} & Node;

declare type hbs$AST$MustacheStatement = {
  path: AST$PathExpression | AST$Literal,
  params: AST$Expression[],
  hash: AST$Hash,
  escaped: boolean,
  strip: AST$StripFlags
} & Statement;

declare type hbs$AST$Decorator = {} & MustacheStatement;

declare type hbs$AST$BlockStatement = {
  path: AST$PathExpression,
  params: AST$Expression[],
  hash: AST$Hash,
  program: hbs$AST$Program,
  inverse: hbs$AST$Program,
  openStrip: AST$StripFlags,
  inverseStrip: AST$StripFlags,
  closeStrip: AST$StripFlags
} & Statement;

declare type hbs$AST$DecoratorBlock = {} & BlockStatement;

declare type hbs$AST$PartialStatement = {
  name: AST$PathExpression | AST$SubExpression,
  params: AST$Expression[],
  hash: AST$Hash,
  indent: string,
  strip: AST$StripFlags
} & Statement;

declare type hbs$AST$PartialBlockStatement = {
  name: AST$PathExpression | AST$SubExpression,
  params: AST$Expression[],
  hash: AST$Hash,
  program: hbs$AST$Program,
  openStrip: AST$StripFlags,
  closeStrip: AST$StripFlags
} & Statement;

declare type hbs$AST$ContentStatement = {
  value: string,
  original: AST$StripFlags
} & Statement;

declare type hbs$AST$CommentStatement = {
  value: string,
  strip: AST$StripFlags
} & Statement;

declare type hbs$AST$Expression = {} & Node;

declare type hbs$AST$SubExpression = {
  path: AST$PathExpression,
  params: hbs$AST$Expression[],
  hash: AST$Hash
} & Expression;

declare type hbs$AST$PathExpression = {
  data: boolean,
  depth: number,
  parts: string[],
  original: string
} & Expression;

declare type hbs$AST$Literal = {} & Expression;

declare type hbs$AST$StringLiteral = {
  value: string,
  original: string
} & Literal;

declare type hbs$AST$BooleanLiteral = {
  value: boolean,
  original: boolean
} & Literal;

declare type hbs$AST$NumberLiteral = {
  value: number,
  original: number
} & Literal;

declare type hbs$AST$UndefinedLiteral = {} & Literal;

declare type hbs$AST$NullLiteral = {} & Literal;

declare type hbs$AST$Hash = {
  pairs: AST$HashPair[]
} & Node;

declare type hbs$AST$HashPair = {
  key: string,
  value: hbs$AST$Expression
} & Node;

declare interface hbs$AST$StripFlags {
  open: boolean;
  close: boolean;
}

declare interface hbs$AST$helpers {
  helperExpression(node: hbs$AST$Node): boolean;
  scopeId(path: hbs$AST$PathExpression): boolean;
  simpleId(path: hbs$AST$PathExpression): boolean;
}
declare interface Logger {
  DEBUG: number;
  INFO: number;
  WARN: number;
  ERROR: number;
  level: number;
  methodMap: {
    [level: number]: string
  };
  log(level: number, obj: string): void;
}
declare module "handlebars" {
  declare export default typeof Handlebars;
}
declare module "handlebars/runtime" {
  declare export default typeof Handlebars;
}
