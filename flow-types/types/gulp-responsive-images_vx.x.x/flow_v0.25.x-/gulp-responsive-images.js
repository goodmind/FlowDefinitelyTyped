declare module "gulp-responsive-images" {
  import typeof * as stream from "stream";

  import typeof * as gm from "gm";

  import type { ParsedPath, Options as RenameOptions } from "gulp-rename";

  declare module.exports: typeof GulpResponsiveImage;

  declare function GulpResponsiveImage(
    configs: GulpResponsiveImage$GulpResponsiveImage$Matchers
  ): stream.Transform;

  declare type GulpResponsiveImage$SamplingFactor = [number, number];

  declare type GulpResponsiveImage$Rename =
    | string
    | ((path: ParsedPath) => any)
    | RenameOptions;

  declare interface GulpResponsiveImage$Settings {
    crop?: boolean;
    format?: string;
    gravity?: gm.GravityDirection;
    overwrite?: boolean;
    quality?: number;
    rename?: GulpResponsiveImage$Rename;
    percentage?: number;
    sharpen?: boolean;
    upscale?: boolean;
    filter?: gm.FilterType;
    height?: number;
    width?: number;
    samplingFactor?: GulpResponsiveImage$SamplingFactor;
    suffix?: string;
  }

  declare interface GulpResponsiveImage$Matchers {
    [index: string]: $ReadOnlyArray<GulpResponsiveImage$Settings>;
  }
}
