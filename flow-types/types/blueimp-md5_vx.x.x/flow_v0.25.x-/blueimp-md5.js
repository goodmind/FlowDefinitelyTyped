declare module "blueimp-md5" {
  declare function md5(value: string, key?: string, raw?: boolean): string;

  declare module.exports: typeof md5;
}
