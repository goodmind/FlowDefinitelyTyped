declare module "react-plotly.js" {
  import typeof * as Plotly from "plotly.js";

  import typeof * as React from "react";

  declare export interface Frame {
    name: string;
    data: [
      {
        x: Plotly.Datum,
        y: Plotly.Datum
      }
    ];
    group: "lower" | "upper";
  }
  declare export interface Figure {
    data: Plotly.Data[];
    layout: $Shape<Plotly.Layout>;
  }
  declare export interface PlotParams {
    data: Plotly.Data[];
    layout: $Shape<Plotly.Layout>;
    frames?: Frame[];
    config?: $Shape<Plotly.Config>;

    /**
     * When provided, causes the plot to update only when the revision is incremented.
     */
    revision?: number;

    /**
     * Callback executed after plot is initialized.
     * @param figure Object with three keys corresponding to input props: data, layout and frames.
     * @param graphDiv Reference to the DOM node into which the figure was rendered.
     */
    onInitialized?: (
      figure: $ReadOnly<Figure>,
      graphDiv: $ReadOnly<HTMLElement>
    ) => void;

    /**
     * Callback executed when when a plot is updated due to new data or layout, or when user interacts with a plot.
     * @param figure Object with three keys corresponding to input props: data, layout and frames.
     * @param graphDiv Reference to the DOM node into which the figure was rendered.
     */
    onUpdate?: (
      figure: $ReadOnly<Figure>,
      graphDiv: $ReadOnly<HTMLElement>
    ) => void;

    /**
     * Callback executed when component unmounts, before Plotly.purge strips the graphDiv of all private attributes.
     * @param figure Object with three keys corresponding to input props: data, layout and frames.
     * @param graphDiv Reference to the DOM node into which the figure was rendered.
     */
    onPurge?: (
      figure: $ReadOnly<Figure>,
      graphDiv: $ReadOnly<HTMLElement>
    ) => void;

    /**
     * Callback executed when a plotly.js API method rejects
     * @param err Error
     */
    onError?: (err: $ReadOnly<Error>) => void;

    /**
     * id assigned to the <div> into which the plot is rendered.
     */
    divId?: string;

    /**
     * applied to the <div> into which the plot is rendered
     */
    className?: string;

    /**
     * used to style the <div> into which the plot is rendered
     */
    style?: React.CSSProperties;

    /**
     * Assign the graph div to window.gd for debugging
     */
    debug?: boolean;

    /**
     * When true, adds a call to Plotly.Plot.resize() as a window.resize event handler
     */
    useResizeHandler?: boolean;
    onAfterExport?: () => void;
    onAfterPlot?: () => void;
    onAnimated?: () => void;
    onAnimatingFrame?: (event: $ReadOnly<Plotly.FrameAnimationEvent>) => void;
    onAnimationInterrupted?: () => void;
    onAutoSize?: () => void;
    onBeforeExport?: () => void;
    onButtonClicked?: (event: $ReadOnly<Plotly.ButtonClickEvent>) => void;
    onClick?: (event: $ReadOnly<Plotly.PlotMouseEvent>) => void;
    onClickAnnotation?: (event: $ReadOnly<Plotly.ClickAnnotationEvent>) => void;
    onDeselect?: () => void;
    onDoubleClick?: () => void;
    onFramework?: () => void;
    onHover?: (event: $ReadOnly<Plotly.PlotMouseEvent>) => void;
    onLegendClick?: (event: $ReadOnly<Plotly.LegendClickEvent>) => boolean;
    onLegendDoubleClick?: (
      event: $ReadOnly<Plotly.LegendClickEvent>
    ) => boolean;
    onRelayout?: (event: $ReadOnly<Plotly.PlotRelayoutEvent>) => void;
    onRestyle?: (event: $ReadOnly<Plotly.PlotRestyleEvent>) => void;
    onRedraw?: () => void;
    onSelected?: (event: $ReadOnly<Plotly.PlotSelectionEvent>) => void;
    onSelecting?: (event: $ReadOnly<Plotly.PlotSelectionEvent>) => void;
    onSliderChange?: (event: $ReadOnly<Plotly.SliderChangeEvent>) => void;
    onSliderEnd?: (event: $ReadOnly<Plotly.SliderEndEvent>) => void;
    onSliderStart?: (event: $ReadOnly<Plotly.SliderStartEvent>) => void;
    onTransitioning?: () => void;
    onTransitionInterrupted?: () => void;
    onUnhover?: (event: $ReadOnly<Plotly.PlotMouseEvent>) => void;
  }
  declare export default class Plot mixins React.PureComponent<PlotParams> {}
}
