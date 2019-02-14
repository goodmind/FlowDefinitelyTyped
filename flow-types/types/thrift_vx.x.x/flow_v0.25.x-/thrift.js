declare module "thrift" {
  import typeof * as net from "net";

  import typeof * as http from "http";

  import typeof * as https from "https";

  import typeof * as tls from "tls";

  declare export { Int64 };

  declare export { Q };

  declare export interface TMap {
    ktype: Thrift$Type;
    vtype: Thrift$Type;
    size: number;
  }
  declare export interface TMessage {
    fname: string;
    mtype: Thrift$MessageType;
    rseqid: number;
  }
  declare export interface TField {
    fname: string;
    ftype: Thrift$Type;
    fid: number;
  }
  declare export interface TList {
    etype: Thrift$Type;
    size: number;
  }
  declare export interface TSet {
    etype: Thrift$Type;
    size: number;
  }
  declare export interface TStruct {
    fname: string;
  }
  declare export interface TStructLike {
    read(input: TProtocol): void;
    write(output: TProtocol): void;
  }
  declare export interface TTransport {
    commitPosition(): void;
    rollbackPosition(): void;
    isOpen(): boolean;
    open(): boolean;
    close(): boolean;
    setCurrSeqId(seqId: number): void;
    ensureAvailable(len: number): void;
    read(len: number): Buffer;
    readByte(): number;
    readI16(): number;
    readI32(): number;
    readDouble(): number;
    readString(): string;
    write(buf: Buffer | string): void;
    flush(): void;
  }
  declare export interface TProtocol {
    flush(): void;
    writeMessageBegin(
      name: string,
      type: Thrift$MessageType,
      seqid: number
    ): void;
    writeMessageEnd(): void;
    writeStructBegin(name: string): void;
    writeStructEnd(): void;
    writeFieldBegin(name: string, type: Thrift$Type, id: number): void;
    writeFieldEnd(): void;
    writeFieldStop(): void;
    writeMapBegin(ktype: Thrift$Type, vtype: Thrift$Type, size: number): void;
    writeMapEnd(): void;
    writeListBegin(etype: Thrift$Type, size: number): void;
    writeListEnd(): void;
    writeSetBegin(etype: Thrift$Type, size: number): void;
    writeSetEnd(): void;
    writeBool(bool: boolean): void;
    writeByte(b: number): void;
    writeI16(i16: number): void;
    writeI32(i32: number): void;
    writeI64(i64: number | Int64): void;
    writeDouble(dbl: number): void;
    writeString(arg: string | Buffer): void;
    writeBinary(arg: string | Buffer): void;
    readMessageBegin(): TMessage;
    readMessageEnd(): void;
    readStructBegin(): TStruct;
    readStructEnd(): void;
    readFieldBegin(): TField;
    readFieldEnd(): void;
    readMapBegin(): TMap;
    readMapEnd(): void;
    readListBegin(): TList;
    readListEnd(): void;
    readSetBegin(): TSet;
    readSetEnd(): void;
    readBool(): boolean;
    readByte(): number;
    readI16(): number;
    readI32(): number;
    readI64(): Int64;
    readDouble(): number;
    readBinary(): Buffer;
    readString(): string;
    getTransport(): TTransport;
    skip(type: Thrift$Type): void;
  }
  declare export interface HttpHeaders {
    [name: string]: number | string | string[] | void;
  }
  declare export interface SeqId2Service {
    [seqid: number]: string;
  }
  declare export class Connection mixins NodeJS.EventEmitter {
    seqId2Service: SeqId2Service;
    connection: net.Socket;
    ssl: boolean;
    options: ConnectOptions;
    transport: TTransport;
    protocol: TProtocol;
    offline_queue: Buffer[];
    connected: boolean;
    constructor(stream: net.Socket, options?: ConnectOptions): this;
    end(): void;
    destroy(): void;
    initialize_retry_vars(): void;
    write(data: Buffer): void;
    connection_gone(): void;
  }
  declare export class HttpConnection mixins NodeJS.EventEmitter {
    options: ConnectOptions;
    host: string;
    port: number;
    https: boolean;
    transport: TTransport;
    protocol: TProtocol;
    constructor(host: string, port: number, options?: ConnectOptions): this;
    responseCallback(response: http.IncomingMessage): void;
    write(data: Buffer): void;
  }
  declare export class XHRConnection mixins NodeJS.EventEmitter {
    seqId2Service: SeqId2Service;
    options: ConnectOptions;
    wpos: number;
    rpos: number;
    useCORS: boolean;
    send_buf: string;
    recv_buf: string;
    transport: TTransport;
    protocol: TProtocol;
    headers: HttpHeaders;
    constructor(host: string, port: number, options?: ConnectOptions): this;
    getXmlHttpRequestObject(): XMLHttpRequest;
    flush(): void;
    setRecvBuffer(buf: string): void;
    isOpen(): boolean;
    open(): void;
    close(): void;
    read(len: number): string;
    readAll(): string;
    write(buf: string): void;
    getSendBuffer(): string;
  }
  declare export interface WSOptions {
    host: string;
    port: number;
    path: string;
    headers: HttpHeaders;
  }
  declare export class WSConnection mixins NodeJS.EventEmitter {
    seqId2Service: SeqId2Service;
    options: ConnectOptions;
    host: string;
    port: number;
    secure: boolean;
    transport: TTransport;
    protocol: TProtocol;
    path: string;
    send_pending: Buffer[];
    wsOptions: WSOptions;
    constructor(host: string, port: number, options?: ConnectOptions): this;
    isOpen(): boolean;
    open(): void;
    close(): void;
    uri(): string;
    write(data: Buffer): void;
  }
  declare export class Multiplexer {
    createClient<TClient>(
      serviceName: string,
      client: TClientConstructor<TClient>,
      connection: Connection
    ): TClient;
  }
  declare export class MultiplexedProcessor {
    constructor(stream?: any, options?: any): this;
    process(input: TProtocol, output: TProtocol): void;
  }
  declare export type TTransportCallback = (
    msg?: Buffer,
    seqid?: number
  ) => void;
  declare export interface ServiceMap<TProcessor, THandler> {
    [uri: string]: ServerOptions<TProcessor, THandler>;
  }
  declare export interface ServiceOptions<TProcessor, THandler> {
    transport?: TTransportConstructor;
    protocol?: TProtocolConstructor;
    processor?: {
      new(handler: THandler): TProcessor
    };
    handler?: THandler;
  }
  declare export type ServerOptions<TProcessor, THandler> = {
    cors?: string[],
    files?: string,
    headers?: HttpHeaders,
    services?: ServiceMap<TProcessor, THandler>,
    tls?: tls.TlsOptions
  } & ServiceOptions<TProcessor, THandler>;

  declare export interface ConnectOptions {
    transport?: TTransportConstructor;
    protocol?: TProtocolConstructor;
    path?: string;
    headers?: HttpHeaders;
    https?: boolean;
    debug?: boolean;
    max_attempts?: number;
    retry_max_delay?: number;
    connect_timeout?: number;
    timeout?: number;
    nodeOptions?: http.RequestOptions | https.RequestOptions;
  }
  declare export interface WSConnectOptions {
    transport?: TTransportConstructor;
    protocol?: TProtocolConstructor;
    path?: string;
    headers?: HttpHeaders;
    secure?: boolean;
    wsOptions?: WSOptions;
  }
  declare export type TClientConstructor<TClient> =
    | {
        new(
          output: TTransport,
          pClass: {
            new(trans: TTransport): TProtocol
          }
        ): TClient
      }
    | {
        Client: {
          new(
            output: TTransport,
            pClass: {
              new(trans: TTransport): TProtocol
            }
          ): TClient
        }
      };
  declare export type TProcessorConstructor<TProcessor, THandler> =
    | {
        new(handler: THandler): TProcessor
      }
    | {
        Processor: {
          new(handler: THandler): TProcessor
        }
      };
  declare export interface WebServerOptions<TProcessor, THandler> {
    services: {
      [path: string]: {
        processor: TProcessorConstructor<TProcessor, THandler>,
        handler: THandler
      }
    };
  }
  declare export function createConnection(
    host: string | void,
    port: number,
    options?: ConnectOptions
  ): Connection;

  declare export function createSSLConnection(
    host: string | void,
    port: number,
    options?: ConnectOptions
  ): Connection;

  declare export function createHttpConnection(
    host: string | void,
    port: number,
    options?: ConnectOptions
  ): HttpConnection;

  declare export function createXHRConnection(
    host: string | void,
    port: number,
    options?: ConnectOptions
  ): XHRConnection;

  declare export function createWSConnectin(
    host: string | void,
    port: number,
    options?: WSConnectOptions
  ): WSConnection;

  declare export function createXHRClient<TClient>(
    client: TClientConstructor<TClient>,
    connection: XHRConnection
  ): TClient;

  declare export function createHttpClient<TClient>(
    client: TClientConstructor<TClient>,
    connection: HttpConnection
  ): TClient;

  declare export function createWSClient<TClient>(
    client: TClientConstructor<TClient>,
    connection: WSConnection
  ): TClient;

  declare export function createStdIOClient<TClient>(
    client: TClientConstructor<TClient>,
    connection: Connection
  ): TClient;

  declare export function createClient<TClient>(
    client: TClientConstructor<TClient>,
    connection: Connection
  ): TClient;

  declare export function createServer<TProcessor, THandler>(
    processor: TProcessorConstructor<TProcessor, THandler>,
    handler: THandler,
    options?: ServerOptions<TProcessor, THandler>
  ): http.Server | tls.Server;

  declare export function createWebServer<TProcessor, THandler>(
    options: WebServerOptions<TProcessor, THandler>
  ): http.Server | tls.Server;

  declare export class TBufferedTransport mixins TTransport {
    constructor(buffer?: Buffer, callback?: TTransportCallback): this;
    static receiver(
      callback: (trans: TBufferedTransport, seqid: number) => void,
      seqid: number
    ): (data: Buffer) => void;
    commitPosition(): void;
    rollbackPosition(): void;
    isOpen(): boolean;
    open(): boolean;
    close(): boolean;
    setCurrSeqId(seqId: number): void;
    ensureAvailable(len: number): void;
    read(len: number): Buffer;
    readByte(): number;
    readI16(): number;
    readI32(): number;
    readDouble(): number;
    readString(): string;
    write(buf: Buffer | string): void;
    flush(): void;
  }
  declare export class TFramedTransport mixins TTransport {
    constructor(buffer?: Buffer, callback?: TTransportCallback): this;
    static receiver(
      callback: (trans: TFramedTransport, seqid: number) => void,
      seqid: number
    ): (data: Buffer) => void;
    commitPosition(): void;
    rollbackPosition(): void;
    isOpen(): boolean;
    open(): boolean;
    close(): boolean;
    setCurrSeqId(seqId: number): void;
    ensureAvailable(len: number): void;
    read(len: number): Buffer;
    readByte(): number;
    readI16(): number;
    readI32(): number;
    readDouble(): number;
    readString(): string;
    write(buf: Buffer | string): void;
    flush(): void;
  }
  declare export interface TTransportConstructor {
    new(buffer?: Buffer, callback?: TTransportCallback): TTransport;
  }
  declare export class TBinaryProtocol mixins TProtocol {
    constructor(
      trans: TTransport,
      strictRead?: boolean,
      strictWrite?: boolean
    ): this;
    flush(): void;
    writeMessageBegin(
      name: string,
      type: Thrift$MessageType,
      seqid: number
    ): void;
    writeMessageEnd(): void;
    writeStructBegin(name: string): void;
    writeStructEnd(): void;
    writeFieldBegin(name: string, type: Thrift$Type, id: number): void;
    writeFieldEnd(): void;
    writeFieldStop(): void;
    writeMapBegin(ktype: Thrift$Type, vtype: Thrift$Type, size: number): void;
    writeMapEnd(): void;
    writeListBegin(etype: Thrift$Type, size: number): void;
    writeListEnd(): void;
    writeSetBegin(etype: Thrift$Type, size: number): void;
    writeSetEnd(): void;
    writeBool(bool: boolean): void;
    writeByte(b: number): void;
    writeI16(i16: number): void;
    writeI32(i32: number): void;
    writeI64(i64: number | Int64): void;
    writeDouble(dbl: number): void;
    writeString(arg: string | Buffer): void;
    writeBinary(arg: string | Buffer): void;
    readMessageBegin(): TMessage;
    readMessageEnd(): void;
    readStructBegin(): TStruct;
    readStructEnd(): void;
    readFieldBegin(): TField;
    readFieldEnd(): void;
    readMapBegin(): TMap;
    readMapEnd(): void;
    readListBegin(): TList;
    readListEnd(): void;
    readSetBegin(): TSet;
    readSetEnd(): void;
    readBool(): boolean;
    readByte(): number;
    readI16(): number;
    readI32(): number;
    readI64(): Int64;
    readDouble(): number;
    readBinary(): Buffer;
    readString(): string;
    getTransport(): TTransport;
    skip(type: Thrift$Type): void;
  }
  declare export class TJSONProtocol mixins TProtocol {
    constructor(trans: TTransport): this;
    flush(): void;
    writeMessageBegin(
      name: string,
      type: Thrift$MessageType,
      seqid: number
    ): void;
    writeMessageEnd(): void;
    writeStructBegin(name: string): void;
    writeStructEnd(): void;
    writeFieldBegin(name: string, type: Thrift$Type, id: number): void;
    writeFieldEnd(): void;
    writeFieldStop(): void;
    writeMapBegin(ktype: Thrift$Type, vtype: Thrift$Type, size: number): void;
    writeMapEnd(): void;
    writeListBegin(etype: Thrift$Type, size: number): void;
    writeListEnd(): void;
    writeSetBegin(etype: Thrift$Type, size: number): void;
    writeSetEnd(): void;
    writeBool(bool: boolean): void;
    writeByte(b: number): void;
    writeI16(i16: number): void;
    writeI32(i32: number): void;
    writeI64(i64: number | Int64): void;
    writeDouble(dbl: number): void;
    writeString(arg: string | Buffer): void;
    writeBinary(arg: string | Buffer): void;
    readMessageBegin(): TMessage;
    readMessageEnd(): void;
    readStructBegin(): TStruct;
    readStructEnd(): void;
    readFieldBegin(): TField;
    readFieldEnd(): void;
    readMapBegin(): TMap;
    readMapEnd(): void;
    readListBegin(): TList;
    readListEnd(): void;
    readSetBegin(): TSet;
    readSetEnd(): void;
    readBool(): boolean;
    readByte(): number;
    readI16(): number;
    readI32(): number;
    readI64(): Int64;
    readDouble(): number;
    readBinary(): Buffer;
    readString(): string;
    getTransport(): TTransport;
    skip(type: Thrift$Type): void;
  }
  declare export class TCompactProtocol mixins TProtocol {
    constructor(trans: TTransport): this;
    flush(): void;
    writeMessageBegin(
      name: string,
      type: Thrift$MessageType,
      seqid: number
    ): void;
    writeMessageEnd(): void;
    writeStructBegin(name: string): void;
    writeStructEnd(): void;
    writeFieldBegin(name: string, type: Thrift$Type, id: number): void;
    writeFieldEnd(): void;
    writeFieldStop(): void;
    writeMapBegin(ktype: Thrift$Type, vtype: Thrift$Type, size: number): void;
    writeMapEnd(): void;
    writeListBegin(etype: Thrift$Type, size: number): void;
    writeListEnd(): void;
    writeSetBegin(etype: Thrift$Type, size: number): void;
    writeSetEnd(): void;
    writeBool(bool: boolean): void;
    writeByte(b: number): void;
    writeI16(i16: number): void;
    writeI32(i32: number): void;
    writeI64(i64: number | Int64): void;
    writeDouble(dbl: number): void;
    writeString(arg: string | Buffer): void;
    writeBinary(arg: string | Buffer): void;
    readMessageBegin(): TMessage;
    readMessageEnd(): void;
    readStructBegin(): TStruct;
    readStructEnd(): void;
    readFieldBegin(): TField;
    readFieldEnd(): void;
    readMapBegin(): TMap;
    readMapEnd(): void;
    readListBegin(): TList;
    readListEnd(): void;
    readSetBegin(): TSet;
    readSetEnd(): void;
    readBool(): boolean;
    readByte(): number;
    readI16(): number;
    readI32(): number;
    readI64(): Int64;
    readDouble(): number;
    readBinary(): Buffer;
    readString(): string;
    getTransport(): TTransport;
    skip(type: Thrift$Type): void;
  }
  declare export interface TProtocolConstructor {
    new(
      trans: TTransport,
      strictRead?: boolean,
      strictWrite?: boolean
    ): TProtocol;
  }

  declare var npm$namespace$Thrift: {
    objectLength: typeof Thrift$objectLength,

    Type: typeof Thrift$Type,
    MessageType: typeof Thrift$MessageType,
    TApplicationExceptionType: typeof Thrift$TApplicationExceptionType,
    TProtocolExceptionType: typeof Thrift$TProtocolExceptionType,
    TException: typeof Thrift$TException,
    TApplicationException: typeof Thrift$TApplicationException,
    TProtocolException: typeof Thrift$TProtocolException
  };

  declare var Thrift$Type: {|
    +STOP: 0, // 0
    +VOID: 1, // 1
    +BOOL: 2, // 2
    +BYTE: 3, // 3
    +I08: 3, // 3
    +DOUBLE: 4, // 4
    +I16: 6, // 6
    +I32: 8, // 8
    +I64: 10, // 10
    +STRING: 11, // 11
    +UTF7: 11, // 11
    +STRUCT: 12, // 12
    +MAP: 13, // 13
    +SET: 14, // 14
    +LIST: 15, // 15
    +UTF8: 16, // 16
    +UTF16: 17 // 17
  |};

  declare var Thrift$MessageType: {|
    +CALL: 1, // 1
    +REPLY: 2, // 2
    +EXCEPTION: 3, // 3
    +ONEWAY: 4 // 4
  |};

  declare class Thrift$TException mixins Error {
    name: string;
    message: string;
    constructor(message: string): this;
    getMessage(): string;
  }

  declare var Thrift$TApplicationExceptionType: {|
    +UNKNOWN: 0, // 0
    +UNKNOWN_METHOD: 1, // 1
    +INVALID_MESSAGE_TYPE: 2, // 2
    +WRONG_METHOD_NAME: 3, // 3
    +BAD_SEQUENCE_ID: 4, // 4
    +MISSING_RESULT: 5, // 5
    +INTERNAL_ERROR: 6, // 6
    +PROTOCOL_ERROR: 7, // 7
    +INVALID_TRANSFORM: 8, // 8
    +INVALID_PROTOCOL: 9, // 9
    +UNSUPPORTED_CLIENT_TYPE: 10 // 10
  |};

  declare class Thrift$TApplicationException mixins TException {
    message: string;
    code: number;
    constructor(
      type?: Thrift$TApplicationExceptionType,
      message?: string
    ): this;
    read(input: TProtocol): void;
    write(output: TProtocol): void;
    getCode(): number;
  }

  declare var Thrift$TProtocolExceptionType: {|
    +UNKNOWN: 0, // 0
    +INVALID_DATA: 1, // 1
    +NEGATIVE_SIZE: 2, // 2
    +SIZE_LIMIT: 3, // 3
    +BAD_VERSION: 4, // 4
    +NOT_IMPLEMENTED: 5, // 5
    +DEPTH_LIMIT: 6 // 6
  |};

  declare class Thrift$TProtocolException mixins Error {
    name: string;
    message: string;
    type: Thrift$TProtocolExceptionType;
    constructor(type: Thrift$TProtocolExceptionType, message: string): this;
  }

  declare function Thrift$objectLength(obj: any): number;
}
