declare module "sinon" {
  declare interface SinonThenable {
    resolved: boolean;
    rejected: boolean;
    resolveValue: any;
    rejectValue: any;
    then(
      onFulfill: (resolveValue?: any) => void,
      onReject?: (rejectValue?: any) => void
    ): SinonThenable;
    catch(onReject: (rejectValue?: any) => void): SinonThenable;
    finally(callback: () => void): SinonThenable;
  }
  declare interface SinonStub {
    thenable: SinonThenable;
    returnsPromise(): SinonStub;
    resolves(value?: any): SinonStub;
    rejects(value?: any): SinonStub;
  }
}
declare module "sinon-stub-promise" {
  declare function sinonStubPromise(sinon: sinon.SinonStatic): void;

  declare module.exports: typeof sinonStubPromise;
}
