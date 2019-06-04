declare module "difflib" {
  declare export class SequenceMatcher<T> {
    constructor(
      isjunk: (() => boolean) | null,
      left: T,
      right: T,
      autojunk?: boolean
    ): this;
    getOpcodes(): Array<
      [
        "replace" | "delete" | "insert" | "equal",
        number,
        number,
        number,
        number
      ]
    >;
  }
}
