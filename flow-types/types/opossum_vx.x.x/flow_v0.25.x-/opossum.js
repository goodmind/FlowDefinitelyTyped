declare module "opossum" {
  import typeof * as stream from "stream";

  import type { EventEmitter } from "events";

  declare export type Action = (...args: any[]) => any;
  declare export class CircuitBreaker mixins EventEmitter {
    constructor(action: Action, options: CircuitBreakerOptions): this;
    name: string;
    group: string;
    enabled: boolean;
    pendingClose: boolean;
    closed: boolean;
    opened: boolean;
    halfOpen: boolean;
    isShutdown: boolean;
    status: Status;
    stats: Stats;
    hystrixStats: HystrixStats;
    warmUp: boolean;
    volumeThreshold: number;
    clearCache(): void;
    open(): void;
    close(): void;
    disable(): void;
    enable(): void;
    fallback(func: Action | CircuitBreaker): this;
    fire(...args: any[]): Promise<any>;
    healthCheck(
      func: (...args: any[]) => Promise<any>,
      interval?: number
    ): void;
    shutdown(): void;
  }
  declare export class Event {
    constructor(...args: empty): mixed;
    static +cacheHit: Class<Event__cacheHit> & Event__cacheHit & "cacheHit"; // "cacheHit"
    static +cacheMiss: Class<Event__cacheMiss> & Event__cacheMiss & "cacheMiss"; // "cacheMiss"
    static +close: Class<Event__close> & Event__close & "close"; // "close"
    static +failure: Class<Event__failure> & Event__failure & "failure"; // "failure"
    static +fallback: Class<Event__fallback> & Event__fallback & "fallback"; // "fallback"
    static +fire: Class<Event__fire> & Event__fire & "fire"; // "fire"
    static +halfOpen: Class<Event__halfOpen> & Event__halfOpen & "halfOpen"; // "halfOpen"
    static +healthCheckFailed: Class<Event__healthCheckFailed> &
      Event__healthCheckFailed &
      "health-check-failed"; // "health-check-failed"
    static +open: Class<Event__open> & Event__open & "open"; // "open"
    static +reject: Class<Event__reject> & Event__reject & "reject"; // "reject"
    static +semaphoreLocked: Class<Event__semaphoreLocked> &
      Event__semaphoreLocked &
      "semaphore-locked"; // "semaphore-locked"
    static +success: Class<Event__success> & Event__success & "success"; // "success"
    static +timeout: Class<Event__timeout> & Event__timeout & "timeout"; // "timeout"
  }

  declare class Event__cacheHit mixins Event {}
  declare class Event__cacheMiss mixins Event {}
  declare class Event__close mixins Event {}
  declare class Event__failure mixins Event {}
  declare class Event__fallback mixins Event {}
  declare class Event__fire mixins Event {}
  declare class Event__halfOpen mixins Event {}
  declare class Event__healthCheckFailed mixins Event {}
  declare class Event__open mixins Event {}
  declare class Event__reject mixins Event {}
  declare class Event__semaphoreLocked mixins Event {}
  declare class Event__success mixins Event {}
  declare class Event__timeout mixins Event {}

  declare export interface CircuitBreakerOptions {
    /**
     * The time in milliseconds that action should be allowed to execute before timing out.
     * Timeout can be disabled by setting this to `false`.
     */
    timeout?: number | false;

    /**
     * The number of times the circuit can fail before opening.
     * @deprecated see options.errorThresholdPercentage
     */
    maxFailures?: number;

    /**
     * The time in milliseconds to wait before setting the breaker to `halfOpen` state, and trying the action again.
     */
    resetTimeout?: number;

    /**
     * Sets the duration of the statistical rolling window, in milliseconds.
     * This is how long Opossum keeps metrics for the circuit breaker to use and for publishing.
     * @default 10000
     */
    rollingCountTimeout?: number;

    /**
     * Sets the number of buckets the rolling statistical window is divided into.
     * So, if options.rollingCountTimeout is 10,000, and options.rollingCountBuckets is 10, then the
     * statistical window will be 1,000 1 second snapshots in the statistical window.
     * @default 10
     */
    rollingCountBuckets?: number;

    /**
     * The circuit name to use when reporting stats.
     * Defaults to the name of the action function then falls back to a UUID
     */
    name?: string;

    /**
     * A grouping key for reporting.
     * Defaults to the computed value of options.name
     */
    group?: string;

    /**
     * This property indicates whether execution latencies should be tracked and calculated as percentiles.
     * If they are disabled, all summary statistics (mean, percentiles) are returned as -1.
     * @default true
     */
    rollingPercentilesEnabled?: boolean;

    /**
     * The number of concurrent requests allowed.
     * If the number currently executing function calls is equal to options.capacity, further calls
     * to `fire()` are rejected until at least one of the current requests completes.
     * @default MAX_SAFE_INTEGER
     */
    capacity?: number;

    /**
     * The error percentage at which to open the circuit and start short-circuiting requests to fallback.
     */
    errorThresholdPercentage?: number;

    /**
     * Whether this circuit is enabled upon construction.
     * @default true
     */
    enabled?: boolean;

    /**
     * Determines whether to allow failures without opening the circuit during a brief warmup period
     * This can help in situations where no matter what your `errorThresholdPercentage` is, if the
     * first execution times out or fails, the circuit immediately opens.
     * @default false
     */
    allowWarmUp?: boolean;

    /**
     * The minimum number of requests within the rolling statistical window that must exist before
     * the circuit breaker can open. This is similar to `allowWarmUp` in that no matter how many
     * failures there are, if the number of requests within the statistical window does not exceed
     * this threshold, the circuit will remain closed.
     * @default 0
     */
    volumeThreshold?: number;

    /**
     * If set to true, the value from the first call to `fire` will be cached an subsequent calls
     * will not execute the `action` function, but return the cached value instead.
     * @default false
     */
    cache?: boolean;
  }
  declare export type Status = {
    stats: Stats,
    window: Window,
    increment(property: string, latencyRunTime?: number): void,
    open(): void,
    close(): void
  } & EventEmitter;

  declare export interface Bucket {
    failures: number;
    fallbacks: number;
    successes: number;
    rejects: number;
    fires: number;
    timeouts: number;
    cacheHits: number;
    cacheMisses: number;
    semaphoreRejections: number;
    percentiles: {
      [percentile: number]: number
    };
    latencyTimes: number[];
  }
  declare export type Window = Bucket[];
  declare export type Stats = {
    latencyMean: number
  } & Bucket;

  declare export class HystrixStats {
    constructor(circuit: CircuitBreaker): this;
    getHystrixStream(): stream.Transform;
  }
  declare export function promisify(
    action: Action
  ): (...args: any[]) => Promise<any>;

  declare export var stats: stream.Transform;
  declare interface index {
    (action: Action, options: CircuitBreakerOptions): CircuitBreaker;
    promisify: (action: Action) => (...args: any[]) => Promise<any>;
    stats: stream.Transform;
  }
  declare export var circuitBreaker: index;
  declare export default typeof circuitBreaker;
}
