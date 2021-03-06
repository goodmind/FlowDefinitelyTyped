declare module "rabbit.js" {
  declare export function createContext(url?: string): Context;

  declare export class Context mixins events.EventEmitter {
    socket<T>(type: string, options?: SocketOptions): T;
    close(callback: Function): any;
  }
  declare export interface SocketOptions {
    prefetch?: any;
    expiration?: any;
    persistent?: any;
    topic?: any;
    task?: any;
    routing?: any;
  }
  declare export interface Socket {
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
  }
  declare export class PubSocket mixins stream.Writable, Socket {
    constructor(channel: string, opts: SocketOptions): this;
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
    publish(topic: string, chunk: string, encoding?: string): any;
    publish(topic: string, chunk: Buffer, encoding?: string): any;
  }
  declare export class SubSocket mixins stream.Readable, Socket {
    constructor(channel: string, opts: SocketOptions): this;
    connect(source: string, callback?: Function): any;
    connect(source: string, topic?: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
  }
  declare export class PushSocket mixins stream.Writable, Socket {
    constructor(channel: string, opts: SocketOptions): this;
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
  }
  declare export class PullSocket mixins stream.Readable, Socket {
    constructor(channel: string, opts: SocketOptions): this;
    connect(source: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
  }
  declare export class WorkerSocket mixins stream.Readable, Socket {
    constructor(channel: string, opts: SocketOptions): this;
    connect(source: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
    ack(): any;
    requeue(): any;
    discard(): any;
  }
  declare export interface RequestMessage {
    properties: {
      correlationId: number
    };
    content: any;
  }
  declare export class ReqSocket mixins stream.Duplex, Socket {
    constructor(channel: string, opts: SocketOptions): this;
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
    handleReply(msg: RequestMessage): any;
  }
  declare export class RepSocket mixins stream.Duplex, Socket {
    constructor(channel: string, opts: SocketOptions): this;
    connect(source: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
    requeue(): any;
    discard(): any;
  }
  declare export class TaskSocket mixins stream.Writable, Socket {
    constructor(channel: string, opts: SocketOptions): this;
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
    post(task: string, chunk: string, encoding?: string): any;
    post(task: string, chunk: Buffer, encoding?: string): any;
  }
}
