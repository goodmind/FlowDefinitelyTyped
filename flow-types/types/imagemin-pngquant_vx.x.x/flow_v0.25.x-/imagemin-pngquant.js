declare module "imagemin-pngquant" {
  import type { Plugin } from "imagemin";

  import type { Stream } from "stream";

  declare function imageminPngquant(options?: ImageminPngquant$Options): Plugin;

  declare interface ImageminPngquant$Options {
    speed?: number;
    strip?: boolean;
    quality?: [number, number];
    dithering?: number | boolean;
    posterize?: number;
    verbose?: boolean;
    input?: Buffer | Stream;
  }
  declare export default typeof imageminPngquant;
}
