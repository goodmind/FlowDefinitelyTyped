declare module "commonmark" {
  declare export type NodeType =
    | "text"
    | "softbreak"
    | "linebreak"
    | "emph"
    | "strong"
    | "html_inline"
    | "link"
    | "image"
    | "code"
    | "document"
    | "paragraph"
    | "block_quote"
    | "item"
    | "list"
    | "heading"
    | "code_block"
    | "html_block"
    | "thematic_break"
    | "custom_inline"
    | "custom_block";
  declare export class Node {
    constructor(nodeType: NodeType, sourcepos?: Position): this;

    /**
     * (read-only): a String, one of text, softbreak, linebreak, emph, strong, html_inline, link, image, code, document, paragraph,
     * block_quote, item, list, heading, code_block, html_block, thematic_break.
     */
    type: NodeType;

    /**
     * (read-only): a Node or null.
     */
    firstChild: Node | null;

    /**
     * (read-only): a Node or null.
     */
    lastChild: Node | null;

    /**
     * (read-only): a Node or null.
     */
    next: Node | null;

    /**
     * (read-only): a Node or null.
     */
    prev: Node | null;

    /**
     * (read-only): a Node or null.
     */
    parent: Node | null;

    /**
     * (read-only): an Array with the following form: [[startline, startcolumn], [endline, endcolumn]]
     */
    sourcepos: Position;

    /**
     * (read-only): true if the Node can contain other Nodes as children.
     */
    isContainer: boolean;

    /**
     * the literal String content of the node or null.
     */
    literal: string | null;

    /**
     * link or image destination (String) or null.
     */
    destination: string | null;

    /**
     * link or image title (String) or null.
     */
    title: string | null;

    /**
     * fenced code block info string (String) or null.
     */
    info: string | null;

    /**
     * heading level (Number).
     */
    level: number;

    /**
     * either Bullet or Ordered (or undefined).
     */
    listType: "bullet" | "ordered";

    /**
     * true if list is tight
     */
    listTight: boolean;

    /**
     * a Number, the starting number of an ordered list.
     */
    listStart: number;

    /**
     * a String, either ) or . for an ordered list.
     */
    listDelimiter: ")" | ".";

    /**
     * used only for CustomBlock or CustomInline.
     */
    onEnter: string;

    /**
     * used only for CustomBlock or CustomInline.
     */
    onExit: string;

    /**
     * Append a Node child to the end of the Node's children.
     */
    appendChild(child: Node): void;

    /**
     * Prepend a Node child to the beginning of the Node's children.
     */
    prependChild(child: Node): void;

    /**
     * Remove the Node from the tree, severing its links with siblings and parents, and closing up gaps as needed.
     */
    unlink(): void;

    /**
     * Insert a Node sibling after the Node.
     */
    insertAfter(sibling: Node): void;

    /**
     * Insert a Node sibling before the Node.
     */
    insertBefore(sibling: Node): void;

    /**
     * Returns a NodeWalker that can be used to iterate through the Node tree rooted in the Node
     */
    walker(): NodeWalker;

    /**
     * Setting the backing object of listType, listTight, listStat and listDelimiter directly.
     * Not needed unless creating list nodes directly. Should be fixed from v>0.22.1
     * https://github.com/jgm/commonmark.js/issues/74
     */
    _listData: ListData;
  }

  /**
   * Instead of converting Markdown directly to HTML, as most converters do, commonmark.js parses Markdown to an AST (abstract syntax tree), and then renders this AST as HTML.
   * This opens up the possibility of manipulating the AST between parsing and rendering. For example, one could transform emphasis into ALL CAPS.
   */
  declare export class Parser {
    /**
     * Constructs a new Parser
     */
    constructor(options?: ParserOptions): this;
    parse(input: string): Node;
  }
  declare export class HtmlRenderer {
    constructor(options?: HtmlRenderingOptions): this;
    render(root: Node): string;

    /**
     * Let's you override the softbreak properties of a renderer. So, to make soft breaks render as hard breaks in HTML:
     * writer.softbreak = "<br />";
     */
    softbreak: string;

    /**
     * Override the function that will be used to escape (sanitize) the html output. Return value is used to add to the html output
     * @param input the input to escape
     * @param isAttributeValue indicates wheter or not the input value will be used as value of an html attribute.
     */
    escape: (input: string, isAttributeValue: boolean) => string;
  }
  declare export class XmlRenderer {
    constructor(options?: XmlRenderingOptions): this;
    render(root: Node): string;
  }
  declare export interface NodeWalkingStep {
    /**
     * a boolean, which is true when we enter a Node from a parent or sibling, and false when we reenter it from a child
     */
    entering: boolean;

    /**
     * The node belonging to this step
     */
    node: Node;
  }
  declare export interface NodeWalker {
    /**
     * Returns an object with properties entering and node. Returns null when we have finished walking the tree.
     */
    next(): NodeWalkingStep;

    /**
     * Resets the iterator to resume at the specified node and setting for entering. (Normally this isn't needed unless you do destructive updates to the Node tree.)
     */
    resumeAt(node: Node, entering?: boolean): void;
  }
  declare export type Position = [[number, number], [number, number]];
  declare export interface ListData {
    type?: string;
    tight?: boolean;
    delimiter?: string;
    bulletChar?: string;
  }
  declare export interface ParserOptions {
    /**
     * if true, straight quotes will be made curly, -- will be changed to an en dash, --- will be changed to an em dash, and ... will be changed to ellipses.
     */
    smart?: boolean;
    time?: boolean;
  }
  declare export type HtmlRenderingOptions = {
    /**
     * if true, raw HTML will not be passed through to HTML output (it will be replaced by comments), and potentially unsafe URLs in links and images
     * (those beginning with javascript:, vbscript:, file:, and with a few exceptions data:) will be replaced with empty strings.
     */
    safe?: boolean,

    /**
     * if true, straight quotes will be made curly, -- will be changed to an en dash, --- will be changed to an em dash, and ... will be changed to ellipses.
     */
    smart?: boolean,

    /**
     * if true, source position information for block-level elements will be rendered in the data-sourcepos attribute (for HTML) or the sourcepos attribute (for XML).
     */
    sourcepos?: boolean
  } & XmlRenderingOptions;

  declare export interface XmlRenderingOptions {
    time?: boolean;
    sourcepos?: boolean;
  }
}
