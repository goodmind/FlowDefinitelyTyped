declare module "jest-cli" {
  declare export interface UncheckedSnapshot {
    filePath: string;
    keys: string[];
  }
  declare export interface SnapshotSummary {
    added: number;
    didUpdate: boolean;
    failure: boolean;
    filesAdded: number;
    filesRemoved: number;
    filesUnmatched: number;
    filesUpdated: number;
    matched: number;
    total: number;
    unchecked: number;
    uncheckedKeysByFile: UncheckedSnapshot[];
    unmatched: number;
    updated: number;
  }
  declare export type LogMessage = string;
  declare export interface LogEntry {
    message: LogMessage;
    origin: string;
    type: LogType;
  }
  declare export interface LogCounters {
    [label: string]: number;
  }
  declare export interface LogTimers {
    [label: string]: Date;
  }
  declare export type LogType =
    | "assert"
    | "count"
    | "debug"
    | "dir"
    | "dirxml"
    | "error"
    | "group"
    | "groupCollapsed"
    | "info"
    | "log"
    | "time"
    | "warn";
  declare export type ConsoleBuffer = LogEntry[];
  declare export interface Callsite {
    column: number;
    line: number;
  }
  declare export type Status = "passed" | "failed" | "skipped" | "pending";
  declare export interface AssertionResult {
    ancestorTitles: string[];
    duration?: number;
    failureMessages: string[];
    fullName: string;
    location?: Callsite;
    numPassingAsserts: number;
    status: Status;
    title: string;
  }
  declare export interface SerializableError {
    code?: any;
    message: string;
    stack?: string;
    type?: string;
  }
  declare export interface TestResult {
    console?: ConsoleBuffer;
    coverage?: RawCoverage;
    displayName?: string;
    failureMessage?: string;
    leaks: boolean;
    memoryUsage?: number;
    numFailingTests: number;
    numPassingTests: number;
    numPendingTests: number;
    openHandles: Error[];
    perfStats: {
      end: number,
      start: number
    };
    skipped: boolean;
    snapshot: {
      added: number,
      fileDeleted: boolean,
      matched: number,
      unchecked: number,
      uncheckedKeys: string[],
      unmatched: number,
      updated: number
    };
    sourceMaps: {
      [sourcePath: string]: string
    };
    testExecError?: SerializableError;
    testFilePath: string;
    testResults: AssertionResult[];
  }
  declare export type ReporterConfig = [string, { [key: string]: any }];
  declare export interface FileCoverageTotal {
    total: number;
    covered: number;
    skipped: number;
    pct: number;
  }
  declare export interface CoverageSummary {
    lines: FileCoverageTotal;
    statements: FileCoverageTotal;
    branches: FileCoverageTotal;
    functions: FileCoverageTotal;
    merge: (other: CoverageSummary) => void;
  }
  declare export interface FileCoverage {
    getLineCoverage: () => { [key: string]: any };
    getUncoveredLines: () => number[];
    getBranchCoverageByLine: () => { [key: string]: any };
    toJSON: () => { [key: string]: any };
    merge: (other: { [key: string]: any }) => void;
    computeSimpleTotals: (property: string) => FileCoverageTotal;
    computeBranchTotals: () => FileCoverageTotal;
    resetHits: () => void;
    toSummary: () => CoverageSummary;
  }
  declare export type SnapshotUpdateState = "all" | "new" | "none";
  declare export interface RawFileCoverage {
    path: string;
    s: {
      [statementId: number]: number
    };
    b: {
      [branchId: number]: number
    };
    f: {
      [functionId: number]: number
    };
    l: {
      [lineId: number]: number
    };
    fnMap: {
      [functionId: number]: any
    };
    statementMap: {
      [statementId: number]: any
    };
    branchMap: {
      [branchId: number]: any
    };
    inputSourceMap?: { [key: string]: any };
  }
  declare export interface RawCoverage {
    [filePath: string]: RawFileCoverage;
  }
  declare export interface AggregatedResultWithoutCoverage {
    numFailedTests: number;
    numFailedTestSuites: number;
    numPassedTests: number;
    numPassedTestSuites: number;
    numPendingTests: number;
    numTodoTests: number;
    numPendingTestSuites: number;
    numRuntimeErrorTestSuites: number;
    numTotalTests: number;
    numTotalTestSuites: number;
    openHandles: Error[];
    snapshot: SnapshotSummary;
    startTime: number;
    success: boolean;
    testResults: TestResult[];
    wasInterrupted: boolean;
  }
  declare export interface CoverageMap {
    merge(data: {
      [index: string]: any
    }): void;
    getCoverageSummary(): FileCoverage;
    data: RawCoverage;
    addFileCoverage(fileCoverage: RawFileCoverage): void;
    files(): string[];
    fileCoverageFor(file: string): FileCoverage;
  }
  declare export type AggregatedResult = {
    coverageMap?: CoverageMap
  } & AggregatedResultWithoutCoverage;

  declare export interface GlobalConfig {
    bail: boolean;
    changedSince: string;
    changedFilesWithAncestor: boolean;
    collectCoverage: boolean;
    collectCoverageFrom: string[];
    collectCoverageOnlyFrom?: {
      [key: string]: boolean
    };
    coverageDirectory: string;
    coveragePathIgnorePatterns?: string[];
    coverageReporters: string[];
    coverageThreshold: {
      global: {
        [key: string]: number
      }
    };
    detectLeaks: boolean;
    detectOpenHandles: boolean;
    enabledTestsMap?: {
      [key: string]: {
        [key: string]: boolean
      }
    };
    expand: boolean;
    filter?: string;
    findRelatedTests: boolean;
    forceExit: boolean;
    json: boolean;
    globalSetup?: string;
    globalTeardown?: string;
    lastCommit: boolean;
    logHeapUsage: boolean;
    listTests: boolean;
    maxWorkers: number;
    noStackTrace: boolean;
    nonFlagArgs: string[];
    noSCM?: boolean;
    notify: boolean;
    notifyMode: string;
    outputFile?: string;
    onlyChanged: boolean;
    onlyFailures: boolean;
    passWithNoTests: boolean;
    projects: string[];
    replname?: string;
    reporters: Array<string | ReporterConfig>;
    runTestsByPath: boolean;
    rootDir: string;
    silent: boolean;
    skipFilter: boolean;
    errorOnDeprecated: boolean;
    testFailureExitCode: number;
    testNamePattern: string;
    testPathPattern: string;
    testResultsProcessor?: string;
    updateSnapshot: SnapshotUpdateState;
    useStderr: boolean;
    verbose?: boolean;
    watch: boolean;
    watchAll: boolean;
    watchman: boolean;
    watchPlugins?: Array<{
      path: string,
      config: {
        [index: string]: any
      }
    }>;
  }
  declare export function run(
    maybeArgv?: string[],
    project?: string
  ): Promise<void>;

  declare export function runCLI(
    argv: string[],
    projects: string[]
  ): Promise<{
    results: AggregatedResult,
    globalConfig: GlobalConfig
  }>;
}
