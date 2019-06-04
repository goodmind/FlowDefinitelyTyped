declare module "dynamodb" {
  import type { AnySchema } from "joi";

  import typeof * as bunyan from "bunyan";

  import type { callbackify } from "util";

  import type { Readable } from "stream";

  import type { Callback } from "./Callback";

  import type { Model } from "./Model";

  import type {
    DynamoDB,
    Projection,
    DocumentClient,
    DynamoDbSet
  } from "./DynamoDB";

  declare interface CreateTablesOptions {
    [key: string]: {
      readCapacity: number,
      writeCapacity: number
    };
  }
  declare interface CreateTables {
    (options?: CreateTablesOptions): Promise<any>;
    (options: CreateTablesOptions, callback: Callback): void;
    (callback: Callback): void;
  }
  declare interface IndexDefinition {
    hashKey: string;
    rangeKey?: string;
    name: string;
    type: "local" | "global";
    projection?: Projection;
  }
  declare export interface DefineConfig {
    hashKey: string;
    rangeKey?: string;
    timestamps?: boolean;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
    tableName?: string | (() => string);
    indexes?: $ReadOnlyArray<IndexDefinition>;
    schema?: {
      [key: string]:
        | AnySchema
        | {
            [key: string]: AnySchema
          }
    };
  }
  declare export var log: bunyan;
  declare export function dynamoDriver(driver?: DynamoDB): DynamoDB;

  declare export function documentClient(
    docClient?: DocumentClient
  ): DocumentClient;

  declare export function reset(): void;

  declare export function Set(
    data: $ReadOnlyArray<any>,
    type: string
  ): DynamoDbSet;

  declare export function define(
    name: string,
    config: DefineConfig
  ): typeof Model;

  declare export function model(name: string, model?: Model): typeof Model;

  declare export var createTables: CreateTables;
  declare export var types: {
    stringSet: () => AnySchema,
    numberSet: () => AnySchema,
    binarySet: () => AnySchema,
    uuid: () => AnySchema,
    timeUUID: () => AnySchema
  };
  declare export var models: {
    [key: string]: typeof Model
  };
  declare export var AWS: any;
  declare export { Model };
}
