export interface Stylus$Static {
  /**
   * Return a new `Renderer` for the given `str` and `options`.
   */
  (str: string): Stylus$Renderer;
  (str: string, options: Stylus$RenderOptions): Stylus$Renderer;

  /**
   * Library version.
   */
  version: string;

  /**
   * Expose nodes.
   */
  nodes: Stylus$NodeStatic;

  /**
   * Expose BIFs.
   */
  functions: Stylus$Functions;

  /**
   * Expose utils.
   */
  utils: Stylus$Utils;
  Stylus$Visitor: typeof Visitor;
  Stylus$Parser: typeof Parser;
  Stylus$Evaluator: typeof Evaluator;
  Stylus$Compiler: typeof Compiler;

  /**
   * Expose middleware.
   */
  middleware(dir: string): Stylus$Middleware;
  middleware(options: any): Stylus$Middleware;

  /**
   * Convert the given `css` to `stylus` source.
   */
  convertCSS(css: string): string;

  /**
   * Render the given `str` with `options` and callback `fn(err, css)`.
   */
  render(str: string, callback: Stylus$RenderCallback): void;
  render(
    str: string,
    options: Stylus$RenderOptions,
    callback: Stylus$RenderCallback
  ): void;

  /**
   * Return a url() function with the given `options`.
   */
  url: Stylus$UrlFunction;

  /**
   * Return a url() function with the given `options`.
   */
  resolver(options: any): Stylus$LiteralFunction;
}

export interface Stylus$NodeStatic {
  Node: typeof undefined;
  Root: typeof undefined;
  Null: typeof undefined;
  Each: typeof undefined;
  If: typeof undefined;
  Call: typeof undefined;
  UnaryOp: typeof undefined;
  BinOp: typeof undefined;
  Ternary: typeof undefined;
  Block: typeof undefined;
  Unit: typeof undefined;
  String: typeof undefined;
  HSLA: typeof undefined;
  RGBA: typeof undefined;
  Ident: typeof undefined;
  Group: typeof undefined;
  Literal: typeof undefined;
  Boolean: typeof undefined;
  Return: typeof undefined;
  Media: typeof undefined;
  QueryList: typeof undefined;
  Query: typeof undefined;
  QueryExpr: typeof undefined;
  Params: typeof undefined;
  Comment: typeof undefined;
  Keyframes: typeof undefined;
  Member: typeof undefined;
  Charset: typeof undefined;
  Namespace: typeof undefined;
  Import: typeof undefined;
  Extend: typeof undefined;
  Object: typeof undefined;
  Function: typeof undefined;
  Property: typeof undefined;
  Selector: typeof undefined;
  Expression: typeof undefined;
  Arguments: typeof undefined;
  Atblock: typeof undefined;
  Atrule: typeof undefined;
  true: Stylus$Nodes.Boolean;
  false: Stylus$Nodes.Boolean;
  null: Stylus$Nodes.Null;
}

export interface Stylus$Functions {
  /**
   * Convert the given `color` to an `HSLA` node,
   * or h,s,l,a component values.
   */
  hsla(rgba: Stylus$Nodes.RGBA): Stylus$Nodes.HSLA;
  hsla(hsla: Stylus$Nodes.HSLA): Stylus$Nodes.HSLA;
  hsla(
    hue: Stylus$Nodes.Unit,
    saturation: Stylus$Nodes.Unit,
    lightness: Stylus$Nodes.Unit,
    alpha: Stylus$Nodes.Unit
  ): Stylus$Nodes.HSLA;

  /**
   * Convert the given `color` to an `HSLA` node,
   * or h,s,l component values.
   */
  hsl(rgba: Stylus$Nodes.RGBA): Stylus$Nodes.HSLA;
  hsl(hsla: Stylus$Nodes.HSLA): Stylus$Nodes.HSLA;
  hsl(
    hue: Stylus$Nodes.Unit,
    saturation: Stylus$Nodes.Unit,
    lightness: Stylus$Nodes.Unit
  ): Stylus$Nodes.HSLA;

  /**
   * Return type of `node`.
   */
  type(node: Stylus$Nodes.Node): string;

  /**
   * Return type of `node`.
   */
  typeof(node: Stylus$Nodes.Node): string;

  /**
   * Return type of `node`.
   */
  "type-of"(node: Stylus$Nodes.Node): string;

  /**
   * Return component `name` for the given `color`.
   */
  component(
    color: Stylus$Nodes.RGBA,
    name: Stylus$Nodes.String
  ): Stylus$Nodes.Unit;
  component(
    color: Stylus$Nodes.HSLA,
    name: Stylus$Nodes.String
  ): Stylus$Nodes.Unit;

  /**
   * Return component `name` for the given `color`.
   */
  basename(path: Stylus$Nodes.String): string;
  basename(path: Stylus$Nodes.String, ext: Stylus$Nodes.String): string;

  /**
   * Return the dirname of `path`.
   */
  dirname(path: Stylus$Nodes.String): string;

  /**
   * Return the extension of `path`.
   */
  extname(path: Stylus$Nodes.String): string;

  /**
   * Joins given paths
   */
  pathjoin(...paths: Stylus$Nodes.String[]): string;

  /**
   * Return the red component of the given `color`,
   * or set the red component to the optional second `value` argument.
   */
  red(color: Stylus$Nodes.RGBA): Stylus$Nodes.Unit;
  red(color: Stylus$Nodes.HSLA): Stylus$Nodes.Unit;
  red(color: Stylus$Nodes.RGBA, value: Stylus$Nodes.Unit): Stylus$Nodes.RGBA;
  red(color: Stylus$Nodes.HSLA, value: Stylus$Nodes.Unit): Stylus$Nodes.RGBA;

  /**
   * Return the green component of the given `color`,
   * or set the green component to the optional second `value` argument.
   */
  green(color: Stylus$Nodes.RGBA): Stylus$Nodes.Unit;
  green(color: Stylus$Nodes.HSLA): Stylus$Nodes.Unit;
  green(color: Stylus$Nodes.RGBA, value: Stylus$Nodes.Unit): Stylus$Nodes.RGBA;
  green(color: Stylus$Nodes.HSLA, value: Stylus$Nodes.Unit): Stylus$Nodes.RGBA;

  /**
   * Return the blue component of the given `color`,
   * or set the blue component to the optional second `value` argument.
   */
  blue(color: Stylus$Nodes.RGBA): Stylus$Nodes.Unit;
  blue(color: Stylus$Nodes.HSLA): Stylus$Nodes.Unit;
  blue(color: Stylus$Nodes.RGBA, value: Stylus$Nodes.Unit): Stylus$Nodes.RGBA;
  blue(color: Stylus$Nodes.HSLA, value: Stylus$Nodes.Unit): Stylus$Nodes.RGBA;

  /**
   * Return the alpha component of the given `color`,
   * or set the alpha component to the optional second `value` argument.
   */
  alpha(color: Stylus$Nodes.RGBA): Stylus$Nodes.Unit;
  alpha(color: Stylus$Nodes.HSLA): Stylus$Nodes.Unit;
  alpha(color: Stylus$Nodes.RGBA, value: Stylus$Nodes.Unit): Stylus$Nodes.RGBA;
  alpha(color: Stylus$Nodes.HSLA, value: Stylus$Nodes.Unit): Stylus$Nodes.RGBA;

  /**
   * Return the hue component of the given `color`,
   * or set the hue component to the optional second `value` argument.
   */
  hue(color: Stylus$Nodes.RGBA): Stylus$Nodes.Unit;
  hue(color: Stylus$Nodes.HSLA): Stylus$Nodes.Unit;
  hue(color: Stylus$Nodes.RGBA, value: Stylus$Nodes.Unit): Stylus$Nodes.RGBA;
  hue(color: Stylus$Nodes.HSLA, value: Stylus$Nodes.Unit): Stylus$Nodes.RGBA;

  /**
   * Return the saturation component of the given `color`,
   * or set the saturation component to the optional second `value` argument.
   */
  saturation(color: Stylus$Nodes.RGBA): Stylus$Nodes.Unit;
  saturation(color: Stylus$Nodes.HSLA): Stylus$Nodes.Unit;
  saturation(
    color: Stylus$Nodes.RGBA,
    value: Stylus$Nodes.Unit
  ): Stylus$Nodes.RGBA;
  saturation(
    color: Stylus$Nodes.HSLA,
    value: Stylus$Nodes.Unit
  ): Stylus$Nodes.RGBA;

  /**
   * Return the lightness component of the given `color`,
   * or set the lightness component to the optional second `value` argument.
   */
  lightness(color: Stylus$Nodes.RGBA): Stylus$Nodes.Unit;
  lightness(color: Stylus$Nodes.HSLA): Stylus$Nodes.Unit;
  lightness(
    color: Stylus$Nodes.RGBA,
    value: Stylus$Nodes.Unit
  ): Stylus$Nodes.RGBA;
  lightness(
    color: Stylus$Nodes.HSLA,
    value: Stylus$Nodes.Unit
  ): Stylus$Nodes.RGBA;

  /**
   * Return a `RGBA` from the r,g,b,a channels.
   */
  rgba(rgba: Stylus$Nodes.RGBA): Stylus$Nodes.RGBA;
  rgba(hsla: Stylus$Nodes.HSLA): Stylus$Nodes.RGBA;
  rgba(
    hue: Stylus$Nodes.Unit,
    saturation: Stylus$Nodes.Unit,
    lightness: Stylus$Nodes.Unit,
    alpha: Stylus$Nodes.Unit
  ): Stylus$Nodes.RGBA;

  /**
   * Return a `RGBA` from the r,g,b channels.
   */
  rgb(rgba: Stylus$Nodes.RGBA): Stylus$Nodes.RGBA;
  rgb(hsla: Stylus$Nodes.HSLA): Stylus$Nodes.RGBA;
  rgb(
    hue: Stylus$Nodes.Unit,
    saturation: Stylus$Nodes.Unit,
    lightness: Stylus$Nodes.Unit,
    alpha: Stylus$Nodes.Unit
  ): Stylus$Nodes.RGBA;

  /**
   * Blend the `top` color over the `bottom`
   */
  blend(top: Stylus$Nodes.RGBA): Stylus$Nodes.RGBA;
  blend(top: Stylus$Nodes.RGBA, bottom: Stylus$Nodes.RGBA): Stylus$Nodes.RGBA;
  blend(top: Stylus$Nodes.RGBA, bottom: Stylus$Nodes.HSLA): Stylus$Nodes.RGBA;
  blend(top: Stylus$Nodes.HSLA): Stylus$Nodes.RGBA;
  blend(top: Stylus$Nodes.HSLA, bottom: Stylus$Nodes.RGBA): Stylus$Nodes.RGBA;
  blend(top: Stylus$Nodes.HSLA, bottom: Stylus$Nodes.HSLA): Stylus$Nodes.RGBA;

  /**
   * Returns the relative luminance of the given `color`,
   * see http://www.w3.org/TR/WCAG20/#relativeluminancedef
   */
  luminosity(rgba: Stylus$Nodes.RGBA): Stylus$Nodes.Unit;
  luminosity(rgba: Stylus$Nodes.HSLA): Stylus$Nodes.Unit;

  /**
   * Returns the contrast ratio object between `top` and `bottom` colors,
   * based on http://leaverou.github.io/contrast-ratio/
   * and https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/color.js#L108
   */
  contrast(top: Stylus$Nodes.RGBA): Stylus$Nodes.Object;
  contrast(
    top: Stylus$Nodes.RGBA,
    bottom: Stylus$Nodes.RGBA
  ): Stylus$Nodes.Object;
  contrast(
    top: Stylus$Nodes.RGBA,
    bottom: Stylus$Nodes.HSLA
  ): Stylus$Nodes.Object;
  contrast(top: Stylus$Nodes.HSLA): Stylus$Nodes.Object;
  contrast(
    top: Stylus$Nodes.HSLA,
    bottom: Stylus$Nodes.RGBA
  ): Stylus$Nodes.Object;
  contrast(
    top: Stylus$Nodes.HSLA,
    bottom: Stylus$Nodes.HSLA
  ): Stylus$Nodes.Object;

  /**
   * Returns the transparent version of the given `top` color,
   * as if it was blend over the given `bottom` color.
   */
  transparentify(top: Stylus$Nodes.RGBA): Stylus$Nodes.Object;
  transparentify(
    top: Stylus$Nodes.RGBA,
    bottom: Stylus$Nodes.RGBA,
    alpha?: Stylus$Nodes.Unit
  ): Stylus$Nodes.Object;
  transparentify(
    top: Stylus$Nodes.RGBA,
    bottom: Stylus$Nodes.HSLA,
    alpha?: Stylus$Nodes.Unit
  ): Stylus$Nodes.Object;
  transparentify(top: Stylus$Nodes.HSLA): Stylus$Nodes.Object;
  transparentify(
    top: Stylus$Nodes.HSLA,
    bottom: Stylus$Nodes.RGBA,
    alpha?: Stylus$Nodes.Unit
  ): Stylus$Nodes.Object;
  transparentify(
    top: Stylus$Nodes.HSLA,
    bottom: Stylus$Nodes.HSLA,
    alpha?: Stylus$Nodes.Unit
  ): Stylus$Nodes.Object;

  /**
   * Convert a .json file into stylus variables or object.
   * Nested variable object keys are joined with a dash (-)
   *
   * Given this sample media-queries.json file:
   * {
   *    "small": "screen and (max-width:400px)",
   *    "tablet": {
   *      "landscape": "screen and (min-width:600px) and (orientation:landscape)",
   *      "portrait": "screen and (min-width:600px) and (orientation:portrait)"
   *    }
   * }
   */
  json(
    path: Stylus$Nodes.String,
    local: Stylus$Nodes.Boolean,
    namePrefix: Stylus$Nodes.String
  ): any;

  /**
   * Use the given `plugin`.
   */
  use(plugin: Stylus$Nodes.String): void;
  use(plugin: Stylus$Nodes.String, options: any): void;

  /**
   * Unquote the given `string`.
   */
  unquote(str: Stylus$Nodes.String): Stylus$Nodes.Literal;

  /**
   * Like `unquote` but tries to convert the given `str` to a Stylus node.
   */
  convert(str: Stylus$Nodes.String): Stylus$Nodes.Node;

  /**
   * Assign `type` to the given `unit` or return `unit`'s type.
   */
  unit(unit: Stylus$Nodes.Unit, type: Stylus$Nodes.String): Stylus$Nodes.Unit;

  /**
   * Lookup variable `name` or return Null.
   */
  lookup(name: Stylus$Nodes.String): Stylus$Nodes.Node;

  /**
   * Set a variable `name` on current scope.
   */
  define(
    name: Stylus$Nodes.String,
    expr: Stylus$Nodes.Expression
  ): Stylus$Nodes.Node;

  /**
   * Perform `op` on the `left` and `right` operands.
   */
  operate(
    op: Stylus$Nodes.String,
    left: Stylus$Nodes.Node,
    right: Stylus$Nodes.Node
  ): Stylus$Nodes.Node;

  /**
   * Test if `val` matches the given `pattern`.
   */
  match(
    pattern: Stylus$Nodes.String,
    val: Stylus$Nodes.String
  ): Stylus$Nodes.Boolean;
  match(
    pattern: Stylus$Nodes.String,
    val: Stylus$Nodes.Ident
  ): Stylus$Nodes.Boolean;

  /**
   * Returns substring of the given `val`.
   */
  substr(
    val: Stylus$Nodes.String,
    start: Stylus$Nodes.Number,
    length: Stylus$Nodes.Number
  ): Stylus$Nodes.String;
  substr(
    val: Stylus$Nodes.Ident,
    start: Stylus$Nodes.Number,
    length: Stylus$Nodes.Number
  ): Stylus$Nodes.Ident;

  /**
   * Returns string with all matches of `pattern` replaced by `replacement` in given `val`
   */
  replace(
    pattern: Stylus$Nodes.String,
    replacement: Stylus$Nodes.String,
    val: Stylus$Nodes.String
  ): Stylus$Nodes.String;
  replace(
    pattern: Stylus$Nodes.String,
    replacement: Stylus$Nodes.String,
    val: Stylus$Nodes.Ident
  ): Stylus$Nodes.Ident;

  /**
   * Splits the given `val` by `delim`
   */
  split(
    pattern: Stylus$Nodes.String,
    val: Stylus$Nodes.String
  ): Stylus$Nodes.Expression;
  split(
    pattern: Stylus$Nodes.String,
    val: Stylus$Nodes.Ident
  ): Stylus$Nodes.Expression;

  /**
   * Return length of the given `expr`.
   */
  length(expr: Stylus$Nodes.Expression): Stylus$Nodes.Unit;

  /**
   * Inspect the given `expr`.
   */
  length(...expr: Stylus$Nodes.Expression[]): Stylus$Nodes.Null;

  /**
   * Throw an error with the given `msg`.
   */
  error(msg: Stylus$Nodes.String): void;

  /**
   * Warn with the given `msg` prefixed by "Warning: ".
   */
  warn(msg: Stylus$Nodes.String): Stylus$Nodes.Null;

  /**
   * Output stack trace.
   */
  trace(): Stylus$Nodes.Null;

  /**
   * Push the given args to `expr`.
   */
  push(
    expr: Stylus$Nodes.Expression,
    ...nodes: Stylus$Nodes.Node[]
  ): Stylus$Nodes.Unit;

  /**
   * Pop a value from `expr`.
   */
  pop(expr: Stylus$Nodes.Expression): Stylus$Nodes.Node;

  /**
   * Unshift the given args to `expr`.
   */
  unshift(
    expr: Stylus$Nodes.Expression,
    ...nodes: Stylus$Nodes.Node[]
  ): Stylus$Nodes.Unit;

  /**
   * Unshift the given args to `expr`..
   */
  prepend(
    expr: Stylus$Nodes.Expression,
    ...nodes: Stylus$Nodes.Node[]
  ): Stylus$Nodes.Unit;

  /**
   * Shift a value from `expr`.
   */
  shift(expr: Stylus$Nodes.Expression): Stylus$Nodes.Node;

  /**
   * Return a `Literal` with the given `fmt`, and variable number of arguments.
   */
  s(
    fmt: Stylus$Nodes.String,
    ...nodes: Stylus$Nodes.Node[]
  ): Stylus$Nodes.Literal;

  /**
   * Return a `Literal` `num` converted to the provided `base`, padded to `width`
   * with zeroes (default width is 2)
   */
  "base-convert"(
    num: Stylus$Nodes.Number,
    base: Stylus$Nodes.Number,
    width: Stylus$Nodes.Number
  ): Stylus$Nodes.Literal;

  /**
   * Return the opposites of the given `positions`.
   */
  "opposite-position"(
    positions: Stylus$Nodes.Expression
  ): Stylus$Nodes.Expression;

  /**
   * Return the width and height of the given `img` path.
   */
  "image-size"(
    img: Stylus$Nodes.String,
    ignoreErr: Stylus$Nodes.Boolean
  ): Stylus$Nodes.Expression;

  /**
   * Return the tangent of the given `angle`.
   */
  tan(angle: Stylus$Nodes.Unit): Stylus$Nodes.Unit;

  /**
   * Return the tangent of the given `angle`.
   */
  math(n: Stylus$Nodes.Unit, fn: Stylus$Nodes.String): Stylus$Nodes.Unit;

  /**
   * Return the opposites of the given `positions`.
   */
  "-math-prop"(prop: Stylus$Nodes.String): Stylus$Nodes.Unit;

  /**
   * Adjust HSL `color` `prop` by `amount`.
   */
  adjust(
    rgba: Stylus$Nodes.RGBA,
    prop: Stylus$Nodes.String,
    amount: Stylus$Nodes.Unit
  ): Stylus$Nodes.RGBA;
  adjust(
    hsla: Stylus$Nodes.HSLA,
    prop: Stylus$Nodes.String,
    amount: Stylus$Nodes.Unit
  ): Stylus$Nodes.RGBA;

  /**
   * Return a clone of the given `expr`.
   */
  clone(expr: Stylus$Nodes.Expression): Stylus$Nodes.Expression;

  /**
   * Add property `name` with the given `expr` to the mixin-able block.
   */
  "add-property"(
    name: Stylus$Nodes.String,
    expr: Stylus$Nodes.Expression
  ): Stylus$Nodes.Property;

  /**
   * Merge the object `dest` with the given args.
   */
  merge(
    dest: Stylus$Nodes.Object,
    ...objs: Stylus$Nodes.Object[]
  ): Stylus$Nodes.Object;

  /**
   * Merge the object `dest` with the given args.
   */
  extend(
    dest: Stylus$Nodes.Object,
    ...objs: Stylus$Nodes.Object[]
  ): Stylus$Nodes.Object;

  /**
   * Return the current selector or compile `sel` selector.
   */
  selector(): string;
  selector(sel: Stylus$Nodes.String): string;

  /**
   * Prefix css classes in a block
   */
  "-prefix-classes"(
    prefix: Stylus$Nodes.String,
    block: Stylus$Nodes.Block
  ): Stylus$Nodes.Block;

  /**
   * Returns the @media string for the current block
   */
  "current-media"(): Stylus$Nodes.String;

  /**
   * Return the separator of the given `list`.
   */
  "list-separator"(list: Stylus$Nodes.Expression): Stylus$Nodes.String;
}

export interface Stylus$Utils {
  /**
   * Check if `path` looks absolute.
   */
  absolute(path: string): boolean;

  /**
   * Attempt to lookup `path` within `paths` from tail to head.
   * Optionally a path to `ignore` may be passed.
   */
  lookup(
    path: string,
    paths: string,
    ignore: string,
    resolveURL: boolean
  ): string;

  /**
   * Attempt to lookup `path` within `paths` from tail to head.
   * Optionally a path to `ignore` may be passed.
   */
  lookupIndex(path: string, paths: string, filename: string): string[];

  /**
   * Like `utils.lookup` but uses `glob` to find files.
   */
  find(path: string, paths: string, ignore: string): string[];

  /**
   * Format the given `err` with the given `options`.
   */
  formatException(err: Error, options: Stylus$ExceptionOptions): Error;

  /**
   * Assert that `node` is of the given `type`, or throw.
   */
  assertType(node: Stylus$Nodes.Node, type: string, param: string): void;

  /**
   * Assert that `node` is a `String` or `Ident`.
   */
  assertString(node: Stylus$Nodes.Node, param: string): void;

  /**
   * Assert that `node` is a `RGBA` or `HSLA`.
   */
  assertColor(node: Stylus$Nodes.Node, param: string): void;

  /**
   * Assert that param `name` is given, aka the `node` is passed.
   */
  assertPresent(node: Stylus$Nodes.Node, name: string): void;

  /**
   * Unwrap `expr`.
   *
   * Takes an expressions with length of 1
   * such as `((1 2 3))` and unwraps it to `(1 2 3)`.
   */
  unwrap(expr: Stylus$Nodes.Expression): Stylus$Nodes.Node;

  /**
   * Coerce JavaScript values to their Stylus equivalents.
   */
  coerce(val: any): Stylus$Nodes.Node;
  coerce(val: any, raw: boolean): Stylus$Nodes.Node;

  /**
   * Coerce a javascript `Array` to a Stylus `Expression`.
   */
  coerceArray(val: any): Stylus$Nodes.Expression;
  coerceArray(val: any, raw: boolean): Stylus$Nodes.Expression;

  /**
   * Coerce a javascript object to a Stylus `Expression` or `Object`.
   *
   * For example `{ foo: 'bar', bar: 'baz' }` would become
   * the expression `(foo 'bar') (bar 'baz')`. If `raw` is true
   * given `obj` would become a Stylus hash object.
   */
  coerceObject(obj: any): Stylus$Nodes.Expression;
  coerceObject(obj: any, raw: boolean): Stylus$Nodes.Expression;

  /**
   * Return param names for `fn`.
   */
  params(fn: (...args: any[]) => any): string[];

  /**
   * Merge object `b` with `a`.
   */
  merge(a: any, b: any): any;

  /**
   * Returns an array with unique values.
   */
  uniq(arr: any[]): any[];

  /**
   * Compile selector strings in `arr` from the bottom-up
   * to produce the selector combinations. For example
   * the following Stylus:
   */
  compileSelectors(arr: string[], leaveHidden: boolean): string[];
}

export interface Stylus$UrlFunction {
  (options: Stylus$UrlOptions): Stylus$LiteralFunction;
  mimes: {
    ".gif": string,
    ".png": string,
    ".jpg": string,
    ".jpeg": string,
    ".svg": string,
    ".ttf": string,
    ".eot": string,
    ".woff": string
  };
}

export type Stylus$Middleware = (
  req: any,
  res: any,
  next: (...args: any[]) => any
) => void;

declare export class Stylus$Visitor {}

declare export class Stylus$Parser {}

declare export class Stylus$Evaluator {}

declare export class Stylus$Compiler {}

declare export class Stylus$Renderer mixins NodeJS.EventEmitter {
  options: Stylus$RenderOptions;
  str: string;
  events: any;
  constructor(str: string): this;
  constructor(str: string, options: Stylus$RenderOptions): this;

  /**
   * Parse and evaluate AST, then callback `fn(err, css, js)`.
   */
  render(callback: Stylus$RenderCallback): void;

  /**
   * Parse and evaluate AST and return the result.
   */
  render(): string;

  /**
   * Get dependencies of the compiled file.
   */
  deps(filename: string): string[];

  /**
   * Set option `key` to `val`.
   */
  set(key: string, val: any): this;

  /**
   * Get option `key`.
   */
  get(key: string): any;

  /**
   * Include the given `path` to the lookup paths array.
   */
  include(path: string): this;

  /**
   * Use the given `fn`.
   *
   * This allows for plugins to alter the renderer in
   * any way they wish, exposing paths etc.
   */
  use(fn: (renderer: Stylus$Renderer) => any): this;

  /**
   * Define function or global var with the given `name`. Optionally
   * the function may accept full expressions, by setting `raw`
   * to `true`.
   */
  define(name: string, fn: (...args: any[]) => any): this;
  define(name: string, node: Stylus$Nodes.Node): this;
  define(name: string, val: any): this;
  define(name: string, fn: (...args: any[]) => any, raw: boolean): this;
  define(name: string, node: Stylus$Nodes.Node, raw: boolean): this;
  define(name: string, val: any, raw: boolean): this;

  /**
   * Import the given `file`.
   */
  import(file: string): this;
  addListener(event: string, listener: (...args: any[]) => any): this;
  on(event: string, listener: (...args: any[]) => any): this;
  once(event: string, listener: (...args: any[]) => any): this;
  removeListener(event: string, listener: (...args: any[]) => any): this;
  removeAllListeners(event?: string): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
  listeners(event: string): Array<(...args: any[]) => any>;
  emit(event: string, ...args: any[]): boolean;
  listenerCount(type: string): number;
}

declare module "Nodes" {
  declare export class Node {
    lineno: number;
    column: number;
    filename: string;
    first: Node;
    hash: string;
    nodeName: string;
    constructor(): this;

    /**
     * Return a clone of this node.
     */
    clone(): Node;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      lineno: number,
      column: number,
      filename: string
    };

    /**
     * Nodes by default evaluate to themselves.
     */
    eval(): Node;

    /**
     * Return true.
     */
    toBoolean(): Stylus$Nodes.Boolean;

    /**
     * Return the expression, or wrap this node in an expression.
     */
    toExpression(): Expression;

    /**
     * Return false if `op` is generally not coerced.
     */
    shouldCoerce(op: string): boolean;

    /**
     * Operate on `right` with the given `op`.
     */
    operate(op: string, right: Node): Node;

    /**
     * Default coercion throws.
     */
    coerce(other: Node): Node;
  }
  declare export class Root mixins Node {
    nodes: Node[];

    /**
     * Push a `node` to this block.
     */
    push(node: Node): void;

    /**
     * Unshift a `node` to this block.
     */
    unshift(node: Node): void;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      nodes: Node[],
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class String mixins Node {
    val: string;
    string: string;
    prefixed: boolean;
    quote: string;
    constructor(val: string): this;
    constructor(val: string, quote: string): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      val: string,
      quote: string,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Number mixins Node {}
  declare export class Boolean mixins Node {
    val: boolean;
    isTrue: boolean;
    isFalse: boolean;
    constructor(): this;
    constructor(val: boolean): this;

    /**
     * Negate the value.
     */
    negate(): Stylus$Nodes.Boolean;

    /**
     * Return 'Boolean'.
     */
    inspect(): string;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      val: boolean,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Object mixins Node {
    vals: Stylus$Dictionary<Node>;
    length: number;
    constructor(): this;

    /**
     * Set `key` to `val`.
     */
    set(key: string, value: Node): this;

    /**
     * Get `key`.
     */
    get(key: string): Node;

    /**
     * Has `key`?
     */
    has(key: string): boolean;

    /**
     * Convert object to string with properties.
     */
    toBlock(): string;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      vals: Stylus$Dictionary<Node>,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Null mixins Node {
    isNull: boolean;
    constructor(): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Ident mixins Node {
    name: string;
    string: string;
    val: Node;
    mixin: boolean;
    isEmpty: boolean;
    constructor(name: string, val: Node): this;
    constructor(name: string, val: Node, mixin: boolean): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      name: string,
      val: Node,
      mixin: boolean,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Literal mixins Node {
    val: string;
    string: string;
    prefixed: boolean;
    constructor(str: string): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      string: string,
      val: string,
      prefixed: boolean,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Unit mixins Node {
    val: number;
    type: string;
    constructor(val: number, type: string): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      val: number,
      type: string,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class RGBA mixins Node {
    r: number;
    g: number;
    b: number;
    a: number;
    rgba: RGBA;
    hsla: HSLA;
    constructor(r: number, g: number, b: number, a: number): this;

    /**
     * Return an `RGBA` without clamping values.
     */
    static withoutClamping(r: number, g: number, b: number, a: number): RGBA;

    /**
     * Return a `RGBA` from the given `hsla`.
     */
    static fromHSLA(hsla: HSLA): RGBA;

    /**
     * Add r,g,b,a to the current component values
     */
    add(r: number, g: number, b: number, a: number): RGBA;

    /**
     * Subtract r,g,b,a from the current component values
     */
    substract(r: number, g: number, b: number, a: number): RGBA;

    /**
     * Multiply rgb components by `n`.
     */
    multiply(n: number): RGBA;

    /**
     * Divide rgb components by `n`.
     */
    divide(n: number): RGBA;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      r: number,
      g: number,
      b: number,
      a: number,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class HSLA mixins Node {
    h: number;
    s: number;
    l: number;
    a: number;
    hsla: HSLA;
    rgba: RGBA;
    constructor(h: number, s: number, l: number, a: number): this;

    /**
     * Return a `HSLA` from the given `hsla`.
     */
    static fromRGBA(rgba: RGBA): HSLA;

    /**
     * Add h,s,l to the current component values
     */
    add(h: number, s: number, l: number): HSLA;

    /**
     * Subtract h,s,l from the current component values
     */
    substract(h: number, s: number, l: number): HSLA;

    /**
     * Adjust lightness by `percent`.
     */
    adjustLightness(percent: number): HSLA;

    /**
     * djust hue by `deg`.
     */
    adjustHue(deg: number): HSLA;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      h: number,
      s: number,
      l: number,
      a: number,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Block mixins Node {
    nodes: Node[];
    parent: Block;
    node: Node;
    scope: boolean;
    hasProperties: boolean;
    hasMedia: boolean;
    isEmpty: boolean;
    constructor(parent: Block): this;
    constructor(parent: Block, node: Node): this;

    /**
     * Push a `node` to this block.
     */
    push(node: Node): void;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      nodes: Node[],
      scope: boolean,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Group mixins Node {
    nodes: Node[];
    block: Block;
    hasOnlyPlaceholders: boolean;
    constructor(): this;

    /**
     * Push the given `selector` node.
     */
    push(node: Node): void;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      nodes: Node[],
      block: Block,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Expression mixins Node {
    nodes: Node[];
    isList: boolean;
    isEmpty: boolean;
    first: Node;
    constructor(isList: boolean): this;

    /**
     * Push the given node.
     */
    push(node: Node): void;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      nodes: Node[],
      isList: boolean,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Property mixins Node {
    segments: Node[];
    expr: Expression;
    constructor(segs: Node[], expr: Expression): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      segments: Node[],
      name: string,
      expr?: Expression,
      literal?: Literal,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Each mixins Node {
    val: string;
    key: string;
    expr: Expression;
    block: Block;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      val: string,
      key: string,
      expr: Expression,
      block: Block,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class If mixins Node {
    cond: Expression;
    elses: Expression[];
    block: Block;
    negate: boolean;
    constructor(cond: Expression, negate: boolean): this;
    constructor(cond: Expression, block: Block): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      cond: Expression,
      elses: Expression[],
      block: Block,
      negate: boolean,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Call mixins Node {
    name: string;
    args: Expression;
    constructor(name: string, args: Expression): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      name: string,
      args: Expression,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class UnaryOp mixins Node {
    op: string;
    expr: Expression;
    constructor(op: string, expr: Expression): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      op: string,
      expr: Expression,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class BinOp mixins Node {
    op: string;
    left: Expression;
    right: Expression;
    constructor(op: string, left: Expression, right: Expression): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      op: string,
      left: Expression,
      right: Expression,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Ternary mixins Node {
    op: string;
    trueExpr: Expression;
    falseExpr: Expression;
    constructor(op: string, trueExpr: Expression, falseExpr: Expression): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      op: string,
      trueExpr: Expression,
      falseExpr: Expression,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Return mixins Node {
    expr: Expression;
    constructor(expr: Expression): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      expr: Expression,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Media mixins Node {
    val: string;
    constructor(val: string): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      val: string,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class QueryList mixins Node {
    nodes: Node[];
    constructor(): this;

    /**
     * Push the given `node`.
     */
    push(node: Node): void;

    /**
     * Merges this query list with the `other`.
     */
    merge(other: QueryList): QueryList;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      nodes: Node[],
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Query mixins Node {
    nodes: QueryExpr[];
    type: string;
    predicate: string;
    resolvedType: string;
    resolvedPredicate: string;
    constructor(): this;

    /**
     * Push the given `expr`.
     */
    push(expr: QueryExpr): void;

    /**
     * Merges this query with the `other`.
     */
    merge(other: Query): Query;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      nodes: QueryExpr[],
      predicate: string,
      type: string,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class QueryExpr mixins Node {
    segments: Node[];
    expr: Expression;
    constructor(segs: Node[]): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      segments: Node[],
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Params mixins Node {
    nodes: Node[];
    length: number;

    /**
     * Push the given `node`.
     */
    push(node: Node): void;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      nodes: Node[],
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Comment mixins Node {
    str: string;
    suppress: boolean;
    inline: boolean;
    constructor(str: string, suppress: boolean, inline: boolean): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      str: string,
      suppress: boolean,
      inline: boolean,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Keyframes mixins Node {
    segments: Node[];
    prefix: string;
    constructor(segs: Node[]): this;
    constructor(segs: Node[], prefix: string): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      segments: Node[],
      prefix: string,
      block: Block,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Member mixins Node {
    left: Node;
    right: Node;
    constructor(left: Node, right: Node): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      left: Node,
      right: Node,
      val?: string,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Charset mixins Node {
    val: string;
    constructor(val: string): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      val: string,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Namespace mixins Node {
    val: string;
    prefix: string;
    constructor(val: string, prefix: string): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      val: string,
      prefix: string,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Import mixins Node {
    path: Expression;
    once: boolean;
    constructor(path: Expression): this;
    constructor(path: Expression, once: boolean): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      path: Expression,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Extend mixins Node {
    selectors: Selector[];
    constructor(selectors: Selector[]): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      selectors: Selector[],
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Function mixins Node {
    name: string;
    params: Params;
    body: Block;
    constructor(name: string, params: Params, body: Block): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      name: string,
      params: Params,
      body: Block,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Selector mixins Node {
    inherits: boolean;
    segments: Node[];
    constructor(segs: Node[]): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      segments: Node[],
      inherits: boolean,
      val: string,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Arguments mixins Expression {
    map: Stylus$Dictionary<Node>;
    constructor(): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      map: Stylus$Dictionary<Node>,
      isList: boolean,
      preserve: boolean,
      nodes: Node[],
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Atblock mixins Node {
    block: Block;
    nodes: Node[];
    constructor(): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      block: Block,
      lineno: number,
      column: number,
      filename: string
    };
  }
  declare export class Atrule mixins Node {
    type: string;
    hasOnlyProperties: boolean;
    constructor(type: string): this;

    /**
     * Return a JSON representation of this node.
     */
    toJSON(): {
      __type: string,
      type: string,
      segments: Node[],
      block?: Block,
      lineno: number,
      column: number,
      filename: string
    };
  }
}

export interface Stylus$Dictionary<T> {
  [key: string]: T;
}

export interface Stylus$RenderOptions {
  globals?: Stylus$Dictionary<any>;
  functions?: Stylus$Dictionary<any>;
  imports?: string[];
  paths?: string[];
  filename?: string;
  Stylus$Evaluator?: typeof Evaluator;
}

export type Stylus$RenderCallback = (
  err: Error,
  css: string,
  js: string
) => void;

export interface Stylus$UrlOptions {
  limit?: string;
  path: string;
}

export interface Stylus$LiteralFunction {
  (url: string): Stylus$Nodes.Literal;
  raw: boolean;
}

export interface Stylus$ExceptionOptions {
  filename: string;
  context: number;
  lineno: number;
  column: number;
  input: string;
}
declare module "stylus" {
  declare var stylus: Stylus$Stylus$Static;
  declare export default typeof stylus;
}
