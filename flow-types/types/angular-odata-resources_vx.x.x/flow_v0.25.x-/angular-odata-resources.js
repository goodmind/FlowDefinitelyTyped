declare module "angular-odata-resources" {
  /**
   * Currently supported options for the $resource factory options argument.
   */
  declare interface OData$IResourceOptions {
    /**
     * If true then the trailing slashes from any calculated URL will be stripped (defaults to true)
     */
    stripTrailingSlashes?: boolean;
    odata?: {
      url?: string,
      method?: string
    };
    isodatav4?: boolean;
  }

  declare interface OData$IResourceService {
    (
      url: string,
      paramDefaults?: any,
      actions?: any,
      options?: OData$IResourceOptions
    ): OData$IResourceClass<OData$IResource<any>>;
    <T, U>(
      url: string,
      paramDefaults?: any,
      actions?: any,
      options?: OData$IResourceOptions
    ): U;
    <T>(
      url: string,
      paramDefaults?: any,
      actions?: any,
      options?: OData$IResourceOptions
    ): OData$IResourceClass<T>;
  }

  declare interface OData$IActionDescriptor {
    url?: string;
    method: string;
    isArray?: boolean;
    params?: any;
    headers?: any;
  }

  declare interface OData$IResourceClass<T> {
    new(dataOrParams?: any): OData$IResource<T>;
    get(): OData$IResource<T>;
    get(params: Object): OData$IResource<T>;
    get(success: Function, error?: Function): OData$IResource<T>;
    get(
      params: Object,
      success: Function,
      error?: Function
    ): OData$IResource<T>;
    get(
      params: Object,
      data: Object,
      success?: Function,
      error?: Function
    ): OData$IResource<T>;
    query(): OData$IResourceArray<T>;
    query(params: Object): OData$IResourceArray<T>;
    query(success: Function, error?: Function): OData$IResourceArray<T>;
    query(
      params: Object,
      success: Function,
      error?: Function
    ): OData$IResourceArray<T>;
    query(
      params: Object,
      data: Object,
      success?: Function,
      error?: Function
    ): OData$IResourceArray<T>;
    save(): OData$IResource<T>;
    save(data: Object): OData$IResource<T>;
    save(success: Function, error?: Function): OData$IResource<T>;
    save(data: Object, success: Function, error?: Function): OData$IResource<T>;
    save(
      params: Object,
      data: Object,
      success?: Function,
      error?: Function
    ): OData$IResource<T>;
    update(): OData$IResource<T>;
    update(data: Object): OData$IResource<T>;
    update(success: Function, error?: Function): OData$IResource<T>;
    update(
      data: Object,
      success: Function,
      error?: Function
    ): OData$IResource<T>;
    update(
      params: Object,
      data: Object,
      success?: Function,
      error?: Function
    ): OData$IResource<T>;
    remove(): OData$IResource<T>;
    remove(params: Object): OData$IResource<T>;
    remove(success: Function, error?: Function): OData$IResource<T>;
    remove(
      params: Object,
      success: Function,
      error?: Function
    ): OData$IResource<T>;
    remove(
      params: Object,
      data: Object,
      success?: Function,
      error?: Function
    ): OData$IResource<T>;
    delete(): OData$IResource<T>;
    delete(params: Object): OData$IResource<T>;
    delete(success: Function, error?: Function): OData$IResource<T>;
    delete(
      params: Object,
      success: Function,
      error?: Function
    ): OData$IResource<T>;
    delete(
      params: Object,
      data: Object,
      success?: Function,
      error?: Function
    ): OData$IResource<T>;
    odata(): OData$OData$Provider<T>;
  }

  declare interface OData$IResource<T> {
    $get(): angular.IPromise<T>;
    $get(
      params?: Object,
      success?: Function,
      error?: Function
    ): angular.IPromise<T>;
    $get(success: Function, error?: Function): angular.IPromise<T>;
    $query(): angular.IPromise<OData$IResourceArray<T>>;
    $query(
      params?: Object,
      success?: Function,
      error?: Function
    ): angular.IPromise<OData$IResourceArray<T>>;
    $query(
      success: Function,
      error?: Function
    ): angular.IPromise<OData$IResourceArray<T>>;
    $save(): angular.IPromise<T>;
    $save(
      params?: Object,
      success?: Function,
      error?: Function
    ): angular.IPromise<T>;
    $save(success: Function, error?: Function): angular.IPromise<T>;
    $update(): angular.IPromise<T>;
    $update(
      params?: Object,
      success?: Function,
      error?: Function
    ): angular.IPromise<T>;
    $update(success: Function, error?: Function): angular.IPromise<T>;
    $remove(): angular.IPromise<T>;
    $remove(
      params?: Object,
      success?: Function,
      error?: Function
    ): angular.IPromise<T>;
    $remove(success: Function, error?: Function): angular.IPromise<T>;
    $delete(): angular.IPromise<T>;
    $delete(
      params?: Object,
      success?: Function,
      error?: Function
    ): angular.IPromise<T>;
    $delete(success: Function, error?: Function): angular.IPromise<T>;

    /**
     * the promise of the original server interaction that created this instance. *
     */
    $promise: angular.IPromise<T>;
    $resolved: boolean;
  }

  /**
   * Really just a regular Array object with $promise and $resolve attached to it
   */
  declare type OData$IResourceArray<T> = {
    /**
     * the promise of the original server interaction that created this collection. *
     */
    $promise: angular.IPromise<OData$IResourceArray<T>>,
    $resolved: boolean
  } & Array<T>;

  /**
   * when creating a resource factory via IModule.factory
   */
  declare interface OData$IResourceServiceFactoryFunction<T> {
    ($resource: OData$OData$IResourceService): OData$IResourceClass<T>;
    <U: OData$IResourceClass<T>>($resource: OData$OData$IResourceService): U;
  }

  declare type OData$IResourceServiceProvider = {
    defaults: OData$IResourceOptions
  } & angular.IServiceProvider;

  declare interface OData$IExecutable {
    execute(noParenthesis?: any): string;
  }

  declare class OData$Global {
    static $inject: string[];
    constructor(
      ODataBinaryOperation: any,
      ODataProvider: any,
      ODataValue: any,
      ODataProperty: any,
      ODataMethodCall: any,
      ODataPredicate: any,
      ODataOrderByStatement: any
    ): this;
    OData$Provider: OData$Provider<any>;
    OData$BinaryOperation: typeof BinaryOperation;
    OData$Value: typeof Value;
    OData$Property: typeof Property;
    Func: typeof MethodCall;
    OData$Predicate: typeof Predicate;
    OrderBy: typeof OrderByStatement;
  }

  declare interface OData$BinaryOperationFactory {
    new(
      propertyOrPredicate: any,
      valueOrOperator?: any,
      value?: any
    ): OData$BinaryOperation;
  }

  declare class OData$BinaryOperation mixins OData$IExecutable {
    constructor(
      propertyOrPredicate: any,
      valueOrOperator?: any,
      value?: any
    ): this;
    execute(noParenthesis?: any): string;
    or(
      propertyOrPredicate: any,
      operatorOrValue?: any,
      value?: any
    ): OData$BinaryOperation;
    and(
      propertyOrPredicate: any,
      operatorOrValue?: any,
      value?: any
    ): OData$BinaryOperation;
  }

  declare interface OData$MethodCallFactory {
    new(methodName: string, ...args: any[]): OData$MethodCall;
  }

  declare class OData$MethodCall mixins OData$IExecutable {
    execute(): string;
    constructor(methodName: string, ...args: any[]): this;
  }

  declare class OData$Operators {
    operators: {
      eq: string[],
      ne: string[],
      gt: string[],
      ge: string[],
      lt: string[],
      le: string[],
      and: string[],
      or: string[],
      not: string[],
      add: string[],
      sub: string[],
      mul: string[],
      div: string[],
      mod: string[]
    };
    convert(from: string): any;
  }

  declare interface OData$OrderByStatementFactory {
    new(propertyName: string, sortOrder?: string): OData$OrderByStatement;
  }

  declare class OData$OrderByStatement mixins OData$IExecutable {
    execute(): string;
    constructor(propertyName: string, sortOrder?: string): this;
  }

  declare interface OData$PredicateFactory {
    new(
      propertyOrValueOrPredicate: any,
      valueOrOperator?: any,
      value?: any
    ): OData$Predicate;
    or(orStatements: any[]): OData$IExecutable;
    create(
      propertyOrPredicate: any,
      operatorOrValue?: any,
      value?: any
    ): OData$IExecutable;
    and(andStatements: any): OData$IExecutable;
  }

  declare class OData$Predicate mixins OData$BinaryOperation {
    constructor(
      propertyOrValueOrPredicate: any,
      valueOrOperator?: any,
      value?: any
    ): this;
    static or(orStatements: any[]): OData$IExecutable;
    static create(
      propertyOrPredicate: any,
      operatorOrValue?: any,
      value?: any
    ): OData$IExecutable;
    static and(andStatements: any): OData$IExecutable;
  }

  declare interface OData$PropertyFactory {
    new(value: string): OData$Property;
  }

  declare class OData$Property mixins OData$IExecutable {
    constructor(value: string): this;
    execute(): string;
  }

  declare interface OData$ProviderFactory {
    new<T>(callback: OData$ProviderCallback<T>): OData$Provider<T>;
  }

  declare interface OData$ProviderCallback<T> {
    (queryString: string, success: () => any, error: () => any): T[];
    (
      queryString: string,
      success: () => any,
      error: () => any,
      isSingleElement?: boolean,
      forceSingleElement?: boolean
    ): T;
  }

  declare interface OData$ICountResult {
    result: number;
    $promise: angular.IPromise<any>;
  }

  declare class OData$Provider<T> {
    constructor(callback: OData$ProviderCallback<T>): this;
    filter(operand1: any, operand2?: any, operand3?: any): OData$Provider<T>;
    orderBy(arg1: string, arg2?: string): OData$Provider<T>;
    transformUrl(transformMethod: (url: string) => string): OData$Provider<T>;
    take(amount: number): OData$Provider<T>;
    skip(amount: number): OData$Provider<T>;
    query(success?: (p: T[]) => void, error?: () => void): T[];
    single(success?: (p: T) => void, error?: () => void): T;
    get(key: any, success?: (p: T) => void, error?: () => void): T;
    expand(...params: string[]): OData$Provider<T>;
    expand(params: string[]): OData$Provider<T>;
    select(...params: string[]): OData$Provider<T>;
    select(params: string[]): OData$Provider<T>;
    count(
      success?: (result: OData$ICountResult) => any,
      error?: () => any
    ): OData$ICountResult;
    withInlineCount(): OData$Provider<T>;
  }

  declare interface OData$ValueFactory {
    new(value: any, type?: string): OData$Value;
  }

  declare class OData$ValueTypes {
    static Boolean: string;
    static Byte: string;
    static DateTime: string;
    static Decimal: string;
    static Double: string;
    static Single: string;
    static Guid: string;
    static Int32: string;
    static String: string;
  }

  declare class OData$Value {
    executeWithUndefinedType(): any;
    executeWithType(): any;
    execute(): string;
    constructor(value: any, type?: string): this;
  }
}
