declare module 'getopts' {
        declare interface ParsedOptions {
_: string[],
[key: string]: any
} 
	declare interface Options {
alias?: {
[key: string]: string | string[]
},
boolean?: string[],
default?: {
[key: string]: any
},
unknown?: (optionName: string) => boolean
} 
	declare function getopts(argv: string[], options?: Options): ParsedOptions

	declare module.exports: typeof getopts

    }
