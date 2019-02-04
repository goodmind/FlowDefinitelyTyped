declare module 'dashify' {
        declare function dashify(input: string, options?: dashify$dashify$Options): string

	declare interface dashify$Options {
condense?: boolean
} 
	declare module.exports: typeof dashify

    }
