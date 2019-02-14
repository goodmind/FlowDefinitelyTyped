declare module "rx-angular" {
  declare var npm$namespace$Rx: {
    ScopeScheduler: typeof Rx$ScopeScheduler
  };
  declare interface Rx$IObservable<T> {
    safeApply($scope: ng.IScope, callback: (data: T) => void): Rx$Observable<T>;
  }

  declare export type Rx$ScopeScheduler = {
    constructor(scope: ng.IScope): Rx$ScopeScheduler
  } & IScheduler;

  declare export type Rx$ScopeSchedulerStatic = {
    new($scope: angular$IScope): Rx$ScopeScheduler
  } & SchedulerStatic;

  declare export var Rx$ScopeScheduler: Rx$ScopeSchedulerStatic;
  declare export type rx$angular$IRxScope = {
    $toObservable(property: string): Rx$Observable<any>
  } & ng.IScope;
}
