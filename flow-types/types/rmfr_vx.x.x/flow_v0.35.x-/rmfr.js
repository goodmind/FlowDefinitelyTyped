declare module 'rmfr' {
        declare type rmfr$Options = rimraf.rmfr$Options & {
glob?: $ElementType<rimraf.rmfr$Options, "glob"> | true,
disableGlob?: empty
};
	declare function rmfr(path: string, options?: rmfr$rmfr$Options): Promise<void>

	declare module.exports: typeof rmfr

    }
