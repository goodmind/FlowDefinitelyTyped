declare module "json-to-ast" {
  declare interface parse$Options {
    /**
     * Appends location information.
     * @default true
     */
    loc?: boolean;

    /**
     * Appends source information to node’s location.
     * @default null
     */
    source?: string;
  }

  declare type parse$ValueNode =
    | parse$ObjectNode
    | parse$ArrayNode
    | parse$LiteralNode;

  declare interface parse$Position {
    line: number;
    column: number;
    offset: number;
  }

  declare interface parse$Location {
    start: parse$Position;
    end: parse$Position;
    source: string | null;
  }

  declare interface parse$ASTNode {
    type: string;
    loc?: parse$Location;
  }

  declare type parse$ObjectNode = {
    type: "Object",
    children: parse$PropertyNode[]
  } & parse$ASTNode;

  declare type parse$PropertyNode = {
    type: "Property",
    key: parse$IdentifierNode,
    value: parse$ValueNode
  } & parse$ASTNode;

  declare type parse$IdentifierNode = {
    type: "Identifier",
    value: string,
    raw: string
  } & parse$ASTNode;

  declare type parse$ArrayNode = {
    type: "Array",
    children: parse$ValueNode[]
  } & parse$ASTNode;

  declare type parse$LiteralNode = {
    type: "Literal",
    value: string | number | boolean | null,
    raw: string
  } & parse$ASTNode;

  declare function parse(
    json: string,
    settings?: parse$Options
  ): parse$ValueNode;

  declare export default typeof parse;
}
