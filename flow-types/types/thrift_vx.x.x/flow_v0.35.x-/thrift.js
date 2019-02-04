declare module 'thrift' {
        import typeof * as net from 'net';

	import typeof * as http from 'http';

	import typeof * as https from 'https';

	import typeof * as tls from 'tls';

	declare export {
          Int64
        }

	declare export {
          Q
        }

	declare export interface TMap {
ktype: Thrift$Thrift$Type,
vtype: Thrift$Thrift$Type,
size: number
} 
	declare export interface TMessage {
fname: string,
mtype: Thrift$Thrift$MessageType,
rseqid: number
} 
	declare export interface TField {
fname: string,
ftype: Thrift$Thrift$Type,
fid: number
} 
	declare export interface TList {
etype: Thrift$Thrift$Type,
size: number
} 
	declare export interface TSet {
etype: Thrift$Thrift$Type,
size: number
} 
	declare export interface TStruct {
fname: string
} 
	declare export interface TStructLike {
read(input: TProtocol): void,
write(output: TProtocol): void
} 
	declare export interface TTransport {
commitPosition(): void,
rollbackPosition(): void,
isOpen(): boolean,
open(): boolean,
close(): boolean,
setCurrSeqId(seqId: number): void,
ensureAvailable(len: number): void,
read(len: number): Buffer,
readByte(): number,
readI16(): number,
readI32(): number,
readDouble(): number,
readString(): string,
write(buf: Buffer | string): void,
flush(): void
} 
	declare export interface TProtocol {
flush(): void,
writeMessageBegin(name: string, type: Thrift$Thrift$MessageType, seqid: number): void,
writeMessageEnd(): void,
writeStructBegin(name: string): void,
writeStructEnd(): void,
writeFieldBegin(name: string, type: Thrift$Thrift$Type, id: number): void,
writeFieldEnd(): void,
writeFieldStop(): void,
writeMapBegin(ktype: Thrift$Thrift$Type, vtype: Thrift$Thrift$Type, size: number): void,
writeMapEnd(): void,
writeListBegin(etype: Thrift$Thrift$Type, size: number): void,
writeListEnd(): void,
writeSetBegin(etype: Thrift$Thrift$Type, size: number): void,
writeSetEnd(): void,
writeBool(bool: boolean): void,
writeByte(b: number): void,
writeI16(i16: number): void,
writeI32(i32: number): void,
writeI64(i64: number | Int64): void,
writeDouble(dbl: number): void,
writeString(arg: string | Buffer): void,
writeBinary(arg: string | Buffer): void,
readMessageBegin(): TMessage,
readMessageEnd(): void,
readStructBegin(): TStruct,
readStructEnd(): void,
readFieldBegin(): TField,
readFieldEnd(): void,
readMapBegin(): TMap,
readMapEnd(): void,
readListBegin(): TList,
readListEnd(): void,
readSetBegin(): TSet,
readSetEnd(): void,
readBool(): boolean,
readByte(): number,
readI16(): number,
readI32(): number,
readI64(): Int64,
readDouble(): number,
readBinary(): Buffer,
readString(): string,
getTransport(): TTransport,
skip(type: Thrift$Thrift$Type): void
} 
	declare export interface HttpHeaders {
[name: string]: number | string | string[] | void
} 
	declare export interface SeqId2Service {
[seqid: number]: string
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
connection_gone(): void
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
write(data: Buffer): void
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
getSendBuffer(): string
}
	declare export interface WSOptions {
host: string,
port: number,
path: string,
headers: HttpHeaders
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
write(data: Buffer): void
}
	declare export class Multiplexer  {
createClient<TClient>(
serviceName: string,
client: TClientConstructor<TClient>,
connection: Connection): TClient
}
	declare export class MultiplexedProcessor  {
constructor(stream?: any, options?: any): this;
process(input: TProtocol, output: TProtocol): void
}
	declare export type TTransportCallback = (msg?: Buffer, seqid?: number) => void;
	declare export interface ServiceMap<TProcessor, THandler> {
[uri: string]: ServerOptions<TProcessor, THandler>
} 
	declare export interface ServiceOptions<TProcessor, THandler> {
transport?: TTransportConstructor,
protocol?: TProtocolConstructor,
processor?: {
new (handler: THandler): TProcessor
},
handler?: THandler
} 
	declare export type ServerOptions<TProcessor, THandler> = {
cors?: string[],
files?: string,
headers?: HttpHeaders,
services?: ServiceMap<TProcessor, THandler>,
tls?: tls.TlsOptions
} & ServiceOptions<TProcessor, THandler>

	declare export interface ConnectOptions {
transport?: TTransportConstructor,
protocol?: TProtocolConstructor,
path?: string,
headers?: HttpHeaders,
https?: boolean,
debug?: boolean,
max_attempts?: number,
retry_max_delay?: number,
connect_timeout?: number,
timeout?: number,
nodeOptions?: http.RequestOptions | https.RequestOptions
} 
	declare export interface WSConnectOptions {
transport?: TTransportConstructor,
protocol?: TProtocolConstructor,
path?: string,
headers?: HttpHeaders,
secure?: boolean,
wsOptions?: WSOptions
} 
	declare export type TClientConstructor<TClient> = {
new (output: TTransport, pClass: {
new (trans: TTransport): TProtocol
}): TClient
} | {
Client: {
new (output: TTransport, pClass: {
new (trans: TTransport): TProtocol
}): TClient
}
};
	declare export type TProcessorConstructor<TProcessor, THandler> = {
new (handler: THandler): TProcessor
} | {
Processor: {
new (handler: THandler): TProcessor
}
};
	declare export interface WebServerOptions<TProcessor, THandler> {
services: {
[path: string]: {
processor: TProcessorConstructor<TProcessor, THandler>,
handler: THandler
}
}
} 
	declare export function createConnection(host: string | void, port: number, options?: ConnectOptions): Connection

	declare export function createSSLConnection(host: string | void, port: number, options?: ConnectOptions): Connection

	declare export function createHttpConnection(host: string | void, port: number, options?: ConnectOptions): HttpConnection

	declare export function createXHRConnection(host: string | void, port: number, options?: ConnectOptions): XHRConnection

	declare export function createWSConnectin(host: string | void, port: number, options?: WSConnectOptions): WSConnection

	declare export function createXHRClient<TClient>(
client: TClientConstructor<TClient>,
connection: XHRConnection): TClient

	declare export function createHttpClient<TClient>(
client: TClientConstructor<TClient>,
connection: HttpConnection): TClient

	declare export function createWSClient<TClient>(
client: TClientConstructor<TClient>,
connection: WSConnection): TClient

	declare export function createStdIOClient<TClient>(client: TClientConstructor<TClient>, connection: Connection): TClient

	declare export function createClient<TClient>(client: TClientConstructor<TClient>, connection: Connection): TClient

	declare export function createServer<TProcessor, THandler>(
processor: TProcessorConstructor<TProcessor, THandler>,
handler: THandler,
options?: ServerOptions<TProcessor, THandler>): http.Server | tls.Server

	declare export function createWebServer<TProcessor, THandler>(
options: WebServerOptions<TProcessor, THandler>): http.Server | tls.Server

	declare export class TBufferedTransport mixins TTransport {
constructor(buffer?: Buffer, callback?: TTransportCallback): this;
static receiver(
callback: (trans: TBufferedTransport, seqid: number) => void,
seqid: number): (data: Buffer) => void;
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
flush(): void
}
	declare export class TFramedTransport mixins TTransport {
constructor(buffer?: Buffer, callback?: TTransportCallback): this;
static receiver(
callback: (trans: TFramedTransport, seqid: number) => void,
seqid: number): (data: Buffer) => void;
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
flush(): void
}
	declare export interface TTransportConstructor {
new (buffer?: Buffer, callback?: TTransportCallback): TTransport
} 
	declare export class TBinaryProtocol mixins TProtocol {
constructor(trans: TTransport, strictRead?: boolean, strictWrite?: boolean): this;
flush(): void;
writeMessageBegin(name: string, type: Thrift$Thrift$MessageType, seqid: number): void;
writeMessageEnd(): void;
writeStructBegin(name: string): void;
writeStructEnd(): void;
writeFieldBegin(name: string, type: Thrift$Thrift$Type, id: number): void;
writeFieldEnd(): void;
writeFieldStop(): void;
writeMapBegin(ktype: Thrift$Thrift$Type, vtype: Thrift$Thrift$Type, size: number): void;
writeMapEnd(): void;
writeListBegin(etype: Thrift$Thrift$Type, size: number): void;
writeListEnd(): void;
writeSetBegin(etype: Thrift$Thrift$Type, size: number): void;
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
skip(type: Thrift$Thrift$Type): void
}
	declare export class TJSONProtocol mixins TProtocol {
constructor(trans: TTransport): this;
flush(): void;
writeMessageBegin(name: string, type: Thrift$Thrift$MessageType, seqid: number): void;
writeMessageEnd(): void;
writeStructBegin(name: string): void;
writeStructEnd(): void;
writeFieldBegin(name: string, type: Thrift$Thrift$Type, id: number): void;
writeFieldEnd(): void;
writeFieldStop(): void;
writeMapBegin(ktype: Thrift$Thrift$Type, vtype: Thrift$Thrift$Type, size: number): void;
writeMapEnd(): void;
writeListBegin(etype: Thrift$Thrift$Type, size: number): void;
writeListEnd(): void;
writeSetBegin(etype: Thrift$Thrift$Type, size: number): void;
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
skip(type: Thrift$Thrift$Type): void
}
	declare export class TCompactProtocol mixins TProtocol {
constructor(trans: TTransport): this;
flush(): void;
writeMessageBegin(name: string, type: Thrift$Thrift$MessageType, seqid: number): void;
writeMessageEnd(): void;
writeStructBegin(name: string): void;
writeStructEnd(): void;
writeFieldBegin(name: string, type: Thrift$Thrift$Type, id: number): void;
writeFieldEnd(): void;
writeFieldStop(): void;
writeMapBegin(ktype: Thrift$Thrift$Type, vtype: Thrift$Thrift$Type, size: number): void;
writeMapEnd(): void;
writeListBegin(etype: Thrift$Thrift$Type, size: number): void;
writeListEnd(): void;
writeSetBegin(etype: Thrift$Thrift$Type, size: number): void;
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
skip(type: Thrift$Thrift$Type): void
}
	declare export interface TProtocolConstructor {
new (trans: TTransport, strictRead?: boolean, strictWrite?: boolean): TProtocol
} 
	
      declare var npm$namespace$Thrift: {
        objectLength: typeof Thrift$objectLength,
        
      }
declare  class Thrift$Type {
  constructor(...args: empty): mixed;
static +STOP: Class<Thrift$Type__STOP> & Thrift$Type__STOP & 0;// 0
static +VOID: Class<Thrift$Type__VOID> & Thrift$Type__VOID & 1;// 1
static +BOOL: Class<Thrift$Type__BOOL> & Thrift$Type__BOOL & 2;// 2
static +BYTE: Class<Thrift$Type__BYTE> & Thrift$Type__BYTE & 3;// 3
static +I08: Class<Thrift$Type__I08> & Thrift$Type__I08 & 3;// 3
static +DOUBLE: Class<Thrift$Type__DOUBLE> & Thrift$Type__DOUBLE & 4;// 4
static +I16: Class<Thrift$Type__I16> & Thrift$Type__I16 & 6;// 6
static +I32: Class<Thrift$Type__I32> & Thrift$Type__I32 & 8;// 8
static +I64: Class<Thrift$Type__I64> & Thrift$Type__I64 & 10;// 10
static +STRING: Class<Thrift$Type__STRING> & Thrift$Type__STRING & 11;// 11
static +UTF7: Class<Thrift$Type__UTF7> & Thrift$Type__UTF7 & 11;// 11
static +STRUCT: Class<Thrift$Type__STRUCT> & Thrift$Type__STRUCT & 12;// 12
static +MAP: Class<Thrift$Type__MAP> & Thrift$Type__MAP & 13;// 13
static +SET: Class<Thrift$Type__SET> & Thrift$Type__SET & 14;// 14
static +LIST: Class<Thrift$Type__LIST> & Thrift$Type__LIST & 15;// 15
static +UTF8: Class<Thrift$Type__UTF8> & Thrift$Type__UTF8 & 16;// 16
static +UTF16: Class<Thrift$Type__UTF16> & Thrift$Type__UTF16 & 17;// 17

}

declare class Thrift$Type__STOP mixins Thrift$Type {}
declare class Thrift$Type__VOID mixins Thrift$Type {}
declare class Thrift$Type__BOOL mixins Thrift$Type {}
declare class Thrift$Type__BYTE mixins Thrift$Type {}
declare class Thrift$Type__I08 mixins Thrift$Type {}
declare class Thrift$Type__DOUBLE mixins Thrift$Type {}
declare class Thrift$Type__I16 mixins Thrift$Type {}
declare class Thrift$Type__I32 mixins Thrift$Type {}
declare class Thrift$Type__I64 mixins Thrift$Type {}
declare class Thrift$Type__STRING mixins Thrift$Type {}
declare class Thrift$Type__UTF7 mixins Thrift$Type {}
declare class Thrift$Type__STRUCT mixins Thrift$Type {}
declare class Thrift$Type__MAP mixins Thrift$Type {}
declare class Thrift$Type__SET mixins Thrift$Type {}
declare class Thrift$Type__LIST mixins Thrift$Type {}
declare class Thrift$Type__UTF8 mixins Thrift$Type {}
declare class Thrift$Type__UTF16 mixins Thrift$Type {}


declare  class Thrift$MessageType {
  constructor(...args: empty): mixed;
static +CALL: Class<Thrift$MessageType__CALL> & Thrift$MessageType__CALL & 1;// 1
static +REPLY: Class<Thrift$MessageType__REPLY> & Thrift$MessageType__REPLY & 2;// 2
static +EXCEPTION: Class<Thrift$MessageType__EXCEPTION> & Thrift$MessageType__EXCEPTION & 3;// 3
static +ONEWAY: Class<Thrift$MessageType__ONEWAY> & Thrift$MessageType__ONEWAY & 4;// 4

}

declare class Thrift$MessageType__CALL mixins Thrift$MessageType {}
declare class Thrift$MessageType__REPLY mixins Thrift$MessageType {}
declare class Thrift$MessageType__EXCEPTION mixins Thrift$MessageType {}
declare class Thrift$MessageType__ONEWAY mixins Thrift$MessageType {}


declare class Thrift$TException mixins Error {
name: string;
message: string;
constructor(message: string): this;
getMessage(): string
}

declare  class Thrift$TApplicationExceptionType {
  constructor(...args: empty): mixed;
static +UNKNOWN: Class<Thrift$TApplicationExceptionType__UNKNOWN> & Thrift$TApplicationExceptionType__UNKNOWN & 0;// 0
static +UNKNOWN_METHOD: Class<Thrift$TApplicationExceptionType__UNKNOWN_METHOD> & Thrift$TApplicationExceptionType__UNKNOWN_METHOD & 1;// 1
static +INVALID_MESSAGE_TYPE: Class<Thrift$TApplicationExceptionType__INVALID_MESSAGE_TYPE> & Thrift$TApplicationExceptionType__INVALID_MESSAGE_TYPE & 2;// 2
static +WRONG_METHOD_NAME: Class<Thrift$TApplicationExceptionType__WRONG_METHOD_NAME> & Thrift$TApplicationExceptionType__WRONG_METHOD_NAME & 3;// 3
static +BAD_SEQUENCE_ID: Class<Thrift$TApplicationExceptionType__BAD_SEQUENCE_ID> & Thrift$TApplicationExceptionType__BAD_SEQUENCE_ID & 4;// 4
static +MISSING_RESULT: Class<Thrift$TApplicationExceptionType__MISSING_RESULT> & Thrift$TApplicationExceptionType__MISSING_RESULT & 5;// 5
static +INTERNAL_ERROR: Class<Thrift$TApplicationExceptionType__INTERNAL_ERROR> & Thrift$TApplicationExceptionType__INTERNAL_ERROR & 6;// 6
static +PROTOCOL_ERROR: Class<Thrift$TApplicationExceptionType__PROTOCOL_ERROR> & Thrift$TApplicationExceptionType__PROTOCOL_ERROR & 7;// 7
static +INVALID_TRANSFORM: Class<Thrift$TApplicationExceptionType__INVALID_TRANSFORM> & Thrift$TApplicationExceptionType__INVALID_TRANSFORM & 8;// 8
static +INVALID_PROTOCOL: Class<Thrift$TApplicationExceptionType__INVALID_PROTOCOL> & Thrift$TApplicationExceptionType__INVALID_PROTOCOL & 9;// 9
static +UNSUPPORTED_CLIENT_TYPE: Class<Thrift$TApplicationExceptionType__UNSUPPORTED_CLIENT_TYPE> & Thrift$TApplicationExceptionType__UNSUPPORTED_CLIENT_TYPE & 10;// 10

}

declare class Thrift$TApplicationExceptionType__UNKNOWN mixins Thrift$TApplicationExceptionType {}
declare class Thrift$TApplicationExceptionType__UNKNOWN_METHOD mixins Thrift$TApplicationExceptionType {}
declare class Thrift$TApplicationExceptionType__INVALID_MESSAGE_TYPE mixins Thrift$TApplicationExceptionType {}
declare class Thrift$TApplicationExceptionType__WRONG_METHOD_NAME mixins Thrift$TApplicationExceptionType {}
declare class Thrift$TApplicationExceptionType__BAD_SEQUENCE_ID mixins Thrift$TApplicationExceptionType {}
declare class Thrift$TApplicationExceptionType__MISSING_RESULT mixins Thrift$TApplicationExceptionType {}
declare class Thrift$TApplicationExceptionType__INTERNAL_ERROR mixins Thrift$TApplicationExceptionType {}
declare class Thrift$TApplicationExceptionType__PROTOCOL_ERROR mixins Thrift$TApplicationExceptionType {}
declare class Thrift$TApplicationExceptionType__INVALID_TRANSFORM mixins Thrift$TApplicationExceptionType {}
declare class Thrift$TApplicationExceptionType__INVALID_PROTOCOL mixins Thrift$TApplicationExceptionType {}
declare class Thrift$TApplicationExceptionType__UNSUPPORTED_CLIENT_TYPE mixins Thrift$TApplicationExceptionType {}


declare class Thrift$TApplicationException mixins Thrift$TException {
message: string;
code: number;
constructor(type?: Thrift$TApplicationExceptionType, message?: string): this;
read(input: TProtocol): void;
write(output: TProtocol): void;
getCode(): number
}

declare  class Thrift$TProtocolExceptionType {
  constructor(...args: empty): mixed;
static +UNKNOWN: Class<Thrift$TProtocolExceptionType__UNKNOWN> & Thrift$TProtocolExceptionType__UNKNOWN & 0;// 0
static +INVALID_DATA: Class<Thrift$TProtocolExceptionType__INVALID_DATA> & Thrift$TProtocolExceptionType__INVALID_DATA & 1;// 1
static +NEGATIVE_SIZE: Class<Thrift$TProtocolExceptionType__NEGATIVE_SIZE> & Thrift$TProtocolExceptionType__NEGATIVE_SIZE & 2;// 2
static +SIZE_LIMIT: Class<Thrift$TProtocolExceptionType__SIZE_LIMIT> & Thrift$TProtocolExceptionType__SIZE_LIMIT & 3;// 3
static +BAD_VERSION: Class<Thrift$TProtocolExceptionType__BAD_VERSION> & Thrift$TProtocolExceptionType__BAD_VERSION & 4;// 4
static +NOT_IMPLEMENTED: Class<Thrift$TProtocolExceptionType__NOT_IMPLEMENTED> & Thrift$TProtocolExceptionType__NOT_IMPLEMENTED & 5;// 5
static +DEPTH_LIMIT: Class<Thrift$TProtocolExceptionType__DEPTH_LIMIT> & Thrift$TProtocolExceptionType__DEPTH_LIMIT & 6;// 6

}

declare class Thrift$TProtocolExceptionType__UNKNOWN mixins Thrift$TProtocolExceptionType {}
declare class Thrift$TProtocolExceptionType__INVALID_DATA mixins Thrift$TProtocolExceptionType {}
declare class Thrift$TProtocolExceptionType__NEGATIVE_SIZE mixins Thrift$TProtocolExceptionType {}
declare class Thrift$TProtocolExceptionType__SIZE_LIMIT mixins Thrift$TProtocolExceptionType {}
declare class Thrift$TProtocolExceptionType__BAD_VERSION mixins Thrift$TProtocolExceptionType {}
declare class Thrift$TProtocolExceptionType__NOT_IMPLEMENTED mixins Thrift$TProtocolExceptionType {}
declare class Thrift$TProtocolExceptionType__DEPTH_LIMIT mixins Thrift$TProtocolExceptionType {}


declare class Thrift$TProtocolException mixins Error {
name: string;
message: string;
type: Thrift$TProtocolExceptionType;
constructor(type: Thrift$TProtocolExceptionType, message: string): this
}

declare function Thrift$objectLength(obj: any): number

    }
