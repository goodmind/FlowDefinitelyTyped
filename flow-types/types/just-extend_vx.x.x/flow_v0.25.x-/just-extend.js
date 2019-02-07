declare module "just-extend" {
  declare function extend(
    obj1: { [key: string]: any },
    ...objn: any[]
  ): { [key: string]: any };

  declare function extend(
    deep: boolean,
    obj1: { [key: string]: any },
    ...objn: any[]
  ): { [key: string]: any };

  declare module.exports: typeof extend;
}
