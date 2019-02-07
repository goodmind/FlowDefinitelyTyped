declare module "aggregate-error" {
  declare module.exports: typeof AggregateError;

  declare class AggregateError mixins Error, Iterable<Error> {
    constructor(errors: Iterable<Error | string>): this;
    undefined(): Iterator<Error>;
  }
}
