declare module "relaxed-json" {
  declare export type Reviver = (key: string, value: any) => any;
  declare export function transform(text: string): string;

  declare export function parse(text: string, reviver: Reviver): {};

  declare export function parse(
    text: string,
    opts?: {
      reviver?: Reviver,
      relaxed?: boolean,
      warnings?: boolean,
      tolerant?: boolean,
      duplicate?: boolean
    }
  ): {};

  declare export function stringify(obj: any): string;
}
