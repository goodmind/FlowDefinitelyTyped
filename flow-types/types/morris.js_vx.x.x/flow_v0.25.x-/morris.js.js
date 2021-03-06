declare module "morris" {
  declare export default typeof Morris;
}
declare module "morris.js" {
  declare var npm$namespace$morris: {
    GridChart: typeof morris$GridChart,
    DonutChart: typeof morris$DonutChart,
    MorrisStatic: typeof morris$MorrisStatic
  };
  declare type morris$AutoAlways = "auto" | "always";

  declare type morris$Interval =
    | "decade"
    | "year"
    | "month"
    | "week"
    | "day"
    | "hour"
    | "30min"
    | "15min"
    | "10min"
    | "5min"
    | "minute"
    | "30sec"
    | "15sec"
    | "10sec"
    | "5sec"
    | "second";

  declare interface morris$IChartOptions {
    /**
     * The ID of (or a reference to) the element into which to insert the graph.
     */
    element: any;

    /**
     * Set to true to enable automatic resizing when the containing element resizes. (default: false).
     */
    resize?: boolean;
  }

  declare type morris$IGridChartOptions = {
    /**
     * The data to plot. This is an array of objects, containing x and y attributes as described by the xkey and ykeys options.
     */
    data: any[],

    /**
     * A string containing the name of the attribute that contains X labels.
     */
    xkey: string,

    /**
     * A list of strings containing names of attributes that contain Y values (one for each series of data to be plotted).
     */
    ykeys: string[],

    /**
     * A list of strings containing labels for the data series to be plotted (corresponding to the values in the ykeys option).
     */
    labels: string[],

    /**
     * Set the visibility of the hover legend (see documentation).
     */
    hideHover?: boolean | morris$AutoAlways,

    /**
     * Set to false to disable drawing the x and y axes.
     */
    axes?: boolean,

    /**
     * Set to false to disable drawing the horizontal grid lines.
     */
    grid?: boolean,

    /**
     * Set the color of the axis labels (default: #888).
     */
    gridTextColor?: string,

    /**
     * Set the point size of the axis labels (default: 12).
     */
    gridTextSize?: number,

    /**
     * Set the font family of the axis labels (default: sans-serif).
     */
    gridTextFamily?: string,

    /**
     * Set the font weight of the axis labels (default: normal).
     */
    gridTextWeight?: string,

    /**
     * Set the stroke of the grid. (default: 0.5)
     */
    gridStrokeWidth?: number,

    /**
     * Set the line color of the grid. (default: #aaa)
     */
    gridLineColor?: string
  } & IChartOptions;

  declare type morris$ILineOptions = {
    /**
     * Array containing colors for the series lines/points.
     */
    lineColors?: string[],

    /**
     * Width of the series lines, in pixels.
     */
    lineWidth?: number,

    /**
     * Diameter of the series points, in pixels.
     */
    pointSize?: number,

    /**
     * Colors for the series points. By default uses the same values as lineColors
     */
    pointFillColors?: string[],

    /**
     * Colors for the outlines of the series points. (#ffffff by default).
     */
    pointStrokeColors?: string[],

    /**
     * Max. bound for Y-values. Alternatively, set this to 'auto' to compute automatically, or 'auto [num]' to automatically compute and ensure that the max y-value is at least [num].
     */
    ymax?: number | string,

    /**
     * Min. bound for Y-values. Alternatively, set this to 'auto' to compute automatically, or 'auto [num]' to automatically compute and ensure that the min y-value is at most [num].
     */
    ymin?: number | string,

    /**
     * Set to false to disable line smoothing.
     */
    smooth?: boolean,

    /**
     * Provide a function on this option to generate custom hover legends.
     */
    hoverCallback?: (
      index: number,
      options: morris$ILineOptions,
      content: string,
      row: any
    ) => string,

    /**
     * Set to false to skip time/date parsing for X values, instead treating them as an equally-spaced series.
     */
    parseTime?: boolean,

    /**
     * Set to a string value (eg: '%') to add a label suffix all y-labels.
     */
    postUnits?: string,

    /**
     * Set to a string value (eg: '$') to add a label prefix all y-labels.
     */
    preUnits?: string,

    /**
     * A function that accepts millisecond timestamps and formats them for display as chart labels.
     */
    dateFormat?: (timestamp: number) => string,

    /**
     * Sets the x axis labelling interval. By default the interval will be automatically computed.
     */
    xLabels?: morris$Interval,

    /**
     * A function that accepts Date objects and formats them for display as x-axis labels. Overrides the default formatter chosen by the automatic labeller or the xLabels option.
     */
    xLabelFormat?: (date: Date) => string,

    /**
     * The angle in degrees from horizontal to draw x-axis labels.
     */
    xLabelAngle?: number,

    /**
     * A function that accepts y-values and formats them for display as y-axis labels.
     */
    yLabelFormat?: (val: any) => string,

    /**
     * A list of y-values to draw as horizontal 'goal' lines on the chart.
     */
    goals?: number[],

    /**
     * Width, in pixels, of the goal lines.
     */
    goalStrokeWidth?: number,

    /**
     * Array of color values to use for the goal line colors. If you list fewer colors here than you have lines in goals, then the values will be cycled.
     */
    goalLineColors?: string[],

    /**
     * A list of x-values to draw as vertical 'event' lines on the chart.
     */
    events?: string[],

    /**
     * Width, in pixels, of the event lines.
     */
    eventStrokeWidth?: number,

    /**
     * Array of color values to use for the event line colors. If you list fewer colors here than you have lines in events, then the values will be cycled.
     */
    eventLineColors?: string[],

    /**
     * Define how null and undefined values are handled (see documentation).
     */
    continuousLine?: boolean,

    /**
     * Change the opacity of the area fill colour. Accepts values between 0.0 (for completely transparent) and 1.0 (for completely opaque).
     */
    fillOpacity?: number
  } & IGridChartOptions;

  declare type morris$IAreaOptions = {
    /**
     * Set to true to overlay the areas on top of each other instead of stacking them.
     */
    behaveLikeLine?: boolean
  } & ILineOptions;

  declare type morris$IBarOptions = {
    /**
     * Array containing colors for the series bars.
     */
    barColors?: string[],

    /**
     * Set to true to draw bars stacked vertically.
     */
    stacked?: boolean,

    /**
     * Provide a function on this option to generate custom hover legends.
     */
    hoverCallback?: (
      index: number,
      options: morris$IBarOptions,
      content: string,
      row: any
    ) => string
  } & IGridChartOptions;

  declare interface morris$IDonutData {
    /**
     * Label of the segment of the donut chart.
     */
    label: string;

    /**
     * Size of the segment of the donut chart.
     */
    value: number;
  }

  declare type morris$IDonutOptions = {
    /**
     * The data to plot.
     */
    data: morris$IDonutData[],

    /**
     * An array of strings containing HTML-style hex colors for each of the donut segments.
     */
    colors?: string[],

    /**
     * A function that will translate a y-value into a label for the centre of the donut.
     */
    formatter?: (y: number, data: morris$IDonutData) => string
  } & IChartOptions;

  declare class morris$GridChart {
    setData(data: any[], redraw?: boolean): void;
  }

  declare class morris$DonutChart {
    setData(data: morris$IDonutData[], redraw?: boolean): void;
  }

  declare class morris$MorrisStatic {
    /**
     * Create a line chart.
     */
    Line: (options: morris$ILineOptions) => morris$GridChart;

    /**
     * Create an area chart.
     */
    Area: (options: morris$IAreaOptions) => morris$GridChart;

    /**
     * Create a bar chart.
     */
    Bar: (options: morris$IBarOptions) => morris$GridChart;

    /**
     * Create a Donut chart.
     */
    Donut: (options: morris$IDonutOptions) => morris$DonutChart;
  }
  declare var Morris: morris$MorrisStatic;
}
