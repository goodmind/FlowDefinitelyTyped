declare module 'base64-url' {
        declare export function decode(value: string, encoding?: string): string

	declare export function encode(value: string, encoding?: string): string

	declare export function escape(value: string): string

	declare export function unescape(value: string): string

    }
