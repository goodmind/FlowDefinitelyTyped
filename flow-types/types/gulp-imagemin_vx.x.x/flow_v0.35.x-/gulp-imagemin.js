declare module 'gulp-imagemin' {
        import type {
          Plugin
        } from 'imagemin';

	import type {
          GifsicleOptions
        } from 'imagemin-gifsicle';

	import type {
          JpegtranOptions
        } from 'imagemin-jpegtran';

	import type {
          OptipngOptions
        } from 'imagemin-optipng';

	import type {
          SvgoOptions
        } from 'imagemin-svgo';

	import type {
          Transform
        } from 'stream';

	declare function imagemin(
pluginsOrOptions?: $ReadOnlyArray<Plugin> | imagemin$imagemin$Options): Transform

	declare function imagemin(
plugins?: $ReadOnlyArray<Plugin>,
options?: imagemin$imagemin$Options): Transform

	
      declare var npm$namespace$imagemin: {
        
        gifsicle: typeof imagemin$gifsicle,
jpegtran: typeof imagemin$jpegtran,
optipng: typeof imagemin$optipng,
svgo: typeof imagemin$svgo,
      }
declare interface imagemin$Options {
verbose?: boolean
} 

declare type imagemin$PluginFactory<T> = (options?: T) => Plugin;

declare var imagemin$gifsicle: imagemin$PluginFactory<GifsicleOptions>;

declare var imagemin$jpegtran: imagemin$PluginFactory<JpegtranOptions>;

declare var imagemin$optipng: imagemin$PluginFactory<OptipngOptions>;

declare var imagemin$svgo: imagemin$PluginFactory<SvgoOptions>;
	declare module.exports: typeof imagemin

    }
