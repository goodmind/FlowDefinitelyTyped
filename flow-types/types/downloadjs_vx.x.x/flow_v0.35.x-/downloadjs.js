declare module 'downloadjs' {
        
	declare function download(
data: string | File | Blob,
filename?: string,
mimeType?: string): XMLHttpRequest | boolean

	declare module.exports: typeof download

    }
