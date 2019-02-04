declare module 'excel-style-dataformatter' {
        declare class DataFormatter  {
constructor(options?: DataFormatter$DataFormatter$FormatterOptions): this;

/**
 * Format a value
 * @param value
 * @param type value type
 * @param format format preset
 */
format(
value: any,
type: string,
format: string): DataFormatter$DataFormatter$FormatResult;

/**
 * Defines locales
 * @param locales
 */
defineLocales(locales: DataFormatter$DataFormatter$LocalesOptions[]): void;

/**
 * Sets locale
 * If locale doesn't exist, sets default
 * @param locale
 */
setLocale(locale: string): void;

/**
 * Sets UTC offset for dates
 * @param offset in minutes
 */
setUTCOffset(offset: number | null): void
}
	declare interface DataFormatter$LocalesOptions {
name: string,
months: string[],
monthsShort: string[],
days: string[],
daysShort: string[],
thousandSeparator: string,
decimalSeparator: string,
formats: {
[index: string]: string
}
} 

declare interface DataFormatter$FormatterOptions {
debug?: boolean,
UTCOffset?: number | null,
locale?: string,
transformCode?: (code: any) => any,
locales?: DataFormatter$LocalesOptions[]
} 

declare interface DataFormatter$FormatResult {
value: string,
align: string,
color: string,
pattern: string
} 
	declare module.exports: typeof DataFormatter

    }
