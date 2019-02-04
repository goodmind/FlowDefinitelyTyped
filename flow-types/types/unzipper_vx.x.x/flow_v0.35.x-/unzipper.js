declare module 'unzipper' {
        import type {
          Readable,Stream,PassThrough,Duplex,Transform
        } from 'stream';

	import type {
          ClientRequest,RequestOptions
        } from 'http';

	declare export type PullStream = {
stream(eof: number | string, includeEof: boolean): PassThrough,
pull(eof: number | string, includeEof: boolean): Promise<Buffer>
} & Duplex

	declare export type Entry = {
autodrain(): Transform & {
promise(): Promise<void>
},
buffer(): Promise<Buffer>,
path: string,
props: {
path: string
},
type: string,
vars: {
signature?: number,
versionsNeededToExtract: number,
flags: number,
compressionMethod: number,
lastModifiedTime: number,
crc32: number,
compressedSize: number,
fileNameLength: number,
extraFieldLength: number
},
extra: {
signature: number,
partsize: number,
uncompressedSize: number,
compressedSize: number,
offset: number,
disknum: number
}
} & PassThrough

	declare export function unzip(
source: {
stream: Readable,
size: () => Promise<number>
},
offset: number,
_password: string): Entry

	
      declare var npm$namespace$Open: {
        buffer: typeof Open$buffer,
file: typeof Open$file,
url: typeof Open$url,
s3: typeof Open$s3,
        
      }
declare function Open$buffer(data: Buffer): Promise<CentralDirectory>


declare function Open$file(filename: string): Promise<CentralDirectory>


declare function Open$url(
request: ClientRequest,
opt: string | RequestOptions): Promise<CentralDirectory>


declare function Open$s3(client: any, params: any): Promise<CentralDirectory>

	declare export function BufferStream(entry: Entry): Promise<Buffer>

	declare export interface CentralDirectory {
signature: number,
diskNumber: number,
diskStart: number,
numberOfRecordsOnDisk: number,
numberOfRecords: number,
sizeOfCentralDirectory: number,
offsetToStartOfCentralDirectory: number,
commentLength: number,
files: [{
signature: number,
versionMadeBy: number,
versionsNeededToExtract: number,
flags: number,
compressionMethod: number,
lastModifiedTime: number,
lastModifiedDate: number,
crc32: number,
compressedSize: number,
uncompressedSize: number,
fileNameLength: number,
extraFieldLength: number,
fileCommentLength: number,
diskNumber: number,
internalFileAttributes: number,
externalFileAttributes: number,
offsetToLocalFileHeader: number,
path: string,
comment: string,
stream: (password?: string) => Entry,
Open$buffer: (password?: string) => Promise<Buffer>
}]
} 
	declare export class ParseOptions  {
verbose: boolean;
path: string
}
	declare export type ParseStream = PullStream & {
promise(): Promise<void>
};
	declare export function Parse(opts?: ParseOptions): ParseStream

	declare export function ParseOne(match: RegExp, opts: ParseOptions): Duplex

	declare export function Extract(opts?: ParseOptions): ParseStream

    }
