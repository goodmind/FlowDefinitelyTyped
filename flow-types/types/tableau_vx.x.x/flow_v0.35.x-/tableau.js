declare module 'tableau' {
        declare  class tableau$DashboardObjectType {
  constructor(...args: empty): mixed;
static +BLANK: Class<tableau$DashboardObjectType__BLANK> & tableau$DashboardObjectType__BLANK & "blank";// "blank"
static +WORKSHEET: Class<tableau$DashboardObjectType__WORKSHEET> & tableau$DashboardObjectType__WORKSHEET & "worksheet";// "worksheet"
static +QUICK_FILTER: Class<tableau$DashboardObjectType__QUICK_FILTER> & tableau$DashboardObjectType__QUICK_FILTER & "quickFilter";// "quickFilter"
static +PARAMETER_CONTROL: Class<tableau$DashboardObjectType__PARAMETER_CONTROL> & tableau$DashboardObjectType__PARAMETER_CONTROL & "parameterControl";// "parameterControl"
static +PAGE_FILTER: Class<tableau$DashboardObjectType__PAGE_FILTER> & tableau$DashboardObjectType__PAGE_FILTER & "pageFilter";// "pageFilter"
static +LEGEND: Class<tableau$DashboardObjectType__LEGEND> & tableau$DashboardObjectType__LEGEND & "legend";// "legend"
static +TITLE: Class<tableau$DashboardObjectType__TITLE> & tableau$DashboardObjectType__TITLE & "title";// "title"
static +TEXT: Class<tableau$DashboardObjectType__TEXT> & tableau$DashboardObjectType__TEXT & "text";// "text"
static +IMAGE: Class<tableau$DashboardObjectType__IMAGE> & tableau$DashboardObjectType__IMAGE & "image";// "image"
static +WEB_PAGE: Class<tableau$DashboardObjectType__WEB_PAGE> & tableau$DashboardObjectType__WEB_PAGE & "webPage";// "webPage"
static +ADDIN: Class<tableau$DashboardObjectType__ADDIN> & tableau$DashboardObjectType__ADDIN & "addIn";// "addIn"

}

declare class tableau$DashboardObjectType__BLANK mixins tableau$DashboardObjectType {}
declare class tableau$DashboardObjectType__WORKSHEET mixins tableau$DashboardObjectType {}
declare class tableau$DashboardObjectType__QUICK_FILTER mixins tableau$DashboardObjectType {}
declare class tableau$DashboardObjectType__PARAMETER_CONTROL mixins tableau$DashboardObjectType {}
declare class tableau$DashboardObjectType__PAGE_FILTER mixins tableau$DashboardObjectType {}
declare class tableau$DashboardObjectType__LEGEND mixins tableau$DashboardObjectType {}
declare class tableau$DashboardObjectType__TITLE mixins tableau$DashboardObjectType {}
declare class tableau$DashboardObjectType__TEXT mixins tableau$DashboardObjectType {}
declare class tableau$DashboardObjectType__IMAGE mixins tableau$DashboardObjectType {}
declare class tableau$DashboardObjectType__WEB_PAGE mixins tableau$DashboardObjectType {}
declare class tableau$DashboardObjectType__ADDIN mixins tableau$DashboardObjectType {}


declare  class tableau$FieldAggregationType {
  constructor(...args: empty): mixed;
static +SUM: Class<tableau$FieldAggregationType__SUM> & tableau$FieldAggregationType__SUM & 0;// 0
static +AVG: Class<tableau$FieldAggregationType__AVG> & tableau$FieldAggregationType__AVG & 1;// 1
static +MIN: Class<tableau$FieldAggregationType__MIN> & tableau$FieldAggregationType__MIN & 2;// 2
static +MAX: Class<tableau$FieldAggregationType__MAX> & tableau$FieldAggregationType__MAX & 3;// 3
static +STDEV: Class<tableau$FieldAggregationType__STDEV> & tableau$FieldAggregationType__STDEV & 4;// 4
static +STDEVP: Class<tableau$FieldAggregationType__STDEVP> & tableau$FieldAggregationType__STDEVP & 5;// 5
static +VAR: Class<tableau$FieldAggregationType__VAR> & tableau$FieldAggregationType__VAR & 6;// 6
static +VARP: Class<tableau$FieldAggregationType__VARP> & tableau$FieldAggregationType__VARP & 7;// 7
static +COUNT: Class<tableau$FieldAggregationType__COUNT> & tableau$FieldAggregationType__COUNT & 8;// 8
static +COUNTD: Class<tableau$FieldAggregationType__COUNTD> & tableau$FieldAggregationType__COUNTD & 9;// 9
static +MEDIAN: Class<tableau$FieldAggregationType__MEDIAN> & tableau$FieldAggregationType__MEDIAN & 10;// 10
static +ATTR: Class<tableau$FieldAggregationType__ATTR> & tableau$FieldAggregationType__ATTR & 11;// 11
static +NONE: Class<tableau$FieldAggregationType__NONE> & tableau$FieldAggregationType__NONE & 12;// 12
static +YEAR: Class<tableau$FieldAggregationType__YEAR> & tableau$FieldAggregationType__YEAR & 13;// 13
static +QTR: Class<tableau$FieldAggregationType__QTR> & tableau$FieldAggregationType__QTR & 14;// 14
static +MONTH: Class<tableau$FieldAggregationType__MONTH> & tableau$FieldAggregationType__MONTH & 15;// 15
static +DAY: Class<tableau$FieldAggregationType__DAY> & tableau$FieldAggregationType__DAY & 16;// 16
static +HOUR: Class<tableau$FieldAggregationType__HOUR> & tableau$FieldAggregationType__HOUR & 17;// 17
static +MINUTE: Class<tableau$FieldAggregationType__MINUTE> & tableau$FieldAggregationType__MINUTE & 18;// 18
static +SECOND: Class<tableau$FieldAggregationType__SECOND> & tableau$FieldAggregationType__SECOND & 19;// 19
static +WEEK: Class<tableau$FieldAggregationType__WEEK> & tableau$FieldAggregationType__WEEK & 20;// 20
static +WEEKDAY: Class<tableau$FieldAggregationType__WEEKDAY> & tableau$FieldAggregationType__WEEKDAY & 21;// 21
static +MONTHYEAR: Class<tableau$FieldAggregationType__MONTHYEAR> & tableau$FieldAggregationType__MONTHYEAR & 22;// 22
static +MDY: Class<tableau$FieldAggregationType__MDY> & tableau$FieldAggregationType__MDY & 23;// 23
static +END: Class<tableau$FieldAggregationType__END> & tableau$FieldAggregationType__END & 24;// 24
static +TRUNC_YEAR: Class<tableau$FieldAggregationType__TRUNC_YEAR> & tableau$FieldAggregationType__TRUNC_YEAR & 25;// 25
static +TRUNC_QTR: Class<tableau$FieldAggregationType__TRUNC_QTR> & tableau$FieldAggregationType__TRUNC_QTR & 26;// 26
static +TRUNC_MONTH: Class<tableau$FieldAggregationType__TRUNC_MONTH> & tableau$FieldAggregationType__TRUNC_MONTH & 27;// 27
static +TRUNC_WEEK: Class<tableau$FieldAggregationType__TRUNC_WEEK> & tableau$FieldAggregationType__TRUNC_WEEK & 28;// 28
static +TRUNC_DAY: Class<tableau$FieldAggregationType__TRUNC_DAY> & tableau$FieldAggregationType__TRUNC_DAY & 29;// 29
static +TRUNC_HOUR: Class<tableau$FieldAggregationType__TRUNC_HOUR> & tableau$FieldAggregationType__TRUNC_HOUR & 30;// 30
static +TRUNC_MINUTE: Class<tableau$FieldAggregationType__TRUNC_MINUTE> & tableau$FieldAggregationType__TRUNC_MINUTE & 31;// 31
static +TRUNC_SECOND: Class<tableau$FieldAggregationType__TRUNC_SECOND> & tableau$FieldAggregationType__TRUNC_SECOND & 32;// 32
static +QUART1: Class<tableau$FieldAggregationType__QUART1> & tableau$FieldAggregationType__QUART1 & 33;// 33
static +QUART3: Class<tableau$FieldAggregationType__QUART3> & tableau$FieldAggregationType__QUART3 & 34;// 34
static +SKEWNESS: Class<tableau$FieldAggregationType__SKEWNESS> & tableau$FieldAggregationType__SKEWNESS & 35;// 35
static +KURTOSIS: Class<tableau$FieldAggregationType__KURTOSIS> & tableau$FieldAggregationType__KURTOSIS & 36;// 36
static +INOUT: Class<tableau$FieldAggregationType__INOUT> & tableau$FieldAggregationType__INOUT & 37;// 37
static +USER: Class<tableau$FieldAggregationType__USER> & tableau$FieldAggregationType__USER & 38;// 38

}

declare class tableau$FieldAggregationType__SUM mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__AVG mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__MIN mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__MAX mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__STDEV mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__STDEVP mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__VAR mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__VARP mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__COUNT mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__COUNTD mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__MEDIAN mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__ATTR mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__NONE mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__YEAR mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__QTR mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__MONTH mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__DAY mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__HOUR mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__MINUTE mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__SECOND mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__WEEK mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__WEEKDAY mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__MONTHYEAR mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__MDY mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__END mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__TRUNC_YEAR mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__TRUNC_QTR mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__TRUNC_MONTH mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__TRUNC_WEEK mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__TRUNC_DAY mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__TRUNC_HOUR mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__TRUNC_MINUTE mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__TRUNC_SECOND mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__QUART1 mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__QUART3 mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__SKEWNESS mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__KURTOSIS mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__INOUT mixins tableau$FieldAggregationType {}
declare class tableau$FieldAggregationType__USER mixins tableau$FieldAggregationType {}


declare  class tableau$FieldRoleType {
  constructor(...args: empty): mixed;
static +DIMENSION: Class<tableau$FieldRoleType__DIMENSION> & tableau$FieldRoleType__DIMENSION & 0;// 0
static +MEASURE: Class<tableau$FieldRoleType__MEASURE> & tableau$FieldRoleType__MEASURE & 1;// 1
static +UKNOWN: Class<tableau$FieldRoleType__UKNOWN> & tableau$FieldRoleType__UKNOWN & 2;// 2

}

declare class tableau$FieldRoleType__DIMENSION mixins tableau$FieldRoleType {}
declare class tableau$FieldRoleType__MEASURE mixins tableau$FieldRoleType {}
declare class tableau$FieldRoleType__UKNOWN mixins tableau$FieldRoleType {}


declare  class tableau$SheetType {
  constructor(...args: empty): mixed;
static +WORKSHEET: Class<tableau$SheetType__WORKSHEET> & tableau$SheetType__WORKSHEET & "worksheet";// "worksheet"
static +DASHBOARD: Class<tableau$SheetType__DASHBOARD> & tableau$SheetType__DASHBOARD & "dashboard";// "dashboard"
static +STORY: Class<tableau$SheetType__STORY> & tableau$SheetType__STORY & "story";// "story"

}

declare class tableau$SheetType__WORKSHEET mixins tableau$SheetType {}
declare class tableau$SheetType__DASHBOARD mixins tableau$SheetType {}
declare class tableau$SheetType__STORY mixins tableau$SheetType {}


declare  class tableau$ParameterAllowableValuesType {
  constructor(...args: empty): mixed;
static +ALL: Class<tableau$ParameterAllowableValuesType__ALL> & tableau$ParameterAllowableValuesType__ALL & "all";// "all"
static +LIST: Class<tableau$ParameterAllowableValuesType__LIST> & tableau$ParameterAllowableValuesType__LIST & "list";// "list"
static +RANGE: Class<tableau$ParameterAllowableValuesType__RANGE> & tableau$ParameterAllowableValuesType__RANGE & "range";// "range"

}

declare class tableau$ParameterAllowableValuesType__ALL mixins tableau$ParameterAllowableValuesType {}
declare class tableau$ParameterAllowableValuesType__LIST mixins tableau$ParameterAllowableValuesType {}
declare class tableau$ParameterAllowableValuesType__RANGE mixins tableau$ParameterAllowableValuesType {}


declare  class tableau$ParameterDataType {
  constructor(...args: empty): mixed;
static +FLOAT: Class<tableau$ParameterDataType__FLOAT> & tableau$ParameterDataType__FLOAT & "float";// "float"
static +INTEGER: Class<tableau$ParameterDataType__INTEGER> & tableau$ParameterDataType__INTEGER & "integer";// "integer"
static +STRING: Class<tableau$ParameterDataType__STRING> & tableau$ParameterDataType__STRING & "string";// "string"
static +BOOLEAN: Class<tableau$ParameterDataType__BOOLEAN> & tableau$ParameterDataType__BOOLEAN & "boolean";// "boolean"
static +DATE: Class<tableau$ParameterDataType__DATE> & tableau$ParameterDataType__DATE & "date";// "date"
static +DATETIME: Class<tableau$ParameterDataType__DATETIME> & tableau$ParameterDataType__DATETIME & "datetime";// "datetime"

}

declare class tableau$ParameterDataType__FLOAT mixins tableau$ParameterDataType {}
declare class tableau$ParameterDataType__INTEGER mixins tableau$ParameterDataType {}
declare class tableau$ParameterDataType__STRING mixins tableau$ParameterDataType {}
declare class tableau$ParameterDataType__BOOLEAN mixins tableau$ParameterDataType {}
declare class tableau$ParameterDataType__DATE mixins tableau$ParameterDataType {}
declare class tableau$ParameterDataType__DATETIME mixins tableau$ParameterDataType {}


declare class tableau$TableauException mixins Error {
tableauSoftwareErrorCode: tableau$ErrorCode
}

declare  class tableau$ErrorCode {
  constructor(...args: empty): mixed;
static +BROWSER_NOT_CAPABLE: Class<tableau$ErrorCode__BROWSER_NOT_CAPABLE> & tableau$ErrorCode__BROWSER_NOT_CAPABLE & "browserNotCapable";// "browserNotCapable"
static +DOWNLOAD_WORKBOOK_NOT_ALLOWED: Class<tableau$ErrorCode__DOWNLOAD_WORKBOOK_NOT_ALLOWED> & tableau$ErrorCode__DOWNLOAD_WORKBOOK_NOT_ALLOWED & "downloadWorkbookNotAllowed";// "downloadWorkbookNotAllowed"
static +FILTER_CANNOT_BE_PERFORMED: Class<tableau$ErrorCode__FILTER_CANNOT_BE_PERFORMED> & tableau$ErrorCode__FILTER_CANNOT_BE_PERFORMED & "filterCannotBePerformed";// "filterCannotBePerformed"
static +INDEX_OUT_OF_RANGE: Class<tableau$ErrorCode__INDEX_OUT_OF_RANGE> & tableau$ErrorCode__INDEX_OUT_OF_RANGE & "indexOutOfRange";// "indexOutOfRange"
static +INTERNAL_ERROR: Class<tableau$ErrorCode__INTERNAL_ERROR> & tableau$ErrorCode__INTERNAL_ERROR & "internalError";// "internalError"
static +INVALID_AGGREGATION_FIELD_NAME: Class<tableau$ErrorCode__INVALID_AGGREGATION_FIELD_NAME> & tableau$ErrorCode__INVALID_AGGREGATION_FIELD_NAME & "invalidAggregationFieldName";// "invalidAggregationFieldName"
static +INVALID_CUSTOM_VIEW_NAME: Class<tableau$ErrorCode__INVALID_CUSTOM_VIEW_NAME> & tableau$ErrorCode__INVALID_CUSTOM_VIEW_NAME & "invalidCustomViewName";// "invalidCustomViewName"
static +INVALID_DATE_PARAMETER: Class<tableau$ErrorCode__INVALID_DATE_PARAMETER> & tableau$ErrorCode__INVALID_DATE_PARAMETER & "invalidDateParameter";// "invalidDateParameter"
static +INVALID_FILTER_FIELDNAME: Class<tableau$ErrorCode__INVALID_FILTER_FIELDNAME> & tableau$ErrorCode__INVALID_FILTER_FIELDNAME & "invalidFilterFieldName";// "invalidFilterFieldName"
static +INVALID_FILTER_FIELDNAME_OR_VALUE: Class<tableau$ErrorCode__INVALID_FILTER_FIELDNAME_OR_VALUE> & tableau$ErrorCode__INVALID_FILTER_FIELDNAME_OR_VALUE & "invalidFilterFieldNameOrValue";// "invalidFilterFieldNameOrValue"
static +INVALID_FILTER_FIELDVALUE: Class<tableau$ErrorCode__INVALID_FILTER_FIELDVALUE> & tableau$ErrorCode__INVALID_FILTER_FIELDVALUE & "invalidFilterFieldValue";// "invalidFilterFieldValue"
static +INVALID_PARAMETER: Class<tableau$ErrorCode__INVALID_PARAMETER> & tableau$ErrorCode__INVALID_PARAMETER & "invalidParameter";// "invalidParameter"
static +INVALID_SELECTION_DATE: Class<tableau$ErrorCode__INVALID_SELECTION_DATE> & tableau$ErrorCode__INVALID_SELECTION_DATE & "invalidSelectionDate";// "invalidSelectionDate"
static +INVALID_SELECTION_FIELDNAME: Class<tableau$ErrorCode__INVALID_SELECTION_FIELDNAME> & tableau$ErrorCode__INVALID_SELECTION_FIELDNAME & "invalidSelectionFieldName";// "invalidSelectionFieldName"
static +INVALID_SELECTION_VALUE: Class<tableau$ErrorCode__INVALID_SELECTION_VALUE> & tableau$ErrorCode__INVALID_SELECTION_VALUE & "invalidSelectionValue";// "invalidSelectionValue"
static +INVALID_SIZE: Class<tableau$ErrorCode__INVALID_SIZE> & tableau$ErrorCode__INVALID_SIZE & "invalidSize";// "invalidSize"
static +INVALID_SIZE_BEHAVIOR_ON_WORKSHEET: Class<tableau$ErrorCode__INVALID_SIZE_BEHAVIOR_ON_WORKSHEET> & tableau$ErrorCode__INVALID_SIZE_BEHAVIOR_ON_WORKSHEET & "invalidSizeBehaviorOnWorksheet";// "invalidSizeBehaviorOnWorksheet"
static +INVALID_URL: Class<tableau$ErrorCode__INVALID_URL> & tableau$ErrorCode__INVALID_URL & "invalidUrl";// "invalidUrl"
static +MISSING_MAX_SIZE: Class<tableau$ErrorCode__MISSING_MAX_SIZE> & tableau$ErrorCode__MISSING_MAX_SIZE & "missingMaxSize";// "missingMaxSize"
static +MISSING_MIN_SIZE: Class<tableau$ErrorCode__MISSING_MIN_SIZE> & tableau$ErrorCode__MISSING_MIN_SIZE & "missingMinSize";// "missingMinSize"
static +MISSING_MINMAX_SIZE: Class<tableau$ErrorCode__MISSING_MINMAX_SIZE> & tableau$ErrorCode__MISSING_MINMAX_SIZE & "missingMinMaxSize";// "missingMinMaxSize"
static +MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS: Class<tableau$ErrorCode__MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS> & tableau$ErrorCode__MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS & "missingRangeNForRelativeDateFilters";// "missingRangeNForRelativeDateFilters"
static +NO_URL_FOR_HIDDEN_WORKSHEET: Class<tableau$ErrorCode__NO_URL_FOR_HIDDEN_WORKSHEET> & tableau$ErrorCode__NO_URL_FOR_HIDDEN_WORKSHEET & "noUrlForHiddenWorksheet";// "noUrlForHiddenWorksheet"
static +NO_URL_OR_PARENT_ELEMENT_NOT_FOUND: Class<tableau$ErrorCode__NO_URL_OR_PARENT_ELEMENT_NOT_FOUND> & tableau$ErrorCode__NO_URL_OR_PARENT_ELEMENT_NOT_FOUND & "noUrlOrParentElementNotFound";// "noUrlOrParentElementNotFound"
static +NOT_ACTIVE_SHEET: Class<tableau$ErrorCode__NOT_ACTIVE_SHEET> & tableau$ErrorCode__NOT_ACTIVE_SHEET & "notActiveSheet";// "notActiveSheet"
static +NULL_OR_EMPTY_PARAMETER: Class<tableau$ErrorCode__NULL_OR_EMPTY_PARAMETER> & tableau$ErrorCode__NULL_OR_EMPTY_PARAMETER & "nullOrEmptyParameter";// "nullOrEmptyParameter"
static +SERVER_ERROR: Class<tableau$ErrorCode__SERVER_ERROR> & tableau$ErrorCode__SERVER_ERROR & "serverError";// "serverError"
static +SHEET_NOT_IN_WORKBOOK: Class<tableau$ErrorCode__SHEET_NOT_IN_WORKBOOK> & tableau$ErrorCode__SHEET_NOT_IN_WORKBOOK & "sheetNotInWorkbook";// "sheetNotInWorkbook"
static +STALE_DATA_REFERENCE: Class<tableau$ErrorCode__STALE_DATA_REFERENCE> & tableau$ErrorCode__STALE_DATA_REFERENCE & "staleDataReference";// "staleDataReference"
static +UNSUPPORTED_EVENT_NAME: Class<tableau$ErrorCode__UNSUPPORTED_EVENT_NAME> & tableau$ErrorCode__UNSUPPORTED_EVENT_NAME & "unsupportedEventName";// "unsupportedEventName"
static +VIZ_ALREADY_IN_MANAGER: Class<tableau$ErrorCode__VIZ_ALREADY_IN_MANAGER> & tableau$ErrorCode__VIZ_ALREADY_IN_MANAGER & "vizAlreadyInManager";// "vizAlreadyInManager"
static +INVALID_TOOLBAR_BUTTON_NAME: Class<tableau$ErrorCode__INVALID_TOOLBAR_BUTTON_NAME> & tableau$ErrorCode__INVALID_TOOLBAR_BUTTON_NAME & "invalidToolbarButtonName";// "invalidToolbarButtonName"
static +MAX_VIZ_RESIZE_ATTEMPTS: Class<tableau$ErrorCode__MAX_VIZ_RESIZE_ATTEMPTS> & tableau$ErrorCode__MAX_VIZ_RESIZE_ATTEMPTS & "maxVizResizeAttempts";// "maxVizResizeAttempts"

}

declare class tableau$ErrorCode__BROWSER_NOT_CAPABLE mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__DOWNLOAD_WORKBOOK_NOT_ALLOWED mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__FILTER_CANNOT_BE_PERFORMED mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INDEX_OUT_OF_RANGE mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INTERNAL_ERROR mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_AGGREGATION_FIELD_NAME mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_CUSTOM_VIEW_NAME mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_DATE_PARAMETER mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_FILTER_FIELDNAME mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_FILTER_FIELDNAME_OR_VALUE mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_FILTER_FIELDVALUE mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_PARAMETER mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_SELECTION_DATE mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_SELECTION_FIELDNAME mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_SELECTION_VALUE mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_SIZE mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_SIZE_BEHAVIOR_ON_WORKSHEET mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_URL mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__MISSING_MAX_SIZE mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__MISSING_MIN_SIZE mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__MISSING_MINMAX_SIZE mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__NO_URL_FOR_HIDDEN_WORKSHEET mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__NO_URL_OR_PARENT_ELEMENT_NOT_FOUND mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__NOT_ACTIVE_SHEET mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__NULL_OR_EMPTY_PARAMETER mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__SERVER_ERROR mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__SHEET_NOT_IN_WORKBOOK mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__STALE_DATA_REFERENCE mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__UNSUPPORTED_EVENT_NAME mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__VIZ_ALREADY_IN_MANAGER mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__INVALID_TOOLBAR_BUTTON_NAME mixins tableau$ErrorCode {}
declare class tableau$ErrorCode__MAX_VIZ_RESIZE_ATTEMPTS mixins tableau$ErrorCode {}


declare class tableau$VizManager  {
getVizs(): tableau$Viz[]
}

declare type tableau$ListenerFunction<T: tableau$TableauEvent> = (event: T) => void;

declare class tableau$Viz  {

/**
 * Creates a new Tableau Viz inside of the given HTML container, which is typically a <div> element.
 * Each option as well as the options parameter is optional.
 * If there is already a Viz associated with the parentElement, an exception is thrown.
 * Before reusing the parentElement you must first call dispose().
 */
constructor(node: HTMLElement, url: string, options?: tableau$VizCreateOptions): this;

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
event: tableau$TableauEventName.FILTER_CHANGE,
f: tableau$ListenerFunction<tableau$FilterEvent>): void;
addEventListener(
event: tableau$TableauEventName.CUSTOM_VIEW_LOAD | tableau$TableauEventName.CUSTOM_VIEW_REMOVE | tableau$TableauEventName.CUSTOM_VIEW_SAVE | tableau$TableauEventName.CUSTOM_VIEW_SET_DEFAULT,
f: tableau$ListenerFunction<tableau$CustomViewEvent>): void;
addEventListener(
event: tableau$TableauEventName.MARKS_SELECTION,
f: tableau$ListenerFunction<tableau$MarksEvent>): void;
addEventListener(
event: tableau$TableauEventName.PARAMETER_VALUE_CHANGE,
f: tableau$ListenerFunction<tableau$ParameterEvent>): void;
addEventListener(
event: tableau$TableauEventName.STORY_POINT_SWITCH,
f: tableau$ListenerFunction<tableau$StoryPointSwitchEvent>): void;
addEventListener(
event: tableau$TableauEventName.TAB_SWITCH,
f: tableau$ListenerFunction<tableau$TabSwitchEvent>): void;
addEventListener(
event: tableau$TableauEventName.TOOLBAR_STATE_CHANGE,
f: tableau$ListenerFunction<tableau$ToolbarStateEvent>): void;
addEventListener(
event: tableau$TableauEventName.VIZ_RESIZE,
f: tableau$ListenerFunction<tableau$VizResizeEvent>): void;

/**
 * Removes an event listener from the specified event.
 */
removeEventListener(
type: tableau$TableauEventName,
f: tableau$ListenerFunction<tableau$TableauEvent>): void;

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
showExportDataDialog(worksheetInDashboard: tableau$Sheet | tableau$SheetInfo | string): void;

/**
 * Shows the Export CrossTab dialog. The worksheetInDashboard parameter is optional. If not specified, the currently active Worksheet is used.
 */
showExportCrossTabDialog(worksheetInDashboard: tableau$Sheet | tableau$SheetInfo | string): void;

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
undoAsync(): Promise<void>
}

declare interface tableau$VizCreateOptions {

/**
 * Undoes action on sheet, defaults to a single undo unless optional parameters is specified.
 */
hideTabs?: boolean,

/**
 * Indicates whether the toolbar is hidden or shown.
 */
hideToolbar?: boolean,

/**
 * Specifies the ID of an existing instance to make a copy (clone) of.
 * This is useful if the user wants to continue analysis of an existing visualization without losing the state of the original.
 * If the ID does not refer to an existing visualization, the cloned version is derived from the original visualization.
 */
instanceIdToClone?: string,

/**
 * Can be any valid CSS size specifier. If not specified, defaults to the published height of the view.
 */
height?: string,

/**
 * Can be any valid CSS size specifier. If not specified, defaults to the published height of the view.
 */
width?: string,

/**
 * Specifies a device layout for a dashboard, if it exists.
 * Values can be desktop, tablet, or phone.
 * If not specified, defaults to loading a layout based on the smallest dimension of the hosting iframe element.
 */
device?: string,

/**
 * Callback function that is invoked when the Viz object first becomes interactive.
 * This is only called once, but it’s guaranteed to be called.
 * If the Viz object is already interactive, it will be called immediately, but on a separate "thread."
 */
onFirstInteractive?: (e: tableau$TableauEvent) => void,

/**
 * Callback function that's invoked when the size of the Viz object is known.
 * You can use this callback to perform tasks such as resizing the elements surrounding the Viz object once the object's size has been established.
 */
onFirstVizSizeKnown?: (e: tableau$VizResizeEvent) => void,

/**
 * Apply a filter that you specify to the view when it is first rendered.
 * For example, if you have an Academic Year filter and only want to display data for 2017,
 * you might enter "Academic Year": "2016". For more information, see Filtering.
 */
[filter: string]: any
} 

declare  class tableau$ToolbarPosition {
  constructor(...args: empty): mixed;
static +TOP: Class<tableau$ToolbarPosition__TOP> & tableau$ToolbarPosition__TOP & "top";// "top"
static +BOTTOM: Class<tableau$ToolbarPosition__BOTTOM> & tableau$ToolbarPosition__BOTTOM & "bottom";// "bottom"

}

declare class tableau$ToolbarPosition__TOP mixins tableau$ToolbarPosition {}
declare class tableau$ToolbarPosition__BOTTOM mixins tableau$ToolbarPosition {}


declare class tableau$ToolbarState  {

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
isButtonEnabled(toolbarButtonName: tableau$ToolbarButtonName): boolean
}

declare  class tableau$ToolbarButtonName {
  constructor(...args: empty): mixed;
static +UNDO: Class<tableau$ToolbarButtonName__UNDO> & tableau$ToolbarButtonName__UNDO & "undo";// "undo"
static +REDO: Class<tableau$ToolbarButtonName__REDO> & tableau$ToolbarButtonName__REDO & "redo";// "redo"

}

declare class tableau$ToolbarButtonName__UNDO mixins tableau$ToolbarButtonName {}
declare class tableau$ToolbarButtonName__REDO mixins tableau$ToolbarButtonName {}



/**
 * Defines strings passed to the Viz.addEventListener and Viz.removeEventListener methods.
 * The values of the enums are all lowercase strings with no underscores.
 * For example, CUSTOM_VIEW_LOAD is customviewload.
 * Either the fully-qualified enum (tableau.TableauEventName.FILTER_CHANGE) or the raw string (filterchange) is acceptable.
 */
declare  class tableau$TableauEventName {
  constructor(...args: empty): mixed;
static +CUSTOM_VIEW_LOAD: Class<tableau$TableauEventName__CUSTOM_VIEW_LOAD> & tableau$TableauEventName__CUSTOM_VIEW_LOAD & "customviewload";// "customviewload"
static +CUSTOM_VIEW_REMOVE: Class<tableau$TableauEventName__CUSTOM_VIEW_REMOVE> & tableau$TableauEventName__CUSTOM_VIEW_REMOVE & "customviewremove";// "customviewremove"
static +CUSTOM_VIEW_SAVE: Class<tableau$TableauEventName__CUSTOM_VIEW_SAVE> & tableau$TableauEventName__CUSTOM_VIEW_SAVE & "customviewsave";// "customviewsave"
static +CUSTOM_VIEW_SET_DEFAULT: Class<tableau$TableauEventName__CUSTOM_VIEW_SET_DEFAULT> & tableau$TableauEventName__CUSTOM_VIEW_SET_DEFAULT & "customviewsetdefault";// "customviewsetdefault"
static +FILTER_CHANGE: Class<tableau$TableauEventName__FILTER_CHANGE> & tableau$TableauEventName__FILTER_CHANGE & "filterchange";// "filterchange"
static +MARKS_SELECTION: Class<tableau$TableauEventName__MARKS_SELECTION> & tableau$TableauEventName__MARKS_SELECTION & "marksselection";// "marksselection"
static +PARAMETER_VALUE_CHANGE: Class<tableau$TableauEventName__PARAMETER_VALUE_CHANGE> & tableau$TableauEventName__PARAMETER_VALUE_CHANGE & "parametervaluechange";// "parametervaluechange"
static +STORY_POINT_SWITCH: Class<tableau$TableauEventName__STORY_POINT_SWITCH> & tableau$TableauEventName__STORY_POINT_SWITCH & "storypointswitch";// "storypointswitch"
static +TAB_SWITCH: Class<tableau$TableauEventName__TAB_SWITCH> & tableau$TableauEventName__TAB_SWITCH & "tabswitch";// "tabswitch"
static +TOOLBAR_STATE_CHANGE: Class<tableau$TableauEventName__TOOLBAR_STATE_CHANGE> & tableau$TableauEventName__TOOLBAR_STATE_CHANGE & "toolbarstatechange";// "toolbarstatechange"
static +VIZ_RESIZE: Class<tableau$TableauEventName__VIZ_RESIZE> & tableau$TableauEventName__VIZ_RESIZE & "vizresize";// "vizresize"

}

declare class tableau$TableauEventName__CUSTOM_VIEW_LOAD mixins tableau$TableauEventName {}
declare class tableau$TableauEventName__CUSTOM_VIEW_REMOVE mixins tableau$TableauEventName {}
declare class tableau$TableauEventName__CUSTOM_VIEW_SAVE mixins tableau$TableauEventName {}
declare class tableau$TableauEventName__CUSTOM_VIEW_SET_DEFAULT mixins tableau$TableauEventName {}
declare class tableau$TableauEventName__FILTER_CHANGE mixins tableau$TableauEventName {}
declare class tableau$TableauEventName__MARKS_SELECTION mixins tableau$TableauEventName {}
declare class tableau$TableauEventName__PARAMETER_VALUE_CHANGE mixins tableau$TableauEventName {}
declare class tableau$TableauEventName__STORY_POINT_SWITCH mixins tableau$TableauEventName {}
declare class tableau$TableauEventName__TAB_SWITCH mixins tableau$TableauEventName {}
declare class tableau$TableauEventName__TOOLBAR_STATE_CHANGE mixins tableau$TableauEventName {}
declare class tableau$TableauEventName__VIZ_RESIZE mixins tableau$TableauEventName {}


declare class tableau$TableauEvent  {

/**
 * Gets the Viz object associated with the event.
 */
getViz(): tableau$Viz;

/**
 * Gets the name of the event, which is a string, but is also one of the items in the TableauEventName enum.
 */
getEventName(): tableau$TableauEventName
}

declare class tableau$CustomViewEvent mixins tableau$TableauEvent {

/**
 * Gets the CustomView object associated with the event.
 */
getCustomViewAsync(): Promise<tableau$CustomView>
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
getFilterAsync(): Promise<tableau$ConcreteFilter>
}

declare class tableau$MarksEvent mixins tableau$TableauEvent {

/**
 * Gets the Worksheet object associated with the event.
 */
getWorksheet(): tableau$Worksheet;

/**
 * Gets the selected marks on the Worksheet that triggered the event.
 */
getMarksAsync(): Promise<tableau$Mark[]>
}

declare class tableau$ParameterEvent mixins tableau$TableauEvent {

/**
 * Gets the name of the parameter that changed.
 */
getParameterName(): string;

/**
 * Gets the Parameter object that triggered the event.
 */
getParameterAsync(): Promise<tableau$Parameter>
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
getNewStoryPoint(): tableau$StoryPoint
}

declare class tableau$TabSwitchEvent mixins tableau$TableauEvent {

/**
 * Gets the name of the sheet that was active before the tab switch event occurred.
 */
getOldSheetName(): string;

/**
 * Gets the name of the sheet that is currently active.
 */
getNewSheetName(): string
}

declare class tableau$ToolbarStateEvent mixins tableau$TableauEvent {

/**
 * Returns the new ToolbarState.
 */
getToolbarState(): tableau$ToolbarState
}

declare class tableau$VizResizeEvent mixins tableau$TableauEvent {

/**
 * Gets the Viz object associated with the event.
 */
getViz(): tableau$Viz;

/**
 * Gets the name of the event, which is a string, but is also one of the items in the TableauEventName enum.
 */
getEventName(): tableau$TableauEventName;

/**
 * Gets the sheetSize record for the current sheet. For more information, see SheetSizeOptions Record.
 */
getVizSize(): tableau$Size
}

declare class tableau$SheetInfo  {

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
getSheetType(): tableau$SheetType;

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
getWorkbook(): tableau$Workbook
}

declare class tableau$Sheet  {

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
getSheetType(): tableau$SheetType;

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
changeSizeAsync(options: tableau$SheetSizeOptions): Promise<tableau$SheetSizeOptions>
}

declare  class tableau$SheetSizeBehaviour {
  constructor(...args: empty): mixed;
static +AUTOMATIC: Class<tableau$SheetSizeBehaviour__AUTOMATIC> & tableau$SheetSizeBehaviour__AUTOMATIC & "automatic";// "automatic"
static +EXACTLY: Class<tableau$SheetSizeBehaviour__EXACTLY> & tableau$SheetSizeBehaviour__EXACTLY & "exactly";// "exactly"
static +RANGE: Class<tableau$SheetSizeBehaviour__RANGE> & tableau$SheetSizeBehaviour__RANGE & "range";// "range"
static +ATLEAST: Class<tableau$SheetSizeBehaviour__ATLEAST> & tableau$SheetSizeBehaviour__ATLEAST & "atleast";// "atleast"
static +ATMOST: Class<tableau$SheetSizeBehaviour__ATMOST> & tableau$SheetSizeBehaviour__ATMOST & "atmost";// "atmost"

}

declare class tableau$SheetSizeBehaviour__AUTOMATIC mixins tableau$SheetSizeBehaviour {}
declare class tableau$SheetSizeBehaviour__EXACTLY mixins tableau$SheetSizeBehaviour {}
declare class tableau$SheetSizeBehaviour__RANGE mixins tableau$SheetSizeBehaviour {}
declare class tableau$SheetSizeBehaviour__ATLEAST mixins tableau$SheetSizeBehaviour {}
declare class tableau$SheetSizeBehaviour__ATMOST mixins tableau$SheetSizeBehaviour {}


declare interface tableau$SheetSizeOptions {

/**
 * Contains an enumeration value of one of the following: AUTOMATIC, EXACTLY, RANGE, ATLEAST, and ATMOST.
 */
behavior: tableau$SheetSizeBehaviour,

/**
 * This is only defined when behavior is EXACTLY, RANGE or ATMOST.
 */
maxSize: number,

/**
 * This is only defined when behavior is EXACTLY, RANGE, or ATLEAST.
 */
minSize: number
} 

declare class tableau$DataTable  {

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
getIsSummaryData(): boolean
}

declare class tableau$Column  {

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
getIndex(): number
}

declare class tableau$Worksheet  {

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
getSummaryDataAsync(options: tableau$getSummaryDataOptions): Promise<tableau$DataTable>;

/**
 * Gets data for all fields in the data source used by the currently active sheet and returns it as an object.
 * You can specify options with an optional parameter. This can only be called on sheets of the WORKSHEET type.
 */
getUnderlyingDataAsync(options: tableau$getUnderlyingDataOptions): Promise<tableau$DataTable>;

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
values: {[key: string]: any}[] | {[key: string]: any},
updateType: tableau$FilterUpdateType,
options?: tableau$FilterOptions): Promise<string>;

/**
 * Applies a quantitative filter to a field or to a date.
 * If a range is specified that is outside of the domain min/max values, no error is raised and the command is allowed.
 * Subsequent calls to getFiltersAsync[] will return these values even if they are outside of the bounds of the domain.
 * This is equivalent to the behavior in Tableau Desktop.
 */
applyRangeFilterAsync(fieldName: string, range: tableau$RangeFilterOptions): Promise<string>;

/**
 * Applies a relative date filter.
 */
applyRelativeDateFilterAsync(fieldName: string, options: tableau$RelativeDateFilterOptions): Promise<string>;

/**
 * Applies a hierarchical filter.
 * The values parameter is either a single value, an array of values, or an object { levels: ["1", "2"] }.
 */
applyHierarchicalFilterAsync(fieldName: string, values: {[key: string]: any}, options: any): Promise<string>;

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
value: {[key: string]: any} | {[key: string]: any}[],
updateType: tableau$SelectionUpdateType): Promise<void>;

/**
 * Allows selection based on this syntax for the first parameter:
 * {
 *    "Field1": value,
 *    "Field2": [1, 2, 3]
 * }
 */
selectMarksAsync(
fieldValuesMap: {[key: string]: any} | tableau$Mark[],
updateType: tableau$SelectionUpdateType): Promise<void>
}

declare interface tableau$getSummaryDataOptions {

/**
 * Do not use aliases specified in the data source in Tableau. Default is false.
 */
ignoreAliases?: boolean,

/**
 * Only return data for the currently selected marks. Default is false.
 */
ignoreSelection?: boolean,

/**
 * The number of rows of data that you want to return. Enter 0 to return all rows.
 */
maxRows: number
} 

declare interface tableau$getUnderlyingDataOptions {

/**
 * Do not use aliases specified in the data source in Tableau. Default is false.
 */
ignoreAliases?: boolean,

/**
 * Only return data for the currently selected marks. Default is false.
 */
ignoreSelection?: boolean,

/**
 * Return all the columns for the data source. Default is false.
 */
ignoreAllColumns?: boolean,

/**
 * The number of rows of data that you want to return. Enter 0 to return all rows.
 */
maxRows: number
} 

declare class tableau$Dashboard  {

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
getParentStoryPoint(): tableau$StoryPoint
}

declare class tableau$DashboardObject  {

/**
 * Gets what the object represents, which is an enum with the following values:
 * BLANK, WORKSHEET, QUICK_FILTER, PARAMETER_CONTROL, PAGE_FILTER, LEGEND, TITLE, TEXT, IMAGE, WEB_PAGE.
 */
getObjectType(): tableau$DashboardObjectType;

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
getSize(): tableau$Size
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
revertStoryPointAsync(index: number): Promise<tableau$StoryPoint>
}

declare class tableau$StoryPointInfo  {

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
getParentStory(): tableau$Story
}

declare class tableau$StoryPoint  {

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
getParentStory(): tableau$Story
}

declare class tableau$Workbook  {

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
activateSheetAsync(sheetNameOrIndex: string | number): Promise<tableau$Sheet>;

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
changeParameterValueAsync(name: string, value: any): Promise<tableau$Parameter>;

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
rememberCustomViewAsync(customViewName: string): Promise<tableau$CustomView>;

/**
 * Sets the active custom view as the default.
 */
setActiveCustomViewAsDefaultAsync(): void
}

declare class tableau$DataSource  {

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
getFields(): tableau$Field[]
}

declare class tableau$Field  {

/**
 * Gets the field name (i.e. caption).
 */
getName(): string;
getAggregation(): tableau$FieldAggregationType;

/**
 * Gets the data source to which this field belongs.
 */
getDataSource(): tableau$DataSource;

/**
 * One of the following values: DIMENSION, MEASURE, UKNOWN
 */
getRole(): tableau$FieldRoleType
}

declare class tableau$CustomView  {

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
saveAsync(): Promise<tableau$CustomView>
}

declare class tableau$Parameter  {

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
getDataType(): tableau$ParameterDataType;

/**
 * The type of allowable values that the parameter can accept. It can be one of the following enumeration items: ALL, LIST, RANGE.
 */
getAllowableValuesType(): tableau$ParameterAllowableValuesType;

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
getDateStepPeriod(): tableau$PeriodType
}

declare interface tableau$FilterOptions {

/**
 * Determines whether the filter will apply in exclude mode or include mode.
 * The default is include, which means that you use the fields as part of a filter.
 * Exclude mode means that you include everything else except the specified fields.
 */
isExcludeMode: boolean
} 

declare interface tableau$RangeFilterOptions {

/**
 * Minimum value for the range (inclusive). Optional. Leave blank if you want a <= filter.
 */
min: number | Date,

/**
 * Maximum value for the range (inclusive). Optional. Leave blank if you want a >= filter.
 */
max: number | Date,

/**
 * The null values to include
 */
nullOption: tableau$NullOption
} 

declare interface tableau$RelativeDateFilterOptions {

/**
 * The UTC date from which to filter.
 */
anchorDate: Date,

/**
 * Year, quarter, month, etc.
 */
periodType: tableau$PeriodType,

/**
 * LAST, LASTN, NEXT, etc.
 */
rangeType: tableau$DateRangeType,

/**
 * The number used when the rangeType is LASTN or NEXTN.
 */
rangeN: number
} 

declare class tableau$Filter  {

/**
 * Gets the parent worksheet
 */
getWorksheet(): tableau$Worksheet;

/**
 * Gets the type of the filter. See FilterType Enum for the values in the enum.
 */
getFilterType(): tableau$FilterType;

/**
 * Gets the name of the field being filtered. Note that this is the caption as shown in the UI and not the actual database field name.
 */
getFieldName(): string;

/**
 * Gets the field that is currently being filtered.
 */
getFieldAsync(): Promise<tableau$Field>
}


/**
 * An enumeration that indicates what to do with null values for a given filter or mark selection call.
 */
declare  class tableau$NullOption {
  constructor(...args: empty): mixed;
static +NULL_VALUES: Class<tableau$NullOption__NULL_VALUES> & tableau$NullOption__NULL_VALUES & "nullValues";// "nullValues"
static +NON_NULL_VALUES: Class<tableau$NullOption__NON_NULL_VALUES> & tableau$NullOption__NON_NULL_VALUES & "nonNullValues";// "nonNullValues"
static +ALL_VALUES: Class<tableau$NullOption__ALL_VALUES> & tableau$NullOption__ALL_VALUES & "allValues";// "allValues"

}

declare class tableau$NullOption__NULL_VALUES mixins tableau$NullOption {}
declare class tableau$NullOption__NON_NULL_VALUES mixins tableau$NullOption {}
declare class tableau$NullOption__ALL_VALUES mixins tableau$NullOption {}


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
getAppliedValues(): tableau$DataValue[]
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
getIncludeNullValues(): boolean
}

declare class tableau$RelativeDateFilter mixins tableau$Filter {

/**
 * The date period of the filter. See PeriodType Enum for the values in the enum.
 */
getPeriod(): tableau$PeriodType;

/**
 * The range of the date filter (years, months, etc.). See DateRangeType Enum for the values in the enum.
 */
getRange(): tableau$DateRangeType;

/**
 * When getRange returns LASTN or NEXTN, this is the N value (how many years, months, etc.).
 */
getRangeN(): number
}

declare type tableau$ConcreteFilter = tableau$CategoricalFilter | tableau$QuantitativeFilter | tableau$RelativeDateFilter;

declare class tableau$DataValue  {

/**
 * Contains the raw native value as a JavaScript type, which is one of String, Number, Boolean, or Date
 */
value: any;

/**
 * The value formatted according to the locale and the formatting applied to the field or parameter.
 */
formattedValue: string
}

declare  class tableau$FilterType {
  constructor(...args: empty): mixed;
static +CATEGORICAL: Class<tableau$FilterType__CATEGORICAL> & tableau$FilterType__CATEGORICAL & "categorical";// "categorical"
static +QUANTITATIVE: Class<tableau$FilterType__QUANTITATIVE> & tableau$FilterType__QUANTITATIVE & "quantitative";// "quantitative"
static +HIERARCHICAL: Class<tableau$FilterType__HIERARCHICAL> & tableau$FilterType__HIERARCHICAL & "hierarchical";// "hierarchical"
static +RELATIVE_DATE: Class<tableau$FilterType__RELATIVE_DATE> & tableau$FilterType__RELATIVE_DATE & "relativedate";// "relativedate"

}

declare class tableau$FilterType__CATEGORICAL mixins tableau$FilterType {}
declare class tableau$FilterType__QUANTITATIVE mixins tableau$FilterType {}
declare class tableau$FilterType__HIERARCHICAL mixins tableau$FilterType {}
declare class tableau$FilterType__RELATIVE_DATE mixins tableau$FilterType {}


declare  class tableau$FilterUpdateType {
  constructor(...args: empty): mixed;
static +ALL: Class<tableau$FilterUpdateType__ALL> & tableau$FilterUpdateType__ALL & "all";// "all"
static +REPLACE: Class<tableau$FilterUpdateType__REPLACE> & tableau$FilterUpdateType__REPLACE & "replace";// "replace"
static +ADD: Class<tableau$FilterUpdateType__ADD> & tableau$FilterUpdateType__ADD & "add";// "add"
static +REMOVE: Class<tableau$FilterUpdateType__REMOVE> & tableau$FilterUpdateType__REMOVE & "remove";// "remove"

}

declare class tableau$FilterUpdateType__ALL mixins tableau$FilterUpdateType {}
declare class tableau$FilterUpdateType__REPLACE mixins tableau$FilterUpdateType {}
declare class tableau$FilterUpdateType__ADD mixins tableau$FilterUpdateType {}
declare class tableau$FilterUpdateType__REMOVE mixins tableau$FilterUpdateType {}


declare  class tableau$PeriodType {
  constructor(...args: empty): mixed;
static +YEARS: Class<tableau$PeriodType__YEARS> & tableau$PeriodType__YEARS & "years";// "years"
static +QUARTERS: Class<tableau$PeriodType__QUARTERS> & tableau$PeriodType__QUARTERS & "quarters";// "quarters"
static +MONTHS: Class<tableau$PeriodType__MONTHS> & tableau$PeriodType__MONTHS & "months";// "months"
static +WEEKS: Class<tableau$PeriodType__WEEKS> & tableau$PeriodType__WEEKS & "weeks";// "weeks"
static +DAYS: Class<tableau$PeriodType__DAYS> & tableau$PeriodType__DAYS & "days";// "days"
static +HOURS: Class<tableau$PeriodType__HOURS> & tableau$PeriodType__HOURS & "hours";// "hours"
static +MINUTES: Class<tableau$PeriodType__MINUTES> & tableau$PeriodType__MINUTES & "minutes";// "minutes"
static +SECONDS: Class<tableau$PeriodType__SECONDS> & tableau$PeriodType__SECONDS & "seconds";// "seconds"

}

declare class tableau$PeriodType__YEARS mixins tableau$PeriodType {}
declare class tableau$PeriodType__QUARTERS mixins tableau$PeriodType {}
declare class tableau$PeriodType__MONTHS mixins tableau$PeriodType {}
declare class tableau$PeriodType__WEEKS mixins tableau$PeriodType {}
declare class tableau$PeriodType__DAYS mixins tableau$PeriodType {}
declare class tableau$PeriodType__HOURS mixins tableau$PeriodType {}
declare class tableau$PeriodType__MINUTES mixins tableau$PeriodType {}
declare class tableau$PeriodType__SECONDS mixins tableau$PeriodType {}


declare  class tableau$DateRangeType {
  constructor(...args: empty): mixed;
static +LAST: Class<tableau$DateRangeType__LAST> & tableau$DateRangeType__LAST & "last";// "last"
static +LASTN: Class<tableau$DateRangeType__LASTN> & tableau$DateRangeType__LASTN & "lastn";// "lastn"
static +NEXT: Class<tableau$DateRangeType__NEXT> & tableau$DateRangeType__NEXT & "next";// "next"
static +NEXTN: Class<tableau$DateRangeType__NEXTN> & tableau$DateRangeType__NEXTN & "nextn";// "nextn"
static +CURRENT: Class<tableau$DateRangeType__CURRENT> & tableau$DateRangeType__CURRENT & "current";// "current"
static +TODATE: Class<tableau$DateRangeType__TODATE> & tableau$DateRangeType__TODATE & "todate";// "todate"

}

declare class tableau$DateRangeType__LAST mixins tableau$DateRangeType {}
declare class tableau$DateRangeType__LASTN mixins tableau$DateRangeType {}
declare class tableau$DateRangeType__NEXT mixins tableau$DateRangeType {}
declare class tableau$DateRangeType__NEXTN mixins tableau$DateRangeType {}
declare class tableau$DateRangeType__CURRENT mixins tableau$DateRangeType {}
declare class tableau$DateRangeType__TODATE mixins tableau$DateRangeType {}



/**
 * A mark represents a single data point on the visualization.
 * It is independent of the type of visualization (bar, line, pie, etc.).
 */
declare class tableau$Mark  {

/**
 * Creates a new Mark with the specified pairs.
 */
constructor(pairs: tableau$Pair[]): this;

/**
 * Gets a collection of field name/value pairs associated with the mark.
 */
getPairs(): tableau$Pair[]
}

declare class tableau$Pair  {

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
constructor(fieldName: string, value: string | number | boolean | Date): this
}

declare  class tableau$SelectionUpdateType {
  constructor(...args: empty): mixed;
static +REPLACE: Class<tableau$SelectionUpdateType__REPLACE> & tableau$SelectionUpdateType__REPLACE & "replace";// "replace"
static +ADD: Class<tableau$SelectionUpdateType__ADD> & tableau$SelectionUpdateType__ADD & "add";// "add"
static +REMOVE: Class<tableau$SelectionUpdateType__REMOVE> & tableau$SelectionUpdateType__REMOVE & "remove";// "remove"

}

declare class tableau$SelectionUpdateType__REPLACE mixins tableau$SelectionUpdateType {}
declare class tableau$SelectionUpdateType__ADD mixins tableau$SelectionUpdateType {}
declare class tableau$SelectionUpdateType__REMOVE mixins tableau$SelectionUpdateType {}


declare interface tableau$Size {
width: number,
height: number
} 

declare interface tableau$Point {
x: number,
y: number
} 
    }
