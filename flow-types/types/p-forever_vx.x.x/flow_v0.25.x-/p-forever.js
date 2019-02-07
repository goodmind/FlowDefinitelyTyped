declare module "p-forever" {
  declare module.exports: typeof pForever;

  declare function pForever<T>(
    fn: (previousValue?: T) => T | PromiseLike<T> | typeof undefined
  ): Promise<void>;

  declare function pForever<T>(
    fn: (previousValue: T) => T | PromiseLike<T> | typeof undefined,
    initialValue: T
  ): Promise<void>;

  declare var npm$namespace$pForever: {
    end: typeof pForever$end
  };
  declare var pForever$end: "NO PRINT IMPLEMENTED: TypeOperator UniqueKeyword";
}
