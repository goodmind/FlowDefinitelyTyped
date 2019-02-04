declare module 'cli-table' {
        declare interface TableOptions {
chars: $Shape<Record<("top"
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
| "middle"), string>>,
truncate: string,
colors: boolean,
colWidths: number[],
colAligns: Array<"left" | "middle" | "right">,
style: $Shape<{
"padding-left": number,
"padding-right": number,
head: string[],
border: string[],
compact: boolean
}>,
head: string[]
} 
	declare class Table mixins Array {
constructor(options?: $Shape<TableOptions>): this;
toString(): string;
static version: string
}
	declare module.exports: typeof Table

    }
