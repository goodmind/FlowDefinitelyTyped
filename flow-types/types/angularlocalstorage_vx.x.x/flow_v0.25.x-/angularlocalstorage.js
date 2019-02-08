declare interface localStorage$ILocalStorageService {
  set(key: string, value: any): any;
  get(key: string): any;
  remove(key: string): boolean;
  clearAll(): void;
  bind(
    $scope: ng.IScope,
    key: string,
    opts?: {
      defaultValue?: any,
      storeName?: string
    }
  ): any;
  unbind($scope: ng.IScope, key: string, storeName?: string): void;
}
declare module "angular" {
}
declare module "angularlocalstorage" {
  import typeof * as ng from "angular";
}
