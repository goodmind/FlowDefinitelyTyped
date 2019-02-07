declare module "random-string" {
  declare function randomString(opts?: Object): string;

  declare module.exports: typeof randomString;
}
