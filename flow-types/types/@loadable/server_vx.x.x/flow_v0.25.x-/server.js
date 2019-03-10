declare module "@loadable/server" {
  import type { ComponentType, ReactElement, Component } from "react";

  declare export type ChunkExtractorOptions = {
    /**
     * Webpack entrypoints to load (default to `["main"]`)
     */
    entrypoints?: string | string[],

    /**
     * Optional output path (only for `requireEntrypoint`)
     */
    outputPath?: string
  } & (
    | {
        /**
         * Stats file path generated using `@loadable/webpack-plugin`
         */
        statsFile: string
      }
    | {
        /**
         * Stats generated using `@loadable/webpack-plugin`.
         */
        stats: { [key: string]: any }
      }
  );

  /**
   * Used to collect chunks server-side and get them as script tags or script elements
   */
  declare export class ChunkExtractor {
    constructor(options: ChunkExtractorOptions): this;

    /**
     * Wrap your application in a `ChunkExtractorManager`
     */
    collectChunks(element: React$Node): React$Node;

    /**
     * Require the entrypoint of your application as a commonjs module.
     */
    requireEntrypoint(
      name?: string
    ): {
      default: ComponentType
    };

    /**
     * Get scripts as a string of `<script>` tags
     */
    getScriptTags(): string;

    /**
     * Get scripts as an array of React `<script>` elements.
     */
    getScriptElements(): Array<ReactElement<{}>>;

    /**
     * Get "prefetch" and "preload" links as a string of `<link>` tags
     */
    getLinkTags(): string;

    /**
     * Get "prefetch" and "preload" links as an array of React `<link>` elements
     */
    getLinkElements(): Array<ReactElement<{}>>;

    /**
     * Get style links as a string of `<link>` tags
     */
    getStyleTags(): string;

    /**
     * Get style links as an array of React `<link>` elements
     */
    getStyleElements(): Array<ReactElement<{}>>;
  }
  declare export interface ChunkExtractorManagerProps {
    extractor: ChunkExtractor;
  }
  declare export class ChunkExtractorManager
    mixins Component<ChunkExtractorManagerProps> {}
}
