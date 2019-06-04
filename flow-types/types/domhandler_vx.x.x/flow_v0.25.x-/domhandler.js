declare module "domhandler" {
  declare export interface DomHandlerOptions {
    /**
     * *
     * Indicates whether the whitespace in text nodes should be normalized
     * (= all whitespace should be replaced with single spaces). The default value is "false".
     */
    normalizeWhitespace?: boolean;

    /**
     * *
     * Adds DOM level 1 properties to all elements.
     */
    withDomLvl1?: boolean;

    /**
     * *
     * Indicates whether a startIndex property will be added to nodes.
     * When the parser is used in a non-streaming fashion, startIndex is an integer
     * indicating the position of the start of the node in the document.
     * The default value is "false".
     */
    withStartIndices?: boolean;

    /**
     * *
     * Indicates whether a endIndex property will be added to nodes.
     * When the parser is used in a non-streaming fashion, endIndex is an integer
     * indicating the position of the end of the node in the document.
     * The default value is "false".
     */
    withEndIndices?: boolean;
  }
  declare export interface DomElement {
    attribs?: {
      [s: string]: string
    };
    children?: DomElement[];
    data?: any;
    name?: string;
    next?: DomElement;
    parent?: DomElement;
    prev?: DomElement;
    type?: string;
  }
  declare export type Element = {
    name: string
  } & DomElement;

  declare export type Node = {
    +firstChild: DomElement,
    +lastChild: DomElement,
    +nodeType: number
  } & DomElement;

  declare export class DomHandler {
    constructor(
      callback: (error: any, dom: DomElement[]) => any,
      options?: DomHandlerOptions
    ): this;
    onparserinit(parser: any): void;

    /**
     * *
     * Resets the handler back to starting state
     */
    onreset(): void;

    /**
     * *
     * Signals the handler that parsing is done
     */
    onend(): void;
    onerror(error: Error): void;
    onclosetag(): void;
    onopentag(
      name: string,
      attribs: {
        [s: string]: string
      }
    ): void;
    ontext(data: string): void;
    oncomment(data: string): void;
    oncdatastart(): void;
    oncommentend(): void;
    onprocessinginstruction(name: string, data: string): void;
  }
}
