declare module "javascript-astar" {
  declare class Graph {
    grid: Array<Array<GridNode>>;
    constructor(
      grid: Array<Array<number>>,
      options?: {
        diagonal?: boolean
      }
    ): this;
  }
  declare class GridNode {
    x: number;
    y: number;
  }
  declare interface Heuristic {
    (
      pos0: {
        x: number,
        y: number
      },
      pos1: {
        x: number,
        y: number
      }
    ): number;
  }
  declare interface Heuristics {
    manhattan: Heuristic;
    diagonal: Heuristic;
  }

  declare var npm$namespace$astar: {
    search: typeof astar$search,
    heuristics: typeof astar$heuristics
  };
  declare function astar$search(
    graph: Graph,
    start: {
      x: number,
      y: number
    },
    end: {
      x: number,
      y: number
    },
    options?: {
      closest?: boolean,
      heuristic?: Heuristic
    }
  ): Array<GridNode>;

  declare var astar$heuristics: Heuristics;
}
