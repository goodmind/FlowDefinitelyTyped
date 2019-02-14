declare module "global" {
  declare interface Array<T> {
    /**
     * The promise of the original server interaction that created this collection.
     */
    $promise: angular.IPromise<T[]>;
    $resolved: boolean;
  }
}
declare module "angular" {
}
declare module "angular-resource" {
}
