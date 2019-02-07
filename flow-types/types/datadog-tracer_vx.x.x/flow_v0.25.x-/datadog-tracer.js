declare module "datadog-tracer" {
  import typeof * as opentracing from "opentracing";

  import type { EventEmitter } from "events";

  declare module.exports: typeof Tracer;

  declare interface TracerOptions {
    service: string;
    hostname?: string;
    port?: number;
    protocol?: string;
    endpoint?: string;
  }
  declare class Tracer mixins opentracing.Tracer {
    constructor(tracerOptions: TracerOptions): this;
    on(method: "error", cb?: (e: any) => void): void;
    addEventListener(method: "error", cb?: (e: any) => void): void;
  }
}
