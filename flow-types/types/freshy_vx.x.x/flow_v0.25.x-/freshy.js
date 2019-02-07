declare module "freshy" {
  declare export function unload(module: string): boolean;

  declare export function reload(module: string): any;

  declare export function freshy(
    module: string,
    cb?: (module: any) => any
  ): any;
}
