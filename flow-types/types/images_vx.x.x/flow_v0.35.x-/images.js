declare module 'images' {
        declare interface images$ImagesConfig {
[key: string]: any
} 

declare type images$SupportType = "png"
| "jpg"
| "gif"
| "bmp"
| "raw"
| "webp";

declare class images$ImagesStatic  {
fill(red: number, green: number, blue: number, alpha?: number): images$ImagesStatic;
draw(image: images$ImagesStatic, x: number, y: number): images$ImagesStatic;
loadFromBuffer(buffer: Buffer): images$ImagesStatic;
encode(type: string, config?: images$ImagesConfig): void;
save(file: string, type?: images$SupportType, config?: images$ImagesConfig): void;
save(file: string, config?: images$ImagesConfig): void;
size(): {
width: number,
height: number
};
size(width: number, height?: number): images$ImagesStatic;
resize(width: number, height?: number, filter?: string): images$ImagesStatic;
resize(width: number, height: number, filter?: string): images$ImagesStatic;
width(): number;
width(width: number): images$ImagesStatic;
height(): number;
height(height: number): images$ImagesStatic;
setLimit(width: number, height: number): void;
setGCThreshold(value: number): void;
getUsedMemory(): void;
gc(): void
}
	declare function images(file: string): images$images$ImagesStatic

	declare function images(width: number, height: number): images$images$ImagesStatic

	declare function images(buffer: Buffer, start?: number, end?: number): images$images$ImagesStatic

	declare function images(image: images$images$ImagesStatic): images$images$ImagesStatic

	declare function images(
image: images$images$ImagesStatic,
x: number,
y: number,
width: number,
height: number): images$images$ImagesStatic

	declare module.exports: typeof images

    }
