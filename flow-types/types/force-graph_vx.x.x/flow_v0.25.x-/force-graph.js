declare module "force-graph" {
  declare function ForceGraph(): ForceGraph$ForceGraph$ForceGraphInstance;

  /**
   * Interfaces
   */
  declare interface ForceGraph$GraphData {
    nodes: ForceGraph$GraphNode[];
    links: ForceGraph$GraphLink[];
  }

  declare interface ForceGraph$GraphEntity {
    id: string;
  }

  declare type ForceGraph$GraphNode = {
    name: string,
    val: any
  } & ForceGraph$GraphEntity;

  declare type ForceGraph$GraphNodeObject = {
    x: number,
    y: number,
    index: number
  } & ForceGraph$GraphNode;

  declare type ForceGraph$GraphLink = {
    type: string,
    source: string | ForceGraph$GraphNode,
    target: string | ForceGraph$GraphNode
  } & ForceGraph$GraphEntity;

  declare type ForceGraph$GraphLinkObject = {
    source: ForceGraph$GraphNode,
    target: ForceGraph$GraphNode
  } & ForceGraph$GraphLink;

  /**
   * Enums
   */
  declare class ForceGraph$LinkCurvatureType {
    constructor(...args: empty): mixed;
    static +Straight: Class<ForceGraph$LinkCurvatureType__Straight> &
      ForceGraph$LinkCurvatureType__Straight &
      0; // 0
    static +HalfLineLength: Class<ForceGraph$LinkCurvatureType__HalfLineLength> &
      ForceGraph$LinkCurvatureType__HalfLineLength &
      1; // 1
  }

  declare class ForceGraph$LinkCurvatureType__Straight
    mixins ForceGraph$LinkCurvatureType {}
  declare class ForceGraph$LinkCurvatureType__HalfLineLength
    mixins ForceGraph$LinkCurvatureType {}

  /**
   * Types
   */
  declare type ForceGraph$NodeAccessorFn<T> = (
    node: ForceGraph$GraphNodeObject
  ) => T;

  declare type ForceGraph$NodeCanvasCallbackFn = (
    node: ForceGraph$GraphNodeObject,
    canvasContext: CanvasRenderingContext2D,
    globalScale: number
  ) => void;

  declare type ForceGraph$NodeEventCallback = (
    node: ForceGraph$GraphNodeObject
  ) => void;

  declare type ForceGraph$LinkAccessorFn<T> = (
    link: ForceGraph$GraphLinkObject
  ) => T;

  declare type ForceGraph$LinkCanvasCallbackFn = (
    link: ForceGraph$GraphLinkObject,
    canvasContext: CanvasRenderingContext2D,
    globalScale: number
  ) => void;

  declare type ForceGraph$LinkEventCallback = (
    link: ForceGraph$GraphLinkObject
  ) => void;

  declare type ForceGraph$DagMode =
    | "td"
    | "bu"
    | "lr"
    | "rl"
    | "radialout"
    | "radialin";

  declare type ForceGraph$ForceFn = (node: {
    x: number,
    y: number
  }) => number;

  /**
 * Represents ForceGraph runtime object
 * @example :
let forceGraph = ForceGraph();
forceGraph(myHtmlElement);
forceGraph.graphData([])
 */
  declare interface ForceGraph$ForceGraphInstance {
    (element: HTMLElement): ForceGraph$ForceGraphInstance;
    graphData(
      data?: ForceGraph$GraphData
    ): ForceGraph$ForceGraphInstance & ForceGraph$GraphData;
    nodeId(id?: string): ForceGraph$ForceGraphInstance & string;
    linkSource(source?: string): ForceGraph$ForceGraphInstance & string;
    linkTarget(target?: string): ForceGraph$ForceGraphInstance & string;
    width(width?: number): ForceGraph$ForceGraphInstance & number;
    height(height?: number): ForceGraph$ForceGraphInstance & number;
    backgroundColor(color?: string): ForceGraph$ForceGraphInstance & string;
    nodeRelSize(size?: number): ForceGraph$ForceGraphInstance & number;
    nodeVal(
      val?: number | string | ForceGraph$NodeAccessorFn<number>
    ): ForceGraph$ForceGraphInstance &
      (number | string | ForceGraph$NodeAccessorFn<number>);
    nodeLabel(
      label?: string | ForceGraph$NodeAccessorFn<string | void>
    ): ForceGraph$ForceGraphInstance &
      (string | ForceGraph$NodeAccessorFn<string | void>);
    nodeColor(
      color?: string | ForceGraph$NodeAccessorFn<string>
    ): ForceGraph$ForceGraphInstance &
      (string | ForceGraph$NodeAccessorFn<string>);
    nodeAutoColorBy(
      attribute?: string | ForceGraph$NodeAccessorFn<string>
    ): ForceGraph$ForceGraphInstance &
      (string | ForceGraph$NodeAccessorFn<string>);
    nodeCanvasObject(
      callback?: ForceGraph$NodeCanvasCallbackFn
    ): ForceGraph$ForceGraphInstance & ForceGraph$NodeCanvasCallbackFn;
    linkLabel(
      label?: string | ForceGraph$LinkAccessorFn<string | void>
    ): ForceGraph$ForceGraphInstance &
      (string | ForceGraph$LinkAccessorFn<string | void>);
    linkVisibility(
      visible?: boolean | string | ForceGraph$LinkAccessorFn<boolean>
    ): ForceGraph$ForceGraphInstance &
      (boolean | string | ForceGraph$LinkAccessorFn<boolean>);
    linkColor(
      color?: string | ForceGraph$LinkAccessorFn<string>
    ): ForceGraph$ForceGraphInstance &
      (string | ForceGraph$LinkAccessorFn<string>);
    linkAutoColorBy(
      attribute?: string | ForceGraph$LinkAccessorFn<string>
    ): ForceGraph$ForceGraphInstance &
      (string | ForceGraph$LinkAccessorFn<string>);
    linkWidth(
      width?: number | string | ForceGraph$LinkAccessorFn<number>
    ): ForceGraph$ForceGraphInstance &
      (number | string | ForceGraph$LinkAccessorFn<number>);
    linkCurvature(
      curvature?:
        | ForceGraph$LinkCurvatureType
        | string
        | ForceGraph$LinkAccessorFn<ForceGraph$LinkCurvatureType>
    ): ForceGraph$ForceGraphInstance;
    linkCanvasObject(
      callback?: ForceGraph$LinkCanvasCallbackFn
    ): ForceGraph$ForceGraphInstance & ForceGraph$LinkCanvasCallbackFn;
    linkDirectionalArrowLength(
      length?: number | string | ForceGraph$LinkAccessorFn<number>
    ): ForceGraph$ForceGraphInstance &
      (number | string | ForceGraph$LinkAccessorFn<number>);
    linkDirectionalArrowColor(
      color?: string | ForceGraph$LinkAccessorFn<string>
    ): ForceGraph$ForceGraphInstance &
      (string | ForceGraph$LinkAccessorFn<string>);
    linkDirectionalArrowRelPos(
      ratio?: number | string | ForceGraph$LinkAccessorFn<number>
    ): ForceGraph$ForceGraphInstance &
      (number | string | ForceGraph$LinkAccessorFn<number>);
    linkDirectionalParticles(
      particleCount?: number | string | ForceGraph$LinkAccessorFn<number>
    ): ForceGraph$ForceGraphInstance &
      (number | string | ForceGraph$LinkAccessorFn<number>);
    linkDirectionalParticleSpeed(
      speed?: number | string | ForceGraph$LinkAccessorFn<number>
    ): ForceGraph$ForceGraphInstance &
      (number | string | ForceGraph$LinkAccessorFn<number>);
    linkDirectionalParticleWidth(
      width?: number | string | ForceGraph$LinkAccessorFn<number>
    ): ForceGraph$ForceGraphInstance &
      (number | string | ForceGraph$LinkAccessorFn<number>);
    linkDirectionalParticleColor(
      color?: string | ForceGraph$LinkAccessorFn<string>
    ): ForceGraph$ForceGraphInstance &
      (string | ForceGraph$LinkAccessorFn<string>);
    pauseAnimation(): ForceGraph$ForceGraphInstance;
    stopAnimation(): ForceGraph$ForceGraphInstance;
    resumeAnimation(): ForceGraph$ForceGraphInstance;
    centerAt(
      x?: number,
      y?: number,
      milliseconds?: number
    ): ForceGraph$ForceGraphInstance & {
      x: number,
      y: number
    };
    zoom(
      zoomLevel?: number,
      duration?: number
    ): ForceGraph$ForceGraphInstance & number;
    dagMode(
      mode?: ForceGraph$DagMode
    ): ForceGraph$ForceGraphInstance & ForceGraph$DagMode;
    dagLevelDistance(distance?: number): ForceGraph$ForceGraphInstance & number;
    d3AlphaDecay(decay?: number): ForceGraph$ForceGraphInstance & number;
    d3VelocityDecay(decay?: number): ForceGraph$ForceGraphInstance & number;
    d3Force(
      force: "link" | "charge" | "center" | string,
      forceFn?: ForceGraph$ForceFn
    ): ForceGraph$ForceGraphInstance & ForceGraph$ForceFn;
    warmupTicks(ticks?: number): ForceGraph$ForceGraphInstance & number;
    cooldownTicks(ticks?: number): ForceGraph$ForceGraphInstance & number;
    cooldownTime(milliseconds?: number): ForceGraph$ForceGraphInstance & number;
    onEngineTick(callback: () => void): ForceGraph$ForceGraphInstance;
    onEngineStop(callback: () => void): ForceGraph$ForceGraphInstance;
    onNodeClick(
      callback: ForceGraph$NodeEventCallback
    ): ForceGraph$ForceGraphInstance;
    onNodeRightClick(
      callback: ForceGraph$NodeEventCallback
    ): ForceGraph$ForceGraphInstance;
    onNodeHover(
      callback: (
        node?: ForceGraph$GraphNodeObject,
        previousNode?: ForceGraph$GraphNodeObject
      ) => void
    ): ForceGraph$ForceGraphInstance;
    onNodeDrag(
      callback: ForceGraph$NodeEventCallback
    ): ForceGraph$ForceGraphInstance;
    onNodeDragEnd(
      callback: ForceGraph$NodeEventCallback
    ): ForceGraph$ForceGraphInstance;
    onLinkClick(
      callback: ForceGraph$LinkEventCallback
    ): ForceGraph$ForceGraphInstance;
    onLinkRightClick(
      callback: ForceGraph$LinkEventCallback
    ): ForceGraph$ForceGraphInstance;
    onLinkHover(
      callback: (
        link?: ForceGraph$GraphLinkObject,
        previousLink?: ForceGraph$GraphLinkObject
      ) => void
    ): ForceGraph$ForceGraphInstance;
    linkHoverPrecision(
      precision?: number
    ): ForceGraph$ForceGraphInstance & number;
    enableNodeDrag(enable?: boolean): ForceGraph$ForceGraphInstance & boolean;
    enableZoomPanInteraction(
      enable?: boolean
    ): ForceGraph$ForceGraphInstance & boolean;
    enablePointerInteraction(
      enable?: boolean
    ): ForceGraph$ForceGraphInstance & boolean;
  }
  declare export default typeof ForceGraph;
}
