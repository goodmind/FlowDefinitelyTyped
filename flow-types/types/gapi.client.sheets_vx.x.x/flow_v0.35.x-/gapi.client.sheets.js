declare module 'gapi.client.sheets' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        spreadsheets: typeof client$spreadsheets,
      }

/**
 * Load Google Sheets API v4
 */
declare function client$load(name: "sheets", version: "v4"): PromiseLike<void>


declare function client$load(name: "sheets", version: "v4", callback: () => any): void


declare var client$spreadsheets: sheets$sheets$SpreadsheetsResource;

declare interface sheets$AddBandingRequest {

/**
 * The banded range to add. The bandedRangeId
 * field is optional; if one is not set, an id will be randomly generated. (It
 * is an error to specify the ID of a range that already exists.)
 */
bandedRange?: sheets$BandedRange
} 

declare interface sheets$AddBandingResponse {

/**
 * The banded range that was added.
 */
bandedRange?: sheets$BandedRange
} 

declare interface sheets$AddChartRequest {

/**
 * The chart that should be added to the spreadsheet, including the position
 * where it should be placed. The chartId
 * field is optional; if one is not set, an id will be randomly generated. (It
 * is an error to specify the ID of a chart that already exists.)
 */
chart?: sheets$EmbeddedChart
} 

declare interface sheets$AddChartResponse {

/**
 * The newly added chart.
 */
chart?: sheets$EmbeddedChart
} 

declare interface sheets$AddConditionalFormatRuleRequest {

/**
 * The zero-based index where the rule should be inserted.
 */
index?: number,

/**
 * The rule to add.
 */
rule?: sheets$ConditionalFormatRule
} 

declare interface sheets$AddFilterViewRequest {

/**
 * The filter to add. The filterViewId
 * field is optional; if one is not set, an id will be randomly generated. (It
 * is an error to specify the ID of a filter that already exists.)
 */
filter?: sheets$FilterView
} 

declare interface sheets$AddFilterViewResponse {

/**
 * The newly added filter view.
 */
filter?: sheets$FilterView
} 

declare interface sheets$AddNamedRangeRequest {

/**
 * The named range to add. The namedRangeId
 * field is optional; if one is not set, an id will be randomly generated. (It
 * is an error to specify the ID of a range that already exists.)
 */
namedRange?: sheets$NamedRange
} 

declare interface sheets$AddNamedRangeResponse {

/**
 * The named range to add.
 */
namedRange?: sheets$NamedRange
} 

declare interface sheets$AddProtectedRangeRequest {

/**
 * The protected range to be added. The
 * protectedRangeId field is optional; if
 * one is not set, an id will be randomly generated. (It is an error to
 * specify the ID of a range that already exists.)
 */
protectedRange?: sheets$ProtectedRange
} 

declare interface sheets$AddProtectedRangeResponse {

/**
 * The newly added protected range.
 */
protectedRange?: sheets$ProtectedRange
} 

declare interface sheets$AddSheetRequest {

/**
 * The properties the new sheet should have.
 * All properties are optional.
 * The sheetId field is optional; if one is not
 * set, an id will be randomly generated. (It is an error to specify the ID
 * of a sheet that already exists.)
 */
properties?: sheets$SheetProperties
} 

declare interface sheets$AddSheetResponse {

/**
 * The properties of the newly added sheet.
 */
properties?: sheets$SheetProperties
} 

declare interface sheets$AppendCellsRequest {

/**
 * The fields of CellData that should be updated.
 * At least one field must be specified.
 * The root is the CellData; 'row.values.' should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string,

/**
 * The data to append.
 */
rows?: sheets$RowData[],

/**
 * The sheet ID to append the data to.
 */
sheetId?: number
} 

declare interface sheets$AppendDimensionRequest {

/**
 * Whether rows or columns should be appended.
 */
dimension?: string,

/**
 * The number of rows or columns to append.
 */
length?: number,

/**
 * The sheet to append rows or columns to.
 */
sheetId?: number
} 

declare interface sheets$AppendValuesResponse {

/**
 * The spreadsheet the updates were applied to.
 */
spreadsheetId?: string,

/**
 * The range (in A1 notation) of the table that values are being appended to
 * (before the values were appended).
 * Empty if no table was found.
 */
tableRange?: string,

/**
 * Information about the updates that were applied.
 */
updates?: sheets$UpdateValuesResponse
} 

declare interface sheets$AutoFillRequest {

/**
 * The range to autofill. This will examine the range and detect
 * the location that has data and automatically fill that data
 * in to the rest of the range.
 */
range?: sheets$GridRange,

/**
 * The source and destination areas to autofill.
 * This explicitly lists the source of the autofill and where to
 * extend that data.
 */
sourceAndDestination?: sheets$SourceAndDestination,

/**
 * True if we should generate data with the "alternate" series.
 * This differs based on the type and amount of source data.
 */
useAlternateSeries?: boolean
} 

declare interface sheets$AutoResizeDimensionsRequest {

/**
 * The dimensions to automatically resize.
 */
dimensions?: sheets$DimensionRange
} 

declare interface sheets$BandedRange {

/**
 * The id of the banded range.
 */
bandedRangeId?: number,

/**
 * Properties for column bands. These properties will be applied on a column-
 * by-column basis throughout all the columns in the range. At least one of
 * row_properties or column_properties must be specified.
 */
columnProperties?: sheets$BandingProperties,

/**
 * The range over which these properties are applied.
 */
range?: sheets$GridRange,

/**
 * Properties for row bands. These properties will be applied on a row-by-row
 * basis throughout all the rows in the range. At least one of
 * row_properties or column_properties must be specified.
 */
rowProperties?: sheets$BandingProperties
} 

declare interface sheets$BandingProperties {

/**
 * The first color that is alternating. (Required)
 */
firstBandColor?: sheets$Color,

/**
 * The color of the last row or column. If this field is not set, the last
 * row or column will be filled with either first_band_color or
 * second_band_color, depending on the color of the previous row or
 * column.
 */
footerColor?: sheets$Color,

/**
 * The color of the first row or column. If this field is set, the first
 * row or column will be filled with this color and the colors will
 * alternate between first_band_color and second_band_color starting
 * from the second row or column. Otherwise, the first row or column will be
 * filled with first_band_color and the colors will proceed to alternate
 * as they normally would.
 */
headerColor?: sheets$Color,

/**
 * The second color that is alternating. (Required)
 */
secondBandColor?: sheets$Color
} 

declare interface sheets$BasicChartAxis {

/**
 * The format of the title.
 * Only valid if the axis is not associated with the domain.
 */
format?: sheets$TextFormat,

/**
 * The position of this axis.
 */
position?: string,

/**
 * The title of this axis. If set, this overrides any title inferred
 * from headers of the data.
 */
title?: string,

/**
 * The axis title text position.
 */
titleTextPosition?: sheets$TextPosition
} 

declare interface sheets$BasicChartDomain {

/**
 * The data of the domain. For example, if charting stock prices over time,
 * this is the data representing the dates.
 */
domain?: sheets$ChartData,

/**
 * True to reverse the order of the domain values (horizontal axis).
 */
reversed?: boolean
} 

declare interface sheets$BasicChartSeries {

/**
 * The data being visualized in this chart series.
 */
series?: sheets$ChartData,

/**
 * The minor axis that will specify the range of values for this series.
 * For example, if charting stocks over time, the "Volume" series
 * may want to be pinned to the right with the prices pinned to the left,
 * because the scale of trading volume is different than the scale of
 * prices.
 * It is an error to specify an axis that isn't a valid minor axis
 * for the chart's type.
 */
targetAxis?: string,

/**
 * The type of this series. Valid only if the
 * chartType is
 * COMBO.
 * Different types will change the way the series is visualized.
 * Only LINE, AREA,
 * and COLUMN are supported.
 */
type?: string
} 

declare interface sheets$BasicChartSpec {

/**
 * The axis on the chart.
 */
axis?: sheets$BasicChartAxis[],

/**
 * The type of the chart.
 */
chartType?: string,

/**
 * The behavior of tooltips and data highlighting when hovering on data and
 * chart area.
 */
compareMode?: string,

/**
 * The domain of data this is charting.
 * Only a single domain is supported.
 */
domains?: sheets$BasicChartDomain[],

/**
 * The number of rows or columns in the data that are "headers".
 * If not set, Google Sheets will guess how many rows are headers based
 * on the data.
 * 
 * (Note that BasicChartAxis.title may override the axis title
 * inferred from the header values.)
 */
headerCount?: number,

/**
 * If some values in a series are missing, gaps may appear in the chart (e.g,
 * segments of lines in a line chart will be missing).  To eliminate these
 * gaps set this to true.
 * Applies to Line, Area, and Combo charts.
 */
interpolateNulls?: boolean,

/**
 * The position of the chart legend.
 */
legendPosition?: string,

/**
 * Gets whether all lines should be rendered smooth or straight by default.
 * Applies to Line charts.
 */
lineSmoothing?: boolean,

/**
 * The data this chart is visualizing.
 */
series?: sheets$BasicChartSeries[],

/**
 * The stacked type for charts that support vertical stacking.
 * Applies to Area, Bar, Column, and Stepped Area charts.
 */
stackedType?: string,

/**
 * True to make the chart 3D.
 * Applies to Bar and Column charts.
 */
threeDimensional?: boolean
} 

declare interface sheets$BasicFilter {

/**
 * The criteria for showing/hiding values per column.
 * The map's key is the column index, and the value is the criteria for
 * that column.
 */
criteria?: Record<string, sheets$FilterCriteria>,

/**
 * The range the filter covers.
 */
range?: sheets$GridRange,

/**
 * The sort order per column. Later specifications are used when values
 * are equal in the earlier specifications.
 */
sortSpecs?: sheets$SortSpec[]
} 

declare interface sheets$BatchClearValuesByDataFilterRequest {

/**
 * The DataFilters used to determine which ranges to clear.
 */
dataFilters?: sheets$DataFilter[]
} 

declare interface sheets$BatchClearValuesByDataFilterResponse {

/**
 * The ranges that were cleared, in A1 notation.
 * (If the requests were for an unbounded range or a ranger larger
 * than the bounds of the sheet, this will be the actual ranges
 * that were cleared, bounded to the sheet's limits.)
 */
clearedRanges?: string[],

/**
 * The spreadsheet the updates were applied to.
 */
spreadsheetId?: string
} 

declare interface sheets$BatchClearValuesRequest {

/**
 * The ranges to clear, in A1 notation.
 */
ranges?: string[]
} 

declare interface sheets$BatchClearValuesResponse {

/**
 * The ranges that were cleared, in A1 notation.
 * (If the requests were for an unbounded range or a ranger larger
 * than the bounds of the sheet, this will be the actual ranges
 * that were cleared, bounded to the sheet's limits.)
 */
clearedRanges?: string[],

/**
 * The spreadsheet the updates were applied to.
 */
spreadsheetId?: string
} 

declare interface sheets$BatchGetValuesByDataFilterRequest {

/**
 * The data filters used to match the ranges of values to retrieve.  Ranges
 * that match any of the specified data filters will be included in the
 * response.
 */
dataFilters?: sheets$DataFilter[],

/**
 * How dates, times, and durations should be represented in the output.
 * This is ignored if value_render_option is
 * FORMATTED_VALUE.
 * The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
 */
dateTimeRenderOption?: string,

/**
 * The major dimension that results should use.
 * 
 * For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,
 * then a request that selects that range and sets `majorDimension=ROWS` will
 * return `[[1,2],[3,4]]`,
 * whereas a request that sets `majorDimension=COLUMNS` will return
 * `[[1,3],[2,4]]`.
 */
majorDimension?: string,

/**
 * How values should be represented in the output.
 * The default render option is ValueRenderOption.FORMATTED_VALUE.
 */
valueRenderOption?: string
} 

declare interface sheets$BatchGetValuesByDataFilterResponse {

/**
 * The ID of the spreadsheet the data was retrieved from.
 */
spreadsheetId?: string,

/**
 * The requested values with the list of data filters that matched them.
 */
valueRanges?: sheets$MatchedValueRange[]
} 

declare interface sheets$BatchGetValuesResponse {

/**
 * The ID of the spreadsheet the data was retrieved from.
 */
spreadsheetId?: string,

/**
 * The requested values. The order of the ValueRanges is the same as the
 * order of the requested ranges.
 */
valueRanges?: sheets$ValueRange[]
} 

declare interface sheets$BatchUpdateSpreadsheetRequest {

/**
 * Determines if the update response should include the spreadsheet
 * resource.
 */
includeSpreadsheetInResponse?: boolean,

/**
 * A list of updates to apply to the spreadsheet.
 * Requests will be applied in the order they are specified.
 * If any request is not valid, no requests will be applied.
 */
requests?: sheets$Request[],

/**
 * True if grid data should be returned. Meaningful only if
 * if include_spreadsheet_response is 'true'.
 * This parameter is ignored if a field mask was set in the request.
 */
responseIncludeGridData?: boolean,

/**
 * Limits the ranges included in the response spreadsheet.
 * Meaningful only if include_spreadsheet_response is 'true'.
 */
responseRanges?: string[]
} 

declare interface sheets$BatchUpdateSpreadsheetResponse {

/**
 * The reply of the updates.  This maps 1:1 with the updates, although
 * replies to some requests may be empty.
 */
replies?: sheets$Response[],

/**
 * The spreadsheet the updates were applied to.
 */
spreadsheetId?: string,

/**
 * The spreadsheet after updates were applied. This is only set if
 * [BatchUpdateSpreadsheetRequest.include_spreadsheet_in_response] is `true`.
 */
updatedSpreadsheet?: sheets$Spreadsheet
} 

declare interface sheets$BatchUpdateValuesByDataFilterRequest {

/**
 * The new values to apply to the spreadsheet.  If more than one range is
 * matched by the specified DataFilter the specified values will be
 * applied to all of those ranges.
 */
data?: sheets$DataFilterValueRange[],

/**
 * Determines if the update response should include the values
 * of the cells that were updated. By default, responses
 * do not include the updated values. The `updatedData` field within
 * each of the BatchUpdateValuesResponse.responses will contain
 * the updated values. If the range to write was larger than than the range
 * actually written, the response will include all values in the requested
 * range (excluding trailing empty rows and columns).
 */
includeValuesInResponse?: boolean,

/**
 * Determines how dates, times, and durations in the response should be
 * rendered. This is ignored if response_value_render_option is
 * FORMATTED_VALUE.
 * The default dateTime render option is
 * DateTimeRenderOption.SERIAL_NUMBER.
 */
responseDateTimeRenderOption?: string,

/**
 * Determines how values in the response should be rendered.
 * The default render option is ValueRenderOption.FORMATTED_VALUE.
 */
responseValueRenderOption?: string,

/**
 * How the input data should be interpreted.
 */
valueInputOption?: string
} 

declare interface sheets$BatchUpdateValuesByDataFilterResponse {

/**
 * The response for each range updated.
 */
responses?: sheets$UpdateValuesByDataFilterResponse[],

/**
 * The spreadsheet the updates were applied to.
 */
spreadsheetId?: string,

/**
 * The total number of cells updated.
 */
totalUpdatedCells?: number,

/**
 * The total number of columns where at least one cell in the column was
 * updated.
 */
totalUpdatedColumns?: number,

/**
 * The total number of rows where at least one cell in the row was updated.
 */
totalUpdatedRows?: number,

/**
 * The total number of sheets where at least one cell in the sheet was
 * updated.
 */
totalUpdatedSheets?: number
} 

declare interface sheets$BatchUpdateValuesRequest {

/**
 * The new values to apply to the spreadsheet.
 */
data?: sheets$ValueRange[],

/**
 * Determines if the update response should include the values
 * of the cells that were updated. By default, responses
 * do not include the updated values. The `updatedData` field within
 * each of the BatchUpdateValuesResponse.responses will contain
 * the updated values. If the range to write was larger than than the range
 * actually written, the response will include all values in the requested
 * range (excluding trailing empty rows and columns).
 */
includeValuesInResponse?: boolean,

/**
 * Determines how dates, times, and durations in the response should be
 * rendered. This is ignored if response_value_render_option is
 * FORMATTED_VALUE.
 * The default dateTime render option is
 * DateTimeRenderOption.SERIAL_NUMBER.
 */
responseDateTimeRenderOption?: string,

/**
 * Determines how values in the response should be rendered.
 * The default render option is ValueRenderOption.FORMATTED_VALUE.
 */
responseValueRenderOption?: string,

/**
 * How the input data should be interpreted.
 */
valueInputOption?: string
} 

declare interface sheets$BatchUpdateValuesResponse {

/**
 * One UpdateValuesResponse per requested range, in the same order as
 * the requests appeared.
 */
responses?: sheets$UpdateValuesResponse[],

/**
 * The spreadsheet the updates were applied to.
 */
spreadsheetId?: string,

/**
 * The total number of cells updated.
 */
totalUpdatedCells?: number,

/**
 * The total number of columns where at least one cell in the column was
 * updated.
 */
totalUpdatedColumns?: number,

/**
 * The total number of rows where at least one cell in the row was updated.
 */
totalUpdatedRows?: number,

/**
 * The total number of sheets where at least one cell in the sheet was
 * updated.
 */
totalUpdatedSheets?: number
} 

declare interface sheets$BooleanCondition {

/**
 * The type of condition.
 */
type?: string,

/**
 * The values of the condition. The number of supported values depends
 * on the condition type.  Some support zero values,
 * others one or two values,
 * and ConditionType.ONE_OF_LIST supports an arbitrary number of values.
 */
values?: sheets$ConditionValue[]
} 

declare interface sheets$BooleanRule {

/**
 * The condition of the rule. If the condition evaluates to true,
 * the format will be applied.
 */
condition?: sheets$BooleanCondition,

/**
 * The format to apply.
 * Conditional formatting can only apply a subset of formatting:
 * bold, italic,
 * strikethrough,
 * foreground color &
 * background color.
 */
format?: sheets$CellFormat
} 

declare interface sheets$Border {

/**
 * The color of the border.
 */
color?: sheets$Color,

/**
 * The style of the border.
 */
style?: string,

/**
 * The width of the border, in pixels.
 * Deprecated; the width is determined by the "style" field.
 */
width?: number
} 

declare interface sheets$Borders {

/**
 * The bottom border of the cell.
 */
bottom?: sheets$Border,

/**
 * The left border of the cell.
 */
left?: sheets$Border,

/**
 * The right border of the cell.
 */
right?: sheets$Border,

/**
 * The top border of the cell.
 */
top?: sheets$Border
} 

declare interface sheets$BubbleChartSpec {

/**
 * The bubble border color.
 */
bubbleBorderColor?: sheets$Color,

/**
 * The data containing the bubble labels.  These do not need to be unique.
 */
bubbleLabels?: sheets$ChartData,

/**
 * The max radius size of the bubbles, in pixels.
 * If specified, the field must be a positive value.
 */
bubbleMaxRadiusSize?: number,

/**
 * The minimum radius size of the bubbles, in pixels.
 * If specific, the field must be a positive value.
 */
bubbleMinRadiusSize?: number,

/**
 * The opacity of the bubbles between 0 and 1.0.
 * 0 is fully transparent and 1 is fully opaque.
 */
bubbleOpacity?: number,

/**
 * The data contianing the bubble sizes.  Bubble sizes are used to draw
 * the bubbles at different sizes relative to each other.
 * If specified, group_ids must also be specified.  This field is
 * optional.
 */
bubbleSizes?: sheets$ChartData,

/**
 * The format of the text inside the bubbles.
 * Underline and Strikethrough are not supported.
 */
bubbleTextStyle?: sheets$TextFormat,

/**
 * The data containing the bubble x-values.  These values locate the bubbles
 * in the chart horizontally.
 */
domain?: sheets$ChartData,

/**
 * The data containing the bubble group IDs. All bubbles with the same group
 * ID will be drawn in the same color. If bubble_sizes is specified then
 * this field must also be specified but may contain blank values.
 * This field is optional.
 */
groupIds?: sheets$ChartData,

/**
 * Where the legend of the chart should be drawn.
 */
legendPosition?: string,

/**
 * The data contianing the bubble y-values.  These values locate the bubbles
 * in the chart vertically.
 */
series?: sheets$ChartData
} 

declare interface sheets$CandlestickChartSpec {

/**
 * The Candlestick chart data.
 * Only one CandlestickData is supported.
 */
data?: sheets$CandlestickData[],

/**
 * The domain data (horizontal axis) for the candlestick chart.  String data
 * will be treated as discrete labels, other data will be treated as
 * continuous values.
 */
domain?: sheets$CandlestickDomain
} 

declare interface sheets$CandlestickData {

/**
 * The range data (vertical axis) for the close/final value for each candle.
 * This is the top of the candle body.  If greater than the open value the
 * candle will be filled.  Otherwise the candle will be hollow.
 */
closeSeries?: sheets$CandlestickSeries,

/**
 * The range data (vertical axis) for the high/maximum value for each
 * candle. This is the top of the candle's center line.
 */
highSeries?: sheets$CandlestickSeries,

/**
 * The range data (vertical axis) for the low/minimum value for each candle.
 * This is the bottom of the candle's center line.
 */
lowSeries?: sheets$CandlestickSeries,

/**
 * The range data (vertical axis) for the open/initial value for each
 * candle. This is the bottom of the candle body.  If less than the close
 * value the candle will be filled.  Otherwise the candle will be hollow.
 */
openSeries?: sheets$CandlestickSeries
} 

declare interface sheets$CandlestickDomain {

/**
 * The data of the CandlestickDomain.
 */
data?: sheets$ChartData,

/**
 * True to reverse the order of the domain values (horizontal axis).
 */
reversed?: boolean
} 

declare interface sheets$CandlestickSeries {

/**
 * The data of the CandlestickSeries.
 */
data?: sheets$ChartData
} 

declare interface sheets$CellData {

/**
 * A data validation rule on the cell, if any.
 * 
 * When writing, the new data validation rule will overwrite any prior rule.
 */
dataValidation?: sheets$DataValidationRule,

/**
 * The effective format being used by the cell.
 * This includes the results of applying any conditional formatting and,
 * if the cell contains a formula, the computed number format.
 * If the effective format is the default format, effective format will
 * not be written.
 * This field is read-only.
 */
effectiveFormat?: sheets$CellFormat,

/**
 * The effective value of the cell. For cells with formulas, this will be
 * the calculated value.  For cells with literals, this will be
 * the same as the user_entered_value.
 * This field is read-only.
 */
effectiveValue?: sheets$ExtendedValue,

/**
 * The formatted value of the cell.
 * This is the value as it's shown to the user.
 * This field is read-only.
 */
formattedValue?: string,

/**
 * A hyperlink this cell points to, if any.
 * This field is read-only.  (To set it, use a `=HYPERLINK` formula
 * in the userEnteredValue.formulaValue
 * field.)
 */
hyperlink?: string,

/**
 * Any note on the cell.
 */
note?: string,

/**
 * A pivot table anchored at this cell. The size of pivot table itself
 * is computed dynamically based on its data, grouping, filters, values,
 * etc. Only the top-left cell of the pivot table contains the pivot table
 * definition. The other cells will contain the calculated values of the
 * results of the pivot in their effective_value fields.
 */
pivotTable?: sheets$PivotTable,

/**
 * Runs of rich text applied to subsections of the cell.  Runs are only valid
 * on user entered strings, not formulas, bools, or numbers.
 * Runs start at specific indexes in the text and continue until the next
 * run. Properties of a run will continue unless explicitly changed
 * in a subsequent run (and properties of the first run will continue
 * the properties of the cell unless explicitly changed).
 * 
 * When writing, the new runs will overwrite any prior runs.  When writing a
 * new user_entered_value, previous runs will be erased.
 */
textFormatRuns?: sheets$TextFormatRun[],

/**
 * The format the user entered for the cell.
 * 
 * When writing, the new format will be merged with the existing format.
 */
userEnteredFormat?: sheets$CellFormat,

/**
 * The value the user entered in the cell. e.g, `1234`, `'Hello'`, or `=NOW()`
 * Note: Dates, Times and DateTimes are represented as doubles in
 * serial number format.
 */
userEnteredValue?: sheets$ExtendedValue
} 

declare interface sheets$CellFormat {

/**
 * The background color of the cell.
 */
backgroundColor?: sheets$Color,

/**
 * The borders of the cell.
 */
borders?: sheets$Borders,

/**
 * The horizontal alignment of the value in the cell.
 */
horizontalAlignment?: string,

/**
 * How a hyperlink, if it exists, should be displayed in the cell.
 */
hyperlinkDisplayType?: string,

/**
 * A format describing how number values should be represented to the user.
 */
numberFormat?: sheets$NumberFormat,

/**
 * The padding of the cell.
 */
padding?: sheets$Padding,

/**
 * The direction of the text in the cell.
 */
textDirection?: string,

/**
 * The format of the text in the cell (unless overridden by a format run).
 */
textFormat?: sheets$TextFormat,

/**
 * The rotation applied to text in a cell
 */
textRotation?: sheets$TextRotation,

/**
 * The vertical alignment of the value in the cell.
 */
verticalAlignment?: string,

/**
 * The wrap strategy for the value in the cell.
 */
wrapStrategy?: string
} 

declare interface sheets$ChartData {

/**
 * The source ranges of the data.
 */
sourceRange?: sheets$ChartSourceRange
} 

declare interface sheets$ChartSourceRange {

/**
 * The ranges of data for a series or domain.
 * Exactly one dimension must have a length of 1,
 * and all sources in the list must have the same dimension
 * with length 1.
 * The domain (if it exists) & all series must have the same number
 * of source ranges. If using more than one source range, then the source
 * range at a given offset must be contiguous across the domain and series.
 * 
 * For example, these are valid configurations:
 * 
 * domain sources: A1:A5
 * series1 sources: B1:B5
 * series2 sources: D6:D10
 * 
 * domain sources: A1:A5, C10:C12
 * series1 sources: B1:B5, D10:D12
 * series2 sources: C1:C5, E10:E12
 */
sources?: sheets$GridRange[]
} 

declare interface sheets$ChartSpec {

/**
 * The alternative text that describes the chart.  This is often used
 * for accessibility.
 */
altText?: string,

/**
 * The background color of the entire chart.
 * Not applicable to Org charts.
 */
backgroundColor?: sheets$Color,

/**
 * A basic chart specification, can be one of many kinds of charts.
 * See BasicChartType for the list of all
 * charts this supports.
 */
basicChart?: sheets$BasicChartSpec,

/**
 * A bubble chart specification.
 */
bubbleChart?: sheets$BubbleChartSpec,

/**
 * A candlestick chart specification.
 */
candlestickChart?: sheets$CandlestickChartSpec,

/**
 * The name of the font to use by default for all chart text (e.g. title,
 * axis labels, legend).  If a font is specified for a specific part of the
 * chart it will override this font name.
 */
fontName?: string,

/**
 * Determines how the charts will use hidden rows or columns.
 */
hiddenDimensionStrategy?: string,

/**
 * A histogram chart specification.
 */
histogramChart?: sheets$HistogramChartSpec,

/**
 * True to make a chart fill the entire space in which it's rendered with
 * minimum padding.  False to use the default padding.
 * (Not applicable to Geo and Org charts.)
 */
maximized?: boolean,

/**
 * An org chart specification.
 */
orgChart?: sheets$OrgChartSpec,

/**
 * A pie chart specification.
 */
pieChart?: sheets$PieChartSpec,

/**
 * The subtitle of the chart.
 */
subtitle?: string,

/**
 * The subtitle text format.
 * Strikethrough and underline are not supported.
 */
subtitleTextFormat?: sheets$TextFormat,

/**
 * The subtitle text position.
 * This field is optional.
 */
subtitleTextPosition?: sheets$TextPosition,

/**
 * The title of the chart.
 */
title?: string,

/**
 * The title text format.
 * Strikethrough and underline are not supported.
 */
titleTextFormat?: sheets$TextFormat,

/**
 * The title text position.
 * This field is optional.
 */
titleTextPosition?: sheets$TextPosition
} 

declare interface sheets$ClearBasicFilterRequest {

/**
 * The sheet ID on which the basic filter should be cleared.
 */
sheetId?: number
} 

declare interface sheets$ClearValuesResponse {

/**
 * The range (in A1 notation) that was cleared.
 * (If the request was for an unbounded range or a ranger larger
 * than the bounds of the sheet, this will be the actual range
 * that was cleared, bounded to the sheet's limits.)
 */
clearedRange?: string,

/**
 * The spreadsheet the updates were applied to.
 */
spreadsheetId?: string
} 

declare interface sheets$Color {

/**
 * The fraction of this color that should be applied to the pixel. That is,
 * the final pixel color is defined by the equation:
 * 
 * pixel color = alpha &#42; (this color) + (1.0 - alpha) &#42; (background color)
 * 
 * This means that a value of 1.0 corresponds to a solid color, whereas
 * a value of 0.0 corresponds to a completely transparent color. This
 * uses a wrapper message rather than a simple float scalar so that it is
 * possible to distinguish between a default value and the value being unset.
 * If omitted, this color object is to be rendered as a solid color
 * (as if the alpha value had been explicitly given with a value of 1.0).
 */
alpha?: number,

/**
 * The amount of blue in the color as a value in the interval [0, 1].
 */
blue?: number,

/**
 * The amount of green in the color as a value in the interval [0, 1].
 */
green?: number,

/**
 * The amount of red in the color as a value in the interval [0, 1].
 */
red?: number
} 

declare interface sheets$ConditionValue {

/**
 * A relative date (based on the current date).
 * Valid only if the type is
 * DATE_BEFORE,
 * DATE_AFTER,
 * DATE_ON_OR_BEFORE or
 * DATE_ON_OR_AFTER.
 * 
 * Relative dates are not supported in data validation.
 * They are supported only in conditional formatting and
 * conditional filters.
 */
relativeDate?: string,

/**
 * A value the condition is based on.
 * The value will be parsed as if the user typed into a cell.
 * Formulas are supported (and must begin with an `=`).
 */
userEnteredValue?: string
} 

declare interface sheets$ConditionalFormatRule {

/**
 * The formatting is either "on" or "off" according to the rule.
 */
booleanRule?: sheets$BooleanRule,

/**
 * The formatting will vary based on the gradients in the rule.
 */
gradientRule?: sheets$GradientRule,

/**
 * The ranges that will be formatted if the condition is true.
 * All the ranges must be on the same grid.
 */
ranges?: sheets$GridRange[]
} 

declare interface sheets$CopyPasteRequest {

/**
 * The location to paste to. If the range covers a span that's
 * a multiple of the source's height or width, then the
 * data will be repeated to fill in the destination range.
 * If the range is smaller than the source range, the entire
 * source data will still be copied (beyond the end of the destination range).
 */
destination?: sheets$GridRange,

/**
 * How that data should be oriented when pasting.
 */
pasteOrientation?: string,

/**
 * What kind of data to paste.
 */
pasteType?: string,

/**
 * The source range to copy.
 */
source?: sheets$GridRange
} 

declare interface sheets$CopySheetToAnotherSpreadsheetRequest {

/**
 * The ID of the spreadsheet to copy the sheet to.
 */
destinationSpreadsheetId?: string
} 

declare interface sheets$CreateDeveloperMetadataRequest {

/**
 * The developer metadata to create.
 */
developerMetadata?: sheets$DeveloperMetadata
} 

declare interface sheets$CreateDeveloperMetadataResponse {

/**
 * The developer metadata that was created.
 */
developerMetadata?: sheets$DeveloperMetadata
} 

declare interface sheets$CutPasteRequest {

/**
 * The top-left coordinate where the data should be pasted.
 */
destination?: sheets$GridCoordinate,

/**
 * What kind of data to paste.  All the source data will be cut, regardless
 * of what is pasted.
 */
pasteType?: string,

/**
 * The source data to cut.
 */
source?: sheets$GridRange
} 

declare interface sheets$DataFilter {

/**
 * Selects data that matches the specified A1 range.
 */
a1Range?: string,

/**
 * Selects data associated with the developer metadata matching the criteria
 * described by this DeveloperMetadataLookup.
 */
developerMetadataLookup?: sheets$DeveloperMetadataLookup,

/**
 * Selects data that matches the range described by the GridRange.
 */
gridRange?: sheets$GridRange
} 

declare interface sheets$DataFilterValueRange {

/**
 * The data filter describing the location of the values in the spreadsheet.
 */
dataFilter?: sheets$DataFilter,

/**
 * The major dimension of the values.
 */
majorDimension?: string,

/**
 * The data to be written.  If the provided values exceed any of the ranges
 * matched by the data filter then the request will fail.  If the provided
 * values are less than the matched ranges only the specified values will be
 * written, existing values in the matched ranges will remain unaffected.
 */
values?: any[][]
} 

declare interface sheets$DataValidationRule {

/**
 * The condition that data in the cell must match.
 */
condition?: sheets$BooleanCondition,

/**
 * A message to show the user when adding data to the cell.
 */
inputMessage?: string,

/**
 * True if the UI should be customized based on the kind of condition.
 * If true, "List" conditions will show a dropdown.
 */
showCustomUi?: boolean,

/**
 * True if invalid data should be rejected.
 */
strict?: boolean
} 

declare interface sheets$DeleteBandingRequest {

/**
 * The ID of the banded range to delete.
 */
bandedRangeId?: number
} 

declare interface sheets$DeleteConditionalFormatRuleRequest {

/**
 * The zero-based index of the rule to be deleted.
 */
index?: number,

/**
 * The sheet the rule is being deleted from.
 */
sheetId?: number
} 

declare interface sheets$DeleteConditionalFormatRuleResponse {

/**
 * The rule that was deleted.
 */
rule?: sheets$ConditionalFormatRule
} 

declare interface sheets$DeleteDeveloperMetadataRequest {

/**
 * The data filter describing the criteria used to select which developer
 * metadata entry to delete.
 */
dataFilter?: sheets$DataFilter
} 

declare interface sheets$DeleteDeveloperMetadataResponse {

/**
 * The metadata that was deleted.
 */
deletedDeveloperMetadata?: sheets$DeveloperMetadata[]
} 

declare interface sheets$DeleteDimensionRequest {

/**
 * The dimensions to delete from the sheet.
 */
range?: sheets$DimensionRange
} 

declare interface sheets$DeleteEmbeddedObjectRequest {

/**
 * The ID of the embedded object to delete.
 */
objectId?: number
} 

declare interface sheets$DeleteFilterViewRequest {

/**
 * The ID of the filter to delete.
 */
filterId?: number
} 

declare interface sheets$DeleteNamedRangeRequest {

/**
 * The ID of the named range to delete.
 */
namedRangeId?: string
} 

declare interface sheets$DeleteProtectedRangeRequest {

/**
 * The ID of the protected range to delete.
 */
protectedRangeId?: number
} 

declare interface sheets$DeleteRangeRequest {

/**
 * The range of cells to delete.
 */
range?: sheets$GridRange,

/**
 * The dimension from which deleted cells will be replaced with.
 * If ROWS, existing cells will be shifted upward to
 * replace the deleted cells. If COLUMNS, existing cells
 * will be shifted left to replace the deleted cells.
 */
shiftDimension?: string
} 

declare interface sheets$DeleteSheetRequest {

/**
 * The ID of the sheet to delete.
 */
sheetId?: number
} 

declare interface sheets$DeveloperMetadata {

/**
 * The location where the metadata is associated.
 */
location?: sheets$DeveloperMetadataLocation,

/**
 * The spreadsheet-scoped unique ID that identifies the metadata. IDs may be
 * specified when metadata is created, otherwise one will be randomly
 * generated and assigned. Must be positive.
 */
metadataId?: number,

/**
 * The metadata key. There may be multiple metadata in a spreadsheet with the
 * same key.  Developer metadata must always have a key specified.
 */
metadataKey?: string,

/**
 * Data associated with the metadata's key.
 */
metadataValue?: string,

/**
 * The metadata visibility.  Developer metadata must always have a visibility
 * specified.
 */
visibility?: string
} 

declare interface sheets$DeveloperMetadataLocation {

/**
 * Represents the row or column when metadata is associated with
 * a dimension. The specified DimensionRange must represent a single row
 * or column; it cannot be unbounded or span multiple rows or columns.
 */
dimensionRange?: sheets$DimensionRange,

/**
 * The type of location this object represents.  This field is read-only.
 */
locationType?: string,

/**
 * The ID of the sheet when metadata is associated with an entire sheet.
 */
sheetId?: number,

/**
 * True when metadata is associated with an entire spreadsheet.
 */
spreadsheet?: boolean
} 

declare interface sheets$DeveloperMetadataLookup {

/**
 * Determines how this lookup matches the location.  If this field is
 * specified as EXACT, only developer metadata associated on the exact
 * location specified is matched.  If this field is specified to INTERSECTING,
 * developer metadata associated on intersecting locations is also
 * matched.  If left unspecified, this field assumes a default value of
 * INTERSECTING.
 * If this field is specified, a metadataLocation
 * must also be specified.
 */
locationMatchingStrategy?: string,

/**
 * Limits the selected developer metadata to those entries which are
 * associated with locations of the specified type.  For example, when this
 * field is specified as ROW this lookup
 * only considers developer metadata associated on rows.  If the field is left
 * unspecified, all location types are considered.  This field cannot be
 * specified as SPREADSHEET when
 * the locationMatchingStrategy
 * is specified as INTERSECTING or when the
 * metadataLocation is specified as a
 * non-spreadsheet location: spreadsheet metadata cannot intersect any other
 * developer metadata location.  This field also must be left unspecified when
 * the locationMatchingStrategy
 * is specified as EXACT.
 */
locationType?: string,

/**
 * Limits the selected developer metadata to that which has a matching
 * DeveloperMetadata.metadata_id.
 */
metadataId?: number,

/**
 * Limits the selected developer metadata to that which has a matching
 * DeveloperMetadata.metadata_key.
 */
metadataKey?: string,

/**
 * Limits the selected developer metadata to those entries associated with
 * the specified location.  This field either matches exact locations or all
 * intersecting locations according the specified
 * locationMatchingStrategy.
 */
metadataLocation?: sheets$DeveloperMetadataLocation,

/**
 * Limits the selected developer metadata to that which has a matching
 * DeveloperMetadata.metadata_value.
 */
metadataValue?: string,

/**
 * Limits the selected developer metadata to that which has a matching
 * DeveloperMetadata.visibility.  If left unspecified, all developer
 * metadata visibile to the requesting project is considered.
 */
visibility?: string
} 

declare interface sheets$DimensionProperties {

/**
 * The developer metadata associated with a single row or column.
 */
developerMetadata?: sheets$DeveloperMetadata[],

/**
 * True if this dimension is being filtered.
 * This field is read-only.
 */
hiddenByFilter?: boolean,

/**
 * True if this dimension is explicitly hidden.
 */
hiddenByUser?: boolean,

/**
 * The height (if a row) or width (if a column) of the dimension in pixels.
 */
pixelSize?: number
} 

declare interface sheets$DimensionRange {

/**
 * The dimension of the span.
 */
dimension?: string,

/**
 * The end (exclusive) of the span, or not set if unbounded.
 */
endIndex?: number,

/**
 * The sheet this span is on.
 */
sheetId?: number,

/**
 * The start (inclusive) of the span, or not set if unbounded.
 */
startIndex?: number
} 

declare interface sheets$DuplicateFilterViewRequest {

/**
 * The ID of the filter being duplicated.
 */
filterId?: number
} 

declare interface sheets$DuplicateFilterViewResponse {

/**
 * The newly created filter.
 */
filter?: sheets$FilterView
} 

declare interface sheets$DuplicateSheetRequest {

/**
 * The zero-based index where the new sheet should be inserted.
 * The index of all sheets after this are incremented.
 */
insertSheetIndex?: number,

/**
 * If set, the ID of the new sheet. If not set, an ID is chosen.
 * If set, the ID must not conflict with any existing sheet ID.
 * If set, it must be non-negative.
 */
newSheetId?: number,

/**
 * The name of the new sheet.  If empty, a new name is chosen for you.
 */
newSheetName?: string,

/**
 * The sheet to duplicate.
 */
sourceSheetId?: number
} 

declare interface sheets$DuplicateSheetResponse {

/**
 * The properties of the duplicate sheet.
 */
properties?: sheets$SheetProperties
} 

declare interface sheets$Editors {

/**
 * True if anyone in the document's domain has edit access to the protected
 * range.  Domain protection is only supported on documents within a domain.
 */
domainUsersCanEdit?: boolean,

/**
 * The email addresses of groups with edit access to the protected range.
 */
groups?: string[],

/**
 * The email addresses of users with edit access to the protected range.
 */
users?: string[]
} 

declare interface sheets$EmbeddedChart {

/**
 * The ID of the chart.
 */
chartId?: number,

/**
 * The position of the chart.
 */
position?: sheets$EmbeddedObjectPosition,

/**
 * The specification of the chart.
 */
spec?: sheets$ChartSpec
} 

declare interface sheets$EmbeddedObjectPosition {

/**
 * If true, the embedded object will be put on a new sheet whose ID
 * is chosen for you. Used only when writing.
 */
newSheet?: boolean,

/**
 * The position at which the object is overlaid on top of a grid.
 */
overlayPosition?: sheets$OverlayPosition,

/**
 * The sheet this is on. Set only if the embedded object
 * is on its own sheet. Must be non-negative.
 */
sheetId?: number
} 

declare interface sheets$ErrorValue {

/**
 * A message with more information about the error
 * (in the spreadsheet's locale).
 */
message?: string,

/**
 * The type of error.
 */
type?: string
} 

declare interface sheets$ExtendedValue {

/**
 * Represents a boolean value.
 */
boolValue?: boolean,

/**
 * Represents an error.
 * This field is read-only.
 */
errorValue?: sheets$ErrorValue,

/**
 * Represents a formula.
 */
formulaValue?: string,

/**
 * Represents a double value.
 * Note: Dates, Times and DateTimes are represented as doubles in
 * "serial number" format.
 */
numberValue?: number,

/**
 * Represents a string value.
 * Leading single quotes are not included. For example, if the user typed
 * `'123` into the UI, this would be represented as a `stringValue` of
 * `"123"`.
 */
stringValue?: string
} 

declare interface sheets$FilterCriteria {

/**
 * A condition that must be true for values to be shown.
 * (This does not override hiddenValues -- if a value is listed there,
 * it will still be hidden.)
 */
condition?: sheets$BooleanCondition,

/**
 * Values that should be hidden.
 */
hiddenValues?: string[]
} 

declare interface sheets$FilterView {

/**
 * The criteria for showing/hiding values per column.
 * The map's key is the column index, and the value is the criteria for
 * that column.
 */
criteria?: Record<string, sheets$FilterCriteria>,

/**
 * The ID of the filter view.
 */
filterViewId?: number,

/**
 * The named range this filter view is backed by, if any.
 * 
 * When writing, only one of range or named_range_id
 * may be set.
 */
namedRangeId?: string,

/**
 * The range this filter view covers.
 * 
 * When writing, only one of range or named_range_id
 * may be set.
 */
range?: sheets$GridRange,

/**
 * The sort order per column. Later specifications are used when values
 * are equal in the earlier specifications.
 */
sortSpecs?: sheets$SortSpec[],

/**
 * The name of the filter view.
 */
title?: string
} 

declare interface sheets$FindReplaceRequest {

/**
 * True to find/replace over all sheets.
 */
allSheets?: boolean,

/**
 * The value to search.
 */
find?: string,

/**
 * True if the search should include cells with formulas.
 * False to skip cells with formulas.
 */
includeFormulas?: boolean,

/**
 * True if the search is case sensitive.
 */
matchCase?: boolean,

/**
 * True if the find value should match the entire cell.
 */
matchEntireCell?: boolean,

/**
 * The range to find/replace over.
 */
range?: sheets$GridRange,

/**
 * The value to use as the replacement.
 */
replacement?: string,

/**
 * True if the find value is a regex.
 * The regular expression and replacement should follow Java regex rules
 * at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html.
 * The replacement string is allowed to refer to capturing groups.
 * For example, if one cell has the contents `"Google Sheets"` and another
 * has `"Google Docs"`, then searching for `"o.&#42; (.&#42;)"` with a replacement of
 * `"$1 Rocks"` would change the contents of the cells to
 * `"GSheets Rocks"` and `"GDocs Rocks"` respectively.
 */
searchByRegex?: boolean,

/**
 * The sheet to find/replace over.
 */
sheetId?: number
} 

declare interface sheets$FindReplaceResponse {

/**
 * The number of formula cells changed.
 */
formulasChanged?: number,

/**
 * The number of occurrences (possibly multiple within a cell) changed.
 * For example, if replacing `"e"` with `"o"` in `"Google Sheets"`, this would
 * be `"3"` because `"Google Sheets"` -> `"Googlo Shoots"`.
 */
occurrencesChanged?: number,

/**
 * The number of rows changed.
 */
rowsChanged?: number,

/**
 * The number of sheets changed.
 */
sheetsChanged?: number,

/**
 * The number of non-formula cells changed.
 */
valuesChanged?: number
} 

declare interface sheets$GetSpreadsheetByDataFilterRequest {

/**
 * The DataFilters used to select which ranges to retrieve from
 * the spreadsheet.
 */
dataFilters?: sheets$DataFilter[],

/**
 * True if grid data should be returned.
 * This parameter is ignored if a field mask was set in the request.
 */
includeGridData?: boolean
} 

declare interface sheets$GradientRule {

/**
 * The final interpolation point.
 */
maxpoint?: sheets$InterpolationPoint,

/**
 * An optional midway interpolation point.
 */
midpoint?: sheets$InterpolationPoint,

/**
 * The starting interpolation point.
 */
minpoint?: sheets$InterpolationPoint
} 

declare interface sheets$GridCoordinate {

/**
 * The column index of the coordinate.
 */
columnIndex?: number,

/**
 * The row index of the coordinate.
 */
rowIndex?: number,

/**
 * The sheet this coordinate is on.
 */
sheetId?: number
} 

declare interface sheets$GridData {

/**
 * Metadata about the requested columns in the grid, starting with the column
 * in start_column.
 */
columnMetadata?: sheets$DimensionProperties[],

/**
 * The data in the grid, one entry per row,
 * starting with the row in startRow.
 * The values in RowData will correspond to columns starting
 * at start_column.
 */
rowData?: sheets$RowData[],

/**
 * Metadata about the requested rows in the grid, starting with the row
 * in start_row.
 */
rowMetadata?: sheets$DimensionProperties[],

/**
 * The first column this GridData refers to, zero-based.
 */
startColumn?: number,

/**
 * The first row this GridData refers to, zero-based.
 */
startRow?: number
} 

declare interface sheets$GridProperties {

/**
 * The number of columns in the grid.
 */
columnCount?: number,

/**
 * The number of columns that are frozen in the grid.
 */
frozenColumnCount?: number,

/**
 * The number of rows that are frozen in the grid.
 */
frozenRowCount?: number,

/**
 * True if the grid isn't showing gridlines in the UI.
 */
hideGridlines?: boolean,

/**
 * The number of rows in the grid.
 */
rowCount?: number
} 

declare interface sheets$GridRange {

/**
 * The end column (exclusive) of the range, or not set if unbounded.
 */
endColumnIndex?: number,

/**
 * The end row (exclusive) of the range, or not set if unbounded.
 */
endRowIndex?: number,

/**
 * The sheet this range is on.
 */
sheetId?: number,

/**
 * The start column (inclusive) of the range, or not set if unbounded.
 */
startColumnIndex?: number,

/**
 * The start row (inclusive) of the range, or not set if unbounded.
 */
startRowIndex?: number
} 

declare interface sheets$HistogramChartSpec {

/**
 * By default the bucket size (the range of values stacked in a single
 * column) is chosen automatically, but it may be overridden here.
 * E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc.
 * Cannot be negative.
 * This field is optional.
 */
bucketSize?: number,

/**
 * The position of the chart legend.
 */
legendPosition?: string,

/**
 * The outlier percentile is used to ensure that outliers do not adversely
 * affect the calculation of bucket sizes.  For example, setting an outlier
 * percentile of 0.05 indicates that the top and bottom 5% of values when
 * calculating buckets.  The values are still included in the chart, they will
 * be added to the first or last buckets instead of their own buckets.
 * Must be between 0.0 and 0.5.
 */
outlierPercentile?: number,

/**
 * The series for a histogram may be either a single series of values to be
 * bucketed or multiple series, each of the same length, containing the name
 * of the series followed by the values to be bucketed for that series.
 */
series?: sheets$HistogramSeries[],

/**
 * Whether horizontal divider lines should be displayed between items in each
 * column.
 */
showItemDividers?: boolean
} 

declare interface sheets$HistogramSeries {

/**
 * The color of the column representing this series in each bucket.
 * This field is optional.
 */
barColor?: sheets$Color,

/**
 * The data for this histogram series.
 */
data?: sheets$ChartData
} 

declare interface sheets$InsertDimensionRequest {

/**
 * Whether dimension properties should be extended from the dimensions
 * before or after the newly inserted dimensions.
 * True to inherit from the dimensions before (in which case the start
 * index must be greater than 0), and false to inherit from the dimensions
 * after.
 * 
 * For example, if row index 0 has red background and row index 1
 * has a green background, then inserting 2 rows at index 1 can inherit
 * either the green or red background.  If `inheritFromBefore` is true,
 * the two new rows will be red (because the row before the insertion point
 * was red), whereas if `inheritFromBefore` is false, the two new rows will
 * be green (because the row after the insertion point was green).
 */
inheritFromBefore?: boolean,

/**
 * The dimensions to insert.  Both the start and end indexes must be bounded.
 */
range?: sheets$DimensionRange
} 

declare interface sheets$InsertRangeRequest {

/**
 * The range to insert new cells into.
 */
range?: sheets$GridRange,

/**
 * The dimension which will be shifted when inserting cells.
 * If ROWS, existing cells will be shifted down.
 * If COLUMNS, existing cells will be shifted right.
 */
shiftDimension?: string
} 

declare interface sheets$InterpolationPoint {

/**
 * The color this interpolation point should use.
 */
color?: sheets$Color,

/**
 * How the value should be interpreted.
 */
type?: string,

/**
 * The value this interpolation point uses.  May be a formula.
 * Unused if type is MIN or
 * MAX.
 */
value?: string
} 

declare interface sheets$IterativeCalculationSettings {

/**
 * When iterative calculation is enabled and successive results differ by
 * less than this threshold value, the calculation rounds stop.
 */
convergenceThreshold?: number,

/**
 * When iterative calculation is enabled, the maximum number of calculation
 * rounds to perform.
 */
maxIterations?: number
} 

declare interface sheets$MatchedDeveloperMetadata {

/**
 * All filters matching the returned developer metadata.
 */
dataFilters?: sheets$DataFilter[],

/**
 * The developer metadata matching the specified filters.
 */
developerMetadata?: sheets$DeveloperMetadata
} 

declare interface sheets$MatchedValueRange {

/**
 * The DataFilters from the request that matched the range of
 * values.
 */
dataFilters?: sheets$DataFilter[],

/**
 * The values matched by the DataFilter.
 */
valueRange?: sheets$ValueRange
} 

declare interface sheets$MergeCellsRequest {

/**
 * How the cells should be merged.
 */
mergeType?: string,

/**
 * The range of cells to merge.
 */
range?: sheets$GridRange
} 

declare interface sheets$MoveDimensionRequest {

/**
 * The zero-based start index of where to move the source data to,
 * based on the coordinates &#42;before&#42; the source data is removed
 * from the grid.  Existing data will be shifted down or right
 * (depending on the dimension) to make room for the moved dimensions.
 * The source dimensions are removed from the grid, so the
 * the data may end up in a different index than specified.
 * 
 * For example, given `A1..A5` of `0, 1, 2, 3, 4` and wanting to move
 * `"1"` and `"2"` to between `"3"` and `"4"`, the source would be
 * `ROWS [1..3)`,and the destination index would be `"4"`
 * (the zero-based index of row 5).
 * The end result would be `A1..A5` of `0, 3, 1, 2, 4`.
 */
destinationIndex?: number,

/**
 * The source dimensions to move.
 */
source?: sheets$DimensionRange
} 

declare interface sheets$NamedRange {

/**
 * The name of the named range.
 */
name?: string,

/**
 * The ID of the named range.
 */
namedRangeId?: string,

/**
 * The range this represents.
 */
range?: sheets$GridRange
} 

declare interface sheets$NumberFormat {

/**
 * Pattern string used for formatting.  If not set, a default pattern based on
 * the user's locale will be used if necessary for the given type.
 * See the [Date and Number Formats guide](/sheets/api/guides/formats) for more
 * information about the supported patterns.
 */
pattern?: string,

/**
 * The type of the number format.
 * When writing, this field must be set.
 */
type?: string
} 

declare interface sheets$OrgChartSpec {

/**
 * The data containing the labels for all the nodes in the chart.  Labels
 * must be unique.
 */
labels?: sheets$ChartData,

/**
 * The color of the org chart nodes.
 */
nodeColor?: sheets$Color,

/**
 * The size of the org chart nodes.
 */
nodeSize?: string,

/**
 * The data containing the label of the parent for the corresponding node.
 * A blank value indicates that the node has no parent and is a top-level
 * node.
 * This field is optional.
 */
parentLabels?: sheets$ChartData,

/**
 * The color of the selected org chart nodes.
 */
selectedNodeColor?: sheets$Color,

/**
 * The data containing the tooltip for the corresponding node.  A blank value
 * results in no tooltip being displayed for the node.
 * This field is optional.
 */
tooltips?: sheets$ChartData
} 

declare interface sheets$OverlayPosition {

/**
 * The cell the object is anchored to.
 */
anchorCell?: sheets$GridCoordinate,

/**
 * The height of the object, in pixels. Defaults to 371.
 */
heightPixels?: number,

/**
 * The horizontal offset, in pixels, that the object is offset
 * from the anchor cell.
 */
offsetXPixels?: number,

/**
 * The vertical offset, in pixels, that the object is offset
 * from the anchor cell.
 */
offsetYPixels?: number,

/**
 * The width of the object, in pixels. Defaults to 600.
 */
widthPixels?: number
} 

declare interface sheets$Padding {

/**
 * The bottom padding of the cell.
 */
bottom?: number,

/**
 * The left padding of the cell.
 */
left?: number,

/**
 * The right padding of the cell.
 */
right?: number,

/**
 * The top padding of the cell.
 */
top?: number
} 

declare interface sheets$PasteDataRequest {

/**
 * The coordinate at which the data should start being inserted.
 */
coordinate?: sheets$GridCoordinate,

/**
 * The data to insert.
 */
data?: string,

/**
 * The delimiter in the data.
 */
delimiter?: string,

/**
 * True if the data is HTML.
 */
html?: boolean,

/**
 * How the data should be pasted.
 */
type?: string
} 

declare interface sheets$PieChartSpec {

/**
 * The data that covers the domain of the pie chart.
 */
domain?: sheets$ChartData,

/**
 * Where the legend of the pie chart should be drawn.
 */
legendPosition?: string,

/**
 * The size of the hole in the pie chart.
 */
pieHole?: number,

/**
 * The data that covers the one and only series of the pie chart.
 */
series?: sheets$ChartData,

/**
 * True if the pie is three dimensional.
 */
threeDimensional?: boolean
} 

declare interface sheets$PivotFilterCriteria {

/**
 * Values that should be included.  Values not listed here are excluded.
 */
visibleValues?: string[]
} 

declare interface sheets$PivotGroup {

/**
 * True if the pivot table should include the totals for this grouping.
 */
showTotals?: boolean,

/**
 * The order the values in this group should be sorted.
 */
sortOrder?: string,

/**
 * The column offset of the source range that this grouping is based on.
 * 
 * For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0`
 * means this group refers to column `C`, whereas the offset `1` would refer
 * to column `D`.
 */
sourceColumnOffset?: number,

/**
 * The bucket of the opposite pivot group to sort by.
 * If not specified, sorting is alphabetical by this group's values.
 */
valueBucket?: sheets$PivotGroupSortValueBucket,

/**
 * Metadata about values in the grouping.
 */
valueMetadata?: sheets$PivotGroupValueMetadata[]
} 

declare interface sheets$PivotGroupSortValueBucket {

/**
 * Determines the bucket from which values are chosen to sort.
 * 
 * For example, in a pivot table with one row group & two column groups,
 * the row group can list up to two values. The first value corresponds
 * to a value within the first column group, and the second value
 * corresponds to a value in the second column group.  If no values
 * are listed, this would indicate that the row should be sorted according
 * to the "Grand Total" over the column groups. If a single value is listed,
 * this would correspond to using the "Total" of that bucket.
 */
buckets?: sheets$ExtendedValue[],

/**
 * The offset in the PivotTable.values list which the values in this
 * grouping should be sorted by.
 */
valuesIndex?: number
} 

declare interface sheets$PivotGroupValueMetadata {

/**
 * True if the data corresponding to the value is collapsed.
 */
collapsed?: boolean,

/**
 * The calculated value the metadata corresponds to.
 * (Note that formulaValue is not valid,
 * because the values will be calculated.)
 */
value?: sheets$ExtendedValue
} 

declare interface sheets$PivotTable {

/**
 * Each column grouping in the pivot table.
 */
columns?: sheets$PivotGroup[],

/**
 * An optional mapping of filters per source column offset.
 * 
 * The filters will be applied before aggregating data into the pivot table.
 * The map's key is the column offset of the source range that you want to
 * filter, and the value is the criteria for that column.
 * 
 * For example, if the source was `C10:E15`, a key of `0` will have the filter
 * for column `C`, whereas the key `1` is for column `D`.
 */
criteria?: Record<string, sheets$PivotFilterCriteria>,

/**
 * Each row grouping in the pivot table.
 */
rows?: sheets$PivotGroup[],

/**
 * The range the pivot table is reading data from.
 */
source?: sheets$GridRange,

/**
 * Whether values should be listed horizontally (as columns)
 * or vertically (as rows).
 */
valueLayout?: string,

/**
 * A list of values to include in the pivot table.
 */
values?: sheets$PivotValue[]
} 

declare interface sheets$PivotValue {

/**
 * A custom formula to calculate the value.  The formula must start
 * with an `=` character.
 */
formula?: string,

/**
 * A name to use for the value. This is only used if formula was set.
 * Otherwise, the column name is used.
 */
name?: string,

/**
 * The column offset of the source range that this value reads from.
 * 
 * For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0`
 * means this value refers to column `C`, whereas the offset `1` would
 * refer to column `D`.
 */
sourceColumnOffset?: number,

/**
 * A function to summarize the value.
 * If formula is set, the only supported values are
 * SUM and
 * CUSTOM.
 * If sourceColumnOffset is set, then `CUSTOM`
 * is not supported.
 */
summarizeFunction?: string
} 

declare interface sheets$ProtectedRange {

/**
 * The description of this protected range.
 */
description?: string,

/**
 * The users and groups with edit access to the protected range.
 * This field is only visible to users with edit access to the protected
 * range and the document.
 * Editors are not supported with warning_only protection.
 */
editors?: sheets$Editors,

/**
 * The named range this protected range is backed by, if any.
 * 
 * When writing, only one of range or named_range_id
 * may be set.
 */
namedRangeId?: string,

/**
 * The ID of the protected range.
 * This field is read-only.
 */
protectedRangeId?: number,

/**
 * The range that is being protected.
 * The range may be fully unbounded, in which case this is considered
 * a protected sheet.
 * 
 * When writing, only one of range or named_range_id
 * may be set.
 */
range?: sheets$GridRange,

/**
 * True if the user who requested this protected range can edit the
 * protected area.
 * This field is read-only.
 */
requestingUserCanEdit?: boolean,

/**
 * The list of unprotected ranges within a protected sheet.
 * Unprotected ranges are only supported on protected sheets.
 */
unprotectedRanges?: sheets$GridRange[],

/**
 * True if this protected range will show a warning when editing.
 * Warning-based protection means that every user can edit data in the
 * protected range, except editing will prompt a warning asking the user
 * to confirm the edit.
 * 
 * When writing: if this field is true, then editors is ignored.
 * Additionally, if this field is changed from true to false and the
 * `editors` field is not set (nor included in the field mask), then
 * the editors will be set to all the editors in the document.
 */
warningOnly?: boolean
} 

declare interface sheets$RandomizeRangeRequest {

/**
 * The range to randomize.
 */
range?: sheets$GridRange
} 

declare interface sheets$RepeatCellRequest {

/**
 * The data to write.
 */
cell?: sheets$CellData,

/**
 * The fields that should be updated.  At least one field must be specified.
 * The root `cell` is implied and should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string,

/**
 * The range to repeat the cell in.
 */
range?: sheets$GridRange
} 

declare interface sheets$Request {

/**
 * Adds a new banded range
 */
addBanding?: sheets$AddBandingRequest,

/**
 * Adds a chart.
 */
addChart?: sheets$AddChartRequest,

/**
 * Adds a new conditional format rule.
 */
addConditionalFormatRule?: sheets$AddConditionalFormatRuleRequest,

/**
 * Adds a filter view.
 */
addFilterView?: sheets$AddFilterViewRequest,

/**
 * Adds a named range.
 */
addNamedRange?: sheets$AddNamedRangeRequest,

/**
 * Adds a protected range.
 */
addProtectedRange?: sheets$AddProtectedRangeRequest,

/**
 * Adds a sheet.
 */
addSheet?: sheets$AddSheetRequest,

/**
 * Appends cells after the last row with data in a sheet.
 */
appendCells?: sheets$AppendCellsRequest,

/**
 * Appends dimensions to the end of a sheet.
 */
appendDimension?: sheets$AppendDimensionRequest,

/**
 * Automatically fills in more data based on existing data.
 */
autoFill?: sheets$AutoFillRequest,

/**
 * Automatically resizes one or more dimensions based on the contents
 * of the cells in that dimension.
 */
autoResizeDimensions?: sheets$AutoResizeDimensionsRequest,

/**
 * Clears the basic filter on a sheet.
 */
clearBasicFilter?: sheets$ClearBasicFilterRequest,

/**
 * Copies data from one area and pastes it to another.
 */
copyPaste?: sheets$CopyPasteRequest,

/**
 * Creates new developer metadata
 */
createDeveloperMetadata?: sheets$CreateDeveloperMetadataRequest,

/**
 * Cuts data from one area and pastes it to another.
 */
cutPaste?: sheets$CutPasteRequest,

/**
 * Removes a banded range
 */
deleteBanding?: sheets$DeleteBandingRequest,

/**
 * Deletes an existing conditional format rule.
 */
deleteConditionalFormatRule?: sheets$DeleteConditionalFormatRuleRequest,

/**
 * Deletes developer metadata
 */
deleteDeveloperMetadata?: sheets$DeleteDeveloperMetadataRequest,

/**
 * Deletes rows or columns in a sheet.
 */
deleteDimension?: sheets$DeleteDimensionRequest,

/**
 * Deletes an embedded object (e.g, chart, image) in a sheet.
 */
deleteEmbeddedObject?: sheets$DeleteEmbeddedObjectRequest,

/**
 * Deletes a filter view from a sheet.
 */
deleteFilterView?: sheets$DeleteFilterViewRequest,

/**
 * Deletes a named range.
 */
deleteNamedRange?: sheets$DeleteNamedRangeRequest,

/**
 * Deletes a protected range.
 */
deleteProtectedRange?: sheets$DeleteProtectedRangeRequest,

/**
 * Deletes a range of cells from a sheet, shifting the remaining cells.
 */
deleteRange?: sheets$DeleteRangeRequest,

/**
 * Deletes a sheet.
 */
deleteSheet?: sheets$DeleteSheetRequest,

/**
 * Duplicates a filter view.
 */
duplicateFilterView?: sheets$DuplicateFilterViewRequest,

/**
 * Duplicates a sheet.
 */
duplicateSheet?: sheets$DuplicateSheetRequest,

/**
 * Finds and replaces occurrences of some text with other text.
 */
findReplace?: sheets$FindReplaceRequest,

/**
 * Inserts new rows or columns in a sheet.
 */
insertDimension?: sheets$InsertDimensionRequest,

/**
 * Inserts new cells in a sheet, shifting the existing cells.
 */
insertRange?: sheets$InsertRangeRequest,

/**
 * Merges cells together.
 */
mergeCells?: sheets$MergeCellsRequest,

/**
 * Moves rows or columns to another location in a sheet.
 */
moveDimension?: sheets$MoveDimensionRequest,

/**
 * Pastes data (HTML or delimited) into a sheet.
 */
pasteData?: sheets$PasteDataRequest,

/**
 * Randomizes the order of the rows in a range.
 */
randomizeRange?: sheets$RandomizeRangeRequest,

/**
 * Repeats a single cell across a range.
 */
repeatCell?: sheets$RepeatCellRequest,

/**
 * Sets the basic filter on a sheet.
 */
setBasicFilter?: sheets$SetBasicFilterRequest,

/**
 * Sets data validation for one or more cells.
 */
setDataValidation?: sheets$SetDataValidationRequest,

/**
 * Sorts data in a range.
 */
sortRange?: sheets$SortRangeRequest,

/**
 * Converts a column of text into many columns of text.
 */
textToColumns?: sheets$TextToColumnsRequest,

/**
 * Unmerges merged cells.
 */
unmergeCells?: sheets$UnmergeCellsRequest,

/**
 * Updates a banded range
 */
updateBanding?: sheets$UpdateBandingRequest,

/**
 * Updates the borders in a range of cells.
 */
updateBorders?: sheets$UpdateBordersRequest,

/**
 * Updates many cells at once.
 */
updateCells?: sheets$UpdateCellsRequest,

/**
 * Updates a chart's specifications.
 */
updateChartSpec?: sheets$UpdateChartSpecRequest,

/**
 * Updates an existing conditional format rule.
 */
updateConditionalFormatRule?: sheets$UpdateConditionalFormatRuleRequest,

/**
 * Updates an existing developer metadata entry
 */
updateDeveloperMetadata?: sheets$UpdateDeveloperMetadataRequest,

/**
 * Updates dimensions' properties.
 */
updateDimensionProperties?: sheets$UpdateDimensionPropertiesRequest,

/**
 * Updates an embedded object's (e.g. chart, image) position.
 */
updateEmbeddedObjectPosition?: sheets$UpdateEmbeddedObjectPositionRequest,

/**
 * Updates the properties of a filter view.
 */
updateFilterView?: sheets$UpdateFilterViewRequest,

/**
 * Updates a named range.
 */
updateNamedRange?: sheets$UpdateNamedRangeRequest,

/**
 * Updates a protected range.
 */
updateProtectedRange?: sheets$UpdateProtectedRangeRequest,

/**
 * Updates a sheet's properties.
 */
updateSheetProperties?: sheets$UpdateSheetPropertiesRequest,

/**
 * Updates the spreadsheet's properties.
 */
updateSpreadsheetProperties?: sheets$UpdateSpreadsheetPropertiesRequest
} 

declare interface sheets$Response {

/**
 * A reply from adding a banded range.
 */
addBanding?: sheets$AddBandingResponse,

/**
 * A reply from adding a chart.
 */
addChart?: sheets$AddChartResponse,

/**
 * A reply from adding a filter view.
 */
addFilterView?: sheets$AddFilterViewResponse,

/**
 * A reply from adding a named range.
 */
addNamedRange?: sheets$AddNamedRangeResponse,

/**
 * A reply from adding a protected range.
 */
addProtectedRange?: sheets$AddProtectedRangeResponse,

/**
 * A reply from adding a sheet.
 */
addSheet?: sheets$AddSheetResponse,

/**
 * A reply from creating a developer metadata entry.
 */
createDeveloperMetadata?: sheets$CreateDeveloperMetadataResponse,

/**
 * A reply from deleting a conditional format rule.
 */
deleteConditionalFormatRule?: sheets$DeleteConditionalFormatRuleResponse,

/**
 * A reply from deleting a developer metadata entry.
 */
deleteDeveloperMetadata?: sheets$DeleteDeveloperMetadataResponse,

/**
 * A reply from duplicating a filter view.
 */
duplicateFilterView?: sheets$DuplicateFilterViewResponse,

/**
 * A reply from duplicating a sheet.
 */
duplicateSheet?: sheets$DuplicateSheetResponse,

/**
 * A reply from doing a find/replace.
 */
findReplace?: sheets$FindReplaceResponse,

/**
 * A reply from updating a conditional format rule.
 */
updateConditionalFormatRule?: sheets$UpdateConditionalFormatRuleResponse,

/**
 * A reply from updating a developer metadata entry.
 */
updateDeveloperMetadata?: sheets$UpdateDeveloperMetadataResponse,

/**
 * A reply from updating an embedded object's position.
 */
updateEmbeddedObjectPosition?: sheets$UpdateEmbeddedObjectPositionResponse
} 

declare interface sheets$RowData {

/**
 * The values in the row, one per column.
 */
values?: sheets$CellData[]
} 

declare interface sheets$SearchDeveloperMetadataRequest {

/**
 * The data filters describing the criteria used to determine which
 * DeveloperMetadata entries to return.  DeveloperMetadata matching any of the
 * specified filters will be included in the response.
 */
dataFilters?: sheets$DataFilter[]
} 

declare interface sheets$SearchDeveloperMetadataResponse {

/**
 * The metadata matching the criteria of the search request.
 */
matchedDeveloperMetadata?: sheets$MatchedDeveloperMetadata[]
} 

declare interface sheets$SetBasicFilterRequest {

/**
 * The filter to set.
 */
filter?: sheets$BasicFilter
} 

declare interface sheets$SetDataValidationRequest {

/**
 * The range the data validation rule should apply to.
 */
range?: sheets$GridRange,

/**
 * The data validation rule to set on each cell in the range,
 * or empty to clear the data validation in the range.
 */
rule?: sheets$DataValidationRule
} 

declare interface sheets$Sheet {

/**
 * The banded (i.e. alternating colors) ranges on this sheet.
 */
bandedRanges?: sheets$BandedRange[],

/**
 * The filter on this sheet, if any.
 */
basicFilter?: sheets$BasicFilter,

/**
 * The specifications of every chart on this sheet.
 */
charts?: sheets$EmbeddedChart[],

/**
 * The conditional format rules in this sheet.
 */
conditionalFormats?: sheets$ConditionalFormatRule[],

/**
 * Data in the grid, if this is a grid sheet.
 * The number of GridData objects returned is dependent on the number of
 * ranges requested on this sheet. For example, if this is representing
 * `Sheet1`, and the spreadsheet was requested with ranges
 * `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData will have a
 * startRow/startColumn of `0`,
 * while the second one will have `startRow 14` (zero-based row 15),
 * and `startColumn 3` (zero-based column D).
 */
data?: sheets$GridData[],

/**
 * The developer metadata associated with a sheet.
 */
developerMetadata?: sheets$DeveloperMetadata[],

/**
 * The filter views in this sheet.
 */
filterViews?: sheets$FilterView[],

/**
 * The ranges that are merged together.
 */
merges?: sheets$GridRange[],

/**
 * The properties of the sheet.
 */
properties?: sheets$SheetProperties,

/**
 * The protected ranges in this sheet.
 */
protectedRanges?: sheets$ProtectedRange[]
} 

declare interface sheets$SheetProperties {

/**
 * Additional properties of the sheet if this sheet is a grid.
 * (If the sheet is an object sheet, containing a chart or image, then
 * this field will be absent.)
 * When writing it is an error to set any grid properties on non-grid sheets.
 */
gridProperties?: sheets$GridProperties,

/**
 * True if the sheet is hidden in the UI, false if it's visible.
 */
hidden?: boolean,

/**
 * The index of the sheet within the spreadsheet.
 * When adding or updating sheet properties, if this field
 * is excluded then the sheet will be added or moved to the end
 * of the sheet list. When updating sheet indices or inserting
 * sheets, movement is considered in "before the move" indexes.
 * For example, if there were 3 sheets (S1, S2, S3) in order to
 * move S1 ahead of S2 the index would have to be set to 2. A sheet
 * index update request will be ignored if the requested index is
 * identical to the sheets current index or if the requested new
 * index is equal to the current sheet index + 1.
 */
index?: number,

/**
 * True if the sheet is an RTL sheet instead of an LTR sheet.
 */
rightToLeft?: boolean,

/**
 * The ID of the sheet. Must be non-negative.
 * This field cannot be changed once set.
 */
sheetId?: number,

/**
 * The type of sheet. Defaults to GRID.
 * This field cannot be changed once set.
 */
sheetType?: string,

/**
 * The color of the tab in the UI.
 */
tabColor?: sheets$Color,

/**
 * The name of the sheet.
 */
title?: string
} 

declare interface sheets$SortRangeRequest {

/**
 * The range to sort.
 */
range?: sheets$GridRange,

/**
 * The sort order per column. Later specifications are used when values
 * are equal in the earlier specifications.
 */
sortSpecs?: sheets$SortSpec[]
} 

declare interface sheets$SortSpec {

/**
 * The dimension the sort should be applied to.
 */
dimensionIndex?: number,

/**
 * The order data should be sorted.
 */
sortOrder?: string
} 

declare interface sheets$SourceAndDestination {

/**
 * The dimension that data should be filled into.
 */
dimension?: string,

/**
 * The number of rows or columns that data should be filled into.
 * Positive numbers expand beyond the last row or last column
 * of the source.  Negative numbers expand before the first row
 * or first column of the source.
 */
fillLength?: number,

/**
 * The location of the data to use as the source of the autofill.
 */
source?: sheets$GridRange
} 

declare interface sheets$Spreadsheet {

/**
 * The developer metadata associated with a spreadsheet.
 */
developerMetadata?: sheets$DeveloperMetadata[],

/**
 * The named ranges defined in a spreadsheet.
 */
namedRanges?: sheets$NamedRange[],

/**
 * Overall properties of a spreadsheet.
 */
properties?: sheets$SpreadsheetProperties,

/**
 * The sheets that are part of a spreadsheet.
 */
sheets?: sheets$Sheet[],

/**
 * The ID of the spreadsheet.
 * This field is read-only.
 */
spreadsheetId?: string,

/**
 * The url of the spreadsheet.
 * This field is read-only.
 */
spreadsheetUrl?: string
} 

declare interface sheets$SpreadsheetProperties {

/**
 * The amount of time to wait before volatile functions are recalculated.
 */
autoRecalc?: string,

/**
 * The default format of all cells in the spreadsheet.
 * CellData.effectiveFormat will not be set if the
 * cell's format is equal to this default format.
 * This field is read-only.
 */
defaultFormat?: sheets$CellFormat,

/**
 * Determines whether and how circular references are resolved with iterative
 * calculation.  Absence of this field means that circular references will
 * result in calculation errors.
 */
iterativeCalculationSettings?: sheets$IterativeCalculationSettings,

/**
 * The locale of the spreadsheet in one of the following formats:
 * 
 * &#42; an ISO 639-1 language code such as `en`
 * 
 * &#42; an ISO 639-2 language code such as `fil`, if no 639-1 code exists
 * 
 * &#42; a combination of the ISO language code and country code, such as `en_US`
 * 
 * Note: when updating this field, not all locales/languages are supported.
 */
locale?: string,

/**
 * The time zone of the spreadsheet, in CLDR format such as
 * `America/New_York`. If the time zone isn't recognized, this may
 * be a custom time zone such as `GMT-07:00`.
 */
timeZone?: string,

/**
 * The title of the spreadsheet.
 */
title?: string
} 

declare interface sheets$TextFormat {

/**
 * True if the text is bold.
 */
bold?: boolean,

/**
 * The font family.
 */
fontFamily?: string,

/**
 * The size of the font.
 */
fontSize?: number,

/**
 * The foreground color of the text.
 */
foregroundColor?: sheets$Color,

/**
 * True if the text is italicized.
 */
italic?: boolean,

/**
 * True if the text has a strikethrough.
 */
strikethrough?: boolean,

/**
 * True if the text is underlined.
 */
underline?: boolean
} 

declare interface sheets$TextFormatRun {

/**
 * The format of this run.  Absent values inherit the cell's format.
 */
format?: sheets$TextFormat,

/**
 * The character index where this run starts.
 */
startIndex?: number
} 

declare interface sheets$TextPosition {

/**
 * Horizontal alignment setting for the piece of text.
 */
horizontalAlignment?: string
} 

declare interface sheets$TextRotation {

/**
 * The angle between the standard orientation and the desired orientation.
 * Measured in degrees. Valid values are between -90 and 90. Positive
 * angles are angled upwards, negative are angled downwards.
 * 
 * Note: For LTR text direction positive angles are in the counterclockwise
 * direction, whereas for RTL they are in the clockwise direction
 */
angle?: number,

/**
 * If true, text reads top to bottom, but the orientation of individual
 * characters is unchanged.
 * For example:
 * 
 * | V |
 * | e |
 * | r |
 * | t |
 * | i |
 * | c |
 * | a |
 * | l |
 */
vertical?: boolean
} 

declare interface sheets$TextToColumnsRequest {

/**
 * The delimiter to use. Used only if delimiterType is
 * CUSTOM.
 */
delimiter?: string,

/**
 * The delimiter type to use.
 */
delimiterType?: string,

/**
 * The source data range.  This must span exactly one column.
 */
source?: sheets$GridRange
} 

declare interface sheets$UnmergeCellsRequest {

/**
 * The range within which all cells should be unmerged.
 * If the range spans multiple merges, all will be unmerged.
 * The range must not partially span any merge.
 */
range?: sheets$GridRange
} 

declare interface sheets$UpdateBandingRequest {

/**
 * The banded range to update with the new properties.
 */
bandedRange?: sheets$BandedRange,

/**
 * The fields that should be updated.  At least one field must be specified.
 * The root `bandedRange` is implied and should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string
} 

declare interface sheets$UpdateBordersRequest {

/**
 * The border to put at the bottom of the range.
 */
bottom?: sheets$Border,

/**
 * The horizontal border to put within the range.
 */
innerHorizontal?: sheets$Border,

/**
 * The vertical border to put within the range.
 */
innerVertical?: sheets$Border,

/**
 * The border to put at the left of the range.
 */
left?: sheets$Border,

/**
 * The range whose borders should be updated.
 */
range?: sheets$GridRange,

/**
 * The border to put at the right of the range.
 */
right?: sheets$Border,

/**
 * The border to put at the top of the range.
 */
top?: sheets$Border
} 

declare interface sheets$UpdateCellsRequest {

/**
 * The fields of CellData that should be updated.
 * At least one field must be specified.
 * The root is the CellData; 'row.values.' should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string,

/**
 * The range to write data to.
 * 
 * If the data in rows does not cover the entire requested range,
 * the fields matching those set in fields will be cleared.
 */
range?: sheets$GridRange,

/**
 * The data to write.
 */
rows?: sheets$RowData[],

/**
 * The coordinate to start writing data at.
 * Any number of rows and columns (including a different number of
 * columns per row) may be written.
 */
start?: sheets$GridCoordinate
} 

declare interface sheets$UpdateChartSpecRequest {

/**
 * The ID of the chart to update.
 */
chartId?: number,

/**
 * The specification to apply to the chart.
 */
spec?: sheets$ChartSpec
} 

declare interface sheets$UpdateConditionalFormatRuleRequest {

/**
 * The zero-based index of the rule that should be replaced or moved.
 */
index?: number,

/**
 * The zero-based new index the rule should end up at.
 */
newIndex?: number,

/**
 * The rule that should replace the rule at the given index.
 */
rule?: sheets$ConditionalFormatRule,

/**
 * The sheet of the rule to move.  Required if new_index is set,
 * unused otherwise.
 */
sheetId?: number
} 

declare interface sheets$UpdateConditionalFormatRuleResponse {

/**
 * The index of the new rule.
 */
newIndex?: number,

/**
 * The new rule that replaced the old rule (if replacing),
 * or the rule that was moved (if moved)
 */
newRule?: sheets$ConditionalFormatRule,

/**
 * The old index of the rule. Not set if a rule was replaced
 * (because it is the same as new_index).
 */
oldIndex?: number,

/**
 * The old (deleted) rule. Not set if a rule was moved
 * (because it is the same as new_rule).
 */
oldRule?: sheets$ConditionalFormatRule
} 

declare interface sheets$UpdateDeveloperMetadataRequest {

/**
 * The filters matching the developer metadata entries to update.
 */
dataFilters?: sheets$DataFilter[],

/**
 * The value that all metadata matched by the data filters will be updated to.
 */
developerMetadata?: sheets$DeveloperMetadata,

/**
 * The fields that should be updated.  At least one field must be specified.
 * The root `developerMetadata` is implied and should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string
} 

declare interface sheets$UpdateDeveloperMetadataResponse {

/**
 * The updated developer metadata.
 */
developerMetadata?: sheets$DeveloperMetadata[]
} 

declare interface sheets$UpdateDimensionPropertiesRequest {

/**
 * The fields that should be updated.  At least one field must be specified.
 * The root `properties` is implied and should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string,

/**
 * Properties to update.
 */
properties?: sheets$DimensionProperties,

/**
 * The rows or columns to update.
 */
range?: sheets$DimensionRange
} 

declare interface sheets$UpdateEmbeddedObjectPositionRequest {

/**
 * The fields of OverlayPosition
 * that should be updated when setting a new position. Used only if
 * newPosition.overlayPosition
 * is set, in which case at least one field must
 * be specified.  The root `newPosition.overlayPosition` is implied and
 * should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string,

/**
 * An explicit position to move the embedded object to.
 * If newPosition.sheetId is set,
 * a new sheet with that ID will be created.
 * If newPosition.newSheet is set to true,
 * a new sheet will be created with an ID that will be chosen for you.
 */
newPosition?: sheets$EmbeddedObjectPosition,

/**
 * The ID of the object to moved.
 */
objectId?: number
} 

declare interface sheets$UpdateEmbeddedObjectPositionResponse {

/**
 * The new position of the embedded object.
 */
position?: sheets$EmbeddedObjectPosition
} 

declare interface sheets$UpdateFilterViewRequest {

/**
 * The fields that should be updated.  At least one field must be specified.
 * The root `filter` is implied and should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string,

/**
 * The new properties of the filter view.
 */
filter?: sheets$FilterView
} 

declare interface sheets$UpdateNamedRangeRequest {

/**
 * The fields that should be updated.  At least one field must be specified.
 * The root `namedRange` is implied and should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string,

/**
 * The named range to update with the new properties.
 */
namedRange?: sheets$NamedRange
} 

declare interface sheets$UpdateProtectedRangeRequest {

/**
 * The fields that should be updated.  At least one field must be specified.
 * The root `protectedRange` is implied and should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string,

/**
 * The protected range to update with the new properties.
 */
protectedRange?: sheets$ProtectedRange
} 

declare interface sheets$UpdateSheetPropertiesRequest {

/**
 * The fields that should be updated.  At least one field must be specified.
 * The root `properties` is implied and should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string,

/**
 * The properties to update.
 */
properties?: sheets$SheetProperties
} 

declare interface sheets$UpdateSpreadsheetPropertiesRequest {

/**
 * The fields that should be updated.  At least one field must be specified.
 * The root 'properties' is implied and should not be specified.
 * A single `"&#42;"` can be used as short-hand for listing every field.
 */
fields?: string,

/**
 * The properties to update.
 */
properties?: sheets$SpreadsheetProperties
} 

declare interface sheets$UpdateValuesByDataFilterResponse {

/**
 * The data filter that selected the range that was updated.
 */
dataFilter?: sheets$DataFilter,

/**
 * The number of cells updated.
 */
updatedCells?: number,

/**
 * The number of columns where at least one cell in the column was updated.
 */
updatedColumns?: number,

/**
 * The values of the cells in the range matched by the dataFilter after all
 * updates were applied. This is only included if the request's
 * `includeValuesInResponse` field was `true`.
 */
updatedData?: sheets$ValueRange,

/**
 * The range (in A1 notation) that updates were applied to.
 */
updatedRange?: string,

/**
 * The number of rows where at least one cell in the row was updated.
 */
updatedRows?: number
} 

declare interface sheets$UpdateValuesResponse {

/**
 * The spreadsheet the updates were applied to.
 */
spreadsheetId?: string,

/**
 * The number of cells updated.
 */
updatedCells?: number,

/**
 * The number of columns where at least one cell in the column was updated.
 */
updatedColumns?: number,

/**
 * The values of the cells after updates were applied.
 * This is only included if the request's `includeValuesInResponse` field
 * was `true`.
 */
updatedData?: sheets$ValueRange,

/**
 * The range (in A1 notation) that updates were applied to.
 */
updatedRange?: string,

/**
 * The number of rows where at least one cell in the row was updated.
 */
updatedRows?: number
} 

declare interface sheets$ValueRange {

/**
 * The major dimension of the values.
 * 
 * For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,
 * then requesting `range=A1:B2,majorDimension=ROWS` will return
 * `[[1,2],[3,4]]`,
 * whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return
 * `[[1,3],[2,4]]`.
 * 
 * For input, with `range=A1:B2,majorDimension=ROWS` then `[[1,2],[3,4]]`
 * will set `A1=1,B1=2,A2=3,B2=4`. With `range=A1:B2,majorDimension=COLUMNS`
 * then `[[1,2],[3,4]]` will set `A1=1,B1=3,A2=2,B2=4`.
 * 
 * When writing, if this field is not set, it defaults to ROWS.
 */
majorDimension?: string,

/**
 * The range the values cover, in A1 notation.
 * For output, this range indicates the entire requested range,
 * even though the values will exclude trailing rows and columns.
 * When appending values, this field represents the range to search for a
 * table, after which values will be appended.
 */
range?: string,

/**
 * The data that was read or to be written.  This is an array of arrays,
 * the outer array representing all the data and each inner array
 * representing a major dimension. Each item in the inner array
 * corresponds with one cell.
 * 
 * For output, empty trailing rows and columns will not be included.
 * 
 * For input, supported value types are: bool, string, and double.
 * Null values will be skipped.
 * To set a cell to an empty value, set the string value to an empty string.
 */
values?: any[][]
} 

declare interface sheets$DeveloperMetadataResource {

/**
 * Returns the developer metadata with the specified ID.
 * The caller must specify the spreadsheet ID and the developer metadata's
 * unique metadataId.
 */
get(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the developer metadata to retrieve.
 */
metadataId: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The ID of the spreadsheet to retrieve metadata from.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$DeveloperMetadata>,

/**
 * Returns all developer metadata matching the specified DataFilter.
 * If the provided DataFilter represents a DeveloperMetadataLookup object,
 * this will return all DeveloperMetadata entries selected by it. If the
 * DataFilter represents a location in a spreadsheet, this will return all
 * developer metadata associated with locations intersecting that region.
 */
search(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The ID of the spreadsheet to retrieve metadata from.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$SearchDeveloperMetadataResponse>
} 

declare interface sheets$SheetsResource {

/**
 * Copies a single sheet from a spreadsheet to another spreadsheet.
 * Returns the properties of the newly created sheet.
 */
copyTo(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The ID of the sheet to copy.
 */
sheetId: number,

/**
 * The ID of the spreadsheet containing the sheet to copy.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$SheetProperties>
} 

declare interface sheets$ValuesResource {

/**
 * Appends values to a spreadsheet. The input range is used to search for
 * existing data and find a "table" within that range. Values will be
 * appended to the next row of the table, starting with the first column of
 * the table. See the
 * [guide](/sheets/api/guides/values#appending_values)
 * and
 * [sample code](/sheets/api/samples/writing#append_values)
 * for specific details of how tables are detected and data is appended.
 * 
 * The caller must specify the spreadsheet ID, range, and
 * a valueInputOption.  The `valueInputOption` only
 * controls how the input data will be added to the sheet (column-wise or
 * row-wise), it does not influence what cell the data starts being written
 * to.
 */
append(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Determines if the update response should include the values
 * of the cells that were appended. By default, responses
 * do not include the updated values.
 */
includeValuesInResponse?: boolean,

/**
 * How the input data should be inserted.
 */
insertDataOption?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The A1 notation of a range to search for a logical table of data.
 * Values will be appended after the last row of the table.
 */
range: string,

/**
 * Determines how dates, times, and durations in the response should be
 * rendered. This is ignored if response_value_render_option is
 * FORMATTED_VALUE.
 * The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
 */
responseDateTimeRenderOption?: string,

/**
 * Determines how values in the response should be rendered.
 * The default render option is ValueRenderOption.FORMATTED_VALUE.
 */
responseValueRenderOption?: string,

/**
 * The ID of the spreadsheet to update.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string,

/**
 * How the input data should be interpreted.
 */
valueInputOption?: string
}): client$sheets$Request<sheets$AppendValuesResponse>,

/**
 * Clears one or more ranges of values from a spreadsheet.
 * The caller must specify the spreadsheet ID and one or more ranges.
 * Only values are cleared -- all other properties of the cell (such as
 * formatting, data validation, etc..) are kept.
 */
batchClear(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The ID of the spreadsheet to update.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$BatchClearValuesResponse>,

/**
 * Clears one or more ranges of values from a spreadsheet.
 * The caller must specify the spreadsheet ID and one or more
 * DataFilters. Ranges matching any of the specified data
 * filters will be cleared.  Only values are cleared -- all other properties
 * of the cell (such as formatting, data validation, etc..) are kept.
 */
batchClearByDataFilter(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The ID of the spreadsheet to update.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$BatchClearValuesByDataFilterResponse>,

/**
 * Returns one or more ranges of values from a spreadsheet.
 * The caller must specify the spreadsheet ID and one or more ranges.
 */
batchGet(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * How dates, times, and durations should be represented in the output.
 * This is ignored if value_render_option is
 * FORMATTED_VALUE.
 * The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
 */
dateTimeRenderOption?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The major dimension that results should use.
 * 
 * For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,
 * then requesting `range=A1:B2,majorDimension=ROWS` will return
 * `[[1,2],[3,4]]`,
 * whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return
 * `[[1,3],[2,4]]`.
 */
majorDimension?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The A1 notation of the values to retrieve.
 */
ranges?: string,

/**
 * The ID of the spreadsheet to retrieve data from.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string,

/**
 * How values should be represented in the output.
 * The default render option is ValueRenderOption.FORMATTED_VALUE.
 */
valueRenderOption?: string
}): client$sheets$Request<sheets$BatchGetValuesResponse>,

/**
 * Returns one or more ranges of values that match the specified data filters.
 * The caller must specify the spreadsheet ID and one or more
 * DataFilters.  Ranges that match any of the data filters in
 * the request will be returned.
 */
batchGetByDataFilter(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The ID of the spreadsheet to retrieve data from.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$BatchGetValuesByDataFilterResponse>,

/**
 * Sets values in one or more ranges of a spreadsheet.
 * The caller must specify the spreadsheet ID,
 * a valueInputOption, and one or more
 * ValueRanges.
 */
batchUpdate(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The ID of the spreadsheet to update.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$BatchUpdateValuesResponse>,

/**
 * Sets values in one or more ranges of a spreadsheet.
 * The caller must specify the spreadsheet ID,
 * a valueInputOption, and one or more
 * DataFilterValueRanges.
 */
batchUpdateByDataFilter(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The ID of the spreadsheet to update.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$BatchUpdateValuesByDataFilterResponse>,

/**
 * Clears values from a spreadsheet.
 * The caller must specify the spreadsheet ID and range.
 * Only values are cleared -- all other properties of the cell (such as
 * formatting, data validation, etc..) are kept.
 */
clear(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The A1 notation of the values to clear.
 */
range: string,

/**
 * The ID of the spreadsheet to update.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$ClearValuesResponse>,

/**
 * Returns a range of values from a spreadsheet.
 * The caller must specify the spreadsheet ID and a range.
 */
get(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * How dates, times, and durations should be represented in the output.
 * This is ignored if value_render_option is
 * FORMATTED_VALUE.
 * The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
 */
dateTimeRenderOption?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The major dimension that results should use.
 * 
 * For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,
 * then requesting `range=A1:B2,majorDimension=ROWS` will return
 * `[[1,2],[3,4]]`,
 * whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return
 * `[[1,3],[2,4]]`.
 */
majorDimension?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The A1 notation of the values to retrieve.
 */
range: string,

/**
 * The ID of the spreadsheet to retrieve data from.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string,

/**
 * How values should be represented in the output.
 * The default render option is ValueRenderOption.FORMATTED_VALUE.
 */
valueRenderOption?: string
}): client$sheets$Request<sheets$ValueRange>,

/**
 * Sets values in a range of a spreadsheet.
 * The caller must specify the spreadsheet ID, range, and
 * a valueInputOption.
 */
update(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Determines if the update response should include the values
 * of the cells that were updated. By default, responses
 * do not include the updated values.
 * If the range to write was larger than than the range actually written,
 * the response will include all values in the requested range (excluding
 * trailing empty rows and columns).
 */
includeValuesInResponse?: boolean,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The A1 notation of the values to update.
 */
range: string,

/**
 * Determines how dates, times, and durations in the response should be
 * rendered. This is ignored if response_value_render_option is
 * FORMATTED_VALUE.
 * The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
 */
responseDateTimeRenderOption?: string,

/**
 * Determines how values in the response should be rendered.
 * The default render option is ValueRenderOption.FORMATTED_VALUE.
 */
responseValueRenderOption?: string,

/**
 * The ID of the spreadsheet to update.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string,

/**
 * How the input data should be interpreted.
 */
valueInputOption?: string
}): client$sheets$Request<sheets$UpdateValuesResponse>
} 

declare interface sheets$SpreadsheetsResource {

/**
 * Applies one or more updates to the spreadsheet.
 * 
 * Each request is validated before
 * being applied. If any request is not valid then the entire request will
 * fail and nothing will be applied.
 * 
 * Some requests have replies to
 * give you some information about how
 * they are applied. The replies will mirror the requests.  For example,
 * if you applied 4 updates and the 3rd one had a reply, then the
 * response will have 2 empty replies, the actual reply, and another empty
 * reply, in that order.
 * 
 * Due to the collaborative nature of spreadsheets, it is not guaranteed that
 * the spreadsheet will reflect exactly your changes after this completes,
 * however it is guaranteed that the updates in the request will be
 * applied together atomically. Your changes may be altered with respect to
 * collaborator changes. If there are no collaborators, the spreadsheet
 * should reflect your changes.
 */
batchUpdate(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The spreadsheet to apply the updates to.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$BatchUpdateSpreadsheetResponse>,

/**
 * Creates a spreadsheet, returning the newly created spreadsheet.
 */
create(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$Spreadsheet>,

/**
 * Returns the spreadsheet at the given ID.
 * The caller must specify the spreadsheet ID.
 * 
 * By default, data within grids will not be returned.
 * You can include grid data one of two ways:
 * 
 * &#42; Specify a field mask listing your desired fields using the `fields` URL
 * parameter in HTTP
 * 
 * &#42; Set the includeGridData
 * URL parameter to true.  If a field mask is set, the `includeGridData`
 * parameter is ignored
 * 
 * For large spreadsheets, it is recommended to retrieve only the specific
 * fields of the spreadsheet that you want.
 * 
 * To retrieve only subsets of the spreadsheet, use the
 * ranges URL parameter.
 * Multiple ranges can be specified.  Limiting the range will
 * return only the portions of the spreadsheet that intersect the requested
 * ranges. Ranges are specified using A1 notation.
 */
get(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * True if grid data should be returned.
 * This parameter is ignored if a field mask was set in the request.
 */
includeGridData?: boolean,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The ranges to retrieve from the spreadsheet.
 */
ranges?: string,

/**
 * The spreadsheet to request.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$Spreadsheet>,

/**
 * Returns the spreadsheet at the given ID.
 * The caller must specify the spreadsheet ID.
 * 
 * This method differs from GetSpreadsheet in that it allows selecting
 * which subsets of spreadsheet data to return by specifying a
 * dataFilters parameter.
 * Multiple DataFilters can be specified.  Specifying one or
 * more data filters will return the portions of the spreadsheet that
 * intersect ranges matched by any of the filters.
 * 
 * By default, data within grids will not be returned.
 * You can include grid data one of two ways:
 * 
 * &#42; Specify a field mask listing your desired fields using the `fields` URL
 * parameter in HTTP
 * 
 * &#42; Set the includeGridData
 * parameter to true.  If a field mask is set, the `includeGridData`
 * parameter is ignored
 * 
 * For large spreadsheets, it is recommended to retrieve only the specific
 * fields of the spreadsheet that you want.
 */
getByDataFilter(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * The spreadsheet to request.
 */
spreadsheetId: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): client$sheets$Request<sheets$Spreadsheet>,
developerMetadata: sheets$DeveloperMetadataResource,
sheets: sheets$SheetsResource,
values: sheets$ValuesResource
} 
    }
