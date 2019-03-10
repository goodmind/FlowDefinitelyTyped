declare module "istanbul-lib-report" {
  import type {
    CoverageMap,
    FileCoverage,
    CoverageSummary
  } from "istanbul-lib-coverage";

  declare export function createContext(
    options?: $Shape<ContextOptions>
  ): Context;

  declare export function getDefaultWatermarks(): Watermarks;

  declare export var summarizers: {
    flat(coverageMap: CoverageMap): Tree<>,
    nested(coverageMap: CoverageMap): Tree<>,
    pkg(coverageMap: CoverageMap): Tree<>
  };
  declare export interface ContextOptions {
    dir: string;
    watermarks: Watermarks;
    sourceFinder(filepath: string): string;
  }
  declare export type Context = {
    data: any,
    writer: FileWriter
  } & ContextOptions;

  declare export interface ContentWriter {
    write(str: string): void;
    colorize(str: string, cls?: string): string;
    println(str: string): void;
    close(): void;
  }
  declare export interface FileWriter {
    writeForDir(subdir: string): FileWriter;
    copyFile(source: string, dest: string): void;
    writeFile(file: string | null): ContentWriter;
  }
  declare export interface Watermarks {
    statements: number[];
    functions: number[];
    branches: number[];
    lines: number[];
  }
  declare export interface Node {
    getQualifiedName(): string;
    getRelativeName(): string;
    isRoot(): boolean;
    getParent(): Node;
    getChildren(): Node[];
    isSummary(): boolean;
    getCoverageSummary(filesOnly: boolean): CoverageSummary;
    getFileCoverage(): FileCoverage;
    visit(visitor: Visitor<>, state: any): void;
  }
  declare export type ReportNode = {
    path: string,
    parent: ReportNode | null,
    fileCoverage: FileCoverage,
    children: ReportNode[],
    addChild(child: ReportNode): void,
    asRelative(p: string): string,
    visit(visitor: Visitor<ReportNode>, state: any): void
  } & Node;

  declare export interface Visitor<N: Node = Node> {
    onStart(root: N, state: any): void;
    onSummary(root: N, state: any): void;
    onDetail(root: N, state: any): void;
    onSummaryEnd(root: N, state: any): void;
    onEnd(root: N, state: any): void;
  }
  declare export interface Tree<N: Node = Node> {
    getRoot(): N;
    visit(visitor: $Shape<Visitor<N>>, state: any): void;
  }
}
