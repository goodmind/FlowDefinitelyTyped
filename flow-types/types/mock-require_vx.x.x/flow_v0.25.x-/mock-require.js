declare module "mock-require" {
  declare type StubFunction = (...params: any[]) => any;
  declare type Stub = { [key: string]: any } | StubFunction;
  declare interface Mock {
    (path: string, mockExport: string | Stub): void;
    stop(path: string): void;
    stopAll(): void;
    reRequire(path: string): any;
  }
  declare var mock: Mock;
  declare module.exports: typeof mock;
}
