declare module "simple-websocket" {
  import type { Duplex, DuplexOptions } from "stream";

  declare type Socket$Options = {
    /**
     * websocket server url
     */
    url?: string,

    /**
     * raw websocket instance to wrap
     */
    socket?: WebSocket
  } & DuplexOptions;

  declare class Socket mixins Duplex {
    static WEBSOCKET_SUPPORT: boolean;
    constructor(options: Socket$Socket$Options | string): this;

    /**
     * Send text/binary data to the WebSocket server
     */
    send(chunk: any): void;

    /**
     * Destroy and cleanup this websocket connection
     */
    destroy(err?: Error): void;
  }
  declare module.exports: typeof Socket;
}
