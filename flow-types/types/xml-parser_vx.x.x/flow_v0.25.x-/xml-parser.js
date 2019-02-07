declare module "xml-parser" {
  declare function parse(xml: string): parse$parse$Document;

  declare export interface parse$Document {
    declaration: parse$Declaration;
    root: parse$Node;
  }

  declare export interface parse$Declaration {
    attributes: parse$Attributes;
  }

  declare export interface parse$Node {
    name: string;
    attributes: parse$Attributes;
    children: parse$Node[];
    content?: string;
  }

  declare export interface parse$Attributes {
    [name: string]: string;
  }
  declare module.exports: typeof parse;
}
