declare module 'level-codec' {
        declare export interface CodecEncoder {
encode: (val: any) => any,
decode: (val: any) => any,
buffer: boolean,
type: string
} 
	declare export interface CodecOptions {
keyEncoding?: string | CodecEncoder,
valueEncoding?: string | CodecEncoder
} 
	declare export interface Codec {
encodeKey(key: any, opts?: CodecOptions, batchOpts?: CodecOptions): any,
encodeValue(value: any, opts?: CodecOptions, batchOpts?: CodecOptions): any,
decodeKey(key: any, opts?: CodecOptions): any,
decodeValue(value: any, opts?: CodecOptions): any,
encodeBatch(ops: any, opts?: CodecOptions): any,
encodeLtgt(ltgt: any): any,
createStreamDecoder(opts: CodecOptions): any,
keyAsBuffer(opts?: CodecOptions): any,
valueAsBuffer(opts?: CodecOptions): any
} 
	declare export interface CodecConstructor {
new (options?: CodecOptions): Codec,
(options?: CodecOptions): Codec
} 
	declare export var Codec: CodecConstructor;
    }
