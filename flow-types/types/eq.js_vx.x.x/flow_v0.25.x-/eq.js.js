declare var eqjs: eq$eq$EqjsStatic;
declare module "eq.js" {
  declare module.exports: typeof eqjs;
}
declare type eq$AvailableElementType =
  | HTMLElement
  | HTMLCollectionOf<Element>
  | HTMLElement[]
  | NodeList
  | JQuery;

declare interface eq$EqjsStatic {
  /**
   * List of all nodes.
   */
  nodes: eq$EqjsNodesTable;

  /**
   * Number of nodes in eqjs.nodes.
   */
  nodesLength: number;

  /**
   * Runs through all nodes and finds their widths and points
   * @param nodes
   * @param callback function to use as a callback once query and nodeWrites have finished
   */
  query(nodes: eq$AvailableElementType, callback?: Function): void;

  /**
   * Refreshes the list of nodes for eqjs to work with
   */
  refreshNodes(): void;

  /**
   * Sorts a simple object (key: value) by value and returns a sorted object.
   * @param obj e.g. "small: 380, medium: 490, large: 600"
   * @returns {}
   */
  sortObj(obj: string): eq$EqjsKeyValuePair[];

  /**
   * Runs through all nodes and writes their eq status.
   * @param nodes An array or NodeList of nodes to query
   * @returns {}
   */
  nodeWrites(nodes?: eq$AvailableElementType): void;
}

declare interface eq$EqjsKeyValuePair {
  key: string;
  value: number;
}

declare interface eq$EqjsNodesTable {
  [index: number]: HTMLElement;
}
declare interface JQuery {}
