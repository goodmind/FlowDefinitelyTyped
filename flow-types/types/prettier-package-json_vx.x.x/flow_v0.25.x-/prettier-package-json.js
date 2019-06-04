declare module "prettier-package-json" {
  declare export type CompareFn = (a: string, b: string) => number;
  declare export interface Options {
    tabWidth?: number;
    useTabs?: boolean;
    expandUsers?: boolean;
    keyOrder?: $ReadOnlyArray<string> | CompareFn;
  }
  declare export function format(
    json: { [key: string]: any },
    options?: Options
  ): string;

  declare export function check(
    json: string | { [key: string]: any },
    options?: Options
  ): boolean;
}
