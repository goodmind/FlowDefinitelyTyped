declare module "download" {
  import type { DecompressOptions } from "decompress";

  import type { GotBodyOptions, TimeoutOptions } from "got";

  declare type download$RetryFunction = (retry: number, error: any) => number;

  declare type download$DownloadOptions = {
    /**
     * If set to true, try extracting the file using decompress.
     */
    extract?: boolean,

    /**
     * Name of the saved file.
     */
    filename?: string,

    /**
     * Proxy endpoint
     */
    proxy?: string,

    /**
     * Request Headers
     */
    headers?: {
      [name: string]: string
    }
  } & DecompressOptions &
    GotBodyOptions<string>;

  declare function download(
    url: string,
    destination?: string,
    options?: download$download$DownloadOptions
  ): Promise<Buffer> & NodeJS.WritableStream & NodeJS.ReadableStream;

  declare module.exports: typeof download;
}
