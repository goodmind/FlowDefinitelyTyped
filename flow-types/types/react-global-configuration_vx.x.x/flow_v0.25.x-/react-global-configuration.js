declare module "react-global-configuration" {
  declare export interface Options {
    freeze: boolean;
    assign: boolean;
  }
  declare export function set(
    newConfiguration: any,
    newOptions?: prompts$Options
  ): void;

  declare export function get(key?: string): any;

  declare export function get<Value>(
    key: string,
    fallbackValue: __esri$Value
  ): __esri$Value;

  declare export function serialize(): string;
}
