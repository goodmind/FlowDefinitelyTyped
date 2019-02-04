declare module 'chardet' {
        declare export interface Confidence {
name: string,
confidence: number,
lang?: string
} 
	declare export interface Options {
returnAllMatches?: boolean,
sampleSize?: number
} 
	declare export type Result = Confidence[] | string | null;
	declare export function detect(buf: Buffer, opts?: Options): Result

	declare export function detectFile(path: string, cb: (err: any, result: Result) => void): void

	declare export function detectFile(path: string, opts: Options, cb: (err: any, result: Result) => void): void

	declare export function detectFileSync(path: string, opts?: Options): Result

    }
