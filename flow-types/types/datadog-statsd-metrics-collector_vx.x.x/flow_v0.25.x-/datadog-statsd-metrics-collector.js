declare module "datadog-statsd-metrics-collector" {
  import typeof * as dogstatsd from "node-dogstatsd";

  declare class Collector mixins dogstatsd.StatsDClient {
    constructor(
      client: dogstatsd.StatsDClient,
      delayMilliseconds?: number
    ): this;
    timing(
      stat: string,
      time: number,
      sample_rate?: number,
      tags?: string[]
    ): void;
    increment(stat: string, sample_rate?: number, tags?: string[]): void;
    incrementBy(stat: string, value: number, tags?: string[]): void;
    decrement(stat: string, sample_rate?: number, tags?: string[]): void;
    decrementBy(stat: string, value: number, tags?: string[]): void;
    gauge(
      stat: string,
      value: number,
      sample_rate?: number,
      tags?: string[]
    ): void;
    histogram(
      stat: string,
      time: number,
      sample_rate?: number,
      tags?: string[]
    ): void;
  }
  declare export default typeof Collector;
}
