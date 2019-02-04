declare module 'hex-rgb' {
        declare module.exports: typeof hexRgb

	declare function hexRgb(hex: string): hexRgb$hexRgb$RgbaObj

	declare function hexRgb(hex: string, options: hexRgb$hexRgb$Options): hexRgb$hexRgb$RgbaArr

	declare interface hexRgb$Options {
format: "array"
} 

declare interface hexRgb$RgbaObj {
red: number,
green: number,
blue: number,
alpha: number
} 

declare type hexRgb$RgbaArr = [number, number, number, number];
    }
