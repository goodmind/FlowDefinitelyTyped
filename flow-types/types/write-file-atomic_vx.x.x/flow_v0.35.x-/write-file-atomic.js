declare module 'write-file-atomic' {
        declare module.exports: typeof writeFile

	declare function writeFile(
filename: string,
data: string | Buffer,
options: writeFile$writeFile$Options,
callback: (error?: Error) => void): void

	declare function writeFile(
filename: string,
data: string | Buffer,
callback: (error?: Error) => void): void

	
      declare var npm$namespace$writeFile: {
        sync: typeof writeFile$sync,
        
      }
declare function writeFile$sync(filename: string, data: string | Buffer, options?: writeFile$Options): void


declare interface writeFile$Options {
chown?: {
uid: number,
gid: number
},
encoding?: string,
fsync?: boolean,
mode?: number
} 
    }
