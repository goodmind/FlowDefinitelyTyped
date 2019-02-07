declare module "bootstrap-validator" {
  declare interface ValidatorOptions {
    delay?: number;
    html?: boolean;
    disable?: boolean;
    focus?: boolean;
    feedback?: any;
    custom?: any;
  }
  declare interface JQuery {
    validator(options?: ValidatorOptions): JQuery;
    validator(command: string): JQuery;
  }
}
