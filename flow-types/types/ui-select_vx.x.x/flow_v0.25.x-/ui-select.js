declare interface select$ISelectConfig {
  appendToBody: boolean;
  resetSearchInput: boolean;
  theme: string;
}
declare module "angular" {
}
declare module "ui-select" {
  import typeof * as angular from "angular";
}
