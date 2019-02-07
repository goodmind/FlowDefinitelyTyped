declare module "s3rver" {
  import typeof * as http from "http";

  declare class S3rver {
    constructor(options: S3rverOptions): this;
    setPort(port: number): S3rver;
    setHostname(hostname: string): S3rver;
    setDirectory(directory: string): S3rver;
    setSilent(silent: boolean): S3rver;
    setIndexDocument(indexDocument: string): S3rver;
    setErrorDocument(errorDocument: string): S3rver;
    run(
      callback: (
        error: Error,
        hostname: string,
        port: number,
        directory: string
      ) => void
    ): http.Server;
  }
  declare interface S3rverOptions {
    port?: number;
    hostname?: string;
    silent?: boolean;
    indexDocument?: string;
    errorDocument?: string;
    directory: string;
  }
  declare module.exports: typeof S3rver;
}
