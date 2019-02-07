declare module 'slickgrid' {
        declare type DOMEvent = {} & Slick$Event

	
      declare var npm$namespace$Slick: {
        
        GlobalEditorLock: typeof Slick$GlobalEditorLock,
      }

/**
 * slick.core.js
 * An event object for passing data to event handlers and letting them control propagation.
 * <p>This is pretty much identical to how W3C and jQuery implement events.</p>
 * @class EventData
 * @constructor
 */
declare export class Slick$EventData  {
constructor(): this;

/**
 * *
 * Stops event from propagating up the DOM tree.
 * @method stopPropagation
 */
stopPropagation(): void;

/**
 * *
 * Returns whether stopPropagation was called on this event object.
 * @method isPropagationStopped
 * @return {Boolean}
 */
isPropagationStopped(): boolean;

/**
 * *
 * Prevents the rest of the handlers from being executed.
 * @method stopImmediatePropagation
 */
stopImmediatePropagation(): void;

/**
 * *
 * Returns whether stopImmediatePropagation was called on this event object.\
 * @method isImmediatePropagationStopped
 * @return {Boolean}
 */
isImmediatePropagationStopped(): boolean
}


/**
 * *
 * A simple publisher-subscriber implementation.
 * @class Event
 * @constructor
 */
declare export class Slick$Event<T>  {
constructor(): this;

/**
 * *
 * Adds an event handler to be called when the event is fired.
 * <p>Event handler will receive two arguments - an <code>EventData</code> and the <code>data</code>
 * object the event was fired with.<p>
 * @method subscribe
 * @param {Function} fn Event handler.
 */
subscribe(fn: (e: Slick$EventData, data: T) => any): void;
subscribe(fn: (e: DOMEvent, data: T) => any): void;

/**
 * *
 * Removes an event handler added with <code>subscribe(fn)</code>.
 * @method unsubscribe
 * @param {Function} fn Event handler to be removed.
 */
unsubscribe(fn: (e: Slick$EventData, data: T) => any): void;
unsubscribe(fn: (e: DOMEvent, data: T) => any): void;

/**
 * *
 * Fires an event notifying all subscribers.
 * @method notify
 * @param {Object} args Additional data object to be passed to all handlers.
 * @param {Slick$EventData} e Optional.
An <code>EventData</code> object to be passed to all handlers.
For DOM events, an existing W3C/jQuery event object can be passed in.
 * @param {Object} scope Optional.
The scope ("this") within which the handler will be executed.
If not specified, the scope will be set to the <code>Event</code> instance.
 * @return Last run callback result.
 * @note slick.core.Event.notify shows this method as returning a value, type is unknown.
 */
notify(args?: T, e?: Slick$EventData, scope?: any): any;
notify(args?: T, e?: DOMEvent, scope?: any): any
}

declare export class Slick$EventHandler  {
constructor(): this;
subscribe(event: Slick$EventData, handler: Function): Slick$EventHandler;
unsubscribe(event: Slick$EventData, handler: Function): Slick$EventHandler;
unsubscribeAll(): Slick$EventHandler
}


/**
 * *
 * A structure containing a range of cells.
 * @class Range
 */
declare export class Slick$Range  {

/**
 * A structure containing a range of cells.
 * @constructor
 * @param {Editors$Integer} fromRow Starting row.
 * @param {Editors$Integer} fromCell Starting cell.
 * @param {Editors$Integer} toRow Optional. Ending row. Defaults to <code>fromRow</code>.
 * @param {Editors$Integer} toCell Optional. Ending cell. Defaults to <code>fromCell</code>.
 */
constructor(fromRow: number, fromCell: number, toRow?: number, toCell?: number): this;

/**
 * *
 * @property fromRow
 * @type {Editors$Integer}
 */
fromRow: number;

/**
 * *
 * @property fromCell
 * @type {Editors$Integer}
 */
fromCell: number;

/**
 * *
 * @property toRow
 * @type {Editors$Integer}
 */
toRow: number;

/**
 * *
 * @property toCell
 * @type {Editors$Integer}
 */
toCell: number;

/**
 * *
 * Returns whether a range represents a single row.
 * @method isSingleRow
 * @return {Boolean}
 */
isSingleRow(): boolean;

/**
 * *
 * Returns whether a range represents a single cell.
 * @method isSingleCell
 * @return {Boolean}
 */
isSingleCell(): boolean;

/**
 * *
 * Returns whether a range contains a given cell.
 * @method contains
 * @param {Editors$Integer} row
 * @param {Editors$Integer} cell
 * @return {Boolean}
 */
contains(row: number, cell: number): boolean;

/**
 * *
 * Returns a readable representation of a range.
 * @method toString
 * @return {String}
 */
toString(): string
}


/**
 * *
 * A base class that all special / non-data rows (like Group and GroupTotals) derive from.
 * @class NonDataItem
 * @constructor
 */
declare export class Slick$NonDataRow  {}


/**
 * *
 * Information about a group of rows.
 * @class Group
 * @extends
 * @constructor
 */
declare export class Slick$Group<T: Slick$SlickData> mixins Slick$NonDataRow {
constructor(): this;

/**
 * Grouping level, starting with 0.
 * @property level
 * @type {Number}
 */
level: number;

/**
 * *
 * Number of rows in the group.
 * @property count
 * @type {Editors$Integer}
 */
count: number;

/**
 * *
 * Grouping value.
 * @property value
 * @type {Object}
 */
value: any;

/**
 * *
 * Formatted display value of the group.
 * @property title
 * @type {String}
 */
title: string;

/**
 * *
 * Whether a group is collapsed.
 * @property collapsed
 * @type {Boolean}
 */
collapsed: boolean;

/**
 * *
 * GroupTotals, if any.
 * @property totals
 * @type {Slick$GroupTotals}
 */
totals: Slick$GroupTotals<T>;

/**
 * Rows that are part of the group.
 * @property rows
 * @type {Array}
 */
rows: T[];

/**
 * Sub-groups that are part of the group.
 * @property groups
 * @type {Array}
 */
groups: Slick$Group<T>[];

/**
 * A unique key used to identify the group.  This key can be used in calls to DataView
 * collapseGroup() or expandGroup().
 * @property groupingKey
 * @type {Object}
 */
groupingKey: any;

/**
 * *
 * Compares two Group instances.
 * @method equals
 * @return {Boolean}
 * @param {Slick$Group} group Group instance to compare to.
todo: this is on the prototype (NonDataRow()) instance, not Group, maybe doesn't matter?
 */
equals(group: Slick$Group<T>): boolean
}


/**
 * *
 * Information about group totals.
 * An instance of GroupTotals will be created for each totals row and passed to the aggregators
 * so that they can store arbitrary data in it.  That data can later be accessed by group totals
 * formatters during the display.
 * @class GroupTotals
 * @extends
 * @constructor
 */
declare export class Slick$GroupTotals<T> mixins Slick$NonDataRow {
constructor(): this;

/**
 * *
 * Parent Group.
 * @param group
 * @type {Slick$Group}
 */
group: Slick$Group<T>
}


/**
 * *
 * A locking helper to track the active edit controller and ensure that only a single controller
 * can be active at a time.  This prevents a whole class of state and validation synchronization
 * issues.  An edit controller (such as SlickGrid) can query if an active edit is in progress
 * and attempt a commit or cancel before proceeding.
 * @class EditorLock
 * @constructor
 */
declare export class Slick$EditorLock<T: Slick$Slick$SlickData>  {
constructor(): this;

/**
 * *
 * Returns true if a specified edit controller is active (has the edit lock).
 * If the parameter is not specified, returns true if any edit controller is active.
 * @method isActive
 * @param {EditController} editController
 * @return {Boolean}
 */
isActive(editController: Editors$Editors$Editor<T>): boolean;

/**
 * *
 * Sets the specified edit controller as the active edit controller (acquire edit lock).
 * If another edit controller is already active, and exception will be thrown.
 * @method activate
 * @param {EditController} editController edit controller acquiring the lock
 */
activate(editController: Editors$Editors$Editor<T>): void;

/**
 * *
 * Unsets the specified edit controller as the active edit controller (release edit lock).
 * If the specified edit controller is not the active one, an exception will be thrown.
 * @method deactivate
 * @param {EditController} editController edit controller releasing the lock
 */
deactivate(editController: Editors$Editors$Editor<T>): void;

/**
 * *
 * Attempts to commit the current edit by calling "commitCurrentEdit" method on the active edit
 * controller and returns whether the commit attempt was successful (commit may fail due to validation
 * errors, etc.).  Edit controller's "commitCurrentEdit" must return true if the commit has succeeded
 * and false otherwise.  If no edit controller is active, returns true.
 * @method commitCurrentEdit
 * @return {Boolean}
 */
commitCurrentEdit(): boolean;

/**
 * *
 * Attempts to cancel the current edit by calling "cancelCurrentEdit" method on the active edit
 * controller and returns whether the edit was successfully cancelled.  If no edit controller is
 * active, returns true.
 * @method cancelCurrentEdit
 * @return {Boolean}
 */
cancelCurrentEdit(): boolean
}


/**
 * A global singleton editor lock.
 * @class GlobalEditorLock
 * @static
 * @constructor
 */
declare export var Slick$GlobalEditorLock: Slick$EditorLock<Slick$Slick$SlickData>;


/**
 * slick.grid.js
 * Options which you can apply to the columns objects.
 */
declare export interface Slick$Column<T: Slick$Slick$SlickData> {

/**
 * This accepts a function of the form function(cellNode, row, dataContext, colDef) and is used to post-process the cell's DOM node / nodes
 * @param cellNode
 * @param row
 * @param dataContext
 * @param colDef
 * @return
 */
asyncPostRender?: (cellNode: any, row: any, dataContext: any, colDef: any) => void,

/**
 * Used by the the slick.rowMoveManager.js plugin for moving rows. Has no effect without the plugin installed.
 */
behavior?: any,

/**
 * In the "Add New" row, determines whether clicking cells in this column can trigger row addition. If true, clicking on the cell in this column in the "Add New" row will not trigger row addition.
 */
cannotTriggerInsert?: boolean,

/**
 * Accepts a string as a class name, applies that class to every row cell in the column.
 */
cssClass?: string,

/**
 * When set to true, the first user click on the header will do a descending sort. When set to false, the first user click on the header will do an ascending sort.
 */
defaultSortAsc?: boolean,

/**
 * The editor for cell edits {TextEditor, IntegerEditor, DateEditor...} See slick.editors.js
 */
editor?: any,

/**
 * The property name in the data object to pull content from. (This is assumed to be on the root of the data object.)
 */
field?: string,

/**
 * When set to false, clicking on a cell in this column will not select the row for that cell. The cells in this column will also be skipped during tab navigation.
 */
focusable?: boolean,

/**
 * This accepts a function of the form function(row, cell, value, columnDef, dataContext) and returns a formatted version of the data in each cell of this column. For example, setting formatter to function(r, c, v, cd, dc) { return "Hello!"; } would overwrite every value in the column with "Hello!" See defaultFormatter in slick.grid.js for an example formatter.
 * @param row
 * @param cell
 * @param value
 * @param columnDef
 * @param dataContext
 * @return
 */
formatter?: Slick$Formatter<T>,

/**
 * Accepts a string as a class name, applies that class to the cell for the column header.
 */
headerCssClass?: string,

/**
 * A unique identifier for the column within the grid.
 */
id?: string,

/**
 * Set the maximum allowable width of this column, in pixels.
 */
maxWidth?: number,

/**
 * Set the minimum allowable width of this column, in pixels.
 */
minWidth?: number,

/**
 * The text to display on the column heading.
 */
name?: string,

/**
 * If set to true, whenever this column is resized, the entire table view will rerender.
 */
rerenderOnResize?: boolean,

/**
 * If false, column can no longer be resized.
 */
resizable?: boolean,

/**
 * If false, when a row is selected, the CSS class for selected cells ("selected" by default) is not applied to the cell in this column.
 */
selectable?: boolean,

/**
 * If true, the column will be sortable by clicking on the header.
 */
sortable?: boolean,

/**
 * If set to a non-empty string, a tooltip will appear on hover containing the string.
 */
toolTip?: string,

/**
 * Width of the column in pixels. (May often be overridden by things like minWidth, maxWidth, forceFitColumns, etc.)
 */
width?: number
} 

declare export interface Slick$EditorFactory {
getEditor<T>(column: Slick$Column<T>): Editors$Editors$Editor<T>
} 

declare export interface Slick$FormatterFactory<T: Slick$SlickData> {
getFormatter(column: Slick$Column<T>): Slick$Formatter<any>
} 

declare export interface Slick$GridOptions<T: Slick$SlickData> {

/**
 * Makes cell editors load asynchronously after a small delay. This greatly increases keyboard navigation speed.
 */
asyncEditorLoading?: boolean,

/**
 * Delay after which cell editor is loaded. Ignored unless asyncEditorLoading is true.
 */
asyncEditorLoadDelay?: number,

/**
 */
asyncPostRenderDelay?: number,

/**
 * Cell will not automatically go into edit mode when selected.
 */
autoEdit?: boolean,

/**
 */
autoHeight?: boolean,

/**
 * A CSS class to apply to flashing cells via flashCell().
 */
cellFlashingCssClass?: string,

/**
 * A CSS class to apply to cells highlighted via setHighlightedCells().
 */
cellHighlightCssClass?: string,

/**
 */
dataItemColumnValueExtractor?: any,

/**
 */
defaultColumnWidth?: number,

/**
 */
defaultFormatter?: Slick$Formatter<T>,

/**
 */
editable?: boolean,

/**
 * Not listed as a default under options in slick.grid.js
 */
editCommandHandler?: any,

/**
 * A factory object responsible to creating an editor for a given cell. Must implement getEditor(column).
 */
editorFactory?: Slick$EditorFactory,

/**
 * A Slick.EditorLock instance to use for controlling concurrent data edits.
 */
editorLock?: Slick$EditorLock<T>,

/**
 * If true, a blank row will be displayed at the bottom - typing values in that row will add a new one. Must subscribe to onAddNewRow to save values.
 */
enableAddRow?: boolean,

/**
 * If true, async post rendering will occur and asyncPostRender delegates on columns will be called.
 */
enableAsyncPostRender?: boolean,

/**
 * *WARNING*: Not contained in SlickGrid 2.1, may be deprecated
 */
enableCellRangeSelection?: any,

/**
 * Appears to enable cell virtualisation for optimised speed with large datasets
 */
enableCellNavigation?: boolean,

/**
 */
enableColumnReorder?: boolean,

/**
 * *WARNING*: Not contained in SlickGrid 2.1, may be deprecated
 */
enableRowReordering?: any,

/**
 */
enableTextSelectionOnCells?: boolean,

/**
 * @see Example: Explicit Initialization
 */
explicitInitialization?: boolean,

/**
 * Force column sizes to fit into the container (preventing horizontal scrolling). Effectively sets column width to be 1/Number of Columns which on small containers may not be desirable
 */
forceFitColumns?: boolean,

/**
 */
forceSyncScrolling?: boolean,

/**
 * A factory object responsible to creating a formatter for a given cell. Must implement getFormatter(column).
 */
formatterFactory?: Slick$FormatterFactory<T>,

/**
 * Will expand the table row divs to the full width of the container, table cell divs will remain aligned to the left
 */
fullWidthRows?: boolean,

/**
 */
headerRowHeight?: number,

/**
 */
leaveSpaceForNewRows?: boolean,

/**
 * @see Example: Multi-Column Sort
 */
multiColumnSort?: boolean,

/**
 */
multiSelect?: boolean,

/**
 */
rowHeight?: number,

/**
 */
selectedCellCssClass?: string,

/**
 */
showHeaderRow?: boolean,

/**
 * If true, the column being resized will change its width as the mouse is dragging the resize handle. If false, the column will resize after mouse drag ends.
 */
syncColumnCellResize?: boolean,

/**
 */
topPanelHeight?: number
} 

declare export interface Slick$DataProvider<T: Slick$SlickData> {

/**
 * Returns the number of data items in the set.
 */
getLength(): number,

/**
 * Returns the item at a given index.
 * @param index
 */
getItem(index: number): T,

/**
 * Returns the metadata for the item at a given index (optional).
 * @param index
 */
getItemMetadata?: (index: number) => Slick$RowMetadata<T>
} 

declare export interface Slick$SlickData {} 

declare export interface Slick$RowMetadata<T> {

/**
 * One or more (space-separated) CSS classes to be added to the entire row.
 */
cssClasses?: string,

/**
 * Whether or not any cells in the row can be set as "active".
 */
focusable?: boolean,

/**
 * Whether or not a row or any cells in it can be selected.
 */
selectable?: boolean,

/**
 * Metadata related to individual columns
 */
columns?: {

/**
 * Metadata indexed by column id
 */
[index: string]: Slick$ColumnMetadata<T>,

/**
 * Metadata indexed by column index
 */
[index: number]: Slick$ColumnMetadata<T>
}
} 

declare export interface Slick$ColumnMetadata<T: Slick$SlickData> {

/**
 * Whether or not a cell can be set as "active".
 */
focusable?: boolean,

/**
 * Whether or not a cell can be selected.
 */
selectable?: boolean,

/**
 * A custom cell formatter.
 */
formatter?: Slick$Formatter<T>,

/**
 * A custom cell editor.
 */
editor?: Slick$Editors.Editors$Editor<T>,

/**
 * Number of columns this cell will span. Can also contain "*" to indicate that the cell should span the rest of the row.
 */
colspan?: number | string
} 


/**
 * Selecting cells in SlickGrid is handled by a selection model.
 * Selection models are controllers responsible for handling user interactions and notifying subscribers of the changes in the selection. Selection is represented as an array of Slick.Range objects.
 * You can get the current selection model from the grid by calling getSelectionModel() and set a different one using setSelectionModel(selectionModel). By default, no selection model is set.
 * The grid also provides two helper methods to simplify development - getSelectedRows() and setSelectedRows(rowsArray), as well as an onSelectedRowsChanged event.
 * SlickGrid includes two pre-made selection models - Slick.CellSelectionModel and Slick.RowSelectionModel, but you can easily write a custom one.
 */
declare export class Slick$SelectionModel<T: Slick$SlickData, E>  {

/**
 * An initializer function that will be called with an instance of the grid whenever a selection model is registered with setSelectionModel. The selection model can use this to initialize its state and subscribe to grid events.
 */
init(grid: Slick$Grid<T>): void;

/**
 * A destructor function that will be called whenever a selection model is unregistered from the grid by a call to setSelectionModel with another selection model or whenever a grid with this selection model is destroyed. The selection model can use this destructor to unsubscribe from grid events and release all resources (remove DOM nodes, event listeners, etc.).
 */
destroy(): void;
onSelectedRangesChanged: Slick$Slick$Event<E>
}

declare export class Slick$Grid<T: Slick$SlickData>  {

/**
 * Create an instance of the grid.
 * @param container Container node to create the grid in. This can be a DOM Element, a jQuery node, or a jQuery selector.
 * @param data Databinding source. This can either be a regular JavaScript array or a custom object exposing getItem(index) and getLength() functions.
 * @param columns An array of column definition objects. See Column Options for a list of options that can be included on each column definition object.
 * @param options Additional options.  See Grid Options for a list of options that can be included.
 */
constructor(container: string | HTMLElement | JQuery, data: T[] | Slick$DataProvider<T>, columns: Slick$Column<T>[], options: Slick$GridOptions<T>): this;

/**
 * Initializes the grid. Called after plugins are registered. Normally, this is called by the constructor, so you don't need to call it. However, in certain cases you may need to delay the initialization until some other process has finished. In that case, set the explicitInitialization option to true and call the grid.init() manually.
 */
init(): void;

/**
 * todo: no docs
 */
destroy(): void;

/**
 * Returns an array of every data object, unless you're using DataView in which case it returns a DataView object.
 * @return
 */
getData(): any;

/**
 * Returns the databinding item at a given position.
 * @param index Item index.
 * @return
 */
getDataItem(index: number): T;

/**
 * Sets a new source for databinding and removes all rendered rows. Note that this doesn't render the new rows - you can follow it with a call to render() to do that.
 * @param newData New databinding source using a regular JavaScript array..
 * @param scrollToTop If true, the grid will reset the vertical scroll position to the top of the grid.
 */
setData(newData: T[], scrollToTop: boolean): void;

/**
 * Sets a new source for databinding and removes all rendered rows. Note that this doesn't render the new rows - you can follow it with a call to render() to do that.
 * @param newData New databinding source using a custom object exposing getItem(index) and getLength() functions.
 * @param scrollToTop If true, the grid will reset the vertical scroll position to the top of the grid.
 */
setData(newData: Slick$DataProvider<T>, scrollToTop: boolean): void;

/**
 * Returns the size of the databinding source.
 * @return
 */
getDataLength(): number;

/**
 * Returns an object containing all of the Grid options set on the grid. See a list of Grid Options here.
 * @return
 */
getOptions(): Slick$GridOptions<any>;

/**
 * Returns an array of row indices corresponding to the currently selected rows.
 * @return
 */
getSelectedRows(): number[];

/**
 * Returns the current SelectionModel. See here for more information about SelectionModels.
 * @return
 */
getSelectionModel(): Slick$SelectionModel<any, any>;

/**
 * Extends grid options with a given hash. If an there is an active edit, the grid will attempt to commit the changes and only continue if the attempt succeeds.
 * @options An object with configuration options.
 */
setOptions(options: Slick$GridOptions<T>): void;

/**
 * Accepts an array of row indices and applies the current selectedCellCssClass to the cells in the row, respecting whether cells have been flagged as selectable.
 * @param rowsArray An array of row numbers.
 */
setSelectedRows(rowsArray: number[]): void;

/**
 * Returns container's HTML node (the element passed into Grid constructor).
 */
getContainerNode(): HTMLElement;

/**
 * Unregisters a current selection model and registers a new one. See the definition of SelectionModel for more information.
 * @selectionModel A SelectionModel.
 */
setSelectionModel(selectionModel: Slick$SelectionModel<T, any>): void;

/**
 * Proportionately resizes all columns to fill available horizontal space. This does not take the cell contents into consideration.
 */
autosizeColumns(): void;

/**
 * Returns the index of a column with a given id. Since columns can be reordered by the user, this can be used to get the column definition independent of the order:
 * @param id A column id.
 * @return
 */
getColumnIndex(id: string): number;

/**
 * Returns an array of column definitions, containing the option settings for each individual column.
 * @return
 */
getColumns(): Slick$Column<T>[];

/**
 * Sets grid columns. Column headers will be recreated and all rendered rows will be removed. To rerender the grid (if necessary), call render().
 * @param columnDefinitions An array of column definitions.
 */
setColumns(columnDefinitions: Slick$Column<T>[]): void;

/**
 * Accepts a columnId string and an ascending boolean. Applies a sort glyph in either ascending or descending form to the header of the column. Note that this does not actually sort the column. It only adds the sort glyph to the header.
 * @param columnId
 * @param ascending
 */
setSortColumn(columnId: string, ascending: boolean): void;

/**
 * Accepts an array of objects in the form [ { columnId: [string], sortAsc: [boolean] }, ... ]. When called, this will apply a sort glyph in either ascending or descending form to the header of each column specified in the array. Note that this does not actually sort the column. It only adds the sort glyph to the header
 * @param cols
 */
setSortColumns(cols: {
columnId: string,
sortAsc: boolean
}[]): void;

/**
 * todo: no docs or comments available
 * @return
 */
getSortColumns(): {
columnId: string,
sortAsc: boolean
}[];

/**
 * Updates an existing column definition and a corresponding header DOM element with the new title and tooltip.
 * @param columnId Column id.
 * @param title New column name.
 * @param toolTip New column tooltip.
 */
updateColumnHeader(columnId: string, title?: string, toolTip?: string): void;

/**
 * Adds an "overlay" of CSS classes to cell DOM elements. SlickGrid can have many such overlays associated with different keys and they are frequently used by plugins. For example, SlickGrid uses this method internally to decorate selected cells with selectedCellCssClass (see options).
 * @param key A unique key you can use in calls to setCellCssStyles and removeCellCssStyles. If a hash with that key has already been set, an exception will be thrown.
 * @param hash A hash of additional cell CSS classes keyed by row number and then by column id. Multiple CSS classes can be specified and separated by space.
 * @example {
0:    {
"number_column":    "cell-bold",
"title_column":     "cell-title cell-highlighted"
},
4:    {
"percent_column":    "cell-highlighted"
}
}
 */
addCellCssStyles(key: string, hash: Slick$CellCssStylesHash): void;

/**
 * Returns true if you can click on a given cell and make it the active focus.
 * @param row A row index.
 * @param col A column index.
 * @return
 */
canCellBeActive(row: number, col: number): boolean;

/**
 * Returns true if selecting the row causes this particular cell to have the selectedCellCssClass applied to it. A cell can be selected if it exists and if it isn't on an empty / "Add New" row and if it is not marked as "unselectable" in the column definition.
 * @param row A row index.
 * @param col A column index.
 * @return
 */
canCellBeSelected(row: number, col: number): boolean;

/**
 * Attempts to switch the active cell into edit mode. Will throw an error if the cell is set to be not editable. Uses the specified editor, otherwise defaults to any default editor for that given cell.
 * @param editor A SlickGrid editor (see examples in slick.editors.js).
 */
editActiveCell(editor: Editors$Editors$Editor<T>): void;

/**
 * Flashes the cell twice by toggling the CSS class 4 times.
 * @param row A row index.
 * @param cell A column index.
 * @param speed (optional) - The milliseconds delay between the toggling calls. Defaults to 100 ms.
 */
flashCell(row: number, cell: number, speed?: number): void;

/**
 * Returns an object representing the coordinates of the currently active cell:
 * @example {
row: activeRow,
cell: activeCell
}
 * @return
 */
getActiveCell(): Slick$Cell;

/**
 * Returns the DOM element containing the currently active cell. If no cell is active, null is returned.
 * @return
 */
getActiveCellNode(): HTMLElement;

/**
 * Returns an object representing information about the active cell's position. All coordinates are absolute and take into consideration the visibility and scrolling position of all ancestors.
 * @return
 */
getActiveCellPosition(): Slick$CellPosition;

/**
 * Accepts a key name, returns the group of CSS styles defined under that name. See setCellCssStyles for more info.
 * @param key A string.
 * @return
 */
getCellCssStyles(key: string): Slick$CellCssStylesHash;

/**
 * Returns the active cell editor. If there is no actively edited cell, null is returned.
 * @return
 */
getCellEditor(): Editors$Editors$Editor<any>;

/**
 * Returns a hash containing row and cell indexes from a standard W3C/jQuery event.
 * @param e A standard W3C/jQuery event.
 * @return
 */
getCellFromEvent(e: DOMEvent): Slick$Cell;

/**
 * Returns a hash containing row and cell indexes. Coordinates are relative to the top left corner of the grid beginning with the first row (not including the column headers).
 * @param x An x coordinate.
 * @param y A y coordinate.
 * @return
 */
getCellFromPoint(x: number, y: number): Slick$Cell;

/**
 * Returns a DOM element containing a cell at a given row and cell.
 * @param row A row index.
 * @param cell A column index.
 * @return
 */
getCellNode(row: number, cell: number): HTMLElement;

/**
 * Returns an object representing information about a cell's position. All coordinates are absolute and take into consideration the visibility and scrolling position of all ancestors.
 * @param row A row index.
 * @param cell A column index.
 * @return
 */
getCellNodeBox(row: number, cell: number): Slick$CellPosition;

/**
 * Accepts a row integer and a cell integer, scrolling the view to the row where row is its row index, and cell is its cell index. Optionally accepts a forceEdit boolean which, if true, will attempt to initiate the edit dialogue for the field in the specified cell.
 * Unlike setActiveCell, this scrolls the row into the viewport and sets the keyboard focus.
 * @param row A row index.
 * @param cell A column index.
 * @param forceEdit If true, will attempt to initiate the edit dialogue for the field in the specified cell.
 * @return
 */
gotoCell(row: number, cell: number, forceEdit?: boolean): void;

/**
 * todo: no docs
 * @return
 */
getTopPanel(): HTMLElement;

/**
 * todo: no docs
 * @param visible
 */
setTopPanelVisibility(visible: boolean): void;

/**
 * todo: no docs
 * @param visible
 */
setHeaderRowVisibility(visible: boolean): void;

/**
 * todo: no docs
 * @return
 */
getHeaderRow(): HTMLElement;

/**
 * todo: no docs, return type is probably wrong -> "return $header && $header[0]"
 * @param columnId
 * @return
 */
getHeaderRowColumn(columnId: string): Slick$Column<any>;

/**
 * todo: no docs
 * @return
 */
getGridPosition(): Slick$CellPosition;

/**
 * Switches the active cell one row down skipping unselectable cells. Returns a boolean saying whether it was able to complete or not.
 * @return
 */
navigateDown(): boolean;

/**
 * Switches the active cell one cell left skipping unselectable cells. Unline navigatePrev, navigateLeft stops at the first cell of the row. Returns a boolean saying whether it was able to complete or not.
 * @return
 */
navigateLeft(): boolean;

/**
 * Tabs over active cell to the next selectable cell. Returns a boolean saying whether it was able to complete or not.
 * @return
 */
navigateNext(): boolean;

/**
 * Tabs over active cell to the previous selectable cell. Returns a boolean saying whether it was able to complete or not.
 * @return
 */
navigatePrev(): boolean;

/**
 * Switches the active cell one cell right skipping unselectable cells. Unline navigateNext, navigateRight stops at the last cell of the row. Returns a boolean saying whether it was able to complete or not.
 * @return
 */
navigateRight(): boolean;

/**
 * Switches the active cell one row up skipping unselectable cells. Returns a boolean saying whether it was able to complete or not.
 * @return
 */
navigateUp(): boolean;

/**
 * Removes an "overlay" of CSS classes from cell DOM elements. See setCellCssStyles for more.
 * @param key A string key.
 */
removeCellCssStyles(key: string): void;

/**
 * Resets active cell.
 */
resetActiveCell(): void;

/**
 * Sets an active cell.
 * @param row A row index.
 * @param cell A column index.
 */
setActiveCell(row: number, cell: number): void;

/**
 * Sets CSS classes to specific grid cells by calling removeCellCssStyles(key) followed by addCellCssStyles(key, hash). key is name for this set of styles so you can reference it later - to modify it or remove it, for example. hash is a per-row-index, per-column-name nested hash of CSS classes to apply.
 * Suppose you have a grid with columns:
 * ["login", "name", "birthday", "age", "likes_icecream", "favorite_cake"]
 * ...and you'd like to highlight the "birthday" and "age" columns for people whose birthday is today, in this case, rows at index 0 and 9. (The first and tenth row in the grid).
 * @param key A string key. Will overwrite any data already associated with this key.
 * @param hash A hash of additional cell CSS classes keyed by row number and then by column id. Multiple CSS classes can be specified and separated by space.
 */
setCellCssStyles(key: string, hash: Slick$CellCssStylesHash): void;
onScroll: Slick$Slick$Event<Slick$OnScrollEventArgs<T>>;
onSort: Slick$Slick$Event<Slick$OnSortEventArgs<T>>;
onHeaderMouseEnter: Slick$Slick$Event<Slick$OnHeaderMouseEventArgs<T>>;
onHeaderMouseLeave: Slick$Slick$Event<Slick$OnHeaderMouseEventArgs<T>>;
onHeaderContextMenu: Slick$Slick$Event<Slick$OnHeaderContextMenuEventArgs<T>>;
onHeaderClick: Slick$Slick$Event<Slick$OnHeaderClickEventArgs<T>>;
onHeaderCellRendered: Slick$Slick$Event<Slick$OnHeaderCellRenderedEventArgs<T>>;
onBeforeHeaderCellDestroy: Slick$Slick$Event<Slick$OnBeforeHeaderCellDestroyEventArgs<T>>;
onHeaderRowCellRendered: Slick$Slick$Event<Slick$OnHeaderRowCellRenderedEventArgs<T>>;
onBeforeHeaderRowCellDestroy: Slick$Slick$Event<Slick$OnBeforeHeaderRowCellDestroyEventArgs<T>>;
onMouseEnter: Slick$Slick$Event<Slick$OnMouseEnterEventArgs<T>>;
onMouseLeave: Slick$Slick$Event<Slick$OnMouseLeaveEventArgs<T>>;
onClick: Slick$Slick$Event<Slick$OnClickEventArgs<T>>;
onDblClick: Slick$Slick$Event<Slick$OnDblClickEventArgs<T>>;
onContextMenu: Slick$Slick$Event<Slick$OnContextMenuEventArgs<T>>;
onKeyDown: Slick$Slick$Event<Slick$OnKeyDownEventArgs<T>>;
onAddNewRow: Slick$Slick$Event<Slick$OnAddNewRowEventArgs<T>>;
onValidationError: Slick$Slick$Event<Slick$OnValidationErrorEventArgs<T>>;
onColumnsReordered: Slick$Slick$Event<Slick$OnColumnsReorderedEventArgs<T>>;
onColumnsResized: Slick$Slick$Event<Slick$OnColumnsResizedEventArgs<T>>;
onCellChange: Slick$Slick$Event<Slick$OnCellChangeEventArgs<T>>;
onBeforeEditCell: Slick$Slick$Event<Slick$OnBeforeEditCellEventArgs<T>>;
onBeforeCellEditorDestroy: Slick$Slick$Event<Slick$OnBeforeCellEditorDestroyEventArgs<T>>;
onBeforeDestroy: Slick$Slick$Event<Slick$OnBeforeDestroyEventArgs<T>>;
onActiveCellChanged: Slick$Slick$Event<Slick$OnActiveCellChangedEventArgs<T>>;
onActiveCellPositionChanged: Slick$Slick$Event<Slick$OnActiveCellPositionChangedEventArgs<T>>;
onDragInit: Slick$Slick$Event<Slick$OnDragInitEventArgs<T>>;
onDragStart: Slick$Slick$Event<Slick$OnDragStartEventArgs<T>>;
onDrag: Slick$Slick$Event<Slick$OnDragEventArgs<T>>;
onDragEnd: Slick$Slick$Event<Slick$OnDragEndEventArgs<T>>;
onSelectedRowsChanged: Slick$Slick$Event<Slick$OnSelectedRowsChangedEventArgs<T>>;
onCellCssStylesChanged: Slick$Slick$Event<Slick$OnCellCssStylesChangedEventArgs<T>>;
onViewportChanged: Slick$Slick$Event<Slick$OnViewportChangedEventArgs<T>>;
registerPlugin(plugin: Slick$Plugin<T>): void;
unregisterPlugin(plugin: Slick$Plugin<T>): void;
render(): void;
invalidate(): void;
invalidateRow(row: number): void;
invalidateRows(rows: number[]): void;
invalidateAllRows(): void;
updateCell(row: number, cell: number): void;
updateRow(row: number): void;
getViewport(viewportTop?: number, viewportLeft?: number): Slick$Viewport;
getRenderedRange(viewportTop?: number, viewportLeft?: number): Slick$Viewport;
resizeCanvas(): void;
updateRowCount(): void;
scrollRowIntoView(row: number, doPaging: boolean): void;
scrollRowToTop(row: number): void;
scrollCellIntoView(row: number, cell: number, doPaging: boolean): void;
getCanvasNode(): HTMLCanvasElement;
focus(): void;
getEditorLock(): Slick$EditorLock<any>;
getEditController(): {
commitCurrentEdit(): boolean,
cancelCurrentEdit(): boolean
}
}

declare export interface Slick$GridEventArgs<T: Slick$SlickData> {
grid: Slick$Grid<T>
} 

declare export type Slick$OnCellCssStylesChangedEventArgs<T: Slick$SlickData> = {
key: string,
hash: Slick$CellCssStylesHash
} & Slick$GridEventArgs<T>


declare export type Slick$OnSelectedRowsChangedEventArgs<T: Slick$SlickData> = {
rows: number[]
} & Slick$GridEventArgs<T>


declare export type Slick$OnDragEndEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export type Slick$OnDragEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export type Slick$OnDragStartEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export type Slick$OnDragInitEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export type Slick$OnActiveCellPositionChangedEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export type Slick$OnActiveCellChangedEventArgs<T: Slick$SlickData> = {
row: number,
cell: number
} & Slick$GridEventArgs<T>


declare export type Slick$OnBeforeDestroyEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export type Slick$OnBeforeCellEditorDestroyEventArgs<T: Slick$SlickData> = {
editor: Editors$Editors$Editor<T>
} & Slick$GridEventArgs<T>


declare export type Slick$OnBeforeEditCellEventArgs<T: Slick$SlickData> = {
row: number,
cell: number,
item: T,
column: Slick$Column<T>
} & Slick$GridEventArgs<T>


declare export type Slick$OnCellChangeEventArgs<T: Slick$SlickData> = {
row: number,
cell: number,
item: T
} & Slick$GridEventArgs<T>


declare export type Slick$OnColumnsResizedEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export type Slick$OnColumnsReorderedEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export type Slick$OnValidationErrorEventArgs<T: Slick$SlickData> = {
editor: Editors$Editors$Editor<T>,
cellNode: HTMLElement,
validationResults: Slick$ValidateResults,
row: number,
cell: number,
column: Slick$Column<T>
} & Slick$GridEventArgs<T>


declare export type Slick$OnAddNewRowEventArgs<T: Slick$SlickData> = {
item: T,
column: Slick$Column<T>
} & Slick$GridEventArgs<T>


declare export type Slick$OnKeyDownEventArgs<T: Slick$SlickData> = {
row: number,
cell: number
} & Slick$GridEventArgs<T>


declare export type Slick$OnContextMenuEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export type Slick$OnDblClickEventArgs<T: Slick$SlickData> = {
row: number,
cell: number
} & Slick$GridEventArgs<T>


declare export type Slick$OnClickEventArgs<T: Slick$SlickData> = {
row: number,
cell: number
} & Slick$GridEventArgs<T>


declare export type Slick$OnMouseLeaveEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export type Slick$OnMouseEnterEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export type Slick$OnBeforeHeaderRowCellDestroyEventArgs<T: Slick$SlickData> = {
node: HTMLElement,
column: Slick$Column<T>
} & Slick$GridEventArgs<T>


declare export type Slick$OnHeaderRowCellRenderedEventArgs<T: Slick$SlickData> = {
node: HTMLElement,
column: Slick$Column<T>
} & Slick$GridEventArgs<T>


declare export type Slick$OnBeforeHeaderCellDestroyEventArgs<T: Slick$SlickData> = {
node: HTMLElement,
column: Slick$Column<T>
} & Slick$GridEventArgs<T>


declare export type Slick$OnHeaderCellRenderedEventArgs<T: Slick$SlickData> = {
node: HTMLElement,
column: Slick$Column<T>
} & Slick$GridEventArgs<T>


declare export type Slick$OnHeaderClickEventArgs<T: Slick$SlickData> = {
column: Slick$Column<T>
} & Slick$GridEventArgs<T>


declare export type Slick$OnHeaderContextMenuEventArgs<T: Slick$SlickData> = {
column: Slick$Column<T>
} & Slick$GridEventArgs<T>


declare export type Slick$OnHeaderMouseEventArgs<T: Slick$SlickData> = {
column: Slick$Column<T>
} & Slick$GridEventArgs<T>


declare export type Slick$OnSortEventArgs<T: Slick$SlickData> = {
multiColumnSort: boolean,
sortCol?: Slick$Column<T>,
sortAsc: boolean,
sortCols?: Slick$SortColumn<T>[]
} & Slick$GridEventArgs<T>


declare export type Slick$OnScrollEventArgs<T: Slick$SlickData> = {
scrollLeft: number,
scrollTop: number
} & Slick$GridEventArgs<T>


declare export type Slick$OnViewportChangedEventArgs<T: Slick$SlickData> = {} & Slick$GridEventArgs<T>


declare export interface Slick$SortColumn<T: Slick$SlickData> {
sortCol: Slick$Column<T>,
sortAsc: boolean
} 

declare export interface Slick$Cell {
row: number,
cell: number
} 

declare export interface Slick$Position {
top: number,
left: number
} 

declare export type Slick$CellPosition = {
bottom: number,
height: number,
right: number,
visible: boolean,
width: number
} & Slick$Position


declare export interface Slick$CellCssStylesHash {
[index: number]: {
[id: string]: string
}
} 

declare export interface Slick$Viewport {
top: number,
bottom: number,
leftPx: number,
rightPx: number
} 

declare export interface Slick$ValidateResults {
valid: boolean,
msg: string
} 

declare export interface Editors$EditorOptions<T: Slick$Slick$SlickData> {
column: Slick$Column<T>,
container: HTMLElement,
grid: Slick$Grid<T>,
item?: T,
commitChanges?: () => void,
cancelChanges?: () => void,
gridPosition?: Slick$CellPosition,
position?: Slick$CellPosition
} 

declare export class Editors$Editor<T: Slick$Slick$SlickData>  {
constructor(args: Editors$EditorOptions<T>): this;
init(): void;
destroy(): void;
focus(): void;
loadValue(item: T): void;
applyValue(item: T, state: string): void;
isValueChanged(): boolean;
serializeValue(): any;
validate(): Slick$ValidateResults
}

declare export class Editors$Text<T: Slick$Slick$SlickData> mixins Editors$Editor<T> {
constructor(args: Editors$EditorOptions<T>): this;
getValue(): string;
setValue(val: string): void;
serializeValue(): string
}

declare export class Editors$Integer<T: Slick$Slick$SlickData> mixins Editors$Editor<T> {
constructor(args: Editors$EditorOptions<T>): this;
serializeValue(): number
}

declare export class Editors$Date<T: Slick$Slick$SlickData> mixins Editors$Editor<T> {
constructor(args: Editors$EditorOptions<T>): this;
show(): void;
hide(): void;
position(position: Slick$Position): void;
serializeValue(): string
}

declare export class Editors$YesNoSelect<T: Slick$Slick$SlickData> mixins Editors$Editor<T> {
constructor(args: Editors$EditorOptions<T>): this;
serializeValue(): boolean
}

declare export class Editors$Checkbox<T: Slick$Slick$SlickData> mixins Editors$Editor<T> {
constructor(args: Editors$EditorOptions<T>): this;
serializeValue(): boolean
}

declare export class Editors$PercentComplete<T: Slick$Slick$SlickData> mixins Editors$Editor<T> {
constructor(args: Editors$EditorOptions<T>): this;
serializeValue(): number
}

declare export class Editors$LongText<T: Slick$Slick$SlickData> mixins Editors$Editor<T> {
constructor(args: Editors$EditorOptions<T>): this;
handleKeyDown(e: DOMEvent): void;
save(): void;
cancel(): void;
hide(): void;
show(): void;
position(position: Slick$Position): void;
serializeValue(): string
}

declare export interface Slick$Formatter<T: Slick$SlickData> {
(row: number, cell: number, value: any, columnDef: Slick$Column<T>, dataContext: Slick$SlickData): string
} 

declare module 'Formatters' {
        declare var Editors$PercentComplete: Slick$Formatter<Slick$Slick$SlickData>;
	declare var PercentCompleteBar: Slick$Formatter<Slick$Slick$SlickData>;
	declare var YesNo: Slick$Formatter<Slick$Slick$SlickData>;
	declare var Checkmark: Slick$Formatter<Slick$Slick$SlickData>;
    }


declare module 'Data' {
        declare export interface DataViewOptions<T: Slick$Slick$SlickData> {
groupItemMetadataProvider?: GroupItemMetadataProvider<T>,
inlineFilters?: boolean
} 
	
/**
 * Item -> Data by index
 * Row -> Data by row
 */
declare export class DataView<T: Slick$Slick$SlickData> mixins Slick$DataProvider<T> {
constructor(options?: DataViewOptions<T>): this;
beginUpdate(): void;
endUpdate(): void;
setPagingOptions(args: PagingOptions): void;
getPagingInfo(): PagingOptions;
getItems(): T[];
setItems(data: T[], objectIdProperty?: string): void;
setFilter(filterFn: (item: T, args: any) => boolean): void;
sort(comparer: Function, ascending: boolean): void;
fastSort(field: string, ascending: boolean): void;
fastSort(field: Function, ascending: boolean): void;
reSort(): void;
setGrouping(groupingInfos: GroupingOptions<T> | GroupingOptions<T>[]): void;
getGrouping(): GroupingOptions<T>[];

/**
 * @deprecated
 */
groupBy(valueGetter: any, valueFormatter: any, sortComparer: any): void;

/**
 * @deprecated
 */
setAggregators(groupAggregators: any, includeCollapsed: any): void;

/**
 * @param level Optional level to collapse.  If not specified, applies to all levels.
 */
collapseAllGroups(level?: number): void;

/**
 * @param level Optional level to collapse.  If not specified, applies to all levels.
 */
expandAllGroups(level?: number): void;

/**
 * @param varArgs Either a Slick.Group's "groupingKey" property, or a
variable argument list of grouping values denoting a unique path to the row.  For
example, calling collapseGroup('high', '10%') will collapse the '10%' subgroup of
the 'high' setGrouping.
 */
collapseGroup(...varArgs: string[]): void;

/**
 * @param varArgs Either a Slick.Group's "groupingKey" property, or a
variable argument list of grouping values denoting a unique path to the row.  For
example, calling expandGroup('high', '10%') will expand the '10%' subgroup of
the 'high' setGrouping.
 */
expandGroup(...varArgs: string[]): void;
getGroups(): Slick$Group<T>[];
getIdxById(id: string): number;
getRowById(id: string): number;
getItemById(id: any): T;
getItemByIdx(idx: number): T;
mapRowsToIds(rowArray: number[]): string[];
setRefreshHints(hints: RefreshHints): void;
setFilterArgs(args: any): void;
refresh(): void;
updateItem(id: string, item: T): void;
insertItem(insertBefore: number, item: T): void;
addItem(item: T): void;
deleteItem(id: string): void;
syncGridSelection(grid: Slick$Grid<T>, preserveHidden: boolean): void;
syncGridCellCssStyles(grid: Slick$Grid<T>, key: string): void;
getLength(): number;
getItem(index: number): T;
getItemMetadata(index: number): Slick$RowMetadata<T>;
onRowCountChanged: Slick$Slick$Event<OnRowCountChangedEventData>;
onRowsChanged: Slick$Slick$Event<OnRowsChangedEventData>;
onPagingInfoChanged: Slick$Slick$Event<OnPagingInfoChangedEventData>
}
	declare export interface GroupingOptions<T> {
getter?: ((item?: T) => any) | string,
formatter?: (item?: T) => string,
comparer?: (a: Slick$Group<T>, b: Slick$Group<T>) => number,
predefinedValues?: any[],
aggregators?: Aggregators.Aggregator<T>[],
aggregateEmpty?: boolean,
aggregateCollapsed?: boolean,
aggregateChildGroups?: boolean,
collapsed?: boolean,
displayTotalsRow?: boolean
} 
	declare export interface PagingOptions {
pageSize?: number,
pageNum?: number,
totalRows?: number,
totalPages?: number
} 
	declare export interface RefreshHints {
isFilterNarrowing?: boolean,
isFilterExpanding?: boolean,
isFilterUnchanged?: boolean,
ignoreDiffsBefore?: boolean,
ignoreDiffsAfter?: boolean
} 
	declare export interface OnRowCountChangedEventData {} 
	declare export interface OnRowsChangedEventData {
rows: number[]
} 
	declare export type OnPagingInfoChangedEventData = {} & PagingOptions

	declare module 'Aggregators' {
        declare export class Aggregator<T: Slick$Slick$SlickData>  {
field: string;
init(): void;
accumulate(item: T): void;
storeResult(groupTotals: Slick$GroupTotals<T>): void
}
	declare export class Avg<T> mixins Aggregator<T> {}
	declare export class Min<T> mixins Aggregator<T> {}
	declare export class Max<T> mixins Aggregator<T> {}
	declare export class Sum<T> mixins Aggregator<T> {}
    }

	
/**
 * *
 * Provides item metadata for group (Slick.Group) and totals (Slick.Totals) rows produced by the DataView.
 * This metadata overrides the default behavior and formatting of those rows so that they appear and function
 * correctly when processed by the grid.
 * 
 * This class also acts as a grid plugin providing event handlers to expand & collapse groups.
 * If "grid.registerPlugin(...)" is not called, expand & collapse will not work.
 * @class GroupItemMetadataProvider
 * @module Data
 * @namespace Slick.Data
 * @constructor
 * @param options
 */
declare export class GroupItemMetadataProvider<T: Slick$Slick$SlickData>  {
init(): void;
destroy(): void;
getGroupRowMetadata(item?: Slick$Group<T>): Slick$RowMetadata<T>;
getTotalsRowMetadata(item?: Slick$GroupTotals<T>): Slick$RowMetadata<T>
}
	declare export interface GroupItemMetadataProviderOptions {
groupCssClass?: string,
groupTitleCssClass?: string,
totalsCssClass?: string,
groupFocusable?: boolean,
totalsFocusable?: boolean,
toggleCssClass?: string,
toggleExpandedCssCass?: string,
toggleCollapsedCssClass?: string,
enableExpandCollapse?: boolean
} 
    }


declare export class Slick$Plugin<T: Slick$Slick$SlickData>  {
constructor(options?: Slick$PluginOptions): this;
init(grid: Slick$Grid<T>): void;
destroy(): void
}

declare export interface Slick$PluginOptions {} 
    }
