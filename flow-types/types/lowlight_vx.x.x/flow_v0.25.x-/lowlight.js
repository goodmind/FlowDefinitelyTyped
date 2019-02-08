declare module "lowlight" {
  declare export {
    highlight,
    highlightAuto,
    registerLanguage
  } from "lowlight/lib/core";
}
declare module "lowlight/lib/core" {
  declare export function highlight(
    language: string,
    value: string,
    options?: lowlight$lowlight$HighlightOptions
  ): lowlight$lowlight$HighlightResult;

  declare export function highlightAuto(
    value: string,
    options?: lowlight$lowlight$HighlightAutoOptions
  ): lowlight$lowlight$HighlightAutoResult;

  declare export function registerLanguage(
    name: string,
    syntax: Function
  ): void;
}
declare interface Unist$Data {
  [index: string]: any;
}

declare interface Unist$Position {
  line: number;
  column: number;
  offset?: number;
}

declare interface Unist$Location {
  start: Unist$Position;
  end: Unist$Position;
  indent?: Array<number>;
}

export interface Unist$Node {
  type: string;
  data?: Unist$Data;
  position?: Unist$Location;
}

export type Unist$Parent = {
  children: Array<Unist$Node>
} & Unist$Node;

export type Unist$Text = {
  value: string,
  type: "text"
} & Unist$Node;

declare interface AST$Properties {
  [index: string]: any;
}

export type AST$Root = {
  type: "root"
} & Unist$Unist$Parent;

export type AST$Element = {
  type: "element",
  tagName: string,
  properties: AST$Properties
} & Unist$Unist$Parent;

export type AST$Doctype = {
  type: "doctype",
  name: string,
  public?: string,
  system?: string
} & Unist$Unist$Node;

export type AST$Comment = {
  type: "comment"
} & Unist$Unist$Text;

export type AST$Text = {
  value: string,
  type: "text"
} & Unist$Node;

declare type lowlight$HastNode =
  | AST$AST$Root
  | AST$AST$Element
  | AST$AST$Doctype
  | AST$AST$Comment
  | AST$AST$Text;

declare interface lowlight$HighlightOptions {
  prefix?: string;
}

declare type lowlight$HighlightAutoOptions = {
  subset?: Array<string>
} & lowlight$HighlightOptions;

declare interface lowlight$HighlightResult {
  relevance: number;
  language: string;
  value: Array<lowlight$HastNode>;
}

declare type lowlight$HighlightAutoResult = {
  secondBest?: lowlight$HighlightAutoResult
} & lowlight$HighlightResult;
