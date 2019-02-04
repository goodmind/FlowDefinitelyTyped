declare module 'imagemin-optipng' {
        import type {
          Plugin
        } from 'imagemin';

	declare function imageminOptipng(options?: imageminOptipng$imageminOptipng$Options): Plugin

	declare interface imageminOptipng$Options {
bitDepthReduction?: boolean,
colorTypeReduction?: boolean,
optimizationLevel?: number,
paletteReduction?: boolean
} 
	declare module.exports: typeof imageminOptipng

    }
