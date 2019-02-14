declare module "p-forever" {
  declare export default typeof pForever;

  declare function pForever<T>(
    fn: (previousValue?: T) => T | PromiseLike<T> | typeof pForever$end
  ): Promise<void>;

  declare function pForever<T>(
    fn: (previousValue: T) => T | PromiseLike<T> | typeof pForever$end,
    initialValue: T
  ): Promise<void>;

  declare var npm$namespace$pForever: {
    end: typeof pForever$end
  };
  declare var pForever$end: "NO PRINT IMPLEMENTED: TypeOperator UniqueKeyword";
}
