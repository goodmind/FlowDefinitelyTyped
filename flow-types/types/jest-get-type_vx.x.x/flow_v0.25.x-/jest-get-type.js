declare module "jest-get-type" {
  declare type getType$ValueType =
    | "array"
    | "boolean"
    | "function"
    | "null"
    | "number"
    | "object"
    | "regexp"
    | "map"
    | "set"
    | "date"
    | "string"
    | "symbol"
    | "undefined";
  declare function getType(value: any): getType$getType$ValueType;

  declare module.exports: typeof getType;
}
