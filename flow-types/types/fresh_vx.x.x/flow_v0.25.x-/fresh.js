declare module "fresh" {
  declare module.exports: typeof fresh;

  declare function fresh(
    reqHeaders: fresh$fresh$Headers,
    resHeaders: fresh$fresh$Headers
  ): boolean;

  declare interface fresh$Headers {
    [header: string]: string | string[] | number | void;
  }
}
