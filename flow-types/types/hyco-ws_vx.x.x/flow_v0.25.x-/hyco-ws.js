declare module "hyco-ws" {
  import typeof * as WebSocket from "ws";

  declare export class HybridConnectionWebSocketServer
    mixins NodeJS.EventEmitter {
    constructor(options: any): this;
    close(callback: () => void): void;
    listenUri: string;
    closeRequested: boolean;
    options: any;
    path: string;
    clients: WebSocket[];
    controlChannel: WebSocket;
  }
  declare export function createRelayedServer(
    options: any,
    fn: (ws: WebSocket) => void
  ): HybridConnectionWebSocketServer;

  declare export function relayedConnect(
    address: string,
    fn: () => void
  ): WebSocket;

  declare export function createRelayToken(
    uri: string,
    key_name: string,
    key: string,
    expiry?: number
  ): string;

  declare export function appendRelayToken(
    uri: string,
    key_name: string,
    key: string,
    expiry?: number
  ): string;

  declare export function createRelayBaseUri(
    serviceBusNamespace: string,
    path: string
  ): string;

  declare export function createRelaySendUri(
    serviceBusNamespace: string,
    path: string,
    token?: any,
    id?: any
  ): string;

  declare export function createRelayListenUri(
    serviceBusNamespace: string,
    path: string,
    token?: any,
    id?: any
  ): string;
}
