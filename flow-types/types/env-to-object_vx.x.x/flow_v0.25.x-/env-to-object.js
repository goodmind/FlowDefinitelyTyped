declare module "env-to-object" {
  declare interface env$Mappings {
    [enviromentVariableName: string]: env$Mapping;
  }

  declare type env$Mapping =
    | env$IntegerMapping
    | env$BooleanMapping
    | env$GenericMapping;

  declare interface env$GenericMapping {
    keypath: string;
    type?: string;
    [opt: string]: any;
  }

  declare type env$IntegerMapping = {
    type: "integer",
    radix: number
  } & env$GenericMapping;

  declare interface env$BooleanMapping {
    type: "boolean";
    strict: boolean;
  }

  declare interface env$Parsers {
    [parserName: string]: (str: string, opts: any) => any;
  }

  declare interface env$Options {
    parsers: env$Parsers;
  }
  declare function env(map: env$env$Mappings, options?: env$env$Options): any;

  declare module.exports: typeof env;
}
