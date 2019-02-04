declare module 'hex-rgba' {
        declare module.exports: typeof hexToRgba

	declare function hexToRgba(hex: string, opacity: number): string

    }
