declare module "pupa" {
  declare function pupa(
    tpl: string,
    data:
      | any[]
      | {
          [key: string]: any
        }
  ): string;

  declare module.exports: typeof pupa;
}
