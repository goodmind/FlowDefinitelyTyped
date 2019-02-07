declare module "zipkin-instrumentation-express" {
  import type { Tracer } from "zipkin";

  declare export interface Options {
    tracer: Tracer;
  }
  declare export function expressMiddleware(
    options: Options
  ): express.RequestHandler;
}
