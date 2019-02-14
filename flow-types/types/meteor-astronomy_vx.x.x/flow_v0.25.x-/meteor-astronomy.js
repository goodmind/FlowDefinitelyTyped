declare module "meteor/jagi:astronomy" {
  declare var npm$namespace$Class: {
    create: typeof Class$create
  };
  declare function Class$create<T: {}>(
    model: MeteorAstronomy$ClassModel<T>
  ): MeteorAstronomy$Class<T>;

  declare var npm$namespace$Enum: {
    create: typeof Enum$create
  };
  declare function Enum$create<T>(
    model: MeteorAstronomy$EnumModel<T>
  ): MeteorAstronomy$Enum<T>;
}
declare module "meteor-astronomy" {
  declare type MeteorAstronomy$NonFunctionPropertyNames<T> = $ElementType<
    $ObjMapi<T, <K>(K) => "There was Conditional Type, use $Call utility type">,
    $Keys<T>
  >;

  declare type MeteorAstronomy$NonFunctionProperties<T> = Pick<
    T,
    MeteorAstronomy$NonFunctionPropertyNames<T>
  >;

  declare type MeteorAstronomy$FunctionPropertyNames<T> = $ElementType<
    $ObjMapi<T, <K>(K) => "There was Conditional Type, use $Call utility type">,
    $Keys<T>
  >;

  declare type MeteorAstronomy$FunctionProperties<T> = Pick<
    T,
    MeteorAstronomy$FunctionPropertyNames<T>
  >;

  declare type MeteorAstronomy$TypeOptionsPrimitives =
    | typeof String
    | typeof Date
    | typeof Boolean
    | typeof Object
    | typeof Number;

  declare type MeteorAstronomy$TypeOptions =
    | MeteorAstronomy$TypeOptionsPrimitives
    | MeteorAstronomy$TypeOptionsPrimitives[]
    | MeteorAstronomy$Class<any>
    | MeteorAstronomy$Enum<any>;

  declare interface MeteorAstronomy$SaveAndValidateOptions<K> {
    fields?: K[];
    stopOnFirstError?: boolean;
    simulation?: boolean;
    cast?: boolean;
  }

  declare type MeteorAstronomy$SaveAndValidateCallback = (
    err: any,
    id: any
  ) => void;

  declare type MeteorAstronomy$RemoveCallback = (err: any, result: any) => void;

  declare interface MeteorAstronomy$Validator {
    type: string;
    param: any;
  }

  declare interface MeteorAstronomy$ModelFullField<Field, Doc> {
    type: MeteorAstronomy$TypeOptions;
    optional?: boolean;
    transient?: boolean;
    immutable?: boolean;
    default?: () => Field | Field;
    index?: string | number;
    validators?: MeteorAstronomy$Validator[];
    resolve?: (doc: Doc) => Field;
  }

  declare type MeteorAstronomy$ModelField<Field, Doc> =
    | MeteorAstronomy$ModelFullField<Field, Doc>
    | MeteorAstronomy$TypeOptions;

  declare type MeteorAstronomy$Fields<T> = $ObjMapi<
    MeteorAstronomy$NonFunctionProperties<T>,
    <P>(P) => MeteorAstronomy$ModelField<$ElementType<T, P>, T>
  >;

  declare type MeteorAstronomy$Helpers<T> = $ObjMapi<
    MeteorAstronomy$FunctionProperties<T>,
    <P>(P) => (...args: any[]) => any
  >;

  declare interface MeteorAstronomy$ClassModel<T> {
    name: string;
    collection?: Mongo.Collection<T>;
    fields: MeteorAstronomy$Fields<T>;
    behaviors?: { [key: string]: any };
    secured?:
      | {
          insert: boolean,
          update: boolean,
          remove: boolean
        }
      | boolean;
    helpers?: MeteorAstronomy$Helpers<T>;
    events?: { [key: string]: any };
    meteorMethods?: { [key: string]: any };
    indexes?: { [key: string]: any };
  }

  declare interface MeteorAstronomy$EnumModel<T> {
    name: string;
    identifiers: string[] | T;
  }

  declare type MeteorAstronomy$Model<T> = T & {
    set(
      fields: $Shape<T>,
      options?: {
        cast?: boolean,
        clone?: boolean,
        merge?: boolean
      }
    ): void,
    set(field: string, value: any): void,
    get(field: string): any,
    get(fields: string[]): any[],
    isModified(field?: string): boolean,
    getModified(): any,
    getModifiedValues(options?: {
      old?: boolean,
      raw?: boolean
    }): $Shape<T>,
    getModifier(): any,
    raw(): T,
    raw(field: string): any,
    raw(fields: string[]): any[],
    save(
      options?: MeteorAstronomy$SaveAndValidateOptions<$Keys<T>>,
      callback?: MeteorAstronomy$SaveAndValidateCallback
    ): void,
    save(callback?: MeteorAstronomy$SaveAndValidateCallback): void,
    copy(save: boolean): any,
    validate(
      options?: MeteorAstronomy$SaveAndValidateOptions<$Keys<T>>,
      callback?: MeteorAstronomy$SaveAndValidateCallback
    ): void,
    validate(callback?: MeteorAstronomy$SaveAndValidateCallback): void,
    remove(callback?: MeteorAstronomy$RemoveCallback): void
  };

  declare interface MeteorAstronomy$FindOneOptions {
    sort?: Mongo.SortSpecifier;
    skip?: number;
    fields?: Mongo.FieldSpecifier;
    reactive?: boolean;
    transform?: (...args: any[]) => any;
    disableEvents?: boolean;
    children?: number;
    defaults?: boolean;
  }

  declare type MeteorAstronomy$FindOptions = {
    limit?: number
  } & FindOneOptions;

  declare interface MeteorAstronomy$UpsertOptions {
    multi?: boolean;
  }

  declare type MeteorAstronomy$UpdateOptions = {
    upsert?: boolean
  } & UpsertOptions;

  declare type MeteorAstronomy$MongoQuery<T> =
    | Mongo.Selector<T>
    | Mongo.ObjectID
    | string;

  declare interface MeteorAstronomy$Class<T> {
    new(data?: $Shape<T>): MeteorAstronomy$Model<T>;
    findOne(
      selector?: MeteorAstronomy$MongoQuery<T>,
      options?: MeteorAstronomy$FindOneOptions
    ): MeteorAstronomy$Model<T>;
    find(
      selector?: MeteorAstronomy$MongoQuery<T>,
      options?: MeteorAstronomy$FindOptions
    ): Mongo.Cursor<MeteorAstronomy$Model<T>>;
    insert(doc: T, callback?: () => void): string;
    update(
      selector: MeteorAstronomy$MongoQuery<T>,
      modifier: Mongo.Modifier<T>,
      options?: MeteorAstronomy$UpdateOptions,
      callback?: () => void
    ): number;
    upsert(
      selector: MeteorAstronomy$MongoQuery<T>,
      modifier: Mongo.Modifier<T>,
      options?: MeteorAstronomy$UpsertOptions,
      callback?: () => void
    ): number;
    remove(
      selector: MeteorAstronomy$MongoQuery<T>,
      callback?: () => void
    ): number;
  }

  declare type MeteorAstronomy$Enum<T> = T & {
    getValues(): any[],
    getIdentifier(identifier: any): string
  };
}
