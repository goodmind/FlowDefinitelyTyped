declare module "sigmajs" {
  declare interface SigmaJs$Animation {
    camera(
      camera: SigmaJs$Camera,
      target: {
        [index: string]: any
      },
      options: {
        [index: string]: any
      }
    ): number;
  }

  declare interface SigmaJs$Camera {
    angle: number;
    cameraPosition(
      x: number,
      y: number
    ): {
      x: number,
      y: number
    };
    goTo(settings: {
      [index: string]: any
    }): void;
    graphPosition(
      x: number,
      y: number
    ): {
      x: number,
      y: number
    };
    ratio: number;
    readPrefix: string;
    settings(setting: string): any;
    x: number;
    y: number;
  }

  declare interface SigmaJs$Canvas {
    edges: {
      [renderType: string]: (
        edge: SigmaJs$Edge,
        source: SigmaJs$Node,
        target: SigmaJs$Node,
        ...a: any[]
      ) => void
    };
    labels: {
      [renderType: string]: (node: SigmaJs$Node, ...a: any[]) => void
    };
    nodes: {
      [renderType: string]: (node: SigmaJs$Node, ...a: any[]) => void
    };
  }

  declare interface SigmaJs$Classes {
    configurable: SigmaJs$Configurable;
    graph: SigmaJs$Graph;
  }

  declare interface SigmaJs$Configurable {
    new(setting: SigmaJs$Settings): SigmaJs$Configurable;
    new(settings: SigmaJs$Settings[]): SigmaJs$Configurable;
    (key: string): string;
  }

  declare interface SigmaJs$CustomShapes {
    init(sigma: SigmaJs$Sigma): void;
  }

  declare interface SigmaJs$DragNodes {
    (sigma: SigmaJs$Sigma, renderer: SigmaJs$Renderer): SigmaJs$DragNodes;
  }

  declare interface SigmaJs$Edge {
    [key: string]: any;
    color?: string;
    id: string;
    size?: number;
    source: string;
    target: string;
  }

  declare interface SigmaJs$JsonParser {
    (
      target: string,
      sigma: SigmaJs$Sigma,
      callback: (graph: SigmaJs$Sigma) => void
    ): void;
  }

  declare interface SigmaJs$GexfParser {
    (
      target: string,
      sigma: SigmaJs$Sigma,
      callback: (graph: SigmaJs$Sigma) => void
    ): void;
  }

  declare interface SigmaJs$Graph {
    addEdge(edge: SigmaJs$Edge): SigmaJs$Graph;
    addNode(node: SigmaJs$Node): SigmaJs$Graph;
    addMethod(name: string, method: (input: any) => any): void;
    clear(): SigmaJs$Graph;
    degree(id: string): number;
    degree(id: string, type: string): number;
    degree(ids: string[]): number[];
    degree(ids: string[], type: string): number[];
    dropEdge(id: string): SigmaJs$Graph;
    dropNode(id: string): SigmaJs$Graph;
    edges(): SigmaJs$Edge[];
    edges(id: string): SigmaJs$Edge;
    edges(ids: string[]): SigmaJs$Edge[];
    kill(): SigmaJs$Graph;
    nodes(): SigmaJs$Node[];
    nodes(id: string): SigmaJs$Node;
    nodes(ids: string[]): SigmaJs$Node[];
  }

  declare interface SigmaJs$GraphData {
    edges: SigmaJs$Edge[];
    nodes: SigmaJs$Node[];
  }

  declare interface SigmaJs$Image {
    clip?: number;
    scale?: number;
    url?: string;
    x?: number;
    y?: number;
  }

  declare interface SigmaJs$Miscellaneous {
    animation: SigmaJs$Animation;
  }

  declare interface SigmaJs$Node {
    [key: string]: any;
    color?: string;
    id: string;
    image?: any;
    label?: string;
    size?: number;
    type?: string;
    x?: number;
    y?: number;
  }

  declare interface SigmaJs$Parsers {
    json: SigmaJs$JsonParser;
    gexf: SigmaJs$GexfParser;
  }

  declare interface SigmaJs$Plugins {
    dragNodes: SigmaJs$DragNodes;
  }

  declare interface SigmaJs$Renderer {
    container: HTMLElement;
    refresh(): SigmaJs$Sigma;
    render(): SigmaJs$Sigma;
    resize(): SigmaJs$Sigma;
    settings(settings: SigmaJs$Settings): void;
  }

  declare interface SigmaJs$RendererConfigs {
    container?: Element;
    id?: string;
    type?: string;
  }

  declare interface SigmaJs$ShapeLibrary {
    enumerate(): any;
  }

  declare interface SigmaJs$Sigma {
    addRenderer(): SigmaJs$Renderer;
    addRenderer(configs: SigmaJs$RendererConfigs): SigmaJs$Renderer;
    bind(event: string, callback: (e: any) => void): void;
    cameras: SigmaJs$Camera[];
    graph: SigmaJs$Graph;
    killRenderer(renderer: string): SigmaJs$Sigma;
    killRenderer(renderer: SigmaJs$Renderer): SigmaJs$Sigma;
    kill(): void;
    refresh(): void;
    renderers: SigmaJs$Renderer[];
    settings(key: string): any;
    settings(settings: SigmaJs$Settings): void;
    configForceAtlas2(configs: {
      [key: string]: any
    }): void;
    isForceAtlas2Running(): boolean;
    killForceAtlas2(): void;
    startForceAtlas2(): void;
    startForceAtlas2(configs: {
      [key: string]: any
    }): void;
    stopForceAtlas2(): void;
  }

  declare interface SigmaJs$SigmaConfigs {
    container?: Element;
    graph?: SigmaJs$GraphData;
    id?: string;
    renderers?: SigmaJs$Renderer[];
    settings?: {
      [index: string]: any
    };
  }

  declare interface SigmaJs$SigmaFactory {
    new(): SigmaJs$Sigma;
    new(container: string): SigmaJs$Sigma;
    new(container: Element): SigmaJs$Sigma;
    new(configuration: SigmaJs$SigmaConfigs): SigmaJs$Sigma;
    canvas: SigmaJs$Canvas;
    classes: SigmaJs$Classes;
    misc: SigmaJs$Miscellaneous;
    parsers: SigmaJs$Parsers;
    plugins: SigmaJs$Plugins;
    svg: SigmaJs$SVG;
  }

  declare interface SigmaJs$Settings {
    clone?: boolean;
    immutable?: boolean;
    verbose?: boolean;
    defaultNodeType?: string;
    defaultEdgeType?: string;
    defaultLabelColor?: string;
    defaultEdgeColor?: string;
    defaultNodeColor?: string;
    defaultLabelSize?: string;
    edgeColor?: string;
    minArrowSize?: number;
    font?: string;
    fontStyle?: string;
    labelAlignment?: string;
    labelColor?: string;
    labelSize?: string;
    labelSizeRatio?: string;
    labelThreshold?: number;
    webglOversamplingRatio?: number;
    borderSize?: number;
    defaultNodeBorderColor?: string;
    hoverFont?: number;
    hoverFontStyle?: string;
    labelHoverShadow?: string;
    labelHoverShadowColor?: string;
    nodeHoverColor?: string;
    defaultNodeHoverColor?: string;
    labelHoverBGColor?: string;
    defaultHoverLabelBGColor?: string;
    labelHoverColor?: string;
    defaultLabelHoverColor?: string;
    singleHover?: boolean;
    edgeHoverColor?: string;
    edgeHoverSizeRatio?: number;
    defaultEdgeHoverColor?: string;
    edgeHoverExtremities?: boolean;
    drawLabels?: boolean;
    drawEdges?: boolean;
    drawNodes?: boolean;
    batchEdgesDrawing?: boolean;
    hideEdgesOnMove?: boolean;
    canvasEdgesBatchSize?: number;
    webglEdgesBatchSize?: number;
    scalingMode?: string;
    sideMargin?: number;
    minEdgeSize?: number;
    maxEdgeSize?: number;
    minNodeSize?: number;
    maxNodeSize?: number;
    touchEnabled?: boolean;
    mouseEnabled?: boolean;
    mouseWheelEnabled?: boolean;
    doubleClickEnabled?: boolean;
    eventsEnabled?: boolean;
    zoomingRatio?: number;
    doubleClickZoomingRatio?: number;
    zoomMin?: number;
    zoomMax?: number;
    mouseZoomDuration?: number;
    doubleClickZoomDuration?: number;
    mouseInertiaDuration?: number;
    mouseInertiaRatio?: number;
    touchInertiaDuration?: number;
    touchInertiaRatio?: number;
    doubleClickTimeout?: number;
    doubleTapTimeout?: number;
    dragTimeout?: number;
    autoResize?: boolean;
    autoRescale?: any;
    enableCamera?: boolean;
    enableHovering?: boolean;
    enableEdgeHovering?: boolean;
    edgeHoverPrecision?: number;
    rescaleIgnoreSize?: boolean;
    skipErrors?: boolean;
    nodesPowRatio?: number;
    edgesPowRatio?: number;
    animationsTime?: number;
  }

  declare interface SigmaJs$SVG {
    edges: {
      labels: SigmaJs$SVGEdgeLabels,
      [renderType: string]:
        | SigmaJs$SVGObject<SigmaJs$SigmaJs$Edge>
        | SigmaJs$SVGEdgeLabels
    };
    labels: {
      [renderType: string]: SigmaJs$SVGObject<SigmaJs$SigmaJs$Node>
    };
    nodes: {
      [renderType: string]: SigmaJs$SVGObject<SigmaJs$SigmaJs$Node>
    };
  }

  declare interface SigmaJs$SVGEdgeLabels {
    [renderType: string]: SigmaJs$SVGObject<SigmaJs$SigmaJs$Edge>;
  }

  declare interface SigmaJs$SVGObject<T> {
    create: (object: T, ...a: any[]) => Element;
    update: (object: T, ...a: any[]) => void;
  }
  declare var sigma: SigmaJs$SigmaJs$SigmaFactory;
  declare var SigmaJs$CustomShapes: SigmaJs$SigmaJs$CustomShapes;
  declare var SigmaJs$ShapeLibrary: SigmaJs$SigmaJs$CustomShapes;
}
