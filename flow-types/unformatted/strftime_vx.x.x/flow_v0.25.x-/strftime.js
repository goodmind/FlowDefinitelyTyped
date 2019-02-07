declare module 'strftime' {
        declare type strftimeFunction = (format: string, date?: Date) => string;
	
      declare var npm$namespace$strftime: {
        localize: typeof strftime$localize,
timezone: typeof strftime$timezone,
        
      }

/**
 * Sets locale.
 * @param {strftime$Locale} locale A locale.
 * @return {strftimeFunction} A strftime function.
 */
declare export function strftime$localize(locale: strftime$Locale): strftimeFunction



/**
 * Sets timezone.
 * @param {number | string} offset A offset.
 * @return {strftimeFunction} A strftime function.
 */
declare export function strftime$timezone(offset: number | string): strftimeFunction



/**
 * Locale formats.
 * @interface
 */
declare export interface strftime$LocaleFormats {
D?: string,
F?: string,
R?: string,
T?: string,
X?: string,
c?: string,
r?: string,
v?: string,
x?: string
} 


/**
 * Locale.
 * @interface
 */
declare export interface strftime$Locale {
days?: Array<string>,
shortDays?: Array<string>,
months?: Array<string>,
shortMonths?: Array<string>,
AM?: string,
PM?: string,
am?: string,
pm?: string,
formats: strftime$LocaleFormats
} 
	
/**
 * Format a local time/date according to locale settings
 * @param {string} format A format.
 * @return {string} Returns a string formatted.
 */
declare function strftime(format: string): string

	
/**
 * Format a local time/date according to locale settings
 * @param {string} format A format.
 * @param {Date} date A date.
 * @return {string} Returns a string formatted according format using the given date or the current local time.
 */
declare function strftime(format: string, date: Date): string

	declare module.exports: typeof strftime

    }
