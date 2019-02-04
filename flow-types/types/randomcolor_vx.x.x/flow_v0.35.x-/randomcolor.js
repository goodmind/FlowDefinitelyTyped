declare function randomColor(options?: RandomColorOptions): string
declare interface RandomColorOptions {
hue?: number | string,
luminosity?: "bright" | "light" | "dark" | "random",
count?: number,
seed?: number | string,
format?: "hsvArray"
| "hslArray"
| "hsl"
| "hsla"
| "rgbArray"
| "rgb"
| "rgba"
| "hex",
alpha?: number
} declare module 'randomcolor' {
        declare module.exports: typeof randomColor

    }
