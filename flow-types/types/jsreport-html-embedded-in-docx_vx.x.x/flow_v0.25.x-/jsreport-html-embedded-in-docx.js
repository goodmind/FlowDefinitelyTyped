declare module "jsreport-core" {
  declare interface Template {
    recipe: "html-embedded-in-docx" | string;
  }
}
declare module "jsreport-html-embedded-in-docx" {
  import type { ExtensionDefinition } from "jsreport-core";

  declare function JsReportHtmlEmbeddedInDocx(): ExtensionDefinition;

  declare module.exports: typeof JsReportHtmlEmbeddedInDocx;
}
