declare module "jquery-deparam" {
  declare module.exports: typeof deparam;

  declare function deparam(params: string, coerce?: boolean): any;
}
