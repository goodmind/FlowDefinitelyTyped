declare module "recharts" {
  import typeof * as React from "react";

  import type {
    getTickValues,
    getNiceTickValues,
    getTickValuesFixedDomain
  } from "recharts-scale";

  import type { CurveFactory } from "d3-shape";

  declare export type Percentage = string;
  declare export type RechartsFunction = (...args: any[]) => void;
  declare export type LegendValueFormatter = (
    value?: $PropertyType<LegendPayload, "value">,
    entry?: LegendPayload,
    i?: number
  ) => any;
  declare export type TickFormatterFunction = (value: any) => any;
  declare export type TickGeneratorFunction = (noTicksProps: {
    [key: string]: any
  }) => any[];
  declare export type LabelFormatter = (label: string | number) => React.Node;
  declare export type TooltipFormatter = (
    value: string | number | Array<string | number>,
    name: string,
    entry: TooltipPayload,
    index: number
  ) => React.Node;
  declare export type ItemSorter<T> = (a: T, b: T) => number;
  declare export type ContentRenderer<P> = (props: P) => React.Node;
  declare export type DataKey =
    | string
    | number
    | ((dataObject: any) => number | [number, number] | null);
  declare export type IconType =
    | "plainline"
    | "line"
    | "square"
    | "rect"
    | "circle"
    | "cross"
    | "diamond"
    | "star"
    | "triangle"
    | "wye"
    | "plainline";
  declare export type LegendType = IconType | "none";
  declare export type LayoutType = "horizontal" | "vertical";
  declare export type AnimationEasingType =
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "linear";
  declare export type ScaleType =
    | "auto"
    | "linear"
    | "pow"
    | "sqrt"
    | "log"
    | "identity"
    | "time"
    | "band"
    | "point"
    | "ordinal"
    | "quantile"
    | "quantize"
    | "utcTime"
    | "sequential"
    | "threshold";
  declare export type PositionType =
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "inside"
    | "outside"
    | "insideLeft"
    | "insideRight"
    | "insideTop"
    | "insideBottom"
    | "insideTopLeft"
    | "insideBottomLeft"
    | "insideTopRight"
    | "insideBottomRight"
    | "insideStart"
    | "insideEnd"
    | "end"
    | "center";
  declare export type StackOffsetType =
    | "sign"
    | "expand"
    | "none"
    | "wiggle"
    | "silhouette";
  declare export type LineType =
    | "basis"
    | "basisClosed"
    | "basisOpen"
    | "linear"
    | "linearClosed"
    | "natural"
    | "monotoneX"
    | "monotoneY"
    | "monotone"
    | "step"
    | "stepBefore"
    | "stepAfter"
    | CurveFactory;
  declare export type IfOverflowType =
    | "hidden"
    | "visible"
    | "discard"
    | "extendDomain";
  declare export type AxisInterval =
    | number
    | "preserveStart"
    | "preserveEnd"
    | "preserveStartEnd";
  declare export type PickedCSSStyleDeclarationKeys =
    | "alignmentBaseline"
    | "baselineShift"
    | "clip"
    | "clipPath"
    | "clipRule"
    | "color"
    | "colorInterpolationFilters"
    | "cursor"
    | "direction"
    | "display"
    | "dominantBaseline"
    | "enableBackground"
    | "fill"
    | "fillRule"
    | "filter"
    | "floodColor"
    | "floodOpacity"
    | "font"
    | "fontFamily"
    | "fontStretch"
    | "fontStyle"
    | "fontVariant"
    | "glyphOrientationHorizontal"
    | "glyphOrientationVertical"
    | "letterSpacing"
    | "lightingColor"
    | "markerEnd"
    | "markerMid"
    | "markerStart"
    | "mask"
    | "overflow"
    | "pointerEvents"
    | "stopColor"
    | "strokeDasharray"
    | "strokeLinecap"
    | "strokeLinejoin"
    | "textAnchor"
    | "textDecoration"
    | "unicodeBidi"
    | "visibility"
    | "writingMode"
    | "transform";
  declare export interface Point {
    x: number;
    y: number;
    value: number | any[];
  }
  declare export interface Margin {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }
  declare export interface Animatable {
    onAnimationStart?: RechartsFunction;
    onAnimationEnd?: RechartsFunction;
    animationId?: number;
    isAnimationActive?: boolean;
    isUpdateAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationEasingType;
  }
  declare export interface CategoricalChartWrapper<L = LayoutType> {
    syncId?: string | number;
    compact?: boolean;
    width?: number;
    height?: number;
    data?: { [key: string]: any }[];
    layout?: L;
    stackOffset?: StackOffsetType;
    throttleDelay?: number;
    margin?: $Shape<Margin>;
    barCategoryGap?: number | string;
    barGap?: number | string;
    barSize?: number | string;
    maxBarSize?: number;
    style?: { [key: string]: any };
    className?: string;
    children?: React.Node | React.Node[];
    onClick?: RechartsFunction;
    onMouseLeave?: RechartsFunction;
    onMouseEnter?: RechartsFunction;
    onMouseMove?: RechartsFunction;
    onMouseDown?: RechartsFunction;
    onMouseUp?: RechartsFunction;
    reverseStackOrder?: boolean;
  }
  declare export interface EventAttributes {
    onClick?: RechartsFunction;
    onMouseDown?: RechartsFunction;
    onMouseUp?: RechartsFunction;
    onMouseOver?: RechartsFunction;
    onMouseMove?: RechartsFunction;
    onMouseOut?: RechartsFunction;
    onMouseEnter?: RechartsFunction;
    onMouseLeave?: RechartsFunction;
    onTouchEnd?: RechartsFunction;
    onTouchMove?: RechartsFunction;
    onTouchStart?: RechartsFunction;
    onTouchCancel?: RechartsFunction;
  }
  declare export type PresentationAttributes<X = number, Y = number> = {
    angle: number,
    colorInterpolation: string,
    colorProfile: string,
    colorRendering: string,
    fill: string,
    fillOpacity: number | string,
    fontSize: number | string,
    fontSizeAdjust: number | string,
    fontWeight:
      | "normal"
      | "bold"
      | "bolder"
      | "lighter"
      | 100
      | 200
      | 300
      | 400
      | 500
      | 600
      | 700
      | 800
      | 900
      | "inherit",
    imageRendering: "auto" | "optimizeSpeed" | "optimizeQuality" | "inherit",
    kerning: number | string,
    opacity: number | string,
    shapeRendering:
      | "auto"
      | "optimizeSpeed"
      | "crispEdges"
      | "geometricPrecision"
      | "inherit",
    stopOpacity: number | string,
    stroke: number | string,
    strokeDashoffset: number | string,
    strokeMiterlimit: number | string,
    strokeOpacity: number | string,
    strokeWidth: number | string,
    textRendering:
      | "auto"
      | "optimizeSpeed"
      | "optimizeLegibility"
      | "geometricPrecision"
      | "inherit",
    wordSpacing: number | string,
    style: { [key: string]: any },
    width: number,
    height: number,
    dx: number,
    dy: number,
    x: X,
    y: Y,
    r: number
  } & Pick<CSSStyleDeclaration, PickedCSSStyleDeclarationKeys>;

  declare export type AreaProps = {
    dataKey: DataKey,
    className?: string,
    type?: LineType,
    unit?: string | number,
    name?: string | number,
    xAxisId?: string | number,
    yAxisId?: string | number,
    xAxis?: { [key: string]: any },
    yAxis?: { [key: string]: any },
    stackId?: string | number,
    legendType?: LegendType,
    connectNulls?: boolean,
    activeDot?:
      | boolean
      | { [key: string]: any }
      | React.ReactElement<any>
      | ContentRenderer<any>,
    dot?:
      | boolean
      | { [key: string]: any }
      | React.ReactElement<any>
      | ContentRenderer<DotProps>,
    label?:
      | boolean
      | { [key: string]: any }
      | ContentRenderer<any>
      | React.ReactElement<any>,
    hide?: boolean,
    layout?: LayoutType,
    baseLine?: number | any[],
    isRange?: boolean,
    points?: Point[]
  } & EventAttributes &
    $Shape<PresentationAttributes<>> &
    Animatable;

  declare export class Area mixins React.Component<AreaProps> {}
  declare export type AreaChartProps = CategoricalChartWrapper<> &
    EventAttributes;
  declare export class AreaChart mixins React.Component<AreaChartProps> {}
  declare export interface BarData {
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number | any[];
    value: number | string | any[];
  }
  declare export type BarProps = {
    dataKey: DataKey,
    className?: string,
    fill?: string,
    layout?: LayoutType,
    xAxisId?: string | number,
    yAxisId?: string | number,
    yAxis?: { [key: string]: any },
    xAxis?: { [key: string]: any },
    stackId?: string | number,
    barSize?: number,
    unit?: string | number,
    name?: string | number,
    legendType?: LegendType,
    minPointSize?: number,
    maxBarSize?: number,
    hide?: boolean,
    shape?: React.ReactElement<any> | ContentRenderer<RectangleProps>,
    data?: BarData[],
    background?:
      | boolean
      | React.ReactElement<any>
      | ContentRenderer<any>
      | { [key: string]: any },
    label?:
      | boolean
      | Label
      | React.SFC<LabelProps>
      | React.ReactElement<LabelProps>
      | ContentRenderer<any>
  } & EventAttributes &
    $Shape<PresentationAttributes<>> &
    Animatable;

  declare export class Bar mixins React.Component<BarProps> {}
  declare export type BarChartProps = CategoricalChartWrapper<> &
    EventAttributes;
  declare export class BarChart mixins React.Component<BarChartProps> {}
  declare export interface BrushProps {
    className?: string;
    fill?: string;
    stroke?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    travellerWidth?: number;
    padding?: $Shape<Margin>;
    dataKey?: DataKey;
    data?: any[];
    startIndex?: number;
    endIndex?: number;
    tickFormatter?: TickFormatterFunction;
    children?: React.Node;
    onChange?: RechartsFunction;
    updateId?: string | number;
  }
  declare export class Brush mixins React.Component<BrushProps> {}
  declare export type CartesianAxisProps = {
    className?: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    orientation?: "top" | "bottom" | "left" | "right",
    viewBox?: ViewBox,
    tick?:
      | boolean
      | ContentRenderer<any>
      | { [key: string]: any }
      | React.ReactElement<any>,
    axisLine?: boolean | { [key: string]: any },
    tickLine?: boolean | { [key: string]: any },
    mirror?: boolean,
    minTickGap?: number,
    ticks?: any[],
    tickSize?: number,
    stroke?: string,
    tickFormatter?: TickFormatterFunction,
    ticksGenerator?: TickGeneratorFunction,
    interval?: AxisInterval
  } & EventAttributes &
    $Shape<PresentationAttributes<>>;

  declare export class CartesianAxis
    mixins React.Component<CartesianAxisProps> {}
  declare export type CoordinatesGenerator = (arg: {
    yAxis: $PropertyType<CartesianGridProps, "yAxis">,
    width: $PropertyType<CartesianGridProps, "chartWidth">,
    height: $PropertyType<CartesianGridProps, "chartHeight">,
    offset: $PropertyType<CartesianGridProps, "offset">
  }) => number[];
  declare export type CartesianGridProps = {
    y?: number,
    width?: number,
    height?: number,
    horizontal?:
      | { [key: string]: any }
      | React.ReactElement<any>
      | ContentRenderer<LineProps & CartesianGridProps>
      | boolean,
    vertical?:
      | { [key: string]: any }
      | React.ReactElement<any>
      | ContentRenderer<LineProps & CartesianGridProps>
      | boolean,
    horizontalPoints?: number[],
    verticalPoints?: number[],
    horizontalCoordinatesGenerator?: CoordinatesGenerator,
    verticalCoordinatesGenerator?: CoordinatesGenerator,
    xAxis?: { [key: string]: any },
    yAxis?: { [key: string]: any },
    offset?: { [key: string]: any },
    chartWidth?: number,
    chartHeight?: number,
    horizontalFill?: string[],
    verticalFill?: string[]
  } & $Shape<PresentationAttributes<>>;

  declare export class CartesianGrid
    mixins React.Component<CartesianGridProps> {}
  declare export type CellProps = {
    onClick?: RechartsFunction
  } & $Shape<PresentationAttributes<>>;

  declare export class Cell mixins React.Component<CellProps> {}
  declare export type ComposedChartProps = CategoricalChartWrapper<> &
    EventAttributes;
  declare export class ComposedChart
    mixins React.Component<ComposedChartProps> {}
  declare export type CrossProps = {
    className?: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    top?: number,
    left?: number
  } & $Shape<PresentationAttributes<>>;

  declare export class Cross mixins React.Component<CrossProps> {}
  declare export type CurveProps = {
    className?: string,
    type?: LineType,
    layout?: LayoutType,
    baseLine?: number | any[],
    points?: { [key: string]: any }[],
    connectNulls?: boolean,
    path?: string,
    pathRef?: React.Ref<any>
  } & EventAttributes &
    $Shape<PresentationAttributes<>>;

  declare export class Curve mixins React.Component<CurveProps> {}
  declare export type DotProps = {
    className?: string,
    cx?: number,
    cy?: number,
    r?: number
  } & EventAttributes;

  declare export class Dot mixins React.Component<DotProps> {}
  declare export type DataPointFormatter = (
    entry: any,
    dataKey: DataKey
  ) => {
    x: number,
    y: number,
    value: any,
    errorVal: any
  };
  declare export interface ErrorBarProps {
    dataKey: DataKey;
    data?: any[];
    xAxis?: { [key: string]: any };
    yAxis?: { [key: string]: any };
    layout?: string;
    dataPointFormatter?: DataPointFormatter;
    stroke?: string;
    strokeWidth?: number;
    width?: number;
    offset?: number;
  }
  declare export class ErrorBar mixins React.Component<ErrorBarProps> {}
  declare export interface LegendPayload {
    value: any;
    id: any;
    type: LegendType;
    color?: string;
  }
  declare export type BBoxUpdateCallback = (box: {
    width: number,
    height: number
  }) => void;
  declare export interface LegendProps {
    content?: React.ReactElement<any> | ContentRenderer<LegendProps>;
    wrapperStyle?: { [key: string]: any };
    chartWidth?: number;
    chartHeight?: number;
    width?: number;
    height?: number;
    iconSize?: number;
    iconType?: IconType;
    layout?: LayoutType;
    align?: "left" | "center" | "right";
    verticalAlign?: "top" | "middle" | "bottom";
    margin?: $Shape<Margin>;
    payload?: LegendPayload[];
    formatter?: LegendValueFormatter;
    onClick?: RechartsFunction;
    onMouseEnter?: RechartsFunction;
    onMouseLeave?: RechartsFunction;
    onBBoxUpdate?: BBoxUpdateCallback;
  }
  declare export class Legend mixins React.Component<LegendProps> {}
  declare export type LineProps = {
    className?: string,
    type?: LineType,
    unit?: string | number,
    name?: string | number,
    xAxisId?: string | number,
    yAxisId?: string | number,
    yAxis?: { [key: string]: any },
    xAxis?: { [key: string]: any },
    legendType?: LegendType,
    layout?: LayoutType,
    connectNulls?: boolean,
    hide?: boolean,
    activeDot?:
      | { [key: string]: any }
      | React.ReactElement<any>
      | ContentRenderer<any>
      | boolean,
    dot?:
      | { [key: string]: any }
      | React.ReactElement<any>
      | ContentRenderer<DotProps>
      | boolean,
    top?: number,
    left?: number,
    width?: number,
    height?: number,
    data?: { [key: string]: any }[],
    dataKey: DataKey,
    label?:
      | boolean
      | { [key: string]: any }
      | React.ReactElement<any>
      | ContentRenderer<any>,
    points?: Point[]
  } & EventAttributes &
    $Shape<PresentationAttributes<>> &
    Animatable;

  declare export class Line mixins React.Component<LineProps> {}
  declare export type LineChartProps = CategoricalChartWrapper<> &
    EventAttributes;
  declare export class LineChart mixins React.Component<LineChartProps> {}
  declare export type PieProps = {
    className?: string,
    dataKey: DataKey,
    cx?: number | string,
    cy?: number | string,
    startAngle?: number,
    endAngle?: number,
    midAngle?: number,
    paddingAngle?: number,
    innerRadius?: number | string,
    outerRadius?: number | string,
    cornerRadius?: number | string,
    nameKey?: string | number | ((dataObject: any) => number),
    valueKey?: string | number | ((dataObject: any) => number),
    data?: { [key: string]: any }[],
    minAngle?: number,
    legendType?: LegendType,
    maxRadius?: number,
    sectors?: { [key: string]: any }[],
    hide?: boolean,
    labelLine?:
      | { [key: string]: any }
      | ContentRenderer<LineProps & any>
      | React.ReactElement<any>
      | boolean,
    label?:
      | {
          offsetRadius: number
        }
      | React.ReactElement<any>
      | ContentRenderer<PieLabelRenderProps>
      | boolean,
    activeShape?:
      | { [key: string]: any }
      | ContentRenderer<any>
      | React.ReactElement<any>,
    activeIndex?: number | number[],
    blendStroke?: boolean
  } & EventAttributes &
    $Shape<PresentationAttributes<>> &
    Animatable;

  declare export type PieLabelRenderProps = {
    name: string,
    percent?: number,
    stroke: string,
    index?: number,
    textAnchor: string,
    x: number,
    y: number,
    [key: string]: any
  } & PieProps;

  declare export class Pie mixins React.Component<PieProps> {}
  declare export type PieChartProps = {
    startAngle?: number,
    endAngle?: number,
    cx?: number | string,
    cy?: number | string,
    innerRadius?: number | string,
    outerRadius?: number | string
  } & EventAttributes &
    CategoricalChartWrapper<"centric">;

  declare export class PieChart mixins React.Component<PieChartProps> {}
  declare export interface PolarAngleAxisTick {
    value: any;
    coordinate: number;
  }
  declare export type PolarAngleAxisProps = {
    type?: "number" | "category",
    angleAxisId?: string | number,
    dataKey?: DataKey,
    cx?: number,
    cy?: number,
    radius?: Percentage | number,
    hide?: boolean,
    scale?: ScaleType | RechartsFunction,
    axisLine?: boolean | { [key: string]: any },
    axisLineType?: "polygon" | "circle",
    tickLine?: boolean | { [key: string]: any },
    tick?:
      | boolean
      | ContentRenderer<any>
      | { [key: string]: any }
      | React.ReactElement<any>,
    ticks?: PolarAngleAxisTick[],
    stroke?: string,
    orientation?: "inner" | "outer",
    tickFormatter?: TickFormatterFunction
  } & EventAttributes &
    $Shape<PresentationAttributes<>>;

  declare export class PolarAngleAxis
    mixins React.Component<PolarAngleAxisProps> {}
  declare export type PolarGridProps = {
    cx?: number,
    cy?: number,
    innerRadius?: number,
    outerRadius?: number,
    polarAngles?: number[],
    polarRadius?: number[],
    gridType?: "polygon" | "circle"
  } & $Shape<PresentationAttributes<>>;

  declare export class PolarGrid mixins React.Component<PolarGridProps> {}
  declare export interface PolarRadiusAxisTick {
    value: any;
    coordinate: number;
  }
  declare export type PolarRadiusAxisDomain =
    | number
    | "auto"
    | "dataMin"
    | "dataMax";
  declare export type PolarRadiusAxisProps = {
    type?: "number" | "category",
    cx?: number,
    cy?: number,
    hide?: boolean,
    radiusAxisId?: string | number,
    angle?: number,
    tickCount?: number,
    ticks?: PolarRadiusAxisTick[],
    orientation?: "left" | "right" | "middle",
    axisLine?: boolean | { [key: string]: any },
    tick?:
      | boolean
      | { [key: string]: any }
      | React.ReactElement<any>
      | ContentRenderer<any>,
    stroke?: string,
    tickFormatter?: TickFormatterFunction,
    domain?: [PolarRadiusAxisDomain, PolarRadiusAxisDomain],
    scale?: ScaleType | RechartsFunction,
    allowDataOverflow?: boolean
  } & EventAttributes &
    $Shape<PresentationAttributes<>>;

  declare export class PolarRadiusAxis
    mixins React.Component<PolarRadiusAxisProps> {}
  declare export interface PolygonPoint {
    x: number;
    y: number;
  }
  declare export type PolygonProps = {
    className?: string,
    points?: PolygonPoint[]
  } & EventAttributes &
    $Shape<PresentationAttributes<>>;

  declare export class Polygon mixins React.Component<PolygonProps> {}
  declare export interface RadarPoint {
    x: number;
    y: number;
    cx: number;
    cy: number;
    angle: number;
    radius: number;
    value: number;
    payload: { [key: string]: any };
  }
  declare export type RadarProps = {
    className?: string,
    dataKey: DataKey,
    points?: RadarPoint[],
    shape?: React.ReactElement<any> | ContentRenderer<RadarProps>,
    activeDot?:
      | { [key: string]: any }
      | React.ReactElement<any>
      | ContentRenderer<any>
      | boolean,
    dot?:
      | { [key: string]: any }
      | React.ReactElement<any>
      | ContentRenderer<DotProps>
      | boolean,
    label?:
      | { [key: string]: any }
      | React.ReactElement<any>
      | ContentRenderer<any>
      | boolean,
    legendType?: LegendType,
    hide?: boolean
  } & EventAttributes &
    $Shape<PresentationAttributes<>> &
    Animatable;

  declare export class Radar mixins React.Component<RadarProps> {}
  declare export type RadarChartProps = {
    startAngle?: number,
    endAngle?: number,
    cx?: number | string,
    cy?: number | string,
    innerRadius?: number | string,
    outerRadius?: number | string
  } & EventAttributes &
    CategoricalChartWrapper<"centric">;

  declare export class RadarChart mixins React.Component<RadarChartProps> {}
  declare export interface RadialBarData {
    cx: number;
    cy: number;
    innerRadius: number;
    outerRadius: number;
    value: any;
  }
  declare export type RadialBarProps = {
    className?: string,
    dataKey: DataKey,
    angleAxisId?: string | number,
    radiusAxisId?: string | number,
    shape?: ContentRenderer<any> | React.ReactElement<any>,
    activeShape?:
      | { [key: string]: any }
      | ContentRenderer<any>
      | React.ReactElement<any>,
    cornerRadius?: number | string,
    minPointSize?: number,
    maxBarSize?: number,
    data?: RadialBarData[],
    legendType?: LegendType,
    label?:
      | boolean
      | React.ReactElement<any>
      | ContentRenderer<any>
      | { [key: string]: any },
    background?:
      | boolean
      | React.ReactElement<any>
      | ContentRenderer<any>
      | { [key: string]: any },
    hide?: boolean
  } & EventAttributes &
    $Shape<PresentationAttributes<>> &
    Animatable;

  declare export class RadialBar mixins React.Component<RadialBarProps> {}
  declare export type RadialBarChartProps = {
    startAngle?: number,
    endAngle?: number,
    cx?: string | number,
    cy?: string | number,
    innerRadius?: string | number,
    outerRadius?: string | number
  } & CategoricalChartWrapper<"radial">;

  declare export class RadialBarChart
    mixins React.Component<RadialBarChartProps> {}
  declare export type RectangleProps = {
    className?: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    radius?: number | any[]
  } & EventAttributes &
    $Shape<PresentationAttributes<>> &
    Animatable;

  declare export class Rectangle mixins React.Component<RectangleProps> {}
  declare export type ReferenceAreaProps = {
    className?: number | string,
    viewBox?: ViewBox,
    xAxis?: { [key: string]: any },
    yAxis?: { [key: string]: any },
    isFront?: boolean,
    alwaysShow?: boolean,
    ifOverflow?: IfOverflowType,
    x1?: number | string,
    x2?: number | string,
    y1?: number | string,
    y2?: number | string,
    xAxisId?: string | number,
    yAxisId?: string | number,
    shape?:
      | ContentRenderer<ReferenceAreaProps & RectangleProps>
      | React.ReactElement<any>
  } & $Shape<PresentationAttributes<>>;

  declare export class ReferenceArea
    mixins React.Component<ReferenceAreaProps> {}
  declare export type ScaleCalculator = (x: number | string) => number;
  declare export interface ReferenceDotAxisConfiguration {
    scale: ScaleCalculator;
  }
  declare export type ReferenceDotProps = {
    className?: number | string,
    r?: number,
    xAxis?: ReferenceDotAxisConfiguration,
    yAxis?: ReferenceDotAxisConfiguration,
    isFront?: boolean,
    alwaysShow?: boolean,
    ifOverflow?: IfOverflowType,
    x?: number | string,
    y?: number | string,
    xAxisId?: string | number,
    yAxisId?: string | number,
    shape?:
      | ContentRenderer<
          EventAttributes &
            $Shape<PresentationAttributes<number | string, number | string>> & {
              cx: number,
              cy: number
            }
        >
      | React.ReactElement<any>
  } & EventAttributes &
    $Shape<PresentationAttributes<number | string, number | string>>;

  declare export class ReferenceDot mixins React.Component<ReferenceDotProps> {}
  declare export type ReferenceLineProps = {
    className?: number | string,
    viewBox?: ViewBox,
    xAxis?: { [key: string]: any },
    yAxis?: { [key: string]: any },
    isFront?: boolean,
    alwaysShow?: boolean,
    ifOverflow?: IfOverflowType,
    x?: number | string,
    y?: number | string,
    label?: string | number | ContentRenderer<any> | React.ReactElement<any>,
    xAxisId?: string | number,
    yAxisId?: string | number,
    shape?:
      | ContentRenderer<
          EventAttributes &
            $Shape<PresentationAttributes<number | string, number | string>> & {
              x1: number,
              y1: number,
              x2: number,
              y2: number
            }
        >
      | React.ReactElement<any>
  } & $Shape<PresentationAttributes<number | string, number | string>>;

  declare export class ReferenceLine
    mixins React.Component<ReferenceLineProps> {}
  declare export interface ResponsiveContainerProps {
    aspect?: number;
    width?: string | number;
    height?: string | number;
    minHeight?: string | number;
    minWidth?: string | number;
    maxHeight?: string | number;
    children: React.Node;
    debounce?: number;
    id?: string | number;
    className?: string | number;
  }
  declare export class ResponsiveContainer
    mixins React.Component<ResponsiveContainerProps> {}
  declare export interface ScatterPoint {
    cx?: number;
    cy?: number;
    size?: number;
    node?: {
      x?: number | string,
      y?: number | string,
      z?: number | string
    };
    payload?: any;
  }
  declare export type ScatterProps = {
    xAxisId?: string | number,
    yAxisId?: string | number,
    zAxisId?: string | number,
    line?:
      | boolean
      | { [key: string]: any }
      | RechartsFunction
      | React.ReactElement<any>,
    lineType?: "joint" | "fitting",
    lineJointType?: LineType,
    legendType?: LegendType,
    activeIndex?: number,
    activeShape?:
      | { [key: string]: any }
      | RechartsFunction
      | React.ReactElement<any>,
    shape?:
      | "circle"
      | "cross"
      | "diamond"
      | "square"
      | "star"
      | "triangle"
      | "wye"
      | React.ReactElement<any>
      | ContentRenderer<any>,
    points?: ScatterPoint[],
    hide?: boolean,
    data?: { [key: string]: any }[],
    name?: string | number
  } & EventAttributes &
    $Shape<PresentationAttributes<>> &
    Animatable;

  declare export class Scatter mixins React.Component<ScatterProps> {}
  declare export type ScatterChartProps = CategoricalChartWrapper<> &
    EventAttributes;
  declare export class ScatterChart mixins React.Component<ScatterChartProps> {}
  declare export type SectorProps = {
    className?: string,
    cx?: number,
    cy?: number,
    innerRadius?: number,
    outerRadius?: number,
    startAngle?: number,
    endAngle?: number,
    cornerRadius?: number | string
  } & EventAttributes &
    $Shape<PresentationAttributes<>>;

  declare export class Sector mixins React.Component<SectorProps> {}
  declare export type TextProps = {
    scaleToFit?: boolean,
    angle?: number,
    textAnchor?: "start" | "middle" | "end" | "inherit",
    verticalAnchor?: "start" | "middle" | "end",
    style?: { [key: string]: any },
    capHeight?: string,
    lineHeight?: string
  } & $Shape<PresentationAttributes<>>;

  declare export class Text mixins React.Component<TextProps> {}
  declare export interface ViewBox {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  }
  declare export interface PolarViewBox {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    startAngle?: number;
    endAngle?: number;
  }
  declare export interface Coordinate {
    x: number;
    y: number;
  }
  declare export interface TooltipPayload {
    name: string;
    value: string | number | Array<string | number>;
    unit?: string;
    color?: string;
    fill?: string;
    dataKey?: DataKey;
    formatter?: TooltipFormatter;
    payload?: any;
  }
  declare export type TooltipProps = {
    content?:
      | React.ReactElement<any>
      | React.StatelessComponent<any>
      | ContentRenderer<TooltipProps>,
    viewBox?: ViewBox,
    active?: boolean,
    separator?: string,
    formatter?: TooltipFormatter,
    offset?: number,
    itemStyle?: { [key: string]: any },
    labelStyle?: { [key: string]: any },
    wrapperStyle?: { [key: string]: any },
    cursor?:
      | boolean
      | { [key: string]: any }
      | React.ReactElement<any>
      | React.StatelessComponent<any>,
    coordinate?: Coordinate,
    position?: Coordinate,
    label?: string | number,
    labelFormatter?: LabelFormatter,
    payload?: TooltipPayload[],
    itemSorter?: ItemSorter<TooltipPayload>,
    filterNull?: boolean,
    useTranslate3d?: boolean
  } & Animatable;

  declare export class Tooltip mixins React.Component<TooltipProps> {}
  declare export type TreemapProps = {
    width?: number,
    height?: number,
    data?: any[],
    style?: { [key: string]: any },
    aspectRatio?: number,
    content?: React.ReactElement<any> | ContentRenderer<any>,
    fill?: string,
    stroke?: string,
    className?: string,
    nameKey?: string | number | RechartsFunction,
    dataKey?: DataKey,
    children?: React.Node[] | React.Node
  } & EventAttributes &
    Animatable;

  declare export class Treemap mixins React.Component<TreemapProps> {}
  declare export class Label mixins React.Component<LabelProps> {}
  declare export type LabelProps = {
    angle?: number,
    viewBox?: ViewBox | PolarViewBox,
    formatter?: LabelFormatter,
    value?: number | string,
    offset?: number,
    position?: PositionType,
    children?: React.Node[] | React.Node,
    className?: string,
    content?: React.ReactElement<any> | ContentRenderer<any>
  } & $Shape<PresentationAttributes<>>;

  declare export class LabelList mixins React.Component<LabelListProps> {}
  declare export interface LabelListProps {
    angle?: number;
    children?: React.Node[] | React.Node;
    className?: string;
    clockWise?: boolean;
    content?: React.ReactElement<any> | ContentRenderer<LabelProps>;
    data?: number;
    dataKey: string | number | RechartsFunction;
    formatter?: LabelFormatter;
    id?: string;
    offset?: number;
    position?: PositionType;
    valueAccessor?: RechartsFunction;
  }
  declare export type AxisDomain =
    | string
    | number
    | ContentRenderer<any>
    | "auto"
    | "dataMin"
    | "dataMax";
  declare export interface XPadding {
    left: number;
    right: number;
  }

  /**
   * In the current lib, there is not actual implementation for XAxis.
   */
  declare export type XAxisProps = {
    allowDecimals?: boolean,
    hide?: boolean,
    name?: string | number,
    unit?: string | number,
    xAxisId?: string | number,
    domain?: [AxisDomain, AxisDomain],
    dataKey?: DataKey,
    width?: number,
    height?: number,
    mirror?: boolean,
    orientation?: "top" | "bottom",
    type?: "number" | "category",
    ticks?: any[],
    tickCount?: number,
    tickFormatter?: TickFormatterFunction,
    padding?: XPadding,
    allowDataOverflow?: boolean,
    scale?: ScaleType | RechartsFunction,
    tick?:
      | boolean
      | ContentRenderer<any>
      | { [key: string]: any }
      | React.ReactElement<any>,
    axisLine?: boolean | { [key: string]: any },
    tickLine?: boolean | { [key: string]: any },
    minTickGap?: number,
    tickSize?: number,
    tickMargin?: number,
    interval?: AxisInterval,
    textAnchor?: string,
    reversed?: boolean,
    label?: string | number | Label | LabelProps,
    allowDuplicatedCategory?: boolean,
    stroke?: string
  } & EventAttributes;

  declare export class XAxis mixins React.Component<XAxisProps> {}
  declare export interface YPadding {
    top: number;
    bottom: number;
  }
  declare export type YAxisProps = {
    allowDecimals?: boolean,
    hide?: boolean,
    name?: string | number,
    unit?: string | number,
    yAxisId?: string | number,
    domain?: [AxisDomain, AxisDomain],
    dataKey?: DataKey,
    ticks?: any[],
    tickCount?: number,
    tickFormatter?: TickFormatterFunction,
    width?: number,
    height?: number,
    mirror?: boolean,
    orientation?: "left" | "right",
    type?: "number" | "category",
    padding?: YPadding,
    allowDataOverflow?: boolean,
    scale?: ScaleType | RechartsFunction,
    tick?:
      | boolean
      | ContentRenderer<any>
      | { [key: string]: any }
      | React.ReactElement<any>,
    axisLine?: boolean | { [key: string]: any },
    tickLine?: boolean | { [key: string]: any },
    minTickGap?: number,
    tickSize?: number,
    tickMargin?: number,
    interval?: AxisInterval,
    reversed?: boolean,
    label?: string | number | Label | LabelProps,
    stroke?: string
  } & EventAttributes;

  declare export class YAxis mixins React.Component<YAxisProps> {}
  declare export interface ZAxisProps {
    type?: "number" | "category";
    name?: string | number;
    unit?: string | number;
    zAxisId?: string | number;
    dataKey?: DataKey;
    range?: number[];
    scale?: ScaleType | RechartsFunction;
  }
  declare export class ZAxis mixins React.Component<ZAxisProps> {}
  declare export interface SurfaceProps {
    width?: number;
    height?: number;
    viewBox?: ViewBox;
    className?: string;
    style?: { [key: string]: any };
    children?: React.Node[] | React.Node;
  }
  declare export class Surface mixins React.Component<SurfaceProps> {}
  declare export type SymbolsProps = {
    className?: string,
    type?:
      | "circle"
      | "cross"
      | "diamond"
      | "square"
      | "star"
      | "triangle"
      | "wye",
    cx?: number,
    cy?: number,
    size?: number,
    sizeType?: "area" | "diameter"
  } & $Shape<PresentationAttributes<>>;

  declare export class Symbols mixins React.Component<SymbolsProps> {}
}
