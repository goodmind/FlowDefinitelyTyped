declare module "known" {
  declare module.exports: typeof known;

  declare function known<T: { [key: string]: any }>(object: T): T;
}
