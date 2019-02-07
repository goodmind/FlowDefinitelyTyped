declare module "etag" {
  declare module.exports: typeof etag;

  declare function etag(
    entity: string | Buffer | etag$etag$StatsLike,
    options?: etag$etag$Options
  ): string;

  declare interface etag$Options {
    weak?: boolean;
  }

  declare interface etag$StatsLike {
    ctime: Date;
    mtime: Date;
    ino: number;
    size: number;
  }
}
