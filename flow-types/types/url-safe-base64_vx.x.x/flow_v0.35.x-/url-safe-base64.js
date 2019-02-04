declare module 'url-safe-base64' {
        declare export function decode(safe: string): string

	declare export function encode(base64: string): string

	declare export function isBase64(string: string): string

	declare export function isUrlSafeBase64(string: string): string

	declare export function trim(string: string): string

    }
