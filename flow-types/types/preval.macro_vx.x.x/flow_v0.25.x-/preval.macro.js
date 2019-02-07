declare module "preval.macro" {
  declare function preval(strings: TemplateStringsArray, ...values: any[]): any;

  declare module.exports: typeof preval;
}
