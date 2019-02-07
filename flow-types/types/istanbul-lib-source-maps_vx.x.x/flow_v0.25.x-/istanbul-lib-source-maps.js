declare module "istanbul-lib-source-maps" {
  import type { CoverageMap } from "istanbul-lib-coverage";

  import type { RawSourceMap } from "source-map";

  declare export function createSourceMapStore(
    options?: $Shape<MapStoreOptions>
  ): MapStore;

  declare export interface MapStoreOptions {
    verbose: boolean;
    baseDir: string;
    sourceStore: "memory" | "file";
    tmpdir: string;
  }
  declare export interface MapStore {
    baseDir: string | null;
    verbose: boolean;
    sourceStore: SourceStore;
    data: {
      [filepath: string]: {
        type: string,
        data: any
      }
    };
    registerURL(transformedFilePath: string, sourceMapUrl: string): void;
    registerMap(filename: string, sourceMap: RawSourceMap): void;
    transformCoverage(
      coverageMap: CoverageMap
    ): {
      map: CoverageMap,
      sourceFinder(path: string): string
    };
    dispose(): void;
  }
  declare export class SourceStore {
    getSource(filepath: string): string | null;
    registerSource(filepath: string, sourceText: string): void;
  }
}
