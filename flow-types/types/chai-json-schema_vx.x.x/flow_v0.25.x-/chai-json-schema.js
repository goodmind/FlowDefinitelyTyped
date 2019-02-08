declare interface Chai$Assert {
  jsonSchema(value: any, schema: any, msg?: string): void;
  notJsonSchema(value: any, schema: any, msg?: string): void;
}

declare interface Chai$LanguageChains {
  jsonSchema(schema: any, msg?: string): void;
}

declare interface Chai$ChaiStatic {
  tv4: tv4.TV4;
}
declare module "global" {
}
declare module "chai-json-schema" {
  declare function chaiJsonSchema(chai: any, utils: any): void;

  declare module.exports: typeof chaiJsonSchema;
}
