declare module 'jquery-slugify' {
        declare export type Options = $Shape<{
preSlug: ((source: string) => string),
postSlug: ((source: string) => string),
slugFunc: ((input: string, options: Options) => string),
separator: string,
lang: string | boolean,
symbols: boolean,
maintainCase: boolean,
titleCase: string[] | boolean,
truncate: number,
uric: boolean,
uricNoSlash: boolean,
mark: boolean,
custom: string[]
}>;
	declare module 'global' {
        declare interface JQuery {
slugify(source: string, options?: Options): JQuery
} 
	declare interface JQueryStatic {
slugify(source: string, options?: Options): string
} 
    }

    }
