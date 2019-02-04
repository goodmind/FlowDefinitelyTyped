declare module 'istanbul-lib-instrument' {
        import type {
          FileCoverage,FileCoverageData,Range
        } from 'istanbul-lib-coverage';

	import type {
          RawSourceMap
        } from 'source-map';

	import typeof * as babelTypes from 'babel-types';

	declare export interface InstrumenterOptions {
coverageVariable: string,
preserveComments: boolean,
compact: boolean,
esModules: boolean,
autoWrap: boolean,
produceSourceMap: boolean,
sourceMapUrlCallback(filename: string, url: string): void,
debug: boolean
} 
	declare export type InstrumenterCallback = (error: Error | null, code: string) => void;
	declare export class Instrumenter  {
fileCoverage: FileCoverage;
sourceMap: RawSourceMap | null;
opts: InstrumenterOptions;
constructor(options?: $Shape<InstrumenterOptions>): this;
normalizeOpts(options?: $Shape<InstrumenterOptions>): InstrumenterOptions;
instrumentSync(code: string, filename: string, inputSourceMap?: RawSourceMap): string;
instrument(
code: string,
filenameOrCallback: string | InstrumenterCallback,
callback?: InstrumenterCallback,
inputSourceMap?: RawSourceMap): void;
lastFileCoverage(): FileCoverageData;
lastSourceMap(): RawSourceMap
}
	declare export function createInstrumenter(options?: $Shape<InstrumenterOptions>): Instrumenter

	declare export interface InitialCoverage {
path: string,
hash: string,
gcv: any,
coverageData: any
} 
	declare export function readInitialCoverage(code: string): InitialCoverage

	declare export interface Visitor {
enter(path: string): void,
exit(path: string): {
fileCoverage: FileCoverage,
sourceMappingURL: string
}
} 
	declare export interface VisitorOptions {
coverageVariable: string,
inputSourceMap: RawSourceMap
} 
	declare export function programVisitor(
types: typeof babelTypes,
sourceFilePath?: string,
opts?: $Shape<VisitorOptions>): Visitor

    }
