declare module 'bech32' {
        declare export function decode(str: string, LIMIT?: number): {
prefix: string,
words: Buffer
}

	declare export function encode(prefix: string, words: Buffer, LIMIT?: number): string

	declare export function fromWords(words: Buffer): Buffer

	declare export function toWords(bytes: Buffer): Buffer

    }
