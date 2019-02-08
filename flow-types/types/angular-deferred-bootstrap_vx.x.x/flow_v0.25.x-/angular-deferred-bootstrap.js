declare module "angular" {
  declare interface IDeferredBootstrapperStatic {
    bootstrap(configParam: IConfigParam): ng.IPromise<boolean>;
  }
  declare interface IConfigParam {
    element?: Node;
    module?: string;
    resolve: any;
  }
}
declare module "angular-deferred-bootstrap" {
  declare var deferredBootstrapper: angular.IDeferredBootstrapperStatic;
}
