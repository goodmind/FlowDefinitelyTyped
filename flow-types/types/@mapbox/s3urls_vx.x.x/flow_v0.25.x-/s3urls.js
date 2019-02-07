declare module "@mapbox/s3urls" {
  declare function fromUrl(
    url: string
  ): {
    Bucket: string | void,
    Key: string | void
  };

  declare function toUrl(
    bucket: string,
    key: string
  ): {
    s3: string,
    "bucket-in-path": string,
    "bucket-in-host": string
  };

  declare function convert(
    url: string,
    to: "s3" | "bucket-in-path" | "bucket-in-host"
  ): string;

  declare function signed(
    url: string,
    expires: number,
    cb: (err: Error | void, url: string) => void
  ): void;

  declare function valid(url: string): boolean;
}
