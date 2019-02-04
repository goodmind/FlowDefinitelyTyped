declare module 'archy' {
        declare function archy(obj: archy$archy$Data, prefix?: string, opts?: archy$archy$Options): string

	declare function archy(obj: string, prefix?: string, opts?: archy$archy$Options): string

	declare interface archy$Data {
label: string,
nodes?: (archy$Data | string)[]
} 

declare interface archy$Options {
unicode?: boolean
} 
	declare module.exports: typeof archy

    }
