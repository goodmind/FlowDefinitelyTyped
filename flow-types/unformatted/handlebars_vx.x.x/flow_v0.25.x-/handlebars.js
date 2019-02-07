
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
      }
declare export interface Handlebars$TemplateDelegate<T= any> {
(context: T, options?: Handlebars$RuntimeOptions): string
} 

declare export type Handlebars$Template<T= any> = Handlebars$TemplateDelegate<T> | string;

declare export interface Handlebars$RuntimeOptions {
partial?: boolean,
depths?: any[],
AST$helpers?: {
[name: string]: Function
},
partials?: {
[name: string]: HandlebarsTemplateDelegate
},
decorators?: {
[name: string]: Function
},
data?: any,
Utils$blockParams?: any[]
} 

declare export interface Handlebars$HelperOptions {
fn: Handlebars$TemplateDelegate,
inverse: Handlebars$TemplateDelegate,
hash: any,
data?: any
} 

declare export interface Handlebars$HelperDelegate {
(context?: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, options?: Handlebars$HelperOptions): any
} 

declare export interface Handlebars$HelperDeclareSpec {
[key: string]: Handlebars$HelperDelegate
} 

declare export interface Handlebars$ParseOptions {
srcName?: string,
ignoreStandalone?: boolean
} 

declare export function Handlebars$registerHelper(name: string, fn: Handlebars$HelperDelegate): void


declare export function Handlebars$registerHelper(name: Handlebars$HelperDeclareSpec): void


declare export function Handlebars$unregisterHelper(name: string): void


declare export function Handlebars$registerPartial(name: string, fn: Handlebars$Template): void


declare export function Handlebars$registerPartial(spec: {
[name: string]: HandlebarsTemplateDelegate
}): void


declare export function Handlebars$unregisterPartial(name: string): void


declare export function Handlebars$registerDecorator(name: string, fn: Function): void


declare export function Handlebars$unregisterDecorator(name: string): void


declare export function Handlebars$K(): void


declare export function Handlebars$createFrame(object: any): any


declare export function Handlebars$blockParams(obj: any[], ids: any[]): any[]


declare export function Handlebars$Exception(message: string): void


declare export function Handlebars$log(level: number, obj: any): void


declare export function Handlebars$parse(input: string, options?: Handlebars$ParseOptions): hbs$hbs$AST.AST$Program


declare export function Handlebars$compile<T= any>(input: any, options?: CompileOptions): HandlebarsTemplateDelegate<T>


declare export function Handlebars$precompile(input: any, options?: PrecompileOptions): TemplateSpecification


declare export function Handlebars$template<T= any>(precompilation: TemplateSpecification): HandlebarsTemplateDelegate<T>


declare export function Handlebars$create(): typeof Handlebars


declare export var Handlebars$escapeExpression: typeof undefined;

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

declare export function Handlebars$noConflict(): typeof Handlebars


declare export class Handlebars$SafeString  {
constructor(str: string): this;
toString(): string;
toHTML(): string
}


      declare var npm$namespace$Utils: {
        escapeExpression: typeof Utils$escapeExpression,
createFrame: typeof Utils$createFrame,
blockParams: typeof Utils$blockParams,
isEmpty: typeof Utils$isEmpty,
extend: typeof Utils$extend,
toString: typeof Utils$toString,
isArray: typeof Utils$isArray,
isFunction: typeof Utils$isFunction,
        
      }
declare export function Utils$escapeExpression(str: string): string


declare export function Utils$createFrame(object: any): any


declare export function Utils$blockParams(obj: any[], ids: any[]): any[]


declare export function Utils$isEmpty(obj: any): boolean


declare export function Utils$extend(obj: any, ...source: any[]): any


declare export function Utils$toString(obj: any): string


declare export function Utils$isArray(obj: any): boolean


declare export function Utils$isFunction(obj: any): boolean



      declare var npm$namespace$AST: {
        
        helpers: typeof AST$helpers,
      }
declare export var AST$helpers: hbs$hbs$AST.AST$helpers;

declare interface Handlebars$ICompiler {
accept(node: hbs$hbs$AST.AST$Node): void,
AST$Program(program: hbs$hbs$AST.AST$Program): void,
AST$BlockStatement(block: hbs$hbs$AST.AST$BlockStatement): void,
AST$PartialStatement(partial: hbs$hbs$AST.AST$PartialStatement): void,
AST$PartialBlockStatement(partial: hbs$hbs$AST.AST$PartialBlockStatement): void,
AST$DecoratorBlock(decorator: hbs$hbs$AST.AST$DecoratorBlock): void,
AST$Decorator(decorator: hbs$hbs$AST.AST$Decorator): void,
AST$MustacheStatement(mustache: hbs$hbs$AST.AST$MustacheStatement): void,
AST$ContentStatement(content: hbs$hbs$AST.AST$ContentStatement): void,
AST$CommentStatement(comment?: hbs$hbs$AST.AST$CommentStatement): void,
AST$SubExpression(sexpr: hbs$hbs$AST.AST$SubExpression): void,
AST$PathExpression(path: hbs$hbs$AST.AST$PathExpression): void,
AST$StringLiteral(str: hbs$hbs$AST.AST$StringLiteral): void,
AST$NumberLiteral(num: hbs$hbs$AST.AST$NumberLiteral): void,
AST$BooleanLiteral(bool: hbs$hbs$AST.AST$BooleanLiteral): void,
AST$UndefinedLiteral(): void,
AST$NullLiteral(): void,
AST$Hash(hash: hbs$hbs$AST.AST$Hash): void
} 

declare export class Handlebars$Visitor mixins Handlebars$ICompiler {
accept(node: hbs$hbs$AST.AST$Node): void;
acceptKey(node: hbs$hbs$AST.AST$Node, name: string): void;
acceptArray(arr: hbs$hbs$AST.AST$Expression[]): void;
Program(program: hbs$hbs$AST.AST$Program): void;
BlockStatement(block: hbs$hbs$AST.AST$BlockStatement): void;
PartialStatement(partial: hbs$hbs$AST.AST$PartialStatement): void;
PartialBlockStatement(partial: hbs$hbs$AST.AST$PartialBlockStatement): void;
DecoratorBlock(decorator: hbs$hbs$AST.AST$DecoratorBlock): void;
Decorator(decorator: hbs$hbs$AST.AST$Decorator): void;
MustacheStatement(mustache: hbs$hbs$AST.AST$MustacheStatement): void;
ContentStatement(content: hbs$hbs$AST.AST$ContentStatement): void;
CommentStatement(comment?: hbs$hbs$AST.AST$CommentStatement): void;
SubExpression(sexpr: hbs$hbs$AST.AST$SubExpression): void;
PathExpression(path: hbs$hbs$AST.AST$PathExpression): void;
StringLiteral(str: hbs$hbs$AST.AST$StringLiteral): void;
NumberLiteral(num: hbs$hbs$AST.AST$NumberLiteral): void;
BooleanLiteral(bool: hbs$hbs$AST.AST$BooleanLiteral): void;
UndefinedLiteral(): void;
NullLiteral(): void;
Hash(hash: hbs$hbs$AST.AST$Hash): void
}
/**
 * Implement this interface on your MVW/MVVM/MVC views such as Backbone.View
 */
declare interface HandlebarsTemplatable {
Handlebars$template: HandlebarsTemplateDelegate
} declare type HandlebarsTemplateDelegate<T= any> = Handlebars$Handlebars$TemplateDelegate<T>;declare interface HandlebarsTemplates {
[index: string]: HandlebarsTemplateDelegate
} declare interface TemplateSpecification {} declare type RuntimeOptions = Handlebars$Handlebars$RuntimeOptions;declare interface CompileOptions {
data?: boolean,
compat?: boolean,
knownHelpers?: {
helperMissing?: boolean,
blockHelperMissing?: boolean,
each?: boolean,
if?: boolean,
unless?: boolean,
with?: boolean,
Handlebars$log?: boolean,
lookup?: boolean
},
knownHelpersOnly?: boolean,
noEscape?: boolean,
strict?: boolean,
assumeObjects?: boolean,
preventIndent?: boolean,
ignoreStandalone?: boolean,
explicitPartialContext?: boolean
} declare type PrecompileOptions = {
srcName?: string,
destName?: string
} & CompileOptions
declare type hbs$SafeString = Handlebars$hbs$SafeString;

declare type hbs$Utils = typeof undefined;

declare interface AST$Node {
type: string,
loc: AST$SourceLocation
} 

declare interface AST$SourceLocation {
source: string,
start: AST$Position,
end: AST$Position
} 

declare interface AST$Position {
line: number,
column: number
} 

declare type AST$Program = {
body: AST$Statement[],
Utils$blockParams: string[]
} & AST$Node


declare type AST$Statement = {} & AST$Node


declare type AST$MustacheStatement = {
path: AST$PathExpression | AST$Literal,
params: AST$Expression[],
hash: AST$Hash,
escaped: boolean,
strip: AST$StripFlags
} & AST$Statement


declare type AST$Decorator = {} & AST$MustacheStatement


declare type AST$BlockStatement = {
path: AST$PathExpression,
params: AST$Expression[],
hash: AST$Hash,
program: AST$Program,
inverse: AST$Program,
openStrip: AST$StripFlags,
inverseStrip: AST$StripFlags,
closeStrip: AST$StripFlags
} & AST$Statement


declare type AST$DecoratorBlock = {} & AST$BlockStatement


declare type AST$PartialStatement = {
name: AST$PathExpression | AST$SubExpression,
params: AST$Expression[],
hash: AST$Hash,
indent: string,
strip: AST$StripFlags
} & AST$Statement


declare type AST$PartialBlockStatement = {
name: AST$PathExpression | AST$SubExpression,
params: AST$Expression[],
hash: AST$Hash,
program: AST$Program,
openStrip: AST$StripFlags,
closeStrip: AST$StripFlags
} & AST$Statement


declare type AST$ContentStatement = {
value: string,
original: AST$StripFlags
} & AST$Statement


declare type AST$CommentStatement = {
value: string,
strip: AST$StripFlags
} & AST$Statement


declare type AST$Expression = {} & AST$Node


declare type AST$SubExpression = {
path: AST$PathExpression,
params: AST$Expression[],
hash: AST$Hash
} & AST$Expression


declare type AST$PathExpression = {
data: boolean,
depth: number,
parts: string[],
original: string
} & AST$Expression


declare type AST$Literal = {} & AST$Expression


declare type AST$StringLiteral = {
value: string,
original: string
} & AST$Literal


declare type AST$BooleanLiteral = {
value: boolean,
original: boolean
} & AST$Literal


declare type AST$NumberLiteral = {
value: number,
original: number
} & AST$Literal


declare type AST$UndefinedLiteral = {} & AST$Literal


declare type AST$NullLiteral = {} & AST$Literal


declare type AST$Hash = {
pairs: AST$HashPair[]
} & AST$Node


declare type AST$HashPair = {
key: string,
value: AST$Expression
} & AST$Node


declare interface AST$StripFlags {
open: boolean,
close: boolean
} 

declare interface AST$helpers {
helperExpression(node: AST$Node): boolean,
scopeId(path: AST$PathExpression): boolean,
simpleId(path: AST$PathExpression): boolean
} declare interface Logger {
DEBUG: number,
INFO: number,
WARN: number,
ERROR: number,
level: number,
methodMap: {
[level: number]: string
},
Handlebars$log(level: number, obj: string): void
} declare module 'handlebars' {
        declare module.exports: typeof Handlebars

    }
declare module 'handlebars/runtime' {
        declare module.exports: typeof Handlebars

    }
