declare module "mdast" {
  import type {
    Parent as UnistParent,
    Literal as UnistLiteral,
    Node
  } from "unist";

  declare export type AlignType = "left" | "right" | "center" | null;
  declare export type ReferenceType = "shortcut" | "collapsed" | "full";
  declare export type Content =
    | TopLevelContent
    | ListContent
    | TableContent
    | RowContent
    | PhrasingContent;
  declare export type TopLevelContent =
    | BlockContent
    | FrontmatterContent
    | DefinitionContent;
  declare export type BlockContent =
    | Paragraph
    | Heading
    | ThematicBreak
    | Blockquote
    | List
    | Table
    | HTML
    | Code;
  declare export type FrontmatterContent = YAML;
  declare export type DefinitionContent = Definition | FootnoteDefinition;
  declare export type ListContent = ListItem;
  declare export type TableContent = TableRow;
  declare export type RowContent = TableCell;
  declare export type PhrasingContent =
    | StaticPhrasingContent
    | Link
    | LinkReference;
  declare export type StaticPhrasingContent =
    | Text
    | Emphasis
    | Strong
    | Delete
    | HTML
    | InlineCode
    | Break
    | Image
    | ImageReference
    | Footnote
    | FootnoteReference;
  declare export type Parent = {
    children: Content[]
  } & UnistParent;

  declare export type Literal = {
    value: string
  } & UnistLiteral;

  declare export type Root = {
    type: "root"
  } & Parent;

  declare export type Paragraph = {
    type: "paragraph",
    children: PhrasingContent[]
  } & Parent;

  declare export type Heading = {
    type: "heading",
    depth: 1 | 2 | 3 | 4 | 5 | 6,
    children: PhrasingContent[]
  } & Parent;

  declare export type ThematicBreak = {
    type: "thematicBreak"
  } & Node;

  declare export type Blockquote = {
    type: "blockquote",
    children: BlockContent[]
  } & Parent;

  declare export type List = {
    type: "list",
    ordered?: boolean,
    start?: number,
    spread?: boolean,
    children: ListContent[]
  } & Parent;

  declare export type ListItem = {
    type: "listItem",
    checked?: boolean,
    spread?: boolean,
    children: BlockContent[]
  } & Parent;

  declare export type Table = {
    type: "table",
    align?: AlignType[],
    children: TableContent[]
  } & Parent;

  declare export type TableRow = {
    type: "tableRow",
    children: RowContent[]
  } & Parent;

  declare export type TableCell = {
    type: "tableCell",
    children: PhrasingContent[]
  } & Parent;

  declare export type HTML = {
    type: "html"
  } & Literal;

  declare export type Code = {
    type: "code",
    lang?: string,
    meta?: string
  } & Literal;

  declare export type YAML = {
    type: "yaml"
  } & Literal;

  declare export type Definition = {
    type: "definition"
  } & Node &
    Association &
    Resource;

  declare export type FootnoteDefinition = {
    type: "footnoteDefinition",
    children: BlockContent[]
  } & Parent &
    Association;

  declare export type Text = {
    type: "text"
  } & Literal;

  declare export type Emphasis = {
    type: "emphasis",
    children: PhrasingContent[]
  } & Parent;

  declare export type Strong = {
    type: "strong",
    children: PhrasingContent[]
  } & Parent;

  declare export type Delete = {
    type: "delete",
    children: PhrasingContent[]
  } & Parent;

  declare export type InlineCode = {
    type: "inlineCode"
  } & Literal;

  declare export type Break = {
    type: "break"
  } & Node;

  declare export type Link = {
    type: "link",
    children: StaticPhrasingContent[]
  } & Parent &
    Resource;

  declare export type Image = {
    type: "image"
  } & Node &
    Resource &
    Alternative;

  declare export type LinkReference = {
    type: "linkReference",
    children: StaticPhrasingContent[]
  } & Parent &
    Reference;

  declare export type ImageReference = {
    type: "imageReference"
  } & Node &
    Reference &
    Alternative;

  declare export type Footnote = {
    type: "footnote",
    children: PhrasingContent[]
  } & Parent;

  declare export type FootnoteReference = {
    type: "footnoteReference"
  } & Node &
    Association;

  declare export interface Resource {
    url: string;
    title?: string;
  }
  declare export interface Association {
    identifier: string;
    label?: string;
  }
  declare export interface Reference {
    referenceType: ReferenceType;
  }
  declare export interface Alternative {
    alt?: string;
  }
}
