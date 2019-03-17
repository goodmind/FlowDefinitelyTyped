declare module "acorn" {
  declare export default typeof acorn;

  import typeof * as ESTree from "estree";

  declare var acorn: typeof npm$namespace$acorn;

  declare var npm$namespace$acorn: {
    getLineInfo: typeof acorn$getLineInfo,
    isIdentifierStart: typeof acorn$isIdentifierStart,
    isIdentifierChar: typeof acorn$isIdentifierChar,
    isNewLine: typeof acorn$isNewLine,
    parseExpressionAt: typeof acorn$parseExpressionAt,
    tokenizer: typeof acorn$tokenizer,
    addLooseExports: typeof acorn$addLooseExports,
    plugins: typeof acorn$plugins,
    defaultOptions: typeof acorn$defaultOptions,
    tokTypes: typeof acorn$tokTypes,
    tokContexts: typeof acorn$tokContexts,
    lineBreak: typeof acorn$lineBreak,
    lineBreakG: typeof acorn$lineBreakG,
    version: typeof acorn$version,
    parse: typeof acorn$parse,
    parse_dammit: typeof acorn$parse_dammit,
    LooseParser: typeof acorn$LooseParser,
    pluginsLoose: typeof acorn$pluginsLoose,

    Parser: typeof acorn$Parser,
    Position: typeof acorn$Position,
    SourceLocation: typeof acorn$SourceLocation,
    Node: typeof acorn$Node,
    TokenType: typeof acorn$TokenType,
    TokContext: typeof acorn$TokContext
  };
  declare interface acorn$PlainObject {
    [name: string]: any;
  }

  declare interface acorn$PluginsObject {
    [name: string]: (p: acorn$Parser, config: any) => void;
  }

  declare interface acorn$Options {
    ecmaVersion?: 3 | 5 | 6 | 7 | 8 | 2015 | 2016 | 2017;
    sourceType?: "script" | "module";
    onInsertedSemicolon?: (
      lastTokEnd: number,
      lastTokEndLoc?: ESTree.Position
    ) => void;
    onTrailingComma?: (
      lastTokEnd: number,
      lastTokEndLoc?: ESTree.Position
    ) => void;
    allowReserved?: boolean;
    allowReturnOutsideFunction?: boolean;
    allowImportExportEverywhere?: boolean;
    allowHashBang?: boolean;
    locations?: boolean;
    onToken?: ((token: acorn$Token) => any) | acorn$Token[];
    onComment?:
      | ((
          isBlock: boolean,
          text: string,
          start: number,
          end: number,
          startLoc?: ESTree.Position,
          endLoc?: ESTree.Position
        ) => void)
      | acorn$Comment[];
    ranges?: boolean;
    program?: ESTree.Program;
    sourceFile?: string;
    directSourceFile?: string;
    preserveParens?: boolean;
    plugins?: acorn$PlainObject;
  }

  declare class acorn$Parser {
    constructor(options: acorn$Options, input: string, startPos?: number): this;
    parse(): ESTree.Program;
  }

  declare var acorn$plugins: acorn$PluginsObject;

  declare var acorn$defaultOptions: acorn$Options;

  declare class acorn$Position mixins ESTree.Position {
    line: number;
    column: number;
    constructor(line: number, col: number): this;
    offset(n: number): acorn$Position;
  }

  declare class acorn$SourceLocation mixins ESTree.SourceLocation {
    start: acorn$Position;
    end: acorn$Position;
    source: string | null;
    constructor(
      p: acorn$Parser,
      start: acorn$Position,
      end: acorn$Position
    ): this;
  }

  declare function acorn$getLineInfo(
    input: string,
    offset: number
  ): ESTree.Position;

  declare class acorn$Node {
    type: string;
    start: number;
    end: number;
    loc: ESTree.SourceLocation;
    sourceFile: string;
    range: [number, number];
    constructor(parser: acorn$Parser, pos: number, loc: number): this;
  }

  declare interface acorn$TokeTypeConfig {
    keyword: string;
    beforeExpr?: boolean;
    startsExpr?: boolean;
    isLoop?: boolean;
    isAssign?: boolean;
    prefix?: boolean;
    postfix?: boolean;
    binop?: number;
  }

  declare class acorn$TokenType {
    label: string;
    keyword: string;
    beforeExpr: boolean;
    startsExpr: boolean;
    isLoop: boolean;
    isAssign: boolean;
    prefix: boolean;
    postfix: boolean;
    binop: number;
    updateContext: (prevType: acorn$TokenType) => void;
    constructor(label: string, conf?: acorn$TokeTypeConfig): this;
  }

  declare var acorn$tokTypes: {
    num: acorn$TokenType,
    regexp: acorn$TokenType,
    string: acorn$TokenType,
    name: acorn$TokenType,
    eof: acorn$TokenType,
    bracketL: acorn$TokenType,
    bracketR: acorn$TokenType,
    braceL: acorn$TokenType,
    braceR: acorn$TokenType,
    parenL: acorn$TokenType,
    parenR: acorn$TokenType,
    comma: acorn$TokenType,
    semi: acorn$TokenType,
    colon: acorn$TokenType,
    dot: acorn$TokenType,
    question: acorn$TokenType,
    arrow: acorn$TokenType,
    template: acorn$TokenType,
    ellipsis: acorn$TokenType,
    backQuote: acorn$TokenType,
    dollarBraceL: acorn$TokenType,
    eq: acorn$TokenType,
    assign: acorn$TokenType,
    incDec: acorn$TokenType,
    prefix: acorn$TokenType,
    logicalOR: acorn$TokenType,
    logicalAND: acorn$TokenType,
    bitwiseOR: acorn$TokenType,
    bitwiseXOR: acorn$TokenType,
    bitwiseAND: acorn$TokenType,
    equality: acorn$TokenType,
    relational: acorn$TokenType,
    bitShift: acorn$TokenType,
    plusMin: acorn$TokenType,
    modulo: acorn$TokenType,
    star: acorn$TokenType,
    slash: acorn$TokenType,
    starstar: acorn$TokenType,
    _break: acorn$TokenType,
    _case: acorn$TokenType,
    _catch: acorn$TokenType,
    _continue: acorn$TokenType,
    _debugger: acorn$TokenType,
    _default: acorn$TokenType,
    _do: acorn$TokenType,
    _else: acorn$TokenType,
    _finally: acorn$TokenType,
    _for: acorn$TokenType,
    _function: acorn$TokenType,
    _if: acorn$TokenType,
    _return: acorn$TokenType,
    _switch: acorn$TokenType,
    _throw: acorn$TokenType,
    _try: acorn$TokenType,
    _var: acorn$TokenType,
    _const: acorn$TokenType,
    _while: acorn$TokenType,
    _with: acorn$TokenType,
    _new: acorn$TokenType,
    _this: acorn$TokenType,
    _super: acorn$TokenType,
    _class: acorn$TokenType,
    _extends: acorn$TokenType,
    _export: acorn$TokenType,
    _import: acorn$TokenType,
    _null: acorn$TokenType,
    _true: acorn$TokenType,
    _false: acorn$TokenType,
    _in: acorn$TokenType,
    _instanceof: acorn$TokenType,
    _typeof: acorn$TokenType,
    _void: acorn$TokenType,
    _delete: acorn$TokenType
  };

  declare class acorn$TokContext {
    constructor(
      token: string,
      isExpr: boolean,
      preserveSpace: boolean,
      override: (p: acorn$Parser) => void
    ): this;
  }

  declare var acorn$tokContexts: {
    b_stat: acorn$TokContext,
    b_expr: acorn$TokContext,
    b_tmpl: acorn$TokContext,
    p_stat: acorn$TokContext,
    p_expr: acorn$TokContext,
    q_tmpl: acorn$TokContext,
    f_expr: acorn$TokContext
  };

  declare function acorn$isIdentifierStart(
    code: number,
    astral?: boolean
  ): boolean;

  declare function acorn$isIdentifierChar(
    code: number,
    astral?: boolean
  ): boolean;

  declare interface acorn$AbstractToken {
    start: number;
    end: number;
    loc?: acorn$SourceLocation;
    range?: [number, number];
  }

  declare type acorn$Comment = {
    type: string,
    value: string
  } & acorn$AbstractToken;

  declare type acorn$Token = {
    type: acorn$TokenType,
    value: any
  } & acorn$AbstractToken;

  declare function acorn$isNewLine(code: number): boolean;

  declare var acorn$lineBreak: RegExp;

  declare var acorn$lineBreakG: RegExp;

  declare var acorn$version: string;

  declare type acorn$IParse = (
    input: string,
    options?: acorn$Options
  ) => ESTree.Program;

  declare var acorn$parse: acorn$IParse;

  declare function acorn$parseExpressionAt(
    input: string,
    pos?: number,
    options?: acorn$Options
  ): ESTree.Expression;

  declare interface acorn$ITokenizer {
    getToken(): acorn$Token;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): Iterator<acorn$Token>;
  }

  declare function acorn$tokenizer(
    input: string,
    options: acorn$Options
  ): acorn$ITokenizer;

  declare var acorn$parse_dammit: acorn$IParse | void;

  declare var acorn$LooseParser: acorn$ILooseParserClass | void;

  declare var acorn$pluginsLoose: acorn$PluginsObject | void;

  declare type acorn$ILooseParserClass = (
    input: string,
    options?: acorn$Options
  ) => acorn$ILooseParser;

  declare interface acorn$ILooseParser {}

  declare function acorn$addLooseExports(
    parse: acorn$IParse,
    parser: acorn$ILooseParserClass,
    plugins: acorn$PluginsObject
  ): void;
}
