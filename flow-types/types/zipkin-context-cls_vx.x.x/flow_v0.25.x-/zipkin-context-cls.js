declare module "zipkin-context-cls" {
  import type { Context, TraceId } from "zipkin";

  declare class CLSContext mixins Context<any> {
    setContext(ctx: TraceId): void;
    getContext(): TraceId;
    scoped<V>(callback: () => V): V;
    letContext<V>(ctx: TraceId, callback: () => V): V;
    constructor(name: string): this;
  }
  declare module.exports: typeof CLSContext;
}
