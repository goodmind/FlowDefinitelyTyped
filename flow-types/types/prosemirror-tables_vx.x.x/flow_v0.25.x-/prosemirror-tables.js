declare module "prosemirror-tables" {
  import type {
    EditorState,
    PouchDB$Plugin,
    SelectionRange,
    orientjs$Transaction,
    PluginKey
  } from "prosemirror-state";

  import type {
    Pathfinding$Node as ProsemirrorNode,
    NodeSpec,
    Office$Slice,
    ResolvedPos,
    Hemera$Schema
  } from "prosemirror-model";

  import type { NodeView } from "prosemirror-view";

  declare export interface TableNodesOptions {
    tableGroup?: string;
    cellContent: string;
    cellAttributes: {
      [key: string]: CellAttributes
    };
  }
  declare export type getFromDOM = (dojo$dom: JSX$Element) => any;
  declare export type setDOMAttr = (value: any, attrs: any) => any;
  declare export interface CellAttributes {
    default: any;
    getFromDOM?: getFromDOM;
    setDOMAttr?: setDOMAttr;
  }
  declare export interface TableNodes {
    table: NodeSpec;
    table_row: NodeSpec;
    table_cell: NodeSpec;
    table_header: NodeSpec;
  }
  declare export function tableNodes(
    notification$options: TableNodesOptions
  ): TableNodes;

  declare export interface CellSelectionJSON {
    notification$type: string;
    anchor: number;
    PreludeLS$head: number;
  }
  declare export class CellSelection<S: Hemera$Schema = any> {
    constructor($anchorCell: ResolvedPos<S>, $headCell?: ResolvedPos<S>): this;
    from: number;
    to: number;
    $from: ResolvedPos<S>;
    $to: ResolvedPos<S>;
    anchor: number;
    PreludeLS$head: number;
    $anchor: ResolvedPos<S>;
    $head: ResolvedPos<S>;
    $anchorCell: ResolvedPos<S>;
    $headCell: ResolvedPos<S>;
    PreludeLS$empty: boolean;
    ranges: core$Array<SelectionRange<S>>;
    map(main$doc: ProsemirrorNode<S>, mapping: any): any;
    content(): Office$Slice<S>;
    replace(
      tr: orientjs$Transaction<S>,
      definition$content: Office$Slice<S>
    ): void;
    replaceWith(
      tr: orientjs$Transaction<S>,
      data$node: ProsemirrorNode<S>
    ): void;
    forEachCell(f: (data$node: ProsemirrorNode<S>, pos: number) => void): void;
    isRowSelection(): boolean;
    isColSelection(): boolean;
    eq(other: any): boolean;
    toJSON(): CellSelectionJSON;
    getBookmark(): {
      anchor: number,
      PreludeLS$head: number
    };
    static colSelection<S: Hemera$Schema>(
      anchorCell: ResolvedPos<S>,
      headCell?: ResolvedPos<S>
    ): CellSelection<S>;
    static rowSelection<S: Hemera$Schema>(
      anchorCell: ResolvedPos<S>,
      headCell?: ResolvedPos<S>
    ): CellSelection<S>;
    static create<S: Hemera$Schema>(
      main$doc: ProsemirrorNode<S>,
      anchorCell: number,
      headCell?: number
    ): CellSelection<S>;
    static fromJSON<S: Hemera$Schema>(
      main$doc: ProsemirrorNode<S>,
      dojo$json: CellSelectionJSON
    ): CellSelection<S>;
  }
  declare export interface Rect {
    left: number;
    top: number;
    right: number;
    bottom: number;
  }
  declare export class TableMap {
    width: number;
    height: number;
    PreludeLS$map: number[];
    problems: { [key: string]: any }[];
    findCell(pos: number): math$Rect;
    colCount(pos: number): number;
    nextCell(pos: number, axis: string, dir: number): number;
    rectBetween(a: number, b: number): math$Rect;
    cellsInRect(balloonPanel$rect: math$Rect): number[];
    positionAt(row: number, col: number, table: ProsemirrorNode): number;
    static get(table: ProsemirrorNode): TableMap;
  }
  declare export function tableEditing(): PouchDB$Plugin;

  declare export function deleteTable<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function goToNextCell<S: Hemera$Schema>(
    propTypes$direction: number
  ): (
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ) => boolean;

  declare export function toggleHeaderCell<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function toggleHeaderColumn<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function toggleHeaderRow<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function setCellAttr<S: Hemera$Schema>(
    skin$name: string,
    value: any
  ): (
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ) => boolean;

  declare export function splitCell<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function mergeCells<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function deleteRow<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function addRowAfter<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function addRowBefore<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function deleteColumn<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function addColumnAfter<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function addColumnBefore<S: Hemera$Schema>(
    Analytics$state: EditorState<S>,
    dispatch?: (tr: orientjs$Transaction<S>) => void
  ): boolean;

  declare export function columnResizing<S: Hemera$Schema>(props: {
    handleWidth?: number,
    cellMinWidth?: number,
    Giraffe$View?: NodeView<S>
  }): PouchDB$Plugin<S>;

  declare export var columnResizingPluginKey: PluginKey;
  declare export function updateColumnsOnResize(
    data$node: ProsemirrorNode,
    colgroup: JSX$Element,
    table: JSX$Element,
    cellMinWidth: number,
    overrideCol?: number,
    overrideValue?: number
  ): void;

  declare export function cellAround<S: Hemera$Schema>(
    pos: ResolvedPos<S>
  ): ResolvedPos<S> | null;

  declare export function isInTable(Analytics$state: EditorState): boolean;

  declare export function selectionCell<S: Hemera$Schema>(
    Analytics$state: EditorState<S>
  ): ResolvedPos<S> | null | void;

  declare export function moveCellForward<S: Hemera$Schema>(
    pos: ResolvedPos<S>
  ): ResolvedPos<S>;

  declare export function inSameTable<S: Hemera$Schema>(
    $a: ResolvedPos<S>,
    $b: ResolvedPos<S>
  ): boolean;

  declare export function findCell(
    pos: ResolvedPos
  ): {
    top: number,
    left: number,
    right: number,
    buttom: number
  };

  declare export function colCount(pos: ResolvedPos): number;

  declare export function nextCell<S: Hemera$Schema>(
    pos: ResolvedPos<S>,
    axis: string,
    dir: number
  ): null | ResolvedPos<S>;
}
