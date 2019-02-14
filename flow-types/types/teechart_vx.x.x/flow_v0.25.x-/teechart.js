declare module "teechart" {
  declare var npm$namespace$Tee: {
    Line: typeof Tee$Line,
    PointXY: typeof Tee$PointXY,
    Area: typeof Tee$Area,
    HorizArea: typeof Tee$HorizArea,
    Bar: typeof Tee$Bar,
    HorizBar: typeof Tee$HorizBar,
    Pie: typeof Tee$Pie,
    Donut: typeof Tee$Donut,
    Bubble: typeof Tee$Bubble,
    Gantt: typeof Tee$Gantt,
    Volume: typeof Tee$Volume,
    Candle: typeof Tee$Candle,
    CursorTool: typeof Tee$CursorTool,
    DragTool: typeof Tee$DragTool,
    ToolTip: typeof Tee$ToolTip,

    Point: typeof Tee$Point,
    Chart: typeof Tee$Chart
  };
  declare interface Tee$IPoint {
    x: number;
    y: number;
  }

  declare interface Tee$IRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    contains(point: Tee$IPoint): boolean;
  }

  declare interface Tee$ITool {
    active: boolean;
    chart: Tee$IChart;
    mousedown(event: any): boolean;
    mousemove(event: any): boolean;
    clicked(p: Tee$IPoint): boolean;
    draw(): void;
  }

  declare interface Tee$IGradient {
    chart: Tee$IChart;
    visible: boolean;
    colors: string[];
    direction: string;
    stops: number[];
    offset: Tee$IPoint;
  }

  declare interface Tee$IShadow {
    chart: Tee$IChart;
    visible: boolean;
    blur: number;
    color: string;
    width: number;
    height: number;
  }

  declare interface Tee$IStroke {
    chart: Tee$IChart;
    fill: string;
    size: number;
    join: string;
    cap: string;
    dash: number[];
    gradient: Tee$IGradient;
  }

  declare interface Tee$IFont {
    chart: Tee$IChart;
    style: string;
    gradient: Tee$IGradient;
    fill: string;
    stroke: Tee$IStroke;
    shadow: Tee$IShadow;
    textAlign: string;
    baseLine: string;
    getSize(): number;
    setSize(size: number): void;
  }

  declare interface Tee$IImage {
    url: string;
    chart: Tee$IChart;
    visible: boolean;
  }

  declare interface Tee$IFormat {
    font: Tee$IFont;
    gradient: Tee$IGradient;
    shadow: Tee$IShadow;
    stroke: Tee$IStroke;
    round: Tee$IPoint;
    transparency: number;
    image: Tee$IImage;
    fill: string;
    textHeight(text: string): number;
    textWidth(text: string): number;
    drawText(bounds: Tee$IRectangle, text: string): any;
    rectangle(x: number, y: number, width: number, height: number): any;
    poligon(points: Tee$IPoint[]): any;
    ellipse(x: number, y: number, width: number, height: number): any;
  }

  declare interface Tee$IMargins {
    left: number;
    top: number;
    right: number;
    bottom: number;
  }

  declare type Tee$IAnnotation = {
    position: Tee$IPoint,
    margins: Tee$IMargins,
    items: Tee$IAnnotation[],
    bounds: Tee$IRectangle,
    visible: boolean,
    transparent: boolean,
    text: string,
    format: Tee$IFormat,
    add(text: string): Tee$IAnnotation,
    resize(): void,
    clicked(point: Tee$IPoint): boolean,
    draw(): void
  } & ITool;

  declare interface Tee$IPanel {
    format: Tee$IFormat;
    transparent: boolean;
    margins: Tee$IMargins;
  }

  declare type Tee$ITitle = {
    expand: boolean,
    padding: number,
    transparent: boolean
  } & IAnnotation;

  declare interface Tee$IPalette {
    colors: string[];
    get(index: number): string;
  }

  declare type Tee$IArrow = {
    length: number,
    underline: boolean
  } & IFormat;

  declare type Tee$IMarks = {
    arrow: Tee$IArrow,
    series: Tee$ISeries,
    style: string,
    drawEvery: number,
    visible: boolean
  } & IAnnotation;

  declare interface Tee$ISeriesData {
    values: number[];
    labels: string[];
    source: any;
  }

  declare interface Tee$ICursor {
    cursor: string;
  }

  declare interface Tee$ISeriesNoBounds {
    data: Tee$ISeriesData;
    marks: Tee$IMarks;
    yMandatory: boolean;
    horizAxis: string;
    vertAxis: string;
    format: Tee$IFormat;
    hover: Tee$IFormat;
    visible: boolean;
    cursor: Tee$ICursor;
    over: number;
    palette: Tee$IPalette;
    colorEach: string;
    useAxes: boolean;
    decimals: number;
    title: string;
    toPercent(index: number): string;
    markText(index: number): string;
    valueText(index: number): string;
    associatedToAxis(axis: Tee$IAxis): boolean;
    calc(index: number, position: Tee$IPoint): void;
    clicked(position: Tee$IPoint): number;
    minXValue(): number;
    maxXValue(): number;
    minYValue(): number;
    maxYValue(): number;
    count(): number;
    addRandom(count: number, range?: number, x?: boolean): Tee$ISeries;
  }

  declare type Tee$ISeries = {
    bounds(rectangle: Tee$IRectangle): void
  } & ISeriesNoBounds;

  declare interface Tee$IAxisLabels {
    chart: Tee$IChart;
    format: Tee$IFormat;
    decimals: number;
    padding: number;
    separation: number;
    visible: boolean;
    rotation: number;
    alternate: boolean;
    maxWidth: number;
    labelStyle: string;
    dateFormat: string;
    getLabel(value: number): string;
    width(value: number): number;
  }

  declare interface Tee$IGrid {
    chart: Tee$IChart;
    format: Tee$IFormat;
    visible: boolean;
    lineDash: boolean;
  }

  declare interface Tee$ITicks {
    chart: Tee$IChart;
    stroke: Tee$IStroke;
    visible: boolean;
    length: number;
  }

  declare type Tee$IMinorTicks = {
    count: number
  } & ITicks;

  declare type Tee$IAxisTitle = {
    padding: number,
    transparent: boolean
  } & IAnnotation;

  declare interface Tee$IAxis {
    chart: Tee$IChart;
    visible: boolean;
    inverted: boolean;
    horizontal: boolean;
    otherSize: boolean;
    bounds: Tee$IRectangle;
    position: number;
    format: Tee$IFormat;
    custom: boolean;
    grid: Tee$IGrid;
    labels: Tee$IAxisLabels;
    ticks: Tee$ITicks;
    minorTicks: Tee$IMinorTicks;
    innerTicks: Tee$ITicks;
    title: Tee$IAxisTitle;
    automatic: boolean;
    minimum: number;
    maximum: number;
    increment: number;
    log: boolean;
    startPos: number;
    endPos: number;
    start: number;
    end: number;
    axisSize: number;
    scale: number;
    increm: number;
    calc(value: number): number;
    fromPos(position: number): number;
    fromSize(size: number): number;
    hasAnySeries(): boolean;
    scroll(delta: number): void;
    setMinMax(minimum: number, maximum: number): void;
  }

  declare interface Tee$IAxes {
    chart: Tee$IChart;
    visible: boolean;
    left: Tee$IAxis;
    top: Tee$IAxis;
    right: Tee$IAxis;
    bottom: Tee$IAxis;
    items: Tee$IAxis[];
    add(horizontal: boolean, otherSide: boolean): Tee$IAxis;
  }

  declare interface Tee$ISymbol {
    chart: Tee$IChart;
    format: Tee$IFormat;
    width: number;
    height: number;
    padding: number;
    visible: boolean;
  }

  declare interface Tee$ILegend {
    chart: Tee$IChart;
    transparent: boolean;
    format: Tee$IFormat;
    title: Tee$IAnnotation;
    bounds: Tee$IRectangle;
    position: string;
    visible: boolean;
    inverted: boolean;
    padding: number;
    align: number;
    fontColor: boolean;
    dividing: Tee$IStroke;
    over: number;
    symbol: Tee$ISymbol;
    itemHeight: number;
    innerOff: number;
    legendStyle: string;
    textStyle: string;
    availRows(): number;
    itemsCount(): number;
    totalWidth(): number;
    showValues(): boolean;
    itemText(series: Tee$ISeries, index: number): string;
    isVertical(): boolean;
  }

  declare interface Tee$IScroll {
    chart: Tee$IChart;
    active: boolean;
    enabled: boolean;
    direction: string;
    mouseButton: number;
    position: Tee$IPoint;
  }

  declare interface Tee$ISeriesList {
    chart: Tee$IChart;
    items: Tee$ISeries[];
    anyUsesAxes(): boolean;
    clicked(position: Tee$IPoint): boolean;
    firstVisible(): Tee$ISeries;
  }

  declare interface Tee$ITools {
    chart: Tee$IChart;
    items: Tee$ITool[];
    add(tool: Tee$ITool): Tee$ITool;
  }

  declare interface Tee$IWall {
    format: Tee$IFormat;
    visible: boolean;
    bounds: Tee$IRectangle;
  }

  declare interface Tee$IWalls {
    visible: boolean;
    left: Tee$IWall;
    right: Tee$IWall;
    bottom: Tee$IWall;
    back: Tee$IWall;
  }

  declare interface Tee$IZoom {
    chart: Tee$IChart;
    active: boolean;
    direction: string;
    enabled: boolean;
    mouseButton: number;
    format: Tee$IFormat;
    reset(): void;
  }

  declare interface Tee$IChart {
    addSeries(series: Tee$ISeries): Tee$ISeries;
    draw(context?: CanvasRenderingContext2D): any;
  }

  declare type Tee$ICustomBar = {
    sideMargins: number,
    useOrigin: boolean,
    origin: number,
    offset: number,
    barSize: number,
    barStyle: string,
    stacked: string
  } & ISeries;

  declare interface Tee$ISeriesPointer {
    chart: Tee$IChart;
    format: Tee$IFormat;
    visible: boolean;
    colorEach: boolean;
    style: string;
    width: number;
    height: number;
  }

  declare type Tee$ICustomSeries = {
    pointer: Tee$ISeriesPointer,
    stacked: string,
    stairs: boolean
  } & ISeries;

  declare type Tee$ILine = {
    smooth: number
  } & ICustomSeries;

  declare type Tee$ISmoothLine = {
    smooth: number
  } & ILine;

  declare type Tee$IArea = {
    useOrigin: boolean,
    origin: number
  } & ISeries;

  declare type Tee$IPie = {
    donut: number,
    rotation: number,
    sort: string,
    orderAscending: boolean,
    explode: number[],
    concentric: boolean,
    calcPos(angle: number, position: Tee$IPoint): void
  } & ISeries;

  declare type Tee$IBubbleData = {
    radius: number[]
  } & ISeriesData;

  declare type Tee$IBubble = {
    data: Tee$IBubbleData
  } & ICustomSeries;

  declare type Tee$IGanttData = {
    start: number[],
    x: number[],
    end: number[]
  } & ISeriesData;

  declare type Tee$IGantt = {
    data: Tee$IGanttData,
    dateFormat: string,
    colorEach: string,
    height: number,
    margin: Tee$IPoint,
    add(index: number, label: string, start: number, end: number): void,
    bounds(index: number, rectangle: Tee$IRectangle): void
  } & ISeriesNoBounds;

  declare type Tee$ICandleData = {
    open: number[],
    close: number[],
    high: number[],
    low: number[]
  } & ISeriesData;

  declare type Tee$ICandle = {
    data: Tee$ICandleData,
    higher: Tee$IFormat,
    lower: Tee$IFormat,
    style: string
  } & ICustomSeries;

  declare type Tee$IDragTool = {
    series: Tee$ISeries
  } & ITool;

  declare type Tee$ICursorTool = {
    direction: string,
    size: Tee$IPoint,
    followMouse: boolean,
    dragging: number,
    format: Tee$IFormat,
    horizAxis: Tee$IAxis,
    vertAxis: Tee$IAxis,
    render: string,
    over(point: Tee$IPoint): boolean,
    setRender(render: string): void
  } & ITool;

  declare type Tee$IToolTip = {
    animated: number,
    autoHide: boolean,
    autoRedraw: boolean,
    currentSeries: Tee$ISeries,
    currentIndex: number,
    delay: number,
    hide(): void,
    refresh(series: Tee$ISeries, index: number): void
  } & IAnnotation;

  declare class Tee$Point mixins IPoint {
    x: number;
    y: number;
  }

  declare class Tee$Chart mixins IChart {
    axes: Tee$IAxes;
    footer: Tee$ITitle;
    legend: Tee$ILegend;
    panel: Tee$IPanel;
    scroll: Tee$IScroll;
    series: Tee$ISeriesList;
    title: Tee$ITitle;
    tools: Tee$ITools;
    walls: Tee$IWalls;
    zoom: Tee$IZoom;
    bounds: Tee$IRectangle;
    canvas: HTMLCanvasElement;
    chartRect: Tee$IRectangle;
    palette: Tee$IPalette;
    constructor(canvas: string): this;
    addSeries(series: Tee$ISeries): Tee$ISeries;
    getSeries(index: number): Tee$ISeries;
    removeSeries(series: Tee$ISeries): void;
    draw(context?: CanvasRenderingContext2D): any;
    toImage(image: HTMLImageElement, format: string, quality: number): void;
  }

  declare var Tee$Line: {
    prototype: Tee$ILine,
    new(values?: number[]): Tee$ILine
  };

  declare var Tee$PointXY: {
    prototype: Tee$ICustomSeries,
    new(values?: number[]): Tee$ICustomSeries
  };

  declare var Tee$Area: {
    prototype: Tee$IArea,
    new(values?: number[]): Tee$IArea
  };

  declare var Tee$HorizArea: {
    prototype: Tee$IArea,
    new(values?: number[]): Tee$IArea
  };

  declare var Tee$Bar: {
    prototype: Tee$ICustomBar,
    new(values?: number[]): Tee$ICustomBar
  };

  declare var Tee$HorizBar: {
    prototype: Tee$ICustomBar,
    new(values?: number[]): Tee$ICustomBar
  };

  declare var Tee$Pie: {
    prototype: Tee$IPie,
    new(values?: number[]): Tee$IPie
  };

  declare var Tee$Donut: {
    prototype: Tee$IPie,
    new(values?: number[]): Tee$IPie
  };

  declare var Tee$Bubble: {
    prototype: Tee$IBubble,
    new(values?: number[]): Tee$IBubble
  };

  declare var Tee$Gantt: {
    prototype: Tee$IGantt,
    new(values?: number[]): Tee$IGantt
  };

  declare var Tee$Volume: {
    prototype: Tee$ICustomBar,
    new(values?: number[]): Tee$ICustomBar
  };

  declare var Tee$Candle: {
    prototype: Tee$ICandle,
    new(values?: number[]): Tee$ICandle
  };

  declare var Tee$CursorTool: {
    prototype: Tee$ICursorTool,
    new(chart?: Tee$Chart): Tee$ICursorTool
  };

  declare var Tee$DragTool: {
    prototype: Tee$IDragTool,
    new(chart?: Tee$Chart): Tee$IDragTool
  };

  declare var Tee$ToolTip: {
    prototype: Tee$IToolTip,
    new(chart?: Tee$Chart): Tee$IToolTip
  };
}
