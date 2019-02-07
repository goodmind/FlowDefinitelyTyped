declare module "libxslt" {
  import typeof * as xmljs from "libxmljs";

  import type {
    ApplyCallback,
    ApplyResult,
    ApplyStringCallback,
    OutputFormat,
    ParseCallback
  } from "./internal-types";

  declare export var libxmljs: typeof xmljs;
  declare export interface ApplyOptions {
    outputFormat?: OutputFormat;
    noWrapParams?: boolean;
  }
  declare export interface Stylesheet {
    apply(source: string, params?: { [key: string]: any }): string;
    apply(
      source: string | xmljs.Document,
      params: { [key: string]: any },
      options: ApplyOptions
    ): ApplyResult;
    apply(
      source: string | xmljs.Document,
      params: { [key: string]: any },
      options: ApplyOptions,
      callback: ApplyCallback
    ): void;
    apply(source: string | xmljs.Document, callback: ApplyStringCallback): void;
    apply(
      source: xmljs.Document,
      params?: { [key: string]: any }
    ): xmljs.Document;
    applyToFile(
      sourcePath: string,
      params: { [key: string]: any },
      options: ApplyOptions,
      callback: ApplyStringCallback
    ): void;
    applyToFile(sourcePath: string, callback: ApplyStringCallback): void;
  }
  declare export function parse(source: string | xmljs.Document): Stylesheet;

  declare export function parse(
    source: string | xmljs.Document,
    callback: ParseCallback
  ): void;

  declare export function parseFile(
    sourcePath: string,
    callback: ParseCallback
  ): void;
}
