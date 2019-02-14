declare module "dagre" {
  declare var npm$namespace$graphlib: {
    Graph: typeof graphlib$Graph,
    json: typeof npm$namespace$graphlib$json,
    alg: typeof npm$namespace$graphlib$alg
  };
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

  declare var npm$namespace$graphlib$json: {
    read: typeof graphlib$json$read,
    write: typeof graphlib$json$write
  };
  declare function graphlib$json$read(graph: any): graphlib$Graph;

  declare function graphlib$json$write(graph: graphlib$Graph): any;

  declare var npm$namespace$graphlib$alg: {
    components: typeof graphlib$alg$components,
    dijkstra: typeof graphlib$alg$dijkstra,
    dijkstraAll: typeof graphlib$alg$dijkstraAll,
    findCycles: typeof graphlib$alg$findCycles,
    floydWarchall: typeof graphlib$alg$floydWarchall,
    isAcyclic: typeof graphlib$alg$isAcyclic,
    postorder: typeof graphlib$alg$postorder,
    preorder: typeof graphlib$alg$preorder,
    prim: typeof graphlib$alg$prim,
    tarjam: typeof graphlib$alg$tarjam,
    topsort: typeof graphlib$alg$topsort
  };
  declare function graphlib$alg$components(graph: graphlib$Graph): string[][];

  declare function graphlib$alg$dijkstra(
    graph: graphlib$Graph,
    source: string,
    weightFn?: WeightFn,
    edgeFn?: EdgeFn
  ): any;

  declare function graphlib$alg$dijkstraAll(
    graph: graphlib$Graph,
    weightFn?: WeightFn,
    edgeFn?: EdgeFn
  ): any;

  declare function graphlib$alg$findCycles(graph: graphlib$Graph): string[][];

  declare function graphlib$alg$floydWarchall(
    graph: graphlib$Graph,
    weightFn?: WeightFn,
    edgeFn?: EdgeFn
  ): any;

  declare function graphlib$alg$isAcyclic(graph: graphlib$Graph): boolean;

  declare function graphlib$alg$postorder(
    graph: graphlib$Graph,
    nodeNames: string | string[]
  ): string[];

  declare function graphlib$alg$preorder(
    graph: graphlib$Graph,
    nodeNames: string | string[]
  ): string[];

  declare function graphlib$alg$prim(
    graph: graphlib$Graph,
    weightFn?: WeightFn
  ): graphlib$Graph;

  declare function graphlib$alg$tarjam(graph: graphlib$Graph): string[][];

  declare function graphlib$alg$topsort(graph: graphlib$Graph): string[];

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
    graph: graphlib$Graph,
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
