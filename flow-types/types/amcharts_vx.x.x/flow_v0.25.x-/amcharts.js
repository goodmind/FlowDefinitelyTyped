declare module "amcharts" {
  import typeof _AmAngularGauge from "./AmAngularGauge";

  import typeof _AmBalloon from "./AmBalloon";

  import typeof _AmChart from "./AmChart";

  import typeof _AmCoordinateChart from "./AmCoordinateChart";

  import typeof _AmGraph from "./AmGraph";

  import typeof _AmLegend from "./AmLegend";

  import typeof _AmPieChart from "./AmPieChart";

  import typeof _AmRadarChart from "./AmRadarChart";

  import typeof _AmRectangularChart from "./AmRectangularChart";

  import typeof _AmSerialChart from "./AmSerialChart";

  import typeof _AmXYChart from "./AmXYChart";

  import typeof _AxisBase from "./AxisBase";

  import typeof _CategoryAxis from "./CategoryAxis";

  import typeof _ChartCursor from "./ChartCursor";

  import typeof _ChartScrollbar from "./ChartScrollbar";

  import typeof _GaugeArrow from "./GaugeArrow";

  import typeof _GaugeAxis from "./GaugeAxis";

  import typeof _GaugeBand from "./GaugeBand";

  import typeof _GraphDataItem from "./GraphDataItem";

  import typeof _Guide from "./Guide";

  import typeof _Label from "./Label";

  import typeof _SerialDataItem from "./SerialDataItem";

  import typeof _Slice from "./Slice";

  import typeof _Title from "./Title";

  import typeof _TrendLine from "./TrendLine";

  import typeof _ValueAxis from "./ValueAxis";

  declare var npm$namespace$AmCharts: {
    clear: typeof AmCharts$clear,
    makeChart: typeof AmCharts$makeChart,
    addInitHandler: typeof AmCharts$addInitHandler,
    baseHref: typeof AmCharts$baseHref,
    dayNames: typeof AmCharts$dayNames,
    monthNames: typeof AmCharts$monthNames,
    shortDayNames: typeof AmCharts$shortDayNames,
    shortMonthNames: typeof AmCharts$shortMonthNames,
    useUTC: typeof AmCharts$useUTC,
    theme: typeof AmCharts$theme,
    themes: typeof AmCharts$themes,

    AmAngularGauge: typeof AmCharts$AmAngularGauge,
    AmBalloon: typeof AmCharts$AmBalloon,
    AmChart: typeof AmCharts$AmChart,
    AmCoordinateChart: typeof AmCharts$AmCoordinateChart,
    AmGraph: typeof AmCharts$AmGraph,
    AmLegend: typeof AmCharts$AmLegend,
    AmPieChart: typeof AmCharts$AmPieChart,
    AmRadarChart: typeof AmCharts$AmRadarChart,
    AmRectangularChart: typeof AmCharts$AmRectangularChart,
    AmSerialChart: typeof AmCharts$AmSerialChart,
    AmXYChart: typeof AmCharts$AmXYChart,
    AxisBase: typeof AmCharts$AxisBase,
    CategoryAxis: typeof AmCharts$CategoryAxis,
    ChartCursor: typeof AmCharts$ChartCursor,
    ChartScrollbar: typeof AmCharts$ChartScrollbar,
    GaugeArrow: typeof AmCharts$GaugeArrow,
    GaugeAxis: typeof AmCharts$GaugeAxis,
    GaugeBand: typeof AmCharts$GaugeBand,
    GraphDataItem: typeof AmCharts$GraphDataItem,
    Guide: typeof AmCharts$Guide,
    Label: typeof AmCharts$Label,
    SerialDataItem: typeof AmCharts$SerialDataItem,
    Slice: typeof AmCharts$Slice,
    Title: typeof AmCharts$Title,
    TrendLine: typeof AmCharts$TrendLine,
    ValueAxis: typeof AmCharts$ValueAxis
  };

  /**
   * Set it to true if you have base href set for your page.
   * This will fix rendering problems in Firefox caused by base href.
   */
  declare var AmCharts$baseHref: boolean;

  /**
   * Array of day names, used when formatting dates (if categoryAxis.parseDates is set to true)
   * ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   */
  declare var AmCharts$dayNames: string[];

  /**
   * Array of month names, used when formatting dates (if categoryAxis.parseDates is set to true)
   * [
   * 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
   * 'September', 'October', 'November','December'
   * ]
   */
  declare var AmCharts$monthNames: string[];

  /**
   * Array of short versions of day names, used when formatting dates (if categoryAxis.parseDates is set to true)
   * ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
   */
  declare var AmCharts$shortDayNames: string[];

  /**
   * Array of short versions of month names, used when formatting dates (if categoryAxis.parseDates is set to true)
   * ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   */
  declare var AmCharts$shortMonthNames: string[];

  /**
   * Set it to true if you want UTC time to be used instead of local time.
   */
  declare var AmCharts$useUTC: boolean;

  /**
   * Set global used AmCharts theme.
   */
  declare var AmCharts$theme: any;

  /**
   * Object with existing themes.
   */
  declare var AmCharts$themes: any;

  /**
   * Clears all the charts on page, removes listeners and intervals.
   */
  declare function AmCharts$clear(): void;

  /**
   * Create chart by params.
   */
  declare function AmCharts$makeChart(
    selector: string,
    params: any,
    delay?: number
  ): AmCharts$AmChart;

  /**
   * Set a method to be called before initializing the chart.
   * When the method is called, the chart instance is passed as an attribute.
   * You can use this feature to preprocess chart data or do some other things you need
   * before initializing the chart.
   * @param handler - The method to be called.
   * @param types - Which chart types should call this method. Defaults to all
   * if none is passed.
   */
  declare function AmCharts$addInitHandler(
    handler: () => {},
    types?: string[]
  ): any;

  declare class AmCharts$AmAngularGauge mixins _AmAngularGauge {}

  declare class AmCharts$AmBalloon mixins _AmBalloon {}

  declare class AmCharts$AmChart mixins _AmChart {}

  declare class AmCharts$AmCoordinateChart mixins _AmCoordinateChart {}

  declare class AmCharts$AmGraph mixins _AmGraph {}

  declare class AmCharts$AmLegend mixins _AmLegend {}

  declare class AmCharts$AmPieChart mixins _AmPieChart {}

  declare class AmCharts$AmRadarChart mixins _AmRadarChart {}

  declare class AmCharts$AmRectangularChart mixins _AmRectangularChart {}

  declare class AmCharts$AmSerialChart mixins _AmSerialChart {}

  declare class AmCharts$AmXYChart mixins _AmXYChart {}

  declare class AmCharts$AxisBase mixins _AxisBase {}

  declare class AmCharts$CategoryAxis mixins _CategoryAxis {}

  declare class AmCharts$ChartCursor mixins _ChartCursor {}

  declare class AmCharts$ChartScrollbar mixins _ChartScrollbar {}

  declare class AmCharts$GaugeArrow mixins _GaugeArrow {}

  declare class AmCharts$GaugeAxis mixins _GaugeAxis {}

  declare class AmCharts$GaugeBand mixins _GaugeBand {}

  declare class AmCharts$GraphDataItem mixins _GraphDataItem {}

  declare class AmCharts$Guide mixins _Guide {}

  declare class AmCharts$Label mixins _Label {}

  declare class AmCharts$SerialDataItem mixins _SerialDataItem {}

  declare class AmCharts$Slice mixins _Slice {}

  declare class AmCharts$Title mixins _Title {}

  declare class AmCharts$TrendLine mixins _TrendLine {}

  declare class AmCharts$ValueAxis mixins _ValueAxis {}
}
