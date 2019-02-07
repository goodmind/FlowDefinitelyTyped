declare module "yaml" {
  declare export var defaultOptions: ParseOptions;

  /**
 * May throw on error, and it may log warnings using `console.warn`.
 * It only supports input consisting of a single YAML document;
 * for multi-document support you should use `YAML.parseAllDocuments`
 * @param str Should be a string with YAML formatting.
 * @returns The value will match the type of the root value of the parsed YAML document,
so Maps become objects, Sequences arrays, and scalars result in nulls, booleans, numbers and strings.
 */
  declare export function parse(str: string, options?: ParseOptions): any;

  /**
   * @returns Will always include \n as the last character, as is expected of YAML documents.
   */
  declare export function stringify(value: any, options?: ParseOptions): string;

  /**
   * Parses a single YAML.Document from the input str; used internally by YAML.parse.
   * Will include an error if str contains more than one document.
   */
  declare export function parseDocument(
    str: string,
    options?: ParseOptions
  ): ast$ast$Document;

  /**
   * When parsing YAML, the input string str may consist of a stream of documents
   * separated from each other by `...` document end marker lines.
   * @returns An array of Document objects that allow these documents to be parsed and manipulated with more control.
   */
  declare export function parseAllDocuments(
    str: string,
    options?: ParseOptions
  ): ast$ast$Document[];

  /**
   * YAML.createNode recursively turns objects into Map and arrays to Seq collections.
   * Its primary use is to enable attaching comments or other metadata to a value,
   * or to otherwise exert more fine-grained control over the stringified output.
   *
   * Wraps plain values in Scalar objects.
   */
  declare export function createNode(
    value: any,
    wrapScalars?: true
  ): ast$ast$MapBase | ast$ast$SeqBase | ast$ast$Scalar;

  /**
   * YAML.createNode recursively turns objects into Map and arrays to Seq collections.
   * Its primary use is to enable attaching comments or other metadata to a value,
   * or to otherwise exert more fine-grained control over the stringified output.
   *
   * Doesn't wrap plain values in Scalar objects.
   */
  declare export function createNode(
    value: any,
    wrapScalars: false
  ): ast$ast$MapBase | ast$ast$SeqBase | string | number | boolean | null;

  declare export function parseCST(str: string): ParsedCST;

  declare export type ParsedCST = {
    setOrigRanges(): boolean
  } & Array<cst$ast$Document>;

  declare export var ast$Document: ast$ast$DocumentConstructor;
  declare export interface ParseOptions {
    /**
     * Allow non-JSON JavaScript objects to remain in the `toJSON` output.
     * Relevant with the YAML 1.1 `!!timestamp` and `!!binary` tags. By default `true`.
     */
    keepBlobsInJSON?: boolean;

    /**
     * Include references in the AST to each node's corresponding CST node. By default `false`.
     */
    keepCstNodes?: boolean;

    /**
     * Store the original node type when parsing documents. By default `true`.
     */
    keepNodeTypes?: boolean;

    /**
     * Enable support for `<<` merge keys.
     */
    merge?: boolean;

    /**
     * The base schema to use. By default `"core"` for YAML 1.2 and `"yaml-1.1"` for earlier versions.
     */
    schema?: "core" | "failsafe" | "json" | "yaml-1.1";

    /**
     * Array of additional (custom) tags to include in the schema.
     */
    tags?: Tag[] | ((tags: Tag[]) => Tag[]);

    /**
     * The YAML version used by documents without a `%YAML` directive. By default `"1.2"`.
     */
    version?: string;
  }
  declare export interface Tag {
    /**
     * A JavaScript class that should be matched to this tag, e.g. `Date` for `!!timestamp`.
     */
    class?: () => any;

    /**
     * If `true`, the tag should not be explicitly included when stringifying.
     */
    default?: boolean;

    /**
     * If a tag has multiple forms that should be parsed and/or stringified differently, use `format` to identify them.
     */
    format?: string;

    /**
     * Used by some tags to configure their stringification, where applicable.
     */
    options?: { [key: string]: any };

    /**
     * Should return an instance of a class extending `Node`.
     * If test is set, will be called with the resulting match as arguments.
     * Otherwise, will be called as `resolve(doc, cstNode)`.
     */
    resolve(doc: ast$ast$Document, cstNode: cst$ast$Node): ast$ast$Node;
    resolve(...match: string[]): ast$ast$Node;

    /**
     * @param item the node being stringified.
     * @param ctx contains the stringifying context variables.
     * @param onComment a function that should be called if the stringifier includes the item's comment in its output.
     */
    stringify(
      item: ast$ast$Node,
      ctx: StringifyContext,
      onComment: () => void
    ): string;

    /**
     * The fully qualified name of the tag.
     */
    tag: string;

    /**
     * Used to match string values of scalar nodes; captured parts will be passed as arguments of `resolve()`.
     */
    test?: RegExp;
  }
  declare export interface StringifyContext {
    [key: string]: any;
  }
  declare export type YAMLError =
    | YAMLSyntaxError
    | YAMLSemanticError
    | YAMLReferenceError;
  declare export type YAMLSyntaxError = {
    name: "YAMLSyntaxError",
    source: cst$ast$Node
  } & SyntaxError;

  declare export type YAMLSemanticError = {
    name: "YAMLSemanticError",
    source: cst$ast$Node
  } & SyntaxError;

  declare export type YAMLReferenceError = {
    name: "YAMLReferenceError",
    source: cst$ast$Node
  } & ReferenceError;

  declare export type YAMLWarning = {
    name: "YAMLReferenceError",
    source: cst$ast$Node
  } & Error;

  declare interface cst$Range {
    start: number;
    end: number;
    origStart?: number;
    origEnd?: number;
    isEmpty(): boolean;
  }

  declare interface cst$ParseContext {
    /**
     * Node starts at beginning of line
     */
    atLineStart: boolean;

    /**
     * true if currently in a collection context
     */
    inCollection: boolean;

    /**
     * true if currently in a flow context
     */
    inFlow: boolean;

    /**
     * Current level of indentation
     */
    indent: number;

    /**
     * Start of the current line
     */
    lineStart: number;

    /**
     * The parent of the node
     */
    parent: ast$Node;

    /**
     * Source of the YAML document
     */
    src: string;
  }

  declare interface cst$Node {
    context: cst$ParseContext | null;

    /**
     * if not null, indicates a parser failure
     */
    error: YAMLSyntaxError | null;

    /**
     * span of context.src parsed into this node
     */
    range: cst$Range | null;
    valueRange: cst$Range | null;

    /**
     * anchors, tags and comments
     */
    props: cst$Range[];

    /**
     * specific node type
     */
    type: string;

    /**
     * if non-null, overrides source value
     */
    value: string | null;
    +anchor: string | null;
    +comment: string | null;
    +hasComment: boolean;
    +hasProps: boolean;
    +jsonLike: boolean;
    +rawValue: string | null;
    +tag:
      | null
      | {
          verbatim: string
        }
      | {
          handle: string,
          suffix: string
        };
    +valueRangeContainsNewline: boolean;

    /**
     * a comment on or immediately after this
     */
    comment: null | string;

    /**
     * a comment before this
     */
    commentBefore: null | string;

    /**
     * only available when `keepCstNodes` is set to `true`
     */
    cstNode?: cst$cst$Node;

    /**
     * the [start, end] range of characters of the source parsed
     * into this node (undefined for pairs or if not parsed)
     */
    range: null | [number, number];

    /**
     * a fully qualified tag, if required
     */
    tag: null | string;

    /**
     * a plain JS representation of this node
     */
    toJSON(): any;
  }

  declare type cst$Alias = {
    type: "ALIAS",

    /**
     * contain the anchor without the * prefix
     */
    +rawValue: string,
    type: "ALIAS",
    source: ast$AstNode,
    cstNode?: cst$cst$Alias
  } & cst$Node;

  declare type cst$Scalar = cst$BlockValue | ast$PlainValue | cst$QuoteValue;

  declare type cst$BlockValue = {
    type: "BLOCK_FOLDED" | "BLOCK_LITERAL",
    chomping: "CLIP" | "KEEP" | "STRIP",
    blockIndent: number | null,
    header: cst$Range,
    +strValue: string | null
  } & cst$Node;

  declare type cst$BlockFolded = {
    type: "BLOCK_FOLDED",
    type: "BLOCK_FOLDED",
    cstNode?: cst$cst$BlockFolded
  } & cst$BlockValue;

  declare type cst$BlockLiteral = {
    type: "BLOCK_LITERAL",
    type: "BLOCK_LITERAL",
    cstNode?: cst$cst$BlockLiteral
  } & cst$BlockValue;

  declare type cst$PlainValue = {
    type: "PLAIN",
    +strValue: string | null,
    type: "PLAIN",
    cstNode?: cst$cst$PlainValue
  } & cst$Node;

  declare type cst$QuoteValue = {
    type: "QUOTE_DOUBLE" | "QUOTE_SINGLE",
    +strValue:
      | null
      | string
      | {
          str: string,
          errors: YAMLSyntaxError[]
        }
  } & cst$Node;

  declare type cst$QuoteDouble = {
    type: "QUOTE_DOUBLE",
    type: "QUOTE_DOUBLE",
    cstNode?: cst$cst$QuoteDouble
  } & cst$QuoteValue;

  declare type cst$QuoteSingle = {
    type: "QUOTE_SINGLE",
    type: "QUOTE_SINGLE",
    cstNode?: cst$cst$QuoteSingle
  } & cst$QuoteValue;

  declare type cst$Comment = {
    type: "COMMENT",
    +anchor: null,
    +comment: string,
    +rawValue: null,
    +tag: null
  } & cst$Node;

  declare type cst$MapItem = {
    type: "MAP_KEY" | "MAP_VALUE",
    node: cst$ContentNode | null
  } & cst$Node;

  declare type cst$MapKey = {
    type: "MAP_KEY"
  } & cst$MapItem;

  declare type cst$MapValue = {
    type: "MAP_VALUE"
  } & cst$MapItem;

  declare type cst$Map = {
    type: "MAP",

    /**
     * implicit keys are not wrapped
     */
    items: Array<cst$Comment | cst$Alias | cst$Scalar | cst$MapItem>,
    type: "MAP",
    cstNode?: cst$cst$Map
  } & cst$Node;

  declare type cst$SeqItem = {
    type: "SEQ_ITEM",
    node: cst$ContentNode | null
  } & cst$Node;

  declare type cst$Seq = {
    type: "SEQ",
    items: Array<cst$Comment | cst$SeqItem>,
    type: "SEQ",
    items: Array<ast$AstNode | null>,
    cstNode?: cst$cst$Seq
  } & cst$Node;

  declare interface cst$FlowChar {
    char: "{" | "}" | "[" | "]" | "," | "?" | ":";
    offset: number;
    origOffset?: number;
  }

  declare type cst$FlowCollection = {
    type: "FLOW_MAP" | "FLOW_SEQ",
    items: Array<
      cst$FlowChar | cst$Comment | cst$Alias | cst$Scalar | cst$FlowCollection
    >
  } & cst$Node;

  declare type cst$FlowMap = {
    type: "FLOW_MAP",
    type: "FLOW_MAP",
    cstNode?: cst$cst$FlowMap
  } & cst$FlowCollection;

  declare type cst$FlowSeq = {
    type: "FLOW_SEQ",
    type: "FLOW_SEQ",
    items: Array<ast$AstNode | ast$Pair>,
    cstNode?: cst$cst$FlowSeq
  } & cst$FlowCollection;

  declare type cst$ContentNode =
    | cst$Alias
    | cst$Scalar
    | cst$Map
    | cst$Seq
    | cst$FlowCollection;

  declare type cst$Directive = {
    type: "DIRECTIVE",
    name: string,
    +anchor: null,
    +parameters: string[],
    +tag: null
  } & cst$Node;

  declare type cst$Document = {
    type: "DOCUMENT",
    directives: Array<cst$Comment | cst$Directive>,
    contents: Array<cst$Comment | cst$ContentNode>,
    +anchor: null,
    +comment: null,
    +tag: null,
    type: "DOCUMENT",

    /**
     * Anchors associated with the document's nodes;
     * also provides alias & merge node creators.
     */
    anchors: ast$Anchors,

    /**
     * A comment at the very beginning of the document.
     */
    commentBefore: null | string,

    /**
     * A comment at the end of the document.
     */
    comment: null | string,

    /**
     * only available when `keepCstNodes` is set to `true`
     */
    cstNode?: cst$cst$Document,

    /**
     * The document contents.
     */
    contents: ast$AstNode | null,

    /**
     * Errors encountered during parsing.
     */
    errors: YAMLError[],

    /**
     * The schema used with the document.
     */
    schema: ast$Schema,

    /**
     * the [start, end] range of characters of the source parsed
     * into this node (undefined if not parsed)
     */
    range: null | [number, number],

    /**
     * Array of prefixes; each will have a string `handle` that
     * starts and ends with `!` and a string `prefix` that the handle will be replaced by.
     */
    tagPrefixes: ast$Prefix[],

    /**
     * The parsed version of the source document;
     * if true-ish, stringified output will include a `%YAML` directive.
     */
    version?: string,

    /**
     * Warnings encountered during parsing.
     */
    warnings: YAMLWarning[],

    /**
     * List the tags used in the document that are not in the default `tag:yaml.org,2002:` namespace.
     */
    listNonDefaultTags(): string[],

    /**
     * Parse a CST into this document
     */
    parse(cst: cst$cst$Document): this,

    /**
     * Set `handle` as a shorthand string for the `prefix` tag namespace.
     */
    setTagPrefix(handle: string, prefix: string): void,

    /**
     * A plain JavaScript representation of the document `contents`.
     */
    toJSON(): any,

    /**
     * A YAML representation of the document.
     */
    toString(): string
  } & cst$Node;

  declare type ast$AstNode =
    | ast$ScalarNode
    | ast$MapNode
    | ast$SeqNode
    | cst$Alias;

  declare type ast$DocumentConstructor = (
    options?: ParseOptions
  ) => cst$Document;

  declare type ast$Document = {
    type: "DOCUMENT",
    directives: Array<cst$Comment | cst$Directive>,
    contents: Array<cst$Comment | cst$ContentNode>,
    +anchor: null,
    +comment: null,
    +tag: null,
    type: "DOCUMENT",

    /**
     * Anchors associated with the document's nodes;
     * also provides alias & merge node creators.
     */
    anchors: ast$Anchors,

    /**
     * A comment at the very beginning of the document.
     */
    commentBefore: null | string,

    /**
     * A comment at the end of the document.
     */
    comment: null | string,

    /**
     * only available when `keepCstNodes` is set to `true`
     */
    cstNode?: cst$ast$Document,

    /**
     * The document contents.
     */
    contents: ast$AstNode | null,

    /**
     * Errors encountered during parsing.
     */
    errors: YAMLError[],

    /**
     * The schema used with the document.
     */
    schema: ast$Schema,

    /**
     * the [start, end] range of characters of the source parsed
     * into this node (undefined if not parsed)
     */
    range: null | [number, number],

    /**
     * Array of prefixes; each will have a string `handle` that
     * starts and ends with `!` and a string `prefix` that the handle will be replaced by.
     */
    tagPrefixes: ast$Prefix[],

    /**
     * The parsed version of the source document;
     * if true-ish, stringified output will include a `%YAML` directive.
     */
    version?: string,

    /**
     * Warnings encountered during parsing.
     */
    warnings: YAMLWarning[],

    /**
     * List the tags used in the document that are not in the default `tag:yaml.org,2002:` namespace.
     */
    listNonDefaultTags(): string[],

    /**
     * Parse a CST into this document
     */
    parse(cst: cst$ast$Document): this,

    /**
     * Set `handle` as a shorthand string for the `prefix` tag namespace.
     */
    setTagPrefix(handle: string, prefix: string): void,

    /**
     * A plain JavaScript representation of the document `contents`.
     */
    toJSON(): any,

    /**
     * A YAML representation of the document.
     */
    toString(): string
  } & cst$Node;

  declare interface ast$Anchors {
    /**
     * Create a new `Alias` node, adding the required anchor for `node`.
     * If `name` is empty, a new anchor name will be generated.
     */
    createAlias(node: cst$Node, name?: string): cst$Alias;

    /**
     * Create a new `Merge` node with the given source nodes.
     * Non-`Alias` sources will be automatically wrapped.
     */
    createMergePair(...nodes: cst$Node[]): ast$Merge;

    /**
     * The anchor name associated with `node`, if set.
     */
    getName(node: cst$Node): void | string;

    /**
     * The node associated with the anchor `name`, if set.
     */
    getNode(name: string): void | cst$Node;

    /**
     * Find an available anchor name with the given `prefix` and a numerical suffix.
     */
    newName(prefix: string): string;

    /**
     * Associate an anchor with `node`. If `name` is empty, a new name will be generated.
     * To remove an anchor, use `setAnchor(null, name)`.
     */
    setAnchor(node: cst$Node | null, name?: string): void | string;
  }

  declare interface ast$Schema {
    merge: boolean;
    name: string;
    schema: Tag[];
  }

  declare interface ast$Prefix {
    handle: string;
    prefix: string;
  }

  declare interface ast$Node {
    context: cst$ParseContext | null;

    /**
     * if not null, indicates a parser failure
     */
    error: YAMLSyntaxError | null;

    /**
     * span of context.src parsed into this node
     */
    range: cst$Range | null;
    valueRange: cst$Range | null;

    /**
     * anchors, tags and comments
     */
    props: cst$Range[];

    /**
     * specific node type
     */
    type: string;

    /**
     * if non-null, overrides source value
     */
    value: string | null;
    +anchor: string | null;
    +comment: string | null;
    +hasComment: boolean;
    +hasProps: boolean;
    +jsonLike: boolean;
    +rawValue: string | null;
    +tag:
      | null
      | {
          verbatim: string
        }
      | {
          handle: string,
          suffix: string
        };
    +valueRangeContainsNewline: boolean;

    /**
     * a comment on or immediately after this
     */
    comment: null | string;

    /**
     * a comment before this
     */
    commentBefore: null | string;

    /**
     * only available when `keepCstNodes` is set to `true`
     */
    cstNode?: cst$ast$Node;

    /**
     * the [start, end] range of characters of the source parsed
     * into this node (undefined for pairs or if not parsed)
     */
    range: null | [number, number];

    /**
     * a fully qualified tag, if required
     */
    tag: null | string;

    /**
     * a plain JS representation of this node
     */
    toJSON(): any;
  }

  declare type ast$ScalarConstructor = (
    value: null | boolean | number | string
  ) => cst$Scalar;

  declare type ast$Scalar = cst$BlockValue | cst$PlainValue | cst$QuoteValue;

  declare type ast$ScalarNode =
    | cst$BlockFolded
    | cst$BlockLiteral
    | cst$PlainValue
    | cst$QuoteDouble
    | cst$QuoteSingle;

  declare type ast$BlockFolded = {
    type: "BLOCK_FOLDED",
    type: "BLOCK_FOLDED",
    cstNode?: cst$ast$BlockFolded
  } & cst$BlockValue;

  declare type ast$BlockLiteral = {
    type: "BLOCK_LITERAL",
    type: "BLOCK_LITERAL",
    cstNode?: cst$ast$BlockLiteral
  } & cst$BlockValue;

  declare type ast$PlainValue = {
    type: "PLAIN",
    +strValue: string | null,
    type: "PLAIN",
    cstNode?: cst$ast$PlainValue
  } & ast$Node;

  declare type ast$QuoteDouble = {
    type: "QUOTE_DOUBLE",
    type: "QUOTE_DOUBLE",
    cstNode?: cst$ast$QuoteDouble
  } & cst$QuoteValue;

  declare type ast$QuoteSingle = {
    type: "QUOTE_SINGLE",
    type: "QUOTE_SINGLE",
    cstNode?: cst$ast$QuoteSingle
  } & cst$QuoteValue;

  declare type ast$PairConstructor = (
    key: ast$AstNode | null,
    value?: ast$AstNode | null
  ) => ast$Pair;

  declare type ast$Pair = {
    type: "PAIR",

    /**
     * key is always Node or null when parsed, but can be set to anything.
     */
    key: ast$AstNode | null,

    /**
     * value is always Node or null when parsed, but can be set to anything.
     */
    value: ast$AstNode | null,
    cstNode?: empty
  } & ast$Node;

  declare type ast$MapConstructor = () => ast$MapBase;

  declare type ast$MapBase = {
    type: "FLOW_MAP" | "MAP" | void,
    items: Array<ast$Pair | ast$Merge>
  } & ast$Node;

  declare type ast$MapNode = cst$FlowMap | cst$Map;

  declare type ast$FlowMap = {
    type: "FLOW_MAP",
    type: "FLOW_MAP",
    cstNode?: cst$ast$FlowMap
  } & cst$FlowCollection;

  declare type ast$Map = {
    type: "MAP",

    /**
     * implicit keys are not wrapped
     */
    items: Array<cst$Comment | cst$Alias | ast$Scalar | cst$MapItem>,
    type: "MAP",
    cstNode?: cst$ast$Map
  } & ast$Node;

  declare type ast$SeqConstructor = () => ast$SeqBase;

  declare type ast$SeqBase = {
    type: "FLOW_SEQ" | "SEQ" | void,

    /**
     * item is always Node or null when parsed, but can be set to anything.
     */
    items: Array<ast$AstNode | ast$Pair | null>
  } & ast$Node;

  declare type ast$SeqNode = cst$FlowSeq | cst$Seq;

  declare type ast$FlowSeq = {
    type: "FLOW_SEQ",
    type: "FLOW_SEQ",
    items: Array<ast$AstNode | ast$Pair>,
    cstNode?: cst$ast$FlowSeq
  } & cst$FlowCollection;

  declare type ast$Seq = {
    type: "SEQ",
    items: Array<cst$Comment | cst$SeqItem>,
    type: "SEQ",
    items: Array<ast$AstNode | null>,
    cstNode?: cst$ast$Seq
  } & ast$Node;

  declare type ast$Alias = {
    type: "ALIAS",

    /**
     * contain the anchor without the * prefix
     */
    +rawValue: string,
    type: "ALIAS",
    source: ast$AstNode,
    cstNode?: cst$ast$Alias
  } & ast$Node;

  declare type ast$Merge = {
    type: "MERGE_PAIR",

    /**
     * key is always Scalar('<<'), defined by the type specification
     */
    key: ast$PlainValue,

    /**
     * value is always Seq<Alias(Map)>, stringified as *A if length = 1
     */
    value: ast$SeqBase,
    cstNode?: cst$ast$PlainValue
  } & ast$Node;
}
