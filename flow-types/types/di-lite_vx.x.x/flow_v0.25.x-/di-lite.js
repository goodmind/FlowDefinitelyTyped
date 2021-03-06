declare interface DiLite$DiLiteStatic {
  version: string;
  createContext(): DiLite$CreateContext;
  dependencyExpression(depExp: string): string;
  entry(name: string, ctx: DiLite$CreateContext): any;
  strategy: DiLite$StrategyEnum;
  factory: DiLite$FactoryEnum;
  utils: DiLite$Utils;
}

declare interface DiLite$Dictionary<T> {
  [index: string]: T;
}

declare interface DiLite$CreateContext {
  map: DiLite$Dictionary<any>;
  entry<T>(name: string): T;
  register<T>(name: string, service: T): DiLite$Entry;
  has(name: string): boolean;
  get(name: string): any;
  create<T>(name: string, args: any): T;
  initialize(): void;
  clear(): void;
  inject<T>(name: string, o: T, dependencies: string): T;
  ready<T>(o: Function): T;
  ready<T>(o: any): T;
}

declare interface DiLite$Entry {
  create(newArgs: any): DiLite$Entry;
  object<T>(o: T): DiLite$Entry;
  object<T>(): T;
  strategy<T>(s: Function): DiLite$Entry;
  strategy<T>(): T;
  type<T>(t: T): DiLite$Entry;
  type<T>(): T;
  dependencies<T>(d: T): DiLite$Entry;
  dependencies<T>(): T;
  args<T>(a: T): DiLite$Entry;
  args<T>(): T;
  factory(f: Function): DiLite$Entry;
  factory<T>(): T;
}

declare interface DiLite$StrategyEnum {
  proto<TObject, TType>(
    name: string,
    object: TObject,
    type: TType,
    args: any,
    ctx: DiLite$CreateContext,
    dependencies: any
  ): TObject;
  singleton<TObject, TType>(
    name: string,
    object: TObject,
    type: TType,
    args: any,
    ctx?: DiLite$CreateContext,
    dependencies?: any
  ): TObject;
}

declare interface DiLite$FactoryEnum {
  constructor<T>(type: T, args: any): T;
  func<T>(type: T, args: any): T;
}

declare interface DiLite$Utils {
  invokeStmt(args: any, op: string): string;
}
declare module "di-lite" {
  declare module.exports: typeof di;
}
declare var di: DiLite$DiLite$DiLiteStatic;
