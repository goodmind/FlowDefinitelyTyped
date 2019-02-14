declare module "terser" {
  import typeof * as MOZ_SourceMap from "source-map";

  declare export interface Tokenizer {
    /**
     * The type of this token.
     * "comment1" and "comment2" are for single-line, respectively multi-line comments.
     */
    type:
      | "num"
      | "string"
      | "regexp"
      | "operator"
      | "punc"
      | "atom"
      | "name"
      | "keyword"
      | "comment1"
      | "comment2";

    /**
     * The name of the file where this token originated from. Useful when compressing multiple files at once to generate the proper source map.
     */
    file: string;

    /**
     * The "value" of the token.
     * That's additional information and depends on the token type: "num", "string" and "regexp" tokens you get their literal value.
     * - For "operator" you get the operator.
     * - For "punc" it's the punctuation sign (parens, comma, semicolon etc).
     * - For "atom", "name" and "keyword" it's the name of the identifier
     * - For comments it's the body of the comment (excluding the initial "//" and "/*".
     */
    value: string;

    /**
     * The line number of this token in the original code.
     * 1-based index.
     */
    line: number;

    /**
     * The column number of this token in the original code.
     * 0-based index.
     */
    col: number;

    /**
     * Short for "newline before", it's a boolean that tells us whether there was a newline before this node in the original source. It helps for automatic semicolon insertion.
     * For multi-line comments in particular this will be set to true if there either was a newline before this comment, or * * if this comment contains a newline.
     */
    nlb: boolean;

    /**
     * This doesn't apply for comment tokens, but for all other token types it will be an array of comment tokens that were found before.
     */
    comments_before: string[];
  }
  declare export class AST_Node {
    start: AST_Node;
    end: AST_Node;
    value: string | number;
    file: string;
    property: string;
    key: string;
    transform(tt: TreeTransformer): AST_Toplevel;
    walk(walker: TreeWalker): void;
  }
  declare export class AST_Toplevel mixins AST_Node {
    figure_out_scope(): void;
    compute_char_frequency(): void;
    mangle_names(): void;
    print(stream: OutputStream): void;
    print_to_string(options?: BeautifierOptions): string;
  }
  declare export interface MinifyOptions {
    spidermonkey?: boolean;
    outSourceMap?: string;
    sourceRoot?: string;
    inSourceMap?: string;
    fromString?: boolean;
    warnings?: boolean;
    mangle?: boolean | MangleOptions;
    output?: OutputOptions;
    compress?: boolean | CompressOptions;
    nameCache?: {};
  }
  declare export interface MinifyOutput {
    code: string;
    map: string;
    warnings?: string[];
    error?: string;
    ast?: boolean | AST_Toplevel;
  }
  declare export function minify(
    files: {},
    options?: MinifyOptions
  ): MinifyOutput;

  declare export interface ParseOptions {
    strict?: boolean;
    filename?: string;
    toplevel?: AST_Toplevel;
  }
  declare export interface CompressOptions {
    /**
     * Replace `arguments[index]` with function parameter name whenever possible.
     */
    arguments?: boolean;

    /**
     * Various optimizations for boolean context, for example `!!a ? b : c → a ? b : c`
     */
    booleans?: boolean;

    /**
     * Collapse single-use non-constant variables, side effects permitting.
     */
    collapse_vars?: boolean;

    /**
     * Apply certain optimizations to binary nodes, e.g. `!(a <= b) → a > b,` attempts to negate binary nodes, e.g. `a = !b && !c && !d && !e → a=!(b||c||d||e)` etc
     */
    comparisons?: boolean;

    /**
     * Apply optimizations for `if-s` and conditional expressions.
     */
    conditionals?: boolean;

    /**
     * Remove unreachable code
     */
    dead_code?: boolean;

    /**
     * Pass `true` to discard calls to console.* functions.
     * If you wish to drop a specific function call such as `console.info` and/or retain side effects from function
     * arguments after dropping the function call then use `pure_funcs` instead.
     */
    drop_console?: boolean;

    /**
     * Remove `debugger;` statements
     */
    drop_debugger?: boolean;

    /**
     * Attempt to evaluate constant expressions
     */
    evaluate?: boolean;

    /**
     * Pass `true` to preserve completion values from terminal statements without `return`, e.g. in bookmarklets.
     */
    expression?: boolean;
    global_defs?: { [key: string]: any };

    /**
     * hoist function declarations
     */
    hoist_funs?: boolean;

    /**
     * Hoist properties from constant object and array literals into regular variables subject to a set of constraints.
     * For example: `var o={p:1, q:2}; f(o.p, o.q);` is converted to `f(1, 2);`. Note: `hoist_props` works best with mangle enabled,
     * the compress option passes set to 2 or higher, and the compress option toplevel enabled.
     */
    hoist_props?: boolean;

    /**
     * Hoist var declarations (this is `false` by default because it seems to increase the size of the output in general)
     */
    hoist_vars?: boolean;

    /**
     * Optimizations for if/return and if/continue
     */
    if_return?: boolean;

    /**
     * Inline calls to function with simple/return statement
     * - false -- same as `Disabled`
     * - `Disabled` -- disabled inlining
     * - `SimpleFunctions` -- inline simple functions
     * - `WithArguments` -- inline functions with arguments
     * - `WithArgumentsAndVariables` -- inline functions with arguments and variables
     * - true -- same as `WithArgumentsAndVariables`
     */
    inline?: boolean | $Values<typeof InlineFunctions>;

    /**
     * join consecutive `var` statements
     */
    join_vars?: boolean;

    /**
     * Prevents the compressor from discarding unused function arguments. You need this for code which relies on `Function.length`
     */
    keep_fargs?: boolean;

    /**
     * Pass true to prevent the compressor from discarding function names. Useful for code relying on `Function.prototype.name`.
     */
    keep_fnames?: boolean;

    /**
     * Pass true to prevent Infinity from being compressed into `1/0`, which may cause performance issues on `Chrome`
     */
    keep_infinity?: boolean;

    /**
     * Optimizations for `do`, `while` and `for` loops when we can statically determine the condition.
     */
    loops?: boolean;

    /**
     * negate `Immediately-Called Function Expressions` where the return value is discarded, to avoid the parens that the code generator would insert.
     */
    negate_iife?: boolean;

    /**
     * The maximum number of times to run compress. In some cases more than one pass leads to further compressed code. Keep in mind more passes will take more time.
     */
    passes?: number;

    /**
     * Rewrite property access using the dot notation, for example `foo["bar"]` to `foo.bar`
     */
    properties?: boolean;

    /**
     * An array of names and UglifyJS will assume that those functions do not produce side effects.
     * DANGER: will not check if the name is redefined in scope.
     * An example case here, for instance `var q = Math.floor(a/b)`.
     * If variable q is not used elsewhere, UglifyJS will drop it, but will still keep the `Math.floor(a/b)`,
     * not knowing what it does. You can pass `pure_funcs: [ 'Math.floor' ]` to let it know that this function
     * won't produce any side effect, in which case the whole statement would get discarded. The current
     * implementation adds some overhead (compression will be slower).
     */
    pure_funcs?: string[];
    pure_getters?: boolean | "strict";

    /**
     * Allows single-use functions to be inlined as function expressions when permissible allowing further optimization.
     * Enabled by default. Option depends on reduce_vars being enabled. Some code runs faster in the Chrome V8 engine if
     * this option is disabled. Does not negatively impact other major browsers.
     */
    reduce_funcs?: boolean;

    /**
     * Improve optimization on variables assigned with and used as constant values.
     */
    reduce_vars?: boolean;
    sequences?: boolean;

    /**
     * Pass false to disable potentially dropping functions marked as "pure".
     */
    side_effects?: boolean;

    /**
     * De-duplicate and remove unreachable `switch` branches.
     */
    switches?: boolean;

    /**
     * Drop unreferenced functions ("funcs") and/or variables ("vars") in the top level scope (false by default, true to drop both unreferenced functions and variables)
     */
    toplevel?: boolean;

    /**
     * Prevent specific toplevel functions and variables from unused removal (can be array, comma-separated, RegExp or function. Implies toplevel)
     */
    top_retain?: boolean;
    typeofs?: boolean;
    unsafe?: boolean;

    /**
     * Compress expressions like a `<= b` assuming none of the operands can be (coerced to) `NaN`.
     */
    unsafe_comps?: boolean;

    /**
     * Compress and mangle `Function(args, code)` when both args and code are string literals.
     */
    unsafe_Function?: boolean;

    /**
     * Optimize numerical expressions like `2 * x * 3` into `6 * x`, which may give imprecise floating point results.
     */
    unsafe_math?: boolean;

    /**
     * Optimize expressions like `Array.prototype.slice.call(a)` into `[].slice.call(a)`
     */
    unsafe_proto?: boolean;

    /**
     * Enable substitutions of variables with `RegExp` values the same way as if they are constants.
     */
    unsafe_regexp?: boolean;
    unsafe_undefined?: boolean;
    unused?: boolean;

    /**
     * display warnings when dropping unreachable code or unused declarations etc.
     */
    warnings?: boolean;
  }

  declare export var InlineFunctions: {|
    +Disabled: 0, // 0
    +SimpleFunctions: 1, // 1
    +WithArguments: 2, // 2
    +WithArgumentsAndVariables: 3 // 3
  |};

  declare export interface MangleOptions {
    /**
     * Pass true to mangle names visible in scopes where `eval` or with are used.
     */
    eval?: boolean;

    /**
     * Pass true to not mangle function names. Useful for code relying on `Function.prototype.name`.
     */
    keep_fnames?: boolean;

    /**
     * Pass an array of identifiers that should be excluded from mangling. Example: `["foo", "bar"]`.
     */
    reserved?: string[];

    /**
     * Pass true to mangle names declared in the top level scope.
     */
    toplevel?: boolean;
    properties?: boolean | ManglePropertiesOptions;
  }
  declare export interface ManglePropertiesOptions {
    /**
     * Use true to allow the mangling of builtin DOM properties. Not recommended to override this setting.
     */
    builtins?: boolean;

    /**
     * Mangle names with the original name still present. Pass an empty string "" to enable, or a non-empty string to set the debug suffix.
     */
    debug?: boolean;

    /**
     * Only mangle unquoted property names
     */
    keep_quoted?: boolean;

    /**
     * Pass a RegExp literal to only mangle property names matching the regular expression.
     */
    regex?: RegExp;

    /**
     * Do not mangle property names listed in the reserved array
     */
    reserved?: string[];
  }
  declare export interface OutputOptions {
    ascii_only?: boolean;
    beautify?: boolean;
    braces?: boolean;
    comments?: boolean | "all" | "some" | RegExp;
    indent_level?: number;
    indent_start?: boolean;
    inline_script?: boolean;
    keep_quoted_props?: boolean;
    max_line_len?: boolean | number;
    preamble?: string;
    preserve_line?: boolean;
    quote_keys?: boolean;
    quote_style?: $Values<typeof OutputQuoteStyle>;
    semicolons?: boolean;
    shebang?: boolean;
    webkit?: boolean;
    width?: number;
    wrap_iife?: boolean;
  }

  declare export var OutputQuoteStyle: {|
    +PreferDouble: 0, // 0
    +AlwaysSingle: 1, // 1
    +AlwaysDouble: 2, // 2
    +AlwaysOriginal: 3 // 3
  |};

  /**
   * The parser creates a custom abstract syntax tree given a piece of JavaScript code.
   * Perhaps you should read about the AST first.
   */
  declare export function parse(
    code: string,
    options?: ParseOptions
  ): AST_Toplevel;

  declare export interface BeautifierOptions {
    /**
     * Start indentation on every line (only when `beautify`)
     */
    indent_start?: number;

    /**
     * Indentation level (only when `beautify`)
     */
    indent_level?: number;

    /**
     * Quote all keys in {} literals?
     */
    quote_keys?: boolean;

    /**
     * Add a space after colon signs?
     */
    space_colon?: boolean;

    /**
     * Output ASCII-safe? (encodes Unicode characters as ASCII)
     */
    ascii_only?: boolean;

    /**
     * Escape "</script"?
     */
    inline_script?: boolean;

    /**
     * Informative maximum line width (for beautified output)
     */
    width?: number;

    /**
     * Maximum line length (for non-beautified output)
     */
    max_line_len?: boolean | number;

    /**
     * Output IE-safe code?
     */
    ie_proof?: boolean;

    /**
     * Beautify output?
     */
    beautify?: boolean;

    /**
     * Output a source map
     */
    source_map?: SourceMap;

    /**
     * Use brackets every time?
     */
    bracketize?: boolean;

    /**
     * Output comments?
     */
    comments?: boolean;

    /**
     * Use semicolons to separate statements? (otherwise, newlines)
     */
    semicolons?: boolean;
  }
  declare export interface OutputStream {
    get(): string;
    toString(): string;
    indent(half?: boolean): void;
    indentation(): number;
    current_width(): number;
    should_break(): boolean;
    newline(): void;
    print(str: string): void;
    space(): void;
    comma(): void;
    colon(): void;
    last(): string;
    semicolon(): void;
    force_semicolon(): void;
    to_ascii(str: string): void;
    print_name(name: string): void;
    print_string(str: string): void;
    next_indent(): number;
    with_indent(col: number, func: () => void): void;
    with_block(func: () => void): void;
    with_parens(func: () => void): void;
    with_square(func: () => void): void;
    add_mapping(token: AST_Node, name?: string): void;
    option(name: string): any;
    line(): number;
    col(): number;
    push_node(node: AST_Node): void;
    pop_node(): AST_Node;
    stack(): any;
    parent(n: number): AST_Node;
  }

  /**
   * The code generator is a recursive process of getting back source code from an AST returned by the parser.
   * Every AST node has a “print” method that takes an OutputStream and dumps the code from that node into it.
   * The stream {} supports a lot of options that control the output.
   * You can specify whether you'd like to get human-readable (indented) output, the indentation level, whether you'd like to quote all properties in {} literals etc.
   */
  declare export function OutputStream(
    options?: BeautifierOptions
  ): OutputStream;

  declare export interface SourceMapOptions {
    /**
     * The compressed file name
     */
    file?: string;

    /**
     * The root URL to the original sources
     */
    root?: string;

    /**
     * The input source map.
     * Useful when you compress code that was generated from some other source (possibly other programming language).
     * If you have an input source map, pass it in this argument and Terser will generate a mapping that maps back
     * to the original source (as opposed to the compiled code that you are compressing).
     */
    orig?: {} | JSON;
  }
  declare export interface SourceMap {
    add(
      source: string,
      gen_line: number,
      gen_col: number,
      orig_line: number,
      orig_col: number,
      name?: string
    ): void;
    get(): MOZ_SourceMap.SourceMapGenerator;
    toString(): string;
  }

  /**
   * The output stream keeps track of the current line/column in the output and can trivially generate a source mapping to the original code via Mozilla's source-map library.
   * To use this functionality, you must load this library (it's automatically require-d by Terser in the NodeJS version, but in a browser you must load it yourself)
   * and make it available via the global MOZ_SourceMap variable.
   */
  declare export function SourceMap(options?: SourceMapOptions): SourceMap;

  declare export interface CompressorOptions {
    sequences?: boolean;
    properties?: boolean;
    dead_code?: boolean;
    drop_debugger?: boolean;
    unsafe?: boolean;
    conditionals?: boolean;
    comparisons?: boolean;
    evaluate?: boolean;
    booleans?: boolean;
    loops?: boolean;
    unused?: boolean;
    hoist_funs?: boolean;
    hoist_vars?: boolean;
    if_return?: boolean;
    join_vars?: boolean;
    cascade?: boolean;
    side_effects?: boolean;
    warnings?: boolean;
    global_defs?: {};
  }

  /**
   * The compressor is a tree transformer which reduces the code size by applying various optimizations on the AST
   */
  declare export function Compressor(options?: CompressorOptions): AST_Toplevel;

  /**
   * Terser provides a TreeWalker {} and every node has a walk method that given a walker will apply your visitor to each node in the tree.
   * Your visitor can return a non-falsy value in order to prevent descending the current node.
   */
  declare export class TreeWalker {
    constructor(visitor: visitor): this;
    parent: () => AST_Scope;
    stack: AST_Scope[];
  }
  declare export type visitor = (
    node: AST_Node,
    descend: () => void
  ) => boolean | void;

  /**
   * The tree transformer is a special case of a tree walker.
   * In fact it even inherits from TreeWalker and you can use the same methods, but initialization and visitor protocol are a bit different.
   */
  declare export class TreeTransformer mixins TreeWalker {
    constructor(visitor: visitor, after: visitor): this;
  }
  declare export class AST_PropAccess mixins AST_Node {}
  declare export class AST_ObjectKeyVal mixins AST_Node {}
  declare export class AST_Scope mixins AST_Node {
    find_variable(name: string): AST_SymbolDeclaration;
  }
  declare export class AST_Symbol mixins AST_Node {
    scope: AST_Scope;
    name: string;
    thedef: mixed;
  }
  declare export class AST_SymbolDeclaration mixins AST_Symbol {
    orig: AST_SymbolDeclaration[];
    references: AST_SymbolRef[];
    global: boolean;
    undeclared: boolean;
    constant: boolean;
    mangledName: string;
    mangled_name: string;
  }
  declare export class AST_SymbolRef mixins AST_Symbol {}
  declare export class AST_Call mixins AST_Node {
    expression: {
      name?: string,
      property?: string
    };
    args: AST_Node[];
  }
  declare export class AST_String mixins AST_Node {
    value: string;
  }
  declare export class AST_Lambda mixins AST_Node {
    name: string;
  }
  declare export class AST_SymbolMethod mixins AST_Node {
    name: string;
  }
  declare export class AST_ConciseMethod mixins AST_Node {}
  declare export class AST_SymbolVar mixins AST_Node {
    name: string;
  }
}
