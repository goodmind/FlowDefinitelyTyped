declare module 'bytes' {
        declare interface BytesOptions {
decimalPlaces?: number,
thousandsSeparator?: string,
unitSeparator?: string,
fixedDecimals?: boolean,
unit?: string
} 
	
/**
 * Convert the given value in bytes into a string.
 */
declare function bytes(value: number, options?: BytesOptions): string

	
/**
 * Parse string to an integer in bytes.
 */
declare function bytes(value: string): number

	
      declare var npm$namespace$bytes: {
        format: typeof bytes$format,
parse: typeof bytes$parse,
        
      }

/**
 * Format the given value in bytes into a string.
 * 
 * If the value is negative, it is kept as such.
 * If it is a float, it is rounded.
 */
declare function bytes$format(value: number, options?: BytesOptions): string



/**
 * Parse the string value into an integer in bytes.
 * 
 * If no unit is given, it is assumed the value is in bytes.
 */
declare function bytes$parse(value: string | number): number

	declare module.exports: typeof bytes

    }
