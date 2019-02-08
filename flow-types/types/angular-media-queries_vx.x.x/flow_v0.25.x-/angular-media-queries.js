declare interface matchmedia$IScreenSize {
  isRetina: boolean;
  is(list: Array<string> | string): boolean;
  on(
    list: Array<string> | string,
    callback: (result: boolean) => void,
    scope?: angular.IScope
  ): boolean;
  onChange(
    scope: angular.IScope,
    list: Array<string> | string,
    callback: (result: boolean) => void
  ): boolean;
  when(
    list: Array<string> | string,
    callback: (result: boolean) => void,
    scope?: angular.IScope
  ): boolean;
}
declare module "angular" {
}
declare module "angular-media-queries" {
  import typeof * as angular from "angular";
}
