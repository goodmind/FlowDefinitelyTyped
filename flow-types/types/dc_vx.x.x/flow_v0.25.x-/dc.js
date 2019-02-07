declare module "dc" {
  import typeof * as d3 from "d3";

  declare module.exports: typeof dc;

  declare var dc: dc$dc$Base;
  declare export interface dc$IGetSet<T, V> {
    (): T;
    (t: T): V;
  }

  declare export interface dc$IBiGetSet<T, R, V> {
    (): T;
    (t: T, r?: R): V;
  }

  declare export interface dc$IGetSetComputed<T, R, V> {
    (): R;
    (t: T): V;
  }

  declare export interface dc$Scale<T> {
    (x: any): T;
    domain(values: any[]): dc$Scale<T>;
    domain(): any[];
    range(values: T[]): dc$Scale<T>;
    range(): T[];
  }

  declare export interface dc$Accessor<T, V> {
    (datum: T, index?: number): V;
  }

  declare export interface dc$Columns {
    label: string;
    format: dc$Accessor<any, string>;
  }

  declare export interface dc$UnitFunction {
    (
      start: number | Date,
      end: number | Date,
      domain?: number | Array<string>
    ): number | Array<number | Date | string>;
  }

  declare export interface dc$FloatPointUnits {
    precision(precision: number): dc$UnitFunction;
  }

  declare export interface dc$Units {
    integers: dc$UnitFunction;
    ordinal: dc$UnitFunction;
    fp: dc$FloatPointUnits;
  }

  declare export interface dc$Events {
    trigger(fn: () => void, delay?: number): void;
  }

  declare export interface dc$Errors {
    Exception(msg: string): void;
    InvalidStateException(msg: string): void;
  }

  declare export interface dc$Filter {
    isFiltered(value: any): boolean;
  }

  declare export interface dc$Filters {
    RangedFilter(low: any, high: any): dc$Filter;
    TwoDimensionalFilter(arr: Array<any>): dc$Filter;
    RangedTwoDimensionalFilter(arr: Array<any>): dc$Filter;
  }

  declare export interface dc$Logger {
    enableDebugLog: boolean;
    warn(msg: string): void;
    debug(msg: string): void;
    deprecate(fn: Function, msg: string): void;
  }

  declare export interface dc$Printers {
    filters(filters: Array<any>): string;
    filter(filter: any): string;
  }

  declare export interface dc$Round {
    floor(n: number): number;
    ceil(n: number): number;
    round(n: number): number;
  }

  declare export interface dc$Utils {
    printSingleValue(filter: any): string;
    add(l: any, r: any): any;
    subtract(l: any, r: any): any;
    isNumber(n: any): boolean;
    isFloat(n: any): boolean;
    isInteger(n: any): boolean;
    isNegligible(n: any): boolean;
    clamp(n: number, min: number, max: number): number;
    uniqueId(): number;
    nameToId(name: string): string;
    appendOrSelect(
      parent: d3.Selection<any>,
      selector: string,
      tag: any
    ): d3.Selection<any>;
    safeNumber(n: any): number;
  }

  declare export interface dc$Legend {
    x: dc$IGetSet<number, dc$Legend>;
    y: dc$IGetSet<number, dc$Legend>;
    gap: dc$IGetSet<number, dc$Legend>;
    itemHeight: dc$IGetSet<number, dc$Legend>;
    horizontal: dc$IGetSet<boolean, dc$Legend>;
    legendWidth: dc$IGetSet<number, dc$Legend>;
    legendText: dc$IGetSet<any, dc$Legend>;
    itemWidth: dc$IGetSet<number, dc$Legend>;
    autoItemWidth: dc$IGetSet<boolean, dc$Legend>;
    render: () => void;
  }

  declare export interface dc$BaseMixin<T> {
    width: dc$IGetSet<number, T>;
    height: dc$IGetSet<number, T>;
    minWidth: dc$IGetSet<number, T>;
    minHeight: dc$IGetSet<number, T>;
    dimension: dc$IGetSet<any, T>;
    data: dc$IGetSetComputed<(group: any) => Array<any>, Array<any>, T>;
    group: dc$IBiGetSet<any, string, T>;
    ordering: dc$IGetSet<dc$Accessor<any, any>, T>;
    filterAll(): void;
    select(selector: d3.Selection<any> | string): d3.Selection<any>;
    selectAll(selector: d3.Selection<any> | string): d3.Selection<any>;
    anchor(
      anchor: dc$BaseMixin<any> | d3.Selection<any> | string,
      chartGroup?: string
    ): d3.Selection<any>;
    anchorName(): string;
    svg: dc$IGetSet<d3.Selection<any>, d3.Selection<any>>;
    resetSvg(): void;
    filterPrinter: dc$IGetSet<(filters: Array<any>) => string, T>;
    controlsUseVisibility: dc$IGetSet<boolean, T>;
    turnOnControls(): void;
    turnOffControls(): void;
    transitionDuration: dc$IGetSet<number, T>;
    render(): void;
    redraw(): void;
    redrawGroup(): void;
    hasFilterHandler: dc$IGetSet<
      (filters: Array<any>, filter: any) => boolean,
      T
    >;
    hasFilter(filter?: any): boolean;
    removeFilterHandler: dc$IGetSet<(filters: Array<any>) => Array<any>, T>;
    addFilterHandler: dc$IGetSet<(filters: Array<any>) => Array<any>, T>;
    resetFilterHandler: dc$IGetSet<(filters: Array<any>) => Array<any>, T>;
    filter: dc$IGetSet<any, T>;
    filters(): Array<any>;
    onClick(datum: any): void;
    filterHandler: dc$IGetSet<(dimension: any, filter: any) => any, T>;
    keyAccessor: dc$IGetSet<dc$Accessor<any, any>, T>;
    valueAccessor: dc$IGetSet<dc$Accessor<any, any>, T>;
    label: dc$IGetSet<dc$Accessor<any, string>, T>;
    renderLabel: dc$IGetSet<boolean, T>;
    title: dc$IGetSet<dc$Accessor<any, string>, T>;
    renderTitle: dc$IGetSet<boolean, T>;
    chartGroup: dc$IGetSet<string, T>;
    expireCache(): T;
    legend: dc$IGetSet<dc$Legend, T>;
    options(optionsObject: any): T;
    renderlet(fn: (chart: T) => any): T;
    useViewBoxResizing: dc$IGetSet<boolean, T>;
    on(event: "renderlet", fn: (chart: T, filter: any) => any): T;
    on(event: "pretransition", fn: (chart: T, filter: any) => any): T;
    on(event: "preRender", fn: (chart: T) => any): T;
    on(event: "postRender", fn: (chart: T) => any): T;
    on(event: "preRedraw", fn: (chart: T) => any): T;
    on(event: "postRedraw", fn: (chart: T) => any): T;
    on(event: "filtered", fn: (chart: T, filter: any) => any): T;
    on(event: "zoomed", fn: (chart: T, filter: any) => any): T;
    on(event: string, fn: (chart: T, ...args: any[]) => any): T;
  }

  declare export interface dc$Margins {
    left: number;
    top: number;
    right: number;
    bottom: number;
  }

  declare export interface dc$MarginMixin<T> {
    margins: dc$IGetSet<dc$Margins, T>;
  }

  declare export interface dc$ColorMixin<T> {
    colors: dc$IGetSet<Array<string> | dc$Scale<string | d3.Color> | string, T>;
    ordinalColors(r: Array<string>): T;
    linearColors(r: Array<string>): T;
    colorAccessor: dc$IGetSet<dc$Accessor<any, number>, T>;
    colorDomain: dc$IGetSet<Array<any>, T>;
    calculateColorDomain(): void;
    getColor(datum: any, index?: number): string;
    colorCalculator: dc$IGetSet<dc$Accessor<any, string>, T>;
  }

  declare export type dc$CoordinateGridMixin<T> = {
    rangeChart: dc$IGetSet<dc$BaseMixin<any>, T>,
    zoomScale: dc$IGetSet<Array<any>, T>,
    zoomOutRestrict: dc$IGetSet<boolean, T>,
    g: dc$IGetSet<d3.Selection<any>, T>,
    mouseZoomable: dc$IGetSet<boolean, T>,
    chartBodyG(): d3.Selection<any>,
    x: dc$IGetSet<(n: any) => any, T>,
    xUnits: dc$IGetSet<dc$UnitFunction, T>,
    xAxis: dc$IGetSet<d3.svg.Axis, T>,
    elasticX: dc$IGetSet<boolean, T>,
    xAxisPadding: dc$IGetSet<number, T>,
    xUnitCount(): number,
    useRightYAxis: dc$IGetSet<boolean, T>,
    isOrdinal(): boolean,
    xAxisLabel: dc$IBiGetSet<string, number, T>,
    yAxisLabel: dc$IBiGetSet<string, number, T>,
    y: dc$IGetSet<dc$Scale<number>, T>,
    yAxis: dc$IGetSet<d3.svg.Axis, T>,
    elasticY: dc$IGetSet<boolean, T>,
    renderHorizontalGridLines: dc$IGetSet<boolean, T>,
    renderVerticalGridLines: dc$IGetSet<boolean, T>,
    xAxisMin(): any,
    xAxisMax(): any,
    yAxisMin(): any,
    yAxisMax(): any,
    yAxisPadding: dc$IGetSet<number, T>,
    round: dc$IGetSet<(value: any) => any, T>,
    clipPadding: dc$IGetSet<number, T>,
    focus(range?: Array<any>): void,
    brushOn: dc$IGetSet<boolean, T>
  } & dc$BaseMixin<T> &
    dc$MarginMixin<T> &
    dc$ColorMixin<T>;

  declare export interface dc$StackMixin<T> {
    stack(group: any, name?: string, accessor?: dc$Accessor<any, any>): void;
    hidableStacks: dc$IGetSet<boolean, T>;
    hideStack(name: string): void;
    showStack(name: string): void;
    stackLayout: dc$IGetSet<d3.layout.Stack<any[], any>, T>;
  }

  declare export interface dc$CapMixin<T> {
    cap: dc$IGetSet<number, T>;
    othersLabel: dc$IGetSet<string, T>;
    othersGrouper: dc$IGetSet<(data: Array<any>) => Array<any>, T>;
  }

  declare export type dc$BubbleMixin<T> = {
    r: dc$IGetSet<dc$Scale<number>, T>,
    radiusValueAccessor: dc$IGetSet<dc$Accessor<any, number>, T>,
    minRadiusWithLabel: dc$IGetSet<number, T>,
    maxBubbleRelativeSize: dc$IGetSet<number, T>
  } & dc$ColorMixin<T>;

  declare export type dc$PieChart = {
    slicesCap: dc$IGetSet<number, dc$PieChart>,
    innerRadius: dc$IGetSet<number, dc$PieChart>,
    radius: dc$IGetSet<number, dc$PieChart>,
    cx: dc$IGetSet<number, dc$PieChart>,
    cy: dc$IGetSet<number, dc$PieChart>,
    minAngleForLabel: dc$IGetSet<number, dc$PieChart>
  } & dc$CapMixin<dc$PieChart> &
    dc$ColorMixin<dc$PieChart> &
    dc$BaseMixin<dc$PieChart>;

  declare export type dc$BarChart = {
    centerBar: dc$IGetSet<boolean, dc$BarChart>,
    barPadding: dc$IGetSet<number, dc$BarChart>,
    outerPadding: dc$IGetSet<number, dc$BarChart>,
    gap: dc$IGetSet<number, dc$BarChart>,
    alwaysUseRounding: dc$IGetSet<boolean, dc$BarChart>
  } & dc$StackMixin<dc$BarChart> &
    dc$CoordinateGridMixin<dc$BarChart>;

  declare export interface dc$RenderDataPointOptions {
    fillOpacity: number;
    strokeOpacity: number;
    radius: number;
  }

  declare export type dc$LineChart = {
    interpolate: dc$IGetSet<string, dc$LineChart>,
    tension: dc$IGetSet<number, dc$LineChart>,
    defined: dc$IGetSet<dc$Accessor<any, boolean>, dc$LineChart>,
    dashStyle: dc$IGetSet<Array<number>, dc$LineChart>,
    renderArea: dc$IGetSet<boolean, dc$LineChart>,
    dotRadius: dc$IGetSet<number, dc$LineChart>,
    renderDataPoints: dc$IGetSet<dc$RenderDataPointOptions | any, dc$LineChart>
  } & dc$StackMixin<dc$LineChart> &
    dc$CoordinateGridMixin<dc$LineChart>;

  declare export interface dc$DataCountWidgetHTML {
    all: string;
    some: string;
  }

  declare export type dc$DataCountWidget = {
    html: dc$IGetSet<dc$DataCountWidgetHTML, dc$DataCountWidget>,
    formatNumber: dc$IGetSet<dc$Accessor<number, string>, dc$DataCountWidget>
  } & dc$BaseMixin<dc$DataCountWidget>;

  declare export type dc$DataTableWidget = {
    size: dc$IGetSet<number, dc$DataTableWidget>,
    showGroups: dc$IGetSet<boolean, dc$DataTableWidget>,
    columns: dc$IGetSet<
      Array<string | dc$Accessor<any, any> | dc$Columns>,
      dc$DataTableWidget
    >,
    sortBy: dc$IGetSet<dc$Accessor<any, any>, dc$DataTableWidget>,
    order: dc$IGetSet<(a: any, b: any) => number, dc$DataTableWidget>
  } & dc$BaseMixin<dc$DataTableWidget>;

  declare export type dc$DataGridWidget = {
    size: dc$IGetSet<number, dc$DataTableWidget>,
    html: dc$IGetSet<dc$Accessor<any, string>, dc$DataTableWidget>,
    htmlGroup: dc$IGetSet<dc$Accessor<any, string>, dc$DataTableWidget>,
    sortBy: dc$IGetSet<dc$Accessor<any, any>, dc$DataTableWidget>,
    order: dc$IGetSet<(a: any, b: any) => number, dc$DataTableWidget>
  } & dc$BaseMixin<dc$DataGridWidget>;

  declare export type dc$BubbleChart = {
    elasticRadius: dc$IGetSet<boolean, dc$BubbleChart>
  } & dc$BubbleMixin<dc$BubbleChart> &
    dc$CoordinateGridMixin<dc$BubbleChart>;

  declare export type dc$ICompositeChart<T> = {
    useRightAxisGridLines: dc$IGetSet<boolean, dc$ICompositeChart<T>>,
    childOptions: dc$IGetSet<any, dc$ICompositeChart<T>>,
    rightYAxisLabel: dc$IGetSet<string, dc$ICompositeChart<T>>,
    compose: dc$IGetSet<Array<dc$BaseMixin<any>>, dc$ICompositeChart<T>>,
    children(): Array<dc$BaseMixin<any>>,
    shareColors: dc$IGetSet<boolean, dc$ICompositeChart<T>>,
    shareTitle: dc$IGetSet<boolean, dc$ICompositeChart<T>>,
    rightY: dc$IGetSet<(n: any) => any, dc$ICompositeChart<T>>,
    rightYAxis: dc$IGetSet<d3.svg.Axis, dc$ICompositeChart<T>>
  } & dc$CoordinateGridMixin<T>;

  declare export type dc$CompositeChart = {} & dc$ICompositeChart<dc$CompositeChart>;

  declare export type dc$SeriesChart = {
    chart: dc$IGetSet<(c: any) => dc$BaseMixin<any>, dc$SeriesChart>,
    seriesAccessor: dc$IGetSet<dc$Accessor<any, any>, dc$SeriesChart>,
    seriesSort: dc$IGetSet<(a: any, b: any) => number, dc$SeriesChart>,
    valueSort: dc$IGetSet<(a: any, b: any) => number, dc$SeriesChart>
  } & dc$ICompositeChart<dc$SeriesChart>;

  declare export interface dc$GeoChoroplethLayer {
    name: string;
    keyAccessor: dc$Accessor<any, any>;
    data: any;
  }

  declare export type dc$GeoChoroplethChart = {
    overlayGeoJson(
      json: any,
      name: string,
      keyAccessor: dc$Accessor<any, any>
    ): void,
    projection: dc$IGetSet<d3.geo.Projection, dc$GeoChoroplethChart>,
    geoJsons(): Array<dc$GeoChoroplethLayer>,
    geoPath(): d3.geo.Path,
    removeGeoJson(name: string): void
  } & dc$ColorMixin<dc$GeoChoroplethChart> &
    dc$BaseMixin<dc$GeoChoroplethChart>;

  declare export type dc$BubbleOverlayChart = {
    point(name: string, x: number, y: number): void
  } & dc$BubbleMixin<dc$BubbleOverlayChart> &
    dc$BaseMixin<dc$BubbleOverlayChart>;

  declare export type dc$RowChart = {
    x: dc$IGetSet<dc$Scale<number>, dc$RowChart>,
    renderTitleLabel: dc$IGetSet<boolean, dc$RowChart>,
    xAxis: dc$IGetSet<d3.svg.Axis, dc$RowChart>,
    fixedBarHeight: dc$IGetSet<number, dc$RowChart>,
    gap: dc$IGetSet<number, dc$RowChart>,
    elasticX: dc$IGetSet<boolean, dc$RowChart>,
    labelOffsetX: dc$IGetSet<number, dc$RowChart>,
    labelOffsetY: dc$IGetSet<number, dc$RowChart>,
    titleLabelOffsetX: dc$IGetSet<number, dc$RowChart>
  } & dc$CapMixin<dc$RowChart> &
    dc$MarginMixin<dc$RowChart> &
    dc$ColorMixin<dc$RowChart> &
    dc$BaseMixin<dc$RowChart>;

  declare export type dc$ScatterPlot = {
    existenceAccessor: dc$IGetSet<dc$Accessor<any, boolean>, dc$ScatterPlot>,
    symbol: dc$IGetSet<d3.svg.Symbol<any>, dc$ScatterPlot>,
    symbolSize: dc$IGetSet<number, dc$ScatterPlot>,
    highlightedSize: dc$IGetSet<number, dc$ScatterPlot>,
    hiddenSize: dc$IGetSet<number, dc$ScatterPlot>
  } & dc$CoordinateGridMixin<dc$ScatterPlot>;

  declare export interface dc$NumberDisplayWidgetHTML {
    one: string;
    some: string;
    none: string;
  }

  declare export type dc$NumberDisplayWidget = {
    html: dc$IGetSet<dc$NumberDisplayWidgetHTML, dc$NumberDisplayWidget>,
    value(): string,
    formatNumber: dc$IGetSet<
      dc$Accessor<number, string>,
      dc$NumberDisplayWidget
    >
  } & dc$BaseMixin<dc$NumberDisplayWidget>;

  declare export type dc$HeatMap = {
    colsLabel: dc$IGetSet<dc$Accessor<any, string>, dc$HeatMap>,
    rowsLabel: dc$IGetSet<dc$Accessor<any, string>, dc$HeatMap>,
    rows: dc$IGetSet<Array<any>, dc$HeatMap>,
    cols: dc$IGetSet<Array<any>, dc$HeatMap>,
    boxOnClick: dc$IGetSet<(d: any) => void, dc$HeatMap>,
    xAxisOnClick: dc$IGetSet<(d: any) => void, dc$HeatMap>,
    yAxisOnClick: dc$IGetSet<(d: any) => void, dc$HeatMap>
  } & dc$ColorMixin<dc$HeatMap> &
    dc$MarginMixin<dc$HeatMap> &
    dc$BaseMixin<dc$HeatMap>;

  declare export type dc$BoxPlot = {
    boxPadding: dc$IGetSet<number, dc$BoxPlot>,
    outerPadding: dc$IGetSet<number, dc$BoxPlot>,
    boxWidth: dc$IGetSet<number, dc$BoxPlot>,
    tickFormat: dc$IGetSet<dc$Accessor<number, string>, dc$BoxPlot>
  } & dc$CoordinateGridMixin<dc$BoxPlot>;

  declare export type dc$SelectMenu = {
    order: dc$IGetSet<(a: any, b: any) => number, dc$SelectMenu>,
    promptText: dc$IGetSet<string, dc$SelectMenu>,
    filterDisplayed: dc$IGetSet<
      (
        a: {
          value: any,
          key: any
        },
        index: number
      ) => boolean,
      dc$SelectMenu
    >,
    multiple: dc$IGetSet<boolean, dc$SelectMenu>,
    promptValue: dc$IGetSet<any, dc$SelectMenu>,
    numberVisible: dc$IGetSet<number, dc$SelectMenu>
  } & dc$BaseMixin<dc$SelectMenu>;

  declare export interface dc$ChartRegistry {
    has(chart: dc$BaseMixin<any>): boolean;
    register(chart: dc$BaseMixin<any>, group?: string): void;
    deregister(chart: dc$BaseMixin<any>, group?: string): void;
    clear(group?: string): void;
    list(group?: string): Array<dc$BaseMixin<any>>;
  }

  declare export interface dc$Base {
    chartRegistry: dc$ChartRegistry;
    registerChart(chart: dc$BaseMixin<any>, group?: string): void;
    deregisterChart(chart: dc$BaseMixin<any>, group?: string): void;
    hasChart(chart: dc$BaseMixin<any>): boolean;
    deregisterAllCharts(group?: string): void;
    filterAll(group?: string): void;
    refocusAll(group?: string): void;
    renderAll(group?: string): void;
    redrawAll(group?: string): void;
    disableTransitions: boolean;
    transition(
      selections: d3.Selection<any>,
      duration: number,
      callback: (s: d3.Selection<any>) => void
    ): void;
    units: dc$Units;
    events: dc$Events;
    errors: dc$Errors;
    instanceOfChart(object: any): boolean;
    logger: dc$Logger;
    override(object: any, fnName: string, newFn: Function): void;
    printers: dc$Printers;
    pluck(n: string, f?: dc$Accessor<any, any>): dc$Accessor<any, any>;
    round: dc$Round;
    utils: dc$Utils;
    version: string;
    legend(): dc$Legend;
    pieChart(parent: string, chartGroup?: string): dc$PieChart;
    barChart(
      parent: string | dc$CompositeChart,
      chartGroup?: string
    ): dc$BarChart;
    lineChart(
      parent: string | dc$CompositeChart,
      chartGroup?: string
    ): dc$LineChart;
    dataCount(parent: string, chartGroup?: string): dc$DataCountWidget;
    dataTable(parent: string, chartGroup?: string): dc$DataTableWidget;
    dataGrid(parent: string, chartGroup?: string): dc$DataGridWidget;
    bubbleChart(parent: string, chartGroup?: string): dc$BubbleChart;
    compositeChart(parent: string, chartGroup?: string): dc$CompositeChart;
    seriesChart(parent: string, chartGroup?: string): dc$SeriesChart;
    geoChoroplethChart(
      parent: string,
      chartGroup?: string
    ): dc$GeoChoroplethChart;
    bubbleOverlayChart(
      parent: string,
      chartGroup?: string
    ): dc$BubbleOverlayChart;
    rowChart(parent: string, chartGroup?: string): dc$RowChart;
    scatterPlot(parent: string, chartGroup?: string): dc$ScatterPlot;
    numberDisplay(parent: string, chartGroup?: string): dc$NumberDisplayWidget;
    heatMap(parent: string, chartGroup?: string): dc$HeatMap;
    boxPlot(parent: string, chartGroup?: string): dc$BoxPlot;
    selectMenu(parent: string, chartGroup?: string): dc$SelectMenu;
  }
}
