declare module "engine.io" {
  import type { EventEmitter } from "events";

  declare var npm$namespace$engine: {
    attach: typeof engine$attach,
    listen: typeof engine$listen,
    protocol: typeof engine$protocol
  };
  declare type engine$Message = string | Buffer | ArrayBuffer | ArrayBufferView;

  declare type engine$Transport = "polling" | "websocket";

  declare interface engine$Packet {
    type: string;
    options?: engine$MessageOptions;
    data?: engine$Message;
  }

  declare type engine$AllowRequestFunction = (
    req: http.IncomingMessage,
    fn: (err: string | null | void, success: boolean) => void
  ) => void;

  declare interface engine$ServerOptions {
    /**
     * how many ms without a pong packet to consider the connection closed (60000)
     */
    pingTimeout?: number;

    /**
     * how many ms before sending a new ping packet (25000)
     */
    pingInterval?: number;

    /**
     * how many ms before an uncompleted transport upgrade is cancelled (10000)
     */
    upgradeTimeout?: number;

    /**
     * how many bytes or characters a message can be, before closing the session (to avoid DoS). Default value is 10E7.
     */
    maxHttpBufferSize?: number;

    /**
     * A function that receives a given handshake or upgrade request as its first parameter,
     * and can decide whether to continue or not. The second argument is a function that needs
     * to be called with the decided information: fn(err, success), where success is a boolean
     * value where false means that the request is rejected, and err is an error code.
     */
    allowRequest?: engine$AllowRequestFunction;

    /**
     * to allow connections to (['polling', 'websocket'])
     */
    transports?: engine$Transport[];

    /**
     * whether to allow transport upgrades (true)
     */
    allowUpgrades?: boolean;

    /**
     * parameters of the WebSocket permessage-deflate extension (see ws module api docs). Set to false to disable. (true)
     */
    perMessageDeflate?: any;

    /**
     * parameters of the http compression for the polling transports (see zlib api docs). Set to false to disable. (true)
     */
    httpCompression?: any;

    /**
     * name of the HTTP cookie that contains the client sid to send as part of handshake response headers. Set to false to not send one. (io)
     */
    cookie?: string | boolean;

    /**
     * path of the above cookie option. If false, no path will be sent,
     * which means browsers will only send the cookie on the engine.io
     * attached path (/engine.io). Set false to not save io cookie
     * on all requests. (/)
     */
    cookiePath?: string | boolean;

    /**
     * If true HttpOnly io cookie cannot be accessed by client-side APIs,
     * such as JavaScript. (true) This option has no effect
     * if cookie or cookiePath is set to false.
     */
    cookieHttpOnly?: boolean;

    /**
     * what WebSocket server implementation to use. Specified module must
     * conform to the ws interface (see ws module api docs). Default value is ws.
     * An alternative c++ addon is also available by installing uws module.
     */
    wsEngine?: "ws" | "uws";

    /**
     * an optional packet which will be concatenated to the handshake packet emitted by Engine.IO.
     */
    initialPacket?: engine$Message;
  }

  declare interface engine$AttachOptions {
    /**
     * name of the path to capture (/engine.io).
     */
    path?: string;

    /**
     * destroy unhandled upgrade requests (true)
     */
    destroyUpgrade?: boolean;

    /**
     * milliseconds after which unhandled requests are ended (1000)
     */
    destroyUpgradeTimeout?: number;

    /**
     * whether to let engine.io handle the OPTIONS requests. You can also pass a custom function to handle the requests (true)
     */
    handlePreflightRequest?:
      | boolean
      | ((
          server: engine$Server,
          req: http.IncomingMessage,
          res: http.ServerResponse
        ) => void);
  }

  declare type engine$ServerAttachOptions = {} & engine$ServerOptions &
    engine$AttachOptions;

  declare interface engine$MessageOptions {
    compress?: boolean;
  }

  /**
   * The main server/manager. Inherits from EventEmitter.
   */
  declare class engine$Server mixins EventEmitter {
    /**
     * hash of connected clients by id.
     */
    clients: {
      [sid: string]: engine$Socket
    };

    /**
     * number of connected clients.
     */
    clientsCount: number;

    /**
     * Initializes the server
     */
    constructor(opts?: engine$ServerOptions): this;

    /**
     * Fired when a new connection is established.
     */
    on(ev: "connection" | "drain", fn: (socket: engine$Socket) => void): this;
    on(
      ev: "flush",
      fn: (socket: engine$Socket, buffer: engine$Packet[]) => void
    ): this;

    /**
     * Closes all clients
     */
    close(): this;
    httpServer: http.engine$Server;

    /**
     * Called internally when a Engine request is intercepted.
     */
    handleRequest(req: http.IncomingMessage, res: http.ServerResponse): this;

    /**
     * Called internally when a Engine ws upgrade is intercepted.
     */
    handleUpgrade(
      req: http.IncomingMessage,
      socket: net.engine$Socket,
      head: Buffer
    ): this;

    /**
     * Attach this Server instance to an http.Server
     * Captures upgrade requests for a http.Server. In other words, makes a regular http.Server WebSocket-compatible.
     */
    attach(http: http.engine$Server, opts?: engine$AttachOptions): this;

    /**
     * Generate a socket id.
     * Overwrite this method to generate your custom socket id.
     */
    generateId(req: http.IncomingMessage): string;
  }

  /**
   * A representation of a client. Inherits from EventEmitter.
   */
  declare class engine$Socket mixins EventEmitter {
    /**
     * unique identifier
     */
    id: string;

    /**
     * engine parent reference
     */
    server: engine$Server;

    /**
     * request that originated the Socket
     */
    request: http.IncomingMessage;

    /**
     * whether the transport has been upgraded
     */
    upgraded: boolean;

    /**
     * readyState
     */
    readyState: "opening" | "open" | "closing" | "closed";

    /**
     * Sends a message, performing message = toString(arguments[0]) unless sending binary data, which is sent as is.
     */
    send(
      message: engine$Message,
      opts?: engine$MessageOptions,
      fn?: (transport: any) => void
    ): void;

    /**
     * Disconnects the client
     */
    close(): this;

    /**
     * Fired when the client is disconnected.
     */
    on(ev: "close", fn: (reason: string, description?: Error) => void): this;

    /**
     * Fired when the client sends a message.
     */
    on(ev: "message", fn: (data: string | Buffer) => void): this;

    /**
     * Fired when an error occurs.
     */
    on(ev: "error", fn: (err: Error) => void): this;

    /**
     * Called when the write buffer is being flushed.
     */
    on(ev: "flush", fn: (buffer: engine$Packet[]) => void): this;

    /**
     * Called when the write buffer is drained
     */
    on(ev: "drain", fn: () => void): this;

    /**
     * packet: Called when a socket received a packet (message, ping)
     * packetCreate: Called before a socket sends a packet (message, pong)
     */
    on(
      ev: "packet" | "packetCreate",
      fn: (packet: engine$Packet) => void
    ): this;
  }

  declare function engine$attach(
    http: net.engine$Server,
    opts?: engine$ServerAttachOptions
  ): engine$Server;

  declare function engine$listen(
    port: number,
    opts?: engine$ServerOptions,
    fn?: () => void
  ): engine$Server;

  declare var engine$protocol: number;
  declare function engine(
    httpServer?: net.engine$Server,
    opts?: engine$engine$ServerOptions
  ): engine$engine$Server;

  declare module.exports: typeof engine;
}
