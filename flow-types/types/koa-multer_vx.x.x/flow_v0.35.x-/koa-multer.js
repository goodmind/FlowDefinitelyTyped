declare module 'koa-multer' {
        import typeof * as Koa from 'koa';

	import type {
          IncomingMessage
        } from 'http';

	
      declare var npm$namespace$multer: {
        diskStorage: typeof multer$diskStorage,
memoryStorage: typeof multer$memoryStorage,
        
      }
declare interface multer$File {

/**
 * Field name specified in the form
 */
fieldname: string,

/**
 * Name of the file on the user's computer
 */
originalname: string,

/**
 * Encoding type of the file
 */
encoding: string,

/**
 * Mime type of the file
 */
mimetype: string,

/**
 * Size of the file in bytes
 */
size: number,

/**
 * The folder to which the file has been saved (DiskStorage)
 */
destination: string,

/**
 * The name of the file within the destination (DiskStorage)
 */
filename: string,

/**
 * Location of the uploaded file (DiskStorage)
 */
path: string,

/**
 * A Buffer of the entire file (MemoryStorage)
 */
buffer: Buffer
} 

declare type multer$MulterIncomingMessage = {
body: any,
file: multer$File,
files: {
[fieldname: string]: multer$File[]
} | multer$File[]
} & IncomingMessage


declare interface multer$Field {

/**
 * The field name.
 */
name: string,

/**
 * Optional maximum number of files per field to accept.
 */
maxCount?: number
} 

declare interface multer$Options {

/**
 * The destination directory for the uploaded files.
 */
dest?: string,

/**
 * The storage engine to use for uploaded files.
 */
storage?: multer$StorageEngine,

/**
 * An object specifying the size limits of the following optional properties. This object is passed to busboy
 * directly, and the details of properties can be found on https://github.com/mscdex/busboy#busboy-methods
 */
limits?: {

/**
 * Max field name size (Default: 100 bytes)
 */
fieldNameSize?: number,

/**
 * Max field value size (Default: 1MB)
 */
fieldSize?: number,

/**
 * Max number of non- file fields (Default: Infinity)
 */
fields?: number,

/**
 * For multipart forms, the max file size (in bytes)(Default: Infinity)
 */
fileSize?: number,

/**
 * For multipart forms, the max number of file fields (Default: Infinity)
 */
files?: number,

/**
 * For multipart forms, the max number of parts (fields + files)(Default: Infinity)
 */
parts?: number,

/**
 * For multipart forms, the max number of header key=> value pairs to parse Default: 2000(same as node's http).
 */
headerPairs?: number,

/**
 * Keep the full path of files instead of just the base name (Default: false)
 */
preservePath?: boolean
},

/**
 * A function to control which files to upload and which to skip.
 */
fileFilter(
req: IncomingMessage,
file: multer$File,
callback: (error: Error | null, acceptFile: boolean) => void): void
} 

declare interface multer$StorageEngine {
_handleFile(
req: IncomingMessage,
file: multer$File,
callback: (error?: any, info?: multer$File) => void): void,
_removeFile(
req: IncomingMessage,
file: multer$File,
callback: (error: Error) => void): void
} 

declare interface multer$DiskStorageOptions {

/**
 * A function used to determine within which folder the uploaded files should be stored. Defaults to the system's default temporary directory.
 */
destination?: string | ((
req: IncomingMessage,
file: multer$File,
callback: (error: Error | null, destination: string) => void) => void),

/**
 * A function used to determine what the file should be named inside the folder. Defaults to a random name with no file extension.
 */
filename(
req: IncomingMessage,
file: multer$File,
callback: (error: Error | null, filename: string) => void): void
} 

declare interface multer$Instance {

/**
 * In case you need to handle a text-only multipart form, you can use any of the multer methods (.single(), .array(), fields()), req.body contains the text fields
 * Accept a single file with the name fieldName. The single file will be stored in req.file.
 */
single(fieldName?: string): Koa.Middleware,

/**
 * Accept an array of files, all with the name fieldName. Optionally error out if more than maxCount files are uploaded. The array of files will be stored in req.files.
 */
array(fieldName: string, maxCount?: number): Koa.Middleware,

/**
 * Accept a mix of files, specified by fields. An object with arrays of files will be stored in req.files.
 */
fields(fields: multer$Field[]): Koa.Middleware,

/**
 * Accepts all files that comes over the wire. An array of files will be stored in req.files.
 */
any(): Koa.Middleware
} 

declare function multer$diskStorage(options: multer$DiskStorageOptions): multer$StorageEngine


declare function multer$memoryStorage(): multer$StorageEngine

	declare function multer(options?: multer$multer$Options): multer$multer$Instance

	declare module.exports: typeof multer

    }
