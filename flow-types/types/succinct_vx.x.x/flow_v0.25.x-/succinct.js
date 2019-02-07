declare module "succinct" {
  declare interface JQuerySuccinct$Options {
    size?: number;
    omission?: string;
    ignore?: boolean;
  }
  declare interface JQuery {
    succinct(settings?: JQuerySuccinct$JQuerySuccinct$Options): JQuery;
  }
}
