declare module "flot" {
  declare interface flot$plotOptions {
    colors?: any[];
    series?: flot$seriesOptions;
    legend?: flot$legendOptions;
    xaxis?: flot$axisOptions;
    yaxis?: flot$axisOptions;
    xaxes?: flot$axisOptions[];
    yaxes?: flot$axisOptions[];
    grid?: flot$gridOptions;
    flot$interaction?: flot$interaction;
    flot$hooks?: flot$hooks;
  }

  declare interface flot$hooks {
    processOptions?: {
      (flot$plot: flot$plot, options: flot$plotOptions): void
    }[];
    processRawData?: {
      (
        flot$plot: flot$plot,
        series: flot$dataSeries,
        data: any[],
        flot$datapoints: flot$datapoints
      ): void
    }[];
    processDatapoints?: {
      (
        flot$plot: flot$plot,
        series: flot$dataSeries,
        flot$datapoints: flot$datapoints
      ): void
    }[];
    processOffset?: {
      (flot$plot: flot$plot, flot$offset: flot$canvasPoint): void
    }[];
    drawBackground?: {
      (flot$plot: flot$plot, context: CanvasRenderingContext2D): void
    }[];
    drawSeries?: {
      (
        flot$plot: flot$plot,
        context: CanvasRenderingContext2D,
        series: flot$dataSeries
      ): void
    }[];
    draw?: {
      (flot$plot: flot$plot, context: CanvasRenderingContext2D): void
    }[];
    bindEvents?: {
      (flot$plot: flot$plot, eventHolder: JQuery): void
    }[];
    drawOverlay?: {
      (flot$plot: flot$plot, context: CanvasRenderingContext2D): void
    }[];
    shutdown?: {
      (flot$plot: flot$plot, eventHolder: JQuery): void
    }[];
  }

  declare interface flot$interaction {
    redrawOverlayInterval?: number;
  }

  declare interface flot$gridOptions {
    show?: boolean;
    aboveData?: boolean;
    color?: any;
    backgroundColor?: any;
    margin?: any;
    labelMargin?: number;
    axisMargin?: number;
    markings?: any;
    borderWidth?: any;
    borderColor?: any;
    minBorderMargin?: number;
    clickable?: boolean;
    hoverable?: boolean;
    autoHighlight?: boolean;
    mouseActiveRadius?: number;
    tickColor?: any;
    markingsColor?: any;
    markingsLineWidth?: number;
  }

  declare interface flot$legendOptions {
    show?: boolean;
    labelFormatter?: (label: string, series: any) => string;
    labelBoxBorderColor?: any;
    noColumns?: number;
    position?: string;
    margin?: any;
    backgroundColor?: any;
    backgroundOpacity?: number;
    container?: JQuery;
    sorted?: any;
  }

  declare interface flot$seriesOptions {
    color?: any;
    label?: string;
    lines?: flot$linesOptions;
    bars?: flot$barsOptions;
    points?: flot$pointsOptions;
    xaxis?: number;
    yaxis?: number;
    clickable?: boolean;
    hoverable?: boolean;
    shadowSize?: number;
    highlightColor?: any;
  }

  declare type flot$dataSeries = {
    data: any[]
  } & flot$seriesOptions;

  declare interface flot$axisOptions {
    show?: boolean;
    position?: string;
    mode?: string;
    monthNames?: string[];
    color?: any;
    tickColor?: any;
    font?: any;
    min?: number;
    max?: number;
    autoscaleMargin?: number;
    transform?: (v: number) => number;
    inverseTransform?: (v: number) => number;
    ticks?: any;
    tickSize?: any;
    minTickSize?: any;
    tickFormatter?: (t: number, a?: flot$axis) => string;
    tickDecimals?: number;
    labelWidth?: number;
    labelHeight?: number;
    reserveSpace?: boolean;
    tickLength?: number;
    alignTicksWithAxis?: number;
    timezone?: string;
    timeformat?: string;
    twelveHourClock?: boolean;
  }

  declare interface flot$seriesTypeBase {
    show?: boolean;
    lineWidth?: number;
    fill?: any;
    fillColor?: any;
  }

  declare type flot$linesOptions = {
    steps?: boolean
  } & flot$seriesTypeBase;

  declare type flot$barsOptions = {
    barWidth?: number,
    align?: string,
    horizontal?: boolean
  } & flot$seriesTypeBase;

  declare type flot$pointsOptions = {
    radius?: number,
    symbol?: any
  } & flot$seriesTypeBase;

  declare interface flot$gradient {
    colors: any[];
  }

  declare interface flot$item {
    datapoint: number[];
    dataIndex: number;
    series: flot$dataSeries;
    seriesIndex: number;
    pageX: number;
    pageY: number;
  }

  declare interface flot$datapoints {
    points: number[];
    pointsize: number;
    format: flot$datapointFormat[];
  }

  declare interface flot$datapointFormat {
    x?: boolean;
    y?: boolean;
    number: boolean;
    required: boolean;
    defaultValue?: number;
  }

  declare interface flot$point {
    x: number;
    y: number;
  }

  declare interface flot$offset {
    left: number;
    top: number;
  }

  declare interface flot$canvasPoint {
    top: number;
    left: number;
    bottom?: number;
    right?: number;
  }

  declare interface flot$axes {
    xaxis: flot$axis;
    yaxis: flot$axis;
    x2axis?: flot$axis;
    y2axis?: flot$axis;
  }

  declare type flot$axis = {
    options: flot$axisOptions,
    p2c(flot$point: flot$point): flot$canvasPoint,
    c2p(flot$canvasPoint: flot$canvasPoint): flot$point
  } & flot$axisOptions;

  declare interface flot$plugin {
    init(options: flot$plotOptions): any;
    options?: any;
    name?: string;
    version?: string;
  }

  declare interface flot$plot {
    highlight(series: flot$dataSeries, datapoint: flot$item): void;
    unhighlight(): void;
    unhighlight(series: flot$dataSeries, datapoint: flot$item): void;
    setData(data: any): void;
    setupGrid(): void;
    draw(): void;
    triggerRedrawOverlay(): void;
    width(): number;
    height(): number;
    flot$offset(): JQueryCoordinates;
    pointOffset(flot$point: flot$point): flot$offset;
    resize(): void;
    shutdown(): void;
    getData(): flot$dataSeries[];
    getAxes(): flot$axes;
    getXAxes(): flot$axis[];
    getYAxes(): flot$axis[];
    getPlaceholder(): JQuery;
    getCanvas(): HTMLCanvasElement;
    getPlotOffset(): flot$canvasPoint;
    getOptions(): flot$plotOptions;
  }

  declare interface flot$plotStatic {
    (
      placeholder: JQuery,
      data: flot$dataSeries[],
      options?: flot$plotOptions
    ): flot$plot;
    (placeholder: JQuery, data: any[], options?: flot$plotOptions): flot$plot;
    plugins: flot$plugin[];
  }
  declare interface JQueryStatic {
    flot$plot: jquery$flot.flot$plotStatic;
  }
}
