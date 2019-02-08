export interface ngGrid$IDomAccessProvider {
  previousColumn: ngGrid$IColumn;
  grid: ngGrid$IGridInstance;
  changeUserSelect(elm: angular.IAugmentedJQuery, value: string): void;
  focusCellElement($scope: ngGrid$IGridScope, index: number): void;
  selectionHandlers(
    $scope: ngGrid$IGridScope,
    elm: angular.IAugmentedJQuery
  ): void;
}

export interface ngGrid$IStyleProviderStatic {
  new(
    $scope: ngGrid$IGridScope,
    grid: ngGrid$IGridInstance
  ): ngGrid$IStyleProvider;
}

export interface ngGrid$IStyleProvider {}

export interface ngGrid$ISearchProviderStatic {
  new(
    $scope: ngGrid$IGridScope,
    grid: ngGrid$IGridInstance,
    $filter: angular.IFilterService
  ): ngGrid$ISearchProvider;
}

export interface ngGrid$ISearchProvider {
  fieldMap: any;
  extFilter: boolean;
  evalFilter(): void;
}

export interface ngGrid$ISelectionProviderStatic {
  new(
    grid: ngGrid$IGridInstance,
    $scope: ngGrid$IGridScope,
    $parse: angular.IParseService
  ): ngGrid$ISelectionProvider;
}

export interface ngGrid$ISelectionProvider {
  multi: boolean;
  selectedItems: any[];
  selectedIndex: number;
  lastClickedRow: any;
  ignoreSelectedItemChanges: boolean;
  pKeyParser: angular.ICompiledExpression;
  ChangeSelection(rowItem: any, event: any): void;
  getSelection(entity: any): number;
  getSelectionIndex(entity: any): number;
  setSelection(rowItem: ngGrid$IRow, isSelected: boolean): void;
  toggleSelectAll(
    checkAll: boolean,
    bypass: boolean,
    selectFiltered: boolean
  ): void;
}

export interface ngGrid$IEventProviderStatic {
  new(
    grid: ngGrid$IGridInstance,
    $scope: ngGrid$IGridScope,
    domUtilityService: ngGrid$service.IDomUtilityService,
    $timeout: angular.ITimeoutService
  ): ngGrid$IEventProvider;
}

export interface ngGrid$IEventProvider {
  colToMove: ngGrid$IColumn;
  groupToMove: any;
  assignEvents(): void;
  assignGridEventHandlers(): void;
  dragStart(event: any): void;
  dragOver(event: any): void;
  setDraggables(): void;
  onGroupMouseDown(event: any): void;
  onGroupDrop(event: any): void;
  onHeaderMouseDown(event: any): void;
  onHeaderDrop(event: any): void;
}

export interface ngGrid$IAggregateStatic {
  new(
    aggEntity: any,
    rowFactory: ngGrid$IRowFactory,
    rowHeight: number,
    groupInitState: boolean
  ): ngGrid$IAggregate;
}

export interface ngGrid$IAggregate {
  rowIndex: number;
  offsetTop: number;
  entity: any;
  label: string;
  field: string;
  depth: number;
  parent: any;
  children: any[];
  aggChildren: any[];
  aggIndex: number;
  collapsed: boolean;
  groupInitState: boolean;
  rowFactory: ngGrid$IRowFactory;
  rowHeight: number;
  isAggRow: boolean;
  offsetLeft: number;
  aggLabelFilter: any;
}

export interface ngGrid$IRowConfig {
  enableCellSelection: boolean;
  enableRowSelection: boolean;
  jqueryUITheme: boolean;
  rowClasses: string[];
  rowHeight: number;
  selectWithCheckboxOnly: boolean;
  selectedItems: any[];
  afterSelectionChangeCallback(): void;
  beforeSelectionChangeCallback(): void;
}

export interface ngGrid$IRenderedRangeStatic {
  new(top: number, bottom: number): ngGrid$IRenderedRange;
}

export interface ngGrid$IRenderedRange {
  bottomRow: number;
  topRow: number;
}

export interface ngGrid$IRowFactory {
  aggCache: any;
  dataChanged: boolean;
  groupedData: any;
  numberOfAggregates: number;
  parentCache: any[];
  parsedData: any[];
  renderedRange: ngGrid$IRenderedRange;
  rowConfig: ngGrid$IRowConfig;
  rowHeight: number;
  selectionProvider: ngGrid$ISelectionProvider;
  UpdateViewableRange(newRange: ngGrid$IRenderedRange): void;
  buildAggregateRow(aggEntity: any, rowIndex: number): ngGrid$IAggregate;
  buildEntityRow(entity: any, rowIndex: number): ngGrid$IRow;
  filteredRowsChanged(): void;
  fixRowCache(): void;
  getGrouping(groups: any): void;
  parseGroupData(groupData: any): void;
  renderedChange(): void;
  renderedChangeNoGroups(): void;
}

export interface ngGrid$IDimensionStatic {
  new(options: any): ngGrid$IDimension;
}

export interface ngGrid$IDimension {
  outerHeight?: number;
  outerWidth?: number;
  autoFitHeight?: boolean;
}

export interface ngGrid$IElementDimension {
  rootMaxH?: number;
  rootMaxW?: number;
  rowIndexCellW?: number;
  rowSelectedCellW?: number;
  scrollH?: number;
  scrollW?: number;
}

export interface ngGrid$IRowStatic {
  new(
    entity: any,
    config: ngGrid$IRowConfig,
    selectionProvider: ngGrid$ISelectionProvider,
    rowIndex: number,
    $utils: any
  ): ngGrid$IRow;
}

export interface ngGrid$IRow {
  entity: any;
  config: ngGrid$IRowConfig;
  selectionProvider: ngGrid$ISelectionProvider;
  rowIndex: number;
  utils: any;
  selected: boolean;
  cursor: string;
  offsetTop: number;
  rowDisplayIndex: number;
  afterSelectionChange(): void;
  beforeSelectionChange(): void;
  setSelection(isSelected: boolean): void;
  continueSelection(event: any): void;
  ensureEntity(expected: any): void;
  toggleSelected(event: any): boolean;
  alternatingRowClass(): void;
  getProperty(path: string): any;
  copy(): ngGrid$IRow;
  setVars(fromRow: ngGrid$IRow): void;
}

export interface ngGrid$IColumnStatic {
  new(
    config: ngGrid$IGridOptions,
    $scope: ngGrid$IGridScope,
    grid: ngGrid$IGridInstance,
    domUtilityService: ngGrid$service.IDomUtilityService,
    $templateCache: angular.ITemplateCacheService,
    $utils: any
  ): ngGrid$IColumn;
}

export interface ngGrid$IColumn {
  colDef: ngGrid$IColumnDef;
  width: number;
  groupIndex: number;
  isGroupedBy: boolean;
  minWidth: number;
  maxWidth: number;
  enableCellEdit: boolean;
  cellEditableCondition: any;
  headerRowHeight: number;
  displayName: string;
  index: number;
  isAggCol: boolean;
  cellClass: string;
  sortPriority: number;
  cellFilter: any;
  field: string;
  aggLabelFilter: any;
  visible: boolean;
  sortable: boolean;
  resizable: boolean;
  pinnable: boolean;
  pinned: boolean;
  originalIndex: number;
  groupable: boolean;
  sortDirection: string;
  sortingAlgorithm: Function;
  headerClass: string;
  cursor: string;
  headerCellTemplate: string;
  cellTemplate: string;
  groupedByClass(): string;
  toggleVisible(): void;
  showSortButtonUp(): boolean;
  showSortButtonDown(): boolean;
  noSortVisible(): boolean;
  sort(event: any): boolean;
  gripClick(): any;
  gripOnMouseDown(event: any): any;
  onMouseMove(event: any): void;
  gripOnMouseUp(event: any): void;
  copy(): ngGrid$IColumn;
  setVars(fromCol: ngGrid$IColumn): void;
}

export type ngGrid$IGridScope = {
  elementsNeedMeasuring: boolean,
  columns: any[],
  renderedRows: any[],
  renderedColumns: any[],
  headerRow: any,
  rowHeight: number,
  jqueryUITheme: any,
  showSelectionCheckbox: boolean,
  enableCellSelection: boolean,
  enableCellEditOnFocus: boolean,
  footer: ngGrid$IFooter,
  selectedItems: any[],
  multiSelect: boolean,
  showFooter: boolean,
  footerRowHeight: number,
  showColumnMenu: boolean,
  forceSyncScrolling: boolean,
  showMenu: boolean,
  configGroups: any[],
  gridId: string,
  enablePaging: boolean,
  pagingOptions: ngGrid$IPagingOptions,
  i18n: any,
  selectionProvider: ngGrid$ISelectionProvider,
  adjustScrollLeft(scrollLeft: number): void,
  adjustScrollTop(scrollTop: number, force: boolean): void,
  toggleShowMenu(): void,
  toggleSelectAll(): void,
  totalFilteredItemsLength(): number,
  showGroupPanel(): any,
  topPanelHeight(): number,
  viewportDimHeight(): number,
  groupBy(col: ngGrid$IColumn): void,
  removeGroup(index: number): void,
  togglePin(col: ngGrid$IColumn): void,
  totalRowWidth(): number,
  headerScrollerDim(): any
} & angular.IScope;

export interface ngGrid$IGridInstance {
  $canvas: angular.IAugmentedJQuery;
  $viewport: angular.IAugmentedJQuery;
  $groupPanel: angular.IAugmentedJQuery;
  $footerPanel: angular.IAugmentedJQuery;
  $headerScroller: angular.IAugmentedJQuery;
  $headerContainer: angular.IAugmentedJQuery;
  $headers: angular.IAugmentedJQuery;
  $topPanel: angular.IAugmentedJQuery;
  $root: angular.IAugmentedJQuery;
  config: ngGrid$IGridOptions;
  data: any;
  elementDims: ngGrid$IElementDimension;
  eventProvider: ngGrid$IEventProvider;
  filteredRows: ngGrid$IRow[];
  footerController: any;
  gridId: string;
  lastSortedColumns: ngGrid$IColumn[];
  lateBindColumns: boolean;
  maxCanvasHt: number;
  prevScrollIndex: number;
  prevScrollTop: number;
  rootDim: ngGrid$IDimension;
  rowCache: ngGrid$IRow[];
  rowFactory: ngGrid$IRowFactory;
  rowMap: ngGrid$IRow[];
  searchProvider: ngGrid$ISearchProvider;
  styleProvider: ngGrid$IStyleProvider;
  buildColumnDefsFromData(): void;
  buildColumns(): void;
  calcMaxCanvasHeight(): void;
  clearSortingData(): void;
  configureColumnWidths(): void;
  fixColumnIndexes(): void;
  fixGroupIndexes(): void;
  getTemplate(key: string): angular.IPromise<any>;
  init(): angular.IPromise<any>;
  initTemplates(): angular.IPromise<any>;
  minRowsToRender(): void;
  refreshDomSizes(): void;
  resizeOnData(col: ngGrid$IColumn): void;
  setRenderedRows(newRows: ngGrid$IRow[]): void;
  sortActual(): void;
  sortColumnsInit(): void;
  sortData(col: ngGrid$IColumn, event: any): void;
}

export interface ngGrid$IFooterStatic {
  new($scope: ngGrid$IGridScope, grid: ngGrid$IGridInstance): ngGrid$IFooter;
}

export interface ngGrid$IFooter {}

export interface ngGrid$IGridOptions {
  /**
   * Define an aggregate template to customize the rows when grouped. See github wiki for more details.
   */
  aggregateTemplate?: string;

  /**
   * Callback for when you want to validate something after selection.
   */
  afterSelectionChange?: (rowItem?: ngGrid$IRow, event?: any) => void;

  /**
   * Callback if you want to inspect something before selection,
   * return false if you want to cancel the selection. return true otherwise.
   * If you need to wait for an async call to proceed with selection you can
   * use rowItem.changeSelection(event) method after returning false initially.
   * Note: when shift+ Selecting multiple items in the grid this will only get called
   * once and the rowItem will be an array of items that are queued to be selected.
   */
  beforeSelectionChange?: (rowItem?: ngGrid$IRow, event?: any) => boolean;

  /**
   * checkbox templates.
   */
  checkboxCellTemplate?: string;

  /**
   * checkbox templates.
   */
  checkboxHeaderTemplate?: string;

  /**
   * definitions of columns as an array [], if not defined columns are auto-generated. See github wiki for more details.
   */
  columnDefs?: ngGrid$IColumnDef[];

  /**
   * Data being displayed in the grid. This can be either a string of object ID or object reference.
   * Using string is preferred, as this turns on change tracking in ng-grid
   */
  data?: any;

  /**
   * Data updated callback, fires every time the data is modified from outside the grid.
   */
  dataUpdated?: Function;

  /**
   * Enables cell editing.
   */
  enableCellEdit?: boolean;

  /**
   * Enables cell selection.
   */
  enableCellSelection?: boolean;

  /**
   * Enable or disable resizing of columns
   */
  enableColumnResize?: boolean;

  /**
   * Enable or disable reordering of columns
   */
  enableColumnReordering?: boolean;

  /**
   * Enable or disable HEAVY column virtualization. This turns off selection checkboxes and column pinning and is designed for spreadsheet-like data.
   */
  enableColumnHeavyVirt?: boolean;

  /**
   * Enables the server-side paging feature
   */
  enablePaging?: boolean;

  /**
   * Enable column pinning
   */
  enablePinning?: boolean;

  /**
   * Enable drag and drop row reordering. Only works in HTML5 compliant browsers.
   */
  enableRowReordering?: boolean;

  /**
   * To be able to have selectable rows in grid.
   */
  enableRowSelection?: boolean;

  /**
   * Enables or disables sorting in grid.
   */
  enableSorting?: boolean;

  /**
   * string list of properties to exclude when auto-generating columns.
   */
  excludeProperties?: any;

  /**
   * filterOptions -
   * filterText: The text bound to the built-in search box.
   * useExternalFilter: Bypass internal filtering if you want to roll your own filtering mechanism but want to use builtin search box.
   */
  filterOptions?: ngGrid$IFilterOptions;

  /**
   * Defining the height of the footer in pixels.
   */
  footerRowHeight?: number;

  /**
   * Initial fields to group data by. Array of field names, not displayName.
   */
  groups?: string[];

  /**
   * The height of the header row in pixels.
   */
  headerRowHeight?: number;

  /**
   * Define a header row template for further customization. See github wiki for more details.
   */
  headerRowTemplate?: string;

  /**
   * Enables the use of jquery UI reaggable/droppable plugin. requires jqueryUI to work if enabled.
   * Useful if you want drag + drop but your users insist on crappy browsers.
   */
  jqueryUIDraggable?: boolean;

  /**
   * Enable the use jqueryUIThemes
   */
  jqueryUITheme?: boolean;

  /**
   * Prevent unselections when in single selection mode.
   */
  keepLastSelected?: boolean;

  /**
   * Maintains the column widths while resizing.
   * Defaults to true when using *'s or undefined widths. Can be ovverriden by setting to false.
   */
  maintainColumnRatios?: boolean;

  /**
   * Set this to false if you only want one item selected at a time
   */
  multiSelect?: boolean;

  /**
   * pagingOptions -
   */
  pagingOptions?: ngGrid$IPagingOptions;

  /**
   * Array of plugin functions to register in ng-grid
   */
  pinSelectionCheckbox?: boolean;

  /**
   * Array of plugin functions to register in ng-grid
   */
  plugins?: any[];

  /**
   * Row height of rows in grid.
   */
  rowHeight?: number;

  /**
   * Define a row template to customize output. See github wiki for more details.
   */
  rowTemplate?: string;

  /**
   * all of the items selected in the grid. In single select mode there will only be one item in the array.
   */
  selectedItems?: any[];

  /**
   * Select deselect an item by index.
   */
  selectItem?: (idx: number, state: boolean) => any;

  /**
   * Disable row selections by clicking on the row and only when the checkbox is clicked.
   */
  selectWithCheckboxOnly?: boolean;

  /**
   * Enables menu to choose which columns to display and group by.
   * If both showColumnMenu and showFilter are false the menu button will not display.
   */
  showColumnMenu?: boolean;

  /**
   * Enables display of the filterbox in the column menu.
   * If both showColumnMenu and showFilter are false the menu button will not display.
   */
  showFilter?: boolean;

  /**
   * Show or hide the footer alltogether the footer is enabled by default
   */
  showFooter?: boolean;

  /**
   * Show the dropzone for drag and drop grouping
   */
  showGroupPanel?: boolean;

  /**
   * Row selection check boxes appear as the first column.
   */
  showSelectionCheckbox?: boolean;

  /**
   * Define a sortInfo object to specify a default sorting state.
   * You can also observe this variable to utilize server-side sorting (see useExternalSorting).
   * Syntax is sortinfo: { fields: ['fieldName1',' fieldName2'], direction: 'ASC'/'asc' || 'desc'/'DESC'}
   */
  sortInfo?: any;

  /**
   * Set the tab index of the Vieport.
   */
  tabIndex?: number;

  /**
   * Prevents the internal sorting from executing.
   * The sortInfo object will be updated with the sorting information so you can handle sorting (see sortInfo)
   */
  useExternalSorting?: boolean;

  /**
   * i18n language support. choose from the installed or included languages, en, fr, sp, etc...
   */
  i18n?: string;

  /**
   * the threshold in rows to force virtualization on
   */
  virtualizationThreshold?: number;

  /**
   * Enables or disables text highlighting in grid by adding the "unselectable" class (See CSS file)
   */
  enableHighlighting?: boolean;
}

export interface ngGrid$IColumnDef {
  /**
   * This can be an absolute numberor it can also be defined in percentages (20%, 30%),
   * in weighted *s, or "auto" (which sizes the column based on data length)
   * (much like WPF/Silverlight)/ note: "auto" only works in single page apps currently because the re-size
   * happens on "document.ready
   */
  width?: any;

  /**
   * The minum width the column is allowed to be. See width for the different options
   */
  minWidth?: any;

  /**
   * Set the default visiblity of the column
   */
  visible?: boolean;

  /**
   * Can also be a property path on your data model. "foo.bar.myField", "Name.First", etc..
   */
  field?: string;

  /**
   * What to display in the column header
   */
  displayName?: string;

  /**
   * Restrict or allow the column to be sorted
   */
  sortable?: boolean;

  /**
   * Restrict or allow the column to be resized
   */
  resizable?: boolean;

  /**
   * Allows the column to be grouped with drag and drop, but has no effect on gridOptions.groups
   */
  groupable?: boolean;

  /**
   * Allows the column to be pinned when enablePinning is set to true
   */
  pinnable?: boolean;

  /**
   * The template to use while editing
   */
  editableCellTemplate?: string;

  /**
   * Allows the cell to use an edit template when focused (grid option enableCellSelection must be enabled)
   */
  enableCellEdit?: boolean;

  /**
   * Controls when to use the edit template on per-row basis using an angular expression (enableCellEdit must also be true for editing)
   */
  cellEditableCondition?: string;

  /**
   * The funtion to use when filtering values in this column
   */
  sortFn?: (a: any, b: any) => number;

  /**
   * Html template used to render the cell
   */
  cellTemplate?: string;

  /**
   * User defined CSS class name
   */
  cellClass?: string;

  /**
   * User defined CSS class name for the header cell
   */
  headerClass?: string;

  /**
   * Html template used to render the header cell
   */
  headerCellTemplate?: string;

  /**
   * string name for filter to use on the cell ('currency', 'date', etc..)
   */
  cellFilter?: string;

  /**
   * String name for filter to use on the aggregate label ('currency', 'date', etc..) defaults to cellFilter if not set.
   */
  aggLabelFilter?: string;
  pinned?: boolean;
}

export interface ngGrid$IFilterOptions {
  filterText?: string;
  useExternalFilter?: boolean;
}

export interface ngGrid$IPagingOptions {
  /**
   * pageSizes: list of available page sizes.
   */
  pageSizes?: number[];

  /**
   * pageSize: currently selected page size.
   */
  pageSize?: number;

  /**
   * totalServerItems: Total items are on the server.
   */
  totalServerItems?: number;

  /**
   * currentPage: the uhm... current page.
   */
  currentPage?: number;
}

export interface ngGrid$IPlugin {
  init(
    childScope: ngGrid$IGridScope,
    gridInstance: ngGrid$IGridInstance,
    services: any
  ): void;
}

declare module "service" {
  declare export interface IDomUtilityService {
    eventStorage: any;
    numberOfGrids: number;
    immediate: number;
    AssignGridContainers(
      $scope: ngGrid$IGridScope,
      rootel: angular.IAugmentedJQuery,
      grid: ngGrid$IGridInstance
    ): void;
    getRealWidth(obj: ngGrid$IDimension): number;
    UpdateGridLayout(
      $scope: ngGrid$IGridScope,
      grid: ngGrid$IGridInstance
    ): void;
    setStyleText(grid: ngGrid$IGridInstance, css: string): void;
    BuildStyles(
      $scope: ngGrid$IGridScope,
      grid: ngGrid$IGridInstance,
      digest: boolean
    ): void;
    setColLeft(
      col: ngGrid$IColumn,
      colLeft: number,
      grid: ngGrid$IGridInstance
    ): void;
    RebuildGrid($scope: ngGrid$IGridScope, grid: ngGrid$IGridInstance): void;
    digest($scope: ngGrid$IGridScope): void;
    ScrollH: number;
    ScrollW: number;
    LetterW: number;
  }
  declare export interface ISortInfo {
    fields: string[];
  }
  declare export interface ISortService {
    colSortFnCache: any;
    isCustomSort: boolean;
    isSorting: boolean;
    guessSortFn(item: any): (a: any, b: any) => number;
    basicSort(a: any, b: any): number;
    sortNumber(a: number, b: number): number;
    sortNumberStr(a: string, b: string): number;
    sortAlpha(a: string, b: string): number;
    sortDate(a: Date, b: Date): number;
    sortBool(a: boolean, b: boolean): number;
    sortData(sortInfo: ISortInfo, data: any): void;
    Sort(sortInfo: ISortInfo, data: any): void;
    getSortFn(col: ngGrid$IColumn, data: any): (a: any, b: any) => number;
  }
  declare export interface IUtilityService {
    visualLength(node: any): number;
    forIn(obj: any, action: (value: any, property: string) => {}): void;
    evalProperty(entity: any, path: string): any;
    endsWith(str: string, suffix: string): boolean;
    isNullOrUndefined(obj: any): boolean;
    getElementsByClassName(cl: string): any[];
    newId(): string;
    seti18n($scope: ngGrid$IGridScope, language: string): void;
    getInstanceType(o: any): string;
  }
}
declare module "ng-grid" {
  declare class ngGridReorderable {
    constructor(): this;
  }
  declare var ngStyleProvider: ngGrid$ngGrid$IStyleProviderStatic;
  declare var ngSearchProvider: ngGrid$ngGrid$ISearchProviderStatic;
  declare var ngSelectionProvider: ngGrid$ngGrid$ISelectionProviderStatic;
  declare var ngEventProvider: ngGrid$ngGrid$IEventProviderStatic;
  declare var ngAggregate: ngGrid$ngGrid$IAggregateStatic;
  declare var ngRenderedRange: ngGrid$ngGrid$IRenderedRangeStatic;
  declare var ngDimension: ngGrid$ngGrid$IDimensionStatic;
  declare var ngRow: ngGrid$ngGrid$IRowStatic;
  declare var ngColumn: ngGrid$ngGrid$IColumnStatic;
  declare var ngFooter: ngGrid$ngGrid$IFooterStatic;
}
