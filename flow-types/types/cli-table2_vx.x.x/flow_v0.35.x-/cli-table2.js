declare module 'cli-table2' {
        declare type CliTable2$CharName = "top"
| "top-mid"
| "top-left"
| "top-right"
| "bottom"
| "bottom-mid"
| "bottom-left"
| "bottom-right"
| "left"
| "left-mid"
| "mid"
| "mid-mid"
| "right"
| "right-mid"
| "middle";

declare type CliTable2$HorizontalAlignment = "left" | "center" | "right";

declare type CliTable2$VerticalAlignment = "top" | "center" | "bottom";

declare interface CliTable2$TableOptions {
truncate: string,
colWidths: Array<number | null>,
rowHeights: Array<number | null>,
colAligns: CliTable2$HorizontalAlignment[],
rowAligns: CliTable2$VerticalAlignment[],
head: CliTable2$Cell[],
wordWrap: boolean
} 

declare type CliTable2$TableInstanceOptions = {
chars: Record<CliTable2$CharName, string>,
style: {
"padding-left": number,
"padding-right": number,
head: string[],
border: string[],
compact: boolean
}
} & CliTable2$TableOptions


declare type CliTable2$TableConstructorOptions = {
chars?: $Shape<Record<CliTable2$CharName, string>>,
style?: $Shape<$ElementType<CliTable2$TableInstanceOptions, "style">>
} & $Shape<CliTable2$TableOptions>


declare type CliTable2$CellValue = boolean
| number
| string
| null
| void;

declare interface CliTable2$CellOptions {
content: CliTable2$CellValue,
chars?: $Shape<Record<CliTable2$CharName, string>>,
truncate?: string,
colSpan?: number,
rowSpan?: number,
hAlign?: CliTable2$HorizontalAlignment,
vAlign?: CliTable2$VerticalAlignment,
style?: {
"padding-left"?: number,
"padding-right"?: number,
head?: string[],
border?: string[]
}
} 

declare type CliTable2$GenericTable<T> = {
options: CliTable2$TableInstanceOptions,
+width: number
} & Array<T>


declare type CliTable2$Table = CliTable2$HorizontalTable | CliTable2$VerticalTable | CliTable2$CrossTable;

declare type CliTable2$Cell = CliTable2$CellValue | CliTable2$CellOptions;

declare type CliTable2$HorizontalTable = CliTable2$GenericTable<CliTable2$HorizontalTableRow>;

declare type CliTable2$HorizontalTableRow = CliTable2$Cell[];

declare type CliTable2$VerticalTable = CliTable2$GenericTable<CliTable2$VerticalTableRow>;

declare interface CliTable2$VerticalTableRow {
[name: string]: CliTable2$Cell
} 

declare type CliTable2$CrossTable = CliTable2$GenericTable<CliTable2$CrossTableRow>;

declare interface CliTable2$CrossTableRow {
[name: string]: CliTable2$Cell[]
} 
	declare interface CliTable2 {
new (
options?: CliTable2$CliTable2$TableConstructorOptions): CliTable2$CliTable2$Table,
+prototype: CliTable2$CliTable2$Table
} 
	declare var CliTable2: CliTable2;
	declare module.exports: typeof CliTable2

    }
