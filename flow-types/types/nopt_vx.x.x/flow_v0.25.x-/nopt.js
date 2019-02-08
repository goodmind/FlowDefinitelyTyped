declare module "nopt" {
  declare interface CommandData {
    [key: string]: string;
  }
  declare interface TypeDefs {
    [key: string]: TypeInfo;
  }
  declare interface TypeInfo {
    type: Object;
    validate: (data: CommandData, k: string, val: string) => boolean;
  }

  declare var npm$namespace$nopt: {
    clean: typeof nopt$clean,
    typeDefs: typeof nopt$typeDefs
  };
  declare export function nopt$clean(
    data: CommandData,
    types: FlagTypeMap,
    typeDefs?: TypeDefs
  ): string;

  declare export var nopt$typeDefs: TypeDefs;
  declare interface FlagTypeMap {
    [k: string]: Object;
  }
  declare interface ShortFlags {
    [k: string]: string[] | string;
  }
  declare function nopt(
    types: FlagTypeMap,
    shorthands?: ShortFlags,
    args?: string[],
    slice?: number
  ): OptionsParsed;

  declare interface OptionsParsed {
    [k: string]: any;
    argv: {
      remain: string[],
      cooked: string[],
      original: string[]
    };
  }
  declare export default typeof nopt;
}
