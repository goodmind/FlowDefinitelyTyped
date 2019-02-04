declare module 'natsort' {
        declare function natsort(options?: natsort$natsort$Options): (a: any, b: any) => number

	declare interface natsort$Options {
desc?: boolean,
insensitive?: boolean
} 
	declare module.exports: typeof natsort

    }
