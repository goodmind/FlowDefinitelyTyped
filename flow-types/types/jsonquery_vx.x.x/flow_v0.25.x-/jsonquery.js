declare module "jsonquery" {
  declare function jsonquery<T>(
    query: jsonquery$jsonquery$Query<T>
  ): NodeJS.ReadWriteStream;

  declare var npm$namespace$jsonquery: {
    match: typeof jsonquery$match
  };
  declare function jsonquery$match<T>(
    haystack: T,
    predicate: jsonquery$Query<T>
  ): boolean;

  declare type jsonquery$Query<T> =
    | jsonquery$BinaryQueryCondition<T>
    | jsonquery$QueryValue<T>
    | jsonquery$PathQuery;

  declare interface jsonquery$OrQueryCondition<T> {
    $or: $ReadOnlyArray<jsonquery$Query<T>>;
  }

  declare interface jsonquery$AndQueryCondition<T> {
    $and: $ReadOnlyArray<jsonquery$Query<T>>;
  }

  declare type jsonquery$BinaryQueryCondition<T> =
    | jsonquery$OrQueryCondition<T>
    | jsonquery$AndQueryCondition<T>;

  declare interface jsonquery$BaseCondition<P> {
    $lt: P;
    $lte: P;
    $gt: P;
    $gte: P;
    $mod: [number, number];
    $ne: P;
    $in: $ReadOnlyArray<P>;
    $nin: $ReadOnlyArray<P>;
    $all: $ReadOnlyArray<P>;
    $elemMatch: $Shape<P>;
  }

  declare interface jsonquery$PathQuery {
    [path: string]: any;
  }

  declare type jsonquery$QueryValue<T> = $ObjMapi<
    T,
    <P>(P) => $ElementType<T, P> | jsonquery$BaseCondition<$ElementType<T, P>>
  >;
  declare module.exports: typeof jsonquery;
}
