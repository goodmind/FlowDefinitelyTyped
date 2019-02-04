declare module 'js-base64' {
        
      declare var npm$namespace$Base64: {
        encode: typeof Base64$encode,
encodeURI: typeof Base64$encodeURI,
decode: typeof Base64$decode,
atob: typeof Base64$atob,
btoa: typeof Base64$btoa,
fromBase64: typeof Base64$fromBase64,
toBase64: typeof Base64$toBase64,
btou: typeof Base64$btou,
utob: typeof Base64$utob,
noConflict: typeof Base64$noConflict,
extendString: typeof Base64$extendString,
        VERSION: typeof Base64$VERSION,
      }
declare var Base64$VERSION: string;

declare function Base64$encode(s: string, uriSafe?: boolean): string


declare function Base64$encodeURI(s: string): string


declare function Base64$decode(base64: string): string


declare function Base64$atob(base64: string): string


declare function Base64$btoa(s: string): string


declare function Base64$fromBase64(base64: string): string


declare function Base64$toBase64(s: string, uriSafe?: boolean): string


declare function Base64$btou(s: string): string


declare function Base64$utob(s: string): string


declare function Base64$noConflict(): typeof Base64


declare function Base64$extendString(): void

	declare export type Base64_ = typeof Base64;
	declare module 'global' {
        declare interface String {
fromBase64(): string,
toBase64(uriSafe?: boolean): string,
toBase64URI(): string
} 
	declare var Base64: Base64_;
    }

    }
