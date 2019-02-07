declare module "bookshelf" {
  declare type Bookshelf = {
    VERSION: string,
    knex: knex,
    Bookshelf$Model: typeof undefined,
    Bookshelf$Collection: typeof undefined,
    plugin(name: string | string[] | Function, options?: any): Bookshelf,
    transaction<T>(
      callback: (transaction: knex.Transaction) => PromiseLike<T>
    ): BlueBird<T>
  } & Bookshelf$Bookshelf$Events<any>;

  declare function Bookshelf(knex: knex): Bookshelf;

  declare type Bookshelf$SortOrder = "ASC" | "asc" | "DESC" | "desc";

  declare class Bookshelf$Events<T> {
    on(
      event?: string,
      callback?: Bookshelf$EventFunction<T>,
      context?: any
    ): void;
    off(event?: string): void;
    trigger(event?: string, ...args: any[]): void;
    triggerThen(name: string, ...args: any[]): BlueBird<any>;
    once(
      event: string,
      callback: Bookshelf$EventFunction<T>,
      context?: any
    ): void;
  }

  declare interface Bookshelf$IModelBase {
    /**
     * Should be declared as a getter instead of a plain property.
     */
    hasTimestamps?: boolean | string[];

    /**
     * Should be declared as a getter instead of a plain property. Should be required, but cannot have abstract properties yet.
     */
    tableName?: string;
  }

  declare class Bookshelf$ModelBase<T: Bookshelf$Model<any>>
    mixins Bookshelf$Events<T | Bookshelf$Collection<T>> {
    /**
     * If overriding, must use a getter instead of a plain property.
     */
    idAttribute: string;
    id: any;
    attributes: any;
    constructor(attributes?: any, options?: Bookshelf$ModelOptions): this;
    clear(): T;
    clone(): T;
    escape(attribute: string): string;
    format(attributes: any): any;
    get(attribute: string): any;
    has(attribute: string): boolean;
    hasChanged(attribute?: string): boolean;
    isNew(): boolean;
    parse(response: Object): Object;
    previousAttributes(): any;
    previous(attribute: string): any;
    related<R: Bookshelf$Model<any>>(
      relation: string
    ): R | Bookshelf$Collection<R>;
    serialize(options?: Bookshelf$SerializeOptions): any;
    set(
      attribute?: {
        [key: string]: any
      },
      options?: Bookshelf$SetOptions
    ): T;
    set(attribute: string, value?: any, options?: Bookshelf$SetOptions): T;
    timestamp(options?: Bookshelf$TimestampOptions): any;
    toJSON(options?: Bookshelf$SerializeOptions): any;
    unset(attribute: string): T;
    invert<R: {}>(): R;
    keys(): string[];
    omit<R: {}>(
      predicate?: Lodash.ObjectIterator<any, boolean>,
      thisArg?: any
    ): R;
    omit<R: {}>(...attributes: string[]): R;
    pairs(): any[][];
    pick<R: {}>(
      predicate?: Lodash.ObjectIterator<any, boolean>,
      thisArg?: any
    ): R;
    pick<R: {}>(...attributes: string[]): R;
    values(): any[];
  }

  declare interface Bookshelf$ModelSubclass {
    new(): Bookshelf$Model<any>;
  }

  declare class Bookshelf$Model<T: Bookshelf$Model<any>>
    mixins Bookshelf$ModelBase<T> {
    static collection<T: Bookshelf$Model<any>>(
      models?: T[],
      options?: Bookshelf$CollectionOptions<T>
    ): Bookshelf$Collection<T>;
    static count(
      column?: string,
      options?: Bookshelf$SyncOptions
    ): BlueBird<number>;

    /**
     * @deprecated use Typescript classes
     */
    static extend<T: Bookshelf$Model<any>>(
      prototypeProperties?: any,
      classProperties?: any
    ): Function;
    static fetchAll<T: Bookshelf$Model<any>>(): BlueBird<
      Bookshelf$Collection<T>
    >;

    /**
     * @deprecated should use `new` objects instead.
     */
    static forge<T>(attributes?: any, options?: Bookshelf$ModelOptions): T;
    static where<T>(properties: {
      [key: string]: any
    }): T;
    static where<T>(
      key: string,
      operatorOrValue: string | number | boolean,
      valueIfOperator?: string | string[] | number | number[] | boolean
    ): T;
    belongsTo<R: Bookshelf$Model<any>>(
      target: {
        new(...args: any[]): R
      },
      foreignKey?: string,
      foreignKeyTarget?: string
    ): R;
    belongsToMany<R: Bookshelf$Model<any>>(
      target: {
        new(...args: any[]): R
      },
      table?: string,
      foreignKey?: string,
      otherKey?: string,
      foreignKeyTarget?: string,
      otherKeyTarget?: string
    ): Bookshelf$Collection<R>;
    count(column?: string, options?: Bookshelf$SyncOptions): BlueBird<number>;
    destroy(options?: Bookshelf$DestroyOptions): BlueBird<T>;
    fetch(options?: Bookshelf$FetchOptions): BlueBird<T>;
    fetchAll(
      options?: Bookshelf$FetchAllOptions
    ): BlueBird<Bookshelf$Collection<T>>;
    hasMany<R: Bookshelf$Model<any>>(
      target: {
        new(...args: any[]): R
      },
      foreignKey?: string,
      foreignKeyTarget?: string
    ): Bookshelf$Collection<R>;
    hasOne<R: Bookshelf$Model<any>>(
      target: {
        new(...args: any[]): R
      },
      foreignKey?: string,
      foreignKeyTarget?: string
    ): R;
    load(
      relations: string | string[],
      options?: Bookshelf$LoadOptions
    ): BlueBird<T>;
    morphMany<R: Bookshelf$Model<any>>(
      target: {
        new(...args: any[]): R
      },
      name?: string,
      columnNames?: string[],
      morphValue?: string
    ): Bookshelf$Collection<R>;
    morphOne<R: Bookshelf$Model<any>>(
      target: {
        new(...args: any[]): R
      },
      name?: string,
      columnNames?: string[],
      morphValue?: string
    ): R;
    morphTo(
      name: string,
      columnNames?: string[],
      ...target: Bookshelf$ModelSubclass[]
    ): T;
    morphTo(name: string, ...target: Bookshelf$ModelSubclass[]): T;
    orderBy(column: string, order?: Bookshelf$SortOrder): T;
    query(): Knex.QueryBuilder;
    query(callback: (qb: Knex.QueryBuilder) => void): T;
    query(...query: string[]): T;
    query(query: {
      [key: string]: any
    }): T;
    refresh(options?: Bookshelf$FetchOptions): BlueBird<T>;
    resetQuery(): T;
    save(key?: string, val?: any, options?: Bookshelf$SaveOptions): BlueBird<T>;
    save(
      attrs?: {
        [key: string]: any
      },
      options?: Bookshelf$SaveOptions
    ): BlueBird<T>;
    through<R: Bookshelf$Model<any>>(
      interim: Bookshelf$ModelSubclass,
      throughForeignKey?: string,
      otherKey?: string
    ): R;
    where(properties: {
      [key: string]: any
    }): T;
    where(
      key: string,
      operatorOrValue: string | number | boolean,
      valueIfOperator?: string | string[] | number | number[] | boolean
    ): T;
    static NotFoundError: createError.Error<Error>;
    static NoRowsUpdatedError: createError.Error<Error>;
    static NoRowsDeletedError: createError.Error<Error>;
  }

  declare class Bookshelf$CollectionBase<T: Bookshelf$Model<any>>
    mixins Bookshelf$Events<T> {
    length: number;
    constructor(models?: T[], options?: Bookshelf$CollectionOptions<T>): this;
    add(
      models:
        | T[]
        | {
            [key: string]: any
          }[],
      options?: Bookshelf$CollectionAddOptions
    ): Bookshelf$Collection<T>;
    at(index: number): T;
    clone(): Bookshelf$Collection<T>;
    fetch(
      options?: Bookshelf$CollectionFetchOptions
    ): BlueBird<Bookshelf$Collection<T>>;
    findWhere(match: {
      [key: string]: any
    }): T;
    get(id: any): T;
    invokeThen(name: string, ...args: any[]): BlueBird<any>;
    parse(response: any): any;
    pluck(attribute: string): any[];
    pop(): void;
    push(model: any): Bookshelf$Collection<T>;
    reduceThen<R>(
      iterator: (prev: R, cur: T, idx: number, array: T[]) => R,
      initialValue: R,
      context: any
    ): BlueBird<R>;
    remove(model: T, options?: Bookshelf$EventOptions): T;
    remove(model: T[], options?: Bookshelf$EventOptions): T[];
    reset(model: any[], options?: Bookshelf$CollectionAddOptions): T[];
    serialize(options?: Bookshelf$SerializeOptions): any[];
    set(
      models:
        | T[]
        | {
            [key: string]: any
          }[],
      options?: Bookshelf$CollectionSetOptions
    ): Bookshelf$Collection<T>;
    shift(options?: Bookshelf$EventOptions): void;
    slice(begin?: number, end?: number): void;
    toJSON(options?: Bookshelf$SerializeOptions): any[];
    unshift(model: any, options?: Bookshelf$CollectionAddOptions): void;
    where(
      match: {
        [key: string]: any
      },
      firstOnly: boolean
    ): T | Bookshelf$Collection<T>;
    all(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): boolean;
    all<R: {}>(predicate?: R): boolean;
    any(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): boolean;
    any<R: {}>(predicate?: R): boolean;
    chain(): Lodash.LoDashExplicitObjectWrapper<T>;
    collect(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): T[];
    collect<R: {}>(predicate?: R): T[];
    contains(value: any, fromIndex?: number): boolean;
    countBy(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): Lodash.Dictionary<number>;
    countBy<R: {}>(predicate?: R): Lodash.Dictionary<number>;
    detect(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): T;
    detect<R: {}>(predicate?: R): T;
    difference(...values: T[]): T[];
    drop(n?: number): T[];
    each(
      callback?: Lodash.ListIterator<T, void>,
      thisArg?: any
    ): Lodash.List<T>;
    each(
      callback?: Lodash.DictionaryIterator<T, void>,
      thisArg?: any
    ): Lodash.Dictionary<T>;
    each(callback?: Lodash.ObjectIterator<T, void>, thisArg?: any): T;
    every(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): boolean;
    every<R: {}>(predicate?: R): boolean;
    filter(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): T[];
    filter<R: {}>(predicate?: R): T[];
    find(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): T;
    find<R: {}>(predicate?: R): T;
    first(): T;
    foldl<R>(
      callback?: Lodash.MemoIterator<T, R>,
      accumulator?: R,
      thisArg?: any
    ): R;
    foldr<R>(
      callback?: Lodash.MemoIterator<T, R>,
      accumulator?: R,
      thisArg?: any
    ): R;
    forEach(
      callback?: Lodash.ListIterator<T, void>,
      thisArg?: any
    ): Lodash.List<T>;
    forEach(
      callback?: Lodash.DictionaryIterator<T, void>,
      thisArg?: any
    ): Lodash.Dictionary<T>;
    forEach(callback?: Lodash.ObjectIterator<T, void>, thisArg?: any): T;
    groupBy(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): Lodash.Dictionary<T[]>;
    groupBy<R: {}>(predicate?: R): Lodash.Dictionary<T[]>;
    head(): T;
    include(value: any, fromIndex?: number): boolean;
    indexOf(value: any, fromIndex?: number): number;
    initial(): T[];
    inject<R>(
      callback?: Lodash.MemoIterator<T, R>,
      accumulator?: R,
      thisArg?: any
    ): R;
    invoke(methodName: string | Function, ...args: any[]): any;
    isEmpty(): boolean;
    keys(): string[];
    last(): T;
    lastIndexOf(value: any, fromIndex?: number): number;
    map<U>(predicate?: Lodash.ListIterator<T, U> | string, thisArg?: any): U[];
    map<U>(
      predicate?: Lodash.DictionaryIterator<T, U> | string,
      thisArg?: any
    ): U[];
    map<U>(predicate?: string): U[];
    max(predicate?: Lodash.ListIterator<T, boolean> | string, thisArg?: any): T;
    max<R: {}>(predicate?: R): T;
    min(predicate?: Lodash.ListIterator<T, boolean> | string, thisArg?: any): T;
    min<R: {}>(predicate?: R): T;
    reduce<R>(
      callback?: Lodash.MemoIterator<T, R>,
      accumulator?: R,
      thisArg?: any
    ): R;
    reduceRight<R>(
      callback?: Lodash.MemoIterator<T, R>,
      accumulator?: R,
      thisArg?: any
    ): R;
    reject(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): T[];
    reject<R: {}>(predicate?: R): T[];
    rest(): T[];
    select(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): T[];
    select<R: {}>(predicate?: R): T[];
    shuffle(): T[];
    size(): number;
    some(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): boolean;
    some<R: {}>(predicate?: R): boolean;
    sortBy(
      predicate?:
        | Lodash.ListIterator<T, boolean>
        | Lodash.DictionaryIterator<T, boolean>
        | string,
      thisArg?: any
    ): T[];
    sortBy<R: {}>(predicate?: R): T[];
    tail(): T[];
    take(n?: number): T[];
    toArray(): T[];
    without(...values: any[]): T[];
  }

  declare class Bookshelf$Collection<T: Bookshelf$Model<any>>
    mixins Bookshelf$CollectionBase<T> {
    /**
     * @deprecated use Typescript classes
     */
    static extend<T>(
      prototypeProperties?: any,
      classProperties?: any
    ): Function;

    /**
     * @deprecated should use `new` objects instead.
     */
    static forge<T>(attributes?: any, options?: Bookshelf$ModelOptions): T;
    attach(
      ids: any | any[],
      options?: Bookshelf$SyncOptions
    ): BlueBird<Bookshelf$Collection<T>>;
    count(column?: string, options?: Bookshelf$SyncOptions): BlueBird<number>;
    create(
      model: {
        [key: string]: any
      },
      options?: Bookshelf$CollectionCreateOptions
    ): BlueBird<T>;
    detach(ids: any[], options?: Bookshelf$SyncOptions): BlueBird<any>;
    detach(options?: Bookshelf$SyncOptions): BlueBird<any>;
    fetchOne(options?: Bookshelf$CollectionFetchOneOptions): BlueBird<T>;
    load(
      relations: string | string[],
      options?: Bookshelf$SyncOptions
    ): BlueBird<Bookshelf$Collection<T>>;
    orderBy(
      column: string,
      order?: Bookshelf$SortOrder
    ): Bookshelf$Collection<T>;
    query(): Knex.QueryBuilder;
    query(callback: (qb: Knex.QueryBuilder) => void): Bookshelf$Collection<T>;
    query(...query: string[]): Bookshelf$Collection<T>;
    query(query: {
      [key: string]: any
    }): Bookshelf$Collection<T>;
    resetQuery(): Bookshelf$Collection<T>;
    through<R: Bookshelf$Model<any>>(
      interim: Bookshelf$ModelSubclass,
      throughForeignKey?: string,
      otherKey?: string
    ): Bookshelf$Collection<R>;
    updatePivot(
      attributes: any,
      options?: Bookshelf$PivotOptions
    ): BlueBird<number>;
    withPivot(columns: string[]): Bookshelf$Collection<T>;
    static EmptyError: createError.Error<Error>;
  }

  declare interface Bookshelf$ModelOptions {
    tableName?: string;
    hasTimestamps?: boolean;
    parse?: boolean;
  }

  declare type Bookshelf$LoadOptions = {
    withRelated: (string | Bookshelf$WithRelatedQuery)[]
  } & Bookshelf$SyncOptions;

  declare type Bookshelf$FetchOptions = {
    require?: boolean,
    columns?: string | string[],
    withRelated?: (string | Bookshelf$WithRelatedQuery)[]
  } & Bookshelf$SyncOptions;

  declare interface Bookshelf$WithRelatedQuery {
    [index: string]: (query: Knex.QueryBuilder) => Knex.QueryBuilder;
  }

  declare type Bookshelf$FetchAllOptions = {} & Bookshelf$FetchOptions;

  declare type Bookshelf$SaveOptions = {
    method?: string,
    defaults?: string,
    patch?: boolean,
    require?: boolean
  } & Bookshelf$SyncOptions;

  declare type Bookshelf$DestroyOptions = {
    require?: boolean
  } & Bookshelf$SyncOptions;

  declare interface Bookshelf$SerializeOptions {
    shallow?: boolean;
    omitPivot?: boolean;
  }

  declare interface Bookshelf$SetOptions {
    unset?: boolean;
  }

  declare interface Bookshelf$TimestampOptions {
    method?: string;
  }

  declare interface Bookshelf$SyncOptions {
    transacting?: Knex.Transaction;
    debug?: boolean;
  }

  declare interface Bookshelf$CollectionOptions<T> {
    comparator?: boolean | string | ((a: T, b: T) => number);
  }

  declare type Bookshelf$CollectionAddOptions = {
    at?: number,
    merge?: boolean
  } & Bookshelf$EventOptions;

  declare interface Bookshelf$CollectionFetchOptions {
    require?: boolean;
    withRelated?: string | string[];
  }

  declare interface Bookshelf$CollectionFetchOneOptions {
    require?: boolean;
    columns?: string | string[];
  }

  declare type Bookshelf$CollectionSetOptions = {
    add?: boolean,
    remove?: boolean,
    merge?: boolean
  } & Bookshelf$EventOptions;

  declare interface Bookshelf$PivotOptions {
    query?: Function | any;
    require?: boolean;
  }

  declare interface Bookshelf$EventOptions {
    silent?: boolean;
  }

  declare interface Bookshelf$EventFunction<T> {
    (model: T, attrs: any, options: any): BlueBird<any> | void;
  }

  declare type Bookshelf$CollectionCreateOptions = {} & Bookshelf$ModelOptions &
    Bookshelf$SyncOptions &
    Bookshelf$CollectionAddOptions &
    Bookshelf$SaveOptions;

  declare module.exports: typeof Bookshelf;
}
