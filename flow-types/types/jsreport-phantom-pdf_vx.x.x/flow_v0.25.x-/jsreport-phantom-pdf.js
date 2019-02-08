declare interface JsReportPhantomPdf$Margin {
  left: number | string;
  right: number | string;
  top: number | string;
  bottom: number | string;
}

declare interface JsReportPhantomPdf$Phantom {
  margin: string | JsReportPhantomPdf$Margin;
  header: string;
  footer: string;
  width: string;
  height: string;
  headerHeight: string;
  footerHeight: string;
  format: string;
  orientation: "portrait" | "landscape";
  blockJavaScript: boolean;
  resourceTimeout: number;
  waitForJS: boolean;
  fitToPage: boolean;
  customPhantomJS: boolean;
  phantomjsVersion: string;
}

declare interface JsReportPhantomPdf$Options {
  allowLocalFilesAccess: boolean;
  defaultPhantomjsVersion: string;
  strategy: "dedicated-process" | "phantom-server";
  timeout: number;
}
declare module "jsreport-core" {
  declare interface Template {
    phantom?: $Shape<JsReportPhantomPdf$JsReportPhantomPdf$Phantom>;
    recipe: "phantom-pdf" | string;
  }
}
declare module "jsreport-phantom-pdf" {
  import type { ExtensionDefinition } from "jsreport-core";

  declare function JsReportPhantomPdf(
    options?: $Shape<JsReportPhantomPdf$JsReportPhantomPdf$Options>
  ): ExtensionDefinition;

  declare module.exports: typeof JsReportPhantomPdf;
}
