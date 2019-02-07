declare module "jquery.customselect" {
  declare interface JQueryCustomSelectOption {
    customClass?: string;
    mapClass?: boolean;
    mapStyle?: boolean;
  }
  declare interface JQuery {
    customSelect(val: JQueryCustomSelectOption): JQuery;
  }
}
