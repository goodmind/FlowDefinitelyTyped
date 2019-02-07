declare module "react-native-svg-charts" {
  import type {
    ScaleBand,
    ScaleLinear,
    ScaleLogarithmic,
    ScalePower,
    ScaleTime
  } from "d3-scale";

  import type { CurveFactory, Series } from "d3-shape";

  import typeof * as React from "react";

  import type { StyleProp, ViewStyle } from "react-native";

  import type {
    CommonPathProps,
    LinearGradientProps,
    LineProps,
    PathProps,
    RadialGradientProps,
    TextProps
  } from "react-native-svg";

  declare export type ScaleType<Range, Output> =
    | ScaleLinear<Range, Output>
    | ScaleLogarithmic<Range, Output>
    | ScalePower<Range, Output>
    | ScaleTime<Range, Output>;
  declare export type ScaleFunction = () =>
    | ScaleType<any, any>
    | ScaleBand<any>;
  declare export type AccessorFunction<T, U> = (props: {
    item: T,
    index: number
  }) => U;
  declare export type SortFunction<T> = (a: T, b: T) => number;
  declare export type OffsetFunction = (
    series: Series<any, any>,
    order: number[]
  ) => void;
  declare export type OrderFunction = (series: Series<any, any>) => number[];
  declare export interface ChartProps<T> {
    data: T[];
    style?: StyleProp<ViewStyle>;
    animate?: boolean;
    animationDuration?: number;
    svg?: $Shape<PathProps>;
    width?: number;
    height?: number;
    curve?: CurveFactory;
    contentInset?: {
      top?: number,
      left?: number,
      right?: number,
      bottom?: number
    };
    gridMin?: number;
    gridMax?: number;
    gridProps?: GridProps<any>;
    numberOfTicks?: number;
    xScale?: ScaleFunction;
    yScale?: ScaleFunction;
    xAccessor?: AccessorFunction<T, number>;
    yAccessor?: AccessorFunction<T, number>;
  }
  declare export class LineChart<T> mixins React.PureComponent<ChartProps<T>> {}
  declare export interface PieChartData {
    svg?: $Shape<PathProps>;
    key: string | number;
    value?: number;
    arc?: {
      outerRadius?: number | string,
      cornerRadius?: number | string
    };
  }
  declare export type PieChartProps<T: PieChartData> = {
    innerRadius?: number | string,
    outerRadius?: number | string,
    labelRadius?: number | string,
    padAngle?: number,
    sort?: SortFunction<T>,
    valueAccessor?: AccessorFunction<T, number>
  } & ChartProps<T>;

  declare export class PieChart<T: PieChartData>
    mixins React.PureComponent<PieChartProps<T>> {}
  declare export type AreaChartProps<T> = {
    start?: number
  } & ChartProps<T>;

  declare export class AreaChart<T>
    mixins React.PureComponent<AreaChartProps<T>> {}
  declare export type StackedAreaChartProps<T> = {
    keys: $ReadOnlyArray<$Keys<T>>,
    colors: string[],
    offset?: OffsetFunction,
    order?: OrderFunction,
    renderGradient?: (props: {
      id: string,
      width: number,
      height: number,
      x: number,
      y: number,
      index: number,
      key: $Keys<T>,
      color: string
    }) => React.Component<LinearGradientProps | RadialGradientProps>,
    showGrid?: boolean,
    extras?: any[],
    renderDecorator?: () => {}
  } & ChartProps<T>;

  declare export class StackedAreaChart<T>
    mixins React.PureComponent<StackedAreaChartProps<T>> {
    static extractDataPoints<T>(
      data: T[],
      keys: $ReadOnlyArray<$Keys<T>>,
      order?: OrderFunction,
      offset?: OffsetFunction
    ): number[];
  }
  declare export type StackedBarChartProps<T> = {
    keys: $ReadOnlyArray<$Keys<T>>,
    colors: string[],
    offset?: OffsetFunction,
    order?: OrderFunction,
    strokeColor?: string,
    horizontal?: boolean,
    renderGradient?: (props: {
      id: string
    }) => React.Component<LinearGradientProps | RadialGradientProps>,
    spacingInner?: number,
    spacingOuter?: number,
    showGrid?: boolean,
    extras?: any[],
    extra?: () => {}
  } & ChartProps<T>;

  declare export class StackedBarChart<T>
    mixins React.PureComponent<StackedBarChartProps<T>> {
    static extractDataPoints<T>(
      data: T,
      keys: $ReadOnlyArray<$Keys<T>>,
      order?: OrderFunction,
      offset?: OffsetFunction
    ): number[];
  }
  declare export type BarChartProps<T> = {
    spacingInner?: number,
    spacingOuter?: number
  } & ChartProps<T>;

  declare export class BarChart<T>
    mixins React.PureComponent<BarChartProps<T>> {}
  declare export interface AxisProps<T> {
    style?: StyleProp<ViewStyle>;
    data: T[];
    spacingInner?: number;
    spacingOuter?: number;
    formatLabel?: (value: any, index: number) => number | string;
    scale?: ScaleFunction;
    numberOfTicks?: number;
    svg?: $Shape<TextProps>;
  }
  declare export type XAxisProps<T> = {
    contentInset?: {
      left?: number,
      right?: number
    },
    xAccessor?: AccessorFunction<T, any>
  } & AxisProps<T>;

  declare export class XAxis<T> mixins React.PureComponent<XAxisProps<T>> {}
  declare export type YAxisProps<T> = {
    style?: StyleProp<ViewStyle>,
    contentInset?: {
      top?: number,
      bottom?: number
    },
    min?: number,
    max?: number,
    yAccessor?: AccessorFunction<T, any>
  } & AxisProps<T>;

  declare export class YAxis<T> mixins React.PureComponent<YAxisProps<T>> {}
  declare export interface ProgressCircleProps {
    progress: number;
    style?: StyleProp<ViewStyle>;
    progressColor?: string;
    backgroundColor?: string;
    strokeWidth?: number;
    startAngle?: number;
    endAngle?: number;
    animate?: boolean;
    animateDuration?: number;
  }
  declare export class ProgressCircle
    mixins React.PureComponent<ProgressCircleProps> {}
  declare export interface HorizontalLineProps {
    stroke: string;
  }
  declare export interface PointProps {
    value?: number;
    radius?: number;
    index?: number;
    color?: string;
  }
  declare export interface TooltipProps {
    value?: number;
    index?: number;
    height?: number;
    stroke?: string;
    text: string;
    pointStroke?: string;
  }
  declare export class Decorators$HorizontalLine
    mixins React.Component<HorizontalLineProps> {}

  declare export class Decorators$Point mixins React.Component<PointProps> {}

  declare export class Decorators$Tooltip
    mixins React.Component<TooltipProps> {}
  declare export type GridDirection = "VERTICAL" | "HORIZONTAL" | "BOTH";
  declare export interface GridProps<T> {
    direction?: GridDirection;
    belowChart?: boolean;
    svg?: $Shape<LineProps>;
    ticks?: T[];
    x?: (t: T) => number;
    y?: (t: T) => number;
  }
  declare export class Grid<T> mixins React.Component<GridProps<T>> {
    static Direction: {
      VERTICAL: "VERTICAL",
      HORIZONTAL: "HORIZONTAL",
      BOTH: "BOTH"
    };
  }
  declare export type AnimatedPathProps = {
    animated?: boolean,
    animationDuration?: number,
    renderPlaceholder?: () => any
  } & CommonPathProps;

  declare export class Path mixins React.Component<AnimatedPathProps> {}
}
