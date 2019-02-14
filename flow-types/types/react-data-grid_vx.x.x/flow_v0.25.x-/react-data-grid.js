declare var npm$namespace$AdazzleReactDataGrid: {
  ReactDataGrid: typeof AdazzleReactDataGrid$ReactDataGrid,
  ReactDataGrid: typeof npm$namespace$AdazzleReactDataGrid$ReactDataGrid
};
declare interface AdazzleReactDataGrid$ExcelColumn {
  editable: boolean;
  name: any;
  key: string;
  width: number;
  resizeable: boolean;
  filterable: boolean;
}

declare interface AdazzleReactDataGrid$EditorBaseProps {
  value: any;
  column: AdazzleReactDataGrid$ExcelColumn;
  height: number;
  onBlur: () => void;
  onCommit: () => void;
  onCommitCancel: () => void;
  rowData: any;
  rowMetaData: any;
}

declare interface AdazzleReactDataGrid$SelectionParams<T> {
  rowIdx: number;
  row: T;
}

declare interface AdazzleReactDataGrid$GridProps<T> {
  /**
   * Gets the data to render in each row. Required.
   * Can be an array or a function that takes an index and returns an object.
   */
  rowGetter: Array<T> | ((rowIdx: number) => T);

  /**
   * The total number of rows to render. Required.
   */
  rowsCount: number;

  /**
   * The columns to render.
   */
  columns?: Array<AdazzleReactDataGrid$Column<T>>;

  /**
   * Invoked when the user changes the value of a single cell.
   * Should update that cell's value.
   * @param e Information about the event
   */
  onRowUpdated?: (e: AdazzleReactDataGrid$RowUpdateEvent<T>) => void;

  /**
   * Invoked when the user pulls down the drag handle of an editable cell.
   * Should update the values of the selected cells.
   * @param e Information about the event
   */
  onCellsDragged?: (e: AdazzleReactDataGrid$CellDragEvent) => void;

  /**
   * Invoked when the user double clicks on the drag handle of an editable cell.
   * Should update the values of the cells beneath the selected cell.
   * @param e Information about the event
   */
  onDragHandleDoubleClick?: (
    e: AdazzleReactDataGrid$DragHandleDoubleClickEvent<T>
  ) => void;

  /**
   * Invoked when the user copies a value from one cell and pastes it into another (in the same column).
   * Should update the value of the cell in row e.toRow.
   * @param e Information about the event
   */
  onCellCopyPaste?: (e: AdazzleReactDataGrid$CellCopyPasteEvent) => void;

  /**
   * Invoked after the user updates the grid rows in any way.
   * @param e Information about the event
   */
  onGridRowsUpdated?: (e: AdazzleReactDataGrid$GridRowsUpdatedEvent<T>) => void;

  /**
   * A toolbar to display above the grid.
   * Consider using the toolbar included in "react-data-grid/addons".
   */
  toolbar?: React$ReactElement<any>;

  /**
   * A context menu to disiplay when the user right-clicks a cell.
   * Consider using "react-contextmenu", included in "react-data-grid/addons".
   */
  contextMenu?: React$ReactElement<any>;

  /**
   * A react component to customize how rows are rendered.
   * If you want to define your own, consider extending ReactDataGrid.Row.
   */
  rowRenderer?:
    | React$ReactElement<any>
    | React$ComponentClass<any>
    | React$StatelessComponent<any>;

  /**
   * A component to display when there are no rows to render.
   */
  emptyRowsView?: React$ComponentClass<any> | React$StatelessComponent<any>;

  /**
   * The minimum width of the entire grid in pixels.
   */
  minWidth?: number;

  /**
   * The minimum height of the entire grid in pixels.
   * @default 350
   */
  minHeight?: number;

  /**
   * The height of each individual row in pixels.
   * @default 35
   */
  rowHeight?: number;

  /**
   * The height of the header row in pixels.
   * @default rowHeight
   */
  headerRowHeight?: number;

  /**
   * The height of the header filter row in pixels.
   * @default 45
   */
  headerFiltersHeight?: number;

  /**
   * The minimum width of each column in pixels.
   * @default 80
   */
  minColumnWidth?: number;

  /**
   * Invoked when a column has been resized.
   * @param index The index of the column
   * @param width The new width of the column
   */
  onColumnResize?: (index: number, width: number) => void;

  /**
   * Controls what happens when the user navigates beyond the first or last cells.
   * 'loopOverRow' will navigate to the beginning/end of the current row.
   * 'changeRow' will navigate to the beginning of the next row or the end of the last.
   * 'none' will do nothing.
   * @default none
   */
  cellNavigationMode?: "none" | "loopOverRow" | "changeRow";

  /**
   * Called when the user sorts the grid by some column.
   * Should update the order of the rows returned by rowGetter.
   * @param sortColumn The name of the column being sorted by
   * @param sortDirection The direction to sort ('ASC'/'DESC'/'NONE')
   */
  onGridSort?: (
    sortColumn: string,
    sortDirection: "ASC" | "DESC" | "NONE"
  ) => void;

  /**
   * Initial sorting direction
   */
  sortDirection?: "ASC" | "DESC" | "NONE";

  /**
   * key of the initial sorted column
   */
  sortColumn?: string;

  /**
   * Called when the user filters a column by some value.
   * Should restrict the rows in rowGetter to only things that match the filter.
   * @param filter The filter being added
   */
  onAddFilter?: (filter: AdazzleReactDataGrid$Filter) => void;

  /**
   * Called when the user clears all filters.
   * Should restore the rows in rowGetter to their original state.
   */
  onClearFilters?: () => void;

  /**
   * When set to true or 'multi', enables multiple row select.
   * When set to 'single', enables single row select.
   * When set to false or not set, disables row select.
   * @default false
   */
  enableRowSelect?: boolean | "single" | "multi";

  /**
   * Called when a row is selected.
   * @param rows The (complete) current selection of rows.
   */
  onRowSelect?: (rows: Array<T>) => void;

  /**
   * A property that's unique to every row.
   * This property is required to enable row selection.
   * @default 'id'
   */
  rowKey?: string;

  /**
   * Enables cells to be selected when clicked.
   * @default false
   */
  enableCellSelect?: boolean;

  /**
   * Enables cells to be dragged and dropped
   * @default false
   */
  enableDragAndDrop?: boolean;

  /**
   * Called when a cell is selected.
   * @param coordinates The row and column indices of the selected cell.
   */
  onCellSelected?: (coordinates: {
    rowIdx: number,
    idx: number
  }) => void;

  /**
   * Called when a cell is deselected.
   * @param coordinates The row and column indices of the deselected cell.
   */
  onCellDeSelected?: (coordinates: {
    rowIdx: number,
    idx: number
  }) => void;

  /**
   * How long to wait before rendering a new row while scrolling in milliseconds.
   * @default 0
   */
  rowScrollTimeout?: number;

  /**
   * Options object for selecting rows
   */
  rowSelection?: {
    showCheckbox?: boolean,
    enableShiftSelect?: boolean,
    onRowsSelected?: (
      rows: Array<AdazzleReactDataGrid$SelectionParams<T>>
    ) => void,
    onRowsDeselected?: (
      rows: Array<AdazzleReactDataGrid$SelectionParams<T>>
    ) => void,
    selectBy?: {
      indexes?: Array<number>,
      keys?: {
        rowKey: string,
        values: Array<any>
      },
      isSelectedKey?: string
    }
  };

  /**
   * A custom formatter for the select all checkbox cell
   * @default react-data-grid/src/formatters/SelectAll.js
   */
  selectAllRenderer?: React$ComponentClass<any> | React$StatelessComponent<any>;

  /**
   * A custom formatter for select row column
   * @default AdazzleReactDataGridPlugins.Editors.CheckboxEditor
   */
  rowActionsCell?: React$ComponentClass<any> | React$StatelessComponent<any>;

  /**
   * An event function called when a row is clicked.
   * Clicking the header row will trigger a call with -1 for the rowIdx.
   * @param rowIdx zero index number of row clicked
   * @param row object behind the row
   */
  onRowClick?: (rowIdx: number, row: T) => void;

  /**
   * An event function called when a row is expanded with the toggle
   * @param props OnRowExpandToggle object
   */
  onRowExpandToggle?: (props: AdazzleReactDataGrid$OnRowExpandToggle) => void;

  /**
   * Responsible for returning an Array of values that can be used for filtering
   * a column that is column.filterable and using a column.filterRenderer that
   * displays a list of options.
   * @param columnKey the column key that we are looking to pull values from
   */
  getValidFilterValues?: (columnKey: string) => Array<any>;
  getCellActions?: (
    column: AdazzleReactDataGrid$Column<T>,
    row: T
  ) => (AdazzleReactDataGrid$ActionButton | AdazzleReactDataGrid$ActionMenu)[];
}

declare type AdazzleReactDataGrid$ActionButton = {
  icon: string,
  callback: () => void
};

declare type AdazzleReactDataGrid$ActionMenu = {
  icon: string,
  actions: {
    icon: string,
    text: string,
    callback: () => void
  }[]
};

/**
 * Information about a specific column to be rendered.
 */
declare interface AdazzleReactDataGrid$Column<T> {
  /**
   * A unique key for this column. Required.
   * Each row should have a property with this name, which contains this column's value.
   */
  key: string;

  /**
   * This column's display name. Required.
   */
  name: string;

  /**
   * A custom width for this specific column.
   * @default minColumnWidth from the ReactDataGrid
   */
  width?: number;

  /**
   * Whether this column can be resized by the user.
   * @default false
   */
  resizable?: boolean;

  /**
   * Whether this column should stay fixed on the left as the user scrolls horizontally.
   * @default false
   */
  locked?: boolean;

  /**
   * Whether this column can be edited.
   * @default false
   */
  editable?: boolean;

  /**
   * Whether the rows in the grid can be sorted by this column.
   * @default false
   */
  sortable?: boolean;

  /**
   * Whether the rows in the grid can be filtered by this column.
   * @default false
   */
  filterable?: boolean;

  /**
   * A custom formatter for this column's filter.
   */
  filterRenderer?:
    | React$ReactElement<any>
    | React$ComponentClass<any>
    | React$StatelessComponent<any>;

  /**
   * The editor for this column. Several editors are available in "react-data-grid/addons".
   * @default A simple text editor
   */
  editor?:
    | React$ReactElement<AdazzleReactDataGrid$EditorBaseProps>
    | React$ComponentClass<AdazzleReactDataGrid$EditorBaseProps>
    | React$StatelessComponent<AdazzleReactDataGrid$EditorBaseProps>;

  /**
   * A custom read-only formatter for this column. An image formatter is available in "react-data-grid/addons".
   */
  formatter?:
    | React$ReactElement<any>
    | React$ComponentClass<any>
    | React$StatelessComponent<any>;

  /**
   * A custom formatter for this column's header.
   */
  headerRenderer?:
    | React$ReactElement<any>
    | React$ComponentClass<any>
    | React$StatelessComponent<any>;

  /**
   * Events to be bound to the cells in this specific column.
   * Each event must respect this standard in order to work correctly:
   * @example function onXxx(ev :SyntheticEvent, (rowIdx, idx, name): args)
   */
  events?: {
    [name: string]: AdazzleReactDataGrid$ColumnEventCallback
  };

  /**
   * Retrieve meta data about the row, optionally provide column as a second argument
   */
  getRowMetaData?: (rowdata: T, column?: AdazzleReactDataGrid$Column<T>) => any;

  /**
   * A class name to be applied to the cells in the column
   */
  cellClass?: string;

  /**
   * Whether this column can be dragged (re-arranged).
   * @default false
   */
  draggable?: boolean;
}

declare interface AdazzleReactDataGrid$ColumnEventCallback {
  /**
   * A callback for a native react event on a specific cell.
   * @param ev The react event
   * @param args The row and column coordinates of the cell, and the name of the event.
   */
  (
    ev: React$SyntheticEvent<any>,
    args: {
      rowIdx: number,
      idx: number,
      name: string
    }
  ): void;
}

/**
 * Information about a row update. Generic event type returns untyped row, use parameterized type with the row type as the parameter
 * @default T = any
 */
declare interface AdazzleReactDataGrid$RowUpdateEvent<T = any> {
  /**
   * The index of the updated row.
   */
  rowIdx: number;

  /**
   * The columns that were updated and their values.
   */
  updated: T;

  /**
   * The name of the column that was updated.
   */
  cellKey: string;

  /**
   * The name of the key pressed to trigger the event ('Tab', 'Enter', etc.).
   */
  key: string;
}

/**
 * Information about a cell drag
 */
declare interface AdazzleReactDataGrid$CellDragEvent {
  /**
   * The name of the column that was dragged.
   */
  cellKey: string;

  /**
   * The row where the drag began.
   */
  fromRow: number;

  /**
   * The row where the drag ended.
   */
  toRow: number;

  /**
   * The value of the cell that was dragged.
   */
  value: any;
}

/**
 * Information about a drag handle double click. Generic event type returns untyped row, use parameterized type with the row type as the parameter
 * @default T = any
 */
declare interface AdazzleReactDataGrid$DragHandleDoubleClickEvent<T = any> {
  /**
   * The row where the double click occurred.
   */
  rowIdx: number;

  /**
   * The column where the double click occurred.
   */
  idx: number;

  /**
   * The values of the row.
   */
  rowData: T;

  /**
   * The double click event.
   */
  e: React$SyntheticEvent<any>;
}

/**
 * Information about a copy paste
 */
declare interface AdazzleReactDataGrid$CellCopyPasteEvent {
  /**
   * The row that was pasted to.
   */
  rowIdx: number;

  /**
   * The value that was pasted.
   */
  value: any;

  /**
   * The row that was copied from.
   */
  fromRow: number;

  /**
   * The row that was pasted to.
   */
  toRow: number;

  /**
   * The key of the column where the copy paste occurred.
   */
  cellKey: string;
}

/**
 * Information about some update to the grid's contents. Generic event type returns untyped row, use parameterized type with the row type as the parameter
 * @default T = any
 */
declare interface AdazzleReactDataGrid$GridRowsUpdatedEvent<T = any> {
  /**
   * The key of the column where the event occurred.
   */
  cellKey: string;

  /**
   * The top row affected by the event.
   */
  fromRow: number;

  /**
   * The bottom row affected by the event.
   */
  toRow: number;

  /**
   * The columns that were updated and their values.
   */
  updated: T;

  /**
   * The action that occurred to trigger this event.
   * One of 'cellUpdate', 'cellDrag', 'columnFill', or 'copyPaste'.
   */
  action: "cellUpdate" | "cellDrag" | "columnFill" | "copyPaste";
}

/**
 * Information about the row toggler
 */
declare interface AdazzleReactDataGrid$OnRowExpandToggle {
  /**
   * The name of the column group the row is in
   */
  columnGroupName: string;

  /**
   * The name of the expanded row
   */
  name: string;

  /**
   * If it should expand or not
   */
  shouldExpand: boolean;
}

/**
 * Some filter to be applied to the grid's contents
 */
declare interface AdazzleReactDataGrid$Filter {
  /**
   * The key of the column being filtered.
   */
  columnKey: string;

  /**
   * The term to filter by.
   */
  filterTerm: string;
}

/**
 * Excel-like grid component built with React, with editors, keyboard navigation, copy & paste, and the like
 * http://adazzle.github.io/react-data-grid/
 */
declare export class AdazzleReactDataGrid$ReactDataGrid<T>
  mixins React$Component<AdazzleReactDataGrid$GridProps<T>> {
  /**
   * Opens the editor for the cell (idx) in the given row (rowIdx). If the column is not editable then nothing will happen.
   */
  openCellEditor(rowIdx: number, idx: number): void;
}

declare var npm$namespace$AdazzleReactDataGrid$ReactDataGrid: {
  Column: typeof AdazzleReactDataGrid$ReactDataGrid$Column,
  Filter: typeof AdazzleReactDataGrid$ReactDataGrid$Filter,
  RowUpdateEvent: typeof AdazzleReactDataGrid$ReactDataGrid$RowUpdateEvent,
  SelectionParams: typeof AdazzleReactDataGrid$ReactDataGrid$SelectionParams,
  CellDragEvent: typeof AdazzleReactDataGrid$ReactDataGrid$CellDragEvent,
  DragHandleDoubleClickEvent: typeof AdazzleReactDataGrid$ReactDataGrid$DragHandleDoubleClickEvent,
  CellCopyPasteEvent: typeof AdazzleReactDataGrid$ReactDataGrid$CellCopyPasteEvent,
  GridRowsUpdatedEvent: typeof AdazzleReactDataGrid$ReactDataGrid$GridRowsUpdatedEvent,
  OnRowExpandToggle: typeof AdazzleReactDataGrid$ReactDataGrid$OnRowExpandToggle,

  Row: typeof AdazzleReactDataGrid$ReactDataGrid$Row,
  Cell: typeof AdazzleReactDataGrid$ReactDataGrid$Cell,
  editors: typeof npm$namespace$AdazzleReactDataGrid$ReactDataGrid$editors
};
declare export var AdazzleReactDataGrid$ReactDataGrid$Column: typeof AdazzleReactDataGrid$Column;

declare export var AdazzleReactDataGrid$ReactDataGrid$Filter: typeof AdazzleReactDataGrid$Filter;

declare export var AdazzleReactDataGrid$ReactDataGrid$RowUpdateEvent: typeof AdazzleReactDataGrid$RowUpdateEvent;

declare export var AdazzleReactDataGrid$ReactDataGrid$SelectionParams: typeof AdazzleReactDataGrid$SelectionParams;

declare export var AdazzleReactDataGrid$ReactDataGrid$CellDragEvent: typeof AdazzleReactDataGrid$CellDragEvent;

declare export var AdazzleReactDataGrid$ReactDataGrid$DragHandleDoubleClickEvent: typeof AdazzleReactDataGrid$DragHandleDoubleClickEvent;

declare export var AdazzleReactDataGrid$ReactDataGrid$CellCopyPasteEvent: typeof AdazzleReactDataGrid$CellCopyPasteEvent;

declare export var AdazzleReactDataGrid$ReactDataGrid$GridRowsUpdatedEvent: typeof AdazzleReactDataGrid$GridRowsUpdatedEvent;

declare export var AdazzleReactDataGrid$ReactDataGrid$OnRowExpandToggle: typeof AdazzleReactDataGrid$OnRowExpandToggle;

declare var npm$namespace$AdazzleReactDataGrid$ReactDataGrid$editors: {
  EditorBase: typeof AdazzleReactDataGrid$ReactDataGrid$editors$EditorBase
};
declare class AdazzleReactDataGrid$ReactDataGrid$editors$EditorBase<
  P = {},
  S = {}
> mixins React$Component<P & AdazzleReactDataGrid$EditorBaseProps, S> {
  getStyle(): {
    width: string
  };
  getValue(): any;
  getInputNode(): Element | null | Text;
  inheritContainerStyles(): boolean;
}

/**
 * A react component that renders a row of the grid
 */
declare export class AdazzleReactDataGrid$ReactDataGrid$Row
  mixins React$Component<any> {}

/**
 * A react coponent that renders a cell of the grid
 */
declare export class AdazzleReactDataGrid$ReactDataGrid$Cell
  mixins React$Component<any> {}
declare var npm$namespace$AdazzleReactDataGridPlugins: {
  Toolbar: typeof AdazzleReactDataGridPlugins$Toolbar,
  Editors: typeof npm$namespace$AdazzleReactDataGridPlugins$Editors,
  Filters: typeof npm$namespace$AdazzleReactDataGridPlugins$Filters,
  Formatters: typeof npm$namespace$AdazzleReactDataGridPlugins$Formatters,
  DraggableHeader: typeof npm$namespace$AdazzleReactDataGridPlugins$DraggableHeader,
  Data: typeof npm$namespace$AdazzleReactDataGridPlugins$Data,
  Menu: typeof npm$namespace$AdazzleReactDataGridPlugins$Menu
};
declare interface AdazzleReactDataGridPlugins$AutoCompleteEditorProps {
  onCommit?: () => void;
  options?: Array<{
    id: any,
    title: string
  }>;
  label?: any;
  value?: any;
  height?: number;
  valueParams?: string[];
  column?: AdazzleReactDataGrid$ExcelColumn;
  resultIdentifier?: string;
  search?: string;
  onKeyDown?: () => void;
  onFocus?: () => void;
  editorDisplayValue?: (
    column: AdazzleReactDataGrid$ExcelColumn,
    value: any
  ) => string;
}

declare interface AdazzleReactDataGridPlugins$AutoCompleteTokensEditorProps {
  options: Array<
    | string
    | {
        id: number,
        caption: string
      }
  >;
  column?: AdazzleReactDataGrid$ExcelColumn;
  value?: any[];
}

declare interface AdazzleReactDataGridPlugins$DropDownEditorProps {
  options: Array<
    | string
    | {
        id: string,
        title: string,
        value: string,
        text: string
      }
  >;
}

declare var npm$namespace$AdazzleReactDataGridPlugins$Editors: {
  AutoComplete: typeof AdazzleReactDataGridPlugins$Editors$AutoComplete,
  AutoCompleteTokensEditor: typeof AdazzleReactDataGridPlugins$Editors$AutoCompleteTokensEditor,
  DropDownEditor: typeof AdazzleReactDataGridPlugins$Editors$DropDownEditor,
  SimpleTextEditor: typeof AdazzleReactDataGridPlugins$Editors$SimpleTextEditor,
  CheckboxEditor: typeof AdazzleReactDataGridPlugins$Editors$CheckboxEditor
};
declare export class AdazzleReactDataGridPlugins$Editors$AutoComplete
  mixins React$Component<AdazzleReactDataGridPlugins$AutoCompleteEditorProps> {}

declare export class AdazzleReactDataGridPlugins$Editors$AutoCompleteTokensEditor
  mixins React$Component<AdazzleReactDataGridPlugins$AutoCompleteTokensEditorProps> {}

declare export class AdazzleReactDataGridPlugins$Editors$DropDownEditor
  mixins React$Component<AdazzleReactDataGridPlugins$DropDownEditorProps> {}

declare export class AdazzleReactDataGridPlugins$Editors$SimpleTextEditor
  mixins React$Component<any> {}

declare export class AdazzleReactDataGridPlugins$Editors$CheckboxEditor
  mixins React$Component<any> {}

declare var npm$namespace$AdazzleReactDataGridPlugins$Filters: {
  NumericFilter: typeof AdazzleReactDataGridPlugins$Filters$NumericFilter,
  AutoCompleteFilter: typeof AdazzleReactDataGridPlugins$Filters$AutoCompleteFilter,
  MultiSelectFilter: typeof AdazzleReactDataGridPlugins$Filters$MultiSelectFilter,
  SingleSelectFilter: typeof AdazzleReactDataGridPlugins$Filters$SingleSelectFilter
};
declare export class AdazzleReactDataGridPlugins$Filters$NumericFilter
  mixins React$Component<any> {}

declare export class AdazzleReactDataGridPlugins$Filters$AutoCompleteFilter
  mixins React$Component<any> {}

declare export class AdazzleReactDataGridPlugins$Filters$MultiSelectFilter
  mixins React$Component<any> {}

declare export class AdazzleReactDataGridPlugins$Filters$SingleSelectFilter
  mixins React$Component<any> {}

declare var npm$namespace$AdazzleReactDataGridPlugins$Formatters: {
  ImageFormatter: typeof AdazzleReactDataGridPlugins$Formatters$ImageFormatter,
  DropDownFormatter: typeof AdazzleReactDataGridPlugins$Formatters$DropDownFormatter
};
declare export class AdazzleReactDataGridPlugins$Formatters$ImageFormatter
  mixins React$Component<any> {}

declare export class AdazzleReactDataGridPlugins$Formatters$DropDownFormatter
  mixins React$Component<any> {}

declare export class AdazzleReactDataGridPlugins$Toolbar
  mixins React$Component<any> {}

declare var npm$namespace$AdazzleReactDataGridPlugins$DraggableHeader: {
  DraggableContainer: typeof AdazzleReactDataGridPlugins$DraggableHeader$DraggableContainer
};
declare export class AdazzleReactDataGridPlugins$DraggableHeader$DraggableContainer
  mixins React$Component<any> {}

declare var npm$namespace$AdazzleReactDataGridPlugins$Data: {
  Selectors: typeof AdazzleReactDataGridPlugins$Data$Selectors
};
declare export var AdazzleReactDataGridPlugins$Data$Selectors: {
  getRows: (state: { [key: string]: any }) => { [key: string]: any }[],
  getSelectedRowsByKey: (state: { [key: string]: any }) => {
    [key: string]: any
  }[]
};

declare var npm$namespace$AdazzleReactDataGridPlugins$Menu: {
  connect: typeof AdazzleReactDataGridPlugins$Menu$connect,
  ContextMenuLayer: typeof AdazzleReactDataGridPlugins$Menu$ContextMenuLayer,
  monitor: typeof AdazzleReactDataGridPlugins$Menu$monitor,

  ContextMenu: typeof AdazzleReactDataGridPlugins$Menu$ContextMenu,
  MenuHeader: typeof AdazzleReactDataGridPlugins$Menu$MenuHeader,
  MenuItem: typeof AdazzleReactDataGridPlugins$Menu$MenuItem,
  SubMenu: typeof AdazzleReactDataGridPlugins$Menu$SubMenu
};
declare export class AdazzleReactDataGridPlugins$Menu$ContextMenu
  mixins React$Component<any> {}

declare export class AdazzleReactDataGridPlugins$Menu$MenuHeader
  mixins React$Component<any> {}

declare export class AdazzleReactDataGridPlugins$Menu$MenuItem
  mixins React$Component<any> {}

declare export class AdazzleReactDataGridPlugins$Menu$SubMenu
  mixins React$Component<any> {}

declare export var AdazzleReactDataGridPlugins$Menu$monitor: {
  getItem(): any,
  getPosition(): any,
  hideMenu(): void
};

declare export function AdazzleReactDataGridPlugins$Menu$connect(
  Menu: any
): any;

declare export function AdazzleReactDataGridPlugins$Menu$ContextMenuLayer(
  identifier: any,
  configure?: (props: any) => any
): (Component: any) => any;
declare module "react-data-grid" {
  declare var AdazzleReactDataGrid$ReactDataGrid: typeof AdazzleReactDataGrid$ReactDataGrid;
  declare export default typeof ReactDataGrid;
}
declare module "react-data-grid-addons" {
  declare var AdazzleReactDataGridPlugins$Editors: typeof AdazzleReactDataGridPlugins$Editors;
  declare var AdazzleReactDataGridPlugins$Filters: typeof AdazzleReactDataGridPlugins$Filters;
  declare var AdazzleReactDataGridPlugins$Formatters: typeof AdazzleReactDataGridPlugins$Formatters;
  declare var AdazzleReactDataGridPlugins$Toolbar: typeof AdazzleReactDataGridPlugins$Toolbar;
  declare var AdazzleReactDataGridPlugins$Menu: typeof AdazzleReactDataGridPlugins$Menu;
  declare var AdazzleReactDataGridPlugins$Data: typeof AdazzleReactDataGridPlugins$Data;
  declare var AdazzleReactDataGridPlugins$DraggableHeader: typeof AdazzleReactDataGridPlugins$DraggableHeader;
  declare export {
    Editors,
    Filters,
    Formatters,
    Toolbar,
    Menu,
    Data,
    DraggableHeader
  };

  declare interface global$Window {
    ReactDataGridPlugins: {
      Editors: typeof Editors,
      Filters: typeof Filters,
      Formatters: typeof Formatters,
      Toolbar: typeof Toolbar,
      Menu: typeof Menu,
      Data: typeof Data,
      DraggableHeader: typeof DraggableHeader
    };
  }
}
