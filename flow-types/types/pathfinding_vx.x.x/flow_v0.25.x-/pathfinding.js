declare var npm$namespace$Util: {
  smoothenPath: typeof Util$smoothenPath,
  compressPath: typeof Util$compressPath,
  expandPath: typeof Util$expandPath
};
declare function Util$smoothenPath(
  grid: Pathfinding$Grid,
  path: number[][]
): number[][];

declare function Util$compressPath(path: number[][]): number[][];

declare function Util$expandPath(path: number[][]): number[][];

declare var npm$namespace$Heuristic: {
  manhattan: typeof Heuristic$manhattan,
  euclidean: typeof Heuristic$euclidean,
  octile: typeof Heuristic$octile,
  chebyshev: typeof Heuristic$chebyshev
};
declare function Heuristic$manhattan(dx: number, dy: number): number;

declare function Heuristic$euclidean(dx: number, dy: number): number;

declare function Heuristic$octile(dx: number, dy: number): number;

declare function Heuristic$chebyshev(dx: number, dy: number): number;

declare var npm$namespace$Pathfinding: {
  Grid: typeof Pathfinding$Grid,
  AStarFinder: typeof Pathfinding$AStarFinder,
  BestFirstFinder: typeof Pathfinding$BestFirstFinder,
  BiAStarFinder: typeof Pathfinding$BiAStarFinder,
  BiBestFirstFinder: typeof Pathfinding$BiBestFirstFinder,
  BiBreadthFirstFinder: typeof Pathfinding$BiBreadthFirstFinder,
  BiDijkstraFinder: typeof Pathfinding$BiDijkstraFinder,
  BreadthFirstFinder: typeof Pathfinding$BreadthFirstFinder,
  DijkstraFinder: typeof Pathfinding$DijkstraFinder,
  IDAStarFinder: typeof Pathfinding$IDAStarFinder,
  JPFAlwaysMoveDiagonally: typeof Pathfinding$JPFAlwaysMoveDiagonally,
  JPFMoveDiagonallyIfAtMostOneObstacle: typeof Pathfinding$JPFMoveDiagonallyIfAtMostOneObstacle,
  JPFMoveDiagonallyIfNoObstacles: typeof Pathfinding$JPFMoveDiagonallyIfNoObstacles,
  JPFNeverMoveDiagonally: typeof Pathfinding$JPFNeverMoveDiagonally,
  JumpPointFinder: typeof Pathfinding$JumpPointFinder
};
declare export class Pathfinding$DiagonalMovement {
  constructor(...args: empty): mixed;
  static +Always: Class<Pathfinding$DiagonalMovement__Always> &
    Pathfinding$DiagonalMovement__Always &
    1; // 1
  static +Never: Class<Pathfinding$DiagonalMovement__Never> &
    Pathfinding$DiagonalMovement__Never &
    2; // 2
  static +IfAtMostOneObstacle: Class<Pathfinding$DiagonalMovement__IfAtMostOneObstacle> &
    Pathfinding$DiagonalMovement__IfAtMostOneObstacle &
    3; // 3
  static +OnlyWhenNoObstacle: Class<Pathfinding$DiagonalMovement__OnlyWhenNoObstacle> &
    Pathfinding$DiagonalMovement__OnlyWhenNoObstacle &
    4; // 4
}

declare class Pathfinding$DiagonalMovement__Always
  mixins Pathfinding$DiagonalMovement {}
declare class Pathfinding$DiagonalMovement__Never
  mixins Pathfinding$DiagonalMovement {}
declare class Pathfinding$DiagonalMovement__IfAtMostOneObstacle
  mixins Pathfinding$DiagonalMovement {}
declare class Pathfinding$DiagonalMovement__OnlyWhenNoObstacle
  mixins Pathfinding$DiagonalMovement {}

declare interface Pathfinding$Node {
  x: number;
  y: number;
  walkable: boolean;
}

declare interface Pathfinding$Heuristic {
  heuristic?: (dx: number, dy: number) => number;
}

declare type Pathfinding$FinderOptions = {
  diagonalMovement?: Pathfinding$DiagonalMovement,
  weight?: number
} & Pathfinding$Heuristic;

declare type Pathfinding$IDAStarFinderOptions = {
  trackRecursion?: boolean,
  timeLimit?: number
} & Pathfinding$FinderOptions;

declare type Pathfinding$JumpPointFinderBaseOptions = {
  trackJumpRecursion?: boolean
} & Pathfinding$Heuristic;

declare type Pathfinding$JumpPointFinderOptions = {
  diagonalMovement?: Pathfinding$DiagonalMovement
} & Pathfinding$Heuristic;

declare interface Pathfinding$BiBreadthFirstFinderOptions {
  diagonalMovement?: Pathfinding$DiagonalMovement;
}

declare interface Pathfinding$Grid {
  new(width: number, height: number): Pathfinding$Grid;
  new(matrix: number[][]): Pathfinding$Grid;
  setWalkableAt(x: number, y: number, walkable: boolean): void;
  clone(): Pathfinding$Grid;
  getNodeAt(): Pathfinding$Pathfinding$Node;
  getNeighbors(
    node: Pathfinding$Pathfinding$Node,
    diagonalMovement: Pathfinding$DiagonalMovement
  ): Pathfinding$Pathfinding$Node[];
  isWalkableAt(x: number, y: number): boolean;
  isInside(x: number, y: number): boolean;
  width: number;
  height: number;
}

declare interface Pathfinding$Finder {
  findPath(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    matrix: Pathfinding$Grid
  ): number[][];
}

declare type Pathfinding$AStarFinder = {
  new(): Pathfinding$AStarFinder,
  new(opt: Pathfinding$FinderOptions): Pathfinding$AStarFinder
} & Pathfinding$Finder;

declare type Pathfinding$BestFirstFinder = {
  new(): Pathfinding$BestFirstFinder,
  new(opt: Pathfinding$JumpPointFinderOptions): Pathfinding$BestFirstFinder
} & Pathfinding$AStarFinder;

declare type Pathfinding$BiAStarFinder = {
  new(): Pathfinding$BiAStarFinder,
  new(opt: Pathfinding$JumpPointFinderOptions): Pathfinding$BiAStarFinder
} & Pathfinding$Finder;

declare type Pathfinding$BiBestFirstFinder = {
  new(): Pathfinding$BiBestFirstFinder,
  new(opt: Pathfinding$JumpPointFinderOptions): Pathfinding$BiBestFirstFinder
} & Pathfinding$BiAStarFinder;

declare type Pathfinding$BiBreadthFirstFinder = {
  new(): Pathfinding$BiBreadthFirstFinder,
  new(
    opt: Pathfinding$BiBreadthFirstFinderOptions
  ): Pathfinding$BiBreadthFirstFinder
} & Pathfinding$Finder;

declare type Pathfinding$BiDijkstraFinder = {
  new(): Pathfinding$BiDijkstraFinder,
  new(
    opt: Pathfinding$BiBreadthFirstFinderOptions
  ): Pathfinding$BiDijkstraFinder
} & Pathfinding$BiAStarFinder;

declare type Pathfinding$BreadthFirstFinder = {
  new(): Pathfinding$BreadthFirstFinder,
  new(
    opt: Pathfinding$BiBreadthFirstFinderOptions
  ): Pathfinding$BreadthFirstFinder
} & Pathfinding$Finder;

declare type Pathfinding$DijkstraFinder = {
  new(): Pathfinding$DijkstraFinder,
  new(opt: Pathfinding$BiBreadthFirstFinderOptions): Pathfinding$DijkstraFinder
} & Pathfinding$AStarFinder;

declare type Pathfinding$IDAStarFinder = {
  new(): Pathfinding$IDAStarFinder,
  new(opt: Pathfinding$IDAStarFinderOptions): Pathfinding$IDAStarFinder
} & Pathfinding$Finder;

declare type Pathfinding$JumpPointFinderBase = {
  new(): Pathfinding$JumpPointFinderBase,
  new(
    opt: Pathfinding$JumpPointFinderBaseOptions
  ): Pathfinding$JumpPointFinderBase
} & Pathfinding$Finder;

declare type Pathfinding$JPFAlwaysMoveDiagonally = {
  new(): Pathfinding$JPFAlwaysMoveDiagonally,
  new(
    opt: Pathfinding$JumpPointFinderBaseOptions
  ): Pathfinding$JPFAlwaysMoveDiagonally
} & Pathfinding$JumpPointFinderBase;

declare type Pathfinding$JPFMoveDiagonallyIfAtMostOneObstacle = {
  new(): Pathfinding$JPFMoveDiagonallyIfAtMostOneObstacle,
  new(
    opt: Pathfinding$JumpPointFinderBaseOptions
  ): Pathfinding$JPFMoveDiagonallyIfAtMostOneObstacle
} & Pathfinding$JumpPointFinderBase;

declare type Pathfinding$JPFMoveDiagonallyIfNoObstacles = {
  new(): Pathfinding$JPFMoveDiagonallyIfNoObstacles,
  new(
    opt: Pathfinding$JumpPointFinderBaseOptions
  ): Pathfinding$JPFMoveDiagonallyIfNoObstacles
} & Pathfinding$JumpPointFinderBase;

declare type Pathfinding$JPFNeverMoveDiagonally = {
  new(): Pathfinding$JPFNeverMoveDiagonally,
  new(
    opt: Pathfinding$JumpPointFinderBaseOptions
  ): Pathfinding$JPFNeverMoveDiagonally
} & Pathfinding$JumpPointFinderBase;

declare interface Pathfinding$JumpPointFinder {
  (
    opt: Pathfinding$JumpPointFinderOptions
  ):
    | Pathfinding$JPFNeverMoveDiagonally
    | Pathfinding$JPFAlwaysMoveDiagonally
    | Pathfinding$JPFMoveDiagonallyIfNoObstacles
    | Pathfinding$JPFMoveDiagonallyIfAtMostOneObstacle;
}

declare export var Pathfinding$Grid: Pathfinding$Grid;

declare export var Pathfinding$AStarFinder: Pathfinding$AStarFinder;

declare export var Pathfinding$BestFirstFinder: Pathfinding$BestFirstFinder;

declare export var Pathfinding$BiAStarFinder: Pathfinding$BiAStarFinder;

declare export var Pathfinding$BiBestFirstFinder: Pathfinding$BiBestFirstFinder;

declare export var Pathfinding$BiBreadthFirstFinder: Pathfinding$BiBreadthFirstFinder;

declare export var Pathfinding$BiDijkstraFinder: Pathfinding$BiDijkstraFinder;

declare export var Pathfinding$BreadthFirstFinder: Pathfinding$BreadthFirstFinder;

declare export var Pathfinding$DijkstraFinder: Pathfinding$DijkstraFinder;

declare export var Pathfinding$IDAStarFinder: Pathfinding$IDAStarFinder;

declare export var Pathfinding$JPFAlwaysMoveDiagonally: Pathfinding$JPFAlwaysMoveDiagonally;

declare export var Pathfinding$JPFMoveDiagonallyIfAtMostOneObstacle: Pathfinding$JPFMoveDiagonallyIfAtMostOneObstacle;

declare export var Pathfinding$JPFMoveDiagonallyIfNoObstacles: Pathfinding$JPFMoveDiagonallyIfNoObstacles;

declare export var Pathfinding$JPFNeverMoveDiagonally: Pathfinding$JPFNeverMoveDiagonally;

declare export var Pathfinding$JumpPointFinder: Pathfinding$JumpPointFinder;
declare module "pathfinding" {
  declare module.exports: typeof Pathfinding;
}
