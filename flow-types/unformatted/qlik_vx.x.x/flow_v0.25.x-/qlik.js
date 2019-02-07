declare module 'qlik' {
        import 'jquery';

	declare export interface Size {
qcx: number,
qcy: number
} 
	declare export interface NxValidationError {
qErrorCode: number,
qContext: string,
qExtendedMessage: string
} 
	declare export interface NxStateCounts {
qLocked: number,
qSelected: number,
qOption: number,
qDeselected: number,
qAlternative: number,
qExcluded: number,
qSelectedExcluded: number,
qLockedExcluded: number
} 
	declare export interface FieldAttributes {
qType: "U"
| "A"
| "I"
| "R"
| "F"
| "M"
| "D"
| "T"
| "TS"
| "IV",
qnDec: 0
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
| 13
| 14
| 15,
qUseThou: 0 | 1,
qFmt: string,
qDec: string,
qThou: string,
qSAFEARRAY: any[]
} 
	declare export interface CharRange {
qCharPos: number,
qCharCount: number
} 
	declare export interface NxHighlightRanges {
qRanges: CharRange[]
} 
	declare export interface NxSimpleValue {
qText: string,
qNum: number
} 
	declare export interface NxAttributeExpressionValues {
qValues: NxSimpleValue[]
} 
	declare export type NxCellRows = NxCell[];
	declare export interface NxGroupTail {
qUp: number,
qDown: number
} 
	declare export interface Rect {
qLeft: number,
qTop: number,
qWdith: number,
qHeight: number
} 
	declare export interface NxPivotDimensioncell {
qText: string,
qElemNo: number,
qValue: number,
qCanExpand: boolean,
qCanCollapse: boolean,
qType: "V"
| "E"
| "N"
| "T"
| "P"
| "R"
| "U",
qUp: number,
qDown: number,
qSubNodes: NxPivotDimensioncell[],
qAttrExps: NxAttributeExpressionValues[],
qAttrDims: NxAttributeDimValues[]
} 
	declare export interface NxPivotValuePoint {
qLabel?: string,
qText: string,
qNum: number,
qType: "V"
| "E"
| "N"
| "T"
| "P"
| "R"
| "U",
qAttrExps: NxAttributeExpressionValues
} 
	declare export interface NxPivotPage {
qLeft: NxPivotDimensioncell[],
qTop: NxPivotDimensioncell[],
qData: NxPivotValuePoint[],
qArea: Rect
} 
	declare export interface NxStackedPivotCell {
qText: string,
qElemNo: number,
qValue: number,
qCanExpand: boolean,
qCanCollapse: boolean,
qType: "V"
| "E"
| "N"
| "T"
| "P"
| "R"
| "U",
qMaxPos: number,
qMinNeg: number,
qUp: number,
qDown: number,
qRow: number,
qSubNodes: NxStackedPivotCell[],
qAttrExps: NxAttributeExpressionValues,
qAttrDims: NxAttributeDimValues
} 
	declare export interface NxStackPage {
qData: NxStackedPivotCell[],
qArea: Rect
} 
	declare export interface NxCellPosition {
qx: number,
qy: number
} 
	declare export interface NxDataPage {
qMatrix: NxCellRows[],
qTails: NxGroupTail[],
qArea: Rect,
qIsReduced: boolean
} 
	declare export interface NxAttributeDimValues {
qValues: NxSimpleDimValue[]
} 
	declare export interface NxSimpleDimValue {
qText: string,
qElemNo: number
} 
	declare export interface NxCell {
qText: string,
qNum: number,
qElemNumber: number,
qState: "L"
| "S"
| "O"
| "D"
| "A"
| "X"
| "XS"
| "XL",
qIsEmpty: boolean,
qIsTotalCell: boolean,
qIsOtherCell: boolean,
qFrequency: string,
qHighlightRanges: NxHighlightRanges,
qAttrExps: NxAttributeExpressionValues,
qIsNull: boolean,
qAttrDims: NxAttributeDimValues
} 
	declare export interface NxAttrExprInfo {
qMin: number,
qMax: number,
qContinuousAxes: boolean,
qIsCyclic: boolean,
qFallbackTitle: string
} 
	declare export interface NxAttrDimInfo {
qCardinal: number,
qSize: Size,
qFallbackTitle: string,
qLocked: boolean,
qError: NxValidationError
} 
	declare export interface ColumnInfo {
qFallbackTitle: string,
qApprMaxGlyphCount: number,
qCardinal: string,
qSortIndicator: "N" | "A" | "D",
qNumFormat: FieldAttributes,
qIsAutoFormat: boolean,
qMin: number,
qMax: number,
qError: NxValidationError,
qReverseSort: boolean,
qAttrExprInfo: NxAttrExprInfo[],
qAttrDimInfo: NxAttrDimInfo[]
} 
	declare export type NxDimensionInfo = {
qLocker: string,
qGroupFallbackTitles: string[],
qGroupPos: number,
qStateCounts: NxStateCounts,
qTags: string[],
qDimensionType: "D" | "N" | "T",
qGrouping: "N" | "H" | "C",
qIsSemantic: boolean,
qGroupFieldDefs: string[],
qContinuousAxes: boolean,
qIsCyclic: boolean,
qDerivedField: boolean
} & ColumnInfo

	declare export type NxMeasureInfo = ColumnInfo;
	declare export interface HyperCube {
qStateName: string,
qSize: Size,
qError: NxValidationError,
qDimensionInfo: NxDimensionInfo[],
qMeasureInfo: NxMeasureInfo[],
qEffectiveInterColumnSortOrder: number[],
qGrandTotalRow: NxCell[],
qDataPages: NxDataPage[],
qPivotDataPages: NxPivotPage[],
qStackedDataPages: NxStackPage[],
qMode: "S" | "P" | "K",
qNoOfLeftDims: number,
qIndentMode: boolean,
qLastExpandedPos: NxCellPosition,
qHasOtherValues: boolean
} 
	declare export interface NxInfo {
qId: string,
qType: string
} 
	declare export interface NxCurrentSelectionItem {
qTotal: number,
qIsNum?: boolean,
qField: string,
qLocked?: boolean,
qOneAndOnlyOne?: boolean,
qTextSearch?: string,
qSelectedCount: number,
qSelected: string,
qRangeInfo: RangeSelectInfo[],
qSortIndex: number,
qStateCounts: NxStateCounts,
qSelectedFieldSelectionInfo: NxFieldSelectionInfo[],
qNotSelectedFieldSelectionInfo: NxFieldSelectionInfo[],
qSelectionThreshold: number
} 
	declare export interface RangeSelectInfo {
qRangeLo: number,
qRangeHi: number,
qMeasure: string
} 
	declare export interface NxFieldSelectionInfo {
qName: string,
qFieldSelectionmode: "NORMAL" | "AND" | "NOT"
} 
	declare export interface Selectionobject {
qBackCount: number,
qForwardCount: number,
qSelections: NxCurrentSelectionItem[]
} 
	declare export interface Layout {
qHyperCube: HyperCube,
qInfo: NxInfo,
qSelectionInfo: Selectionobject
} 
	declare export interface ValueExpr {
qv: string
} 
	declare export interface SortCriteria {
qSortByState: -1 | 0 | 1,
qSortByFrequency: -1 | 0 | 1,
qSortByNumeric: -1 | 0 | 1,
qSortByAscii: -1 | 0 | 1,
qSortByLoadOrder: -1 | 0 | 1,
qSortByExpression: -1 | 0 | 1,
qExpression: ValueExpr
} 
	declare export interface NxInlineDimensionDef {
qGrouping: "N" | "H" | "C",
qFieldDefs: string[],
qSortCriteries: SortCriteria[],
qNumberPresentations: FieldAttributes[],
qReverseSort: boolean,
qActiveField: number
} 
	declare export interface OtherTotalSpecProp {
qOtherMode: "OTHER_OFF"
| "OTHER_COUNTED"
| "OTHER_ABS_LIMITED"
| "OTHER_ABS_ACC_TARGET"
| "OTHER_REL_LIMITED"
| "OTHER_REL_ACC_TARGET",
qOtherCounted: ValueExpr,
qOtherLimit: ValueExpr,
qOtherLimitMode: "OTHER_GE_LIMIT" | "OTHER_LE_LIMIT" | "OTHER_GT_LIMIT" | "OTHER_LT_LIMIT",
qSupressOther: boolean,
qForceBadValueKeeping: boolean,
qApplyEvenWhenPossiblyWrongResult: boolean,
qGlobalOtherGrouping: boolean,
qOtherCollapseInnerDimensions: boolean,
qOtherSortMode: "OTHER_SORT_DEFAULT" | "OTHER_SORT_DESCENDING" | "OTHER_SORT_ASCENDING",
qTotalMode: "TOTAL_OFF" | "TOTAL_EXPR",
qReferencedExpression: string
} 
	declare export interface NxAttrExprDef {
qExpression: string,
qLibraryId: string
} 
	declare export interface NxAttrDimDef {
qDef: string,
qLibraryId: string,
qSortBy: SortCriteria
} 
	declare export interface NxDimension {
qLibraryId: string,
qDef: NxInlineDimensionDef,
qNullSuppression: boolean,
qOtherTotalSpec: OtherTotalSpecProp,
qShowAll: boolean,
qOtherLabel: string,
qTotalLabel: string,
qCalcCond: ValueExpr,
qAttributeExpressions: NxAttrExprDef[],
qAttributeDimensions: NxAttrDimDef[]
} 
	declare export interface NxMeasure {
qLibraryId: string,
qDef: NxInlineMeasureDef,
qSortBy: SortCriteria,
qAttributeExpressions: NxAttrExprDef[],
qCalcCond: ValueExpr,
qAttributeDimensions: NxAttrDimDef[]
} 
	declare export interface NxInlineMeasureDef {
qcx: number,
qcy: number
} 
	declare export interface NxPage {
qLeft?: number,
qTop?: number,
qWidth?: number,
qHeight?: number
} 
	declare export interface HyperCubeDef {
qStateName?: string,
qDimensions?: NxDimension[],
qMeasures?: NxMeasure[],
qInterColumnSortOrder?: number[],
qSuppressZero?: boolean,
qSupressMissing?: boolean,
qInitialDataFetch?: NxPage[],
qMode?: "S" | "P" | "K",
qNoOfLeftDims?: number,
qAlwaysFullyExpanded?: boolean,
qMaxStackedCells?: number,
qPopulateMissing?: boolean,
qShowTotalsAbove?: boolean,
qIndentMode?: boolean,
qCalcCond?: ValueExpr,
qSortByYValue?: -1 | 0 | 1
} 
	declare export interface NxAutoSortByStateDef {
qDisplayNumberOfRows: number
} 
	declare export interface NxListobjectExpressionDef {
qExpr: string,
qLibraryId: string
} 
	declare export interface ListobjectDef {
qStateName: string,
qLibraryId: string,
qDef: NxInlineDimensionDef,
qAutoSortByState: NxAutoSortByStateDef,
qFrequencyMode: "NX_FREQUENCY_NONE" | "NX_FREQUENCY_VALUE" | "NX_FREQUENCY_PERCENT" | "NX_FREQUENCY_RELATIVE",
qShowAlternatives: boolean,
qInitialDataFetch: NxPage[],
qExpressions: NxListobjectExpressionDef[]
} 
	declare export interface InitialPropertiesHyperCube {
qHyperCubeDef: HyperCubeDef,
[key: string]: any
} 
	declare export interface InitialPropertiesListobject {
qListobjectDef: ListobjectDef,
[key: string]: any
} 
	declare export type InitialProperties = InitialPropertiesHyperCube | InitialPropertiesListobject;
	declare export interface SnapshotLegacy {
canTakeSnapshot: boolean
} 
	declare export type SupportFunction = (layout: Layout) => boolean;
	declare export type SupportItem = boolean | SupportFunction;
	declare export interface Support {
snapshot: SupportItem | SnapshotLegacy,
export: SupportItem,
exportData: SupportItem
} 
	declare export type Paint = (
$element?: JQuery,
layout?: Layout,
qDimensionInfo?: NxDimensionInfo,
qMeasureInfo?: NxDimensionInfo,
qMatrix?: NxCellRows[],
dimensions?: NxCell[],
measures?: NxCell[],
qSize?: Size,
qId?: string,
qSelectionInfo?: Selectionobject) => void;
	declare export interface VisualizationCommon {
qHyperCubeDef: HyperCubeDef,
title: string,
showTitles: boolean,
subtitle: string,
footnote: string
} 
	declare export type VisualizationOptions = VisualizationCommon;
	declare export type ShowFunction = (
layout: Layout,
cls: any,
obj: any) => boolean | ((measure: NxMeasure) => boolean);
	declare export interface CustomPropertyCommon {
type?: "string"
| "integer"
| "number"
| "array"
| "boolean"
| "items",
ref?: string,
label?: string,
show?: boolean | ShowFunction
} 
	declare export type CustomPropertyString = {
type: "string",
expression?: "always" | "optional" | "",
maxLength?: number,
defaultValue?: string
} & CustomPropertyCommon

	declare export type CustomPropertyInteger = {
type: "integer",
component?: string,
min?: string,
max?: string,
defaultValue?: number
} & CustomPropertyCommon

	declare export type CustomPropertyNumber = {
type: "number",
component?: string,
min?: string,
max?: string,
defaultValue?: number
} & CustomPropertyCommon

	declare export type CustomPropertyArray = {
type: "array",
component?: void,
itemTitleRef?: string,
allowAdd?: boolean,
allowRemove?: boolean,
addTranslation?: string,
allowMove?: boolean
} & CustomPropertyCommon

	declare export type CustomPropertyButton = {
component: "button",
action(data: VisualizationOptions): void
} & CustomPropertyCommon

	declare export interface ButtonGroupOption {
value: string,
label: string,
tooltip: string
} 
	declare export type CustomPropertyButtonGroup = {
type: "string",
component: "buttongroup",
defaultValue?: string,
options?: ButtonGroupOption[] | (() => ButtonGroupOption[])
} & CustomPropertyCommon

	declare export type CustomPropertyCheckbox = {
type: "boolean",
defaultValue?: boolean
} & CustomPropertyCommon

	declare export type CustomPropertyColorPicker = {
type: "integer",
component: "color-picker",
defaultValue?: number
} & CustomPropertyCommon

	declare export interface CustomPropertyOption {
value: string,
label: string
} 
	declare export type CustomPropertyOptions = CustomPropertyOption[] | (() => CustomPropertyOption[]);
	declare export type CustomPropertyDropdown = {
type: "string",
ref: string,
component: "dropdown",
defaultValue?: string,
options?: CustomPropertyOptions
} & CustomPropertyCommon

	declare export type CustomPropertyLink = {
component: "link",
url?: string
} & CustomPropertyCommon

	declare export type CustomProperyMedia = {
type: "string",
component: "media",
layoutRef?: string
} & CustomPropertyCommon

	declare export type CustomPropertyRadio = {
type: "string",
component: "radiobuttons",
defaultValue?: string,
options?: CustomPropertyOptions
} & CustomPropertyCommon

	declare export type CustomPropertySlider = {
type: "number",
component: "slider",
defaultValue?: number,
min?: number,
max?: number,
step?: number
} & CustomPropertyCommon

	declare export type CustomPropertyRangeSlider = {
type: "array",
component: "slider",
defaultValue?: number,
min?: number,
max?: number,
step?: number
} & CustomPropertyCommon

	declare export type CustomPropertySwitch = {
type: "boolean",
component: "switch",
defaultValue?: string,
options?: CustomPropertyOptions
} & CustomPropertyCommon

	declare export type CustomPropertyText = {
component: "text"
} & CustomPropertyCommon

	declare export type CustomPropertyTextArea = {
type: "string",
component: "textarea",
rows?: number,
maxlength?: number,
defaultValue?: string
} & CustomPropertyCommon

	declare export type CustomPropertyExpression = {
type: void,
component: "expression",
expressionType: "dimension"
| "measure"
| "StringExpr"
| "ValueExpr"
| "ValueExpression"
| "StringExpression",
defaultValue?: string
} & CustomPropertyCommon

	declare export type CustomPropertyItems = {
type: "items",
items: {
[key: string]: CustomProperty
}
} & CustomPropertyCommon

	declare export type CustomProperty = CustomPropertyString
| CustomPropertyInteger
| CustomPropertyNumber
| CustomPropertyArray
| CustomPropertyButton
| CustomPropertyButtonGroup
| CustomPropertyCheckbox
| CustomPropertyColorPicker
| CustomPropertyDropdown
| CustomPropertyLink
| CustomProperyMedia
| CustomPropertyRadio
| CustomPropertySlider
| CustomPropertyRangeSlider
| CustomPropertySwitch
| CustomPropertyText
| CustomPropertyTextArea
| CustomPropertyExpression
| CustomPropertyItems;
	declare export interface Definition {
type: "items",
component: "accordion",
items: {
data?: {
uses: "data"
},
dimensions?: {
uses: "dimensions",
ref?: string,
min?: number,
max?: number,
items?: {
[key: string]: CustomProperty
}
},
measures?: {
uses: "measures",
ref?: string,
min?: number,
max?: number,
items?: {
[key: string]: CustomProperty
}
},
sorting?: {
uses: "sorting",
items?: {
[key: string]: CustomProperty
}
},
settings?: {
uses: "settings",
items?: {
[key: string]: CustomProperty
}
}
}
} 
	declare export interface Extension {
initialProperties: InitialProperties,
definition: Definition,
paint: Paint,
support?: Support
} 
	declare export interface Patch {
qOp: "add" | "remove" | "replace",
qPath: string,
qValue: string
} 
	declare export interface BackendApi {
abortSearch(): void,
acceptSearch(toggleMode: boolean): void,
applyPatches(qPatches: Patch[], qSoftPatch: boolean): Promise<any>,
clearSelections(): void,
clearSoftPatches(): Promise<any>,
collapseLeft(qRow: number, qCol: number, qAll?: boolean): Promise<any>,
collapseTop(qRow: number, qCol: number, qAll?: boolean): Promise<any>,
eachDataRow(callback: (i: number, d: NxCellRows) => boolean | void): NxCellRows,
expandLeft(qRow: number, qCol: number, qAll?: boolean): Promise<any>,
expandTop(qRow: number, qCol: number, qAll?: boolean): Promise<any>,
getData(qPages: NxPage[]): Promise<NxDataPage[]>,
getDataRow(rownum: number): NxCellRows | null,
getDimensionInfos(): NxDimensionInfo[],
getMeasureInfos(): NxMeasureInfo[],
getPivotData(qPages: NxPage[]): Promise<NxPivotPage>,
getRowCount(): number,
getStackeddata(qPages: NxPage[], qMaxNbrCells: number): Promise<NxStackPage>,
hasSelections(): boolean,
save(): Promise<void>,
search(term: string): void,
selectValues(qDimNo: number, qValues: number[], qToggleMode: boolean): void,
selectProperties(props: {}): Promise<any>
} 
	declare export interface ExtensionContext {
$element: JQuery,
$scope: any,
_inAnalysisState: boolean,
_inEditState: boolean,
_interactionState: number,
_on: boolean,
backendApi: BackendApi,
paint: Paint,
selectionsEnabled: boolean,
toggleLasso(): void,
selectValues(dimNo: number, values: number[], toggleMode: boolean): void
} 
	declare export interface QDimensionCell {
qText: string,
qElemNumber: number,
qState: string,
qNum?: number,
select(): void
} 
	declare export interface QMeasureCell {
qText: string,
qNum?: number,
getPercent(): number,
getPercentOfMax(): number
} 
	declare export interface QRow {
dimensions: QDimensionCell[],
measures: QMeasureCell[],
cells: Array<QDimensionCell | QMeasureCell>
} 
	declare export interface QHeader {
qFallbackTitle: string,
qSortIndicator: "A" | "B",
isOrderedBy: boolean,
qReverseSort: boolean,
col: number,
qCardinal?: number,
qStateCounts?: {
[state: string]: number
},
qMin?: number,
qMax?: number,
errorCode?: number,
errorMessage?: number,
orderBy(): void,
reverseOrder(): void,
selectRange(min: number, max: number, inclMin: boolean, inclMax: boolean): Promise<any>
} 
	declare export interface ExportDataOptions {
format: "OOXML" | "CSV_C" | "CSV_T",
filename?: string,
state: "A" | "P",
download: boolean
} 
	declare export interface QTable {
rows: QRow[],
headers: QHeader[],
totals: QMeasureCell[],
rowCount: number,
colCount: number,
exportData(options: ExportDataOptions, callback: (url: string) => void): void,
getColByName(fld: string): number | void,
getMoreData(): void
} 
	declare export interface Variable {
qContent: {
qIsNum: boolean,
qString: string
}
} 
	declare export interface QFieldValue {
qText: string,
qElemNumber: number,
qState: any,
qNum?: string,
qFrequency?: string,
select(toggle?: boolean, softlock?: boolean): Promise<any>
} 
	declare export interface GetDataOptions {
rows: number,
frequencyMode: "V" | "P" | "R" | "N"
} 
	declare export interface QField {
rows?: QFieldValue[],
rowCount?: number,
qStateCounts?: {
[state: string]: number
},
clear(): Promise<any>,
clearOther(softlock: boolean): Promise<any>,
getData(options: GetDataOptions): this,
getMoreData(): this,
lock(): Promise<any>,
select(values: number[], toggle?: boolean, softlock?: boolean): Promise<any>,
selectAll(softlock?: boolean): Promise<any>,
selectAlternative(softlock?: boolean): Promise<any>,
selectExcluded(softlock?: boolean): Promise<any>,
selectMatch(match: string, softlock?: boolean): Promise<any>,
selectPossible(softlock?: boolean): Promise<any>,
selectValues(values: QFieldValue[], toggle?: boolean, softlock?: boolean): Promise<any>,
toggleSelect(match: string, softlock?: boolean): Promise<any>,
unlock(): Promise<any>
} 
	declare export type ListTypes = "FieldList"
| "MeasureList"
| "DimensionList"
| "BookmarkList"
| "Selectionobject"
| "SnapshotList"
| "MediaList"
| "sheet"
| "Materobject"
| "VariableList"
| "story";
	declare export interface App {
addAlternateState(qStateName: string): Promise<any>,
back(): Promise<any>,
clearrAll(lockedAlso?: boolean, state?: string): Promise<any>,
close(): void,
createCube(
qHyperCubeDef: HyperCubeDef,
callback?: (hypercube: HyperCube) => void): Promise<any>,
destroySession(id: string): Promise<any>,
doReload(qMode?: "0" | "1" | "2", qPartial?: boolean, qDebug?: boolean): Promise<any>,
doSave(qFileName?: string): Promise<any>,
field(field: string, state?: string): QField,
forward(): Promise<any>,
getAppLayout(callback: (layout: Layout) => void): Promise<any>,
getFullPropertyTree(id: string): Promise<any>,
getobject(
elem?: HTMLElement | string,
id?: string | "CurrentSelections",
options?: {
noInteraction?: boolean,
noSelections?: boolean
}): Promise<any>,
getobjectProperties(id: string): Promise<any>,
getSnapshot(elem?: HTMLElement | string, id?: string): Promise<any>,
lockAll(state?: string): Promise<any>,
removeAlternateState(qStateName: string): Promise<any>,
unlockAll(state?: string): Promise<any>,
variable: {
getContent(variable: string, callback: (value: Variable, app: App) => void): Promise<any>,
setContent(variable: string, value: string): void
}
} 
	declare export function callRepository(path: string, method: string, body: string): Promise<any>

	declare export function currApp(reference: {[key: string]: any}): App

	declare export interface GetAppConfig {
host?: string,
port: string | number,
prefix?: string,
isSecure?: boolean,
openWithoutData?: boolean,
identity?: string
} 
	declare export function getAppList(callback: App[], config: GetAppConfig): void

	declare export function getExtensionList(callback: any[]): Promise<any>

	declare export type Global = any;
	declare export interface GetGlobalConfig {
host: string,
port: string,
prefix: string,
isSecure: boolean,
identity: string
} 
	declare export function getGlobal(config: GetGlobalConfig): Global

	declare export function openApp(appId: string, config: GetAppConfig): App

	declare export function registerExtension(id: string, impl: Extension, metadata: {[key: string]: any}): void

	declare export function resize(ID?: string): void

	declare type LanguageCodes$German = "de" | "de-DE";

declare type LanguageCodes$English = "en" | "en-US";

declare type LanguageCodes$Spanish = "es" | "es-ES";

declare type LanguageCodes$French = "fr" | "fr-FR";

declare type LanguageCodes$Italian = "it" | "it-IT";

declare type LanguageCodes$Japanese = "ja" | "ja-JP";

declare type LanguageCodes$Korean = "ko" | "ko-KR";

declare type LanguageCodes$Dutch = "nl" | "nl-NL";

declare type LanguageCodes$Polish = "pl" | "pl-PL";

declare type LanguageCodes$BrazilianPortuguese = "pt" | "pt-BR";

declare type LanguageCodes$Russian = "ru" | "ru-RU";

declare type LanguageCodes$Swedish = "sv" | "sv-SE";

declare type LanguageCodes$Turkish = "ts" | "ts-TR";

declare type LanguageCodes$SimplifiedChinese = "zh-CN";

declare type LanguageCodes$TraditionalChinese = "zh-TW";

declare type LanguageCodes$ALL = LanguageCodes$German
| LanguageCodes$English
| LanguageCodes$Spanish
| LanguageCodes$French
| LanguageCodes$Italian
| LanguageCodes$Japanese
| LanguageCodes$Korean
| LanguageCodes$Dutch
| LanguageCodes$Polish
| LanguageCodes$BrazilianPortuguese
| LanguageCodes$Russian
| LanguageCodes$Swedish
| LanguageCodes$Turkish
| LanguageCodes$SimplifiedChinese
| LanguageCodes$TraditionalChinese;
	declare export function setLanguage(lang: LanguageCodes$LanguageCodes$ALL): void

	declare export interface Error {
code: any,
message: string
} 
	declare export function setOnError(onError: (error: Error) => void, onWarning: (warning: string) => void): void

	declare export function table(ext: {[key: string]: any}, path?: string): void

    }
