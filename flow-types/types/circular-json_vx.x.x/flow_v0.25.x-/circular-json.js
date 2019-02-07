declare module "circular-json" {
  declare export function parse(
    text: string,
    reviver?: (key: any, value: any) => any
  ): any;

  declare export function stringify(
    value: any,
    replacer?:
      | ((key: string, value: any) => any)
      | Array<number | string>
      | null,
    space?: any,
    placeholder?: boolean
  ): string;
}
