declare var npm$namespace$WebSocket: {
  createServer: typeof WebSocket$createServer,
  connect: typeof WebSocket$connect,
  createConnection: typeof WebSocket$createConnection,
  http: typeof WebSocket$http
};
declare type WebSocket$VerifyClientCallbackSync = (info: {
  origin: string,
  secure: boolean,
  req: http.IncomingMessage
}) => boolean;

declare type WebSocket$VerifyClientCallbackAsync = (
  info: {
    origin: string,
    secure: boolean,
    req: http.IncomingMessage
  },
  callback: (res: boolean) => void
) => void;

export interface WebSocket$IClientOptions {
  protocol?: string;
  agent?: http.Agent;
  headers?: {
    [key: string]: string
  };
  protocolVersion?: any;
  host?: string;
  origin?: string;
  pfx?: any;
  key?: any;
  passphrase?: string;
  cert?: any;
  ca?: any[];
  ciphers?: string;
  rejectUnauthorized?: boolean;
}

export interface WebSocket$IPerMessageDeflateOptions {
  serverNoContextTakeover?: boolean;
  clientNoContextTakeover?: boolean;
  serverMaxWindowBits?: number;
  clientMaxWindowBits?: number;
  memLevel?: number;
  serverNoContextTakeover?: boolean;
  clientNoContextTakeover?: boolean;
  serverMaxWindowBits?: number;
  clientMaxWindowBits?: number;
  memLevel?: number;
}

export interface WebSocket$IServerOptions {
  host?: string;
  port?: number;
  server?: http.WebSocket$Server | https.WebSocket$Server;
  verifyClient?:
    | WebSocket$VerifyClientCallbackAsync
    | WebSocket$VerifyClientCallbackSync;
  handleProtocols?: any;
  path?: string;
  noServer?: boolean;
  disableHixie?: boolean;
  clientTracking?: boolean;
  perMessageDeflate?: boolean | WebSocket$IPerMessageDeflateOptions;
}

declare export class WebSocket$Server mixins events.EventEmitter {
  options: WebSocket$IServerOptions;
  path: string;
  clients: WebSocket[];
  constructor(options?: WebSocket$IServerOptions, callback?: Function): this;
  close(cb?: (err?: any) => void): void;
  handleUpgrade(
    request: http.IncomingMessage,
    socket: net.Socket,
    upgradeHead: ArrayBuffer,
    callback: (client: WebSocket) => void
  ): void;
  on(event: "error", cb: (err: Error) => void): this;
  on(event: "headers", cb: (headers: string[]) => void): this;
  on(event: "connection", cb: (client: WebSocket) => void): this;
  on(event: string, listener: (...args: any[]) => void): this;
  addListener(event: "error", cb: (err: Error) => void): this;
  addListener(event: "headers", cb: (headers: string[]) => void): this;
  addListener(event: "connection", cb: (client: WebSocket) => void): this;
  addListener(event: string, listener: (...args: any[]) => void): this;
}

export interface WebSocket$UwsHttp {
  WebSocket$createServer(
    requestListener?: (
      request: http.IncomingMessage,
      response: http.ServerResponse
    ) => void
  ): http.WebSocket$Server;
  getExpressApp(express: any): any;
  getResponsePrototype(): http.ServerResponse;
  getRequestPrototype(): http.IncomingMessage;
}

declare export var WebSocket$http: WebSocket$UwsHttp;

declare export function WebSocket$createServer(
  options?: WebSocket$IServerOptions,
  connectionListener?: (client: WebSocket) => void
): WebSocket$Server;

declare export function WebSocket$connect(
  address: string,
  openListener?: Function
): void;

declare export function WebSocket$createConnection(
  address: string,
  openListener?: Function
): void;
declare module "uws" {
  import typeof * as events from "events";

  import typeof * as http from "http";

  import typeof * as https from "https";

  import typeof * as net from "net";

  declare class WebSocket mixins events.EventEmitter {
    static CONNECTING: number;
    static OPEN: number;
    static CLOSING: number;
    static CLOSED: number;
    bytesReceived: number;
    readyState: number;
    protocolVersion: string;
    url: string;
    supports: any;
    upgradeReq: WebSocket$http.IncomingMessage;
    protocol: string;
    CONNECTING: number;
    OPEN: number;
    CLOSING: number;
    CLOSED: number;
    onopen: (event: {
      target: WebSocket
    }) => void;
    onerror: (err: Error) => void;
    onclose: (event: {
      wasClean: boolean,
      code: number,
      reason: string,
      target: WebSocket
    }) => void;
    onmessage: (event: {
      data: any,
      type: string,
      target: WebSocket
    }) => void;
    constructor(
      address: string,
      options?: WebSocket$WebSocket$IClientOptions
    ): this;
    constructor(
      address: string,
      protocols?: string | string[],
      options?: WebSocket$WebSocket$IClientOptions
    ): this;
    close(code?: number, data?: any): void;
    pause(): void;
    resume(): void;
    ping(
      data?: any,
      options?: {
        mask?: boolean,
        binary?: boolean
      },
      dontFail?: boolean
    ): void;
    pong(
      data?: any,
      options?: {
        mask?: boolean,
        binary?: boolean
      },
      dontFail?: boolean
    ): void;
    send(data: any, cb?: (err: Error) => void): void;
    send(
      data: any,
      options: {
        mask?: boolean,
        binary?: boolean
      },
      cb?: (err: Error) => void
    ): void;
    stream(
      options: {
        mask?: boolean,
        binary?: boolean
      },
      cb?: (err: Error, final: boolean) => void
    ): void;
    stream(cb?: (err: Error, final: boolean) => void): void;
    terminate(): void;
    addEventListener(
      method: "message",
      cb?: (event: {
        data: any,
        type: string,
        target: WebSocket
      }) => void
    ): void;
    addEventListener(
      method: "close",
      cb?: (event: {
        wasClean: boolean,
        code: number,
        reason: string,
        target: WebSocket
      }) => void
    ): void;
    addEventListener(method: "error", cb?: (err: Error) => void): void;
    addEventListener(
      method: "open",
      cb?: (event: {
        target: WebSocket
      }) => void
    ): void;
    addEventListener(method: string, listener?: (...args: any[]) => void): void;
    on(event: "error", cb: (err: Error) => void): this;
    on(event: "close", cb: (code: number, message: string) => void): this;
    on(
      event: "message",
      cb: (
        data: any,
        flags: {
          binary: boolean
        }
      ) => void
    ): this;
    on(
      event: "ping",
      cb: (
        data: any,
        flags: {
          binary: boolean
        }
      ) => void
    ): this;
    on(
      event: "pong",
      cb: (
        data: any,
        flags: {
          binary: boolean
        }
      ) => void
    ): this;
    on(event: "open", cb: () => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "error", cb: (err: Error) => void): this;
    addListener(
      event: "close",
      cb: (code: number, message: string) => void
    ): this;
    addListener(
      event: "message",
      cb: (
        data: any,
        flags: {
          binary: boolean
        }
      ) => void
    ): this;
    addListener(
      event: "ping",
      cb: (
        data: any,
        flags: {
          binary: boolean
        }
      ) => void
    ): this;
    addListener(
      event: "pong",
      cb: (
        data: any,
        flags: {
          binary: boolean
        }
      ) => void
    ): this;
    addListener(event: "open", cb: () => void): this;
    addListener(event: string, listener: (...args: any[]) => void): this;
  }
  declare export default typeof WebSocket;
}
