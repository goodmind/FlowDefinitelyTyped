declare module "nonogram-solver" {
  declare var solve: typeof npm$namespace$solve;

  declare var npm$namespace$solve: {
    Puzzle: typeof solve$Puzzle
  };
  declare class solve$Puzzle {
    columnHints: number[][];
    height: number;
    rowHints: number[][];
    snapshot: number[];
    width: number;
    isFinished: boolean;
    isSolved: boolean;
    svg: string;
    constructor(data: string | solve$Input): this;
    import(puzzle: solve$Puzzle): void;
    toJSON(): Required<solve$Input>;
  }

  declare interface solve$Result {
    puzzle: solve$Puzzle;
    status: solve$State;
  }

  declare interface solve$Input {
    columns: number[][];
    content?: solve$State[];
    rows: number[][];
  }

  declare type solve$State = 0 | 1 | -1;
  declare function solve(filename: string): solve$Result;

  declare export default typeof solve;
}
