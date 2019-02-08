declare module "jsreport-core" {
  declare interface Template {
    engine: "jsrender" | string;
  }
}
declare module "jsreport-jsrender" {
  import type { ExtensionDefinition } from "jsreport-core";

  declare function JsReportJsrender(): ExtensionDefinition;

  declare module.exports: typeof JsReportJsrender;
}
