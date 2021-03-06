declare interface JsReportXlsx$Xlsx {
  shortid: string;
}

declare interface JsReportXlsx$Options {
  addBufferSize: number;
  escapeAmp: boolean;
  numberOfParsedAddIterations: number;
}
declare module "jsreport-core" {
  declare interface Template {
    recipe: "xlsx" | string;
  }
}
declare module "jsreport-xlsx" {
  import type { ExtensionDefinition } from "jsreport-core";

  declare function JsReportXlsx(
    options?: $Shape<JsReportXlsx$JsReportXlsx$Options>
  ): ExtensionDefinition;

  declare module.exports: typeof JsReportXlsx;
}
