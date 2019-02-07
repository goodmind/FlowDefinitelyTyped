declare module "jsgraph" {
  declare interface jsgraph$jsGraphStatic {
    directed: jsgraph$Directed;
  }

  declare export interface jsgraph$VertexRequest {
    u: string;
    p: any;
  }

  declare export interface jsgraph$JsGraphResponse {
    error?: any;
    result?: any;
  }

  declare export interface jsgraph$Edge {
    u: string;
    v: string;
  }

  declare export interface jsgraph$EdgeRequest {
    e: jsgraph$Edge;
    p: any;
  }

  declare export interface jsgraph$DirectedGraph {
    new(): jsgraph$DirectedGraph;
    setGraphName(name: string): jsgraph$JsGraphResponse;
    getGraphName(): string;
    setGraphDescription(description: string): jsgraph$JsGraphResponse;
    getGraphDescription(): string;
    verticesCount(): number;
    getVertices(): string[];
    getEdgeCount(): number;
    getEdeges(): jsgraph$Edge[];
    rootVerticesCount(): number;
    getRootVertices(): string[];
    leafVerticesCount(): number;
    getLeafVertices(): string[];
    toObject(): string;
    toJSON(): string;
    stringify(replacer: Function, space?: number): string;
    fromObject(graph: any): jsgraph$JsGraphResponse;
    addVertex(vertex: jsgraph$VertexRequest): jsgraph$JsGraphResponse;
    removeVertex(vertex: string): boolean;
    getVertexProperty(vertex: string): any;
    setVertexProperty(vertex: jsgraph$VertexRequest): jsgraph$JsGraphResponse;
    hasVertexProperty(vertex: string): boolean;
    clearVertexProperty(vertex: string): boolean;
    inDegree(vertex: string): number;
    inEdges(vertex: string): jsgraph$Edge[];
    outDegree(vertex: string): number;
    outEdges(vertex: string): jsgraph$Edge[];
    addEdge(request: jsgraph$EdgeRequest): jsgraph$JsGraphResponse;
    isEdge(edge: jsgraph$Edge): boolean;
    removeEdge(edge: jsgraph$Edge): jsgraph$JsGraphResponse;
    getEdgeProperty(edge: jsgraph$Edge): any;
    setEdgeProperty(request: jsgraph$EdgeRequest): jsgraph$JsGraphResponse;
    hasEdgeProperty(edge: jsgraph$Edge): boolean;
    clearEdgeProperty(edge: jsgraph$Edge): boolean;
  }

  declare export interface jsgraph$Visitor {
    initializeVertex(req: {
      u: string,
      g: jsgraph$DirectedGraph
    }): void;
    startVertex(req: {
      u: string,
      g: jsgraph$DirectedGraph
    }): void;
    discoverVertex(req: {
      u: string,
      g: jsgraph$DirectedGraph
    }): void;
    examineVertex(req: {
      u: string,
      g: jsgraph$DirectedGraph
    }): void;
    examineEdge(req: {
      e: jsgraph$Edge,
      g: jsgraph$DirectedGraph
    }): void;
    nonTreeEdge(req: {
      e: jsgraph$Edge,
      g: jsgraph$DirectedGraph
    }): void;
    grayTarget(req: {
      e: jsgraph$Edge,
      g: jsgraph$DirectedGraph
    }): void;
    blackTarget(req: {
      e: jsgraph$Edge,
      g: jsgraph$DirectedGraph
    }): void;
    finishVertex(req: {
      u: string,
      g: jsgraph$DirectedGraph
    }): void;
  }

  declare export interface jsgraph$TraversalContext {
    searchStatus: string;
    colorMap: any;
    undiscoveredMap: any;
  }

  declare export interface jsgraph$TraversalOptions {
    startVector: string | string[];
    allowEmptyStartVector: boolean;
    signalStart: boolean;
    traverseContext: jsgraph$TraversalContext;
  }

  declare export interface jsgraph$TraversalParams {
    digraph: jsgraph$DirectedGraph;
    visitor: jsgraph$Visitor;
    options?: jsgraph$TraversalOptions;
  }

  declare export interface jsgraph$TraversalResult {
    error?: any;
    result?: jsgraph$TraversalContext;
  }

  declare export type jsgraph$colors = {
    white: 0,
    gray: 1,
    black: 2
  };

  declare export interface jsgraph$Directed {
    breadthFirstTraverse(
      params: jsgraph$TraversalParams
    ): jsgraph$TraversalResult;
    jsgraph$colors: jsgraph$colors;
    create(): {
      result: jsgraph$DirectedGraph
    };
    createTraversalContext(req: {
      dirgaph: jsgraph$DirectedGraph
    }): jsgraph$TraversalContext;
    depthFirstTraverse(
      params: jsgraph$TraversalParams
    ): jsgraph$TraversalResult;
    transpose(
      graph: jsgraph$DirectedGraph
    ): {
      error?: any,
      result?: jsgraph$DirectedGraph
    };
    directedGraph: jsgraph$DirectedGraph;
  }
  declare var jsgraph: jsgraph$jsgraph$jsGraphStatic;
  declare module.exports: typeof jsgraph;
}
