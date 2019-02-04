declare module 'imagemin-svgo' {
        import type {
          Plugin
        } from 'imagemin';

	import type {
          SvgoOptions
        } from 'svgo';

	declare function imageminSvgo(options?: imageminSvgo$imageminSvgo$Options): Plugin

	declare type imageminSvgo$Options = SvgoOptions;
	declare module.exports: typeof imageminSvgo

    }
