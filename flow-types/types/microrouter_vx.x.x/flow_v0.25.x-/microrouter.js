declare module "microrouter" {
  import type { IncomingMessage, ServerResponse, Server } from "http";

  import type { RequestHandler } from "micro";

  declare export type ServerResponse = ServerResponse;
  declare export type ServerRequest = IncomingMessage & {
    params: {
      [key: string]: string
    },
    query: {
      [key: string]: string
    }
  };
  declare export type AugmentedRequestHandler = (
    req: ServerRequest,
    res: ServerResponse
  ) => any;
  declare export type RouteHandler = (
    path: string,
    handler: AugmentedRequestHandler
  ) => RequestHandler;
  declare export function router(...routes: RequestHandler[]): RequestHandler;

  declare export function withNamespace(
    namespace: string
  ): (...routes: RequestHandler[]) => RequestHandler;

  declare export var get: RouteHandler;
  declare export var post: RouteHandler;
  declare export var put: RouteHandler;
  declare export var patch: RouteHandler;
  declare export var del: RouteHandler;
  declare export var head: RouteHandler;
  declare export var options: RouteHandler;
}
