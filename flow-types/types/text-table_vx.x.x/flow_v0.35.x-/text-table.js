declare module 'text-table' {
        
/**
 * Generates borderless text table strings suitable for printing to stdout.
 */
declare function table(rows: Array<Array<{}>>, options?: table$table$Options): string

	declare interface table$Options {

/**
 * Separator to use between columns, (default: ' ').
 */
hsep?: string,

/**
 * An array of alignment types for each column, default ['l','l',...].
 */
align?: Array<"l" | "r" | "c" | ".">,

/**
 * A callback function to use when calculating the string length.
 */
stringLength(str: string): number
} 
	declare module.exports: typeof table

    }
