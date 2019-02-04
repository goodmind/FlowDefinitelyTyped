declare module 'jsreport-jsrender' {
        import type {
          ExtensionDefinition
        } from 'jsreport-core';

	declare module 'jsreport-core' {
        declare interface Template {
engine: "jsrender" | string
} 
    }

	declare function JsReportJsrender(): ExtensionDefinition

	declare module.exports: typeof JsReportJsrender

    }
