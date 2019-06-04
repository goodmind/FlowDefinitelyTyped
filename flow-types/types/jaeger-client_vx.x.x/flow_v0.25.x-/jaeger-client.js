declare module "jaeger-client" {
  import typeof * as opentracing from "opentracing";

  import typeof * as prometheus from "prom-client";

  declare export interface Counter {
    increment(delta: number): void;
  }
  declare export interface Gauge {
    update(value: number): void;
  }
  declare export interface Logger {
    info(msg: string): void;
    error(msg: string): void;
  }
  declare export interface MetricsFactory {
    createCounter(name: string, tags: any): Counter;
    createTimer(name: string, tags: any): Timer;
    createGauge(name: string, tags: any): Gauge;
  }
  declare export interface Reporter {
    report(span: opentracing.Span): void;
    close(callback?: () => void): void;
    setProcess(serviceName: string, tags: any): void;
  }
  declare export interface ReporterConfig {
    logSpans?: boolean;
    agentHost?: string;
    agentPort?: number;
    flushIntervalMs?: number;
  }
  declare export interface SamplerConfig {
    type: string;
    param: number;
    host?: string;
    port?: number;
    refreshIntervalMs?: number;
  }
  declare export interface Timer {
    record(value: number): void;
  }
  declare export interface TracingConfig {
    serviceName?: string;
    disable?: boolean;
    sampler?: SamplerConfig;
    reporter?: ReporterConfig;
  }
  declare export interface TracingOptions {
    reporter?: Reporter;
    metrics?: PrometheusMetricsFactory;
    logger?: Logger;
    tags?: any;
  }
  declare export function initTracer(
    tracingConfig: TracingConfig,
    tracingOptions: TracingOptions
  ): opentracing.Tracer;

  declare export function initTracerFromEnv(
    tracingConfig: TracingConfig,
    tracingOptions: TracingOptions
  ): opentracing.Tracer;

  declare export class PrometheusMetricsFactory {
    constructor(client: typeof prometheus, serviceName: string): this;
    createCounter(name: string, tags: {}): Counter;
    createGauge(name: string, tags: {}): Gauge;
  }
}
