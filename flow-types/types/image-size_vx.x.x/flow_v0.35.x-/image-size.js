declare module 'image-size' {
        declare interface ImageInfo {
width: number,
height: number,
type: string,
orientation?: number
} 
	declare function sizeOf(pathOrBuffer: string | Buffer): ImageInfo

	declare function sizeOf(path: string, callback: (err: Error, dimensions: ImageInfo) => void): void

	
	declare module.exports: typeof sizeOf

    }
