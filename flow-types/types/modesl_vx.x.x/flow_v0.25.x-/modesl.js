declare module "modesl" {
  declare export class Connection mixins EventEmitter {
    constructor(...args: any[]): this;
    api(command: any, args: string[], cb?: () => void): void;
    auth(cb: () => void): void;
    bgapi(command: any, args: string[], jobid?: any, cb?: () => void): void;
    connected(): any;
    disconnect(): void;
    events(
      type: "json" | "plain" | "xml",
      events: string,
      cb?: () => void
    ): void;
    execute(app: any, arg?: string, uuid?: string, cb?: () => void): any;
    executeAsync(app: any, arg?: string, uuid?: string, cb?: () => void): any;
    filter(header: any, value: any, cb?: () => void): void;
    filterDelete(header: any, value: any, cb?: () => void): void;
    getInfo(): any;
    message(options: any, cb?: () => void): void;
    originate(options: any, cb?: () => void): void;
    recvEvent(cb?: () => void): void;
    recvEventTimed(ms: any, cb?: () => void): void;
    send(command: any, args: any): void;
    sendEvent(event: any, cb?: () => void): void;
    sendRecv(command: any, args: any, cb?: () => void): void;
    setAsyncExecute(value: any): void;
    setEventLock(value: any): void;
    show(item: any, format: any, cb?: () => void): void;
    socketDescriptor(): any;
    subscribe(events: any, cb?: () => void): void;
  }
  declare export interface Header {
    name: string;
    value: string;
  }
  declare export class Event {
    constructor(type: any, subclass: any): this;
    headers: Header[];
    addBody(value: any): any;
    addHeader(name: any, value: any): any;
    delHeader(name: any): any;
    firstHeader(): any;
    getBody(): any;
    getHeader(name: any): string;
    getType(): any;
    nextHeader(): any;
    serialize(format: any): any;
    setPriority(priority: any): void;
    static PRIORITY: {
      HIGH: string,
      LOW: string,
      NORMAL: string
    };
  }
  declare export class Parser {
    constructor(socket: any): this;
  }
  declare export class Server mixins EventEmitter {
    constructor(opts: any, readycb?: () => void): this;
    close(callback: any): void;
  }
  declare export function eslSetLogLevel(level: any): void;

  declare export function setLogLevel(level: any): void;
}
