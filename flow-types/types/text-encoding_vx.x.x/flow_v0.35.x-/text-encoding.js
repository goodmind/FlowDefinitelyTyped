
      declare var npm$namespace$TextEncoding: {
        
        TextEncoder: typeof TextEncoding$TextEncoder,
TextDecoder: typeof TextEncoding$TextDecoder,
      }
declare interface TextEncoding$TextEncoderOptions {
NONSTANDARD_allowLegacyEncoding?: boolean
} 

declare interface TextEncoding$TextEncoderStatic {
(utfLabel?: string, options?: TextEncoding$TextEncoderOptions): TextEncoder,
new (utfLabel?: string, options?: TextEncoding$TextEncoderOptions): TextEncoder
} 

declare export var TextEncoding$TextEncoder: {
new (
utfLabel?: string,
options?: TextEncoding$TextEncoderOptions): TextEncoding$TextEncoder,
(utfLabel?: string, options?: TextEncoding$TextEncoderOptions): TextEncoding$TextEncoder,
encoding: string
};

declare export var TextEncoding$TextDecoder: {
(label?: string, options?: TextDecoderOptions): TextEncoding$TextDecoder,
new (label?: string, options?: TextDecoderOptions): TextEncoding$TextDecoder,
encoding: string
};declare interface TextEncodeOptions {
stream?: boolean
} declare interface TextDecoderOptions {
stream?: boolean
} declare interface TextEncoder {
+encoding: string,
encode(input?: string, options?: TextEncodeOptions): Uint8Array
} declare interface TextDecoder {
+encoding: string,
decode(input?: Uint8Array, options?: TextDecoderOptions): string
} declare module 'text-encoding' {
        declare module.exports: typeof TextEncoding

    }
