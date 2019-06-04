declare module "remotedev-serialize" {
  import typeof * as Immutable from "immutable";

  declare export type Options = Record<string, boolean>;
  declare export type Refs = Record<string, any>;
  declare export type DefaultReplacer = (key: string, value: any) => any;
  declare export type Replacer = (
    key: string,
    value: any,
    replacer: DefaultReplacer
  ) => any;
  declare export type DefaultReviver = (key: string, value: any) => any;
  declare export type Reviver = (
    key: string,
    value: any,
    reviver: DefaultReviver
  ) => any;
  declare export function immutable(
    immutable: typeof Immutable,
    refs?: Refs,
    customReplacer?: Replacer,
    customReviver?: Reviver
  ): {
    stringify: (input: any) => string,
    parse: (input: string) => any,
    serialize: (
      immutable: typeof Immutable,
      refs?: Refs,
      customReplacer?: Replacer,
      customReviver?: Reviver
    ) => {
      replacer: Replacer,
      reviver: Reviver,
      options: Options
    }
  };
}
