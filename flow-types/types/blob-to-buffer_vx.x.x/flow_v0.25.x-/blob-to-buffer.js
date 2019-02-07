declare module "blob-to-buffer" {
  declare function blobToBuffer(
    blob: Blob,
    callback: (error: any, buffer: Buffer) => void
  ): void;

  declare module.exports: typeof blobToBuffer;
}
