declare module "dynogels" {
  import typeof * as joi from "joi";

  declare export var log: Log;
  declare export var models: {
    [key: string]: Model
  };
  declare export var types: {
    stringSet(): joi.AnySchema,
    numberSet(): joi.AnySchema,
    binarySet(): joi.AnySchema,
    uuid(): joi.AnySchema,
    timeUUID(): joi.AnySchema
  };
  declare export interface Log {
    info(...args: any[]): void;
    warn(...args: any[]): void;
  }
  declare export function dynamoDriver(dynamoDB: AWS.DynamoDB): AWS.DynamoDB;

  declare export function reset(): void;

  declare export function define(
    modelName: string,
    config: ModelConfiguration
  ): Model;

  declare export function createTables(callback: (err: string) => void): void;

  declare export function createTables(
    options:
      | {
          [key: string]: CreateTablesOptions
        }
      | DynogelsGlobalOptions,
    callback: (err: string) => void
  ): void;

  declare export function Set(...args: any[]): any;

  declare export interface DynogelsGlobalOptions {
    $dynogels: {
      pollingInterval: number
    };
  }
  declare export interface CreateTablesOptions {
    readCapacity?: number;
    writeCapacity?: number;
    streamSpecification?: {
      streamEnabled: boolean,
      streamViewType: string
    };
  }
  declare export type LifeCycleAction = "create" | "update" | "destroy";
  declare export interface Model {
    new(attrs: {
      [key: string]: any
    }): Item;
    get(
      hashKey: any,
      rangeKey: any,
      options: GetItemOptions,
      callback: DynogelsItemCallback
    ): void;
    get(
      haskKey: any,
      options: GetItemOptions,
      callback: DynogelsItemCallback
    ): void;
    get(hashKey: any, callback: DynogelsItemCallback): void;
    get(hashKey: any, rangeKey: any, callback: DynogelsItemCallback): void;
    create(
      item: any,
      options: CreateItemOptions,
      callback: DynogelsItemCallback
    ): void;
    create(item: any, callback: DynogelsItemCallback): void;
    update(
      item: any,
      options: UpdateItemOptions,
      callback: DynogelsItemCallback
    ): void;
    update(item: any, callback: DynogelsItemCallback): void;
    destroy(
      hashKey: any,
      rangeKey: any,
      options: DestroyItemOptions,
      callback: DynogelsItemCallback
    ): void;
    destroy(
      haskKey: any,
      options: DestroyItemOptions,
      callback: DynogelsItemCallback
    ): void;
    destroy(hashKey: any, callback: DynogelsItemCallback): void;
    destroy(hashKey: any, rangeKey: any, callback: DynogelsItemCallback): void;
    destroy(
      item: any,
      options: DestroyItemOptions,
      callback: DynogelsItemCallback
    ): void;
    destroy(item: any, callback: DynogelsItemCallback): void;
    query(hashKey: any): Query;
    scan(): Scan;
    parallelScan(totalSegments: number): Scan;
    getItems(
      items:
        | string[]
        | Array<{
            [key: string]: string
          }>,
      callback: (err: Error, items: any[]) => void
    ): void;
    getItems(
      items:
        | string[]
        | Array<{
            [key: string]: string
          }>,
      options: GetItemOptions,
      callback: (err: Error, items: any[]) => void
    ): void;
    batchGetItems(
      items:
        | string[]
        | Array<{
            [key: string]: string
          }>,
      callback: (err: Error, items: any[]) => void
    ): void;
    batchGetItems(
      items:
        | string[]
        | Array<{
            [key: string]: string
          }>,
      options: GetItemOptions,
      callback: (err: Error, items: any[]) => void
    ): void;
    createTable(
      options: CreateTablesOptions,
      callback: (err: Error, data: AWS.DynamoDB.CreateTableOutput) => void
    ): void;
    createTable(
      callback: (err: Error, data: AWS.DynamoDB.CreateTableOutput) => void
    ): void;
    updateTable(
      throughput: Throughput,
      callback: (err: Error, data: AWS.DynamoDB.UpdateTableOutput) => void
    ): void;
    updateTable(
      callback: (err: Error, data: AWS.DynamoDB.UpdateTableOutput) => void
    ): void;
    describeTable(
      callback: (err: Error, data: AWS.DynamoDB.DescribeTableOutput) => void
    ): void;
    deleteTable(callback: (err: Error) => void): void;
    tableName(): string;
    after(action: LifeCycleAction, listner: (item: Item) => void): void;
    before(
      action: LifeCycleAction,
      listner: (data: any, next: (err: Error | null, data: any) => void) => void
    ): void;
    config(
      config: ModelConfig
    ): {
      name: string
    };
  }
  declare export type DynogelsItemCallback = (err: Error, data: Item) => void;
  declare export interface Throughput {
    readCapacity: number;
    writeCapacity: number;
  }
  declare export interface CreateItemOptions {
    expected?: {
      [key: string]: any
    };
    overwrite?: boolean;
    Expected?: AWS.DynamoDB.ExpectedAttributeMap;
    ReturnValues?: AWS.DynamoDB.ReturnValue;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity;
    ReturnItemCollectionMetrics?: AWS.DynamoDB.ReturnItemCollectionMetrics;
    ConditionalOperator?: AWS.DynamoDB.ConditionalOperator;
    ConditionExpression?: AWS.DynamoDB.ConditionExpression;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap;
    ExpressionAttributeValues?: {
      [key: string]: any
    };
  }
  declare export interface UpdateItemOptions {
    expected?: {
      [key: string]: any
    };
    AttributeUpdates?: AWS.DynamoDB.AttributeUpdates;
    Expected?: AWS.DynamoDB.ExpectedAttributeMap;
    ConditionalOperator?: AWS.DynamoDB.ConditionalOperator;
    ReturnValues?: AWS.DynamoDB.ReturnValue;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity;
    ReturnItemCollectionMetrics?: AWS.DynamoDB.ReturnItemCollectionMetrics;
    UpdateExpression?: AWS.DynamoDB.UpdateExpression;
    ConditionExpression?: AWS.DynamoDB.ConditionExpression;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap;
    ExpressionAttributeValues?: {
      [key: string]: any
    };
  }
  declare export interface DestroyItemOptions {
    Expected?: AWS.DynamoDB.ExpectedAttributeMap;
    ConditionalOperator?: AWS.DynamoDB.ConditionalOperator;
    ReturnValues?: AWS.DynamoDB.ReturnValue;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity;
    ReturnItemCollectionMetrics?: AWS.DynamoDB.ReturnItemCollectionMetrics;
    ConditionExpression?: AWS.DynamoDB.ConditionExpression;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap;
    ExpressionAttributeValues?: {
      [key: string]: any
    };
  }
  declare export interface GetItemOptions {
    AttributesToGet?: AWS.DynamoDB.AttributeNameList;
    ConsistentRead?: AWS.DynamoDB.ConsistentRead;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity;
    ProjectionExpression?: AWS.DynamoDB.ProjectionExpression;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap;
  }
  declare export interface ModelConfig {
    tableName?: string;
    docClient?: any;
    dynamodb?: AWS.DynamoDB;
  }
  declare export interface Item {
    get(): {
      [key: string]: any
    };
    get(key: string): any;
    set(params: {}): Item;
    save(callback?: DynogelsItemCallback): void;
    update(options: UpdateItemOptions, callback?: DynogelsItemCallback): void;
    update(callback?: DynogelsItemCallback): void;
    destroy(options: DestroyItemOptions, callback?: DynogelsItemCallback): void;
    destroy(callback?: DynogelsItemCallback): void;
    toJSON(): any;
    toPlainObject(): any;
  }
  declare export interface BaseChain<T> {
    equals(value: any): T;
    eq(value: any): T;
    lte(value: any): T;
    lt(value: any): T;
    gte(value: any): T;
    gt(value: any): T;
    null(): T;
    exists(): T;
    beginsWith(value: any): T;
    between(value1: any, value2: any): T;
  }
  declare export type ExtendedChain<T> = {
    contains(value: any): T,
    notContains(value: any): T,
    in(values: any[]): T,
    ne(value: any): T
  } & BaseChain<T>;

  declare export type QueryWhereChain = BaseChain<Query>;
  declare export type QueryFilterChain = ExtendedChain<Query>;
  declare export interface Query {
    limit(number: number): Query;
    filterExpression(expression: any): Query;
    expressionAttributeNames(data: any): Query;
    expressionAttributeValues(data: any): Query;
    projectionExpression(data: any): Query;
    usingIndex(name: string): Query;
    consistentRead(read: boolean): Query;
    addKeyCondition(condition: any): Query;
    addFilterCondition(condition: any): Query;
    startKey(hashKey: any, rangeKey: any): Query;
    attributes(attrs: any): Query;
    ascending(): Query;
    descending(): Query;
    select(value: any): Query;
    returnConsumedCapacity(value: any): Query;
    loadAll(): Query;
    where(keyName: string): QueryWhereChain;
    filter(keyName: string): QueryFilterChain;
    exec(): stream.Readable;
    exec(callback: (err: Error, data: any) => void): void;
  }
  declare export type ScanWhereChain = {
    notNull(): Scan
  } & ExtendedChain<Scan>;

  declare export interface Scan {
    limit(number: number): Scan;
    addFilterCondition(condition: any): Scan;
    startKey(hashKey: any, rangeKey?: any): Scan;
    attributes(attrs: any): Scan;
    select(value: any): Scan;
    returnConsumedCapacity(): Scan;
    segments(segment: any, totalSegments: number): Scan;
    where(keyName: string): ScanWhereChain;
    filterExpression(expression: any): Scan;
    expressionAttributeNames(data: any): Scan;
    expressionAttributeValues(data: any): Scan;
    projectionExpression(data: any): Scan;
    exec(): stream.Readable;
    exec(callback: (err: Error, data: any) => void): void;
    loadAll(): Scan;
  }
  declare export type tableResolve = () => string;
  declare export interface SchemaType {
    [key: string]: joi.AnySchema | SchemaType;
  }
  declare export interface ModelConfiguration {
    hashKey: string;
    rangeKey?: string;
    timestamps?: boolean;
    createdAt?: boolean;
    updatedAt?: string;
    schema?: SchemaType;
    validation?: joi.ValidationOptions;
    tableName?: string | tableResolve;
    indexes?: any[];
    log?: Log;
  }
  declare export interface Document {
    [key: string]: any;
  }
  declare export interface DocumentCollection {
    Items: Document[];
    Count: number;
    ScannedCount: number;
  }
}
