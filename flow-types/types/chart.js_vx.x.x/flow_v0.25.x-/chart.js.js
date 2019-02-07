declare module "chart.js" {
  declare class Chart {
    static Chart: typeof Chart;
    constructor(
      context:
        | string
        | CanvasRenderingContext2D
        | HTMLCanvasElement
        | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>,
      options: Chart$Chart$ChartConfiguration
    ): this;
    config: Chart$Chart$ChartConfiguration;
    data: Chart$Chart$ChartData;
    destroy: () => {};
    update: (duration?: any, lazy?: any) => {};
    render: (duration?: any, lazy?: any) => {};
    stop: () => {};
    resize: () => {};
    clear: () => {};
    toBase64Image: () => string;
    generateLegend: () => {};
    getElementAtEvent: (e: any) => {};
    getElementsAtEvent: (e: any) => Array<{}>;
    getDatasetAtEvent: (e: any) => Array<{}>;
    getDatasetMeta: (index: number) => Meta;
    ctx: CanvasRenderingContext2D | null;
    canvas: HTMLCanvasElement | null;
    chartArea: Chart$Chart$ChartArea;
    static pluginService: PluginServiceStatic;
    static plugins: PluginServiceStatic;
    static defaults: {
      global: Chart$Chart$ChartOptions & Chart$Chart$ChartFontOptions,
      [key: string]: any
    };
    static controllers: {
      [key: string]: any
    };
    static helpers: {
      [key: string]: any
    };
    static Tooltip: Chart$Chart$ChartTooltipsStaticConfiguration;
  }
  declare class PluginServiceStatic {
    register(
      plugin: PluginServiceGlobalRegistration & PluginServiceRegistrationOptions
    ): void;
    unregister(
      plugin: PluginServiceGlobalRegistration & PluginServiceRegistrationOptions
    ): void;
  }
  declare interface PluginServiceGlobalRegistration {
    id?: string;
  }
  declare interface PluginServiceRegistrationOptions {
    beforeInit?: (chartInstance: Chart, options?: any) => void;
    afterInit?: (chartInstance: Chart, options?: any) => void;
    beforeUpdate?: (chartInstance: Chart, options?: any) => void;
    afterUpdate?: (chartInstance: Chart, options?: any) => void;
    beforeLayout?: (chartInstance: Chart, options?: any) => void;
    afterLayout?: (chartInstance: Chart, options?: any) => void;
    beforeDatasetsUpdate?: (chartInstance: Chart, options?: any) => void;
    afterDatasetsUpdate?: (chartInstance: Chart, options?: any) => void;
    beforeDatasetUpdate?: (chartInstance: Chart, options?: any) => void;
    afterDatasetUpdate?: (chartInstance: Chart, options?: any) => void;
    beforeRender?: (chartInstance: Chart, options?: any) => void;
    afterRender?: (chartInstance: Chart, options?: any) => void;
    beforeDraw?: (chartInstance: Chart, easing: string, options?: any) => void;
    afterDraw?: (chartInstance: Chart, easing: string, options?: any) => void;
    beforeDatasetsDraw?: (
      chartInstance: Chart,
      easing: string,
      options?: any
    ) => void;
    afterDatasetsDraw?: (
      chartInstance: Chart,
      easing: string,
      options?: any
    ) => void;
    beforeDatasetDraw?: (
      chartInstance: Chart,
      easing: string,
      options?: any
    ) => void;
    afterDatasetDraw?: (
      chartInstance: Chart,
      easing: string,
      options?: any
    ) => void;
    beforeTooltipDraw?: (
      chartInstance: Chart,
      tooltipData?: any,
      options?: any
    ) => void;
    afterTooltipDraw?: (
      chartInstance: Chart,
      tooltipData?: any,
      options?: any
    ) => void;
    beforeEvent?: (chartInstance: Chart, event: Event, options?: any) => void;
    afterEvent?: (chartInstance: Chart, event: Event, options?: any) => void;
    resize?: (
      chartInstance: Chart,
      newChartSize: Chart$Chart$ChartSize,
      options?: any
    ) => void;
    destroy?: (chartInstance: Chart) => void;

    /**
     * @deprecated since version 2.5.0. Use `afterLayout` instead.
     */
    afterScaleUpdate?: (chartInstance: Chart, options?: any) => void;
  }
  declare interface Meta {
    type: Chart$Chart$ChartType;
    data: MetaData[];
    dataset?: Chart$Chart$ChartDataSets;
    controller: {
      [key: string]: any
    };
    hidden?: boolean;
    total?: string;
    xAxisID?: string;
    yAxisID?: string;
    $filler?: {
      [key: string]: any
    };
  }
  declare interface MetaData {
    _chart: Chart;
    _datasetIndex: number;
    _index: number;
    _model: Model;
    _start?: any;
    _view: Model;
    _xScale: Chart$Chart$ChartScales;
    _yScale: Chart$Chart$ChartScales;
    hidden?: boolean;
  }
  declare interface Model {
    backgroundColor: string;
    borderColor: string;
    borderWidth?: number;
    controlPointNextX: number;
    controlPointNextY: number;
    controlPointPreviousX: number;
    controlPointPreviousY: number;
    hitRadius: number;
    pointStyle: string;
    radius: string;
    skip?: boolean;
    steppedLine?: void;
    tension: number;
    x: number;
    y: number;
    base: number;
    head: number;
  }
  declare type Chart$ChartType =
    | "line"
    | "bar"
    | "horizontalBar"
    | "radar"
    | "doughnut"
    | "polarArea"
    | "bubble"
    | "pie"
    | "scatter";

  declare type Chart$TimeUnit =
    | "millisecond"
    | "second"
    | "minute"
    | "hour"
    | "day"
    | "week"
    | "month"
    | "quarter"
    | "year";

  declare type Chart$ScaleType =
    | "category"
    | "linear"
    | "logarithmic"
    | "time"
    | "radialLinear";

  declare type Chart$PointStyle =
    | "circle"
    | "cross"
    | "crossRot"
    | "dash"
    | "line"
    | "rect"
    | "rectRounded"
    | "rectRot"
    | "star"
    | "triangle";

  declare type Chart$PositionType = "left" | "right" | "top" | "bottom";

  declare type Chart$InteractionMode =
    | "point"
    | "nearest"
    | "single"
    | "label"
    | "index"
    | "x-axis"
    | "dataset"
    | "x"
    | "y";

  declare interface Chart$ChartArea {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }

  declare interface Chart$ChartLegendItem {
    text?: string;
    fillStyle?: string;
    hidden?: boolean;
    lineCap?: "butt" | "round" | "square";
    lineDash?: number[];
    lineDashOffset?: number;
    lineJoin?: "bevel" | "round" | "miter";
    lineWidth?: number;
    strokeStyle?: string;
    pointStyle?: Chart$PointStyle;
  }

  declare type Chart$ChartLegendLabelItem = {
    datasetIndex: number
  } & Chart$ChartLegendItem;

  declare interface Chart$ChartTooltipItem {
    xLabel?: string;
    yLabel?: string;
    datasetIndex?: number;
    index?: number;
  }

  declare interface Chart$ChartTooltipLabelColor {
    borderColor: Chart$ChartColor;
    backgroundColor: Chart$ChartColor;
  }

  declare interface Chart$ChartTooltipCallback {
    beforeTitle?: (
      item: Chart$ChartTooltipItem[],
      data: Chart$ChartData
    ) => string | string[];
    title?: (
      item: Chart$ChartTooltipItem[],
      data: Chart$ChartData
    ) => string | string[];
    afterTitle?: (
      item: Chart$ChartTooltipItem[],
      data: Chart$ChartData
    ) => string | string[];
    beforeBody?: (
      item: Chart$ChartTooltipItem[],
      data: Chart$ChartData
    ) => string | string[];
    beforeLabel?: (
      tooltipItem: Chart$ChartTooltipItem,
      data: Chart$ChartData
    ) => string | string[];
    label?: (
      tooltipItem: Chart$ChartTooltipItem,
      data: Chart$ChartData
    ) => string | string[];
    labelColor?: (
      tooltipItem: Chart$ChartTooltipItem,
      chart: Chart
    ) => Chart$ChartTooltipLabelColor;
    labelTextColor?: (
      tooltipItem: Chart$ChartTooltipItem,
      chart: Chart
    ) => string;
    afterLabel?: (
      tooltipItem: Chart$ChartTooltipItem,
      data: Chart$ChartData
    ) => string | string[];
    afterBody?: (
      item: Chart$ChartTooltipItem[],
      data: Chart$ChartData
    ) => string | string[];
    beforeFooter?: (
      item: Chart$ChartTooltipItem[],
      data: Chart$ChartData
    ) => string | string[];
    footer?: (
      item: Chart$ChartTooltipItem[],
      data: Chart$ChartData
    ) => string | string[];
    afterFooter?: (
      item: Chart$ChartTooltipItem[],
      data: Chart$ChartData
    ) => string | string[];
  }

  declare interface Chart$ChartAnimationParameter {
    chartInstance?: any;
    animationObject?: any;
  }

  declare interface Chart$ChartPoint {
    x?: number | string | Date;
    y?: number | string | Date;
    r?: number;
    t?: number | string | Date;
  }

  declare interface Chart$ChartConfiguration {
    type?: Chart$ChartType | string;
    data?: Chart$ChartData;
    options?: Chart$ChartOptions;
    plugins?: PluginServiceRegistrationOptions[];
  }

  declare interface Chart$ChartData {
    labels?: Array<string | string[]>;
    datasets?: Chart$ChartDataSets[];
  }

  declare type Chart$RadialChartOptions = {
    scale?: Chart$RadialLinearScale
  } & Chart$ChartOptions;

  declare interface Chart$ChartSize {
    height: number;
    width: number;
  }

  declare interface Chart$ChartOptions {
    responsive?: boolean;
    responsiveAnimationDuration?: number;
    aspectRatio?: number;
    maintainAspectRatio?: boolean;
    events?: string[];
    legendCallback?: (chart: Chart) => string;
    onHover?: (event: MouseEvent, activeElements: Array<{}>) => any;
    onClick?: (event?: MouseEvent, activeElements?: Array<{}>) => any;
    onResize?: (newSize: Chart$ChartSize) => void;
    title?: Chart$ChartTitleOptions;
    legend?: Chart$ChartLegendOptions;
    tooltips?: Chart$ChartTooltipOptions;
    hover?: Chart$ChartHoverOptions;
    animation?: Chart$ChartAnimationOptions;
    elements?: Chart$ChartElementsOptions;
    layout?: Chart$ChartLayoutOptions;
    scales?: Chart$ChartScales;
    showLines?: boolean;
    spanGaps?: boolean;
    cutoutPercentage?: number;
    circumference?: number;
    rotation?: number;
    devicePixelRatio?: number;
    plugins?: Chart$ChartPluginsOptions;
  }

  declare interface Chart$ChartFontOptions {
    defaultFontColor?: Chart$ChartColor;
    defaultFontFamily?: string;
    defaultFontSize?: number;
    defaultFontStyle?: string;
  }

  declare interface Chart$ChartTitleOptions {
    display?: boolean;
    position?: Chart$PositionType;
    fullWidth?: boolean;
    fontSize?: number;
    fontFamily?: string;
    fontColor?: Chart$ChartColor;
    fontStyle?: string;
    padding?: number;
    text?: string | string[];
  }

  declare interface Chart$ChartLegendOptions {
    display?: boolean;
    position?: Chart$PositionType;
    fullWidth?: boolean;
    onClick?: (
      event: MouseEvent,
      legendItem: Chart$ChartLegendLabelItem
    ) => void;
    onHover?: (
      event: MouseEvent,
      legendItem: Chart$ChartLegendLabelItem
    ) => void;
    labels?: Chart$ChartLegendLabelOptions;
    reverse?: boolean;
  }

  declare interface Chart$ChartLegendLabelOptions {
    boxWidth?: number;
    fontSize?: number;
    fontStyle?: string;
    fontColor?: Chart$ChartColor;
    fontFamily?: string;
    padding?: number;
    generateLabels?: (chart: any) => any;
    filter?: (
      legendItem: Chart$ChartLegendLabelItem,
      data: Chart$ChartData
    ) => any;
    usePointStyle?: boolean;
  }

  declare interface Chart$ChartTooltipOptions {
    enabled?: boolean;
    custom?: (a: any) => void;
    mode?: Chart$InteractionMode;
    intersect?: boolean;
    backgroundColor?: Chart$ChartColor;
    titleFontFamily?: string;
    titleFontSize?: number;
    titleFontStyle?: string;
    titleFontColor?: Chart$ChartColor;
    titleSpacing?: number;
    titleMarginBottom?: number;
    bodyFontFamily?: string;
    bodyFontSize?: number;
    bodyFontStyle?: string;
    bodyFontColor?: Chart$ChartColor;
    bodySpacing?: number;
    footerFontFamily?: string;
    footerFontSize?: number;
    footerFontStyle?: string;
    footerFontColor?: Chart$ChartColor;
    footerSpacing?: number;
    footerMarginTop?: number;
    xPadding?: number;
    yPadding?: number;
    caretSize?: number;
    cornerRadius?: number;
    multiKeyBackground?: string;
    callbacks?: Chart$ChartTooltipCallback;
    filter?: (item: Chart$ChartTooltipItem) => boolean;
    itemSort?: (
      itemA: Chart$ChartTooltipItem,
      itemB: Chart$ChartTooltipItem
    ) => number;
    position?: string;
    caretPadding?: number;
    displayColors?: boolean;
    borderColor?: Chart$ChartColor;
    borderWidth?: number;
  }

  declare interface Chart$ChartPluginsOptions {
    [pluginId: string]: any;
  }

  declare interface Chart$ChartTooltipsStaticConfiguration {
    positioners: {
      [mode: string]: Chart$ChartTooltipPositioner
    };
  }

  declare type Chart$ChartTooltipPositioner = (
    elements: any[],
    eventPosition: Chart$Point
  ) => Chart$Point;

  declare interface Chart$ChartHoverOptions {
    mode?: Chart$InteractionMode;
    animationDuration?: number;
    intersect?: boolean;
    onHover?: (event: MouseEvent, activeElements: Array<{}>) => any;
  }

  declare interface Chart$ChartAnimationObject {
    currentStep?: number;
    numSteps?: number;
    easing?: string;
    render?: (arg: any) => void;
    onAnimationProgress?: (arg: any) => void;
    onAnimationComplete?: (arg: any) => void;
  }

  declare interface Chart$ChartAnimationOptions {
    duration?: number;
    easing?: string;
    onProgress?: (chart: any) => void;
    onComplete?: (chart: any) => void;
    animateRotate?: boolean;
    animateScale?: boolean;
  }

  declare interface Chart$ChartElementsOptions {
    point?: Chart$ChartPointOptions;
    line?: Chart$ChartLineOptions;
    arc?: Chart$ChartArcOptions;
    rectangle?: Chart$ChartRectangleOptions;
  }

  declare interface Chart$ChartArcOptions {
    backgroundColor?: Chart$ChartColor;
    borderColor?: Chart$ChartColor;
    borderWidth?: number;
  }

  declare interface Chart$ChartLineOptions {
    tension?: number;
    backgroundColor?: Chart$ChartColor;
    borderWidth?: number;
    borderColor?: Chart$ChartColor;
    borderCapStyle?: string;
    borderDash?: any[];
    borderDashOffset?: number;
    borderJoinStyle?: string;
    capBezierPoints?: boolean;
    fill?: "zero" | "top" | "bottom" | boolean;
    stepped?: boolean;
  }

  declare interface Chart$ChartPointOptions {
    radius?: number;
    pointStyle?: Chart$PointStyle;
    backgroundColor?: Chart$ChartColor;
    borderWidth?: number;
    borderColor?: Chart$ChartColor;
    hitRadius?: number;
    hoverRadius?: number;
    hoverBorderWidth?: number;
  }

  declare interface Chart$ChartRectangleOptions {
    backgroundColor?: Chart$ChartColor;
    borderWidth?: number;
    borderColor?: Chart$ChartColor;
    borderSkipped?: string;
  }

  declare interface Chart$ChartLayoutOptions {
    padding?: Chart$ChartLayoutPaddingObject | number;
  }

  declare interface Chart$ChartLayoutPaddingObject {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }

  declare interface Chart$GridLineOptions {
    display?: boolean;
    color?: Chart$ChartColor;
    borderDash?: number[];
    borderDashOffset?: number;
    lineWidth?: number;
    drawBorder?: boolean;
    drawOnChartArea?: boolean;
    drawTicks?: boolean;
    tickMarkLength?: number;
    zeroLineWidth?: number;
    zeroLineColor?: Chart$ChartColor;
    zeroLineBorderDash?: number[];
    zeroLineBorderDashOffset?: number;
    offsetGridLines?: boolean;
  }

  declare interface Chart$ScaleTitleOptions {
    display?: boolean;
    labelString?: string;
    fontColor?: Chart$ChartColor;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
  }

  declare type Chart$TickOptions = {
    minor?: Chart$NestedTickOptions | false,
    major?: Chart$NestedTickOptions | false
  } & Chart$NestedTickOptions;

  declare interface Chart$NestedTickOptions {
    autoSkip?: boolean;
    autoSkipPadding?: number;
    backdropColor?: Chart$ChartColor;
    backdropPaddingX?: number;
    backdropPaddingY?: number;
    beginAtZero?: boolean;
    callback?: (value: any, index: any, values: any) => string | number;
    display?: boolean;
    fontColor?: Chart$ChartColor;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    labelOffset?: number;
    lineHeight?: number;
    max?: any;
    maxRotation?: number;
    maxTicksLimit?: number;
    min?: any;
    minRotation?: number;
    mirror?: boolean;
    padding?: number;
    reverse?: boolean;
    showLabelBackdrop?: boolean;
    source?: "auto" | "data" | "labels";
    stepSize?: number;
    suggestedMax?: number;
    suggestedMin?: number;
  }

  declare interface Chart$AngleLineOptions {
    display?: boolean;
    color?: Chart$ChartColor;
    lineWidth?: number;
  }

  declare interface Chart$PointLabelOptions {
    callback?: (arg: any) => any;
    fontColor?: Chart$ChartColor;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
  }

  declare type Chart$LinearTickOptions = {
    maxTicksLimit?: number,
    stepSize?: number,
    precision?: number,
    suggestedMin?: number,
    suggestedMax?: number
  } & Chart$TickOptions;

  declare type Chart$LogarithmicTickOptions = {} & Chart$TickOptions;

  declare type Chart$ChartColor =
    | string
    | CanvasGradient
    | CanvasPattern
    | string[];

  declare interface Chart$ChartDataSets {
    cubicInterpolationMode?: "default" | "monotone";
    backgroundColor?: Chart$ChartColor | Chart$ChartColor[];
    borderWidth?: number | number[];
    borderColor?: Chart$ChartColor | Chart$ChartColor[];
    borderCapStyle?: "butt" | "round" | "square";
    borderDash?: number[];
    borderDashOffset?: number;
    borderJoinStyle?: "bevel" | "round" | "miter";
    borderSkipped?: Chart$PositionType;
    data?: Array<number | null | void> | Chart$ChartPoint[];
    fill?: boolean | number | string;
    hoverBackgroundColor?: Chart$ChartColor | Chart$ChartColor[];
    hoverBorderColor?: Chart$ChartColor | Chart$ChartColor[];
    hoverBorderWidth?: number | number[];
    label?: string;
    lineTension?: number;
    steppedLine?: "before" | "after" | boolean;
    pointBorderColor?: Chart$ChartColor | Chart$ChartColor[];
    pointBackgroundColor?: Chart$ChartColor | Chart$ChartColor[];
    pointBorderWidth?: number | number[];
    pointRadius?: number | number[];
    pointHoverRadius?: number | number[];
    pointHitRadius?: number | number[];
    pointHoverBackgroundColor?: Chart$ChartColor | Chart$ChartColor[];
    pointHoverBorderColor?: Chart$ChartColor | Chart$ChartColor[];
    pointHoverBorderWidth?: number | number[];
    pointStyle?:
      | Chart$PointStyle
      | HTMLImageElement
      | HTMLCanvasElement
      | Array<Chart$PointStyle | HTMLImageElement | HTMLCanvasElement>;
    xAxisID?: string;
    yAxisID?: string;
    type?: Chart$ChartType | string;
    hidden?: boolean;
    hideInLegendAndTooltip?: boolean;
    showLine?: boolean;
    stack?: string;
    spanGaps?: boolean;
  }

  declare interface Chart$ChartScales {
    type?: Chart$ScaleType | string;
    display?: boolean;
    position?: Chart$PositionType | string;
    gridLines?: Chart$GridLineOptions;
    scaleLabel?: Chart$ScaleTitleOptions;
    ticks?: Chart$TickOptions;
    xAxes?: Chart$ChartXAxe[];
    yAxes?: Chart$ChartYAxe[];
  }

  declare interface Chart$CommonAxe {
    bounds?: string;
    type?: Chart$ScaleType | string;
    display?: boolean;
    id?: string;
    stacked?: boolean;
    position?: string;
    ticks?: Chart$TickOptions;
    gridLines?: Chart$GridLineOptions;
    barThickness?: number | "flex";
    maxBarThickness?: number;
    scaleLabel?: Chart$ScaleTitleOptions;
    time?: Chart$TimeScale;
    offset?: boolean;
    beforeUpdate?: (scale?: any) => void;
    beforeSetDimension?: (scale?: any) => void;
    beforeDataLimits?: (scale?: any) => void;
    beforeBuildTicks?: (scale?: any) => void;
    beforeTickToLabelConversion?: (scale?: any) => void;
    beforeCalculateTickRotation?: (scale?: any) => void;
    beforeFit?: (scale?: any) => void;
    afterUpdate?: (scale?: any) => void;
    afterSetDimension?: (scale?: any) => void;
    afterDataLimits?: (scale?: any) => void;
    afterBuildTicks?: (scale?: any) => void;
    afterTickToLabelConversion?: (scale?: any) => void;
    afterCalculateTickRotation?: (scale?: any) => void;
    afterFit?: (scale?: any) => void;
  }

  declare type Chart$ChartXAxe = {
    categoryPercentage?: number,
    barPercentage?: number,
    distribution?: "linear" | "series"
  } & Chart$CommonAxe;

  declare type Chart$ChartYAxe = {} & Chart$CommonAxe;

  declare type Chart$LinearScale = {
    ticks?: Chart$LinearTickOptions
  } & Chart$ChartScales;

  declare type Chart$LogarithmicScale = {
    ticks?: Chart$LogarithmicTickOptions
  } & Chart$ChartScales;

  declare interface Chart$TimeDisplayFormat {
    millisecond?: string;
    second?: string;
    minute?: string;
    hour?: string;
    day?: string;
    week?: string;
    month?: string;
    quarter?: string;
    year?: string;
  }

  declare type Chart$TimeScale = {
    displayFormats?: Chart$TimeDisplayFormat,
    isoWeekday?: boolean,
    max?: string,
    min?: string,
    parser?: string | ((arg: any) => any),
    round?: Chart$TimeUnit,
    tooltipFormat?: string,
    unit?: Chart$TimeUnit,
    unitStepSize?: number,
    stepSize?: number,
    minUnit?: Chart$TimeUnit
  } & Chart$ChartScales;

  declare type Chart$RadialLinearScale = {
    lineArc?: boolean,
    angleLines?: Chart$AngleLineOptions,
    pointLabels?: Chart$PointLabelOptions,
    ticks?: Chart$TickOptions
  } & Chart$LinearScale;

  declare interface Chart$Point {
    x: number;
    y: number;
  }
  declare module.exports: typeof Chart;
}
