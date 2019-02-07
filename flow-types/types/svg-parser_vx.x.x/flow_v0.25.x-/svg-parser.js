declare module "svg-parser" {
  declare export interface Node {
    name: string;
    attributes: Record<string, string | number>;
    children: Node[];
    metadata?: string;
  }
  declare export function parse(content: string): Node;
}
