declare module 'beeper' {
        declare module.exports: typeof beeper

	declare function beeper(count?: number, cb?: () => void): void

	declare function beeper(melody: string, cb?: () => void): void

    }
