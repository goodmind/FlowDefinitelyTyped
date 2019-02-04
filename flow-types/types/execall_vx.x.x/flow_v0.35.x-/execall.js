declare module 'execall' {
        declare module.exports: typeof execall

	
/**
 * Find multiple RegExp matches in a string. Instead of having to iterate over
 * `RegExp#exec`, immutable, and with a nicer result format.
 * @param re Regular expression to match against the `input`.
 * @returns An array of matches.
 */
declare function execall(re: RegExp, input: string): execall$execall$Match[]

	declare interface execall$Match {
match: string,
sub: string[],
index: number
} 
    }
