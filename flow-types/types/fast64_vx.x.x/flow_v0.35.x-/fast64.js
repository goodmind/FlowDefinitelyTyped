declare module 'fast64' {
        declare export interface Options {
uint8Array: boolean
} 
	declare export function encode(value: string): string

	declare export function decode(base64: string): string

	declare export function decode(base64: string, options: Options): Uint8Array

	declare export function urlencode(value: string): string

	declare export function urldecode(base64: string): string

	declare export function urldecode(base64: string, options: Options): Uint8Array

    }
