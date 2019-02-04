declare module 'parse-numeric-range' {
        
/**
 * Parses expressions like `1-10,20-30`. Returns an energetic (as opposed to lazy) array.
 * @param expression a numeric range expression
 */
declare export function parse(expression: string): number[]

    }
