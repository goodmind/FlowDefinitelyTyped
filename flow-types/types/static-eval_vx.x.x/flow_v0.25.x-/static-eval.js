declare module "static-eval" {
  import typeof * as ESTree from "estree";

  /**
   * Evaluates the given ESTree.Expression, with the given named variables in place.
   * @param ast [ESTree.Expression] An esprima expression derived from parse.body[].expression
   * @param vars Named variables, objects or functions which may be referenced in the expression.
   */
  declare function evaluate(
    ast: ESTree.Expression,
    vars: {
      [name: string]: any
    }
  ): any;

  declare module.exports: typeof evaluate;
}
