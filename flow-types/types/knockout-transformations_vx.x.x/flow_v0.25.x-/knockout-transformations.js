declare module "knockout-transformations" {
  declare interface KnockoutTransformations$Mapping<T, TResult> {
    (value: T): TResult;
  }

  declare interface KnockoutTransformations$MappingOption<T, TResult> {
    mapping: KnockoutTransformations$Mapping<T, TResult>;
    disposeItem?: (item: TResult) => void;
  }

  declare interface KnockoutTransformations$MappingWithDisposeCallbackOption<
    T,
    TResult
  > {
    mappingWithDisposeCallback: (
      value: T
    ) => {
      mappedValue: TResult,
      dispose: () => void
    };
  }
  declare interface KnockoutObservableArrayFunctions<T> {
    map<TResult>(
      mapping: KnockoutTransformations$KnockoutTransformations$Mapping<
        T,
        TResult
      >
    ): KnockoutObservableArray<TResult>;
    map<TResult>(
      mapping: KnockoutTransformations$KnockoutTransformations$MappingOption<
        T,
        TResult
      >
    ): KnockoutObservableArray<TResult>;
    map<TResult>(
      mapping: KnockoutTransformations$KnockoutTransformations$MappingWithDisposeCallbackOption<
        T,
        TResult
      >
    ): KnockoutObservableArray<TResult>;
    filter(predicate: (value: T) => boolean): KnockoutObservableArray<T>;
    sortBy(
      sorter: (value: T, descending: (sorter: any) => any) => any
    ): KnockoutObservableArray<T>;
    indexBy(
      indexer: (value: T) => string
    ): KnockoutObservable<{
      [index: string]: T[]
    }>;
    indexBy(
      indexer: (value: T) => string[]
    ): KnockoutObservable<{
      [index: string]: T[]
    }>;
    indexBy(indexer: (value: T) => any): KnockoutObservable<any>;
    uniqueIndexBy(
      indexer: (value: T) => string
    ): KnockoutObservable<{
      [index: string]: T
    }>;
  }
}
