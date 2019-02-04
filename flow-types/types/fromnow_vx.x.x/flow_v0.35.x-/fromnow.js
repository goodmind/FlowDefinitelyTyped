declare module 'fromnow' {
        declare var FromNow: FromNow$FromNow$FromNowStatic;
	declare module.exports: typeof FromNow

	declare interface FromNow$FromNowOpts {
max?: number,
suffix?: boolean,
zero?: boolean,
and?: boolean
} 

declare export interface FromNow$FromNowStatic {

/**
 * Get readable time differences from now vs past or future dates.
 * @param {string | Date} date
 * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} opts
 */
(date: string | Date, opts?: FromNow$FromNowOpts): string
} 
    }
