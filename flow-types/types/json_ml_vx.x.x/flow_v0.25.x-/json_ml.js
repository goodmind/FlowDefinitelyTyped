declare module "json_ml" {
  declare export type Node =
    | string
    | [string, "NO PRINT IMPLEMENTED: RestType"];
  declare export function parse(xml: string, trim?: boolean): Node[];

  declare export function stringify(
    object: Node[],
    replacer?: ((node: Cheerio) => any) | null,
    indent?: number
  ): string;
}
