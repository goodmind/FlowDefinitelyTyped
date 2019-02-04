declare module 'imagemin-jpegtran' {
        import type {
          Plugin
        } from 'imagemin';

	declare function imageminJpegtran(options?: imageminJpegtran$imageminJpegtran$Options): Plugin

	declare interface imageminJpegtran$Options {
arithmetic?: boolean,
progressive?: boolean
} 
	declare module.exports: typeof imageminJpegtran

    }
