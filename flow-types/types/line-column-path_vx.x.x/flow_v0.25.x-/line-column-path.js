declare module "line-column-path" {
  declare export function parse(input: PathSpec): ParsedPath;

  declare export function stringify(
    input: PathDescriptor,
    options?: StringifyOptions
  ): string;

  declare export type PathSpec = string | PathDescriptor;
  declare export interface PathDescriptor {
    file: string;
    line?: number;
    column?: number;
  }
  declare export type ParsedPath = Required<PathDescriptor>;
  declare export interface StringifyOptions {
    file?: boolean;
    column?: boolean;
  }
}
