declare module 'imagemin-gifsicle' {
        import type {
          Plugin
        } from 'imagemin';

	declare function imageminGifsicle(options?: imageminGifsicle$imageminGifsicle$Options): Plugin

	declare interface imageminGifsicle$Options {
colors?: number,
interlaced?: boolean,
optimizationLevel?: number
} 
	declare module.exports: typeof imageminGifsicle

    }
