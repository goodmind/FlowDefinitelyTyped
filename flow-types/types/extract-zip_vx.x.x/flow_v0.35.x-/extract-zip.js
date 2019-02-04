declare module 'extract-zip' {
        declare interface extract$Options {
dir?: string,
defaultDirMode?: number,
defaultFileMode?: number,
onEntry(entry: any, zipfile: any): void
} 
	declare function extract(
zipPath: string,
opts: extract$extract$Options,
cb: (err?: Error) => void): void

	declare module.exports: typeof extract

    }
