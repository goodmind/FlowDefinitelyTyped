declare module "dd-trace" {
  import type { Tracer, Span, SpanContext } from "opentracing";

  declare var trace: TraceProxy;
  declare module.exports: typeof trace;

  declare class TraceProxy mixins Tracer {
    /**
     * Initializes the tracer. This should be called before importing other libraries.
     */
    init(options?: TracerOptions): this;

    /**
     * Enable and optionally configure a plugin.
     * @param plugin The name of a built-in plugin.
     * @param config Configuration options.
     */
    use<P: Plugin>(
      plugin: P,
      config: $ElementType<PluginConfiguration, P>
    ): this;

    /**
     * Initiate a trace and creates a new span.
     * @param operationName The operation name to be used for this span.
     * @param options Configuration options. These will take precedence over environment variables.
     */
    trace(operationName: string, options: TraceOptions): Promise<Span>;

    /**
     * Initiate a trace and creates a new span.
     * @param operationName The operation name to be used for this span.
     * @param options Configuration options. These will take precedence over environment variables.
     */
    trace(
      operationName: string,
      options: TraceOptions,
      callback: (span: Span) => void
    ): void;

    /**
     * Get the span from the current context.
     * @returns The current span or null if outside a trace context.
     */
    currentSpan(): Span | null;

    /**
     * Get the scope manager to manager context propagation for the tracer.
     */
    scopeManager(): ScopeManager;
  }
  declare interface TracerOptions {
    /**
     * Whether to enable the tracer.
     * @default true
     */
    enabled?: boolean;

    /**
     * Enable debug logging in the tracer.
     * @default false
     */
    debug?: boolean;

    /**
     * The service name to be used for this program.
     */
    service?: string;

    /**
     * The address of the trace agent that the tracer will submit to.
     * @default 'localhost'
     */
    hostname?: string;

    /**
     * The port of the trace agent that the tracer will submit to.
     * @default 8126
     */
    port?: number | string;

    /**
     * Set an application’s environment e.g. prod, pre-prod, stage.
     */
    env?: string;

    /**
     * Percentage of spans to sample as a float between 0 and 1.
     * @default 1
     */
    sampleRate?: number;

    /**
     * Interval in milliseconds at which the tracer will submit traces to the agent.
     * @default 2000
     */
    flushInterval?: number;

    /**
     * Experimental features can be enabled all at once by using true or individually using key / value pairs.
     * @default {}
     */
    experimental?: ExperimentalOptions | boolean;

    /**
     * Whether to load all built-in plugins.
     * @default true
     */
    plugins?: boolean;

    /**
     * Custom logger to be used by the tracer (if debug = true),
     * should support debug() and error() methods
     * see https://datadog.github.io/dd-trace-js/#custom-logging__anchor
     */
    logger?: {
      debug: (message: string) => void,
      error: (err: Error) => void
    };

    /**
     * Global tags that should be assigned to every span.
     */
    tags?: {
      [key: string]: any
    };
  }
  declare interface ExperimentalOptions {}
  declare interface TraceOptions {
    /**
     * The service name to be used for this span.
     * The service name from the tracer will be used if this is not provided.
     */
    service?: string;

    /**
     * The resource name to be used for this span.
     * The operation name will be used if this is not provided.
     */
    resource?: string;

    /**
     * The span type to be used for this span.
     */
    type?: string;

    /**
     * The parent span or span context for the new span. Generally this is not needed as it will be
     * fetched from the current context.
     * If creating your own, this must be an instance of DatadogSpanContext from ./src/opentracing/span_context
     * See: https://github.com/DataDog/dd-trace-js/blob/master/src/opentracing/tracer.js#L99
     */
    childOf?: Span | SpanContext | DatadogSpanContext;

    /**
     * Global tags that should be assigned to every span.
     */
    tags?:
      | {
          [key: string]: any
        }
      | string;
  }
  declare class ScopeManager {
    /**
 * Get the current active scope or null if there is none.
 * @todo The dd-trace source returns null, but opentracing's childOf span
option is typed as taking undefined or a scope, so using undefined
here instead.
 */
    active(): Scope | void;

    /**
     * Activate a new scope wrapping the provided span.
     * @param span The span for which to activate the new scope.
     * @param finishSpanOnClose Whether to automatically finish the span when the scope is closed.
     */
    activate(span: Span, finishSpanOnClose?: boolean): Scope;
  }
  declare class Scope {
    /**
     * Get the span wrapped by this scope.
     */
    span(): Span;

    /**
     * Close the scope, and finish the span if the scope was created with `finishSpanOnClose` set to true.
     */
    close(): void;
  }
  declare type Plugin =
    | "amqp10"
    | "amqplib"
    | "bluebird"
    | "elasticsearch"
    | "express"
    | "graphql"
    | "hapi"
    | "http"
    | "ioredis"
    | "koa"
    | "memcached"
    | "mongodb-core"
    | "mysql"
    | "mysql2"
    | "pg"
    | "q"
    | "redis"
    | "restify"
    | "when";
  declare interface BasePluginOptions {
    /**
     * The service name to be used for this plugin.
     */
    service?: string;
  }
  declare type BaseWebFrameworkPluginOptions = {
    /**
     * An array of headers to include in the span metadata.
     */
    headers?: string[],

    /**
     * Callback function to determine if there was an error. It should take a
     * status code as its only parameter and return `true` for success or `false`
     * for errors.
     */
    validateStatus?: (code: number) => boolean
  } & BasePluginOptions;

  declare type ExpressPluginOptions = {} & BaseWebFrameworkPluginOptions;

  declare type HapiPluginOptions = {} & BaseWebFrameworkPluginOptions;

  declare type KoaPluginOptions = {} & BaseWebFrameworkPluginOptions;

  declare type RestifyPluginOptions = {} & BaseWebFrameworkPluginOptions;

  declare type GraphQLPluginOptions = {
    /**
     * The maximum depth of fields/resolvers to instrument. Set to `0` to only
     * instrument the operation or to -1 to instrument all fields/resolvers.
     */
    depth?: number,

    /**
     * A callback to enable recording of variables. By default, no variables are
     * recorded. For example, using `variables => variables` would record all
     * variables.
     */
    variables?: <
      T: {
        [key: string]: any
      }
    >(
      variables: T
    ) => $Shape<T>
  } & BasePluginOptions;

  declare type HTTPPluginOptions = {
    /**
     * Use the remote endpoint host as the service name instead of the default.
     */
    splitByDomain?: boolean
  } & BasePluginOptions;

  declare type PluginConfiguration = $ObjMapi<
    { [k: Plugin]: any },
    <K>(K) => BasePluginOptions
  > & {
    express: ExpressPluginOptions,
    graphql: GraphQLPluginOptions,
    hapi: HapiPluginOptions,
    http: HTTPPluginOptions,
    koa: KoaPluginOptions,
    restify: RestifyPluginOptions
  };
}
