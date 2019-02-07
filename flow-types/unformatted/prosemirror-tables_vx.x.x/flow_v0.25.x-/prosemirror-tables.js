declare module 'prosemirror-tables' {
        import type {
          EditorState,Plugin,SelectionRange,Transaction,PluginKey
        } from 'prosemirror-state';

	import type {
          Node as ProsemirrorNode,NodeSpec,Slice,ResolvedPos,Schema
        } from 'prosemirror-model';

	import type {
          NodeView
        } from 'prosemirror-view';

	declare export interface TableNodesOptions {
tableGroup?: string,
cellContent: string,
cellAttributes: {
[key: string]: CellAttributes
}
} 
	declare export type getFromDOM = (dom: Element) => any;
	declare export type setDOMAttr = (value: any, attrs: any) => any;
	declare export interface CellAttributes {
default: any,
getFromDOM?: getFromDOM,
setDOMAttr?: setDOMAttr
} 
	declare export interface TableNodes {
table: NodeSpec,
table_row: NodeSpec,
table_cell: NodeSpec,
table_header: NodeSpec
} 
	declare export function tableNodes(options: TableNodesOptions): TableNodes

	declare export interface CellSelectionJSON {
type: string,
anchor: number,
head: number
} 
	declare export class CellSelection<S: Schema= any>  {
constructor($anchorCell: ResolvedPos<S>, $headCell?: ResolvedPos<S>): this;
from: number;
to: number;
$from: ResolvedPos<S>;
$to: ResolvedPos<S>;
anchor: number;
head: number;
$anchor: ResolvedPos<S>;
$head: ResolvedPos<S>;
$anchorCell: ResolvedPos<S>;
$headCell: ResolvedPos<S>;
empty: boolean;
ranges: Array<SelectionRange<S>>;
map(doc: ProsemirrorNode<S>, mapping: any): any;
content(): Slice<S>;
replace(tr: Transaction<S>, content: Slice<S>): void;
replaceWith(tr: Transaction<S>, node: ProsemirrorNode<S>): void;
forEachCell(f: (node: ProsemirrorNode<S>, pos: number) => void): void;
isRowSelection(): boolean;
isColSelection(): boolean;
eq(other: any): boolean;
toJSON(): CellSelectionJSON;
getBookmark(): {
anchor: number,
head: number
};
static colSelection<S: Schema= any>(
anchorCell: ResolvedPos<S>,
headCell?: ResolvedPos<S>): CellSelection<S>;
static rowSelection<S: Schema= any>(
anchorCell: ResolvedPos<S>,
headCell?: ResolvedPos<S>): CellSelection<S>;
static create<S: Schema= any>(
doc: ProsemirrorNode<S>,
anchorCell: number,
headCell?: number): CellSelection<S>;
static fromJSON<S: Schema= any>(
doc: ProsemirrorNode<S>,
json: CellSelectionJSON): CellSelection<S>
}
	declare export interface Rect {
left: number,
top: number,
right: number,
bottom: number
} 
	declare export class TableMap  {
width: number;
height: number;
map: number[];
problems: {[key: string]: any}[];
findCell(pos: number): Rect;
colCount(pos: number): number;
nextCell(pos: number, axis: string, dir: number): number;
rectBetween(a: number, b: number): Rect;
cellsInRect(rect: Rect): number[];
positionAt(row: number, col: number, table: ProsemirrorNode): number;
static get(table: ProsemirrorNode): TableMap
}
	declare export function tableEditing(): Plugin

	declare export function deleteTable<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function goToNextCell<S: Schema= any>(
direction: number): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean

	declare export function toggleHeaderCell<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function toggleHeaderColumn<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function toggleHeaderRow<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function setCellAttr<S: Schema= any>(
name: string,
value: any): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean

	declare export function splitCell<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function mergeCells<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function deleteRow<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function addRowAfter<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function addRowBefore<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function deleteColumn<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function addColumnAfter<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function addColumnBefore<S: Schema= any>(
state: EditorState<S>,
dispatch?: (tr: Transaction<S>) => void): boolean

	declare export function columnResizing<S: Schema= any>(
props: {
handleWidth?: number,
cellMinWidth?: number,
View?: NodeView<S>
}): Plugin<S>

	declare export var columnResizingPluginKey: PluginKey;
	declare export function updateColumnsOnResize(
node: ProsemirrorNode,
colgroup: Element,
table: Element,
cellMinWidth: number,
overrideCol?: number,
overrideValue?: number): void

	declare export function cellAround<S: Schema= any>(pos: ResolvedPos<S>): ResolvedPos<S> | null

	declare export function isInTable(state: EditorState): boolean

	declare export function selectionCell<S: Schema= any>(state: EditorState<S>): ResolvedPos<S> | null | void

	declare export function moveCellForward<S: Schema= any>(pos: ResolvedPos<S>): ResolvedPos<S>

	declare export function inSameTable<S: Schema= any>($a: ResolvedPos<S>, $b: ResolvedPos<S>): boolean

	declare export function findCell(pos: ResolvedPos): {
top: number,
left: number,
right: number,
buttom: number
}

	declare export function colCount(pos: ResolvedPos): number

	declare export function nextCell<S: Schema= any>(
pos: ResolvedPos<S>,
axis: string,
dir: number): null | ResolvedPos<S>

    }
