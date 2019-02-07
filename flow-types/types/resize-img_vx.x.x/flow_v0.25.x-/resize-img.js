declare module "resize-img" {
  declare module.exports: typeof ResizeImg;

  declare function ResizeImg(
    input: Buffer,
    options: ResizeImg$ResizeImg$ResizeImgOptions
  ): Promise<Buffer>;

  declare interface ResizeImg$ResizeImgOptions {
    width?: number;
    height?: number;
  }
}
