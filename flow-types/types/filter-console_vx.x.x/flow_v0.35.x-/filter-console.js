declare module 'filter-console' {
        declare module.exports: typeof filterConsole

	
/**
 * Filter out unwanted `console.log()` output.
 * Can be useful when you don't control the output, for example, filtering out PropType warnings from a
 * third-party React component.
 * @param excludePatterns Console output that matches any of the given patterns are filtered from being logged.
The patterns are matched against what would be logged and not the `console` method input arguments directly.
Meaning an exclude pattern of `'foo bar'` will match `console.log('foo %s', 'bar')`.
 * @returns A function, which when called, disables the filter.
 */
declare function filterConsole(
excludePatterns: Array<string | RegExp | ((output: string) => boolean)>,
options?: filterConsole$filterConsole$Options): () => void

	declare interface filterConsole$Options {

/**
 * Console methods to filter.
 * @default ['log', 'debug', 'info', 'warn', 'error']
 */
methods?: Array<"log"
| "debug"
| "info"
| "warn"
| "error">,

/**
 * Use a custom `console` object. Can be useful for testing or mocking.
 */
console?: filterConsole$Console
} 

declare type filterConsole$Console = Record<"log"
| "debug"
| "info"
| "warn"
| "error", (message?: any, ...optionalParams: any[]) => void>;
    }
