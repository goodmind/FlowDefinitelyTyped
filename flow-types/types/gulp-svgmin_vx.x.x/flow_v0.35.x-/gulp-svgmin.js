declare module 'gulp-svgmin' {
        import type {
          Transform
        } from 'stream';

	import typeof * as File from 'vinyl';

	declare module.exports: typeof GulpSvgmin

	declare function GulpSvgmin(cb: (file: File) => SVGO.Options): Transform

	declare function GulpSvgmin(options?: SVGO.Options): Transform

    }
