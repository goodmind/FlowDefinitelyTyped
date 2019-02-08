declare interface flow$IFlowFactory {
  create(options?: flowjs.IFlowOptions): flowjs.IFlow;
}
declare module "angular" {
}
declare module "ng-flow" {
  import typeof * as angular from "angular";
}
