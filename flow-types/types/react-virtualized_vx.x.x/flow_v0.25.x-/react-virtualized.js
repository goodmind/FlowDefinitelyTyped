declare module "react-virtualized" {
  declare export {
    ArrowKeyStepper,
    ArrowKeyStepperProps,
    ChildProps as ArrowKeyStepperChildProps,
    ScrollIndices
  } from "./dist/es/ArrowKeyStepper";

  declare export {
    AutoSizer,
    AutoSizerProps,
    Dimensions,
    Size
  } from "./dist/es/AutoSizer";

  declare export {
    CellMeasurer,
    CellMeasurerCache,
    CellMeasurerCacheParams,
    CellMeasurerProps,
    KeyMapper
  } from "./dist/es/CellMeasurer";

  declare export {
    Collection,
    CollectionCellGroupRenderer,
    CollectionCellGroupRendererParams,
    CollectionCellRenderer,
    CollectionCellRendererParams,
    CollectionCellSizeAndPosition,
    CollectionCellSizeAndPositionGetter,
    CollectionProps
  } from "./dist/es/Collection";

  declare export {
    ColumnSizer,
    ColumnSizerProps,
    SizedColumnProps
  } from "./dist/es/ColumnSizer";

  declare export {
    accessibilityOverscanIndicesGetter,
    defaultOverscanIndicesGetter,
    defaultCellRangeRenderer,
    Grid,
    CellSizeAndPositionManager,
    ConfigureParams,
    ContainerSizeAndOffset,
    GetVisibleCellRangeParams,
    GridCellProps,
    GridCellRangeProps,
    GridCellRangeRenderer,
    GridCellRenderer,
    GridProps,
    GridState,
    OverscanIndices,
    OverscanIndicesGetterParams,
    ScrollDirection,
    ScrollParams,
    SectionRenderedParams,
    SizeAndPositionData,
    VisibleCellRange,
    ScrollbarPresenceParams
  } from "./dist/es/Grid";

  declare export {
    InfiniteLoader,
    InfiniteLoaderChildProps,
    InfiniteLoaderProps
  } from "./dist/es/InfiniteLoader";

  declare export {
    List,
    ListProps,
    ListRowProps,
    ListRowRenderer
  } from "./dist/es/List";

  declare export {
    createCellPositioner as createMasonryCellPositioner,
    Masonry,
    CellRenderer,
    MasonryCellProps,
    MasonryProps,
    MasonryState,
    OnCellsRenderedCallback,
    OnScrollCallback,
    Position,
    Positioner
  } from "./dist/es/Masonry";

  declare export {
    MultiGrid,
    MultiGridProps,
    MultiGridState
  } from "./dist/es/MultiGrid";

  declare export {
    ScrollSync,
    OnScrollParams,
    ScrollSyncChildProps,
    ScrollSyncProps,
    ScrollSyncState
  } from "./dist/es/ScrollSync";

  declare export {
    createMultiSort as createTableMultiSort,
    defaultCellDataGetter as defaultTableCellDataGetter,
    defaultCellRenderer as defaultTableCellRenderer,
    defaultHeaderRenderer as defaultTableHeaderRenderer,
    defaultHeaderRowRenderer as defaultTableHeaderRowRenderer,
    defaultRowRenderer as defaultTableRowRenderer,
    Table,
    Column,
    SortDirection,
    SortIndicator,
    ColumnProps,
    HeaderMouseEventHandlerParams,
    RowMouseEventHandlerParams,
    SortDirectionType,
    TableCellDataGetter,
    TableCellDataGetterParams,
    TableCellProps,
    TableCellRenderer,
    TableHeaderProps,
    TableHeaderRenderer,
    TableHeaderRowProps,
    TableHeaderRowRenderer,
    TableProps,
    TableRowProps,
    TableRowRenderer,
    SortParams
  } from "./dist/es/Table";

  declare export {
    WindowScroller,
    WindowScrollerChildProps,
    WindowScrollerProps,
    WindowScrollerState,
    IS_SCROLLING_TIMEOUT
  } from "./dist/es/WindowScroller";

  declare export type Index = {
    index: number
  };
  declare export type PositionInfo = {
    x: number,
    y: number
  };
  declare export type ScrollPosition = {
    scrollLeft: number,
    scrollTop: number
  };
  declare export type SizeInfo = {
    height: number,
    width: number
  };
  declare export type SizeAndPositionInfo = SizeInfo & PositionInfo;
  declare export type Map<T> = {
    [key: string]: T
  };
  declare export type Alignment = "auto" | "end" | "start" | "center";
  declare export type IndexRange = {
    startIndex: number,
    stopIndex: number
  };
  declare export type OverscanIndexRange = {
    overscanStartIndex: number,
    overscanStopIndex: number
  };
  declare export type ScrollEventData = {
    clientHeight: number,
    scrollHeight: number,
    scrollTop: number
  };
}
