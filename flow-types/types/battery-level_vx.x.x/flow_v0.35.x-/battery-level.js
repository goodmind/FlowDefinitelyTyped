declare module 'battery-level' {
        declare module.exports: typeof batteryLevel

	declare function batteryLevel(): Promise<number>

    }
