declare module "@guardian/prosemirror-invisibles" {
  import type { Node } from "prosemirror-model";

  import type { Decoration, DecorationSet } from "prosemirror-view";

  import type { Plugin } from "prosemirror-state";

  declare export type Builder = (
    from: number,
    to: number,
    doc: Node,
    decos: DecorationSet
  ) => DecorationSet;
  declare export interface TextBetweenPosition {
    pos: number;
    text: string;
  }
  declare export default function Plugin(builders: Builder[]): Plugin;

  declare export function hardBreak(
    predicate?: (node: Node) => boolean
  ): Builder;

  declare export function paragraph(
    predicate?: (node: Node) => boolean
  ): Builder;

  declare export function space(predicate?: (char: string) => boolean): Builder;

  declare export function createDeco(pos: number, type: string): Decoration;

  declare export function textBetween(
    from: number,
    to: number,
    doc: Node
  ): TextBetweenPosition[];
}
