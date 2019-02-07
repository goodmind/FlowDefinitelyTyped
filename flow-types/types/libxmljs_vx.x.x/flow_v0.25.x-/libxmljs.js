declare module "libxmljs" {
  import type { EventEmitter } from "events";

  declare export var version: string;
  declare export var libxml_version: string;
  declare export var libxml_parser_version: string;
  declare interface StringMap {
    [key: string]: string;
  }
  declare export function parseXml(
    source: string,
    options?: StringMap
  ): Document;

  declare export function parseXmlString(
    source: string,
    options?: StringMap
  ): Document;

  declare export function parseHtml(
    source: string,
    options?: StringMap
  ): Document;

  declare export function parseHtmlString(
    source: string,
    options?: StringMap
  ): Document;

  declare export function parseHtmlFragment(
    source: string,
    options?: StringMap
  ): Document;

  declare export function memoryUsage(): number;

  declare export function nodeCount(): number;

  declare export class Document {
    /**
     * Create a new XML Document
     * @param version XML document version, defaults to 1.0
     * @param encoding Encoding, defaults to utf8
     */
    constructor(version?: number, encoding?: string): this;
    errors: SyntaxError[];
    validationErrors: ValidationError[];
    child(idx: number): Element | null;
    childNodes(): Element[];
    encoding(): string;
    encoding(enc: string): this;
    find(xpath: string): Element[];
    get(xpath: string, namespaces?: StringMap): Element | null;
    node(name: string, content?: string): Element;
    root(): Element | null;
    root(newRoot: Node): Node;
    toString(formatted?: boolean): string;
    type(): "document";
    validate(xsdDoc: Document): boolean;
    version(): string;
    setDtd(name: string, ext: string, sys: string): void;
    getDtd(): {
      name: string,
      externalId: string,
      systemId: string
    };
  }
  declare export class Node {
    doc(): Document;
    parent(): Element | Document;

    /**
     * The namespace or null in case of comment nodes
     */
    namespace(): Namespace | null;

    /**
 * An array of namespaces that the object belongs to.
 * @param local If it is true, only the namespace declarations local to this
node are returned, rather than all of the namespaces in scope
at this node (including the ones from the parent elements).
 */
    namespaces(local?: boolean): Namespace[];
    prevSibling(): Node | null;
    nextSibling(): Node | null;
    type(): "comment" | "element" | "text" | "attribute";
    remove(): this;
    clone(): this;

    /**
     * Serializes the node to a string. The string will contain all contents of the node formatted as XML and can be used to print the node.
     */
    toString(
      format?:
        | boolean
        | {
            declaration: boolean,
            selfCloseEmpty: boolean,
            whitespace: boolean,
            type: "xml" | "html" | "xhtml"
          }
    ): string;
  }
  declare export class Element mixins Node {
    constructor(doc: Document, name: string, content?: string): this;
    node(name: string, content?: string): Element;
    name(): string;
    name(newName: string): this;
    text(): string;
    text(newText: string): this;
    attr(name: string): Attribute | null;
    attr(attrObject: StringMap): this;
    attrs(): Attribute[];
    doc(): Document;
    child(idx: number): Node | null;
    childNodes(): Node[];

    /**
     * @return The original element, not the child.
     */
    addChild(child: Element): this;
    prevElement(): Element | null;
    nextElement(): Element | null;
    addNextSibling(siblingNode: Node): Node;
    find(xpath: string, ns_uri?: string): Node[];
    find(xpath: string, namespaces: StringMap): Node[];
    get(xpath: string, ns_uri?: string): Element | null;
    defineNamespace(
      prefixOrHref: string,
      hrefInCaseOfPrefix?: string
    ): Namespace;
    namespace(): Namespace | null;
    namespace(newNamespace: Namespace): this;
    namespace(prefixOrHref: string, hrefInCaseOfPrefix?: string): Namespace;
    replace(replacement: string): string;
    replace(replacement: Element): Element;
    path(): string;
  }
  declare export class Attribute {
    name(): string;
    value(): string;
    value(newValue: string): Attribute;
    namespace(): Namespace;
    remove(): void;
  }
  declare export class Namespace {
    href(): string;
    prefix(): string;
  }
  declare export class SaxParser mixins EventEmitter {
    constructor(): this;
    parseString(source: string): boolean;
  }
  declare export class SaxPushParser mixins EventEmitter {
    constructor(): this;
    push(source: string): boolean;
  }
  declare export interface SyntaxError {
    domain: number | null;
    code: number | null;
    message: string | null;
    level: number | null;
    file: string | null;
    line: number | null;

    /**
     * 1-based column number, 0 if not applicable/available.
     */
    column: number;
    str1: number | null;
    str2: number | null;
    str3: number | null;
    int1: number | null;
  }
  declare export type ValidationError = {
    domain: number | null,
    code: number | null,
    level: number | null,
    line: number | null,

    /**
     * 1-based column number, 0 if not applicable/available.
     */
    column: number
  } & Error;
}
