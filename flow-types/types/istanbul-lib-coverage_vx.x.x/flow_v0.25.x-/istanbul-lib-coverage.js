declare module "istanbul-lib-coverage" {
  declare export interface CoverageSummary {
    lines: Totals;
    statements: Totals;
    branches: Totals;
    functions: Totals;
  }
  declare export interface CoverageMapData {
    [key: string]: FileCoverage;
  }
  declare export class CoverageMap {
    constructor(data: CoverageMapData): this;
    addFileCoverage(pathOrObject: string | FileCoverageData): void;
    files(): string[];
    fileCoverageFor(filename: string): FileCoverage;
    filter(callback: (key: string) => boolean): void;
    merge(data: CoverageMapData | CoverageMap): void;
    toJSON(): { [key: string]: any };
    data: CoverageMapData;
  }
  declare export interface Location {
    line: number;
    column: number;
  }
  declare export interface Range {
    start: Location;
    end: Location;
  }
  declare export interface BranchMapping {
    loc: Range;
    type: string;
    locations: Range[];
    line: number;
  }
  declare export interface FunctionMapping {
    name: string;
    decl: Range;
    loc: Range;
    line: number;
  }
  declare export interface FileCoverageData {
    path: string;
    statementMap: {
      [key: string]: Range
    };
    fnMap: {
      [key: string]: FunctionMapping
    };
    branchMap: {
      [key: string]: BranchMapping
    };
    s: {
      [key: string]: number
    };
    f: {
      [key: string]: number
    };
    b: {
      [key: string]: number[]
    };
  }
  declare export interface Totals {
    total: number;
    covered: number;
    skipped: number;
    pct: number;
  }
  declare export interface Coverage {
    covered: number;
    total: number;
    coverage: number;
  }
  declare export class FileCoverage mixins FileCoverageData {
    constructor(data: string | FileCoverageData): this;
    merge(other: FileCoverageData): void;
    getBranchCoverageByLine(): {
      [line: number]: Coverage
    };
    getLineCoverage(): {
      [line: number]: number
    };
    getUncoveredLines(): number[];
    resetHits(): void;
    computeBranchTotals(): Totals;
    computeSimpleTotals(): Totals;
    toSummary(): CoverageSummary;
    toJSON(): { [key: string]: any };
    data: FileCoverageData;
    path: string;
    statementMap: {
      [key: string]: Range
    };
    fnMap: {
      [key: string]: FunctionMapping
    };
    branchMap: {
      [key: string]: BranchMapping
    };
    s: {
      [key: string]: number
    };
    f: {
      [key: string]: number
    };
    b: {
      [key: string]: number[]
    };
  }
  declare export var classes: {
    FileCoverage: FileCoverage
  };
  declare export function createCoverageMap(
    data?: CoverageMap | CoverageMapData
  ): CoverageMap;

  declare export function createCoverageSummary(
    obj?: CoverageSummary
  ): CoverageSummary;

  declare export function createFileCoverage(
    pathOrObject: string | FileCoverageData
  ): FileCoverage;
}
