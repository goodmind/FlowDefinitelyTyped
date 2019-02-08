declare module "global" {
  declare interface JQuery {
    nextId: JQueryNextId;
  }
}
declare module "jquery-next-id" {
  declare export interface JQueryNextId {
    (prefix?: string): JQuery;
    defaults: {
      prefix: string,
      separator: string
    };
  }
}
