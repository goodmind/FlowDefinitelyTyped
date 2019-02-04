declare module 'rgb-hex' {
        declare module.exports: typeof rgbHex

	declare function rgbHex(rgba: string): string

	declare function rgbHex(red: number, green: number, blue: number, alpha?: string | number): string

    }
