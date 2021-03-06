declare module "jquery.rateit" {
  declare type RateItMode = "bg" | "font";
  declare interface RateItOptions {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    backingfld?: string;
    readonly?: boolean;
    ispreset?: boolean;
    resetable?: boolean;
    starwidth?: number;
    starheight?: number;
    mode?: RateItMode;
    icon?: string;
  }
  declare interface JQuery {
    rateit(): JQuery;
    rateit(options: RateItOptions): JQuery;
    rateit(method: "value"): number;
    rateit(method: "value", param: number): JQuery;
    rateit(method: "max"): number;
    rateit(method: "max", param: number): JQuery;
    rateit(method: "min"): number;
    rateit(method: "min", param: number): JQuery;
    rateit(method: "readonly"): boolean;
    rateit(method: "readonly", param: boolean): JQuery;
    rateit(method: "ispreset"): boolean;
    rateit(method: "ispreset", param: boolean): JQuery;
    rateit(method: "reset"): JQuery;
    rateit(method: string, param: any): any;
  }
}
