declare module 'msgpack5' {
        declare interface MsgPackOptions {
forceFloat64?: boolean,
compatibilityMode?: boolean
} 
	declare interface msgpack5$EncodeDecodeOptions {
header?: boolean
} 

declare class msgpack5$Base mixins stream.Transform {}

declare class msgpack5$Encoder mixins msgpack5$Base {}

declare class msgpack5$Decoder mixins msgpack5$Base {}

declare interface msgpack5$MessagePack {
encode(obj: any): bl,
decode(buf: Buffer): any,
decode(buf: bl): any,
register<T>(
type: number,
$constructor: any,
encode: (obj: T) => Buffer,
decode: (data: Buffer) => T): msgpack5$MessagePack,
registerEncoder<T>(
check: (obj: T) => boolean,
encode: (obj: T) => Buffer): msgpack5$MessagePack,
registerDecoder(type: number, decode: (data: Buffer) => any): msgpack5$MessagePack,
encoder(opts?: msgpack5$EncodeDecodeOptions): msgpack5$Encoder,
decoder(opts?: msgpack5$EncodeDecodeOptions): msgpack5$Decoder
} 
	declare function msgpack5(opts?: MsgPackOptions): msgpack5$msgpack5$MessagePack

	declare module.exports: typeof msgpack5

    }
