declare module "hast-format" {
  import type {
    Parent as UnistParent,
    Literal as UnistLiteral,
    Node as UnistNode
  } from "unist";

  declare export { UnistNode as Node };

  /**
   * Node in hast containing other nodes.
   */
  declare export type Parent = {
    /**
     * List representing the children of a node.
     */
    children: Array<Element | DocType | Comment | Text>
  } & UnistParent;

  /**
   * Nodes in hast containing a value.
   */
  declare export type Literal = {
    value: string
  } & UnistLiteral;

  /**
   * Root represents a document.
   * Can be used as the rood of a tree, or as a value of the
   * content field on a 'template' Element, never as a child.
   */
  declare export type Root = {
    /**
     * Represents this variant of a Node.
     */
    type: "root"
  } & Parent;

  /**
   * Element represents an HTML Element.
   */
  declare export type Element = {
    /**
     * Represents this variant of a Node.
     */
    type: "element",

    /**
     * Represents the element’s local name.
     */
    tagName: string,

    /**
     * Represents information associated with the element.
     */
    properties?: Properties,

    /**
     * If the tagName field is 'template', a content field can be present.
     */
    content?: Root,

    /**
     * List representing the children of a node.
     */
    children: Array<Element | Comment | Text>
  } & Parent;

  /**
   * Represents information associated with an element.
   */
  declare export interface Properties {
    [PropertyName: string]: any;
  }

  /**
   * Represents an HTML DocumentType.
   */
  declare export type DocType = {
    /**
     * Represents this variant of a Node.
     */
    type: "doctype",
    name: string,

    /**
     * Represents the document’s public identifier.
     */
    public?: string,

    /**
     * Represents the document’s system identifier.
     */
    system?: string
  } & UnistNode;

  /**
   * Represents an HTML Comment.
   */
  declare export type Comment = {
    /**
     * Represents this variant of a Literal.
     */
    type: "comment"
  } & Literal;

  /**
   * Represents an HTML Text.
   */
  declare export type Text = {
    /**
     * Represents this variant of a Literal.
     */
    type: "text"
  } & Literal;
}
