declare module "google.visualization" {
  declare var npm$namespace$google: {
    load: typeof google$load,
    setOnLoadCallback: typeof google$setOnLoadCallback
  };
  declare function google$load(
    visualization: string,
    version: string,
    packages: any
  ): void;

  declare function google$setOnLoadCallback(handler: Function): void;

  declare function google$setOnLoadCallback(handler: () => void): void;

  declare var npm$namespace$charts: {
    load: typeof charts$load,
    setOnLoadCallback: typeof charts$setOnLoadCallback
  };
  declare function charts$load(version: string, packages: Object): void;

  declare function charts$setOnLoadCallback(handler: Function): void;

  declare var npm$namespace$visualization: {
    arrayToDataTable: typeof visualization$arrayToDataTable
  };
  declare export interface visualization$ChartSpecs {
    chartType: string;
    container?: HTMLElement;
    containerId?: string;
    options?: Object;
    dataTable?: Object;
    dataSourceUrl?: string;
    query?: string;
    refreshInterval?: number;
    view?: any;
  }

  declare export interface visualization$ErrorEventObject {
    id: string;
    message: string;
    detailedMessage?: string;
    options?: any;
  }

  declare export class visualization$ChartWrapper {
    constructor(spec?: visualization$ChartSpecs): this;
    draw(container_ref?: HTMLElement): void;
    toJSON(): string;
    clone(): visualization$ChartWrapper;
    getDataSourceUrl(): string;
    getDataTable(): visualization$DataTable;
    getChartType(): string;
    getChartName(): string;
    getChart(): any;
    getContainerId(): string;
    getQuery(): string;
    getRefreshInterval(): number;
    getOption(key: string, default_val?: string): any;
    getOptions(): Object;
    getView(): any;
    setDataSourceUrl(url: string): void;
    setDataTable(table: visualization$DataTable): void;
    setChartType(type: string): void;
    setChartName(name: string): void;
    setContainerId(id: string): void;
    setQuery(query: string): void;
    setRefreshInterval(interval: number): void;
    setOption(key: string, value: any): void;
    setOptions(options: Object): void;
    setView(view_spec: string): void;
  }

  declare export class visualization$DataTable {
    constructor(data?: any, version?: any): this;
    addColumn(type: string, label?: string, id?: string): number;
    addColumn(
      descriptionObject: visualization$DataTableColumnDescription
    ): number;
    addRow(cellObject: visualization$DataObjectCell): number;
    addRow(cellArray?: any[]): number;
    addRows(numberOfEmptyRows: number): number;
    addRows(rows: visualization$DataObjectCell[][]): number;
    addRows(rows: any[][]): number;
    clone(): visualization$DataTable;
    getColumnId(columnIndex: number): string;
    getColumnLabel(columnIndex: number): string;
    getColumnPattern(columnIndex: number): string;
    getColumnProperties(columnIndex: number): visualization$Properties;
    getColumnProperty(columnIndex: number, name: string): any;
    getColumnRange(
      columnIndex: number
    ): {
      min: any,
      max: any
    };
    getColumnRole(columnIndex: number): string;
    getColumnType(columnIndex: number): string;
    getDistinctValues(columnIndex: number): any[];
    getFilteredRows(filters: visualization$DataTableCellFilter[]): number[];
    getFormattedValue(rowIndex: number, columnIndex: number): string;
    getNumberOfColumns(): number;
    getNumberOfRows(): number;
    getProperty(rowIndex: number, columnIndex: number, name: string): any;
    getProperties(
      rowIndex: number,
      columnIndex: number
    ): visualization$Properties;
    getRowProperties(rowIndex: number): visualization$Properties;
    getRowProperty(rowIndex: number, name: string): visualization$Properties;
    getSortedRows(sortColumn: number): number[];
    getSortedRows(sortColumn: visualization$SortByColumn): number[];
    getSortedRows(sortColumns: number[]): number[];
    getSortedRows(sortColumns: visualization$SortByColumn[]): number[];
    getTableProperties(): visualization$Properties;
    getTableProperty(name: string): any;
    getValue(rowIndex: number, columnIndex: number): any;
    insertColumn(
      columnIndex: number,
      type: string,
      label?: string,
      id?: string
    ): void;
    insertRows(rowIndex: number, numberOfEmptyRows: number): void;
    insertRows(rowIndex: number, rows: visualization$DataObjectCell[][]): void;
    insertRows(rowIndex: number, rows: any[][]): void;
    removeColumn(columnIndex: number): void;
    removeColumns(columnIndex: number, numberOfColumns: number): void;
    removeRow(rowIndex: number): void;
    removeRows(rowIndex: number, numberOfRows: number): void;
    setCell(
      rowIndex: number,
      columnIndex: number,
      value?: any,
      formattedValue?: string,
      properties?: visualization$Properties
    ): void;
    setColumnLabel(columnIndex: number, label: string): void;
    setColumnProperty(columnIndex: number, name: string, value: any): void;
    setColumnProperties(
      columnIndex: number,
      properties: visualization$Properties
    ): void;
    setFormattedValue(
      rowIndex: number,
      columnIndex: number,
      formattedValue: string | null
    ): void;
    setProperty(
      rowIndex: number,
      columnIndex: number,
      name: string,
      value: any
    ): void;
    setProperties(
      rowIndex: number,
      columnIndex: number,
      properties: visualization$Properties
    ): void;
    setRowProperty(rowIndex: number, name: string, value: any): void;
    setRowProperties(
      rowIndex: number,
      properties: visualization$Properties
    ): void;
    setTableProperty(name: string, value: any): void;
    setTableProperties(properties: visualization$Properties): void;
    setValue(rowIndex: number, columnIndex: number, value: any): void;
    sort(sortColumn: number): number[];
    sort(sortColumn: visualization$SortByColumn): number[];
    sort(sortColumns: number[]): number[];
    sort(sortColumns: visualization$SortByColumn[]): number[];
    toJSON(): string;
  }

  declare export interface visualization$Properties {
    [property: string]: any;
  }

  declare export interface visualization$SortByColumn {
    column: number;
    desc: boolean;
  }

  declare export interface visualization$DataTableColumnDescription {
    type?: string;
    label?: string;
    id?: string;
    role?: string;
    pattern?: string;
    p?: any;
  }

  declare export interface visualization$DataObject {
    cols: visualization$DataObjectColumn[];
    rows: visualization$DataObjectRow[];
    p: any;
  }

  declare export interface visualization$DataObjectColumn {
    type: string;
    id?: string;
    label?: string;
    pattern?: string;
    p?: any;
  }

  declare export interface visualization$DataObjectRow {
    c: visualization$DataObjectCell[];
    p?: any;
  }

  declare export interface visualization$DataTableCellFilter {
    column: number;
    value?: any;
    minValue?: any;
    maxValue?: any;
  }

  declare export interface visualization$DataObjectCell {
    v?: any;
    f?: string;
    p?: any;
  }

  declare export type visualization$DataTableCellValueFilter = {
    value: any
  } & visualization$DataTableCellFilter;

  declare export type visualization$DataTableCellRangeFilter = {
    minValue?: any,
    maxValue?: any
  } & visualization$DataTableCellFilter;

  declare function visualization$arrayToDataTable(
    data: any[],
    firstRowIsData?: boolean
  ): visualization$DataTable;

  declare export class visualization$Query {
    constructor(
      dataSourceUrl: string,
      options?: visualization$QueryOptions
    ): this;
    abort(): void;
    setRefreshInterval(intervalSeconds: number): void;
    setTimeout(timeoutSeconds: number): void;
    setQuery(queryString: string): void;
    send(callback: (response: visualization$QueryResponse) => void): void;
  }

  declare export interface visualization$QueryOptions {
    sendMethod?: string;
    makeRequestParams?: Object;
  }

  declare export class visualization$QueryResponse {
    constructor(responseObject: Object): this;
    getDataTable(): visualization$DataTable;
    getDetailedMessage(): string;
    getMessage(): string;
    getReasons(): string[];
    hasWarning(): boolean;
    isError(): boolean;
  }

  declare export class visualization$DataView {
    constructor(data: visualization$DataTable): this;
    constructor(data: visualization$DataView): this;
    getColumnId(columnIndex: number): String;
    getColumnLabel(columnIndex: number): string;
    getColumnPattern(columnIndex: number): string;
    getColumnProperty(columnIndex: number, name: string): any;
    getColumnRange(
      columnIndex: number
    ): {
      min: any,
      max: any
    };
    getColumnType(columnIndex: number): string;
    getDistinctValues(columnIndex: number): any[];
    getFilteredRows(filters: visualization$DataTableCellFilter[]): number[];
    getFormattedValue(rowIndex: number, columnIndex: number): string;
    getNumberOfColumns(): number;
    getNumberOfRows(): number;
    getProperty(rowIndex: number, columnIndex: number, name: string): any;
    getProperties(
      rowIndex: number,
      columnIndex: number
    ): visualization$Properties;
    getRowProperty(rowIndex: number, name: string): visualization$Properties;
    getSortedRows(sortColumn: number): number[];
    getSortedRows(sortColumn: visualization$SortByColumn): number[];
    getSortedRows(sortColumns: number[]): number[];
    getSortedRows(sortColumns: visualization$SortByColumn[]): number[];
    getTableProperty(name: string): any;
    getValue(rowIndex: number, columnIndex: number): any;
    getTableColumnIndex(viewColumnIndex: number): number;
    getTableRowIndex(viewRowIndex: number): number;
    getViewColumnIndex(tableColumnIndex: number): number;
    getViewColumns(): number[];
    getViewRowIndex(tableRowIndex: number): number;
    getViewRows(): number[];
    hideColumns(columnIndexes: number[]): void;
    hideRows(min: number, max: number): void;
    hideRows(rowIndexes: number[]): void;
    setColumns(columnIndexes: number[]): void;
    setColumns(columnIndexes: visualization$ColumnSpec[]): void;
    setColumns(columnIndexes: any[]): void;
    setRows(min: number, max: number): void;
    setRows(rowIndexes: number[]): void;
    toDataTable(): visualization$DataTable;
    toJSON(): string;
  }

  declare export interface visualization$ColumnSpec {
    calc: (dataTable: visualization$DataTable, row: number) => any;
    type: string;
    label?: string;
    id?: string;
    sourceColumn?: number;
    properties?: visualization$Properties;
    role?: string;
  }

  declare export class visualization$GeoChart mixins visualization$ChartBase {
    draw(
      data: visualization$DataTable,
      options: visualization$GeoChartOptions
    ): void;
  }

  declare export interface visualization$GeoChartOptions {
    backgroundColor?: any;
    colorAxis?: visualization$ChartColorAxis;
    datalessRegionColor?: string;
    defaultColor?: string;
    displayMode?: string;
    enableRegionInteractivity?: boolean;
    height?: number;
    keepAspectRatio?: boolean;
    legend?: visualization$ChartLegend | "none";
    region?: string;
    magnifyingGlass?: visualization$GeoChartMagnifyingGlass;
    markerOpacity?: number;
    resolution?: string;
    sizeAxis?: visualization$ChartSizeAxis;
    tooltip?: visualization$ChartTooltip;
    width?: number;
  }

  declare export interface visualization$GeoChartMagnifyingGlass {
    enable?: boolean;
    zoomFactor?: number;
  }

  declare export interface visualization$GeoChartRegionClickEvent {
    region: string;
  }

  declare export interface visualization$GeoChartSelection {
    row: number;
  }

  declare export interface visualization$ChartAnnotations {
    boxStyle?: visualization$ChartBoxStyle;
    textStyle?: visualization$ChartTextStyle;
    datum?: visualization$ChartStemAndStyle;
    domain?: visualization$ChartStemAndStyle;
    highContrast?: boolean;
    stem?: visualization$ChartStem;
    style?: string;
  }

  declare export type visualization$ChartBarColumnAnnotations = {
    alwaysOutside?: boolean
  } & visualization$ChartAnnotations;

  declare export interface visualization$ChartStemAndStyle {
    stem?: visualization$ChartStem;
    style?: string;
  }

  declare export interface visualization$ChartStem {
    color?: string;
    length?: number;
  }

  declare export interface visualization$ChartBoxStyle {
    stroke?: string;
    strokeWidth?: number;
    rx?: number;
    ry?: number;
    gradient?: {
      color1: string,
      color2: string,
      x1: string,
      y1: string,
      x2: string,
      y2: string,
      useObjectBoundingBoxUnits?: boolean
    };
  }

  declare export interface visualization$ChartTextStyle {
    fontName?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    color?: string;
    auraColor?: string;
    opacity?: number;
  }

  declare export interface visualization$ChartCrosshair {
    color?: string;
    focused?: {
      color?: string,
      opacity?: number
    };
    opacity?: number;
    orientation?: string;
    selected?: {
      color?: string,
      opacity?: number
    };
    events$trigger?: string;
  }

  declare export interface visualization$ChartExplorer {
    actions?: string[];
    axis?: string;
    keepInBounds?: boolean;
    maxZoomIn?: number;
    maxZoomOut?: number;
    zoomDelta?: number;
  }

  declare export interface visualization$ChartStroke {
    stroke: string;
    strokeWidth: number;
    fill: string;
  }

  declare export interface visualization$ChartArea {
    backgroundColor?:
      | string
      | {
          stroke: string,
          strokeWidth?: number
        };
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    width?: number | string;
    height?: number | string;
  }

  declare export type visualization$ChartLegendPosition =
    | "bottom"
    | "left"
    | "in"
    | "none"
    | "right"
    | "top";

  declare export type visualization$ChartLegendAlignment =
    | "start"
    | "center"
    | "end";

  declare export interface visualization$ChartLegend {
    alignment?: visualization$ChartLegendAlignment;
    maxLines?: number;
    position?: visualization$ChartLegendPosition;
    textStyle?: visualization$ChartTextStyle;
    numberFormat?: string;
  }

  declare export interface visualization$TransitionAnimation {
    duration?: number;
    easing?: string;
    startup?: boolean;
  }

  declare export interface visualization$ChartAxis {
    baseline?: number;
    baselineColor?: string;
    direction?: number;
    format?: string;
    gridlines?: visualization$ChartGridlines;
    minorGridlines?: visualization$ChartGridlines;
    logScale?: boolean;
    textPosition?: string;
    textStyle?: visualization$ChartTextStyle;
    ticks?: any[];
    title?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    allowContainerBoundaryTextCufoff?: boolean;
    slantedText?: boolean;
    slantedTextAngle?: number;
    maxAlternation?: number;
    maxTextLines?: number;
    minTextSpacing?: number;
    showTextEvery?: number;
    maxValue?: number | Date | number[];
    minValue?: number | Date | number[];
    viewWindowMode?: string;
    viewWindow?: visualization$ChartViewWindow;
  }

  declare export interface visualization$ChartGridlines {
    color?: string;
    count?: number;
  }

  declare export interface visualization$ChartViewWindow {
    max?: number | Date | number[];
    min?: number | Date | number[];
  }

  declare export interface visualization$ChartTooltip {
    isHtml?: boolean;
    showColorCode?: boolean;
    textStyle?: visualization$ChartTextStyle;
    events$trigger?: string;
    ignoreBounds?: boolean;
  }

  declare export interface visualization$ChartBoundingBox {
    left: number;
    top: number;
    width: number;
    height: number;
  }

  declare export interface visualization$ChartColorAxis {
    minValue?: number;
    maxValue?: number;
    values?: number[];
    colors?: string[];
    legend?: visualization$ChartLegend;
  }

  declare export interface visualization$ChartLayoutInterface {
    getBoundingBox(id: string): visualization$ChartBoundingBox;
    getChartAreaBoundingBox(): visualization$ChartBoundingBox;
    getHAxisValue(position: number, axisIndex?: number): number;
    getVAxisValue(position: number, axisIndex?: number): number;
    getXLocation(position: number, axisIndex?: number): number;
    getYLocation(position: number, axisIndex?: number): number;
  }

  declare export interface visualization$GroupWidth {
    groupWidth: any;
  }

  declare export interface visualization$VisualizationSelectionArray {
    column?: number;
    row?: number;
  }

  declare export interface visualization$Candlestick {
    hollowIsRising?: boolean;
    fallingColor?: visualization$ChartStroke;
    risingColor?: visualization$ChartStroke;
  }

  declare class visualization$ChartBase {
    constructor(element: Element): this;
    getSelection(): visualization$VisualizationSelectionArray[];
    setSelection(selection: visualization$VisualizationSelectionArray[]): void;
    clearChart(): void;
    getImageURI(): string;
  }

  declare class visualization$CoreChartBase mixins visualization$ChartBase {
    getBoundingBox(id: string): visualization$ChartBoundingBox;
    getChartAreaBoundingBox(): visualization$ChartBoundingBox;
    getChartLayoutInterface(): visualization$ChartLayoutInterface;
    getHAxisValue(position: number, axisIndex?: number): number;
    getVAxisValue(position: number, axisIndex?: number): number;
    getXLocation(position: number, axisIndex?: number): number;
    getYLocation(position: number, axisIndex?: number): number;
  }

  declare export class visualization$ScatterChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options?: visualization$ScatterChartOptions
    ): void;
  }

  declare export interface visualization$ScatterChartOptions {
    aggregationTarget?: string;
    animation?: visualization$TransitionAnimation;
    annotations?: visualization$ChartAnnotations;
    axisTitlesPosition?: string;
    backgroundColor?: any;
    chartArea?: visualization$ChartArea;
    colors?: string[];
    crosshair?: visualization$ChartCrosshair;
    curveType?: string;
    dataOpacity?: number;
    enableInteractivity?: boolean;
    explorer?: visualization$ChartExplorer;
    fontSize?: number;
    fontName?: string;
    forceIFrame?: boolean;
    hAxis?: visualization$ChartAxis;
    height?: number;
    legend?: visualization$ChartLegend | "none";
    lineWidth?: number;
    pointSize?: number;
    selectionMode?: string;
    series?: any;
    theme?: string;
    title?: string;
    titlePosition?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    tooltip?: visualization$ChartTooltip;
    vAxis?: visualization$ChartAxis;
    width?: number;
  }

  declare export class visualization$ColumnChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options: visualization$ColumnChartOptions
    ): void;
  }

  declare export interface visualization$ColumnChartOptions {
    aggregationTarget?: string;
    animation?: visualization$TransitionAnimation;
    annotations?: visualization$ChartBarColumnAnnotations;
    axisTitlesPosition?: string;
    backgroundColor?: any;
    bar?: visualization$GroupWidth;
    chartArea?: visualization$ChartArea;
    colors?: string[];
    enableInteractivity?: boolean;
    explorer?: visualization$ChartExplorer;
    focusTarget?: string;
    fontSize?: number;
    fontName?: string;
    hAxis?: visualization$ChartAxis;
    height?: number;
    isStacked?: boolean | "percent" | "relative" | "absolute";
    legend?: visualization$ChartLegend | "none";
    reverseCategories?: boolean;
    selectionMode?: string;
    series?: any;
    theme?: string;
    title?: string;
    titlePosition?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    tooltip?: visualization$ChartTooltip;
    vAxes?: any;
    vAxis?: visualization$ChartAxis;
    width?: number;
  }

  declare export class visualization$LineChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options: visualization$LineChartOptions
    ): void;
  }

  declare export interface visualization$LineChartOptions {
    aggregationTarget?: string;
    animation?: visualization$TransitionAnimation;
    annotations?: visualization$ChartAnnotations;
    axisTitlesPosition?: string;
    backgroundColor?: any;
    chartArea?: visualization$ChartArea;
    colors?: string[];
    crosshair?: visualization$ChartCrosshair;
    curveType?: string;
    dataOpacity?: number;
    enableInteractivity?: boolean;
    explorer?: visualization$ChartExplorer;
    focusTarget?: string;
    fontSize?: number;
    fontName?: string;
    hAxis?: visualization$ChartAxis;
    height?: number;
    interpolateNulls?: boolean;
    legend?: visualization$ChartLegend | "none";
    lineWidth?: number;
    min?: number;
    orientation?: string;
    pointSize?: number;
    reverseCategories?: boolean;
    selectionMode?: string;
    series?: any;
    theme?: string;
    title?: string;
    titlePosition?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    tooltip?: visualization$ChartTooltip;
    vAxes?: any;
    vAxis?: visualization$ChartAxis;
    width?: number;
  }

  declare export interface visualization$BarChartOptions {
    aggregationTarget?: string;
    animation?: visualization$TransitionAnimation;
    annotations?: visualization$ChartBarColumnAnnotations;
    axisTitlesPosition?: string;
    backgroundColor?: any;
    bar?: visualization$GroupWidth;
    chartArea?: visualization$ChartArea;
    colors?: string[];
    dataOpacity?: number;
    enableInteractivity?: boolean;
    focusTarget?: string;
    fontSize?: number;
    fontName?: string;
    hAxes?: any;
    hAxis?: visualization$ChartAxis;
    height?: number;
    isStacked?: boolean | "percent" | "relative" | "absolute";
    legend?: visualization$ChartLegend | "none";
    reverseCategories?: boolean;
    series?: any;
    theme?: string;
    title?: string;
    titlePosition?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    tooltip?: visualization$ChartTooltip;
    vAxes?: any;
    vAxis?: visualization$ChartAxis;
    width?: number;
  }

  declare export class visualization$BarChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options: visualization$BarChartOptions
    ): void;
  }

  declare export class visualization$Histogram
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options: visualization$HistogramOptions
    ): void;
  }

  declare export interface visualization$HistogramOptions {
    animation?: visualization$TransitionAnimation;
    axisTitlesPosition?: string;
    backgroundColor?: any;
    bar?: visualization$GroupWidth;
    chartArea?: visualization$ChartArea;
    colors?: string[];
    dataOpacity?: number;
    enableInteractivity?: boolean;
    focusTarget?: string;
    fontSize?: number;
    fontName?: string;
    hAxis?: visualization$ChartAxis;
    histogram?: visualization$HistogramHistogramOptions;
    height?: number;
    interpolateNulls?: boolean;
    isStacked?: boolean | "percent" | "relative" | "absolute";
    legend?: visualization$ChartLegend | "none";
    orientation?: string;
    reverseCategories?: boolean;
    series?: any;
    theme?: string;
    title?: string;
    titlePosition?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    tooltip?: visualization$ChartTooltip;
    vAxes?: any;
    vAxis?: visualization$ChartAxis;
    width?: number;
  }

  declare export interface visualization$HistogramHistogramOptions {
    bucketSize?: number;
    hideBucketItems?: boolean;
    lastBucketPercentile?: number;
  }

  declare export class visualization$AreaChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options: visualization$AreaChartOptions
    ): void;
  }

  declare export interface visualization$AreaChartOptions {
    aggregationTarget?: string;
    animation?: visualization$TransitionAnimation;
    annotations?: visualization$ChartAnnotations;
    areaOpacity?: number;
    axisTitlesPosition?: string;
    backgroundColor?: any;
    chartArea?: visualization$ChartArea;
    colors?: string[];
    crosshair?: visualization$ChartCrosshair;
    dataOpacity?: number;
    enableInteractivity?: boolean;
    explorer?: visualization$ChartExplorer;
    focusTarget?: string;
    fontSize?: number;
    fontName?: string;
    hAxis?: visualization$ChartAxis;
    height?: number;
    interpolateNulls?: boolean;
    isStacked?: boolean | "percent" | "relative" | "absolute";
    legend?: visualization$ChartLegend | "none";
    lineWidth?: number;
    orientation?: string;
    pointSize?: number;
    reverseCategories?: boolean;
    selectionMode?: string;
    series?: any;
    theme?: string;
    title?: string;
    titlePosition?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    tooltip?: visualization$ChartTooltip;
    vAxes?: any;
    vAxis?: visualization$ChartAxis;
    width?: number;
  }

  declare export class visualization$AnnotationChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options: visualization$AnnotationChartOptions
    ): void;
    setVisibleChartRange(start: Date, end: Date): void;
    getVisibleChartRange(): {
      start: Date,
      end: Date
    };
    hideDataColumns(columnIndexes: number | number[]): void;
    showDataColumns(columnIndexes: number | number[]): void;
  }

  declare export interface visualization$AnnotationChartOptions {
    allowHtml?: boolean;
    allValuesSuffix?: string;
    annotationsWidth?: number;
    colors?: string[];
    dateFormat?: string;
    displayAnnotations?: boolean;
    displayAnnotationsFilter?: boolean;
    displayDateBarSeparator?: boolean;
    displayExactValues?: boolean;
    displayLegendDots?: boolean;
    displayLegendValues?: boolean;
    displayRangeSelector?: boolean;
    displayZoomButtons?: boolean;
    fill?: number;
    legendPosition?: "sameRow" | "newRow";
    max?: number;
    min?: number;
    numberFormats?: any;
    scaleColumns?: number[];
    scaleFormat?: string;
    scaleType?: string;
    thickness?: number;
    zoomEndTime?: Date;
    zoomStartTime?: Date;
  }

  declare export class visualization$SteppedAreaChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options: visualization$SteppedAreaChartOptions
    ): void;
  }

  declare export interface visualization$SteppedAreaChartOptions {
    aggregationTarget?: string;
    animation?: visualization$TransitionAnimation;
    areaOpacity?: number;
    axisTitlesPosition?: string;
    backgroundColor?: any;
    chartArea?: visualization$ChartArea;
    colors?: string[];
    connectSteps?: boolean;
    enableInteractivity?: boolean;
    focusTarget?: string;
    fontSize?: number;
    fontName?: string;
    hAxis?: visualization$ChartAxis;
    height?: number;
    interpolateNulls?: boolean;
    isStacked?: boolean | "percent" | "relative" | "absolute";
    legend?: visualization$ChartLegend | "none";
    reverseCategories?: boolean;
    selectionMode?: string;
    series?: any;
    theme?: string;
    title?: string;
    titlePosition?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    tooltip?: visualization$ChartTooltip;
    vAxes?: any;
    vAxis?: visualization$ChartAxis;
    width?: number;
  }

  declare export class visualization$PieChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options: visualization$PieChartOptions
    ): void;
  }

  declare export interface visualization$PieChartOptions {
    backgroundColor?: any;
    chartArea?: visualization$ChartArea;
    colors?: string[];
    enableInteractivity?: boolean;
    fontSize?: number;
    fontName?: string;
    height?: number;
    is3D?: boolean;
    legend?: visualization$ChartLegend | "none";
    pieHole?: number;
    pieSliceBorderColor?: string;
    pieSliceText?: string;
    pieSliceTextStyle?: visualization$ChartTextStyle;
    pieStartAngle?: number;
    reverseCategories?: boolean;
    pieResidueSliceColor?: string;
    pieResidueSliceLabel?: string;
    slices?: any;
    sliceVisibilityThreshold?: number;
    title?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    tooltip?: visualization$ChartTooltip;
    width?: number;
  }

  declare export class visualization$BubbleChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options?: visualization$BubbleChartOptions
    ): void;
  }

  declare export interface visualization$BubbleChartOptions {
    animation?: visualization$TransitionAnimation;
    axisTitlesPosition?: string;
    backgroundColor?: any;
    bubble?: visualization$ChartBubble;
    chartArea?: visualization$ChartArea;
    colors?: string[];
    colorAxis?: visualization$ChartColorAxis;
    enableInteractivity?: boolean;
    explorer?: visualization$ChartExplorer;
    fontSize?: number;
    fontName?: string;
    forceIFrame?: boolean;
    hAxis?: visualization$ChartAxis;
    height?: number;
    legend?: visualization$ChartLegend | "none";
    selectionMode?: string;
    series?: any;
    sizeAxis?: visualization$ChartSizeAxis;
    sortBubblesBySize?: boolean;
    theme?: string;
    title?: string;
    titlePosition?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    tooltip?: visualization$ChartTooltip;
    vAxis?: visualization$ChartAxis;
    width?: number;
  }

  declare export interface visualization$ChartBubble {
    opacity?: number;
    stroke?: string;
    textStyle?: visualization$ChartTextStyle;
  }

  declare export interface visualization$ChartSizeAxis {
    maxSize?: number;
    maxValue?: number;
    minSize?: number;
    minValue?: number;
  }

  declare export class visualization$TreeMap mixins visualization$ChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options?: visualization$TreeMapOptions
    ): void;
    goUpAndDraw(): void;
    getMaxPossibleDepth(): number;
  }

  declare export interface visualization$TreeMapOptions {
    fontColor?: string;
    fontFamily?: string;
    fontSize?: number;
    forceIFrame?: boolean;
    headerColor?: string;
    headerHeight?: number;
    headerHighlightColor?: string;
    hintOpacity?: number;
    maxColor?: string;
    maxDepth?: number;
    maxHighlightColor?: string;
    maxPostDepth?: number;
    maxColorValue?: number;
    midColor?: string;
    midHighlightColor?: string;
    minColor?: string;
    minHighlightColor?: string;
    minColorValue?: number;
    showScale?: boolean;
    showTooltips?: boolean;
    textStyle?: visualization$ChartTextStyle;
    title?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    useWeightedAverageForAggregation?: boolean;
  }

  declare export class visualization$Table mixins visualization$ChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options?: visualization$TableOptions
    ): void;
  }

  declare export interface visualization$TableOptions {
    allowHtml?: boolean;
    alternatingRowStyle?: boolean;
    cssClassNames?: visualization$CssClassNames;
    firstRowNumber?: number;
    height?: string;
    page?: string;
    pageSize?: number;
    rtlTable?: boolean;
    scrollLeftStartPosition?: number;
    showRowNumber?: boolean;
    sort?: string;
    sortAscending?: boolean;
    sortColumn?: number;
    startPage?: number;
    width?: string;
  }

  declare export interface visualization$CssClassNames {
    headerRow?: string;
    tableRow?: string;
    oddTableRow?: string;
    selectedTableRow?: string;
    hoverTableRow?: string;
    headerCell?: string;
    tableCell?: string;
    rowNumberCell?: string;
  }

  declare export class visualization$Timeline {
    constructor(element: Element): this;
    draw(
      data: visualization$DataTable | visualization$DataView,
      options?: visualization$TimelineOptions
    ): void;
    clearChart(): void;
  }

  declare export interface visualization$TimelineOptions {
    avoidOverlappingGridLines?: boolean;
    backgroundColor?: any;
    colors?: string[];
    enableInteractivity?: boolean;
    forceIFrame?: boolean;
    height?: number;
    timeline?: {
      barLabelStyle?: visualization$LabelStyle,
      colorByRowLabel?: boolean,
      groupByRowLabel?: boolean,
      rowLabelStyle?: visualization$LabelStyle,
      showRowLabels?: boolean,
      singleColor?: string
    };
    width?: number;
  }

  declare export interface visualization$LabelStyle {
    color: string;
    fontName: string;
    fontSize: string;
  }

  declare export class visualization$CandlestickChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options: visualization$CandlestickChartOptions
    ): void;
  }

  declare export interface visualization$CandlestickChartOptions {
    aggregationTarget?: string;
    animation?: visualization$TransitionAnimation;
    axisTitlesPosition?: string;
    backgroundColor?: any;
    bar?: visualization$GroupWidth;
    candlestick?: visualization$Candlestick;
    chartArea?: visualization$ChartArea;
    colors?: string[];
    enableInteractivity?: boolean;
    focusTarget?: string;
    fontSize?: number;
    fontName?: string;
    hAxis?: visualization$ChartAxis;
    height?: number;
    legend?: visualization$ChartLegend | "none";
    orientation?: string;
    reverseCategories?: boolean;
    selectionMode?: string;
    series?: any;
    theme?: string;
    title?: string;
    titlePosition?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    tooltip?: visualization$ChartTooltip;
    vAxes?: any;
    vAxis?: visualization$ChartAxis;
    width?: number;
  }

  declare export class visualization$ComboChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options: visualization$ComboChartOptions
    ): void;
  }

  declare export interface visualization$ComboChartOptions {
    aggregationTarget?: string;
    animation?: visualization$TransitionAnimation;
    annotations?: visualization$ChartAnnotations;
    areaOpacity?: number;
    axisTitlesPosition?: string;
    backgroundColor?: any;
    bar?: visualization$GroupWidth;
    candlestick?: visualization$Candlestick;
    chartArea?: visualization$ChartArea;
    colors?: string[];
    crosshair?: visualization$ChartCrosshair;
    curveType?: string;
    dataOpacity?: number;
    enableInteractivity?: boolean;
    focusTarget?: string;
    fontSize?: number;
    fontName?: string;
    forceIFrame?: boolean;
    hAxis?: visualization$ChartAxis;
    height?: number;
    interpolateNulls?: boolean;
    isStacked?: boolean;
    legend?: visualization$ChartLegend | "none";
    lineDashStyle?: number[];
    lineWidth?: number;
    orientation?: string;
    pointShape?: string;
    pointSize?: number;
    pointsVisible?: boolean;
    reverseCategories?: boolean;
    selectionMode?: string;
    series?: any;
    seriesType?: string;
    theme?: string;
    title?: string;
    titlePosition?: string;
    titleTextStyle?: visualization$ChartTextStyle;
    tooltip?: visualization$ChartTooltip;
    vAxes?: any;
    vAxis?: visualization$ChartAxis;
    width?: number;
  }

  declare var npm$namespace$events: {
    addListener: typeof events$addListener,
    addOneTimeListener: typeof events$addOneTimeListener,
    removeListener: typeof events$removeListener,
    removeAllListeners: typeof events$removeAllListeners,
    trigger: typeof events$trigger
  };
  declare function events$addListener(
    visualization: any,
    eventName: string,
    callback: Function
  ): any;

  declare function events$addListener(
    visualization: any,
    eventName: string,
    callback: (...args: any[]) => void
  ): any;

  declare function events$addOneTimeListener(
    visualization: any,
    eventName: string,
    callback: Function
  ): any;

  declare function events$addOneTimeListener(
    visualization: any,
    eventName: string,
    callback: (...args: any[]) => void
  ): any;

  declare function events$removeListener(listener: any): void;

  declare function events$removeAllListeners(visualization: any): void;

  declare function events$trigger(
    visualization: any,
    eventName: string,
    args?: any
  ): void;

  declare class visualization$DefaultFormatter {
    /**
     * Reformats the data in the specified column.
     * @param data - A DataTable containing the data to reformat. You cannot use a DataView here.
     * @param columnIndex - The zero-based index of the column to format. To format multiple columns, you must call this method multiple times, with different colIndex values.
     */
    format(data: visualization$DataTable, columnIndex: number): void;
  }

  declare export interface visualization$ArrowFormatOptions {
    /**
     * A number indicating the base value, used to compare against the cell value. If the cell value is higher, the cell will include a green up arrow; if the cell value is lower, it will include a red down arrow; if the same, no arrow.
     */
    base?: number;
  }

  /**
   * Adds an up or down arrow, indicating whether the cell value is above or below a specified value.
   */
  declare export class visualization$ArrowFormat
    mixins visualization$DefaultFormatter {
    constructor(options?: visualization$ArrowFormatOptions): this;
  }

  declare export interface visualization$BarFormatOptions {
    /**
     * A number that is the base value to compare the cell value against. If the cell value is higher, it will be drawn to the right of the base; if lower, it will be drawn to the left. Default value is 0.
     */
    base?: number;

    /**
     * A string indicating the negative value section of bars. Possible values are 'red', 'green' and 'blue'; default value is 'red'.
     */
    colorNegative?: string;

    /**
     * A string indicating the color of the positive value section of bars. Possible values are 'red', 'green' and 'blue'. Default is 'blue'.
     */
    colorPositive?: string;

    /**
     * A boolean indicating if to draw a 1 pixel dark base line when negative values are present. The dark line is there to enhance visual scanning of the bars. Default value is 'false'.
     */
    drawZeroLine?: boolean;

    /**
     * The maximum number value for the bar range. Default value is the highest value in the table.
     */
    max?: number;

    /**
     * The minimum number value for the bar range. Default value is the lowest value in the table.
     */
    min?: number;

    /**
     * If true, shows values and bars; if false, shows only bars. Default value is true.
     */
    showValue?: boolean;

    /**
     * Thickness of each bar, in pixels. Default value is 100.
     */
    width?: number;
  }

  /**
   * Adds a colored bar, the direction and color of which indicates whether the cell value is above or below a specified value.
   */
  declare export class visualization$BarFormat
    mixins visualization$DefaultFormatter {
    constructor(options?: visualization$BarFormatOptions): this;
  }

  /**
   * Colors a cell according to whether the values fall within a specified range.
   */
  declare export class visualization$ColorFormat
    mixins visualization$DefaultFormatter {
    constructor(): this;

    /**
     * Specifies a foreground color and/or background color to a cell, depending on the cell value. Any cell with a value in the specified from—to range will be assigned color and bgcolor. It is important to realize that the range is non-inclusive, because creating a range from 1—1,000 and a second from 1,000— 2,000 will not cover the value 1,000!
     * @param from - [String, Number, Date, DateTime, or TimeOfDay] The lower boundary (inclusive) of the range, or null. If null, it will match -∞. String boundaries are compared alphabetically against string values.
     * @param to - [String, Number, Date, DateTime, or TimeOfDay] The high boundary (non-inclusive) of the range, or null. If null, it will match +∞. String boundaries are compared alphabetically against string values.
     * @param color - The color to apply to text in matching cells. Values can be either '#RRGGBB' values or defined color constants, (example: '#FF0000' or 'red').
     * @param bgcolor - The color to apply to the background of matching cells. Values can be either '#RRGGBB' values or defined color constants, (example: '#FF0000' or 'red').
     */
    addRange(from: any, to: any, color: string, bgcolor: string): void;

    /**
     * Assigns a background color from a range, according to the cell value. The color is scaled to match the cell's value within a range from a lower boundary color to an upper boundary color. Note that this method cannot compare string values, as addRange() can. Tip: Color ranges are often hard for viewers to gauge accurately; the simplest and easiest to read range is from a fully saturated color to white (e.g., #FF0000—FFFFFF).
     * @param from - [Number, Date, DateTime, or TimeOfDay] The lower boundary (inclusive) of the range, or null. If null, it will match -∞.
     * @param to - [Number, Date, DateTime, or TimeOfDay] The higher boundary (non-inclusive) of the range, or null. If null, it will match +∞.
     * @param color - The color to apply to text in matching cells. This color is the same for all cells, no matter what their value.
     * @param fromBgColor - The background color for cells holding values at the low end of the gradient. Values can be either '#RRGGBB' values or defined color constants, (example: '#FF0000' or 'red').
     * @param toBgColor - The background color for cells holding values at the high end of the gradient. Values can be either '#RRGGBB' values or defined color constants, (example: '#FF0000' or 'red').
     */
    addGradientRange(
      from: any,
      to: any,
      color: string,
      fromBgColor: string,
      toBgColor: string
    ): void;
  }

  declare export interface visualization$DateFormatOptions {
    /**
     * A quick formatting option for the date. The following string values are supported, reformatting the date February 28, 2016 as shown:
     * - 'short' - Short format: e.g., "2/28/16"
     * - 'medium' - Medium format: e.g., "Feb 28, 2016"
     * - 'long' - Long format: e.g., "February 28, 2016"
     * You cannot specify both formatType and pattern.
     */
    formatType?: string;

    /**
     * A custom format pattern to apply to the value, similar to the ICU date and time format.
     * You cannot specify both formatType and pattern.
     * @example var formatter3 = new google.visualization.DateFormat({pattern: "EEE, MMM d, ''yy"});
     */
    pattern?: string;

    /**
     * The time zone in which to display the date value. This is a numeric value, indicating GMT + this number of time zones (can be negative). Date object are created by default with the assumed time zone of the computer on which they are created; this option is used to display that value in a different time zone. For example, if you created a Date object of 5pm noon on a computer located in Greenwich, England, and specified timeZone to be -5 (options['timeZone'] = -5, or Eastern Pacific Time in the US), the value displayed would be 12 noon.
     */
    timeZone?: number;
  }

  /**
   * Formats a Date or DateTime value in several different ways, including "January 1, 2009," "1/1/09" and "Jan 1, 2009."
   */
  declare export class visualization$DateFormat
    mixins visualization$DefaultFormatter {
    constructor(options: visualization$DateFormatOptions): this;

    /**
     * Returns the formatted value of a given value. This method does not require a DataTable.
     */
    formatValue(value: Date): string;
  }

  declare export interface visualization$NumberFormatOptions {
    /**
     * A character to use as the decimal marker. The default is a dot (.).
     */
    decimalSymbol?: string;

    /**
     * A number specifying how many digits to display after the decimal. The default is 2. If you specify more digits than the number contains, it will display zeros for the smaller values. Truncated values will be rounded (5 rounded up).
     */
    fractionDigits?: number;

    /**
     * A character to be used to group digits to the left of the decimal into sets of three. Default is a comma (,).
     */
    groupingSymbol?: string;

    /**
     * The text color for negative values. No default value. Values can be any acceptable HTML color value, such as "red" or "#FF0000".
     */
    negativeColor?: string;

    /**
     * A boolean, where true indicates that negative values should be surrounded by parentheses. Default is true.
     */
    negativeParens?: boolean;

    /**
     * A format string. When provided, all other options are ignored, except negativeColor.
     * The format string is a subset of the ICU pattern set. For instance, {pattern:'#,###%'} will result in output values "1,000%", "750%", and "50%" for values 10, 7.5, and 0.5.
     */
    pattern?: string;

    /**
     * A string prefix for the value, for example "$".
     */
    prefix?: string;

    /**
     * A string suffix for the value, for example "%".
     */
    suffix?: string;
  }

  /**
   * Formats various aspects of numeric values.
   */
  declare export class visualization$NumberFormat
    mixins visualization$DefaultFormatter {
    constructor(options?: visualization$NumberFormatOptions): this;

    /**
     * Returns the formatted value of a given value. This method does not require a DataTable.
     */
    formatValue(value: number): string;
  }

  /**
   * Concatenates cell values on the same row into a specified cell, along with arbitrary text.
   */
  declare export class visualization$PatternFormat {
    /**
     * Constructor.
     * Does not take an options object. Instead, it takes a string pattern parameter.
     * This is a string that describes which column values to put into the destination column, along with any arbitrary text. Embed placeholders in your string to indicate a value from another column to embed. The placeholders are {#}, where # is a the index of a source column to use. The index is an index in the srcColumnIndices array from the format() method below. To include a literal { or } character, escape it like this: \{ or \}. To include a literal \ mark, escape it as \\.
     */
    constructor(pattern: string): this;

    /**
     * The standard formatting call, with a few additional parameters
     * @param dataTable - The DataTable on which to operate.
     * @param srcColumnIndices - An array of one or more (zero-based) column indices to pull as the sources from the underlying DataTable. This will be used as a data source for the pattern parameter in the constructor. The column numbers do not have to be in sorted order.
     * @param opt_dstColumnIndex - The destination column to place the output of the pattern manipulation. If not specified, the first element in srcColumIndices will be used as the destination.
     */
    format(
      dataTable: visualization$DataTable,
      srcColumnIndices: number[],
      opt_dstColumnIndex?: number
    ): void;
  }

  declare export class visualization$OrgChart
    mixins visualization$CoreChartBase {
    draw(
      data: visualization$DataTable | visualization$DataView,
      options: visualization$OrgChartOptions
    ): void;
    collapse(row: number, collapsed: boolean): void;
    getChildrenIndexes(row: number): number[];
    getCollapsedNodes(): number[];
  }

  declare export interface visualization$OrgChartOptions {
    allowCollapse?: boolean;
    allowHtml?: boolean;
    color?: string;
    nodeClass?: string;
    selectedNodeClass?: string;
    selectionColor?: string;

    /**
     * Chart size
     * @type {("small" | "medium" | "large")}
     * @default 'medium'
     */
    size?: string;
  }
}
