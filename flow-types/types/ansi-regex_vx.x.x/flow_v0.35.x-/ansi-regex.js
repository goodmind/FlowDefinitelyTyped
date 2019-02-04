declare module 'ansi-regex' {
        declare interface ansiRegex$Options {

/**
 * Match only the first ANSI escape.
 */
onlyFirst?: boolean
} 
	declare function ansiRegex(options?: ansiRegex$ansiRegex$Options): RegExp

	declare module.exports: typeof ansiRegex

    }
