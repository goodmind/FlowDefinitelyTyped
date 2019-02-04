declare module 'path-key' {
        declare module.exports: typeof pathKey

	declare function pathKey(options?: pathKey$pathKey$Options): string

	declare interface pathKey$Options {
env?: {
[key: string]: any
},
platform?: NodeJS.Platform
} 
    }
