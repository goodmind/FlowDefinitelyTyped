declare module "waterline" {
  declare type Waterline$Adapter = Object;

  declare type Waterline$Connection = {
    adapter: string
  };

  declare interface Waterline$Config {
    adapters: {
      [index: string]: Waterline$Adapter
    };
    connections: {
      [index: string]: Waterline$Connection
    };
  }

  declare type Waterline$Ontology = {
    collections: any
  };

  declare interface Waterline$Waterline {
    loadCollection(collection: Waterline$CollectionClass): void;
    initialize: (
      config: Waterline$Config,
      cb: (err: Error, ontology: Waterline$Ontology) => any
    ) => any;
    collections: any;
  }

  declare interface Waterline$CollectionClass {
    (): Waterline$Collection;
  }

  declare export type Waterline$LifecycleCallbacks = {
    beforeValidate?:
      | {
          (vaues: any, next: Function): void
        }[]
      | {
          (vaues: any, next: Function): void
        },
    beforeCreate?:
      | {
          (values: any, next: Function): void
        }[]
      | {
          (vaues: any, next: Function): void
        },
    afterCreate?:
      | {
          (newlyCreatedRecord: any, next: Function): void
        }[]
      | {
          (newlyCreatedRecord: any, next: Function): void
        },
    beforeUpdate?:
      | {
          (valuesToUpdate: any, next: Function): void
        }[]
      | {
          (valuesToUpdate: any, next: Function): void
        },
    afterUpdate?:
      | {
          (valuesToUpdate: any, next: Function): void
        }[]
      | {
          (valuesToUpdate: any, next: Function): void
        },
    beforeDestroy?:
      | {
          (criteria: any, next: Function): void
        }[]
      | {
          (valuesToUpdate: any, next: Function): void
        },
    afterDestroy?:
      | {
          (destroyedInstance: any, next: Function): void
        }[]
      | {
          (destroyedInstance: any, next: Function): void
        }
  };

  declare export type Waterline$CollectionDefinition = Waterline$LifecycleCallbacks & {
    attributes?: Waterline$Attributes,
    connection?: string,
    identity?: string,
    tableName?: string,
    migrate?: "alter" | "drop" | "safe",
    autoPK?: boolean,
    autoCreatedAt?: boolean,
    autoUpdatedAt?: boolean,
    schema?: boolean,
    types?: any
  };

  declare export type Waterline$Collection = Waterline$CollectionDefinition;

  declare export type Waterline$Attributes = {
    [index: string]: Waterline$Attribute
  } & {
    toJSON?: () => string,
    toObject?: () => any
  };

  declare export type Waterline$FunctionAttribute = () => any;

  declare export type Waterline$AttributeType =
    | "string"
    | "text"
    | "integer"
    | "float"
    | "date"
    | "time"
    | "datetime"
    | "boolean"
    | "binary"
    | "array"
    | "json";

  declare export type Waterline$Attribute =
    | string
    | Waterline$StringAttribute
    | Waterline$EmailAttribute
    | Waterline$IntegerAttribute
    | Waterline$FloatAttribute
    | Waterline$DateAttribute
    | Waterline$TimeAttribute
    | Waterline$DatetimeAttribute
    | Waterline$BooleanAttribute
    | Waterline$BinaryAttribute
    | Waterline$ArrayAttribute
    | Waterline$JsonAttribute
    | Waterline$OneToOneAttribute
    | Waterline$OneToManyAttribute
    | Waterline$ManyToManyAttribute
    | Waterline$FunctionAttribute;

  declare export type Waterline$DefaultsToFn<T> = () => T;

  declare export type Waterline$BaseAttribute<
    T
  > = Waterline$AttributeValidations & {
    type?: string,
    primaryKey?: boolean,
    unique?: boolean,
    required?: boolean,
    enum?: Array<T>,
    size?: number,
    columnName?: string,
    index?: boolean,
    defaultsTo?: T | Waterline$DefaultsToFn<T>
  };

  declare export type Waterline$StringAttribute = Waterline$BaseAttribute<string> & {
    type: "string"
  };

  declare export type Waterline$EmailAttribute = Waterline$BaseAttribute<string> & {
    type: "email"
  };

  declare export type Waterline$TextAttribute = Waterline$BaseAttribute<string> & {
    type: "text"
  };

  declare export type Waterline$IntegerAttribute = Waterline$BaseAttribute<number> & {
    type: "integer",
    autoIncrement?: boolean
  };

  declare export type Waterline$FloatAttribute = Waterline$BaseAttribute<number> & {
    type: "float"
  };

  declare export type Waterline$DateAttribute = Waterline$BaseAttribute<Date> & {
    type: "date"
  };

  declare export type Waterline$TimeAttribute = Waterline$BaseAttribute<Date> & {
    type: "time"
  };

  declare export type Waterline$DatetimeAttribute = Waterline$BaseAttribute<Date> & {
    type: "datetime"
  };

  declare export type Waterline$BooleanAttribute = Waterline$BaseAttribute<boolean> & {
    type: "boolean"
  };

  declare export type Waterline$BinaryAttribute = Waterline$BaseAttribute<any> & {
    type: "binary"
  };

  declare export type Waterline$ArrayAttribute = Waterline$BaseAttribute<any> & {
    type: "array"
  };

  declare export type Waterline$JsonAttribute = Waterline$BaseAttribute<any> & {
    type: "json"
  };

  declare export type Waterline$OneToOneAttribute = Waterline$BaseAttribute<any> & {
    model: string
  };

  declare export type Waterline$OneToManyAttribute = Waterline$BaseAttribute<any> & {
    collection: string,
    via: string
  };

  declare export type Waterline$ManyToManyAttribute = Waterline$BaseAttribute<any> & {
    collection: string,
    via: string,
    dominant?: boolean
  };

  declare type Waterline$AttributeValidationSyncFn<T> = () => T;

  declare type Waterline$AttributeValidationAsyncFn<T> = (
    cb: (value: T) => any
  ) => void;

  declare export type Waterline$AttributeValidation<T> =
    | T
    | Waterline$AttributeValidationSyncFn<T>
    | Waterline$AttributeValidationAsyncFn<T>;

  declare export interface Waterline$AttributeValidations {
    after?: Waterline$AttributeValidation<string>;
    alpha?: Waterline$AttributeValidation<boolean>;
    alphanumeric?: Waterline$AttributeValidation<boolean>;
    array?: Waterline$AttributeValidation<boolean>;
    before?: Waterline$AttributeValidation<string>;
    boolean?: Waterline$AttributeValidation<boolean>;
    contains?: Waterline$AttributeValidation<string>;
    creditcard?: Waterline$AttributeValidation<boolean>;
    date?: Waterline$AttributeValidation<boolean>;
    decimal?: Waterline$AttributeValidation<boolean>;
    email?: Waterline$AttributeValidation<boolean>;
    empty?: Waterline$AttributeValidation<boolean>;
    equals?: Waterline$AttributeValidation<any>;
    falsey?: Waterline$AttributeValidation<boolean>;
    finite?: Waterline$AttributeValidation<boolean>;
    float?: Waterline$AttributeValidation<boolean>;
    hexColor?: Waterline$AttributeValidation<boolean>;
    hexadecimal?: Waterline$AttributeValidation<boolean>;
    in?: Waterline$AttributeValidation<string[]>;
    int?: Waterline$AttributeValidation<boolean>;
    integer?: Waterline$AttributeValidation<boolean>;
    ip?: Waterline$AttributeValidation<boolean>;
    ipv4?: Waterline$AttributeValidation<boolean>;
    ipv6?: Waterline$AttributeValidation<boolean>;
    is?: Waterline$AttributeValidation<RegExp>;
    len?: Waterline$AttributeValidation<number>;
    lowercase?: Waterline$AttributeValidation<boolean>;
    max?: Waterline$AttributeValidation<number>;
    maxLength?: Waterline$AttributeValidation<number>;
    min?: Waterline$AttributeValidation<number>;
    minLength?: Waterline$AttributeValidation<number>;
    not?: Waterline$AttributeValidation<RegExp>;
    notContains?: Waterline$AttributeValidation<string>;
    notEmpty?: Waterline$AttributeValidation<boolean>;
    notIn?: Waterline$AttributeValidation<string[]>;
    notNull?: Waterline$AttributeValidation<boolean>;
    notRegex?: Waterline$AttributeValidation<RegExp>;
    null?: Waterline$AttributeValidation<boolean>;
    number?: Waterline$AttributeValidation<boolean>;
    numeric?: Waterline$AttributeValidation<boolean>;
    regex?: Waterline$AttributeValidation<RegExp>;
    required?: Waterline$AttributeValidation<boolean>;
    string?: Waterline$AttributeValidation<boolean>;
    truthy?: Waterline$AttributeValidation<boolean>;
    undefined?: Waterline$AttributeValidation<boolean>;
    uppercase?: Waterline$AttributeValidation<boolean>;
    url?: Waterline$AttributeValidation<boolean>;
    urlish?: Waterline$AttributeValidation<boolean>;
    uuid?: Waterline$AttributeValidation<boolean>;
    uuidv3?: Waterline$AttributeValidation<boolean>;
    uuidv4?: Waterline$AttributeValidation<boolean>;
  }

  declare type Waterline$WaterlinePromise<T> = BluebirdPromise<T> & {
    exec(cb: (err: Error, result: T) => any): void
  };

  declare type Waterline$QueryBuilder<T> = Waterline$WaterlinePromise<T> & {
    where(condition: any): Waterline$QueryBuilder<T>,
    limit(lim: number): Waterline$QueryBuilder<T>,
    skip(num: number): Waterline$QueryBuilder<T>,
    sort(
      criteria:
        | string
        | {
            [attribute: string]: string
          }
    ): Waterline$QueryBuilder<T>,
    paginate(pagination?: {
      page: number,
      limit: number
    }): Waterline$QueryBuilder<T>,
    populate(association: string): Waterline$QueryBuilder<T>,
    populate(association: string, filter: any): Waterline$QueryBuilder<T>,
    groupBy(attrOrExpr: string): Waterline$QueryBuilder<T>,
    max(attribute: string): Waterline$QueryBuilder<T>,
    min(attribute: string): Waterline$QueryBuilder<T>,
    sum(attribute: string): Waterline$QueryBuilder<T>,
    average(attribute: string): Waterline$QueryBuilder<T>
  };

  declare interface Waterline$ModelInstance {
    id?: number | string;
    createdAt?: Date;
    updatedAt?: Date;
    toJSON(): any;
    save(): Waterline$WaterlinePromise<this>;
  }

  declare export interface Waterline$Callback<T> {
    (err: any, result: T): any;
  }

  declare export type Waterline$Model = {
    create(
      params: any,
      cb?: Waterline$Callback<any>
    ): Waterline$WaterlinePromise<any>,
    create(
      params: any[],
      cb?: Waterline$Callback<any>
    ): Waterline$WaterlinePromise<any[]>,
    find(
      criteria?: any,
      cb?: Waterline$Callback<any[]>
    ): Waterline$QueryBuilder<any[]>,
    findOne(
      criteria?: any,
      cb?: Waterline$Callback<any>
    ): Waterline$QueryBuilder<any>,
    findOrCreate(
      criteria?: any,
      values?: any,
      cb?: Waterline$Callback<any>
    ): Waterline$QueryBuilder<any>,
    update(
      criteria: any,
      changes: any,
      cb?: Waterline$Callback<any>
    ): Waterline$WaterlinePromise<any[]>,
    update(
      criteria: any,
      changes: any[],
      cb?: Waterline$Callback<any[]>
    ): Waterline$WaterlinePromise<any[]>,
    destroy(
      criteria: any,
      cb?: Waterline$Callback<any>
    ): Waterline$WaterlinePromise<any[]>,
    destroy(
      criteria: any[],
      cb?: Waterline$Callback<any[]>
    ): Waterline$WaterlinePromise<any[]>,
    count(criteria: any): Waterline$WaterlinePromise<number>,
    count(criteria: any[]): Waterline$WaterlinePromise<number>,
    query(sqlQuery: string, cb: Waterline$Callback<any>): void,
    query(sqlQuery: string, data: any, cb: Waterline$Callback<any>): void,
    native(cb: (err: Error, collection: any) => void): void,
    stream(criteria: any, writeEnd: any): NodeJS.WritableStream | Error
  } & Waterline$ModelInstance;

  declare interface WaterlineStatic {
    Waterline$Collection: {
      extend: (
        params: Waterline$Waterline.Waterline$CollectionDefinition
      ) => Waterline$Waterline.Waterline$CollectionClass
    };
    new(): Waterline$Waterline.Waterline$Waterline;
  }
  declare var Waterline$Waterline: WaterlineStatic;
  declare module.exports: typeof Waterline$Waterline;
}
