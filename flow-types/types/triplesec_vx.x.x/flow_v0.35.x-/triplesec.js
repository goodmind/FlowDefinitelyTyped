declare module 'triplesec' {
        declare export interface WordArray {
sigBytes: number,
words: number[],
to_hex: () => string
} 
	declare export interface Arguments {
data: Buffer,
key: Buffer,
progress_hook?: (progress: Progress) => void
} 
	declare export interface Progress {
what: string,
i: number,
total: number
} 
	declare export function encrypt(arg: Arguments, cb: (err: Error | null, buff: Buffer | null) => void): void

	declare export function decrypt(arg: Arguments, cb: (err: Error | null, buff: Buffer | null) => void): void

	
      declare var npm$namespace$prng: {
        generate: typeof prng$generate,
        
      }
declare function prng$generate(n: number, cb: (words: WordArray) => void): void

    }
