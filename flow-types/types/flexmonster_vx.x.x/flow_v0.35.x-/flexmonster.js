declare module 'flexmonster' {
        declare var Flexmonster: FlexmonsterConstructor;
	declare module.exports: typeof Flexmonster

	declare interface FlexmonsterConstructor {
new (params: Flexmonster$Flexmonster$Params): Flexmonster$Flexmonster$Pivot,
(params: Flexmonster$Flexmonster$Params): Flexmonster$Flexmonster$Pivot
} 
	declare interface Flexmonster$Params {
toolbar?: boolean,
licenseKey?: string,
width?: string | number,
height?: string | number,
componentFolder?: string,
report?: Flexmonster$Report | string,
global?: Flexmonster$Report,
customizeCell?: (cell: Flexmonster$CellBuilder, data: Flexmonster$CellData) => void,
customizeContextMenu?: (
items: Flexmonster$ContextMenuItem[],
data: Flexmonster$CellData | Flexmonster$ChartData,
viewType: string) => Flexmonster$ContextMenuItem[],
afterchartdraw?: () => void,
aftergriddraw?: (param: {[key: string]: any}) => void,
beforegriddraw?: (param: {[key: string]: any}) => void,
beforetoolbarcreated?: (toolbar: Flexmonster$Toolbar) => void,
cellclick?: (cell: Flexmonster$CellData) => void,
celldoubleclick?: (cell: Flexmonster$CellData) => void,
datachanged?: (param: {[key: string]: any}) => void,
dataerror?: (param: {[key: string]: any}) => void,
datafilecancelled?: () => void,
dataloaded?: () => void,
exportcomplete?: () => void,
exportstart?: () => void,
fieldslistclose?: () => void,
fieldslistopen?: () => void,
filterclose?: () => void,
filteropen?: () => void,
loadingdata?: () => void,
loadinglocalization?: () => void,
loadingolapstructure?: () => void,
loadingreportfile?: () => void,
localizationerror?: () => void,
localizationloaded?: () => void,
olapstructureerror?: () => void,
olapstructureloaded?: () => void,
openingreportfile?: () => void,
printcomplete?: () => void,
printstart?: () => void,
querycomplete?: () => void,
queryerror?: () => void,
ready?: () => void,
reportchange?: () => void,
reportcomplete?: () => void,
reportfilecancelled?: () => void,
reportfileerror?: () => void,
runningquery?: () => void,
update?: () => void,
container?: string
} 

declare interface Flexmonster$Pivot {
addCalculatedMeasure(measure: Flexmonster$Measure): void,
addCondition(condition: Flexmonster$ConditionalFormat): void,
addJSON(json: {[key: string]: any}[]): void,
alert(
options: {
title?: string,
message?: string,
type?: string,
buttons?: Array<{
label: string,
handler?: () => void
}>,
blocking?: boolean
}): void,
clear(): void,
clearFilter(hierarchyName: string): void,
clearXMLACache(
proxyUrl: string,
databaseId: string,
callbackHandler: ((reponse: {[key: string]: any}) => void) | string,
cubeId: string,
measuresGroupId: string,
username?: string,
password?: string): void,
closeFieldsList(): void,
collapseAllData(): void,
collapseData(hierarchyName: string): void,
connectTo(object: Flexmonster$DataSource): void,
customizeCell(
customizeCellFunction: (cell: Flexmonster$CellBuilder, data: Flexmonster$CellData) => void): void,
customizeContextMenu(
customizeFunction: (
items: Flexmonster$ContextMenuItem[],
data: Flexmonster$CellData | Flexmonster$ChartData,
viewType: string) => Flexmonster$ContextMenuItem[]): void,
dispose(): void,
expandAllData(withAllChildren?: boolean): void,
expandData(hierarchyName: string): void,
exportTo(
type: string,
exportOptions?: Flexmonster$ExportOptions,
callbackHandler?: ((result: {[key: string]: any}) => void) | string): void,
getAllConditions(): Flexmonster$ConditionalFormat[],
getAllHierarchies(): Flexmonster$Hierarchy[],
getAllMeasures(): Flexmonster$Measure[],
getCell(rowIdx: number, colIdx: number): Flexmonster$CellData,
getColumns(): Flexmonster$Hierarchy[],
getCondition(id: string): Flexmonster$ConditionalFormat,
getData(
options: {
slice?: Flexmonster$Slice
},
callbackHandler: ((rawData: any) => void) | string,
updateHandler?: ((rawData: any) => void) | string): void,
getFilter(hierarchyName: string): Flexmonster$FilterItem[],
getFilterProperties(hierarchyName: string): Flexmonster$FilterProperties,
getFormat(measureName: string): Flexmonster$Format,
getMeasures(): Flexmonster$Measure[],
getMembers(
hierarchyName: string,
memberName: string,
callbackHandler: ((members: Flexmonster$Member[]) => void) | string): Flexmonster$Member[],
getOptions(): Flexmonster$Options,
getReport(format?: string): Flexmonster$Report | string,
getReportFilters(): Flexmonster$Hierarchy[],
getRows(): Flexmonster$Hierarchy[],
getSelectedCell(): Flexmonster$CellData | Flexmonster$CellData[],
getSort(hierarchyName: string): string,
getXMLACatalogs(
proxyURL: string,
dataSource: string,
callbackHandler: ((response: any) => void) | string,
username?: string,
password?: string): void,
getXMLACubes(
proxyURL: string,
dataSource: string,
catalog: string,
callbackHandler: ((response: any) => void) | string,
username?: string,
password?: string): void,
getXMLADataSources(
proxyURL: string,
callbackHandler: ((response: any) => void) | string,
username?: string,
password?: string): void,
getXMLAProviderName(
proxyURL: string,
callbackHandler: ((response: any) => void) | string,
username?: string,
password?: string): string,
load(url: string, componentFolder?: string): void,
off(eventType: string, handler?: ((...args: any[]) => any) | string): void,
on(eventType: string, handler: ((...args: any[]) => any) | string): void,
open(): void,
openFieldsList(): void,
openFilter(hierarchyName: string): void,
print(options?: Flexmonster$PrintOptions): void,
refresh(): void,
removeAllCalculatedMeasures(): void,
removeAllConditions(): void,
removeCalculatedMeasure(uniqueName: string): void,
removeCondition(id: string): void,
removeSelection(): void,
runQuery(slice: Flexmonster$Slice): void,
save(
filename: string,
destination: string,
callbackHandler?: (() => void) | string,
url?: string,
embedData?: boolean): string,
setBottomX(hierarchyName: string, num: number, measure: Flexmonster$MeasureObject): void,
setFilter(hierarchyName: string, items: string[], negation?: boolean): void,
setFormat(format: Flexmonster$Format, measureName: string): void,
setOptions(options: Flexmonster$Options): void,
setReport(report: Flexmonster$Report): void,
setSort(hierarchyName: string, sortName: string, customSorting?: string[]): void,
setTopX(hierarchyName: string, num: number, measure: Flexmonster$MeasureObject): void,
showCharts(type?: string, multiple?: boolean): void,
showGrid(): void,
showGridAndCharts(type?: string, position?: string, multiple?: boolean): void,
sortingMethod(
hierarchyName: string,
compareFunction: (a: string, b: string) => boolean): void,
sortValues(
axisName: string,
type: string,
tuple: number[],
measure: Flexmonster$MeasureObject): void,
updateData(object: Flexmonster$DataSource | {[key: string]: any}[]): void,
version: string,
fusioncharts?: {
getData(
options: {
type: string,
slice?: Flexmonster$Slice,
prepareDataFunction?: (rawData: any) => any
},
callbackHandler: ((rawData: any) => void) | string,
updateHandler?: ((rawData: any) => void) | string): void,
getNumberFormat(format: {[key: string]: any}): {[key: string]: any}
},
googlecharts?: {
getData(
options: {
type?: string,
slice?: Flexmonster$Slice,
prepareDataFunction?: (rawData: any) => any
},
callbackHandler: ((rawData: any) => void) | string,
updateHandler?: ((rawData: any) => void) | string): void,
getNumberFormat(format: {[key: string]: any}): {[key: string]: any},
getNumberFormatPattern(format: {[key: string]: any}): string
},
highcharts?: {
getData(
options: {
type?: string,
slice?: Flexmonster$Slice,
xAxisType?: string,
valuesOnly?: boolean,
withDrilldown?: boolean,
prepareDataFunction?: (rawData: any) => any
},
callbackHandler: ((rawData: any) => void) | string,
updateHandler?: ((rawData: any) => void) | string): void,
getAxisFormat(format: {[key: string]: any}): string,
getPointXFormat(format: {[key: string]: any}): string,
getPointYFormat(format: {[key: string]: any}): string,
getPointZFormat(format: {[key: string]: any}): string
}
} 

declare interface Flexmonster$Report {
dataSource?: Flexmonster$DataSource,
slice?: Flexmonster$Slice,
options?: Flexmonster$Options,
conditions?: Flexmonster$ConditionalFormat[],
formats?: Flexmonster$Format[],
tableSizes?: {
columns?: Flexmonster$ColumnSize[],
rows?: Flexmonster$RowSize[]
},
localization?: {[key: string]: any} | string
} 

declare interface Flexmonster$DataSource {
browseForFile?: boolean,
catalog?: string,
cube?: string,
data?: {[key: string]: any}[],
dataSourceInfo?: string,
dataSourceType?: string,
fieldSeparator?: string,
filename?: string,
ignoreQuotedLineBreaks?: boolean,
proxyUrl?: string,
recordsetDelimiter?: string,
binary?: boolean,
roles?: string,
localeIdentifier?: string,
effectiveUserName?: string,
customData?: string,
hash?: string,
username?: string,
password?: string
} 

declare interface Flexmonster$Slice {
columns?: Flexmonster$Hierarchy[],
measures?: Flexmonster$Measure[],
reportFilters?: Flexmonster$Hierarchy[],
rows?: Flexmonster$Hierarchy[],
drills?: {
drillAll?: boolean,
columns?: Array<{
tuple: string[],
measure?: Flexmonster$MeasureObject
}>,
rows?: Array<{
tuple: string[],
measure?: Flexmonster$MeasureObject
}>
},
expands?: {
expandAll?: boolean,
columns?: Array<{
tuple: string[],
measure?: Flexmonster$MeasureObject
}>,
rows?: Array<{
tuple: string[],
measure?: Flexmonster$MeasureObject
}>
},
sorting?: {
column?: Array<{
type: string,
tuple: string[],
measure: Flexmonster$MeasureObject
}>,
row?: Array<{
type: string,
tuple: string[],
measure: Flexmonster$MeasureObject
}>
},
drillThrough?: string[]
} 

declare interface Flexmonster$Options {
chart?: {
activeMeasure?: Flexmonster$MeasureObject,
activeTupleIndex?: number,
autoRange?: boolean,
labelsHierarchy?: string,
multipleMeasures?: boolean,
oneLevel?: boolean,
showFilter?: boolean,
showLegend?: boolean,
showLegendButton?: boolean,
showMeasures?: boolean,
showWarning?: boolean,
title?: string,
type?: string,
showDataLabels?: boolean,
reversedAxes?: boolean,
showAllLabels?: boolean,
showOneMeasureSelection?: boolean,
position?: string,
pieDataIndex?: string
},
grid?: {
showFilter?: boolean,
showGrandTotals?: string,
showHeaders?: boolean,
showHierarchies?: boolean,
showHierarchyCaptions?: boolean,
showReportFiltersArea?: boolean,
showTotals?: boolean,
title?: string,
type?: string,
showAutoCalculationBar?: boolean,
dragging?: boolean,
grandTotalsPosition?: string,
drillThroughMaxRows?: number
},
configuratorActive?: boolean,
configuratorButton?: boolean,
dateTimezoneOffset?: number,
datePattern?: string,
dateTimePattern?: string,
defaultHierarchySortName?: string,
drillThrough?: boolean,
editing?: boolean,
selectEmptyCells?: boolean,
showAggregations?: boolean,
showCalculatedValuesButton?: boolean,
showDefaultSlice?: boolean,
showMemberProperties?: boolean,
sorting?: string,
viewType?: string,
showAggregationLabels?: boolean,
useOlapFormatting?: boolean,
defaultDateType?: string,
timePattern?: string,
showOutdatedDataAlert?: boolean,
showEmptyData?: boolean,
saveAllFormats?: boolean,
showDrillThroughConfigurator?: boolean,
grouping?: boolean
} 

declare interface Flexmonster$PrintOptions {
header?: string,
footer?: string
} 

declare interface Flexmonster$Member {
caption?: string,
uniqueName?: string,
hierarchyName?: string,
children?: Flexmonster$Member[],
isLeaf?: boolean,
parentMember?: string
} 

declare interface Flexmonster$FilterProperties {
type: string,
members?: Flexmonster$FilterItem[],
quantity?: number,
measure?: Flexmonster$MeasureObject
} 

declare interface Flexmonster$FilterItem {
caption?: string,
uniqueName?: string,
hierarchyName?: string
} 

declare interface Flexmonster$CellData {
columnIndex?: number,
columns?: {[key: string]: any}[],
escapedLabel?: string,
height?: number,
hierarchy?: Flexmonster$Hierarchy,
isClassicTotalRow?: boolean,
isDrillThrough?: boolean,
isGrandTotal?: boolean,
isGrandTotalColumn?: boolean,
isGrandTotalRow?: boolean,
isTotal?: boolean,
isTotalColumn?: boolean,
isTotalRow?: boolean,
member?: Flexmonster$Member,
width?: number,
x?: number,
y?: number,
label?: string,
measure?: Flexmonster$MeasureObject,
rowIndex?: number,
rows?: {[key: string]: any}[],
type?: string,
value?: number
} 

declare interface Flexmonster$ExportOptions {
filename?: string,
destinationType?: string,
excelSheetName?: string,
footer?: string,
header?: string,
pageOrientation?: string,
showFilters?: boolean,
url?: string,
useOlapFormattingInExcel?: boolean,
useCustomizeCellForData?: boolean,
excelExportAll?: boolean
} 

declare interface Flexmonster$Hierarchy {
caption?: string,
dimensionName?: string,
filter?: {
members?: string[],
negation?: boolean,
measure?: Flexmonster$MeasureObject,
quantity?: number,
type?: string
},
sortName?: string,
sortOrder?: string[],
uniqueName?: string
} 

declare interface Flexmonster$Measure {
uniqueName?: string,
active?: boolean,
aggregation?: string,
availableAggregations?: string[],
caption?: string,
formula?: string,
format?: string,
grandTotalCaption?: string
} 

declare interface Flexmonster$MeasureObject {
uniqueName: string,
aggregation?: string
} 

declare interface Flexmonster$ConditionalFormat {
formula?: string,
format?: Flexmonster$Style,
formatCSS?: string,
row?: number,
column?: number,
measureName?: string,
hierarchy?: string,
member?: string,
isTotal?: number
} 

declare interface Flexmonster$Style {
color?: string,
backgroundColor?: string,
backgroundImage?: string,
borderColor?: string,
fontSize?: string,
fontWeight?: string,
fill?: string,
textAlign?: string,
fontFamily?: string,
width?: number,
maxWidth?: number,
height?: number,
maxHeight?: number
} 

declare interface Flexmonster$Format {
name?: string,
thousandsSeparator?: string,
decimalSeparator?: string,
decimalPlaces?: number,
maxDecimalPlaces?: number,
maxSymbols?: number,
currencySymbol?: string,
currencySymbolAlign?: string,
nullValue?: string,
infinityValue?: string,
divideByZeroValue?: string,
textAlign?: string,
isPercent?: boolean,
beautifyFloatingPoint?: boolean
} 

declare interface Flexmonster$ColumnSize {
width?: number,
idx?: number,
tuple?: string[],
measure?: Flexmonster$MeasureObject
} 

declare interface Flexmonster$RowSize {
height?: number,
idx?: number,
tuple?: string[],
measure?: Flexmonster$MeasureObject
} 

declare interface Flexmonster$CellBuilder {
attr?: {[key: string]: any},
classes?: string[],
style?: {[key: string]: any},
tag?: string,
text?: string,
addClass(value?: string): void,
toHtml(): string
} 

declare interface Flexmonster$ContextMenuItem {
label?: string,
handler?: (() => void) | string,
submenu?: Flexmonster$ContextMenuItem[],
isSelected?: boolean
} 

declare interface Flexmonster$ChartData {
columnTuple?: number[],
id?: string,
label?: string,
measure?: Flexmonster$MeasureObject,
rawTuple?: number[],
value?: number
} 

declare interface Flexmonster$Toolbar {
getTabs: () => Flexmonster$ToolbarTab[]
} 

declare interface Flexmonster$ToolbarTab {
android: boolean,
args: any,
handler: (() => void) | string,
icon: string,
id: string,
ios: boolean,
mobile: boolean,
menu: Flexmonster$ToolbarTab[],
title: string
} 
    }
