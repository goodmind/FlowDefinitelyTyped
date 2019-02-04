declare module 'color-namer' {
        declare module.exports: typeof ColorNamer

	declare function ColorNamer<T: ColorNamer$ColorNamer$Palette>(
color: string,
options?: {
pick: T[]
}): ColorNamer$ColorNamer$Colors<T>

	declare function ColorNamer<T: ColorNamer$ColorNamer$Palette>(
color: string,
options?: {
omit: T[]
}): ColorNamer$ColorNamer$Colors<Diff<ColorNamer$ColorNamer$Palette, T>>

	declare type Diff<T: string, U: string> = $ElementType<($ObjMapi<{[k: T]: any}, <P>(P) => P> & $ObjMapi<{[k: U]: any}, <P>(P) => empty> & {
[x: string]: empty
}), T>;
	declare type ColorNamer$Colors<T: ColorNamer$Palette> = Record<T, ColorNamer$Color[]>;

declare type ColorNamer$Palette = "roygbiv"
| "basic"
| "html"
| "x11"
| "pantone"
| "ntc";

declare interface ColorNamer$Color {
name: string,
hex: string,
distance: number
} 
    }
