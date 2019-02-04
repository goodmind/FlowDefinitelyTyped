declare module 'escodegen' {
        declare export interface FormatOptions {

/**
 * The indent options
 */
indent?: IndentOptions,

/**
 * New line string. Default is '\n'.
 */
newline?: string,

/**
 * White space string. Default is standard ' ' (\x20).
 */
space?: string,

/**
 * Enforce JSON format of numeric and string literals. This option takes precedence over option.format.hexadecimal and option.format.quotes. Default is false.
 */
json?: boolean,

/**
 * Try to generate shorter numeric literals than toString() (9.8.1). Default is false.
 */
renumber?: boolean,

/**
 * Generate hexadecimal a numeric literal if it is shorter than its equivalents. Requires option.format.renumber. Default is false.
 */
hexadecimal?: boolean,

/**
 * Delimiter to use for string literals. Accepted values are: 'single', 'double', and 'auto'. When 'auto' is specified, escodegen selects a delimiter that results in a shorter literal. Default is 'single'.
 */
quotes?: string,

/**
 * Escape as few characters in string literals as necessary. Default is false.
 */
escapeless?: boolean,

/**
 * Do not include superfluous whitespace characters and line terminators. Default is false.
 */
compact?: boolean,

/**
 * Preserve parentheses in new expressions that have no arguments. Default is true.
 */
parentheses?: boolean,

/**
 * Preserve semicolons at the end of blocks and programs. Default is true.
 */
semicolons?: boolean,
safeConcatenation?: boolean,
preserveBlankLines?: boolean
} 
	declare export interface IndentOptions {

/**
 * Indent string. Default is 4 spaces ('    ').
 */
style?: string,

/**
 * Base indent level. Default is 0.
 */
base?: number,

/**
 * Adjust the indentation of multiline comments to keep asterisks vertically aligned. Default is false.
 */
adjustMultilineComment?: boolean
} 
	declare export interface MozillaOptions {

/**
 * Default: false
 */
starlessGenerator?: boolean,

/**
 * Default: false
 */
parenthesizedComprehensionBlock?: boolean,

/**
 * Default: false
 */
comprehensionExpressionStartsWithAssignment?: boolean
} 
	declare export interface GenerateOptions {

/**
 * The format options
 */
format?: FormatOptions,
moz?: MozillaOptions,

/**
 * Mozilla Parser API compatible parse function, e.g., the parse function exported by esprima. If it is provided, generator tries to use the 'raw' representation. See esprima raw information. Default is null.
 */
parse?: Function,

/**
 * If comments are attached to AST, escodegen is going to emit comments to output code. Default is false.
 */
comment?: boolean,

/**
 * sourceMap is the source maps's source filename, that's a name that will show up in the browser debugger for the generated source (if source-maps is enabled).
 * If a non-empty string value is provided, generate a source map.
 */
sourceMap?: string,

/**
 * . If sourceMapWithCode is true generator returns output hash, where output.map is a source-map representation, which can be serialized as output.map.toString(). output.code is a string with generated JS code (note that it's not going to have //@ sourceMappingURL comment in it).
 */
sourceMapWithCode?: boolean,

/**
 * Optionally option.sourceContent string can be passed (which represents original source of the file, for example it could be a source of coffeescript from which JS is being generated), if provided generated source map will have original source embedded in it.
 */
sourceContent?: string,
sourceCode?: string,

/**
 * Optionally option.sourceMapRoot can be provided, in which case option.sourceMap will be treated as relative to it. For more information about source map itself, see source map library document, V3 draft and HTML5Rocks introduction. Default is undefined
 * sourceMapRoot is the source root for the source map (see the Mozilla documentation). If sourceMapWithCode is truthy, an object is returned from generate() of the form: { code: .. , map: .. }. If file is provided, it will be used as file property of generated source map.
 */
sourceMapRoot?: string,

/**
 * Recognize DirectiveStatement and distinguish it from ExpressionStatement. Default: false
 */
directive?: boolean,

/**
 * If file is provided, it will be used as file property of generated source map.
 */
file?: string,

/**
 * Providing verbatim code generation option to Expression nodes.
 * verbatim option is provided by user as string. When generating Expression code,
 * looking up node[option.verbatim] value and dump it instead of normal code generation.
 * @example
 */
verbatim?: string
} 
	
/**
 * https://github.com/estools/escodegen/commit/adf113333cd4888cf59bfc4f957df98bf7db82b6
 */
declare export  class Precedence {
  constructor(...args: empty): mixed;
static +Sequence: Class<Precedence__Sequence> & Precedence__Sequence & 0;// 0
static +Yield: Class<Precedence__Yield> & Precedence__Yield & 1;// 1
static +Await: Class<Precedence__Await> & Precedence__Await & 2;// 2
static +Assignment: Class<Precedence__Assignment> & Precedence__Assignment & 3;// 3
static +Conditional: Class<Precedence__Conditional> & Precedence__Conditional & 4;// 4
static +ArrowFunction: Class<Precedence__ArrowFunction> & Precedence__ArrowFunction & 5;// 5
static +LogicalOR: Class<Precedence__LogicalOR> & Precedence__LogicalOR & 6;// 6
static +LogicalAND: Class<Precedence__LogicalAND> & Precedence__LogicalAND & 7;// 7
static +BitwiseOR: Class<Precedence__BitwiseOR> & Precedence__BitwiseOR & 8;// 8
static +BitwiseXOR: Class<Precedence__BitwiseXOR> & Precedence__BitwiseXOR & 9;// 9
static +BitwiseAND: Class<Precedence__BitwiseAND> & Precedence__BitwiseAND & 10;// 10
static +Equality: Class<Precedence__Equality> & Precedence__Equality & 11;// 11
static +Relational: Class<Precedence__Relational> & Precedence__Relational & 12;// 12
static +BitwiseSHIFT: Class<Precedence__BitwiseSHIFT> & Precedence__BitwiseSHIFT & 13;// 13
static +Additive: Class<Precedence__Additive> & Precedence__Additive & 14;// 14
static +Multiplicative: Class<Precedence__Multiplicative> & Precedence__Multiplicative & 15;// 15
static +Unary: Class<Precedence__Unary> & Precedence__Unary & 16;// 16
static +Postfix: Class<Precedence__Postfix> & Precedence__Postfix & 17;// 17
static +Call: Class<Precedence__Call> & Precedence__Call & 18;// 18
static +New: Class<Precedence__New> & Precedence__New & 19;// 19
static +TaggedTemplate: Class<Precedence__TaggedTemplate> & Precedence__TaggedTemplate & 20;// 20
static +Member: Class<Precedence__Member> & Precedence__Member & 21;// 21
static +Primary: Class<Precedence__Primary> & Precedence__Primary & 22;// 22

}

declare class Precedence__Sequence mixins Precedence {}
declare class Precedence__Yield mixins Precedence {}
declare class Precedence__Await mixins Precedence {}
declare class Precedence__Assignment mixins Precedence {}
declare class Precedence__Conditional mixins Precedence {}
declare class Precedence__ArrowFunction mixins Precedence {}
declare class Precedence__LogicalOR mixins Precedence {}
declare class Precedence__LogicalAND mixins Precedence {}
declare class Precedence__BitwiseOR mixins Precedence {}
declare class Precedence__BitwiseXOR mixins Precedence {}
declare class Precedence__BitwiseAND mixins Precedence {}
declare class Precedence__Equality mixins Precedence {}
declare class Precedence__Relational mixins Precedence {}
declare class Precedence__BitwiseSHIFT mixins Precedence {}
declare class Precedence__Additive mixins Precedence {}
declare class Precedence__Multiplicative mixins Precedence {}
declare class Precedence__Unary mixins Precedence {}
declare class Precedence__Postfix mixins Precedence {}
declare class Precedence__Call mixins Precedence {}
declare class Precedence__New mixins Precedence {}
declare class Precedence__TaggedTemplate mixins Precedence {}
declare class Precedence__Member mixins Precedence {}
declare class Precedence__Primary mixins Precedence {}

	
/**
 * Produces given Abstract Syntax Tree as javascript code
 * @param ast The Abstract Syntax Tree to generate code from
 * @param options The generation options
 */
declare export function generate(ast: any, options?: GenerateOptions): string

	
/**
 * Attaching the comments is needed to keep the comments and to allow blank lines to be preserved.
 */
declare export function attachComments(ast: any, comments: any, tokens: any): any

    }
