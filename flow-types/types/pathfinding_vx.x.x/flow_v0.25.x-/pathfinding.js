declare module "pathfinding" {
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
    JumpPointFinder: typeof Pathfinding$JumpPointFinder,
    DiagonalMovement: typeof Pathfinding$DiagonalMovement,

    Heuristic: typeof npm$namespace$Pathfinding$Heuristic,
    Util: typeof npm$namespace$Pathfinding$Util
  };

  declare var npm$namespace$Pathfinding$Heuristic: {
    manhattan: typeof Pathfinding$Heuristic$manhattan,
    euclidean: typeof Pathfinding$Heuristic$euclidean,
    octile: typeof Pathfinding$Heuristic$octile,
    chebyshev: typeof Pathfinding$Heuristic$chebyshev
  };
  declare function Pathfinding$Heuristic$manhattan(
    dx: number,
    dy: number
  ): number;

  declare function Pathfinding$Heuristic$euclidean(
    dx: number,
    dy: number
  ): number;

  declare function Pathfinding$Heuristic$octile(dx: number, dy: number): number;

  declare function Pathfinding$Heuristic$chebyshev(
    dx: number,
    dy: number
  ): number;

  declare var npm$namespace$Pathfinding$Util: {
    smoothenPath: typeof Pathfinding$Util$smoothenPath,
    compressPath: typeof Pathfinding$Util$compressPath,
    expandPath: typeof Pathfinding$Util$expandPath
  };
  declare function Pathfinding$Util$smoothenPath(
    grid: Pathfinding$Grid,
    path: number[][]
  ): number[][];

  declare function Pathfinding$Util$compressPath(path: number[][]): number[][];

  declare function Pathfinding$Util$expandPath(path: number[][]): number[][];

  declare export var Pathfinding$DiagonalMovement: {|
    +Always: 1, // 1
    +Never: 2, // 2
    +IfAtMostOneObstacle: 3, // 3
    +OnlyWhenNoObstacle: 4 // 4
  |};

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
  } & Heuristic;

  declare type Pathfinding$IDAStarFinderOptions = {
    trackRecursion?: boolean,
    timeLimit?: number
  } & FinderOptions;

  declare type Pathfinding$JumpPointFinderBaseOptions = {
    trackJumpRecursion?: boolean
  } & Heuristic;

  declare type Pathfinding$JumpPointFinderOptions = {
    diagonalMovement?: Pathfinding$DiagonalMovement
  } & Heuristic;

  declare interface Pathfinding$BiBreadthFirstFinderOptions {
    diagonalMovement?: Pathfinding$DiagonalMovement;
  }

  declare interface Pathfinding$Grid {
    new(width: number, height: number): Pathfinding$Grid;
    new(matrix: number[][]): Pathfinding$Grid;
    setWalkableAt(x: number, y: number, walkable: boolean): void;
    clone(): Pathfinding$Grid;
    getNodeAt(): Pathfinding$Node;
    getNeighbors(
      node: Pathfinding$Node,
      diagonalMovement: Pathfinding$DiagonalMovement
    ): Pathfinding$Node[];
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
  } & Finder;

  declare type Pathfinding$BestFirstFinder = {
    new(): Pathfinding$BestFirstFinder,
    new(opt: Pathfinding$JumpPointFinderOptions): Pathfinding$BestFirstFinder
  } & AStarFinder;

  declare type Pathfinding$BiAStarFinder = {
    new(): Pathfinding$BiAStarFinder,
    new(opt: Pathfinding$JumpPointFinderOptions): Pathfinding$BiAStarFinder
  } & Finder;

  declare type Pathfinding$BiBestFirstFinder = {
    new(): Pathfinding$BiBestFirstFinder,
    new(opt: Pathfinding$JumpPointFinderOptions): Pathfinding$BiBestFirstFinder
  } & BiAStarFinder;

  declare type Pathfinding$BiBreadthFirstFinder = {
    new(): Pathfinding$BiBreadthFirstFinder,
    new(
      opt: Pathfinding$BiBreadthFirstFinderOptions
    ): Pathfinding$BiBreadthFirstFinder
  } & Finder;

  declare type Pathfinding$BiDijkstraFinder = {
    new(): Pathfinding$BiDijkstraFinder,
    new(
      opt: Pathfinding$BiBreadthFirstFinderOptions
    ): Pathfinding$BiDijkstraFinder
  } & BiAStarFinder;

  declare type Pathfinding$BreadthFirstFinder = {
    new(): Pathfinding$BreadthFirstFinder,
    new(
      opt: Pathfinding$BiBreadthFirstFinderOptions
    ): Pathfinding$BreadthFirstFinder
  } & Finder;

  declare type Pathfinding$DijkstraFinder = {
    new(): Pathfinding$DijkstraFinder,
    new(
      opt: Pathfinding$BiBreadthFirstFinderOptions
    ): Pathfinding$DijkstraFinder
  } & AStarFinder;

  declare type Pathfinding$IDAStarFinder = {
    new(): Pathfinding$IDAStarFinder,
    new(opt: Pathfinding$IDAStarFinderOptions): Pathfinding$IDAStarFinder
  } & Finder;

  declare type Pathfinding$JumpPointFinderBase = {
    new(): Pathfinding$JumpPointFinderBase,
    new(
      opt: Pathfinding$JumpPointFinderBaseOptions
    ): Pathfinding$JumpPointFinderBase
  } & Finder;

  declare type Pathfinding$JPFAlwaysMoveDiagonally = {
    new(): Pathfinding$JPFAlwaysMoveDiagonally,
    new(
      opt: Pathfinding$JumpPointFinderBaseOptions
    ): Pathfinding$JPFAlwaysMoveDiagonally
  } & JumpPointFinderBase;

  declare type Pathfinding$JPFMoveDiagonallyIfAtMostOneObstacle = {
    new(): Pathfinding$JPFMoveDiagonallyIfAtMostOneObstacle,
    new(
      opt: Pathfinding$JumpPointFinderBaseOptions
    ): Pathfinding$JPFMoveDiagonallyIfAtMostOneObstacle
  } & JumpPointFinderBase;

  declare type Pathfinding$JPFMoveDiagonallyIfNoObstacles = {
    new(): Pathfinding$JPFMoveDiagonallyIfNoObstacles,
    new(
      opt: Pathfinding$JumpPointFinderBaseOptions
    ): Pathfinding$JPFMoveDiagonallyIfNoObstacles
  } & JumpPointFinderBase;

  declare type Pathfinding$JPFNeverMoveDiagonally = {
    new(): Pathfinding$JPFNeverMoveDiagonally,
    new(
      opt: Pathfinding$JumpPointFinderBaseOptions
    ): Pathfinding$JPFNeverMoveDiagonally
  } & JumpPointFinderBase;

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
  declare export default typeof Pathfinding;
}
