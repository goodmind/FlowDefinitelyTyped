declare module 'croppie' {
        declare module.exports: typeof Croppie

	declare class Croppie  {
constructor(container: HTMLElement, options?: Croppie$Croppie$CroppieOptions): this;
bind(
options: {
url: string,
points?: number[],
orientation?: number,
zoom?: number,
useCanvas?: boolean
}): Promise<void>;
result(
options: Croppie$Croppie$ResultOptions & {
type: "base64" | "canvas"
}): Promise<string>;
result(
options: Croppie$Croppie$ResultOptions & {
type: "html"
}): Promise<HTMLElement>;
result(options: Croppie$Croppie$ResultOptions & {
type: "blob"
}): Promise<Blob>;
result(
options: Croppie$Croppie$ResultOptions & {
type: "rawcanvas"
}): Promise<HTMLCanvasElement>;
result(options?: Croppie$Croppie$ResultOptions): Promise<HTMLCanvasElement>;
get(): Croppie$Croppie$CropData;
rotate(degrees: 90
| 180
| 270
| -90
| -180
| -270): void;
setZoom(zoom: number): void;
destroy(): void
}
	declare type Croppie$CropType = "square" | "circle";

declare type Croppie$Format = "jpeg" | "png" | "webp";

declare type Croppie$Type = "canvas"
| "base64"
| "html"
| "blob"
| "rawcanvas";

declare interface Croppie$ResultOptions {
type?: Croppie$Type,
size?: "viewport" | "original" | {
width: number,
height: number
},
format?: Croppie$Format,
quality?: number,
circle?: boolean
} 

declare interface Croppie$CroppieOptions {
boundary?: {
width: number,
height: number
},
customClass?: string,
enableExif?: boolean,
enableOrientation?: boolean,
enableZoom?: boolean,
enforceBoundary?: boolean,
mouseWheelZoom?: boolean,
showZoomer?: boolean,
viewport?: {
width: number,
height: number,
type?: Croppie$CropType
}
} 

declare interface Croppie$CropData {
points?: number[],
orientation?: number,
zoom?: number
} 
    }
