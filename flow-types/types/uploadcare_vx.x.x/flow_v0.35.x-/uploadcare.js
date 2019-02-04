declare module 'uploadcare' {
        import type {
          ReadStream
        } from 'fs';

	declare interface Uploadcare$File {
original_file_url: string,
image_info: Uploadcare$ImageInfo,
mime_type: string,
is_ready: boolean,
url: string,
uuid: string,
original_filename: string,
datetime_uploaded: string,
size: number,
is_image: boolean,
datetime_stored: string,
datetime_removed: string | null
} 

declare interface Uploadcare$ImageInfo {
orientation: null,
sequence: boolean,
format: string,
height: number,
width: number,
geo_location: null,
datetime_original: null,
dpi: number[]
} 

declare interface Uploadcare$Instance {
file: {
upload: (
readStream: ReadStream,
options: {
store?: boolean
},
callback: (err: Error, res: {
file: string
}) => void) => void,
fromUrl: (
url: string,
options: {
store?: boolean
},
callback: (err: Error, res: Uploadcare$File) => void) => void
},
files: {
store: (uuid: string, callback: (err: Error, res: Uploadcare$File) => void) => void,
remove: (uuid: string, callback: (err: Error, res: Uploadcare$File) => void) => void
}
} 
	declare function Uploadcare(publicKey: string, privateKey: string): Uploadcare$Uploadcare$Instance

	declare module.exports: typeof Uploadcare

    }
