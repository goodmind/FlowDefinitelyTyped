declare module "socketcluster-client" {
  import type { SCAuthEngine } from "sc-auth";

  import type { SCServer } from "socketcluster-server";

  declare export function create(
    options?: SCClientSocket.ClientOptions
  ): SCClientSocket;

  /**
   * @deprecated
   */
  declare export function connect(
    options?: SCClientSocket.ClientOptions
  ): SCClientSocket;

  declare export function destroy(socket: SCClientSocket): void;

  declare export var clients: {
    [id: string]: SCClientSocket
  };
  declare export var version: string;
}
