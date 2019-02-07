declare module "proxyquire" {
  declare var p: Proxyquire;
  declare module.exports: typeof p;

  declare interface Proxyquire {
    (request: string, stubs: any): any;
    <T>(request: string, stubs: any): T;
    load(request: string, stubs: any): any;
    load<T>(request: string, stubs: any): T;
    noCallThru(): Proxyquire;
    callThru(): Proxyquire;
    noPreserveCache(): Proxyquire;
    preserveCache(): Proxyquire;
  }
}
