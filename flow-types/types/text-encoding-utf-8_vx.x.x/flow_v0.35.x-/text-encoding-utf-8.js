declare module 'text-encoding-utf-8' {
        declare interface TextEncoding$TextDecoderOptions {
fatal?: boolean,
ignoreBOM?: boolean
} 

declare interface TextEncoding$TextDecodeOptions {
stream?: boolean
} 

declare interface TextEncoding$TextEncoderOptions {
NONSTANDARD_allowLegacyEncoding?: boolean
} 

declare interface TextEncoding$TextDecoder {
encoding: string,
fatal: boolean,
ignoreBOM: boolean,
decode(
input?: ArrayBuffer | ArrayBufferView,
options?: TextEncoding$TextDecodeOptions): string
} 

declare interface TextEncoding$TextEncoder {
encoding: string,
encode(input?: string, options?: TextEncoding$TextEncodeOptions): Uint8Array
} 

declare interface TextEncoding$TextEncodeOptions {
stream?: boolean
} 

declare interface TextEncoding$TextEncoderStatic {
(utfLabel?: string, options?: TextEncoding$TextEncoderOptions): TextEncoding$TextEncoder,
new (
utfLabel?: string,
options?: TextEncoding$TextEncoderOptions): TextEncoding$TextEncoder
} 

declare interface TextEncoding$TextDecoderStatic {
(label?: string, options?: TextEncoding$TextDecoderOptions): TextEncoding$TextDecoder,
new (
label?: string,
options?: TextEncoding$TextDecoderOptions): TextEncoding$TextDecoder
} 

declare interface TextEncoding$TextEncodingStatic {
TextEncoding$TextEncoder: TextEncoding$TextEncoderStatic,
TextEncoding$TextDecoder: TextEncoding$TextDecoderStatic
} 
	declare export var TextEncoding$TextDecoder: TextEncoding$TextEncoding$TextDecoderStatic;
	declare export var TextEncoding$TextEncoder: TextEncoding$TextEncoding$TextEncoderStatic;
	declare export var TextEncoding: TextEncoding$TextEncoding$TextEncodingStatic;
    }
