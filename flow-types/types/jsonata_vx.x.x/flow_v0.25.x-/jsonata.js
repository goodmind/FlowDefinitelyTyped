declare module "jsonata" {
  declare function jsonata(str: string): jsonata$jsonata$Expression;

  declare interface jsonata$Expression {
    evaluate(input: any, bindings?: any, callback?: () => any): any;
    assign(key: string, func: (...args: any[]) => any): void;
  }
  declare module.exports: typeof jsonata;
}
