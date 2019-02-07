declare module "zipkin-transport-http" {
  import type { JsonEncoder, Logger, model } from "zipkin";

  declare export interface Options {
    endpoint: string;
    jsonEncoder?: JsonEncoder;
    httpInterval?: number;
    headers?: {
      [name: string]: string
    };
  }
  declare export class HttpLogger mixins Logger {
    logSpan(span: model.Span): void;
    constructor(options: Options): this;
  }
}
