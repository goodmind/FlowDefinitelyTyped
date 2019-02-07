declare module "p-catch-if" {
  declare type pCatchIf$Predicate =
    | ErrorConstructor
    | $ReadOnlyArray<ErrorConstructor>
    | boolean
    | ((err: Error) => boolean | PromiseLike<boolean>);
  declare function pCatchIf<T>(
    predicate: pCatchIf$pCatchIf$Predicate,
    fn: (err: Error) => T
  ): (err: Error) => T;

  declare module.exports: typeof pCatchIf;
}
