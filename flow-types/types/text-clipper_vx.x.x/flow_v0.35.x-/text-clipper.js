declare module 'text-clipper' {
        declare interface Options {
breakWords?: boolean,
html?: boolean,
imageWeight?: number,
indicator?: string,
maxLines?: number
} 
	declare function clip(string: string, maxLength: number, options?: Options): string

	declare module.exports: typeof clip

    }
