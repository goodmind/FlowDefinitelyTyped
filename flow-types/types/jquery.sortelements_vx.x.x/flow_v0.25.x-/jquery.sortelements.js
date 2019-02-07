declare module "jquery.sortelements" {
  declare interface JQuery {
    sortElements(comparator: Function, getSortable?: Function): JQuery;
  }
}
