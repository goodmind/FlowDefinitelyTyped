declare module "tableau" {
  declare var npm$namespace$tableau: {
    DashboardObjectType: typeof tableau$DashboardObjectType,
    FieldAggregationType: typeof tableau$FieldAggregationType,
    FieldRoleType: typeof tableau$FieldRoleType,
    SheetType: typeof tableau$SheetType,
    ParameterAllowableValuesType: typeof tableau$ParameterAllowableValuesType,
    ParameterDataType: typeof tableau$ParameterDataType,
    ErrorCode: typeof tableau$ErrorCode,
    ToolbarPosition: typeof tableau$ToolbarPosition,
    ToolbarButtonName: typeof tableau$ToolbarButtonName,
    TableauEventName: typeof tableau$TableauEventName,
    SheetSizeBehaviour: typeof tableau$SheetSizeBehaviour,
    NullOption: typeof tableau$NullOption,
    FilterType: typeof tableau$FilterType,
    FilterUpdateType: typeof tableau$FilterUpdateType,
    PeriodType: typeof tableau$PeriodType,
    DateRangeType: typeof tableau$DateRangeType,
    SelectionUpdateType: typeof tableau$SelectionUpdateType,
    TableauException: typeof tableau$TableauException,
    VizManager: typeof tableau$VizManager,
    Viz: typeof tableau$Viz,
    ToolbarState: typeof tableau$ToolbarState,
    TableauEvent: typeof tableau$TableauEvent,
    CustomViewEvent: typeof tableau$CustomViewEvent,
    FilterEvent: typeof tableau$FilterEvent,
    MarksEvent: typeof tableau$MarksEvent,
    ParameterEvent: typeof tableau$ParameterEvent,
    StoryPointSwitchEvent: typeof tableau$StoryPointSwitchEvent,
    TabSwitchEvent: typeof tableau$TabSwitchEvent,
    ToolbarStateEvent: typeof tableau$ToolbarStateEvent,
    VizResizeEvent: typeof tableau$VizResizeEvent,
    SheetInfo: typeof tableau$SheetInfo,
    Sheet: typeof tableau$Sheet,
    DataTable: typeof tableau$DataTable,
    Column: typeof tableau$Column,
    Worksheet: typeof tableau$Worksheet,
    Dashboard: typeof tableau$Dashboard,
    DashboardObject: typeof tableau$DashboardObject,
    Story: typeof tableau$Story,
    StoryPointInfo: typeof tableau$StoryPointInfo,
    StoryPoint: typeof tableau$StoryPoint,
    Workbook: typeof tableau$Workbook,
    DataSource: typeof tableau$DataSource,
    Field: typeof tableau$Field,
    CustomView: typeof tableau$CustomView,
    Parameter: typeof tableau$Parameter,
    Filter: typeof tableau$Filter,
    CategoricalFilter: typeof tableau$CategoricalFilter,
    QuantitativeFilter: typeof tableau$QuantitativeFilter,
    RelativeDateFilter: typeof tableau$RelativeDateFilter,
    DataValue: typeof tableau$DataValue,
    Mark: typeof tableau$Mark,
    Pair: typeof tableau$Pair
  };

  declare var tableau$DashboardObjectType: {|
    +BLANK: "blank", // "blank"
    +WORKSHEET: "worksheet", // "worksheet"
    +QUICK_FILTER: "quickFilter", // "quickFilter"
    +PARAMETER_CONTROL: "parameterControl", // "parameterControl"
    +PAGE_FILTER: "pageFilter", // "pageFilter"
    +LEGEND: "legend", // "legend"
    +TITLE: "title", // "title"
    +TEXT: "text", // "text"
    +IMAGE: "image", // "image"
    +WEB_PAGE: "webPage", // "webPage"
    +ADDIN: "addIn" // "addIn"
  |};

  declare var tableau$FieldAggregationType: {|
    +SUM: 0, // 0
    +AVG: 1, // 1
    +MIN: 2, // 2
    +MAX: 3, // 3
    +STDEV: 4, // 4
    +STDEVP: 5, // 5
    +VAR: 6, // 6
    +VARP: 7, // 7
    +COUNT: 8, // 8
    +COUNTD: 9, // 9
    +MEDIAN: 10, // 10
    +ATTR: 11, // 11
    +NONE: 12, // 12
    +YEAR: 13, // 13
    +QTR: 14, // 14
    +MONTH: 15, // 15
    +DAY: 16, // 16
    +HOUR: 17, // 17
    +MINUTE: 18, // 18
    +SECOND: 19, // 19
    +WEEK: 20, // 20
    +WEEKDAY: 21, // 21
    +MONTHYEAR: 22, // 22
    +MDY: 23, // 23
    +END: 24, // 24
    +TRUNC_YEAR: 25, // 25
    +TRUNC_QTR: 26, // 26
    +TRUNC_MONTH: 27, // 27
    +TRUNC_WEEK: 28, // 28
    +TRUNC_DAY: 29, // 29
    +TRUNC_HOUR: 30, // 30
    +TRUNC_MINUTE: 31, // 31
    +TRUNC_SECOND: 32, // 32
    +QUART1: 33, // 33
    +QUART3: 34, // 34
    +SKEWNESS: 35, // 35
    +KURTOSIS: 36, // 36
    +INOUT: 37, // 37
    +USER: 38 // 38
  |};

  declare var tableau$FieldRoleType: {|
    +DIMENSION: 0, // 0
    +MEASURE: 1, // 1
    +UKNOWN: 2 // 2
  |};

  declare var tableau$SheetType: {|
    +WORKSHEET: "worksheet", // "worksheet"
    +DASHBOARD: "dashboard", // "dashboard"
    +STORY: "story" // "story"
  |};

  declare var tableau$ParameterAllowableValuesType: {|
    +ALL: "all", // "all"
    +LIST: "list", // "list"
    +RANGE: "range" // "range"
  |};

  declare var tableau$ParameterDataType: {|
    +FLOAT: "float", // "float"
    +INTEGER: "integer", // "integer"
    +STRING: "string", // "string"
    +BOOLEAN: "boolean", // "boolean"
    +DATE: "date", // "date"
    +DATETIME: "datetime" // "datetime"
  |};

  declare class tableau$TableauException mixins Error {
    tableauSoftwareErrorCode: $Values<typeof tableau$ErrorCode>;
  }

  declare var tableau$ErrorCode: {|
    +BROWSER_NOT_CAPABLE: "browserNotCapable", // "browserNotCapable"
    +DOWNLOAD_WORKBOOK_NOT_ALLOWED: "downloadWorkbookNotAllowed", // "downloadWorkbookNotAllowed"
    +FILTER_CANNOT_BE_PERFORMED: "filterCannotBePerformed", // "filterCannotBePerformed"
    +INDEX_OUT_OF_RANGE: "indexOutOfRange", // "indexOutOfRange"
    +INTERNAL_ERROR: "internalError", // "internalError"
    +INVALID_AGGREGATION_FIELD_NAME: "invalidAggregationFieldName", // "invalidAggregationFieldName"
    +INVALID_CUSTOM_VIEW_NAME: "invalidCustomViewName", // "invalidCustomViewName"
    +INVALID_DATE_PARAMETER: "invalidDateParameter", // "invalidDateParameter"
    +INVALID_FILTER_FIELDNAME: "invalidFilterFieldName", // "invalidFilterFieldName"
    +INVALID_FILTER_FIELDNAME_OR_VALUE: "invalidFilterFieldNameOrValue", // "invalidFilterFieldNameOrValue"
    +INVALID_FILTER_FIELDVALUE: "invalidFilterFieldValue", // "invalidFilterFieldValue"
    +INVALID_PARAMETER: "invalidParameter", // "invalidParameter"
    +INVALID_SELECTION_DATE: "invalidSelectionDate", // "invalidSelectionDate"
    +INVALID_SELECTION_FIELDNAME: "invalidSelectionFieldName", // "invalidSelectionFieldName"
    +INVALID_SELECTION_VALUE: "invalidSelectionValue", // "invalidSelectionValue"
    +INVALID_SIZE: "invalidSize", // "invalidSize"
    +INVALID_SIZE_BEHAVIOR_ON_WORKSHEET: "invalidSizeBehaviorOnWorksheet", // "invalidSizeBehaviorOnWorksheet"
    +INVALID_URL: "invalidUrl", // "invalidUrl"
    +MISSING_MAX_SIZE: "missingMaxSize", // "missingMaxSize"
    +MISSING_MIN_SIZE: "missingMinSize", // "missingMinSize"
    +MISSING_MINMAX_SIZE: "missingMinMaxSize", // "missingMinMaxSize"
    +MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS: "missingRangeNForRelativeDateFilters", // "missingRangeNForRelativeDateFilters"
    +NO_URL_FOR_HIDDEN_WORKSHEET: "noUrlForHiddenWorksheet", // "noUrlForHiddenWorksheet"
    +NO_URL_OR_PARENT_ELEMENT_NOT_FOUND: "noUrlOrParentElementNotFound", // "noUrlOrParentElementNotFound"
    +NOT_ACTIVE_SHEET: "notActiveSheet", // "notActiveSheet"
    +NULL_OR_EMPTY_PARAMETER: "nullOrEmptyParameter", // "nullOrEmptyParameter"
    +SERVER_ERROR: "serverError", // "serverError"
    +SHEET_NOT_IN_WORKBOOK: "sheetNotInWorkbook", // "sheetNotInWorkbook"
    +STALE_DATA_REFERENCE: "staleDataReference", // "staleDataReference"
    +UNSUPPORTED_EVENT_NAME: "unsupportedEventName", // "unsupportedEventName"
    +VIZ_ALREADY_IN_MANAGER: "vizAlreadyInManager", // "vizAlreadyInManager"
    +INVALID_TOOLBAR_BUTTON_NAME: "invalidToolbarButtonName", // "invalidToolbarButtonName"
    +MAX_VIZ_RESIZE_ATTEMPTS: "maxVizResizeAttempts" // "maxVizResizeAttempts"
  |};

  declare class tableau$VizManager {
    getVizs(): tableau$Viz[];
  }

  declare type tableau$ListenerFunction<T: tableau$TableauEvent> = (
    event: T
  ) => void;

  declare class tableau$Viz {
    /**
     * Creates a new Tableau Viz inside of the given HTML container, which is typically a <div> element.
     * Each option as well as the options parameter is optional.
     * If there is already a Viz associated with the parentElement, an exception is thrown.
     * Before reusing the parentElement you must first call dispose().
     */
    constructor(
      node: HTMLElement,
      url: string,
      options?: tableau$VizCreateOptions
    ): this;

    /**
     * Indicates whether the tabs are displayed in the UI. It does not actually hide individual tabs.
     */
    getAreTabsHidden(): boolean;

    /**
     * Indicates whether the toolbar is displayed.
     */
    getToolbarHidden(): boolean;

    /**
     * Indicates whether the visualization is displayed on the hosting page.
     */
    getIsHidden(): boolean;

    /**
     * Returns the node that was specified in the constructor.
     */
    getParentElement(): HTMLElement;

    /**
     * The URL of the visualization, as specified in the constructor
     */
    getUrl(): string;

    /**
     * One Workbook is supported per visualization.
     */
    getWorkbook(): tableau$Workbook;

    /**
     * Indicates whether automatic updates are currently paused.
     */
    getAreAutomaticUpdatesPaused(): boolean;
    addEventListener(
      event: typeof tableau$TableauEventName.FILTER_CHANGE,
      f: tableau$ListenerFunction<tableau$FilterEvent>
    ): void;
    addEventListener(
      event:
        | typeof tableau$TableauEventName.CUSTOM_VIEW_LOAD
        | typeof tableau$TableauEventName.CUSTOM_VIEW_REMOVE
        | typeof tableau$TableauEventName.CUSTOM_VIEW_SAVE
        | typeof tableau$TableauEventName.CUSTOM_VIEW_SET_DEFAULT,
      f: tableau$ListenerFunction<tableau$CustomViewEvent>
    ): void;
    addEventListener(
      event: typeof tableau$TableauEventName.MARKS_SELECTION,
      f: tableau$ListenerFunction<tableau$MarksEvent>
    ): void;
    addEventListener(
      event: typeof tableau$TableauEventName.PARAMETER_VALUE_CHANGE,
      f: tableau$ListenerFunction<tableau$ParameterEvent>
    ): void;
    addEventListener(
      event: typeof tableau$TableauEventName.STORY_POINT_SWITCH,
      f: tableau$ListenerFunction<tableau$StoryPointSwitchEvent>
    ): void;
    addEventListener(
      event: typeof tableau$TableauEventName.TAB_SWITCH,
      f: tableau$ListenerFunction<tableau$TabSwitchEvent>
    ): void;
    addEventListener(
      event: typeof tableau$TableauEventName.TOOLBAR_STATE_CHANGE,
      f: tableau$ListenerFunction<tableau$ToolbarStateEvent>
    ): void;
    addEventListener(
      event: typeof tableau$TableauEventName.VIZ_RESIZE,
      f: tableau$ListenerFunction<tableau$VizResizeEvent>
    ): void;

    /**
     * Removes an event listener from the specified event.
     */
    removeEventListener(
      type: $Values<typeof tableau$TableauEventName>,
      f: tableau$ListenerFunction<tableau$TableauEvent>
    ): void;

    /**
     * Shows or hides the iframe element hosting the visualization.
     */
    show(): void;

    /**
     * Shows or hides the iframe element hosting the visualization.
     */
    hide(): void;

    /**
     * Cleans up any resources associated with the visualization,
     * removes the visualization from the VizManager instance,
     * and removes any DOM elements from the parentElement object.
     * In effect, this method restores the page to what it was before a Viz object was instantiated.
     */
    dispose(): void;

    /**
     * Pauses or resumes layout updates. This is useful if you are resizing the visualization or performing multiple calls that could affect the layout.
     */
    pauseAutomaticUpdatesAsync(): void;
    resumeAutomaticUpdatesAsync(): void;
    toggleAutomaticUpdatesAsync(): void;

    /**
     * Equivalent to clicking on the Revert All toolbar button, which restores the workbook to its starting state.
     */
    revertAllAsync(): Promise<void>;

    /**
     * Equivalent to clicking on the Refresh Data toolbar button.
     */
    refreshDataAsync(): Promise<void>;

    /**
     * Equivalent to clicking on the Download toolbar button, which downloads a copy of the original workbook.
     */
    showDownloadWorkbookDialog(): void;

    /**
     * Equivalent to clicking on the Export Image toolbar button, which creates a PNG file of the current visualization.
     */
    showExportImageDialog(): void;

    /**
     * Equivalent to clicking on the Export PDF toolbar button, which shows a dialog allowing the user to select options for the export.
     */
    showExportPDFDialog(): void;

    /**
     * Shows the Export Data dialog, which is currently a popup window. The worksheetInDashboard parameter is optional.
     * If not specified, the currently active Worksheet is used.
     */
    showExportDataDialog(
      worksheetInDashboard: tableau$Sheet | tableau$SheetInfo | string
    ): void;

    /**
     * Shows the Export CrossTab dialog. The worksheetInDashboard parameter is optional. If not specified, the currently active Worksheet is used.
     */
    showExportCrossTabDialog(
      worksheetInDashboard: tableau$Sheet | tableau$SheetInfo | string
    ): void;

    /**
     * Equivalent to clicking on the Share toolbar button,
     * which displays a dialog allowing the user to share the visualization by email or by embedding its HTML in a web page.
     */
    showShareDialog(): void;

    /**
     * Sets the size of the iframe element, which causes the visualization to expand or
     * collapse to fit the iframe element if the visualization size (current sheet's size) is set to AUTOMATIC.
     */
    setFrameSize(width: number, height: number): void;

    /**
     * Gets the URL of the visualization asynchronously.
     */
    getCurrentUrlAsync(): Promise<string>;

    /**
     * Redoes last action on a sheet, defaults to a single redo unless optional parameters is specified.
     */
    redoAsync(): Promise<void>;

    /**
     * Undoes action on sheet, defaults to a single undo unless optional parameters is specified.
     */
    undoAsync(): Promise<void>;
  }

  declare interface tableau$VizCreateOptions {
    /**
     * Undoes action on sheet, defaults to a single undo unless optional parameters is specified.
     */
    hideTabs?: boolean;

    /**
     * Indicates whether the toolbar is hidden or shown.
     */
    hideToolbar?: boolean;

    /**
     * Specifies the ID of an existing instance to make a copy (clone) of.
     * This is useful if the user wants to continue analysis of an existing visualization without losing the state of the original.
     * If the ID does not refer to an existing visualization, the cloned version is derived from the original visualization.
     */
    instanceIdToClone?: string;

    /**
     * Can be any valid CSS size specifier. If not specified, defaults to the published height of the view.
     */
    height?: string;

    /**
     * Can be any valid CSS size specifier. If not specified, defaults to the published height of the view.
     */
    width?: string;

    /**
     * Specifies a device layout for a dashboard, if it exists.
     * Values can be desktop, tablet, or phone.
     * If not specified, defaults to loading a layout based on the smallest dimension of the hosting iframe element.
     */
    device?: string;

    /**
     * Callback function that is invoked when the Viz object first becomes interactive.
     * This is only called once, but it’s guaranteed to be called.
     * If the Viz object is already interactive, it will be called immediately, but on a separate "thread."
     */
    onFirstInteractive?: (e: tableau$TableauEvent) => void;

    /**
     * Callback function that's invoked when the size of the Viz object is known.
     * You can use this callback to perform tasks such as resizing the elements surrounding the Viz object once the object's size has been established.
     */
    onFirstVizSizeKnown?: (e: tableau$VizResizeEvent) => void;

    /**
     * Apply a filter that you specify to the view when it is first rendered.
     * For example, if you have an Academic Year filter and only want to display data for 2017,
     * you might enter "Academic Year": "2016". For more information, see Filtering.
     */
    [filter: string]: any;
  }

  declare var tableau$ToolbarPosition: {|
    +TOP: "top", // "top"
    +BOTTOM: "bottom" // "bottom"
  |};

  declare class tableau$ToolbarState {
    /**
     * Gets the Viz object associated with the toolbar.
     */
    getViz(): tableau$Viz;

    /**
     * Gets a value indicating whether the specified toolbar button is enabled.
     * The supported buttons are defined in the ToobarButtonName enum.
     * Currently, only Undo and Redo are supported.
     * Checking this property with a toolbar button that is not supported causes an InvalidToolbarButtonName error.
     */
    isButtonEnabled(
      toolbarButtonName: $Values<typeof tableau$ToolbarButtonName>
    ): boolean;
  }

  declare var tableau$ToolbarButtonName: {|
    +UNDO: "undo", // "undo"
    +REDO: "redo" // "redo"
  |};

  /**
   * Defines strings passed to the Viz.addEventListener and Viz.removeEventListener methods.
   * The values of the enums are all lowercase strings with no underscores.
   * For example, CUSTOM_VIEW_LOAD is customviewload.
   * Either the fully-qualified enum (tableau.TableauEventName.FILTER_CHANGE) or the raw string (filterchange) is acceptable.
   */

  declare var tableau$TableauEventName: {|
    +CUSTOM_VIEW_LOAD: "customviewload", // "customviewload"
    +CUSTOM_VIEW_REMOVE: "customviewremove", // "customviewremove"
    +CUSTOM_VIEW_SAVE: "customviewsave", // "customviewsave"
    +CUSTOM_VIEW_SET_DEFAULT: "customviewsetdefault", // "customviewsetdefault"
    +FILTER_CHANGE: "filterchange", // "filterchange"
    +MARKS_SELECTION: "marksselection", // "marksselection"
    +PARAMETER_VALUE_CHANGE: "parametervaluechange", // "parametervaluechange"
    +STORY_POINT_SWITCH: "storypointswitch", // "storypointswitch"
    +TAB_SWITCH: "tabswitch", // "tabswitch"
    +TOOLBAR_STATE_CHANGE: "toolbarstatechange", // "toolbarstatechange"
    +VIZ_RESIZE: "vizresize" // "vizresize"
  |};

  declare class tableau$TableauEvent {
    /**
     * Gets the Viz object associated with the event.
     */
    getViz(): tableau$Viz;

    /**
     * Gets the name of the event, which is a string, but is also one of the items in the TableauEventName enum.
     */
    getEventName(): $Values<typeof tableau$TableauEventName>;
  }

  declare class tableau$CustomViewEvent mixins tableau$TableauEvent {
    /**
     * Gets the CustomView object associated with the event.
     */
    getCustomViewAsync(): Promise<tableau$CustomView>;
  }

  declare class tableau$FilterEvent mixins tableau$TableauEvent {
    /**
     * Gets the Worksheet object associated with the event.
     */
    getWorksheet(): tableau$Worksheet;

    /**
     * Gets the name of the field.
     */
    getFieldName(): string;

    /**
     * Gets the Filter object associated with the event.
     */
    getFilterAsync(): Promise<tableau$ConcreteFilter>;
  }

  declare class tableau$MarksEvent mixins tableau$TableauEvent {
    /**
     * Gets the Worksheet object associated with the event.
     */
    getWorksheet(): tableau$Worksheet;

    /**
     * Gets the selected marks on the Worksheet that triggered the event.
     */
    getMarksAsync(): Promise<tableau$Mark[]>;
  }

  declare class tableau$ParameterEvent mixins tableau$TableauEvent {
    /**
     * Gets the name of the parameter that changed.
     */
    getParameterName(): string;

    /**
     * Gets the Parameter object that triggered the event.
     */
    getParameterAsync(): Promise<tableau$Parameter>;
  }

  declare class tableau$StoryPointSwitchEvent mixins tableau$TableauEvent {
    /**
     * Gets the StoryPointInfo that was active before the story point switch event occurred.
     * The returned object reflects the state of the story point before the switch occurred.
     * The returned object reflects the state of the story point after the switch occured.
     */
    getOldStoryPointInfo(): tableau$StoryPointInfo;

    /**
     * Gets the StoryPoint that is currently active.
     */
    getNewStoryPoint(): tableau$StoryPoint;
  }

  declare class tableau$TabSwitchEvent mixins tableau$TableauEvent {
    /**
     * Gets the name of the sheet that was active before the tab switch event occurred.
     */
    getOldSheetName(): string;

    /**
     * Gets the name of the sheet that is currently active.
     */
    getNewSheetName(): string;
  }

  declare class tableau$ToolbarStateEvent mixins tableau$TableauEvent {
    /**
     * Returns the new ToolbarState.
     */
    getToolbarState(): tableau$ToolbarState;
  }

  declare class tableau$VizResizeEvent mixins tableau$TableauEvent {
    /**
     * Gets the Viz object associated with the event.
     */
    getViz(): tableau$Viz;

    /**
     * Gets the name of the event, which is a string, but is also one of the items in the TableauEventName enum.
     */
    getEventName(): $Values<typeof tableau$TableauEventName>;

    /**
     * Gets the sheetSize record for the current sheet. For more information, see SheetSizeOptions Record.
     */
    getVizSize(): tableau$Size;
  }

  declare class tableau$SheetInfo {
    /**
     * Gets the name of the sheet.
     */
    getName(): string;

    /**
     * Gets the index of the sheet within the published tabs. Note that hidden tabs are still counted in the ordering, as long as they are published.
     */
    getIndex(): number;

    /**
     * Gets a value indicating whether the sheet is the currently active sheet.Due to a technical limitation,
     * this will always return false if the object is a Worksheet instance that is part of a Dashboard.
     */
    getIsActive(): boolean;

    /**
     * Gets a value indicating whether the sheet is hidden in the UI. Note that if the entire tab control is hidden,
     * it does not affect the state of this flag. This sheet may still report that it is visible even when the tabs control is hidden.
     */
    getIsHidden(): boolean;

    /**
     * Gets the type of the sheet. SheetType is an enum with the following values: WORKSHEET, DASHBOARD and STORY.
     */
    getSheetType(): $Values<typeof tableau$SheetType>;

    /**
     * Gets the size information that the author specified when publishing the workbook.
     */
    getSize(): tableau$SheetSizeOptions;

    /**
     * Gets the URL for this sheet.
     */
    getUrl(): string;

    /**
     * Gets the Workbook to which this Sheet belongs.
     */
    getWorkbook(): tableau$Workbook;
  }

  declare class tableau$Sheet {
    /**
     * Gets the name of the sheet.
     */
    getName(): string;

    /**
     * Gets the index of the sheet within the published tabs. Note that hidden tabs are still counted in the ordering, as long as they are published.
     */
    getIndex(): number;

    /**
     * Gets a value indicating whether the sheet is the currently active sheet.
     */
    getIsActive(): boolean;

    /**
     * Gets a value indicating whether the sheet is hidden in the UI.
     * Note that if the entire tab control is hidden, it does not affect the state of this flag.
     * This sheet may still report that it is visible even when the tabs control is hidden.
     */
    getIsHidden(): boolean;

    /**
     * Gets the type of the sheet. SheetType is an enum with the following values: WORKSHEET , DASHBOARD and STORY.
     */
    getSheetType(): $Values<typeof tableau$SheetType>;

    /**
     * Gets the size information that the author specified when publishing the workbook.
     */
    getSize(): tableau$SheetSizeOptions;

    /**
     * Gets the URL for this sheet.
     */
    getUrl(): string;

    /**
     * Gets the Workbook to which this Sheet belongs.
     */
    getWorkbook(): tableau$Workbook;

    /**
     * Sets the size information on a sheet. Note that if the sheet is a Worksheet,
     * only SheetSizeBehavior.AUTOMATIC is allowed since you can’t actually set a Worksheet to a fixed size.
     */
    changeSizeAsync(
      options: tableau$SheetSizeOptions
    ): Promise<tableau$SheetSizeOptions>;
  }

  declare var tableau$SheetSizeBehaviour: {|
    +AUTOMATIC: "automatic", // "automatic"
    +EXACTLY: "exactly", // "exactly"
    +RANGE: "range", // "range"
    +ATLEAST: "atleast", // "atleast"
    +ATMOST: "atmost" // "atmost"
  |};

  declare interface tableau$SheetSizeOptions {
    /**
     * Contains an enumeration value of one of the following: AUTOMATIC, EXACTLY, RANGE, ATLEAST, and ATMOST.
     */
    behavior: $Values<typeof tableau$SheetSizeBehaviour>;

    /**
     * This is only defined when behavior is EXACTLY, RANGE or ATMOST.
     */
    maxSize: number;

    /**
     * This is only defined when behavior is EXACTLY, RANGE, or ATLEAST.
     */
    minSize: number;
  }

  declare class tableau$DataTable {
    /**
     * Either "Underlying Data Table" or "Summary Data Table".
     */
    getName(): string;

    /**
     * A two-dimensional array of data without the sheet or column metadata.
     * The first array index is the row index and the second array index is the column index.
     */
    getData(): any[];

    /**
     * The column information, including the name, data type, and index.
     */
    getColumns(): tableau$Column[];

    /**
     * The number of rows in the returned data.
     */
    getTotalRowCount(): number;

    /**
     * Whether the data is summary data or underlying data. Returns true for summary data.
     */
    getIsSummaryData(): boolean;
  }

  declare class tableau$Column {
    /**
     * The name of the column.
     */
    getFieldName(): string;

    /**
     * The data type of the column. Possible values are float, integer, string, boolean, date, and datetime.
     */
    getDataType(): string;

    /**
     * Whether the column data is referenced in the visualization.
     */
    getIsReferenced(): boolean;

    /**
     * The number of rows in the returned data.
     */
    getIndex(): number;
  }

  declare class tableau$Worksheet {
    /**
     * Returns the Dashboard object to which this Worksheet belongs (if it’s on a dashboard). Otherwise, it returns null.
     */
    getParentDashboard(): tableau$Dashboard;

    /**
     * Returns the StoryPoint object to which this Worksheet belongs (if it’s on a story sheet).
     * Otherwise, it returns null. If the Worksheet instance does not come from a call to StoryPoint.getContainedSheet(), it also returns null.
     */
    getParentStoryPoint(): tableau$StoryPoint;

    /**
     * Gets the primary and all of the secondary data sources for this worksheet.
     * Note that by convention the primary data source should always be the first element.
     */
    getDataSourcesAsync(): Promise<tableau$DataSource[]>;

    /**
     * Gets aggregated data for the fields used in the currently active sheet and returns it as an object.
     * You can specify options with an optional parameter. This can only be called on sheets of the WORKSHEET type.
     */
    getSummaryDataAsync(
      options: tableau$getSummaryDataOptions
    ): Promise<tableau$DataTable>;

    /**
     * Gets data for all fields in the data source used by the currently active sheet and returns it as an object.
     * You can specify options with an optional parameter. This can only be called on sheets of the WORKSHEET type.
     */
    getUnderlyingDataAsync(
      options: tableau$getUnderlyingDataOptions
    ): Promise<tableau$DataTable>;

    /**
     * Fetches the collection of filters used on the sheet.
     */
    getFiltersAsync(): Promise<tableau$Filter[]>;

    /**
     * Applies a simple categorical filter (non-date).
     * See the filtering examples for more details on these functions.
     * Returns the fieldName that was filtered.
     */
    applyFilterAsync(
      fieldName: string,
      values: { [key: string]: any }[] | { [key: string]: any },
      updateType: $Values<typeof tableau$FilterUpdateType>,
      options?: tableau$FilterOptions
    ): Promise<string>;

    /**
     * Applies a quantitative filter to a field or to a date.
     * If a range is specified that is outside of the domain min/max values, no error is raised and the command is allowed.
     * Subsequent calls to getFiltersAsync[] will return these values even if they are outside of the bounds of the domain.
     * This is equivalent to the behavior in Tableau Desktop.
     */
    applyRangeFilterAsync(
      fieldName: string,
      range: tableau$RangeFilterOptions
    ): Promise<string>;

    /**
     * Applies a relative date filter.
     */
    applyRelativeDateFilterAsync(
      fieldName: string,
      options: tableau$RelativeDateFilterOptions
    ): Promise<string>;

    /**
     * Applies a hierarchical filter.
     * The values parameter is either a single value, an array of values, or an object { levels: ["1", "2"] }.
     */
    applyHierarchicalFilterAsync(
      fieldName: string,
      values: { [key: string]: any },
      options: any
    ): Promise<string>;

    /**
     * Clears the filter, no matter what kind of filter it is.
     * Note that the filter is removed as long as no associated quick filter is showing for the field.
     * If there is a quick filter showing, then the filter is kept, but it’s reset to the “All” state (effectually canceling the filter).
     * For relative date filters, however, an error is returned since there is no “All” state for a relative date filter.
     * To clear a relative date filter with a quick filter showing, you can call applyRelativeDateFilter()
     * instead using a range that makes sense for the specific field.
     */
    clearFilterAsync(fieldName: string): Promise<string>;

    /**
     * Clears the selection for this worksheet.
     */
    clearSelectedMarksAsync(): Promise<void>;

    /**
     * Gets the collection of marks that are currently selected.
     */
    getSelectedMarksAsync(): Promise<tableau$Mark[]>;

    /**
     * Selects the marks and returns them.
     */
    selectMarksAsync(
      fieldName: string,
      value: { [key: string]: any } | { [key: string]: any }[],
      updateType: $Values<typeof tableau$SelectionUpdateType>
    ): Promise<void>;

    /**
     * Allows selection based on this syntax for the first parameter:
     * {
     *    "Field1": value,
     *    "Field2": [1, 2, 3]
     * }
     */
    selectMarksAsync(
      fieldValuesMap: { [key: string]: any } | tableau$Mark[],
      updateType: $Values<typeof tableau$SelectionUpdateType>
    ): Promise<void>;
  }

  declare interface tableau$getSummaryDataOptions {
    /**
     * Do not use aliases specified in the data source in Tableau. Default is false.
     */
    ignoreAliases?: boolean;

    /**
     * Only return data for the currently selected marks. Default is false.
     */
    ignoreSelection?: boolean;

    /**
     * The number of rows of data that you want to return. Enter 0 to return all rows.
     */
    maxRows: number;
  }

  declare interface tableau$getUnderlyingDataOptions {
    /**
     * Do not use aliases specified in the data source in Tableau. Default is false.
     */
    ignoreAliases?: boolean;

    /**
     * Only return data for the currently selected marks. Default is false.
     */
    ignoreSelection?: boolean;

    /**
     * Return all the columns for the data source. Default is false.
     */
    ignoreAllColumns?: boolean;

    /**
     * The number of rows of data that you want to return. Enter 0 to return all rows.
     */
    maxRows: number;
  }

  declare class tableau$Dashboard {
    /**
     * Gets the collection of objects.
     */
    getObjects(): tableau$DashboardObject[];

    /**
     * Gets the collection of worksheets contained in the dashboard.
     * Note that this is a helper method and is equivalent to looping through getObjects() and collecting all of
     * the DashboardObject.Worksheet pointers when DashboardObject.getType() === tableau.DashboardObjectType.WORKSHEET.
     */
    getWorksheets(): tableau$Worksheet[];

    /**
     * Returns the StoryPoint object to which this Dashboard belongs (if it’s on a story sheet).
     * Otherwise, it returns null.
     * If the Dashboard instance does not come from a call to StoryPoint.getContainedSheet(), it also returns null.
     */
    getParentStoryPoint(): tableau$StoryPoint;
  }

  declare class tableau$DashboardObject {
    /**
     * Gets what the object represents, which is an enum with the following values:
     * BLANK, WORKSHEET, QUICK_FILTER, PARAMETER_CONTROL, PAGE_FILTER, LEGEND, TITLE, TEXT, IMAGE, WEB_PAGE.
     */
    getObjectType(): $Values<typeof tableau$DashboardObjectType>;

    /**
     * Gets the Dashboard object that contains this object.
     */
    getDashboard(): tableau$Dashboard;

    /**
     * If getType() returns WORKSHEET, this contains a pointer to the Worksheet object.
     */
    getWorksheet(): tableau$Worksheet;

    /**
     * Gets the coordinates relative to the top-left corner of the dashboard of the object.
     */
    getPosition(): tableau$Point;

    /**
     * Gets the size of the object.
     */
    getSize(): tableau$Size;
  }

  declare class tableau$Story mixins tableau$Sheet {
    /**
     * Gets an array (not a collection) of StoryPointInfo objects.
     * Note that this is not a collection, since we don’t have a unique string key for a story point.
     * We only need ordinal access to the story points (by index).
     */
    getStoryPointsInfo(): tableau$StoryPointInfo[];

    /**
     * Gets the currently active story point.
     */
    getActiveStoryPoint(): tableau$StoryPoint;

    /**
     * Activates the story point at the specified index and returns a promise of the activated StoryPoint.
     * Throws a tableau.ErrorCode.INDEX_OUT_OF_RANGE error if the index is less than zero or greater than or equal to the number of story points in the array.
     */
    activateStoryPointAsync(index: number): Promise<tableau$StoryPoint>;

    /**
     * Activates the next story point if there is one. If the current story point is the last one, then is stays active.
     */
    activateNextStoryPointAsync(): Promise<tableau$StoryPoint>;

    /**
     * Activates the previous story point if there is one. If the current story point is the first one, then it stays active.
     */
    activatePreviousStoryPointAsync(): Promise<tableau$StoryPoint>;

    /**
     * Reverts the story point at the specified index and returns a promise of the reverted StoryPoint.
     * Throws a tableau.ErrorCode.INDEX_OUT_OF_RANGE error if the index is less than zero or greater than or equal to the number of story points in the array.
     */
    revertStoryPointAsync(index: number): Promise<tableau$StoryPoint>;
  }

  declare class tableau$StoryPointInfo {
    /**
     * Gets the zero-based index of this story point within the parent Story sheet.
     */
    getIndex(): number;

    /**
     * Gets the content of the textual description for this story point.
     */
    getCaption(): string;

    /**
     * Gets a value indicating whether the story point is the currently active point in the story.
     */
    getIsActive(): boolean;

    /**
     * Gets a value indicating whether the story point is updated, meaning that there are no changes from the last time the story point was “captured”.
     */
    getIsUpdated(): boolean;

    /**
     * Gets the Story object that contains the story point.
     */
    getParentStory(): tableau$Story;
  }

  declare class tableau$StoryPoint {
    /**
     * Gets the zero-based index of this story point within the parent Story sheet.
     */
    getIndex(): number;

    /**
     * Gets the content of the textual description for this story point.
     */
    getCaption(): string;

    /**
     * Gets a value indicating whether the story point is the currently active point in the story.
     */
    getIsActive(): boolean;

    /**
     * Gets a value indicating whether the story point is updated, meaning that there are no changes from the last time the story point was “captured”.
     */
    getIsUpdated(): boolean;

    /**
     * Gets the sheet that this story point contains. This will be null if the story point does not have a contained sheet.
     */
    getContainedSheet(): tableau$Sheet;

    /**
     * Gets the Story object that contains the story point.
     */
    getParentStory(): tableau$Story;
  }

  declare class tableau$Workbook {
    /**
     * Gets the Viz object that contains the workbook.
     */
    getViz(): tableau$Viz;

    /**
     * Gets the currently active sheet (the active tab)
     */
    getActiveSheet(): tableau$Sheet;

    /**
     * Gets the currently active custom view, or null if no custom view is active.
     */
    getActiveCustomView(): tableau$CustomView;

    /**
     * Note that this is synchronous, meaning that all of the sheets are expected when loaded.
     */
    getPublishedSheetsInfo(): tableau$SheetInfo[];

    /**
     * Gets the name of the workbook saved to the server. Note that this is not necessarily the file name.
     */
    getName(): string;

    /**
     * Activates the sheet, either by name or index, and returns a promise of the sheet that was activated.
     */
    activateSheetAsync(
      sheetNameOrIndex: string | number
    ): Promise<tableau$Sheet>;

    /**
     * Reverts the workbook to its last saved state.
     */
    revertAllAsync(): Promise<void>;

    /**
     * Fetches the parameters for this workbook.
     */
    getParametersAsync(): Promise<tableau$Parameter[]>;

    /**
     * Changes the value of the parameter with the given name and returns the new Parameter.
     * The value should be the same data type as the parameter and within the allowable range of values.
     * It also needs to be the aliased value and not the raw value.
     * For more information and examples, see changeParameterValueAsync() Additional Information
     */
    changeParameterValueAsync(
      name: string,
      value: any
    ): Promise<tableau$Parameter>;

    /**
     * Gets the collection of CustomView objects associated with the workbook.
     */
    getCustomViewsAsync(): Promise<tableau$CustomView[]>;

    /**
     * Changes the visualization to show the named saved state.
     */
    showCustomViewAsync(customViewName: string): Promise<tableau$CustomView>;

    /**
     * Removes the named custom view.
     */
    removeCustomViewAsync(customViewName: string): Promise<tableau$CustomView>;

    /**
     * Remembers the current state of the workbook by assigning a custom view name.
     */
    rememberCustomViewAsync(
      customViewName: string
    ): Promise<tableau$CustomView>;

    /**
     * Sets the active custom view as the default.
     */
    setActiveCustomViewAsDefaultAsync(): void;
  }

  declare class tableau$DataSource {
    /**
     * The name of the DataSource as seen in the UI.
     */
    getName(): string;

    /**
     * Indicates whether this DataSource is a primary or a secondary data source.
     */
    getIsPrimary(): boolean;

    /**
     * Gets an array of Fields associated with the DataSource.
     */
    getFields(): tableau$Field[];
  }

  declare class tableau$Field {
    /**
     * Gets the field name (i.e. caption).
     */
    getName(): string;
    getAggregation(): $Values<typeof tableau$FieldAggregationType>;

    /**
     * Gets the data source to which this field belongs.
     */
    getDataSource(): tableau$DataSource;

    /**
     * One of the following values: DIMENSION, MEASURE, UKNOWN
     */
    getRole(): $Values<typeof tableau$FieldRoleType>;
  }

  declare class tableau$CustomView {
    /**
     * User-friendly name for the custom view
     */
    getName(): string;

    /**
     * User-friendly name for the custom view
     */
    setName(name: string): string;

    /**
     * Indicates whether the custom view is public or private.
     */
    getAdvertised(): boolean;

    /**
     * Indicates whether the custom view is public or private.
     */
    setAdvertised(bool: boolean): boolean;

    /**
     * Gets or sets whether this is the default custom view.
     */
    getDefault(): boolean;

    /**
     * Gets the user that created the custom view.
     */
    getOwnerName(): string;

    /**
     * Unique URL to load this view again.
     */
    getUrl(): string;

    /**
     * Gets the Workbook to which this CustomView belongs.
     */
    getWorkbook(): tableau$Workbook;

    /**
     * After saveAsync() is called, the result of the getUrl method is no longer blank.
     */
    saveAsync(): Promise<tableau$CustomView>;
  }

  declare class tableau$Parameter {
    /**
     * A unique identifier for the parameter, as specified by the user.
     */
    getName(): string;

    /**
     * The current value of the parameter.
     */
    getCurrentValue(): tableau$DataValue;

    /**
     * The data type of the parameter can be one of the following: FLOAT, INTEGER, STRING, BOOLEAN, DATE, DATETIME.
     */
    getDataType(): $Values<typeof tableau$ParameterDataType>;

    /**
     * The type of allowable values that the parameter can accept. It can be one of the following enumeration items: ALL, LIST, RANGE.
     */
    getAllowableValuesType(): $Values<
      typeof tableau$ParameterAllowableValuesType
    >;

    /**
     * If the parameter is restricted to a list of allowable values, this property contains the array of those values.
     * Note that this is not a standard collection, but a JavaScript array.
     */
    getAllowableValues(): tableau$DataValue[];

    /**
     * If getAllowableValuesType is RANGE, this defines the minimum allowable value, inclusive. Otherwise it’s undefined/null.
     */
    getMinValue(): tableau$DataValue;

    /**
     * If getAllowableValuesType is RANGE, this defines the maximum allowable value, inclusive. Otherwise it’s undefined/null.
     */
    getMaxValue(): tableau$DataValue;

    /**
     * If getAllowableValuesType is RANGE, this defines the step size used in the parameter UI control slider. Otherwise it’s undefined/null.
     */
    getStepSize(): number;

    /**
     * If getAllowableValuesType is RANGE and getDataType is DATE or DATETIME,
     * this defines the step date period used in the Parameter UI control slider.
     * Otherwise it’s undefined/null.
     */
    getDateStepPeriod(): $Values<typeof tableau$PeriodType>;
  }

  declare interface tableau$FilterOptions {
    /**
     * Determines whether the filter will apply in exclude mode or include mode.
     * The default is include, which means that you use the fields as part of a filter.
     * Exclude mode means that you include everything else except the specified fields.
     */
    isExcludeMode: boolean;
  }

  declare interface tableau$RangeFilterOptions {
    /**
     * Minimum value for the range (inclusive). Optional. Leave blank if you want a <= filter.
     */
    min: number | Date;

    /**
     * Maximum value for the range (inclusive). Optional. Leave blank if you want a >= filter.
     */
    max: number | Date;

    /**
     * The null values to include
     */
    nullOption: $Values<typeof tableau$NullOption>;
  }

  declare interface tableau$RelativeDateFilterOptions {
    /**
     * The UTC date from which to filter.
     */
    anchorDate: Date;

    /**
     * Year, quarter, month, etc.
     */
    periodType: $Values<typeof tableau$PeriodType>;

    /**
     * LAST, LASTN, NEXT, etc.
     */
    rangeType: $Values<typeof tableau$DateRangeType>;

    /**
     * The number used when the rangeType is LASTN or NEXTN.
     */
    rangeN: number;
  }

  declare class tableau$Filter {
    /**
     * Gets the parent worksheet
     */
    getWorksheet(): tableau$Worksheet;

    /**
     * Gets the type of the filter. See FilterType Enum for the values in the enum.
     */
    getFilterType(): $Values<typeof tableau$FilterType>;

    /**
     * Gets the name of the field being filtered. Note that this is the caption as shown in the UI and not the actual database field name.
     */
    getFieldName(): string;

    /**
     * Gets the field that is currently being filtered.
     */
    getFieldAsync(): Promise<tableau$Field>;
  }

  /**
   * An enumeration that indicates what to do with null values for a given filter or mark selection call.
   */

  declare var tableau$NullOption: {|
    +NULL_VALUES: "nullValues", // "nullValues"
    +NON_NULL_VALUES: "nonNullValues", // "nonNullValues"
    +ALL_VALUES: "allValues" // "allValues"
  |};

  declare class tableau$CategoricalFilter mixins tableau$Filter {
    /**
     * Gets a value indicating whether the filter is exclude or include (default).
     */
    getIsExcludeMode(): boolean;

    /**
     * Gets the collection of values that are currently set on the filter.
     * This is a native JavaScript array and not a keyed collection.
     * Note that only the first 200 values are returned.
     */
    getAppliedValues(): tableau$DataValue[];
  }

  declare class tableau$QuantitativeFilter mixins tableau$Filter {
    /**
     * Gets the minimum value as specified in the domain.
     */
    getDomainMin(): tableau$DataValue;

    /**
     * Gets the maximum value as specified in the domain.
     */
    getDomainMax(): tableau$DataValue;

    /**
     * Gets the minimum value, inclusive, applied to the filter.
     */
    getMin(): tableau$DataValue;

    /**
     * Gets the maximum value, inclusive, applied to the filter.
     */
    getMax(): tableau$DataValue;

    /**
     * Indicates whether null values are included in the filter.
     */
    getIncludeNullValues(): boolean;
  }

  declare class tableau$RelativeDateFilter mixins tableau$Filter {
    /**
     * The date period of the filter. See PeriodType Enum for the values in the enum.
     */
    getPeriod(): $Values<typeof tableau$PeriodType>;

    /**
     * The range of the date filter (years, months, etc.). See DateRangeType Enum for the values in the enum.
     */
    getRange(): $Values<typeof tableau$DateRangeType>;

    /**
     * When getRange returns LASTN or NEXTN, this is the N value (how many years, months, etc.).
     */
    getRangeN(): number;
  }

  declare type tableau$ConcreteFilter =
    | tableau$CategoricalFilter
    | tableau$QuantitativeFilter
    | tableau$RelativeDateFilter;

  declare class tableau$DataValue {
    /**
     * Contains the raw native value as a JavaScript type, which is one of String, Number, Boolean, or Date
     */
    value: any;

    /**
     * The value formatted according to the locale and the formatting applied to the field or parameter.
     */
    formattedValue: string;
  }

  declare var tableau$FilterType: {|
    +CATEGORICAL: "categorical", // "categorical"
    +QUANTITATIVE: "quantitative", // "quantitative"
    +HIERARCHICAL: "hierarchical", // "hierarchical"
    +RELATIVE_DATE: "relativedate" // "relativedate"
  |};

  declare var tableau$FilterUpdateType: {|
    +ALL: "all", // "all"
    +REPLACE: "replace", // "replace"
    +ADD: "add", // "add"
    +REMOVE: "remove" // "remove"
  |};

  declare var tableau$PeriodType: {|
    +YEARS: "years", // "years"
    +QUARTERS: "quarters", // "quarters"
    +MONTHS: "months", // "months"
    +WEEKS: "weeks", // "weeks"
    +DAYS: "days", // "days"
    +HOURS: "hours", // "hours"
    +MINUTES: "minutes", // "minutes"
    +SECONDS: "seconds" // "seconds"
  |};

  declare var tableau$DateRangeType: {|
    +LAST: "last", // "last"
    +LASTN: "lastn", // "lastn"
    +NEXT: "next", // "next"
    +NEXTN: "nextn", // "nextn"
    +CURRENT: "current", // "current"
    +TODATE: "todate" // "todate"
  |};

  /**
   * A mark represents a single data point on the visualization.
   * It is independent of the type of visualization (bar, line, pie, etc.).
   */
  declare class tableau$Mark {
    /**
     * Creates a new Mark with the specified pairs.
     */
    constructor(pairs: tableau$Pair[]): this;

    /**
     * Gets a collection of field name/value pairs associated with the mark.
     */
    getPairs(): tableau$Pair[];
  }

  declare class tableau$Pair {
    /**
     * The value formatted according to the locale and the formatting applied to the field.
     */
    formattedValue: string;

    /**
     * The field name to which the value is applied.
     */
    fieldName: string;

    /**
     * Contains the raw native value for the field as a JavaScript type, which is one of String, Number, Boolean, or Date.
     */
    value: string | number | boolean | Date;

    /**
     * Creates a new Pair with the specified field name/value pairing
     */
    constructor(
      fieldName: string,
      value: string | number | boolean | Date
    ): this;
  }

  declare var tableau$SelectionUpdateType: {|
    +REPLACE: "replace", // "replace"
    +ADD: "add", // "add"
    +REMOVE: "remove" // "remove"
  |};

  declare interface tableau$Size {
    width: number;
    height: number;
  }

  declare interface tableau$Point {
    x: number;
    y: number;
  }
}
