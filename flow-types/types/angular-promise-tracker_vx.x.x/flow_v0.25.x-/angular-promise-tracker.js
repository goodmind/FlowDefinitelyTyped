declare interface promisetracker$PromiseTrackerOptions {
  activationDelay?: number;
  minDuration?: number;
}

declare interface promisetracker$PromiseTracker {
  active(): boolean;
  tracking(): boolean;
  trackingCount(): number;
  addPromise<T>(promise: angular.IPromise<T>): angular.IDeferred<void>;
  createPromise(): angular.IDeferred<void>;
  cancel(): void;
}

declare interface promisetracker$PromiseTrackerService {
  (
    options?: promisetracker$PromiseTrackerOptions
  ): promisetracker$PromiseTracker;
}
declare module "angular" {
  declare interface IRequestShortcutConfig {
    tracker?:
      | angular.promisetracker.promisetracker$PromiseTracker
      | angular.promisetracker.promisetracker$PromiseTracker[];
  }
}
declare module "angular-promise-tracker" {
  import typeof * as angular from "angular";
}
