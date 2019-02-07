declare module "chartist" {
  declare interface Chartist$ChartistStatic {
    /**
     * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
     */
    precision: number;

    /**
     * A map with characters to escape for strings to be safely used as attribute values.
     */
    escapingMap: Chartist$IChartistEscapeMap;
    Pie: Chartist$IChartistPieChart;
    Bar: Chartist$IChartistBarChart;
    Line: Chartist$IChartistLineChart;
    Candle: Chartist$IChartistCandleChart;
    FixedScaleAxis: Chartist$IFixedScaleAxisStatic;
    AutoScaleAxis: Chartist$IAutoScaleAxisStatic;
    StepAxis: Chartist$IStepAxisStatic;
    Svg: Chartist$ChartistSvgStatic;
    Interpolation: Chartist$ChartistInterpolationStatic;
    noop: Function;
    alphaNumerate(n: number): string;
    extend(target: Object, ...sources: Object[]): Object;
    replaceAll(str: string, subStr: string, newSubStr: string): string;
    ensureUnit(value: number, unit: string): string;
    quantity(input: string | number): Object;
    query(query: Node | string): Node;
    times(length: number): Array<any>;
    sum(previous: number, current: number): number;
    mapMultiply(factor: number): (num: number) => number;
    mapAdd(addend: number): (num: number) => number;
    serialMap(arr: Array<any>, cb: Function): Array<any>;
    roundWithPrecision(value: number, digits?: number): number;
    getMultiValue(value: any, dimension?: any): number;
    serialize(data: Object | string | number): string;
    deserialize(data: string): Object | string | number;
    createSvg(
      container: Node,
      width: string,
      height: string,
      className: string
    ): Object;
    plugins: any;
  }

  declare interface Chartist$IChartistEscapeMap {
    [Key: string]: string;
  }

  declare type Chartist$IResponsiveOptionTuple<T: Chartist$IChartOptions> = {
    0: string,
    1: T
  } & Array<string | T>;

  declare interface Chartist$IFixedScaleAxisStatic {}

  declare interface Chartist$IAutoScaleAxisStatic {}

  declare interface Chartist$IStepAxisStatic {}

  declare interface Chartist$IChartistData {
    labels?: Array<string> | Array<number> | Array<Date>;
    series:
      | Array<Chartist$IChartistSeriesData>
      | Array<Array<Chartist$IChartistSeriesData>>
      | Array<Array<Chartist$IChartistData>>
      | Array<number>
      | Array<Array<number>>;
  }

  declare interface Chartist$IChartistSeriesData {
    name?: string;
    value?: number;
    data?: Array<number>;
    className?: string;
    meta?: any;
  }

  declare interface Chartist$IChartistBase<T: Chartist$IChartOptions> {
    container: any;
    data: Chartist$IChartistData;
    defaultOptions: T;
    options: T;
    responsiveOptions: Array<Chartist$IResponsiveOptionTuple<T>>;
    eventEmitter: any;
    supportsForeignObject: boolean;
    supportsAnimations: boolean;
    resizeListener: any;
    plugins?: Array<any>;
    update(data: Object, options?: T, override?: boolean): void;
    detach(): void;

    /**
     * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
     * @method on
     * @param {string} event Name of the event. Check the examples for supported events.
     * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
     */
    on(event: string, handler: Function): Chartist$IChartistBase<T>;

    /**
     * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
     * @method off
     * @param {string} event Name of the event for which a handler should be removed
     * @param {Function} handler The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
     */
    off(event: string, handler?: Function): Chartist$IChartistBase<T>;
  }

  declare type Chartist$IChartistPieChart = {
    new(
      target: any,
      data: Chartist$IChartistData,
      options?: Chartist$IPieChartOptions,
      responsiveOptions?: Array<
        Chartist$IResponsiveOptionTuple<Chartist$IPieChartOptions>
      >
    ): Chartist$IChartistPieChart
  } & Chartist$IChartistBase<Chartist$IPieChartOptions>;

  declare type Chartist$IChartistLineChart = {
    new(
      target: any,
      data: Chartist$IChartistData,
      options?: Chartist$ILineChartOptions,
      responsiveOptions?: Array<
        Chartist$IResponsiveOptionTuple<Chartist$ILineChartOptions>
      >
    ): Chartist$IChartistLineChart
  } & Chartist$IChartistBase<Chartist$ILineChartOptions>;

  declare type Chartist$IChartistBarChart = {
    new(
      target: any,
      data: Chartist$IChartistData,
      options?: Chartist$IBarChartOptions,
      responsiveOptions?: Array<
        Chartist$IResponsiveOptionTuple<Chartist$IBarChartOptions>
      >
    ): Chartist$IChartistBarChart
  } & Chartist$IChartistBase<Chartist$IBarChartOptions>;

  declare type Chartist$IChartistCandleChart = {
    new(
      target: any,
      data: Chartist$IChartistData,
      options?: Chartist$ICandleChartOptions,
      responsiveOptions?: Array<
        Chartist$IResponsiveOptionTuple<Chartist$ICandleChartOptions>
      >
    ): Chartist$IChartistCandleChart
  } & Chartist$IChartistBase<Chartist$ICandleChartOptions>;

  declare interface Chartist$IChartOptions {
    /**
     * If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
     */
    reverseData?: boolean;
    plugins?: Array<any>;
  }

  declare type Chartist$IPieChartOptions = {
    /**
     * Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
     */
    width?: number | string,

    /**
     * Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
     */
    height?: number | string,

    /**
     * Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
     */
    chartPadding?: Chartist$IChartPadding | number,

    /**
     * Override the class names that are used to generate the SVG structure of the chart
     */
    classNames?: Chartist$IPieChartClasses,

    /**
     * The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
     */
    startAngle?: number,

    /**
     * An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
     */
    total?: number,

    /**
     * If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
     */
    donut?: boolean,

    /**
     * If specified the donut segments will be drawn as shapes instead of strokes.
     */
    donutSolid?: boolean,

    /**
     * Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
     * This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
     */
    donutWidth?: number | string,

    /**
     * Specify if a label should be shown or not
     */
    showLabel?: boolean,

    /**
     * Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
     */
    labelOffset?: number,

    /**
     * This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
     */
    labelPosition?: string,

    /**
     * An interpolation function for the label value
     */
    labelInterpolationFnc?: Function,

    /**
     * Label direction can be 'neutral', 'explode' or 'implode'.  Default is 'neutral'.  The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
     */
    labelDirection?: string,

    /**
     * If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
     */
    reverseData?: boolean,

    /**
     * If true empty values will be ignored to avoid drawing unncessary slices and labels
     */
    ignoreEmptyValues?: boolean
  } & Chartist$IChartOptions;

  declare interface Chartist$IChartPadding {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }

  declare interface Chartist$IPieChartClasses {
    chartPie?: string;
    chartDonut?: string;
    series?: string;
    slicePie?: string;
    sliceDonut?: string;
    label?: string;
  }

  declare type Chartist$IBarChartOptions = {
    axisX?: Chartist$IBarChartAxis,
    axisY?: Chartist$IBarChartAxis,
    width?: number | string,
    height?: number | string,
    high?: number,
    low?: number,
    ticks?: Array<string | number>,
    onlyInteger?: boolean,
    chartPadding?: Chartist$IChartPadding,
    seriesBarDistance?: number,

    /**
     * If set to true this property will cause the series bars to be stacked and form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
     */
    stackBars?: boolean,
    stackMode?: "overlap" | "accumulate",
    horizontalBars?: boolean,
    distributeSeries?: boolean
  } & Chartist$IChartOptions;

  declare interface Chartist$IBarChartAxis {
    offset?: number;
    position?: string;
    labelOffset?: {
      x?: number,
      y?: number
    };
    showLabel?: boolean;
    showGrid?: boolean;
    labelInterpolationFnc?: Function;
    scaleMinSpace?: number;
    onlyInteger?: boolean;
  }

  declare interface Chartist$IBarChartClasses {
    chart?: string;
    horizontalBars?: string;
    label?: string;
    labelGroup?: string;
    series?: string;
    bar?: string;
    grid?: string;
    gridGroup?: string;
    vertical?: string;
    horizontal?: string;
    start?: string;
    end?: string;
  }

  declare type Chartist$ILineChartOptions = {
    axisX?:
      | Chartist$IChartistStepAxis
      | Chartist$IChartistFixedScaleAxis
      | Chartist$IChartistAutoScaleAxis,
    axisY?:
      | Chartist$IChartistStepAxis
      | Chartist$IChartistFixedScaleAxis
      | Chartist$IChartistAutoScaleAxis,
    width?: number | string,
    height?: number | string,
    showLine?: boolean,
    showPoint?: boolean,
    showArea?: boolean,
    areaBase?: number,
    lineSmooth?: Function | boolean,
    low?: number,
    high?: number,
    ticks?: Array<string | number>,
    chartPadding?: Chartist$IChartPadding,
    fullWidth?: boolean,
    classNames?: Chartist$ILineChartClasses,
    series?: {
      [key: string]: {
        lineSmooth?: Function | boolean,
        showLine?: boolean,
        showPoint?: boolean,
        showArea?: boolean,
        areaBase?: number
      }
    }
  } & Chartist$IChartOptions;

  declare interface Chartist$ILineChartAxis {
    offset?: number;
    position?: string;
    labelOffset?: {
      x?: number,
      y?: number
    };
    showLabel?: boolean;
    showGrid?: boolean;
    labelInterpolationFnc?: Function;
  }

  declare type Chartist$IChartistStepAxis = {
    type?: Chartist$IStepAxisStatic,
    ticks?: Array<string> | Array<number>,
    stretch?: boolean
  } & Chartist$ILineChartAxis;

  declare type Chartist$IChartistFixedScaleAxis = {
    type?: Chartist$IFixedScaleAxisStatic,
    high?: number,
    low?: number,
    divisor?: number,
    ticks?: Array<string> | Array<number>
  } & Chartist$ILineChartAxis;

  declare type Chartist$IChartistAutoScaleAxis = {
    high?: number,
    low?: number,
    scaleMinSpace?: number,
    onlyInteger?: boolean,
    referenceValue?: number,
    type?: Chartist$IAutoScaleAxisStatic
  } & Chartist$ILineChartAxis;

  declare interface Chartist$ILineChartClasses {
    /**
     * Default is 'ct-chart-line'
     */
    chart?: string;
    label?: string;
    labelGroup?: string;
    series?: string;
    line?: string;
    point?: string;
    area?: string;
    grid?: string;
    gridGroup?: string;
    gridBackground?: string;
    vertical?: string;
    horizontal?: string;
    start?: string;
    end?: string;
  }

  declare type Chartist$ICandleChartOptions = {
    /**
     * Options for X-Axis
     */
    axisX?: Chartist$ICandleChartAxis,

    /**
     * Options for Y-Axis
     */
    axisY?: Chartist$ICandleChartAxis,

    /**
     * Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
     */
    width?: number | string,

    /**
     * Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
     */
    height?: number | string,

    /**
     * Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
     */
    hight?: number | string,

    /**
     * Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
     */
    low?: number | string,

    /**
     * Width of candle body in pixel (IMO is 2 px best minimum value)
     */
    candleWidth?: number | string,

    /**
     * Width of candle wick in pixel (IMO is 1 px best minimum value)
     */
    candleWickWidth?: number | string,

    /**
     * Use calculated x-axis step length, depending on the number of quotes to display, as candle width. Otherwise the candleWidth is being used.
     */
    useStepLengthAsCandleWidth?: boolean | string,

    /**
     * Use 1/3 of candle body width as width for the candle wick, otherwise the candleWickWidth is being used.
     */
    useOneThirdAsCandleWickWidth?: boolean | string,

    /**
     * Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
     */
    chartPadding?: Chartist$IChartPadding | number,

    /**
     * When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawncorrectly you might need to add chart padding or offset the last label with a draw event handler.
     */
    fullWidth?: boolean | string,

    /**
     * Override the class names that get used to generate the SVG structure of the chart
     */
    classNames?: Chartist$ICandleChartClasses
  } & Chartist$IChartOptions;

  declare interface Chartist$ICandleChartAxis {
    /**
     * The offset of the chart drawing area to the border of the container
     */
    offset?: number;

    /**
     * Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
     */
    position?: string;

    /**
     * Allows you to correct label positioning on this axis by positive or negative x and y offset.
     */
    labelOffset?: {
      x?: number,
      y?: number
    };

    /**
     * If labels should be shown or not
     */
    showLabel?: boolean;

    /**
     * If the axis grid should be drawn or not
     */
    showGrid?: boolean;

    /**
     * Interpolation function that allows you to intercept the value from the axis label
     */
    labelInterpolationFnc?: Function;

    /**
     * Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
     */
    type?: any;
  }

  declare interface Chartist$ICandleChartClasses {
    chart?: string;
    label?: string;
    labelGroup?: string;
    series?: string;
    candlePositive?: string;
    candleNegative?: string;
    grid?: string;
    gridGroup?: string;
    gridBackground?: string;
    vertical?: string;
    horizontal?: string;
    start?: string;
    end?: string;
  }

  declare interface Chartist$ChartistSvgStatic {
    new(
      name?: HTMLElement | string,
      attributes?: Object,
      className?: string,
      parent?: Object,
      insertFirst?: boolean
    ): Chartist$IChartistSvg;
    Easing: Chartist$ChartistEasingStatic;

    /**
     * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
     */
    isSupported(feature: string): boolean;
  }

  declare interface Chartist$IChartistSvg {
    /**
     * Set attributes on the current SVG element of the wrapper you're currently working on.
     */
    attr(attributes: Object | string, ns?: string): Object | string;

    /**
     * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
     */
    elem(
      name: string,
      attributes?: Object,
      className?: string,
      insertFirst?: boolean
    ): Chartist$IChartistSvg;

    /**
     * Returns the parent Chartist.SVG wrapper object
     */
    parent(): Chartist$IChartistSvg;

    /**
     * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
     */
    root(): Chartist$IChartistSvg;

    /**
     * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
     */
    querySelector(selector: string): Chartist$IChartistSvg;

    /**
     * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
     */
    querySelectorAll(selector: string): any;

    /**
     * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
     */
    foreignObject(
      content: any,
      attributes?: Object,
      className?: string,
      insertFirst?: boolean
    ): Chartist$IChartistSvg;

    /**
     * This method adds a new text element to the current Chartist.Svg wrapper.
     */
    text(t: string): Chartist$IChartistSvg;

    /**
     * This method will clear all child nodes of the current wrapper object.
     */
    empty(): Chartist$IChartistSvg;

    /**
     * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
     */
    remove(): Chartist$IChartistSvg;

    /**
     * This method will replace the element with a new element that can be created outside of the current DOM.
     */
    replace(): Chartist$IChartistSvg;

    /**
     * This method will append an element to the current element as a child.
     */
    append(
      element: Chartist$IChartistSvg,
      insertFirst?: boolean
    ): Chartist$IChartistSvg;

    /**
     * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
     */
    classes(): Array<string>;

    /**
     * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
     * @method addClass
     * @param {string} names A white space separated list of class names
     */
    addClass(names: string): Chartist$IChartistSvg;

    /**
     * Removes one or a space separated list of classes from the current element.
     * @method removeClass
     * @param {string} names A white space separated list of class names
     */
    removeClass(names: string): Chartist$IChartistSvg;

    /**
     * Removes all classes from the current element.
     */
    removeAllClasses(): Chartist$IChartistSvg;

    /**
     * Get element height with fallback to svg BoundingBox or parent container dimensions
     */
    height(): number;

    /**
     * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes.
     */
    animate(
      animations: Chartist$IChartistAnimations,
      guided: boolean,
      eventEmitter: Object
    ): Chartist$IChartistSvg;

    /**
     * "Safe" way to get property value from svg BoundingBox. This is a workaround. Firefox throws an NS_ERROR_FAILURE error if getBBox() is called on an invisible node.
     * THIS IS A WORKAROUND
     */
    getBBoxProperty(node: SVGElement, prop: string): string;
  }

  declare interface Chartist$IChartistAnimations {
    [Key: string]: Chartist$IChartistAnimationOptions;
  }

  declare interface Chartist$IChartistAnimationOptions {
    id?: string;
    dur: string | number;
    from: string | number;
    to: string | number;
    easing?: Chartist$IChartistEasingDefinition | string;
    fill?: string;
    begin?: string;
  }

  declare interface Chartist$IChartistEasingDefinition {
    0: number;
    1: number;
    2: number;
    3: number;
  }

  declare interface Chartist$ChartistEasingStatic {
    easeInSine: Chartist$IChartistEasingDefinition;
    easeOutSine: Chartist$IChartistEasingDefinition;
    easeInOutSine: Chartist$IChartistEasingDefinition;
    easeInQuad: Chartist$IChartistEasingDefinition;
    easeOutQuad: Chartist$IChartistEasingDefinition;
    easeInOutQuad: Chartist$IChartistEasingDefinition;
    easeInCubic: Chartist$IChartistEasingDefinition;
    easeOutCubic: Chartist$IChartistEasingDefinition;
    easeInOutCubic: Chartist$IChartistEasingDefinition;
    easeInQuart: Chartist$IChartistEasingDefinition;
    easeOutQuart: Chartist$IChartistEasingDefinition;
    easeInOutQuart: Chartist$IChartistEasingDefinition;
    easeInQuint: Chartist$IChartistEasingDefinition;
    easeOutQuint: Chartist$IChartistEasingDefinition;
    easeInOutQuint: Chartist$IChartistEasingDefinition;
    easeInExpo: Chartist$IChartistEasingDefinition;
    easeOutExpo: Chartist$IChartistEasingDefinition;
    easeInOutExpo: Chartist$IChartistEasingDefinition;
    easeInCirc: Chartist$IChartistEasingDefinition;
    easeOutCirc: Chartist$IChartistEasingDefinition;
    easeInOutCirc: Chartist$IChartistEasingDefinition;
    easeInBack: Chartist$IChartistEasingDefinition;
    easeOutBack: Chartist$IChartistEasingDefinition;
    easeInOutBack: Chartist$IChartistEasingDefinition;
  }

  declare interface Chartist$ChartistInterpolationStatic {
    /**
     * This interpolation function does not smooth the path and the result is only containing lines and no curves.
     */
    none(options?: Chartist$IChartistInterpolationOptions): Function;

    /**
     * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
     */
    simple(options?: Chartist$IChartistSimpleInterpolationOptions): Function;

    /**
     * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
     */
    cardinal(
      options?: Chartist$IChartistCardinalInterpolationOptions
    ): Function;

    /**
     * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the showPoint option is enabled.
     */
    step(options?: Chartist$IChartistStepInterpolationOptions): Function;
  }

  declare interface Chartist$IChartistInterpolationOptions {
    fillHoles?: boolean;
  }

  declare type Chartist$IChartistSimpleInterpolationOptions = {
    divisor?: number
  } & Chartist$IChartistInterpolationOptions;

  declare type Chartist$IChartistCardinalInterpolationOptions = {
    tension?: number
  } & Chartist$IChartistInterpolationOptions;

  declare type Chartist$IChartistStepInterpolationOptions = {
    postpone?: boolean
  } & Chartist$IChartistInterpolationOptions;

  declare var Chartist: Chartist$Chartist$ChartistStatic;
  declare module.exports: typeof Chartist;
}
