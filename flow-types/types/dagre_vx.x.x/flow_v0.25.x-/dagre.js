declare module "dagre" {
  declare class graphlib$Graph {
    constructor(opt?: {
      directed?: boolean,
      multigraph?: boolean,
      compound?: boolean
    }): this;
    graph(): GraphLabel;
    isDirected(): boolean;
    isMultiGraph(): boolean;
    setGraph(label: GraphLabel): graphlib$Graph;
    edge(edgeObj: Edge): GraphEdge;
    edge(outNodeName: string, inNodeName: string, name?: string): GraphEdge;
    edgeCount(): number;
    edges(): Edge[];
    hasEdge(edgeObj: Edge): boolean;
    hasEdge(outNodeName: string, inNodeName: string, name?: string): boolean;
    inEdges(inNodeName: string, outNodeName?: string): Edge[] | void;
    outEdges(outNodeName: string, inNodeName?: string): Edge[] | void;
    removeEdge(outNodeName: string, inNodeName: string): graphlib$Graph;
    setDefaultEdgeLabel(
      callback: string | ((edge: Edge) => string | Label)
    ): graphlib$Graph;
    setEdge(
      params: Edge,
      value?:
        | string
        | {
            [key: string]: any
          }
    ): graphlib$Graph;
    setEdge(
      sourceId: string,
      targetId: string,
      value?: string | Label,
      name?: string
    ): graphlib$Graph;
    children(parentName: string): string | void;
    hasNode(name: string): boolean;
    neighbors(name: string): Node[] | void;
    node(id: string | Label): Node;
    nodeCount(): number;
    nodes(): string[];
    parent(childName: string): string | void;
    predecessors(name: string): Node[] | void;
    removeNode(name: string): graphlib$Graph;
    setDefaultNodeLabel(
      callback: string | ((nodeId: string) => string | Label)
    ): graphlib$Graph;
    setNode(name: string, label: string | Label): graphlib$Graph;
    setParent(childName: string, parentName: string): void;
    sinks(): Node[];
    sources(): Node[];
    successors(name: string): Node[] | void;
  }

  declare var npm$namespace$json: {
    read: typeof json$read,
    write: typeof json$write
  };
  declare function json$read(graph: any): graphlib$Graph;

  declare function json$write(graph: graphlib$Graph): any;

  declare var npm$namespace$alg: {
    components: typeof alg$components,
    dijkstra: typeof alg$dijkstra,
    dijkstraAll: typeof alg$dijkstraAll,
    findCycles: typeof alg$findCycles,
    floydWarchall: typeof alg$floydWarchall,
    isAcyclic: typeof alg$isAcyclic,
    postorder: typeof alg$postorder,
    preorder: typeof alg$preorder,
    prim: typeof alg$prim,
    tarjam: typeof alg$tarjam,
    topsort: typeof alg$topsort
  };
  declare function alg$components(graph: graphlib$Graph): string[][];

  declare function alg$dijkstra(
    graph: graphlib$Graph,
    source: string,
    weightFn?: WeightFn,
    edgeFn?: EdgeFn
  ): any;

  declare function alg$dijkstraAll(
    graph: graphlib$Graph,
    weightFn?: WeightFn,
    edgeFn?: EdgeFn
  ): any;

  declare function alg$findCycles(graph: graphlib$Graph): string[][];

  declare function alg$floydWarchall(
    graph: graphlib$Graph,
    weightFn?: WeightFn,
    edgeFn?: EdgeFn
  ): any;

  declare function alg$isAcyclic(graph: graphlib$Graph): boolean;

  declare function alg$postorder(
    graph: graphlib$Graph,
    nodeNames: string | string[]
  ): string[];

  declare function alg$preorder(
    graph: graphlib$Graph,
    nodeNames: string | string[]
  ): string[];

  declare function alg$prim(
    graph: graphlib$Graph,
    weightFn?: WeightFn
  ): graphlib$Graph;

  declare function alg$tarjam(graph: graphlib$Graph): string[][];

  declare function alg$topsort(graph: graphlib$Graph): string[];

  declare export interface Label {
    [key: string]: any;
  }
  declare export type WeightFn = (edge: Edge) => number;
  declare export type EdgeFn = (outNodeName: string) => GraphEdge[];
  declare export interface GraphLabel {
    width?: number;
    height?: number;
    compound?: boolean;
    rankdir?: string;
    align?: string;
    nodesep?: number;
    edgesep?: number;
    ranksep?: number;
    marginx?: number;
    marginy?: number;
    acyclicer?: string;
    ranker?: string;
  }
  declare export interface NodeConfig {
    width?: number;
    height?: number;
  }
  declare export interface EdgeConfig {
    minlen?: number;
    weight?: number;
    width?: number;
    height?: number;
    lablepos?: "l" | "c" | "r";
    labeloffest?: number;
  }
  declare export function layout(
    graph: graphlib$graphlib$Graph,
    layout?: GraphLabel & NodeConfig & EdgeConfig
  ): void;

  declare export interface Edge {
    v: string;
    w: string;
    name?: string;
  }
  declare export interface GraphEdge {
    points: Array<{
      x: number,
      y: number
    }>;
    [key: string]: any;
  }
  declare export interface Node {
    x: number;
    y: number;
    width: number;
    height: number;
    [key: string]: any;
  }
}
