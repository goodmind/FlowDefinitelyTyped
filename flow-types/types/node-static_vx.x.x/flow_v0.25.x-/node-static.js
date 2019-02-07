declare module "node-static" {
  import typeof * as events from "events";

  import typeof * as fs from "fs";

  import typeof * as http from "http";

  import typeof * as mime from "mime";

  declare export interface Headers {
    [k: string]: any;
  }
  declare export type Finish = (status: number, headers?: Headers) => void;
  declare export type Callback = (e: Error) => void;
  declare export interface Options {
    headers?: Headers;
    indexFile?: string;
    cache?: number | boolean;
    serverInfo?: Buffer;
    server?: string;
    "cache-control"?: string;
  }
  declare export interface ByteRange {
    from: number;
    to: number;
    valid: boolean;
  }
  declare export class Server {
    root: string;
    options: Options;
    cache: number | boolean;
    defaultHeaders: Headers;
    serverInfo: string;
    constructor(root: string, options?: Options): this;
    serveDir: (
      pathname: string,
      req: http.IncomingMessage,
      res: http.ServerResponse,
      finish: Finish
    ) => void;
    serveFile: (
      pathname: string,
      status: number,
      headers: Headers,
      req: http.IncomingMessage,
      res: http.ServerResponse
    ) => events.EventEmitter;
    finish: (
      status: number,
      headers: Headers,
      req: http.IncomingMessage,
      res: http.ServerResponse,
      promise: events.EventEmitter,
      callback: Callback
    ) => void;
    servePath: (
      pathname: string,
      status: number,
      headers: Headers,
      req: http.IncomingMessage,
      res: http.ServerResponse,
      finish: Finish
    ) => events.EventEmitter;
    resolve: (pathname: string) => string;
    serve: (
      req: http.IncomingMessage,
      res: http.ServerResponse,
      callback?: Callback
    ) => events.EventEmitter;
    gzipOk: (req: http.IncomingMessage, contentType: string) => boolean;
    respondGzip: (
      pathname: string,
      status: number,
      contentType: string,
      _headers: Headers,
      files: string[],
      stat: fs.Stats,
      req: http.IncomingMessage,
      res: http.ServerResponse,
      finish: Finish
    ) => void;
    parseByteRange: (req: http.IncomingMessage, stat: fs.Stats) => ByteRange;
    respondNoGzip: (
      pathname: string,
      status: number,
      contentType: string,
      _headers: Headers,
      files: string[],
      stat: fs.Stats,
      req: http.IncomingMessage,
      res: http.ServerResponse,
      finish: Finish
    ) => void;
    respond: (
      pathname: string,
      status: number,
      _headers: Headers,
      files: string[],
      stat: fs.Stats,
      req: http.IncomingMessage,
      res: http.ServerResponse,
      finish: Finish
    ) => void;
    stream: (
      pathname: string,
      files: string[],
      length: number,
      startByte: number,
      res: http.ServerResponse,
      callback: Callback
    ) => void;
  }
  declare export var version: [number, number, number];
  declare export { mime };
}
