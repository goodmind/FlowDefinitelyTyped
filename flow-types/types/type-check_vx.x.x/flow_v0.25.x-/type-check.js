export interface TypeCheck$CustomType {
  [typeName: string]: {
    typeOf: string,
    validate: (x: any) => any
  };
}

export interface TypeCheck$Options {
  customTypes: TypeCheck$CustomType;
}

export interface TypeCheck$TC {
  VERSION: string;
  typeCheck: (
    typeDescription: string,
    inst: any,
    options?: TypeCheck$Options
  ) => boolean;
  parseType: (typeDescription: string) => Object;
  parsedTypeCheck: (parsedType: any, obj: any) => boolean;
}
declare var typecheck: TypeCheck$TypeCheck$TC;
declare module "type-check" {
  declare export default typeof typecheck;
}
