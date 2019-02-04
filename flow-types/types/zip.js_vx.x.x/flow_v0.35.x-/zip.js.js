declare module 'zip.js' {
        declare interface FileEntry {} 
	
      declare var npm$namespace$zip: {
        createReader: typeof zip$createReader,
createWriter: typeof zip$createWriter,
        useWebWorkers: typeof zip$useWebWorkers,
workerScriptsPath: typeof zip$workerScriptsPath,
workerScripts: typeof zip$workerScripts,
      }
declare export var zip$useWebWorkers: boolean;

declare export var zip$workerScriptsPath: string;

declare export var zip$workerScripts: {
deflater?: string[],
inflater?: string[]
};

declare export class zip$Reader  {
size: number;
init(callback: () => void, onerror: (error: any) => void): void;
readUint8Array(
index: number,
length: number,
callback: (result: Uint8Array) => void,
onerror?: (error: any) => void): void
}

declare export class zip$TextReader mixins zip$Reader {
constructor(text: string): this
}

declare export class zip$BlobReader mixins zip$Reader {
constructor(blob: Blob): this
}

declare export class zip$Data64URIReader mixins zip$Reader {
constructor(dataURI: string): this
}

declare export class zip$HttpReader mixins zip$Reader {
constructor(url: string): this
}

declare export function zip$createReader(
reader: zip$zip$Reader,
callback: (zipReader: zip$ZipReader) => void,
onerror?: (error: any) => void): void


declare export class zip$ZipReader  {
getEntries(callback: (entries: zip$zip$Entry[]) => void): void;
close(callback?: () => void): void
}

declare export interface zip$Entry {
filename: string,
directory: boolean,
compressedSize: number,
uncompressedSize: number,
lastModDate: Date,
lastModDateRaw: number,
comment: string,
crc32: number,
getData(
writer: zip$zip$Writer,
onend: (result: any) => void,
onprogress?: (progress: number, total: number) => void,
checkCrc32?: boolean): void
} 

declare export class zip$Writer  {
init(callback: () => void, onerror?: (error: any) => void): void;
writeUint8Array(array: Uint8Array, callback: () => void, onerror?: (error: any) => void): void;
getData(callback: (data: any) => void, onerror?: (error: any) => void): void
}

declare export class zip$TextWriter mixins zip$Writer {
constructor(encoding: string): this
}

declare export class zip$BlobWriter mixins zip$Writer {
constructor(contentType: string): this
}

declare export class zip$FileWriter mixins zip$Writer {
constructor(fileEntry: FileEntry): this
}

declare export class zip$Data64URIWriter mixins zip$Writer {
constructor(mimeString?: string): this
}

declare export function zip$createWriter(
writer: zip$zip$Writer,
callback: (zipWriter: zip$zip$ZipWriter) => void,
onerror?: (error: any) => void,
dontDeflate?: boolean): void


declare export interface zip$WriteOptions {
directory?: boolean,
level?: number,
comment?: string,
lastModDate?: Date,
version?: number
} 

declare export class zip$ZipWriter  {
add(
name: string,
reader: zip$zip$Reader,
onend: () => void,
onprogress?: (progress: number, total: number) => void,
options?: zip$WriteOptions): void;
close(callback: (result: any) => void): void
}
    }
