declare module 'ini' {
        declare interface EncodeOptions {
section: string,
whitespace: boolean
} 
	declare export function decode(str: string): {
[key: string]: any
}

	declare export function parse(str: string): {
[key: string]: any
}

	declare export function encode(object: any, options?: EncodeOptions | string): string

	declare export function stringify(object: any, options?: EncodeOptions | string): string

	declare export function safe(val: string): string

	declare export function unsafe(val: string): string

    }
