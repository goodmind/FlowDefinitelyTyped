declare module "parse5" {
  declare export interface Location {
    /**
     * One-based line index of the first character
     */
    startLine: number;

    /**
     * One-based column index of the first character
     */
    startCol: number;

    /**
     * One-based line index of the last character
     */
    endLine: number;

    /**
     * One-based column index of the last character
     */
    endCol: number;

    /**
     * Zero-based first character index
     */
    startOffset: number;

    /**
     * Zero-based last character index
     */
    endOffset: number;
  }
  declare export interface AttributesLocation {
    [attributeName: string]: Location;
  }
  declare export type StartTagLocation = {
    /**
     * Start tag attributes' location info
     */
    attrs: AttributesLocation
  } & Location;

  declare export type ElementLocation = {
    /**
     * Element's start tag location info.
     */
    startTag: StartTagLocation,

    /**
     * Element's end tag location info.
     */
    endTag: Location
  } & StartTagLocation;

  declare export interface ParserOptions {
    /**
     * The [scripting flag](https://html.spec.whatwg.org/multipage/parsing.html#scripting-flag). If set
     * to `true`, `noscript` element content will be parsed as text.
     *
     *   **Default:** `true`
     */
    scriptingEnabled?: boolean;

    /**
     * Enables source code location information. When enabled, each node (except the root node)
     * will have a `sourceCodeLocation` property. If the node is not an empty element, `sourceCodeLocation` will
     * be a {@link ElementLocation} object, otherwise it will be {@link Location}.
     * If the element was implicitly created by the parser (as part of
     * [tree correction](https://html.spec.whatwg.org/multipage/syntax.html#an-introduction-to-error-handling-and-strange-cases-in-the-parser)),
     * its `sourceCodeLocation` property will be `undefined`.
     *
     * **Default:** `false`
     */
    sourceCodeLocationInfo?: boolean;

    /**
     * Specifies the resulting tree format.
     *
     * **Default:** `treeAdapters.default`
     */
    treeAdapter?: TreeAdapter;
  }
  declare export interface SerializerOptions {
    /**
     * *
     * Specifies input tree format.
     *
     * **Default:** `treeAdapters.default`
     */
    treeAdapter?: TreeAdapter;
  }

  /**
   * [Document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
   */
  declare export type DocumentMode = "no-quirks" | "quirks" | "limited-quirks";

  /**
   * Element attribute.
   */
  declare export interface Attribute {
    /**
     * The name of the attribute.
     */
    name: string;

    /**
     * The value of the attribute.
     */
    value: string;

    /**
     * The namespace of the attribute.
     */
    namespace?: string;

    /**
     * The namespace-related prefix of the attribute.
     */
    prefix?: string;
  }

  /**
   * Default tree adapter Node interface.
   */
  declare export interface DefaultTreeNode {
    /**
     * The name of the node. E.g. {@link Document} will have `nodeName` equal to '#document'`.
     *      *
     */
    nodeName: string;
  }

  /**
   * Default tree adapter ParentNode interface.
   */
  declare export interface DefaultTreeParentNode {
    /**
     * Child nodes.
     */
    childNodes: DefaultTreeNode[];
  }

  /**
   * Default tree adapter DocumentType interface.
   */
  declare export type DefaultTreeDocumentType = {
    /**
     * The name of the node.
     */
    nodeName: "#documentType",

    /**
     * Document type name.
     */
    name: string,

    /**
     * Document type public identifier.
     */
    publicId: string,

    /**
     * Document type system identifier.
     */
    systemId: string
  } & DefaultTreeNode;

  /**
   * Default tree adapter Document interface.
   */
  declare export type DefaultTreeDocument = {
    /**
     * The name of the node.
     */
    nodeName: "#document",

    /**
     * [Document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
     */
    mode: DocumentMode
  } & DefaultTreeParentNode;

  /**
   * Default tree adapter DocumentFragment interface.
   */
  declare export type DefaultTreeDocumentFragment = {
    /**
     * The name of the node.
     */
    nodeName: "#document-fragment"
  } & DefaultTreeParentNode;

  /**
   * Default tree adapter Element interface.
   */
  declare export type DefaultTreeElement = {
    /**
     * The name of the node. Equals to element {@link tagName}.
     */
    nodeName: string,

    /**
     * Element tag name.
     */
    tagName: string,

    /**
     * Element namespace.
     */
    namespaceURI: string,

    /**
     * List of element attributes.
     */
    attrs: Attribute[],

    /**
     * Parent node.
     */
    parentNode: DefaultTreeParentNode,

    /**
     * Element source code location info. Available if location info is enabled via {@link ParserOptions}.
     */
    sourceCodeLocation?: ElementLocation
  } & DefaultTreeParentNode;

  /**
   * Default tree adapter CommentNode interface.
   */
  declare export type DefaultTreeCommentNode = {
    /**
     * The name of the node.
     */
    nodeName: "#comment",

    /**
     * Comment text.
     */
    data: string,

    /**
     * Parent node.
     */
    parentNode: DefaultTreeParentNode,

    /**
     * Comment source code location info. Available if location info is enabled via {@link ParserOptions}.
     */
    sourceCodeLocation?: Location
  } & DefaultTreeNode;

  /**
   * Default tree adapter TextNode interface.
   */
  declare export type DefaultTreeTextNode = {
    /**
     * The name of the node.
     */
    nodeName: "#text",

    /**
     * Text content.
     */
    value: string,

    /**
     * Parent node.
     */
    parentNode: DefaultTreeParentNode,

    /**
     * Text node source code location info. Available if location info is enabled via {@link ParserOptions}.
     */
    sourceCodeLocation?: Location
  } & DefaultTreeNode;

  /**
   * Generic Node interface.
   * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeNode}) to get access to the properties.
   */
  declare export type Node = DefaultTreeNode | { [key: string]: any };

  /**
   * Generic ParentNode interface.
   * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeParentNode}) to get access to the properties.
   */
  declare export type ParentNode =
    | DefaultTreeParentNode
    | { [key: string]: any };

  /**
   * Generic DocumentType interface.
   * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeDocumentType}) to get access to the properties.
   */
  declare export type DocumentType =
    | DefaultTreeDocumentType
    | { [key: string]: any };

  /**
   * Generic Document interface.
   * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeDocument}) to get access to the properties.
   */
  declare export type Document = DefaultTreeDocument | { [key: string]: any };

  /**
   * Generic DocumentFragment interface.
   * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeDocumentFragment}) to get access to the properties.
   */
  declare export type DocumentFragment =
    | DefaultTreeDocumentFragment
    | { [key: string]: any };

  /**
   * Generic Element interface.
   * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeElement}) to get access to the properties.
   */
  declare export type Element = DefaultTreeElement | { [key: string]: any };

  /**
   * Generic TextNode interface.
   * Cast to the actual AST interface (e.g. {@link parse5.DefaultTreeTextNode}) to get access to the properties.
   */
  declare export type TextNode = DefaultTreeTextNode | { [key: string]: any };

  /**
   * Generic CommentNode interface.
   * Cast to the actual AST interface (e.g. {@link parse5.Default.CommentNode}) to get access to the properties.
   */
  declare export type CommentNode =
    | DefaultTreeCommentNode
    | { [key: string]: any };

  /**
   * Tree adapter is a set of utility functions that provides minimal required abstraction layer beetween parser and a specific AST format.
   * Note that `TreeAdapter` is not designed to be a general purpose AST manipulation library. You can build such library
   * on top of existing `TreeAdapter` or use one of the existing libraries from npm.
   * @see [default implementation](https://github.com/inikulin/parse5/blob/master/lib/tree_adapters/default.js)
   */
  declare export interface TreeAdapter {
    /**
     * Creates a document node.
     */
    createDocument(): Document;

    /**
     * Creates a document fragment node.
     */
    createDocumentFragment(): DocumentFragment;

    /**
     * Creates an element node.
     * @param tagName - Tag name of the element.
     * @param namespaceURI - Namespace of the element.
     * @param attrs - Attribute name-value pair array. Foreign attributes may contain `namespace` and `prefix` fields as well.
     */
    createElement(
      tagName: string,
      namespaceURI: string,
      attrs: Attribute[]
    ): Element;

    /**
     * Creates a comment node.
     * @param data - Comment text.
     */
    createCommentNode(data: string): CommentNode;

    /**
     * Appends a child node to the given parent node.
     * @param parentNode - Parent node.
     * @param newNode -  Child node.
     */
    appendChild(parentNode: ParentNode, newNode: Node): void;

    /**
     * Inserts a child node to the given parent node before the given reference node.
     * @param parentNode - Parent node.
     * @param newNode -  Child node.
     * @param referenceNode -  Reference node.
     */
    insertBefore(
      parentNode: ParentNode,
      newNode: Node,
      referenceNode: Node
    ): void;

    /**
     * Sets the `<template>` element content element.
     * @param templateElement - `<template>` element.
     * @param contentElement -  Content element.
     */
    setTemplateContent(
      templateElement: Element,
      contentElement: DocumentFragment
    ): void;

    /**
     * Returns the `<template>` element content element.
     * @param templateElement - `<template>` element.
     */
    getTemplateContent(templateElement: Element): DocumentFragment;

    /**
     * Sets the document type. If the `document` already contains a document type node, the `name`, `publicId` and `systemId`
     * properties of this node will be updated with the provided values. Otherwise, creates a new document type node
     * with the given properties and inserts it into the `document`.
     * @param document - Document node.
     * @param name -  Document type name.
     * @param publicId - Document type public identifier.
     * @param systemId - Document type system identifier.
     */
    setDocumentType(
      document: Document,
      name: string,
      publicId: string,
      systemId: string
    ): void;

    /**
     * Sets the [document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
     * @param document - Document node.
     * @param mode - Document mode.
     */
    setDocumentMode(document: Document, mode: DocumentMode): void;

    /**
     * Returns [document mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks).
     * @param document - Document node.
     */
    getDocumentMode(document: Document): DocumentMode;

    /**
     * Removes a node from its parent.
     * @param node - Node to remove.
     */
    detachNode(node: Node): void;

    /**
     * Inserts text into a node. If the last child of the node is a text node, the provided text will be appended to the
     * text node content. Otherwise, inserts a new text node with the given text.
     * @param parentNode - Node to insert text into.
     * @param text - Text to insert.
     */
    insertText(parentNode: ParentNode, text: string): void;

    /**
     * Inserts text into a sibling node that goes before the reference node. If this sibling node is the text node,
     * the provided text will be appended to the text node content. Otherwise, inserts a new sibling text node with
     * the given text before the reference node.
     * @param parentNode - Node to insert text into.
     * @param text - Text to insert.
     * @param referenceNode - Node to insert text before.
     */
    insertTextBefore(
      parentNode: ParentNode,
      text: string,
      referenceNode: Node
    ): void;

    /**
     * Copies attributes to the given element. Only attributes that are not yet present in the element are copied.
     * @param recipient - Element to copy attributes into.
     * @param attrs - Attributes to copy.
     */
    adoptAttributes(recipient: Element, attrs: Attribute[]): void;

    /**
     * Returns the first child of the given node.
     * @param node - Node.
     */
    getFirstChild(node: ParentNode): Node;

    /**
     * Returns the given node's children in an array.
     * @param node - Node.
     */
    getChildNodes(node: ParentNode): Node[];

    /**
     * Returns the given node's parent.
     * @param node - Node.
     */
    getParentNode(node: Node): ParentNode;

    /**
     * Returns the given element's attributes in an array, in the form of name-value pairs.
     * Foreign attributes may contain `namespace` and `prefix` fields as well.
     * @param element - Element.
     */
    getAttrList(element: Element): Attribute[];

    /**
     * Returns the given element's tag name.
     * @param element - Element.
     */
    getTagName(element: Element): string;

    /**
     * Returns the given element's namespace.
     * @param element - Element.
     */
    getNamespaceURI(element: Element): string;

    /**
     * Returns the given text node's content.
     * @param textNode - Text node.
     */
    getTextNodeContent(textNode: TextNode): string;

    /**
     * Returns the given comment node's content.
     * @param commentNode - Comment node.
     */
    getCommentNodeContent(commentNode: CommentNode): string;

    /**
     * Returns the given document type node's name.
     * @param doctypeNode - Document type node.
     */
    getDocumentTypeNodeName(doctypeNode: DocumentType): string;

    /**
     * Returns the given document type node's public identifier.
     * @param doctypeNode - Document type node.
     */
    getDocumentTypeNodePublicId(doctypeNode: DocumentType): string;

    /**
     * Returns the given document type node's system identifier.
     * @param doctypeNode - Document type node.
     */
    getDocumentTypeNodeSystemId(doctypeNode: DocumentType): string;

    /**
     * Determines if the given node is a text node.
     * @param node - Node.
     */
    isTextNode(node: Node): boolean;

    /**
     * Determines if the given node is a comment node.
     * @param node - Node.
     */
    isCommentNode(node: Node): boolean;

    /**
     * Determines if the given node is a document type node.
     * @param node - Node.
     */
    isDocumentTypeNode(node: Node): boolean;

    /**
     * Determines if the given node is an element.
     * @param node - Node.
     */
    isElementNode(node: Node): boolean;
  }

  /**
   * Parses an HTML string.
   * @param html - Input HTML string.
   * @param options - Parsing options.
   * @example ```js
   *
   * const parse5 = require('parse5');
   *
   * const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
   *
   * console.log(document.childNodes[1].tagName); //> 'html'
   * ```
   */
  declare export function parse(
    html: string,
    options?: ParserOptions
  ): Document;

  /**
   * Parses an HTML fragment.
   * @param fragmentContext - Parsing context element. If specified, given fragment will be parsed as if it was set to the context element's `innerHTML` property.
   * @param html - Input HTML fragment string.
   * @param options - Parsing options.
   * @example ```js
   *
   * const parse5 = require('parse5');
   *
   * const documentFragment = parse5.parseFragment('<table></table>');
   *
   * console.log(documentFragment.childNodes[0].tagName); //> 'table'
   *
   * // Parses the html fragment in the context of the parsed <table> element.
   * const trFragment = parser.parseFragment(documentFragment.childNodes[0], '<tr><td>Shake it, baby</td></tr>');
   *
   * console.log(trFragment.childNodes[0].childNodes[0].tagName); //> 'td'
   * ```
   */
  declare export function parseFragment(
    fragmentContext: Element,
    html: string,
    options?: ParserOptions
  ): DocumentFragment;

  declare export function parseFragment(
    html: string,
    options?: ParserOptions
  ): DocumentFragment;

  /**
   * Serializes an AST node to an HTML string.
   * @param node - Node to serialize.
   * @param options - Serialization options.
   * @example ```js
   *
   * const parse5 = require('parse5');
   *
   * const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
   *
   * // Serializes a document.
   * const html = parse5.serialize(document);
   *
   * // Serializes the <html> element content.
   * const str = parse5.serialize(document.childNodes[1]);
   *
   * console.log(str); //> '<head></head><body>Hi there!</body>'
   * ```
   */
  declare export function serialize(
    node: Node,
    options?: SerializerOptions
  ): string;
}
