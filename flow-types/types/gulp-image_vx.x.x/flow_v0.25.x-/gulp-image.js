declare module "gulp-image" {
  declare module.exports: typeof GulpImage;

  declare function GulpImage(
    options?: GulpImage$GulpImage$Options
  ): stream.Transform;

  declare type GulpImage$OptimizerSetting = boolean | any[];

  declare interface GulpImage$Options {
    pngquant?: GulpImage$OptimizerSetting;
    optipng?: GulpImage$OptimizerSetting;
    zopflipng?: GulpImage$OptimizerSetting;
    jpegRecompress?: GulpImage$OptimizerSetting;
    mozjpeg?: GulpImage$OptimizerSetting;
    guetzli?: GulpImage$OptimizerSetting;
    gifsicle?: GulpImage$OptimizerSetting;
    svgo?: GulpImage$OptimizerSetting;
    concurrent?: number;
    quiet?: boolean;
  }
}
