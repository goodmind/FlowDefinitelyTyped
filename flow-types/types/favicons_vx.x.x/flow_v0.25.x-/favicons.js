declare module "favicons" {
  import type { Duplex } from "stream";

  declare var npm$namespace$favicons: {
    stream: typeof favicons$stream,
    config: typeof favicons$config
  };
  declare interface favicons$Configuration {
    /**
     * Path for overriding default icons path @default "/"
     */
    path: string;

    /**
     * Your application's name @default null
     */
    appName: string | null;

    /**
     * Your application's description @default null
     */
    appDescription: string | null;

    /**
     * Your (or your developer's) name @default null
     */
    developerName: string | null;

    /**
     * Your (or your developer's) URL @default null
     */
    developerURL: string | null;

    /**
     * Primary text direction for name, short_name, and description @default "auto"
     */
    dir: string;

    /**
     * Primary language for name and short_name @default "en-US
     */
    lang: string;

    /**
     * Background colour for flattened icons @default "#fff"
     */
    background: string;

    /**
     * Theme color user for example in Android's task switcher @default "#fff"
     */
    theme_color: string;

    /**
     * Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser" @default "standalone"
     */
    display: "fullscreen" | "standalone" | "minimal-ui" | "browser";

    /**
     * Default orientation: "any", "natural", "portrait" or "landscape" @default "any"
     */
    orientation: "any" | "natural" | "portrait" | "landscape";

    /**
     * Start URL when launching the application from a device @default "/?homescreen=1"
     */
    start_url: string;

    /**
     * Your application's version string @default "1.0"
     */
    version: string;

    /**
     * Print logs to console? @default false
     */
    logging: boolean;

    /**
     * Platform Options:
     * - offset - offset in percentage
     * - background:
     *    * false - use default
     *    * true - force use default, e.g. set background for Android icons
     *    * color - set background for the specified icons
     */
    icons: $Shape<{
      android:
        | boolean
        | {
            offset: string,
            background: string
          },
      appleIcon:
        | boolean
        | {
            offset: string,
            background: string
          },
      appleStartup:
        | boolean
        | {
            offset: string,
            background: string
          },
      coast:
        | boolean
        | {
            offset: string,
            background: string
          },
      favicons: boolean,
      firefox:
        | boolean
        | {
            offset: string,
            background: string
          },
      windows:
        | boolean
        | {
            background: string
          },
      yandex:
        | boolean
        | {
            background: string
          }
    }>;
  }

  declare interface favicons$FavIconResponse {
    images: Array<{
      name: string,
      contents: Buffer
    }>;
    files: Array<{
      name: string,
      contents: Buffer
    }>;
    html: string[];
  }

  declare type favicons$Callback = (
    error: Error | null,
    response: favicons$FavIconResponse
  ) => void;

  /**
   * You can programmatically access Favicons configuration (icon filenames, HTML, manifest files, etc) with this export
   */
  declare var favicons$config: favicons$Configuration;

  declare function favicons$stream(
    configuration?: favicons$Configuration
  ): Duplex;

  /**
   * Generate favicons
   * @param source Source image(s)
   * @param configuration
   * @param callback
   */
  declare function favicons(
    source: string | Buffer | string[],
    configuration?: $Shape<favicons$favicons$Configuration>
  ): Promise<favicons$favicons$FavIconResponse>;

  declare function favicons(
    source: string | Buffer | string[],
    callback?: favicons$favicons$Callback
  ): void;

  declare function favicons(
    source: string | Buffer | string[],
    configuration?: $Shape<favicons$favicons$Configuration>,
    callback?: favicons$favicons$Callback
  ): void;

  declare module.exports: typeof favicons;
}
