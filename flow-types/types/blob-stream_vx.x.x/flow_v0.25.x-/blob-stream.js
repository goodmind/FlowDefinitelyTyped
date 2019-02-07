declare module "blob-stream" {
  declare function BlobStream(): BlobStream$BlobStream$IBlobStream;

  declare type BlobStream$IBlobStream = {
    toBlob(type?: string): Blob,
    toBlobURL(type?: string): string
  } & NodeJS.WritableStream;

  declare module.exports: typeof BlobStream;
}
