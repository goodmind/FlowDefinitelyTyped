declare module "angular" {
  declare interface IAngularStatic {
    throttle: (
      fn: Function,
      throttle: number,
      options?: {
        leading?: boolean,
        trailing?: boolean
      }
    ) => Function;
  }
}
declare module "angular.throttle" {
  import typeof * as angular from "angular";
}
