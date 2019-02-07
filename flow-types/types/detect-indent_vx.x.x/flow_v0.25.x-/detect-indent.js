declare module "detect-indent" {
  declare module.exports: typeof detectIndent;

  declare function detectIndent(
    str: string
  ): detectIndent$detectIndent$IndentInfo;

  declare interface detectIndent$IndentInfo {
    amount: number;
    type: "tab" | "space" | null;
    indent: string;
  }
}
