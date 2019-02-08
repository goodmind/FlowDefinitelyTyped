declare type Chai$UuidVersion = "v1" | "v2" | "v3" | "v4" | "v5" | "";

declare type Chai$Assertion = {
  uuid(uuid?: Chai$UuidVersion): void,
  guid(guid?: any): void
} & LanguageChains &
  NumericComparison &
  TypeComparison;

declare interface Chai$Assert {
  uuid(uuid: string, version?: Chai$UuidVersion): void;
  guid(guid: string, version?: any): void;
}
declare module "global" {
}
declare module "chai-uuid" {
  declare function chaiUuid(chai: any, utils: any): void;

  declare module.exports: typeof chaiUuid;
}
