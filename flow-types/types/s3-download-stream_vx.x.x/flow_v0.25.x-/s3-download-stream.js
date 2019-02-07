declare module "s3-download-stream" {
  import type { Readable } from "stream";

  import type { S3 } from "aws-sdk";

  declare interface s3Stream$S3StreamDownloaderOptions {
    client: S3;
    concurrency?: number;
    chunkSize?: string;
    params: S3.GetObjectRequest;
  }
  declare function s3Stream(
    options: s3Stream$s3Stream$S3StreamDownloaderOptions
  ): Readable;

  declare module.exports: typeof s3Stream;
}
