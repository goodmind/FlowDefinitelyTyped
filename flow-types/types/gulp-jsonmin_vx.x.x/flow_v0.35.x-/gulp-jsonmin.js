declare module 'gulp-jsonmin' {
        import type {
          Transform
        } from 'stream';

	declare function gulpJsonmin(options?: gulpJsonmin$gulpJsonmin$Options): Transform

	declare interface gulpJsonmin$Options {
verbose?: boolean
} 
	declare module.exports: typeof gulpJsonmin

    }
