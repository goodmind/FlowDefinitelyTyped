declare module "json-query" {
  declare module.exports: typeof JsonQuery;

  declare function JsonQuery(
    selector:
      | JsonQuery$JsonQuery$Selector
      | JsonQuery$JsonQuery$SelectorWithQueryParams,
    options: JsonQuery$JsonQuery$Options
  ): JsonQuery$JsonQuery$Result;

  declare type JsonQuery$Selector = string;

  declare type JsonQuery$QueryParam = any;

  declare type JsonQuery$SelectorWithQueryParams =
    | [JsonQuery$Selector, JsonQuery$QueryParam]
    | [JsonQuery$Selector, JsonQuery$QueryParam]
    | [JsonQuery$Selector, JsonQuery$QueryParam]
    | [JsonQuery$Selector, JsonQuery$QueryParam, JsonQuery$QueryParam]
    | [
        JsonQuery$Selector,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam
      ]
    | [
        JsonQuery$Selector,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam
      ]
    | [
        JsonQuery$Selector,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam
      ]
    | [
        JsonQuery$Selector,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam
      ]
    | [
        JsonQuery$Selector,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam
      ]
    | [
        JsonQuery$Selector,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam
      ]
    | [
        JsonQuery$Selector,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam
      ]
    | [
        JsonQuery$Selector,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam,
        JsonQuery$QueryParam
      ];

  declare type JsonQuery$Context = any;

  declare type JsonQuery$Filter = (
    input: JsonQuery$Context,
    ...args: any[]
  ) => JsonQuery$Context;

  declare interface JsonQuery$Locals {
    [filterName: string]: JsonQuery$Filter;
  }

  declare interface JsonQuery$Options {
    data?: JsonQuery$Context;
    rootContext?: JsonQuery$Context;
    source?: JsonQuery$Context;
    context?: JsonQuery$Context;
    parent?: JsonQuery$Context;
    locals?: JsonQuery$Locals;
    globals?: boolean;
    force?: boolean;
    allowRegexp?: boolean;
  }

  declare interface JsonQuery$Result {
    value: any;
    key: string;
    references: any[];
    parents: string[];
  }
}
