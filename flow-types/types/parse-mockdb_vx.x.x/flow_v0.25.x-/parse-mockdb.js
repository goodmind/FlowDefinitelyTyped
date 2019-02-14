declare var npm$namespace$ParseMockDB: {
  mockDB: typeof ParseMockDB$mockDB,
  unMockDB: typeof ParseMockDB$unMockDB,
  cleanUp: typeof ParseMockDB$cleanUp,
  promiseResultSync: typeof ParseMockDB$promiseResultSync,
  registerHook: typeof ParseMockDB$registerHook
};
declare function ParseMockDB$mockDB(): void;

declare function ParseMockDB$unMockDB(): void;

declare function ParseMockDB$cleanUp(): void;

declare function ParseMockDB$promiseResultSync<T>(
  promise: Parse.IPromise<T>
): T;

declare type ParseMockDB$HookType = "beforeSave" | "beforeDelete";

declare function ParseMockDB$registerHook(
  className: string,
  hookType: ParseMockDB$HookType,
  hookFn: (request: Parse.CloudBeforeSaveRequest) => Parse.IPromise<any>
): void;
declare module "parse-mockdb" {
  import typeof * as Parse from "parse";

  declare export default typeof ParseMockDB;
}
