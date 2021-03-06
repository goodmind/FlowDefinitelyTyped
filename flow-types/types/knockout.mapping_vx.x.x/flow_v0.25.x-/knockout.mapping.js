declare module "global" {
  declare type KnockoutObservableType<T> = $ObjMapi<
    T,
    <P>(
      P
    ) =>
      | KnockoutObservable<KnockoutObservableType<$ElementType<T, P>>>
      | $ElementType<T, P>
  >;
  declare interface KnockoutMappingCreateOptions {
    data: any;
    parent: any;
  }
  declare interface KnockoutMappingUpdateOptions {
    data: any;
    parent: any;
    target: any;
    observable?: KnockoutObservable<any>;
  }
  declare interface KnockoutMappingOptions {
    ignore?: string[];
    include?: string[];
    copy?: string[];
    mappedProperties?: string[];
    deferEvaluation?: boolean;
    create?: (options: KnockoutMappingCreateOptions) => void;
    update?: (options: KnockoutMappingUpdateOptions) => void;
    key?: (data: any) => any;
  }
  declare interface KnockoutMapping {
    isMapped(viewModel: any): boolean;
    fromJS<T>(
      jsObject: T[]
    ): KnockoutObservableArray<KnockoutObservableType<T>>;
    fromJS<T>(
      jsObject: T[],
      targetOrOptions: any
    ): KnockoutObservableArray<KnockoutObservableType<T>>;
    fromJS<T>(
      jsObject: T[],
      inputOptions: any,
      target: any
    ): KnockoutObservableArray<KnockoutObservableType<T>>;
    fromJS<T>(jsObject: T): KnockoutObservableType<T>;
    fromJS<T>(jsObject: T, targetOrOptions: any): KnockoutObservableType<T>;
    fromJS<T>(
      jsObject: T,
      inputOptions: any,
      target: any
    ): KnockoutObservableType<T>;
    fromJSON(jsonString: string): any;
    fromJSON(jsonString: string, targetOrOptions: any): any;
    fromJSON(jsonString: string, inputOptions: any, target: any): any;
    toJS<T>(
      viewModel:
        | KnockoutObservableArray<T>
        | KnockoutObservableType<T>[]
        | KnockoutObservableArray<KnockoutObservableType<T>>
        | T[],
      options?: KnockoutMappingOptions
    ): T[];
    toJS<T>(
      viewModel:
        | KnockoutObservable<T>
        | KnockoutObservableType<T>
        | KnockoutObservable<KnockoutObservableType<T>>,
      options?: KnockoutMappingOptions
    ): T;
    toJS<T>(viewModel: T, options?: KnockoutMappingOptions): T;
    toJSON(rootObject: any, options?: KnockoutMappingOptions): string;
    defaultOptions(): KnockoutMappingOptions;
    resetDefaultOptions(): void;
    getType(x: any): any;
    visitModel(
      rootObject: any,
      callback: Function,
      options?: {
        visitedObjects?: any,
        parentName?: string,
        ignore?: string[],
        copy?: string[],
        include?: string[]
      }
    ): any;
  }
  declare interface KnockoutObservableArrayFunctions<T> {
    mappedCreate(item: T): T;
    mappedRemove(item: T): T[];
    mappedRemove(removeFunction: (item: T) => boolean): T[];
    mappedRemoveAll(items: T[]): T[];
    mappedRemoveAll(): T[];
    mappedDestroy(item: T): void;
    mappedDestroy(destroyFunction: (item: T) => boolean): void;
    mappedDestroyAll(items: T[]): void;
    mappedDestroyAll(): void;
  }
  declare interface KnockoutStatic {
    mapping: KnockoutMapping;
  }
}
declare module "knockout.mapping" {
  declare var self: KnockoutMapping;
  declare export default typeof self;
}
