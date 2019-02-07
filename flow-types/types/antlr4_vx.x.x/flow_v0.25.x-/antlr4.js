declare module "antlr4" {
  declare export * from "./Lexer"

  declare export * from "./Parser"

  declare export * from "./Recognizer"

  declare export * from "./ParserRuleContext"

  declare export * from "./IntervalSet"

  declare export * from "./CommonTokenStream"

  declare export * from "./InputStream"

  declare export * from "./Token"

  import type { ParserRuleContext } from "./ParserRuleContext";

  declare export type AntlrRule = ParserRuleContext;
}
