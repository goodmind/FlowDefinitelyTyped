declare module "apollo-codegen" {
  import type { Options } from "graphql/utilities/schemaPrinter";

  declare export function downloadSchema(
    url: string,
    outputPath: string,
    additionalHeaders: {
      [name: string]: string
    },
    insecure: boolean,
    method: string
  ): Promise<void>;

  declare export function introspectSchema(
    schemaPath: string,
    outputPath: string
  ): Promise<void>;

  declare export function printSchema(
    schemaPath: string,
    outputPath: string,
    options?: Options
  ): Promise<void>;

  declare export type TargetType =
    | "json"
    | "swift"
    | "ts-legacy"
    | "typescript-legacy"
    | "flow-legacy"
    | "scala"
    | "flow"
    | "typescript"
    | "ts";
  declare export function generate(
    inputPaths: string[],
    schemaPath: string,
    outputPath: string,
    only: string,
    target: TargetType,
    tagName: string,
    projectName: string,
    options: {
      passthroughCustomScalars?: boolean,
      customScalarsPrefix?: string,
      addTypename?: boolean,
      namespace?: string,
      operationIdsPath?: string | null,
      generateOperationIds?: boolean,
      mergeInFieldsFromFragmentSpreads?: boolean,
      useFlowExactObjects?: boolean,
      useFlowReadOnlyTypes?: boolean
    }
  ): void;
}
