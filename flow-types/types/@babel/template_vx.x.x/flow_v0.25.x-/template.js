declare module "@babel/template" {
  import type { ParserOptions } from "@babel/parser";

  import type { Expression, File, Program, Statement } from "@babel/types";

  declare export type TemplateBuilderOptions = {
    /**
     * A set of placeholder names to automatically accept. Items in this list do not need to match the given placeholder pattern.
     */
    placeholderWhitelist?: Set<string>,

    /**
     * A pattern to search for when looking for Identifier and StringLiteral nodes that should be considered placeholders. `false` will
     * disable placeholder searching entirely, leaving only the `placeholderWhitelist` value to find placeholders.
     */
    placeholderPattern?: RegExp | false,

    /**
     * Set this to `true` to preserve any comments from the `code` parameter.
     */
    preserveComments?: boolean
  } & ParserOptions;

  declare export interface TemplateBuilder<T> {
    /**
     * Build a new builder, merging the given options with the previous ones.
     */
    (opts: TemplateBuilderOptions): TemplateBuilder<T>;

    /**
     * Building from a string produces an AST builder function by default.
     */
    (
      code: string,
      opts?: TemplateBuilderOptions
    ): (arg?: PublicReplacements) => T;

    /**
     * Building from a template literal produces an AST builder function by default.
     */
    (
      tpl: TemplateStringsArray,
      ...args: any[]
    ): (arg?: PublicReplacements) => T;
    ast: {
      (tpl: string, opts?: TemplateBuilderOptions): T,
      (tpl: TemplateStringsArray, ...args: any[]): T
    };
  }
  declare export type PublicReplacements =
    | {
        [index: string]: any
      }
    | any[];
  declare export var smart: TemplateBuilder<Statement | Statement[]>;
  declare export var statement: TemplateBuilder<Statement>;
  declare export var statements: TemplateBuilder<Statement[]>;
  declare export var expression: TemplateBuilder<Expression>;
  declare export var program: TemplateBuilder<Program>;
  declare type DefaultTemplateBuilder = typeof smart & {
    smart: typeof smart,
    statement: typeof statement,
    statements: typeof statements,
    expression: typeof expression,
    program: typeof program,
    ast: typeof undefined
  };
  declare var templateBuilder: DefaultTemplateBuilder;
  declare export default typeof templateBuilder;
}
