declare module "gulp-imagemin" {
  import type { Plugin } from "imagemin";

  import type { Options as GifsicleOptions } from "imagemin-gifsicle";

  import type { Options as JpegtranOptions } from "imagemin-jpegtran";

  import type { Options as OptipngOptions } from "imagemin-optipng";

  import type { Options as SvgoOptions } from "imagemin-svgo";

  import type { Transform } from "stream";

  declare function imagemin(
    pluginsOrOptions?: $ReadOnlyArray<Plugin> | imagemin$Options
  ): Transform;

  declare function imagemin(
    plugins?: $ReadOnlyArray<Plugin>,
    options?: imagemin$Options
  ): Transform;

  declare var npm$namespace$imagemin: {
    gifsicle: typeof imagemin$gifsicle,
    jpegtran: typeof imagemin$jpegtran,
    optipng: typeof imagemin$optipng,
    svgo: typeof imagemin$svgo
  };
  declare interface imagemin$Options {
    verbose?: boolean;
  }

  declare type imagemin$PluginFactory<T> = (options?: T) => Plugin;

  declare var imagemin$gifsicle: imagemin$PluginFactory<GifsicleOptions>;

  declare var imagemin$jpegtran: imagemin$PluginFactory<JpegtranOptions>;

  declare var imagemin$optipng: imagemin$PluginFactory<OptipngOptions>;

  declare var imagemin$svgo: imagemin$PluginFactory<SvgoOptions>;
  declare export default typeof imagemin;
}
