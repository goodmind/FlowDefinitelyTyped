declare module "idyll-ast" {
  import type {
    AST,
    Node,
    TreeNode,
    PropValue,
    Property,
    PropType
  } from "idyll-compiler";

  /**
   * appends a single node to the AST
   */
  declare export function appendNode(ast: AST, node: Node): AST;

  /**
   * appends multiple nodes to the AST
   */
  declare export function appendNodes(ast: AST, nodes: AST): AST;

  /**
   * creates a node
   */
  declare export function createNode(
    name: string,
    props: Record<string, PropValue | $ElementType<PropValue, 1>>,
    children: Node[]
  ): TreeNode;

  /**
   * gets all children of the node if there is any
   * returns an empty array if there is no child
   */
  declare export function getChildren(node: Node): Node[];

  /**
   * executes func against every node
   */
  declare export function walkNodes(
    ast: AST | null,
    func: (n: Node) => void
  ): void;

  /**
   * deeply walks the AST tree and returns all the nodes that satisfies the
   * given filter
   */
  declare export function findNodes(
    ast: AST,
    filter: (n: Node) => boolean
  ): Node[];

  /**
   * visits each child of the node and modifies them using the modifier
   */
  declare export function modifyChildren(
    node: Node,
    modifier: (n: Node) => void
  ): Node;

  /**
   * get all nodes by name
   */
  declare export function getNodesByName(ast: AST, name: string): Node[];

  /**
   * filters and returns the same node where all children
   * satisfy the given filter
   */
  declare export function filterChildren(
    node: Node,
    filter: (child: Node) => boolean
  ): Node;

  /**
   * filters every node in the AST and returns a new AST whose nodes
   * satisfy the given filter
   */
  declare export function filterNodes(
    ast: AST,
    filter: (node: Node) => boolean
  ): AST;

  /**
   * applies the modifier against node whose name is the given name
   * Returns a new ast with the modified nodes
   *
   * Names are case-insensitive
   */
  declare export function modifyNodesByName(
    ast: AST,
    name: string,
    modifier: (node: Node) => void
  ): AST;

  /**
   * gets the node's property value
   *
   * returns null if node is a string node
   */
  declare export function getProperty(
    node: Node,
    key: string
  ): PropValue | null;

  /**
   * returns all node's properties
   *
   * returns empty array if node is a string node
   */
  declare export function getProperties(node: Node): Property[];

  /**
   * returns all properties having the given property's type
   */
  declare export function getPropertiesByType(
    node: Node,
    type: PropType
  ): Property[];

  declare export function prependNode(ast: AST, node: Node): AST;

  declare export function prependNodes(ast: AST, nodes: Node[]): AST;

  /**
   * returns a new AST with nodes having the given name
   *
   * Names are case-insensitive
   */
  declare export function removeNodesByName(ast: AST, name: string): AST;

  /**
   * sets the property of the node
   *
   * if value is an array, the property's  type is assumed to be included in it
   * otherwise, "value" will be the property's type, and parameter value
   * is the property's value
   */
  declare export function setProperty(
    node: Node,
    key: string,
    value: PropValue | $ElementType<PropValue, 1>
  ): Node;

  /**
   * sets the properties of the node
   *
   * also see setProperty()
   */
  declare export function setProperties(
    node: Node,
    properties: Record<string, PropValue | $ElementType<PropValue, 1>>
  ): Node;

  /**
   * removes the node's property which has the given key
   */
  declare export function removeProperty(node: Node, key: string): Node;
}
