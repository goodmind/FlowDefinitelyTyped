declare module "@atlaskit/tree" {
  import type { Component, Node } from "react";

  import type {
    DraggingStyle,
    DraggableProvidedDragHandleProps,
    DraggableStateSnapshot,
    NotDraggingStyle
  } from "react-beautiful-dnd";

  declare export type ItemId = any;
  declare export type Path = number[];
  declare export interface TreeData {
    rootId: ItemId;
    items: {
      [key: string]: TreeItem,
      [key: number]: TreeItem
    };
  }
  declare export type TreeItemData = any;
  declare export interface TreeItem {
    id: ItemId;
    children: ItemId[];
    hasChildren?: boolean;
    isExpanded?: boolean;
    isChildrenLoading?: boolean;
    data?: TreeItemData;
  }
  declare export interface TreeSourcePosition {
    parentId: ItemId;
    index: number;
  }
  declare export interface TreeDestinationPosition {
    parentId: ItemId;
    index?: number;
  }
  declare type Omit<T, K: $Keys<T>> = Pick<T, Exclude<$Keys<T>, K>>;
  declare type TreeDraggingStyle = {
    paddingLeft: number,
    transition: "none" | string
  } & Omit<DraggingStyle, "transition">;

  declare type TreeDraggableStyle = NotDraggingStyle | TreeDraggingStyle;
  declare interface TreeDraggableProps {
    style?: TreeDraggableStyle;
    "data-react-beautiful-dnd-draggable": string;
  }
  declare interface TreeDraggableProvided {
    draggableProps: TreeDraggableProps;
    dragHandleProps?: DraggableProvidedDragHandleProps;
    innerRef: (element?: HTMLElement) => void;
  }
  declare export interface RenderItemParams {
    item: TreeItem;
    depth: number;
    onExpand: (itemId: ItemId) => void;
    onCollapse: (itemId: ItemId) => void;
    provided: TreeDraggableProvided;
    snapshot: DraggableStateSnapshot;
  }
  declare interface TreeItemMutation {
    id?: ItemId;
    children?: ItemId[];
    hasChildren?: boolean;
    isExpanded?: boolean;
    isChildrenLoading?: boolean;
    data?: TreeItemData;
  }
  declare export function mutateTree(
    tree: TreeData,
    itemId: ItemId,
    mutation: TreeItemMutation
  ): TreeData;

  declare export function moveItemOnTree(
    tree: TreeData,
    from: TreeSourcePosition,
    to: TreeDestinationPosition
  ): TreeData;

  declare interface TreeProps {
    /**
     * The tree data structure.
     */
    tree: TreeData;

    /**
     * Function that will be called when a parent item needs to be expanded.
     */
    onExpand: (itemId: ItemId, path: Path) => void;

    /**
     * Function that will be called when a parent item needs to be collapsed.
     */
    onCollapse: (itemId: ItemId, path: Path) => void;

    /**
     * Function that will be called when the user starts dragging.
     */
    onDragStart: (itemId: ItemId) => void;

    /**
     * Function that will be called when the user finishes dragging.
     */
    onDragEnd: (
      sourcePosition: TreeSourcePosition,
      destinationPosition: TreeDestinationPosition | void
    ) => void;

    /**
     * Function that will be called to render a single item.
     */
    renderItem: (itemProps: RenderItemParams) => Node;

    /**
     * Number of pixel is used to scaffold the tree by the consumer.
     */
    offsetPerLevel: number;

    /**
     * Boolean to turn on drag&drop re-ordering on the tree
     */
    isDragEnabled: boolean;

    /**
     * Boolean to turn on hovering while dragging
     */
    isNestingEnabled: boolean;
  }
  declare interface FlattenedItem {
    item: TreeItem;
    path: Path;
  }
  declare type FlattenedTree = FlattenedItem[];
  declare interface TreeState {
    /**
     * The flattened tree data structure transformed from props.tree
     */
    flattenedTree: FlattenedTree;
    draggedItemId: ItemId;
  }
  declare class Tree mixins Component<TreeProps, TreeState> {
    static defaultProps: {
      tree: {
        children: []
      },
      onExpand: () => void,
      onCollapse: () => void,
      onDragStart: () => void,
      onDragEnd: () => void,
      renderItem: () => void,
      offsetPerLevel: 35,
      isDragEnabled: false,
      isNestingEnabled: false
    };
  }
  declare export default typeof Tree;
}
