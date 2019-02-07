declare module "redux-socket.io" {
  import type { Middleware, Action, Dispatch } from "redux";

  declare export interface MiddlewareOptions {
    eventName?: string;
    execute?: <S>(
      action: Action,
      emitBound: SocketIOClient.Socket,
      next: Dispatch<S>,
      dispatch: Dispatch<S>
    ) => any;
  }
  declare export default function createSocketIoMiddleware(
    socket: SocketIOClient.Socket,
    criteria:
      | string
      | $ReadOnlyArray<string>
      | ((type: string, action: Action) => boolean),
    options?: MiddlewareOptions
  ): Middleware;
}
