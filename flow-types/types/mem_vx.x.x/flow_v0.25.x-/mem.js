declare module "mem" {
  declare interface Options {
    maxAge?: number;
    cacheKey?: (...args: any[]) => string;
    cache?: any;
  }
  declare var mem: {
    <F: (...args: any[]) => any>(fn: F, options?: Options): F,
    clear<F: (...args: any[]) => any>(fn: F): void
  };
  declare module.exports: typeof mem;
}
