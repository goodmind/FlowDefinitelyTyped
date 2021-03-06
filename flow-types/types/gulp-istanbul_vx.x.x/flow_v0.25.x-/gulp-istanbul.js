declare module "gulp-istanbul" {
  declare function GulpIstanbul(
    opts?: GulpIstanbul$Options
  ): NodeJS.ReadWriteStream;

  declare var npm$namespace$GulpIstanbul: {
    hookRequire: typeof GulpIstanbul$hookRequire,
    summarizeCoverage: typeof GulpIstanbul$summarizeCoverage,
    writeReports: typeof GulpIstanbul$writeReports,
    enforceThresholds: typeof GulpIstanbul$enforceThresholds
  };
  declare export function GulpIstanbul$hookRequire(): NodeJS.ReadWriteStream;

  declare export function GulpIstanbul$summarizeCoverage(opts?: {
    coverageVariable?: string
  }): GulpIstanbul$Coverage;

  declare export function GulpIstanbul$writeReports(
    opts?: GulpIstanbul$ReportOptions
  ): NodeJS.ReadWriteStream;

  declare export function GulpIstanbul$enforceThresholds(
    opts?: GulpIstanbul$ThresholdOptions
  ): NodeJS.ReadWriteStream;

  declare interface GulpIstanbul$Options {
    coverageVariable?: string;
    includeUntested?: boolean;
    embedSource?: boolean;
    preserveComments?: boolean;
    noCompact?: boolean;
    noAutoWrap?: boolean;
    codeGenerationOptions?: Object;
    debug?: boolean;
    walkDebug?: boolean;
  }

  declare interface GulpIstanbul$Coverage {
    lines: GulpIstanbul$CoverageStats;
    statements: GulpIstanbul$CoverageStats;
    functions: GulpIstanbul$CoverageStats;
    branches: GulpIstanbul$CoverageStats;
  }

  declare interface GulpIstanbul$CoverageStats {
    total: number;
    covered: number;
    skipped: number;
    pct: number;
  }

  declare interface GulpIstanbul$ReportOptions {
    dir?: string;
    reporters?: string[];
    reportOpts?: {
      dir?: string
    };
    coverageVariable?: string;
  }

  declare interface GulpIstanbul$ThresholdOptions {
    coverageVariable?: string;
    thresholds?: {
      global?: GulpIstanbul$CoverageOptions | number,
      each?: GulpIstanbul$CoverageOptions | number
    };
  }

  declare interface GulpIstanbul$CoverageOptions {
    lines?: number;
    statements?: number;
    functions?: number;
    branches?: number;
  }
  declare export default typeof GulpIstanbul;
}
