declare type JsReportHtml2Xlsx$Options = {
  strategy: string
} & BaseOptions;
declare module "jsreport-core" {
  declare type htmlEngine = "phantom" | "chrome";
  declare interface Template {
    htmlToXlsx: {
      htmlEngine: htmlEngine
    };
    recipe: "html-to-xlsx" | string;
  }
}
declare module "jsreport-html-to-xlsx" {
  import type { ExtensionDefinition } from "jsreport-core";

  import type { JsReportHtml2Xlsx$Options as BaseOptions } from "jsreport-xlsx";

  declare function JsReportHtml2Xlsx(
    options?: $Shape<JsReportHtml2Xlsx$JsReportHtml2Xlsx$Options>
  ): ExtensionDefinition;

  declare module.exports: typeof JsReportHtml2Xlsx;
}
