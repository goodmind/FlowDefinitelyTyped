declare module "guid" {
  declare export default typeof guid;

  declare function guid(guid: { [key: string]: any }): { [key: string]: any };

  declare var npm$namespace$guid: {
    create: typeof guid$create,
    isGuid: typeof guid$isGuid,
    raw: typeof guid$raw,
    EMPTY: typeof guid$EMPTY,
    prototype: typeof guid$prototype
  };
  declare var guid$EMPTY: string;

  declare var guid$prototype: {};

  declare function guid$create(): { [key: string]: any };

  declare function guid$isGuid(value: string): boolean;

  declare function guid$raw(): string;
}
