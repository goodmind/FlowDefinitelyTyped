declare module 'is-elevated' {
        declare module.exports: typeof isElevated

	declare function isElevated(): Promise<boolean>

    }
