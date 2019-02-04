declare module 'clusterize.js' {
        declare class Clusterize  {
constructor(options: Clusterize$Clusterize$Options): this;
destroy(clean?: boolean): void;
refresh(force?: boolean): void;
clear(): void;
getRowsAmount(): number;
getScrollProgress(): number;
update(data?: string[]): void;
append(rows: string[]): void;
prepend(rows: string[]): void
}
	declare interface Clusterize$Options {
scrollId: string,
contentId: string,
rows?: string[],
tag?: string,
rows_in_block?: number,
blocks_in_cluster?: number,
show_no_data_row?: boolean,
no_data_text?: string,
no_data_class?: string,
keep_parity?: boolean,
callbacks?: Clusterize$Callbacks
} 

declare interface Clusterize$Callbacks {
clusterWillChange?: () => void,
clusterChanged?: () => void,
scrollingProgress?: (progress: number) => void
} 
	declare module.exports: typeof Clusterize

    }
