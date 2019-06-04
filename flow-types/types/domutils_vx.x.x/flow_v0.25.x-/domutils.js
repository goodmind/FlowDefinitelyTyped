declare module "domutils" {
  import type { DomElement } from "domhandler";

  /**
   * *
   * Append an element after another
   * @argument elem The element to append to
   * @argument next The element be added
   */
  declare export function append(elem: DomElement, next: DomElement): void;

  /**
   * *
   * Append a child to an element
   * @argument elem The element to append to
   * @argument child The element to be added as a child
   */
  declare export function appendChild(
    elem: DomElement,
    child: DomElement
  ): void;

  /**
   * *
   * Compare the position of one node against another node in any other document.
   * The return value is a bitmask with the following values:
   *
   * document order:
   * > There is an ordering, document order, defined on all the nodes in the
   * > document corresponding to the order in which the first character of the
   * > XML representation of each node occurs in the XML representation of the
   * > document after expansion of general entities. Thus, the document element
   * > node will be the first node. Element nodes occur before their children.
   * > Thus, document order orders element nodes in order of the occurrence of
   * > their start-tag in the XML (after expansion of entities). The attribute
   * > nodes of an element occur after the element and before its children. The
   * > relative order of attribute nodes is implementation-dependent./
   *
   * Source:
   * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
   * @argument nodaA The first node to use in the comparison
   * @argument nodeB The second node to use in the comparison
   * @return A bitmask describing the input nodes' relative position.
   *
   * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
   * a description of these values.
   */
  declare export function compareDocumentPosition(
    nodeA: DomElement,
    nodeB: DomElement
  ): number;

  declare export function existsOne(test: any, elems: DomElement[]): boolean;

  declare export function filter(
    test: any,
    element: DomElement,
    recurse: boolean,
    limit: number
  ): DomElement[];

  declare export function find(
    test: any,
    elems: DomElement[],
    recurse: boolean,
    limit: number
  ): DomElement[];

  declare export function findAll(
    test: any,
    rootElems: DomElement[]
  ): DomElement[];

  declare export function findOne(test: any, elems: DomElement[]): DomElement;

  declare export function findOneChild(
    test: any,
    elems: DomElement[]
  ): DomElement;

  declare export function getAttributeValue(
    elem: DomElement,
    name: string
  ): string;

  declare export function getChildren(elem: DomElement): DomElement[];

  /**
   * *
   * Legacy
   */
  declare export function getElementById(
    id: any,
    element: any,
    recurse?: any
  ): any;

  /**
   * *
   * Legacy
   */
  declare export function getElements(
    options: any,
    element: any,
    recurse?: any,
    limit?: any
  ): any;

  /**
   * *
   * Legacy
   */
  declare export function getElementsByTagName(
    name: any,
    element: any,
    recurse?: any,
    limit?: any
  ): any;

  /**
   * *
   * Legacy
   */
  declare export function getElementsByTagType(
    type: any,
    element: any,
    recurse?: any,
    limit?: any
  ): any;

  declare export function getInnerHTML(elem: DomElement, opts: any): string;

  /**
   * *
   * Returns the name property of an element
   * @argument elem The element to get the name for
   */
  declare export function getName(elem: DomElement): string;

  /**
   * *
   * Returns a string representing the array of DomElements
   * @argument dom An array of DomElement that should be stringified
   * @argument opts Optional options object
   */
  declare export function getOuterHTML(
    dom: DomElement[],
    opts?: {
      decodeEntities?: boolean,
      xmlMode?: boolean
    }
  ): string;

  declare export function getParent(elem: DomElement): DomElement;

  declare export function getSiblings(elem: DomElement): DomElement[];

  declare export function getText(elem: DomElement): string;

  declare export function hasAttrib(elem: DomElement, name: string): boolean;

  declare export function isTag(elem: DomElement): boolean;

  /**
   * *
   * Prepend an element before another
   * @argument elem The element to append to
   * @argument prev The element be added
   */
  declare export function prepend(elem: DomElement, prev: DomElement): void;

  /**
   * *
   * Remove an element from the dom
   * @argument elem The element to be removed
   */
  declare export function removeElement(elem: DomElement): void;

  /**
   * *
   * Given an array of nodes, remove any member that is contained by another.
   */
  declare export function removeSubsets(nodes: DomElement[]): DomElement[];

  /**
   * *
   * Replace an element in the dom
   * @argument elem The element to be replaced
   * @argument replacement The element to be added
   */
  declare export function replaceElement(
    elem: DomElement,
    replacement: DomElement
  ): void;

  /**
   * *
   * Legacy
   */
  declare export function testElement(options: any, element: any): any;

  /**
   * *
   * Sort an array of nodes based on their relative position in the document and
   * remove any duplicate nodes. If the array contains nodes that do not belong
   * to the same document, sort order is unspecified.
   * @argument nodes Array of DOM nodes
   * @returns collection of unique nodes, sorted in document order
   */
  declare export function uniqueSort(nodes: DomElement[]): DomElement[];
}
