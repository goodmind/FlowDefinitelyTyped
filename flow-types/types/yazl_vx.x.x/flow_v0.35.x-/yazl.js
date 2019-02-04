declare module 'yazl' {
        import type {
          Readable
        } from 'stream';

	import type {
          Buffer
        } from 'buffer';

	declare export interface Options {
mtime: Date,
mode: number,
compress: boolean,
forceZip64Format: boolean
} 
	declare export type ReadStreamOptions = {
size: number
} & Options

	declare export interface DirectoryOptions {
mtime: Date,
mode: number
} 
	declare export interface EndOptions {
forceZip64Format: boolean
} 
	declare export interface DosDateTime {
date: number,
time: number
} 
	declare export class ZipFile  {
addFile(realPath: string, metadataPath: string, options?: $Shape<Options>): void;
outputStream: Readable;
addReadStream(
input: Readable,
metadataPath: string,
options?: $Shape<ReadStreamOptions>): void;
addBuffer(buffer: Buffer, metadataPath: string, options?: $Shape<Options>): void;
end(optoins?: EndOptions, finalSizeCallback?: () => void): void;
addEmptyDirectory(metadataPath: string, options?: $Shape<DirectoryOptions>): void;
dateToDosDateTime(jsDate: Date): DosDateTime
}
    }
