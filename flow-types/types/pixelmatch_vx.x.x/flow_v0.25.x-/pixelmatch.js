declare module "pixelmatch" {
  declare function Pixelmatch(
    img1: Buffer | Uint8Array,
    img2: Buffer | Uint8Array,
    output: Buffer | Uint8Array | null,
    width: number,
    height: number,
    options?: Options
  ): number;

  declare interface Options {
    /**
     * Matching threshold, ranges from 0 to 1. Smaller values make the comparison more sensitive. 0.1 by default.
     */
    +threshold?: number;

    /**
     * If true, disables detecting and ignoring anti-aliased pixels. false by default.
     */
    +includeAA?: boolean;
  }
  declare module.exports: typeof Pixelmatch;
}
