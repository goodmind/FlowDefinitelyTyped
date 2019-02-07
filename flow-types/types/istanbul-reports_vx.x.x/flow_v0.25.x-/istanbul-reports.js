declare module "istanbul-reports" {
  import type { Context, Node, FileWriter, Visitor } from "istanbul-lib-report";

  import type { CoverageSummary } from "istanbul-lib-coverage";

  declare export function create<T: $Keys<ReportOptions>>(
    name: T,
    options?: $Shape<$ElementType<ReportOptions, T>>
  ): Visitor;

  declare export interface ReportOptions {
    clover: RootedOptions;
    cobertura: RootedOptions;
    html: HtmlOptions;
    json: Options;
    "json-summary": Options;
    lcov: empty;
    lcovonly: Options;
    none: RootedOptions;
    teamcity: Options & {
      blockName: string
    };
    text: Options & {
      maxCols: number
    };
    "text-lcov": Options;
    "text-summary": Options;
  }
  declare export type ReportType = $Keys<ReportOptions>;
  declare export interface Options {
    file: string;
  }
  declare export type RootedOptions = {
    projectRoot: string
  } & Options;

  declare export interface HtmlOptions {
    verbose: boolean;
    linkMapper: LinkMapper;
    subdir: string;
  }
  declare export interface LinkMapper {
    getPath(node: string | Node): string;
    relativePath(source: string | Node, target: string | Node): string;
    assetPath(node: Node, name: string): string;
  }
}
