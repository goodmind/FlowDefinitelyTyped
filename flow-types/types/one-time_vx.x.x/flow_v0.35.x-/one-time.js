declare module 'one-time' {
        declare module.exports: typeof oneTime

	declare function oneTime<TFn: Function>(fn: TFn): TFn

    }
