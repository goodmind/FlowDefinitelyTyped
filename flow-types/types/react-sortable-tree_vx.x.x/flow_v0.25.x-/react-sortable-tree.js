declare module "react-sortable-tree" {
  import typeof * as React from "react";

  import type { ListProps, Index } from "react-virtualized";

  import type {
    ConnectDragSource,
    ConnectDragPreview,
    ConnectDropTarget,
    DragSourceMonitor
  } from "react-dnd";

  declare export * from "./utils/tree-data-utils"

  declare export * from "./utils/default-handlers"

  declare export interface TreeItem {
    title?: React.Node;
    subtitle?: React.Node;
    expanded?: boolean;
    children?: TreeItem[];
    [x: string]: any;
  }
  declare export interface TreeNode {
    node: TreeItem;
  }
  declare export interface TreePath {
    path: NumberOrStringArray;
  }
  declare export interface TreeIndex {
    treeIndex: number;
  }
  declare export interface FullTree {
    treeData: TreeItem[];
  }
  declare export type NodeData = {} & TreeNode & TreePath & TreeIndex;

  declare export type FlatDataItem = {
    lowerSiblingsCounts: number[],
    parentNode: TreeItem
  } & TreeNode &
    TreePath;

  declare export type SearchData = {
    searchQuery: any
  } & NodeData;

  declare export type ExtendedNodeData = {
    parentNode: TreeItem,
    lowerSiblingsCounts: number[],
    isSearchMatch: boolean,
    isSearchFocus: boolean
  } & NodeData;

  declare export type OnVisibilityToggleData = {
    expanded: boolean
  } & FullTree &
    TreeNode;

  declare export interface OnDragStateChangedData {
    isDragging: boolean;
    draggedNode: TreeItem;
  }
  declare interface PreviousAndNextLocation {
    prevTreeIndex: number;
    prevPath: NumberOrStringArray;
    nextTreeIndex: number;
    nextPath: NumberOrStringArray;
  }
  declare export type OnDragPreviousAndNextLocation = {
    prevParent: TreeItem | null,
    nextParent: TreeItem | null
  } & PreviousAndNextLocation;

  declare export interface ShouldCopyData {
    node: TreeNode;
    prevPath: NumberOrStringArray;
    prevTreeIndex: number;
  }
  declare export type OnMovePreviousAndNextLocation = {
    nextParentNode: TreeItem | null
  } & PreviousAndNextLocation;

  declare export type NodeRenderer = React.ComponentClass<NodeRendererProps>;
  declare export interface NodeRendererProps {
    node: TreeItem;
    path: NumberOrStringArray;
    treeIndex: number;
    isSearchMatch: boolean;
    isSearchFocus: boolean;
    canDrag: boolean;
    scaffoldBlockPxWidth: number;
    toggleChildrenVisibility?: (data: NodeData) => void;
    buttons?: React$Node[];
    className?: string;
    style?: React.CSSProperties;
    title?: (data: NodeData) => React$Node | React$Node;
    subtitle?: (data: NodeData) => React$Node | React$Node;
    icons?: React$Node[];
    lowerSiblingCounts: number[];
    swapDepth?: number;
    swapFrom?: number;
    swapLength?: number;
    listIndex: number;
    treeId: string;
    connectDragPreview: ConnectDragPreview;
    connectDragSource: ConnectDragSource;
    parentNode?: TreeItem;
    startDrag: any;
    endDrag: any;
    isDragging: boolean;
    didDrop: boolean;
    draggedNode?: TreeItem;
    isOver: boolean;
    canDrop?: boolean;
  }
  declare export type PlaceholderRenderer = React.ComponentClass<PlaceholderRendererProps>;
  declare export interface PlaceholderRendererProps {
    isOver: boolean;
    canDrop: boolean;
    draggedNode: TreeItem;
  }
  declare type NumberOrStringArray = Array<string | number>;
  declare export type TreeRenderer = React.ComponentClass<TreeRendererProps>;
  declare export interface TreeRendererProps {
    treeIndex: number;
    treeId: string;
    swapFrom?: number;
    swapDepth?: number;
    swapLength?: number;
    scaffoldBlockPxWidth: number;
    lowerSiblingCounts: number[];
    listIndex: number;
    children: React$Node[];
    connectDropTarget: ConnectDropTarget;
    isOver: boolean;
    canDrop?: boolean;
    draggedNode?: TreeItem;
    getPrevRow: () => FlatDataItem | null;
    node: TreeItem;
    path: NumberOrStringArray;
  }
  declare interface ThemeTreeProps {
    style?: React.CSSProperties;
    innerStyle?: React.CSSProperties;
    reactVirtualizedListProps?: $Shape<ListProps>;
    scaffoldBlockPxWidth?: number;
    slideRegionSize?: number;
    rowHeight?: ((info: Index) => number) | number;
    nodeContentRenderer?: NodeRenderer;
    placeholderRenderer?: PlaceholderRenderer;
  }
  declare export type ThemeProps = {
    treeNodeRenderer?: TreeRenderer
  } & ThemeTreeProps;

  declare export type ReactSortableTreeProps = {
    treeData: TreeItem[],
    onChange(treeData: TreeItem[]): void,
    getNodeKey?: (data: TreeNode & TreeIndex) => string | number,
    generateNodeProps?: (
      data: ExtendedNodeData
    ) => {
      [index: string]: any
    },
    onMoveNode?: (
      data: NodeData & FullTree & OnMovePreviousAndNextLocation
    ) => void,
    onVisibilityToggle?: (data: OnVisibilityToggleData) => void,
    onDragStateChanged?: (data: OnDragStateChangedData) => void,
    maxDepth?: number,
    rowDirection?: "ltr" | "rtl",
    canDrag?: ((data: ExtendedNodeData) => boolean) | boolean,
    canDrop?: (data: OnDragPreviousAndNextLocation & NodeData) => boolean,
    canNodeHaveChildren?: (node: TreeItem) => boolean,
    theme?: ThemeProps,
    searchMethod?: (data: SearchData) => boolean,
    searchQuery?: string | any,
    searchFocusOffset?: number,
    onlyExpandSearchedNodes?: boolean,
    searchFinishCallback?: (matches: NodeData[]) => void,
    dndType?: string,
    shouldCopyOnOutsideDrop?: boolean | ((data: ShouldCopyData) => boolean),
    className?: string,
    isVirtualized?: boolean
  } & ThemeTreeProps;

  declare var SortableTree: React.ComponentClass<ReactSortableTreeProps>;
  declare export var SortableTreeWithoutDndContext: React.ComponentClass<ReactSortableTreeProps>;
  declare export default typeof SortableTree;
}
