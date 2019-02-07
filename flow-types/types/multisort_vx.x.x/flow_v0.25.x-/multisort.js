declare module "multisort" {
  /**
   * Returns sorting function which sorts its argument by given criterions.
   * @param sortings Sort criterions.
   */
  declare function multisort<T>(
    criterions:
      | multisort$multisort$Criterion<T>
      | Array<multisort$multisort$Criterion<T>>
  ): multisort$multisort$SortFunction<T>;

  /**
   * Sorts given array by given criterions.
   * @param toSort Array to sort.
   * @param sortings Sort criterions.
   */
  declare function multisort<T>(
    toSort: T[],
    criterions:
      | multisort$multisort$Criterion<T>
      | Array<multisort$multisort$Criterion<T>>
  ): T[];

  /**
   * Functional evaluators don't need any transformation, and can't
   *    have inverted order.
   *
   * Numerical evaluators sort the input directly if the criterion is
   *    non-negative, and in inverted order if the criterion is negative.
   *
   * String evaluators sort the input based on objects properties.
   * - Invert the sort if initial character is ! or ~.
   * - Allow an initial dot: ".prop.subprop" as well as "prop.subprop".
   * - Allow existential criterion by tailing question mark: "prop.subprop?".
   */
  declare type multisort$Criterion<T> = ((item: T) => any) | number | string;

  /**
   * Sorting function.
   */
  declare interface multisort$SortFunction<T> {
    (toSort: T[]): void;

    /**
     * To allow this to plug in to other sorting mechanisms.
     */
    comparator: (a: T, b: T) => number;
  }
  declare module.exports: typeof multisort;
}
