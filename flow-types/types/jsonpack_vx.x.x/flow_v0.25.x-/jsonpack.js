declare module "jsonpack" {
  declare export interface PackOptions {
    verbose?: boolean;
  }
  declare export type PackDebugOptions = {
    debug?: boolean
  } & PackOptions;

  declare export interface DebugObject {
    dictionary: {
      strings: string[],
      integers: number[],
      floats: number[]
    };
    ast: Array<{
      type: string,
      index: number
    }>;
    packed: string;
  }
  declare export function pack(
    json: string | { [key: string]: any },
    options?: PackOptions
  ): string;

  declare export function pack(
    json: string | { [key: string]: any },
    options?: PackDebugOptions
  ): DebugObject;

  declare export function unpack<T>(packed: string, options?: PackOptions): T;
}
