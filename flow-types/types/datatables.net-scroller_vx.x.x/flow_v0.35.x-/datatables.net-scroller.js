declare module 'datatables.net-scroller' {
        declare interface DataTables$Settings {
scroller?: boolean | DataTables$ScrollerSettings
} 

declare interface DataTables$ScrollerSettings {
trace?: boolean,
rowHeight?: number | string,
serverWait?: number,
displayBuffer?: number,
boundaryScale?: number,
loadingIndicator?: boolean
} 

declare interface DataTables$Api {
scroller: DataTables$ScrollerMethodsModel
} 

declare interface DataTables$ScrollerMethodsModel {
measure(redraw?: boolean): DataTables$Api,
page(): DataTables$PageInfo,
scroller(): DataTables$ScrollerMethods
} 

declare type DataTables$ScrollerMethods = {
rowToPixels(rowIdx: number, intParse?: boolean, virtual?: boolean): number,
pixelsToRow(pixels: number, intParse?: boolean, virtual?: boolean): number,
scrollToRow(rowIdx: number, animate?: boolean): DataTables$Api
} & DataTables$Api


declare interface DataTables$PageInfo {
start: number,
end: number
} 

declare interface DataTables$RowMethods {

/**
 * Scroll to a row
 */
scrollTo(animate?: boolean): DataTables$Api
} 
    }
